## 5.0.0-beta4 - Context Menu + Model Image Fix

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


## 5.0.0-beta3 - Studio UI Cleanup

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


## 5.0.0-beta2 - Studio Prototype Hotfix

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


## 5.0.0-beta1 - Studio Stabilization

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


## 5.0.0-alpha25 - Interactive Control Fix + Mesh Viewer

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


## 5.0.0-alpha24 - Interactive Studio Control

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


## 5.0.0-alpha23 - Studio Transform Engine

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


## 5.0.0-alpha22 - Beta Foundation Gallery-to-Studio Workflow

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

## 5.0.0-alpha21 - Konsolidiertes Studio-Dry-Run-/Profilbank-Release

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

## 5.0.0-alpha20.6 - Studio-Plan-Fallback für isolierten Dry-Run

### Behoben
- Lokalen `studio_plan`-Fallback ergänzt, falls der isolierte Studio-Dry-Run kein Planobjekt zurückgibt.
- Health-Nutzdaten so erweitert, dass `studio_plan_present` nach „Plan prüfen“ validieren kann.
- Fallback bleibt strikt im Planungsmodus; echtes Slicen und Direktdruck bleiben deaktiviert.

### Hinweise
- Dieser Stand gehört weiterhin zum alpha20-Recovery-/Testfenster.
- Echtes Slicen und Direktdruck bleiben weiterhin deaktiviert.

## 5.0.0-alpha20.5 - Isolierter Studio-Dry-Run-Plan

### Hinzugefügt
- Backend-Dry-Run-Ausführung aus der isolierten Studio-Karte ergänzt.
- Statische Profilkontext-Übergabe für Drucker-, Filament- und Prozessprofil ergänzt.
- Frontend-Anzeige für zurückgegebenen Dry-Run und `studio_plan` ergänzt.
- Studio-Health-Prüfung nutzt jetzt das letzte Dry-Run-Ergebnis und den Studio-Plan.

### Hinweise
- Dieser Stand gehört weiterhin zum alpha20-Recovery-/Testfenster.
- Echtes Slicen und Direktdruck bleiben weiterhin deaktiviert.

## 5.0.0-alpha20.4 - Studio-Frontend-Deduplizierung

### Behoben
- Doppelte isolierte Studio-Frontend-Blöcke aus dem alpha20.3-Recovery-Build entfernt.
- Exakt eine `printer-control-center-studio-card`-Implementierung auf stabiler Galerie-Frontendbasis beibehalten.
- Funktionierende Galerie-/Dateimanager-Ansicht und isolierte Studio-Buildplate-Ansicht bleiben erhalten.

### Hinweise
- Dies ist ein Cleanup-Hotfix für das alpha20-Recovery-/Testfenster.
- Echtes Slicen und Direktdruck bleiben weiterhin deaktiviert.

## 5.0.0-alpha20.3 - Isolierter Studio-Frontend-Rebuild

### Hinzugefügt
- alpha20.2-Platzhalter durch eine isolierte Studio-/CAD-Karte auf stabiler Frontendbasis ersetzt.
- Sichtbaren Studio-Arbeitsbereich mit Werkzeugleiste, Druckplatte, Transform-Inspector und Health-Check-Schaltfläche wieder eingeführt.
- Galerie-/Dateimanager-Frontend bleibt von der experimentellen Studio-Karte getrennt.

### Hinweise
- Dieser Stand gehört weiterhin zum alpha20-Recovery-/Testfenster.
- Echtes Slicen und Direktdruck bleiben weiterhin deaktiviert.

## 5.0.0-alpha20.2 - Notfall-Frontend-Rollback

### Behoben
- Frontend-Ressource aus dem letzten stabilen v4.0.7-Frontendstand wiederhergestellt, damit Custom-Element-Registrierungen wieder funktionieren.
- alpha20.1-Backendmodule, Studio-WebSocket-Registrierung und Diagnose-Dateien bleiben erhalten.
- Minimale Studio-Fallback-Karte ergänzt, damit die Studio-Dashboardroute während der Frontend-Reparatur ladbar bleibt.

