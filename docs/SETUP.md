# Setup guide

## Installation through HACS

1. Open HACS.
2. Open the menu and select **Custom repositories**.
3. Add `https://github.com/Taracraft/3D-Printer-Control-Center`.
4. Select **Integration**.
5. Install **Taracraft 3D-Printer Control Center**.
6. Restart Home Assistant.
7. Open **Settings → Devices & services → Add integration** and search for `Taracraft`.

## Recommended LAN setup

A manual printer IP address is recommended. Automatic discovery remains available as an optional fallback but can be unreliable in routed or broadcast-restricted networks.

### Where do I find the device code?

On the printer, open **Settings → LAN Only**. Depending on printer model and firmware, the page may be below **WLAN** or **Network**. Enable LAN Only mode and read the displayed **IP address** and **access code**. Use the LAN access code, not a six-digit account PIN.
