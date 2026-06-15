"""WebSocket commands for v5 Studio slice jobs and diagnostics."""

from __future__ import annotations

from pathlib import Path
from typing import Any

import voluptuous as vol

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback

from .const import DOMAIN, VERSION
from .studio_jobs import (
    async_clear_studio_jobs,
    async_create_studio_job,
    async_load_studio_jobs,
    async_update_studio_job,
)
from .studio_worker import build_dry_run_result

REGISTERED_KEY = "_v5_studio_ws_registered"


@callback
def async_register_studio_websocket(hass: HomeAssistant) -> None:
    """Register v5 Studio WebSocket commands once."""
    domain_data = hass.data.setdefault(DOMAIN, {})
    if domain_data.get(REGISTERED_KEY):
        return

    websocket_api.async_register_command(hass, ws_studio_jobs_list)
    websocket_api.async_register_command(hass, ws_studio_jobs_create)
    websocket_api.async_register_command(hass, ws_studio_jobs_update)
    websocket_api.async_register_command(hass, ws_studio_jobs_clear)
    websocket_api.async_register_command(hass, ws_studio_selftest)
    websocket_api.async_register_command(hass, ws_studio_worker_dry_run)

    domain_data[REGISTERED_KEY] = True


@websocket_api.websocket_command(
    {
        vol.Required("type"): "printer_control_center/studio_jobs/list",
    }
)
@websocket_api.async_response
async def ws_studio_jobs_list(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    jobs = await async_load_studio_jobs(hass)
    connection.send_result(msg["id"], {"jobs": jobs})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "printer_control_center/studio_jobs/create",
        vol.Optional("serial", default=""): str,
        vol.Optional("plan", default={}): dict,
    }
)
@websocket_api.async_response
async def ws_studio_jobs_create(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    job = await async_create_studio_job(
        hass,
        plan=msg.get("plan") or {},
        serial=msg.get("serial") or "",
    )
    connection.send_result(msg["id"], {"job": job})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "printer_control_center/studio_jobs/update",
        vol.Required("job_id"): str,
        vol.Optional("patch", default={}): dict,
    }
)
@websocket_api.async_response
async def ws_studio_jobs_update(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    job = await async_update_studio_job(
        hass,
        job_id=msg["job_id"],
        patch=msg.get("patch") or {},
    )
    connection.send_result(msg["id"], {"job": job})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "printer_control_center/studio_jobs/clear",
    }
)
@websocket_api.async_response
async def ws_studio_jobs_clear(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    jobs = await async_clear_studio_jobs(hass)
    connection.send_result(msg["id"], {"jobs": jobs})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "printer_control_center/studio/selftest",
    }
)
@websocket_api.async_response
async def ws_studio_selftest(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    jobs = await async_load_studio_jobs(hass)
    store_path = Path(hass.config.path("printer_control_center", "studio_jobs.json"))
    parent_path = store_path.parent

    result = {
        "schema": "printer-control-center.v5.studio-selftest",
        "version": VERSION,
        "domain": DOMAIN,
        "websocketRegistered": bool(hass.data.get(DOMAIN, {}).get(REGISTERED_KEY)),
        "jobsCount": len(jobs),
        "jobsStorePath": str(store_path),
        "jobsStoreExists": store_path.exists(),
        "jobsStoreDirectoryExists": parent_path.exists(),
        "jobsStoreDirectoryWritable": parent_path.exists(),
        "commands": [
            "printer_control_center/studio_jobs/list",
            "printer_control_center/studio_jobs/create",
            "printer_control_center/studio_jobs/update",
            "printer_control_center/studio_jobs/clear",
            "printer_control_center/studio/selftest",
        ],
        "slicerWorker": "not_enabled",
        "directPrint": "disabled",
        "readyForAlpha10Test": True,
    }
    connection.send_result(msg["id"], result)
@websocket_api.websocket_command(
    {
        vol.Required("type"): "printer_control_center/studio_worker/dry_run",
        vol.Required("job_id"): str,
    }
)
@websocket_api.async_response
async def ws_studio_worker_dry_run(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    jobs = await async_load_studio_jobs(hass)
    target_job = None

    for job in jobs:
        if str(job.get("id")) == str(msg["job_id"]):
            target_job = job
            break

    if target_job is None:
        connection.send_result(
            msg["id"],
            {
                "ok": False,
                "error": "job_not_found",
                "job_id": msg["job_id"],
            },
        )
    else:
        patch = build_dry_run_result(target_job)
        updated_job = await async_update_studio_job(
            hass,
            job_id=str(msg["job_id"]),
            patch=patch,
        )
        connection.send_result(
            msg["id"],
            {
                "ok": True,
                "job": updated_job,
                "dryRun": patch,
            },
        )
