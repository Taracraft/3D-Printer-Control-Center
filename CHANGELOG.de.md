## 5.0.0-beta27 - Studio import popup and stable dropdown menus

### Deutsch
- Behält die aktuelle Studio-Basis ohne beta24-Rückschritt.
- Stabilisiert die kompakten Studio-Dropdown-Menüs, damit sie nicht direkt wieder unbeabsichtigt schließen.
- Zeigt den Studio-Import-Assistenten als Popup im Studio-Frame an, analog zur Galerie-/Warteschlangen-Bedienung.
- Entfernt keinen Workflow-Button und ändert keinen Renderpfad.
- Keine Kamera-, Dashboard-, Backend-Routen- oder Verbindungsänderungen.
- Echtes Slicen und Direktdruck bleiben deaktiviert.

### English
- Keeps the current Studio base without reverting to beta24.
- Stabilizes the compact Studio dropdown menus so they do not close unintentionally.
- Shows the Studio import assistant as an in-frame popup, aligned with the gallery/queue interaction model.
- Does not remove workflow buttons and does not change the render path.
- No camera, dashboard, backend-route or printer connection changes.
- Real slicing and direct printing remain disabled.


## 5.0.0-beta26 - Compact Studio toolbar, import handoff and single-frame rendering

### Deutsch
- Behält die beta25-Rollback-Basis und lässt beta24 entfernt.
- Ersetzt die lange beta23-Icon-Leiste durch eine kompakte eckige Bambu-Studio-artige Werkzeugleiste mit Dropdown-Gruppen.
- Lässt die Workflow-Leiste mit Importieren, Löschen, Plan prüfen, Health prüfen und Jobs neu laden sichtbar.
- Repariert den Workflow-Import-Button, sodass der vorhandene beta7-Galerie-/Archiv-/SD-Import-Assistent öffnet.
- Akzeptiert 3MF-Studio-Jobs als renderbar und lässt die bestehende Mesh-Link-Pipeline STL/Geometrie vom Backend anfordern.
- Stabilisiert das Rendering auf einen requestAnimationFrame-basierten Mesh-Canvas-Render pro Frame.
- Keine Kamera-, Dashboard-, Backend-Routen- oder Verbindungsänderungen.
- Echtes Slicen und Direktdruck bleiben deaktiviert.

### English
- Keeps the beta25 rollback base and keeps beta24 removed.
- Replaces the long beta23 icon row with a compact square Bambu Studio inspired toolbar using dropdown groups.
- Keeps the workflow row with Import, Delete, Plan check, Health check and Jobs reload visible.
- Fixes the workflow Import button so it opens the existing beta7 gallery/archive/SD import assistant.
- Accepts 3MF Studio jobs as renderable and lets the existing mesh-link pipeline request STL/geometry from the backend.
- Stabilizes rendering to one requestAnimationFrame-based mesh canvas render per frame.
- No camera, dashboard, backend-route or printer connection changes.
- Real slicing and direct printing remain disabled.


## 5.0.0-beta25 - Revert beta24 Studio cleanup regression

### English
- Reverts the beta24 Studio cleanup regression.
- Restores the beta23 Studio base with grid, mouse controls, gallery import and icon toolbar.
- Restores the normal workflow button row with Import, Delete, Plan check, Health check and Jobs reload.
- Removes the beta24 single-render cleanup layer that hid the workflow row and continued touching the Studio DOM.
- No camera, dashboard, backend-route or printer connection changes.
- Real slicing and direct printing remain disabled.

### Deutsch
- Macht die beta24-Studio-Cleanup-Regression rückgängig.
- Stellt die beta23-Studio-Basis mit Raster, Maussteuerung, Galerie-Import und Icon-Toolbar wieder her.
- Stellt die normale Workflow-Buttonzeile mit Importieren, Löschen, Plan prüfen, Health prüfen und Jobs neu laden wieder her.
- Entfernt die beta24-Single-Render-Cleanup-Schicht, die die Workflow-Leiste versteckt und weiter am Studio-DOM gearbeitet hat.
- Keine Kamera-, Dashboard-, Backend-Routen- oder Verbindungsänderungen.
- Echtes Slicen und Direktdruck bleiben deaktiviert.


## 5.0.0-beta24 - Studio single render state stabilization

### English
- Keeps the beta9 plate selector, beta20 primitives/rulers, beta21 filled mesh rendering, beta22 top toolbar/color editing and beta23 grid/mouse/icon base.
- Stabilizes Studio to one active render state and one active mesh canvas render loop.
- Rehydrates primitive meshes from the active primitive job before rendering so First Layer/cube/cuboid/cylinder no longer disappear after reload.
- Keeps First Layer at 256 x 256 mm for the Bambu A1 footprint.
- Hides old lower status/Dry-Run/STL fallback message bars and removes duplicate legacy toolbar rows.
- Stabilizes beta9 plate selector application after plate changes.
- Keeps right-click blocking limited to the buildplate interaction area.
- No camera, dashboard, backend-route or printer connection changes.
- Real slicing and direct printing remain disabled.

### Deutsch
- Behält beta9-Druckplattenauswahl, beta20-Primitive/Lineale, beta21-gefülltes Mesh-Rendering, beta22-Top-Toolbar/Farbsteuerung und beta23-Raster/Maus/Icon-Basis.
- Stabilisiert das Studio auf einen aktiven Renderzustand und einen aktiven Mesh-Canvas-Renderlauf.
- Rehydriert Primitive-Meshes vor jedem Render aus dem aktiven Primitive-Job, damit First Layer/Würfel/Quader/Zylinder nicht nach Reload verschwinden.
- Hält First Layer auf 256 x 256 mm für die Bambu-A1-Bettfläche.
- Blendet alte untere Status-/Dry-Run-/STL-Fallback-Leisten aus und entfernt doppelte Legacy-Toolbar-Zeilen.
- Stabilisiert die beta9-Druckplattenauswahl nach Plattenwechseln.
- Beschränkt Rechtsklick-Blocking auf den Buildplate-Interaktionsbereich.
- Keine Kamera-, Dashboard-, Backend-Routen- oder Verbindungsänderungen.
- Echtes Slicen und Direktdruck bleiben deaktiviert.


## 5.0.0-beta23 - Studio grid, mouse controls, gallery import and SVG toolbar icons

### English
- Keeps the beta9 plate selector, beta20 primitives/rulers, beta21 filled mesh renderer and beta22 top-toolbar/color base.
- Corrects the First Layer primitive to the Bambu A1 build volume footprint of 256 x 256 mm.
- Reintroduces a subtle buildplate grid in Studio.
- Adds mouse controls: hold left mouse button to rotate the object, hold right mouse button to move it.
- Disables the Studio right-click context menu completely.
- Replaces text-like toolbar controls with inline SVG icon buttons.
- Adds a Gallery import button to the top toolbar.
- Filters non-renderable phantom gallery jobs unless a real STL/OBJ/mesh source is available.
- Improves ruler readability with boxed labels for width, length and height.
- No camera, dashboard or printer connection changes.
- Real slicing and direct printing remain disabled.

### Deutsch
- Behält beta9-Druckplattenauswahl, beta20-Primitive/Lineale, beta21-gefülltes Mesh-Rendering und beta22-Top-Toolbar/Farbbasis.
- Korrigiert das First-Layer-Primitive auf die Bambu-A1-Bettfläche von 256 x 256 mm.
- Fügt im Studio wieder ein dezentes Buildplate-Raster ein.
- Ergänzt Mausbedienung: linke Maustaste halten zum Drehen, rechte Maustaste halten zum Verschieben.
- Deaktiviert das Studio-Rechtsklickmenü vollständig.
- Ersetzt textartige Toolbar-Controls durch Inline-SVG-Icon-Buttons.
- Ergänzt einen Galerie-Import-Button in der oberen Toolbar.
- Filtert nicht renderbare Phantom-Galerie-Jobs, sofern keine echte STL-/OBJ-/Mesh-Quelle vorhanden ist.
- Verbessert die Lesbarkeit der Lineale mit hinterlegten Labels für Breite, Länge und Höhe.
- Keine Kamera-, Dashboard- oder Verbindungsänderungen.
- Echtes Slicen und Direktdruck bleiben deaktiviert.


## 5.0.0-beta22 - Studio top toolbar and object color editing

### English
- Keeps the confirmed beta9 buildplate selector, beta20 primitives/rulers and beta21 real mesh rendering as active base.
- Removes the lower Studio status/Dry-Run message area from the visible UI.
- Hides the right Transform inspector and moves object editing into a Bambu Studio inspired top toolbar.
- Adds top toolbar controls for move, Z movement, rotation, scale, stretch, mirror, skew, center, zoom, lay-flat, reset and delete.
- Adds object color editing with a color picker and quick swatches.
- Applies selected object color to the filled shaded mesh renderer; later filament-color binding can reuse this color state.
- No camera, dashboard or printer connection changes.
- Real slicing and direct printing remain disabled.

