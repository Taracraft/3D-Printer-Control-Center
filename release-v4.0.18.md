# 3D-Printer Control Center v4.0.18

Native printer-card camera render fix.

## Fixed

- Remove the v4.0.17 body overlay camera workaround.
- Patch the real printer-card `mediaHtml()` render path instead of injecting or overlaying camera content after rendering.
- Use the Home Assistant `picture-entity` live camera renderer inside the existing left printer-card media panel for RTSPS/TCP 322 cameras such as X1/X1C and related Bambu Lab models.
- Keep A1/TCP6000-style cameras on the existing native image path.
- Remove the standalone right-side camera card from the managed dashboard path.
- Prevent the live camera from being displayed as a floating overlay above the dashboard.

## Notes

After installing this release, restart Home Assistant and hard-reload the browser. Run `printer_control_center.install_dashboards` once if an old standalone right-side camera card is still present.
