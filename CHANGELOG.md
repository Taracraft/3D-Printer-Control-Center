## 5.0.0-beta11 - Studio Navigation + Real Primitive Mesh

### English
- Fixed the top Studio navigation regression by hiding transform/edit buttons after every render.
- Kept only workflow actions in the top navigation while transform/edit actions remain in the right inspector.
- Added cleanup for visible `[object Object]` artefacts.
- Reworked primitive object creation to clear the persistent Studio job store first and then create one exclusive active primitive job.
- Replaced primitive proxy styling with a real generated mesh preview rendered into a dedicated canvas.
- Added geometric mesh rendering for cube, cylinder, rectangle, square and sphere primitives.
- Hardened Delete and empty-state cleanup so no stale object, label or filename remains on the buildplate.
- Real slicing and direct printing remain disabled.

### Deutsch
- Regression in der oberen Studio-Navigation korrigiert: Transform-/Bearbeitungsbuttons werden nach jedem Render oben ausgeblendet.
- Oben bleiben nur Workflow-Aktionen; Bearbeitung bleibt rechts im Transform-Inspector.
- Sichtbare `[object Object]`-Artefakte werden entfernt.
- Primitive-Objekterstellung leert zuerst den persistenten Studio-Jobstore und erzeugt danach genau einen exklusiven aktiven Primitive-Job.
- Primitive werden nicht mehr als Proxy-CSS-Objekt dargestellt, sondern als echtes berechnetes Mesh in einem eigenen Canvas gerendert.
- Geometrisches Mesh-Rendering für Würfel, Zylinder, Rechteck, Quadrat und Kugel ergänzt.
- Löschen und leerer Zustand wurden gehärtet, sodass keine alten Objekte, Labels oder Dateinamen auf der Buildplate stehen bleiben.
- Echtes Slicen und Direktdruck bleiben deaktiviert.


## 5.0.0-beta11 - Buildplate Interaction + Primitive Objects

### English
- Kept the Bambu-style build plate dropdown open until the user clicks outside it.
- Removed the visible grid/raster overlay from the Studio buildplate surface.
- Added a live XYZ coordinate overlay while hovering the buildplate, formatted with one decimal place.
- Added a moving XYZ axis cursor on the buildplate hover position.
- Hardened empty-state handling: no object, no label and no stale filename are shown when no model/job is loaded.
- Reworked Delete so the active job, mesh, preview, transform and plan state are cleared together.
- Added a Bambu-style Object tile next to the printer/plate/sync tiles.
- Added simple primitive object creation: cube, cylinder, rectangle, square and sphere.
- Real slicing and direct printing remain disabled.

### Deutsch
- Bambu-ähnliches Druckplatten-Dropdown bleibt offen, bis außerhalb geklickt wird.
- Sichtbares Raster auf der Studio-Buildplate entfernt.
- Live-XYZ-Koordinaten beim Überfahren der Buildplate ergänzt, mit einer Nachkommastelle.
- Bewegliche XYZ-Achse an der Mausposition auf der Buildplate ergänzt.
- Leerer Zustand gehärtet: ohne geladenes Modell/Job werden kein Objekt, kein Label und kein alter Dateiname angezeigt.
- Löschen entfernt aktiven Job, Mesh, Vorschau, Transform- und Planstatus gemeinsam.
- Bambu-ähnliche Objekt-Kachel neben Drucker-/Platten-/Sync-Kacheln ergänzt.
- Einfache Grundkörper ergänzt: Würfel, Zylinder, Rechteck, Quadrat und Kugel.
- Echtes Slicen und Direktdruck bleiben deaktiviert.


## 5.0.0-beta11 - Buildplate Selector Visual Fix

### English
- Fixed the Studio build plate selector visuals after the beta8 test.
- Replaced the broken grey selector/list look with a Shadow DOM injected Bambu Studio style printer / plate / sync tile row.
- The active plate tile now keeps a stable dropdown open until the user clicks outside it.
- Added a white Bambu Studio style dropdown with checkmark, thumbnails and plate names.
- Reworked the central Studio buildplate surface so the selected plate visibly changes the background, grid, border, side logo, front strip and plate number.
- Real slicing and direct printing remain disabled.

### Deutsch
- Optik der Studio-Druckplattenauswahl nach dem beta8-Test korrigiert.
- Die kaputte graue Listen-/Buttonansicht wurde durch eine direkt im Shadow DOM injizierte Bambu-Studio-artige Drucker-/Platten-/Sync-Kachelzeile ersetzt.
- Das Dropdown der aktiven Druckplatten-Kachel bleibt stabil offen, bis außerhalb geklickt wird.
- Helles Bambu-Studio-ähnliches Dropdown mit Haken, Vorschaubild und Plattennamen ergänzt.
- Die zentrale Studio-Buildplate ändert nun sichtbar Hintergrund, Grid, Kontur, Seitenlogo, Frontleiste und Plattennummer je nach ausgewählter Platte.
- Echtes Slicen und Direktdruck bleiben deaktiviert.


