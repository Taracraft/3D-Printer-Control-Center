## 5.0.0-beta37 - Stable imported object and right drag

### Deutsch
- Behält die sichtbare beta36-Studio-Basis.
- Stabilisiert importierte Galerie-/Archiv-Objekte auf der Buildplate.
- Blendet „Keine aktive Geometrie geladen“ aus, sobald ein aktiver Import-/Preview-Job vorhanden ist.
- Hält den Preview-/Objekt-Fallback nach Render- und Cleanup-Zyklen sichtbar, statt ihn wieder zu verlieren.
- Reduziert Springen/Flackern durch Wiederverwendung des vorhandenen Fallback-Objekts statt ständigem Neuaufbau.
- Bindet Rechtsklick-/Linksklick-Ziehen robuster auf Buildplate und Fallback-Objekt.
- Entfernt das CAD-Studio-Rechtsklickmenü weiterhin hart.
- Keine Kamera-, Dashboard-, Backend-, Host- oder Verbindungsänderungen.
- Echtes Slicen und Direktdruck bleiben deaktiviert.

### English
- Keeps the visible beta36 Studio base.
- Stabilizes imported gallery/archive objects on the buildplate.
- Hides “Keine aktive Geometrie geladen” as soon as an active import/preview job exists.
- Keeps the preview/object fallback visible across render and cleanup cycles instead of losing it again.
- Reduces jumping/flickering by reusing the existing fallback object rather than rebuilding it repeatedly.
- Binds right-/left-button dragging more robustly on the buildplate and fallback object.
- Continues to aggressively remove the CAD Studio right-click context menu.
- No camera, dashboard, backend, host or connection changes.
- Real slicing and direct printing remain disabled.


## 5.0.0-beta36 - Studio import render, toolbar menu and right-drag fix

### Deutsch
- Behält die sichtbare Studio-Basis.
- Entfernt den zweiten Workflow-Button „Importieren“ aus der Studio-Leiste; der obere Icon-Import bleibt aktiv.
- Stabilisiert die kompakte Toolbar: wiederholte Aktionen in einem Menü schließen das Menü nicht mehr nach wenigen Klicks.
- Übernimmt Import-Felder wie Preview, STL-/Mesh-/Geometrie- und Modellpfade aus dem gewählten Galerie-/Archiv-Objekt in den aktiven Studio-Job.
- Setzt den importierten Job aktiv auf die Buildplate und hält ihn sichtbar.
- Nutzt bei fehlendem Mesh einen sichtbaren Preview-/Objekt-Fallback direkt auf der Buildplate, statt nur den Job unten links einzutragen.
- Entfernt das CAD-Studio-Rechtsklickmenü erneut und hart.
- Rechtsklick-Halten und Ziehen bewegt das aktive Objekt; Linksklick-Halten und Ziehen dreht es.
- Keine Kamera-, Dashboard-, Backend-, Host- oder Verbindungsänderungen.
- Echtes Slicen und Direktdruck bleiben deaktiviert.

### English
- Keeps the visible Studio base.
- Removes the second workflow “Importieren” button from the Studio bar while keeping the top icon import active.
- Stabilizes the compact toolbar: repeated actions in a menu no longer close the menu after a few clicks.
- Carries import fields such as preview, STL/mesh/geometry and model paths from the selected gallery/archive item into the active Studio job.
- Places the imported job actively onto the buildplate and keeps it visible.
- Uses a visible preview/object fallback on the buildplate when mesh loading is not available, instead of only listing the job in the lower-left job list.
- Removes the CAD Studio right-click context menu again and aggressively.
- Right-button hold and drag moves the active object; left-button hold and drag rotates it.
- No camera, dashboard, backend, host or connection changes.
- Real slicing and direct printing remain disabled.


## 5.0.0-beta35 - Studio import popup and right-drag fix

### Deutsch
- Behält die sichtbare beta34/beta30-Studio-Basis.
- Entfernt den unteren zusätzlichen Import-Button aus dem Studio-Import-Popup.
- Ergänzt im kompakten Import-Popup oben einen primären Button „Objekt importieren“, sobald ein Objekt ausgewählt ist.
- Macht das Import-Popup kompakter, scrollbar und kachelartiger ähnlich Galerie, aber kleiner.
- Entfernt das CAD-Studio-Rechtsklickmenü erneut und hart.
- Bindet Rechtsklick-Halten und Ziehen direkt auf der Buildplate zum Verschieben des aktiven Objekts.
- Bindet Linksklick-Halten und Ziehen direkt auf der Buildplate zum Drehen des aktiven Objekts.
- Keine Kamera-, Dashboard-, Backend-, Host- oder Verbindungsänderungen.
- Echtes Slicen und Direktdruck bleiben deaktiviert.

