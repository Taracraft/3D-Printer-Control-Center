# Changelog

All notable changes to **3D-Printer Control Center** are documented in this file.

The project started as an internal Home Assistant prototype and evolved through a large number of alpha and release-candidate iterations before the first stable public release. The early pre-release history below has been reconstructed from development notes, retained test artifacts and the verified implementation milestones. Where an exact version-level delta could not be verified, closely related internal iterations are grouped rather than described speculatively.

## [2.0.3] - 2026-06-05

### Changed

- Switched the automatically generated `3D-Druck` dashboard to a responsive Masonry layout.
- Kept the printer card and queue card in XL mode while preventing unnecessary horizontal stretching on desktop displays.
- Preserved automatic stacking on narrow screens.
- Reworked the English and German README files.
- Added curated, cropped and compressed WebP screenshots under `docs/images/`.
- Removed browser address bars, private URLs and obsolete footer URLs from public screenshots.
- Replaced visible raw repository URL blocks with clean GitHub links.
- Corrected the release-build script version.

## [2.0.2] - 2026-06-05

### Added

- Global background upload handling for the gallery.
- Upload progress, transferred size, current speed and expandable upload details.
- Resume support for interrupted uploads.
- Cleanup of stale upload fragments.
- Additional high-resolution branding assets for HACS and Home Assistant.

### Changed

- Reduced the automatically generated dashboards to two:
  - `3D-Druck`
  - `3D-Drucker-Dateimanager/Galerie`
- Integrated the print queue into the `3D-Druck` dashboard.
- Kept the printer and queue cards in XL mode.
- Ensured that a manually configured printer IP address always takes priority over automatic discovery for native camera access.

### Fixed

- Restored native camera access when network discovery returned an unsuitable address.
- Fixed the gallery ZIP export so that it downloads a ZIP file instead of navigating to the Home Assistant start page.
- Added server-side staging reuse so that overwrite confirmation does not require uploading a large ZIP file twice.
- Added post-extraction verification for gallery imports.

## [2.0.1] - 2026-06-05

### Added

- Automatic creation of default Lovelace dashboards.
- `printer_control_center.install_dashboards` service for recreating the standard dashboards.

### Changed

- Migrated Lovelace resources to the new frontend path with cache busting.
- Added compatibility aliases for older card types during migration.

### Fixed

- Removed obsolete frontend resources from the former domain.
- Corrected the visible integration title.
- Fixed dashboard migration after the domain rename.

## [2.0.0] - 2026-06-05

### Breaking changes

- Renamed the internal Home Assistant domain from `taracraft_3d_printer` to `printer_control_center`.
- Changed the integration directory to `custom_components/printer_control_center`.
- Changed persistent runtime paths to:
  - `<HA config>/printer_control_center/archive/`
  - `<HA config>/printer_control_center/uploads/`
  - `<HA config>/printer_control_center/print_queue.json`
- Required one-time reinstallation and new integration setup because Home Assistant integration domains cannot contain hyphens and domain changes are not transparent migrations.

### Added

- Gallery ZIP export with complete folder structure.
- Gallery ZIP import with safe path validation.
- Conflict detection and explicit overwrite confirmation.
- Branding assets in both the repository root and the integration directory.
- Migration documentation.

### Preserved

- The old data directory can be retained as a rollback source.
- The separate gallery ZIP can be imported into a clean installation.

## [1.0.0] - 2026-06-05

### First stable public release

- Released the stable state derived from internal candidate `rc1.39`.
- Added a HACS-compatible repository structure.
- Added MIT license, bilingual README files, setup documentation, publishing documentation and a complete public repository cleanup.
- Added German and English setup translations.
- Added configurable dashboard language:
  - automatic Home Assistant language
  - German
  - English
- Added manual printer IP configuration with priority over optional automatic discovery.
- Made runtime paths portable with `hass.config.path(...)`.
- Documented additional Bambu Lab printers as generically configurable through IP address, serial number and LAN access code.
- Documented that the A1 was the practically verified printer model at release time.
- Documented planned features:
  - filament management
  - print-cost calculation
  - project management with pictures, documentation and additional materials
  - MakerWorld import

---

# Pre-release development history

## [rc1.39] - 2026-06-05

### Stable internal baseline

- Released internally as **Version 1.0** after practical browser testing.
- Reworked the move dialog into a clearly visible folder tree with indentation, connecting lines and tree symbols.
- Preserved the internal scroll position of the move-dialog folder list.
- Prevented telemetry-driven full rerenders in the gallery, queue card and card editor.
- Preserved focus and cursor position in active text and quantity fields.

## [rc1.38] - 2026-06-05

### Internal stabilization

- Refined move-dialog runtime behavior.
- Prepared the final folder-tree and UI-state preservation changes.

## [rc1.37] - 2026-06-05

### Changed

- Improved folder-tree visualization in the move dialog.
- Refined toast notifications and overwrite feedback.

## [rc1.36] - 2026-06-05

### Added

- Overwrite confirmation for move conflicts.
- Modern inline save feedback.
- Quantity dropdown for queue items.

## [rc1.35] - 2026-06-05

### Added

- Queue quantity confirmation button.
- Short-lived `Gespeichert` feedback after quantity changes.
- Improved single-item and multi-item queue-card scaling.

## [rc1.34] - 2026-06-05

### Fixed