## 5.0.0-beta11 - Bambu Studio Buildplate Selector

### English
- Reworked the Studio build plate selector to match the Bambu Studio interaction pattern more closely.
- Added a compact printer / plate / sync tile row in the left Studio project panel.
- The active build plate tile now opens a light Bambu Studio-like dropdown with a checkmark on the selected plate.
- Added Cool Plate/PLA Plate, Engineering Plate, Smooth PEI Plate / High Temp Plate, Textured PEI Plate and Bambu Cool Plate SuperTack options.
- The central Studio buildplate now updates immediately with matching texture, grid, label/logo, front strip and plate-specific visual styling.
- Stored the selected build plate in the active Studio job profile context.
- Real slicing and direct printing remain disabled.

### Deutsch
- Studio-Druckplattenauswahl näher am Bambu-Studio-Bedienmuster neu aufgebaut.
- Kompakte Drucker-/Druckplatten-/Sync-Kachelzeile links im Studio-Projektpanel ergänzt.
- Die aktive Druckplatten-Kachel öffnet nun ein helles Bambu-Studio-ähnliches Dropdown mit Haken bei der aktiven Platte.
- Optionen ergänzt: Cool Plate/PLA Plate, Engineering Plate, Smooth PEI Plate / High Temp Plate, Textured PEI Plate und Bambu Cool Plate SuperTack.
- Die zentrale Studio-Buildplate übernimmt sofort Textur, Grid, Label/Logo, Frontstreifen und plattenspezifische Optik.
- Die ausgewählte Druckplatte wird im Profilkontext des aktiven Studio-Jobs gespeichert.
- Echtes Slicen und Direktdruck bleiben deaktiviert.


## 5.0.0-beta11 - Morning Final Studio Polish

### English
- Added a global visible-text UTF-8/mojibake sanitizer for Printer Control Center cards and open Shadow DOM roots.
- Reworked the Studio context menu into a stable two-column menu that closes on left-click outside and keeps a persistent right-side action panel.
- Added Bambu Studio inspired build plate cards in the left Studio panel with visible plate previews.
- Build plate selection now visibly changes the Studio buildplate styling.
- Added a Studio import assistant with Gallery/Archive, 3MF upload preparation and model-link association tabs.
- The import assistant uses the existing Archive/SD listing endpoints, supports folder navigation, selection, progress indication and Studio-job creation.
- Kept top Studio navigation limited to workflow actions and a single Delete action.
- Hardened stale text cleanup such as `[object Object]` and broken icon/label prefixes.
- Real slicing and direct printing remain disabled.

### Deutsch
- Globalen sichtbaren UTF-8-/Mojibake-Sanitizer für Printer-Control-Center-Karten und offene Shadow-DOM-Wurzeln ergänzt.
- Studio-Kontextmenü zu einem stabilen zweispaltigen Menü überarbeitet; Linksklick außerhalb schließt es, rechts bleibt ein dauerhaftes Aktionspanel.
- Bambu-Studio-ähnliche Druckplatten-Kacheln links im Studio ergänzt, inklusive sichtbarer Vorschau.
- Druckplattenauswahl ändert nun sichtbar die CAD-Buildplate-Darstellung.
- Studio-Import-Assistent mit Tabs für Galerie/Archiv, 3MF-Upload-Vorbereitung und Modell-Link-Verknüpfung ergänzt.
- Import-Assistent nutzt die vorhandenen Archiv-/SD-Listing-Endpunkte, unterstützt Ordnernavigation, Auswahl, Fortschritt und Studio-Job-Erzeugung.
- Obere Studio-Navigation bleibt auf Workflow-Aktionen und eine einzelne Löschen-Aktion reduziert.
- Sichtbare Alttexte wie `[object Object]` und kaputte Icon-/Label-Präfixe werden bereinigt.
- Echtes Slicen und Direktdruck bleiben deaktiviert.


## 5.0.0-beta11 - Studio Import Buildplate Showcase

### English
- Added a dedicated Studio import popup behind the Import button.
- The Studio import popup can browse the existing Archive and SD-card model lists, shows previews, supports folder navigation and imports a selected 3MF into the Studio job store with a progress bar.
- Added a Bambu Studio inspired build plate selector in the left Studio panel with Smooth PEI / High Temp, Textured PEI, Cool Plate / PLA, Engineering Plate and Bambu Cool Plate SuperTack options.
- Added visible build plate styling and active build plate metadata on Studio jobs.
- Reworked the Studio right-click context menu so it closes on left-click outside, remains stable while operating it, and uses right-opening action groups.
- Cleaned the top Studio navigation to workflow actions only and restored a single Delete action.
- Hardened persistent Studio job deletion and clears the stale model display when the last job is removed.
- Expanded preview handoff and lazy preview recovery from the Archive/SD list so the Studio shows the real 3MF project thumbnail when STL mesh loading is unavailable.
- Continued UTF-8/mojibake cleanup.
- Real slicing and direct printing remain disabled.

