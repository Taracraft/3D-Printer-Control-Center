# 3D-Printer Control Center for Home Assistant

[Deutsche Dokumentation](README.de.md) · [Changelog](CHANGELOG.md) · [Setup guide](docs/SETUP.md) · [Migration](docs/MIGRATION.md) · [Privacy and security](docs/PRIVACY.md)

A local-first Home Assistant custom integration for compatible Bambu Lab 3D printers. It provides MQTT telemetry, native camera support where available, responsive Lovelace cards, a local 3MF archive, SD-card file management and a persistent print-planning queue.

## Highlights

- HACS-compatible repository structure
- visible product name: **3D-Printer Control Center**
- internal Home Assistant domain: `printer_control_center`
- LAN-only, Cloud-only and Hybrid setup modes
- manual printer IP with priority over optional automatic discovery
- German and English setup translations
- selectable dashboard language: `Automatic`, `Deutsch`, `English`
- native Home Assistant camera entity where the compatible camera protocol is available
- responsive Lovelace cards including **File manager / gallery** and **3D print queue**
- local 3MF archive with ZIP export and ZIP import preserving folder structure
- SD-card access through printer FTPS where supported
- direct Bambu Studio handoff using unchanged original 3MF files
- no Windows helper, bridge service, external proxy or extra container

## Install through HACS

1. Add this repository to HACS as a custom **Integration** repository.
2. Install **3D-Printer Control Center**.
3. Restart Home Assistant.
4. Add the integration under **Settings → Devices & services**.
5. Add the desired dashboard cards from the card picker.

Repository:

```text
https://github.com/Taracraft/3D-Printer-Control-Center
```

## Back up and restore the gallery

The local archive in **File manager / gallery** provides two buttons:

```text
Export gallery ZIP
Import gallery ZIP
```

The export contains every 3MF model and the complete folder structure. The import asks before overwriting existing files.

## Persistent data

```text
<HA config>/printer_control_center/archive/
<HA config>/printer_control_center/uploads/
<HA config>/printer_control_center/print_queue.json
```

## Planned features

- filament inventory management
- print-cost calculation
- project management with pictures, documentation and additional materials
- MakerWorld import

## Security

Never post LAN access codes, Cloud tokens or unredacted diagnostics in public issues.

## Automatic dashboards

During setup, the integration creates three Lovelace dashboards by default:

- **3D-Drucker**
- **Dateimanager / Galerie**
- **3D-Druck-Warteschlange**

This can be disabled in the setup assistant or changed later in the integration options. The service `printer_control_center.install_dashboards` recreates or repairs the integration-owned dashboards.
