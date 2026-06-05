"""Native Home Assistant camera platform."""
from __future__ import annotations

from homeassistant.components.camera import Camera
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers.device_registry import DeviceInfo
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from .const import CONF_PRINTER_NAME, CONF_SERIAL, DOMAIN
from .coordinator import TaracraftCoordinator


async def async_setup_entry(
    hass: HomeAssistant,
    entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Expose one autarkic native camera per printer."""
    coordinator: TaracraftCoordinator = hass.data[DOMAIN][entry.entry_id]
    async_add_entities([TaracraftNativeCamera(coordinator, entry)])


class TaracraftNativeCamera(Camera):
    """Serve cached frames read directly from printer TCP 6000."""

    _attr_has_entity_name = True
    _attr_name = "Native live camera"
    _attr_icon = "mdi:camera"
    _attr_brand = "Taracraft"
    _attr_model = "Native Bambu-compatible TLS JPEG camera"
    _attr_frame_interval = 0.8
    _attr_should_poll = False

    def __init__(
        self,
        coordinator: TaracraftCoordinator,
        entry: ConfigEntry,
    ) -> None:
        super().__init__()
        self.coordinator = coordinator
        self.entry = entry
        self.serial = str(entry.data[CONF_SERIAL])
        self._attr_unique_id = f"{self.serial}_native_live_camera"

    @property
    def device_info(self) -> DeviceInfo:
        return DeviceInfo(
            identifiers={(DOMAIN, self.serial)},
            name=str(self.entry.data.get(CONF_PRINTER_NAME) or self.serial),
            manufacturer="Taracraft / Bambu-compatible",
            model="3D Printer",
            configuration_url="https://github.com/Taracraft/3D-Printer-Control-Center",
        )

    @property
    def available(self) -> bool:
        return self.coordinator.camera_client is not None

    @property
    def is_streaming(self) -> bool:
        client = self.coordinator.camera_client
        return bool(client and client.connected)

    @property
    def extra_state_attributes(self):
        client = self.coordinator.camera_client
        if client is None:
            return {
                "native_transport": "disabled",
                "native_port": 6000,
            }

        status = client.runtime_status()
        return {
            "native_transport": "tls-jpeg",
            "native_host": status.host,
            "native_port": status.port,
            "native_connected": status.connected,
            "native_frames_received": status.frames_received,
            "native_sequence": status.sequence,
            "native_last_frame_at": status.last_frame_at,
            "native_last_error": status.last_error,
            "external_dependencies": "none",
        }

    async def async_added_to_hass(self) -> None:
        """Forward coordinator changes into the HA state machine."""
        await super().async_added_to_hass()
        self.async_on_remove(
            self.coordinator.async_add_listener(self.async_write_ha_state)
        )

    async def async_camera_image(
        self,
        width: int | None = None,
        height: int | None = None,
    ) -> bytes | None:
        """Return the most recent native JPEG frame."""
        client = self.coordinator.camera_client
        if client is None:
            return None

        frame = client.latest_frame
        if frame is not None:
            return frame

        frame, _sequence = await self.hass.async_add_executor_job(
            client.wait_for_frame,
            None,
            8.0,
        )
        return frame