### Deutsch
- Eigenes Studio-Import-Popup hinter dem Button Importieren ergänzt.
- Das Studio-Import-Popup kann vorhandene Archiv- und SD-Karten-Modelllisten durchsuchen, zeigt Vorschaubilder, unterstützt Ordnernavigation und importiert ein ausgewähltes 3MF mit Fortschrittsbalken in den Studio-Jobstore.
- Bambu-Studio-ähnliche Druckplattenauswahl links im Studio ergänzt: Smooth PEI / High Temp, Textured PEI, Cool Plate / PLA, Engineering Plate und Bambu Cool Plate SuperTack.
- Sichtbare Buildplate-Darstellung und aktive Druckplattenmetadaten im Studio-Job ergänzt.
- Studio-Rechtsklickmenü überarbeitet: Linksklick außerhalb schließt es, Bedienung bleibt stabil, Aktionsgruppen öffnen nach rechts.
- Obere Studio-Navigation auf Workflow-Aktionen bereinigt und eine einzelne Löschen-Aktion wiederhergestellt.
- Persistentes Löschen gehärtet und alte Modellanzeige wird entfernt, wenn der letzte Job gelöscht wurde.
- Preview-Handoff und nachträgliche Preview-Suche über Archiv/SD-Liste erweitert, damit das Studio das echte 3MF-Projektbild zeigt, wenn STL-Mesh-Laden nicht verfügbar ist.
- UTF-8-/Mojibake-Bereinigung fortgeführt.
- Echtes Slicen und Direktdruck bleiben deaktiviert.


## 5.0.0-beta11 - Studio Navigation + Preview Handoff

### English
- Cleaned the Studio top navigation by removing duplicate edit actions: Move, Rotate, Scale, Rot -45, Rot +45, Scale - and Scale +.
- Added Delete back to the top Studio workflow navigation while keeping edit controls in the right Transform inspector.
- Reworked the right-click Studio context menu into a persistent floating menu with right-opening submenus for position, rotation/scale, mirror/skew and job/model actions.
- Added Delete to the right-click context menu and kept persistent job deletion active.
- Added gallery preview handoff enrichment so preview data is copied to root-level and model-level Studio job fields.
- Continued to prefer STL/geometry mesh rendering while allowing a real gallery model-image fallback.
- Real slicing and direct printing remain disabled.

### Deutsch
- Obere Studio-Navigation bereinigt: doppelte Bearbeitungsaktionen Verschieben, Drehen, Skalieren, Rot -45, Rot +45, Scale - und Scale + entfernt.
- Löschen wieder oben in der Studio-Workflow-Navigation ergänzt; Bearbeitung bleibt rechts im Transform-Inspector.
- Rechtsklick-Kontextmenü als persistentes schwebendes Menü mit nach rechts öffnenden Untermenüs für Position, Drehen/Skalieren, Spiegeln/Zerren und Job/Modell überarbeitet.
- Löschen im Rechtsklickmenü ergänzt; persistentes Job-Löschen bleibt aktiv.
- Galerie-Preview-Handoff erweitert: Preview-Daten werden in Root- und Model-Felder des Studio-Jobs übernommen.
- STL-/Geometrie-Mesh bleibt bevorzugt; echtes Galerie-Modellbild dient als sichtbarer Fallback.
- Echtes Slicen und Direktdruck bleiben deaktiviert.


## 5.0.0-beta11 - Context Menu + Model Image Fix

### English
- Fixed the beta3 Studio startup failure caused by reading `dataset` from a ShadowRoot in the context-menu binding.
- Reworked the Studio right-click context menu to use instance-level binding state and a Shadow DOM floating menu.
- Kept Studio editing controls in the right Transform inspector only.
- Added a visible model-image fallback from the active Studio job / gallery handoff while keeping STL mesh rendering as the preferred real model path.
- Kept expanded STL link fallback requests for real geometry loading.
- Real slicing and direct printing remain disabled.

