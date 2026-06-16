/* 3D-Printer Control Center - HACS Release 5.0.0-beta5*/
(() => {
  const VERSION = "5.0.0-beta5";
  const LOGO = "/printer_control_center/logo-3d-printer-control-center.png";
  const DEFAULT_OFFLINE = "/printer_control_center/default-offline.png";
  const DEFAULT_IDLE = "/printer_control_center/default-idle.png";
  const DEFAULT_PREVIEW = "/printer_control_center/default-preview.png";
  const DOCS = "https://github.com/Taracraft/3D-Printer-Control-Center";

  let ACTIVE_LANGUAGE = String(navigator.language || "de").toLowerCase().startsWith("de") ? "de" : "en";
  const EN_TRANSLATIONS = [
    ["3D-Druck-Warteschlange", "3D print queue"],
    ["Dateimanager / Galerie", "File manager / gallery"],
    ["Dateimanager/Galerie", "File manager/gallery"],
    ["Druckfortschritt", "Print progress"],
    ["Netzwerkdiagnose", "Network diagnostics"],
    ["Kamera / Modellvorschau", "Camera / model preview"],
    ["Header und Status", "Header and status"],
    ["Logo und Branding", "Logo and branding"],
    ["Steuerung", "Controls"],
    ["Telemetrie", "Telemetry"],
    ["Komplettkarte", "complete card"],
    ["Responsive Gesamtansicht mit Kamera, Steuerung und AMS", "Responsive overview with camera, controls and AMS"],
    ["Live-Kamera mit automatischem Vorschau- und Offline-Fallback", "Live camera with automatic preview and offline fallback"],
    ["Licht, Kamera und zustandsabhängige Drucksteuerung", "Light, camera and state-aware print controls"],
    ["Geladene Materialien und Farben", "Loaded materials and colors"],
    ["Fortschritt, Layer und Restzeit", "Progress, layers and remaining time"],
    ["Temperaturen und Netzwerk", "Temperatures and network"],
    ["Transport, Scanner und IP", "Transport, scanner and IP"],
    ["Firmwarestatus ohne Auto-Update", "Firmware status without automatic updates"],
    ["Kompakter Druckerstatus", "Compact printer status"],
    ["Branding-Modul", "Branding module"],
    ["HA-only Vollbreiten-Dateimanager mit Body-Overlay, direktem Bambu-Studio-Import und SD-Karten-Verwaltung", "HA-only full-width file manager with body overlay, direct Bambu Studio handoff and SD-card management"],
    ["Persistente Druckplanung mit Galerie-Popup, Mehrfachauswahl, Stückzahl und Bambu-Studio-Druckübergabe", "Persistent print planning with gallery popup, multi-selection, quantity and Bambu Studio handoff"],
    ["MakerWorld-Websuche", "MakerWorld web search"],
    ["Separater Glow-Rahmen", "Separate glow frame"],
    ["Kein Drucker gefunden.", "No printer found."],
    ["Kein aktiver Druckauftrag", "No active print job"],
    ["Schicht", "Layer"],
    ["Düse", "Nozzle"],
    ["Bett", "Bed"],
    ["Tempo", "Speed"],
    ["Licht", "Light"],
    ["Livebild ausblenden", "Hide live view"],
    ["Livebild anzeigen", "Show live view"],
    ["Livebild", "Live view"],
    ["Großansicht", "Large view"],
    ["Aktualisieren", "Refresh"],
    ["Pause", "Pause"],
    ["Pausiert", "Paused"],
    ["Fortsetzen", "Resume"],
    ["Abbrechen", "Cancel"],
    ["Druck wirklich abbrechen?", "Really cancel the print?"],
    ["Keine automatischen Firmware-Updates.", "No automatic firmware updates."],
    ["Konfigurierbarer Glow-Rahmen", "Configurable glow frame"],
    ["Extern", "External"],
    ["Druckermodell", "Printer model"],
    ["Auswahl", "Selected"],
    ["Erkannt", "Detected"],
    ["Sicherheit", "Confidence"],
    ["Kamera", "Camera"],
    ["Kameratransport", "Camera transport"],
    ["Kamera-Port", "Camera port"],
    ["Aktiv", "Active"],
    ["leer", "empty"],
    ["Kamera in Großansicht öffnen", "Open camera in large view"],
    ["Andere MJPEG-URL optional", "Optional alternative MJPEG URL"],
    ["Nur für bewusste Überschreibung der nativen Kamera", "Only to intentionally override the native camera"],
    ["Externe Spule anzeigen", "Show external spool"],
    ["Diagnose anzeigen", "Show diagnostics"],
    ["S bis XL kann zusätzlich direkt innerhalb der Karte umgeschaltet werden.", "S to XL can also be changed directly inside the card."],
    ["Dateien und Ordner durchsuchen â€¦", "Search files and folders â€¦"],
    ["Suche zurücksetzen", "Reset search"],
    ["Sichtbare auswählen", "Select visible"],
    ["Auswahl verschieben", "Move selection"],
    ["Auswahl löschen", "Delete selection"],
    ["Mehrfachauswahl", "Multi-selection"],
    ["Einträge ausgewählt", "items selected"],
    ["Dateien", "files"],
    ["Ordner", "folders"],
    ["belegt", "used"],
    ["Archiv", "Archive"],
    ["SD-Karte", "SD card"],
    ["Hauptordner", "Root folder"],
    ["Neuer Ordner", "New folder"],
    ["Name Aâ€“Z", "Name Aâ€“Z"],
    ["Neueste zuerst", "Newest first"],
    ["Größte zuerst", "Largest first"],
    ["3MF hochladen", "Upload 3MF"],
    ["Galerie-ZIP exportieren", "Export gallery ZIP"],
    ["Galerie-ZIP importieren", "Import gallery ZIP"],
    ["3D-Drucker-Dateimanager/Galerie", "3D printer file manager/gallery"],
    ["Hintergrund-Upload", "Background upload"],
    ["Upload läuft im Hintergrund weiter", "Upload continues in the background"],
    ["Entpacken und gegenprüfen", "Extracting and verifying"],
    ["Gegenprüfung erfolgreich", "Verification successful"],
    ["Vorbereiten", "Preparing"],
    ["Hochladen", "Uploading"],
    ["Abgebrochen", "Cancelled"],
    ["Phase", "Phase"],
    ["Geschwindigkeit", "Speed"],
    ["Übertragen", "Transferred"],
    ["Upload fortsetzen", "Resume upload"],
    ["Upload abbrechen", "Cancel upload"],
    ["Details anzeigen", "Show details"],
    ["Details ausblenden", "Hide details"],
    ["ZIP-Import erfolgreich", "ZIP import successful"],
    ["Vorhandene Galerie-Dateien überschreiben?", "Overwrite existing gallery files?"],
    ["Dateien auswählen", "Select files"],
    ["Ausgewählte 3MF hochladen", "Upload selected 3MF"],
    ["Keine passenden Dateien oder Ordner vorhanden.", "No matching files or folders."],
    ["Keine Zielordner vorhanden.", "No target folders available."],
    ["Ordnerbaum konnte nicht vollständig geladen werden", "Folder tree could not be loaded completely"],
    ["Neuen Ordner erstellen", "Create new folder"],
    ["Ordnername", "Folder name"],
    ["Der Ordner wird im aktuell geöffneten Archivpfad angelegt.", "The folder is created in the currently open archive path."],
    ["Eintrag umbenennen", "Rename item"],
    ["Neuer Name", "New name"],
    ["Eintrag löschen", "Delete item"],
    ["Soll dieser Eintrag wirklich gelöscht werden?", "Do you really want to delete this item?"],
    ["Bei Ordnern werden auch die enthaltenen Dateien entfernt.", "For folders, contained files are removed as well."],
    ["Mehrere Einträge löschen", "Delete multiple items"],
    ["Sollen diese ausgewählten Einträge wirklich gelöscht werden?", "Do you really want to delete the selected items?"],
    ["Ausgewählte Ordner werden einschließlich ihrer enthaltenen Dateien entfernt.", "Selected folders are removed including their files."],
    ["Eintrag verschieben", "Move item"],
    ["Mehrere Einträge verschieben", "Move multiple items"],
    ["Wähle den Zielordner für:", "Choose the target folder for:"],
    ["Eintrag überschreiben?", "Overwrite item?"],
    ["Vorhandene Einträge überschreiben?", "Overwrite existing items?"],
    ["Im Zielordner existieren bereits gleichnamige Einträge.", "Items with the same name already exist in the target folder."],
    ["Konflikt(e)", "conflict(s)"],
    ["Mit â€žÜberschreibenâ€œ werden die vorhandenen Zieldateien oder Zielordner ersetzt.", "Choosing â€œOverwriteâ€ replaces existing target files or folders."],
    ["Überschreiben", "Overwrite"],
    ["Übernehmen", "Apply"],
    ["Öffnen", "Open"],
    ["Ordner öffnen", "Open folder"],
    ["Umbenennen", "Rename"],
    ["Verschieben", "Move"],
    ["Löschen", "Delete"],
    ["Drucken â€¦", "Print â€¦"],
    ["Planen â€¦", "Schedule â€¦"],
    ["In Bambu Studio öffnen (Original-3MF)", "Open in Bambu Studio (original 3MF)"],
    ["Modell-3MF herunterladen", "Download model 3MF"],
    ["Modell-STL herunterladen", "Download model STL"],
    ["3D-Vorschau", "3D preview"],
    ["3D-Vorschau öffnen", "Open 3D preview"],
    ["Druckauftrag vorbereiten", "Prepare print job"],
    ["Druckauftrag planen", "Schedule print job"],
    ["Stückzahl", "Quantity"],
    ["Geplanter Zeitpunkt optional", "Optional scheduled time"],
    ["Zur Warteschlange hinzufügen", "Add to queue"],
    ["Der bestehende Menüpunkt Planen legt das Modell in der persistenten 3D-Druck-Warteschlange ab.", "The existing Schedule action adds the model to the persistent 3D print queue."],
    ["Die unveränderte Original-3MF-Datei wird in Bambu Studio geöffnet. Dort kannst du den Druck kontrolliert starten.", "The unchanged original 3MF file is opened in Bambu Studio. You can start the print there after review."],
    ["In Bambu Studio öffnen", "Open in Bambu Studio"],
    ["Modell wurde zur 3D-Druck-Warteschlange hinzugefügt.", "Model was added to the 3D print queue."],
    ["Warteschlange wird geladen â€¦", "Loading queue â€¦"],
    ["Noch keine geplanten Modelle. Öffne die Galerie oder nutze im Dateimanager den vorhandenen Menüpunkt â€žPlanen â€¦â€œ.", "No planned models yet. Open the gallery or use the existing â€œSchedule â€¦â€ item in the file manager."],
    ["Galerie öffnen", "Open gallery"],
    ["Persistente Planung für", "Persistent planning for"],
    ["Einträge", "items"],
    ["Druckdurchläufe", "print runs"],
    ["Auswahl übernehmen", "Apply selection"],
    ["Gespeichert", "Saved"],
    ["Nach oben", "Move up"],
    ["Nach unten", "Move down"],
    ["1 erledigt", "Complete 1"],
    ["Entfernen", "Remove"],
    ["Eintrag wirklich entfernen?", "Really remove this item?"],
    ["Eine Ebene höher", "One level up"],
    ["Modell(e) markiert", "model(s) selected"],
    ["Stückzahl je Modell", "Quantity per model"],
    ["Zeitpunkt optional", "Optional time"],
    ["Markierte Modelle hinzufügen", "Add selected models"],
    ["Galerie wird geladen â€¦", "Loading gallery â€¦"],
    ["Keine 3MF-Modelle in diesem Ordner gefunden.", "No 3MF models found in this folder."],
    ["Bambu Studio wird mit der unveränderten Original-3MF-Datei geöffnet.", "Bambu Studio opens the unchanged original 3MF file."],
    ["MakerWorld-Modell suchen oder einen Modell-Link öffnen. Die 3MF-Datei kann anschließend direkt in die Archivkarte hochgeladen werden.", "Search for a MakerWorld model or open a model link. The 3MF file can then be uploaded directly to the local archive card."],
    ["Suchbegriff oder MakerWorld-Link", "Search term or MakerWorld link"],
    ["MakerWorld öffnen", "Open MakerWorld"],
    ["Kein verdeckter Direktimport über undokumentierte Community-Endpunkte. Der Workflow bleibt nachvollziehbar und veröffentlichbar.", "No hidden direct import through undocumented community endpoints. The workflow remains transparent and publishable."],
    ["Datei konnte nicht gelesen werden", "File could not be read"],
    ["Fehler", "Error"],
    ["Aktion fehlgeschlagen", "Action failed"],
    ["Download-Link wurde für fünf Minuten in die Zwischenablage kopiert.", "Download link was copied to the clipboard for five minutes."],
    ["Diese Funktion ist als sichere Erweiterungsstufe vorbereitet, aber noch nicht freigeschaltet.", "This function is prepared as a safe extension but is not enabled yet."],
    ["Kein Zusatzhelfer erforderlich. Bambu Studio prüft selbst gehostete URLs absichtlich mit einem Herkunftsdialog.", "No additional helper is required. Bambu Studio intentionally checks self-hosted URLs with an origin dialog."],
    ["HA-only - Original-3MF an Bambu Studio", "HA-only - Original 3MF to Bambu Studio"],
    ["geladen", "loaded"],
    ["Drucker offline", "Printer offline"],
    ["Live-Kamera", "Live camera"],
    ["Native Live-Kamera", "Native live camera"],
    ["Native Kamera-Snapshot", "Native camera snapshot"],
    ["Modellvorschau", "Model preview"],
    ["Native Live-Kamera startet â€¦", "Starting native live camera â€¦"],
    ["Das 3D-Printer Control Center verbindet Home Assistant direkt mit TCP 6000. Keine externen Dienste erforderlich.", "3D-Printer Control Center connects Home Assistant directly to TCP 6000. No external services are required."],
    ["3D-Printer Control Center Live-Kamera", "3D-Printer Control Center live camera"],
    ["3D-Printer Control Center Kamera-Stream", "3D-Printer Control Center camera stream"],
    ["Die Druckerkamera wird modellabhängig bereitgestellt: A1/P1/A2 über Chamber Image TCP 6000, X1/H2/P2/X2 über RTSPS TCP 322. Die folgenden Felder sind nur optionale Überschreibungen.", "The printer camera is selected by model: A1/P1/A2 use Chamber Image TCP 6000, X1/H2/P2/X2 use RTSPS TCP 322. The following fields are optional overrides only."],
    ["Andere Kamera-Entity optional", "Optional alternative camera entity"],
    ["Modellvorschau-Entity optional", "Optional model-preview entity"],
    ["Für Mehrfachaktion auswählen", "Select for bulk action"],
    ["Noch keine Dateien für eine Vorschau vorhanden.", "No files available for preview yet."],
    ["Keine eingebettete Vorschau", "No embedded preview"],
    ["Vorschau schließen", "Close preview"],
    ["Alle aktuell sichtbaren Dateien und Ordner markieren", "Select all currently visible files and folders"],
    ["Auswahl aufheben", "Clear selection"],
    ["Datei(en) für den Upload ausgewählt", "file(s) selected for upload"],
    ["Upload-Ziel", "Upload target"],
    ["SD-Karte des Druckers", "Printer SD card"],
    ["Lokales Archiv", "local archive"],
    ["Upload wird vorbereitet â€¦", "Preparing upload â€¦"],
    ["Dateien hochladen", "Upload files"],
    ["Diese Karte benötigt für die übersichtliche Dateimanager-Ansicht einen eigenen Abschnitt über die volle Dashboard-Breite.", "For a clear file-manager view, this card needs its own full-width dashboard section."],
    ["Warteschlange konnte nicht geladen werden", "Queue could not be loaded"],
    ["Galerie konnte nicht geladen werden", "Gallery could not be loaded"],
    ["Modell(e) wurden zur Warteschlange hinzugefügt.", "model(s) were added to the queue."],
    ["Modelle konnten nicht hinzugefügt werden", "Models could not be added"],
    ["Warteschlangen-Eintrag konnte nicht aktualisiert werden", "Queue item could not be updated"],
    ["Warteschlangen-Eintrag konnte nicht entfernt werden", "Queue item could not be removed"],
    ["Reihenfolge konnte nicht geändert werden", "Order could not be changed"],
    ["Bambu Studio konnte nicht geöffnet werden", "Bambu Studio could not be opened"],
    ["Mehrere Modelle markieren und gemeinsam übernehmen.", "Select multiple models and add them together."],
    ["Galerie - Modelle zur Warteschlange hinzufügen", "Gallery - Add models to queue"],
    ["Diese Karte benötigt", "This card requires"],
    ["Restzeit", "Remaining time"],
    ["Aufnahme", "Recording"],
    ["Zeitraffer", "Timelapse"],
    ["Hoch", "Up"],
    ["Nur .3mf-Dateien sind zulässig. Nicht verwendbar:", "Only .3mf files are allowed. Not usable:"],
    ["wird vorbereitet â€¦", "is being prepared â€¦"],
    ["wird auf die Drucker-SD-Karte geschrieben â€¦", "is being written to the printer SD card â€¦"],
    ["wird im lokalen Archiv gespeichert â€¦", "is being saved to the local archive â€¦"],
    ["Datei", "File"],
    ["von", "of"],
    ["fehlgeschlagen", "failed"],
    ["erfolgreich hochgeladen", "uploaded successfully"],
    ["Upload-Fehler", "Upload error"],
    ["Bambu Studio wird über den registrierten bambustudio://-Handler geöffnet.", "Bambu Studio is opened through the registered bambustudio:// handler."],
    ["Bei einer selbst gehosteten Home-Assistant-Adresse zeigt Bambu Studio absichtlich eine Herkunftsprüfung an.", "For a self-hosted Home Assistant address, Bambu Studio intentionally shows an origin verification dialog."],
    ["Bestätige diese mit Ja.", "Confirm it with Yes."],
    ["Die direkte Übergabe nutzt die unveränderte Original-3MF-Datei nach dem Bambuddy-Prinzip; Modell-3MF und STL bleiben als manuelle Fallbacks verfügbar.", "The direct handoff uses the unchanged original 3MF file following the Bambuddy approach; model 3MF and STL remain available as manual fallbacks."],
    ["Modell-STL wurde autark in Home Assistant erzeugt und heruntergeladen.", "Model STL was generated autonomously in Home Assistant and downloaded."],
    ["Geometrie-only Modell-3MF wurde autark in Home Assistant erzeugt und heruntergeladen.", "Geometry-only model 3MF was generated autonomously in Home Assistant and downloaded."],
    ["Modellübergabe fehlgeschlagen", "Model handoff failed"],
    ["Ordner konnten nicht geladen werden", "Folders could not be loaded"],
    ["Mehrfach-Verschieben unvollständig", "Multi-move incomplete"],
    ["Fotos ansehen", "View photos"],
    ["Zu Projekt hinzufügen", "Add to project"],
    ["Druckprotokoll", "Print log"],
    ["Originaldatei wurde aus Home Assistant heruntergeladen.", "Original file was downloaded from Home Assistant."],
    ["Geplant", "Scheduled"],
    ["Automatisch erkennen", "Auto-detect"],
    ["Kein AMS", "No AMS"],
    ["Drittanbieter", "third-party"],
    ["AMS-/BMCU-kompatibel (4 Slots erkannt)", "AMS/BMCU compatible (4 slots detected)"],
    ["Sicherer manueller Firmware-Update-Anforderungsbutton", "Safe manual firmware-update request button"],
  ];

  function tr(value) {
    let result = String(value ?? "");
    if (ACTIVE_LANGUAGE !== "en") return result;
    for (const [source, target] of EN_TRANSLATIONS) result = result.replaceAll(source, target);
    return result;
  }

  function localizeHtml(value) { return tr(value); }

  function resolveUiLanguage(hass, map) {
    const configured = map ? stateValue(hass, map.uiLanguage, "auto") : "auto";
    if (["de", "en"].includes(configured)) return configured;
    return String(hass?.language || navigator.language || "de").toLowerCase().startsWith("de") ? "de" : "en";
  }

  function activateUiLanguage(hass, map) { ACTIVE_LANGUAGE = resolveUiLanguage(hass, map); }

  const TYPES = {
    complete: "printer-control-center-card",
    brand: "printer-control-center-brand-card",
    header: "printer-control-center-header-card",
    progress: "printer-control-center-progress-card",
    telemetry: "printer-control-center-telemetry-card",
    controls: "printer-control-center-controls-card",
    ams: "printer-control-center-ams-card",
    network: "printer-control-center-network-card",
    firmware: "printer-control-center-firmware-card",
    frame: "printer-control-center-glow-frame-card",
    templates: "printer-control-center-templates-card",
    makerworld: "printer-control-center-makerworld-card",
    media: "printer-control-center-media-card",
    queue: "printer-control-center-queue-card",
  };

  const MODULE_LABELS = {
    header: "Header und Status",
    progress: "Druckfortschritt",
    telemetry: "Telemetrie",
    controls: "Steuerung",
    ams: "AMS",
    network: "Netzwerkdiagnose",
    firmware: "Firmware",
    brand: "Logo / Branding",
    templates: "3D-Drucker-Dateimanager/Galerie",
    makerworld: "MakerWorld Explorer",
    media: "Kamera / Modellvorschau",
    queue: "3D-Druck-Warteschlange",
  };

  const ACCENTS = {
    cyan:    { rgb: "0,190,255",   line: "#00beff", second: "#00ffb1" },
    teal:    { rgb: "0,255,190",   line: "#00ffbe", second: "#00a8ff" },
    violet:  { rgb: "165,95,255",  line: "#a55fff", second: "#00d9ff" },
    orange:  { rgb: "255,145,0",   line: "#ff9100", second: "#ffe066" },
    magenta: { rgb: "255,40,175",  line: "#ff28af", second: "#00e5ff" },
  };

  const esc = (value) => String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

  const available = (item) =>
    Boolean(item) && !["unknown", "unavailable", ""].includes(String(item.state));

  const stateValue = (hass, entityId, fallback = "â€”") => {
    const item = hass?.states?.[entityId];
    return available(item) ? item.state : fallback;
  };

  const numberValue = (hass, entityId, fallback = 0) => {
    const value = Number.parseFloat(stateValue(hass, entityId, fallback));
    return Number.isFinite(value) ? value : fallback;
  };

  const attrs = (hass, entityId) => hass?.states?.[entityId]?.attributes || {};
  const isOn = (hass, entityId) => hass?.states?.[entityId]?.state === "on";

  function formatTemp(value) {
    const parsed = Number.parseFloat(value);
    return Number.isFinite(parsed) ? `${parsed.toFixed(1)} Â°C` : "â€”";
  }

  function formatRemaining(value) {
    const minutes = Math.max(0, Number.parseInt(value ?? 0, 10) || 0);
    const hours = Math.floor(minutes / 60);
    const rest = minutes % 60;
    return hours ? `${hours} h ${rest} min` : `${rest} min`;
  }

  function printMode(value) {
    const status = String(value || "").trim().toLowerCase();
    if (["running", "printing", "prepare", "slicing", "heating", "calibrate", "calibrating"].includes(status)) return "running";
    if (["pause", "paused", "pausing"].includes(status)) return "paused";
    return "idle";
  }

  function printControlButtons(status) {
    const mode = printMode(status);
    if (mode === "running") {
      return `<button data-action="pause">â¸ Pause</button><button class="danger" data-action="stop">â–  Abbrechen</button>`;
    }
    if (mode === "paused") {
      return `<span class="badge">â¸ Pausiert</span><button data-action="resume">â–¶ Fortsetzen</button><button class="danger" data-action="stop">â–  Abbrechen</button>`;
    }
    return "";
  }

  function authHeaders(hass, extra = {}) {
    const token = hass?.auth?.data?.access_token || "";
    return { ...(token ? {Authorization:`Bearer ${token}`} : {}), ...extra };
  }

  async function jsonApi(hass, url, options = {}) {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), options.timeoutMs || 25000);
    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers: authHeaders(hass, {"Content-Type":"application/json", ...(options.headers || {})}),
      });
      if (!response.ok) throw new Error(`${response.status} ${await response.text()}`);
      return response.json();
    } finally {
      window.clearTimeout(timeout);
    }
  }

  function bytesLabel(size) {
    const value = Number(size || 0);
    if (value >= 500 * 1024 * 1024) return `${(value / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    if (value >= 1024 * 1024) return `${(value / (1024 * 1024)).toFixed(1)} MB`;
    if (value >= 1024) return `${(value / 1024).toFixed(1)} KB`;
    return `${value} B`;
  }

  function galleryDateLabel(value) {
    if (value === null || value === undefined || value === "") return "â€”";
    let date = null;
    if (typeof value === "number" || /^\d+(?:\.\d+)?$/.test(String(value))) {
      const numeric = Number(value);
      if (Number.isFinite(numeric)) {
        date = new Date(numeric > 10_000_000_000 ? numeric : numeric * 1000);
      }
    }
    if (!date || Number.isNaN(date.getTime())) {
      const raw = String(value);
      const match = raw.match(/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/);
      date = match
        ? new Date(`${match[1]}-${match[2]}-${match[3]}T${match[4]}:${match[5]}:${match[6]}`)
        : new Date(raw);
    }
    if (Number.isNaN(date.getTime())) return String(value);
    return new Intl.DateTimeFormat(ACTIVE_LANGUAGE==="en"?"en-US":"de-DE", {
      day:"2-digit", month:"2-digit", year:"numeric", hour:"2-digit", minute:"2-digit"
    }).format(date);
  }

  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = () => reject(reader.error || new Error("Datei konnte nicht gelesen werden"));
      reader.onload = () => resolve(String(reader.result || "").split(",", 2)[1] || "");
      reader.readAsDataURL(file);
    });
  }

  function arrayBufferToBase64(buffer) {
    const bytes = new Uint8Array(buffer);
    let result = "";
    const block = 0x8000;
    for (let index = 0; index < bytes.length; index += block) {
      result += String.fromCharCode(...bytes.subarray(index, index + block));
    }
    return btoa(result);
  }


  class PrinterControlCenterBackgroundUploadManager {
    constructor(){
      this.hass=null;
      this.task=null;
      this.expanded=false;
      this.listeners=new Set();
      this.overlay=null;
      this.cleanupDone=false;
      this._lastEmit=0;
      this._emitTimer=null;
    }
    setHass(hass){
      if(hass)this.hass=hass;
      this.ensureOverlay();
      if(!this.cleanupDone&&this.hass?.callWS){
        this.cleanupDone=true;
        this.hass.callWS({type:"printer_control_center/upload/cleanup",remove_orphans:false}).catch(()=>{});
      }
    }
    subscribe(listener){this.listeners.add(listener);try{listener(this.snapshot())}catch(_error){}return()=>this.listeners.delete(listener)}
    emit(force=false){
      const run=()=>{
        this._emitTimer=null;
        this._lastEmit=performance.now();
        this.renderOverlay();
        const snapshot=this.snapshot();
        for(const listener of this.listeners){try{listener(snapshot)}catch(_error){}}
      };
      const wait=220-(performance.now()-this._lastEmit);
      if(!force&&wait>0){
        if(!this._emitTimer)this._emitTimer=window.setTimeout(run,wait);
        return;
      }
      if(this._emitTimer){window.clearTimeout(this._emitTimer);this._emitTimer=null}
      run();
    }
    snapshot(){return this.task?{...this.task,details:[...(this.task.details||[])]}:null}
    speedLabel(task=this.task){return task?.speed?`${bytesLabel(task.speed)}/s`:"â€”"}
    phaseLabel(task=this.task){
      const phase=task?.phase||"";
      return tr(({preparing:"Vorbereiten",uploading:"Hochladen",resuming:"Upload fortsetzen",processing:"Entpacken und gegenprüfen",verified:"Gegenprüfung erfolgreich",failed:"Fehler",cancelled:"Abgebrochen"})[phase]||phase);
    }
    taskDetailsHtml(){
      const task=this.task;if(!task)return"";
      const lines=[...(task.details||[])];
      if(task.uploadId)lines.unshift(`Session: ${task.uploadId}`);
      lines.unshift(`${tr("Phase")}: ${this.phaseLabel(task)}`);
      lines.unshift(`${tr("Geschwindigkeit")}: ${this.speedLabel(task)}`);
      lines.unshift(`${tr("Übertragen")}: ${bytesLabel(task.offset||0)} ${tr("von")} ${bytesLabel(task.size||0)}`);
      return lines.map((line)=>`<div>${esc(line)}</div>`).join("");
    }
    ensureOverlay(){
      if(this.overlay?.isConnected)return;
      let overlay=document.getElementById("printer-control-center-background-upload");
      if(!overlay){overlay=document.createElement("div");overlay.id="printer-control-center-background-upload";document.body.appendChild(overlay)}
      this.overlay=overlay;
      if(!overlay.dataset.pccBound){
        overlay.dataset.pccBound="1";
        overlay.addEventListener("click",(event)=>{
          const action=event.target.closest?.("[data-pcc-upload-action]")?.dataset?.pccUploadAction;
          if(action==="toggle"){this.expanded=!this.expanded;this.renderOverlay()}
          if(action==="abort")this.abort().catch(()=>{});
          if(action==="dismiss"){this.task=null;this.emit(true)}
        });
      }
    }
    renderOverlay(){
      this.ensureOverlay();
      const task=this.task;
      if(!task){this.overlay.innerHTML="";this.overlay.style.display="none";return}
      const progress=Math.max(0,Math.min(100,Number(task.progress||0)));
      const done=["verified","failed","cancelled"].includes(task.phase);
      this.overlay.style.display="block";
      this.overlay.innerHTML=`<style>
        #printer-control-center-background-upload{position:fixed;z-index:2147483600;right:16px;bottom:16px;width:min(440px,calc(100vw - 32px));font:13px Arial,sans-serif;color:#eefaff}
        #printer-control-center-background-upload .pcc-bg{border:1px solid rgba(0,195,255,.75);border-radius:12px;background:rgba(8,21,28,.96);box-shadow:0 12px 38px rgba(0,0,0,.45);overflow:hidden}
        #printer-control-center-background-upload .head,#printer-control-center-background-upload .line{display:flex;gap:6px;align-items:center;justify-content:space-between;padding:9px 11px}
        #printer-control-center-background-upload .line{padding-top:0;color:#b9d4df;font-size:12px}.track{height:5px;background:#263942}.fill{height:100%;background:#08b8e8}.details{padding:0 11px 10px;color:#bfd7df;font-size:11px;line-height:1.55;max-height:210px;overflow:auto}
        #printer-control-center-background-upload button{cursor:pointer;border:1px solid #167ca4;border-radius:7px;background:#102934;color:#eefaff;padding:5px 7px;font-size:11px}.danger{border-color:#a43d45!important;background:#51242a!important}
      </style><div class="pcc-bg"><div class="head"><strong>â¬† ${tr("Hintergrund-Upload")} - ${esc(this.phaseLabel(task))}</strong><div><button data-pcc-upload-action="toggle">${tr(this.expanded?"Details ausblenden":"Details anzeigen")}</button>${done?` <button data-pcc-upload-action="dismiss">Ã—</button>`:` <button class="danger" data-pcc-upload-action="abort">${tr("Abbrechen")}</button>`}</div></div><div class="line"><span>${esc(task.filename||"")}</span><span>${esc(progress)} % - ${esc(this.speedLabel(task))}</span></div><div class="track"><div class="fill" style="width:${progress}%"></div></div>${this.expanded?`<div class="details">${this.taskDetailsHtml()}</div>`:""}</div>`;
    }
    async abort(){
      const task=this.task;if(!task)return;
      task.cancelRequested=true;
      if(task.uploadId&&this.hass?.callWS){try{await this.hass.callWS({type:"printer_control_center/upload/abort",upload_id:task.uploadId})}catch(_error){}}
      task.phase="cancelled";task.details=[...(task.details||[]),"Upload abgebrochen; temporäre Fragmente wurden entfernt."];this.emit(true);
    }
    async findResumableSession({serial,source,file,folder=""}){
      if(!this.hass?.callWS)return null;
      try{
        const listing=await this.hass.callWS({type:"printer_control_center/upload/list"});
        return (listing.sessions||[]).find((item)=>
          String(item.serial||"")===String(serial||"")&&
          String(item.source||"")===String(source||"")&&
          String(item.filename||"")===String(file.name||"")&&
          Number(item.size||0)===Number(file.size||0)&&
          String(item.folder||"")===String(folder||"")
        )||null;
      }catch(_error){return null}
    }
    async openSession({serial,source,file,folder="",overwrite=false}){
      const resumable=await this.findResumableSession({serial,source,file,folder});
      const payload={type:"printer_control_center/upload/start",serial,source,filename:file.name,folder,size:file.size,overwrite:Boolean(overwrite)};
      if(resumable?.upload_id)payload.resume_upload_id=resumable.upload_id;
      const session=await this.hass.callWS(payload);
      return {session,resumed:Boolean(resumable?.upload_id)&&Number(session.received||0)>0};
    }
    async sendFile({serial,source,file,folder="",overwrite=false,baseOffset=0,totalSize=file.size,started=performance.now()}){
      const task=this.task;
      const opened=await this.openSession({serial,source,file,folder,overwrite});
      const session=opened.session;
      task.uploadId=session.upload_id;
      task.filename=file.name;
      task.offset=baseOffset+Number(session.received||0);
      task.phase=opened.resumed?"resuming":"uploading";
      if(opened.resumed)task.details=[...(task.details||[]),`Vorhandene Session erkannt: ${bytesLabel(session.received||0)} werden fortgesetzt.`];
      this.emit(true);
      const chunkBytes=Number(session.chunk_bytes||128*1024);
      let current=Number(session.received||0);
      let retries=0;
      while(current<file.size){
        if(task.cancelRequested)throw new Error("Upload wurde abgebrochen.");
        const slice=file.slice(current,Math.min(current+chunkBytes,file.size));
        try{
          const content_base64=arrayBufferToBase64(await slice.arrayBuffer());
          const result=await this.hass.callWS({type:"printer_control_center/upload/chunk",upload_id:task.uploadId,offset:current,content_base64});
          current=Number(result.received||current+slice.size);retries=0;
        }catch(error){
          retries+=1;if(retries>6)throw error;
          task.phase="resuming";task.details=[...(task.details||[]),`Verbindung unterbrochen; Fortsetzung ${retries}/6 wird geprüft.`];this.emit(true);
          await new Promise((resolve)=>setTimeout(resolve,Math.min(5000,700*retries)));
          const status=await this.hass.callWS({type:"printer_control_center/upload/status",upload_id:task.uploadId});
          current=Number(status.received||0);task.phase="uploading";
        }
        task.offset=baseOffset+current;
        const seconds=Math.max(.25,(performance.now()-started)/1000);
        task.speed=Math.round(task.offset/seconds);
        task.progress=totalSize?Math.min(96,Math.round((task.offset/totalSize)*96)):0;
        this.emit();
      }
      if(source==="archive_zip"){
        task.phase="processing";task.progress=97;task.details=[...(task.details||[]),"Upload vollständig empfangen.","ZIP wird entpackt und gegen das Archiv geprüft â€¦"];this.emit(true);
      }
      return await this.hass.callWS({type:"printer_control_center/upload/finish",upload_id:task.uploadId});
    }
    async startGalleryZip({hass,serial,file,overwrite=false}){
      this.setHass(hass);
      if(this.task&&!['verified','failed','cancelled'].includes(this.task.phase))throw new Error("Es läuft bereits ein Hintergrund-Upload.");
      const started=performance.now();
      const task=this.task={filename:file.name,size:file.size,offset:0,progress:0,speed:0,phase:"preparing",details:["Upload läuft im Hintergrund weiter, auch wenn du das Dashboard wechselst.","Nach einem Browser-Neuladen dieselbe Datei erneut auswählen, um eine vorhandene Session fortzusetzen."],cancelRequested:false,uploadId:""};
      this.emit(true);
      try{
        const result=await this.sendFile({serial,source:"archive_zip",file,folder:"",overwrite,baseOffset:0,totalSize:file.size,started});
        task.progress=100;task.phase="verified";
        task.details=[...(task.details||[]),`Entpacken: OK - ${Number(result.imported||0)} Modelle`, `Ordner: ${Number(result.folders||0)} - Überschrieben: ${Number(result.overwritten||0)}`, `Gegenprüfung: ${result.verification==="ok"?"OK":"unbekannt"} - ${Number(result.verified_files||0)} Modelle - ${bytesLabel(result.verified_bytes||0)}`];
        this.emit(true);return result;
      }catch(error){
        if(task.uploadId&&task.phase!=="cancelled"){try{await this.hass.callWS({type:"printer_control_center/upload/abort",upload_id:task.uploadId})}catch(_error){}}
        if(task.phase!=="cancelled"){task.phase="failed";task.details=[...(task.details||[]),`Fehler: ${String(error?.message||error)}`];this.emit(true)}
        throw error;
      }
    }
    async startFiles({hass,serial,files,source,folder=""}){
      this.setHass(hass);
      if(this.task&&!['verified','failed','cancelled'].includes(this.task.phase))throw new Error("Es läuft bereits ein Hintergrund-Upload.");
      const queue=[...(files||[])];
      if(!queue.length)return {uploaded:0,errors:[]};
      const totalSize=queue.reduce((sum,file)=>sum+Number(file.size||0),0);
      const started=performance.now();
      const task=this.task={filename:queue[0].name,size:totalSize,offset:0,progress:0,speed:0,phase:"preparing",details:[`${queue.length} Datei(en) werden im Hintergrund hochgeladen.`,"Beim Dashboard-Wechsel läuft der Upload weiter."],cancelRequested:false,uploadId:""};
      this.emit(true);
      let completed=0;
      const errors=[];
      for(let index=0;index<queue.length;index+=1){
        const file=queue[index];
        try{
          task.details=[...(task.details||[]),`Datei ${index+1}/${queue.length}: ${file.name}`];this.emit(true);
          await this.sendFile({serial,source,file,folder,baseOffset:completed,totalSize,started});
          completed+=Number(file.size||0);task.offset=completed;
        }catch(error){
          if(task.uploadId){try{await this.hass.callWS({type:"printer_control_center/upload/abort",upload_id:task.uploadId})}catch(_error){}}
          errors.push({filename:file.name,message:String(error?.message||error)});
          if(task.cancelRequested)break;
        }
      }
      if(errors.length){
        task.phase="failed";task.details=[...(task.details||[]),...errors.map((item)=>`Fehler ${item.filename}: ${item.message}`)];this.emit(true);
        throw new Error(errors.map((item)=>`${item.filename}: ${item.message}`).join(" | "));
      }
      task.phase="verified";task.progress=100;task.details=[...(task.details||[]),`${queue.length} Datei(en) erfolgreich gespeichert.`];this.emit(true);
      return {uploaded:queue.length,errors:[]};
    }
  }
  const PCC_UPLOADS=window.PrinterControlCenterBackgroundUploadManager||(window.PrinterControlCenterBackgroundUploadManager=new PrinterControlCenterBackgroundUploadManager());

  function discoverPrinters(hass) {
    const result = [];
    for (const entityId of Object.keys(hass?.states || {})) {
      if (!entityId.startsWith("sensor.") || !entityId.endsWith("_print_status")) continue;
      const prefix = entityId.slice("sensor.".length, -"_print_status".length);
      const serial = stateValue(hass, `sensor.${prefix}_serial_number`, prefix);
      const friendly = hass.states[entityId]?.attributes?.friendly_name || serial;
      result.push({ prefix, serial, title: friendly.replace(/\s+Print status$/i, "") || serial });
    }
    return result.sort((a, b) => a.title.localeCompare(b.title));
  }

  function slug(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "");
  }

  function findEntity(hass, domain, preferred, suffixes, identityParts = []) {
    if (preferred && hass?.states?.[preferred]) return preferred;

    const normalizedParts = identityParts
      .map((part) => slug(part))
      .filter(Boolean);

    const candidates = Object.keys(hass?.states || {})
      .filter((entityId) => entityId.startsWith(`${domain}.`))
      .filter((entityId) => suffixes.some((suffix) => entityId.endsWith(`_${suffix}`)));

    const ranked = candidates
      .map((entityId) => {
        const objectId = entityId.split(".", 2)[1] || "";
        let score = 0;
        for (const part of normalizedParts) {
          if (part && objectId.includes(part)) score += 10;
        }
        if (preferred && entityId === preferred) score += 100;
        return { entityId, score };
      })
      .sort((a, b) => b.score - a.score || a.entityId.localeCompare(b.entityId));

    return ranked[0]?.entityId || preferred || "";
  }

  function entities(prefix) {
    return {
      online: `binary_sensor.${prefix}_online`,
      printStatus: `sensor.${prefix}_print_status`,
      progress: `sensor.${prefix}_print_progress`,
      layer: `sensor.${prefix}_current_layer`,
      layers: `sensor.${prefix}_total_layers`,
      remaining: `sensor.${prefix}_remaining_time`,
      task: `sensor.${prefix}_task_name`,
      nozzle: `sensor.${prefix}_nozzle_temperature`,
      bed: `sensor.${prefix}_bed_temperature`,
      wifi: `sensor.${prefix}_wi_fi_signal`,
      activeMode: `sensor.${prefix}_active_connection_mode`,
      configuredMode: `sensor.${prefix}_configured_connection_mode`,
      configuredHost: `sensor.${prefix}_configured_printer_ip`,
      activeHost: `sensor.${prefix}_active_printer_ip`,
      serial: `sensor.${prefix}_serial_number`,
      uiLanguage: `sensor.${prefix}_dashboard_language`,
      printerModel: `sensor.${prefix}_printer_model`,
      amsDisplayName: `sensor.${prefix}_ams_display_name`,
      cameraAvailable: `sensor.${prefix}_camera_available`,
      cameraTransport: `sensor.${prefix}_camera_transport`,
      cameraPort: `sensor.${prefix}_camera_port`,
      cameraLastError: `sensor.${prefix}_camera_last_error`,
      detectedAms: `sensor.${prefix}_detected_ams_type`,
      configuredAms: `sensor.${prefix}_configured_ams_type`,
      amsConfidence: `sensor.${prefix}_ams_detection_confidence`,
      activeAmsSlot: `sensor.${prefix}_active_ams_slot`,
      firmware: `sensor.${prefix}_firmware_status`,
      scanSummary: `sensor.${prefix}_network_scan_summary`,
      amsSlots: [1, 2, 3, 4].map((index) => `sensor.${prefix}_ams_slot_${index}`),
      externalSpool: `sensor.${prefix}_external_spool`,
      speed: `select.${prefix}_printing_speed`,
      amsConfiguration: `select.${prefix}_ams_configuration`,
      light: `light.${prefix}_chamber_light`,
      record: `switch.${prefix}_print_recording`,
      timelapse: `switch.${prefix}_timelapse_recording`,
      refresh: `button.${prefix}_refresh_data`,
      pause: `button.${prefix}_pause_printing`,
      resume: `button.${prefix}_resume_printing`,
      stop: `button.${prefix}_stop_printing`,
      firmwareRequest: `button.${prefix}_request_manual_firmware_update`,
      scanNetwork: `button.${prefix}_scan_network_endpoints`,
    };
  }

  function resolveMap(hass, config) {
    const printers = discoverPrinters(hass);
    const prefix = config?.printer || printers[0]?.prefix;
    if (!prefix) return null;

    const map = { prefix, ...entities(prefix) };
    const serial = stateValue(hass, map.serial, "");
    const identity = [prefix, serial];

    map.amsSlots = [1, 2, 3, 4].map((slotNumber) =>
      findEntity(
        hass,
        "sensor",
        `sensor.${prefix}_ams_slot_${slotNumber}`,
        [`ams_slot_${slotNumber}`],
        identity,
      )
    );

    map.externalSpool = findEntity(
      hass,
      "sensor",
      `sensor.${prefix}_external_spool`,
      ["external_spool", "external_spool_external_spool"],
      identity,
    );

    map.activeAmsSlot = findEntity(
      hass,
      "sensor",
      `sensor.${prefix}_active_ams_slot`,
      ["active_ams_slot"],
      identity,
    );

    map.light = findEntity(
      hass,
      "light",
      `light.${prefix}_chamber_light`,
      ["chamber_light"],
      identity,
    );

    map.record = findEntity(
      hass,
      "switch",
      `switch.${prefix}_print_recording`,
      ["print_recording"],
      identity,
    );

    map.timelapse = findEntity(
      hass,
      "switch",
      `switch.${prefix}_timelapse_recording`,
      ["timelapse_recording"],
      identity,
    );

    map.nativeCamera = findEntity(
      hass,
      "camera",
      `camera.${prefix}_native_live_camera`,
      ["native_live_camera"],
      identity,
    );

    return map;
  }

  function isPrinterOnline(hass, map) {
    const transport = stateValue(hass, map.activeMode, "disconnected").toLowerCase();
    const status = stateValue(hass, map.printStatus, "unknown").toLowerCase();
    return (
      isOn(hass, map.online)
      || ["lan", "cloud", "hybrid"].includes(transport)
      || ["running", "pause", "prepare", "finish", "slicing", "printing"].includes(status)
    );
  }

  function displaySpeed(hass, map) {
    const selected = stateValue(hass, map.speed, "");
    if (selected && selected !== "â€”") return selected;
    return "standard";
  }

  function knownLabel(value) {
    const text = String(value ?? "").trim();
    return text && !["-", "unknown", "unavailable", "none"].includes(text.toLowerCase());
  }

  function isAutoAmsLabel(value) {
    const text = String(value ?? "").trim().toLowerCase();
    return !text || text === "-" || text === "unknown" || text === "unavailable" || text.includes("automatisch") || text.includes("auto-detect");
  }

  function printerModelName(hass, map, config = {}) {
    const detected = stateValue(hass, map.printerModel, "");
    if (knownLabel(detected)) return detected;
    const configured = String(config.printer_model || config.model || "").trim();
    if (knownLabel(configured)) return configured;
    return stateValue(hass, map.serial, map.prefix || "3D Printer");
  }


  function pccSerialLikeLabelV4(value) {
    const text = String(value ?? "").trim();
    if (!text) return false;
    const compact = text.replace(/[^a-z0-9]/gi, "");
    if (/(bambu|lab|a1|a2|p1|p2|x1|x2|h2|carbon|mini)/i.test(text)) return false;
    return compact.length >= 10 && /^[a-z0-9]+$/i.test(compact);
  }

  function pccModelFromHintsV4(...values) {
    const raw = values.map((value) => String(value ?? "").trim()).filter(Boolean).join(" ");
    const token = slug(raw).replaceAll("-", "_").replaceAll("__", "_");

    const has = (pattern) => pattern.test(token);

    if (has(/x1_carbon|x1carbon|(^|_)x1c($|_)/)) return "Bambu Lab X1 Carbon";
    if (has(/(^|_)x1e($|_)/)) return "Bambu Lab X1E";
    if (has(/(^|_)x1($|_)/)) return "Bambu Lab X1";

    if (has(/(^|_)p1s($|_)/)) return "Bambu Lab P1S";
    if (has(/(^|_)p1p($|_)/)) return "Bambu Lab P1P";
    if (has(/(^|_)p1($|_)/)) return "Bambu Lab P1";

    if (has(/a1_mini|a1mini/)) return "Bambu Lab A1 mini";
    if (has(/(^|_)a1($|_)/)) return "Bambu Lab A1";

    if (has(/(^|_)a2l($|_)/)) return "Bambu Lab A2L";
    if (has(/(^|_)a2($|_)/)) return "Bambu Lab A2";

    if (has(/(^|_)h2d($|_)/)) return "Bambu Lab H2D";
    if (has(/(^|_)h2s($|_)/)) return "Bambu Lab H2S";
    if (has(/(^|_)h2($|_)/)) return "Bambu Lab H2";

    if (has(/(^|_)p2s($|_)/)) return "Bambu Lab P2S";
    if (has(/(^|_)p2($|_)/)) return "Bambu Lab P2";

    if (has(/(^|_)x2d($|_)/)) return "Bambu Lab X2D";
    if (has(/(^|_)x2($|_)/)) return "Bambu Lab X2";

    return "";
  }

  function pccDisplayPrinterModelV4(hass, map, config = {}) {
    const sensorModel = stateValue(hass, map?.printerModel, "");
    const serial = stateValue(hass, map?.serial, "");
    const prefix = map?.prefix || "";
    const configured = String(config?.printer_model || config?.model || config?.printer_name || config?.title || "").trim();

    const friendly = pccModelFromHintsV4(sensorModel, configured, prefix);
    if (friendly) return friendly;

    if (knownLabel(sensorModel) && !pccSerialLikeLabelV4(sensorModel)) return sensorModel;
    if (knownLabel(configured) && !pccSerialLikeLabelV4(configured)) return configured;

    const fromPrefix = pccModelFromHintsV4(prefix);
    if (fromPrefix) return fromPrefix;

    return knownLabel(serial) ? serial : "3D Printer";
  }

  function pccCompactCameraLabelV4(hass, map, config = {}) {
    const transport = stateValue(hass, map?.cameraTransport, "");
    if (knownLabel(transport)) return transport;

    const model = pccDisplayPrinterModelV4(hass, map, config);
    const family = pccModelFromHintsV4(model, map?.prefix || "");

    if (/X1|X2|H2|P2/.test(family)) return "RTSPS / TCP 322";
    if (/A1|A2|P1/.test(family)) return "Chamber Image / TCP 6000";

    return "â€”";
  }

  function amsDisplayName(hass, map) {
    const display = stateValue(hass, map.amsDisplayName, "");
    if (knownLabel(display)) return display;

    const configured = stateValue(hass, map.configuredAms, "");
    if (!isAutoAmsLabel(configured)) return configured;

    const detected = stateValue(hass, map.detectedAms, "");
    if (knownLabel(detected)) {
      const lower = detected.toLowerCase();
      if (lower.includes("bmcu") || lower.includes("bcmu")) return tr("AMS-/BMCU-kompatibel (4 Slots erkannt)");
      return detected;
    }
    return tr("AMS");
  }

  function amsMetaHtml(hass, map) {
    const configured = stateValue(hass, map.configuredAms, "-");
    const detected = stateValue(hass, map.detectedAms, "-");
    const confidence = stateValue(hass, map.amsConfidence, "-");
    return `
      <div class="row ams-meta">
        <span class="badge">${tr("Auswahl")}: ${esc(configured)}</span>
        <span class="badge">${tr("Erkannt")}: ${esc(detected)}</span>
        <span class="badge">${tr("Sicherheit")}: ${esc(confidence)}</span>
      </div>
    `;
  }


  function currentSize(config) {
    const size = String(config?.card_size || "m").toLowerCase();
    return ["s", "m", "l", "xl"].includes(size) ? size : "m";
  }

  function sizePicker(config) {
    const selected = currentSize(config);
    return `
      <div class="tc-size-picker" title="Kompakte Darstellung umschalten">
        ${["s", "m", "l", "xl"].map((size) =>
          `<button type="button" data-card-size="${size}" class="${size === selected ? "active" : ""}">${size.toUpperCase()}</button>`
        ).join("")}
      </div>
    `;
  }

  function baseCss(config) {
    const accent = ACCENTS[config?.accent || "cyan"] || ACCENTS.cyan;
    const intensity = config?.intensity || "medium";
    const glow = intensity === "low" ? ".15" : intensity === "high" ? ".42" : ".27";
    const radius = Math.max(0, Math.min(36, Number(config?.radius ?? 16)));
    return `
      :host {
        display:block;
        min-width:0;
        --tc-rgb:${accent.rgb};
        --tc-line:${accent.line};
        --tc-second:${accent.second};
        --tc-glow:${glow};
        --tc-radius:${radius}px;
      }
      ha-card {
        position:relative;
        overflow:hidden;
        box-sizing:border-box;
        container-type:inline-size;
        padding:9px;
        border-radius:var(--tc-radius);
        border:1px solid rgba(var(--tc-rgb),.35);
        background:
          radial-gradient(circle at 82% 0%, rgba(var(--tc-rgb),.13), transparent 38%),
          radial-gradient(circle at 0% 100%, rgba(var(--tc-rgb),.07), transparent 34%),
          var(--ha-card-background, var(--card-background-color));
      }
      .glow-dynamic { animation:tc-pulse 4s ease-in-out infinite; }
      .glow-subtle { box-shadow:0 0 18px rgba(var(--tc-rgb),.18); }
      .glow-off { border-color:var(--divider-color); }
      .tc-size-picker { display:flex; gap:4px; justify-content:flex-end; margin-bottom:5px; }
      .tc-size-picker button {
        min-width:28px; padding:3px 7px; border-radius:999px;
        font-size:11px; border:1px solid rgba(var(--tc-rgb),.28);
        color:var(--primary-text-color); background:rgba(0,0,0,.18);
      }
      .tc-size-picker button.active {
        background:rgba(var(--tc-rgb),.28);
        box-shadow:0 0 10px rgba(var(--tc-rgb),.28);
      }
      .row { display:flex; gap:6px; align-items:center; flex-wrap:wrap; }
      .between { justify-content:space-between; }
      .stack { display:grid; gap:7px; }
      .brand { width:48px; height:48px; object-fit:cover; border-radius:12px; box-shadow:0 0 16px rgba(var(--tc-rgb),.34); }
      h2,h3,p { margin:0; }
      h2 { font-size:17px; }
      h3 { font-size:15px; }
      .printer-model { margin-top:2px; color:var(--secondary-text-color); font-size:13px; line-height:1.2; overflow-wrap:anywhere; }
      .compact-s .printer-model { font-size:11px; }
      .ams-title-row { display:flex; align-items:center; justify-content:space-between; gap:6px; flex-wrap:wrap; }
      .ams-meta { margin-top:-2px; margin-bottom:4px; }
      .ams-meta .badge { font-size:10px; }
      small,.muted { color:var(--secondary-text-color); }
      .badge {
        display:inline-flex; align-items:center; gap:4px;
        max-width:100%; padding:3px 7px; border-radius:999px;
        border:1px solid rgba(var(--tc-rgb),.28);
        background:rgba(var(--tc-rgb),.11);
        font-size:12px;
      }
      .online { color:#68ffc2; border-color:rgba(0,255,160,.36); }
      .offline { color:#ff8f9d; border-color:rgba(255,85,105,.36); }
      .progress { height:8px; margin:7px 0; overflow:hidden; border-radius:999px; background:rgba(128,128,128,.18); }
      .progress span { display:block; height:100%; border-radius:inherit; background:linear-gradient(90deg,var(--tc-line),var(--tc-second)); box-shadow:0 0 12px var(--tc-line); }
      .metrics { display:grid; grid-template-columns:repeat(auto-fit,minmax(92px,1fr)); gap:6px; }
      .metric { min-width:0; padding:7px; border-radius:9px; background:rgba(0,0,0,.18); border:1px solid rgba(var(--tc-rgb),.10); }
      .metric small,.metric strong { display:block; }
      .metric strong { margin-top:4px; overflow-wrap:anywhere; line-height:1.18; }
      .toolbar { display:flex; gap:5px; flex-wrap:wrap; align-items:center; }
      button,select,input {
        border:1px solid rgba(var(--tc-rgb),.28);
        border-radius:8px; padding:6px 8px;
        color:var(--primary-text-color);
        background:var(--secondary-background-color);
      }
      button { cursor:pointer; }
      button:disabled { cursor:not-allowed; opacity:.58; }
      button.danger { background:rgba(210,45,45,.88); }
      .media-empty {
        min-height:160px; display:grid; place-items:center; text-align:center;
        padding:18px; box-sizing:border-box; border-radius:12px;
        background:rgba(0,0,0,.20); border:1px dashed rgba(var(--tc-rgb),.35);
      }
      .media-empty strong,.media-empty small { display:block; }
      .slots { display:grid; grid-template-columns:repeat(auto-fit,minmax(92px,1fr)); gap:6px; }
      .slot { min-width:0; display:grid; gap:3px; padding:7px; border-radius:9px; background:rgba(0,0,0,.18); border:1px solid rgba(var(--tc-rgb),.15); }
      .slot.active { border-color:var(--tc-line); box-shadow:0 0 14px rgba(var(--tc-rgb),.32); background:rgba(var(--tc-rgb),.10); }
      .slot-active { color:#71ffd0; font-size:11px; font-weight:700; }
      .spool { width:22px; height:22px; border-radius:50%; background:var(--spool); border:2px solid rgba(255,255,255,.22); box-shadow:0 0 9px var(--spool); }
      .media { position:relative; min-height:160px; overflow:hidden; border-radius:12px; background:#101820; border:1px solid rgba(var(--tc-rgb),.18); }
      .media img { width:100%; height:100%; min-height:160px; max-height:340px; object-fit:cover; display:block; }
      .media-label { position:absolute; left:8px; bottom:8px; padding:4px 7px; border-radius:999px; background:rgba(0,0,0,.72); font-size:11px; }
      .media-task { position:absolute; right:8px; bottom:8px; max-width:70%; padding:4px 7px; border-radius:999px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; background:rgba(0,0,0,.72); font-size:11px; }
      .media-preview img { filter:brightness(.42) saturate(.78); object-fit:contain; }
      .media-popout { position:absolute; right:8px; top:8px; width:34px; height:30px; padding:0; border-radius:8px; background:rgba(0,0,0,.70); font-size:18px; }
      .two { display:grid; grid-template-columns:minmax(0,1.15fr) minmax(220px,.85fr); gap:7px; }

      .complete-wide { display:grid; gap:6px; }
      .complete-wide-main { display:grid; gap:6px; }
      .complete-wide-side { display:grid; gap:6px; align-content:start; }
      @container (min-width:720px) {
        .complete-wide {
          grid-template-columns:minmax(360px,1.05fr) minmax(270px,.95fr);
          align-items:start;
        }
        .complete-wide .slots {
          grid-template-columns:repeat(2,minmax(86px,1fr));
        }
      }
      @container (min-width:940px) {
        .complete-wide {
          grid-template-columns:minmax(430px,1fr) minmax(390px,.9fr);
        }
        .complete-wide .slots {
          grid-template-columns:repeat(3,minmax(82px,1fr));
        }
      }
      @container (min-width:1180px) {
        .complete-wide {
          grid-template-columns:minmax(500px,1fr) minmax(520px,.9fr);
        }
        .complete-wide .slots {
          grid-template-columns:repeat(5,minmax(82px,1fr));
        }
      }
      .footer { margin-top:5px; display:flex; gap:6px; justify-content:space-between; flex-wrap:wrap; color:var(--secondary-text-color); font-size:11px; }
      .footer a { color:#63d9ff; text-decoration:none; }
      .compact-s h2 { font-size:15px; }
      .compact-s .brand { width:42px; height:42px; }
      .compact-s .badge { font-size:10px; padding:3px 6px; }
      .compact-s button { padding:6px 7px; font-size:11px; }
      .compact-s .metric { padding:7px; }
      .compact-m .metrics { grid-template-columns:repeat(2,minmax(0,1fr)); }
      @keyframes tc-pulse { 0%,100%{box-shadow:0 0 13px rgba(var(--tc-rgb),.16)} 50%{box-shadow:0 0 27px rgba(var(--tc-rgb),var(--tc-glow))} }
      .template-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(145px,1fr)); gap:7px; }
      .template-item { min-width:0; border:1px solid rgba(var(--tc-rgb),.17); border-radius:9px; overflow:hidden; background:rgba(0,0,0,.18); }
      .template-preview { height:112px; display:grid; place-items:center; background:rgba(0,0,0,.20); }
      .template-preview img { width:100%; height:100%; object-fit:contain; }
      .template-body { display:grid; gap:5px; padding:7px; }
      .template-name { overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
      .tabs { display:flex; gap:5px; flex-wrap:wrap; }
      .tabs button.active { background:rgba(var(--tc-rgb),.24); }
      .notice { padding:7px; border-radius:8px; background:rgba(var(--tc-rgb),.08); border:1px solid rgba(var(--tc-rgb),.18); }
      .primary { border-color:rgba(var(--tc-rgb),.88)!important; background:rgba(var(--tc-rgb),.24)!important; font-weight:700; }
      .upload-line { display:flex; align-items:center; gap:7px; flex-wrap:wrap; padding:7px; border:1px dashed rgba(var(--tc-rgb),.36); border-radius:9px; background:rgba(var(--tc-rgb),.05); }
      .visually-hidden { position:absolute!important; width:1px!important; height:1px!important; padding:0!important; margin:-1px!important; overflow:hidden!important; clip:rect(0,0,0,0)!important; white-space:nowrap!important; border:0!important; }

      .file-stats { display:flex; gap:6px; flex-wrap:wrap; margin:6px 0; }
      .file-manager { display:grid; gap:6px; }
      .file-row { display:grid; grid-template-columns:minmax(0,1fr) auto; gap:7px; align-items:center; padding:7px; border:1px solid rgba(var(--tc-rgb),.17); border-radius:8px; background:rgba(0,0,0,.16); }
      .file-meta { min-width:0; display:grid; gap:2px; }
      .file-name { overflow:hidden; text-overflow:ellipsis; white-space:nowrap; font-weight:700; }
      .file-actions { display:flex; gap:4px; flex-wrap:wrap; justify-content:flex-end; }
      .upload-selected { display:grid; gap:4px; min-width:180px; }
      .breadcrumb { display:flex; gap:4px; align-items:center; flex-wrap:wrap; }

      .upload-progress { display:grid; gap:4px; margin-top:5px; }
      .upload-progress-track { height:9px; border-radius:999px; overflow:hidden; background:rgba(255,255,255,.09); }
      .upload-progress-fill { height:100%; border-radius:inherit; background:linear-gradient(90deg,rgba(var(--tc-rgb),.65),rgba(var(--tc-rgb),1)); transition:width .18s ease; }
      .file-preview-button {
        width:72px;
        height:58px;
        display:grid;
        place-items:center;
        overflow:hidden;
        box-sizing:border-box;
        padding:0;
        background:rgba(0,0,0,.22);
      }
      .file-preview-button img {
        display:block;
        width:auto;
        height:auto;
        max-width:100%;
        max-height:100%;
        object-fit:contain;
      }
      .file-row-with-preview { display:grid; grid-template-columns:auto minmax(0,1fr) auto; gap:7px; align-items:center; padding:7px; border:1px solid rgba(var(--tc-rgb),.17); border-radius:8px; background:rgba(0,0,0,.16); }
      .preview-expanded { display:grid; gap:7px; padding:7px; border:1px solid rgba(var(--tc-rgb),.35); border-radius:9px; background:rgba(0,0,0,.26); }
      .preview-expanded img { width:100%; max-height:420px; object-fit:contain; border-radius:7px; background:rgba(0,0,0,.24); }
      .tc-overlay { position:fixed; inset:64px 0 0; z-index:9999; display:grid; place-items:center; padding:18px; background:rgba(0,0,0,.70); }
      .tc-dialog { width:min(520px,calc(100vw - 36px)); max-height:min(680px,calc(100vh - 36px)); overflow:auto; display:grid; gap:9px; padding:13px; border-radius:11px; border:1px solid rgba(var(--tc-rgb),.52); background:var(--ha-card-background,var(--card-background-color,#1d2429)); box-shadow:0 0 32px rgba(var(--tc-rgb),.24); }
      .tc-dialog input { width:100%; box-sizing:border-box; }
      .folder-list { display:grid; gap:5px; max-height:330px; overflow:auto; }
      .folder-option { display:flex; justify-content:space-between; align-items:center; text-align:left; width:100%; }
      .folder-option.active { border-color:rgba(var(--tc-rgb),.88); background:rgba(var(--tc-rgb),.20); }

      /* RC1.9 desktop archive manager */
      .archive-host-force-wide { display:none; }
      .archive-shell { display:grid; gap:10px; container-type:inline-size; }
      .archive-title { display:flex; justify-content:space-between; align-items:flex-start; gap:10px; flex-wrap:wrap; }
      .archive-title h2 { font-size:18px; }
      .archive-subtitle { display:block; margin-top:3px; color:var(--secondary-text-color); }
      .archive-stats { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:7px; }
      .archive-stat { display:grid; gap:3px; padding:9px 10px; border:1px solid rgba(var(--tc-rgb),.19); border-radius:9px; background:rgba(0,0,0,.18); }
      .archive-stat strong { font-size:16px; }
      .archive-commandbar { display:flex; gap:6px; align-items:center; flex-wrap:wrap; padding:7px; border:1px solid rgba(var(--tc-rgb),.17); border-radius:9px; background:rgba(0,0,0,.12); }
      .archive-commandbar .archive-search { flex:1 1 220px; min-width:160px; }
      .archive-commandbar select { min-width:132px; }
      .archive-view-switch { display:flex; gap:4px; margin-left:auto; }
      .archive-view-switch button.active { border-color:rgba(var(--tc-rgb),.88); background:rgba(var(--tc-rgb),.24); }
      .archive-path { display:flex; gap:5px; align-items:center; flex-wrap:wrap; min-width:0; }
      .archive-path-current { overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:420px; color:var(--secondary-text-color); }
      .archive-upload { display:grid; grid-template-columns:auto minmax(180px,1fr) auto; gap:6px; align-items:center; padding:9px; border:1px dashed rgba(var(--tc-rgb),.46); border-radius:9px; background:rgba(var(--tc-rgb),.06); }
      .archive-upload button { min-height:34px; }
      .archive-upload-file { min-width:0; display:grid; gap:2px; }
      .archive-upload-file strong { overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
      .archive-list { display:grid; gap:6px; }
      .archive-list .file-row-with-preview { grid-template-columns:94px minmax(170px,1fr) minmax(260px,auto); min-height:80px; padding:7px; }
      .archive-list .file-preview-button { width:92px; height:70px; padding:6px; }
      .archive-list .file-preview-button img { max-width:86%; max-height:86%; }
      .archive-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:6px; }
      .archive-grid .file-row-with-preview { min-width:0; display:grid; grid-template-columns:1fr; gap:7px; align-items:stretch; padding:7px; }
      .archive-grid .file-preview-button { width:100%; height:154px; }
      .archive-grid .file-actions { justify-content:flex-start; }
      .archive-grid .file-name { white-space:normal; line-height:1.22; min-height:2.44em; }
      .file-path { color:var(--secondary-text-color); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
      .file-kind { color:var(--secondary-text-color); }
      .folder-preview { font-size:30px; }
      .preview-expanded { grid-template-columns:minmax(0,1.55fr) minmax(190px,.45fr); align-items:start; padding:9px; }
      .preview-expanded .preview-toolbar { display:grid; gap:6px; }
      .preview-expanded .preview-toolbar button { width:100%; }
      .preview-expanded img { max-height:520px; }
      .tc-dialog { width:min(720px,calc(100vw - 36px)); }
      .folder-list { max-height:430px; }
      .archive-bulkbar { display:flex; gap:6px; align-items:center; flex-wrap:wrap; padding:7px; border:1px solid rgba(var(--tc-rgb),.20); border-radius:9px; background:rgba(var(--tc-rgb),.055); }
      .archive-bulkbar strong { margin-right:3px; }
      .archive-master-select {
        display:flex;
        align-items:center;
        gap:6px;
        min-height:28px;
        padding:4px 7px;
        border:1px solid rgba(var(--tc-rgb),.24);
        border-radius:7px;
        background:rgba(0,0,0,.14);
        cursor:pointer;
      }
      .archive-master-select input {
        width:16px;
        height:16px;
        margin:0;
        cursor:pointer;
      }
      .archive-master-select span {
        line-height:1.15;
      }
      .archive-search-wrap {
        display:flex;
        gap:4px;
        align-items:center;
        flex:1 1 280px;
        min-width:180px;
      }
      .archive-search-wrap .archive-search {
        flex:1 1 auto;
        min-width:0;
      }
      .archive-search-reset {
        flex:0 0 auto;
        min-width:34px;
      }
      .archive-bulkbar button:disabled { opacity:.45; cursor:not-allowed; }
      .select-check { display:flex; align-items:center; justify-content:center; width:28px; height:28px; border-radius:7px; border:1px solid rgba(var(--tc-rgb),.25); background:rgba(0,0,0,.18); }
      .select-check input { width:16px; height:16px; cursor:pointer; }
      .file-row-with-preview.is-selected { border-color:rgba(var(--tc-rgb),.92); background:rgba(var(--tc-rgb),.13); box-shadow:0 0 16px rgba(var(--tc-rgb),.10); }
      .archive-list .file-row-with-preview { grid-template-columns:30px 94px minmax(170px,1fr) minmax(260px,auto); }
      .archive-grid .file-row-with-preview { position:relative; }
      .archive-grid .select-check { position:absolute; top:8px; left:8px; z-index:2; backdrop-filter:blur(4px); }
      .archive-grid .file-preview-button { margin-top:2px; }
      .bulk-dialog-summary { display:grid; gap:4px; padding:7px; border:1px solid rgba(var(--tc-rgb),.18); border-radius:8px; background:rgba(0,0,0,.16); }
      .bulk-dialog-list { display:grid; gap:3px; max-height:150px; overflow:auto; padding-right:4px; }
      .bulk-dialog-list small { overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
      @container (max-width:720px) {
        .archive-list .file-row-with-preview { grid-template-columns:30px 78px minmax(0,1fr); }
      }
      .archive-workspace-overlay {
        position:fixed;
        inset:0;
        z-index:10000;
        display:grid;
        place-items:center;
        padding:18px;
        background:rgba(0,0,0,.74);
        backdrop-filter:blur(5px);
      }
      .archive-workspace-panel {
        width:min(1480px,calc(100vw - 36px));
        max-height:calc(100vh - 36px);
        overflow:auto;
        border:1px solid rgba(var(--tc-rgb),.66);
        border-radius:14px;
        background:var(--ha-card-background,var(--card-background-color,#182126));
        box-shadow:0 0 42px rgba(var(--tc-rgb),.32);
      }
      .archive-workspace-panel ha-card {
        border:none !important;
        box-shadow:none !important;
        background:transparent !important;
      }
      .archive-shell.expanded {
        min-width:0;
        padding:4px;
      }
      .archive-shell.expanded .archive-grid {
        grid-template-columns:repeat(auto-fill,minmax(205px,1fr));
      }
      .archive-shell.expanded .archive-grid .file-preview-button {
        height:116px;
        padding:9px;
      }
      .archive-shell.expanded .archive-grid .file-preview-button img {
        max-width:82%;
        max-height:82%;
      }
      .archive-shell.expanded .archive-list .file-row-with-preview {
        grid-template-columns:34px 112px minmax(260px,1fr) minmax(430px,auto);
        min-height:96px;
      }
      .archive-shell.expanded .archive-list .file-preview-button {
        width:110px;
        height:82px;
      }
      .archive-shell.expanded .archive-commandbar {
        position:sticky;
        top:0;
        z-index:5;
        background:var(--ha-card-background,var(--card-background-color,#182126));
      }
      .archive-shell.expanded .archive-bulkbar {
        position:sticky;
        top:58px;
        z-index:4;
        background:var(--ha-card-background,var(--card-background-color,#182126));
      }
      .archive-shell.compact .archive-title {
        gap:7px;
      }
      .archive-shell.compact .archive-title h2 {
        font-size:16px;
      }
      .archive-shell.compact .archive-title-actions {
        display:flex;
        gap:5px;
        flex-wrap:wrap;
      }
      .archive-shell.compact .archive-title-actions button {
        white-space:nowrap;
      }
      @container (max-width:620px) {
        .archive-shell.compact {
          gap:7px;
        }
        .archive-shell.compact .archive-subtitle {
          display:none;
        }
        .archive-shell.compact .archive-title {
          display:grid;
          grid-template-columns:1fr;
        }
        .archive-shell.compact .archive-title-actions {
          display:grid;
          grid-template-columns:repeat(2,minmax(0,1fr));
        }
        .archive-shell.compact .archive-title-actions button {
          min-width:0;
          overflow:hidden;
          text-overflow:ellipsis;
        }
        .archive-shell.compact .archive-stats {
          grid-template-columns:repeat(3,minmax(0,1fr));
          gap:4px;
        }
        .archive-shell.compact .archive-stat {
          padding:6px 7px;
        }
        .archive-shell.compact .archive-stat strong {
          font-size:14px;
        }
        .archive-shell.compact .archive-commandbar {
          display:grid;
          grid-template-columns:1fr;
          gap:5px;
          padding:6px;
        }
        .archive-shell.compact .archive-path {
          gap:4px;
        }
        .archive-shell.compact .archive-search {
          width:100%;
          min-width:0;
        }
        .archive-shell.compact .archive-view-switch {
          margin-left:0;
        }
        .archive-shell.compact .archive-bulkbar {
          display:grid;
          grid-template-columns:repeat(2,minmax(0,1fr));
          gap:4px;
          padding:6px;
        }
        .archive-shell.compact .archive-bulkbar strong {
          grid-column:1 / -1;
        }
        .archive-shell.compact .archive-bulkbar button {
          min-width:0;
          padding:5px 6px;
          white-space:normal;
          line-height:1.15;
        }
        .archive-shell.compact .archive-upload {
          grid-template-columns:1fr;
          gap:5px;
          padding:7px;
        }
        .archive-shell.compact .archive-upload button {
          min-height:30px;
        }
        .archive-shell.compact .archive-list {
          gap:5px;
        }
        .archive-shell.compact .archive-list .file-row-with-preview {
          grid-template-columns:28px 74px minmax(0,1fr);
          gap:5px;
          min-height:0;
          padding:6px;
        }
        .archive-shell.compact .archive-list .file-preview-button {
          width:72px;
          height:58px;
        }
        .archive-shell.compact .archive-list .file-actions {
          grid-column:1 / -1;
          display:grid;
          grid-template-columns:repeat(3,minmax(0,1fr));
          gap:4px;
        }
        .archive-shell.compact .archive-list .file-actions button {
          min-width:0;
          padding:5px 4px;
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap;
          font-size:11px;
        }
        .archive-shell.compact .archive-grid {
          grid-template-columns:repeat(2,minmax(0,1fr));
          gap:5px;
        }
        .archive-shell.compact .archive-grid .file-row-with-preview {
          gap:4px;
          padding:5px;
        }
        .archive-shell.compact .archive-grid .file-preview-button {
          height:64px;
          min-height:64px;
          padding:7px;
        }
        .archive-shell.compact .archive-grid .file-preview-button img {
          max-width:68%;
          max-height:68%;
        }
      }

      /* RC1.20 gallery-only file manager */
      .archive-gallery-launcher {
        display:grid;
        gap:6px;
        padding:14px;
        border:1px solid rgba(var(--tc-rgb),.42);
        border-radius:10px;
        background:rgba(var(--tc-rgb),.08);
      }
      .archive-gallery-launcher span {
        color:var(--secondary-text-color);
      }
      .archive-gallery-launcher button {
        min-height:38px;
      }
      .archive-launcher-previews {
        display:grid;
        grid-template-columns:repeat(3,minmax(0,1fr));
        gap:6px;
      }
      .archive-launcher-preview {
        min-width:0;
        display:grid;
        gap:4px;
        padding:5px;
        border:1px solid rgba(var(--tc-rgb),.28);
        border-radius:8px;
        background:rgba(0,0,0,.18);
        cursor:pointer;
      }
      .archive-launcher-preview:hover {
        border-color:rgba(var(--tc-rgb),.72);
        box-shadow:0 0 12px rgba(var(--tc-rgb),.18);
      }
      .archive-launcher-preview-media {
        height:54px;
        display:grid;
        place-items:center;
        overflow:hidden;
        border-radius:6px;
        background:rgba(0,0,0,.28);
      }
      .archive-launcher-preview-media img {
        max-width:76%;
        max-height:76%;
        object-fit:contain;
      }
      .archive-launcher-preview-name {
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        font-size:10px;
      }
      .archive-workspace-panel {
        width:min(1680px,calc(100vw - 24px));
        height:calc(100vh - 24px);
        max-height:calc(100vh - 24px);
      }
      .archive-shell.expanded .archive-grid {
        grid-template-columns:repeat(3,minmax(0,1fr));
        gap:10px;
      }
      .archive-shell.expanded .archive-grid .file-row-with-preview {
        min-width:0;
      }
      .archive-shell.expanded .archive-grid .file-preview-button {
        height:168px;
        padding:12px;
      }
      .archive-shell.expanded .archive-grid .file-preview-button img {
        max-width:88%;
        max-height:88%;
      }
      .archive-preview-overlay {
        position:fixed;
        inset:64px 0 0;
        z-index:12000;
        background:rgba(0,0,0,.32);
        backdrop-filter:blur(3px);
      }
      .archive-preview-panel {
        position:fixed;
        display:grid;
        grid-template-columns:minmax(0,1fr) 288px;
        gap:12px;
        padding:12px;
        box-sizing:border-box;
        border:1px solid rgba(var(--tc-rgb),.72);
        border-radius:14px;
        background:var(--ha-card-background,var(--card-background-color,#182126));
        box-shadow:0 18px 52px rgba(0,0,0,.58),0 0 32px rgba(var(--tc-rgb),.24);
      }
      .archive-preview-stage {
        display:grid;
        place-items:center;
        overflow:hidden;
        border:1px solid rgba(var(--tc-rgb),.24);
        border-radius:10px;
        background:rgba(0,0,0,.42);
      }
      .archive-preview-stage img {
        max-width:94%;
        max-height:94%;
        object-fit:contain;
      }
      .queue-list { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:10px; margin-top:5px; }
      .queue-row { position:relative; min-width:0; display:grid; gap:6px; padding:9px; border:1px solid rgba(var(--tc-rgb),.18); border-radius:10px; background:rgba(0,0,0,.16); }
      .queue-position { position:absolute; top:8px; left:8px; z-index:2; display:grid; place-items:center; width:28px; height:28px; border-radius:50%; border:1px solid rgba(var(--tc-rgb),.58); background:rgba(8,22,28,.9); font-weight:700; }
      .queue-preview { height:150px; display:grid; place-items:center; overflow:hidden; border:1px solid rgba(var(--tc-rgb),.16); border-radius:8px; background:rgba(0,0,0,.28); }
      .queue-preview img { display:block; max-width:42%; max-height:42%; object-fit:contain; margin:auto; }
      .queue-preview-fallback { font-size:42px; opacity:.72; }
      .queue-meta { min-width:0; display:grid; gap:5px; }
      .queue-name { overflow:hidden; text-overflow:ellipsis; white-space:nowrap; font-weight:700; }
      .queue-actions { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:5px; align-items:center; }
      .queue-actions label { grid-column:1 / -1; display:grid; grid-template-columns:auto minmax(0,1fr); gap:6px; align-items:center; }
      .queue-actions input { width:100%; min-width:0; box-sizing:border-box; }
      .queue-actions .queue-apply,
      .queue-actions .queue-print { grid-column:1 / -1; }
      .queue-mini-toast { position:fixed; z-index:12220; padding:7px 12px; border-radius:10px; background:rgba(10,36,18,.96); border:1px solid rgba(90,220,130,.95); color:#eaffef; box-shadow:0 0 0 1px rgba(90,220,130,.22), 0 10px 26px rgba(0,0,0,.35), 0 0 22px rgba(90,220,130,.20); font-weight:700; pointer-events:none; }
      .folder-option-main { position:relative; display:flex; align-items:center; gap:7px; min-width:0; padding-left:calc(var(--tc-tree-depth,0) * 22px + 4px); }
      .folder-option-main.has-parent::before { content:""; position:absolute; left:calc(var(--tc-tree-depth,0) * 22px - 8px); top:-14px; bottom:-14px; border-left:1px solid rgba(var(--tc-rgb),.38); }
      .folder-option-main.has-parent::after { content:""; position:absolute; left:calc(var(--tc-tree-depth,0) * 22px - 8px); top:50%; width:13px; border-top:1px solid rgba(var(--tc-rgb),.58); }
      .folder-option-tree-icon { position:relative; z-index:1; display:inline-grid; place-items:center; width:18px; height:18px; border-radius:6px; background:rgba(var(--tc-rgb),.10); color:rgba(var(--tc-rgb),.95); font-size:12px; flex:0 0 auto; }
      .folder-option-name { min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; font-weight:700; }
      .queue-picker-dialog { width:min(1180px,calc(100vw - 32px)); max-height:calc(100vh - 96px); overflow:auto; display:grid; gap:10px; padding:14px; border-radius:12px; border:1px solid rgba(var(--tc-rgb),.58); background:var(--ha-card-background,var(--card-background-color,#1d2429)); box-shadow:0 0 34px rgba(var(--tc-rgb),.28); }
      .queue-picker-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(185px,1fr)); gap:6px; }
      .queue-picker-item { position:relative; min-width:0; display:grid; gap:6px; padding:7px; border:1px solid rgba(var(--tc-rgb),.18); border-radius:10px; background:rgba(0,0,0,.17); }
      .queue-picker-item.selected { border-color:rgba(var(--tc-rgb),.88); background:rgba(var(--tc-rgb),.12); }
      .queue-picker-media { height:118px; display:grid; place-items:center; overflow:hidden; border-radius:8px; background:rgba(0,0,0,.24); }
      .queue-picker-media img { max-width:92%; max-height:92%; object-fit:contain; }
      .queue-picker-check { position:absolute; top:8px; left:8px; z-index:2; }
      .queue-picker-footer { position:sticky; bottom:0; display:flex; gap:6px; align-items:center; flex-wrap:wrap; padding:9px; border-radius:10px; border:1px solid rgba(var(--tc-rgb),.22); background:var(--ha-card-background,var(--card-background-color,#1d2429)); }
      .queue-picker-footer input { min-width:105px; }
      @media (max-width:760px) {
        .queue-list { grid-template-columns:1fr; }
      }
      .archive-preview-toolbar {
        display:grid;
        align-content:start;
        gap:6px;
        min-width:0;
      }
      .archive-preview-toolbar button {
        width:100%;
      }
      @container (max-width:1050px) {
        .archive-shell.expanded .archive-grid {
          grid-template-columns:repeat(2,minmax(0,1fr));
        }
      }
      @container (max-width:700px) {
        .archive-shell.expanded .archive-grid {
          grid-template-columns:1fr;
        }
      }
      @media (max-width:760px) {
        .archive-preview-panel {
          grid-template-columns:1fr;
          grid-template-rows:minmax(0,1fr) auto;
        }
      }

      /* RC1.22 gallery proportions */
      .archive-shell.expanded .archive-grid {
        display:grid !important;
        grid-template-columns:repeat(3,minmax(0,1fr)) !important;
        gap:12px !important;
      }
      .archive-shell.expanded .archive-grid .file-row-with-preview {
        min-width:0;
        padding:9px;
      }
      .archive-shell.expanded .archive-grid .file-preview-button {
        height:220px !important;
        min-height:220px !important;
        padding:14px !important;
      }
      .archive-shell.expanded .archive-grid .file-preview-button img {
        max-width:94% !important;
        max-height:94% !important;
      }
      .archive-shell.expanded .archive-grid .folder-preview {
        font-size:52px;
      }
      .archive-shell.expanded .archive-grid .file-name {
        font-size:13px;
        line-height:1.2;
      }
      .archive-shell.expanded .archive-grid .file-kind,
      .archive-shell.expanded .archive-grid .file-path {
        font-size:11px;
      }
      .archive-shell.expanded .archive-grid .file-actions {
        display:grid;
        grid-template-columns:repeat(3,minmax(0,1fr));
        gap:5px;
      }
      .archive-shell.expanded .archive-grid .file-actions button {
        min-height:28px;
        min-width:0;
        padding:5px 4px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
      }
      .archive-launcher-preview-media {
        height:72px !important;
      }
      .archive-launcher-preview-media img {
        max-width:88% !important;
        max-height:88% !important;
      }
      .archive-launcher-preview-name {
        font-size:11px;
      }
      @container (max-width:1180px) {
        .archive-shell.expanded .archive-grid {
          grid-template-columns:repeat(2,minmax(0,1fr)) !important;
        }
      }
      @container (max-width:760px) {
        .archive-shell.expanded .archive-grid {
          grid-template-columns:1fr !important;
        }
      }

      /* RC1.23 professional gallery */
      .archive-shell.expanded .archive-grid {
        grid-template-columns:repeat(4,minmax(0,1fr)) !important;
        gap:14px !important;
      }
      .archive-shell.expanded .archive-grid .file-row-with-preview {
        display:grid;
        grid-template-columns:1fr;
        gap:6px;
        align-content:start;
        position:relative;
        min-height:380px;
        padding:0;
        overflow:hidden;
        border-radius:11px;
        background:rgba(0,0,0,.14);
      }
      .archive-shell.expanded .archive-grid .select-check {
        position:absolute;
        z-index:3;
        top:8px;
        left:8px;
      }
      .archive-tile-menu {
        position:absolute;
        z-index:3;
        top:8px;
        right:8px;
        width:30px;
        min-width:30px;
        height:28px;
        padding:0;
        border-radius:7px;
      }
      .archive-shell.expanded .archive-grid .file-preview-button {
        width:100%;
        height:218px !important;
        min-height:218px !important;
        padding:14px !important;
        border:0;
        border-bottom:1px solid rgba(var(--tc-rgb),.22);
        border-radius:0;
      }
      .archive-shell.expanded .archive-grid .file-preview-button img {
        max-width:94% !important;
        max-height:94% !important;
      }
      .archive-shell.expanded .archive-grid .file-meta {
        display:grid;
        gap:4px;
        padding:0 10px;
      }
      .archive-shell.expanded .archive-grid .file-name {
        min-height:2.4em;
        font-size:13px;
        font-weight:700;
        line-height:1.2;
      }
      .archive-shell.expanded .archive-grid .file-kind,
      .archive-shell.expanded .archive-grid .file-path {
        font-size:11px;
      }
      .archive-shell.expanded .archive-grid .file-actions {
        display:grid;
        grid-template-columns:repeat(2,minmax(0,1fr));
        gap:5px;
        padding:0 10px 10px;
        margin-top:auto;
      }
      .archive-shell.expanded .archive-grid .file-actions button {
        min-height:30px;
      }
      .archive-shell.expanded .archive-grid .file-actions .primary {
        grid-column:span 2;
      }

      .archive-context-menu {
        position:fixed;
        z-index:16000;
        display:grid;
        min-width:236px;
        max-height:min(720px,calc(100vh - 24px));
        overflow:auto;
        padding:6px;
        border:1px solid rgba(var(--tc-rgb),.68);
        border-radius:9px;
        background:var(--ha-card-background,var(--card-background-color,#1d252a));
        box-shadow:0 12px 34px rgba(0,0,0,.55);
      }
      .archive-context-menu button {
        display:flex;
        align-items:center;
        gap:6px;
        width:100%;
        min-height:30px;
        padding:6px 8px;
        border:0;
        border-radius:6px;
        text-align:left;
        background:transparent;
      }
      .archive-context-menu button:hover {
        background:rgba(var(--tc-rgb),.15);
      }
      .archive-context-menu button:disabled {
        opacity:.42;
      }
      .archive-context-separator {
        height:1px;
        margin:5px 2px;
        background:rgba(var(--tc-rgb),.20);
      }
      .archive-context-hint {
        padding:4px 8px;
        color:var(--secondary-text-color);
        font-size:10px;
      }

      .archive-preview-stage img {
        transform:
          scale(var(--tc-preview-zoom,1))
          rotate(var(--tc-preview-rotate,0deg));
        transition:transform .18s ease;
      }
      .archive-preview-controls {
        display:grid;
        grid-template-columns:repeat(4,minmax(0,1fr));
        gap:5px;
      }
      .archive-preview-controls button {
        min-height:30px;
      }

      .tc-dialog .prepared-lock {
        display:grid;
        gap:6px;
        padding:9px;
        border:1px solid rgba(255,190,80,.42);
        border-radius:8px;
        background:rgba(255,190,80,.08);
      }
      .tc-dialog .prepared-lock strong {
        color:#ffc866;
      }
      .tc-dialog .dialog-action-grid {
        display:grid;
        grid-template-columns:repeat(2,minmax(0,1fr));
        gap:7px;
      }

      @container (max-width:1480px) {
        .archive-shell.expanded .archive-grid {
          grid-template-columns:repeat(3,minmax(0,1fr)) !important;
        }
      }
      @container (max-width:1050px) {
        .archive-shell.expanded .archive-grid {
          grid-template-columns:repeat(2,minmax(0,1fr)) !important;
        }
      }
      @container (max-width:720px) {
        .archive-shell.expanded .archive-grid {
          grid-template-columns:1fr !important;
        }
      }
      @container (max-width:620px) {
        .archive-shell.compact .archive-grid .folder-preview {
          font-size:21px;
        }
        .archive-shell.compact .archive-grid .file-name {
          display:-webkit-box;
          min-height:2.15em;
          max-height:2.15em;
          overflow:hidden;
          -webkit-box-orient:vertical;
          -webkit-line-clamp:2;
          line-height:1.075;
          word-break:break-word;
        }
        .archive-shell.compact .archive-grid .file-meta {
          display:none;
        }
        .archive-shell.compact .archive-grid .file-size {
          display:block;
          margin-top:1px;
          font-size:9px;
          opacity:.78;
        }
        .archive-shell.compact .archive-grid .file-actions {
          display:grid;
          grid-template-columns:repeat(2,minmax(0,1fr));
          gap:3px;
        }
        .archive-shell.compact .archive-grid .file-actions button {
          min-width:0;
          padding:4px 2px;
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap;
          font-size:9px;
          line-height:1.05;
        }
        .archive-shell.compact .archive-grid .selection-box {
          transform:scale(.88);
          transform-origin:top left;
        }
        .archive-shell.compact .file-name {
          font-size:12px;
        }
        .archive-shell.compact .file-kind,
        .archive-shell.compact .file-path {
          font-size:10px;
        }
        .archive-shell.compact .preview-expanded {
          grid-template-columns:1fr;
        }
      }
      @container (max-width:330px) {
        .archive-shell.compact .archive-grid {
          grid-template-columns:1fr;
        }
        .archive-shell.compact .archive-grid .file-preview-button {
          height:72px;
          min-height:72px;
          padding:7px;
        }
        .archive-shell.compact .archive-grid .file-preview-button img {
          max-width:64%;
          max-height:64%;
        }
      }
      @container (min-width:560px) and (max-width:980px) {
        .archive-shell.compact .archive-grid {
          grid-template-columns:repeat(3,minmax(0,1fr));
        }
      }
      @container (max-width:720px) {
        .archive-upload { grid-template-columns:1fr; }
        .archive-view-switch { margin-left:0; }
        .archive-list .file-row-with-preview { grid-template-columns:78px minmax(0,1fr); }
        .archive-list .file-preview-button { width:76px; height:62px; }
        .archive-list .file-actions { grid-column:1 / -1; justify-content:flex-start; }
        .preview-expanded { grid-template-columns:1fr; }
      }
      @container (max-width:460px) {
        .archive-stats { grid-template-columns:1fr; }
        .archive-commandbar { display:grid; grid-template-columns:1fr; }
        .archive-commandbar .archive-search { width:100%; }
        .archive-view-switch { justify-content:flex-start; }
        .archive-grid { grid-template-columns:1fr; }
      }

      /* RC1.25 dedicated scalable gallery card */
      .archive-library-card .tc-size-picker { display:none; }
      .archive-library-card { overflow:visible; }
      .archive-library-shell {
        display:grid;
        gap:10px;
        min-width:0;
      }
      .archive-library-header {
        display:flex;
        align-items:flex-start;
        justify-content:space-between;
        gap:12px;
        flex-wrap:wrap;
        padding:2px 2px 4px;
      }
      .archive-library-heading { display:grid; gap:4px; min-width:0; }
      .archive-library-heading .row { gap:7px; }
      .archive-library-heading h2 { font-size:19px; }
      .archive-library-summary { color:var(--secondary-text-color); font-size:12px; }
      .archive-library-header-actions {
        display:flex;
        align-items:center;
        justify-content:flex-end;
        gap:6px;
        flex-wrap:wrap;
      }
      .archive-library-toolbar {
        display:grid;
        gap:7px;
        padding:7px;
        border:1px solid rgba(var(--tc-rgb),.20);
        border-radius:10px;
        background:rgba(0,0,0,.16);
      }
      .archive-library-toolbar-main {
        display:grid;
        grid-template-columns:auto minmax(220px,1fr) auto;
        align-items:center;
        gap:7px;
      }
      .archive-library-source { display:flex; gap:5px; flex-wrap:wrap; align-items:center; }
      .archive-library-source button.active {
        border-color:rgba(var(--tc-rgb),.84);
        background:rgba(var(--tc-rgb),.20);
      }
      .archive-library-shell .archive-bulkbar {
        min-height:30px;
        padding:5px 6px;
        background:rgba(0,0,0,.10);
      }
      .archive-library-shell .archive-upload {
        grid-template-columns:minmax(0,1fr) auto;
        padding:7px 8px;
        border-style:solid;
        background:rgba(var(--tc-rgb),.035);
      }
      .archive-library-shell .archive-upload.is-idle { opacity:.78; }
      .archive-library-shell .archive-upload .archive-upload-file { padding-left:2px; }
      .archive-library-shell .archive-grid {
        display:grid !important;
        grid-template-columns:repeat(4,minmax(0,1fr)) !important;
        gap:12px !important;
      }
      .archive-library-shell .archive-grid .file-row-with-preview {
        display:grid;
        grid-template-columns:1fr;
        grid-template-rows:auto 1fr auto;
        gap:0;
        min-height:338px;
        overflow:hidden;
        border:1px solid rgba(var(--tc-rgb),.20);
        border-radius:10px;
        background:rgba(0,0,0,.15);
        box-shadow:none;
        transition:border-color .16s ease, box-shadow .16s ease, transform .16s ease;
      }
      .archive-library-shell .archive-grid .file-row-with-preview:hover {
        border-color:rgba(var(--tc-rgb),.56);
        box-shadow:0 10px 24px rgba(0,0,0,.20);
        transform:translateY(-1px);
      }
      .archive-library-shell .archive-grid .file-row-with-preview.is-selected {
        border-color:rgba(var(--tc-rgb),.92);
        background:rgba(var(--tc-rgb),.11);
        box-shadow:0 0 18px rgba(var(--tc-rgb),.16);
      }
      .archive-library-shell .archive-grid .file-preview-button {
        width:100%;
        height:198px !important;
        min-height:198px !important;
        margin:0;
        padding:12px !important;
        border:0;
        border-bottom:1px solid rgba(var(--tc-rgb),.15);
        border-radius:0;
        background:rgba(0,0,0,.30);
      }
      .archive-library-shell .archive-grid .file-preview-button img {
        max-width:96% !important;
        max-height:96% !important;
      }
      .archive-library-shell .archive-grid .folder-preview { font-size:52px; }
      .archive-library-shell .archive-grid .file-meta {
        display:grid;
        align-content:start;
        gap:5px;
        padding:9px 11px 7px;
      }
      .archive-library-shell .archive-grid .file-name {
        display:-webkit-box;
        min-height:2.35em;
        max-height:2.35em;
        overflow:hidden;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2;
        white-space:normal;
        color:var(--primary-text-color);
        font-size:13px;
        font-weight:700;
        line-height:1.18;
      }
      .archive-model-id { color:var(--secondary-text-color); font-size:10px; }
      .archive-model-tags { display:flex; align-items:center; gap:5px; flex-wrap:wrap; }
      .archive-model-tag {
        padding:2px 5px;
        border-radius:999px;
        border:1px solid rgba(var(--tc-rgb),.24);
        background:rgba(var(--tc-rgb),.08);
        color:var(--secondary-text-color);
        font-size:10px;
      }
      .archive-library-shell .archive-grid .file-actions {
        display:grid;
        grid-template-columns:minmax(0,1fr) minmax(0,1fr) auto;
        gap:5px;
        margin-top:auto;
        padding:0 10px 10px;
      }
      .archive-library-shell .archive-grid .file-actions button {
        min-width:0;
        min-height:29px;
        padding:5px 6px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        font-size:11px;
      }
      .archive-library-shell .archive-grid .file-actions .primary { grid-column:auto; }
      .archive-library-shell .archive-grid .select-check {
        position:absolute;
        z-index:4;
        top:8px;
        left:8px;
        backdrop-filter:blur(4px);
      }
      .archive-library-shell .archive-grid .archive-tile-menu {
        z-index:4;
        top:8px;
        right:8px;
        background:rgba(0,0,0,.48);
      }
      .archive-context-backdrop {
        position:fixed;
        inset:64px 0 0;
        z-index:15990;
        background:transparent;
      }
      .archive-context-menu { z-index:16000; }
      .archive-library-empty {
        grid-column:1 / -1;
        min-height:160px;
        display:grid;
        place-items:center;
        padding:18px;
        border:1px dashed rgba(var(--tc-rgb),.28);
        border-radius:10px;
        color:var(--secondary-text-color);
      }
      @container (max-width:1040px) {
        .archive-library-shell .archive-grid { grid-template-columns:repeat(3,minmax(0,1fr)) !important; }
        .archive-library-shell .archive-grid .file-preview-button { height:168px !important; min-height:168px !important; }
      }
      @container (max-width:780px) {
        .archive-library-toolbar-main { grid-template-columns:1fr; }
        .archive-library-shell .archive-grid { grid-template-columns:repeat(2,minmax(0,1fr)) !important; }
        .archive-library-shell .archive-grid .file-preview-button { height:142px !important; min-height:142px !important; }
      }
      @container (max-width:470px) {
        .archive-library-header-actions { justify-content:flex-start; }
        .archive-library-shell .archive-upload { grid-template-columns:1fr; }
        .archive-library-shell .archive-grid { grid-template-columns:1fr !important; }
        .archive-library-shell .archive-grid .file-preview-button { height:178px !important; min-height:178px !important; }
      }
      .tc-link-button {
        display:inline-flex;
        align-items:center;
        justify-content:center;
        min-height:31px;
        padding:6px 9px;
        box-sizing:border-box;
        border:1px solid rgba(var(--tc-rgb),.30);
        border-radius:7px;
        background:rgba(0,0,0,.20);
        color:var(--primary-text-color);
        text-decoration:none;
        font-size:12px;
        line-height:1;
      }
      .tc-link-button:hover { border-color:rgba(var(--tc-rgb),.80); background:rgba(var(--tc-rgb),.16); }
      .archive-library-body {
        display:grid;
        grid-template-columns:208px minmax(0,1fr);
        gap:12px;
        align-items:start;
      }
      .archive-library-sidebar {
        position:sticky;
        top:8px;
        display:grid;
        gap:7px;
        min-width:0;
        max-height:min(72vh,860px);
        overflow:auto;
        padding:9px;
        border:1px solid rgba(var(--tc-rgb),.20);
        border-radius:10px;
        background:rgba(0,0,0,.18);
      }
      .archive-library-sidebar-title { display:grid; gap:2px; padding:2px 3px 6px; border-bottom:1px solid rgba(var(--tc-rgb),.16); }
      .archive-library-sidebar-title small { color:var(--secondary-text-color); }
      .archive-library-tree { display:grid; gap:3px; }
      .archive-tree-folder {
        display:flex;
        align-items:center;
        justify-content:flex-start;
        gap:6px;
        width:100%;
        min-width:0;
        padding:6px 7px 6px calc(7px + (var(--tc-folder-depth,0) * 11px));
        overflow:hidden;
        text-align:left;
        text-overflow:ellipsis;
        white-space:nowrap;
        border-color:transparent;
        background:transparent;
      }
      .archive-tree-folder.active { border-color:rgba(var(--tc-rgb),.72); background:rgba(var(--tc-rgb),.18); }
      .archive-library-content { min-width:0; display:grid; gap:9px; }
      .archive-width-warning { display:none; padding:7px 9px; border:1px solid rgba(255,190,80,.42); border-radius:8px; background:rgba(255,165,0,.10); font-size:12px; }
      @container (max-width:980px) {
        .archive-library-body { grid-template-columns:1fr; }
        .archive-library-sidebar { position:static; max-height:190px; }
        .archive-width-warning { display:block; }
      }

      @media(max-width:760px) {
        .two { grid-template-columns:1fr; }
        .metrics { grid-template-columns:repeat(2,minmax(0,1fr)); }
      }
    `;
  }

  function frame(config, content, extra = "") {
    const glow = config?.glow === "off" ? "glow-off" : config?.glow === "subtle" ? "glow-subtle" : "glow-dynamic";
    return `
      <style>${baseCss(config)}</style>
      <ha-card class="${glow} compact-${currentSize(config)} ${extra}">
        ${localizeHtml(sizePicker(config))}
        ${localizeHtml(content)}
      </ha-card>
    `;
  }

  function metric(label, value) {
    return `<div class="metric"><small>${esc(tr(label))}</small><strong title="${esc(value)}">${esc(value)}</strong></div>`;
  }

  function renderSlot(hass, entityId, label, active = false) {
    const item = hass?.states?.[entityId];
    const at = attrs(hass, entityId);
    const material = at.normalized_material || (available(item) ? item.state : "empty");
    const brand = at.normalized_brand || "";
    const color = at.normalized_color || "#4A5568";
    const loaded = Boolean(at.normalized_loaded);
    // Current A1/BMCU payloads report remain=0 even for loaded non-RFID spools.
    // Until a real inventory source is linked, loaded spools are intentionally
    // presented as 100% instead of misleading 0%.
    const remaining = loaded ? 100 : null;
    const details = [brand, loaded ? `${remaining}%` : ""].filter(Boolean).join(" - ");

    return `
      <div class="slot ${loaded ? "" : "muted"} ${active ? "active" : ""}">
        <span class="spool" style="--spool:${esc(color)}"></span>
        <small>${esc(label)}</small>
        <strong>${esc(loaded ? material : "Leer")}</strong>
        <small>${esc(details || (loaded ? "geladen" : "â€”"))}</small>
        ${active ? `<span class="slot-active">â— Aktiv</span>` : ""}
      </div>
    `;
  }

  function autoEntity(hass, domain, prefix, suffixes) {
    const keys = Object.keys(hass?.states || {});
    for (const suffix of suffixes) {
      const exact = `${domain}.${prefix}_${suffix}`;
      if (hass?.states?.[exact]) return exact;
    }
    return keys.find((entityId) =>
      entityId.startsWith(`${domain}.`)
      && entityId.includes(prefix)
      && suffixes.some((suffix) => entityId.endsWith(`_${suffix}`))
    ) || "";
  }

  function cameraProxy(hass, map, config) {
    const entityId = (
      String(config?.camera_entity || "").trim()
      || map.nativeCamera
      || autoEntity(hass, "camera", map.prefix, ["native_live_camera", "camera", "kamera"])
    );

    const at = attrs(hass, entityId);
    const token = String(at.access_token || "").trim();
    const still = String(at.entity_picture || "").trim()
      || (entityId && token ? `/api/camera_proxy/${entityId}?token=${encodeURIComponent(token)}` : "");
    const stream = entityId && token
      ? `/api/camera_proxy_stream/${entityId}?token=${encodeURIComponent(token)}&interval=0.8`
      : "";

    return { entityId, token, still, stream };
  }

  function mediaSource(hass, map, config, cameraVisible, online, status) {
    const previewEntity = config?.preview_entity || autoEntity(hass, "image", map.prefix, ["cover_image", "titelbild", "model_preview", "bild_wahlen"]);
    const overrideUrl = String(config?.camera_url || "").trim();
    const native = cameraProxy(hass, map, config);

    if (!online) return { src: DEFAULT_OFFLINE, label: "Drucker offline", mode: "offline" };

    if (cameraVisible) {
      if (overrideUrl) return { src: overrideUrl, label: "Live-Kamera", mode: "live" };
      if (native.stream) return { src: native.stream, label: "Native Live-Kamera", mode: "live" };
      if (native.still) return { src: native.still, label: "Native Kamera-Snapshot", mode: "live" };
    }

    if (previewEntity && attrs(hass, previewEntity).entity_picture) {
      return { src: attrs(hass, previewEntity).entity_picture, label: "Modellvorschau", mode: "preview" };
    }

    const printing = ["running", "pause", "printing", "prepare"].includes(String(status).toLowerCase());
    return {
      src: printing ? DEFAULT_PREVIEW : DEFAULT_IDLE,
      label: printing ? "Modellvorschau" : "Kein aktiver Druckauftrag",
      mode: printing ? "preview" : "idle",
    };
  }

  function mediaHtml(hass, map, config, cameraVisible, online, status) {
    const source = mediaSource(hass, map, config, cameraVisible, online, status);
    const task = stateValue(hass, map.task, "Kein aktiver Druckauftrag");
    const native = cameraProxy(hass, map, config);

    if (online && cameraVisible && !source.src) {
      return `
        <div class="media-empty">
          <div>
            <strong>Native Live-Kamera startet â€¦</strong>
            <small>Das 3D-Printer Control Center verbindet Home Assistant direkt mit TCP 6000. Keine externen Dienste erforderlich.</small>
          </div>
        </div>
      `;
    }

    return `
      <div class="media ${source.mode === "preview" ? "media-preview" : ""}">
        <img src="${esc(source.src)}" alt="${esc(source.label)}">
        <span class="media-label">${esc(source.label)}</span>
        ${source.mode === "preview" ? `<span class="media-task">${esc(task)}</span>` : ""}
        ${native.stream ? `<button class="media-popout" data-action="camera-popout" title="Kamera in Großansicht öffnen">â†—</button>` : ""}
      </div>
    `;
  }

  function openCameraPopup(hass, map, config) {
    const native = cameraProxy(hass, map, config);
    if (!native.stream) return;

    const still = native.still || native.stream;
    const popup = window.open("", `printer-control-center-camera-${map.prefix}`, "width=1280,height=820,resizable=yes,scrollbars=no");
    if (!popup) return;

    const streamHtml = esc(native.stream);
    const stillJson = JSON.stringify(still);
    const title = esc(`3D-Printer Control Center Live-Kamera - ${stateValue(hass, map.serial, map.prefix)}`);

    popup.document.open();
    popup.document.write(`<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title>
<style>
  :root{color-scheme:dark}*{box-sizing:border-box}body{margin:0;background:#05080c;color:#eaf7ff;font-family:Arial,sans-serif}
  header{display:flex;gap:7px;align-items:center;justify-content:space-between;padding:9px 14px;background:#111922;border-bottom:1px solid #1a6584}
  .left,.right{display:flex;gap:6px;align-items:center}.live{padding:5px 9px;border-radius:999px;background:#007f4f;color:#d7fff0;font-weight:700}
  button{cursor:pointer;border:1px solid #21799e;background:#15232c;color:#eaf7ff;padding:7px 10px;border-radius:8px}
  main{height:calc(100vh - 58px);display:grid;place-items:center;background:#000}
  img{display:block;max-width:100%;max-height:100%;object-fit:contain}
</style>
</head>
<body>
<header>
  <div class="left"><strong>${title}</strong><span class="live">Live</span></div>
  <div class="right">
    <button id="snapshot">Schnappschuss</button>
    <button id="fullscreen">Vollbild</button>
    <button onclick="window.close()">Schließen</button>
  </div>
</header>
<main><img id="stream" alt="3D-Printer Control Center Kamera-Stream" src="${streamHtml}"></main>
<script>
  document.getElementById("snapshot").addEventListener("click",()=>window.open(${stillJson} + (${stillJson}.includes("?") ? "&" : "?") + "t=" + Date.now(),"_blank","noopener"));
  document.getElementById("fullscreen").addEventListener("click",()=>document.getElementById("stream").requestFullscreen?.());
<\/script>
</body>
</html>`);
    popup.document.close();
  }

  function commonStub() {
    return {
      title: "3D-Printer Control Center",
      glow: "dynamic",
      accent: "cyan",
      intensity: "medium",
      radius: 16,
      card_size: "m",
      show_external_spool: true,
      show_diagnostics: true,
      camera_entity: "",
      preview_entity: "",
      camera_url: "",
    };
  }

  class PrinterControlCenterEditor extends HTMLElement {
    set hass(hass) { const first=!this._hass; this._hass = hass; if(first||!this.innerHTML)this.render(); }
    setConfig(config) { this._config = { ...(config || {}) }; this.render(); }
    set kind(value) { this._kind = value; this.render(); }
    value(id, fallback = "") {
      const element = this.querySelector(`#${id}`);
      if (!element) return fallback;
      return element.type === "checkbox" ? element.checked : element.value;
    }
    emit() {
      const config = {
        ...this._config,
        printer: this.value("printer", ""),
        title: this.value("title", "3D-Printer Control Center"),
        glow: this.value("glow", "dynamic"),
        accent: this.value("accent", "cyan"),
        intensity: this.value("intensity", "medium"),
        radius: Number(this.value("radius", 16)),
        card_size: this.value("card_size", "m"),
        show_external_spool: this.value("show_external_spool", true),
        show_diagnostics: this.value("show_diagnostics", true),
        camera_entity: this.value("camera_entity", ""),
        preview_entity: this.value("preview_entity", ""),
        camera_url: this.value("camera_url", ""),
        inner_module: this.value("inner_module", "telemetry"),
      };
      this.dispatchEvent(new CustomEvent("config-changed", { bubbles:true, composed:true, detail:{ config } }));
    }
    render() {
      if (!this._hass || !this._kind) return;
      const active=this.querySelector(":focus");
      const focusState=active?.id?{id:active.id,start:active.selectionStart,end:active.selectionEnd}:null;
      const printers = discoverPrinters(this._hass);
      const selected = this._config?.printer || printers[0]?.prefix || "";
      const showMedia = ["complete", "media"].includes(this._kind);
      const frameOnly = this._kind === "frame";
      this.innerHTML = localizeHtml(`
        <style>
          .editor{display:grid;gap:12px}.grid{display:grid;grid-template-columns:1fr 1fr;gap:9px}
          label{display:grid;gap:4px}.check{display:flex;gap:7px;align-items:center}
          input,select{padding:7px;border-radius:7px;background:var(--secondary-background-color);color:var(--primary-text-color);border:1px solid var(--divider-color)}
          small{color:var(--secondary-text-color)}@media(max-width:600px){.grid{grid-template-columns:1fr}}
        </style>
        <div class="editor">
          ${frameOnly ? `
            <label>Modul im Rahmen
              <select id="inner_module">${Object.entries(MODULE_LABELS).map(([value,label]) => `<option value="${value}" ${value === (this._config?.inner_module || "telemetry") ? "selected" : ""}>${esc(label)}</option>`).join("")}</select>
            </label>
          ` : `
            <label>Drucker
              <select id="printer">${printers.map((printer) => `<option value="${esc(printer.prefix)}" ${printer.prefix === selected ? "selected" : ""}>${esc(printer.title)} - ${esc(printer.serial)}</option>`).join("")}</select>
            </label>
            <label>Titel<input id="title" value="${esc(this._config?.title || "3D-Printer Control Center")}"></label>
          `}
          <div class="grid">
            <label>Glow<select id="glow">${["dynamic","subtle","off"].map((v) => `<option ${v === (this._config?.glow || "dynamic") ? "selected" : ""}>${v}</option>`).join("")}</select></label>
            <label>Akzentfarbe<select id="accent">${Object.keys(ACCENTS).map((v) => `<option ${v === (this._config?.accent || "cyan") ? "selected" : ""}>${v}</option>`).join("")}</select></label>
            <label>Glow-Intensität<select id="intensity">${["low","medium","high"].map((v) => `<option ${v === (this._config?.intensity || "medium") ? "selected" : ""}>${v}</option>`).join("")}</select></label>
            <label>Kartengröße<select id="card_size">${["s","m","l","xl"].map((v) => `<option value="${v}" ${v === (this._config?.card_size || "m") ? "selected" : ""}>${v.toUpperCase()}</option>`).join("")}</select></label>
            <label>Eckenradius<input id="radius" type="number" min="0" max="36" value="${esc(this._config?.radius ?? 16)}"></label>
          </div>
          ${showMedia ? `
            <small>Die Druckerkamera wird modellabhängig bereitgestellt: A1/P1/A2 über Chamber Image TCP 6000, X1/H2/P2/X2 über RTSPS TCP 322. Die folgenden Felder sind nur optionale Überschreibungen.</small>
            <label>Andere Kamera-Entity optional<input id="camera_entity" placeholder="camera.mein_drucker" value="${esc(this._config?.camera_entity || "")}"></label>
            <label>Modellvorschau-Entity optional<input id="preview_entity" placeholder="image.mein_drucker_cover_image" value="${esc(this._config?.preview_entity || "")}"></label>
            <label>Andere MJPEG-URL optional<input id="camera_url" placeholder="Nur für bewusste Überschreibung der nativen Kamera" value="${esc(this._config?.camera_url || "")}"></label>
          ` : ""}
          <label class="check"><input id="show_external_spool" type="checkbox" ${this._config?.show_external_spool !== false ? "checked" : ""}> Externe Spule anzeigen</label>
          <label class="check"><input id="show_diagnostics" type="checkbox" ${this._config?.show_diagnostics !== false ? "checked" : ""}> Diagnose anzeigen</label>
          <small>S bis XL kann zusätzlich direkt innerhalb der Karte umgeschaltet werden.</small>
        </div>
      `);
      this.querySelectorAll("input,select").forEach((element) => {
        element.addEventListener("change", () => this.emit());
        element.addEventListener("input", () => this.emit());
      });
      if(focusState){
        window.requestAnimationFrame(()=>{
          const input=this.querySelector(`#${CSS.escape(focusState.id)}`);
          if(!input)return;
          input.focus({preventScroll:true});
          try{input.setSelectionRange(focusState.start??input.value.length,focusState.end??input.value.length)}catch(_error){}
        });
      }
    }
  }

  class BaseCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode:"open"});
      this.shadowRoot.addEventListener("click", (event) => {
        const size = event.target.closest?.("[data-card-size]")?.dataset?.cardSize;
        if (size && this._config) {
          this._config = { ...this._config, card_size:size };
          this.render();
          return;
        }
        const action = event.target.closest?.("[data-action]")?.dataset?.action;
        if (action === "toggle-camera") {
          this._cameraVisible = !this.cameraVisible();
          this.render();
        }
        if (action === "camera-popout") {
          const map = this.map();
          if (map) openCameraPopup(this._hass, map, this._config);
        }
      });
    }
    setConfig(config) { this._config = { ...commonStub(), ...(config || {}) }; this.render(); }
    set hass(hass) { this._hass = hass; PCC_UPLOADS.setHass(hass); activateUiLanguage(hass, resolveMap(hass, this._config)); this.render(); }
    map() { const map=resolveMap(this._hass, this._config); activateUiLanguage(this._hass,map); return map; }
    getCardSize() { return 5; }
    getGridOptions() {
      const map = {
        s:{columns:3,rows:3,min_columns:3,min_rows:3,max_columns:5,max_rows:5},
        m:{columns:6,rows:5,min_columns:4,min_rows:4,max_columns:8,max_rows:8},
        l:{columns:9,rows:8,min_columns:6,min_rows:6,max_columns:12,max_rows:12},
        xl:{columns:12,rows:12,min_columns:8,min_rows:8,max_columns:12,max_rows:18},
      };
      return map[currentSize(this._config)] || map.m;
    }
    cameraVisible() {
      return this._cameraVisible ?? true;
    }
    call(domain, service, entityId, extra={}) {
      if (!entityId || !this._hass?.states?.[entityId]) return Promise.resolve();
      return this._hass.callService(domain, service, { entity_id:entityId, ...extra });
    }
    runBusy(action, callback) {
      const button = this.shadowRoot.querySelector(`[data-action="${action}"]`);
      if (button?.disabled) return;
      if (button) button.disabled = true;

      Promise.resolve()
        .then(callback)
        .catch((error) => console.error(`3D-Printer Control Center action failed: ${action}`, error))
        .finally(() => {
          window.setTimeout(() => {
            const current = this.shadowRoot.querySelector(`[data-action="${action}"]`);
            if (current) current.disabled = false;
          }, 1100);
        });
    }
    toggleConfiguredEntity(entityId) {
      const value = String(entityId || "").trim();
      if (!value || !this._hass?.states?.[value]) return;
      const domain = value.split(".", 1)[0];
      if (!["light", "switch"].includes(domain)) return;
      this._hass.callService(domain, "toggle", { entity_id:value });
    }
    bind(map) {
      const bind = (action, handler) => this.shadowRoot.querySelector(`[data-action="${action}"]`)?.addEventListener("click", handler);
      bind("light", () => this.runBusy("light", () => this.call("light","toggle",map.light)));
      bind("pause", () => this.call("button","press",map.pause));
      bind("resume", () => this.call("button","press",map.resume));
      bind("stop", () => window.confirm(tr("Druck wirklich abbrechen?")) && this.call("button","press",map.stop));
      bind("refresh", () => this.call("button","press",map.refresh));
      bind("record", () => this.call("switch","toggle",map.record));
      bind("timelapse", () => this.call("switch","toggle",map.timelapse));
      this.shadowRoot.querySelector("[data-select='speed']")?.addEventListener("change", (event) => this.call("select","select_option",map.speed,{option:event.target.value}));
      this.shadowRoot.querySelector("[data-select='ams']")?.addEventListener("change", (event) => this.call("select","select_option",map.amsConfiguration,{option:event.target.value}));
    }
    empty() { this.shadowRoot.innerHTML = frame(this._config, `<p>Kein Drucker gefunden.</p>`); }
  }

  const editorFor = (kind) => { const editor=document.createElement("printer-control-center-card-editor"); editor.kind=kind; return editor; };

  class CompleteCard extends BaseCard {
    static getConfigElement(){return editorFor("complete")}
    static getStubConfig(){return {...commonStub(),card_size:"l"}}
    render() {
      if (!this._hass || !this._config) return;
      const map=this.map(); if(!map) return this.empty();
      const size=currentSize(this._config);
      const online=isPrinterOnline(this._hass,map);
      const status=stateValue(this._hass,map.printStatus,online?"online":"offline");
      const progress=Math.max(0,Math.min(100,numberValue(this._hass,map.progress,0)));
      const task=stateValue(this._hass,map.task,"Kein aktiver Druckauftrag");
      const modelName=pccDisplayPrinterModelV4(this._hass,map,this._config);const cameraCompact=pccCompactCameraLabelV4(this._hass,map,this._config);
      const amsName=amsDisplayName(this._hass,map);
      const basicButtons=`
        <div class="toolbar">
          <button data-action="light">💡 Licht</button>
          <button data-action="toggle-camera">📷 Livebild ${this.cameraVisible()?"ausblenden":"anzeigen"}</button>
          <button data-action="camera-popout">â†— Großansicht</button>
          ${printControlButtons(status)}
          <button data-action="refresh">â†» Aktualisieren</button>
        </div>`;
      const header=`
        <div class="row between">
          <div class="row">
            <img class="brand" src="${LOGO}" alt="3D-Printer Control Center">
            <div>
              <h2>${esc(this._config.title)}</h2>
              <div class="printer-model" title="${esc(modelName)}">${esc(modelName)}</div>
              <div class="row">
                <span class="badge ${online?"online":"offline"}">${online?"â— Online":"â— Offline"}</span>
                <span class="badge">${esc(status)}</span>
                <span class="badge">${progress}%</span>
              </div>
            </div>
          </div>
          <div class="muted">Schicht ${esc(stateValue(this._hass,map.layer))}/${esc(stateValue(this._hass,map.layers))}</div>
        </div>
        <div class="progress"><span style="width:${progress}%"></span></div>
        <div class="row"><strong>${esc(task)}</strong><span class="badge">Restzeit ${esc(formatRemaining(stateValue(this._hass,map.remaining,0)))}</span></div>`;

      if(size==="s"){
        this.shadowRoot.innerHTML=frame(this._config,`
          ${header}
          <div class="metrics">
            ${metric("Düse",formatTemp(stateValue(this._hass,map.nozzle)))}
            ${metric("Bett",formatTemp(stateValue(this._hass,map.bed)))}
          </div>
          ${basicButtons}
          <div class="footer"><span>3D-Printer Control Center - ${VERSION}</span></div>
        `);
        this.bind(map); return;
      }

      if(size==="m"){
        this.shadowRoot.innerHTML=frame(this._config,`
          ${header}
          <div class="two">
            <div class="stack">
              ${mediaHtml(this._hass,map,this._config,this.cameraVisible(),online,status)}
            </div>
            <div class="metrics">
              ${metric("Düse",formatTemp(stateValue(this._hass,map.nozzle)))}
              ${metric("Bett",formatTemp(stateValue(this._hass,map.bed)))}
              ${metric("Tempo",displaySpeed(this._hass,map))}
              ${metric("Transport",stateValue(this._hass,map.activeMode))}
            </div>
          </div>
          ${basicButtons}
          <div class="footer"><span>3D-Printer Control Center - ${VERSION}</span><a href="${DOCS}" target="_blank">${DOCS}</a></div>
        `);
        this.bind(map); return;
      }

      this.shadowRoot.innerHTML=frame(this._config,`
        ${header}
        <div class="complete-wide">
          <div class="complete-wide-main">
            <div class="two">
              <div class="stack">
                ${mediaHtml(this._hass,map,this._config,this.cameraVisible(),online,status)}
              </div>
              <div class="stack">
                <div class="metrics">
              ${metric("Düse",formatTemp(stateValue(this._hass,map.nozzle)))}
              ${metric("Bett",formatTemp(stateValue(this._hass,map.bed)))}
              ${metric("Firmware",stateValue(this._hass,map.firmware))}
              ${metric("IP",stateValue(this._hass,map.activeHost))}
              ${metric("Transport",stateValue(this._hass,map.activeMode))}
              ${metric("WLAN",stateValue(this._hass,map.wifi))}
                </div>
                ${basicButtons}
                <div class="toolbar">
                  <button data-action="record">âº Aufnahme</button>
                  <button data-action="timelapse">â± Zeitraffer</button>
                </div>
              </div>
            </div>
          </div>
          <div class="complete-wide-side">
            <div class="ams-title-row"><h3>${esc(amsName)}</h3></div>
          ${size==="xl"?amsMetaHtml(this._hass,map):""}
          <div class="slots">
            ${map.amsSlots.map((entityId,index)=>renderSlot(this._hass,entityId,`Slot ${index+1}`, Number.parseInt(stateValue(this._hass,map.activeAmsSlot,"-1"),10)===index)).join("")}
            ${this._config.show_external_spool!==false?renderSlot(this._hass,map.externalSpool,"Extern",Number.parseInt(stateValue(this._hass,map.activeAmsSlot,"-1"),10)===254):""}
          </div>
        </div>
        ${size==="xl"&&this._config.show_diagnostics!==false?`
          <div class="row">
            <span class="badge">Drucker: ${esc(modelName)}</span>
            <span class="badge">${tr("Kamera")}: ${esc(cameraCompact)}</span>
            <span class="badge">Mode: ${esc(stateValue(this._hass,map.configuredMode))}</span>
            <span class="badge">Transport: ${esc(stateValue(this._hass,map.activeMode))}</span>
            <span class="badge">IP: ${esc(stateValue(this._hass,map.activeHost))}</span>
          </div>`:""}
          </div>
        </div>
        <div class="footer"><span>3D-Printer Control Center ${VERSION}</span><a href="${DOCS}" target="_blank">${DOCS}</a></div>
      `);
      this.bind(map);
    }
  }

  class SimpleCard extends BaseCard {
    constructor(kind,renderer){super();this.kind=kind;this.renderer=renderer}
  }

  class HeaderCard extends BaseCard {
    static getConfigElement(){return editorFor("header")} static getStubConfig(){return commonStub()}
    render(){if(!this._hass||!this._config)return;const m=this.map();if(!m)return this.empty();const o=isPrinterOnline(this._hass,m);this.shadowRoot.innerHTML=frame(this._config,`<div class="row"><img class="brand" src="${LOGO}"><div><h2>${esc(this._config.title)}</h2><div class="row"><span class="badge ${o?"online":"offline"}">${o?"â— Online":"â— Offline"}</span><span class="badge">${esc(stateValue(this._hass,m.printStatus))}</span></div></div></div>`)}
  }
  class ProgressCard extends BaseCard {
    static getConfigElement(){return editorFor("progress")} static getStubConfig(){return {...commonStub(),title:"Druckfortschritt"}}
    render(){if(!this._hass||!this._config)return;const m=this.map();if(!m)return this.empty();const p=Math.max(0,Math.min(100,numberValue(this._hass,m.progress,0)));this.shadowRoot.innerHTML=frame(this._config,`<h3>${esc(this._config.title)}</h3><strong>${esc(stateValue(this._hass,m.task,"Kein aktiver Druckauftrag"))}</strong><div class="progress"><span style="width:${p}%"></span></div><div class="row"><span class="badge">${p}%</span><span class="badge">Schicht ${esc(stateValue(this._hass,m.layer))}/${esc(stateValue(this._hass,m.layers))}</span><span class="badge">${esc(formatRemaining(stateValue(this._hass,m.remaining,0)))}</span></div>`)}
  }
  class TelemetryCard extends BaseCard {
    static getConfigElement(){return editorFor("telemetry")} static getStubConfig(){return {...commonStub(),title:"Telemetrie"}}
    render(){if(!this._hass||!this._config)return;const m=this.map();if(!m)return this.empty();this.shadowRoot.innerHTML=frame(this._config,`<h3>${esc(this._config.title)}</h3><div class="metrics">${metric("Düse",formatTemp(stateValue(this._hass,m.nozzle)))}${metric("Bett",formatTemp(stateValue(this._hass,m.bed)))}${metric("Tempo",displaySpeed(this._hass,m))}${metric("WLAN",stateValue(this._hass,m.wifi))}${metric("Firmware",stateValue(this._hass,m.firmware))}${metric("Transport",stateValue(this._hass,m.activeMode))}${metric("IP",stateValue(this._hass,m.activeHost))}</div>`)}
  }
  class ControlsCard extends BaseCard {
    static getConfigElement(){return editorFor("controls")} static getStubConfig(){return {...commonStub(),title:"Steuerung"}}
    render(){if(!this._hass||!this._config)return;const m=this.map();if(!m)return this.empty();const status=stateValue(this._hass,m.printStatus,"idle");this.shadowRoot.innerHTML=frame(this._config,`<h3>${esc(this._config.title)}</h3><div class="toolbar"><button data-action="light">💡 Licht</button><button data-action="toggle-camera">📷 Livebild ${this.cameraVisible()?"ausblenden":"anzeigen"}</button><button data-action="camera-popout">â†— Großansicht</button>${printControlButtons(status)}<button data-action="refresh">â†» Aktualisieren</button></div>`);this.bind(m)}
  }
  class AmsCard extends BaseCard {
    static getConfigElement(){return editorFor("ams")} static getStubConfig(){return {...commonStub(),title:"AMS"}}
    render(){if(!this._hass||!this._config)return;const m=this.map();if(!m)return this.empty();const configuredTitle=String(this._config.title||"").trim();const title=configuredTitle&&configuredTitle!=="AMS / BMCU-370"?configuredTitle:amsDisplayName(this._hass,m);this.shadowRoot.innerHTML=frame(this._config,`<div class="ams-title-row"><h3>${esc(title)}</h3></div>${this._config.show_diagnostics!==false?amsMetaHtml(this._hass,m):""}<div class="slots">${m.amsSlots.map((e,i)=>renderSlot(this._hass,e,`Slot ${i+1}`,Number.parseInt(stateValue(this._hass,m.activeAmsSlot,"-1"),10)===i)).join("")}${this._config.show_external_spool!==false?renderSlot(this._hass,m.externalSpool,"Extern",Number.parseInt(stateValue(this._hass,m.activeAmsSlot,"-1"),10)===254):""}</div>`)}
  }
  class NetworkCard extends BaseCard {
    static getConfigElement(){return editorFor("network")} static getStubConfig(){return {...commonStub(),title:"Netzwerkdiagnose"}}
    render(){if(!this._hass||!this._config)return;const m=this.map();if(!m)return this.empty();this.shadowRoot.innerHTML=frame(this._config,`<h3>${esc(this._config.title)}</h3><div class="metrics">${metric("IP",stateValue(this._hass,m.activeHost))}${metric("Transport",stateValue(this._hass,m.activeMode))}${metric("WLAN",stateValue(this._hass,m.wifi))}</div><div class="toolbar"></div>`);this.bind(m)}
  }
  class FirmwareCard extends BaseCard {
    static getConfigElement(){return editorFor("firmware")} static getStubConfig(){return {...commonStub(),title:"Firmware"}}
    render(){if(!this._hass||!this._config)return;const m=this.map();if(!m)return this.empty();this.shadowRoot.innerHTML=frame(this._config,`<h3>${esc(this._config.title)}</h3>${metric("Status",stateValue(this._hass,m.firmware))}<p class="muted">Keine automatischen Firmware-Updates.</p>`)}
  }
  class MediaCard extends BaseCard {
    static getConfigElement(){return editorFor("media")} static getStubConfig(){return {...commonStub(),title:"Kamera / Modellvorschau",card_size:"l"}}
    render(){if(!this._hass||!this._config)return;const m=this.map();if(!m)return this.empty();const o=isPrinterOnline(this._hass,m),s=stateValue(this._hass,m.printStatus);this.shadowRoot.innerHTML=frame(this._config,`<div class="row between"><h3>${esc(this._config.title)}</h3><div class="toolbar"><button data-action="toggle-camera">📷 Livebild ${this.cameraVisible()?"ausblenden":"anzeigen"}</button><button data-action="camera-popout">â†— Großansicht</button></div></div>${mediaHtml(this._hass,m,this._config,this.cameraVisible(),o,s)}`)}
  }
  class BrandCard extends BaseCard {
    static getConfigElement(){return editorFor("brand")} static getStubConfig(){return commonStub()}
    render(){if(!this._config)return;this.shadowRoot.innerHTML=frame(this._config,`<div class="row"><img class="brand" src="${LOGO}"><div><h2>${esc(this._config.title)}</h2><small>${DOCS}</small></div></div>`)}
  }
  class GlowFrameCard extends BaseCard {
    static getConfigElement(){return editorFor("frame")} static getStubConfig(){return {...commonStub(),title:"Glow-Rahmen"}}
    render(){if(!this._config)return;this.shadowRoot.innerHTML=frame(this._config,`<h3>${esc(this._config.title)}</h3><p class="muted">Konfigurierbarer Glow-Rahmen</p>`)}
  }
  class TemplatesCard extends BaseCard {
    static getConfigElement(){return editorFor("templates")}
    static getStubConfig(){return {...commonStub(),title:"3D-Drucker-Dateimanager/Galerie",card_size:"xl"}}

    constructor(){
      super();
      this._source="archive";
      this._folder="";
      this._parent="";
      this._items=[];
      this._stats={files:0,folders:0,bytes:0};
      this._selectedFiles=[];
      this._selectedPaths=new Set();
      this._loading=false;
      this._error="";
      this._uploadActive=false;
      this._uploadProgress=0;
      this._uploadLabel="";
      this._uploadCompletedFiles=0;
      this._uploadTotalFiles=0;
      this._uploadQueueErrors=[];
      this._zipImportActive=false;
      this._previewItem=null;
      this._dialog=null;
      this._folders=[];
      this._viewMode="grid";
      this._filter="";
      this._sortMode="name";
      this._workspaceOpen=false;
      this._restoreSearchFocus=false;
      this._searchCaretStart=0;
      this._searchCaretEnd=0;
      this._contextMenu=null;
      this._previewZoom=1;
      this._previewRotate=0;
      this._previewAnchor=null;
      this._notice="";
      this._treeFolders=[];
      this._treeSource="";
      this._portal=null;
      this._dialogUiState=null;
      this._lastUiSerial="";
      this._backgroundUploadTask=PCC_UPLOADS.snapshot();
      this._backgroundUploadUnsubscribe=null;
    }

    connectedCallback(){
      this.ensureBackgroundUploadSubscription();
    }

    disconnectedCallback(){
      if(this._backgroundUploadUnsubscribe){this._backgroundUploadUnsubscribe();this._backgroundUploadUnsubscribe=null}
    }

    ensureBackgroundUploadSubscription(){
      if(this._backgroundUploadUnsubscribe)return;
      this._backgroundUploadUnsubscribe=PCC_UPLOADS.subscribe((task)=>{
        this._backgroundUploadTask=task;
        if(this.isConnected&&this._config)this.render();
      });
    }

    set hass(hass){
      const first=!this._hass;
      this._hass=hass;
      PCC_UPLOADS.setHass(hass);
      this.ensureBackgroundUploadSubscription();
      if(!this._config)return;
      const map=this.map();
      const serial=map?this.serial(map):"";
      const changed=serial!==this._lastUiSerial;
      this._lastUiSerial=serial;
      if(first||changed||!this.shadowRoot?.childElementCount)this.render();
    }

    getCardSize(){return 22}
    getGridOptions(){
      return {
        columns:"full",
        min_columns:12,
      };
    }

    serial(map){return String(stateValue(this._hass,map.serial,map.prefix))}
    async ws(payload){return this._hass.callWS(payload)}

    async refreshTree(map,force=false){
      if(!force&&this._treeSource===this._source&&this._treeFolders.length)return;
      try{
        const data=await this.ws({
          type:`printer_control_center/${this._source}/tree`,
          serial:this.serial(map),
        });
        this._treeFolders=data.folders||[];
        this._treeSource=this._source;
      }catch(error){
        this._treeFolders=[{path:this._source==="sd"?"/":"",name:this._source==="sd"?"SD-Karte":"Hauptordner"}];
        this._treeSource=this._source;
        this._notice=`Ordnerbaum konnte nicht vollständig geladen werden: ${String(error?.message||error)}`;
      }
    }

    async load(map,force=false){
      if(this._loading)return;
      this._loading=true;
      this._error="";
      this.render();

      try{
        const serial=this.serial(map);
        const data=this._source==="sd"
          ? await this.ws({type:"printer_control_center/sd/list",serial,folder:this._folder||"/",force:Boolean(force)})
          : await this.ws({type:"printer_control_center/archive/list",serial,folder:this._folder});

        this._items=data.items||[];
        this._stats=data.stats||{files:0,folders:0,bytes:0};
        this._folder=data.folder||"";
        this._parent=data.parent||"";
        await this.refreshTree(map,force);
        this.pruneSelection();
      }catch(error){
        this._error=`Fehler: ${String(error?.message||error)}`;
      }finally{
        this._loading=false;
        this.render();
      }
    }

    visibleItems(){
      const needle=String(this._filter||"").trim().toLowerCase();
      const items=[...(this._items||[])].filter((item)=>{
        if(!needle)return true;
        return `${item.name||""} ${item.path||""}`.toLowerCase().includes(needle);
      });

      const compare=(a,b)=>{
        if(this._sortMode==="size"){
          return Number(b.size||0)-Number(a.size||0)||String(a.name||"").localeCompare(String(b.name||""),"de");
        }
        if(this._sortMode==="newest"){
          return Number(b.modified||0)-Number(a.modified||0)||String(a.name||"").localeCompare(String(b.name||""),"de");
        }
        return String(a.name||"").localeCompare(String(b.name||""),"de",{numeric:true});
      };

      return items.sort((a,b)=>{
        const folderDifference=(a.kind==="folder"?0:1)-(b.kind==="folder"?0:1);
        return folderDifference||compare(a,b);
      });
    }

    pruneSelection(){
      const valid=new Set((this._items||[]).map((item)=>String(item.path||"")));
      for(const path of [...this._selectedPaths]){
        if(!valid.has(path))this._selectedPaths.delete(path);
      }
    }

    isSelected(path){
      return this._selectedPaths.has(String(path||""));
    }

    toggleSelection(path,checked){
      const normalized=String(path||"");
      if(!normalized)return;
      if(checked)this._selectedPaths.add(normalized);
      else this._selectedPaths.delete(normalized);
      this.render();
    }

    visibleSelectableItems(){
      return this.visibleItems().filter((item)=>String(item.path||""));
    }

    allVisibleSelected(){
      const items=this.visibleSelectableItems();
      return Boolean(items.length)&&items.every((item)=>this._selectedPaths.has(String(item.path)));
    }

    someVisibleSelected(){
      const items=this.visibleSelectableItems();
      return items.some((item)=>this._selectedPaths.has(String(item.path)));
    }

    selectAllVisible(){
      for(const item of this.visibleSelectableItems()){
        this._selectedPaths.add(String(item.path));
      }
      this.render();
    }

    deselectAllVisible(){
      for(const item of this.visibleSelectableItems()){
        this._selectedPaths.delete(String(item.path));
      }
      this.render();
    }

    toggleAllVisible(checked){
      if(checked)this.selectAllVisible();
      else this.deselectAllVisible();
    }

    clearSelection(){
      this._selectedPaths.clear();
      this.render();
    }

    selectedItems(){
      const selected=this._selectedPaths;
      return (this._items||[]).filter((item)=>selected.has(String(item.path||"")));
    }

    normalizedBulkItems(){
      const items=this.selectedItems().sort((a,b)=>String(a.path).localeCompare(String(b.path),"de"));
      return items.filter((item,index)=>{
        const path=String(item.path||"");
        return !items.some((candidate,candidateIndex)=>{
          if(candidateIndex===index)return false;
          const parent=String(candidate.path||"").replace(/\/+$/,"");
          return parent && path.startsWith(`${parent}/`);
        });
      });
    }

    async upload(map){
      const files=[...(this._selectedFiles||[])];
      if(!files.length)return;
      const invalid=files.filter((file)=>!String(file.name||"").toLowerCase().endsWith(".3mf"));
      if(invalid.length){
        this._error=`Nur .3mf-Dateien sind zulässig. Nicht verwendbar: ${invalid.map((file)=>file.name).join(", ")}`;
        this.render();return;
      }
      this._error="";
      try{
        const source=this._source;
        const folder=source==="sd"?"/":this._folder;
        const result=await PCC_UPLOADS.startFiles({hass:this._hass,serial:this.serial(map),files,source,folder});
        this._selectedFiles=[];
        this._notice=`${Number(result.uploaded||0)} Datei(en) erfolgreich hochgeladen.`;
        await this.load(map,true);
      }catch(error){
        this._error=`Upload-Fehler: ${String(error?.message||error)}`;
        this.render();
      }
    }

    async exportGalleryZip(map){
      if(this._source!=="archive")return;
      const serial=encodeURIComponent(this.serial(map));
      this._notice="Galerie-ZIP wird erstellt. Der Download startet im Hintergrund â€¦";
      this.render();
      try{
        const response=await fetch(`/api/printer_control_center/archive_export/${serial}`,{headers:authHeaders(this._hass),credentials:"same-origin"});
        if(!response.ok)throw new Error(`${response.status} ${await response.text()}`);
        const blob=await response.blob();
        const disposition=String(response.headers.get("Content-Disposition")||"");
        const match=disposition.match(/filename="?([^";]+)"?/i);
        const filename=match?.[1]||`3d-printer-control-center-gallery-${Date.now()}.zip`;
        const objectUrl=URL.createObjectURL(blob);
        this.triggerHomeAssistantDownload(objectUrl,filename);
        window.setTimeout(()=>URL.revokeObjectURL(objectUrl),60_000);
        this._notice=`Galerie-ZIP exportiert: ${filename} - ${bytesLabel(blob.size)}`;
      }catch(error){this._error=`Galerie-ZIP-Export fehlgeschlagen: ${String(error?.message||error)}`}
      this.render();
    }

    async importGalleryZip(map,file){
      if(!file)return;
      if(this._source!=="archive"){
        this._error="Galerie-ZIP-Import ist nur im lokalen Archiv verfügbar.";this.render();return;
      }
      if(!String(file.name||"").toLowerCase().endsWith(".zip")){
        this._error="Bitte eine ZIP-Datei auswählen.";this.render();return;
      }
      try{
        let result;
        try{
          result=await PCC_UPLOADS.startGalleryZip({hass:this._hass,serial:this.serial(map),file,overwrite:false});
        }catch(error){
          const message=String(error?.message||error);
          if(!/existing files|overwrite/i.test(message)||!window.confirm(tr("Vorhandene Galerie-Dateien überschreiben?")))throw error;
          result=await PCC_UPLOADS.startGalleryZip({hass:this._hass,serial:this.serial(map),file,overwrite:true});
        }
        this._notice=`ZIP-Import erfolgreich: ${Number(result.imported||0)} Modelle - ${Number(result.folders||0)} Ordner - ${Number(result.overwritten||0)} überschrieben - Gegenprüfung ${result.verification==="ok"?"OK":"unbekannt"}`;
        await this.load(map,true);
      }catch(error){this._error=`Galerie-ZIP konnte nicht importiert werden: ${String(error?.message||error)}`;this.render()}
    }

    triggerHomeAssistantDownload(url,filename=""){
      const link=document.createElement("a");
      link.href=url;
      if(filename)link.download=filename;
      link.rel="noopener";
      link.style.display="none";
      this.shadowRoot.appendChild(link);
      link.click();
      link.remove();
    }

    slicerFilename(path,suffix=".3mf"){
      const original=String(path||"model").split("/").pop()||"model";
      const safe=original.replace(/[/\\?#]/g,"_");
      return safe.toLowerCase().endsWith(suffix.toLowerCase())
        ? safe
        : `${safe.includes(".")?safe.replace(/\.[^.]*$/,""):safe}${suffix}`;
    }

    openBambuStudio(downloadUrl){
      const absolute=new URL(downloadUrl,window.location.origin).href;
      const protocol=`bambustudio://open?file=${encodeURIComponent(absolute)}`;
      this._notice="Bambu Studio wird über den registrierten bambustudio://-Handler geöffnet. Bei einer selbst gehosteten Home-Assistant-Adresse zeigt Bambu Studio absichtlich eine Herkunftsprüfung an. Bestätige diese mit Ja. Die direkte Übergabe nutzt die unveränderte Original-3MF-Datei nach dem Bambuddy-Prinzip; Modell-3MF und STL bleiben als manuelle Fallbacks verfügbar.";
      this.render();
      window.setTimeout(()=>{window.location.href=protocol;},0);
    }

    async signedLink(map,source,path,mode="studio",format="3mf"){
      try{
        const serial=this.serial(map);
        const data=await this.ws({
          type:"printer_control_center/studio/link",
          serial,
          source,
          path,
          format,
        });

        if(mode==="studio"){
          this.openBambuStudio(data.download_url);
          return;
        }

        const suffix=format==="stl"?".stl":".3mf";
        const name=this.slicerFilename(path,suffix);
        this.triggerHomeAssistantDownload(data.download_url,name);
        this._notice=format==="stl"
          ? "Modell-STL wurde autark in Home Assistant erzeugt und heruntergeladen."
          : "Geometrie-only Modell-3MF wurde autark in Home Assistant erzeugt und heruntergeladen.";
        this.render();
      }catch(error){
        this._error=`Modellübergabe fehlgeschlagen: ${String(error?.message||error)}`;
        this.render();
      }
    }

    async openDialog(map,type,item=null,items=null){
      const bulkItems=Array.isArray(items)?items:[];
      this._dialog={
        type,
        item,
        items:bulkItems,
        value:type==="create"?"":(item?.name||""),
        target_folder:"",
        overwrite:false,
        conflicts:[],
      };
      this._contextMenu=null;
      this._restoreSearchFocus=false;

      if(type==="move"||type==="bulk-move"){
        try{
          const data=await this.ws({
            type:`printer_control_center/${this._source}/tree`,
            serial:this.serial(map),
          });
          this._folders=data.folders||[];
        }catch(error){
          this._folders=[];
          this._error=`Ordner konnten nicht geladen werden: ${String(error?.message||error)}`;
        }
      }

      this.render();
      this.focusDialogValue();
    }

    focusDialogValue(){
      window.requestAnimationFrame(()=>{
        const input=this.overlayRoot()?.querySelector("#tc-dialog-value");
        if(!input)return;
        input.focus({preventScroll:true});
        try{
          input.setSelectionRange(input.value.length,input.value.length);
        }catch(_error){
          // Browser implementations without selection APIs are still usable.
        }
      });
    }

    closeDialog(){
      this._dialog=null;
      this._folders=[];
      this.render();
    }

    async detectMoveConflicts(map,targetFolder,items){
      const serial=this.serial(map);
      const source=this._source;
      const folder=String(targetFolder||"");
      const data=source==="sd"
        ? await this.ws({type:"printer_control_center/sd/list",serial,folder:folder||"/",force:true})
        : await this.ws({type:"printer_control_center/archive/list",serial,folder});
      const existing=new Map((data.items||[]).map((entry)=>[String(entry.name||""),entry]));
      return (items||[]).filter((current)=>{
        const hit=existing.get(String(current?.name||""));
        if(!hit)return false;
        return String(hit.path||"")!==String(current?.path||"");
      });
    }

    async askOverwrite(map,dialog,conflicts){
      this._dialog={
        ...dialog,
        type:dialog.type==="bulk-move"?"overwrite-bulk-move":"overwrite-move",
        overwrite:true,
        conflicts:[...(conflicts||[])],
      };
      this.render();
    }

    async executeDialog(map){
      const dialog=this._dialog;
      if(!dialog)return;

      try{
        const serial=this.serial(map);


      if(dialog.type==="create"){
          const name=String(dialog.value??this.overlayRoot()?.querySelector("#tc-dialog-value")?.value??"").trim();
          if(!name)return;
          await this.ws({
            type:`printer_control_center/${this._source}/create_folder`,
            serial,
            folder:this._folder,
            name,
          });
        }

        if(dialog.type==="rename"){
          const new_name=String(dialog.value??this.overlayRoot()?.querySelector("#tc-dialog-value")?.value??"").trim();
          if(!new_name||new_name===dialog.item?.name)return;
          await this.ws({
            type:`printer_control_center/${this._source}/rename`,
            serial,
            path:dialog.item.path,
            new_name,
          });
        }

        if(dialog.type==="move"||dialog.type==="overwrite-move"){
          if(!dialog.overwrite){
            const conflicts=await this.detectMoveConflicts(map,dialog.target_folder||"",[dialog.item]);
            if(conflicts.length){
              await this.askOverwrite(map,dialog,conflicts);
              return;
            }
          }
          await this.ws({
            type:`printer_control_center/${this._source}/move`,
            serial,
            path:dialog.item.path,
            target_folder:dialog.target_folder||"",
            overwrite:Boolean(dialog.overwrite),
          });
        }

        if(dialog.type==="delete"){
          await this.ws({
            type:`printer_control_center/${this._source}/delete`,
            serial,
            path:dialog.item.path,
          });
        }

        if(dialog.type==="bulk-move"||dialog.type==="overwrite-bulk-move"){
          const items=[...(dialog.items||[])].sort((a,b)=>String(b.path||"").split("/").length-String(a.path||"").split("/").length);
          if(!dialog.overwrite){
            const conflicts=await this.detectMoveConflicts(map,dialog.target_folder||"",items);
            if(conflicts.length){
              await this.askOverwrite(map,dialog,conflicts);
              return;
            }
          }
          const failures=[];
          for(const current of items){
            try{
              await this.ws({
                type:`printer_control_center/${this._source}/move`,
                serial,
                path:current.path,
                target_folder:dialog.target_folder||"",
                overwrite:Boolean(dialog.overwrite),
              });
              this._selectedPaths.delete(String(current.path||""));
            }catch(error){
              failures.push(`${current.path||current.name||"Eintrag"}: ${String(error?.message||error)}`);
            }
          }
          if(failures.length){
            throw new Error(`Mehrfach-Verschieben unvollständig: ${failures.join(" | ")}`);
          }
          this._selectedPaths.clear();
        }

        if(dialog.type==="bulk-delete"){
          const items=[...(dialog.items||[])].sort((a,b)=>String(b.path||"").split("/").length-String(a.path||"").split("/").length);
          for(const current of items){
            await this.ws({
              type:`printer_control_center/${this._source}/delete`,
              serial,
              path:current.path,
            });
          }
          this._selectedPaths.clear();
        }

        if(dialog.type==="plan"){
          await this.ws({
            type:"printer_control_center/queue/add",
            serial,
            source:this._source,
            path:dialog.item.path,
            name:dialog.item.name||dialog.item.path,
            quantity:Math.max(1,Number(dialog.quantity||1)),
            scheduled_for:String(dialog.scheduled_for||""),
            preview_data_url:String(dialog.item.preview_data_url||""),
          });
          this._notice="Modell wurde zur 3D-Druck-Warteschlange hinzugefügt.";
        }

        this.closeDialog();
        await this.load(map,true);
        if(this._source==="sd"){
          window.setTimeout(()=>this.load(map,true),350);
        }
      }catch(error){
        this._error=`Aktion fehlgeschlagen: ${String(error?.message||error)}`;
        this.closeDialog();
        try{
          await this.load(map,true);
          if(this._source==="sd")window.setTimeout(()=>this.load(map,true),450);
        }catch(_ignored){}
      }
    }

    dialogItemsHtml(items){
      if(!items?.length)return"";
      return`
        <div class="bulk-dialog-summary">
          <strong>${esc(items.length)} Einträge ausgewählt</strong>
          <div class="bulk-dialog-list">
            ${items.map((item)=>`<small>â€¢ ${esc(item.path||item.name||"")}</small>`).join("")}
          </div>
        </div>
      `;
    }

    projectCapable(item){
      return Boolean(item)&&(
        item.kind==="project"||
        String(item.name||"").toLowerCase().endsWith(".3mf")
      );
    }

    findItem(path){
      return (this._items||[]).find((item)=>String(item.path)===String(path))||null;
    }

    elementAnchor(element){
      const tile=element?.closest?.("[data-context-path]")||element;
      const rect=tile?.getBoundingClientRect?.();
      if(!rect)return null;
      return {left:rect.left,top:rect.top,right:rect.right,bottom:rect.bottom,width:rect.width,height:rect.height};
    }

    openPreview(item,element=null,anchor=null){
      if(!item)return;
      this._previewItem=item;
      this._previewZoom=1;
      this._previewRotate=0;
      this._previewAnchor=anchor||this.elementAnchor(element);
      this.render();
    }

    previewPanelStyle(){
      const safeTop=76;
      const width=Math.max(360,Math.min(980,window.innerWidth-32));
      const availableHeight=Math.max(360,window.innerHeight-safeTop-16);
      const height=Math.max(360,Math.min(690,availableHeight));
      const left=Math.max(16,Math.round((window.innerWidth-width)/2));
      const top=Math.max(safeTop,Math.round(safeTop+((availableHeight-height)/2)));
      return `left:${left}px;top:${top}px;width:${Math.round(width)}px;height:${Math.round(height)}px`;
    }

    openContextMenu(event,item){
      if(!item)return;
      event?.preventDefault?.();
      event?.stopPropagation?.();
      const safeTop=76;
      const width=278;
      const height=Math.min(680,window.innerHeight-safeTop-16);
      const anchor=this.elementAnchor(event?.currentTarget||event?.target);
      const wantedLeft=Number(event?.clientX||(anchor?.right||24));
      const wantedTop=Number(event?.clientY||(anchor?.top||safeTop));
      const left=Math.max(8,Math.min(wantedLeft,window.innerWidth-width-8));
      const top=Math.max(safeTop,Math.min(wantedTop,window.innerHeight-height-8));
      this._contextMenu={item,left,top,anchor};
      this.render();
    }

    closeContextMenu(){
      this._contextMenu=null;
      this.render();
    }

    contextMenuHtml(){
      const menu=this._contextMenu;
      if(!menu?.item)return"";
      const item=menu.item;
      const folder=item.kind==="folder";
      const project=this.projectCapable(item);
      const action=(name,label,icon,disabled=false)=>`
        <button data-context-action="${esc(name)}" ${disabled?"disabled":""}>
          <span>${icon}</span><span>${esc(label)}</span>
        </button>
      `;

      return`
        <div class="archive-context-backdrop" data-context-close></div>
        <div class="archive-context-menu" style="left:${Number(menu.left||8)}px;top:${Number(menu.top||8)}px">
          ${folder
            ? action("open-folder","Öffnen","📁")
            : `
              ${action("print","Drucken â€¦","ðŸ–¨",!project)}
              ${action("plan","Planen â€¦","ðŸ—“",!project)}
              ${action("model-open","In Bambu Studio öffnen (Original-3MF)","â†—",!project)}
              ${action("studio-open","In 3D-Studio öffnen","[S]",!project)}
              ${action("model-download","Modell-3MF herunterladen","â¬‡",!project)}
              ${action("stl-download","Modell-STL herunterladen","â¬‡",!project)}
              ${action("preview","3D-Vorschau","â—ˆ")}
              <div class="archive-context-separator"></div>
              ${action("photos","Fotos ansehen","â–£",true)}
              ${action("add-project","Zu Projekt hinzufügen","ï¼‹",true)}
              ${action("print-log","Druckprotokoll","â˜·",true)}
            `
          }
          <div class="archive-context-separator"></div>
          ${action("rename","Umbenennen","âœŽ")}
          ${action("move","Verschieben","â‡¢")}
          ${action("delete","Löschen","🗑")}
        </div>
      `;
    }

    async projectLink(map,source,path,mode="download"){
      try{
        const data=await this.ws({
          type:"printer_control_center/project/link",
          serial:this.serial(map),
          source,
          path,
        });
        const absolute=data.absolute_download_url||`${window.location.origin}${data.download_url}`;
        const name=String(path||"project.3mf").split("/").pop()||"project.3mf";

        if(mode==="copy"){
          await navigator.clipboard.writeText(absolute);
          this._notice="Download-Link wurde für fünf Minuten in die Zwischenablage kopiert.";
          this.render();
          return;
        }

        if(mode==="studio"){
          this.openBambuStudio(data.download_url);
          return;
        }

        this.triggerHomeAssistantDownload(data.download_url,name);
        this._notice="Originaldatei wurde aus Home Assistant heruntergeladen.";
        this.render();
      }catch(error){
        this._error=`Projekt-Download fehlgeschlagen: ${String(error?.message||error)}`;
        this.render();
      }
    }


    defaultStudioTransform(){
      return {x:0,y:0,z:0,rx:0,ry:0,rz:0,scale:100,sx:100,sy:100,sz:100};
    }

    buildStudioPlanFromItem(map,item){
      const serial=this.serial(map);
      const source=this._source==="sd"?"sd":"archive";
      const path=String(item?.path||"");
      const name=String(item?.name||path.split("/").filter(Boolean).pop()||"3MF model");
      const now=new Date().toISOString();
      return {
        version: VERSION,
        schema: "printer-control-center.v5.gallery-handoff",
        source,
        origin: source,
        serial,
        created_at: now,
        updated_at: now,
        modelName: name,
        file_name: name,
        filename: name,
        file_path: path,
        path,
        modelKey: `${source}:${path}`,
        model: {
          name,
          path,
          source,
          size: Number(item?.size||0),
          modified: item?.modified||null,
          preview_data_url: item?.preview_data_url||""
        },
        transform: this.defaultStudioTransform(),
        profile_context: {},
        real_slicing_enabled: false,
        direct_print_enabled: false,
        status: "prepared",
        stage: "waiting",
        message: "Aus Galerie/Dateimanager an 3D-Studio uebergeben. Echter Slicer-Lauf ist deaktiviert."
      };
    }

    async openInStudio(map,item){
      if(!item)return;
      if(!this.projectCapable(item)){
        this._error="Nur 3MF-Projektdateien koennen an das 3D-Studio uebergeben werden.";
        this.render();
        return;
      }

      try{
        const plan=this.buildStudioPlanFromItem(map,item);
        const response=await this.ws({
          type:"printer_control_center/studio_jobs/create",
          serial:this.serial(map),
          plan
        });
        const job=response?.job||response||null;
        window.PCC_STUDIO_HANDOFF?.broadcast?.(job);
        this._contextMenu=null;
        this._previewItem=null;
        this._notice=`3D-Studio-Job erstellt: ${item.name}. Oeffne die Studio-Seite und nutze "Plan prüfen".`;
        this.render();
      }catch(error){
        this._error=`3D-Studio-Handoff fehlgeschlagen: ${String(error?.message||error)}`;
        this.render();
      }
    }

    showPreparedDialog(type,item){
      this._dialog={type,item,quantity:1,scheduled_for:""};
      this._contextMenu=null;
      this.render();
    }

    handleContextAction(map,action,item){
      const contextAnchor=this._contextMenu?.anchor||null;
      this._contextMenu=null;
      if(!item)return;

      if(action==="open-folder"){
        this._folder=item.path||"";
        this._selectedPaths.clear();
        this._previewItem=null;
        this._previewAnchor=null;
        this.load(map,true);
        return;
      }

      if(action==="preview"){
        this.openPreview(item,null,contextAnchor);
        return;
      }

      if(action==="download"){
        this.projectLink(map,this._source,item.path,"download");
        return;
      }

      if(action==="copy-link"){
        this.projectLink(map,this._source,item.path,"copy");
        return;
      }

      if(action==="project-open"){
        this.projectLink(map,this._source,item.path,"studio");
        return;
      }

      if(action==="model-open"){
        // Bambuddy-compatible desktop handoff: serve the unchanged original 3MF.
        // Geometry-only 3MF/STL generation remains available only as an explicit download fallback.
        this.projectLink(map,this._source,item.path,"studio");
        return;
      }

      if(action==="studio-open"){
        this.openInStudio(map,item);
        return;
      }

      if(action==="model-download"){
        this.signedLink(map,this._source,item.path,"download","3mf");
        return;
      }

      if(action==="stl-download"){
        this.signedLink(map,this._source,item.path,"download","stl");
        return;
      }

      if(action==="print"||action==="plan"){
        this.showPreparedDialog(action,item);
        return;
      }

      if(action==="rename"||action==="move"||action==="delete"){
        this.openDialog(map,action,item);
        return;
      }

      this._notice="Diese Funktion ist als sichere Erweiterungsstufe vorbereitet, aber noch nicht freigeschaltet.";
      this.render();
    }

    folderDepth(folder){
      const raw=String(folder?.path||"");
      if(this._source==="sd"){
        const parts=raw.replace(/^\/+/,"").split("/").filter(Boolean);
        return parts.length;
      }
      return raw.split("/").filter(Boolean).length;
    }

    folderCaption(folder){
      const raw=String(folder?.path||"");
      if(this._source==="sd"){
        if(raw==="/"||!raw)return "SD-Karte";
        return raw.replace(/^\/+/,"");
      }
      return raw||"Hauptordner";
    }

    folderOptionHtml(folder,selectedPath){
      const depth=this.folderDepth(folder);
      const caption=this.folderCaption(folder);
      const root=depth===0;
      return `
        <button class="folder-option ${folder.path===(selectedPath||"")?"active":""}" data-target-folder="${esc(folder.path)}" title="${esc(caption)}">
          <span class="folder-option-main ${root?"is-root":"has-parent"}" style="--tc-tree-depth:${Math.min(depth,8)}">
            <span class="folder-option-tree-icon">${root?"âŒ‚":"â†³"}</span>
            <span class="folder-option-name">${esc(folder.name||caption)}</span>
          </span>
          ${folder.path===(selectedPath||"")?"<span>âœ“</span>":""}
        </button>
      `;
    }

    dialogHtml(){
      const dialog=this._dialog;
      if(!dialog)return"";

      const title={
        create:"Neuen Ordner erstellen",
        rename:"Eintrag umbenennen",
        move:"Eintrag verschieben",
        "overwrite-move":"Eintrag überschreiben?",
        delete:"Eintrag löschen",
        "bulk-move":"Mehrere Einträge verschieben",
        "overwrite-bulk-move":"Vorhandene Einträge überschreiben?",
        "bulk-delete":"Mehrere Einträge löschen",
        print:"Druckauftrag vorbereiten",
        plan:"Druckauftrag planen",
      }[dialog.type]||"3D-Drucker-Dateimanager/Galerie";

      let body="";

      if(dialog.type==="create"){
        body=`
          <label>Ordnername<input id="tc-dialog-value" value="${esc(dialog.value||"")}"></label>
          <p class="muted">Der Ordner wird im aktuell geöffneten Archivpfad angelegt.</p>
        `;
      }

      if(dialog.type==="rename"){
        body=`
          <label>Neuer Name<input id="tc-dialog-value" value="${esc(dialog.value??dialog.item?.name??"")}"></label>
          <p class="muted">${esc(dialog.item?.path||"")}</p>
        `;
      }

      if(dialog.type==="delete"){
        body=`
          <p>Soll dieser Eintrag wirklich gelöscht werden?</p>
          <p><strong>${esc(dialog.item?.path||"")}</strong></p>
          <p class="muted">Bei Ordnern werden auch die enthaltenen Dateien entfernt.</p>
        `;
      }

      if(dialog.type==="bulk-delete"){
        body=`
          <p>Sollen diese ausgewählten Einträge wirklich gelöscht werden?</p>
          ${this.dialogItemsHtml(dialog.items||[])}
          <p class="muted">Ausgewählte Ordner werden einschließlich ihrer enthaltenen Dateien entfernt.</p>
        `;
      }

      if(dialog.type==="move"||dialog.type==="bulk-move"){
        body=`
          <p>Wähle den Zielordner für:</p>
          ${dialog.type==="bulk-move"
            ? this.dialogItemsHtml(dialog.items||[])
            : `<p><strong>${esc(dialog.item?.path||"")}</strong></p>`
          }
          <div class="folder-list">
            ${(this._folders||[]).map((folder)=>this.folderOptionHtml(folder,dialog.target_folder||"")).join("")||`<p class="muted">Keine Zielordner vorhanden.</p>`}
          </div>
        `;
      }

      if(dialog.type==="overwrite-move"||dialog.type==="overwrite-bulk-move"){
        const conflicts=dialog.conflicts||[];
        body=`
          <p>Im Zielordner existieren bereits gleichnamige Einträge.</p>
          <div class="bulk-dialog-summary">
            <strong>${esc(conflicts.length)} Konflikt(e)</strong>
            <div class="bulk-dialog-list">
              ${conflicts.map((item)=>`<small>â€¢ ${esc(item.path||item.name||"")}</small>`).join("")}
            </div>
          </div>
          <p class="muted">Mit â€žÜberschreibenâ€œ werden die vorhandenen Zieldateien oder Zielordner ersetzt.</p>
        `;
      }

      if(dialog.type==="print"){
        body=`
          <p><strong>${esc(dialog.item?.name||"")}</strong></p>
          <p class="muted">Die unveränderte Original-3MF-Datei wird in Bambu Studio geöffnet. Dort kannst du den Druck kontrolliert starten.</p>
          <button class="primary" data-dialog-project-open>â†— In Bambu Studio öffnen</button>
        `;
      }

      if(dialog.type==="plan"){
        body=`
          <p><strong>${esc(dialog.item?.name||"")}</strong></p>
          <label>Stückzahl<select id="tc-dialog-quantity">${this.quantityOptions(dialog.quantity||1)}</select></label>
          <label>Geplanter Zeitpunkt optional<input id="tc-dialog-scheduled" type="datetime-local" value="${esc(dialog.scheduled_for||"")}"></label>
          <p class="muted">Der bestehende Menüpunkt Planen legt das Modell in der persistenten 3D-Druck-Warteschlange ab.</p>
        `;
      }

      const destructive=dialog.type==="delete"||dialog.type==="bulk-delete";
      const prepared=dialog.type==="print";

      return`
        <div class="tc-overlay" data-dialog-backdrop>
          <div class="tc-dialog" data-dialog-panel>
            <div class="row between">
              <h3>${esc(title)}</h3>
              <button data-dialog-close>âœ•</button>
            </div>
            ${body}
            <div class="toolbar">
              <button data-dialog-close>Abbrechen</button>
              ${prepared
                ? ""
                : `<button class="${destructive?"danger":"primary"}" data-dialog-confirm>
                    ${destructive?"Löschen":(dialog.type==="overwrite-move"||dialog.type==="overwrite-bulk-move")?"Überschreiben":dialog.type==="plan"?"Zur Warteschlange hinzufügen":"Übernehmen"}
                  </button>`
              }
            </div>
          </div>
        </div>
      `;
    }

    itemHtml(item){
      const folder=item.kind==="folder";
      const project=this.projectCapable(item);
      const preview=item.preview_data_url||"";
      const selected=this.isSelected(item.path);
      const typeLabel=folder?"Ordner":project?"3MF-Projekt":"Datei";
      const modified=galleryDateLabel(item.modified);

      return`
        <article class="file-row-with-preview ${selected?"is-selected":""}"
          data-context-path="${esc(item.path)}">
          <label class="select-check" title="Für Mehrfachaktion auswählen">
            <input type="checkbox" data-select-path="${esc(item.path)}" ${selected?"checked":""}>
          </label>
          <button class="archive-tile-menu" data-context-button="${esc(item.path)}" title="Aktionen">â‹®</button>

          ${folder
            ? `<button class="file-preview-button folder-preview" data-open-folder="${esc(item.path)}" title="Ordner öffnen">📁</button>`
            : `<button class="file-preview-button" data-preview-path="${esc(item.path)}" title="3D-Vorschau öffnen">
                ${preview?`<img src="${esc(preview)}" alt="${esc(item.name)}">`:"📄"}
              </button>`
          }

          <div class="file-meta">
            <small class="archive-model-id" title="${esc(item.path)}">${esc(item.path||"/")}</small>
            <span class="file-name" title="${esc(item.name)}">${esc(item.name)}</span>
            <div class="archive-model-tags">
              <span class="archive-model-tag">${esc(typeLabel)}</span>
              ${folder?"":`<span class="archive-model-tag">${esc(bytesLabel(item.size||0))}</span>`}
              <span class="archive-model-tag">${esc(modified)}</span>
            </div>
          </div>

          <div class="file-actions">
            ${folder
              ? `<button class="primary" data-open-folder="${esc(item.path)}">📁 Öffnen</button>
                 <button data-dialog-type="rename" data-dialog-path="${esc(item.path)}">âœŽ Umbenennen</button>
                 <button data-context-button="${esc(item.path)}">â‹®</button>`
              : `
                ${project?`<button class="primary" data-context-direct="print" data-context-path="${esc(item.path)}">ðŸ–¨ Drucken</button>`:`<button data-context-direct="download" data-context-path="${esc(item.path)}">â¬‡ Download</button>`}
                <button data-preview-path="${esc(item.path)}">â—ˆ 3D-Vorschau</button>
                <button data-context-button="${esc(item.path)}" title="Weitere Aktionen">â‹®</button>
              `
            }
          </div>
        </article>
      `;
    }

    launcherPreviewHtml(items){
      const previews=items
        .filter((item)=>item.kind!=="folder")
        .slice(0,3);

      if(!previews.length){
        return`<div class="muted">Noch keine Dateien für eine Vorschau vorhanden.</div>`;
      }

      return`
        <div class="archive-launcher-previews">
          ${previews.map((item)=>`
            <button class="archive-launcher-preview" data-launch-preview-path="${esc(item.path)}" title="${esc(item.name)}">
              <span class="archive-launcher-preview-media">
                ${item.preview_data_url
                  ? `<img src="${esc(item.preview_data_url)}" alt="${esc(item.name)}">`
                  : "📄"
                }
              </span>
              <span class="archive-launcher-preview-name">${esc(item.name)}</span>
            </button>
          `).join("")}
        </div>
      `;
    }

    folderTreeHtml(){
      const root=this._source==="sd"?"/":"";
      const current=String(this._folder||root);
      const sourceFolders=(this._treeFolders||[]).length
        ? this._treeFolders
        : [{path:root,name:this._source==="sd"?"SD-Karte":"Hauptordner"}];
      const seen=new Set();
      const folders=[];
      for(const folder of sourceFolders){
        const path=String(folder?.path??root);
        if(seen.has(path))continue;
        seen.add(path);
        folders.push({path,name:String(folder?.name||path||"Hauptordner")});
      }
      if(!seen.has(root))folders.unshift({path:root,name:this._source==="sd"?"SD-Karte":"Hauptordner"});
      return folders.map((folder)=>{
        const normalized=String(folder.path||root);
        const depth=normalized===root?0:normalized.replace(/^\/+|\/+$/g,"").split("/").filter(Boolean).length;
        const active=normalized===current;
        return `<button class="archive-tree-folder ${active?"active":""}" data-folder="${esc(normalized)}" style="--tc-folder-depth:${depth}">
          <span>${depth?"📁":"âŒ‚"}</span><span>${esc(folder.name||"Hauptordner")}</span>
        </button>`;
      }).join("");
    }

    previewHtml(){
      const item=this._previewItem;
      if(!item)return"";
      const project=this.projectCapable(item);

      return`
        <div class="archive-preview-overlay" data-preview-backdrop>
          <div class="archive-preview-panel" data-preview-panel style="${this.previewPanelStyle()}">
            <div class="archive-preview-stage"
              style="--tc-preview-zoom:${Number(this._previewZoom||1)};--tc-preview-rotate:${Number(this._previewRotate||0)}deg">
              ${item.preview_data_url
                ? `<img src="${esc(item.preview_data_url)}" alt="${esc(item.name)}">`
                : `<div class="media-empty"><div><strong>Keine eingebettete Vorschau</strong><small>${esc(item.name)}</small></div></div>`
              }
            </div>

            <aside class="archive-preview-toolbar">
              <div class="row between">
                <h3>${esc(item.name)}</h3>
                <button data-preview-close>âœ•</button>
              </div>
              <small>${esc(item.path||"")}</small>
              <span class="badge">${esc(bytesLabel(item.size||0))}</span>

              <div class="archive-preview-controls">
                <button data-preview-transform="zoom-out">-</button>
                <button data-preview-transform="zoom-in">+</button>
                <button data-preview-transform="rotate">â†»</button>
                <button data-preview-transform="reset">âŸ²</button>
              </div>

              ${project?`
                <button class="primary" data-context-direct="print" data-context-path="${esc(item.path)}">ðŸ–¨ Drucken â€¦</button>
                <button data-context-direct="plan" data-context-path="${esc(item.path)}">ðŸ—“ Planen â€¦</button>
                <button class="primary" data-context-direct="model-open" data-context-path="${esc(item.path)}">â†— In Bambu Studio öffnen (Original-3MF)</button>
                <button data-context-direct="studio-open" data-context-path="${esc(item.path)}">[S] In 3D-Studio öffnen</button>
                <button data-context-direct="model-download" data-context-path="${esc(item.path)}">â¬‡ Modell-3MF herunterladen</button>
                <button data-context-direct="stl-download" data-context-path="${esc(item.path)}">â¬‡ Modell-STL herunterladen</button>
              `:""}

              ${project?"":`<button data-context-direct="download" data-context-path="${esc(item.path)}">â¬‡ Download</button>`}
              <button data-dialog-type="rename" data-dialog-path="${esc(item.path)}">âœŽ Umbenennen</button>
              <button data-dialog-type="move" data-dialog-path="${esc(item.path)}">â‡¢ Verschieben</button>
              <button class="danger" data-dialog-type="delete" data-dialog-path="${esc(item.path)}">🗑 Löschen</button>
              <button data-preview-close>âœ• Vorschau schließen</button>
            </aside>
          </div>
        </div>
      `;
    }


    ensurePortal(){
      if(this._portal?.isConnected)return this._portal;
      const portal=document.createElement("div");
      portal.setAttribute("data-printer-control-center-overlay-portal","");
      portal.style.position="fixed";
      portal.style.inset="0";
      portal.style.zIndex="2147483000";
      portal.style.display="none";
      portal.attachShadow({mode:"open"});
      document.body.appendChild(portal);
      this._portal=portal;
      return portal;
    }

    removePortal(){
      this._portal?.remove?.();
      this._portal=null;
    }

    disconnectedCallback(){
      this.removePortal();
      if(this._escapeHandler){
        window.removeEventListener("keydown",this._escapeHandler);
        this._escapeHandler=null;
      }
    }

    overlayRoot(){
      return this._portal?.shadowRoot||this.shadowRoot;
    }

    captureDialogUiState(){
      const root=this._portal?.shadowRoot;
      if(!root)return null;
      const folderList=root.querySelector(".folder-list");
      const active=root.activeElement;
      return {
        folderScrollTop:Number(folderList?.scrollTop||0),
        activeId:String(active?.id||""),
        activeTarget:String(active?.dataset?.targetFolder||""),
        start:Number.isInteger(active?.selectionStart)?active.selectionStart:null,
        end:Number.isInteger(active?.selectionEnd)?active.selectionEnd:null,
      };
    }

    restoreDialogUiState(state){
      if(!state)return;
      window.requestAnimationFrame(()=>{
        const root=this._portal?.shadowRoot;
        if(!root)return;
        const folderList=root.querySelector(".folder-list");
        if(folderList)folderList.scrollTop=Number(state.folderScrollTop||0);
        let active=null;
        if(state.activeId)active=root.querySelector(`#${CSS.escape(state.activeId)}`);
        if(!active&&state.activeTarget)active=[...root.querySelectorAll("[data-target-folder]")].find((element)=>String(element.dataset.targetFolder||"")===String(state.activeTarget));
        if(!active)return;
        active.focus({preventScroll:true});
        try{active.setSelectionRange(state.start??active.value.length,state.end??active.value.length)}catch(_error){}
      });
    }

    renderPortal(map){
      const active=Boolean(this._previewItem||this._contextMenu||this._dialog);
      if(!active){
        if(this._portal){
          this._portal.shadowRoot.innerHTML="";
          this._portal.style.display="none";
        }
        return;
      }

      const portal=this.ensurePortal();
      const root=portal.shadowRoot;
      const dialogUiState=this.captureDialogUiState();
      portal.style.display="block";
      root.innerHTML=`<style>${baseCss(this._config)}</style>${localizeHtml(this.previewHtml()+this.contextMenuHtml()+this.dialogHtml())}`;

      root.querySelector("[data-context-close]")?.addEventListener("click",()=>this.closeContextMenu());
      root.querySelectorAll("[data-context-action]").forEach((button)=>{
        button.addEventListener("click",()=>this.handleContextAction(map,button.dataset.contextAction,this._contextMenu?.item||null));
      });
      root.querySelectorAll("[data-context-direct]").forEach((button)=>{
        button.addEventListener("click",()=>this.handleContextAction(map,button.dataset.contextDirect,this.findItem(button.dataset.contextPath)));
      });
      root.querySelectorAll("[data-preview-transform]").forEach((button)=>{
        button.addEventListener("click",()=>{
          const action=button.dataset.previewTransform;
          if(action==="zoom-in")this._previewZoom=Math.min(2.4,Number(this._previewZoom||1)+.15);
          if(action==="zoom-out")this._previewZoom=Math.max(.5,Number(this._previewZoom||1)-.15);
          if(action==="rotate")this._previewRotate=(Number(this._previewRotate||0)+90)%360;
          if(action==="reset"){this._previewZoom=1;this._previewRotate=0;}
          this.render();
        });
      });
      root.querySelectorAll("[data-preview-close]").forEach((button)=>button.addEventListener("click",()=>{
        this._previewItem=null;
        this._previewAnchor=null;
        this.render();
      }));
      root.querySelector("[data-preview-backdrop]")?.addEventListener("click",(event)=>{
        if(event.target===event.currentTarget){
          this._previewItem=null;
          this._previewAnchor=null;
          this.render();
        }
      });
      root.querySelector("[data-dialog-backdrop]")?.addEventListener("click",(event)=>{
        if(event.target===event.currentTarget)this.closeDialog();
      });
      root.querySelectorAll("[data-dialog-close]").forEach((button)=>button.addEventListener("click",()=>this.closeDialog()));
      root.querySelectorAll("[data-target-folder]").forEach((button)=>button.addEventListener("click",()=>{
        if(this._dialog){
          this._dialog.target_folder=button.dataset.targetFolder||"";
          this.renderPortal(map);
        }
      }));
      const dialogValue=root.querySelector("#tc-dialog-value");
      dialogValue?.addEventListener("input",(event)=>{
        if(this._dialog)this._dialog.value=event.target.value;
      });
      root.querySelector("#tc-dialog-quantity")?.addEventListener("input",(event)=>{
        if(this._dialog)this._dialog.quantity=Math.max(1,Number(event.target.value||1));
      });
      root.querySelector("#tc-dialog-scheduled")?.addEventListener("input",(event)=>{
        if(this._dialog)this._dialog.scheduled_for=event.target.value||"";
      });
      root.querySelector("[data-dialog-confirm]")?.addEventListener("click",()=>this.executeDialog(map));
      root.querySelector("[data-dialog-project-open]")?.addEventListener("click",()=>{
        const item=this._dialog?.item;
        if(item)this.projectLink(map,this._source,item.path,"studio");
      });
      root.querySelector("[data-dialog-model-open]")?.addEventListener("click",()=>{
        const item=this._dialog?.item;
        if(item)this.projectLink(map,this._source,item.path,"studio");
      });
      this.restoreDialogUiState(dialogUiState);
      if(dialogValue&&!dialogUiState?.activeId)this.focusDialogValue();
    }

    rememberSearchFocus(input){
      this._filter=input?.value||"";
      this._searchCaretStart=Number.isInteger(input?.selectionStart)
        ? input.selectionStart
        : this._filter.length;
      this._searchCaretEnd=Number.isInteger(input?.selectionEnd)
        ? input.selectionEnd
        : this._searchCaretStart;
      this._restoreSearchFocus=true;
    }

    restoreSearchFocus(){
      if(!this._restoreSearchFocus||this._dialog||this._previewItem||this._contextMenu)return;
      const start=this._searchCaretStart;
      const end=this._searchCaretEnd;
      this._restoreSearchFocus=false;

      window.requestAnimationFrame(()=>{
        const input=this.shadowRoot?.querySelector("[data-archive-filter]");
        if(!input)return;
        input.focus({preventScroll:true});
        try{
          input.setSelectionRange(start,end);
        }catch(_error){
          // Some browser input implementations do not expose caret control.
        }
      });
    }

    resetSearch(){
      this._filter="";
      this._searchCaretStart=0;
      this._searchCaretEnd=0;
      this._restoreSearchFocus=true;
      this.render();
    }

    render(){
      const activeSearch=this.shadowRoot?.activeElement;
      if(activeSearch?.matches?.("[data-archive-filter]"))this.rememberSearchFocus(activeSearch);
      if(!this._hass||!this._config)return;
      const map=this.map();
      if(!map)return this.empty();

      const selectedFiles=[...(this._selectedFiles||[])];
      const selectedCountForUpload=selectedFiles.length;
      const selectedBytes=selectedFiles.reduce((sum,file)=>sum+Number(file.size||0),0);
      const selectedNames=selectedFiles.map((file)=>file.name);
      const stats=this._stats||{files:0,folders:0,bytes:0};
      const items=this.visibleItems();
      const selectedCount=this.selectedItems().length;
      const allVisibleSelected=this.allVisibleSelected();
      const someVisibleSelected=this.someVisibleSelected();
      const visibleSelectableCount=this.visibleSelectableItems().length;

      this.shadowRoot.innerHTML=`
        <style>
          :host {
            display:block;
            grid-column:1 / -1 !important;
            width:100%;
            max-width:none;
            min-width:0;
          }
        </style>
        ${frame(this._config,`
          <div class="archive-shell expanded archive-library-shell">
            <div class="archive-library-header">
              <div class="archive-library-heading">
                <div class="row">
                  <h2>3D-Drucker-Dateimanager/Galerie</h2>
                  <span class="badge">${this._source==="sd"?"SD-Karte":"Archiv"}</span>
                </div>
                <span class="archive-library-summary">
                  ${esc(stats.files||0)} Dateien - ${esc(stats.folders||0)} Ordner - ${esc(bytesLabel(stats.bytes||0))} belegt
                </span>
              </div>

              <div class="archive-library-header-actions">
                <button data-bulk-action="select-all" ${visibleSelectableCount?"":"disabled"}>â˜‘ Sichtbare auswählen</button>
                <span class="badge" title="Kein Zusatzhelfer erforderlich. Bambu Studio prüft selbst gehostete URLs absichtlich mit einem Herkunftsdialog.">HA-only - Original-3MF an Bambu Studio</span>
                <button class="primary" data-action="choose-upload">â¬† 3MF hochladen</button>
                ${this._source==="archive"?`<button data-action="gallery-export">â‡© Galerie-ZIP exportieren</button><button data-action="choose-zip-import">â‡§ Galerie-ZIP importieren</button>`:""}
                <button data-action="template-refresh" title="3D-Drucker-Dateimanager/Galerie aktualisieren">â†» Aktualisieren</button>
              </div>
            </div>

            <div class="archive-library-toolbar">
              <div class="archive-library-toolbar-main">
                <div class="archive-library-source">
                  <button data-source="archive" class="${this._source==="archive"?"active":""}">â–£ Archiv</button>
                  <button data-source="sd" class="${this._source==="sd"?"active":""}">â–¤ SD-Karte</button>
                  <button data-folder="${this._source==="archive"?"":"/"}">âŒ‚ Hauptordner</button>
                  ${this._folder&&this._folder!=="/"?`<button data-folder="${esc(this._parent)}">â†‘ Hoch</button>`:""}
                  <button data-dialog-type="create">Ã¯Â¼â€¹ Neuer Ordner</button>
                </div>

                <div class="archive-search-wrap">
                  <input class="archive-search" data-archive-filter placeholder="Dateien und Ordner durchsuchen â€¦" value="${esc(this._filter)}">
                  <button class="archive-search-reset" data-action="search-reset" title="Suche zurücksetzen" ${this._filter?"":"disabled"}>âœ•</button>
                </div>

                <select data-sort-mode title="Sortierung">
                  <option value="name" ${this._sortMode==="name"?"selected":""}>Name Aâ€“Z</option>
                  <option value="newest" ${this._sortMode==="newest"?"selected":""}>Neueste zuerst</option>
                  <option value="size" ${this._sortMode==="size"?"selected":""}>Größte zuerst</option>
                </select>
              </div>

              <div class="archive-bulkbar">
                <strong>Mehrfachauswahl: ${esc(selectedCount)}</strong>
                <label class="archive-master-select" title="Alle aktuell sichtbaren Dateien und Ordner markieren">
                  <input type="checkbox" data-select-all-visible ${allVisibleSelected?"checked":""} ${visibleSelectableCount?"":"disabled"}>
                  <span>Alle sichtbaren markieren (${esc(visibleSelectableCount)})</span>
                </label>
                <button data-bulk-action="clear" ${selectedCount?"":"disabled"}>Auswahl aufheben</button>
                <button data-bulk-action="move" ${selectedCount?"":"disabled"}>Auswahl verschieben</button>
                <button class="danger" data-bulk-action="delete" ${selectedCount?"":"disabled"}>Auswahl löschen</button>
              </div>
            </div>

            <input id="tc-upload" class="visually-hidden" type="file" accept=".3mf" multiple>
            <input id="pcc-zip-import" class="visually-hidden" type="file" accept=".zip">
            ${this._backgroundUploadTask?`
              <div class="upload-progress">
                <div class="row between">
                  <strong>â¬† Hintergrund-Upload - ${esc(PCC_UPLOADS.phaseLabel(this._backgroundUploadTask))}</strong>
                  <span>${esc(this._backgroundUploadTask.progress||0)} % - ${esc(PCC_UPLOADS.speedLabel(this._backgroundUploadTask))}</span>
                </div>
                <div class="upload-progress-track"><div class="upload-progress-fill" style="width:${esc(this._backgroundUploadTask.progress||0)}%"></div></div>
                <small>${esc(this._backgroundUploadTask.filename||"")}</small>
              </div>
            `:""}
            ${selectedCountForUpload||this._uploadActive?`
              <div class="archive-upload ${selectedCountForUpload?"has-selection":"is-idle"}">
                <div class="archive-upload-file">
                  <strong>${selectedCountForUpload
                    ? `${selectedCountForUpload} Datei(en) für den Upload ausgewählt`
                    : `Upload-Ziel: ${this._source==="sd"?"SD-Karte des Druckers":"Lokales Archiv"}`
                  }</strong>
                  <small>${selectedCountForUpload
                    ? `${esc(bytesLabel(selectedBytes))} - ${esc(selectedNames.slice(0,3).join(", "))}${selectedNames.length>3?` - +${selectedNames.length-3} weitere`:""}`
                    : "Upload wird vorbereitet â€¦"
                  }</small>
                </div>
                <button class="primary" data-action="upload-selected" ${selectedCountForUpload&&!this._uploadActive?"":"disabled"}>
                  â¬† ${selectedCountForUpload>1?`${selectedCountForUpload} Dateien hochladen`:"Ausgewählte 3MF hochladen"}
                </button>
              </div>
            `:""}

            ${this._uploadActive
              ? `
                <div class="upload-progress">
                  <div class="row between">
                    <strong>${esc(this._uploadLabel)}</strong>
                    <span>${esc(this._uploadProgress)} % - ${esc(bytesLabel(this._uploadSpeed||0))}/s</span>
                  </div>
                  <div class="upload-progress-track">
                    <div class="upload-progress-fill" style="width:${esc(this._uploadProgress)}%"></div>
                  </div>
                </div>
              `
              : ""
            }

            <div class="archive-width-warning">
              Diese Karte benötigt für die übersichtliche Dateimanager-Ansicht einen eigenen Abschnitt über die volle Dashboard-Breite.
            </div>

            <div class="archive-library-body">
              <aside class="archive-library-sidebar">
                <div class="archive-library-sidebar-title"><strong>Ordner</strong><small>${this._source==="sd"?"SD-Karte":"Lokales Archiv"}</small></div>
                <nav class="archive-library-tree">${this.folderTreeHtml()}</nav>
              </aside>

              <section class="archive-library-content">
                ${this._error?`<p class="notice">${esc(this._error)}</p>`:""}
                ${this._notice?`<p class="notice">${esc(this._notice)}</p>`:""}
                ${this._loading?`<p class="muted">Lade Daten â€¦</p>`:""}

                <div class="archive-grid">
                  ${items.map((item)=>this.itemHtml(item)).join("")||`<div class="archive-library-empty">Keine passenden Dateien oder Ordner vorhanden.</div>`}
                </div>
              </section>
            </div>

          </div>
        `,"archive-library-card")}
      `;

      this.shadowRoot.querySelectorAll("[data-source]").forEach((button)=>button.addEventListener("click",()=>{
        this._source=button.dataset.source;
        this._folder=button.dataset.source==="sd"?"/":"";
        this._items=[];
        this._treeFolders=[];
        this._treeSource="";
        this._selectedPaths.clear();
        this._previewItem=null;
        this._previewAnchor=null;
        this._filter="";
        this.load(map,true);
      }));

      this.shadowRoot.querySelector("[data-action='template-refresh']")?.addEventListener("click",()=>{
        this.load(map,true);
        if(this._source==="sd")window.setTimeout(()=>this.load(map,true),450);
      });

      if(!this._escapeHandler){
        this._escapeHandler=(event)=>{
          if(event.key!=="Escape")return;
          if(this._contextMenu){
            this._contextMenu=null;
            this.render();
            return;
          }
          if(this._previewItem){
            this._previewItem=null;
            this.render();
            return;
          }
          if(this._dialog){
            this.closeDialog();
          }
        };
        window.addEventListener("keydown",this._escapeHandler);
      }

      this.shadowRoot.querySelectorAll("[data-folder]").forEach((button)=>button.addEventListener("click",()=>{
        this._folder=button.dataset.folder||"";
        this._selectedPaths.clear();
        this._previewItem=null;
        this._previewAnchor=null;
        this.load(map,true);
      }));

      this.shadowRoot.querySelectorAll("[data-open-folder]").forEach((button)=>button.addEventListener("click",()=>{
        this._folder=button.dataset.openFolder||"";
        this._selectedPaths.clear();
        this._previewItem=null;
        this._previewAnchor=null;
        this.load(map,true);
      }));

      this.shadowRoot.querySelector("[data-archive-filter]")?.addEventListener("input",(event)=>{
        this.rememberSearchFocus(event.target);
        this.render();
      });

      this.shadowRoot.querySelector("[data-action='search-reset']")?.addEventListener("click",()=>this.resetSearch());

      this.shadowRoot.querySelector("[data-sort-mode]")?.addEventListener("change",(event)=>{
        this._sortMode=event.target.value||"name";
        this.render();
      });

      this.shadowRoot.querySelectorAll("[data-select-path]").forEach((input)=>input.addEventListener("change",()=>{
        this.toggleSelection(input.dataset.selectPath,input.checked);
      }));

      const selectAllVisible=this.shadowRoot.querySelector("[data-select-all-visible]");
      if(selectAllVisible){
        selectAllVisible.indeterminate=Boolean(someVisibleSelected&&!allVisibleSelected);
        selectAllVisible.addEventListener("change",()=>this.toggleAllVisible(selectAllVisible.checked));
      }

      this.shadowRoot.querySelectorAll("[data-bulk-action='select-all']").forEach((button)=>button.addEventListener("click",()=>this.selectAllVisible()));
      this.shadowRoot.querySelector("[data-bulk-action='clear']")?.addEventListener("click",()=>this.clearSelection());
      this.shadowRoot.querySelector("[data-bulk-action='move']")?.addEventListener("click",()=>{
        const bulk=this.normalizedBulkItems();
        if(bulk.length)this.openDialog(map,"bulk-move",null,bulk);
      });
      this.shadowRoot.querySelector("[data-bulk-action='delete']")?.addEventListener("click",()=>{
        const bulk=this.normalizedBulkItems();
        if(bulk.length)this.openDialog(map,"bulk-delete",null,bulk);
      });

      const chooser=this.shadowRoot.querySelector("#tc-upload");
      this.shadowRoot.querySelectorAll("[data-action='choose-upload']").forEach((button)=>button.addEventListener("click",()=>chooser?.click()));
      chooser?.addEventListener("change",()=>{
        this._selectedFiles=pccUniqueFiles(chooser.files||[]);
        this.render();
      });
      this.shadowRoot.querySelector("[data-action='upload-selected']")?.addEventListener("click",()=>this.upload(map));
      const zipChooser=this.shadowRoot.querySelector("#pcc-zip-import");
      this.shadowRoot.querySelector("[data-action='gallery-export']")?.addEventListener("click",()=>this.exportGalleryZip(map));
      this.shadowRoot.querySelector("[data-action='choose-zip-import']")?.addEventListener("click",()=>zipChooser?.click());
      zipChooser?.addEventListener("change",()=>{
        const file=zipChooser.files?.[0]||null;
        if(file)this.importGalleryZip(map,file);
      });

      this.shadowRoot.querySelectorAll("[data-preview-path]").forEach((button)=>button.addEventListener("click",(event)=>{
        const item=(this._items||[]).find((entry)=>entry.path===button.dataset.previewPath)||null;
        this.openPreview(item,event.currentTarget);
      }));

      this.shadowRoot.querySelectorAll("[data-context-path]").forEach((element)=>{
        element.addEventListener("contextmenu",(event)=>{
          const item=this.findItem(element.dataset.contextPath);
          this.openContextMenu(event,item);
        });
      });

      this.shadowRoot.querySelectorAll("[data-context-button]").forEach((button)=>{
        button.addEventListener("click",(event)=>{
          const item=this.findItem(button.dataset.contextButton);
          this.openContextMenu(event,item);
        });
      });

      this.shadowRoot.querySelectorAll("[data-download-path]").forEach((button)=>button.addEventListener("click",()=>this.signedLink(map,button.dataset.downloadSource,button.dataset.downloadPath,false)));
      this.shadowRoot.querySelectorAll("[data-studio-path]").forEach((button)=>button.addEventListener("click",()=>this.projectLink(map,button.dataset.studioSource,button.dataset.studioPath,"studio")));

      this.shadowRoot.querySelectorAll("[data-dialog-type]").forEach((button)=>button.addEventListener("click",()=>{
        const item=(this._items||[]).find((entry)=>entry.path===button.dataset.dialogPath)||null;
        this.openDialog(map,button.dataset.dialogType,item);
      }));
      this.renderPortal(map);
      if(!this._dialog)this.restoreSearchFocus();

      if(!this._loading&&!this._loadedOnce){
        this._loadedOnce=true;
        this.load(map);
      }
    }
  }

  class PrintQueueCard extends BaseCard {
    static getConfigElement(){return editorFor("queue")}
    static getStubConfig(){return {...commonStub(),title:"3D-Druck-Warteschlange",card_size:"xl"}}

    constructor(){
      super();
      this._queue=[];
      this._queueLoading=false;
      this._queueError="";
      this._queueNotice="";
      this._loadedOnce=false;
      this._pickerOpen=false;
      this._pickerSource="archive";
      this._pickerFolder="";
      this._pickerParent="";
      this._pickerItems=[];
      this._pickerLoading=false;
      this._pickerSelected=new Map();
      this._pickerQuantity=1;
      this._pickerScheduled="";
      this._pickerPortal=null;
      this._pickerFocus=null;
      this._queueFocus=null;
      this._queueDraftQuantities=new Map();
      this._queueToast="";
      this._queueToastTimer=null;
      this._queueToastPosition=null;
      this._lastUiSerial="";
    }

    set hass(hass){
      const first=!this._hass;
      this._hass=hass;
      if(!this._config)return;
      const map=this.map();
      const serial=map?this.serial(map):"";
      const changed=serial!==this._lastUiSerial;
      this._lastUiSerial=serial;
      if(first||changed||!this.shadowRoot?.childElementCount)this.render();
    }

    getCardSize(){return 12}
    getGridOptions(){return {columns:"full",min_columns:12}}
    serial(map){return String(stateValue(this._hass,map.serial,map.prefix))}
    async ws(payload){return this._hass.callWS(payload)}

    showQueueToast(message,anchor=null){
      this._queueToast=String(message||"");
      if(anchor?.getBoundingClientRect){
        const rect=anchor.getBoundingClientRect();
        const width=140;
        const height=42;
        const left=Math.max(12,Math.min(Math.round(rect.left + rect.width + 10), window.innerWidth-width-12));
        const top=Math.max(76,Math.min(Math.round(rect.top + ((rect.height-height)/2)), window.innerHeight-height-12));
        this._queueToastPosition={left,top};
      }else{
        this._queueToastPosition={left:18,top:92};
      }
      if(this._queueToastTimer)window.clearTimeout(this._queueToastTimer);
      this.render();
      this._queueToastTimer=window.setTimeout(()=>{
        this._queueToast="";
        this._queueToastPosition=null;
        this._queueToastTimer=null;
        this.render();
      },1800);
    }

    quantityOptions(selected){
      const current=Math.max(1,Math.min(30,Number(selected||1)));
      return Array.from({length:30},(_,index)=>{
        const value=index+1;
        return `<option value="${value}" ${value===current?"selected":""}>${value}</option>`;
      }).join("");
    }

    async loadQueue(map){
      if(this._queueLoading)return;
      this._queueLoading=true;
      this._queueError="";
      this.render();
      try{
        const data=await this.ws({type:"printer_control_center/queue/list",serial:this.serial(map)});
        this._queue=data.items||[];
      }catch(error){
        this._queueError=`Warteschlange konnte nicht geladen werden: ${String(error?.message||error)}`;
      }finally{
        this._queueLoading=false;
        this.render();
      }
    }

    async loadPicker(map,force=false){
      if(this._pickerLoading)return;
      this._pickerLoading=true;
      this.render();
      try{
        const serial=this.serial(map);
        const data=this._pickerSource==="sd"
          ? await this.ws({type:"printer_control_center/sd/list",serial,folder:this._pickerFolder||"/",force:Boolean(force)})
          : await this.ws({type:"printer_control_center/archive/list",serial,folder:this._pickerFolder||""});
        this._pickerItems=(data.items||[]).filter((item)=>item.kind==="folder"||String(item.name||"").toLowerCase().endsWith(".3mf"));
        this._pickerFolder=data.folder||"";
        this._pickerParent=data.parent||"";
      }catch(error){
        this._queueError=`Galerie konnte nicht geladen werden: ${String(error?.message||error)}`;
      }finally{
        this._pickerLoading=false;
        this.render();
      }
    }

    async openPicker(map){
      this._pickerOpen=true;
      this._pickerSource="archive";
      this._pickerFolder="";
      this._pickerParent="";
      this._pickerItems=[];
      this._pickerSelected.clear();
      this._pickerQuantity=1;
      this._pickerScheduled="";
      this.render();
      await this.loadPicker(map,true);
    }

    closePicker(){
      this._pickerOpen=false;
      this.render();
    }

    pickerKey(source,path){return `${source}:${path}`}
    pickerSelected(source,path){return this._pickerSelected.has(this.pickerKey(source,path))}
    togglePickerSelection(item,checked){
      const key=this.pickerKey(this._pickerSource,item.path);
      if(checked)this._pickerSelected.set(key,{...item,source:this._pickerSource});
      else this._pickerSelected.delete(key);
      this.render();
    }

    async addPickerSelection(map){
      const models=[...this._pickerSelected.values()];
      if(!models.length)return;
      try{
        for(const item of models){
          await this.ws({
            type:"printer_control_center/queue/add",
            serial:this.serial(map),
            source:item.source,
            path:item.path,
            name:item.name||item.path,
            quantity:Math.max(1,Number(this._pickerQuantity||1)),
            scheduled_for:String(this._pickerScheduled||""),
            preview_data_url:String(item.preview_data_url||""),
          });
        }
        this._queueNotice=`${models.length} Modell(e) wurden zur Warteschlange hinzugefügt.`;
        this._pickerOpen=false;
        this._pickerSelected.clear();
        await this.loadQueue(map);
      }catch(error){
        this._queueError=`Modelle konnten nicht hinzugefügt werden: ${String(error?.message||error)}`;
        this.render();
      }
    }

    async updateItem(map,item,patch,{toast="",toastAnchor=null}={}){
      try{
        await this.ws({type:"printer_control_center/queue/update",serial:this.serial(map),queue_id:item.id,...patch});
        await this.loadQueue(map);
        if(toast)this.showQueueToast(toast,toastAnchor);
      }catch(error){
        this._queueError=`Warteschlangen-Eintrag konnte nicht aktualisiert werden: ${String(error?.message||error)}`;
        this.render();
      }
    }

    async deleteItem(map,item){
      try{
        await this.ws({type:"printer_control_center/queue/delete",serial:this.serial(map),queue_id:item.id});
        await this.loadQueue(map);
      }catch(error){
        this._queueError=`Warteschlangen-Eintrag konnte nicht entfernt werden: ${String(error?.message||error)}`;
        this.render();
      }
    }

    async moveItem(map,item,direction){
      try{
        await this.ws({type:"printer_control_center/queue/move",serial:this.serial(map),queue_id:item.id,direction});
        await this.loadQueue(map);
      }catch(error){
        this._queueError=`Reihenfolge konnte nicht geändert werden: ${String(error?.message||error)}`;
        this.render();
      }
    }

    async completeOne(map,item){
      const quantity=Math.max(1,Number(item.quantity||1));
      if(quantity<=1)return this.deleteItem(map,item);
      return this.updateItem(map,item,{quantity:quantity-1});
    }

    async openStudio(map,item){
      try{
        const data=await this.ws({
          type:"printer_control_center/project/link",
          serial:this.serial(map),
          source:item.source,
          path:item.path,
        });
        const absolute=new URL(data.download_url,window.location.origin).href;
        this._queueNotice="Bambu Studio wird mit der unveränderten Original-3MF-Datei geöffnet. Nach einem erfolgreich gestarteten Druck kannst du einen Durchlauf mit â€š1 erledigtâ€˜ abhaken.";
        this.render();
        window.setTimeout(()=>{window.location.href=`bambustudio://open?file=${encodeURIComponent(absolute)}`;},0);
      }catch(error){
        this._queueError=`Bambu Studio konnte nicht geöffnet werden: ${String(error?.message||error)}`;
        this.render();
      }
    }

    ensurePickerPortal(){
      if(this._pickerPortal?.isConnected)return this._pickerPortal;
      const portal=document.createElement("div");
      portal.setAttribute("data-printer-control-center-queue-picker-portal","");
      portal.style.position="fixed";
      portal.style.inset="0";
      portal.style.zIndex="2147483001";
      portal.style.display="none";
      portal.attachShadow({mode:"open"});
      document.body.appendChild(portal);
      this._pickerPortal=portal;
      return portal;
    }

    removePickerPortal(){this._pickerPortal?.remove?.();this._pickerPortal=null}
    disconnectedCallback(){this.removePickerPortal()}

    pickerItemHtml(item){
      const folder=item.kind==="folder";
      const selected=this.pickerSelected(this._pickerSource,item.path);
      return `<article class="queue-picker-item ${selected?"selected":""}">
        ${folder?"":`<label class="queue-picker-check"><input type="checkbox" data-queue-picker-select="${esc(item.path)}" ${selected?"checked":""}></label>`}
        <button class="queue-picker-media" ${folder?`data-queue-picker-folder="${esc(item.path)}"`:""}>
          ${folder?"📁":item.preview_data_url?`<img src="${esc(item.preview_data_url)}" alt="${esc(item.name)}">`:"📄"}
        </button>
        <strong class="queue-name" title="${esc(item.name)}">${esc(item.name)}</strong>
        <small>${folder?"Ordner":`${esc(bytesLabel(item.size||0))} - ${esc(this._pickerSource==="sd"?"SD-Karte":"Archiv")}`}</small>
        ${folder?`<button data-queue-picker-folder="${esc(item.path)}">📁 Öffnen</button>`:""}
      </article>`;
    }

    pickerHtml(){
      const selected=this._pickerSelected.size;
      const canGoUp=Boolean(this._pickerSource==="sd"?this._pickerFolder&&this._pickerFolder!=="/":this._pickerFolder);
      return `<div class="tc-overlay" data-queue-picker-backdrop>
        <section class="queue-picker-dialog">
          <div class="row between">
            <div><h2>Galerie - Modelle zur Warteschlange hinzufügen</h2><small>Mehrere Modelle markieren und gemeinsam übernehmen.</small></div>
            <button data-queue-picker-close>âœ•</button>
          </div>
          <div class="toolbar">
            <button class="${this._pickerSource==="archive"?"primary":""}" data-queue-picker-source="archive">Lokales Archiv</button>
            <button class="${this._pickerSource==="sd"?"primary":""}" data-queue-picker-source="sd">SD-Karte</button>
            <button data-queue-picker-up ${canGoUp?"":"disabled"}>â†‘ Eine Ebene höher</button>
            <button data-queue-picker-refresh>â†» Aktualisieren</button>
            <span class="badge">${esc(this._pickerFolder||(this._pickerSource==="sd"?"/":"Hauptordner"))}</span>
          </div>
          ${this._pickerLoading?`<p class="muted">Galerie wird geladen â€¦</p>`:""}
          <div class="queue-picker-grid">
            ${this._pickerItems.map((item)=>this.pickerItemHtml(item)).join("")||`<p class="muted">Keine 3MF-Modelle in diesem Ordner gefunden.</p>`}
          </div>
          <div class="queue-picker-footer">
            <strong>${selected} Modell(e) markiert</strong>
            <label>Stückzahl je Modell <select data-queue-picker-quantity>${this.quantityOptions(this._pickerQuantity||1)}</select></label>
            <label>Zeitpunkt optional <input data-queue-picker-scheduled type="datetime-local" value="${esc(this._pickerScheduled||"")}"></label>
            <button class="primary" data-queue-picker-add ${selected?"":"disabled"}>ï¼‹ Markierte Modelle hinzufügen</button>
            <button data-queue-picker-close>Abbrechen</button>
          </div>
        </section>
      </div>`;
    }

    capturePickerFocus(){
      const root=this._pickerPortal?.shadowRoot;
      const active=root?.activeElement;
      if(!active)return;
      if(active.matches?.("[data-queue-picker-quantity]")){
        this._pickerFocus={kind:"quantity",start:active.selectionStart,end:active.selectionEnd};
      }else if(active.matches?.("[data-queue-picker-scheduled]")){
        this._pickerFocus={kind:"scheduled",start:active.selectionStart,end:active.selectionEnd};
      }
    }

    restorePickerFocus(){
      const focus=this._pickerFocus;
      if(!focus)return;
      this._pickerFocus=null;
      window.requestAnimationFrame(()=>{
        const selector=focus.kind==="scheduled"?"[data-queue-picker-scheduled]":"[data-queue-picker-quantity]";
        const input=this._pickerPortal?.shadowRoot?.querySelector(selector);
        if(!input)return;
        input.focus({preventScroll:true});
        try{input.setSelectionRange(focus.start??input.value.length,focus.end??input.value.length)}catch(_error){}
      });
    }

    captureQueueFocus(){
      const active=this.shadowRoot?.activeElement;
      const id=active?.dataset?.queueQuantity;
      if(id){
        this._queueDraftQuantities.set(String(id),String(active.value||""));
        this._queueFocus={id,start:active.selectionStart,end:active.selectionEnd};
      }
    }

    restoreQueueFocus(){
      const focus=this._queueFocus;
      if(!focus)return;
      this._queueFocus=null;
      window.requestAnimationFrame(()=>{
        const input=this.shadowRoot?.querySelector(`[data-queue-quantity="${CSS.escape(String(focus.id))}"]`);
        if(!input)return;
        input.focus({preventScroll:true});
        try{input.setSelectionRange(focus.start??input.value.length,focus.end??input.value.length)}catch(_error){}
      });
    }

    renderPickerPortal(map){
      if(!this._pickerOpen){
        if(this._pickerPortal){this._pickerPortal.shadowRoot.innerHTML="";this._pickerPortal.style.display="none"}
        return;
      }
      const portal=this.ensurePickerPortal();
      portal.style.display="block";
      this.capturePickerFocus();
      const root=portal.shadowRoot;
      root.innerHTML=`<style>${baseCss(this._config)}</style>${localizeHtml(this.pickerHtml())}`;
      root.querySelector("[data-queue-picker-backdrop]")?.addEventListener("click",(event)=>{if(event.target===event.currentTarget)this.closePicker()});
      root.querySelectorAll("[data-queue-picker-close]").forEach((button)=>button.addEventListener("click",()=>this.closePicker()));
      root.querySelectorAll("[data-queue-picker-source]").forEach((button)=>button.addEventListener("click",()=>{
        this._pickerSource=button.dataset.queuePickerSource;
        this._pickerFolder=this._pickerSource==="sd"?"/":"";
        this._pickerItems=[];
        this.loadPicker(map,true);
      }));
      root.querySelector("[data-queue-picker-up]")?.addEventListener("click",()=>{
        this._pickerFolder=this._pickerParent||(this._pickerSource==="sd"?"/":"");
        this.loadPicker(map,true);
      });
      root.querySelector("[data-queue-picker-refresh]")?.addEventListener("click",()=>this.loadPicker(map,true));
      root.querySelectorAll("[data-queue-picker-folder]").forEach((button)=>button.addEventListener("click",()=>{
        this._pickerFolder=button.dataset.queuePickerFolder||"";
        this.loadPicker(map,true);
      }));
      root.querySelectorAll("[data-queue-picker-select]").forEach((input)=>input.addEventListener("change",()=>{
        const item=this._pickerItems.find((entry)=>entry.path===input.dataset.queuePickerSelect);
        if(item)this.togglePickerSelection(item,input.checked);
      }));
      root.querySelector("[data-queue-picker-quantity]")?.addEventListener("input",(event)=>{this._pickerQuantity=Math.max(1,Number(event.target.value||1))});
      root.querySelector("[data-queue-picker-scheduled]")?.addEventListener("input",(event)=>{this._pickerScheduled=event.target.value||""});
      root.querySelector("[data-queue-picker-add]")?.addEventListener("click",()=>this.addPickerSelection(map));
      this.restorePickerFocus();
    }

    rowHtml(item,index){
      const schedule=item.scheduled_for||"";
      const preview=item.preview_data_url
        ? `<img src="${esc(item.preview_data_url)}" alt="${esc(item.name)}">`
        : `<span class="queue-preview-fallback">📄</span>`;
      const draftQuantity=this._queueDraftQuantities.get(String(item.id));
      const shownQuantity=draftQuantity===undefined?item.quantity||1:draftQuantity;
      return `<article class="queue-row" title="${esc(item.source==="sd"?"SD-Karte":"Lokales Archiv")} - ${esc(item.path)}">
        <span class="queue-position">${index+1}</span>
        <div class="queue-preview">${preview}</div>
        <div class="queue-meta">
          <strong class="queue-name" title="${esc(item.name)}">${esc(item.name)}</strong>
          ${schedule?`<span class="badge">Geplant: ${esc(schedule.replace("T"," "))}</span>`:""}
        </div>
        <div class="queue-actions">
          <label>Stückzahl <select data-queue-quantity="${esc(item.id)}">${this.quantityOptions(shownQuantity)}</select></label>
          <button class="queue-apply" data-queue-apply="${esc(item.id)}">âœ“ Auswahl übernehmen</button>
          <button data-queue-move="up" data-queue-id="${esc(item.id)}" title="Nach oben">â†‘ Nach oben</button>
          <button data-queue-move="down" data-queue-id="${esc(item.id)}" title="Nach unten">â†“ Nach unten</button>
          <button class="primary queue-print" data-queue-studio="${esc(item.id)}">ðŸ–¨ Drucken â€¦</button>
          <button data-queue-complete="${esc(item.id)}">âœ“ 1 erledigt</button>
          <button class="danger" data-queue-delete="${esc(item.id)}">🗑 Entfernen</button>
        </div>
      </article>`;
    }

    findQueueItem(id){return this._queue.find((item)=>String(item.id)===String(id))||null}

    render(){
      this.captureQueueFocus();
      if(!this._hass||!this._config)return;
      const map=this.map();if(!map)return this.empty();
      const total=this._queue.reduce((sum,item)=>sum+Math.max(1,Number(item.quantity||1)),0);
      this.shadowRoot.innerHTML=frame(this._config,`
        <div class="row between">
          <div><h2>${esc(this._config.title||"3D-Druck-Warteschlange")}</h2><small>Persistente Planung für ${esc(this.serial(map))}</small></div>
          <div class="toolbar"><button class="primary" data-queue-open-gallery>ï¼‹ Galerie öffnen</button><button data-queue-refresh>â†» Aktualisieren</button></div>
        </div>
        <div class="row"><span class="badge">${this._queue.length} Einträge</span><span class="badge">${total} Druckdurchläufe</span></div>
        ${this._queueError?`<p class="notice">${esc(this._queueError)}</p>`:""}
        ${this._queueNotice?`<p class="notice">${esc(this._queueNotice)}</p>`:""}
        ${this._queueLoading?`<p class="muted">Warteschlange wird geladen â€¦</p>`:""}
        ${this._queueToast?`<div class="queue-mini-toast" style="left:${Number(this._queueToastPosition?.left||18)}px;top:${Number(this._queueToastPosition?.top||92)}px">${esc(this._queueToast)}</div>`:""}
        <div class="queue-list">${this._queue.map((item,index)=>this.rowHtml(item,index)).join("")||`<p class="muted">Noch keine geplanten Modelle. Öffne die Galerie oder nutze im Dateimanager den vorhandenen Menüpunkt â€žPlanen â€¦â€œ.</p>`}</div>
      `,"archive-library-card");
      this.shadowRoot.querySelector("[data-queue-open-gallery]")?.addEventListener("click",()=>this.openPicker(map));
      this.shadowRoot.querySelector("[data-queue-refresh]")?.addEventListener("click",()=>this.loadQueue(map));
      this.shadowRoot.querySelectorAll("[data-queue-quantity]").forEach((input)=>{
        input.addEventListener("input",()=>this._queueDraftQuantities.set(String(input.dataset.queueQuantity),String(input.value||"")));
      });
      this.shadowRoot.querySelectorAll("[data-queue-apply]").forEach((button)=>button.addEventListener("click",()=>{
        const id=String(button.dataset.queueApply);
        const item=this.findQueueItem(id);
        const input=this.shadowRoot.querySelector(`[data-queue-quantity="${CSS.escape(id)}"]`);
        const quantity=Math.max(1,Number(input?.value||1));
        this._queueDraftQuantities.set(id,String(quantity));
        if(item)this.updateItem(map,item,{quantity},{toast:"Gespeichert",toastAnchor:button}).finally(()=>this._queueDraftQuantities.delete(id));
      }));
      this.shadowRoot.querySelectorAll("[data-queue-move]").forEach((button)=>button.addEventListener("click",()=>{
        const item=this.findQueueItem(button.dataset.queueId);if(item)this.moveItem(map,item,button.dataset.queueMove);
      }));
      this.shadowRoot.querySelectorAll("[data-queue-studio]").forEach((button)=>button.addEventListener("click",()=>{
        const item=this.findQueueItem(button.dataset.queueStudio);if(item)this.openStudio(map,item);
      }));
      this.shadowRoot.querySelectorAll("[data-queue-complete]").forEach((button)=>button.addEventListener("click",()=>{
        const item=this.findQueueItem(button.dataset.queueComplete);if(item)this.completeOne(map,item);
      }));
      this.shadowRoot.querySelectorAll("[data-queue-delete]").forEach((button)=>button.addEventListener("click",()=>{
        const item=this.findQueueItem(button.dataset.queueDelete);if(item&&window.confirm(`${tr("Eintrag wirklich entfernen?")}\n${item.name}`))this.deleteItem(map,item);
      }));
      this.renderPickerPortal(map);
      this.restoreQueueFocus();
      if(!this._loadedOnce){this._loadedOnce=true;this.loadQueue(map)}
    }
  }

  class MakerWorldCard extends BaseCard {
    static getConfigElement(){return editorFor("makerworld")} static getStubConfig(){return {...commonStub(),title:"MakerWorld Explorer"}}
    render(){
      if(!this._config)return;
      this.shadowRoot.innerHTML=frame(this._config,`
        <h3>${esc(this._config.title)}</h3>
        <p class="muted">MakerWorld-Modell suchen oder einen Modell-Link öffnen. Die 3MF-Datei kann anschließend direkt in die Archivkarte hochgeladen werden.</p>
        <div class="toolbar"><input id="mw" placeholder="Suchbegriff oder MakerWorld-Link"><button id="mwgo">âŒ• MakerWorld öffnen</button></div>
        <p class="notice">Kein verdeckter Direktimport über undokumentierte Community-Endpunkte. Der Workflow bleibt nachvollziehbar und veröffentlichbar.</p>
      `);
      this.shadowRoot.querySelector("#mwgo")?.addEventListener("click",()=>{
        const value=String(this.shadowRoot.querySelector("#mw")?.value||"").trim();
        const url=value.startsWith("http")?value:`https://makerworld.com/en/search/models?keyword=${encodeURIComponent(value)}`;
        window.open(url,"_blank","noopener");
      })
    }
  }

  function definePccElement(tag, ctor) {
    if (customElements.get(tag)) return;
    try {
      customElements.define(tag, ctor);
      return;
    } catch (error) {
      const message = String(error && (error.message || error));
      if (message.includes("already been used with this registry")) {
        try {
          customElements.define(tag, class extends ctor {});
        } catch (inner) {
          const innerMessage = String(inner && (inner.message || inner));
          if (!innerMessage.includes("already been defined") && !innerMessage.includes("already been used")) {
            throw inner;
          }
        }
        return;
      }
      if (message.includes("already been defined") || message.includes("already been used")) {
        return;
      }
      throw error;
    }
  }

  if(!customElements.get("printer-control-center-card-editor")) definePccElement("printer-control-center-card-editor",PrinterControlCenterEditor);

  const cards = {
    [TYPES.complete]:CompleteCard,[TYPES.brand]:BrandCard,[TYPES.header]:HeaderCard,[TYPES.progress]:ProgressCard,
    [TYPES.telemetry]:TelemetryCard,[TYPES.controls]:ControlsCard,[TYPES.ams]:AmsCard,[TYPES.network]:NetworkCard,
    [TYPES.firmware]:FirmwareCard,[TYPES.frame]:GlowFrameCard,[TYPES.templates]:TemplatesCard,[TYPES.makerworld]:MakerWorldCard,
    [TYPES.media]:MediaCard,[TYPES.queue]:PrintQueueCard,
  };
  for(const [type,klass] of Object.entries(cards)) if(!customElements.get(type)) definePccElement(type,klass);

  // Keep existing dashboards working while installations migrate from the old domain.
  const legacyCards = {
    "taracraft-3d-printer-card": CompleteCard,
    "taracraft-3d-printer-templates-card": TemplatesCard,
    "taracraft-3d-printer-queue-card": PrintQueueCard,
  };
  for(const [type,klass] of Object.entries(legacyCards)) if(!customElements.get(type)) definePccElement(type,klass);

  const picker = [
    [TYPES.complete,"3D-Printer Control Center - Komplettkarte","Responsive Gesamtansicht mit Kamera, Steuerung und AMS"],
    [TYPES.media,"3D-Printer Control Center - Kamera / Modellvorschau","Live-Kamera mit automatischem Vorschau- und Offline-Fallback"],
    [TYPES.controls,"3D-Printer Control Center - Steuerung","Licht, Kamera und zustandsabhängige Drucksteuerung"],
    [TYPES.ams,"3D-Printer Control Center - AMS","Geladene Materialien und Farben"],
    [TYPES.progress,"3D-Printer Control Center - Druckfortschritt","Fortschritt, Layer und Restzeit"],
    [TYPES.telemetry,"3D-Printer Control Center - Telemetrie","Temperaturen und Netzwerk"],
    [TYPES.network,"3D-Printer Control Center - Netzwerkdiagnose","Transport, Scanner und IP"],
    [TYPES.firmware,"3D-Printer Control Center - Firmware","Firmwarestatus ohne Auto-Update"],
    [TYPES.header,"3D-Printer Control Center - Header und Status","Kompakter Druckerstatus"],
    [TYPES.brand,"3D-Printer Control Center - Logo und Branding","Branding-Modul"],
    [TYPES.templates,"3D-Printer Control Center - 3D-Drucker-Dateimanager/Galerie","HA-only Vollbreiten-Dateimanager mit Body-Overlay, direktem Bambu-Studio-Import und SD-Karten-Verwaltung"],
    [TYPES.queue,"3D-Printer Control Center - 3D-Druck-Warteschlange","Persistente Druckplanung mit Galerie-Popup, Mehrfachauswahl, Stückzahl und Bambu-Studio-Druckübergabe"],
    [TYPES.makerworld,"3D-Printer Control Center - MakerWorld Explorer","MakerWorld-Websuche"],
    [TYPES.frame,"3D-Printer Control Center - Glow-Rahmen","Separater Glow-Rahmen"],
  ];

  window.customCards=window.customCards||[];
  for(const [type,name,description] of picker){
    const meta={type,name:tr(name),description:tr(description),preview:true,documentationURL:DOCS};
    const old=window.customCards.find((entry)=>entry.type===type);
    old?Object.assign(old,meta):window.customCards.push(meta);
  }
  window.__printerControlCenterCards={version:VERSION,registeredCards:picker.map(([type,name])=>({type,name}))};
  console.info(`3D-Printer Control Center ${VERSION}: ${picker.length} cards registered`);
})();

/* v5 alpha22: shared Gallery/File-Manager -> Studio handoff bridge. */
(() => {
  const KEY = "printer_control_center_studio_handoff_alpha22";
  window.PCC_STUDIO_HANDOFF_KEY = KEY;
  window.PCC_STUDIO_HANDOFF = {
    key: KEY,
    broadcast(job) {
      const payload = {
        version: "5.0.0-beta5",
        updatedAt: new Date().toISOString(),
        job: job || null
      };
      try {
        window.localStorage.setItem(KEY, JSON.stringify(payload));
      } catch (_error) {}
      try {
        window.dispatchEvent(new CustomEvent("printer-control-center-studio-handoff", {detail: payload}));
      } catch (_error) {}
      return payload;
    },
    latest() {
      try {
        return JSON.parse(window.localStorage.getItem(KEY) || "null");
      } catch (_error) {
        return null;
      }
    }
  };
})();

/* v5 alpha22: Beta Foundation Studio frontend with persistent Gallery handoff. */
(() => {
  const STUDIO_VERSION = "5.0.0-beta5";
  const HANDOFF_KEY = window.PCC_STUDIO_HANDOFF_KEY || "printer_control_center_studio_handoff_alpha22";

  function pccUniqueFiles(files) {
    const seen = new Set();
    const result = [];
    for (const file of [...(files || [])]) {
      const key = `${file.name || ""}|${file.size || 0}|${file.lastModified || 0}`;
      if (seen.has(key)) continue;
      seen.add(key);
      result.push(file);
    }
    return result;
  }

  const escStudio = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  }[char]));

  const toNumber = (value, fallback = 0) => {
    const number = Number(value);
    return Number.isFinite(number) ? number : fallback;
  };

  const defaultTransform = () => ({x:0,y:0,z:0,rx:0,ry:0,rz:0,scale:100,sx:100,sy:100,sz:100,skewX:0,skewY:0,mx:1,my:1,mz:1});

  class PrinterControlCenterStudioCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode:"open"});
      this._mode = "move";
      this._health = null;
      this._lastDryRun = null;
      this._lastStudioPlan = null;
      this._jobs = [];
      this._jobsLoaded = false;
      this._jobsLoading = false;
      this._activeJob = null;
      this._activeJobId = "";
      this._profileBank = null;
      this._profileBankLoaded = false;
      this._profileBankLoading = false;
      this._status = "beta5 Studio Navigation + Preview Handoff bereit. Oben bleiben nur Workflow-Aktionen plus Löschen, Bearbeitung bleibt rechts, Rechtsklickmenü hat Untermenüs und Galerie-Previews werden in den Studio-Job übernommen. Echtes Slicen und Direktdruck bleiben deaktiviert.";
      this._transform = defaultTransform();
      this._viewZoom = 1;
      this._dragState = null;
      this._keyboardStep = 5;
      this._studioKeyboardActive = false;
      this._showShortcutHelp = false;
      this._studioContextMenu = null;
      this._studioMesh = null;
      this._studioMeshJobId = "";
      this._studioMeshUrl = "";
      this._studioMeshLoading = false;
      this._studioMeshError = "";
      this._studioMeshStatus = "Echtes Modell noch nicht geladen.";
      this._studioDocumentKeyHandler = (event) => this.handleDocumentKeyDown(event);
      this._saveTimer = null;

      this._handoffHandler = (event) => this.consumeStudioHandoff(event?.detail || null);
      this._storageHandler = (event) => {
        if (event?.key === HANDOFF_KEY) this.consumeStudioHandoff(null);
      };

      this.shadowRoot.addEventListener("click", (event) => this.handleClick(event));
      this.shadowRoot.addEventListener("change", (event) => this.handleChange(event));
      this.shadowRoot.addEventListener("input", (event) => this.handleInput(event));
      this.shadowRoot.addEventListener("pointerdown", (event) => this.handlePointerDown(event));
      this.shadowRoot.addEventListener("pointermove", (event) => this.handlePointerMove(event));
      this.shadowRoot.addEventListener("pointerup", (event) => this.handlePointerUp(event));
      this.shadowRoot.addEventListener("pointercancel", (event) => this.handlePointerUp(event));
      this.shadowRoot.addEventListener("wheel", (event) => this.handleWheel(event), {passive:false});
      this.shadowRoot.addEventListener("dblclick", (event) => this.handleDoubleClick(event));
      this.shadowRoot.addEventListener("keydown", (event) => this.handleKeyDown(event));
      this.shadowRoot.addEventListener("contextmenu", (event) => this.handleContextMenu(event));
      this.wrapStudioRender();
    }

    connectedCallback() {
      window.addEventListener("printer-control-center-studio-handoff", this._handoffHandler);
      window.addEventListener("storage", this._storageHandler);
      window.addEventListener("keydown", this._studioDocumentKeyHandler, true);
      this.consumeStudioHandoff(null);
    }

    disconnectedCallback() {
      window.removeEventListener("printer-control-center-studio-handoff", this._handoffHandler);
      window.removeEventListener("storage", this._storageHandler);
      window.removeEventListener("keydown", this._studioDocumentKeyHandler, true);
      if (this._saveTimer) window.clearTimeout(this._saveTimer);
    }

    setConfig(config) {
      this._config = config || {};
      this.render();
    }

    set hass(hass) {
      const first = !this._hass;
      this._hass = hass;
      this.ensureStudioProfileBankLoaded();
      this.ensureStudioJobsLoaded(false);
      this.ensureStudioMeshLoaded(false);
      this.consumeStudioHandoff(null);

      // Beta5: Home Assistant pushes frequent hass updates.
      // Do not redraw the entire Studio card while a transform input is being edited; suppressing full hass-update renders prevents cursor jumps.
      if (first || !this.shadowRoot?.childElementCount) {
        this.render();
      } else if (!this.isEditingTransformInput()) {
        this.updateModelPreview();
      }
    }

    async ws(payload) {
      if (this._hass?.connection?.sendMessagePromise) {
        return this._hass.connection.sendMessagePromise(payload);
      }
      if (this._hass?.callWS) {
        return this._hass.callWS(payload);
      }
      throw new Error("Home Assistant WebSocket connection is not available.");
    }

    async ensureStudioProfileBankLoaded() {
      if (this._profileBankLoading || this._profileBankLoaded) return;
      if (!this._hass) return;
      this._profileBankLoading = true;

      try {
        const response = await this.ws({type: "printer_control_center/studio_profiles/get"});
        this._profileBank = response?.profile_bank || response?.bank || response || null;
        this._profileBankLoaded = Boolean(this._profileBank);
      } catch (error) {
        this._profileBank = null;
        this._profileBankLoaded = false;
        this._status = "Profilbank konnte nicht geladen werden, statischer Fallback aktiv.";
      } finally {
        this._profileBankLoading = false;
        this.render();
      }
    }

    async ensureStudioJobsLoaded(force=false) {
      if (this._jobsLoading) return;
      if (this._jobsLoaded && !force) return;
      if (!this._hass) return;

      this._jobsLoading = true;
      try {
        const response = await this.ws({type:"printer_control_center/studio_jobs/list"});
        this._jobs = Array.isArray(response?.jobs) ? response.jobs : [];
        this._jobsLoaded = true;

        if (!this._activeJob && this._jobs.length) {
          this.applyActiveJob(this._jobs[0], {render:false, status:false});
        }
      } catch (error) {
        this._status = `Studio-Jobs konnten nicht geladen werden: ${String(error?.message || error)}`;
      } finally {
        this._jobsLoading = false;
        this.render();
      }
    }

    consumeStudioHandoff(payload) {
      let data = payload;
      if (!data) {
        try {
          data = JSON.parse(window.localStorage.getItem(HANDOFF_KEY) || "null");
        } catch (_error) {
          data = null;
        }
      }

      const job = data?.job || null;
      if (!job?.id) return;
      if (String(job.id) === String(this._activeJobId || "")) return;

      this.applyActiveJob(job, {render:false});
      this._jobsLoaded = false;
      this.ensureStudioJobsLoaded(true);
      this._status = `Studio-Job aus Galerie/Dateimanager geladen: ${this.jobName(job)}.`;
      this.render();
    }

    defaultProfileContext() {
      return {
        version: STUDIO_VERSION,
        source: "studio_alpha22_fallback",
        selection: {
          printer_profile_id: "bambu_a1_x1_p1_h2_generic",
          filament_profile_id: "pla_generic",
          process_profile_id: "standard_020"
        },
        printer_profile: {
          id: "bambu_a1_x1_p1_h2_generic",
          name: "Bambu A1 / X1 / P1 / H2",
          build_plate_mm: [256, 256],
          default_nozzle_mm: 0.4
        },
        filament_profile: {
          id: "pla_generic",
          name: "PLA Generic",
          material: "PLA",
          nozzle_temp_c: 220,
          bed_temp_c: 60,
          max_volumetric_speed_mm3_s: 12
        },
        process_profile: {
          id: "standard_020",
          name: "0.20 mm Standard",
          layer_height_mm: 0.2,
          sparse_infill_density_percent: 15,
          sparse_infill_pattern: "grid"
        },
        valid: true,
        warnings: []
      };
    }

    profileCollection(bank, key) {
      const value = bank?.[key];
      if (!value) return {};
      if (Array.isArray(value)) {
        return Object.fromEntries(value.filter(Boolean).map((entry, index) => [entry.id || String(index), entry]));
      }
      if (typeof value === "object") return value;
      return {};
    }

    profileFromCollection(collection, id) {
      if (!collection || typeof collection !== "object") return null;
      if (id && collection[id]) return collection[id];
      const values = Object.values(collection).filter((entry) => entry && typeof entry === "object");
      return values[0] || null;
    }

    currentProfileContextFromBank() {
      const bank = this._profileBank;
      if (!bank) return null;

      const selection = bank.selection || {};
      const printerProfiles = this.profileCollection(bank, "printer_profiles");
      const filamentProfiles = this.profileCollection(bank, "filaments");
      const processProfiles = this.profileCollection(bank, "process_profiles");

      const printer = this.profileFromCollection(printerProfiles, selection.printer_profile_id);
      const filament = this.profileFromCollection(filamentProfiles, selection.filament_profile_id);
      const process = this.profileFromCollection(processProfiles, selection.process_profile_id);

      if (!printer || !filament || !process) return null;

      return {
        version: STUDIO_VERSION,
        source: "studio_profile_bank_alpha22",
        selection: {
          printer_profile_id: printer.id || selection.printer_profile_id || "printer",
          filament_profile_id: filament.id || selection.filament_profile_id || "filament",
          process_profile_id: process.id || selection.process_profile_id || "process"
        },
        printer_profile: printer,
        filament_profile: filament,
        process_profile: process,
        valid: true,
        warnings: []
      };
    }

    buildProfileContext() {
      return this.currentProfileContextFromBank?.() || this.defaultProfileContext();
    }

    profileLabels() {
      const context = this.buildProfileContext();
      return {
        printer: context.printer_profile?.name || "Bambu A1 / X1 / P1 / H2",
        plate: Array.isArray(context.printer_profile?.build_plate_mm)
          ? `${context.printer_profile.build_plate_mm[0]} x ${context.printer_profile.build_plate_mm[1]} mm`
          : "Standard Build Plate",
        nozzle: `${context.printer_profile?.default_nozzle_mm || 0.4} mm`,
        filament: context.filament_profile?.name || context.filament_profile?.material || "PLA Generic",
        process: context.process_profile?.name || "0.20 mm Standard"
      };
    }

    normalizeTransform(value) {
      const source = value && typeof value === "object" ? value : {};
      const base = defaultTransform();
      for (const key of Object.keys(base)) {
        base[key] = toNumber(source[key], base[key]);
      }
      return base;
    }

    jobName(job=this._activeJob) {
      return String(job?.name || job?.modelName || job?.model?.name || job?.file_name || job?.filename || "Studio Preview");
    }

    jobPath(job=this._activeJob) {
      return String(job?.file_path || job?.path || job?.model?.path || "");
    }

    jobSource(job=this._activeJob) {
      return String(job?.source || job?.origin || job?.model?.source || "frontend");
    }

    applyActiveJob(job, options={}) {
      if (!job) return;
      this._activeJob = {...job};
      this._activeJobId = String(job.id || "");
      this._transform = this.normalizeTransform(job.transform || job.plan?.transform || this._transform);
      if (Array.isArray(this._jobs)) {
        const existing = this._jobs.findIndex((entry) => String(entry?.id) === String(job.id));
        if (existing >= 0) this._jobs[existing] = this._activeJob;
        else this._jobs = [this._activeJob, ...this._jobs];
      }
      if (options.status !== false) {
        this._status = `Aktiver Studio-Job: ${this.jobName(job)}. Transformdaten und Profilkontext sind bereit.`;
      }
      if (options.render !== false) this.render();
    }

    scheduleActiveJobSave() {
      if (!this._activeJob?.id || !this._hass) return;
      if (this._saveTimer) window.clearTimeout(this._saveTimer);
      this._saveTimer = window.setTimeout(() => this.saveActiveJobState(), 350);
    }

    async saveActiveJobState() {
      if (!this._activeJob?.id || !this._hass) return;
      const patch = {
        transform: {...this._transform},
        profile_context: this.buildProfileContext(),
        status: "prepared",
        stage: "waiting",
        message: "Transformdaten im 3D-Studio aktualisiert. Echter Slicer-Lauf ist deaktiviert.",
        real_slicing_enabled: false,
        direct_print_enabled: false
      };

      try {
        const response = await this.ws({
          type:"printer_control_center/studio_jobs/update",
          job_id:String(this._activeJob.id),
          patch
        });
        if (response?.job) this.applyActiveJob(response.job, {render:false, status:false});
      } catch (error) {
        this._status = `Studio-Job konnte nicht gespeichert werden: ${String(error?.message || error)}`;
      }
    }

    wrapStudioRender() {
      if (this._studioRenderWrapped) return;
      const originalRender = this.render.bind(this);
      this.render = (...args) => {
        const result = originalRender(...args);
        if (typeof this.cleanupBetaStudioUi === "function") this.cleanupBetaStudioUi();
        if (typeof this.bindBetaContextMenu === "function") this.bindBetaContextMenu();
        this.queueMeshRender();
        return result;
      };
      this._studioRenderWrapped = true;
    }

    queueMeshRender() {
      if (this._meshRenderTimer) window.clearTimeout(this._meshRenderTimer);
      this._meshRenderTimer = window.setTimeout(() => this.renderMeshCanvas(), 0);
    }

    buildplateRelativePoint(event) {
      const plate = this.shadowRoot?.querySelector(".buildplate");
      if (!plate) return {x:0, y:0, screenX:0, screenY:0};
      const rect = plate.getBoundingClientRect();
      return {
        x: Math.round(event.clientX - rect.left - rect.width / 2),
        y: Math.round(event.clientY - rect.top - rect.height / 2),
        screenX: Math.round(event.clientX - rect.left),
        screenY: Math.round(event.clientY - rect.top),
        clientX: Math.round(event.clientX),
        clientY: Math.round(event.clientY)
      };
    }

    handleDocumentKeyDown(event) {
      const active = this.shadowRoot?.activeElement;
      if (active?.dataset?.field) return;
      if (event.ctrlKey || event.metaKey) return;

      const path = typeof event.composedPath === "function" ? event.composedPath() : [];
      const insideThisCard = path.includes(this);
      const studioRoute = String(window.location?.pathname || "").includes("3d-printer-control-center-studio");

      if (!insideThisCard && !this._studioKeyboardActive && !studioRoute) return;
      this.handleKeyDown(event);
    }

    handlePointerDown(event) {
      const plate = event.target?.closest?.(".buildplate");
      const onModel = event.target?.closest?.(".model") || event.target?.closest?.(".model-label") || event.target?.closest?.(".studio-mesh-canvas");

      if (!plate) return;

      this._studioKeyboardActive = true;
      this.focusStudioShell();

      if (!onModel || event.button !== 0) return;

      event.preventDefault();
      event.stopPropagation();

      const t = this.clampTransform();
      this._dragState = {
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        originX: t.x,
        originY: t.y
      };

      const model = this.shadowRoot?.querySelector(".model");
      model?.classList?.add("dragging");
      try { model?.setPointerCapture?.(event.pointerId); } catch (_error) {}
      this._mode = "move";
      this._status = "Modell wird verschoben.";
    }

    handlePointerMove(event) {
      const drag = this._dragState;
      if (!drag || drag.pointerId !== event.pointerId) return;

      event.preventDefault();
      event.stopPropagation();

      this._transform.x = Math.round(drag.originX + (event.clientX - drag.startX));
      this._transform.y = Math.round(drag.originY + (event.clientY - drag.startY));
      this.clampTransform();

      if (this._activeJob) this._activeJob.transform = {...this._transform};
      this.updateModelPreview();
      this.renderMeshCanvas();
      this.scheduleActiveJobSave();
    }

    handlePointerUp(event) {
      const drag = this._dragState;
      if (!drag || drag.pointerId !== event.pointerId) return;

      event.preventDefault();
      event.stopPropagation();

      this._dragState = null;
      const model = this.shadowRoot?.querySelector(".model");
      model?.classList?.remove("dragging");
      try { model?.releasePointerCapture?.(event.pointerId); } catch (_error) {}

      this._status = `Position gesetzt: X ${this._transform.x}px, Y ${this._transform.y}px.`;
      this.render();
    }

    handleWheel(event) {
      const plate = event.target?.closest?.(".buildplate");
      if (!plate) return;

      this._studioKeyboardActive = true;

      if (!event.ctrlKey && !event.altKey) return;

      event.preventDefault();
      event.stopPropagation();

      const delta = event.deltaY < 0 ? 0.10 : -0.10;
      this.setViewZoom((this._viewZoom || 1) + delta);
    }

    handleDoubleClick(event) {
      const plate = event.target?.closest?.(".buildplate");
      const model = event.target?.closest?.(".model");
      if (!plate || model) return;

      event.preventDefault();
      event.stopPropagation();

      this._studioKeyboardActive = true;
      this.focusStudioShell();

      const point = this.buildplateRelativePoint(event);
      this._transform.x = point.x;
      this._transform.y = point.y;
      this.clampTransform();

      if (this._activeJob) this._activeJob.transform = {...this._transform};
      this.updateModelPreview();
      this.renderMeshCanvas();
      this.scheduleActiveJobSave();

      this._status = `Objekt per Doppelklick gesetzt: X ${point.x}px, Y ${point.y}px.`;
      this.render();
    }

    handleContextMenu(event) {
      const plate = event.target?.closest?.(".buildplate");
      if (!plate) return;

      event.preventDefault();
      event.stopPropagation();

      this._studioKeyboardActive = true;
      this.focusStudioShell();

      const point = this.buildplateRelativePoint(event);
      this._studioContextMenu = point;
      this._status = "Studio-Kontextmenü geöffnet.";
      this.render();
    }

    handleKeyDown(event) {
      if (this.isEditingTransformInput()) return;

      const key = String(event.key || "");
      const lower = key.toLowerCase();
      const step = event.shiftKey ? 25 : this._keyboardStep;
      let handled = true;

      if (key === "ArrowLeft") this.adjustTransform("x", -step, {status:`X ${-step}px per Tastatur.`, render:true});
      else if (key === "ArrowRight") this.adjustTransform("x", step, {status:`X +${step}px per Tastatur.`, render:true});
      else if (key === "ArrowUp") this.adjustTransform("y", -step, {status:`Y ${-step}px per Tastatur.`, render:true});
      else if (key === "ArrowDown") this.adjustTransform("y", step, {status:`Y +${step}px per Tastatur.`, render:true});
      else if (lower === "q") this.adjustTransform("rz", -15, {status:"Rotation Z -15 Grad per Tastatur.", render:true});
      else if (lower === "e") this.adjustTransform("rz", 15, {status:"Rotation Z +15 Grad per Tastatur.", render:true});
      else if (key === "+" || key === "=") this.setViewZoom((this._viewZoom || 1) + 0.10);
      else if (key === "-" || key === "_") this.setViewZoom((this._viewZoom || 1) - 0.10);
      else if (lower === "x") this.toggleMirror("x");
      else if (lower === "y") this.toggleMirror("y");
      else if (lower === "z") this.toggleMirror("z");
      else if (lower === "c") this.centerActiveObject();
      else if (lower === "f") this.layFlatActiveObject();
      else if (lower === "g") this.snapTransformToGrid();
      else if (key === "Delete") this.deleteActiveJob();
      else handled = false;

      if (handled) {
        event.preventDefault();
        event.stopPropagation();
      }
    }

    focusStudioShell() {
      const shell = this.shadowRoot?.querySelector(".studio-shell");
      try { shell?.focus?.({preventScroll:true}); } catch (_error) {}
    }

    centerActiveObject() {
      this._transform.x = 0;
      this._transform.y = 0;
      this.clampTransform();
      if (this._activeJob) this._activeJob.transform = {...this._transform};
      this.updateModelPreview();
      this.renderMeshCanvas();
      this.scheduleActiveJobSave();
      this._status = "Objekt auf der Buildplate zentriert.";
      this.render();
    }

    layFlatActiveObject() {
      this._transform.rx = 0;
      this._transform.ry = 0;
      this._transform.z = 0;
      this.clampTransform();
      if (this._activeJob) this._activeJob.transform = {...this._transform};
      this.updateModelPreview();
      this.renderMeshCanvas();
      this.scheduleActiveJobSave();
      this._status = "Flach-legen-Planung angewendet.";
      this.render();
    }

    snapTransformToGrid() {
      this._transform.x = Math.round(toNumber(this._transform.x, 0) / 10) * 10;
      this._transform.y = Math.round(toNumber(this._transform.y, 0) / 10) * 10;
      this._transform.z = Math.round(toNumber(this._transform.z, 0));
      this._transform.rz = Math.round(toNumber(this._transform.rz, 0) / 15) * 15;
      this.clampTransform();

      if (this._activeJob) this._activeJob.transform = {...this._transform};
      this.updateModelPreview();
      this.renderMeshCanvas();
      this.scheduleActiveJobSave();

      this._status = "Transform auf Raster gerundet.";
      this.render();
    }

    async duplicateActiveJob() {
      const source = this.buildDryRunJob();
      const name = `${this.jobName(source)} Kopie`;
      const transform = {
        ...defaultTransform(),
        ...(source.transform || {}),
        x: toNumber(source.transform?.x, 0) + 24,
        y: toNumber(source.transform?.y, 0) + 24
      };

      const plan = {
        ...(source.plan || {}),
        version: STUDIO_VERSION,
        source: source.source || source.origin || "studio",
        origin: source.source || source.origin || "studio",
        modelName: name,
        file_name: source.file_name || source.filename || name,
        filename: source.filename || source.file_name || name,
        file_path: source.file_path || source.path || "",
        path: source.file_path || source.path || "",
        model: {
          ...(source.model || {}),
          name,
          path: source.file_path || source.path || "",
          source: source.source || source.origin || "studio"
        },
        transform,
        profile_context: this.buildProfileContext(),
        real_slicing_enabled: false,
        direct_print_enabled: false,
        status: "prepared",
        stage: "waiting",
        message: "Duplizierter Studio-Job. Echter Slicer-Lauf ist deaktiviert."
      };

      try {
        const response = await this.ws({
          type:"printer_control_center/studio_jobs/create",
          serial:source.serial || "",
          plan
        });
        const job = response?.job || response || null;
        if (!job?.id) throw new Error("Backend returned no duplicated job id.");
        this.applyActiveJob(job, {status:false});
        this._status = `Studio-Job dupliziert: ${this.jobName(job)}.`;
      } catch (error) {
        this._status = `Duplizieren fehlgeschlagen: ${String(error?.message || error)}`;
      }

      this.render();
    }

    deleteActiveJob() {
      if (!this._activeJobId) {
        this._status = "Kein aktiver Studio-Job zum Entfernen ausgewählt.";
        this.render();
        return;
      }

      const removedName = this.jobName();
      this._jobs = (Array.isArray(this._jobs) ? this._jobs : []).filter((job) => String(job?.id) !== String(this._activeJobId));
      const next = this._jobs[0] || null;

      if (next) {
        this.applyActiveJob(next, {status:false, render:false});
      } else {
        this._activeJob = null;
        this._activeJobId = "";
        this._transform = defaultTransform();
        this._studioMesh = null;
        this._studioMeshJobId = "";
        this._studioMeshUrl = "";
      }

      this._status = `Studio-Job aus der aktiven Studio-Auswahl entfernt: ${removedName}.`;
      this.render();
    }

    activeJobPath() {
      const job = this._activeJob || this.buildDryRunJob();
      return String(job?.file_path || job?.path || job?.model?.path || job?.filename || job?.file_name || "").trim();
    }

    meshJobKey() {
      const job = this._activeJob || {};
      return `${job.id || ""}|${this.activeJobPath()}`;
    }

    async ensureStudioMeshLoaded(force=false) {
      if (!this._hass || this._studioMeshLoading) return;
      const path = this.activeJobPath();
      if (!path) return;

      const key = this.meshJobKey();
      if (!force && this._studioMesh && this._studioMeshJobId === key) return;

      this._studioMeshLoading = true;
      this._studioMeshError = "";
      this._studioMeshStatus = "Echtes Modell wird geladen …..";

      try {
        const url = await this.requestStudioMeshUrl();
        if (!url) throw new Error("Kein STL-/Geometrie-Link vom Backend erhalten.");
        this._studioMeshUrl = url;
        const response = await fetch(url, {credentials:"include"});
        if (!response.ok) throw new Error(`STL-Download HTTP ${response.status}`);
        const buffer = await response.arrayBuffer();
        this._studioMesh = this.parseStlMesh(buffer);
        this._studioMeshJobId = key;
        this._studioMeshStatus = `Echtes STL-Mesh geladen: ${this._studioMesh.triangles.length} Dreiecke.`;
      } catch (error) {
        this._studioMesh = null;
        this._studioMeshError = String(error?.message || error);
        this._studioMeshStatus = `Echtes Modell nicht geladen: ${this._studioMeshError}`;
      } finally {
        this._studioMeshLoading = false;
        this.render();
      }
    }

    async requestStudioMeshUrl() {
      const job = this._activeJob || this.buildDryRunJob();
      const path = this.activeJobPath();
      const serial = job?.serial || this._config?.serial || "";
      const source = String(job?.source || job?.origin || "archive").toLowerCase();
      const filename = job?.filename || job?.file_name || path.split("/").pop() || "";

      const modelStlSource = source === "sd" || source === "sdcard" || source === "printer_sd"
        ? "sd_model_stl"
        : "archive_model_stl";

      const model3mfSource = source === "sd" || source === "sdcard" || source === "printer_sd"
        ? "sd_model_3mf"
        : "archive_model_3mf";

      const requests = [
        {type:"printer_control_center/project/link", serial, source:modelStlSource, path, file_path:path, filename},
        {type:"printer_control_center/project/link", serial, source:modelStlSource, path, file_path:path, filename, format:"stl"},
        {type:"printer_control_center/project/link", serial, source:model3mfSource, path, file_path:path, filename, format:"stl"},
        {type:"printer_control_center/project/link", serial, source, path, file_path:path, filename, mode:"model_stl", kind:"model_stl", target:"stl"},
      ];

      for (const request of requests) {
        try {
          const response = await this.ws(request);
          const url = this.extractMeshUrl(response);
          if (url) return url;
        } catch (_error) {}
      }

      return "";
    }

    extractMeshUrl(response) {
      const candidates = [
        response?.url,
        response?.href,
        response?.download_url,
        response?.absolute_download_url,
        response?.signed_url,
        response?.link,
        response?.data?.url,
        response?.data?.download_url,
        response?.result?.url,
        response?.result?.download_url,
      ];

      for (const value of candidates) {
        const text = String(value || "").trim();
        if (text) return text;
      }

      return "";
    }

    parseStlMesh(buffer) {
      const view = new DataView(buffer);
      const bytes = new Uint8Array(buffer);
      const decoder = new TextDecoder("utf-8", {fatal:false});
      const maybeText = decoder.decode(bytes.slice(0, Math.min(bytes.length, 512))).trim().toLowerCase();

      let triangles = [];

      if (bytes.length >= 84) {
        const declared = view.getUint32(80, true);
        const expected = 84 + declared * 50;
        if (declared > 0 && expected <= bytes.length) {
          const maxTriangles = Math.min(declared, 12000);
          const step = Math.max(1, Math.ceil(declared / maxTriangles));
          for (let i = 0; i < declared; i += step) {
            const offset = 84 + i * 50 + 12;
            if (offset + 36 > bytes.length) break;
            triangles.push([
              [view.getFloat32(offset, true), view.getFloat32(offset + 4, true), view.getFloat32(offset + 8, true)],
              [view.getFloat32(offset + 12, true), view.getFloat32(offset + 16, true), view.getFloat32(offset + 20, true)],
              [view.getFloat32(offset + 24, true), view.getFloat32(offset + 28, true), view.getFloat32(offset + 32, true)]
            ]);
          }
        }
      }

      if (!triangles.length && maybeText.startsWith("solid")) {
        const text = decoder.decode(bytes);
        const values = [...text.matchAll(/vertex\s+([\-0-9.eE]+)\s+([\-0-9.eE]+)\s+([\-0-9.eE]+)/g)]
          .map((match) => [Number(match[1]), Number(match[2]), Number(match[3])])
          .filter((point) => point.every(Number.isFinite));
        for (let i = 0; i + 2 < values.length; i += 3) {
          triangles.push([values[i], values[i + 1], values[i + 2]]);
        }
      }

      if (!triangles.length) {
        throw new Error("STL-Geometrie konnte nicht gelesen werden.");
      }

      const points = triangles.flat();
      const min = [Infinity, Infinity, Infinity];
      const max = [-Infinity, -Infinity, -Infinity];
      for (const p of points) {
        for (let i = 0; i < 3; i++) {
          min[i] = Math.min(min[i], p[i]);
          max[i] = Math.max(max[i], p[i]);
        }
      }

      const center = [(min[0]+max[0])/2, (min[1]+max[1])/2, (min[2]+max[2])/2];
      const size = Math.max(max[0]-min[0], max[1]-min[1], max[2]-min[2], 1);

      return {triangles, min, max, center, size};
    }

    renderMeshCanvas() {
      const canvas = this.shadowRoot?.querySelector(".studio-mesh-canvas");
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      const width = Math.round(rect.width * dpr);
      const height = Math.round(rect.height * dpr);
      if (canvas.width !== width) canvas.width = width;
      if (canvas.height !== height) canvas.height = height;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);

      const mesh = this._studioMesh;
      if (!mesh?.triangles?.length) return;

      const t = this.clampTransform();
      const zoom = Math.max(0.25, Math.min(4, toNumber(this._viewZoom, 1)));
      const base = Math.min(width, height) * 0.34 * zoom * Math.max(0.05, toNumber(t.scale, 100) / 100);
      const stretchX = Math.max(0.05, toNumber(t.sx, 100) / 100) * (Number(t.mx) === -1 ? -1 : 1);
      const stretchY = Math.max(0.05, toNumber(t.sy, 100) / 100) * (Number(t.my) === -1 ? -1 : 1);
      const stretchZ = Math.max(0.05, toNumber(t.sz, 100) / 100) * (Number(t.mz) === -1 ? -1 : 1);
      const rz = toNumber(t.rz, 0) * Math.PI / 180;
      const cos = Math.cos(rz);
      const sin = Math.sin(rz);
      const offsetX = width / 2 + toNumber(t.x, 0) * dpr;
      const offsetY = height / 2 + toNumber(t.y, 0) * dpr;

      const project = (p) => {
        let x = ((p[0] - mesh.center[0]) / mesh.size) * stretchX;
        let y = ((p[1] - mesh.center[1]) / mesh.size) * stretchY;
        let z = ((p[2] - mesh.center[2]) / mesh.size) * stretchZ;

        const rx = x * cos - y * sin;
        const ry = x * sin + y * cos;

        return [
          offsetX + (rx - ry * 0.28) * base,
          offsetY + (ry * 0.48 - z * 0.72) * base
        ];
      };

      ctx.save();
      ctx.lineWidth = Math.max(0.75, dpr);
      ctx.strokeStyle = "rgba(0,210,255,.82)";
      ctx.fillStyle = "rgba(0,169,214,.08)";

      const maxDraw = Math.min(mesh.triangles.length, 9000);
      const step = Math.max(1, Math.ceil(mesh.triangles.length / maxDraw));

      for (let i = 0; i < mesh.triangles.length; i += step) {
        const tri = mesh.triangles[i];
        const a = project(tri[0]);
        const b = project(tri[1]);
        const c = project(tri[2]);

        ctx.beginPath();
        ctx.moveTo(a[0], a[1]);
        ctx.lineTo(b[0], b[1]);
        ctx.lineTo(c[0], c[1]);
        ctx.closePath();
        ctx.stroke();
      }

      ctx.restore();
    }

    isEditingTransformInput() {
      const active = this.shadowRoot?.activeElement;
      return Boolean(active?.dataset?.field);
    }

    clampTransform() {
      const t = this._transform || defaultTransform();
      t.x = toNumber(t.x, 0);
      t.y = toNumber(t.y, 0);
      t.z = toNumber(t.z, 0);
      t.rx = toNumber(t.rx, 0);
      t.ry = toNumber(t.ry, 0);
      t.rz = toNumber(t.rz, 0);
      t.scale = Math.max(5, Math.min(500, toNumber(t.scale, 100)));
      t.sx = Math.max(5, Math.min(500, toNumber(t.sx, 100)));
      t.sy = Math.max(5, Math.min(500, toNumber(t.sy, 100)));
      t.sz = Math.max(5, Math.min(500, toNumber(t.sz, 100)));
      t.skewX = Math.max(-75, Math.min(75, toNumber(t.skewX, 0)));
      t.skewY = Math.max(-75, Math.min(75, toNumber(t.skewY, 0)));
      t.mx = Number(t.mx) === -1 ? -1 : 1;
      t.my = Number(t.my) === -1 ? -1 : 1;
      t.mz = Number(t.mz) === -1 ? -1 : 1;
      this._transform = t;
      return t;
    }

    modelBoxStyle(t=this._transform) {
      const zStretch = Math.max(5, Math.min(500, toNumber(t?.sz, 100))) / 100;
      const height = Math.max(34, Math.round(110 * zStretch));
      return `width:140px;height:${height}px;`;
    }

    objectTransformStyle(t=this._transform) {
      const safe = this.normalizeTransform(t || this._transform || defaultTransform());
      this._transform = {...defaultTransform(), ...safe};

      const scale = Math.max(5, Math.min(500, toNumber(safe.scale, 100))) / 100;
      const stretchX = Math.max(5, Math.min(500, toNumber(safe.sx, 100))) / 100;
      const stretchY = Math.max(5, Math.min(500, toNumber(safe.sy, 100))) / 100;
      const mirrorX = Number(safe.mx) === -1 ? -1 : 1;
      const mirrorY = Number(safe.my) === -1 ? -1 : 1;
      const mirrorZ = Number(safe.mz) === -1 ? -1 : 1;
      const zoom = Math.max(0.25, Math.min(4, toNumber(this._viewZoom, 1)));

      const visualScaleX = scale * stretchX * mirrorX * zoom;
      const visualScaleY = scale * stretchY * mirrorY * zoom;
      const rx = 58 + toNumber(safe.rx, 0);
      const ry = toNumber(safe.ry, 0) + (mirrorZ === -1 ? 180 : 0);
      const rz = toNumber(safe.rz, 0);
      const skewX = toNumber(safe.skewX, 0);
      const skewY = toNumber(safe.skewY, 0);

      return `
        transform:
          translate(calc(-50% + ${safe.x}px), calc(-50% + ${safe.y}px))
          rotateX(${rx}deg)
          rotateY(${ry}deg)
          rotateZ(${rz}deg)
          skew(${skewX}deg, ${skewY}deg)
          scaleX(${visualScaleX})
          scaleY(${visualScaleY});
      `;
    }

    updateModelPreview() {
      const model = this.shadowRoot?.querySelector(".model");
      if (model) {
        const t = this.clampTransform();
        model.style.width = "140px";
        model.style.height = `${Math.max(34, Math.round(110 * (Math.max(5, Math.min(500, toNumber(t.sz, 100))) / 100)))}px`;
        model.style.transform = this.objectTransformStyle(t).replace("transform:", "").replace(/;/g, "").trim();
      }

      const zoomBadge = this.shadowRoot?.querySelector("[data-view-zoom-label]");
      if (zoomBadge) {
        zoomBadge.textContent = `${Math.round(Math.max(0.25, Math.min(4, toNumber(this._viewZoom, 1))) * 100)}%`;
      }
    }

    setTransformValue(field, value, options={}) {
      this._transform[field] = value;
      this.clampTransform();
      if (this._activeJob) this._activeJob.transform = {...this._transform};
      this.updateModelPreview();
      this.scheduleActiveJobSave();
      if (options.status) this._status = options.status;
      if (options.render && !this.isEditingTransformInput()) this.render();
    }

    adjustTransform(field, delta, options={}) {
      const current = toNumber(this._transform[field], 0);
      this.setTransformValue(field, current + delta, options);
    }

    toggleMirror(axis) {
      const field = axis === "y" ? "my" : axis === "z" ? "mz" : "mx";
      this._transform[field] = Number(this._transform[field]) === -1 ? 1 : -1;
      if (this._activeJob) this._activeJob.transform = {...this._transform};
      this.updateModelPreview();
      this.scheduleActiveJobSave();
      this._status = `Spiegel ${axis.toUpperCase()} ${this._transform[field] === -1 ? "aktiv" : "aus"}.`;
      this.render();
    }

    setViewZoom(value) {
      this._viewZoom = Math.max(0.25, Math.min(4, toNumber(value, 1)));
      this.updateModelPreview();
      this._status = `Studio-Zoom ${Math.round(this._viewZoom * 100)}%.`;
      this.render();
    }

    buildDryRunJob() {
      const active = this._activeJob || {};
      const id = active.id || "isolated-studio-preview";
      const name = this.jobName(active);
      const path = this.jobPath(active);
      const source = this.jobSource(active);

      return {
        ...active,
        id,
        name,
        modelName: name,
        file_name: active.file_name || active.filename || name,
        filename: active.filename || active.file_name || name,
        file_path: path,
        path,
        source,
        origin: source,
        model: {
          ...(active.model || {}),
          name,
          path,
          source
        },
        transform: {...this._transform},
        profile_context: this.buildProfileContext(),
        real_slicing_enabled: false,
        direct_print_enabled: false
      };
    }

    buildLocalStudioPlan(dryRun) {
      const target = dryRun?.job || this.buildDryRunJob();
      const profileContext = dryRun?.profile_context || target.profile_context || this.buildProfileContext();
      const dry = dryRun?.dry_run || {};
      const now = new Date().toISOString();

      return {
        version: STUDIO_VERSION,
        schema: 1,
        source: "frontend_alpha22_fallback",
        updated_at: now,
        job: {
          id: target.id,
          name: this.jobName(target),
          file_name: target.file_name || target.filename || this.jobName(target),
          file_path: target.file_path || target.path || "",
          source: target.source || target.origin || "frontend",
          updated_at: now
        },
        profile_context: {
          ...profileContext,
          valid: profileContext.valid !== false,
          warnings: Array.isArray(profileContext.warnings) ? profileContext.warnings : []
        },
        dry_run: {
          ok: dry.ok !== false,
          job_present: true,
          profile_context_valid: true,
          status: dry.status || (dry.ok === false ? "dry_run_incomplete" : "dry_run_ready"),
          warnings: Array.isArray(dry.warnings) ? dry.warnings : [],
          updated_at: dry.updated_at || now,
          real_slicing_enabled: false,
          direct_print_enabled: false
        },
        slicer: {
          stage: "planning_only",
          real_slicing_enabled: false,
          direct_print_enabled: false,
          worker_enabled: false
        },
        warnings: Array.isArray(dry.warnings) ? dry.warnings : [],
        valid: dry.ok !== false && profileContext.valid !== false
      };
    }

    async runDryRunPlan() {
      if (!this._hass) {
        this._status = "Dry-Run konnte nicht gestartet werden: Home Assistant WebSocket fehlt.";
        this.render();
        return;
      }

      await this.ensureStudioJobsLoaded(false);
      const targetJob = this.buildDryRunJob();
      this._status = `Dry-Run-Plan wird geprueft: ${this.jobName(targetJob)} ...`;
      this.render();

      try {
        const payload = {
          type: "printer_control_center/studio_worker/dry_run",
          target_job: targetJob,
          profile_context: this.buildProfileContext()
        };
        if (targetJob.id && targetJob.id !== "isolated-studio-preview") payload.job_id = String(targetJob.id);

        const result = await this.ws(payload);
        const returnedJob = result?.job || null;
        const patch = result?.result || result?.dryRun || result?.patch || returnedJob || result || {};
        const mergedJob = returnedJob || {...targetJob, ...patch};

        if (!patch.profile_context) patch.profile_context = this.buildProfileContext();
        if (!patch.dry_run) {
          patch.dry_run = {
            ok: patch.status !== "dry_run_incomplete",
            real_slicing_enabled: false,
            direct_print_enabled: false,
            warnings: []
          };
        }

        patch.job = mergedJob;
        patch.studio_plan = patch.studio_plan || mergedJob.studio_plan || this.buildLocalStudioPlan(patch);

        this.applyActiveJob(mergedJob, {render:false, status:false});
        this._lastDryRun = patch;
        this._lastStudioPlan = patch.studio_plan;
        this._status = `Dry-Run-Plan erfolgreich geprueft: ${this.jobName(mergedJob)}. Echtes Slicen und Direktdruck bleiben deaktiviert.`;
      } catch (error) {
        this._lastDryRun = {
          status: "dry_run_incomplete",
          job: targetJob,
          dry_run: {
            ok: false,
            warnings: [String(error?.message || error)],
            real_slicing_enabled: false,
            direct_print_enabled: false
          },
          profile_context: this.buildProfileContext()
        };
        this._lastDryRun.studio_plan = this.buildLocalStudioPlan(this._lastDryRun);
        this._lastStudioPlan = this._lastDryRun.studio_plan;
        this._status = "Dry-Run-Plan meldet einen Hinweis, Studio-Plan-Fallback ist verfuegbar.";
      }

      this.render();
    }

    async runHealthCheck() {
      if (!this._hass) {
        this._health = {
          status: "warnings",
          summary: {ok: 0, warnings: 1, checks: 1},
          checks: [{name: "websocket_connection", ok: false, detail: "Home Assistant WebSocket connection is not available."}],
          safety: {real_slicing_enabled: false, direct_print_enabled: false, stage: "frontend_only"}
        };
        this._status = "Health check could not use Home Assistant WebSocket.";
        this.render();
        return;
      }

      await this.ensureStudioJobsLoaded(false);
      this._status = "Running Studio health check ...";
      this.render();

      try {
        const jobs = this._activeJob ? [this._activeJob] : this._jobs;
        this._health = await this.ws({
          type: "printer_control_center/studio/health",
          jobs,
          dry_run: {
            ...(this._lastDryRun || {}),
            job: this._activeJob || this.buildDryRunJob(),
            studio_plan: this._lastStudioPlan || this._activeJob?.studio_plan || null,
            profile_context: this.buildProfileContext()
          }
        });
        this._status = "Studio health check completed.";
      } catch (error) {
        this._health = {
          status: "warnings",
          summary: {ok: 0, warnings: 1, checks: 1},
          checks: [{name: "studio_health_websocket", ok: false, detail: String(error?.message || error)}],
          safety: {real_slicing_enabled: false, direct_print_enabled: false, stage: "diagnostics_only"}
        };
        this._status = "Studio health check returned a warning.";
      }

      this.render();
    }

    handleInput(event) {
      const field = event.target?.dataset?.field;
      if (!field) return;

      this._transform[field] = toNumber(event.target.value, this._transform[field] || 0);
      this.clampTransform();

      if (this._activeJob) this._activeJob.transform = {...this._transform};
      this.updateModelPreview();
      this.scheduleActiveJobSave();

      // Beta5: no full render on every keystroke.
      // This keeps cursor position and selected text intact in mobile and desktop browsers.
    }

    handleChange(event) {
      const field = event.target?.dataset?.field;
      if (!field) return;

      this._transform[field] = toNumber(event.target.value, this._transform[field] || 0);
      this.clampTransform();

      if (this._activeJob) this._activeJob.transform = {...this._transform};
      this.updateModelPreview();
      this.scheduleActiveJobSave();

      // Beta5: render is intentionally skipped while editing to avoid cursor jumps.
    }

    handleClick(event) {
      const action = event.target?.dataset?.action;
      if (!action) return;

      event.preventDefault();
      event.stopPropagation();

      if (action === "mode") {
        this._mode = event.target.dataset.mode || "move";
        this.render();
      }

      if (action === "jobs-refresh") {
        this._jobsLoaded = false;
        this.ensureStudioJobsLoaded(true);
      }

      if (action === "job-select") {
        const id = event.target.dataset.jobId || "";
        const job = this._jobs.find((entry) => String(entry?.id) === String(id));
        if (job) this.applyActiveJob(job);
      }

      if (action === "zoom-in") {
        this.setViewZoom((this._viewZoom || 1) + 0.15);
      }

      if (action === "zoom-out") {
        this.setViewZoom((this._viewZoom || 1) - 0.15);
      }

      if (action === "rotate-left") {
        this.adjustTransform("rz", -45, {status:"Rotation Z -45 Grad angewendet.", render:true});
      }

      if (action === "rotate-right") {
        this.adjustTransform("rz", 45, {status:"Rotation Z +45 Grad angewendet.", render:true});
      }

      if (action === "scale-down") {
        this.adjustTransform("scale", -10, {status:"Skalierung reduziert.", render:true});
      }

      if (action === "scale-up") {
        this.adjustTransform("scale", 10, {status:"Skalierung erhoeht.", render:true});
      }

      if (action === "mirror-x") {
        this.toggleMirror("x");
      }

      if (action === "mirror-y") {
        this.toggleMirror("y");
      }

      if (action === "mirror-z") {
        this.toggleMirror("z");
      }

      if (action === "skew-left") {
        this.adjustTransform("skewX", -5, {status:"Zerren X -5 Grad angewendet.", render:true});
      }

      if (action === "skew-right") {
        this.adjustTransform("skewX", 5, {status:"Zerren X +5 Grad angewendet.", render:true});
      }

      if (action === "toggle-shortcuts") {
        this._showShortcutHelp = !this._showShortcutHelp;
        this._status = this._showShortcutHelp ? "Tastaturhilfe eingeblendet." : "Tastaturhilfe ausgeblendet.";
        this.render();
        return;
      }

      if (action === "close-context") {
        this._studioContextMenu = null;
        this.render();
        return;
      }

      if (action === "reload-mesh") {
        this.ensureStudioMeshLoaded(true);
        return;
      }

      if (action === "snap-grid") {
        this.snapTransformToGrid();
        return;
      }

      if (action === "center") {
        this._transform.x = 0;
        this._transform.y = 0;
        this.clampTransform();
        if (this._activeJob) this._activeJob.transform = {...this._transform};
        this.updateModelPreview();
        this.scheduleActiveJobSave();
        this._status = "Objekt auf der Buildplate zentriert.";
        this.render();
      }

      if (action === "lay-flat") {
        this._transform.rx = 0;
        this._transform.ry = 0;
        this._transform.z = 0;
        this.clampTransform();
        if (this._activeJob) this._activeJob.transform = {...this._transform};
        this.updateModelPreview();
        this.scheduleActiveJobSave();
        this._status = "Flach-legen-Planung angewendet.";
        this.render();
      }

      if (action === "reset") {
        this._transform = defaultTransform();
        this._viewZoom = 1;
        if (this._activeJob) this._activeJob.transform = {...this._transform};
        this._lastDryRun = null;
        this._lastStudioPlan = null;
        this._health = null;
        this.updateModelPreview();
        this.scheduleActiveJobSave();
        this._status = "Transform, Spiegelung, Zerren und Zoom zurückgesetzt.";
        this.render();
      }

      if (action === "duplicate") {
        this.duplicateActiveJob();
        return;
      }

      if (action === "delete") {
        this.deleteActiveJob();
        return;
      }

      if (action === "duplicate") {
        this._status = "Duplicate is planned for the multi-object Studio step.";
        this.render();
      }

      if (action === "delete") {
        this._status = "Delete is disabled in this Beta Foundation build.";
        this.render();
      }

      if (action === "slice") {
        this.runDryRunPlan();
      }

      if (action === "health") {
        this.runHealthCheck();
      }
    }

    toolButton(label, mode) {
      const active = this._mode === mode ? " active" : "";
      return `<button class="tool${active}" data-action="mode" data-mode="${escStudio(mode)}">${escStudio(label)}</button>`;
    }

    input(label, field, suffix = "") {
      const value = this._transform[field];
      return `
        <label class="field">
          <span>${escStudio(label)}</span>
          <input type="number" data-field="${escStudio(field)}" value="${escStudio(value)}">
          ${suffix ? `<em>${escStudio(suffix)}</em>` : ""}
        </label>
      `;
    }

    captureUiState() {
      const active = this.shadowRoot?.activeElement;
      return {
        scrollY: Number(window.scrollY || 0),
        field: active?.dataset?.field || "",
        start: Number.isInteger(active?.selectionStart) ? active.selectionStart : null,
        end: Number.isInteger(active?.selectionEnd) ? active.selectionEnd : null
      };
    }

    restoreUiState(state) {
      if (!state) return;
      window.requestAnimationFrame(() => {
        if (state.field) {
          const input = this.shadowRoot?.querySelector(`[data-field="${CSS.escape(state.field)}"]`);
          if (input) {
            input.focus({preventScroll:true});
            try { input.setSelectionRange(state.start ?? input.value.length, state.end ?? input.value.length); } catch (_error) {}
          }
        }
        if (Number.isFinite(state.scrollY)) {
          try { window.scrollTo(window.scrollX || 0, state.scrollY); } catch (_error) {}
        }
      });
    }

    renderJobsList() {
      const jobs = Array.isArray(this._jobs) ? this._jobs.slice(0, 8) : [];
      if (!jobs.length) {
        return `<div class="health-note">Noch kein persistenter Studio-Job. Oeffne ein 3MF-Modell in der Galerie ueber "In 3D-Studio öffnen".</div>`;
      }

      return jobs.map((job) => {
        const active = String(job?.id) === String(this._activeJobId);
        return `
          <button class="job-row ${active ? "active" : ""}" data-action="job-select" data-job-id="${escStudio(job?.id || "")}">
            <strong>${escStudio(this.jobName(job))}</strong>
            <small>${escStudio(this.jobSource(job))} - ${escStudio(this.jobPath(job) || "kein Pfad")}</small>
          </button>
        `;
      }).join("");
    }

    renderPlanSummary() {
      if (!this._lastDryRun && !this._lastStudioPlan) {
        return `
          <div class="plan-note">
            Noch kein Dry-Run-Plan erzeugt. "Plan prüfen" verwendet den aktiven persistenten Studio-Job ohne echtes Slicen.
          </div>
        `;
      }

      const dry = this._lastDryRun?.dry_run || {};
      const plan = this._lastStudioPlan || this._lastDryRun?.studio_plan || {};
      const profile = plan.profile_context || this._lastDryRun?.profile_context || {};
      const printer = profile.printer_profile?.name || "Bambu A1 / X1 / P1 / H2";
      const filament = profile.filament_profile?.name || "PLA Generic";
      const process = profile.process_profile?.name || "0.20 mm Standard";
      const job = plan.job || this._activeJob || {};

      return `
        <div class="plan-summary">
          <span class="badge ${dry.ok === false ? "warn" : "ok"}">${dry.ok === false ? "Plan Hinweis" : "Plan bereit"}</span>
          <span class="badge">Slicen ${dry.real_slicing_enabled ? "aktiv" : "aus"}</span>
          <span class="badge">Druck ${dry.direct_print_enabled ? "aktiv" : "aus"}</span>
          <div class="health-row"><span>Modell</span><strong>${escStudio(job.name || this.jobName())}</strong></div>
          <div class="health-row"><span>Pfad</span><strong>${escStudio(job.file_path || this.jobPath() || "kein Pfad")}</strong></div>
          <div class="health-row"><span>Plan-Drucker</span><strong>${escStudio(printer)}</strong></div>
          <div class="health-row"><span>Plan-Filament</span><strong>${escStudio(filament)}</strong></div>
          <div class="health-row"><span>Plan-Prozess</span><strong>${escStudio(process)}</strong></div>
          <div class="health-row"><span>Planstruktur</span><strong>${plan.version ? escStudio(plan.version) : "noch nicht persistiert"}</strong></div>
        </div>
      `;
    }

    renderHealth() {
      const health = this._health;
      if (!health) {
        return `<div class="health-note">No health result yet. Use "Plan prüfen" first, then "Health prüfen".</div>`;
      }

      const checks = Array.isArray(health.checks) ? health.checks : [];
      const rows = checks.map((check) => `
        <div class="health-row">
          <span>${escStudio(check.name)}</span>
          <strong>${check.ok ? "OK" : "Hinweis"} - ${escStudio(check.detail)}</strong>
        </div>
      `).join("");

      return `
        <div class="health-summary">
          <span class="badge ${health.status === "ok" ? "ok" : "warn"}">${escStudio(health.status || "unknown")}</span>
          <span class="badge">OK ${escStudio(health.summary?.ok ?? 0)} / Hinweise ${escStudio(health.summary?.warnings ?? 0)}</span>
          <span class="badge">Checks ${escStudio(health.summary?.checks ?? checks.length)}</span>
          <span class="badge">Slicen ${health.safety?.real_slicing_enabled ? "aktiv" : "aus"}</span>
          <span class="badge">Druck ${health.safety?.direct_print_enabled ? "aktiv" : "aus"}</span>
        </div>
        ${rows}
      `;
    }

    render() {
      if (!this.shadowRoot) return;
      const uiState = this.captureUiState();

      const t = this._transform;
      const labels = this.profileLabels();
      const activeName = this.jobName();
      const activePath = this.jobPath();
      const activeSource = this.jobSource();

      const objectStyle = this.objectTransformStyle(t);
      const modelBoxStyle = this.modelBoxStyle(t);

      this.shadowRoot.innerHTML = `
        <ha-card>
          <style>
            :host{display:block;--pcc-accent:#00a9d6;--pcc-panel:rgba(20,31,34,.92);--pcc-border:rgba(0,169,214,.45);--pcc-muted:rgba(255,255,255,.68);}
            .studio-shell{min-height:720px;background:linear-gradient(135deg,rgba(5,9,10,.96),rgba(14,30,34,.96));color:var(--primary-text-color,#fff);border:1px solid var(--pcc-border);border-radius:12px;overflow:hidden;}
            .studio-topbar{display:flex;gap:8px;align-items:center;flex-wrap:wrap;padding:10px 12px;border-bottom:1px solid var(--pcc-border);background:rgba(0,0,0,.22);}
            .studio-topbar h2{margin:0 14px 0 0;font-size:18px;white-space:nowrap;}
            button.tool,button.action{min-height:32px;border:1px solid var(--pcc-border);background:rgba(0,169,214,.10);color:var(--primary-text-color,#fff);border-radius:9px;padding:5px 10px;cursor:pointer;}
            button.tool.active,.job-row.active{background:rgba(0,169,214,.35);box-shadow:0 0 0 1px rgba(0,169,214,.65) inset;}
            .studio-grid{display:grid;grid-template-columns:280px minmax(360px,1fr) 340px;gap:12px;padding:12px;}
            .panel{border:1px solid var(--pcc-border);border-radius:12px;background:var(--pcc-panel);padding:12px;min-width:0;}
            .panel h3{margin:0 0 10px 0;font-size:14px;}
            .profile-row,.health-row{display:flex;justify-content:space-between;gap:10px;border-top:1px solid rgba(255,255,255,.12);padding:7px 0;font-size:12px;min-width:0;}
            .profile-row span,.health-row span{color:var(--pcc-muted);}
            .profile-row strong,.health-row strong{min-width:0;overflow:hidden;text-overflow:ellipsis;}
            .job-list{display:grid;gap:6px;margin-top:10px;}
            .job-row{display:grid;gap:2px;text-align:left;border:1px solid rgba(0,169,214,.24);border-radius:9px;background:rgba(0,0,0,.18);color:inherit;padding:7px;cursor:pointer;}
            .job-row small{color:var(--pcc-muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
            .buildplate-wrap{min-height:610px;display:flex;flex-direction:column;gap:10px;}
            .buildplate{position:relative;flex:1;min-height:520px;border:1px solid var(--pcc-border);border-radius:16px;overflow:hidden;background:linear-gradient(rgba(0,169,214,.16) 1px,transparent 1px),linear-gradient(90deg,rgba(0,169,214,.16) 1px,transparent 1px),radial-gradient(circle at center,rgba(0,169,214,.16),rgba(0,0,0,.18));background-size:32px 32px,32px 32px,100% 100%;perspective:900px;}
            .plate-label{position:absolute;left:14px;top:12px;font-size:12px;color:var(--pcc-muted);}
            .model-label{position:absolute;left:50%;top:calc(50% + 82px);transform:translateX(-50%);font-size:12px;color:var(--pcc-muted);max-width:70%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
            .model{position:absolute;left:50%;top:50%;${modelBoxStyle}border-radius:18px;background:linear-gradient(145deg,#00a9d6,#15576a);border:1px solid rgba(255,255,255,.45);box-shadow:0 22px 48px rgba(0,0,0,.45);transform-origin:center center;transform-style:preserve-3d;will-change:transform,width,height;${objectStyle}}
            .model::after{content:"";position:absolute;inset:16px;border-radius:14px;border:1px solid rgba(255,255,255,.28);}
            .status,.plan-note,.plan-summary{border:1px solid rgba(255,255,255,.16);border-radius:10px;padding:10px;font-size:12px;color:var(--pcc-muted);background:rgba(0,0,0,.20);}
            .field{display:grid;grid-template-columns:80px 1fr 32px;gap:6px;align-items:center;margin:7px 0;font-size:12px;}
            .field span{color:var(--pcc-muted);}
            .field input{width:100%;box-sizing:border-box;border:1px solid var(--pcc-border);border-radius:8px;background:rgba(0,0,0,.25);color:var(--primary-text-color,#fff);min-height:30px;padding:4px 7px;}
            .field em{font-style:normal;color:var(--pcc-muted);}
            .action-grid{display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-top:10px;}
            .badge{display:inline-flex;border:1px solid var(--pcc-border);border-radius:999px;min-height:22px;align-items:center;padding:2px 8px;margin:2px 4px 2px 0;font-size:11px;}
            .badge.ok{border-color:rgba(60,180,90,.65)}
            .badge.warn{border-color:rgba(230,160,40,.75)}
            .health-note{color:var(--pcc-muted);font-size:12px;line-height:1.45;}
            .buildplate{touch-action:none;cursor:crosshair;}
            .model{cursor:grab;}
            .model.dragging{cursor:grabbing;box-shadow:0 28px 60px rgba(0,0,0,.58),0 0 0 2px rgba(0,169,214,.65);}
            .plate-help{position:absolute;right:14px;top:12px;font-size:11px;color:var(--pcc-muted);text-align:right;line-height:1.35;}
            .action{min-height:28px;padding:5px 9px;font-size:12px;line-height:1.1;}
            .action-grid{gap:6px;}
            .model-label{pointer-events:none;}
            .studio-mesh-canvas{position:absolute;inset:0;width:100%;height:100%;z-index:2;pointer-events:auto;}
            .studio-model-image{position:absolute;inset:0;z-index:1;width:100%;height:100%;object-fit:contain;pointer-events:auto;filter:drop-shadow(0 20px 34px rgba(0,0,0,.5));opacity:.92;}
            .buildplate.mesh-loaded .studio-model-image{opacity:.22;}
            .studio-context.beta4-floating-context{position:fixed!important;z-index:2147483000!important;}
            .mesh-status{position:absolute;left:14px;bottom:12px;z-index:5;font-size:11px;color:var(--pcc-muted);max-width:56%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
            .buildplate.mesh-loaded .model{background:rgba(0,169,214,.08);border-style:dashed;opacity:.45;}
            .studio-context{position:absolute;z-index:30;min-width:158px;padding:8px;border:1px solid var(--pcc-border);border-radius:12px;background:rgba(5,18,22,.96);box-shadow:0 20px 40px rgba(0,0,0,.42);}
            .studio-context .action{display:block;width:100%;margin:3px 0;text-align:left;}
            .shortcut-help{margin-top:10px;padding:10px;border:1px solid var(--pcc-border);border-radius:12px;background:rgba(0,169,214,.08);font-size:12px;line-height:1.45;}
            .studio-compact-actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px;}
            @media(max-width:1100px){.studio-grid{grid-template-columns:1fr}.buildplate-wrap{min-height:520px}}
          </style>

          <div class="studio-shell" tabindex="0">
            <div class="studio-topbar">
              <h2>3D-Studio / CAD-Vorschau</h2>
              ${this.toolButton("Importieren","import")}
              ${this.toolButton("Verschieben","move")}
              ${this.toolButton("Drehen","rotate")}
              ${this.toolButton("Skalieren","scale")}
              <button class="action" data-action="zoom-out">Zoom -</button>
              <button class="action" data-action="zoom-in">Zoom +</button>
              <button class="action" data-action="rotate-left">Rot -45</button>
              <button class="action" data-action="rotate-right">Rot +45</button>
              <button class="action" data-action="scale-down">Scale -</button>
              <button class="action" data-action="scale-up">Scale +</button>
              <button class="action" data-action="mirror-x">Spiegel X</button>
              <button class="action" data-action="mirror-y">Spiegel Y</button>
              <button class="action" data-action="mirror-z">Spiegel Z</button>
              <button class="action" data-action="skew-left">Zerr X -</button>
              <button class="action" data-action="skew-right">Zerr X +</button>
              <button class="action" data-action="snap-grid">Raster</button>
              <button class="action" data-action="duplicate">Duplizieren</button>
              <button class="action" data-action="delete">Löschen</button>
              <button class="action" data-action="center">Zentrieren</button>
              <button class="action" data-action="lay-flat">Flach legen</button>
              <button class="action" data-action="slice">Plan prüfen</button>
              <button class="action" data-action="health">Health prüfen</button>
              <button class="action" data-action="jobs-refresh">Jobs neu laden</button>
            </div>

            <div class="studio-grid">
              <aside class="panel">
                <h3>Projekt</h3>
                <div class="profile-row"><span>Aktives Modell</span><strong title="${escStudio(activeName)}">${escStudio(activeName)}</strong></div>
                <div class="profile-row"><span>Quelle</span><strong>${escStudio(activeSource)}</strong></div>
                <div class="profile-row"><span>Pfad</span><strong title="${escStudio(activePath)}">${escStudio(activePath || "kein Galeriepfad")}</strong></div>
                <div class="profile-row"><span>Drucker</span><strong>${escStudio(labels.printer)}</strong></div>
                <div class="profile-row"><span>Druckplatte</span><strong>${escStudio(labels.plate)}</strong></div>
                <div class="profile-row"><span>Duese</span><strong>${escStudio(labels.nozzle)}</strong></div>
                <div class="profile-row"><span>Filament</span><strong>${escStudio(labels.filament)}</strong></div>
                <div class="profile-row"><span>Prozess</span><strong>${escStudio(labels.process)}</strong></div>
                <div class="profile-row"><span>Slicer</span><strong>planning_only</strong></div>
                <div class="profile-row"><span>Direktdruck</span><strong>deaktiviert</strong></div>
                <h3 style="margin-top:16px">Studio-Jobs</h3>
                <div class="job-list">${this.renderJobsList()}</div>
              </aside>

              <main class="buildplate-wrap">
                <div class="buildplate ${this._studioMesh ? "mesh-loaded" : ""}">
                  <div class="plate-label">Buildplate - beta5 Studio Navigation + Preview Handoff</div>
                  <div class="plate-help">Drag: Modell ziehen<br>Ctrl/Alt + Mausrad: Zoom<br>Doppelklick: Position setzen<br>Pfeile/Q/E/+/-/G: Tastatur</div>
                  <canvas class="studio-mesh-canvas" title="Echtes STL-/Geometrie-Mesh"></canvas>
                  ${this._studioModelImageUrl ? html`
                    <img class="studio-model-image" src="${this._studioModelImageUrl}" alt="Echtes Modellbild">
                  ` : ""}
                  <div class="mesh-status">${escStudio(this._studioMeshStatus || "Echtes Modell noch nicht geladen.")}</div>
                  <div class="model" title="Modell ziehen"></div>
                  <div class="model-label">${escStudio(activeName)}</div>
                  ${this._studioContextMenu ? html`
                    <div class="studio-context" style="left:${Math.max(8, this._studioContextMenu.clientX || this._studioContextMenu.screenX || 8)}px;top:${Math.max(8, this._studioContextMenu.clientY || this._studioContextMenu.screenY || 8)}px;">
                      <button class="action" data-action="center">Zentrieren</button>
                      <button class="action" data-action="snap-grid">Raster anwenden</button>
                      <button class="action" data-action="reload-mesh">Echtes Modell neu laden</button>
                      <button class="action" data-action="duplicate">Duplizieren</button>
                      <button class="action" data-action="delete">Löschen</button>
                      <button class="action" data-action="close-context">Schließen</button>
                    </div>
                  ` : ""}
                </div>
                <div class="status">${escStudio(this._status)}</div>
                ${this.renderPlanSummary()}
              </main>

              <aside class="panel">
                <h3>Transform</h3>
                ${this.input("X", "x", "px")}
                ${this.input("Y", "y", "px")}
                ${this.input("Z", "z", "mm")}
                ${this.input("Rot X", "rx", "deg")}
                ${this.input("Rot Y", "ry", "deg")}
                ${this.input("Rot Z", "rz", "deg")}
                ${this.input("Scale", "scale", "%")}
                ${this.input("Stretch X", "sx", "%")}
                ${this.input("Stretch Y", "sy", "%")}
                ${this.input("Stretch Z", "sz", "%")}
                ${this.input("Zerr X", "skewX", "deg")}
                ${this.input("Zerr Y", "skewY", "deg")}

                <div class="health-summary">
                  <span class="badge">Zoom <b data-view-zoom-label>${Math.round((this._viewZoom || 1) * 100)}%</b></span>
                  <span class="badge">Mirror X ${Number(this._transform.mx) === -1 ? "an" : "aus"}</span>
                  <span class="badge">Mirror Y ${Number(this._transform.my) === -1 ? "an" : "aus"}</span>
                  <span class="badge">Mirror Z ${Number(this._transform.mz) === -1 ? "an" : "aus"}</span>
                </div>

                <div class="action-grid">
                  <button class="action" data-action="zoom-out">Zoom -</button>
                  <button class="action" data-action="zoom-in">Zoom +</button>
                  <button class="action" data-action="mirror-x">Spiegel X</button>
                  <button class="action" data-action="mirror-y">Spiegel Y</button>
                  <button class="action" data-action="mirror-z">Spiegel Z</button>
                  <button class="action" data-action="skew-left">Zerr X -</button>
                  <button class="action" data-action="skew-right">Zerr X +</button>
                  <button class="action" data-action="center">Zentrieren</button>
                  <button class="action" data-action="lay-flat">Flach legen</button>
                  <button class="action" data-action="reset">Reset</button>
                  <button class="action" data-action="reload-mesh">Modell neu laden</button>
                  <button class="action" data-action="toggle-shortcuts">Tastaturhilfe</button>
                  <button class="action" data-action="health">Health</button>
                </div>

                  ${this._showShortcutHelp ? html`
                  <div class="shortcut-help">
                    <b>Tastaturbefehle</b><br>
                    Pfeile: verschieben, Shift+Pfeile: grob verschieben<br>
                    Q/E: drehen, +/-: Zoom, G: Raster<br>
                    X/Y/Z: Spiegeln, C: zentrieren, F: flach legen, Entf: entfernen<br>
                    Rechtsklick: Studio-Kontextmenü
                  </div>
                ` : ""}
              <h3 style="margin-top:16px">Studio Health</h3>
                ${this.renderHealth()}
              </aside>
            </div>
          </div>
        </ha-card>
      `;

      this.restoreUiState(uiState);
    }
  }
  const PCC_BETA_STUDIO_CLASS = customElements.get("printer-control-center-studio-card") || PrinterControlCenterStudioCard;

  PCC_BETA_STUDIO_CLASS.prototype.cleanupBetaStudioUi = function cleanupBetaStudioUi() {
    const root = this.shadowRoot;
    if (!root) return;

    const safeActions = new Set(["health", "reload-mesh", "toggle-shortcuts", "close-context"]);
    const contextMenu = root.querySelector(".studio-context");
    const actionGrids = [...root.querySelectorAll(".action-grid")];
    const buildplateWrap = root.querySelector(".buildplate-wrap");

    for (const grid of actionGrids) {
      if (grid.closest(".studio-context")) continue;

      const actions = [...grid.querySelectorAll("button[data-action]")].map((button) => String(button.dataset.action || ""));
      const onlyEditActions = actions.length > 0 && actions.every((action) => !safeActions.has(action));

      const beforeBuildplate = buildplateWrap
        ? Boolean(grid.compareDocumentPosition(buildplateWrap) & Node.DOCUMENT_POSITION_FOLLOWING)
        : false;

      if (onlyEditActions && beforeBuildplate) {
        grid.remove();
      }
    }

    const buildplateOnlyActions = new Set([
      "move", "rotate", "scale", "center", "lay-flat", "reset",
      "duplicate", "delete", "snap-grid",
      "mirror-x", "mirror-y", "mirror-z",
      "skew-left", "skew-right",
      "zoom-in", "zoom-out"
    ]);

    for (const button of [...root.querySelectorAll(".buildplate-wrap button[data-action]")]) {
      if (button.closest(".studio-context")) continue;
      const action = String(button.dataset.action || "");
      if (buildplateOnlyActions.has(action)) button.remove();
    }

    if (contextMenu) {
      contextMenu.style.position = "fixed";
      contextMenu.style.zIndex = "9999";
    }
  };

  PCC_BETA_STUDIO_CLASS.prototype.bindBetaContextMenu = function bindBetaContextMenu() {
    const plate = this.shadowRoot?.querySelector(".buildplate");
    if (!plate || plate.dataset.betaContextBound === "1") return;

    plate.dataset.betaContextBound = "1";
    plate.addEventListener("contextmenu", (event) => this.handleContextMenu(event), {capture:true});
    plate.addEventListener("pointerdown", (event) => {
      if (event.button === 2) this.handleContextMenu(event);
    }, {capture:true});
  };



  const PCC_BETA3_STUDIO_CLASS = customElements.get("printer-control-center-studio-card") || PrinterControlCenterStudioCard;

  PCC_BETA3_STUDIO_CLASS.prototype.cleanupBetaStudioUi = function cleanupBetaStudioUi() {
    const root = this.shadowRoot;
    if (!root) return;

    const panels = [...root.querySelectorAll(".panel")];
    const rightInspector = panels.length ? panels[panels.length - 1] : null;

    const editActions = new Set([
      "move", "rotate", "scale",
      "zoom-in", "zoom-out",
      "mirror-x", "mirror-y", "mirror-z",
      "skew-left", "skew-right",
      "snap-grid",
      "duplicate", "delete",
      "center", "lay-flat", "reset"
    ]);

    for (const button of [...root.querySelectorAll("button[data-action]")]) {
      if (button.closest(".studio-context")) continue;
      if (rightInspector && rightInspector.contains(button)) continue;

      const action = String(button.dataset.action || "");
      if (editActions.has(action)) {
        button.remove();
      }
    }

    for (const empty of [...root.querySelectorAll(".action-grid")]) {
      if (empty.closest(".studio-context")) continue;
      if (!empty.querySelector("button")) empty.remove();
    }

    const contextMenu = root.querySelector(".studio-context");
    if (contextMenu) {
      contextMenu.style.position = "fixed";
      contextMenu.style.zIndex = "2147483000";
    }
  };

  PCC_BETA3_STUDIO_CLASS.prototype.bindBetaContextMenu = function bindBetaContextMenu() {
    const root = this.shadowRoot;
    if (!root || this._beta3ContextBound === true) return;

    this._beta3ContextBound = true;

    const handler = (event) => {
      const path = typeof event.composedPath === "function" ? event.composedPath() : [];
      const hit = event.target?.closest?.(".buildplate")
        || event.target?.closest?.(".buildplate-wrap")
        || event.target?.closest?.(".studio-mesh-canvas")
        || event.target?.closest?.(".model")
        || event.target?.closest?.(".model-label")
        || path.find?.((node) => node?.classList?.contains?.("buildplate"))
        || path.find?.((node) => node?.classList?.contains?.("buildplate-wrap"));

      if (!hit) return;
      this.handleContextMenu(event);
    };

    root.addEventListener("contextmenu", handler, {capture:true});
    root.addEventListener("pointerdown", (event) => {
      if (event.button === 2) handler(event);
    }, {capture:true});
  };

  PCC_BETA3_STUDIO_CLASS.prototype.showBetaStudioContextMenu = function showBetaStudioContextMenu(point) {
    const root = this.shadowRoot;
    if (!root) return;

    root.querySelectorAll(".studio-context.beta3-floating-context").forEach((node) => node.remove());

    const menu = document.createElement("div");
    menu.className = "studio-context beta3-floating-context";
    menu.style.position = "fixed";
    menu.style.left = `${Math.max(8, Number(point?.clientX || point?.screenX || 8))}px`;
    menu.style.top = `${Math.max(8, Number(point?.clientY || point?.screenY || 8))}px`;
    menu.style.zIndex = "2147483000";
    menu.innerHTML = `
      <button class="action" data-beta3-action="center">Zentrieren</button>
      <button class="action" data-beta3-action="snap-grid">Raster anwenden</button>
      <button class="action" data-beta3-action="reload-mesh">Echtes Modell neu laden</button>
      <button class="action" data-beta3-action="duplicate">Duplizieren</button>
      <button class="action danger" data-beta3-action="delete">Löschen</button>
      <button class="action" data-beta3-action="close-context">Schließen</button>
    `;

    menu.addEventListener("click", (event) => {
      const button = event.target?.closest?.("button[data-beta3-action]");
      if (!button) return;

      event.preventDefault();
      event.stopPropagation();

      const action = String(button.dataset.beta3Action || "");
      this._studioContextMenu = null;
      menu.remove();

      if (action === "center") this.centerActiveObject();
      else if (action === "snap-grid") this.snapTransformToGrid();
      else if (action === "reload-mesh") this.ensureStudioMeshLoaded(true);
      else if (action === "duplicate") this.duplicateActiveJob();
      else if (action === "delete") this.deleteActiveJob();
      else this.render();
    });

    root.appendChild(menu);
  };

  PCC_BETA3_STUDIO_CLASS.prototype.handleContextMenu = function handleContextMenu(event) {
    const root = this.shadowRoot;
    if (!root) return;

    const plate = event.target?.closest?.(".buildplate")
      || event.target?.closest?.(".buildplate-wrap")
      || root.querySelector(".buildplate");

    if (!plate) return;

    event.preventDefault();
    event.stopPropagation();

    this._studioKeyboardActive = true;
    if (typeof this.focusStudioShell === "function") this.focusStudioShell();

    const rect = plate.getBoundingClientRect();
    const point = {
      x: Math.round(event.clientX - rect.left - rect.width / 2),
      y: Math.round(event.clientY - rect.top - rect.height / 2),
      screenX: Math.round(event.clientX - rect.left),
      screenY: Math.round(event.clientY - rect.top),
      clientX: Math.round(event.clientX),
      clientY: Math.round(event.clientY)
    };

    this._studioContextMenu = point;
    this._status = "Studio-Kontextmenü geöffnet.";
    this.showBetaStudioContextMenu(point);
  };

  PCC_BETA3_STUDIO_CLASS.prototype.deleteActiveJob = async function deleteActiveJob() {
    if (!this._activeJobId && !this._activeJob) {
      this._status = "Kein aktiver Studio-Job zum Entfernen ausgewählt.";
      this.render();
      return;
    }

    const active = this._activeJob || {};
    const activeId = String(this._activeJobId || active.id || "");
    const activePath = String(active.file_path || active.path || active.model?.path || "").trim();
    const removedName = this.jobName();

    const oldJobs = Array.isArray(this._jobs) ? this._jobs : [];
    const remaining = oldJobs.filter((job) => {
      const id = String(job?.id || "");
      const path = String(job?.file_path || job?.path || job?.model?.path || "").trim();

      if (activeId && id === activeId) return false;
      if (activePath && path === activePath) return false;
      return true;
    });

    try {
      await this.ws({type:"printer_control_center/studio_jobs/clear"});

      const recreated = [];
      for (const job of remaining) {
        const clone = JSON.parse(JSON.stringify(job || {}));
        delete clone.id;
        const response = await this.ws({
          type:"printer_control_center/studio_jobs/create",
          serial:clone.serial || "",
          plan:clone
        });
        const created = response?.job || response || null;
        if (created?.id) recreated.push(created);
      }

      this._jobs = recreated;
      this._activeJob = recreated[0] || null;
      this._activeJobId = this._activeJob?.id || "";

      if (this._activeJob) {
        this.applyActiveJob(this._activeJob, {status:false, render:false});
      } else {
        this._transform = defaultTransform();
        this._studioMesh = null;
        this._studioMeshJobId = "";
        this._studioMeshUrl = "";
      }

      this._jobsLoaded = true;
      this._status = `Studio-Job dauerhaft entfernt: ${removedName}.`;
    } catch (error) {
      this._status = `Studio-Job konnte nicht dauerhaft entfernt werden: ${String(error?.message || error)}`;
    }

    this.render();
  };

  PCC_BETA3_STUDIO_CLASS.prototype.requestStudioMeshUrl = async function requestStudioMeshUrl() {
    const job = this._activeJob || this.buildDryRunJob();
    const path = this.activeJobPath();
    const serial = job?.serial || this._config?.serial || "";
    const rawSource = String(job?.source || job?.origin || "archive").toLowerCase();
    const source = rawSource === "sdcard" || rawSource === "printer_sd" ? "sd" : rawSource;
    const filename = job?.filename || job?.file_name || path.split("/").pop() || "";

    const modelStlSource = source === "sd" ? "sd_model_stl" : "archive_model_stl";
    const model3mfSource = source === "sd" ? "sd_model_3mf" : "archive_model_3mf";

    const requests = [
      {type:"printer_control_center/project/link", serial, source, path, filename, format:"stl"},
      {type:"printer_control_center/project/link", serial, source, path, filename, mode:"download", format:"stl"},
      {type:"printer_control_center/project/link", serial, source, path, filename, target:"stl"},
      {type:"printer_control_center/project/link", serial, source:modelStlSource, path, filename},
      {type:"printer_control_center/project/link", serial, source:modelStlSource, path, filename, format:"stl"},
      {type:"printer_control_center/project/link", serial, source:model3mfSource, path, filename, format:"stl"},
      {type:"printer_control_center/project/link", serial, source, path, file_path:path, filename, mode:"stl", kind:"stl", target:"stl"},
    ];

    const errors = [];

    for (const request of requests) {
      try {
        const response = await this.ws(request);
        const url = this.extractMeshUrl(response);
        if (url) return url;
      } catch (error) {
        errors.push(String(error?.message || error));
      }
    }

    this._studioMeshError = errors.slice(0, 3).join(" | ");
    return "";
  };


  const PCC_BETA4_STUDIO_CLASS = customElements.get("printer-control-center-studio-card") || PrinterControlCenterStudioCard;

  PCC_BETA4_STUDIO_CLASS.prototype.updateStudioModelImage = function updateStudioModelImage() {
    const url = this.activeJobPreviewUrl?.() || "";
    this._studioModelImageUrl = url;
    return url;
  };

  PCC_BETA4_STUDIO_CLASS.prototype.activeJobPreviewUrl = function activeJobPreviewUrl() {
    const job = this._activeJob || this.buildDryRunJob?.() || {};
    const handoff = (() => {
      try {
        return window.PCC_STUDIO_HANDOFF?.latest?.()?.job || null;
      } catch (_error) {
        return null;
      }
    })();

    const candidates = [
      job.preview_data_url,
      job.previewDataUrl,
      job.preview_url,
      job.thumbnail,
      job.image,
      job.image_url,
      job.model?.preview_data_url,
      job.model?.preview_url,
      job.model?.thumbnail,
      job.model?.image,
      job.preview?.data_url,
      job.preview?.url,
      handoff?.preview_data_url,
      handoff?.preview_url,
      handoff?.thumbnail,
      handoff?.image,
      handoff?.model?.preview_data_url,
      handoff?.model?.preview_url,
      handoff?.preview?.data_url,
      handoff?.preview?.url
    ];

    for (const value of candidates) {
      const text = String(value || "").trim();
      if (!text) continue;
      if (text.startsWith("data:image/")) return text;
      if (text.startsWith("blob:")) return text;
      if (text.startsWith("http://") || text.startsWith("https://")) return text;
      if (text.startsWith("/")) return `${window.location.origin}${text}`;
    }

    return "";
  };

  PCC_BETA4_STUDIO_CLASS.prototype.cleanupBetaStudioUi = function cleanupBetaStudioUi() {
    const root = this.shadowRoot;
    if (!root) return;

    const panels = [...root.querySelectorAll(".panel")];
    const rightInspector = panels.length ? panels[panels.length - 1] : null;

    const editActions = new Set([
      "move", "rotate", "scale",
      "zoom-in", "zoom-out",
      "mirror-x", "mirror-y", "mirror-z",
      "skew-left", "skew-right",
      "snap-grid",
      "duplicate", "delete",
      "center", "lay-flat", "reset"
    ]);

    for (const button of [...root.querySelectorAll("button[data-action]")]) {
      if (button.closest(".studio-context")) continue;
      if (rightInspector && rightInspector.contains(button)) continue;

      const action = String(button.dataset.action || "");
      if (editActions.has(action)) button.remove();
    }

    for (const empty of [...root.querySelectorAll(".action-grid")]) {
      if (empty.closest(".studio-context")) continue;
      if (!empty.querySelector("button")) empty.remove();
    }

    const contextMenu = root.querySelector(".studio-context");
    if (contextMenu) {
      contextMenu.style.position = "fixed";
      contextMenu.style.zIndex = "2147483000";
    }

    this.updateStudioModelImage?.();
  };

  PCC_BETA4_STUDIO_CLASS.prototype.bindBetaContextMenu = function bindBetaContextMenu() {
    const root = this.shadowRoot;
    if (!root || this._beta4ContextBound === true) return;

    this._beta4ContextBound = true;

    const handler = (event) => {
      const path = typeof event.composedPath === "function" ? event.composedPath() : [];
      const target = event.target;

      const hit =
        target?.closest?.(".buildplate") ||
        target?.closest?.(".buildplate-wrap") ||
        target?.closest?.(".studio-mesh-canvas") ||
        target?.closest?.(".studio-model-image") ||
        target?.closest?.(".model") ||
        target?.closest?.(".model-label") ||
        path.find?.((node) => node?.classList?.contains?.("buildplate")) ||
        path.find?.((node) => node?.classList?.contains?.("buildplate-wrap")) ||
        path.find?.((node) => node?.classList?.contains?.("studio-mesh-canvas")) ||
        path.find?.((node) => node?.classList?.contains?.("studio-model-image"));

      if (!hit) return;
      this.handleContextMenu(event);
    };

    root.addEventListener("contextmenu", handler, {capture:true});
    root.addEventListener("pointerdown", (event) => {
      if (event.button === 2) handler(event);
    }, {capture:true});

    const plate = root.querySelector(".buildplate");
    if (plate && plate._beta4PlateContextBound !== true) {
      plate._beta4PlateContextBound = true;
      plate.addEventListener("contextmenu", handler, {capture:true});
      plate.addEventListener("pointerdown", (event) => {
        if (event.button === 2) handler(event);
      }, {capture:true});
    }
  };

  PCC_BETA4_STUDIO_CLASS.prototype.showBetaStudioContextMenu = function showBetaStudioContextMenu(point) {
    const root = this.shadowRoot;
    if (!root) return;

    root.querySelectorAll(".studio-context.beta4-floating-context,.studio-context.beta3-floating-context").forEach((node) => node.remove());

    const menu = document.createElement("div");
    menu.className = "studio-context beta4-floating-context";
    menu.style.position = "fixed";
    menu.style.left = `${Math.max(8, Number(point?.clientX || point?.screenX || 8))}px`;
    menu.style.top = `${Math.max(8, Number(point?.clientY || point?.screenY || 8))}px`;
    menu.style.zIndex = "2147483000";
    menu.innerHTML = `
      <button class="action" data-beta4-action="center">Zentrieren</button>
      <button class="action" data-beta4-action="snap-grid">Raster anwenden</button>
      <button class="action" data-beta4-action="reload-mesh">Echtes Modell neu laden</button>
      <button class="action" data-beta4-action="duplicate">Duplizieren</button>
      <button class="action danger" data-beta4-action="delete">Löschen</button>
      <button class="action" data-beta4-action="close-context">Schließen</button>
    `;

    menu.addEventListener("click", (event) => {
      const button = event.target?.closest?.("button[data-beta4-action]");
      if (!button) return;

      event.preventDefault();
      event.stopPropagation();

      const action = String(button.dataset.beta4Action || "");
      this._studioContextMenu = null;
      menu.remove();

      if (action === "center") this.centerActiveObject();
      else if (action === "snap-grid") this.snapTransformToGrid();
      else if (action === "reload-mesh") this.ensureStudioMeshLoaded(true);
      else if (action === "duplicate") this.duplicateActiveJob();
      else if (action === "delete") this.deleteActiveJob();
      else this.render();
    });

    root.appendChild(menu);
  };

  PCC_BETA4_STUDIO_CLASS.prototype.handleContextMenu = function handleContextMenu(event) {
    const root = this.shadowRoot;
    if (!root) return;

    const plate =
      event.target?.closest?.(".buildplate") ||
      event.target?.closest?.(".buildplate-wrap") ||
      root.querySelector(".buildplate");

    if (!plate) return;

    event.preventDefault();
    event.stopPropagation();

    this._studioKeyboardActive = true;
    if (typeof this.focusStudioShell === "function") this.focusStudioShell();

    const rect = plate.getBoundingClientRect();
    const point = {
      x: Math.round(event.clientX - rect.left - rect.width / 2),
      y: Math.round(event.clientY - rect.top - rect.height / 2),
      screenX: Math.round(event.clientX - rect.left),
      screenY: Math.round(event.clientY - rect.top),
      clientX: Math.round(event.clientX),
      clientY: Math.round(event.clientY)
    };

    this._studioContextMenu = point;
    this._status = "Studio-Kontextmenü geöffnet.";
    this.showBetaStudioContextMenu(point);
  };

  PCC_BETA4_STUDIO_CLASS.prototype.ensureStudioMeshLoaded = async function ensureStudioMeshLoaded(force=false) {
    if (!this._hass || this._studioMeshLoading) return;

    const path = this.activeJobPath?.() || "";
    if (!path) {
      this.updateStudioModelImage?.();
      this.render();
      return;
    }

    const key = this.meshJobKey?.() || path;
    if (!force && this._studioMesh && this._studioMeshJobId === key) return;

    this._studioMeshLoading = true;
    this._studioMeshError = "";
    this._studioMeshStatus = "Echtes Modell wird geladen …";
    this.updateStudioModelImage?.();

    try {
      const url = await this.requestStudioMeshUrl();
      if (!url) throw new Error("Kein STL-/Geometrie-Link vom Backend erhalten.");

      this._studioMeshUrl = url;
      const response = await fetch(url, {credentials:"include"});
      if (!response.ok) throw new Error(`STL-Download HTTP ${response.status}`);

      const buffer = await response.arrayBuffer();
      this._studioMesh = this.parseStlMesh(buffer);
      this._studioMeshJobId = key;
      this._studioMeshStatus = `Echtes STL-Mesh geladen: ${this._studioMesh.triangles.length} Dreiecke.`;
    } catch (error) {
      this._studioMesh = null;
      this._studioMeshError = String(error?.message || error);
      const image = this.updateStudioModelImage?.() || "";
      this._studioMeshStatus = image
        ? `STL-Mesh nicht geladen: ${this._studioMeshError}. Modellbild-Fallback aktiv.`
        : `Echtes Modell nicht geladen: ${this._studioMeshError}`;
    } finally {
      this._studioMeshLoading = false;
      this.render();
    }
  };

  PCC_BETA4_STUDIO_CLASS.prototype.requestStudioMeshUrl = async function requestStudioMeshUrl() {
    const job = this._activeJob || this.buildDryRunJob();
    const path = this.activeJobPath();
    const serial = job?.serial || this._config?.serial || "";
    const rawSource = String(job?.source || job?.origin || "archive").toLowerCase();
    const source = rawSource === "sdcard" || rawSource === "printer_sd" ? "sd" : rawSource;
    const filename = job?.filename || job?.file_name || path.split("/").pop() || "";

    const requests = [
      {type:"printer_control_center/project/link", serial, source, path, filename, format:"stl"},
      {type:"printer_control_center/project/link", serial, source, path, filename, file_type:"stl"},
      {type:"printer_control_center/project/link", serial, source, path, filename, mode:"download", format:"stl"},
      {type:"printer_control_center/project/link", serial, source, path, filename, target:"stl"},
      {type:"printer_control_center/project/link", serial, source, path, filename},
      {type:"printer_control_center/project/link", serial, source:source === "sd" ? "sd_model_stl" : "archive_model_stl", path, filename, format:"stl"},
      {type:"printer_control_center/project/link", serial, source:source === "sd" ? "sd_model_3mf" : "archive_model_3mf", path, filename, format:"stl"},
    ];

    const errors = [];

    for (const request of requests) {
      try {
        const response = await this.ws(request);
        const url = this.extractMeshUrl(response);
        if (url) return url;
      } catch (error) {
        errors.push(String(error?.message || error));
      }
    }

    this._studioMeshError = errors.slice(0, 3).join(" | ");
    return "";
  };


  const PCC_BETA5_PREVIEW_KEYS = [
    "preview_data_url", "previewDataUrl", "preview_url", "previewUrl",
    "thumbnail", "thumb", "image", "image_url", "imageUrl",
    "poster", "poster_url", "posterUrl"
  ];

  function pccBeta5PreviewFromItem(item) {
    if (!item) return "";
    const direct = [];

    for (const key of PCC_BETA5_PREVIEW_KEYS) {
      direct.push(item?.[key]);
    }

    direct.push(
      item?.preview?.data_url,
      item?.preview?.dataUrl,
      item?.preview?.url,
      item?.preview?.href,
      item?.model?.preview_data_url,
      item?.model?.preview_url,
      item?.model?.thumbnail,
      item?.model?.image
    );

    for (const value of direct) {
      const text = String(value || "").trim();
      if (!text) continue;
      if (text.startsWith("data:image/")) return text;
      if (text.startsWith("blob:")) return text;
      if (text.startsWith("http://") || text.startsWith("https://")) return text;
      if (text.startsWith("/")) return `${window.location.origin}${text}`;
    }

    return "";
  }

  function pccBeta5EnrichStudioPlan(plan, item) {
    if (!plan || !item) return plan;

    const preview = pccBeta5PreviewFromItem(item);
    if (!preview) return plan;

    plan.preview_data_url = plan.preview_data_url || preview;
    plan.preview_url = plan.preview_url || preview;
    plan.thumbnail = plan.thumbnail || preview;
    plan.image = plan.image || preview;
    plan.preview = plan.preview || {};
    plan.preview.data_url = plan.preview.data_url || preview;
    plan.preview.url = plan.preview.url || preview;

    plan.model = plan.model || {};
    plan.model.preview_data_url = plan.model.preview_data_url || preview;
    plan.model.preview_url = plan.model.preview_url || preview;
    plan.model.thumbnail = plan.model.thumbnail || preview;
    plan.model.image = plan.model.image || preview;

    return plan;
  }

  function pccBeta5PatchGalleryPreviewHandoff() {
    const candidates = [
      customElements.get("printer-control-center-gallery-card"),
      customElements.get("printer-control-center-filemanager-card"),
      customElements.get("printer-control-center-file-manager-card"),
      customElements.get("printer-control-center-files-card")
    ].filter(Boolean);

    for (const cls of candidates) {
      const proto = cls?.prototype;
      if (!proto || proto._pccBeta5PreviewHandoffPatched) continue;

      if (typeof proto.buildStudioPlanFromItem === "function") {
        const originalBuild = proto.buildStudioPlanFromItem;
        proto.buildStudioPlanFromItem = function buildStudioPlanFromItemBeta5(map, item) {
          const plan = originalBuild.call(this, map, item);
          return pccBeta5EnrichStudioPlan(plan, item);
        };
      }

      if (typeof proto.openInStudio === "function") {
        const originalOpen = proto.openInStudio;
        proto.openInStudio = async function openInStudioBeta5(map, item) {
          if (typeof this.buildStudioPlanFromItem === "function") {
            try {
              const preview = pccBeta5PreviewFromItem(item);
              if (preview) {
                item.preview_data_url = item.preview_data_url || preview;
                item.preview_url = item.preview_url || preview;
                item.thumbnail = item.thumbnail || preview;
                item.image = item.image || preview;
              }
            } catch (_error) {}
          }
          return originalOpen.call(this, map, item);
        };
      }

      proto._pccBeta5PreviewHandoffPatched = true;
    }
  }

  pccBeta5PatchGalleryPreviewHandoff();

  const PCC_BETA5_STUDIO_CLASS = customElements.get("printer-control-center-studio-card") || PrinterControlCenterStudioCard;

  PCC_BETA5_STUDIO_CLASS.prototype.beta5RemoveObjectObjectLabels = function beta5RemoveObjectObjectLabels() {
    const root = this.shadowRoot;
    if (!root) return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    for (const node of nodes) {
      if (String(node.nodeValue || "").includes("[object Object]")) {
        node.nodeValue = String(node.nodeValue || "").replaceAll("[object Object]", "").trim();
      }
    }
  };

  PCC_BETA5_STUDIO_CLASS.prototype.beta5TopActionHost = function beta5TopActionHost() {
    const root = this.shadowRoot;
    if (!root) return null;

    const buttons = [...root.querySelectorAll("button")];
    const importButton = buttons.find((button) => button.textContent?.trim?.() === "Importieren");
    if (importButton?.parentElement) return importButton.parentElement;

    const planButton = buttons.find((button) => button.textContent?.includes?.("Plan prüfen"));
    if (planButton?.parentElement) return planButton.parentElement;

    return null;
  };

  PCC_BETA5_STUDIO_CLASS.prototype.beta5EnsureTopDeleteButton = function beta5EnsureTopDeleteButton() {
    const host = this.beta5TopActionHost?.();
    if (!host || host.querySelector("[data-beta5-top-delete]")) return;

    const button = document.createElement("button");
    button.className = "action";
    button.dataset.beta5TopDelete = "1";
    button.textContent = "Löschen";
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.deleteActiveJob();
    });

    host.appendChild(button);
  };

  PCC_BETA5_STUDIO_CLASS.prototype.cleanupBetaStudioUi = function cleanupBetaStudioUi() {
    const root = this.shadowRoot;
    if (!root) return;

    const panels = [...root.querySelectorAll(".panel")];
    const rightInspector = panels.length ? panels[panels.length - 1] : null;

    const topRemoveByText = new Set([
      "Verschieben", "Drehen", "Skalieren",
      "Rot -45", "Rot +45",
      "Scale -", "Scale +"
    ]);

    const topRemoveByAction = new Set([
      "move", "rotate", "scale",
      "rot-minus-45", "rot-plus-45",
      "scale-minus", "scale-plus",
      "rotate-left", "rotate-right",
      "zoom-in", "zoom-out",
      "mirror-x", "mirror-y", "mirror-z",
      "skew-left", "skew-right",
      "snap-grid", "duplicate",
      "center", "lay-flat", "reset"
    ]);

    for (const button of [...root.querySelectorAll("button")]) {
      if (button.closest(".studio-context")) continue;
      if (rightInspector && rightInspector.contains(button)) continue;
      if (button.dataset?.beta5TopDelete === "1") continue;

      const text = String(button.textContent || "").trim();
      const action = String(button.dataset?.action || "").trim();

      if (topRemoveByText.has(text) || topRemoveByAction.has(action)) {
        button.remove();
      }
    }

    for (const empty of [...root.querySelectorAll(".action-grid")]) {
      if (empty.closest(".studio-context")) continue;
      if (!empty.querySelector("button")) empty.remove();
    }

    this.beta5EnsureTopDeleteButton?.();
    this.beta5RemoveObjectObjectLabels?.();
    this.updateStudioModelImage?.();
    this.ensureBeta5ContextMenuVisible?.();
  };

  PCC_BETA5_STUDIO_CLASS.prototype.activeJobPreviewUrl = function activeJobPreviewUrl() {
    const job = this._activeJob || this.buildDryRunJob?.() || {};
    const handoff = (() => {
      try {
        return window.PCC_STUDIO_HANDOFF?.latest?.()?.job || null;
      } catch (_error) {
        return null;
      }
    })();

    const jobs = Array.isArray(this._jobs) ? this._jobs : [];
    const activePath = String(job?.file_path || job?.path || job?.model?.path || "").trim();

    const matchingJob = jobs.find((candidate) => {
      const candidatePath = String(candidate?.file_path || candidate?.path || candidate?.model?.path || "").trim();
      return activePath && candidatePath === activePath;
    }) || null;

    const candidates = [
      job.preview_data_url, job.previewDataUrl, job.preview_url, job.previewUrl,
      job.thumbnail, job.thumb, job.image, job.image_url, job.imageUrl,
      job.preview?.data_url, job.preview?.dataUrl, job.preview?.url,
      job.model?.preview_data_url, job.model?.preview_url, job.model?.thumbnail, job.model?.image,

      matchingJob?.preview_data_url, matchingJob?.preview_url, matchingJob?.thumbnail, matchingJob?.image,
      matchingJob?.model?.preview_data_url, matchingJob?.model?.preview_url, matchingJob?.model?.thumbnail, matchingJob?.model?.image,

      handoff?.preview_data_url, handoff?.previewDataUrl, handoff?.preview_url, handoff?.thumbnail, handoff?.image,
      handoff?.preview?.data_url, handoff?.preview?.url,
      handoff?.model?.preview_data_url, handoff?.model?.preview_url, handoff?.model?.thumbnail, handoff?.model?.image
    ];

    for (const value of candidates) {
      const text = String(value || "").trim();
      if (!text) continue;
      if (text.startsWith("data:image/")) return text;
      if (text.startsWith("blob:")) return text;
      if (text.startsWith("http://") || text.startsWith("https://")) return text;
      if (text.startsWith("/")) return `${window.location.origin}${text}`;
    }

    return "";
  };

  PCC_BETA5_STUDIO_CLASS.prototype.updateStudioModelImage = function updateStudioModelImage() {
    const url = this.activeJobPreviewUrl?.() || "";
    this._studioModelImageUrl = url;
    return url;
  };

  PCC_BETA5_STUDIO_CLASS.prototype.bindBetaContextMenu = function bindBetaContextMenu() {
    const root = this.shadowRoot;
    if (!root || this._beta5ContextBound === true) return;

    this._beta5ContextBound = true;

    const handler = (event) => {
      const path = typeof event.composedPath === "function" ? event.composedPath() : [];
      const target = event.target;

      const hit =
        target?.closest?.(".buildplate") ||
        target?.closest?.(".buildplate-wrap") ||
        target?.closest?.(".studio-mesh-canvas") ||
        target?.closest?.(".studio-model-image") ||
        target?.closest?.(".model") ||
        target?.closest?.(".model-label") ||
        path.find?.((node) => node?.classList?.contains?.("buildplate")) ||
        path.find?.((node) => node?.classList?.contains?.("buildplate-wrap")) ||
        path.find?.((node) => node?.classList?.contains?.("studio-mesh-canvas")) ||
        path.find?.((node) => node?.classList?.contains?.("studio-model-image"));

      if (!hit) return;
      this.handleContextMenu(event);
    };

    root.addEventListener("contextmenu", handler, {capture:true});
    root.addEventListener("pointerdown", (event) => {
      if (event.button === 2) handler(event);
    }, {capture:true});
  };

  PCC_BETA5_STUDIO_CLASS.prototype.handleContextMenu = function handleContextMenu(event) {
    const root = this.shadowRoot;
    if (!root) return;

    const plate =
      event.target?.closest?.(".buildplate") ||
      event.target?.closest?.(".buildplate-wrap") ||
      root.querySelector(".buildplate");

    if (!plate) return;

    event.preventDefault();
    event.stopPropagation();

    this._studioKeyboardActive = true;
    if (typeof this.focusStudioShell === "function") this.focusStudioShell();

    const rect = plate.getBoundingClientRect();
    const point = {
      x: Math.round(event.clientX - rect.left - rect.width / 2),
      y: Math.round(event.clientY - rect.top - rect.height / 2),
      screenX: Math.round(event.clientX - rect.left),
      screenY: Math.round(event.clientY - rect.top),
      clientX: Math.round(event.clientX),
      clientY: Math.round(event.clientY)
    };

    this._beta5ContextPoint = point;
    this._studioContextMenu = point;
    this._status = "Studio-Kontextmenü geöffnet.";
    this.showBetaStudioContextMenu(point);
  };

  PCC_BETA5_STUDIO_CLASS.prototype.ensureBeta5ContextMenuVisible = function ensureBeta5ContextMenuVisible() {
    if (!this._beta5ContextPoint) return;
    if (this.shadowRoot?.querySelector?.(".studio-context.beta5-floating-context")) return;
    this.showBetaStudioContextMenu(this._beta5ContextPoint);
  };

  PCC_BETA5_STUDIO_CLASS.prototype.showBetaStudioContextMenu = function showBetaStudioContextMenu(point) {
    const root = this.shadowRoot;
    if (!root) return;

    root.querySelectorAll(".studio-context.beta5-floating-context,.studio-context.beta4-floating-context,.studio-context.beta3-floating-context").forEach((node) => node.remove());

    const menu = document.createElement("div");
    menu.className = "studio-context beta5-floating-context";
    menu.style.position = "fixed";
    menu.style.left = `${Math.max(8, Number(point?.clientX || point?.screenX || 8))}px`;
    menu.style.top = `${Math.max(8, Number(point?.clientY || point?.screenY || 8))}px`;
    menu.style.zIndex = "2147483000";
    menu.innerHTML = `
      <div class="beta5-menu-title">3D-Studio</div>

      <div class="beta5-submenu">
        <button class="action beta5-submenu-button">Position ▸</button>
        <div class="beta5-submenu-panel">
          <button class="action" data-beta5-action="center">Zentrieren</button>
          <button class="action" data-beta5-action="move-left">X -10</button>
          <button class="action" data-beta5-action="move-right">X +10</button>
          <button class="action" data-beta5-action="move-up">Y -10</button>
          <button class="action" data-beta5-action="move-down">Y +10</button>
          <button class="action" data-beta5-action="lay-flat">Flach legen</button>
          <button class="action" data-beta5-action="snap-grid">Raster anwenden</button>
        </div>
      </div>

      <div class="beta5-submenu">
        <button class="action beta5-submenu-button">Drehen / Skalieren ▸</button>
        <div class="beta5-submenu-panel">
          <button class="action" data-beta5-action="rot-left">Rot -45</button>
          <button class="action" data-beta5-action="rot-right">Rot +45</button>
          <button class="action" data-beta5-action="scale-down">Scale -</button>
          <button class="action" data-beta5-action="scale-up">Scale +</button>
          <button class="action" data-beta5-action="zoom-out">Zoom -</button>
          <button class="action" data-beta5-action="zoom-in">Zoom +</button>
        </div>
      </div>

      <div class="beta5-submenu">
        <button class="action beta5-submenu-button">Spiegeln / Zerren ▸</button>
        <div class="beta5-submenu-panel">
          <button class="action" data-beta5-action="mirror-x">Spiegel X</button>
          <button class="action" data-beta5-action="mirror-y">Spiegel Y</button>
          <button class="action" data-beta5-action="mirror-z">Spiegel Z</button>
          <button class="action" data-beta5-action="skew-left">Zerr X -</button>
          <button class="action" data-beta5-action="skew-right">Zerr X +</button>
        </div>
      </div>

      <div class="beta5-submenu">
        <button class="action beta5-submenu-button">Job / Modell ▸</button>
        <div class="beta5-submenu-panel">
          <button class="action" data-beta5-action="reload-mesh">Echtes Modell neu laden</button>
          <button class="action" data-beta5-action="duplicate">Duplizieren</button>
          <button class="action danger" data-beta5-action="delete">Löschen</button>
          <button class="action" data-beta5-action="reset">Reset</button>
        </div>
      </div>

      <button class="action" data-beta5-action="close-context">Schließen</button>
    `;

    menu.addEventListener("pointerdown", (event) => {
      event.stopPropagation();
    });

    menu.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      event.stopPropagation();
    });

    menu.addEventListener("click", (event) => {
      const button = event.target?.closest?.("button[data-beta5-action]");
      if (!button) return;

      event.preventDefault();
      event.stopPropagation();

      const action = String(button.dataset.beta5Action || "");

      if (action === "close-context") {
        this._beta5ContextPoint = null;
        this._studioContextMenu = null;
        menu.remove();
        return;
      }

      if (action === "center") this.centerActiveObject();
      else if (action === "move-left") this.adjustTransform("x", -10, {status:"X -10 per Kontextmenü.", render:true});
      else if (action === "move-right") this.adjustTransform("x", 10, {status:"X +10 per Kontextmenü.", render:true});
      else if (action === "move-up") this.adjustTransform("y", -10, {status:"Y -10 per Kontextmenü.", render:true});
      else if (action === "move-down") this.adjustTransform("y", 10, {status:"Y +10 per Kontextmenü.", render:true});
      else if (action === "lay-flat") this.layFlatActiveObject();
      else if (action === "snap-grid") this.snapTransformToGrid();
      else if (action === "rot-left") this.adjustTransform("rz", -45, {status:"Rotation Z -45 per Kontextmenü.", render:true});
      else if (action === "rot-right") this.adjustTransform("rz", 45, {status:"Rotation Z +45 per Kontextmenü.", render:true});
      else if (action === "scale-down") this.adjustTransform("scale", -10, {status:"Scale -10 per Kontextmenü.", render:true});
      else if (action === "scale-up") this.adjustTransform("scale", 10, {status:"Scale +10 per Kontextmenü.", render:true});
      else if (action === "zoom-out") this.setViewZoom((this._viewZoom || 1) - 0.10);
      else if (action === "zoom-in") this.setViewZoom((this._viewZoom || 1) + 0.10);
      else if (action === "mirror-x") this.toggleMirror("x");
      else if (action === "mirror-y") this.toggleMirror("y");
      else if (action === "mirror-z") this.toggleMirror("z");
      else if (action === "skew-left") this.adjustTransform("skewX", -5, {status:"Zerr X -5 per Kontextmenü.", render:true});
      else if (action === "skew-right") this.adjustTransform("skewX", 5, {status:"Zerr X +5 per Kontextmenü.", render:true});
      else if (action === "reload-mesh") this.ensureStudioMeshLoaded(true);
      else if (action === "duplicate") this.duplicateActiveJob();
      else if (action === "delete") this.deleteActiveJob();
      else if (action === "reset") this.resetTransform?.();

      this._beta5ContextPoint = point;
      window.setTimeout(() => this.ensureBeta5ContextMenuVisible?.(), 0);
    });

    root.appendChild(menu);
  };

  if (!customElements.get("printer-control-center-studio-card")) {
    customElements.define("printer-control-center-studio-card", PrinterControlCenterStudioCard);
  }

  window.customCards = window.customCards || [];
  if (!window.customCards.some((card) => card.type === "printer-control-center-studio-card")) {
    window.customCards.push({
      type: "printer-control-center-studio-card",
      name: "3D-Studio / CAD-Vorschau",
      description: "v5 beta5 Studio Navigation + Preview Handoff with cleaned workflow navigation, right-inspector-only editing, expanded right-click context submenus and gallery preview handoff."
    });
  }
})();
