# Änderungsprotokoll

Alle wesentlichen Änderungen am **3D-Printer Control Center** werden in dieser Datei dokumentiert.

Das Projekt begann als interner Home-Assistant-Prototyp und entwickelte sich über zahlreiche Alpha- und Release-Candidate-Stände bis zur ersten stabilen öffentlichen Version. Die frühe Vorab-Historie wurde aus Entwicklungsnotizen, erhaltenen Testartefakten und bestätigten Meilensteinen rekonstruiert. Wenn eine exakte Änderung eines einzelnen internen Zwischenstands nicht sicher belegbar war, wurden eng zusammengehörige Iterationen bewusst zusammengefasst, statt Details zu erfinden.

## [2.0.3] - 2026-06-05

### Geändert

- Das automatisch erzeugte Dashboard `3D-Druck` verwendet jetzt ein responsives Masonry-Layout.
- Druckerkarte und Warteschlange bleiben im XL-Modus, werden auf Desktop-Bildschirmen aber nicht mehr unnötig breit gestreckt.
- Auf schmalen Bildschirmen werden die Karten weiterhin automatisch untereinander angeordnet.
- Die deutsche und englische README wurden vollständig überarbeitet.
- Kuratierte, zugeschnittene und komprimierte WebP-Screenshots wurden unter `docs/images/` ergänzt.
- Browser-Adressleisten, private URLs und veraltete Footer-URLs wurden aus öffentlichen Screenshots entfernt.
- Sichtbare rohe Repository-URL-Blöcke wurden durch saubere GitHub-Links ersetzt.
- Die Versionsnummer des Build-Skripts wurde korrigiert.

## [2.0.2] - 2026-06-05

### Hinzugefügt

- Globale Hintergrund-Uploads für die Galerie.
- Anzeige von Fortschritt, übertragener Datenmenge, aktueller Geschwindigkeit und aufklappbaren Upload-Details.
- Fortsetzung unterbrochener Uploads.
- Bereinigung veralteter Upload-Fragmente.
- Zusätzliche hochauflösende Branding-Dateien für HACS und Home Assistant.

### Geändert

- Die automatisch erzeugten Dashboards wurden auf zwei reduziert:
  - `3D-Druck`
  - `3D-Drucker-Dateimanager/Galerie`
- Die Druckwarteschlange wurde in das Dashboard `3D-Druck` integriert.
- Druckerkarte und Warteschlange bleiben im XL-Modus.
- Eine manuell eingetragene Drucker-IP hat für die native Kamera immer Vorrang vor der automatischen Netzwerkerkennung.

### Behoben

- Native Kamera wiederhergestellt, wenn die Netzwerkerkennung eine ungeeignete Adresse lieferte.
- Galerie-ZIP-Export repariert: Die ZIP wird heruntergeladen, statt auf die Home-Assistant-Startseite zu navigieren.
- Serverseitiges Staging wiederverwendet: Eine Überschreibbestätigung erfordert keinen erneuten Upload großer ZIP-Dateien.
- Gegenprüfung nach dem Entpacken eines Galerie-Imports ergänzt.

## [2.0.1] - 2026-06-05

### Hinzugefügt

- Automatische Erzeugung der Standard-Lovelace-Dashboards.
- Dienst `printer_control_center.install_dashboards` zum erneuten Erstellen der Standard-Dashboards.

### Geändert

- Lovelace-Ressource auf den neuen Frontend-Pfad mit Cache-Busting umgestellt.
- Kompatibilitäts-Aliasse für frühere Kartentypen während der Migration ergänzt.

### Behoben

- Veraltete Frontend-Ressourcen der früheren Domain werden entfernt.
- Sichtbarer Integrationstitel korrigiert.
- Dashboard-Migration nach dem Domainwechsel repariert.

## [2.0.0] - 2026-06-05

### Inkompatible Änderungen

