# Changelog

## 5.0.0-alpha5 - Slicer profile and slice-plan scaffold

### Added
- Added local Studio profile-bank groundwork for printers, build plates, nozzles, filaments and process profiles.
- Added a Studio slice-plan panel with editable basic slicer settings.
- Added local slice-plan persistence and JSON export for later slicer/direct-print integration.
- Added safeguards for the v5 Studio model handoff introduced in alpha4.

### Fixed
- Repaired literal line-break artifacts from the alpha4 handoff patch.
- Completed the native Gallery "Open in Studio" hooks where exact UI anchors were missed.

### Notes
- This alpha still prepares data only. Real slicing and direct printing remain disabled until later alpha steps.

## 5.0.0-alpha4 - Gallery to Studio handoff

### Added
- Added native "Open in Studio" actions for gallery/archive models.
- Added native v5 Studio handoff storage so selected 3MF models can be opened in the internal Studio/CAD workspace.
- Added model metadata banner inside the Studio workspace.
- Added per-model transform persistence in local browser storage.
- Added queue-to-Studio handoff groundwork for the internal v5 workflow.

### Changed
- The v5 Studio workflow now prefers the internal Home Assistant Studio page instead of the external Bambu Studio handoff for new Studio actions.
- Existing Bambu Studio handoff actions remain available as a manual fallback.

### Notes
- This alpha still does not slice or print directly. It prepares the model handoff and transform state needed for the next slicer/profile steps.

## 5.0.0-alpha3 - v4 standalone backend sync and conflict recovery

### Added
- Added the v4.0.7 standalone Bambu backend foundation to the v5 development branch.
- Added native payload normalization foundations for A1, P1, X1/X1C/X1E and H2 printer families.

### Fixed
- Recovered the v5 frontend after the v4.0.7 merge conflict.
- Kept the v5 Studio/CAD frontend path clean with a single version declaration and no merge conflict markers.
- Preserved the standalone architecture without functional dependency on external Bambu Lab Home Assistant integrations.

### Notes
- This alpha keeps the productive default dashboard stable while the v5 Studio/CAD workflow continues on the separate Studio page.

## [4.0.1] - 2026-06-14

### Fixed

- Normalized JSON encoding for HACS validation.
- Removed UTF-8 BOM from `manifest.json`.
- Normalized line endings in translation files.
- Restored HACS parser compatibility for `manifest.json`.

## [4.0.0] - 2026-06-14

### Focus

- Released the standalone v4 camera and model capability layer.
- The integration remains fully standalone and does not depend on the BambuLab Home Assistant integration as a functional requirement.
- Other Bambu integrations are used only as technical references for protocol and camera behavior.
- The dashboard was reworked for wider layouts, compact diagnostics and better model display.

### Added

#### Standalone camera capability detection

- Added an internal camera capability matrix for supported Bambu printer families.
- Added standalone camera type detection based on the detected printer model.
- Added integration-side camera transport and camera port detection.
- Added diagnostic values for camera transport, camera port and camera availability.
- Added separation between chamber-image cameras and RTSPS cameras.
- Added groundwork for future direct RTSPS live camera support.
- Implemented camera logic without falling back to external Home Assistant camera entities.

#### Chamber image camera support

- Added support path for A1, A1 mini, P1P and P1S style chamber-image cameras.
- Classified TCP port `6000` as the chamber-image camera port.
- Added dashboard label `Chamber Image / TCP 6000`.
- Improved diagnostics for LAN-based chamber-image cameras.
- Prepared and unified native camera status handling for local LAN usage.

#### RTSPS camera support

- Prepared RTSPS camera family handling for X1, X1 Carbon, X1E, H2, P2 and X2 class printers.
- Classified TCP port `322` as the RTSPS camera port.
- Added dashboard label `RTSPS / TCP 322`.
- Added model-based RTSPS camera transport selection.
- Added groundwork for standalone RTSPS support without external entity dependency.

#### Printer model and display name

