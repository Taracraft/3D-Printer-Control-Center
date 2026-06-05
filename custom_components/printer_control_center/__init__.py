"""3D-Printer Control Center."""
from __future__ import annotations

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import (
    CoreState,
    EVENT_HOMEASSISTANT_STARTED,
    HomeAssistant,
    ServiceCall,
)

from homeassistant.helpers import config_validation as cv
from homeassistant.helpers.typing import ConfigType

from .const import DOMAIN, PLATFORMS, SERVICE_SCAN_NETWORK
from .coordinator import PrinterControlCenterCoordinator
from .frontend import async_register_frontend
from .http_api import async_register_http_views
from .websocket_api import async_register_websocket_commands

CONFIG_SCHEMA = cv.config_entry_only_config_schema(DOMAIN)

_DATA_SERVICE_REGISTERED = "_service_registered"


async def async_setup(hass: HomeAssistant, config: ConfigType) -> bool:
    """Set up component-level resources exactly once."""
    hass.data.setdefault(DOMAIN, {})
    await async_register_http_views(hass)
    async_register_websocket_commands(hass)

    async def _setup_frontend(_event=None) -> None:
        await async_register_frontend(hass)

    if hass.state == CoreState.running:
        await _setup_frontend()
    else:
        hass.bus.async_listen_once(EVENT_HOMEASSISTANT_STARTED, _setup_frontend)

    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up one printer entry."""
    await async_register_frontend(hass)
    coordinator = PrinterControlCenterCoordinator(hass, entry)
    await coordinator.async_start()

    hass.data.setdefault(DOMAIN, {})[entry.entry_id] = coordinator
    entry.async_on_unload(entry.add_update_listener(_async_reload_entry))

    if not hass.data[DOMAIN].get(_DATA_SERVICE_REGISTERED):
        async def async_scan_network(call: ServiceCall) -> None:
            for current in list(hass.data.get(DOMAIN, {}).values()):
                if isinstance(current, PrinterControlCenterCoordinator):
                    await current.async_scan_and_reload()

        hass.services.async_register(
            DOMAIN,
            SERVICE_SCAN_NETWORK,
            async_scan_network,
        )
        hass.data[DOMAIN][_DATA_SERVICE_REGISTERED] = True

    await hass.config_entries.async_forward_entry_setups(entry, PLATFORMS)
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    unloaded = await hass.config_entries.async_unload_platforms(entry, PLATFORMS)
    coordinator: PrinterControlCenterCoordinator = hass.data[DOMAIN].pop(entry.entry_id)
    await coordinator.async_stop()
    return unloaded


async def _async_reload_entry(hass: HomeAssistant, entry: ConfigEntry) -> None:
    await hass.config_entries.async_reload(entry.entry_id)