- Interne Home-Assistant-Domain von `taracraft_3d_printer` auf `printer_control_center` umbenannt.
- Integrationsordner auf `custom_components/printer_control_center` umgestellt.
- Persistente Laufzeitpfade geändert:
  - `<HA-Konfiguration>/printer_control_center/archive/`
  - `<HA-Konfiguration>/printer_control_center/uploads/`
  - `<HA-Konfiguration>/printer_control_center/print_queue.json`
- Einmalige Neuinstallation und neue Integrationseinrichtung erforderlich, da Home-Assistant-Domains keine Bindestriche enthalten dürfen und ein Domainwechsel keine transparente Migration ist.

### Hinzugefügt

- Galerie-ZIP-Export mit vollständiger Ordnerstruktur.
- Galerie-ZIP-Import mit sicheren Pfadprüfungen.
- Konflikterkennung und ausdrücklicher Nachfrage vor dem Überschreiben.
- Branding-Dateien sowohl im Repository-Root als auch im Integrationsordner.
- Migrationsdokumentation.

### Erhalten

- Der alte Datenordner kann als Rollback-Quelle behalten werden.
- Die separate Galerie-ZIP kann in eine saubere Installation importiert werden.

## [1.0.0] - 2026-06-05

### Erste stabile öffentliche Version

- Stabilen Stand aus internem Kandidaten `rc1.39` veröffentlicht.
- HACS-kompatible Repository-Struktur ergänzt.
- MIT-Lizenz, zweisprachige README-Dateien, Setup-Dokumentation, Publishing-Dokumentation und öffentliche Repository-Bereinigung ergänzt.
- Deutsche und englische Setup-Übersetzungen ergänzt.
- Dashboard-Sprache auswählbar:
  - automatisch nach Home-Assistant-Sprache
  - Deutsch
  - English
- Manuelle Drucker-IP mit Vorrang vor der optionalen automatischen Erkennung ergänzt.
- Laufzeitpfade mit `hass.config.path(...)` portabel gemacht.
- Weitere Bambu-Lab-Drucker generisch über IP-Adresse, Seriennummer und LAN-Access-Code vorgesehen.
- A1 als zum Release praktisch bestätigtes Druckermodell dokumentiert.
- Geplante Funktionen dokumentiert:
  - Filamentverwaltung
  - Druckkosten
  - Projektmanagement mit Bildern, Dokumentation und Zusatzmaterial
  - MakerWorld-Import

---

# Vorab-Entwicklungshistorie

## [rc1.39] - 2026-06-05

### Stabiler interner Ausgangsstand

- Nach praktischer Browser-Prüfung intern als **Version 1.0** freigegeben.
- Verschieben-Dialog als klar erkennbare Ordnerbaumansicht mit Einrückung, Verbindungslinien und Baum-Symbolen umgesetzt.
- Interne Scrollposition der Ordnerliste im Verschieben-Dialog erhalten.
- Telemetrie-bedingte Komplett-Neurenderings in Galerie, Warteschlange und Karteneditor verhindert.
- Fokus und Cursorposition in aktiven Eingabe- und Mengenfeldern erhalten.

## [rc1.38] - 2026-06-05

### Interne Stabilisierung

- Laufzeitverhalten des Verschieben-Dialogs verfeinert.
- Finale Ordnerbaum- und UI-State-Fixes vorbereitet.

## [rc1.37] - 2026-06-05

### Geändert

- Ordnerbaum-Darstellung im Verschieben-Dialog verbessert.
- Toast-Meldungen und Überschreibfeedback verfeinert.

## [rc1.36] - 2026-06-05

### Hinzugefügt

- Nachfrage vor dem Überschreiben bei Verschiebekonflikten.
- Modernes Inline-Speicherfeedback.
- Mengen-Dropdown für Warteschlangen-Einträge.

## [rc1.35] - 2026-06-05

### Hinzugefügt

