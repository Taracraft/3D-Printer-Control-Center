# 3D-Printer Control Center v4.0.13

Inline printer card camera view hotfix.

## Fixed

- Add the live camera directly into the main printer card / print view.
- Reuse the working Home Assistant live camera rendering inside the printer card camera panel.
- Keep the implementation generic by resolving `camera.*_native_live_camera` dynamically.

## Notes

After installing this release, restart Home Assistant and hard-reload the browser. The separate camera card can stay as an additional overview; the main goal of this release is the inline live camera inside the printer card.
