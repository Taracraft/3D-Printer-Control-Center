# 3D-Printer Control Center v4.0.14

Left-inline camera cleanup hotfix.

## Fixed

- Remove the extra standalone live camera card from the managed 3D print dashboard.
- Force the live camera into the left printer-card camera panel.
- Hide leftover standalone `printer-control-center-camera-card` elements.
- Keep the inline camera generic by resolving `camera.*_native_live_camera` dynamically.

## Notes

After installing this release, restart Home Assistant and hard-reload the browser. Then run the service `printer_control_center.install_dashboards` once so the managed dashboard is rewritten without the extra right-side camera card.
