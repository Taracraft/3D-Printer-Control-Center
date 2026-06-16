# 3D-Printer Control Center v4.0.15

Hard inline camera replacement hotfix.

## Fixed

- Recursively scan Home Assistant shadow roots to reach the actual printer card inside Lovelace.
- Replace the left printer-card camera panel with the working Home Assistant live camera.
- Remove/hide leftover standalone right-side camera cards.
- Resolve `camera.*_native_live_camera` dynamically.

## Notes

After installing this release, restart Home Assistant, hard-reload the browser and run `printer_control_center.install_dashboards` once.
