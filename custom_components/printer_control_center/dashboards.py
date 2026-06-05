"""Automatic Lovelace dashboards for 3D-Printer Control Center."""
from __future__ import annotations

import logging
from typing import Any

from homeassistant.components import frontend as ha_frontend
from homeassistant.components.lovelace import dashboard as lovelace_dashboard
from homeassistant.components.lovelace.const import (
    CONF_ICON,
    CONF_REQUIRE_ADMIN,
    CONF_SHOW_IN_SIDEBAR,
    CONF_TITLE,
    CONF_URL_PATH,
    LOVELACE_DATA,
    MODE_STORAGE,
    ConfigNotFound,
)
from homeassistant.core import HomeAssistant
from homeassistant.exceptions import HomeAssistantError

_LOGGER = logging.getLogger(__name__)

_DEFAULT_DASHBOARDS: tuple[dict[str, Any], ...] = (
    {
        "url_path": "3d-printer-control-center",
        "title": "3D-Drucker",
        "icon": "mdi:printer-3d",
        "config": {
            "title": "3D-Drucker",
            "views": [
                {
                    "title": "3D-Drucker",
                    "path": "printer",
                    "icon": "mdi:printer-3d",
                    "cards": [
                        {"type": "custom:printer-control-center-card"},
                    ],
                }
            ],
        },
    },
    {
        "url_path": "3d-printer-control-center-gallery",
        "title": "Dateimanager / Galerie",
        "icon": "mdi:folder-multiple-image",
        "config": {
            "title": "Dateimanager / Galerie",
            "views": [
                {
                    "title": "Dateimanager / Galerie",
                    "path": "gallery",
                    "icon": "mdi:folder-multiple-image",
                    "cards": [
                        {"type": "custom:printer-control-center-templates-card"},
                    ],
                }
            ],
        },
    },
    {
        "url_path": "3d-printer-control-center-queue",
        "title": "3D-Druck-Warteschlange",
        "icon": "mdi:format-list-numbered",
        "config": {
            "title": "3D-Druck-Warteschlange",
            "views": [
                {
                    "title": "3D-Druck-Warteschlange",
                    "path": "queue",
                    "icon": "mdi:format-list-numbered",
                    "cards": [
                        {"type": "custom:printer-control-center-queue-card"},
                    ],
                }
            ],
        },
    },
)


def _dashboard_item(spec: dict[str, Any]) -> dict[str, Any]:
    return {
        CONF_URL_PATH: spec["url_path"],
        CONF_TITLE: spec["title"],
        CONF_ICON: spec["icon"],
        CONF_SHOW_IN_SIDEBAR: True,
        CONF_REQUIRE_ADMIN: False,
    }


def _register_panel(hass: HomeAssistant, item: dict[str, Any]) -> None:
    url_path = item[CONF_URL_PATH]
    if ha_frontend.async_panel_exists(hass, url_path):
        return
    ha_frontend.async_register_built_in_panel(
        hass,
        "lovelace",
        frontend_url_path=url_path,
        require_admin=item.get(CONF_REQUIRE_ADMIN, False),
        show_in_sidebar=item.get(CONF_SHOW_IN_SIDEBAR, True),
        sidebar_title=item[CONF_TITLE],
        sidebar_icon=item.get(CONF_ICON, "mdi:view-dashboard"),
        config={"mode": MODE_STORAGE},
    )


async def async_ensure_default_dashboards(
    hass: HomeAssistant,
    *,
    force_config: bool = False,
) -> dict[str, list[str]]:
    """Create the integration-owned default dashboards when they are missing.

    Existing dashboard configurations are preserved unless force_config is requested
    explicitly through the repair service.
    """
    lovelace_data = hass.data.get(LOVELACE_DATA)
    if lovelace_data is None:
        _LOGGER.warning("Lovelace is not ready; default dashboards were not created")
        return {"created": [], "existing": [], "updated": []}

    collection = lovelace_dashboard.DashboardsCollection(hass)
    await collection.async_load()
    items = list(collection.async_items())
    by_path = {str(item.get(CONF_URL_PATH, "")): item for item in items}

    result: dict[str, list[str]] = {"created": [], "existing": [], "updated": []}

    for spec in _DEFAULT_DASHBOARDS:
        url_path = spec["url_path"]
        item = by_path.get(url_path)
        created = False

        if item is None:
            item = await collection.async_create_item(_dashboard_item(spec))
            by_path[url_path] = item
            created = True
            result["created"].append(url_path)
            _LOGGER.info("Created default dashboard: %s", url_path)
        else:
            result["existing"].append(url_path)

        storage_dashboard = lovelace_data.dashboards.get(url_path)
        if storage_dashboard is None:
            storage_dashboard = lovelace_dashboard.LovelaceStorage(hass, item)
            lovelace_data.dashboards[url_path] = storage_dashboard

        _register_panel(hass, item)

        config_missing = False
        try:
            await storage_dashboard.async_load(False)
        except ConfigNotFound:
            config_missing = True
        except HomeAssistantError:
            config_missing = True

        if created or config_missing or force_config:
            await storage_dashboard.async_save(spec["config"])
            if not created:
                result["updated"].append(url_path)
            _LOGGER.info("Saved default dashboard config: %s", url_path)

    return result
