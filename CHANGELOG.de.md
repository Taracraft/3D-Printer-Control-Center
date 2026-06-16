## 4.0.17 - 2026-06-16

- Instabile Inline-Kamera-Ersetzung durch stabiles linkes Kamera-Overlay ersetzt.
- Konkurrierende Runtime-Kamerapatches aus v4.0.13, v4.0.14, v4.0.15 und dem früheren v4.0.16-Versuch entfernt.
- A1-artige Drucker bleiben auf dem bestehenden nativen Kamera-Rendering-Pfad.
- Für Nicht-A1-Bambu-Lab-Drucker wie X1-/P1-Serie wird die Home-Assistant-Entity `camera.*_native_live_camera` verwendet.
- Eine einzige Home-Assistant-`picture-entity`-Livekamera bleibt bestehen, statt den Stream wiederholt neu zu erzeugen.
- Die Livekamera wird visuell über dem linken Kamera-Bereich der Druckerkarte positioniert, ohne bei Karten-Neurenderings den Stream zu zerstören.
- Verbliebene separate rechte Kamera-Karten werden ausgeblendet.

## 4.0.16 - 2026-06-16

- Inline-Livekamera-Renderer in der Haupt-Druckerkarte stabilisiert.
- Alte Runtime-Kamerapatches aus v4.0.13, v4.0.14 und v4.0.15 entfernt, damit sie nicht mehr gegeneinander arbeiten.
- Home-Assistant-Livekamera-Karte wird nur einmal erstellt und danach nur noch mit neuer `hass`-Referenz aktualisiert.
- MutationObserver-Updates innerhalb des Inline-Kamera-Hosts lösen keinen Stream-Neuaufbau mehr aus.

## 4.0.15 - 2026-06-16

- Inline-Livekamera in der Haupt-Druckerkarte hart korrigiert.
- Home-Assistant-ShadowRoots werden rekursiv durchsucht, damit die Druckerkarte innerhalb von Lovelace zuverlässig gefunden wird.
- Separate rechte Kamera-Karte wird entfernt/ausgeblendet und das linke Kamera-Feld der Druckerkarte durch die funktionierende Home-Assistant-Livekamera ersetzt.
- Dynamische Kameraauflösung über `camera.*_native_live_camera` bleibt erhalten.

## 4.0.14 - 2026-06-16

- Zusätzliche separate Livekamera-Karte aus dem verwalteten 3D-Druck-Dashboard entfernt.
- Funktionierende Home-Assistant-Livekamera direkt in das linke Kamera-Feld der Druckerkarte gezwungen.
- Alte separate `printer-control-center-camera-card`-Elemente im Dashboard werden ausgeblendet.
- Inline-Kamera bleibt generisch durch dynamische Auflösung von `camera.*_native_live_camera`.

## 4.0.13 - 2026-06-16

- Livekamera direkt in die Haupt-Druckerkarte / Druckansicht eingebaut.
- Die funktionierende Home-Assistant-Livekamera-Darstellung wird jetzt direkt im Kamera-Feld der Druckerkarte verwendet.
- Umsetzung generisch gehalten durch dynamische Auflösung von `camera.*_native_live_camera`.

## 4.0.12 - 2026-06-16

- Loader der Dashboard-Livekamera-Karte korrigiert.
- Home Assistants `loadCardHelpers()` und `createCardElement()` werden verwendet, um die native `picture-entity`-Livekamera-Karte zuverlässig zu laden.
- Falschen Blockierzustand entfernt, bei dem die Karte dauerhaft `HA Picture-Entity-Karte ist noch nicht geladen` angezeigt hat.

## 4.0.11 - 2026-06-16

- Automatisch erkennende 3D-Printer-Control-Center-Kamerakarte ergänzt.
- Das verwaltete 3D-Druck-Dashboard enthält jetzt eine echte Home-Assistant-Livekamera-Karte für `camera.*_native_live_camera`.
- Die neue Kamerakarte nutzt Home Assistants `picture-entity`-Livekamera-Darstellung statt des älteren internen Standbild-/Proxy-Pfads.
- Damit wird das X1/X1C-RTSPS-Livebild nach dem v4.0.10-Kamera-Stream-Fix direkt im 3D-Druck-Dashboard sichtbar.

