## 4.0.14 - 2026-06-16

- Remove the extra standalone live camera card from the managed 3D print dashboard.
- Force the working Home Assistant live camera directly into the left printer-card camera panel.
- Hide legacy standalone `printer-control-center-camera-card` elements in the dashboard UI.
- Keep the inline camera entity generic by resolving `camera.*_native_live_camera` dynamically.

## 4.0.13 - 2026-06-16

- Add the live camera directly into the main printer card / print view.
- Reuse the working Home Assistant live camera rendering inside the printer card camera panel.
- Keep the implementation generic by resolving `camera.*_native_live_camera` dynamically.

## 4.0.12 - 2026-06-16

- Fix the dashboard live camera card loader.
- Use Home Assistant `loadCardHelpers()` and `createCardElement()` to load the native `picture-entity` live camera card reliably.
- Remove the false blocking state where the card stayed on `HA Picture-Entity-Karte ist noch nicht geladen`.

## 4.0.11 - 2026-06-16

- Add an auto-detecting 3D-Printer Control Center camera dashboard card.
- The managed 3D print dashboard now includes a real Home Assistant live camera card for `camera.*_native_live_camera`.
- The new camera card uses Home Assistant's `picture-entity` live camera rendering instead of the older internal still/proxy preview path.
- This makes the X1/X1C RTSPS live view visible directly on the 3D print dashboard after the v4.0.10 camera stream fix.

## 4.0.10 - 2026-06-16

- Align the native RTSPS camera entity with the working BambuLab Home Assistant integration behavior.
- Expose `CameraEntityFeature.STREAM` so Home Assistant treats the X1/X1C RTSPS camera as a stream-capable camera.
- Use the Home Assistant stream pipeline for RTSPS stills and live view.
- Build the stream source from `rtsps://bblp:<access_code>@<host>:322/streaming/live/1` with robust host and access-code fallback.
- Add stream-source readiness diagnostics to the camera entity attributes.

## 4.0.9 - 2026-06-16

- Fix remaining gallery button mojibake for the `Neuer Ordner` folder action.
- Extend the frontend runtime sanitizer for the remaining folder-icon corruption observed after v4.0.8.

## 4.0.8 - 2026-06-16

- Fix UTF-8/mojibake handling in backend entities and frontend cards, including temperature units.
- Keep temperature units as `°C` instead of corrupted `Â°C`.
- Improve AMS fallback handling: a manually configured AMS 2 Pro is no longer overwritten by an empty live detection result.
- Show configured AMS capacity when live AMS telemetry is not available yet.
- Improve cloud-only/offline presentation for missing live telemetry, camera connection and temperature values.
- Prepare a real GitHub Release newer than v4.0.7 so HACS can detect the current release.

# Changelog

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
