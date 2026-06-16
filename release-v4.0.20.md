# 3D-Printer Control Center v4.0.20

Stable main-card camera fallback fix.

## Fixed

- Stop the flickering X1/X1C camera in the main printer card.
- Disable the unstable main-card live stream path for RTSPS/TCP 322 cameras.
- Keep A1/TCP6000-style cameras on the existing stream path.
- Use the stable native Home Assistant camera snapshot for RTSPS/TCP 322 cameras such as X1/X1C/P1/H2/P2/X2 in the main printer card.
- Keep the standalone right-side camera card out of the managed dashboard.
- Use snapshot fallback for the large camera view when no stable stream is available.

## Notes

This release prioritizes a stable camera image in the main printer card over unstable live streaming for RTSPS/TCP 322 printers. After installing, restart Home Assistant and hard-reload the browser. Run `printer_control_center.install_dashboards` once if an old standalone right-side camera card is still present.