### Hinweise
- Dies ist ein Notfall-Hotfix für das Frontend-Laden im alpha20-Testfenster.
- Echtes Slicen und Direktdruck bleiben weiterhin deaktiviert.

## 5.0.0-alpha20.1 - Init-Syntax-Hotfix

### Behoben
- Formatierung von `__init__.py` nach dem alpha20-Testfenster repariert.
- Studio-WebSocket-Import aus dem `const`-Importblock herausgelöst.
- Gültigen mehrzeiligen Home-Assistant-Integrationsaufbau wiederhergestellt.

### Hinweise
- Dies ist ein Syntax-Hotfix für das alpha20-Testfenster, keine neue Feature-Alpha.
- Echtes Slicen und Direktdruck bleiben weiterhin deaktiviert.

## 5.0.0-alpha20 - Studio-Health-Testfenster

### Hinzugefügt
- Studio-Health-Diagnosebackend für Profilbank, Studio-Plan, Dry-Run und Job-UI-Zustand ergänzt.
- WebSocket-Befehl `printer_control_center/studio/health` ergänzt.
- Sichtbares Studio-Health-Panel mit manueller Prüfaktion ergänzt.
- Reine Diagnoseausgabe für Safety-Flags zu echtem Slicen und Direktdruck ergänzt.

### Hinweise
- Diese Alpha ist als praktisches v5.20-Testfenster vorgesehen.
- Echtes Slicen und Direktdruck bleiben weiterhin deaktiviert.

## 5.0.0-alpha19 - Studio-Job-UI liest studio_plan

### Hinzugefügt
- Studio-Job-Badges aus der gemeinsamen `studio_plan`-Struktur ergänzt.
- Studio-Plan-Detailpanel für Jobstatus, ausgewählte Profile, Slicer-Stufe und Safety-Flags ergänzt.
- Frontend-Hilfen zum Sammeln und Normalisieren von `studio_plan`-Daten aus Jobliste, Jobpanel und Dry-Run-Ergebnissen ergänzt.
- Automatische Aktualisierung von Plan-Badges und Details nach Studio-DOM-Updates und Dry-Run-Abschluss ergänzt.

### Hinweise
- Die Studio-UI verwendet `studio_plan` jetzt, sofern vorhanden, als primäre Planungs- und Statusquelle.
- Echtes Slicen und Direktdruck bleiben weiterhin deaktiviert.

## 5.0.0-alpha18 - Persistente Studio-Job-Planstruktur

### Hinzugefügt
- Gemeinsame `studio_plan`-Struktur für persistente Studio-Jobs ergänzt.
- Neues Modul `studio_plan.py` mit normalisierten Job-, Profilkontext-, Dry-Run- und Slicer-Planungsdaten ergänzt.
- Dry-Run-Worker-Ergebnisse enthalten jetzt zusätzlich `studio_plan`.
- Frontend-Anzeige der Studio-Plan-Zusammenfassung im Dry-Run-Ergebnispanel ergänzt.

### Hinweise
- Die neue Planstruktur ist ein Planungs- und Validierungsgerüst für spätere Slicer-/Worker-Anbindung.
- Echtes Slicen und Direktdruck bleiben weiterhin deaktiviert.

## 5.0.0-alpha17 - Dry-Run-Ergebnis im Studio-Jobpanel

### Hinzugefügt
- Sichtbares Dry-Run-Ergebnispanel für den Studio-Jobworkflow ergänzt.
- Frontend-Anzeige für ausgewählten Drucker-, Filament- und Prozessprofilkontext ergänzt.
- Anzeige von Dry-Run-Validierungsstatus, Warnungen, Zeitstempel sowie deaktiviertem echtem Slicen und Direktdruck ergänzt.
- Wrapper um die Dry-Run-Aktion ergänzt, damit das letzte Validierungsergebnis übernommen und aktualisiert wird.

### Hinweise
- Dieser Stand visualisiert ausschließlich Validierungs- und Planungsdaten.
- Echtes Slicen und Direktdruck bleiben weiterhin deaktiviert.

## 5.0.0-alpha16 - Studio-Profilkontext für Dry-Run-Jobs