- Bulk move handling in the gallery.
- SD-card refresh behavior after creating or deleting directories.
- Queue-card thumbnail sizing.

## [rc1.33] - 2026-06-05

### Fixed

- Replaced local archive copy semantics with verified filesystem rename semantics.
- Added post-move verification for local archive moves.
- Added post-rename verification for SD-card FTPS moves.
- Preserved input focus and cursor position during Home Assistant live refreshes.
- Simplified queue-card layout:
  - preview first
  - filename below preview
  - optional schedule below filename
  - all controls below the model
- Backfilled missing previews for older queue entries.

## [rc1.32] - 2026-06-05

### Added

- Standalone `3D-Druck-Warteschlange` Lovelace card.
- Persistent queue storage in `print_queue.json`.
- Queue management:
  - quantity
  - optional schedule
  - ordering
  - `1 erledigt`
  - remove
  - print through original 3MF handoff
- Gallery popup for selecting multiple models and adding them to the queue.

### Changed

- Removed redundant context-menu actions:
  - original project 3MF download
  - QR code
  - time-lapse search
  - project page

## [rc1.31] - 2026-06-05

### Internal stabilization

- Prepared queue integration and preview refinements after the Bambu Studio direct-import work.

## [rc1.30] - 2026-06-05

### Changed

- Switched the primary Bambu Studio handoff to the unchanged original 3MF file.
- Kept generated model-only 3MF and STL files as explicit manual fallbacks.
- Served original files as `application/octet-stream`.

### Documented behavior

- Confirmed that Bambu Studio displays an origin warning for self-hosted URLs.
- Confirmed that this warning is enforced by Bambu Studio and cannot be disabled cleanly for a private Home Assistant domain without modifying the client or spoofing a trusted hostname.
- Kept the solution Home-Assistant-only:
  - no Windows helper
  - no bridge service
  - no external proxy

## [rc1.29] - 2026-06-05

### Fixed

- Moved context-menu and preview CSS rules out of an accidental narrow `@container` scope.
- Kept overlays at least 76 px below the top edge.
- Anchored the 3D preview to the selected model card.

### Changed

- Adjusted the signed direct-import URL so that the visible URL ends in `.3mf`.
- Moved path, expiration and signature values into URL path segments before the filename.

## [rc1.28] - 2026-06-05

### Internal stabilization

- Investigated misplaced overlays and Bambu Studio direct-import behavior.
- Prepared the overlay and signed-URL corrections delivered in `rc1.29`.

## [rc1.27] - 2026-06-05

### Changed

- Consolidated the gallery and file-manager workflows.
- Moved toward a Home-Assistant-only Bambu Studio handoff.
- Removed the dependency on a Windows helper.

## [rc1.26] - 2026-06-05

### Internal stabilization

- Intermediate gallery and direct-import iteration.

## [rc1.25] - 2026-06-05

### Added

- Gallery-card refinements.
- Model export actions.
- Additional probes for model export and gallery-card behavior.

## [rc1.24] - 2026-06-05

### Added

- Dedicated gallery-card iteration.
- Initial separation of the gallery into its own Lovelace card.

## [rc1.23] - 2026-06-05

### Changed

- Redesigned the gallery toward a professional archive-style model grid.
- Improved visual hierarchy and scaling.

## [rc1.22] - 2026-06-05

### Changed

- Refined gallery proportions and thumbnail sizing.

## [rc1.21] - 2026-06-05

### Fixed

- Gallery opening behavior.
- Popup and card interaction issues.

## [rc1.20] - 2026-06-05

### Added

- Gallery-manager iteration combining archive navigation and model management.

## [rc1.19] - 2026-06-05

### Changed

- Improved generated thumbnails and model-preview presentation.

## [rc1.18] - 2026-06-05

### Changed

- Refined the first gallery implementation.

## [rc1.17] - 2026-06-05

### Added

- Initial gallery view for archived models.

## [rc1.16] - 2026-06-05

### Changed

- Continued file-manager refinements after upload and model-import work.

## [rc1.15] - 2026-06-05

### Added

- Model-import workflow.

## [rc1.14] - 2026-06-05

### Changed

- Improved upload handling and validation.

## [rc1.13] - 2026-06-05

### Added

- Initial archive-upload workflow.

## [rc1.12] - 2026-06-05

### Changed

- File-manager iteration with further archive-navigation refinements.

## [rc1.11] - 2026-06-05

### Changed

- File-manager iteration with additional file operations.

## [rc1.10] - 2026-06-05

### Changed

- File-manager iteration with early archive-management improvements.

## [rc1.9] - 2026-06-05

### Changed

- Refined the initial file-manager implementation.

## [rc1.8] - 2026-06-05

### Added

- Initial file-manager prototype for archived print files.

## [alpha] - 2026-06-04 to 2026-06-05

### Initial prototype

- Created the first Home Assistant integration prototype for a Bambu Lab printer.
- Added LAN-oriented printer connectivity and MQTT telemetry.
- Added the main Lovelace printer card.
- Added native camera experiments and printer controls.
- Added AMS/BMCU slot display.
- Added responsive card-size controls.
- Added the initial local archive concept that later evolved into the gallery and file manager.

---

# Notes for maintainers

- Pre-release entries are retained for transparency and historical documentation.
- The stable public support line starts with `1.0.0`.
- The former internal domain `taracraft_3d_printer` was retired in `2.0.0`.
- The current integration domain is `printer_control_center`.
