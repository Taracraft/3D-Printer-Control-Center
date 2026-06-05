# 3D-Printer Control Center für Home Assistant

<p align="center"><img src="brand/logo.png" alt="3D-Printer Control Center" width="180"></p>

[English documentation](README.md) · [Changelog](CHANGELOG.md) · [Einrichtungsanleitung](docs/SETUP.de.md) · [Migration](docs/MIGRATION.de.md) · [Datenschutz und Sicherheit](docs/PRIVACY.de.md)

Eine lokal ausgerichtete Home-Assistant-Custom-Integration für kompatible Bambu-Lab-3D-Drucker. Sie stellt MQTT-Telemetrie, native Kameraunterstützung soweit verfügbar, responsive Lovelace-Karten, ein lokales 3MF-Archiv, SD-Karten-Dateiverwaltung und eine persistente Druckplanung bereit.

<img width="1600" height="974" alt="WhatsApp Image 2026-06-05 at 12 10 38" src="https://github.com/user-attachments/assets/6cbc227a-b9b3-4595-b3ff-d8902ba98c61" />
<img width="805" height="432" alt="WhatsApp Image 2026-06-05 at 12 10 38 (6)" src="https://github.com/user-attachments/assets/e0f3805d-ca1e-434e-b18e-a4ffd5e74ec5" />
<img width="816" height="725" alt="WhatsApp Image 2026-06-05 at 12 10 38 (5)" src="https://github.com/user-attachments/assets/5df16605-0653-45a1-b9ac-c7e23f3ed144" />
<img width="1206" height="912" alt="WhatsApp Image 2026-06-05 at 12 10 38 (4)" src="https://github.com/user-attachments/assets/e6a12617-d601-4b03-b83b-642e7797c93c" />
<img width="1247" height="820" alt="WhatsApp Image 2026-06-05 at 12 10 38 (3)" src="https://github.com/user-attachments/assets/24dcb4d1-f24c-4db8-a7db-08f11e7d6b4e" />
<img width="794" height="556" alt="WhatsApp Image 2026-06-05 at 12 10 38 (2)" src="https://github.com/user-attachments/assets/219deed4-f592-4b52-ae89-af2d35beeb72" />
<img width="1307" height="920" alt="WhatsApp Image 2026-06-05 at 12 10 38 (1)" src="https://github.com/user-attachments/assets/4d66af97-3562-4f6e-a844-bcf939d327d1" />


## Highlights

- HACS-kompatible Repository-Struktur
- sichtbarer Produktname: **3D-Printer Control Center**
- interner Home-Assistant-Domainname: `printer_control_center`
- Einrichtungsmodi Nur-LAN, Nur-Cloud und Hybrid
- manuelle Drucker-IP mit Vorrang vor der optionalen automatischen Erkennung
- deutsche und englische Übersetzungen des Einrichtungsassistenten
- auswählbare Dashboard-Sprache: `Automatisch`, `Deutsch`, `English`
- natives Home-Assistant-Kamera-Entity, wenn der Drucker das kompatible Kameraprotokoll bereitstellt
- responsive Lovelace-Karten einschließlich **3D-Drucker-Dateimanager/Galerie** sowie integrierter **3D-Druck-Warteschlange**
- lokales 3MF-Archiv mit ZIP-Export und ZIP-Import inklusive Ordnerstruktur
- SD-Karten-Zugriff per FTPS, sofern vom Drucker bereitgestellt
- direkte Bambu-Studio-Übergabe unveränderter Original-3MF-Dateien
- kein Windows-Helfer, kein Bridge-Dienst, kein externer Proxy und kein Zusatzcontainer

## Installation über HACS

1. Dieses Repository in HACS als benutzerdefiniertes Repository vom Typ **Integration** hinzufügen.
2. **3D-Printer Control Center** installieren.
3. Home Assistant neu starten.
4. Die Integration unter **Einstellungen → Geräte & Dienste** hinzufügen.
5. Die gewünschten Dashboard-Karten über den Kartenwähler ergänzen.

Repository:

```text
https://github.com/Taracraft/3D-Printer-Control-Center
```

## Galerie sichern und wiederherstellen

Im **3D-Drucker-Dateimanager/Galerie** stehen im lokalen Archiv zwei Buttons bereit:

```text
Galerie-ZIP exportieren
Galerie-ZIP importieren
```

Der Export enthält alle 3MF-Modelle und die vollständige Ordnerstruktur. Beim Import wird vor dem Überschreiben vorhandener Dateien nachgefragt.

## Persistente Daten

```text
<HA-Konfiguration>/printer_control_center/archive/
<HA-Konfiguration>/printer_control_center/uploads/
<HA-Konfiguration>/printer_control_center/print_queue.json
```

## Geplante Funktionen

- Filamentverwaltung
- Druckkosten
- Projektmanagement mit Bildern, Dokumentation und Zusatzmaterial
- MakerWorld-Import

## Sicherheit

LAN-Access-Codes, Cloud-Token und nicht bereinigte Diagnosedaten niemals in öffentlichen Issues veröffentlichen.

## Automatisch verwaltete Dashboards

Die Integration erstellt standardmäßig zwei Lovelace-Dashboards:

- **3D-Druck** mit Druckerkarte links und Warteschlange rechts
- **3D-Drucker-Dateimanager/Galerie** als Vollbreitenansicht

Das lässt sich im Einrichtungsassistenten deaktivieren und später in den Integrationsoptionen ändern. Der Dienst `printer_control_center.install_dashboards` erstellt oder repariert die integrationsbezogenen Dashboards erneut.

Galerie-ZIP-Importe und normale 3MF-Uploads laufen als kompakter aufklappbarer Browser-Hintergrundtask weiter, wenn zwischen Dashboards gewechselt wird. Die Anzeige enthält Fortschritt, Übertragungsgeschwindigkeit, Entpackstatus und Gegenprüfung. Nach einem vollständigen Browser-Neuladen lässt sich ein noch vorhandenes Upload-Fragment fortsetzen, indem dieselbe lokale Datei erneut ausgewählt wird. Veraltete Fragmente werden automatisch bereinigt.