## 4.0.10 - 2026-06-16

- Native RTSPS-Kamera an das Verhalten der funktionierenden BambuLab-Home-Assistant-Integration angepasst.
- `CameraEntityFeature.STREAM` aktiviert, damit Home Assistant die X1/X1C-RTSPS-Kamera als streamfähige Kamera behandelt.
- Home-Assistant-Stream-Pipeline für RTSPS-Livebild und Standbilder verwendet.
- Stream-Quelle robust aus `rtsps://bblp:<access_code>@<host>:322/streaming/live/1` mit Host-/Access-Code-Fallback aufgebaut.
- Diagnoseattribute zur Stream-Source-Bereitschaft an der Kamera-Entity ergänzt.

## 4.0.9 - 2026-06-16

- Verbleibenden Mojibake-Fehler am Galerie-Button `Neuer Ordner` korrigiert.
- Frontend-Runtime-Sanitizer um die nach v4.0.8 beobachtete Ordner-Icon-Verstümmelung erweitert.

## 4.0.8 - 2026-06-16

- UTF-8-/Mojibake-Behandlung in Backend-Entitaeten und Frontend-Karten korrigiert, inklusive Temperatureinheiten.
- Temperatureinheiten bleiben `°C` statt fehlerhaftem `Â°C`.
- AMS-Fallback verbessert: Ein manuell konfiguriertes AMS 2 Pro wird nicht mehr durch eine leere Live-Erkennung ueberschrieben.
- Konfigurierte AMS-Kapazitaet wird angezeigt, wenn noch keine Live-AMS-Telemetrie verfuegbar ist.
- Cloud-only-/Offline-Darstellung fuer fehlende Live-Telemetrie, Kamera-Verbindung und Temperaturwerte verbessert.
- Echter GitHub Release nach v4.0.7 vorbereitet, damit HACS die aktuelle Version erkennen kann.

# Änderungsprotokoll

## [4.0.1] - 2026-06-14

### Behoben

- JSON-Encoding für HACS-Validierung normalisiert.
- UTF-8-BOM aus `manifest.json` entfernt.
- Zeilenende in den Übersetzungsdateien normalisiert.
- HACS-Parser-Kompatibilität für `manifest.json` wiederhergestellt.

# Änderungsprotokoll

## [4.0.0] - 2026-06-14

### Schwerpunkt

- Veröffentlichung der eigenständigen v4-Kamera- und Modellfähigkeitslogik.
- Die Integration bleibt vollständig standalone und benötigt keine BambuLab-Home-Assistant-Integration als funktionale Abhängigkeit.
- Andere Bambu-Integrationen werden nur als technische Referenz für Protokolle und Kameraansteuerung betrachtet.
- Das Dashboard wurde für breitere Ansichten, kompaktere Diagnose und bessere Modellanzeige überarbeitet.

### Hinzugefügt

#### Eigenständige Kamera-Fähigkeitserkennung

- Interne Kamera-Fähigkeitsmatrix für unterstützte Bambu-Druckerfamilien ergänzt.
- Eigenständige Erkennung der Kameraart anhand des Druckermodells ergänzt.
- Kamera-Transport und Kamera-Port werden innerhalb der eigenen Integration bestimmt.
- Diagnosewerte für Kamera-Transport, Kamera-Port und Kamera-Verfügbarkeit ergänzt.
- Trennung zwischen Chamber-Image-Kameras und RTSPS-Kameras umgesetzt.
- Vorbereitung für künftige direkte RTSPS-Livekamera-Anbindung ergänzt.
- Kameralogik bewusst ohne Fallback auf externe Home-Assistant-Kamera-Entities umgesetzt.

#### Chamber-Image-Kameraunterstützung

- Unterstützungspfad für A1-, A1-mini-, P1P- und P1S-ähnliche Chamber-Image-Kameras ergänzt.
- TCP-Port `6000` als Chamber-Image-Kamera-Port klassifiziert.
- Dashboard-Label `Chamber Image / TCP 6000` ergänzt.
- Kamera-Diagnose für LAN-basierte Chamber-Image-Kameras verbessert.
- Native Kamera-Statuslogik für lokale LAN-Nutzung vorbereitet und vereinheitlicht.

#### RTSPS-Kameraunterstützung

