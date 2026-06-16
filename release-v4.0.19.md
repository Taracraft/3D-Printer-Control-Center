# 3D-Printer Control Center v4.0.19

Stable printer-card camera slot fix.

## Fixed

- Remove the previous overlay and injection camera workarounds.
- Patch the real printer-card media render path instead of placing a floating overlay above the dashboard.
- Add a persistent inline camera element that reuses one Home Assistant `picture-entity` live camera instance instead of recreating the stream on every printer-card render.
- Add a render guard so camera-only Home Assistant state updates do not force a full printer-card redraw.
- Use the Home Assistant `camera.*_native_live_camera` entity for X1/X1C/P1/H2/P2/X2-style RTSPS/TCP 322 cameras.
- Keep A1/TCP6000-style cameras on the existing native image path.
- Replace the broken popout window with an internal large camera modal using the same stable inline camera renderer.
- Keep the standalone right-side camera card out of the managed dashboard.

## Notes

After installing this release, restart Home Assistant and hard-reload the browser. Run `printer_control_center.install_dashboards` once if an old standalone right-side camera card is still present.