### Hinzugefügt
- Frontend-Übergabe des Profilkontexts für Studio-Dry-Run-Jobs ergänzt.
- Drucker-, Filament- und Prozessprofilkontext wird an den Dry-Run-Worker übergeben.
- Backend-Normalisierung und Validierung für den übergebenen Studio-Profilkontext ergänzt.
- Dry-Run-Ergebnis um ausgewählte Profile und Validierungswarnungen erweitert.

### Hinweise
- Der Dry-Run-Worker führt weiterhin nur Validierung aus.
- Echtes Slicen und Direktdruck bleiben weiterhin deaktiviert.

## 5.0.0-alpha15 - Studio-Profilbank-UI-Anbindung

### Hinzugefügt
- Sichtbare Studio-UI-Anbindung für die persistente lokale Profilbank ergänzt.
- Auswahlfelder für Drucker-, Filament- und Prozessprofile im Studio-Workspace ergänzt.
- Profilzusammenfassung für Druckplattengröße, Düsengröße, Material, Temperaturen, Volumenstrom, Layerhöhe und Infill ergänzt.
- Neu-laden- und Zurücksetzen-Steuerung für die lokale Profilbank ergänzt.

### Hinweise
- Die UI verwendet die standalone lokale Profilbank aus alpha14.
- Echtes Slicen und Direktdruck bleiben weiterhin deaktiviert.

## 5.0.0-alpha14 - Persistente Studio-Profilbank im Backend

### Hinzugefügt
- Lokale persistente Studio-Profilbank im Backend über Home-Assistant-Storage ergänzt.
- Standardstrukturen für Filament-, Prozess- und Druckerprofile für den v5-Studio-Workflow ergänzt.
- WebSocket-Befehle zum Laden, Aktualisieren und Zurücksetzen der Profilbank ergänzt.
- Frontend-Hilfsmethoden für die spätere Studio-Profil-UI-Anbindung ergänzt.

### Hinweise
- Die Profilbank ist lokal und standalone. Sie hängt nicht von ha-bambulab oder externen Bambu-Integrationen ab.
- Echtes Slicen und Direktdruck bleiben weiterhin deaktiviert.

## 5.0.0-alpha13 - Dry-Run-UI-Binding-Fix

### Behoben
- Robustes Event-Binding für den Studio-Dry-Run-Button ergänzt.
- Dry-Run-Aktion nach Studio-Jobpanel-Dekoration und DOM-Aktualisierungen angebunden.
- Studio-Scroll- und Fokuszustand beim Ausführen der Dry-Run-Aktion in der mobilen Home-Assistant-App geschützt.

### Hinweise
- Dieser Stand behebt die alpha12-UI-Binding-Warnung. Echtes Slicen und Direktdruck bleiben weiterhin deaktiviert.

## 5.0.0-alpha12 - Slicer-Worker-Dry-Run-Grundlage

### Hinzugefügt
- Backend-Dry-Run-Worker-Grundlage zur Validierung von Studio-Slice-Jobs ergänzt, ohne einen echten Slicer auszuführen.
- Studio-Worker-WebSocket-Kommando für Dry-Run-Validierung ergänzt.
- Frontend-Dry-Run-Steuerung für vorbereitete Slice-Jobs ergänzt.
- Validierungsausgabe für Modell, Drucker, Düse, Prozess und grundlegende Slice-Einstellungen ergänzt.

### Hinweise
- Echtes Slicen und Direktdruck bleiben deaktiviert. Dieses Alpha bereitet den Backend-Ausführungspfad sicher für die spätere Worker-Integration vor.

## 5.0.0-alpha11 - Alpha10-Testfenster-Diagnosefix

### Behoben
- Sichergestellt, dass das Studio-Selbsttestpanel nach Studio-DOM-Aktualisierungen wirklich nachgerüstet wird.
- Modellanzeige im Studio-Diagnosepanel korrigiert.
- Studio-Selbsttest-Aktualisierung mit Scroll- und Fokus-Wiederherstellung für die mobile Home-Assistant-App abgesichert.

