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