### Deutsch
- Behält die bestätigte beta9-Druckplattenauswahl sowie beta20-Primitive/Lineale und beta21-echtes Mesh-Rendering als aktive Basis.
- Entfernt den unteren sichtbaren Studio-Status-/Dry-Run-Meldungsbereich.
- Blendet den rechten Transform-Inspector aus und verschiebt die Objektbearbeitung in eine Bambu-Studio-ähnliche obere Werkzeugleiste.
- Ergänzt obere Bearbeitungsbuttons für Verschieben, Z-Bewegung, Drehen, Skalieren, Strecken, Spiegeln, Zerren, Zentrieren, Zoom, Flachlegen, Reset und Löschen.
- Ergänzt Objektfarbe/Einfärben über Farbwähler und Schnellfarben.
- Die gewählte Objektfarbe wird auf das gefüllte schattierte Mesh-Rendering angewendet; spätere Filamentfarb-Zuordnung kann diesen Farbzustand übernehmen.
- Keine Kamera-, Dashboard- oder Verbindungsänderungen.
- Echtes Slicen und Direktdruck bleiben deaktiviert.


## 5.0.0-beta21 - Real Studio rendering and phantom-state fix

### English
- Keeps the confirmed beta9 Bambu-style Studio buildplate selector as the active base.
- Fixes primitive objects switching back to an old gallery job by locking primitive state and blocking stale non-primitive reloads.
- Clears phantom/stale objects from the buildplate when no valid Studio object is active.
- Replaces the Studio wireframe-only canvas path with filled shaded triangle rendering on the existing 2D canvas.
- Keeps measurement rulers and red object-bound markers.
- Keeps the existing STL/geometry mesh loading path for imported models.
- No camera, dashboard or printer connection changes.
- Real slicing and direct printing remain disabled.

### Deutsch
- Behält die bestätigte beta9-Bambu-Studio-Druckplattenauswahl als aktive Basis.
- Behebt das Zurückspringen von Primitiven auf alte Galerie-Jobs, indem Primitive exklusiv aktiv bleiben und alte Nicht-Primitive-Reloads blockiert werden.
- Entfernt Phantom-/Altobjekte von der Buildplate, wenn kein gültiges Studio-Objekt aktiv ist.
- Ersetzt die reine Drahtgitter-Canvas-Darstellung durch gefülltes, schattiertes Dreiecks-Rendering auf dem bestehenden 2D-Canvas.
- Behält Maßlineale und rote Objektgrenzen-Marker.
- Behält den vorhandenen STL-/Geometrie-Mesh-Ladepfad für importierte Modelle.
- Keine Kamera-, Dashboard- oder Verbindungsänderungen.
- Echtes Slicen und Direktdruck bleiben deaktiviert.


## 5.0.0-beta20 - Studio 3D mesh primitives and rulers

### English
- Keeps the confirmed beta9 Bambu-style Studio buildplate selector as the active base.
- Adds additive Studio primitives: cube, cuboid, cylinder and first-layer test body.
- Generates real triangle meshes for primitive objects and renders them through the existing Studio mesh canvas.
- Adds measurement rulers for width, length and height, with subtle red start/end markers based on the currently rendered object bounds.
- Removes the Studio raster/grid overlay while keeping the selected beta9 buildplate skin and plate selection intact.
- Keeps the existing STL/geometry mesh loading path for gallery/imported models.
- No camera, dashboard or printer connection changes.
- Real slicing and direct printing remain disabled.

### Deutsch
- Behält die bestätigte beta9-Bambu-Studio-Druckplattenauswahl als aktive Basis.
- Ergänzt additive Studio-Primitive: Würfel, Quader, Zylinder und First-Layer-Testkörper.
- Erzeugt echte Dreiecks-Meshes für Primitive und rendert sie über den bestehenden Studio-Mesh-Canvas.
- Ergänzt Maßlineale für Breite, Länge und Höhe mit dezenten roten Start-/Endmarkern anhand der aktuell gerenderten Objektgrenzen.
- Entfernt das Studio-Raster/Grid, ohne die gewählte beta9-Buildplate-Oberfläche oder Druckplattenauswahl zu verändern.
- Behält den vorhandenen STL-/Geometrie-Mesh-Ladepfad für Galerie-/Importmodelle.
- Keine Kamera-, Dashboard- oder Verbindungsänderungen.
- Echtes Slicen und Direktdruck bleiben deaktiviert.


## 5.0.0-beta19 - Stable camera snapshot and UTF-8 cleanup

### English
- Reverts the beta17 backend camera route experiment when present.
- Keeps the working native Home Assistant camera/proxy path.
- Stops changing the camera image URL on every render to avoid continuous snapshot refresh.
- Cleans remaining UTF-8/mojibake labels in the Printer Control Center source and dashboard definitions.
- Keeps the good beta9 Studio buildplate selector/runtime unchanged.
- Real slicing and direct printing remain disabled.

### Deutsch
- Macht das beta17-Backend-Kamera-Routenexperiment rückgängig, falls es im aktiven Code vorhanden war.
- Behält den funktionierenden nativen Home-Assistant-Kamera-/Proxy-Pfad.
- Ändert die Kamera-Bild-URL nicht mehr bei jedem Rendern, damit das Snapshot-Bild nicht dauerhaft neu lädt.
- Bereinigt verbleibende UTF-8-/Mojibake-Labels in den Printer-Control-Center-Quellen und Dashboard-Definitionen.
- Behält die gute beta9-Studio-Buildplate-/Selector-Laufzeit unverändert.
- Echtes Slicen und Direktdruck bleiben deaktiviert.


## 5.0.0-beta18 - Revert beta17 backend camera route

### English
- Reverts the beta17 backend camera route experiment.
- Restores the beta16 camera rendering path, using the native Home Assistant camera entity/proxy path again.
- Keeps the good beta9 Studio buildplate selector/runtime unchanged.
- Removes the custom `/api/printer_control_center/camera/...` frontend dependency from the active card code.
- Real slicing and direct printing remain disabled.

### Deutsch
- Macht das beta17-Backend-Kamera-Routenexperiment rückgängig.
- Stellt den beta16-Kamera-Renderpfad wieder her, der wieder die native Home-Assistant-Kamera-Entity beziehungsweise den Proxy-Pfad nutzt.
- Behält die gute beta9-Studio-Buildplate-/Selector-Laufzeit unverändert.
- Entfernt die Custom-Route `/api/printer_control_center/camera/...` aus dem aktiven Frontendpfad.
- Echtes Slicen und Direktdruck bleiben deaktiviert.


## 5.0.0-beta17 - Backend Camera Route Fix

### English
- Keeps the good beta9 Studio buildplate selector/runtime as active base.
- Adds an authenticated Printer Control Center camera route at `/api/printer_control_center/camera/{serial}.jpg`.
- Stops relying on unauthenticated Home Assistant `camera_proxy` URLs in the dashboard card.
- Adds backend TCP-6000 HTTP/MJPEG probing for Bambu A1/P1-style native camera endpoints.
- Returns a clear JSON error from the backend when TCP 6000 does not deliver a JPEG frame.
- No model-specific X1 workplace logic, no frontend camera overlay and no Studio/Bett runtime changes.
- Real slicing and direct printing remain disabled.

### Deutsch
- Behält die gute beta9-Studio-Buildplate-/Selector-Laufzeit als aktive Basis.
- Ergänzt eine authentifizierte Printer-Control-Center-Kameraroute unter `/api/printer_control_center/camera/{serial}.jpg`.
- Das Dashboard hängt nicht mehr an tokenlosen Home-Assistant-`camera_proxy`-URLs.
- Ergänzt backendseitige TCP-6000-HTTP/MJPEG-Prüfung für native Bambu-A1/P1-artige Kamera-Endpunkte.
- Liefert einen klaren JSON-Fehler aus dem Backend, wenn TCP 6000 kein JPEG-Frame liefert.
- Keine X1-Arbeitsplatz-Sonderlogik, kein Frontend-Kamera-Overlay und keine Studio-/Bett-Laufzeitänderung.
- Echtes Slicen und Direktdruck bleiben deaktiviert.


## 5.0.0-beta16 - Camera Snapshot Authority

### English
- Keeps the good beta9 Studio buildplate selector/runtime as active base.
- Fixes the blank camera box by preferring the Home Assistant camera snapshot path first.
- Uses `entity_picture` or `/api/camera_proxy/...` as the primary camera source and only falls back to `/api/camera_proxy_stream/...` when no snapshot source is available.
- Adds cache busting for snapshot camera URLs so the printer dashboard refreshes the image reliably.
- Keeps generic camera entity scoring for `camera.*_native_live_camera`.
- No model-specific X1 workplace logic, no overlay camera injection and no Studio/Bett runtime changes.
- Real slicing and direct printing remain disabled.

### Deutsch
- Behält die gute beta9-Studio-Buildplate-/Selector-Laufzeit als aktive Basis.
- Behebt das leere Kamerafeld, indem der Home-Assistant-Kamera-Snapshot-Pfad zuerst verwendet wird.
- Nutzt `entity_picture` oder `/api/camera_proxy/...` als primäre Kameraquelle und fällt nur auf `/api/camera_proxy_stream/...` zurück, wenn keine Snapshot-Quelle vorhanden ist.
- Ergänzt Cache-Busting für Snapshot-Kamera-URLs, damit das Drucker-Dashboard das Bild zuverlässig aktualisiert.
- Robuste generische Kamera-Entity-Bewertung für `camera.*_native_live_camera` bleibt erhalten.
- Keine X1-Arbeitsplatz-Sonderlogik, keine Overlay-Kamera-Injection und keine Studio-/Bett-Laufzeitänderung.
- Echtes Slicen und Direktdruck bleiben deaktiviert.


## 5.0.0-beta15 - Camera Source Authority