### Deutsch
- Beta3-Startfehler behoben, der durch `dataset`-Zugriff auf einen ShadowRoot im Kontextmenü-Binding ausgelöst wurde.
- Studio-Rechtsklickmenü auf instanzbasierten Binding-Status und ein schwebendes Shadow-DOM-Menü umgestellt.
- Bearbeitungsfunktionen bleiben nur rechts im Transform-Inspector.
- Sichtbaren Modellbild-Fallback aus aktivem Studio-Job/Galerie-Handoff ergänzt, während STL-Mesh-Rendering der bevorzugte echte Modellpfad bleibt.
- Erweiterte STL-Link-Fallbacks für echte Geometrieladung bleiben aktiv.
- Echtes Slicen und Direktdruck bleiben deaktiviert.


## 5.0.0-beta11 - Studio UI Cleanup

### English
- Cleaned the Studio top navigation by removing edit actions that already exist in the right Transform inspector.
- Kept Studio editing controls in the right inspector as the single editing location.
- Added a native floating Studio right-click context menu that is created directly in the Shadow DOM and no longer depends on the buildplate render block alone.
- Added persistent Studio job delete by clearing and recreating the remaining persistent Studio jobs through the existing WebSocket commands.
- Expanded Studio STL mesh-link fallbacks to prefer the same source/path/format approach used by the gallery STL download flow before model-STL source variants.
- Real STL/geometry canvas rendering remains the Studio model path; preview images are not used as the Studio model.
- Real slicing and direct printing remain disabled.

### Deutsch
- Obere Studio-Navigation bereinigt: Bearbeitungsaktionen, die rechts im Transform-Inspector vorhanden sind, werden oben entfernt.
- Bearbeitung bleibt rechts im Transform-Inspector als einziger Bearbeitungsbereich.
- Natives schwebendes Rechtsklick-Kontextmenü für das Studio ergänzt, direkt im Shadow DOM erzeugt und nicht mehr nur vom Buildplate-Renderblock abhängig.
- Persistentes Löschen von Studio-Jobs ergänzt: verbleibende Studio-Jobs werden über die vorhandenen WebSocket-Befehle nach Clear neu aufgebaut.
- STL-Mesh-Link-Fallbacks erweitert: zuerst wird der gleiche source/path/format-Ansatz wie beim Galerie-STL-Download versucht, danach die Modell-STL-Quellen.
- Echtes STL-/Geometrie-Canvas bleibt der Studio-Modellpfad; Vorschaubilder werden nicht als Studio-Modell verwendet.
- Echtes Slicen und Direktdruck bleiben deaktiviert.


## 5.0.0-beta11 - Studio Prototype Hotfix

### English
- Fixed the beta1 Studio startup failure where `cleanupBetaStudioUi` could be missing on the registered CustomElement prototype.
- Guarded Studio render-wrapper helper calls and patched cleanup/context-menu helpers onto the currently registered Studio CustomElement prototype.
- Kept the right-click Studio context menu mandatory and visible.
- Added a global import file deduplication helper so duplicate upload/import selections are filtered in the gallery scope as well.
- Continued frontend UTF-8/mojibake cleanup for German labels and action icons.
- Real STL/geometry canvas rendering remains the Studio model path; preview images are not used as the Studio model.
- Real slicing and direct printing remain disabled.

### Deutsch
- Beta1-Startfehler im Studio behoben, bei dem `cleanupBetaStudioUi` auf dem registrierten CustomElement-Prototyp fehlen konnte.
- Render-Wrapper-Hilfsaufrufe abgesichert und Cleanup-/Kontextmenü-Helfer zusätzlich auf den aktuell registrierten Studio-CustomElement-Prototyp gelegt.
- Rechtsklick-Kontextmenü im Studio bleibt verbindlich und sichtbar.
- Globale Import-Deduplizierung ergänzt, damit doppelte Datei-Auswahlen auch im Galerie-/Upload-Scope gefiltert werden.
- UTF-8-/Mojibake-Bereinigung für deutsche Labels und Aktionssymbole fortgeführt.
- Echtes STL-/Geometrie-Canvas bleibt der Studio-Modellpfad; Vorschaubilder werden nicht als Studio-Modell verwendet.
- Echtes Slicen und Direktdruck bleiben deaktiviert.


## 5.0.0-beta11 - Studio Stabilization

### English
- Promoted the v5 Studio branch to beta after the alpha25 interactive control baseline.
- Stabilized the Studio surface by keeping editing controls in the right inspector and removing duplicate buildplate/top edit action groups at render time.
- Made the Studio right-click context menu mandatory and visible with a fixed viewport-positioned context menu.
- Fixed Studio mesh loading to request existing model-STL export sources (`archive_model_stl` / `sd_model_stl`) instead of relying only on generic project/link mode flags.
- Kept the Studio model as real STL/geometry canvas rendering; preview images are not used as the Studio model.
- Added duplicate-file filtering for upload/import file selections.
- Cleaned common frontend UTF-8/mojibake artifacts and restored German umlauts.
- Real slicing and direct printing remain disabled.

