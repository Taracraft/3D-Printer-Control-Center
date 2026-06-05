# Taracraft 3D-Printer Control Center for Home Assistant

[Deutsche Dokumentation](README.de.md) · [Changelog](CHANGELOG.md) · [Setup guide](docs/SETUP.md) · [Known issues](docs/KNOWN_ISSUES.md) · [Privacy and security](docs/PRIVACY.md)

A local-first Home Assistant custom integration for Bambu Lab 3D printers. It provides MQTT telemetry, native camera support where available, responsive Lovelace cards, a local 3MF archive, SD-card file management and a persistent print-planning queue.

## Highlights

- HACS-compatible repository structure
- LAN-only, Cloud-only and Hybrid setup modes
- manual printer IP address with priority over optional automatic discovery
- German and English setup translations
- dashboard language selection: `Automatic`, `Deutsch`, `English`
- model-neutral setup using printer IP address, serial number and LAN access code
- native Home Assistant camera entity where the printer exposes the compatible camera protocol
- responsive Lovelace cards including **File manager / gallery** and **3D print queue**
- local 3MF archive below the active Home Assistant configuration directory
- SD-card access through printer FTPS where supported
- direct Bambu Studio handoff using unchanged original 3MF files
- no Windows helper, bridge service, external proxy or extra container
- no automatic printer firmware updates

## Compatibility

Version `1.0.0` was practically tested with a Bambu Lab A1 environment. Other Bambu Lab printers can be configured with a manual IP address, serial number and LAN access code. Feature availability depends on the protocols exposed by the printer firmware.

## Install through HACS

Until the repository is available in the default HACS catalog:

1. Open HACS.
2. Open the menu and choose **Custom repositories**.
3. Add `https://github.com/Taracraft/3D-Printer-Control-Center`.
4. Select **Integration**.
5. Install **Taracraft 3D-Printer Control Center**.
6. Restart Home Assistant.
7. Add the integration under **Settings → Devices & services**.

## LAN setup and device code

A manual printer IP address is recommended. Automatic discovery remains available as an optional fallback.

To find the LAN access code, open **Settings → LAN Only** on the printer. Depending on printer model and firmware, the page may be below **WLAN** or **Network**. Enable LAN Only mode and use the displayed IP address and access code. Do not use a six-digit account PIN.

## Language selection

During setup choose `Automatic / Automatisch (Home Assistant)`, `Deutsch` or `English`. The choice can later be changed in the integration options.

## Persistent data

```text
<HA config>/taracraft_3d_printer/archive/
<HA config>/taracraft_3d_printer/uploads/
<HA config>/taracraft_3d_printer/print_queue.json
```

## Planned features

- filament inventory management
- print-cost calculation
- project management with pictures, documentation and additional materials
- MakerWorld import

## Security notes

Never post LAN access codes, Cloud tokens or unredacted diagnostics in public issues. Bambu Studio intentionally displays an origin warning for self-hosted download URLs; the integration does not bypass that security check.

## Support

Use the [GitHub issue tracker](https://github.com/Taracraft/3D-Printer-Control-Center/issues) and remove credentials and personal data before posting logs.