### English
- Keeps the visible beta34/beta30 Studio base.
- Removes the lower extra import button from the Studio import popup.
- Adds a primary top action button “Objekt importieren” in the compact import popup once an object is selected.
- Makes the import popup more compact, scrollable and card-like, similar to the gallery but smaller.
- Removes the CAD Studio right-click context menu again and aggressively.
- Binds right-button drag directly on the buildplate to move the active object.
- Binds left-button drag directly on the buildplate to rotate the active object.
- No camera, dashboard, backend, host or connection changes.
- Real slicing and direct printing remain disabled.


## 5.0.0-beta34 - Clean Studio UI final fix

### Deutsch
- Behält die sichtbare beta33/beta30-Studio-Basis.
- Setzt die ursprünglich geplante beta31/beta32-Bereinigung ohne den kaputten ShadowRoot-/DOM-Crash um.
- Entfernt zusätzliche Text-Navigationsbuttons wie Verschieben, Drehen, Skalieren, Zoom, Rot, Scale, Spiegel, Zerr, Duplizieren, Zentrieren und Flach legen.
- Entfernt Studio-Fußzeilen wie Dry-Run-, STL-Mesh- und Plan-Hinweise.
- Entfernt das CAD-Studio-Rechtsklickmenü erneut und hart.
- Poliert den Import-Dialog kompakt und scrollbar im Studio-Frame.
- Benennt den finalen Import-Button in „Objekt importieren“ um und ergänzt ihn bei gewähltem Importobjekt.
- Keine Kamera-, Dashboard-, Backend-, Host- oder Verbindungsänderungen.
- Echtes Slicen und Direktdruck bleiben deaktiviert.

### English
- Keeps the visible beta33/beta30 Studio base.
- Implements the originally intended beta31/beta32 cleanup without the broken ShadowRoot/DOM crash.
- Removes extra text navigation buttons such as move, rotate, scale, zoom, mirror, skew, duplicate, center and lay flat.
- Removes Studio footer/status rows such as Dry-Run, STL mesh and plan messages.
- Removes the CAD Studio right-click context menu again and aggressively.
- Polishes the import dialog as a compact scrollable in-frame popup.
- Renames the final import action to “Objekt importieren” and adds it when an import item is selected.
- No camera, dashboard, backend, host or connection changes.
- Real slicing and direct printing remain disabled.


## 5.0.0-beta33 - Emergency restore Studio view

### Deutsch
- Entfernt die kaputten beta31/beta32 Studio-Cleanup-Änderungen aus dem aktiven Code.
- Stellt den letzten sichtbar ladenden Studio-Stand auf Basis beta30 wieder her.
- Behebt damit die leere 3D-Studio-Seite nach beta31/beta32.
- Keine Kamera-, Dashboard-, Backend-, Host- oder Verbindungsänderungen.
- Kein beta24-Code wird wieder eingeführt.
- Echtes Slicen und Direktdruck bleiben deaktiviert.

### English
- Removes the broken beta31/beta32 Studio cleanup changes from active code.
- Restores the last visibly loading Studio base from beta30.
- Fixes the blank 3D Studio page after beta31/beta32.
- No camera, dashboard, backend, host or connection changes.
- No beta24 code is reintroduced.
- Real slicing and direct printing remain disabled.


## 5.0.0-beta32 - Fix beta31 ShadowRoot context guard crash

### Deutsch
- Behebt den beta31-Startfehler `Cannot read properties of undefined (reading 'beta31ContextKilled')`.
- Ursache war ein Zugriff auf `shadowRoot.dataset`; `ShadowRoot` besitzt kein `dataset`.
- Der Kontextmenü-Guard nutzt jetzt eine Instanzvariable statt `root.dataset`.
- Keine Kamera-, Dashboard-, Backend-, Import- oder Render-Änderungen.
- Echtes Slicen und Direktdruck bleiben deaktiviert.

### English
- Fixes the beta31 startup error `Cannot read properties of undefined (reading 'beta31ContextKilled')`.
- The cause was accessing `shadowRoot.dataset`; `ShadowRoot` does not provide `dataset`.
- The context-menu guard now uses an instance variable instead of `root.dataset`.
- No camera, dashboard, backend, import or render changes.
- Real slicing and direct printing remain disabled.


## 5.0.0-beta31 - Studio final UI cleanup and import object button

### Deutsch
- Behält die aktuelle Studio-Basis ohne Rollback.
- Entfernt die wieder sichtbaren zusätzlichen Text-Navigationsbuttons nach jedem Render.
- Oben bleiben nur Workflow-Aktionen sowie die kompakte Icon-/Import-Toolbar sichtbar.
- Entfernt Studio-Fußzeilen wie Dry-Run-, STL-Mesh- und Plan-Hinweise aus der Arbeitsfläche.
- Entfernt das CAD-Studio-Rechtsklickmenü erneut und hart.
- Poliert den Import-Dialog kompakt und scrollbar im Studio-Frame.
- Benennt den finalen Import-Button klar in „Objekt importieren“ um und ergänzt ihn bei gewähltem Importobjekt.
- Importierte Jobs bleiben in der Studio-Jobliste erhalten; der aktive Job wird nach Import erneut geladen und gerendert.
- Keine Kamera-, Dashboard-, Backend- oder Verbindungsänderungen.
- Echtes Slicen und Direktdruck bleiben deaktiviert.