### English
- Keeps the good beta9 Studio buildplate selector/runtime as active base.
- Makes the native Home Assistant camera entity the primary media source when a usable `camera.*` entity exists.
- Camera rendering is no longer blocked by the printer online sensor or by the old camera-visible default.
- Adds robust generic camera entity scoring so `camera.*_native_live_camera` is found even when the printer prefix mapping differs.
- Uses `entity_picture`, `/api/camera_proxy/...` and `/api/camera_proxy_stream/...` through the existing render path.
- Keeps transport/port-based snapshot fallback for RTSP/RTSPS/TCP 322 style cameras.
- No model-specific X1 workplace logic, no overlay camera injection and no Studio/Bett runtime changes.
- Real slicing and direct printing remain disabled.

### Deutsch
- Behält die gute beta9-Studio-Buildplate-/Selector-Laufzeit als aktive Basis.
- Macht die native Home-Assistant-Kamera-Entity zur primären Medienquelle, sobald eine nutzbare `camera.*`-Entity vorhanden ist.
- Kameraanzeige wird nicht mehr durch den Drucker-Online-Sensor oder den alten Camera-Visible-Default blockiert.
- Robuste generische Kamera-Entity-Bewertung ergänzt, damit `camera.*_native_live_camera` auch bei abweichendem Prefix-Mapping gefunden wird.
- Nutzt `entity_picture`, `/api/camera_proxy/...` und `/api/camera_proxy_stream/...` über den vorhandenen Renderpfad.
- Behält Transport-/Port-basierten Snapshot-Fallback für RTSP/RTSPS/TCP-322-Kameras.
- Keine X1-Arbeitsplatz-Sonderlogik, keine Overlay-Kamera-Injection und keine Studio-/Bett-Laufzeitänderung.
- Echtes Slicen und Direktdruck bleiben deaktiviert.


## 5.0.0-beta14 - Camera Renderpath Recovery

### English
- Keeps the good beta9 Studio buildplate selector/runtime as active base.
- Restores the printer dashboard camera through the real render path: `cameraProxy()` -> `mediaSource()` -> `mediaHtml()`.
- Uses generic Home Assistant camera handling via `camera.*_native_live_camera`, `entity_picture`, `/api/camera_proxy/...` and `/api/camera_proxy_stream/...`.
- Uses transport/port information to decide between live stream and snapshot fallback; no model-specific X1 workplace logic was added.
- Removes overlay-style camera injection from the recovery path.
- Real slicing and direct printing remain disabled.

### Deutsch
- Behält die gute beta9-Studio-Buildplate-/Selector-Laufzeit als aktive Basis.
- Stellt die Kamera der Druckerkarte über den echten Renderpfad wieder her: `cameraProxy()` -> `mediaSource()` -> `mediaHtml()`.
- Nutzt generische Home-Assistant-Kamera-Verarbeitung über `camera.*_native_live_camera`, `entity_picture`, `/api/camera_proxy/...` und `/api/camera_proxy_stream/...`.
- Entscheidet anhand Transport/Port zwischen Live-Stream und Snapshot-Fallback; es wurde keine X1-Arbeitsplatz-Sonderlogik eingebaut.
- Overlay-artige Kamera-Injection wird im Recovery-Pfad nicht verwendet.
- Echtes Slicen und Direktdruck bleiben deaktiviert.


## 5.0.0-beta13 - Recovery Stable Studio UI

### English
- Recovered the active Studio runtime from the beta12 overlay regression.
- Removed the beta12 hass setter / flicker guard from active frontend code.
- Restored the beta11 runtime base and added a non-invasive stable cleanup layer.
- Prevented old and new Studio selector/buildplate DOM blocks from being displayed on top of each other.
- Kept only one printer/plate/object selector instance active.
- Kept only one buildplate skin active and refreshed it only when necessary.
- Preserved beta11 top-navigation cleanup and primitive mesh rendering.
- Real slicing and direct printing remain disabled.

### Deutsch
- Aktive Studio-Laufzeit von der beta12-Overlay-Regression erholt.
- beta12-Hass-Setter/Flicker-Guard aus dem aktiven Frontend-Code entfernt.
- beta11-Laufzeitbasis wiederhergestellt und eine nicht-invasive stabile Cleanup-Schicht ergänzt.
- Alte und neue Studio-Selector-/Buildplate-DOM-Blöcke werden nicht mehr übereinander angezeigt.
- Es bleibt genau ein Drucker-/Platten-/Objektselector aktiv.
- Es bleibt genau ein Buildplate-Skin aktiv und wird nur bei Bedarf aktualisiert.
- beta11-Bereinigung der oberen Navigation und Primitive-Mesh-Rendering bleiben erhalten.
- Echtes Slicen und Direktdruck bleiben deaktiviert.


## 5.0.0-beta12 - Studio Flicker Guard

### English
- Added a Studio flicker guard for Home Assistant state refreshes.
- Debounced Studio cleanup so selector, buildplate and object overlays are not rebuilt on every HA update.
- Kept the build plate skin in place and only refreshes it when the selected plate actually changes.
- Kept the printer/plate/object selector stable and only rerenders it when dropdown state or selected plate changes.
- Added an interaction guard for active inputs, dropdowns and drag operations.
- Suppressed stale job/object display when no model should be active.
- Preserved the beta11 navigation cleanup and primitive mesh rendering.
- Real slicing and direct printing remain disabled.

### Deutsch
- Studio-Flicker-Guard für Home-Assistant-State-Refreshes ergänzt.
- Studio-Cleanup wird entprellt, damit Selector, Buildplate und Objekt-Overlays nicht bei jedem HA-Update neu aufgebaut werden.
- Buildplate-Skin bleibt im DOM und wird nur aktualisiert, wenn die ausgewählte Platte wirklich wechselt.
- Drucker-/Platten-/Objektselector bleibt stabil und rendert nur neu, wenn Dropdownstatus oder Platte geändert werden.
- Interaktionsschutz für aktive Eingabefelder, Dropdowns und Drag-Vorgänge ergänzt.
- Alte Job-/Objektanzeigen werden unterdrückt, wenn kein Modell aktiv sein soll.
- beta11-Navigationsbereinigung und Primitive-Mesh-Rendering bleiben erhalten.
- Echtes Slicen und Direktdruck bleiben deaktiviert.


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


# Änderungsprotokoll

## 5.0.0-beta11 - Konsolidiertes Studio-Dry-Run-/Profilbank-Release

### Hinzugefügt
- Isolierte Studio-Karte an die persistente Backend-Profilbank angebunden.
- Drucker-, Filament- und Prozesskontext für die Dry-Run-Planung aus der Profilbank ergänzt.
- Dynamische Projektanzeige in der Studio-Karte anhand der Backend-Profildaten mit sicherem Fallback ergänzt.
- Lokaler `studio_plan`-Fallback für die Health-Validierung bleibt erhalten.

### Behoben
- Studio-Dry-Run-WebSocket-Nutzdaten von `job` auf `target_job` umgestellt.
- Backend-Kompatibilität für alte `job`-Nutzdaten ergänzt, damit keine WebSocket-Schemafehler mehr geloggt werden.
- alpha20-Recovery-Strang zu einem größeren alpha21-Testrelease konsolidiert.

### Sicherheit
- Echtes Slicen bleibt deaktiviert.
- Direktdruck bleibt deaktiviert.

## 5.0.0-beta11.6 - Studio-Plan-Fallback für isolierten Dry-Run

### Behoben
- Lokalen `studio_plan`-Fallback ergänzt, falls der isolierte Studio-Dry-Run kein Planobjekt zurückgibt.
- Health-Nutzdaten so erweitert, dass `studio_plan_present` nach „Plan prüfen“ validieren kann.
- Fallback bleibt strikt im Planungsmodus; echtes Slicen und Direktdruck bleiben deaktiviert.

### Hinweise
- Dieser Stand gehört weiterhin zum alpha20-Recovery-/Testfenster.
- Echtes Slicen und Direktdruck bleiben weiterhin deaktiviert.

## 5.0.0-beta11.5 - Isolierter Studio-Dry-Run-Plan

### Hinzugefügt
- Backend-Dry-Run-Ausführung aus der isolierten Studio-Karte ergänzt.
- Statische Profilkontext-Übergabe für Drucker-, Filament- und Prozessprofil ergänzt.
- Frontend-Anzeige für zurückgegebenen Dry-Run und `studio_plan` ergänzt.
- Studio-Health-Prüfung nutzt jetzt das letzte Dry-Run-Ergebnis und den Studio-Plan.

### Hinweise
- Dieser Stand gehört weiterhin zum alpha20-Recovery-/Testfenster.
- Echtes Slicen und Direktdruck bleiben weiterhin deaktiviert.

## 5.0.0-beta11.4 - Studio-Frontend-Deduplizierung

### Behoben
- Doppelte isolierte Studio-Frontend-Blöcke aus dem alpha20.3-Recovery-Build entfernt.
- Exakt eine `printer-control-center-studio-card`-Implementierung auf stabiler Galerie-Frontendbasis beibehalten.
- Funktionierende Galerie-/Dateimanager-Ansicht und isolierte Studio-Buildplate-Ansicht bleiben erhalten.

### Hinweise
- Dies ist ein Cleanup-Hotfix für das alpha20-Recovery-/Testfenster.
- Echtes Slicen und Direktdruck bleiben weiterhin deaktiviert.

## 5.0.0-beta11.3 - Isolierter Studio-Frontend-Rebuild