### Hinweise
- Dies ist ein Testfenster-Fix für den alpha10-Diagnosebuild. Echter Slicer-Lauf und Direktdruck bleiben weiterhin deaktiviert.

## 5.0.0-alpha10 - Erstes v5-Studio-Testfenster mit Diagnose

### Hinzugefügt
- Studio-Selbsttest-WebSocket-Kommando für das erste alpha10-Testfenster ergänzt.
- Studio-Diagnosepanel mit Version, WebSocket-Status, Jobanzahl, Modellstatus, Slicer-Worker-Status und Direktdruckstatus ergänzt.
- Browser-lokaler Diagnose-Fallback ergänzt, falls der Backend-WebSocket noch nicht verfügbar ist.
- Automatische Selbsttest-Vorbereitung beim Start ergänzt, ohne echtes Slicen zu aktivieren.

### Geändert
- alpha10 ist das erste geplante Validierungsfenster für den v5-Studio-/CAD-/Slice-Workflow.

### Hinweise
- Echter Slicer-Lauf und Direktdruck bleiben weiterhin deaktiviert. Dieser Stand soll den ersten HA-Test strukturiert und diagnostizierbar machen.

## 5.0.0-alpha9 - Backend-Job-Sync und Worker-Control-UI

### Hinzugefügt
- Studio-Jobliste wird gegen den persistenten Backend-Job-Speicher synchronisiert.
- Worker-Control-UI-Grundlage zum Vorbereiten, Blockieren und Abbrechen von Slice-Jobs ergänzt.
- Frontend-Statusupdates über das vorhandene Studio-Job-WebSocket-Update-Kommando ergänzt.
- Worker-Statusfelder in persistenten Studio-Slice-Jobs ergänzt.

### Geändert
- Studio-Jobverwaltung bevorzugt jetzt persistente Backend-Jobs und nutzt lokalen Browser-Speicher weiterhin als Fallback.

### Hinweise
- Dieses Alpha startet noch keinen echten Slicer-Worker. Es bereitet Steuerung und Statusanzeige für das alpha10-Testfenster vor.

## 5.0.0-alpha8 - Studio-WebSocket-Registrierung repariert

### Hinzugefügt
- Robuste Erkennung der Setup-Funktion für die Registrierung der v5-Studio-WebSocket-Kommandos ergänzt.
- Frontend-Grundlage zum Laden und Leeren persistenter Backend-Slice-Jobs ergänzt.

### Behoben
- Die Studio-Slice-Job-WebSocket-Backendstruktur wird jetzt im Setup-Ablauf der Integration registriert.
- v5-Studio-Slice-Job-Schema-Markierungen auf alpha8 aktualisiert.

### Hinweise
- Dieses Alpha führt weiterhin keinen echten Slicer aus. Es bereitet den Backend-Kommandoweg für das Testfenster alpha10 vor.

## 5.0.0-alpha7 - Persistente Studio-Slice-Job-Backend-Grundlage

### Hinzugefügt
- Persistente Backend-Speicherung für v5-Studio-Slice-Jobs ergänzt.
- Home-Assistant-WebSocket-Kommandos zum Auflisten, Erstellen, Aktualisieren und Leeren von Studio-Slice-Jobs ergänzt.
- Frontend-Joberstellung über die neuen Backend-WebSocket-Kommandos mit lokalem Browser-Fallback ergänzt.

### Behoben
- Cleanup der mobilen Studio-Stabilisierung auf die Studio-Karte begrenzt, statt fremde disconnectedCallback-Blöcke zu beeinflussen.

### Hinweise
- Dieses Alpha führt weiterhin keinen echten Slicer aus. Es erstellt die Backend-Job-/Statusstruktur für den späteren Slicer-Worker.

## 5.0.0-alpha6 - Mobile Studio-Stabilität und Slice-Job-Grundlage

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

## 5.0.0-alpha5 - Slicer-Profil- und Slice-Plan-Grundlage

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

## 5.0.0-alpha4 - Galerie-zu-Studio-Übergabe

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

## 5.0.0-alpha3 - v4-Standalone-Backend übernommen und Konflikt bereinigt

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
