# 3D-Printer Control Center v4.0.16

Stable inline camera renderer hotfix.

## Fixed

- Remove competing inline camera runtime patches from v4.0.13, v4.0.14 and v4.0.15.
- Keep one stable inline live camera renderer for the main printer card.
- Create the Home Assistant `picture-entity` live camera only once and update its `hass` reference instead of recreating it repeatedly.
- Ignore MutationObserver updates inside the camera host to prevent flickering and stream restarts.

## Notes

After installing this release, restart Home Assistant and hard-reload the browser.
