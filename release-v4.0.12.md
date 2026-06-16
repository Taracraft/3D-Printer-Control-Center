# 3D-Printer Control Center v4.0.12

Dashboard camera card loader hotfix.

## Fixed

- Fix the live camera dashboard card loader introduced in v4.0.11.
- Use Home Assistant `loadCardHelpers()` and `createCardElement()` so the native `picture-entity` live camera card is loaded reliably.
- Remove the false fallback message `HA Picture-Entity-Karte ist noch nicht geladen` when the camera entity and stream are already available.

## Notes

After installing this release, restart Home Assistant and hard-reload the browser. If the managed dashboard still shows the old card, run the service `printer_control_center.install_dashboards`.