- Bestätigungsbutton für Mengenänderungen in der Warteschlange.
- Kurz sichtbares `Gespeichert`-Feedback nach Mengenänderungen.
- Skalierung der Warteschlangenkarten für einzelne und mehrere Einträge verbessert.

## [rc1.34] - 2026-06-05

### Behoben

- Mehrfachverschieben in der Galerie.
- Aktualisierung der SD-Karte nach dem Anlegen oder Löschen von Verzeichnissen.
- Thumbnail-Größe der Warteschlangenkarten.

## [rc1.33] - 2026-06-05

### Behoben

- Lokale Archiv-Verschiebungen verwenden verifizierte Dateisystem-Umbenennung statt Kopiersemantik.
- Nachprüfung für lokale Verschiebungen ergänzt.
- Nachprüfung für SD-Karten-FTPS-Renames ergänzt.
- Fokus und Cursorposition bei Home-Assistant-Live-Refreshes erhalten.
- Warteschlangenlayout vereinfacht:
  - Vorschau zuerst
  - Dateiname unterhalb der Vorschau
  - optionaler Zeitpunkt unterhalb des Dateinamens
  - sämtliche Bedienelemente unterhalb des Modells
- Fehlende Vorschauen älterer Warteschlangen-Einträge nachträglich ergänzt.

## [rc1.32] - 2026-06-05

### Hinzugefügt

- Eigenständige Lovelace-Karte `3D-Druck-Warteschlange`.
- Persistente Warteschlange in `print_queue.json`.
- Verwaltung der Warteschlange:
  - Stückzahl
  - optionaler Zeitpunkt
  - Reihenfolge
  - `1 erledigt`
  - Entfernen
  - Drucken über Original-3MF-Übergabe
- Galerie-Popup zur Auswahl mehrerer Modelle für die Warteschlange.

### Geändert

- Redundante Kontextmenü-Aktionen entfernt:
  - Original-Projekt-3MF herunterladen
  - QR-Code
  - Nach Zeitraffer suchen
  - Projektseite

## [rc1.31] - 2026-06-05

### Interne Stabilisierung

- Queue-Integration und Vorschau-Verfeinerungen nach Abschluss des Bambu-Studio-Direktimports vorbereitet.

## [rc1.30] - 2026-06-05

### Geändert

- Primäre Bambu-Studio-Übergabe auf unveränderte Original-3MF-Datei umgestellt.
- Generierte Modell-3MF- und STL-Dateien als explizite manuelle Fallbacks behalten.
- Originaldateien als `application/octet-stream` ausgeliefert.

### Dokumentiertes Verhalten

- Bestätigt, dass Bambu Studio für selbst gehostete URLs eine Herkunftswarnung anzeigt.
- Bestätigt, dass diese Warnung durch Bambu Studio erzwungen wird und für eine private Home-Assistant-Domain nicht sauber ohne Client-Manipulation oder vorgetäuschten vertrauenswürdigen Hostnamen abschaltbar ist.
- Lösung vollständig Home-Assistant-autark gehalten:
  - kein Windows-Helfer
  - kein Bridge-Dienst
  - kein externer Proxy

## [rc1.29] - 2026-06-05

### Behoben

- Kontextmenü- und Vorschau-CSS-Regeln aus versehentlichem schmalen `@container`-Bereich verschoben.
- Overlays mindestens 76 px unterhalb des oberen Fensterrands gehalten.
- 3D-Vorschau an ausgewählter Modellkarte verankert.

### Geändert

- Signierte Direktimport-URL so angepasst, dass die sichtbare URL auf `.3mf` endet.
- Pfad, Ablaufzeit und Signatur als URL-Pfadsegmente vor dem Dateinamen übertragen.

## [rc1.28] - 2026-06-05

### Interne Stabilisierung

- Verrutschte Overlays und Bambu-Studio-Direktimport untersucht.
- Overlay- und Signed-URL-Korrekturen für `rc1.29` vorbereitet.

## [rc1.27] - 2026-06-05

### Geändert

