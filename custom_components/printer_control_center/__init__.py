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

from .const import (
    CONF_AUTO_CREATE_DASHBOARDS,
    DOMAIN,
    PLATFORMS,
    SERVICE_INSTALL_DASHBOARDS,
    SERVICE_SCAN_NETWORK,
)
from .coordinator import PrinterControlCenterCoordinator
from .dashboards import async_ensure_default_dashboards
from .frontend import async_register_frontend
from .http_api import async_register_http_views
from .studio_ws import async_register_studio_websocket
from .websocket_api import async_register_websocket_commands

CONFIG_SCHEMA = cv.config_entry_only_config_schema(DOMAIN)
_DATA_SERVICE_REGISTERED = "_service_registered"


async def async_setup(hass: HomeAssistant, config: ConfigType) -> bool:
    """Set up component-level resources exactly once."""
    hass.data.setdefault(DOMAIN, {})

    await async_register_http_views(hass)
    async_register_websocket_commands(hass)

    if not hass.services.has_service(DOMAIN, SERVICE_INSTALL_DASHBOARDS):

    await pcc_async_register_frontend_static_path(hass)
        async def async_install_dashboards(_call: ServiceCall) -> None:
            await async_ensure_default_dashboards(hass, force_config=True)

        hass.services.async_register(
            DOMAIN,
            SERVICE_INSTALL_DASHBOARDS,
            async_install_dashboards,
        )

    async def _setup_frontend(_event=None) -> None:
        await async_register_frontend(hass)

    if hass.state == CoreState.running:
        await _setup_frontend()
    else:
        hass.bus.async_listen_once(EVENT_HOMEASSISTANT_STARTED, _setup_frontend)

    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up one printer entry."""
    async_register_studio_websocket(hass)
    await async_register_frontend(hass)

    current_config = {**entry.data, **entry.options}
    if current_config.get(CONF_AUTO_CREATE_DASHBOARDS, True):
    await pcc_async_register_frontend_static_path(hass)
        await async_ensure_default_dashboards(hass, force_config=True)

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
    """Unload one printer entry."""
    unloaded = await hass.config_entries.async_unload_platforms(entry, PLATFORMS)

    coordinator: PrinterControlCenterCoordinator = hass.data[DOMAIN].pop(entry.entry_id)
    await coordinator.async_stop()

    return unloaded


async def _async_reload_entry(hass: HomeAssistant, entry: ConfigEntry) -> None:
    """Reload one config entry."""
    await hass.config_entries.async_reload(entry.entry_id)

async def pcc_async_register_frontend_static_path(hass):
    """Register PCC frontend JS static path.

    This keeps /printer_control_center/printer-control-center-cards.js
    reachable for Lovelace resources.
    """
    from pathlib import Path

    url_path = "/printer_control_center/printer-control-center-cards.js"
    file_path = Path(__file__).parent / "frontend" / "printer-control-center-cards.js"

    logger = globals().get("_LOGGER")

    if not file_path.is_file():
        if logger:
            logger.error("PCC frontend file missing: %s", file_path)
        return

    try:
        from homeassistant.components.http import StaticPathConfig

        await hass.http.async_register_static_paths(
            [StaticPathConfig(url_path, str(file_path), False)]
        )
        if logger:
            logger.debug("PCC frontend static path registered: %s -> %s", url_path, file_path)
        return
    except Exception as err:
        if logger:
            logger.debug("PCC async static path registration fallback: %s", err)

    try:
        hass.http.register_static_path(url_path, str(file_path), False)
        if logger:
            logger.debug("PCC frontend static path registered via legacy API: %s -> %s", url_path, file_path)
    except Exception as err:
        text = str(err).lower()
        if "already" in text or "duplicate" in text or "exists" in text:
            if logger:
                logger.debug("PCC frontend static path was already registered: %s", url_path)
            return
        if logger:
            logger.error("PCC frontend static path registration failed: %s", err)