### Hinzugefügt
- alpha20.2-Platzhalter durch eine isolierte Studio-/CAD-Karte auf stabiler Frontendbasis ersetzt.
- Sichtbaren Studio-Arbeitsbereich mit Werkzeugleiste, Druckplatte, Transform-Inspector und Health-Check-Schaltfläche wieder eingeführt.
- Galerie-/Dateimanager-Frontend bleibt von der experimentellen Studio-Karte getrennt.

### Hinweise
- Dieser Stand gehört weiterhin zum alpha20-Recovery-/Testfenster.
- Echtes Slicen und Direktdruck bleiben weiterhin deaktiviert.

## 5.0.0-beta11.2 - Notfall-Frontend-Rollback

### Behoben
- Frontend-Ressource aus dem letzten stabilen v4.0.7-Frontendstand wiederhergestellt, damit Custom-Element-Registrierungen wieder funktionieren.
- alpha20.1-Backendmodule, Studio-WebSocket-Registrierung und Diagnose-Dateien bleiben erhalten.
- Minimale Studio-Fallback-Karte ergänzt, damit die Studio-Dashboardroute während der Frontend-Reparatur ladbar bleibt.

### Hinweise
- Dies ist ein Notfall-Hotfix für das Frontend-Laden im alpha20-Testfenster.
- Echtes Slicen und Direktdruck bleiben weiterhin deaktiviert.

## 5.0.0-beta11.1 - Init-Syntax-Hotfix

### Behoben
- Formatierung von `__init__.py` nach dem alpha20-Testfenster repariert.
- Studio-WebSocket-Import aus dem `const`-Importblock herausgelöst.
- Gültigen mehrzeiligen Home-Assistant-Integrationsaufbau wiederhergestellt.

### Hinweise
- Dies ist ein Syntax-Hotfix für das alpha20-Testfenster, keine neue Feature-Alpha.
- Echtes Slicen und Direktdruck bleiben weiterhin deaktiviert.

## 5.0.0-beta11 - Studio-Health-Testfenster

### Hinzugefügt
- Studio-Health-Diagnosebackend für Profilbank, Studio-Plan, Dry-Run und Job-UI-Zustand ergänzt.
- WebSocket-Befehl `printer_control_center/studio/health` ergänzt.
- Sichtbares Studio-Health-Panel mit manueller Prüfaktion ergänzt.
- Reine Diagnoseausgabe für Safety-Flags zu echtem Slicen und Direktdruck ergänzt.

### Hinweise
- Diese Alpha ist als praktisches v5.20-Testfenster vorgesehen.
- Echtes Slicen und Direktdruck bleiben weiterhin deaktiviert.

## 5.0.0-beta11 - Studio-Job-UI liest studio_plan

### Hinzugefügt
- Studio-Job-Badges aus der gemeinsamen `studio_plan`-Struktur ergänzt.
- Studio-Plan-Detailpanel für Jobstatus, ausgewählte Profile, Slicer-Stufe und Safety-Flags ergänzt.
- Frontend-Hilfen zum Sammeln und Normalisieren von `studio_plan`-Daten aus Jobliste, Jobpanel und Dry-Run-Ergebnissen ergänzt.
- Automatische Aktualisierung von Plan-Badges und Details nach Studio-DOM-Updates und Dry-Run-Abschluss ergänzt.

### Hinweise
- Die Studio-UI verwendet `studio_plan` jetzt, sofern vorhanden, als primäre Planungs- und Statusquelle.
- Echtes Slicen und Direktdruck bleiben weiterhin deaktiviert.

## 5.0.0-beta11 - Persistente Studio-Job-Planstruktur

### Hinzugefügt
- Gemeinsame `studio_plan`-Struktur für persistente Studio-Jobs ergänzt.
- Neues Modul `studio_plan.py` mit normalisierten Job-, Profilkontext-, Dry-Run- und Slicer-Planungsdaten ergänzt.
- Dry-Run-Worker-Ergebnisse enthalten jetzt zusätzlich `studio_plan`.
- Frontend-Anzeige der Studio-Plan-Zusammenfassung im Dry-Run-Ergebnispanel ergänzt.

### Hinweise
- Die neue Planstruktur ist ein Planungs- und Validierungsgerüst für spätere Slicer-/Worker-Anbindung.
- Echtes Slicen und Direktdruck bleiben weiterhin deaktiviert.

## 5.0.0-beta11 - Dry-Run-Ergebnis im Studio-Jobpanel

### Hinzugefügt
- Sichtbares Dry-Run-Ergebnispanel für den Studio-Jobworkflow ergänzt.
- Frontend-Anzeige für ausgewählten Drucker-, Filament- und Prozessprofilkontext ergänzt.
- Anzeige von Dry-Run-Validierungsstatus, Warnungen, Zeitstempel sowie deaktiviertem echtem Slicen und Direktdruck ergänzt.
- Wrapper um die Dry-Run-Aktion ergänzt, damit das letzte Validierungsergebnis übernommen und aktualisiert wird.

### Hinweise
- Dieser Stand visualisiert ausschließlich Validierungs- und Planungsdaten.
- Echtes Slicen und Direktdruck bleiben weiterhin deaktiviert.

## 5.0.0-beta11 - Studio-Profilkontext für Dry-Run-Jobs

### Hinzugefügt
- Frontend-Übergabe des Profilkontexts für Studio-Dry-Run-Jobs ergänzt.
- Drucker-, Filament- und Prozessprofilkontext wird an den Dry-Run-Worker übergeben.
- Backend-Normalisierung und Validierung für den übergebenen Studio-Profilkontext ergänzt.
- Dry-Run-Ergebnis um ausgewählte Profile und Validierungswarnungen erweitert.

### Hinweise
- Der Dry-Run-Worker führt weiterhin nur Validierung aus.
- Echtes Slicen und Direktdruck bleiben weiterhin deaktiviert.

## 5.0.0-beta11 - Studio-Profilbank-UI-Anbindung

### Hinzugefügt
- Sichtbare Studio-UI-Anbindung für die persistente lokale Profilbank ergänzt.
- Auswahlfelder für Drucker-, Filament- und Prozessprofile im Studio-Workspace ergänzt.
- Profilzusammenfassung für Druckplattengröße, Düsengröße, Material, Temperaturen, Volumenstrom, Layerhöhe und Infill ergänzt.
- Neu-laden- und Zurücksetzen-Steuerung für die lokale Profilbank ergänzt.

### Hinweise
- Die UI verwendet die standalone lokale Profilbank aus alpha14.
- Echtes Slicen und Direktdruck bleiben weiterhin deaktiviert.

## 5.0.0-beta11 - Persistente Studio-Profilbank im Backend

### Hinzugefügt
- Lokale persistente Studio-Profilbank im Backend über Home-Assistant-Storage ergänzt.
- Standardstrukturen für Filament-, Prozess- und Druckerprofile für den v5-Studio-Workflow ergänzt.
- WebSocket-Befehle zum Laden, Aktualisieren und Zurücksetzen der Profilbank ergänzt.
- Frontend-Hilfsmethoden für die spätere Studio-Profil-UI-Anbindung ergänzt.

### Hinweise
- Die Profilbank ist lokal und standalone. Sie hängt nicht von ha-bambulab oder externen Bambu-Integrationen ab.
- Echtes Slicen und Direktdruck bleiben weiterhin deaktiviert.

## 5.0.0-beta11 - Dry-Run-UI-Binding-Fix

### Behoben
- Robustes Event-Binding für den Studio-Dry-Run-Button ergänzt.
- Dry-Run-Aktion nach Studio-Jobpanel-Dekoration und DOM-Aktualisierungen angebunden.
- Studio-Scroll- und Fokuszustand beim Ausführen der Dry-Run-Aktion in der mobilen Home-Assistant-App geschützt.

### Hinweise
- Dieser Stand behebt die alpha12-UI-Binding-Warnung. Echtes Slicen und Direktdruck bleiben weiterhin deaktiviert.

## 5.0.0-beta11 - Slicer-Worker-Dry-Run-Grundlage

### Hinzugefügt
- Backend-Dry-Run-Worker-Grundlage zur Validierung von Studio-Slice-Jobs ergänzt, ohne einen echten Slicer auszuführen.
- Studio-Worker-WebSocket-Kommando für Dry-Run-Validierung ergänzt.
- Frontend-Dry-Run-Steuerung für vorbereitete Slice-Jobs ergänzt.
- Validierungsausgabe für Modell, Drucker, Düse, Prozess und grundlegende Slice-Einstellungen ergänzt.

### Hinweise
- Echtes Slicen und Direktdruck bleiben deaktiviert. Dieses Alpha bereitet den Backend-Ausführungspfad sicher für die spätere Worker-Integration vor.

## 5.0.0-beta11 - Alpha10-Testfenster-Diagnosefix

### Behoben
- Sichergestellt, dass das Studio-Selbsttestpanel nach Studio-DOM-Aktualisierungen wirklich nachgerüstet wird.
- Modellanzeige im Studio-Diagnosepanel korrigiert.
- Studio-Selbsttest-Aktualisierung mit Scroll- und Fokus-Wiederherstellung für die mobile Home-Assistant-App abgesichert.

### Hinweise
- Dies ist ein Testfenster-Fix für den alpha10-Diagnosebuild. Echter Slicer-Lauf und Direktdruck bleiben weiterhin deaktiviert.