- Added automatic printer model detection from Bambu telemetry.
- Prioritized `product_name` from Bambu module information.
- Prevented serial numbers from being shown as printer models when a better model name is available.
- Added fallback detection from entity prefix and configured printer name.
- Added dashboard fallback to the display name entered during setup.
- Added setup hint explaining that the entered printer name is used on the dashboard if no model can be detected automatically.
- Added German and English text for the display-name hint.

#### Dashboard and diagnostics

- Added compact diagnostics badges for printer and camera information.
- Reduced the long technical diagnostics area.
- Added readable model display such as `Bambu Lab A1` instead of serial numbers.
- Reduced camera display to a compact transport badge.
- Made footer and diagnostics area more compact.
- Updated frontend resource versioning for the release.
- Prepared migration for existing generated dashboards to the new frontend resource version.

#### Wider dashboard layout

- Added Sections-based dashboard layout.
- Gave the printer card more horizontal space.
- Placed the print queue card next to the printer card.
- Added container-query based frontend layout.
- Improved usage of available width on desktop dashboards.
- Kept narrow views responsive with stacked content.
- Reduced the lower information area so the dashboard feels less vertically stretched.

#### Model and AMS capabilities

- Added model capability infrastructure.
- Added dedicated capability definitions.
- Improved BMCU-370 / BCMU-370 handling.
- Preserved manually selected AMS/BMCU configuration.
- Prevented automatic detection from unintentionally overwriting a manual BMCU-370 selection.
- Improved readable AMS display in the dashboard.
- Prepared technical camera and model capability notes for the v4 work.

### Changed

#### Architecture

- Moved camera and model capability detection into the standalone integration.
- Removed functional dependency on the BambuLab Home Assistant integration.
- Limited external Bambu integrations to reference-only usage.
- Improved consistency between backend diagnostics and frontend display.
- Changed generated dashboards to a wider default layout.

#### Frontend

- Updated frontend version to `4.0.0`.
- Reworked the complete printer card for wide layouts.
- Improved width distribution between printer card and queue card.
- Simplified the diagnostics area.
- Reduced spacing in the lower card area.
- Displayed model name and camera type more compactly.
- Updated frontend resource cache busting.

#### Backend

- Updated manifest version to `4.0.0`.
- Updated integration constant to `4.0.0`.
- Improved printer model detection.
- Improved camera status reporting.
- Extended sensor values for camera transport and camera port.
- Adjusted dashboard generation defaults.
- Extended model and capability detection.

### Fixed

#### Model display

- Fixed serial number being shown as printer model.
- Fixed Bambu A1 not automatically displaying as `Bambu Lab A1`.
- Fixed real Bambu `product_name` not being preferred on the dashboard.
- Corrected fallback order for model name, display name and serial number.
- Added setup hint for the visible dashboard name.

#### Camera diagnostics

- Fixed missing camera transport display.
- Fixed missing camera port display.
- Cleaned up unclear camera diagnostics on the dashboard.
- Reduced overly long technical camera badge output.
- Removed expectation of an external BambuLab Home Assistant camera entity.

#### Dashboard layout

- Improved dashboard view that previously appeared too narrow and vertically stretched.
- Replaced the old Masonry default dashboard layout with a wider Sections layout.
- Improved horizontal space usage for the printer card.
- Added migration support for existing dashboard storage on the release test system.
- Made the lower information area more compact.

#### Release quality

- Fixed a Python syntax issue introduced during rc2 preparation.
- Fixed frontend resource cache versioning.
- Cleaned up blank-line-at-EOF warnings.
- Validated the final ZIP package structure.
- Prepared final install package `pcc-4.0.0-ha-install.zip`.

### Notes

- Version 4.0.0 is the first release with standalone camera and model capability logic.
- The integration remains a standalone Home Assistant custom integration.
- RTSPS classification is prepared for X/H/P2 class printers; actual live camera behavior remains model- and firmware-dependent.
- Chamber-image camera classification is prepared for A/P1 class printers via TCP 6000.
- The stable v3 history remains available in the German changelog and below this release line where maintained.
