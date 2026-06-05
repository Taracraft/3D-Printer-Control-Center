# Taracraft 3D-Printer Control Center für Home Assistant

[English documentation](README.md) · [Changelog](CHANGELOG.md) · [Einrichtungsanleitung](docs/SETUP.de.md) · [Bekannte Probleme](docs/KNOWN_ISSUES.de.md) · [Datenschutz und Sicherheit](docs/PRIVACY.de.md)

Eine lokal ausgerichtete Home-Assistant-Custom-Integration für Bambu-Lab-3D-Drucker. Sie stellt MQTT-Telemetrie, native Kameraunterstützung soweit verfügbar, responsive Lovelace-Karten, ein lokales 3MF-Archiv, SD-Karten-Dateiverwaltung und eine persistente Druckplanung bereit.

## Highlights

- HACS-kompatible Repository-Struktur
- Einrichtungsmodi Nur-LAN, Nur-Cloud und Hybrid
- manuelle Drucker-IP mit Vorrang vor der optionalen automatischen Erkennung
- deutsche und englische Übersetzungen des Einrichtungsassistenten
- auswählbare Dashboard-Sprache: `Automatisch`, `Deutsch`, `English`
- modellneutrale Einrichtung mit Drucker-IP, Seriennummer und LAN-Access-Code
- natives Home-Assistant-Kamera-Entity, wenn der Drucker das kompatible Kameraprotokoll bereitstellt
- responsive Lovelace-Karten einschließlich **Dateimanager / Galerie** und **3D-Druck-Warteschlange**
- lokales 3MF-Archiv unterhalb des aktiven Home-Assistant-Konfigurationsverzeichnisses
- SD-Karten-Zugriff per FTPS, sofern vom Drucker bereitgestellt
- direkte Bambu-Studio-Übergabe unveränderter Original-3MF-Dateien
- kein Windows-Helfer, kein Bridge-Dienst, kein externer Proxy und kein Zusatzcontainer
- keine automatischen Drucker-Firmware-Updates

## Kompatibilität

Version `1.0.0` wurde praktisch mit einer Bambu-Lab-A1-Umgebung getestet. Andere Bambu-Lab-Drucker können über manuelle IP-Adresse, Seriennummer und LAN-Access-Code eingerichtet werden. Der Funktionsumfang hängt von den Protokollen ab, die die jeweilige Drucker-Firmware bereitstellt.

## Installation über HACS

Solange das Repository noch nicht im HACS-Standardkatalog enthalten ist:

1. HACS öffnen.
2. Das Menü öffnen und **Benutzerdefinierte Repositories** auswählen.
3. `https://github.com/Taracraft/3D-Printer-Control-Center` eintragen.
4. Typ **Integration** auswählen.
5. **Taracraft 3D-Printer Control Center** installieren.
6. Home Assistant neu starten.
7. Die Integration unter **Einstellungen → Geräte & Dienste** hinzufügen.

## LAN-Einrichtung und Gerätecode

Eine manuell eingetragene Drucker-IP wird empfohlen. Die automatische Erkennung bleibt als optionaler Fallback verfügbar.

Den LAN-Access-Code findest du am Drucker unter **Einstellungen → LAN Only**. Je nach Druckermodell und Firmware kann die Seite unter **WLAN** oder **Netzwerk** liegen. Den Nur-LAN-Modus aktivieren und die dort angezeigte IP-Adresse sowie den Access-Code verwenden. Keine sechsstellige Konto-PIN verwenden.

## Sprachauswahl

Bei der Einrichtung stehen `Automatic / Automatisch (Home Assistant)`, `Deutsch` und `English` zur Auswahl. Die Sprache lässt sich später in den Integrationsoptionen ändern.

## Persistente Daten

```text
<HA-Konfiguration>/taracraft_3d_printer/archive/
<HA-Konfiguration>/taracraft_3d_printer/uploads/
<HA-Konfiguration>/taracraft_3d_printer/print_queue.json
```

## Geplante Funktionen

- Filamentverwaltung
- Druckkosten
- Projektmanagement mit Bildern, Dokumentation und Zusatzmaterial
- MakerWorld-Import

## Sicherheitshinweise

LAN-Access-Codes, Cloud-Token und nicht bereinigte Diagnosedaten niemals in öffentlichen Issues veröffentlichen. Bambu Studio zeigt bei selbst gehosteten Download-URLs absichtlich eine Herkunftswarnung; die Integration umgeht diese Sicherheitsprüfung nicht.

## Support

Nutze den [GitHub-Issue-Tracker](https://github.com/Taracraft/3D-Printer-Control-Center/issues) und entferne Zugangsdaten sowie personenbezogene Daten aus Logs.
