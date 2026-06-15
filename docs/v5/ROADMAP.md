# 3D-Printer Control Center v5

Codename: Studio / Direct Print

## Ziel

Version 5 erweitert das 3D-Printer Control Center zu einem kleinen Studio direkt in Home Assistant.

Der neue v5-Workflow soll sein:

1. Modell aus der Galerie öffnen
2. Im Studio skalieren, drehen, verschieben, strecken oder spiegeln
3. Drucker-, Filament- und Prozessprofil auswählen
4. Modell slicen
5. Ergebnis prüfen
6. Direkt aus Home Assistant drucken

## Grundsätze

- Standalone Home-Assistant-Integration
- Keine funktionale Abhängigkeit von der separaten BambuLab-Home-Assistant-Integration
- Kein schwerer Slicer im Home-Assistant-Core-Prozess
- Slicer als Add-on, Worker oder Sidecar
- Original-3MF-Dateien bleiben unverändert
- Transformationen werden separat gespeichert
- Bambu-Studio-Profile sollen importierbar sein
- BambuLab-Cloud-Profil-Sync nur optional, wenn sauber und stabil möglich

## Hauptbereiche

### Studio

- 3D-Vorschau mit Druckbett
- Objekt verschieben
- Objekt drehen
- Objekt skalieren
- Objekt strecken
- Objekt spiegeln
- Objekt zentrieren
- Objekt flach auf Druckbett legen
- Reset auf Originaltransformation
- Mehrere Objekte auf einem Druckbett
- Kollisions- und Bauraumprüfung

### Profile

- Druckerprofile
- Nozzle-Profile
- Filamentprofile
- Prozess-/Druckprofile
- Benutzerprofile
- Import aus Bambu Studio
- Optionaler Cloud-Sync

### Slicer

- Slicer-Worker außerhalb des HA-Core-Prozesses
- Jobverwaltung
- Jobstatus
- Logs
- Materialschätzung
- Zeitschätzung
- Ausgabe als druckbare Datei

### Direktdruck

- Sliced-Datei an Drucker übertragen
- Druck aus Home Assistant starten
- Warteschlange mit Slicing verbinden
- Fehler sichtbar anzeigen
- Fortschritt im Dashboard darstellen

## Geplante Entwicklungsstufen

### v5-alpha1

- Studio-Tab
- Transformationsmodell
- Skalieren, Drehen, Verschieben, Strecken
- Transformationen speichern und laden

### v5-alpha2

- Profilverwaltung
- Lokale Profilbibliothek
- Bambu-Studio-Profilimport

### v5-alpha3

- Slicer-Worker
- Slice-Jobs
- Logs
- Output-Dateien
- Zeit- und Materialauswertung

### v5-beta1

- Direktdruck
- Warteschlangenintegration
- Druckstart aus Home Assistant

### v5.0.0

- Stabile Studio-/Slicer-/Direktdruck-Version
- Deutsche und englische Dokumentation
- Deutsche und englische Changelogs
- HACS-kompatibler Release

## MakerWorld Browser

v5 erweitert den bisherigen MakerWorld-Hinweis zu einem vollständigen MakerWorld-Browser direkt in Home Assistant.

Ziel ist nicht mehr, MakerWorld nur extern zu öffnen und anschließend manuell eine 3MF-Datei hochzuladen.

Der neue Ziel-Workflow ist:

1. MakerWorld direkt im 3D-Printer Control Center durchsuchen
2. Ergebnisse mit Vorschaubildern, Modellname, Creator, Lizenz und Profilinformationen anzeigen
3. Detailansicht ähnlich MakerWorld öffnen
4. Modell-Dateien, Plates oder Print Profiles auswählen
5. Modell lokal in das 3D-Printer Control Center importieren
6. Modell direkt in Galerie oder Studio öffnen
7. Modell mit dem eigenen v5-Slicer weiterverarbeiten
8. Druck aus Home Assistant vorbereiten und starten

Wichtige Grundsätze:

- Importziel ist der eigene 3D-Printer-Control-Center-Slicer, nicht Bambu Studio
- Die Integration bleibt standalone
- Keine funktionale Abhängigkeit von der separaten BambuLab-Home-Assistant-Integration
- Kein fragiles Scraping als Pflichtbasis
- Bevorzugt offizielle oder öffentliche MakerWorld-Mechanismen verwenden
- Als robuste erste Stufe wird ein MakerWorld-Link-Import umgesetzt
- Kurzlebige Download-URLs werden nicht dauerhaft gecacht
- Heruntergeladene Modell- und Vorschaudateien werden lokal im 3D-Printer-Control-Center-Speicher abgelegt
- Creator-, Lizenz- und Quellenhinweise bleiben sichtbar erhalten

### v5-alpha4

- MakerWorld-Link-Import
- Metadaten und Vorschaubilder laden
- lokale MakerWorld-Importstruktur
- Import in Galerie
- Import in Studio vorbereiten
- Lizenz- und Creator-Hinweise speichern

### v5-alpha5

- MakerWorld-Suche direkt in Home Assistant
- Suchfeld, Kategorien und Filter
- Ergebnisraster mit Vorschaubildern
- Detailansicht mit Modellinformationen
- Auswahl von Dateien, Plates und Profilen
- Import direkt in den Studio-/Slicer-Workflow

### v5-alpha6

- MakerWorld-Import mit v5-Slicer-Worker verbinden
- Profil-/Plattenauswahl für Slice-Jobs nutzen
- importierte MakerWorld-Modelle direkt aus Home Assistant slicen