### English
- Keeps the current Studio base without rollback.
- Removes the reappearing extra text navigation buttons after each render.
- Keeps only workflow actions and the compact icon/import toolbar visible at the top.
- Removes Studio footer/status rows such as Dry-Run, STL mesh and plan messages from the work area.
- Removes the CAD Studio right-click context menu again and aggressively.
- Polishes the import dialog as a compact scrollable in-frame popup.
- Renames the final import action to “Objekt importieren” and adds it when an import item is selected.
- Imported jobs remain in the Studio job list; the active job is reloaded and rendered after import.
- No camera, dashboard, backend or connection changes.
- Real slicing and direct printing remain disabled.


## 5.0.0-beta30 - Studio UI squash

### Deutsch
- Behält die aktuelle Studio-Basis ohne Rollback.
- Squasht die Studio-UI auf einen finalen deterministischen Cleanup-Pfad statt weiterer Korrektur über beta26/beta27/beta28/beta29.
- Entfernt alte beta26/beta28 Toolbar-DOM-Reste aus dem aktiven Studio-DOM und nutzt nur noch eine beta30-Toolbar.
- Stabilisiert Toolbar-Menüs: ein Menü gleichzeitig, wiederholte Aktionen bleiben im Menü.
- Stabilisiert das kompakte Import-Popup im Studio-Frame.
- Entfernt das CAD-Studio-Rechtsklickmenü und nutzt Rechtsklick-Ziehen zum Verschieben.
- Stabilisiert Linksklick-Ziehen zum Drehen.
- Keine Kamera-, Dashboard-, Backend- oder Verbindungsänderungen.
- Echtes Slicen und Direktdruck bleiben deaktiviert.

### English
- Keeps the current Studio base without rollback.
- Squashes the Studio UI into one final deterministic cleanup path instead of adding another correction layer over beta26/beta27/beta28/beta29.
- Removes old beta26/beta28 toolbar DOM leftovers from the active Studio DOM and uses only one beta30 toolbar.
- Stabilizes toolbar menus: one menu at a time and repeated actions stay inside the menu.
- Stabilizes the compact in-frame import popup.
- Removes the CAD Studio right-click context menu and uses right-drag for moving.
- Stabilizes left-drag rotation.
- No camera, dashboard, backend or connection changes.
- Real slicing and direct printing remain disabled.


## 5.0.0-beta29 - Studio menu, import and mouse stability

### Deutsch
- Behält die aktuelle Studio-Basis ohne Rollback.
- Stabilisiert die kompakten Toolbar-Menüs: ein Menü gleichzeitig, wiederholte Aktionen schließen das Menü nicht.
- Macht das Import-Popup kompakter, scrollbar und stabil im Studio-Frame.
- Entfernt das CAD-Studio-Rechtsklickmenü und nutzt Rechtsklick-Ziehen zum Verschieben.
- Stabilisiert Linksklick-Ziehen zum Drehen über window-weite Pointer-Events.
- Hält Import-Popup und Objekt-/Jobliste stabil, auch wenn bereits ein Objekt auf der Platte liegt.
- Keine Kamera-, Dashboard-, Backend- oder Verbindungsänderungen.
- Echtes Slicen und Direktdruck bleiben deaktiviert.

### English
- Keeps the current Studio base without rollback.
- Stabilizes compact toolbar menus: one menu at a time and repeated actions no longer close the menu.
- Makes the import popup more compact, scrollable and stable inside the Studio frame.
- Removes the CAD Studio right-click context menu and uses right-drag for moving the object.
- Stabilizes left-drag rotation using window-wide pointer events.
- Keeps the import popup and object/job list stable even when an object is already on the plate.
- No camera, dashboard, backend or connection changes.
- Real slicing and direct printing remain disabled.


## 5.0.0-beta28 - Polished compact Studio toolbar and import popup

### Deutsch
- Behält die aktuelle Studio-Basis ohne Rückschritt.
- Ersetzt die sichtbare Toolbar durch eine kompaktere eckige Bambu-Studio-artige Toolbar.
- Fügt einen klar sichtbaren Import-Button mit Text hinzu.
- Stellt sicher, dass immer nur ein Toolbar-Menü offen ist.
- Poliert den Studio-Import-Assistenten als kompaktes Popup im Studio-Frame.
- Kein Render-Umbau, keine Kamera-, Dashboard-, Backend- oder Verbindungsänderungen.
- Echtes Slicen und Direktdruck bleiben deaktiviert.

### English
- Keeps the current Studio base without rollback.
- Replaces the visible toolbar with a more compact square Bambu Studio inspired toolbar.
- Adds a clearly visible Import button with text.
- Ensures that only one toolbar menu can be open at a time.
- Polishes the Studio import assistant as a compact in-frame popup.
- No render rewrite, camera, dashboard, backend or connection changes.
- Real slicing and direct printing remain disabled.


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
