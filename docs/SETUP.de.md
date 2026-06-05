# Einrichtungsanleitung

## Installation über HACS

1. HACS öffnen.
2. Das Menü öffnen und **Benutzerdefinierte Repositories** auswählen.
3. `https://github.com/Taracraft/3D-Printer-Control-Center` eintragen.
4. Typ **Integration** auswählen.
5. **Taracraft 3D-Printer Control Center** installieren.
6. Home Assistant neu starten.
7. **Einstellungen → Geräte & Dienste → Integration hinzufügen** öffnen und nach `Taracraft` suchen.

## Empfohlene LAN-Einrichtung

Eine manuell eingetragene Drucker-IP wird empfohlen. Die automatische Erkennung bleibt als optionaler Fallback verfügbar, kann aber in gerouteten oder Broadcast-eingeschränkten Netzen unzuverlässig sein.

### Wo finde ich meinen Gerätecode?

Am Drucker **Einstellungen → LAN Only** öffnen. Je nach Druckermodell und Firmware kann die Seite unter **WLAN** oder **Netzwerk** liegen. Den Nur-LAN-Modus aktivieren und die angezeigte **IP-Adresse** sowie den **Access-Code** verwenden. Keine sechsstellige Konto-PIN verwenden.
