# 3D-Printer Control Center v4.0.17

Model-aware stable left camera overlay hotfix.

## Fixed

- Replace unstable inline camera replacement with a stable left camera overlay.
- Remove competing runtime camera patches from v4.0.13, v4.0.14, v4.0.15 and the earlier v4.0.16 attempt.
- Keep A1-style printers on the existing native camera rendering path.
- Use the Home Assistant `camera.*_native_live_camera` entity for non-A1 Bambu Lab printers such as X1/P1 series.
- Keep one Home Assistant `picture-entity` live camera instance alive instead of recreating the stream repeatedly.
- Position the live camera visually over the left printer-card camera area without destroying the stream during printer-card re-renders.
- Hide leftover standalone right-side camera cards.

## Notes

After installing this release, restart Home Assistant and hard-reload the browser. Run `printer_control_center.install_dashboards` only if an old standalone right-side camera card reappears.