## 5.0.0-beta11 - Erstes v5-Studio-Testfenster mit Diagnose

### Hinzugefügt
- Studio-Selbsttest-WebSocket-Kommando für das erste alpha10-Testfenster ergänzt.
- Studio-Diagnosepanel mit Version, WebSocket-Status, Jobanzahl, Modellstatus, Slicer-Worker-Status und Direktdruckstatus ergänzt.
- Browser-lokaler Diagnose-Fallback ergänzt, falls der Backend-WebSocket noch nicht verfügbar ist.
- Automatische Selbsttest-Vorbereitung beim Start ergänzt, ohne echtes Slicen zu aktivieren.

### Geändert
- alpha10 ist das erste geplante Validierungsfenster für den v5-Studio-/CAD-/Slice-Workflow.

### Hinweise
- Echter Slicer-Lauf und Direktdruck bleiben weiterhin deaktiviert. Dieser Stand soll den ersten HA-Test strukturiert und diagnostizierbar machen.

## 5.0.0-beta11 - Backend-Job-Sync und Worker-Control-UI

### Hinzugefügt
- Studio-Jobliste wird gegen den persistenten Backend-Job-Speicher synchronisiert.
- Worker-Control-UI-Grundlage zum Vorbereiten, Blockieren und Abbrechen von Slice-Jobs ergänzt.
- Frontend-Statusupdates über das vorhandene Studio-Job-WebSocket-Update-Kommando ergänzt.
- Worker-Statusfelder in persistenten Studio-Slice-Jobs ergänzt.

### Geändert
- Studio-Jobverwaltung bevorzugt jetzt persistente Backend-Jobs und nutzt lokalen Browser-Speicher weiterhin als Fallback.

### Hinweise
- Dieses Alpha startet noch keinen echten Slicer-Worker. Es bereitet Steuerung und Statusanzeige für das alpha10-Testfenster vor.

## 5.0.0-beta11 - Studio-WebSocket-Registrierung repariert

### Hinzugefügt
- Robuste Erkennung der Setup-Funktion für die Registrierung der v5-Studio-WebSocket-Kommandos ergänzt.
- Frontend-Grundlage zum Laden und Leeren persistenter Backend-Slice-Jobs ergänzt.

### Behoben
- Die Studio-Slice-Job-WebSocket-Backendstruktur wird jetzt im Setup-Ablauf der Integration registriert.
- v5-Studio-Slice-Job-Schema-Markierungen auf alpha8 aktualisiert.

### Hinweise
- Dieses Alpha führt weiterhin keinen echten Slicer aus. Es bereitet den Backend-Kommandoweg für das Testfenster alpha10 vor.

## 5.0.0-beta11 - Persistente Studio-Slice-Job-Backend-Grundlage

### Hinzugefügt
- Persistente Backend-Speicherung für v5-Studio-Slice-Jobs ergänzt.
- Home-Assistant-WebSocket-Kommandos zum Auflisten, Erstellen, Aktualisieren und Leeren von Studio-Slice-Jobs ergänzt.
- Frontend-Joberstellung über die neuen Backend-WebSocket-Kommandos mit lokalem Browser-Fallback ergänzt.

### Behoben
- Cleanup der mobilen Studio-Stabilisierung auf die Studio-Karte begrenzt, statt fremde disconnectedCallback-Blöcke zu beeinflussen.

### Hinweise
- Dieses Alpha führt weiterhin keinen echten Slicer aus. Es erstellt die Backend-Job-/Statusstruktur für den späteren Slicer-Worker.

## 5.0.0-beta11 - Mobile Studio-Stabilität und Slice-Job-Grundlage

### Hinzugefügt
- Mobile Scroll- und Fokus-Erhaltung für den v5-Studio-/CAD-Manager ergänzt.
- DOM-Mutation-Handling ergänzt, damit Studio-Panels nachgerüstet werden können, ohne die mobile App wieder nach oben springen zu lassen.
- Lokale Slice-Job-Speicherung, vorbereiteter Jobstatus und Joblisten-Verwaltung ergänzt.
- Aktion zum Vorbereiten eines Slice-Jobs als Grundlage für den späteren Slicer-Worker ergänzt.

### Behoben
- Ungewollte Scroll-Resets bei Studio-/CAD-Render- und State-Updates reduziert.
- Aktives Studio-Eingabefeld und Cursorposition werden soweit möglich erhalten.

### Hinweise
- Dieses Alpha führt noch keinen echten Slicer aus. Es bereitet das interne Job-/Statusmodell für die spätere Worker-Integration vor.

## 5.0.0-beta11 - Slicer-Profil- und Slice-Plan-Grundlage

### Hinzugefügt
- Lokale Studio-Profilbank-Grundlage für Drucker, Druckplatten, Düsen, Filamente und Prozessprofile ergänzt.
- Studio-Slice-Plan-Panel mit editierbaren Basis-Slicer-Einstellungen ergänzt.
- Lokale Slice-Plan-Speicherung und JSON-Export für spätere Slicer-/Direktdruck-Integration ergänzt.
- Schutzmaßnahmen für die in alpha4 eingeführte v5-Studio-Modellübergabe ergänzt.

### Behoben
- Literal-Zeilenumbruch-Artefakte aus dem alpha4-Handoff-Patch bereinigt.
- Native Galerie-Aktion „In Studio öffnen“ an Stellen ergänzt, an denen exakte UI-Anker zuvor nicht getroffen wurden.

### Hinweise
- Dieses Alpha bereitet weiterhin nur Daten vor. Echtes Slicen und Direktdruck bleiben bis spätere Alpha-Schritte deaktiviert.

## 5.0.0-beta11 - Galerie-zu-Studio-Übergabe

### Hinzugefügt
- Native Aktion „In Studio öffnen“ für Galerie-/Archivmodelle ergänzt.
- Eigene v5-Studio-Übergabe per lokalem Speicher ergänzt, damit ausgewählte 3MF-Modelle im internen Studio-/CAD-Arbeitsbereich geöffnet werden können.
- Modell-Metadatenbanner im Studio-Arbeitsbereich ergänzt.
- Transformationen werden pro Modell lokal im Browser gespeichert.
- Grundlage für die Übergabe aus der Druckwarteschlange in den internen v5-Studio-Workflow ergänzt.

### Geändert
- Neue Studio-Aktionen bevorzugen jetzt die interne Home-Assistant-Studio-Seite statt der externen Bambu-Studio-Übergabe.
- Die bestehende Bambu-Studio-Übergabe bleibt als manueller Fallback erhalten.

### Hinweise
- Dieses Alpha slicet und druckt noch nicht direkt. Es bereitet Modellübergabe und Transformationsstatus für die nächsten Slicer-/Profil-Schritte vor.

## 5.0.0-beta11 - v4-Standalone-Backend übernommen und Konflikt bereinigt

### Hinzugefügt
- Die v4.0.7-Standalone-Bambu-Backend-Basis wurde in den v5-Entwicklungsbranch übernommen.
- Grundlagen für die eigene Payload-Normalisierung für A1, P1, X1/X1C/X1E und H2 wurden in v5 übernommen.

### Behoben
- Das v5-Frontend wurde nach dem v4.0.7-Mergekonflikt sauber wiederhergestellt.
- Der v5-Studio-/CAD-Frontendpfad bleibt sauber mit genau einer Versionsdeklaration und ohne Konfliktmarker.
- Die Standalone-Architektur bleibt erhalten, ohne funktionale Abhängigkeit zu externen Bambu-Lab-Home-Assistant-Integrationen.

### Hinweise
- Dieses Alpha hält das produktive Standard-Dashboard stabil, während der v5-Studio-/CAD-Workflow auf der separaten Studio-Seite weiterentwickelt wird.

## [4.0.1] - 2026-06-14

### Behoben

- JSON-Encoding für HACS-Validierung normalisiert.
- UTF-8-BOM aus `manifest.json` entfernt.
- Zeilenende in den Übersetzungsdateien normalisiert.
- HACS-Parser-Kompatibilität für `manifest.json` wiederhergestellt.

# Ã„nderungsprotokoll

## [4.0.0] - 2026-06-14

### Schwerpunkt

- VerÃ¶ffentlichung der eigenstÃ¤ndigen v4-Kamera- und ModellfÃ¤higkeitslogik.
- Die Integration bleibt vollstÃ¤ndig standalone und benÃ¶tigt keine BambuLab-Home-Assistant-Integration als funktionale AbhÃ¤ngigkeit.
- Andere Bambu-Integrationen werden nur als technische Referenz fÃ¼r Protokolle und Kameraansteuerung betrachtet.
- Das Dashboard wurde fÃ¼r breitere Ansichten, kompaktere Diagnose und bessere Modellanzeige Ã¼berarbeitet.

### HinzugefÃ¼gt

#### EigenstÃ¤ndige Kamera-FÃ¤higkeitserkennung

- Interne Kamera-FÃ¤higkeitsmatrix fÃ¼r unterstÃ¼tzte Bambu-Druckerfamilien ergÃ¤nzt.
- EigenstÃ¤ndige Erkennung der Kameraart anhand des Druckermodells ergÃ¤nzt.
- Kamera-Transport und Kamera-Port werden innerhalb der eigenen Integration bestimmt.
- Diagnosewerte fÃ¼r Kamera-Transport, Kamera-Port und Kamera-VerfÃ¼gbarkeit ergÃ¤nzt.
- Trennung zwischen Chamber-Image-Kameras und RTSPS-Kameras umgesetzt.
- Vorbereitung fÃ¼r kÃ¼nftige direkte RTSPS-Livekamera-Anbindung ergÃ¤nzt.
- Kameralogik bewusst ohne Fallback auf externe Home-Assistant-Kamera-Entities umgesetzt.

