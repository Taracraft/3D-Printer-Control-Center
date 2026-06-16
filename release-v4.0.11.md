# 3D-Printer Control Center v4.0.11

Dashboard camera embed hotfix after v4.0.10.

## Fixed

- Add a dedicated auto-detecting live camera card for the managed 3D print dashboard.
- Use Home Assistant's working `picture-entity` live camera rendering for `camera.*_native_live_camera`.
- Keep the card generic for different printer names by resolving the camera entity dynamically.
- Avoid the older internal camera proxy/still preview path for the dashboard live view.

## Notes

After installing this release, recreate or repair the managed dashboards through the integration service `printer_control_center.install_dashboards` if the new camera card does not appear automatically.
