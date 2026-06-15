# v5 Technical Architecture

## Zielarchitektur

Home Assistant Integration

- Frontend
  - Galerie
  - Studio
  - Profile
  - Slicer
  - Warteschlange

- Backend Integration
  - API-Endpunkte
  - Services
  - Profilverwaltung
  - Projektverwaltung
  - Jobverwaltung
  - Druckerkommunikation

- Slicer Worker / Add-on
  - Modell vorbereiten
  - Transformationen anwenden
  - Profile auflösen
  - Slicing ausführen
  - Ergebnisdateien erzeugen
  - Status, Logs und Schätzwerte zurückgeben

## Neue Datenbereiche

/config/printer_control_center/

- profiles/
  - printers/
  - filaments/
  - process/
  - user/
- studio/
  - projects/
  - transforms/
- slicer/
  - jobs/
  - output/
  - logs/
- print_queue.json

## Transformationsmodell

{
  "model_id": "example-model",
  "source_file": "gallery/example.3mf",
  "transform": {
    "position": {
      "x": 0,
      "y": 0,
      "z": 0
    },
    "rotation": {
      "x": 0,
      "y": 0,
      "z": 0
    },
    "scale": {
      "x": 1.0,
      "y": 1.0,
      "z": 1.0
    },
    "mirror": {
      "x": false,
      "y": false,
      "z": false
    }
  }
}

## Vorgesehene Services

- printer_control_center.open_studio_project
- printer_control_center.save_studio_project
- printer_control_center.import_bambu_profile
- printer_control_center.sync_bambu_profiles
- printer_control_center.slice_model
- printer_control_center.prepare_print
- printer_control_center.send_to_printer
- printer_control_center.print_now
- printer_control_center.cancel_slice_job

## MakerWorld Import Architecture

Der MakerWorld-Import wird als eigener v5-Backend- und Frontend-Bereich geplant.

`	ext
Home Assistant Frontend
│
├─ MakerWorld Browser
│  ├─ Suche
│  ├─ Filter
│  ├─ Ergebnisraster
│  ├─ Vorschaubilder
│  ├─ Detailansicht
│  ├─ Datei-/Plate-Auswahl
│  └─ Importaktionen
│
├─ Printer Control Center Backend
│  ├─ makerworld/search
│  ├─ makerworld/model
│  ├─ makerworld/preview
│  ├─ makerworld/import
│  ├─ makerworld/import_to_gallery
│  └─ makerworld/import_to_studio
│
├─ Local Storage
│  ├─ makerworld/cache
│  ├─ makerworld/previews
│  ├─ makerworld/metadata
│  ├─ makerworld/imports
│  └─ makerworld/licenses
│
└─ v5 Slicer Pipeline
   ├─ Studio-Projekt erzeugen
   ├─ Transformationen anwenden
   ├─ Profil wählen
   ├─ Slice-Job starten
   └─ Druck vorbereiten
`",
            ",
            

`	ext
/config/printer_control_center/
├─ gallery/
├─ makerworld/
│  ├─ cache/
│  ├─ previews/
│  ├─ metadata/
│  ├─ imports/
│  └─ licenses/
├─ studio/
├─ profiles/
└─ slicer/
`",
            ",
            

`json
{
  "source": "makerworld",
  "model_id": "makerworld-model-id",
  "title": "Model name",
  "creator": "Creator name",
  "source_url": "https://makerworld.com/...",
  "license": "license text or identifier",
  "imported_at": "2026-06-15T00:00:00+02:00",
  "files": [
    {
      "name": "model.3mf",
      "type": "3mf",
      "local_path": "makerworld/imports/model.3mf"
    }
  ],
  "profiles": [],
  "preview_images": []
}
`",
            ",
            

1. MakerWorld-Link-Import als robuste erste Stufe
2. MakerWorld-Suche direkt in Home Assistant als zweite Stufe
3. Optionaler angemeldeter Import nur wenn technisch erforderlich und stabil

Kurzlebige Download-URLs dürfen nicht dauerhaft gespeichert werden. Stattdessen wird die eigentliche Datei sofort lokal in den 3D-Printer-Control-Center-Speicher übernommen.
