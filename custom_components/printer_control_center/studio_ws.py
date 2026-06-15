"""WebSocket commands for v5 Studio slice jobs."""

from __future__ import annotations

from typing import Any

import voluptuous as vol

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback

from .const import DOMAIN
from .studio_jobs import (
    async_clear_studio_jobs,
    async_create_studio_job,
    async_load_studio_jobs,
    async_update_studio_job,
)

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