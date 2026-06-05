"""Data model and telemetry helpers."""
from __future__ import annotations

from copy import deepcopy
from dataclasses import dataclass, field
from typing import Any

from .const import (
    AMS_NONE,
    AMS_LITE,
    AMS_ORIGINAL,
    AMS_2_PRO,
    AMS_HT,
    AMS_BMCU_370,
    AMS_4_SLOT_COMPATIBLE,
)


def print_data(data: dict[str, Any]) -> dict[str, Any]:
    candidate = data.get("print")
    return candidate if isinstance(candidate, dict) else data


def deep_merge(target: dict[str, Any], update: dict[str, Any]) -> dict[str, Any]:
    """Recursively merge partial MQTT payloads without losing prior telemetry."""
    for key, value in update.items():
        if isinstance(value, dict) and isinstance(target.get(key), dict):
            deep_merge(target[key], value)
        else:
            target[key] = deepcopy(value)
    return target


def safe_state(value: Any, default: str = "unknown", limit: int = 240) -> str:
    """Convert MQTT values to a valid Home Assistant state string."""
    if value is None:
        return default
    if isinstance(value, (dict, list, tuple, set)):
        return default
    text = str(value)
    return text[:limit] if text else default


def detect_ams_type(data: dict[str, Any]) -> tuple[str, str]:
    """Best-effort AMS type detection with manual override support."""
    p = print_data(data)
    ams = p.get("ams")
    # Only inspect the actual AMS subtree.  Printer OTA payloads may contain
    # a generic firmware bundle label such as "AMS/AMS 2 Pro/AMS HT".  Using
    # the complete printer payload caused false AMS-HT detections for BMCU
    # hardware.
    raw = repr(ams).lower()

    if "bmcu" in raw or "bcmu" in raw:
        return AMS_BMCU_370, "high"
    if "ams ht" in raw or "ams_ht" in raw:
        return AMS_HT, "high"
    if "ams 2 pro" in raw or "ams2" in raw or "ams_2_pro" in raw:
        return AMS_2_PRO, "high"
    if "ams lite" in raw or "ams_lite" in raw:
        return AMS_LITE, "high"

    units: list[Any] = []
    if isinstance(ams, dict):
        maybe_units = ams.get("ams")
        if isinstance(maybe_units, list):
            units = maybe_units
    elif isinstance(ams, list):
        units = ams

    if not units:
        return AMS_NONE, "medium"

    tray_count = 0
    for unit in units:
        if isinstance(unit, dict) and isinstance(unit.get("tray"), list):
            tray_count += len(unit["tray"])

    if tray_count == 4:
        return AMS_4_SLOT_COMPATIBLE, "high"

    return AMS_ORIGINAL, "low"


def normalize_color(value: Any, default: str = "#4a5568") -> str:
    """Normalize AMS tray color values to #RRGGBB."""
    if value is None:
        return default

    if isinstance(value, dict):
        for key in ("hex", "rgb", "rgba", "color", "tray_color"):
            if key in value:
                return normalize_color(value[key], default)
        return default

    if isinstance(value, (list, tuple)):
        if value and isinstance(value[0], str):
            return normalize_color(value[0], default)
        if len(value) >= 3:
            try:
                return "#{:02X}{:02X}{:02X}".format(
                    max(0, min(255, int(value[0]))),
                    max(0, min(255, int(value[1]))),
                    max(0, min(255, int(value[2]))),
                )
            except (TypeError, ValueError):
                return default

    text = str(value).strip().replace("#", "")
    if text.lower().startswith("0x"):
        text = text[2:]

    # Bambu payloads frequently use RRGGBBAA. Alpha is ignored for the UI.
    if len(text) >= 6 and all(char in "0123456789abcdefABCDEF" for char in text[:6]):
        return f"#{text[:6].upper()}"

    return default