#### Chamber-Image-KameraunterstÃ¼tzung

- UnterstÃ¼tzungspfad fÃ¼r A1-, A1-mini-, P1P- und P1S-Ã¤hnliche Chamber-Image-Kameras ergÃ¤nzt.
- TCP-Port `6000` als Chamber-Image-Kamera-Port klassifiziert.
- Dashboard-Label `Chamber Image / TCP 6000` ergÃ¤nzt.
- Kamera-Diagnose fÃ¼r LAN-basierte Chamber-Image-Kameras verbessert.
- Native Kamera-Statuslogik fÃ¼r lokale LAN-Nutzung vorbereitet und vereinheitlicht.

#### RTSPS-KameraunterstÃ¼tzung

- RTSPS-Kamerafamilie fÃ¼r X1-, X1-Carbon-, X1E-, H2-, P2- und X2-Klasse vorbereitet.
- TCP-Port `322` als RTSPS-Kamera-Port klassifiziert.
- Dashboard-Label `RTSPS / TCP 322` ergÃ¤nzt.
- Modellbasierte Auswahl der RTSPS-Kameraart ergÃ¤nzt.
- Grundlage fÃ¼r eigenstÃ¤ndige RTSPS-Implementierung ohne externe Entity-AbhÃ¤ngigkeit gelegt.

#### Druckermodell und Anzeigename

- Automatische Druckermodellerkennung aus Bambu-Telemetrie ergÃ¤nzt.
- `product_name` aus den Bambu-Modulinformationen wird bevorzugt verwendet.
- Seriennummern werden nicht mehr als Druckermodell angezeigt, wenn ein besserer Name verfÃ¼gbar ist.
- Fallback-Erkennung Ã¼ber Entity-Prefix und konfigurierten Druckernamen ergÃ¤nzt.
- Der im Einrichtungsassistenten eingegebene Name kann als sichtbarer Dashboard-Name dienen.
- Hinweis im Einrichtungsassistenten ergÃ¤nzt, dass der eingegebene Druckername im Dashboard angezeigt wird, wenn kein Modell automatisch erkannt wird.
- Deutsche und englische Texte fÃ¼r den Anzeigenamen-Hinweis ergÃ¤nzt.

#### Dashboard und Diagnose

- Kompakte Diagnose-Badges fÃ¼r Drucker und Kamera ergÃ¤nzt.
- Lange technische Diagnoseanzeige reduziert.
- Lesbare Modellanzeige wie `Bambu Lab A1` statt Seriennummer umgesetzt.
- Kameraanzeige auf einen kompakten Transporthinweis reduziert.
- Footer- und Diagnosebereich optisch kompakter gestaltet.
- Frontend-Resource-Versionierung fÃ¼r den Release aktualisiert.
- Bestehendes automatisch erzeugtes Dashboard auf neue Resource-Version migrierbar gemacht.

#### Breiteres Dashboard-Layout

- Sections-basiertes Dashboard-Layout ergÃ¤nzt.
- Druckerkarte erhÃ¤lt mehr horizontale Breite.
- Warteschlangenkarte wird daneben eingeordnet.
- Container-Query-basiertes Frontend-Layout ergÃ¤nzt.
- Breite Ansichten nutzen den verfÃ¼gbaren Platz besser.
- Schmale Ansichten bleiben responsiv und stapeln die Inhalte weiterhin sauber.
- Unterer Informationsbereich wurde reduziert, damit das Dashboard weniger langgezogen wirkt.

#### Modell- und AMS-FÃ¤higkeiten

- Neue ModellfÃ¤higkeitslogik ergÃ¤nzt.
- Neue Datei fÃ¼r Capability-Definitionen ergÃ¤nzt.
- BMCU-370-/BCMU-370-Behandlung verbessert.
- Manuell gewÃ¤hlte AMS-/BMCU-Konfiguration bleibt erhalten.
- Automatische Erkennung Ã¼berschreibt eine manuelle BMCU-370-Auswahl nicht mehr ungewollt.
- AMS-Anzeige im Dashboard lesbarer gemacht.
- Technische Kamera- und ModellfÃ¤higkeitsnotizen fÃ¼r die v4-Arbeit vorbereitet.

### GeÃ¤ndert

#### Architektur

- Kamera- und ModellfÃ¤higkeitserkennung in die eigene Integration verlagert.
- Keine funktionale AbhÃ¤ngigkeit von der BambuLab-Home-Assistant-Integration.
- Externe Bambu-Integrationen dienen nur noch als Referenzquelle fÃ¼r Protokollverhalten.
- Backend-Diagnose und Frontend-Anzeige stÃ¤rker vereinheitlicht.
- Dashboard-Erzeugung auf breiteres Standardlayout umgestellt.

#### Frontend

- Frontend-Version auf `4.0.0` aktualisiert.
- VollstÃ¤ndige Druckerkarte fÃ¼r breite Ansichten Ã¼berarbeitet.
- Breitenverteilung zwischen Druckerkarte und Warteschlange verbessert.
- Diagnosebereich gestrafft.
- AbstÃ¤nde im unteren Kartenbereich reduziert.
- Modellname und Kameraart werden kompakter angezeigt.
- Cache-Busting der Frontend-Ressource aktualisiert.

#### Backend

- Manifest-Version auf `4.0.0` aktualisiert.
- Integrationskonstante auf `4.0.0` aktualisiert.
- Druckermodellerkennung verbessert.
- Kamerastatus-Ausgabe verbessert.
- Sensorwerte fÃ¼r Kamera-Transport und Kamera-Port erweitert.
- Dashboard-Standarderzeugung angepasst.
- Modell- und Capability-Erkennung erweitert.

### Behoben

#### Modellanzeige

- Behoben, dass die Seriennummer als Druckermodell angezeigt wurde.
- Behoben, dass beim Bambu A1 nicht automatisch `Bambu Lab A1` angezeigt wurde.
- Behoben, dass der echte Bambu-`product_name` nicht bevorzugt im Dashboard landete.
- Fallback-Reihenfolge fÃ¼r Modellname, Anzeigename und Seriennummer korrigiert.
- Setup-Hinweis fÃ¼r den sichtbaren Dashboard-Namen ergÃ¤nzt.

#### Kamera-Diagnose

- Fehlende Anzeige des Kamera-Transports behoben.
- Fehlende Anzeige des Kamera-Ports behoben.
- Unklare Kamera-Diagnose im Dashboard bereinigt.
- Zu lange technische Diagnose-Badge-Zeile reduziert.
- Erwartung einer externen BambuLab-Home-Assistant-Kamera-Entity entfernt.

#### Dashboard-Layout

- Zu schmal und vertikal gestreckt wirkende Dashboardansicht verbessert.
- Altes Masonry-Layout fÃ¼r das Standarddashboard durch breiteres Sections-Layout ersetzt.
- Druckerkarte nutzt in breiten Ansichten mehr Platz.
- Bestehendes Dashboard-Storage des Testsystems migrierbar gemacht.
- Unterer Informationsbereich kompakter gesetzt.

#### Release-QualitÃ¤t

- Python-Syntaxproblem aus der rc2-Vorbereitung behoben.
- Frontend-Resource-Cache-Version korrigiert.
- Leere-Zeile-am-Dateiende-Warnungen bereinigt.
- ZIP-StrukturprÃ¼fung fÃ¼r das finale Installationspaket durchgefÃ¼hrt.
- Finales Installationspaket `pcc-4.0.0-ha-install.zip` vorbereitet.

### Hinweise

- Version 4.0.0 ist der erste Release mit eigenstÃ¤ndiger Kamera- und ModellfÃ¤higkeitslogik.
- Die Integration bleibt weiterhin eine eigenstÃ¤ndige Home-Assistant-Custom-Integration.
- FÃ¼r X-/H-/P2-Klassen ist die RTSPS-Zuordnung vorbereitet; die tatsÃ¤chliche Livekamera-Umsetzung bleibt modell- und firmwareabhÃ¤ngig.
- FÃ¼r A-/P1-Klassen ist die Chamber-Image-Kameraklassifizierung Ã¼ber TCP 6000 vorbereitet.
- Die stabile v3-Historie bleibt unterhalb dieses Eintrags erhalten.

# Ãƒâ€žnderungsprotokoll

## [3.0.0] - 2026-06-05

### Stabile HACS-VerÃƒÂ¶ffentlichung

- praktisch bestÃƒÂ¤tigten Code-Stand 2.0.3 als stabile Version 3.0.0 verÃƒÂ¶ffentlicht
- Repository fÃƒÂ¼r die offizielle HACS-Aufnahme vorbereitet
- Laufzeitverhalten gegenÃƒÂ¼ber der bestÃƒÂ¤tigten Basis 2.0.3 unverÃƒÂ¤ndert gelassen
- vollstÃƒÂ¤ndige ÃƒÂ¶ffentliche Entwicklungshistorie von Alpha bis zur stabilen Version erhalten

Alle wesentlichen Ãƒâ€žnderungen am **3D-Printer Control Center** werden in dieser Datei dokumentiert.