### Deutsch
- V5-Studio-Zweig nach der alpha25-Interaktionsbasis auf Beta gehoben.
- Studio-Oberfläche stabilisiert: Bearbeitung bleibt in der rechten Inspector-Spalte; doppelte Buildplate-/Top-Bearbeitungsleisten werden beim Rendern entfernt.
- Rechtsklick-Kontextmenü im Studio verbindlich und sichtbar gemacht, mit fixer Viewport-Position.
- Studio-Mesh-Laden korrigiert: Es werden die vorhandenen Modell-STL-Exportquellen (`archive_model_stl` / `sd_model_stl`) verwendet statt nur generischer project/link-Modi.
- Studio-Modell bleibt echte STL-/Geometrieanzeige im Canvas; Vorschaubilder werden nicht als Studio-Modell verwendet.
- Datei-Import/Upload dedupliziert gleiche ausgewählte Dateien.
- Häufige UTF-8-/Mojibake-Artefakte im Frontend bereinigt und deutsche Umlaute wiederhergestellt.
- Echtes Slicen und Direktdruck bleiben deaktiviert.


## 5.0.0-beta11 - Interactive Control Fix + Mesh Viewer

### English
- Fixed the alpha24 interactive controls by adding actual method implementations instead of only event-listener call markers.
- Added document-level Studio keyboard handling for Q/E, arrows, plus/minus and G while avoiding text fields.
- Stabilized buildplate drag, double-click placement, right-click context menu, snap-to-grid, duplicate and delete actions.
- Added compact action buttons and a toggleable keyboard-shortcut help panel.
- Added a real Studio mesh viewer that requests an STL/geometry link for the active Studio job and renders STL triangles on a canvas; preview images are not used for the Studio model.
- Added a manual real-model reload action.
- Real slicing and direct printing remain disabled.

### Deutsch
- Alpha24-Interaktionen repariert, indem echte Methodenimplementierungen ergänzt wurden und nicht nur Event-Listener-Aufrufe vorhanden sind.
- Dokumentweite Studio-Tastatursteuerung für Q/E, Pfeile, Plus/Minus und G ergänzt, ohne Eingabefelder zu stören.
- Drag auf der Buildplate, Doppelklick-Positionierung, Rechtsklick-Kontextmenü, Raster, Duplizieren und Löschen stabilisiert.
- Kompaktere Aktionsbuttons und rechts einblendbare Tastaturhilfe ergänzt.
- Echter Studio-Mesh-Viewer ergänzt: Das aktive Studio-Modell fordert einen STL-/Geometrie-Link an und rendert STL-Dreiecke im Canvas; Vorschaubilder werden für das Studio-Modell nicht verwendet.
- Manuelle Aktion zum Neuladen des echten Modells ergänzt.
- Echtes Slicen und Direktdruck bleiben deaktiviert.


## 5.0.0-beta11 - Interactive Studio Control

### English
- Added an interactive Studio control step on top of the alpha23 transform engine.
- Added mouse drag support for the active model on the buildplate.
- Added Ctrl/Alt + mouse wheel zoom and double-click placement on the buildplate.
- Added keyboard control for move, rotate, zoom, mirror, snap, center, lay-flat and delete shortcuts.
- Added snap-to-grid for X/Y/Z and Z rotation.
- Made duplicate create a new Studio job through the existing persistent Studio job WebSocket path, with a local fallback.
- Added local removal of the active Studio job from the Studio selection.
- Cleaned mojibake-prone separator characters and preview zoom button labels in the frontend.
- Real slicing and direct printing remain disabled.

### Deutsch
- Interaktive Studio-Bedienung auf Basis der alpha23 Transform Engine ergaenzt.
- Aktives Modell kann direkt auf der Buildplate mit der Maus gezogen werden.
- Ctrl/Alt + Mausrad zoomt die Buildplate; Doppelklick setzt die Modellposition.
- Tastatursteuerung fuer Verschieben, Drehen, Zoom, Spiegeln, Raster, Zentrieren, Flach legen und Loeschen ergaenzt.
- Snap-to-grid fuer X/Y/Z und Z-Rotation ergaenzt.
- Duplizieren erzeugt einen neuen Studio-Job ueber den bestehenden persistenten Studio-Job-WebSocket-Pfad, mit lokalem Fallback.
- Aktiver Studio-Job kann aus der Studio-Auswahl entfernt werden.
- Mojibake-anfaellige Trenner und Preview-Zoom-Labels im Frontend bereinigt.
- Echtes Slicen und Direktdruck bleiben deaktiviert.


## 5.0.0-beta11 - Studio Transform Engine

