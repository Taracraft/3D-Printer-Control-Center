# Ultimate Druck Studio V6 – HA-Rekonstruktion

Dieser Branch rekonstruiert den V6-Stand aus den auf Home Assistant vorhandenen Laufzeitdateien.

## Quelle

- Home Assistant-Pfad: `/config/www/3d-studio-v6/`
- Aktive Runtime: `ultimate-3d-studio.js`
- Dashboard: `3d-studio-v6-test`
- Aktiver HA-Build im Dashboard: `20260713-984fed6c21df81f4`

## Exportstruktur

- `v6/ha-export/`: aktuell ausgelieferte JS-/CSS-Datei, Manifest, Buildbeschreibung und Gate-Protokolle
- `v6/recovered-sources/`: historische HA-Snapshots mit den umfangreicheren Paint-, Auswahl-, Form- und Textständen

## Wiederherstellungsregel

Die Datei unter `v6/ha-export/` beschreibt den aktuell aktiven Live-Stand. Die Dateien unter `v6/recovered-sources/` sind Quellenstände und werden erst nach Prüfung als neue aktive Runtime verwendet.

## Nächste technische Schritte

1. Paint-, Auswahl-, Form- und Textfunktionen aus den Snapshots in eine nachvollziehbare V6-Quellstruktur überführen.
2. Druckerprofil auf reine Druckerauswahl reduzieren; Düsenprofil bleibt im separaten Druckprofilbereich.
3. Support-Popup, Filamentanzeige, Galerie, Profile, CAD-Studio, System, Aufgaben und Verlauf gegen die HA-Integration prüfen.
4. TypeScript-/Python-Gates lokal ausführen.
5. Nach erfolgreicher Prüfung ein versioniertes HA-Release erzeugen und erst danach aktiv ausliefern.

Der Branch dient als Sicherung und Rekonstruktionsbasis. Der bestehende `master`-Branch bleibt unverändert.
