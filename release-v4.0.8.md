# 3D-Printer Control Center v4.0.8

Workplace stability hotfix for the current HACS release path.

## Fixed

- UTF-8/mojibake cleanup in backend entities and frontend cards.
- Temperature units are kept as `°C` instead of corrupted `Â°C`.
- Manual AMS selections such as `AMS 2 Pro` are no longer overwritten by an empty live AMS detection result.
- Configured AMS capacity is used as a fallback when the printer is offline, cloud-only, or live telemetry is not yet available.
- Camera status remains visible when the native camera entity exists but the LAN stream is not connected.
- Cloud-only/offline state is handled more clearly when live telemetry is empty.

## Notes

This release must be published as a real GitHub Release, not only as a Git tag, so HACS can detect it as the latest available version.
