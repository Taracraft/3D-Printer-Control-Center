# Datenschutz und Sicherheit

PrinterControlCenter 3D-Printer Control Center ist für einen lokal ausgerichteten Betrieb konzipiert.

Je nach gewähltem Einrichtungsmodus speichert Home Assistant Drucker-IP, Seriennummer, LAN-Access-Code und optionale Cloud-Token im Konfigurationseintrag der Integration. Exportierte Konfigurationseinträge niemals öffentlich veröffentlichen.

Lokales Modellarchiv, Upload-Zwischenspeicher und Druckwarteschlange werden unterhalb des aktiven Home-Assistant-Konfigurationsverzeichnisses gespeichert:

```text
<HA-Konfiguration>/printer_control_center/
```

Vor dem Veröffentlichen von Logs oder Diagnosedaten LAN-Access-Codes, Cloud-Token und personenbezogene Daten entfernen. IP-Adressen, Seriennummern und Modell-Dateinamen vor der Veröffentlichung prüfen.
