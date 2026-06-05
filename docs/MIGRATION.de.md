# Migration auf den Domainnamen `printer_control_center`

Version `2.0.3` verwendet den technischen Home-Assistant-Domainnamen `printer_control_center`. Eine bestehende Installation mit einem älteren Domainnamen muss einmalig neu eingerichtet werden.

## Sichere Reihenfolge

1. Vor der Deinstallation die bestehende Galerie vollständig als ZIP exportieren.
2. Die alte Integration unter **Einstellungen → Geräte & Dienste** entfernen.
3. Die alte HACS-Installation entfernen und Home Assistant neu starten.
4. **3D-Printer Control Center** erneut über HACS installieren.
5. Home Assistant neu starten und die Integration neu einrichten.
6. Das automatisch erstellte Dashboard **3D-Drucker-Dateimanager/Galerie** öffnen.
7. Im lokalen Archiv **Galerie-ZIP importieren** auswählen.
8. Die exportierte ZIP-Datei hochladen und die Wiederherstellung prüfen.

Der ZIP-Export enthält Modelle und Ordnerstruktur. Die Druckwarteschlange wird nicht in den Galerie-ZIP-Export aufgenommen.