### English
- Added a larger Studio Transform Engine step after the alpha22 Beta Foundation handoff.
- Fixed cursor and text-selection jumps in transform inputs by avoiding full Studio card renders on every keypress and by suppressing full hass-update renders while transform fields are focused.
- Added live DOM-based model preview updates for transform input changes.
- Added working viewport/model zoom controls, quick rotation, scale controls, mirror X/Y/Z and skew controls.
- Added skew X/Y transform fields and made stretch/scale/rotation/mirroring visually affect the Studio model preview.
- Kept persistent Studio job transform storage, Dry-Run planning and Health checks active.
- Real slicing and direct printing remain disabled.

### Deutsch
- Groesserer Studio-Transform-Engine-Schritt nach dem alpha22 Beta-Foundation-Handoff.
- Cursor- und Markierungs-Spruenge in Transform-Eingaben behoben, indem beim Tippen und bei laufenden hass-Updates kein kompletter Studio-Render mehr ausgeloest wird.
- Live-Modellvorschau wird bei Transform-Eingaben direkt im DOM aktualisiert.
- Zoom, Schnellrotation, Skalierung, Spiegeln X/Y/Z und Zerren wurden als Bedienaktionen ergaenzt.
- Neue Zerr-X-/Zerr-Y-Felder; Strecken, Skalieren, Rotation und Spiegelung wirken sichtbar auf die Studio-Modellvorschau.
- Persistente Studio-Job-Transformdaten, Dry-Run-Planung und Health bleiben aktiv.
- Echtes Slicen und Direktdruck bleiben deaktiviert.


## 5.0.0-beta11 - Beta Foundation Gallery-to-Studio Workflow

### English
- Added a larger Beta Foundation step for the v5 Studio workflow.
- Added Gallery/File-Manager to 3D-Studio handoff while keeping the existing Bambu Studio original-3MF handoff unchanged.
- Promoted the previous isolated Studio preview into a persistent Studio job with model name, file path, source, transform data and profile context.
- Updated Dry-Run planning to use the active persistent Studio job.
- Expanded Studio health checks with active job, gallery handoff, transform state and persistent job store readiness.
- Preserved mobile scroll/focus state during Studio render updates.
- Real slicing and direct printing remain disabled.

### Deutsch
- Groesserer Beta-Foundation-Schritt fuer den v5-Studio-Workflow.
- Galerie/Dateimanager kann ein 3MF-Modell jetzt an das 3D-Studio uebergeben; der bestehende Bambu-Studio-Original-3MF-Import bleibt unveraendert.
- Die bisherige isolierte Studio-Vorschau wird zu einem persistenten Studio-Job mit Modellname, Dateipfad, Quelle, Transformdaten und Profilkontext.
- Dry-Run/Plan pruefen verwendet den aktiven persistenten Studio-Job.
- Studio-Health wurde um aktive Jobs, Galerie-Handoff, Transformstatus und persistenten Job-Store erweitert.
- Mobile Scroll-/Fokusposition bleibt bei Studio-Render-Updates erhalten.
- Echtes Slicen und Direktdruck bleiben deaktiviert.


# Changelog

## 5.0.0-beta11 - Consolidated Studio Dry-Run/Profile release

### Added
- Connected the isolated Studio card to the persistent backend profile bank.
- Added profile-bank backed printer, filament and process context for Dry-Run planning.
- Added dynamic project labels in the Studio card based on backend profile data with a safe fallback.
- Kept the local `studio_plan` fallback for Health validation.

### Fixed
- Changed the Studio Dry-Run WebSocket payload from `job` to `target_job`.
- Added backend compatibility for legacy `job` payloads to prevent WebSocket schema log errors.
- Consolidated the alpha20 recovery chain into a larger alpha21 test release.

### Safety
- Real slicing remains disabled.
- Direct print remains disabled.

## 5.0.0-beta11.6 - Studio plan fallback for isolated Dry-Run

### Fixed
- Added a local `studio_plan` fallback when the isolated Studio Dry-Run result does not return a plan object.
- Updated Health payloads so `studio_plan_present` can validate after "Plan prüfen".
- Kept the fallback strictly in planning mode with real slicing and direct printing disabled.

### Notes
- This remains part of the alpha20 recovery/test window.
- Real slicing and direct printing remain disabled.

## 5.0.0-beta11.5 - Isolated Studio Dry-Run plan UI

### Added
- Added backend Dry-Run execution from the isolated Studio card.
- Added static profile context handoff for printer, filament and process profile.
- Added frontend display for the returned Dry-Run and `studio_plan`.
- Updated Studio Health checks to include the latest Dry-Run result and Studio plan.

### Notes
- This is still part of the alpha20 recovery/test window.
- Real slicing and direct printing remain disabled.

## 5.0.0-beta11.4 - Studio frontend deduplication cleanup

