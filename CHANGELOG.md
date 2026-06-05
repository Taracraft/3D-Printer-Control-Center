# Changelog

## [2.0.2] - 2026-06-05

### Dashboard, upload and camera reliability update

- generate only two managed dashboards
- integrate the 3D print queue into the right sidebar of the 3D printing dashboard
- render the gallery dashboard as a full-width panel view
- rename the gallery dashboard to `3D-Drucker-Dateimanager/Galerie`
- keep all automatically generated cards at XL size
- move gallery ZIP imports into a persistent browser background task with compact expandable status overlay
- resume interrupted ZIP upload chunks while the browser session remains open
- report upload throughput, extraction state and post-import verification details
- clean abandoned upload fragments automatically
- download gallery ZIP exports through an authenticated Blob download instead of navigating away
- enforce manual LAN IP priority for native camera and disable endpoint rescans from overriding configured IPs
- include root HACS brand assets and local Home Assistant integration brand assets, including high-resolution variants
- preserve overwrite confirmation before replacing existing gallery files during ZIP import
- resume a staged upload after a browser reload when the same local file is selected again

## [2.0.1] - 2026-06-05

### Fixed

- corrected the translated integration title
- proactively removed the stale pre-v2 Lovelace resource
- loaded Lovelace resource storage safely before modifying it
- registered backward-compatible aliases for the three former dashboard card types

### Added

- automatic creation of default Lovelace dashboards after setup
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
