"""Dry-run slicer worker scaffold for v5 Studio.

This worker intentionally does not execute a real slicer yet. It validates the
slice plan and updates persistent job status so the v5 Studio workflow can be
tested safely before direct slicing/printing is enabled.
"""

from __future__ import annotations

from datetime import datetime, timezone
from typing import Any


def _utcnow() -> str:
    return datetime.now(timezone.utc).isoformat()


def validate_slice_plan(plan: dict[str, Any] | None) -> dict[str, Any]:
    """Validate the minimum shape required for a future slicer run."""
    data = plan if isinstance(plan, dict) else {}
    model = data.get("model") if isinstance(data.get("model"), dict) else {}
    slice_settings = data.get("sliceSettings") if isinstance(data.get("sliceSettings"), dict) else {}

    warnings: list[str] = []
    errors: list[str] = []

    model_name = str(model.get("name") or data.get("modelName") or "").strip()
    model_path = str(model.get("path") or model.get("url") or data.get("path") or "").strip()

    if not model_name:
        warnings.append("Model name is missing.")
    if not model_path:
        warnings.append("Model path is missing. Dry-run can continue, real slicing will need a resolved file path.")

    printer = str(data.get("printer") or model.get("printer") or "").strip()
    nozzle = str(data.get("nozzle") or "").strip()
    process = str(data.get("process") or "").strip()

    if not printer:
        warnings.append("Printer profile is missing.")
    if not nozzle:
        warnings.append("Nozzle profile is missing.")
    if not process:
        warnings.append("Process profile is missing.")

    layer_height = slice_settings.get("layerHeight")
    infill = slice_settings.get("infill")

    try:
        if layer_height is not None and float(layer_height) <= 0:
            errors.append("Layer height must be greater than zero.")
    except (TypeError, ValueError):
        errors.append("Layer height is not numeric.")

    try:
        if infill is not None and not 0 <= float(infill) <= 100:
            errors.append("Infill must be between 0 and 100 percent.")
    except (TypeError, ValueError):
        errors.append("Infill is not numeric.")

    return {
        "ok": not errors,
        "warnings": warnings,
        "errors": errors,
        "modelName": model_name or "3MF model",
        "modelPath": model_path,
        "printer": printer,
        "nozzle": nozzle,
        "process": process,
        "checkedAt": _utcnow(),
    }


def build_dry_run_result(job: dict[str, Any] | None) -> dict[str, Any]:
    """Build a deterministic dry-run result for a Studio slice job."""
    source_job = job if isinstance(job, dict) else {}
    plan = source_job.get("plan") if isinstance(source_job.get("plan"), dict) else {}
    validation = validate_slice_plan(plan)

    status = "dry_run_ready" if validation["ok"] else "dry_run_blocked"
    progress = 10 if validation["ok"] else 0
    stage = "dry-run-validation-ok" if validation["ok"] else "dry-run-validation-blocked"

    message = "Dry-run erfolgreich vorbereitet. Echter Slicer-Lauf ist weiterhin deaktiviert."
    if not validation["ok"]:
        message = "Dry-run blockiert. Slice-Plan muss vor echtem Slicer-Lauf korrigiert werden."

    return {
        "id": source_job.get("id"),
        "status": status,
        "progress": progress,
        "stage": stage,
        "workerStatus": status,
        "workerCommand": "dry_run",
        "workerMessage": message,
        "message": message,
        "validation": validation,
        "updatedAt": _utcnow(),
        "output": {
            "type": "dry_run",
            "slicerWorker": "not_enabled",
            "directPrint": "disabled",
            "estimatedOutput": None,
        },
    }