- RTSPS-Kamerafamilie für X1-, X1-Carbon-, X1E-, H2-, P2- und X2-Klasse vorbereitet.
- TCP-Port `322` als RTSPS-Kamera-Port klassifiziert.
- Dashboard-Label `RTSPS / TCP 322` ergänzt.
- Modellbasierte Auswahl der RTSPS-Kameraart ergänzt.
- Grundlage für eigenständige RTSPS-Implementierung ohne externe Entity-Abhängigkeit gelegt.

#### Druckermodell und Anzeigename

- Automatische Druckermodellerkennung aus Bambu-Telemetrie ergänzt.
- `product_name` aus den Bambu-Modulinformationen wird bevorzugt verwendet.
- Seriennummern werden nicht mehr als Druckermodell angezeigt, wenn ein besserer Name verfügbar ist.
- Fallback-Erkennung über Entity-Prefix und konfigurierten Druckernamen ergänzt.
- Der im Einrichtungsassistenten eingegebene Name kann als sichtbarer Dashboard-Name dienen.
- Hinweis im Einrichtungsassistenten ergänzt, dass der eingegebene Druckername im Dashboard angezeigt wird, wenn kein Modell automatisch erkannt wird.
- Deutsche und englische Texte für den Anzeigenamen-Hinweis ergänzt.

#### Dashboard und Diagnose

- Kompakte Diagnose-Badges für Drucker und Kamera ergänzt.
- Lange technische Diagnoseanzeige reduziert.
- Lesbare Modellanzeige wie `Bambu Lab A1` statt Seriennummer umgesetzt.
- Kameraanzeige auf einen kompakten Transporthinweis reduziert.
- Footer- und Diagnosebereich optisch kompakter gestaltet.
- Frontend-Resource-Versionierung für den Release aktualisiert.
- Bestehendes automatisch erzeugtes Dashboard auf neue Resource-Version migrierbar gemacht.

#### Breiteres Dashboard-Layout

- Sections-basiertes Dashboard-Layout ergänzt.
- Druckerkarte erhält mehr horizontale Breite.
- Warteschlangenkarte wird daneben eingeordnet.
- Container-Query-basiertes Frontend-Layout ergänzt.
- Breite Ansichten nutzen den verfügbaren Platz besser.
- Schmale Ansichten bleiben responsiv und stapeln die Inhalte weiterhin sauber.
- Unterer Informationsbereich wurde reduziert, damit das Dashboard weniger langgezogen wirkt.

#### Modell- und AMS-Fähigkeiten

- Neue Modellfähigkeitslogik ergänzt.
- Neue Datei für Capability-Definitionen ergänzt.
- BMCU-370-/BCMU-370-Behandlung verbessert.
- Manuell gewählte AMS-/BMCU-Konfiguration bleibt erhalten.
- Automatische Erkennung überschreibt eine manuelle BMCU-370-Auswahl nicht mehr ungewollt.
- AMS-Anzeige im Dashboard lesbarer gemacht.
- Technische Kamera- und Modellfähigkeitsnotizen für die v4-Arbeit vorbereitet.

### Geändert

#### Architektur

- Kamera- und Modellfähigkeitserkennung in die eigene Integration verlagert.
- Keine funktionale Abhängigkeit von der BambuLab-Home-Assistant-Integration.
- Externe Bambu-Integrationen dienen nur noch als Referenzquelle für Protokollverhalten.
- Backend-Diagnose und Frontend-Anzeige stärker vereinheitlicht.
- Dashboard-Erzeugung auf breiteres Standardlayout umgestellt.

#### Frontend

- Frontend-Version auf `4.0.0` aktualisiert.
- Vollständige Druckerkarte für breite Ansichten überarbeitet.
- Breitenverteilung zwischen Druckerkarte und Warteschlange verbessert.
- Diagnosebereich gestrafft.
- Abstände im unteren Kartenbereich reduziert.
- Modellname und Kameraart werden kompakter angezeigt.
- Cache-Busting der Frontend-Ressource aktualisiert.

#### Backend

