# 3D-Printer Control Center v4.0.10

Camera parity hotfix for X1/X1C RTSPS live view.

## Fixed

- Align PCC's RTSPS camera entity with the working BambuLab Home Assistant integration behavior.
- Expose `CameraEntityFeature.STREAM` so Home Assistant can use the stream pipeline.
- Use `rtsps://bblp:<access_code>@<host>:322/streaming/live/1` as the stream source with robust host and access-code fallback.
- Add camera stream readiness diagnostics to entity attributes.

## Notes

This keeps 3D-Printer Control Center standalone. It does not depend on the BambuLab integration; it only aligns the camera entity behavior with the working Home Assistant camera pattern.
