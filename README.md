# 3D-Printer Control Center for Home Assistant

<p align="center"><img src="brand/logo.png" alt="3D-Printer Control Center" width="180"></p>

[Deutsche Dokumentation](README.de.md) · [Changelog](CHANGELOG.md) · [Setup guide](docs/SETUP.md) · [Migration](docs/MIGRATION.md) · [Privacy and security](docs/PRIVACY.md)

A local-first Home Assistant custom integration for compatible Bambu Lab 3D printers. It provides MQTT telemetry, native camera support where available, responsive Lovelace cards, a local 3MF archive, SD-card file management and a persistent print-planning queue.

<img width="1600" height="974" alt="WhatsApp Image 2026-06-05 at 12 10 38" src="https://github.com/user-attachments/assets/6cbc227a-b9b3-4595-b3ff-d8902ba98c61" />
<img width="805" height="432" alt="WhatsApp Image 2026-06-05 at 12 10 38 (6)" src="https://github.com/user-attachments/assets/e0f3805d-ca1e-434e-b18e-a4ffd5e74ec5" />
<img width="816" height="725" alt="WhatsApp Image 2026-06-05 at 12 10 38 (5)" src="https://github.com/user-attachments/assets/5df16605-0653-45a1-b9ac-c7e23f3ed144" />
<img width="1206" height="912" alt="WhatsApp Image 2026-06-05 at 12 10 38 (4)" src="https://github.com/user-attachments/assets/e6a12617-d601-4b03-b83b-642e7797c93c" />
<img width="1247" height="820" alt="WhatsApp Image 2026-06-05 at 12 10 38 (3)" src="https://github.com/user-attachments/assets/24dcb4d1-f24c-4db8-a7db-08f11e7d6b4e" />
<img width="794" height="556" alt="WhatsApp Image 2026-06-05 at 12 10 38 (2)" src="https://github.com/user-attachments/assets/219deed4-f592-4b52-ae89-af2d35beeb72" />
<img width="1307" height="920" alt="WhatsApp Image 2026-06-05 at 12 10 38 (1)" src="https://github.com/user-attachments/assets/4d66af97-3562-4f6e-a844-bcf939d327d1" />

## Highlights

- HACS-compatible repository structure
- visible product name: **3D-Printer Control Center**
- internal Home Assistant domain: `printer_control_center`
- LAN-only, Cloud-only and Hybrid setup modes
- manual printer IP with priority over optional automatic discovery
- German and English setup translations
- selectable dashboard language: `Automatic`, `Deutsch`, `English`
- native Home Assistant camera entity where the compatible camera protocol is available
- responsive Lovelace cards including **3D printer file manager/gallery** and an integrated **3D print queue**
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

## Managed dashboards

The integration creates two Lovelace dashboards by default:

- **3D print** with the printer card on the left and the queue on the right
- **3D printer file manager/gallery** as a full-width view

This can be disabled in the setup assistant and changed later in the integration options. The `printer_control_center.install_dashboards` service recreates or repairs the integration dashboards.

Gallery ZIP imports and normal 3MF uploads continue as a compact expandable browser background task while switching dashboards. The task shows progress, transfer speed, extraction status and verification. After a full browser reload, an existing upload fragment can be resumed by selecting the same local file again. Stale fragments are cleaned automatically.