- Manifest-Version auf `4.0.0` aktualisiert.
- Integrationskonstante auf `4.0.0` aktualisiert.
- Druckermodellerkennung verbessert.
- Kamerastatus-Ausgabe verbessert.
- Sensorwerte für Kamera-Transport und Kamera-Port erweitert.
- Dashboard-Standarderzeugung angepasst.
- Modell- und Capability-Erkennung erweitert.

### Behoben

#### Modellanzeige

- Behoben, dass die Seriennummer als Druckermodell angezeigt wurde.
- Behoben, dass beim Bambu A1 nicht automatisch `Bambu Lab A1` angezeigt wurde.
- Behoben, dass der echte Bambu-`product_name` nicht bevorzugt im Dashboard landete.
- Fallback-Reihenfolge für Modellname, Anzeigename und Seriennummer korrigiert.
- Setup-Hinweis für den sichtbaren Dashboard-Namen ergänzt.

#### Kamera-Diagnose

- Fehlende Anzeige des Kamera-Transports behoben.
- Fehlende Anzeige des Kamera-Ports behoben.
- Unklare Kamera-Diagnose im Dashboard bereinigt.
- Zu lange technische Diagnose-Badge-Zeile reduziert.
- Erwartung einer externen BambuLab-Home-Assistant-Kamera-Entity entfernt.

#### Dashboard-Layout

- Zu schmal und vertikal gestreckt wirkende Dashboardansicht verbessert.
- Altes Masonry-Layout für das Standarddashboard durch breiteres Sections-Layout ersetzt.
- Druckerkarte nutzt in breiten Ansichten mehr Platz.
- Bestehendes Dashboard-Storage des Testsystems migrierbar gemacht.
- Unterer Informationsbereich kompakter gesetzt.

#### Release-Qualität

- Python-Syntaxproblem aus der rc2-Vorbereitung behoben.
- Frontend-Resource-Cache-Version korrigiert.
- Leere-Zeile-am-Dateiende-Warnungen bereinigt.
- ZIP-Strukturprüfung für das finale Installationspaket durchgeführt.
- Finales Installationspaket `pcc-4.0.0-ha-install.zip` vorbereitet.

### Hinweise

- Version 4.0.0 ist der erste Release mit eigenständiger Kamera- und Modellfähigkeitslogik.
- Die Integration bleibt weiterhin eine eigenständige Home-Assistant-Custom-Integration.
- Für X-/H-/P2-Klassen ist die RTSPS-Zuordnung vorbereitet; die tatsächliche Livekamera-Umsetzung bleibt modell- und firmwareabhängig.
- Für A-/P1-Klassen ist die Chamber-Image-Kameraklassifizierung über TCP 6000 vorbereitet.
- Die stabile v3-Historie bleibt unterhalb dieses Eintrags erhalten.

# Ãƒ„nderungsprotokoll

## [3.0.0] - 2026-06-05

### Stabile HACS-VerÃƒÂ¶ffentlichung

- praktisch bestÃƒÂ¤tigten Code-Stand 2.0.3 als stabile Version 3.0.0 verÃƒÂ¶ffentlicht
- Repository fÃƒÂ¼r die offizielle HACS-Aufnahme vorbereitet
- Laufzeitverhalten gegenÃƒÂ¼ber der bestÃƒÂ¤tigten Basis 2.0.3 unverÃƒÂ¤ndert gelassen
- vollstÃƒÂ¤ndige ÃƒÂ¶ffentliche Entwicklungshistorie von Alpha bis zur stabilen Version erhalten

Alle wesentlichen Ãƒ„nderungen am **3D-Printer Control Center** werden in dieser Datei dokumentiert.

Das Projekt begann als interner Home-Assistant-Prototyp und entwickelte sich ÃƒÂ¼ber zahlreiche Alpha- und Release-Candidate-StÃƒÂ¤nde bis zur ersten stabilen ÃƒÂ¶ffentlichen Version. Die frÃƒÂ¼he Vorab-Historie wurde aus Entwicklungsnotizen, erhaltenen Testartefakten und bestÃƒÂ¤tigten Meilensteinen rekonstruiert. Wenn eine exakte Ãƒ„nderung eines einzelnen internen Zwischenstands nicht sicher belegbar war, wurden eng zusammengehÃƒÂ¶rige Iterationen bewusst zusammengefasst, statt Details zu erfinden.

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

### Inkompatible Ãƒ„nderungen

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