### Fixed
- Removed duplicate isolated Studio frontend blocks from the alpha20.3 recovery build.
- Kept exactly one `printer-control-center-studio-card` implementation on the stable gallery frontend baseline.
- Preserved the working gallery/file-manager frontend and the isolated Studio buildplate view.

### Notes
- This is a cleanup hotfix for the alpha20 recovery/test window.
- Real slicing and direct printing remain disabled.

## 5.0.0-beta11.3 - Isolated Studio frontend rebuild

### Added
- Replaced the alpha20.2 placeholder with an isolated Studio/CAD card on top of the stable frontend baseline.
- Reintroduced a visible Studio workspace with toolbar, build plate, transform inspector and health check button.
- Kept gallery/file-manager frontend behavior isolated from the experimental Studio card.

### Notes
- This is still part of the alpha20 recovery/test window.
- Real slicing and direct printing remain disabled.

## 5.0.0-beta11.2 - Emergency frontend rollback

### Fixed
- Restored the frontend resource from the last stable v4.0.7 frontend baseline to recover custom element registration.
- Kept alpha20.1 backend modules, Studio WebSocket registration and diagnostics files in place.
- Added a minimal Studio fallback card so the Studio dashboard route stays loadable during frontend recovery.

### Notes
- This is an emergency frontend loading hotfix for the alpha20 test window.
- Real slicing and direct printing remain disabled.

## 5.0.0-beta11.1 - Init syntax hotfix

### Fixed
- Repaired `__init__.py` formatting after the alpha20 test-window build.
- Moved the Studio WebSocket import out of the `const` import block.
- Restored a valid multi-line Home Assistant integration module layout.

### Notes
- This is a syntax hotfix for the alpha20 test window, not a new feature alpha.
- Real slicing and direct printing remain disabled.

## 5.0.0-beta11 - Studio health test window

### Added
- Added a Studio health diagnostics backend for profile bank, Studio plan, Dry-Run and job UI state.
- Added `printer_control_center/studio/health` WebSocket command.
- Added a visible Studio Health panel with manual health check action.
- Added diagnostics-only safety reporting for real slicing and direct print flags.

### Notes
- This alpha is intended as the v5.20 practical test window.
- Real slicing and direct printing remain disabled.

## 5.0.0-beta11 - Studio job UI reads studio_plan

### Added
- Added Studio job badges derived from the shared `studio_plan` structure.
- Added a Studio plan details panel for job status, selected profiles, slicer stage and safety flags.
- Added frontend helpers to collect and normalize `studio_plan` data from job lists, job panels and Dry-Run results.
- Added automatic refresh of plan badges/details after Studio DOM updates and Dry-Run completion.

### Notes
- The Studio UI now treats `studio_plan` as the primary planning/status source where available.
- Real slicing and direct printing remain disabled.

## 5.0.0-beta11 - Persistent Studio job plan structure

### Added
- Added a shared `studio_plan` structure for persistent Studio jobs.
- Added `studio_plan.py` with normalized job, profile context, dry-run and slicer planning data.
- Added `studio_plan` output to Dry-Run worker results.
- Added frontend Studio plan summary rendering inside the Dry-Run result panel.

### Notes
- The new plan structure is a planning and validation scaffold for later slicer/worker integration.
- Real slicing and direct printing remain disabled.

## 5.0.0-beta11 - Dry-run result UI in Studio job panel

### Added
- Added a visible Dry-Run result panel for the Studio job workflow.
- Added frontend rendering for selected printer, filament and process profile context.
- Added display of Dry-Run validation status, warnings, timestamps and disabled real slicing/direct print flags.
- Added a wrapper around the Dry-Run action to capture and refresh the latest validation result.

### Notes
- This release only visualizes validation/planning data.
- Real slicing and direct printing remain disabled.

## 5.0.0-beta11 - Studio profile context for dry-run jobs

### Added
- Added frontend profile-context handoff for Studio Dry-Run jobs.
- Added printer, filament and process profile context to the Dry-Run worker request.
- Added backend normalization and validation for the supplied Studio profile context.
- Added Dry-Run result metadata for selected profiles and validation warnings.

### Notes
- The Dry-Run worker still performs validation only.
- Real slicing and direct printing remain disabled.

## 5.0.0-beta11 - Studio profile bank UI binding

### Added
- Added visible Studio UI binding for the persistent local profile bank.
- Added printer, filament and process profile selectors to the Studio workspace.
- Added profile summary values for build plate size, nozzle size, material, temperatures, volumetric speed, layer height and infill.
- Added reload and reset controls for the local profile bank.

### Notes
- The UI uses the standalone local profile bank introduced in alpha14.
- Real slicing and direct printing remain disabled.

## 5.0.0-beta11 - Persistent Studio profile bank backend