Das Projekt begann als interner Home-Assistant-Prototyp und entwickelte sich ÃƒÂ¼ber zahlreiche Alpha- und Release-Candidate-StÃƒÂ¤nde bis zur ersten stabilen ÃƒÂ¶ffentlichen Version. Die frÃƒÂ¼he Vorab-Historie wurde aus Entwicklungsnotizen, erhaltenen Testartefakten und bestÃƒÂ¤tigten Meilensteinen rekonstruiert. Wenn eine exakte Ãƒâ€žnderung eines einzelnen internen Zwischenstands nicht sicher belegbar war, wurden eng zusammengehÃƒÂ¶rige Iterationen bewusst zusammengefasst, statt Details zu erfinden.

## [2.0.3] - 2026-06-05

### GeÃƒÂ¤ndert

- Das automatisch erzeugte Dashboard `3D-Druck` verwendet jetzt ein responsives Masonry-Layout.
- Druckerkarte und Warteschlange bleiben im XL-Modus, werden auf Desktop-Bildschirmen aber nicht mehr unnÃƒÂ¶tig breit gestreckt.
- Auf schmalen Bildschirmen werden die Karten weiterhin automatisch untereinander angeordnet.
- Die deutsche und englische README wurden vollstÃƒÂ¤ndig ÃƒÂ¼berarbeitet.
- Kuratierte, zugeschnittene und komprimierte WebP-Screenshots wurden unter `docs/images/` ergÃƒÂ¤nzt.
- Browser-Adressleisten, private URLs und veraltete Footer-URLs wurden aus ÃƒÂ¶ffentlichen Screenshots entfernt.
- Sichtbare rohe Repository-URL-BlÃƒÂ¶cke wurden durch saubere GitHub-Links ersetzt.
- Die Versionsnummer des Build-Skripts wurde korrigiert.

## [2.0.2] - 2026-06-05

### HinzugefÃƒÂ¼gt

- Globale Hintergrund-Uploads fÃƒÂ¼r die Galerie.
- Anzeige von Fortschritt, ÃƒÂ¼bertragener Datenmenge, aktueller Geschwindigkeit und aufklappbaren Upload-Details.
- Fortsetzung unterbrochener Uploads.
- Bereinigung veralteter Upload-Fragmente.
- ZusÃƒÂ¤tzliche hochauflÃƒÂ¶sende Branding-Dateien fÃƒÂ¼r HACS und Home Assistant.

### GeÃƒÂ¤ndert

- Die automatisch erzeugten Dashboards wurden auf zwei reduziert:
  - `3D-Druck`
  - `3D-Drucker-Dateimanager/Galerie`
- Die Druckwarteschlange wurde in das Dashboard `3D-Druck` integriert.
- Druckerkarte und Warteschlange bleiben im XL-Modus.
- Eine manuell eingetragene Drucker-IP hat fÃƒÂ¼r die native Kamera immer Vorrang vor der automatischen Netzwerkerkennung.

### Behoben

- Native Kamera wiederhergestellt, wenn die Netzwerkerkennung eine ungeeignete Adresse lieferte.
- Galerie-ZIP-Export repariert: Die ZIP wird heruntergeladen, statt auf die Home-Assistant-Startseite zu navigieren.
- Serverseitiges Staging wiederverwendet: Eine ÃƒÅ“berschreibbestÃƒÂ¤tigung erfordert keinen erneuten Upload groÃƒÅ¸er ZIP-Dateien.
- GegenprÃƒÂ¼fung nach dem Entpacken eines Galerie-Imports ergÃƒÂ¤nzt.

## [2.0.1] - 2026-06-05

### HinzugefÃƒÂ¼gt

- Automatische Erzeugung der Standard-Lovelace-Dashboards.
- Dienst `printer_control_center.install_dashboards` zum erneuten Erstellen der Standard-Dashboards.

### GeÃƒÂ¤ndert

- Lovelace-Ressource auf den neuen Frontend-Pfad mit Cache-Busting umgestellt.
- KompatibilitÃƒÂ¤ts-Aliasse fÃƒÂ¼r frÃƒÂ¼here Kartentypen wÃƒÂ¤hrend der Migration ergÃƒÂ¤nzt.

### Behoben

- Veraltete Frontend-Ressourcen der frÃƒÂ¼heren Domain werden entfernt.
- Sichtbarer Integrationstitel korrigiert.
- Dashboard-Migration nach dem Domainwechsel repariert.

## [2.0.0] - 2026-06-05

### Inkompatible Ãƒâ€žnderungen

- Interne Home-Assistant-Domain von `taracraft_3d_printer` auf `printer_control_center` umbenannt.
- Integrationsordner auf `custom_components/printer_control_center` umgestellt.
- Persistente Laufzeitpfade geÃƒÂ¤ndert:
  - `<HA-Konfiguration>/printer_control_center/archive/`
  - `<HA-Konfiguration>/printer_control_center/uploads/`
  - `<HA-Konfiguration>/printer_control_center/print_queue.json`
- Einmalige Neuinstallation und neue Integrationseinrichtung erforderlich, da Home-Assistant-Domains keine Bindestriche enthalten dÃƒÂ¼rfen und ein Domainwechsel keine transparente Migration ist.

### HinzugefÃƒÂ¼gt

- Galerie-ZIP-Export mit vollstÃƒÂ¤ndiger Ordnerstruktur.
- Galerie-ZIP-Import mit sicheren PfadprÃƒÂ¼fungen.
- Konflikterkennung und ausdrÃƒÂ¼cklicher Nachfrage vor dem ÃƒÅ“berschreiben.
- Branding-Dateien sowohl im Repository-Root als auch im Integrationsordner.
- Migrationsdokumentation.

### Erhalten

- Der alte Datenordner kann als Rollback-Quelle behalten werden.
- Die separate Galerie-ZIP kann in eine saubere Installation importiert werden.

## [1.0.0] - 2026-06-05

### Erste stabile ÃƒÂ¶ffentliche Version

- Stabilen Stand aus internem Kandidaten `rc1.39` verÃƒÂ¶ffentlicht.
- HACS-kompatible Repository-Struktur ergÃƒÂ¤nzt.
- MIT-Lizenz, zweisprachige README-Dateien, Setup-Dokumentation, Publishing-Dokumentation und ÃƒÂ¶ffentliche Repository-Bereinigung ergÃƒÂ¤nzt.
- Deutsche und englische Setup-ÃƒÅ“bersetzungen ergÃƒÂ¤nzt.
- Dashboard-Sprache auswÃƒÂ¤hlbar:
  - automatisch nach Home-Assistant-Sprache
  - Deutsch
  - English
- Manuelle Drucker-IP mit Vorrang vor der optionalen automatischen Erkennung ergÃƒÂ¤nzt.
- Laufzeitpfade mit `hass.config.path(...)` portabel gemacht.
- Weitere Bambu-Lab-Drucker generisch ÃƒÂ¼ber IP-Adresse, Seriennummer und LAN-Access-Code vorgesehen.
- A1 als zum Release praktisch bestÃƒÂ¤tigtes Druckermodell dokumentiert.
- Geplante Funktionen dokumentiert:
  - Filamentverwaltung
  - Druckkosten
  - Projektmanagement mit Bildern, Dokumentation und Zusatzmaterial
  - MakerWorld-Import

---

# Vorab-Entwicklungshistorie

## [rc1.39] - 2026-06-05

### Stabiler interner Ausgangsstand

- Nach praktischer Browser-PrÃƒÂ¼fung intern als **Version 1.0** freigegeben.
- Verschieben-Dialog als klar erkennbare Ordnerbaumansicht mit EinrÃƒÂ¼ckung, Verbindungslinien und Baum-Symbolen umgesetzt.
- Interne Scrollposition der Ordnerliste im Verschieben-Dialog erhalten.
- Telemetrie-bedingte Komplett-Neurenderings in Galerie, Warteschlange und Karteneditor verhindert.
- Fokus und Cursorposition in aktiven Eingabe- und Mengenfeldern erhalten.

## [rc1.38] - 2026-06-05

### Interne Stabilisierung

- Laufzeitverhalten des Verschieben-Dialogs verfeinert.
- Finale Ordnerbaum- und UI-State-Fixes vorbereitet.

## [rc1.37] - 2026-06-05

### GeÃƒÂ¤ndert

- Ordnerbaum-Darstellung im Verschieben-Dialog verbessert.
- Toast-Meldungen und ÃƒÅ“berschreibfeedback verfeinert.

## [rc1.36] - 2026-06-05

### HinzugefÃƒÂ¼gt

- Nachfrage vor dem ÃƒÅ“berschreiben bei Verschiebekonflikten.
- Modernes Inline-Speicherfeedback.
- Mengen-Dropdown fÃƒÂ¼r Warteschlangen-EintrÃƒÂ¤ge.

## [rc1.35] - 2026-06-05

### HinzugefÃƒÂ¼gt

- BestÃƒÂ¤tigungsbutton fÃƒÂ¼r MengenÃƒÂ¤nderungen in der Warteschlange.
- Kurz sichtbares `Gespeichert`-Feedback nach MengenÃƒÂ¤nderungen.
- Skalierung der Warteschlangenkarten fÃƒÂ¼r einzelne und mehrere EintrÃƒÂ¤ge verbessert.

## [rc1.34] - 2026-06-05

### Behoben

