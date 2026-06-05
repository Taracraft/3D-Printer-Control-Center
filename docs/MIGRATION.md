# Migration to the `printer_control_center` domain

Version `2.0.0` uses the technical Home Assistant domain `printer_control_center`. An installation using an older domain must be configured again once.

## Safe sequence

1. Export the complete existing gallery as ZIP before uninstalling.
2. Remove the old integration under **Settings → Devices & services**.
3. Remove the old HACS installation and restart Home Assistant.
4. Install **3D-Printer Control Center** through HACS again.
5. Restart Home Assistant and configure the integration again.
6. Add the **File manager / gallery** card.
7. Select **Import gallery ZIP** in the local archive.
8. Upload the exported ZIP file and verify the restored folder structure.

The gallery ZIP contains models and folder structure. It does not contain the print queue.
