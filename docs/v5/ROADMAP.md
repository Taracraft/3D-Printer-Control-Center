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