- Mehrfachverschieben in der Galerie.
- Aktualisierung der SD-Karte nach dem Anlegen oder LÃƒÂ¶schen von Verzeichnissen.
- Thumbnail-GrÃƒÂ¶ÃƒÅ¸e der Warteschlangenkarten.

## [rc1.33] - 2026-06-05

### Behoben

- Lokale Archiv-Verschiebungen verwenden verifizierte Dateisystem-Umbenennung statt Kopiersemantik.
- NachprÃƒÂ¼fung fÃƒÂ¼r lokale Verschiebungen ergÃƒÂ¤nzt.
- NachprÃƒÂ¼fung fÃƒÂ¼r SD-Karten-FTPS-Renames ergÃƒÂ¤nzt.
- Fokus und Cursorposition bei Home-Assistant-Live-Refreshes erhalten.
- Warteschlangenlayout vereinfacht:
  - Vorschau zuerst
  - Dateiname unterhalb der Vorschau
  - optionaler Zeitpunkt unterhalb des Dateinamens
  - sÃƒÂ¤mtliche Bedienelemente unterhalb des Modells
- Fehlende Vorschauen ÃƒÂ¤lterer Warteschlangen-EintrÃƒÂ¤ge nachtrÃƒÂ¤glich ergÃƒÂ¤nzt.

## [rc1.32] - 2026-06-05

### HinzugefÃƒÂ¼gt

- EigenstÃƒÂ¤ndige Lovelace-Karte `3D-Druck-Warteschlange`.
- Persistente Warteschlange in `print_queue.json`.
- Verwaltung der Warteschlange:
  - StÃƒÂ¼ckzahl
  - optionaler Zeitpunkt
  - Reihenfolge
  - `1 erledigt`
  - Entfernen
  - Drucken ÃƒÂ¼ber Original-3MF-ÃƒÅ“bergabe
- Galerie-Popup zur Auswahl mehrerer Modelle fÃƒÂ¼r die Warteschlange.

### GeÃƒÂ¤ndert

- Redundante KontextmenÃƒÂ¼-Aktionen entfernt:
  - Original-Projekt-3MF herunterladen
  - QR-Code
  - Nach Zeitraffer suchen
  - Projektseite

## [rc1.31] - 2026-06-05

### Interne Stabilisierung

- Queue-Integration und Vorschau-Verfeinerungen nach Abschluss des Bambu-Studio-Direktimports vorbereitet.

## [rc1.30] - 2026-06-05

### GeÃƒÂ¤ndert

- PrimÃƒÂ¤re Bambu-Studio-ÃƒÅ“bergabe auf unverÃƒÂ¤nderte Original-3MF-Datei umgestellt.
- Generierte Modell-3MF- und STL-Dateien als explizite manuelle Fallbacks behalten.
- Originaldateien als `application/octet-stream` ausgeliefert.

### Dokumentiertes Verhalten

- BestÃƒÂ¤tigt, dass Bambu Studio fÃƒÂ¼r selbst gehostete URLs eine Herkunftswarnung anzeigt.
- BestÃƒÂ¤tigt, dass diese Warnung durch Bambu Studio erzwungen wird und fÃƒÂ¼r eine private Home-Assistant-Domain nicht sauber ohne Client-Manipulation oder vorgetÃƒÂ¤uschten vertrauenswÃƒÂ¼rdigen Hostnamen abschaltbar ist.
- LÃƒÂ¶sung vollstÃƒÂ¤ndig Home-Assistant-autark gehalten:
  - kein Windows-Helfer
  - kein Bridge-Dienst
  - kein externer Proxy

## [rc1.29] - 2026-06-05

### Behoben

- KontextmenÃƒÂ¼- und Vorschau-CSS-Regeln aus versehentlichem schmalen `@container`-Bereich verschoben.
- Overlays mindestens 76 px unterhalb des oberen Fensterrands gehalten.
- 3D-Vorschau an ausgewÃƒÂ¤hlter Modellkarte verankert.

### GeÃƒÂ¤ndert

- Signierte Direktimport-URL so angepasst, dass die sichtbare URL auf `.3mf` endet.
- Pfad, Ablaufzeit und Signatur als URL-Pfadsegmente vor dem Dateinamen ÃƒÂ¼bertragen.

## [rc1.28] - 2026-06-05

### Interne Stabilisierung

- Verrutschte Overlays und Bambu-Studio-Direktimport untersucht.
- Overlay- und Signed-URL-Korrekturen fÃƒÂ¼r `rc1.29` vorbereitet.

## [rc1.27] - 2026-06-05

### GeÃƒÂ¤ndert

- Galerie- und Dateimanager-Workflows zusammengefÃƒÂ¼hrt.
- Home-Assistant-autarke Bambu-Studio-ÃƒÅ“bergabe vorbereitet.
- AbhÃƒÂ¤ngigkeit von einem Windows-Helfer entfernt.

## [rc1.26] - 2026-06-05

### Interne Stabilisierung

- Zwischenstand der Galerie- und Direktimport-Entwicklung.

## [rc1.25] - 2026-06-05

### HinzugefÃƒÂ¼gt

- Verfeinerungen der Galerie-Karte.
- Modell-Export-Aktionen.
- ZusÃƒÂ¤tzliche Tests fÃƒÂ¼r Modell-Export und Galerie-Kartenverhalten.

## [rc1.24] - 2026-06-05

### HinzugefÃƒÂ¼gt

- Dedizierte Galerie-Karteniteration.
- Erste Trennung der Galerie als eigenstÃƒÂ¤ndige Lovelace-Karte.

## [rc1.23] - 2026-06-05

### GeÃƒÂ¤ndert

- Galerie in Richtung professioneller Archiv-Modellraster-Ansicht ÃƒÂ¼berarbeitet.
- Visuelle Hierarchie und Skalierung verbessert.

## [rc1.22] - 2026-06-05

### GeÃƒÂ¤ndert

- Galerie-Proportionen und Thumbnail-GrÃƒÂ¶ÃƒÅ¸en verfeinert.

## [rc1.21] - 2026-06-05

### Behoben

- Ãƒâ€“ffnen der Galerie.
- Popup- und Karteninteraktionen.

## [rc1.20] - 2026-06-05

### HinzugefÃƒÂ¼gt

- Galerie-Manager-Iteration mit Archivnavigation und Modellverwaltung.

## [rc1.19] - 2026-06-05

### GeÃƒÂ¤ndert

- Generierte Thumbnails und Modellvorschau verbessert.

## [rc1.18] - 2026-06-05

### GeÃƒÂ¤ndert

- Erste Galerie-Implementierung verfeinert.

## [rc1.17] - 2026-06-05

### HinzugefÃƒÂ¼gt

- Erste Galerieansicht fÃƒÂ¼r archivierte Modelle.

## [rc1.16] - 2026-06-05

### GeÃƒÂ¤ndert

- Dateimanager nach Upload- und Modellimport-Implementierung weiter verbessert.

## [rc1.15] - 2026-06-05

### HinzugefÃƒÂ¼gt

- Modellimport-Workflow.

## [rc1.14] - 2026-06-05

### GeÃƒÂ¤ndert

- Upload-Verarbeitung und Validierung verbessert.

## [rc1.13] - 2026-06-05

### HinzugefÃƒÂ¼gt

- Erster Archiv-Upload-Workflow.

## [rc1.12] - 2026-06-05

### GeÃƒÂ¤ndert

- Dateimanager-Iteration mit weiterer Archivnavigation.

## [rc1.11] - 2026-06-05

### GeÃƒÂ¤ndert

- Dateimanager-Iteration mit zusÃƒÂ¤tzlichen Dateioperationen.

## [rc1.10] - 2026-06-05

### GeÃƒÂ¤ndert

- Dateimanager-Iteration mit frÃƒÂ¼hen Archivverwaltungsverbesserungen.

## [rc1.9] - 2026-06-05

### GeÃƒÂ¤ndert

- Erste Dateimanager-Implementierung verfeinert.

## [rc1.8] - 2026-06-05

### HinzugefÃƒÂ¼gt

- Erster Dateimanager-Prototyp fÃƒÂ¼r archivierte Druckdateien.

## [alpha] - 2026-06-04 bis 2026-06-05

### Erster Prototyp

- Erste Home-Assistant-Integration fÃƒÂ¼r einen Bambu-Lab-Drucker erstellt.
- LAN-orientierte Druckerverbindung und MQTT-Telemetrie ergÃƒÂ¤nzt.
- Erste Lovelace-Druckerkarte ergÃƒÂ¤nzt.
- Native Kamera-Experimente und Druckersteuerungen ergÃƒÂ¤nzt.
- AMS/BMCU-Slot-Anzeige ergÃƒÂ¤nzt.
- Responsive KartengrÃƒÂ¶ÃƒÅ¸en-Steuerung ergÃƒÂ¤nzt.
- Erstes lokales Archivkonzept angelegt, aus dem spÃƒÂ¤ter Galerie und Dateimanager hervorgingen.

---

# Hinweise fÃƒÂ¼r Maintainer

- VorabstÃƒÂ¤nde bleiben zur Transparenz und historischen Dokumentation erhalten.
- Die stabile ÃƒÂ¶ffentliche Support-Linie beginnt mit `1.0.0`.
- Die frÃƒÂ¼here interne Domain `taracraft_3d_printer` wurde mit `2.0.0` abgelÃƒÂ¶st.
- Die aktuelle Integrations-Domain lautet `printer_control_center`.