- Galerie- und Dateimanager-Workflows zusammengeführt.
- Home-Assistant-autarke Bambu-Studio-Übergabe vorbereitet.
- Abhängigkeit von einem Windows-Helfer entfernt.

## [rc1.26] - 2026-06-05

### Interne Stabilisierung

- Zwischenstand der Galerie- und Direktimport-Entwicklung.

## [rc1.25] - 2026-06-05

### Hinzugefügt

- Verfeinerungen der Galerie-Karte.
- Modell-Export-Aktionen.
- Zusätzliche Tests für Modell-Export und Galerie-Kartenverhalten.

## [rc1.24] - 2026-06-05

### Hinzugefügt

- Dedizierte Galerie-Karteniteration.
- Erste Trennung der Galerie als eigenständige Lovelace-Karte.

## [rc1.23] - 2026-06-05

### Geändert

- Galerie in Richtung professioneller Archiv-Modellraster-Ansicht überarbeitet.
- Visuelle Hierarchie und Skalierung verbessert.

## [rc1.22] - 2026-06-05

### Geändert

- Galerie-Proportionen und Thumbnail-Größen verfeinert.

## [rc1.21] - 2026-06-05

### Behoben

- Öffnen der Galerie.
- Popup- und Karteninteraktionen.

## [rc1.20] - 2026-06-05

### Hinzugefügt

- Galerie-Manager-Iteration mit Archivnavigation und Modellverwaltung.

## [rc1.19] - 2026-06-05

### Geändert

- Generierte Thumbnails und Modellvorschau verbessert.

## [rc1.18] - 2026-06-05

### Geändert

- Erste Galerie-Implementierung verfeinert.

## [rc1.17] - 2026-06-05

### Hinzugefügt

- Erste Galerieansicht für archivierte Modelle.

## [rc1.16] - 2026-06-05

### Geändert

- Dateimanager nach Upload- und Modellimport-Implementierung weiter verbessert.

## [rc1.15] - 2026-06-05

### Hinzugefügt

- Modellimport-Workflow.

## [rc1.14] - 2026-06-05

### Geändert

- Upload-Verarbeitung und Validierung verbessert.

## [rc1.13] - 2026-06-05

### Hinzugefügt

- Erster Archiv-Upload-Workflow.

## [rc1.12] - 2026-06-05

### Geändert

- Dateimanager-Iteration mit weiterer Archivnavigation.

## [rc1.11] - 2026-06-05

### Geändert

- Dateimanager-Iteration mit zusätzlichen Dateioperationen.

## [rc1.10] - 2026-06-05

### Geändert

- Dateimanager-Iteration mit frühen Archivverwaltungsverbesserungen.

## [rc1.9] - 2026-06-05

### Geändert

- Erste Dateimanager-Implementierung verfeinert.

## [rc1.8] - 2026-06-05

### Hinzugefügt

- Erster Dateimanager-Prototyp für archivierte Druckdateien.

## [alpha] - 2026-06-04 bis 2026-06-05

### Erster Prototyp

- Erste Home-Assistant-Integration für einen Bambu-Lab-Drucker erstellt.
- LAN-orientierte Druckerverbindung und MQTT-Telemetrie ergänzt.
- Erste Lovelace-Druckerkarte ergänzt.
- Native Kamera-Experimente und Druckersteuerungen ergänzt.
- AMS/BMCU-Slot-Anzeige ergänzt.
- Responsive Kartengrößen-Steuerung ergänzt.
- Erstes lokales Archivkonzept angelegt, aus dem später Galerie und Dateimanager hervorgingen.

---

# Hinweise für Maintainer

- Vorabstände bleiben zur Transparenz und historischen Dokumentation erhalten.
- Die stabile öffentliche Support-Linie beginnt mit `1.0.0`.
- Die frühere interne Domain `taracraft_3d_printer` wurde mit `2.0.0` abgelöst.
- Die aktuelle Integrations-Domain lautet `printer_control_center`.