### Added
- Added a local persistent Studio profile bank backend using Home Assistant storage.
- Added default filament, process and printer profile structures for the v5 Studio workflow.
- Added WebSocket commands for loading, updating and resetting the profile bank.
- Added frontend helper methods for future Studio profile UI binding.

### Notes
- The profile bank is local and standalone. It does not depend on ha-bambulab or external Bambu integrations.
- Real slicing and direct printing remain disabled.

## 5.0.0-beta11 - Dry-run UI binding fix

### Fixed
- Added robust event binding for the Studio Dry-Run button.
- Bound the Dry-Run action after Studio job-panel decoration and DOM updates.
- Preserved Studio scroll/focus state while running the Dry-Run action from the mobile Home Assistant app.

### Notes
- This fixes the alpha12 UI binding warning. Real slicing and direct printing remain disabled.

## 5.0.0-beta11 - Slicer worker dry-run scaffold

### Added
- Added a backend dry-run worker scaffold for validating Studio slice jobs without executing a real slicer.
- Added a Studio worker WebSocket command for dry-run validation.
- Added frontend Dry-Run control for prepared slice jobs.
- Added validation output for model, printer, nozzle, process and basic slice settings.

### Notes
- Real slicing and direct printing remain disabled. This alpha prepares the backend execution path safely for later worker integration.

## 5.0.0-beta11 - Alpha10 test-window diagnostics fix

### Fixed
- Ensured the Studio self-test panel is actually decorated after Studio DOM updates.
- Corrected the displayed model label in the Studio diagnostics panel.
- Protected the Studio self-test update path with scroll and focus restoration for the mobile Home Assistant app.

### Notes
- This is a test-window fix for the alpha10 diagnostics build. Real slicer execution and direct printing remain disabled.

## 5.0.0-beta11 - First v5 Studio test-window diagnostics

### Added
- Added a Studio self-test WebSocket command for the first alpha10 test window.
- Added a Studio diagnostics panel showing version, WebSocket state, job count, model state, slicer-worker state and direct-print state.
- Added browser-local fallback diagnostics when the backend WebSocket is not yet available.
- Added automatic startup self-test preparation without enabling real slicing.

### Changed
- Alpha10 is the first planned validation window for the v5 Studio/CAD/Slice workflow.

### Notes
- Real slicer execution and direct printing are still disabled. This build is intended to make the first HA test structured and diagnosable.

## 5.0.0-beta11 - Backend job sync and worker-control UI

### Added
- Added Studio job-list synchronization against the persistent backend job store.
- Added worker-control UI groundwork for preparing, blocking and cancelling slice jobs.
- Added frontend status updates through the existing Studio job WebSocket update command.
- Added worker status fields to persistent Studio slice jobs.

### Changed
- Studio job handling now prefers backend-persistent jobs and keeps local browser storage as a fallback.

### Notes
- This alpha still does not start a real slicer worker. It prepares the control and status surface for the alpha10 test window.

## 5.0.0-beta11 - Studio WebSocket registration repair

### Added
- Added robust setup-function detection for registering the v5 Studio WebSocket commands.
- Added frontend synchronization groundwork for loading and clearing persistent backend slice jobs.

### Fixed
- Registered the Studio slice-job WebSocket backend in the integration setup flow.
- Updated v5 Studio slice-job schema markers to alpha8.

### Notes
- This alpha still avoids a real slicer execution. It prepares the backend command path for the alpha10 test window.

## 5.0.0-beta11 - Persistent Studio slice-job backend scaffold

### Added
- Added a persistent backend slice-job store for the v5 Studio workflow.
- Added Home Assistant WebSocket commands for listing, creating, updating and clearing Studio slice jobs.
- Added frontend job creation through the new backend WebSocket commands with local browser fallback.

### Fixed
- Scoped Studio mobile-stability cleanup to the Studio card instead of unrelated disconnected callbacks.

### Notes
- This alpha still does not execute a real slicer. It creates the backend job/status structure required for the later slicer worker.

## 5.0.0-beta11 - Mobile Studio stability and slice-job scaffold

### Added
- Added mobile scroll and focus preservation for the v5 Studio/CAD manager.
- Added DOM mutation handling so Studio panels can be re-decorated without forcing the mobile app back to the top.
- Added local slice-job storage, prepared job status and job list handling.
- Added a prepared slice-job action as groundwork for the future slicer worker.

### Fixed
- Reduced unwanted scroll resets during Studio/CAD render and state updates.
- Preserved active Studio input focus and cursor position where possible.

### Notes
- This alpha still does not run a real slicer. It prepares the internal job/status model for later worker integration.

## 5.0.0-beta11 - Slicer profile and slice-plan scaffold

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

## 5.0.0-beta11 - Gallery to Studio handoff

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

## 5.0.0-beta11 - v4 standalone backend sync and conflict recovery

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
