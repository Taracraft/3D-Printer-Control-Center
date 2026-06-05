# Changelog

## [2.0.1] - 2026-06-05

### Fixed

- corrected the translated integration title
- proactively removed the stale pre-v2 Lovelace resource
- loaded Lovelace resource storage safely before modifying it
- registered backward-compatible aliases for the three former dashboard card types

### Added

- automatic creation of three default Lovelace dashboards after setup
- setup and options toggle for automatic dashboard creation
- `printer_control_center.install_dashboards` repair service


## [2.0.0] - 2026-06-05

### Breaking change

- internal Home Assistant domain renamed to `printer_control_center`
- a one-time HACS reinstall and integration reconfiguration is required

### Added

- gallery ZIP export preserving the full folder structure
- gallery ZIP import preserving the full folder structure
- overwrite confirmation during ZIP import
- integration-local brand assets for Home Assistant 2026.3 and newer
- root brand assets for HACS repository presentation

### Changed

- visible product name standardized to **3D-Printer Control Center**
- project branding removed from runtime paths and user-facing card titles

### Fixed

- local archive gallery listing after HACS installation

## [1.0.0] - 2026-06-05

- initial stable HACS-ready release