def normalize_tray(raw: dict[str, Any]) -> dict[str, Any]:
    """Add stable UI fields while preserving raw MQTT attributes."""
    tray = dict(raw or {})

    material = (
        tray.get("normalized_material")
        or tray.get("tray_type")
        or tray.get("filament_type")
        or tray.get("material")
        or tray.get("type")
        or tray.get("tray_info_idx")
        or ""
    )

    brand = (
        tray.get("normalized_brand")
        or tray.get("tray_sub_brands")
        or tray.get("sub_brand")
        or tray.get("brand")
        or tray.get("name")
        or ""
    )

    remaining = (
        tray.get("remain")
        if tray.get("remain") not in (None, "")
        else tray.get("remaining")
    )

    raw_color = (
        tray.get("tray_color")
        or tray.get("color")
        or tray.get("rgba")
        or tray.get("rgb")
        or tray.get("tray_color_rgb")
        or tray.get("cols")
    )

    meaningful = any(
        tray.get(key) not in (None, "", "0", 0, "empty", "unknown")
        for key in (
            "tray_type",
            "filament_type",
            "material",
            "tray_info_idx",
            "tray_color",
            "color",
            "tag_uid",
            "tray_sub_brands",
            "brand",
        )
    )

    tray["normalized_material"] = safe_state(material, default="loaded")
    tray["normalized_brand"] = safe_state(brand, default="")
    tray["normalized_color"] = normalize_color(raw_color)
    tray["normalized_remaining"] = remaining
    tray["normalized_loaded"] = bool(meaningful)

    return tray


@dataclass
class PrinterSnapshot:
    online: bool = False
    transport: str = "disconnected"
    telemetry: dict[str, Any] = field(default_factory=dict)
    detected_ams_type: str = AMS_NONE
    detection_confidence: str = "unknown"

    def update(self, telemetry: dict[str, Any], transport: str) -> None:
        deep_merge(self.telemetry, telemetry)
        self.transport = transport
        self.online = True
        self.detected_ams_type, self.detection_confidence = detect_ams_type(self.telemetry)

    @property
    def print(self) -> dict[str, Any]:
        return print_data(self.telemetry)

    def value(self, *keys: str, default: Any = None) -> Any:
        for key in keys:
            if key in self.print:
                return self.print.get(key)
            if key in self.telemetry:
                return self.telemetry.get(key)
        return default

    def firmware_state(self) -> str:
        direct = self.value("upgrade_display_state", default=None)
        if direct not in (None, ""):
            return safe_state(direct)

        raw = self.value("upgrade_state", default=None)
        if isinstance(raw, dict):
            return safe_state(
                raw.get("status")
                or raw.get("message")
                or raw.get("module")
                or "unknown"
            )
        return safe_state(raw)

    def firmware_attributes(self) -> dict[str, Any]:
        raw = self.value("upgrade_state", default={})
        return raw if isinstance(raw, dict) else {}

    def ams_slots(self) -> list[dict[str, Any]]:
        """Return four deterministic AMS/BMCU tray records ordered by slot id."""
        root = self.print.get("ams")
        by_slot: dict[int, dict[str, Any]] = {}

        units: list[Any] = []
        if isinstance(root, dict) and isinstance(root.get("ams"), list):
            units = root["ams"]
        elif isinstance(root, list):
            units = root

        for unit in units:
            if not isinstance(unit, dict):
                continue
            trays = unit.get("tray")
            if not isinstance(trays, list):
                continue

            for tray in trays:
                if not isinstance(tray, dict):
                    continue
                raw_id = tray.get("id", tray.get("tray_id"))
                try:
                    slot = int(raw_id)
                except (TypeError, ValueError):
                    continue
                if 0 <= slot <= 3:
                    by_slot[slot] = tray

        # Fallback for non-standard BMCU payloads.
        if not by_slot and root is not None:
            def visit(value: Any) -> None:
                if isinstance(value, list):
                    for item in value:
                        visit(item)
                    return
                if not isinstance(value, dict):
                    return

                raw_id = value.get("id", value.get("tray_id"))
                if raw_id is not None and any(
                    key in value
                    for key in (
                        "tray_type",
                        "tray_info_idx",
                        "tray_color",
                        "cols",
                        "remain",
                        "tag_uid",
                    )
                ):
                    try:
                        slot = int(raw_id)
                    except (TypeError, ValueError):
                        slot = -1
                    if 0 <= slot <= 3:
                        by_slot.setdefault(slot, value)

                for item in value.values():
                    visit(item)

            visit(root)

        return [by_slot.get(slot, {"id": str(slot)}) for slot in range(4)]

    def external_spool(self) -> dict[str, Any]:
        value = self.print.get("vt_tray")
        return value if isinstance(value, dict) else {}
