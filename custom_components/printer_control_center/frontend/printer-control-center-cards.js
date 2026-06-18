/* 3D-Printer Control Center - HACS Release 5.0.0-beta39*/
(() => {
  const VERSION = "5.0.0-beta39";
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
    ["Dateien und Ordner durchsuchen …", "Search files and folders …"],
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
    ["Mit „Überschreiben“ werden die vorhandenen Zieldateien oder Zielordner ersetzt.", "Choosing “Overwriteâ€ replaces existing target files or folders."],
    ["Überschreiben", "Overwrite"],
    ["Übernehmen", "Apply"],
    ["Öffnen", "Open"],
    ["Ordner öffnen", "Open folder"],
    ["Umbenennen", "Rename"],
    ["Verschieben", "Move"],
    ["Löschen", "Delete"],
    ["Drucken …", "Print …"],
    ["Planen …", "Schedule …"],
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
    ["Warteschlange wird geladen …", "Loading queue …"],
    ["Noch keine geplanten Modelle. Öffne die Galerie oder nutze im Dateimanager den vorhandenen Menüpunkt „Planen …“.", "No planned models yet. Open the gallery or use the existing “Schedule …â€ item in the file manager."],
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
    ["Galerie wird geladen …", "Loading gallery …"],
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
    ["Native Live-Kamera startet …", "Starting native live camera …"],
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
    ["Upload wird vorbereitet …", "Preparing upload …"],
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
    ["wird vorbereitet …", "is being prepared …"],
    ["wird auf die Drucker-SD-Karte geschrieben …", "is being written to the printer SD card …"],
    ["wird im lokalen Archiv gespeichert …", "is being saved to the local archive …"],
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
    return Number.isFinite(parsed) ? `${parsed.toFixed(1)} °C` : "â€”";
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
        task.phase="processing";task.progress=97;task.details=[...(task.details||[]),"Upload vollständig empfangen.","ZIP wird entpackt und gegen das Archiv geprüft …"];this.emit(true);
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
        ${active ? `<span class="slot-active">● Aktiv</span>` : ""}
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
            <strong>Native Live-Kamera startet …</strong>
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
        ${native.stream ? `<button class="media-popout" data-action="camera-popout" title="Kamera in Großansicht öffnen">↗</button>` : ""}
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
          <button data-action="camera-popout">↗ Großansicht</button>
          ${printControlButtons(status)}
          <button data-action="refresh">↻ Aktualisieren</button>
        </div>`;
      const header=`
        <div class="row between">
          <div class="row">
            <img class="brand" src="${LOGO}" alt="3D-Printer Control Center">
            <div>
              <h2>${esc(this._config.title)}</h2>
              <div class="printer-model" title="${esc(modelName)}">${esc(modelName)}</div>
              <div class="row">
                <span class="badge ${online?"online":"offline"}">${online?"● Online":"● Offline"}</span>
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
    render(){if(!this._hass||!this._config)return;const m=this.map();if(!m)return this.empty();const o=isPrinterOnline(this._hass,m);this.shadowRoot.innerHTML=frame(this._config,`<div class="row"><img class="brand" src="${LOGO}"><div><h2>${esc(this._config.title)}</h2><div class="row"><span class="badge ${o?"online":"offline"}">${o?"● Online":"● Offline"}</span><span class="badge">${esc(stateValue(this._hass,m.printStatus))}</span></div></div></div>`)}
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
    render(){if(!this._hass||!this._config)return;const m=this.map();if(!m)return this.empty();const status=stateValue(this._hass,m.printStatus,"idle");this.shadowRoot.innerHTML=frame(this._config,`<h3>${esc(this._config.title)}</h3><div class="toolbar"><button data-action="light">💡 Licht</button><button data-action="toggle-camera">📷 Livebild ${this.cameraVisible()?"ausblenden":"anzeigen"}</button><button data-action="camera-popout">↗ Großansicht</button>${printControlButtons(status)}<button data-action="refresh">↻ Aktualisieren</button></div>`);this.bind(m)}
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
    render(){if(!this._hass||!this._config)return;const m=this.map();if(!m)return this.empty();const o=isPrinterOnline(this._hass,m),s=stateValue(this._hass,m.printStatus);this.shadowRoot.innerHTML=frame(this._config,`<div class="row between"><h3>${esc(this._config.title)}</h3><div class="toolbar"><button data-action="toggle-camera">📷 Livebild ${this.cameraVisible()?"ausblenden":"anzeigen"}</button><button data-action="camera-popout">↗ Großansicht</button></div></div>${mediaHtml(this._hass,m,this._config,this.cameraVisible(),o,s)}`)}
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
      this._notice="Galerie-ZIP wird erstellt. Der Download startet im Hintergrund …";
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
              ${action("print","Drucken …","🖨",!project)}
              ${action("plan","Planen …","ðŸ—“",!project)}
              ${action("model-open","In Bambu Studio öffnen (Original-3MF)","↗",!project)}
              ${action("studio-open","In 3D-Studio öffnen","[S]",!project)}
              ${action("model-download","Modell-3MF herunterladen","⬇",!project)}
              ${action("stl-download","Modell-STL herunterladen","⬇",!project)}
              ${action("preview","3D-Vorschau","◈")}
              <div class="archive-context-separator"></div>
              ${action("photos","Fotos ansehen","â–£",true)}
              ${action("add-project","Zu Projekt hinzufügen","+",true)}
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
        this._notice=`3D-Studio-Job erstellt: ${item.name}. Öffne die Studio-Seite und nutze "Plan prüfen".`;
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
          <p class="muted">Mit „Überschreiben“ werden die vorhandenen Zieldateien oder Zielordner ersetzt.</p>
        `;
      }

      if(dialog.type==="print"){
        body=`
          <p><strong>${esc(dialog.item?.name||"")}</strong></p>
          <p class="muted">Die unveränderte Original-3MF-Datei wird in Bambu Studio geöffnet. Dort kannst du den Druck kontrolliert starten.</p>
          <button class="primary" data-dialog-project-open>↗ In Bambu Studio öffnen</button>
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
              <button data-dialog-close>✕</button>
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
                ${project?`<button class="primary" data-context-direct="print" data-context-path="${esc(item.path)}">🖨 Drucken</button>`:`<button data-context-direct="download" data-context-path="${esc(item.path)}">⬇ Download</button>`}
                <button data-preview-path="${esc(item.path)}">◈ 3D-Vorschau</button>
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
                <button data-preview-close>✕</button>
              </div>
              <small>${esc(item.path||"")}</small>
              <span class="badge">${esc(bytesLabel(item.size||0))}</span>

              <div class="archive-preview-controls">
                <button data-preview-transform="zoom-out">-</button>
                <button data-preview-transform="zoom-in">+</button>
                <button data-preview-transform="rotate">↻</button>
                <button data-preview-transform="reset">âŸ²</button>
              </div>

              ${project?`
                <button class="primary" data-context-direct="print" data-context-path="${esc(item.path)}">🖨 Drucken …</button>
                <button data-context-direct="plan" data-context-path="${esc(item.path)}">ðŸ—“ Planen …</button>
                <button class="primary" data-context-direct="model-open" data-context-path="${esc(item.path)}">↗ In Bambu Studio öffnen (Original-3MF)</button>
                <button data-context-direct="studio-open" data-context-path="${esc(item.path)}">[S] In 3D-Studio öffnen</button>
                <button data-context-direct="model-download" data-context-path="${esc(item.path)}">⬇ Modell-3MF herunterladen</button>
                <button data-context-direct="stl-download" data-context-path="${esc(item.path)}">⬇ Modell-STL herunterladen</button>
              `:""}

              ${project?"":`<button data-context-direct="download" data-context-path="${esc(item.path)}">⬇ Download</button>`}
              <button data-dialog-type="rename" data-dialog-path="${esc(item.path)}">âœŽ Umbenennen</button>
              <button data-dialog-type="move" data-dialog-path="${esc(item.path)}">â‡¢ Verschieben</button>
              <button class="danger" data-dialog-type="delete" data-dialog-path="${esc(item.path)}">🗑 Löschen</button>
              <button data-preview-close>✕ Vorschau schließen</button>
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
                ${this._source==="archive"?`<button data-action="gallery-export">⇩ Galerie-ZIP exportieren</button><button data-action="choose-zip-import">⇧ Galerie-ZIP importieren</button>`:""}
                <button data-action="template-refresh" title="3D-Drucker-Dateimanager/Galerie aktualisieren">↻ Aktualisieren</button>
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
                  <input class="archive-search" data-archive-filter placeholder="Dateien und Ordner durchsuchen …" value="${esc(this._filter)}">
                  <button class="archive-search-reset" data-action="search-reset" title="Suche zurücksetzen" ${this._filter?"":"disabled"}>✕</button>
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
                    : "Upload wird vorbereitet …"
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
                ${this._loading?`<p class="muted">Lade Daten …</p>`:""}

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
        this._queueNotice="Bambu Studio wird mit der unveränderten Original-3MF-Datei geöffnet. Nach einem erfolgreich gestarteten Druck kannst du einen Durchlauf mit ‚1 erledigt‘ abhaken.";
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
            <button data-queue-picker-close>✕</button>
          </div>
          <div class="toolbar">
            <button class="${this._pickerSource==="archive"?"primary":""}" data-queue-picker-source="archive">Lokales Archiv</button>
            <button class="${this._pickerSource==="sd"?"primary":""}" data-queue-picker-source="sd">SD-Karte</button>
            <button data-queue-picker-up ${canGoUp?"":"disabled"}>â†‘ Eine Ebene höher</button>
            <button data-queue-picker-refresh>↻ Aktualisieren</button>
            <span class="badge">${esc(this._pickerFolder||(this._pickerSource==="sd"?"/":"Hauptordner"))}</span>
          </div>
          ${this._pickerLoading?`<p class="muted">Galerie wird geladen …</p>`:""}
          <div class="queue-picker-grid">
            ${this._pickerItems.map((item)=>this.pickerItemHtml(item)).join("")||`<p class="muted">Keine 3MF-Modelle in diesem Ordner gefunden.</p>`}
          </div>
          <div class="queue-picker-footer">
            <strong>${selected} Modell(e) markiert</strong>
            <label>Stückzahl je Modell <select data-queue-picker-quantity>${this.quantityOptions(this._pickerQuantity||1)}</select></label>
            <label>Zeitpunkt optional <input data-queue-picker-scheduled type="datetime-local" value="${esc(this._pickerScheduled||"")}"></label>
            <button class="primary" data-queue-picker-add ${selected?"":"disabled"}>+ Markierte Modelle hinzufügen</button>
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
          <button class="primary queue-print" data-queue-studio="${esc(item.id)}">🖨 Drucken …</button>
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
          <div class="toolbar"><button class="primary" data-queue-open-gallery>+ Galerie öffnen</button><button data-queue-refresh>↻ Aktualisieren</button></div>
        </div>
        <div class="row"><span class="badge">${this._queue.length} Einträge</span><span class="badge">${total} Druckdurchläufe</span></div>
        ${this._queueError?`<p class="notice">${esc(this._queueError)}</p>`:""}
        ${this._queueNotice?`<p class="notice">${esc(this._queueNotice)}</p>`:""}
        ${this._queueLoading?`<p class="muted">Warteschlange wird geladen …</p>`:""}
        ${this._queueToast?`<div class="queue-mini-toast" style="left:${Number(this._queueToastPosition?.left||18)}px;top:${Number(this._queueToastPosition?.top||92)}px">${esc(this._queueToast)}</div>`:""}
        <div class="queue-list">${this._queue.map((item,index)=>this.rowHtml(item,index)).join("")||`<p class="muted">Noch keine geplanten Modelle. Öffne die Galerie oder nutze im Dateimanager den vorhandenen Menüpunkt „Planen …“.</p>`}</div>
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
        version: "5.0.0-beta39",
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
  const STUDIO_VERSION = "5.0.0-beta39";
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
      this._status = "beta9 Buildplate Selector Visual Fix bereit. Die Druckplattenauswahl wird jetzt im ShadowRoot als Bambu-Studio-Kachel mit stabilem Dropdown gerendert; die Buildplate übernimmt sichtbar Oberfläche, Kontur, Grid, Logo und Frontleiste.";
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

      // Beta9: Home Assistant pushes frequent hass updates.
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
      this._status = `Dry-Run-Plan wird geprüft: ${this.jobName(targetJob)} ...`;
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
        this._status = `Dry-Run-Plan erfolgreich geprüft: ${this.jobName(mergedJob)}. Echtes Slicen und Direktdruck bleiben deaktiviert.`;
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

      // Beta9: no full render on every keystroke.
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

      // Beta9: render is intentionally skipped while editing to avoid cursor jumps.
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
        this.adjustTransform("scale", 10, {status:"Skalierung erhöht.", render:true});
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
        return `<div class="health-note">Noch kein persistenter Studio-Job. Öffne ein 3MF-Modell in der Galerie ueber "In 3D-Studio öffnen".</div>`;
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
                <div class="profile-row"><span>Düse</span><strong>${escStudio(labels.nozzle)}</strong></div>
                <div class="profile-row"><span>Filament</span><strong>${escStudio(labels.filament)}</strong></div>
                <div class="profile-row"><span>Prozess</span><strong>${escStudio(labels.process)}</strong></div>
                <div class="profile-row"><span>Slicer</span><strong>planning_only</strong></div>
                <div class="profile-row"><span>Direktdruck</span><strong>deaktiviert</strong></div>
                <h3 style="margin-top:16px">Studio-Jobs</h3>
                <div class="job-list">${this.renderJobsList()}</div>
              </aside>

              <main class="buildplate-wrap">
                <div class="buildplate ${this._studioMesh ? "mesh-loaded" : ""}">
                  <div class="plate-label">Buildplate - beta9 Buildplate Selector Visual Fix</div>
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


  const PCC_BETA6_BUILD_PLATES = [
    {id:"smooth_pei_high_temp", name:"Smooth PEI Plate / High Temp Plate", short:"Smooth PEI / High Temp", texture:"smooth"},
    {id:"textured_pei", name:"Textured PEI Plate", short:"Textured PEI", texture:"textured"},
    {id:"cool_plate", name:"Cool Plate/PLA Plate", short:"Cool Plate / PLA", texture:"cool"},
    {id:"engineering_plate", name:"Engineering Plate", short:"Engineering Plate", texture:"engineering"},
    {id:"bambu_cool_plate_supertack", name:"Bambu Cool Plate SuperTack", short:"Cool Plate SuperTack", texture:"supertack"}
  ];

  const PCC_BETA6_PREVIEW_KEYS = [
    "preview_data_url", "previewDataUrl", "preview_url", "previewUrl",
    "thumbnail", "thumb", "image", "image_url", "imageUrl",
    "poster", "poster_url", "posterUrl"
  ];

  function pccBeta6NormalizeUrl(value) {
    const text = String(value || "").trim();
    if (!text) return "";
    if (text.startsWith("data:image/")) return text;
    if (text.startsWith("blob:")) return text;
    if (text.startsWith("http://") || text.startsWith("https://")) return text;
    if (text.startsWith("/")) return `${window.location.origin}${text}`;
    return "";
  }

  function pccBeta6PreviewFromItem(item) {
    if (!item) return "";

    const candidates = [];
    for (const key of PCC_BETA6_PREVIEW_KEYS) candidates.push(item?.[key]);

    candidates.push(
      item?.preview?.data_url,
      item?.preview?.dataUrl,
      item?.preview?.url,
      item?.preview?.href,
      item?.model?.preview_data_url,
      item?.model?.preview_url,
      item?.model?.thumbnail,
      item?.model?.image
    );

    for (const value of candidates) {
      const url = pccBeta6NormalizeUrl(value);
      if (url) return url;
    }

    return "";
  }

  function pccBeta6InjectPreview(target, itemOrPreview) {
    if (!target) return target;

    const preview = typeof itemOrPreview === "string"
      ? pccBeta6NormalizeUrl(itemOrPreview)
      : pccBeta6PreviewFromItem(itemOrPreview);

    if (!preview) return target;

    target.preview_data_url = target.preview_data_url || preview;
    target.preview_url = target.preview_url || preview;
    target.thumbnail = target.thumbnail || preview;
    target.image = target.image || preview;

    target.preview = target.preview || {};
    target.preview.data_url = target.preview.data_url || preview;
    target.preview.url = target.preview.url || preview;

    target.model = target.model || {};
    target.model.preview_data_url = target.model.preview_data_url || preview;
    target.model.preview_url = target.model.preview_url || preview;
    target.model.thumbnail = target.model.thumbnail || preview;
    target.model.image = target.model.image || preview;

    return target;
  }

  const PCC_BETA6_STUDIO_CLASS = customElements.get("printer-control-center-studio-card") || PrinterControlCenterStudioCard;
  const PCC_BETA6_ORIGINAL_HANDLE_CLICK = PCC_BETA6_STUDIO_CLASS.prototype.handleClick;
  const PCC_BETA6_ORIGINAL_HANDLE_CHANGE = PCC_BETA6_STUDIO_CLASS.prototype.handleChange;

  PCC_BETA6_STUDIO_CLASS.prototype.beta6Serial = function beta6Serial() {
    return String(this._activeJob?.serial || this._config?.serial || "");
  };

  PCC_BETA6_STUDIO_CLASS.prototype.beta6CurrentBuildPlate = function beta6CurrentBuildPlate() {
    const current =
      this._studioBuildPlate ||
      this._activeJob?.profile_context?.build_plate?.id ||
      this._activeJob?.profile_context?.build_plate_id ||
      "smooth_pei_high_temp";

    return PCC_BETA6_BUILD_PLATES.find((plate) => plate.id === current) || PCC_BETA6_BUILD_PLATES[0];
  };

  PCC_BETA6_STUDIO_CLASS.prototype.beta6SetBuildPlate = function beta6SetBuildPlate(id) {
    const plate = PCC_BETA6_BUILD_PLATES.find((item) => item.id === id) || PCC_BETA6_BUILD_PLATES[0];
    this._studioBuildPlate = plate.id;

    if (this._activeJob) {
      this._activeJob.profile_context = this._activeJob.profile_context || {};
      this._activeJob.profile_context.build_plate = {
        id: plate.id,
        name: plate.name,
        texture: plate.texture
      };
      this._activeJob.build_plate = plate.name;
      this.scheduleActiveJobSave?.();
    }

    this._status = `Druckplatte gewählt: ${plate.name}.`;
    this.render();
  };

  PCC_BETA6_STUDIO_CLASS.prototype.jobName = function jobName(job=this._activeJob) {
    const candidates = [
      job?.modelName,
      job?.file_name,
      job?.filename,
      job?.name,
      job?.model?.name,
      job?.model?.filename,
      job?.model?.file_name,
      job?.path,
      job?.file_path
    ];

    for (const value of candidates) {
      if (typeof value === "string" && value.trim()) {
        return value.trim().split("/").filter(Boolean).pop() || value.trim();
      }

      if (value && typeof value === "object") {
        for (const key of ["name", "filename", "file_name", "path"]) {
          const nested = String(value?.[key] || "").trim();
          if (nested) return nested.split("/").filter(Boolean).pop() || nested;
        }
      }
    }

    return "3MF-Modell";
  };

  PCC_BETA6_STUDIO_CLASS.prototype.beta6CleanObjectObjectLabels = function beta6CleanObjectObjectLabels() {
    const root = this.shadowRoot;
    if (!root) return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];

    while (walker.nextNode()) nodes.push(walker.currentNode);

    for (const node of nodes) {
      const value = String(node.nodeValue || "");
      if (value.includes("[object Object]")) {
        node.nodeValue = value.replaceAll("[object Object]", "").trim();
      }
    }
  };

  PCC_BETA6_STUDIO_CLASS.prototype.beta6TopActionHost = function beta6TopActionHost() {
    const root = this.shadowRoot;
    if (!root) return null;

    const buttons = [...root.querySelectorAll("button")];
    const importButton = buttons.find((button) => button.textContent?.trim?.() === "Importieren");
    if (importButton?.parentElement) return importButton.parentElement;

    const planButton = buttons.find((button) => button.textContent?.includes?.("Plan prüfen"));
    if (planButton?.parentElement) return planButton.parentElement;

    return null;
  };

  PCC_BETA6_STUDIO_CLASS.prototype.beta6CleanTopNavigation = function beta6CleanTopNavigation() {
    const host = this.beta6TopActionHost?.();
    if (!host) return;

    const keepTexts = new Set(["Importieren", "Plan prüfen", "Health prüfen", "Jobs neu laden", "Löschen"]);

    for (const button of [...host.querySelectorAll("button")]) {
      const text = String(button.textContent || "").trim();
      if (!keepTexts.has(text)) button.remove();
    }

    const deleteButtons = [...host.querySelectorAll("button")].filter((button) => String(button.textContent || "").trim() === "Löschen");
    deleteButtons.slice(1).forEach((button) => button.remove());

    if (!deleteButtons.length) {
      const button = document.createElement("button");
      button.className = "action";
      button.dataset.beta6TopDelete = "1";
      button.textContent = "Löschen";
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.deleteActiveJob();
      });
      host.appendChild(button);
    }
  };

  PCC_BETA6_STUDIO_CLASS.prototype.beta6InstallBuildPlateSwitcher = function beta6InstallBuildPlateSwitcher() {
    const root = this.shadowRoot;
    if (!root) return;

    const panels = [...root.querySelectorAll(".panel")];
    const leftPanel = panels[0];
    if (!leftPanel) return;

    const current = this.beta6CurrentBuildPlate();

    let box = leftPanel.querySelector(".beta6-buildplate-switcher");
    if (!box) {
      box = document.createElement("div");
      box.className = "beta6-buildplate-switcher";
      leftPanel.insertBefore(box, leftPanel.children[1] || null);
    }

    const options = PCC_BETA6_BUILD_PLATES.map((plate) => `
      <option value="${escStudio(plate.id)}" ${plate.id === current.id ? "selected" : ""}>${escStudio(plate.name)}</option>
    `).join("");

    box.innerHTML = `
      <h3>Druckplatte</h3>
      <select data-beta6-buildplate>
        ${options}
      </select>
      <div class="beta6-buildplate-preview beta6-plate-${escStudio(current.texture)}">
        <div class="beta6-plate-grid"></div>
        <b>${escStudio(current.short)}</b>
      </div>
    `;

    const select = box.querySelector("[data-beta6-buildplate]");
    select?.addEventListener("change", (event) => {
      this.beta6SetBuildPlate(event.target?.value || "smooth_pei_high_temp");
    });
  };

  PCC_BETA6_STUDIO_CLASS.prototype.beta6ApplyBuildPlateVisual = function beta6ApplyBuildPlateVisual() {
    const root = this.shadowRoot;
    if (!root) return;

    const plate = this.beta6CurrentBuildPlate();
    const buildplate = root.querySelector(".buildplate");
    if (!buildplate) return;

    buildplate.dataset.beta6Buildplate = plate.id;
    buildplate.classList.remove(
      "beta6-plate-smooth",
      "beta6-plate-textured",
      "beta6-plate-cool",
      "beta6-plate-engineering",
      "beta6-plate-supertack"
    );
    buildplate.classList.add(`beta6-plate-${plate.texture}`);

    const label = root.querySelector(".plate-label");
    if (label) label.textContent = `Buildplate – ${plate.name}`;

    const modelProxy = root.querySelector(".model");
    if (modelProxy) {
      if (this._studioModelImageUrl) modelProxy.classList.add("beta6-proxy-muted");
      else modelProxy.classList.remove("beta6-proxy-muted");
    }
  };

  PCC_BETA6_STUDIO_CLASS.prototype.activeJobPreviewUrl = function activeJobPreviewUrl() {
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
      matchingJob?.preview?.data_url, matchingJob?.preview?.url,
      matchingJob?.model?.preview_data_url, matchingJob?.model?.preview_url, matchingJob?.model?.thumbnail, matchingJob?.model?.image,

      handoff?.preview_data_url, handoff?.previewDataUrl, handoff?.preview_url, handoff?.thumbnail, handoff?.image,
      handoff?.preview?.data_url, handoff?.preview?.url,
      handoff?.model?.preview_data_url, handoff?.model?.preview_url, handoff?.model?.thumbnail, handoff?.model?.image
    ];

    for (const value of candidates) {
      const url = pccBeta6NormalizeUrl(value);
      if (url) return url;
    }

    return "";
  };

  PCC_BETA6_STUDIO_CLASS.prototype.updateStudioModelImage = function updateStudioModelImage() {
    const url = this.activeJobPreviewUrl?.() || "";
    this._studioModelImageUrl = url;
    return url;
  };

  PCC_BETA6_STUDIO_CLASS.prototype.ensureBeta6PreviewForActiveJob = async function ensureBeta6PreviewForActiveJob() {
    const job = this._activeJob || null;
    if (!job || this.updateStudioModelImage?.()) return;

    const path = String(job.file_path || job.path || job.model?.path || "").trim();
    const source = String(job.source || job.origin || "archive").toLowerCase();
    if (!path) return;

    const key = `${source}:${path}`;
    if (this._beta6PreviewLookupKey === key) return;
    this._beta6PreviewLookupKey = key;

    const folder = path.includes("/") ? path.split("/").slice(0, -1).join("/") : "";

    try {
      const data = source === "sd"
        ? await this.ws({type:"printer_control_center/sd/list", serial:this.beta6Serial(), folder:folder || "/", force:false})
        : await this.ws({type:"printer_control_center/archive/list", serial:this.beta6Serial(), folder});

      const item = (data.items || []).find((candidate) => String(candidate.path || "") === path);
      const preview = pccBeta6PreviewFromItem(item);
      if (!preview) return;

      pccBeta6InjectPreview(job, preview);
      this._studioModelImageUrl = preview;

      try {
        await this.ws({
          type:"printer_control_center/studio_jobs/update",
          job_id:job.id || this._activeJobId || "",
          patch:job
        });
      } catch (_error) {}

      this.render();
    } catch (_error) {}
  };

  PCC_BETA6_STUDIO_CLASS.prototype.cleanupBetaStudioUi = function cleanupBetaStudioUi() {
    const root = this.shadowRoot;
    if (!root) return;

    this.beta6CleanTopNavigation?.();
    this.beta6InstallBuildPlateSwitcher?.();
    this.beta6ApplyBuildPlateVisual?.();
    this.beta6CleanObjectObjectLabels?.();
    this.updateStudioModelImage?.();

    if (!this._studioModelImageUrl && !this._beta6PreviewLookupRunning) {
      this._beta6PreviewLookupRunning = true;
      this.ensureBeta6PreviewForActiveJob?.().finally?.(() => {
        this._beta6PreviewLookupRunning = false;
      });
    }
  };

  PCC_BETA6_STUDIO_CLASS.prototype.beta6PlanFromItem = function beta6PlanFromItem(item, source="archive") {
    const path = String(item?.path || "");
    const name = String(item?.name || path.split("/").filter(Boolean).pop() || "3MF-Modell");
    const now = new Date().toISOString();
    const plate = this.beta6CurrentBuildPlate();

    const plan = {
      version: STUDIO_VERSION,
      schema: "printer-control-center.v5.beta6.import",
      source,
      origin: source,
      serial: this.beta6Serial(),
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
        size: Number(item?.size || 0),
        modified: item?.modified || null
      },
      build_plate: plate.name,
      transform: defaultTransform(),
      profile_context: {
        ...(this.buildProfileContext?.() || this.defaultProfileContext?.() || {}),
        build_plate: {
          id: plate.id,
          name: plate.name,
          texture: plate.texture
        }
      },
      real_slicing_enabled: false,
      direct_print_enabled: false,
      status: "prepared",
      stage: "waiting",
      message: "Aus dem Studio-Import-Popup übernommen. Echter Slicer-Lauf ist deaktiviert."
    };

    return pccBeta6InjectPreview(plan, item);
  };

  PCC_BETA6_STUDIO_CLASS.prototype.openBeta6ImportDialog = function openBeta6ImportDialog() {
    this._beta6Import = {
      open:true,
      source:"archive",
      folder:"",
      parent:"",
      loading:false,
      progress:0,
      items:[],
      selected:null,
      error:"",
      notice:""
    };

    this.renderBeta6ImportDialog();
    this.loadBeta6ImportFolder(true);
  };

  PCC_BETA6_STUDIO_CLASS.prototype.closeBeta6ImportDialog = function closeBeta6ImportDialog() {
    this.shadowRoot?.querySelector?.(".beta6-import-backdrop")?.remove?.();
    this._beta6Import = null;
  };

  PCC_BETA6_STUDIO_CLASS.prototype.loadBeta6ImportFolder = async function loadBeta6ImportFolder(force=false) {
    const state = this._beta6Import;
    if (!state || state.loading) return;

    state.loading = true;
    state.progress = 12;
    state.error = "";
    this.renderBeta6ImportDialog();

    try {
      const serial = this.beta6Serial();
      const data = state.source === "sd"
        ? await this.ws({type:"printer_control_center/sd/list", serial, folder:state.folder || "/", force:Boolean(force)})
        : await this.ws({type:"printer_control_center/archive/list", serial, folder:state.folder || ""});

      state.progress = 72;
      state.items = (data.items || [])
        .filter((item) => item.kind === "folder" || String(item.name || item.path || "").toLowerCase().endsWith(".3mf"));
      state.folder = data.folder || "";
      state.parent = data.parent || "";
      state.selected = null;
      state.notice = `${state.items.length} Einträge geladen.`;
    } catch (error) {
      state.error = `Galerie konnte nicht geladen werden: ${String(error?.message || error)}`;
    } finally {
      state.progress = 100;
      state.loading = false;
      this.renderBeta6ImportDialog();
    }
  };

  PCC_BETA6_STUDIO_CLASS.prototype.renderBeta6ImportDialog = function renderBeta6ImportDialog() {
    const root = this.shadowRoot;
    const state = this._beta6Import;
    if (!root || !state?.open) return;

    let overlay = root.querySelector(".beta6-import-backdrop");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "beta6-import-backdrop";
      root.appendChild(overlay);
    }

    const itemHtml = (state.items || []).map((item) => {
      const folder = item.kind === "folder";
      const selected = state.selected && String(state.selected.path || "") === String(item.path || "");
      const preview = pccBeta6PreviewFromItem(item);

      return `
        <article class="beta6-import-item ${selected ? "selected" : ""}" data-beta6-import-path="${escStudio(item.path || "")}" data-beta6-import-kind="${escStudio(item.kind || "")}">
          <div class="beta6-import-preview">
            ${preview ? `<img src="${preview}" alt="">` : `<div class="beta6-import-placeholder">${folder ? "📁" : "3MF"}</div>`}
          </div>
          <div class="beta6-import-meta">
            <b>${escStudio(item.name || item.path || "3MF-Modell")}</b>
            <span>${escStudio(item.path || "")}</span>
            <small>${folder ? "Ordner" : "3MF-Projekt"}${item.size ? ` · ${Math.round(Number(item.size)/1024)} KB` : ""}</small>
          </div>
          <button class="action" data-beta6-import-action="${folder ? "open-folder" : "select"}">${folder ? "Öffnen" : "Auswählen"}</button>
        </article>
      `;
    }).join("");

    overlay.innerHTML = `
      <div class="beta6-import-dialog">
        <header>
          <div>
            <h2>3MF ins Studio importieren</h2>
            <p>Archiv oder SD-Karte auswählen, Modell anklicken, Import starten.</p>
          </div>
          <button class="action" data-beta6-import-action="close">Schließen</button>
        </header>

        <div class="beta6-import-toolbar">
          <select data-beta6-import-source>
            <option value="archive" ${state.source === "archive" ? "selected" : ""}>Archiv</option>
            <option value="sd" ${state.source === "sd" ? "selected" : ""}>SD-Karte</option>
          </select>
          <button class="action" data-beta6-import-action="up" ${state.parent ? "" : "disabled"}>Eine Ebene hoch</button>
          <button class="action" data-beta6-import-action="refresh">Aktualisieren</button>
          <button class="action primary" data-beta6-import-action="import" ${state.selected ? "" : "disabled"}>Ins Studio importieren</button>
        </div>

        <div class="beta6-progress">
          <div style="width:${Math.max(0, Math.min(100, Number(state.progress || 0)))}%"></div>
        </div>

        <div class="beta6-import-folder">
          Quelle: <b>${state.source === "sd" ? "SD-Karte" : "Archiv"}</b>
          <span>${escStudio(state.folder || "Hauptordner")}</span>
        </div>

        ${state.error ? `<div class="beta6-import-error">${escStudio(state.error)}</div>` : ""}
        ${state.notice ? `<div class="beta6-import-notice">${escStudio(state.notice)}</div>` : ""}

        <section class="beta6-import-grid">
          ${state.loading ? `<div class="beta6-import-loading">Lade Galerie …</div>` : itemHtml || `<div class="beta6-import-loading">Keine 3MF-Modelle gefunden.</div>`}
        </section>
      </div>
    `;

    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) {
        this.closeBeta6ImportDialog();
      }
    }, {once:true});

    overlay.querySelector("[data-beta6-import-source]")?.addEventListener("change", (event) => {
      state.source = event.target?.value || "archive";
      state.folder = state.source === "sd" ? "/" : "";
      state.parent = "";
      state.items = [];
      state.selected = null;
      this.loadBeta6ImportFolder(true);
    });

    for (const button of [...overlay.querySelectorAll("[data-beta6-import-action]")]) {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();

        const action = String(button.dataset.beta6ImportAction || "");
        const article = button.closest(".beta6-import-item");
        const path = article?.dataset?.beta6ImportPath || "";
        const item = (state.items || []).find((candidate) => String(candidate.path || "") === path) || null;

        if (action === "close") this.closeBeta6ImportDialog();
        else if (action === "refresh") this.loadBeta6ImportFolder(true);
        else if (action === "up") {
          state.folder = state.parent || "";
          state.selected = null;
          this.loadBeta6ImportFolder(false);
        } else if (action === "open-folder" && item) {
          state.folder = item.path || "";
          state.selected = null;
          this.loadBeta6ImportFolder(false);
        } else if (action === "select" && item) {
          state.selected = item;
          state.notice = `Ausgewählt: ${item.name || item.path}`;
          this.renderBeta6ImportDialog();
        } else if (action === "import") {
          this.beta6ImportSelectedModel();
        }
      });
    }

    for (const article of [...overlay.querySelectorAll(".beta6-import-item")]) {
      article.addEventListener("dblclick", (event) => {
        event.preventDefault();
        event.stopPropagation();

        const path = article.dataset.beta6ImportPath || "";
        const item = (state.items || []).find((candidate) => String(candidate.path || "") === path) || null;
        if (!item) return;

        if (item.kind === "folder") {
          state.folder = item.path || "";
          state.selected = null;
          this.loadBeta6ImportFolder(false);
        } else {
          state.selected = item;
          this.beta6ImportSelectedModel();
        }
      });
    }
  };

  PCC_BETA6_STUDIO_CLASS.prototype.beta6ImportSelectedModel = async function beta6ImportSelectedModel() {
    const state = this._beta6Import;
    const item = state?.selected;
    if (!state || !item) return;

    state.loading = true;
    state.progress = 18;
    state.error = "";
    state.notice = "Studio-Job wird vorbereitet …";
    this.renderBeta6ImportDialog();

    try {
      const plan = this.beta6PlanFromItem(item, state.source);
      state.progress = 46;
      this.renderBeta6ImportDialog();

      const response = await this.ws({
        type:"printer_control_center/studio_jobs/create",
        serial:this.beta6Serial(),
        plan
      });

      state.progress = 82;
      this.renderBeta6ImportDialog();

      const job = response?.job || response || plan;
      pccBeta6InjectPreview(job, item);

      this._jobs = [...(Array.isArray(this._jobs) ? this._jobs : []), job].filter(Boolean);
      this._jobsLoaded = true;
      this.applyActiveJob?.(job, {status:false, render:false});
      this._activeJob = job;
      this._activeJobId = job.id || this._activeJobId || "";
      this._studioModelImageUrl = pccBeta6PreviewFromItem(job) || pccBeta6PreviewFromItem(item) || "";
      this._studioMesh = null;
      this._studioMeshJobId = "";
      this._studioMeshUrl = "";
      this._studioMeshStatus = this._studioModelImageUrl
        ? "3MF importiert. Modellbild aus Galerie geladen; STL-Mesh kann zusätzlich geladen werden."
        : "3MF importiert. Kein Vorschaubild im Projekt gefunden; STL-Mesh kann zusätzlich geladen werden.";
      this._status = `3MF ins Studio importiert: ${this.jobName(job)}.`;
      state.progress = 100;

      try {
        window.PCC_STUDIO_HANDOFF?.broadcast?.(job);
      } catch (_error) {}

      this.closeBeta6ImportDialog();
      this.render();
    } catch (error) {
      state.error = `Import fehlgeschlagen: ${String(error?.message || error)}`;
      state.loading = false;
      state.progress = 0;
      this.renderBeta6ImportDialog();
    }
  };

  PCC_BETA6_STUDIO_CLASS.prototype.bindBetaContextMenu = function bindBetaContextMenu() {
    const root = this.shadowRoot;
    if (!root || this._beta6ContextBound === true) return;

    this._beta6ContextBound = true;

    const openHandler = (event) => {
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

    const closeHandler = (event) => {
      if (event.button !== 0) return;
      if (event.target?.closest?.(".studio-context")) return;
      if (event.target?.closest?.(".beta6-import-dialog")) return;

      root.querySelectorAll(".studio-context.beta6-floating-context,.studio-context.beta5-floating-context,.studio-context.beta4-floating-context,.studio-context.beta3-floating-context").forEach((node) => node.remove());
      this._beta6ContextPoint = null;
      this._studioContextMenu = null;
    };

    root.addEventListener("contextmenu", openHandler, {capture:true});
    root.addEventListener("pointerdown", (event) => {
      if (event.button === 2) openHandler(event);
      else closeHandler(event);
    }, {capture:true});
  };

  PCC_BETA6_STUDIO_CLASS.prototype.handleContextMenu = function handleContextMenu(event) {
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
      clientX: Math.round(event.clientX),
      clientY: Math.round(event.clientY)
    };

    this._beta6ContextPoint = point;
    this._studioContextMenu = point;
    this._status = "Studio-Kontextmenü geöffnet.";
    this.showBetaStudioContextMenu(point);
  };

  PCC_BETA6_STUDIO_CLASS.prototype.showBetaStudioContextMenu = function showBetaStudioContextMenu(point) {
    const root = this.shadowRoot;
    if (!root) return;

    root.querySelectorAll(".studio-context.beta6-floating-context,.studio-context.beta5-floating-context,.studio-context.beta4-floating-context,.studio-context.beta3-floating-context").forEach((node) => node.remove());

    const menu = document.createElement("div");
    menu.className = "studio-context beta6-floating-context";
    menu.style.position = "fixed";
    menu.style.left = `${Math.max(8, Number(point?.clientX || 8))}px`;
    menu.style.top = `${Math.max(8, Number(point?.clientY || 8))}px`;
    menu.style.zIndex = "2147483000";

    menu.innerHTML = `
      <div class="beta6-menu-title">3D-Studio</div>

      <div class="beta6-menu-row" data-beta6-panel="position">Position ▸</div>
      <div class="beta6-menu-row" data-beta6-panel="transform">Drehen / Skalieren ▸</div>
      <div class="beta6-menu-row" data-beta6-panel="mirror">Spiegeln / Zerren ▸</div>
      <div class="beta6-menu-row" data-beta6-panel="job">Job / Modell ▸</div>
      <button class="action" data-beta6-action="close-context">Schließen</button>

      <div class="beta6-side-panel" data-beta6-side-panel="position">
        <button class="action" data-beta6-action="center">Zentrieren</button>
        <button class="action" data-beta6-action="move-left">X -10</button>
        <button class="action" data-beta6-action="move-right">X +10</button>
        <button class="action" data-beta6-action="move-up">Y -10</button>
        <button class="action" data-beta6-action="move-down">Y +10</button>
        <button class="action" data-beta6-action="lay-flat">Flach legen</button>
        <button class="action" data-beta6-action="snap-grid">Raster anwenden</button>
      </div>

      <div class="beta6-side-panel" data-beta6-side-panel="transform">
        <button class="action" data-beta6-action="rot-left">Rot -45</button>
        <button class="action" data-beta6-action="rot-right">Rot +45</button>
        <button class="action" data-beta6-action="scale-down">Scale -</button>
        <button class="action" data-beta6-action="scale-up">Scale +</button>
        <button class="action" data-beta6-action="zoom-out">Zoom -</button>
        <button class="action" data-beta6-action="zoom-in">Zoom +</button>
      </div>

      <div class="beta6-side-panel" data-beta6-side-panel="mirror">
        <button class="action" data-beta6-action="mirror-x">Spiegel X</button>
        <button class="action" data-beta6-action="mirror-y">Spiegel Y</button>
        <button class="action" data-beta6-action="mirror-z">Spiegel Z</button>
        <button class="action" data-beta6-action="skew-left">Zerr X -</button>
        <button class="action" data-beta6-action="skew-right">Zerr X +</button>
      </div>

      <div class="beta6-side-panel" data-beta6-side-panel="job">
        <button class="action" data-beta6-action="open-import">Importieren …</button>
        <button class="action" data-beta6-action="reload-mesh">Echtes Modell neu laden</button>
        <button class="action" data-beta6-action="duplicate">Duplizieren</button>
        <button class="action danger" data-beta6-action="delete">Löschen</button>
        <button class="action" data-beta6-action="reset">Reset</button>
      </div>
    `;

    const rows = [...menu.querySelectorAll("[data-beta6-panel]")];
    const panels = [...menu.querySelectorAll("[data-beta6-side-panel]")];

    const showPanel = (name) => {
      for (const panel of panels) {
        panel.style.display = panel.dataset.beta6SidePanel === name ? "grid" : "none";
      }
    };

    rows.forEach((row) => {
      row.addEventListener("mouseenter", () => showPanel(row.dataset.beta6Panel));
    });

    menu.addEventListener("pointerdown", (event) => {
      event.stopPropagation();
    });

    menu.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      event.stopPropagation();
    });

    menu.addEventListener("click", (event) => {
      const button = event.target?.closest?.("button[data-beta6-action]");
      if (!button) return;

      event.preventDefault();
      event.stopPropagation();

      const action = String(button.dataset.beta6Action || "");

      if (action === "close-context") {
        this._beta6ContextPoint = null;
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
      else if (action === "open-import") this.openBeta6ImportDialog();
      else if (action === "reload-mesh") this.ensureStudioMeshLoaded(true);
      else if (action === "duplicate") this.duplicateActiveJob();
      else if (action === "delete") this.deleteActiveJob();
      else if (action === "reset") this.resetTransform?.();

      this._beta6ContextPoint = point;
    });

    root.appendChild(menu);
    showPanel("position");
  };

  PCC_BETA6_STUDIO_CLASS.prototype.deleteActiveJob = async function deleteActiveJob() {
    const active = this._activeJob || {};
    const activeId = String(this._activeJobId || active.id || "");
    const activePath = String(active.file_path || active.path || active.model?.path || "").trim();

    if (!activeId && !activePath) {
      this._status = "Kein aktiver Studio-Job zum Entfernen ausgewählt.";
      this.render();
      return;
    }

    const removedName = this.jobName(active);
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
          serial:clone.serial || this.beta6Serial(),
          plan:clone
        });
        const created = response?.job || response || null;
        if (created?.id) recreated.push(created);
      }

      this._jobs = recreated;
      this._jobsLoaded = true;
      this._activeJob = recreated[0] || null;
      this._activeJobId = this._activeJob?.id || "";
      this._studioMesh = null;
      this._studioMeshJobId = "";
      this._studioMeshUrl = "";
      this._studioModelImageUrl = "";

      if (this._activeJob) {
        this.applyActiveJob?.(this._activeJob, {status:false, render:false});
      } else {
        this._transform = defaultTransform();
        this._lastDryRun = null;
        this._lastStudioPlan = null;
        this._studioMeshStatus = "Kein Studio-Job aktiv. Importiere ein 3MF-Modell.";
      }

      this._status = `Studio-Job dauerhaft entfernt: ${removedName}.`;
    } catch (error) {
      this._status = `Studio-Job konnte nicht dauerhaft entfernt werden: ${String(error?.message || error)}`;
    }

    this.render();
  };

  if (!PCC_BETA6_STUDIO_CLASS.prototype._pccBeta6ClickWrapped) {
    PCC_BETA6_STUDIO_CLASS.prototype.handleClick = function handleClickBeta6(event) {
      const action = event.target?.closest?.("[data-action]")?.dataset?.action || "";
      if (action === "import") {
        event.preventDefault();
        event.stopPropagation();
        this.openBeta6ImportDialog();
        return;
      }
      return PCC_BETA6_ORIGINAL_HANDLE_CLICK.call(this, event);
    };
    PCC_BETA6_STUDIO_CLASS.prototype._pccBeta6ClickWrapped = true;
  }

  if (!PCC_BETA6_STUDIO_CLASS.prototype._pccBeta6ChangeWrapped) {
    PCC_BETA6_STUDIO_CLASS.prototype.handleChange = function handleChangeBeta6(event) {
      const buildplate = event.target?.closest?.("[data-beta6-buildplate]");
      if (buildplate) {
        event.preventDefault();
        event.stopPropagation();
        this.beta6SetBuildPlate(buildplate.value || "smooth_pei_high_temp");
        return;
      }
      return PCC_BETA6_ORIGINAL_HANDLE_CHANGE.call(this, event);
    };
    PCC_BETA6_STUDIO_CLASS.prototype._pccBeta6ChangeWrapped = true;
  }


  const PCC_BETA7_BUILD_PLATES = [
    {id:"cool_plate", name:"Cool Plate/PLA Plate", short:"Cool Plate / PLA", texture:"cool", tint:"#84d8ff"},
    {id:"engineering_plate", name:"Engineering Plate", short:"Engineering Plate", texture:"engineering", tint:"#a8adb4"},
    {id:"smooth_pei_high_temp", name:"Smooth PEI Plate / High Temp Plate", short:"Smooth PEI / High Temp", texture:"smooth", tint:"#f0d85f"},
    {id:"textured_pei", name:"Textured PEI Plate", short:"Textured PEI", texture:"textured", tint:"#d2b264"},
    {id:"bambu_cool_plate_supertack", name:"Bambu Cool Plate SuperTack", short:"Cool Plate SuperTack", texture:"supertack", tint:"#94e87a"}
  ];

  const PCC_BETA7_TEXT_FIXES = [
    ["Ãƒ"+"Â¤","ä"],["Ãƒ"+"Â¶","ö"],["Ãƒ"+"Â¼","ü"],["Ãƒ"+"Å“","Ü"],["Ãƒ"+"â€“","Ö"],["Ãƒ"+"Â„","Ä"],["Ãƒ"+"Å¸","ß"],
    ["Ã"+"¼","ü"],["Ã"+"¶","ö"],["Ã"+"¤","ä"],["Ã"+"œ","Ü"],["Ã"+"–","Ö"],["Ã"+"„","Ä"],["Ã"+"Ÿ","ß"],
    ["Ã¢"+"â‚¬Å¾","„"],["Ã¢"+"â‚¬Å“","“"],["Ã¢"+"â‚¬Â","”"],["Ã¢"+"â‚¬Â¦","…"],["Ã¢"+"â‚¬“","–"],["Ã¢"+"â‚¬â€�","—"],
    ["Ã¢"+"â€”Â","●"],["Ã¢"+"â€ â€”","↗"],["Ã¢"+"â€ Â»","↻"],["Ã¢"+"â€ â€”","↗"],["Ã¢"+"â€ Â»","↻"],
    ["ðŸ"+"—‘","🗑"],["ðŸ"+"“","📁"],["ðŸ"+"“„","📄"],["ðŸ"+"“·","📷"],["ðŸ"+"’¡","💡"],
    ["Loe"+"schen","Löschen"],["Öffnen","Öffnen"],["öffnen","öffnen"],["Prüfen","Prüfen"],["prüfen","prüfen"],
    ["Zurück","Zurück"],["zurück","zurück"],["ausgewählt","ausgewählt"],["gewählt","gewählt"],
    ["hinzugefügt","hinzugefügt"],["geöffnet","geöffnet"]
  ];

  function pccBeta7FixText(value) {
    let text = String(value ?? "");
    for (const [bad, good] of PCC_BETA7_TEXT_FIXES) text = text.split(bad).join(good);

    if (/[Ãâð�]/.test(text)) {
      const known = [
        "Archiv", "SD-Karte", "Hauptordner", "Neuer Ordner", "Öffnen", "Umbenennen", "Verschieben", "Löschen",
        "Drucken", "Planen", "3MF hochladen", "Galerie-ZIP exportieren", "Galerie-ZIP importieren", "Aktualisieren",
        "Auswahl löschen", "Sichtbare auswählen", "Großansicht", "Livebild ausblenden", "Livebild anzeigen"
      ];

      for (const label of known) {
        if (text.includes(label)) {
          text = text.replace(/^[^A-Za-zÄÖÜäöüß0-9]+/u, "");
          break;
        }
      }

      text = text
        .replace(/Ã\S{0,5}/g, "")
        .replace(/â\S{0,5}/g, "")
        .replace(/ðŸ\S{0,5}/g, "")
        .replace(/�+/g, "")
        .replace(/\s{2,}/g, " ")
        .trim();
    }

    return text;
  }

  function pccBeta7SanitizeRoot(root) {
    if (!root) return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    for (const node of nodes) {
      const before = String(node.nodeValue || "");
      const after = pccBeta7FixText(before);
      if (before !== after) node.nodeValue = after;
    }

    for (const element of [...root.querySelectorAll?.("*") || []]) {
      for (const attr of ["title", "aria-label", "placeholder", "alt"]) {
        if (!element.hasAttribute?.(attr)) continue;
        const before = element.getAttribute(attr);
        const after = pccBeta7FixText(before);
        if (before !== after) element.setAttribute(attr, after);
      }
    }
  }

  function pccBeta7SanitizeAllOpenRoots(root=document) {
    try {
      pccBeta7SanitizeRoot(root);
      for (const node of [...root.querySelectorAll?.("*") || []]) {
        if (node.shadowRoot) pccBeta7SanitizeAllOpenRoots(node.shadowRoot);
      }
    } catch (_error) {}
  }

  function pccBeta7PatchCardClass(type) {
    const cls = customElements.get(type);
    const proto = cls?.prototype;
    if (!proto || proto._pccBeta7Sanitized) return;

    if (typeof proto.render === "function") {
      const originalRender = proto.render;
      proto.render = function renderBeta7Sanitized(...args) {
        const result = originalRender.apply(this, args);
        window.queueMicrotask?.(() => pccBeta7SanitizeRoot(this.shadowRoot));
        window.setTimeout(() => pccBeta7SanitizeRoot(this.shadowRoot), 25);
        return result;
      };
    }

    if (typeof proto.connectedCallback === "function") {
      const originalConnected = proto.connectedCallback;
      proto.connectedCallback = function connectedBeta7Sanitized(...args) {
        const result = originalConnected.apply(this, args);
        window.setTimeout(() => {
          pccBeta7SanitizeRoot(this.shadowRoot);
          if (!this._pccBeta7Observer && this.shadowRoot && typeof MutationObserver !== "undefined") {
            this._pccBeta7Observer = new MutationObserver(() => pccBeta7SanitizeRoot(this.shadowRoot));
            this._pccBeta7Observer.observe(this.shadowRoot, {childList:true, subtree:true, characterData:true});
          }
        }, 25);
        return result;
      };
    }

    proto._pccBeta7Sanitized = true;
  }

  function pccBeta7PatchAllCards() {
    const types = new Set((window.customCards || [])
      .map((card) => String(card?.type || ""))
      .filter((type) => type.includes("printer-control-center")));

    [
      "printer-control-center-card",
      "printer-control-center-printer-card",
      "printer-control-center-gallery-card",
      "printer-control-center-filemanager-card",
      "printer-control-center-file-manager-card",
      "printer-control-center-queue-card",
      "printer-control-center-studio-card",
      "printer-control-center-templates-card"
    ].forEach((type) => types.add(type));

    for (const type of types) pccBeta7PatchCardClass(type);

    window.setTimeout(() => pccBeta7SanitizeAllOpenRoots(), 50);
    window.setTimeout(() => pccBeta7SanitizeAllOpenRoots(), 350);
  }

  pccBeta7PatchAllCards();
  if (!window._pccBeta7SanitizeInterval) {
    window._pccBeta7SanitizeInterval = window.setInterval(() => pccBeta7SanitizeAllOpenRoots(), 1600);
  }

  const PCC_BETA7_STUDIO_CLASS = customElements.get("printer-control-center-studio-card") || PrinterControlCenterStudioCard;
  const PCC_BETA7_ORIGINAL_HANDLE_CLICK = PCC_BETA7_STUDIO_CLASS.prototype.handleClick;

  PCC_BETA7_STUDIO_CLASS.prototype.beta7Serial = function beta7Serial() {
    return String(this._activeJob?.serial || this._config?.serial || "");
  };

  PCC_BETA7_STUDIO_CLASS.prototype.beta7CurrentPlate = function beta7CurrentPlate() {
    const id =
      this._studioBuildPlate ||
      this._activeJob?.profile_context?.build_plate?.id ||
      this._activeJob?.profile_context?.build_plate_id ||
      "smooth_pei_high_temp";

    return PCC_BETA7_BUILD_PLATES.find((plate) => plate.id === id) || PCC_BETA7_BUILD_PLATES[2];
  };

  PCC_BETA7_STUDIO_CLASS.prototype.beta7SetPlate = function beta7SetPlate(id) {
    const plate = PCC_BETA7_BUILD_PLATES.find((item) => item.id === id) || PCC_BETA7_BUILD_PLATES[2];
    this._studioBuildPlate = plate.id;

    if (this._activeJob) {
      this._activeJob.profile_context = this._activeJob.profile_context || {};
      this._activeJob.profile_context.build_plate = {id:plate.id, name:plate.name, texture:plate.texture};
      this._activeJob.build_plate = plate.name;
      this.scheduleActiveJobSave?.();
    }

    this._status = `Druckplatte gewechselt: ${plate.name}.`;
    this.render();
  };

  PCC_BETA7_STUDIO_CLASS.prototype.jobName = function jobName(job=this._activeJob) {
    const candidates = [
      job?.modelName, job?.file_name, job?.filename, job?.name,
      job?.model?.name, job?.model?.filename, job?.model?.file_name,
      job?.path, job?.file_path
    ];

    for (const value of candidates) {
      if (typeof value === "string" && value.trim()) return value.trim().split("/").filter(Boolean).pop() || value.trim();
      if (value && typeof value === "object") {
        for (const key of ["name", "filename", "file_name", "path"]) {
          const nested = String(value?.[key] || "").trim();
          if (nested) return nested.split("/").filter(Boolean).pop() || nested;
        }
      }
    }
    return "3MF-Modell";
  };

  PCC_BETA7_STUDIO_CLASS.prototype.beta7CleanTopNavigation = function beta7CleanTopNavigation() {
    const root = this.shadowRoot;
    if (!root) return;

    const buttons = [...root.querySelectorAll("button")];
    const importButton = buttons.find((button) => pccBeta7FixText(button.textContent).trim() === "Importieren");
    const host = importButton?.parentElement || buttons.find((button) => pccBeta7FixText(button.textContent).includes("Plan prüfen"))?.parentElement;
    if (!host) return;

    const keep = new Set(["Importieren", "Plan prüfen", "Health prüfen", "Jobs neu laden", "Löschen"]);
    for (const button of [...host.querySelectorAll("button")]) {
      const label = pccBeta7FixText(button.textContent).trim();
      button.textContent = label;
      if (!keep.has(label)) button.remove();
    }

    const deleteButtons = [...host.querySelectorAll("button")].filter((button) => pccBeta7FixText(button.textContent).trim() === "Löschen");
    deleteButtons.slice(1).forEach((button) => button.remove());

    if (!deleteButtons.length) {
      const button = document.createElement("button");
      button.className = "action";
      button.dataset.beta7TopDelete = "1";
      button.textContent = "Löschen";
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.deleteActiveJob();
      });
      host.appendChild(button);
    }
  };

  PCC_BETA7_STUDIO_CLASS.prototype.beta7InstallBuildPlateDeck = function beta7InstallBuildPlateDeck() {
    const root = this.shadowRoot;
    if (!root) return;

    const panels = [...root.querySelectorAll(".panel")];
    const leftPanel = panels[0];
    if (!leftPanel) return;

    const current = this.beta7CurrentPlate();
    let box = leftPanel.querySelector(".beta7-buildplate-deck");

    if (!box) {
      box = document.createElement("div");
      box.className = "beta7-buildplate-deck";
      leftPanel.insertBefore(box, leftPanel.children[1] || null);
    }

    const plateCards = PCC_BETA7_BUILD_PLATES.map((plate) => `
      <button class="beta7-plate-card ${plate.id === current.id ? "active" : ""}" data-beta7-plate="${escStudio(plate.id)}">
        <span class="beta7-plate-art beta7-plate-${escStudio(plate.texture)}">
          <span class="beta7-plate-grid"></span>
        </span>
        <b>${escStudio(plate.short)}</b>
        <small>${escStudio(plate.name)}</small>
      </button>
    `).join("");

    box.innerHTML = `
      <h3>Druckplatte</h3>
      <div class="beta7-selected-plate">
        <div class="beta7-plate-art beta7-plate-${escStudio(current.texture)}"><span class="beta7-plate-grid"></span></div>
        <div><b>${escStudio(current.short)}</b><small>${escStudio(current.name)}</small></div>
      </div>
      <div class="beta7-plate-grid-list">${plateCards}</div>
    `;

    for (const button of [...box.querySelectorAll("[data-beta7-plate]")]) {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.beta7SetPlate(button.dataset.beta7Plate || "smooth_pei_high_temp");
      });
    }
  };

  PCC_BETA7_STUDIO_CLASS.prototype.beta7ApplyBuildPlateVisual = function beta7ApplyBuildPlateVisual() {
    const root = this.shadowRoot;
    if (!root) return;

    const plate = this.beta7CurrentPlate();
    const buildplate = root.querySelector(".buildplate");
    if (!buildplate) return;

    buildplate.classList.remove("beta7-plate-smooth", "beta7-plate-textured", "beta7-plate-cool", "beta7-plate-engineering", "beta7-plate-supertack");
    buildplate.classList.add(`beta7-plate-${plate.texture}`);
    buildplate.dataset.beta7Plate = plate.id;

    const label = root.querySelector(".plate-label");
    if (label) label.textContent = `Buildplate – ${plate.name}`;
  };

  PCC_BETA7_STUDIO_CLASS.prototype.beta7FixObjectObject = function beta7FixObjectObject() {
    const root = this.shadowRoot;
    if (!root) return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    for (const node of nodes) {
      const text = String(node.nodeValue || "");
      if (text.includes("[object Object]")) node.nodeValue = text.replaceAll("[object Object]", "").trim();
    }
  };

  PCC_BETA7_STUDIO_CLASS.prototype.cleanupBetaStudioUi = function cleanupBetaStudioUi() {
    this.beta7CleanTopNavigation?.();
    this.beta7InstallBuildPlateDeck?.();
    this.beta7ApplyBuildPlateVisual?.();
    this.beta7FixObjectObject?.();
    this.updateStudioModelImage?.();
    pccBeta7SanitizeRoot(this.shadowRoot);
  };

  PCC_BETA7_STUDIO_CLASS.prototype.showBetaStudioContextMenu = function showBetaStudioContextMenu(point) {
    const root = this.shadowRoot;
    if (!root) return;

    root.querySelectorAll(".studio-context.beta7-floating-context,.studio-context.beta6-floating-context,.studio-context.beta5-floating-context,.studio-context.beta4-floating-context,.studio-context.beta3-floating-context").forEach((node) => node.remove());

    const menu = document.createElement("div");
    menu.className = "studio-context beta7-floating-context";
    menu.style.position = "fixed";
    menu.style.left = `${Math.max(8, Number(point?.clientX || 8))}px`;
    menu.style.top = `${Math.max(8, Number(point?.clientY || 8))}px`;
    menu.style.zIndex = "2147483000";

    menu.innerHTML = `
      <div class="beta7-context-shell">
        <div class="beta7-context-left">
          <div class="beta7-menu-title">3D-Studio</div>
          <button class="beta7-menu-row active" data-beta7-panel="position">Position</button>
          <button class="beta7-menu-row" data-beta7-panel="transform">Drehen / Skalieren</button>
          <button class="beta7-menu-row" data-beta7-panel="plate">Druckplatte</button>
          <button class="beta7-menu-row" data-beta7-panel="job">Job / Modell</button>
          <button class="action" data-beta7-action="close-context">Schließen</button>
        </div>
        <div class="beta7-context-right">
          <div class="beta7-side-panel active" data-beta7-side-panel="position">
            <button class="action" data-beta7-action="center">Zentrieren</button>
            <button class="action" data-beta7-action="move-left">X -10</button>
            <button class="action" data-beta7-action="move-right">X +10</button>
            <button class="action" data-beta7-action="move-up">Y -10</button>
            <button class="action" data-beta7-action="move-down">Y +10</button>
            <button class="action" data-beta7-action="lay-flat">Flach legen</button>
            <button class="action" data-beta7-action="snap-grid">Raster anwenden</button>
          </div>
          <div class="beta7-side-panel" data-beta7-side-panel="transform">
            <button class="action" data-beta7-action="rot-left">Rot -45</button>
            <button class="action" data-beta7-action="rot-right">Rot +45</button>
            <button class="action" data-beta7-action="scale-down">Scale -</button>
            <button class="action" data-beta7-action="scale-up">Scale +</button>
            <button class="action" data-beta7-action="zoom-out">Zoom -</button>
            <button class="action" data-beta7-action="zoom-in">Zoom +</button>
            <button class="action" data-beta7-action="mirror-x">Spiegel X</button>
            <button class="action" data-beta7-action="mirror-y">Spiegel Y</button>
            <button class="action" data-beta7-action="mirror-z">Spiegel Z</button>
            <button class="action" data-beta7-action="skew-left">Zerr X -</button>
            <button class="action" data-beta7-action="skew-right">Zerr X +</button>
          </div>
          <div class="beta7-side-panel" data-beta7-side-panel="plate">
            ${PCC_BETA7_BUILD_PLATES.map((plate) => `
              <button class="action beta7-plate-menu-action" data-beta7-action="plate:${escStudio(plate.id)}">
                <span class="beta7-mini-plate beta7-plate-${escStudio(plate.texture)}"><span></span></span>${escStudio(plate.short)}
              </button>
            `).join("")}
          </div>
          <div class="beta7-side-panel" data-beta7-side-panel="job">
            <button class="action" data-beta7-action="import-assistant">Import-Assistent öffnen</button>
            <button class="action" data-beta7-action="reload-mesh">Echtes Modell neu laden</button>
            <button class="action" data-beta7-action="duplicate">Duplizieren</button>
            <button class="action danger" data-beta7-action="delete">Löschen</button>
            <button class="action" data-beta7-action="reset">Reset</button>
          </div>
        </div>
      </div>
    `;

    const rows = [...menu.querySelectorAll("[data-beta7-panel]")];
    const panels = [...menu.querySelectorAll("[data-beta7-side-panel]")];

    const showPanel = (name) => {
      rows.forEach((row) => row.classList.toggle("active", row.dataset.beta7Panel === name));
      panels.forEach((panel) => panel.classList.toggle("active", panel.dataset.beta7SidePanel === name));
    };

    rows.forEach((row) => {
      row.addEventListener("mouseenter", () => showPanel(row.dataset.beta7Panel));
      row.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        showPanel(row.dataset.beta7Panel);
      });
    });

    menu.addEventListener("pointerdown", (event) => event.stopPropagation());
    menu.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      event.stopPropagation();
    });

    menu.addEventListener("click", (event) => {
      const button = event.target?.closest?.("button[data-beta7-action]");
      if (!button) return;

      event.preventDefault();
      event.stopPropagation();

      const action = String(button.dataset.beta7Action || "");

      if (action === "close-context") {
        menu.remove();
        this._studioContextMenu = null;
        this._beta7ContextPoint = null;
        return;
      }

      if (action.startsWith("plate:")) this.beta7SetPlate(action.split(":")[1]);
      else if (action === "center") this.centerActiveObject();
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
      else if (action === "import-assistant") this.openBeta7ImportAssistant();
      else if (action === "reload-mesh") this.ensureStudioMeshLoaded(true);
      else if (action === "duplicate") this.duplicateActiveJob();
      else if (action === "delete") this.deleteActiveJob();
      else if (action === "reset") this.resetTransform?.();
    });

    root.appendChild(menu);
  };

  PCC_BETA7_STUDIO_CLASS.prototype.bindBetaContextMenu = function bindBetaContextMenu() {
    const root = this.shadowRoot;
    if (!root || this._beta7ContextBound === true) return;

    this._beta7ContextBound = true;

    const open = (event) => {
      const target = event.target;
      const hit =
        target?.closest?.(".buildplate") ||
        target?.closest?.(".buildplate-wrap") ||
        target?.closest?.(".studio-mesh-canvas") ||
        target?.closest?.(".studio-model-image") ||
        target?.closest?.(".model") ||
        target?.closest?.(".model-label");

      if (!hit) return;

      event.preventDefault();
      event.stopPropagation();

      const plate = root.querySelector(".buildplate");
      const rect = plate?.getBoundingClientRect?.() || {left:0, top:0, width:0, height:0};

      const point = {
        x: Math.round(event.clientX - rect.left - rect.width / 2),
        y: Math.round(event.clientY - rect.top - rect.height / 2),
        clientX: Math.round(event.clientX),
        clientY: Math.round(event.clientY)
      };

      this._studioKeyboardActive = true;
      this._studioContextMenu = point;
      this._beta7ContextPoint = point;
      this._status = "Studio-Kontextmenü geöffnet.";
      this.showBetaStudioContextMenu(point);
    };

    const close = (event) => {
      if (event.button !== 0) return;
      if (event.target?.closest?.(".studio-context")) return;
      if (event.target?.closest?.(".beta7-import-backdrop")) return;

      root.querySelectorAll(".studio-context.beta7-floating-context,.studio-context.beta6-floating-context,.studio-context.beta5-floating-context,.studio-context.beta4-floating-context,.studio-context.beta3-floating-context").forEach((node) => node.remove());
      this._studioContextMenu = null;
      this._beta7ContextPoint = null;
    };

    root.addEventListener("contextmenu", open, {capture:true});
    root.addEventListener("pointerdown", (event) => {
      if (event.button === 2) open(event);
      else close(event);
    }, {capture:true});
  };

  PCC_BETA7_STUDIO_CLASS.prototype.openBeta7ImportAssistant = function openBeta7ImportAssistant() {
    this._beta7Import = {
      mode:"gallery",
      source:"archive",
      folder:"",
      parent:"",
      loading:false,
      progress:0,
      items:[],
      selected:null,
      uploadFiles:[],
      link:"",
      error:"",
      notice:""
    };

    this.renderBeta7ImportAssistant();
    this.beta7LoadImportFolder(true);
  };

  PCC_BETA7_STUDIO_CLASS.prototype.closeBeta7ImportAssistant = function closeBeta7ImportAssistant() {
    this.shadowRoot?.querySelector?.(".beta7-import-backdrop")?.remove?.();
    this._beta7Import = null;
  };

  PCC_BETA7_STUDIO_CLASS.prototype.beta7LoadImportFolder = async function beta7LoadImportFolder(force=false) {
    const state = this._beta7Import;
    if (!state || state.loading) return;

    state.loading = true;
    state.progress = 10;
    state.error = "";
    this.renderBeta7ImportAssistant();

    try {
      const serial = this.beta7Serial();
      const data = state.source === "sd"
        ? await this.ws({type:"printer_control_center/sd/list", serial, folder:state.folder || "/", force:Boolean(force)})
        : await this.ws({type:"printer_control_center/archive/list", serial, folder:state.folder || ""});

      state.progress = 85;
      state.items = (data.items || [])
        .filter((item) => item.kind === "folder" || String(item.name || item.path || "").toLowerCase().endsWith(".3mf"));
      state.folder = data.folder || "";
      state.parent = data.parent || "";
      state.selected = null;
      state.notice = `${state.items.length} Einträge geladen.`;
    } catch (error) {
      state.error = `Import-Baum konnte nicht geladen werden: ${String(error?.message || error)}`;
    } finally {
      state.loading = false;
      state.progress = 100;
      this.renderBeta7ImportAssistant();
    }
  };

  PCC_BETA7_STUDIO_CLASS.prototype.beta7PlanFromItem = function beta7PlanFromItem(item, source="archive") {
    const path = String(item?.path || "");
    const name = String(item?.name || path.split("/").filter(Boolean).pop() || "3MF-Modell");
    const plate = this.beta7CurrentPlate();
    const now = new Date().toISOString();

    const plan = {
      version: STUDIO_VERSION,
      schema: "printer-control-center.v5.beta7.import",
      source,
      origin: source,
      serial: this.beta7Serial(),
      created_at: now,
      updated_at: now,
      modelName: name,
      file_name: name,
      filename: name,
      file_path: path,
      path,
      modelKey: `${source}:${path}`,
      model: {name, path, source, size:Number(item?.size || 0), modified:item?.modified || null},
      build_plate: plate.name,
      transform: defaultTransform(),
      profile_context: {
        ...(this.buildProfileContext?.() || this.defaultProfileContext?.() || {}),
        build_plate: {id:plate.id, name:plate.name, texture:plate.texture}
      },
      real_slicing_enabled: false,
      direct_print_enabled: false,
      status: "prepared",
      stage: "waiting",
      message: "Aus dem Studio-Import-Assistenten übernommen. Echter Slicer-Lauf ist deaktiviert."
    };

    const preview = item?.preview_data_url || item?.preview_url || item?.thumbnail || item?.image || item?.preview?.data_url || item?.preview?.url || "";
    if (preview) {
      plan.preview_data_url = preview;
      plan.preview_url = preview;
      plan.thumbnail = preview;
      plan.image = preview;
      plan.preview = {data_url:preview, url:preview};
      plan.model.preview_data_url = preview;
      plan.model.preview_url = preview;
      plan.model.thumbnail = preview;
      plan.model.image = preview;
    }

    return plan;
  };

  PCC_BETA7_STUDIO_CLASS.prototype.beta7ImportPlan = async function beta7ImportPlan(plan) {
    const response = await this.ws({
      type:"printer_control_center/studio_jobs/create",
      serial:this.beta7Serial(),
      plan
    });

    const job = response?.job || response || plan;
    this._jobs = [...(Array.isArray(this._jobs) ? this._jobs : []), job].filter(Boolean);
    this._jobsLoaded = true;
    this.applyActiveJob?.(job, {status:false, render:false});
    this._activeJob = job;
    this._activeJobId = job.id || this._activeJobId || "";
    this._studioModelImageUrl = job.preview_data_url || job.preview_url || job.thumbnail || job.image || job.model?.preview_data_url || "";
    this._studioMesh = null;
    this._studioMeshJobId = "";
    this._studioMeshUrl = "";
    this._status = `3MF ins Studio importiert: ${this.jobName(job)}.`;
    this.closeBeta7ImportAssistant();
    this.render();
  };

  PCC_BETA7_STUDIO_CLASS.prototype.beta7ImportSelected = async function beta7ImportSelected() {
    const state = this._beta7Import;
    if (!state) return;

    state.error = "";
    state.progress = 15;
    state.loading = true;
    this.renderBeta7ImportAssistant();

    try {
      if (state.mode === "gallery") {
        if (!state.selected) throw new Error("Kein 3MF-Modell ausgewählt.");
        const plan = this.beta7PlanFromItem(state.selected, state.source);
        state.progress = 70;
        this.renderBeta7ImportAssistant();
        await this.beta7ImportPlan(plan);
      } else if (state.mode === "upload") {
        const file = state.uploadFiles?.[0];
        if (!file) throw new Error("Keine 3MF-Datei ausgewählt.");

        const preview = "";
        const plan = this.beta7PlanFromItem({
          name:file.name,
          path:`upload/${file.name}`,
          size:file.size,
          modified:new Date(file.lastModified || Date.now()).toISOString(),
          preview_data_url:preview
        }, "upload");

        plan.local_upload_pending = true;
        plan.message = "Lokaler Upload wurde als Studio-Job vorbereitet. Archiv-Upload wird über den Galerie-Dateimanager fortgeführt.";
        state.progress = 70;
        this.renderBeta7ImportAssistant();
        await this.beta7ImportPlan(plan);
      } else if (state.mode === "link") {
        const link = String(state.link || "").trim();
        if (!link) throw new Error("Kein Link angegeben.");

        const name = link.split("/").filter(Boolean).pop() || "verknuepftes-modell.3mf";
        const plan = this.beta7PlanFromItem({name, path:link, preview_data_url:""}, "link");
        plan.external_link = link;
        plan.message = "Externer Modell-Link wurde im Studio verknüpft. Download/Import wird später serverseitig erweitert.";
        await this.beta7ImportPlan(plan);
      }
    } catch (error) {
      state.error = `Import fehlgeschlagen: ${String(error?.message || error)}`;
      state.progress = 0;
      state.loading = false;
      this.renderBeta7ImportAssistant();
    }
  };

  PCC_BETA7_STUDIO_CLASS.prototype.renderBeta7ImportAssistant = function renderBeta7ImportAssistant() {
    const root = this.shadowRoot;
    const state = this._beta7Import;
    if (!root || !state) return;

    let overlay = root.querySelector(".beta7-import-backdrop");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "beta7-import-backdrop";
      root.appendChild(overlay);
    }

    const itemHtml = (state.items || []).map((item) => {
      const folder = item.kind === "folder";
      const selected = state.selected && String(state.selected.path || "") === String(item.path || "");
      const preview = item.preview_data_url || item.preview_url || item.thumbnail || item.image || item.preview?.data_url || "";

      return `
        <article class="beta7-import-item ${selected ? "selected" : ""}" data-beta7-path="${escStudio(item.path || "")}">
          <div class="beta7-import-preview">${preview ? `<img src="${preview}" alt="">` : `<b>${folder ? "📁" : "3MF"}</b>`}</div>
          <div class="beta7-import-meta">
            <strong>${escStudio(item.name || item.path || "3MF-Modell")}</strong>
            <small>${escStudio(item.path || "")}</small>
            <span>${folder ? "Ordner" : "3MF-Projekt"}${item.size ? ` · ${Math.round(Number(item.size)/1024)} KB` : ""}</span>
          </div>
          <button class="action" data-beta7-import-action="${folder ? "open-folder" : "select"}">${folder ? "Öffnen" : "Auswählen"}</button>
        </article>
      `;
    }).join("");

    overlay.innerHTML = `
      <div class="beta7-import-dialog">
        <header>
          <div>
            <h2>Studio-Import-Assistent</h2>
            <p>Galerie/Archiv auswählen, Datei vorbereiten oder Modell-Link verknüpfen.</p>
          </div>
          <button class="action" data-beta7-import-action="close">Schließen</button>
        </header>

        <nav class="beta7-import-tabs">
          <button class="${state.mode === "gallery" ? "active" : ""}" data-beta7-mode="gallery">Galerie / Archiv</button>
          <button class="${state.mode === "upload" ? "active" : ""}" data-beta7-mode="upload">3MF hochladen</button>
          <button class="${state.mode === "link" ? "active" : ""}" data-beta7-mode="link">Verknüpfen</button>
        </nav>

        <div class="beta7-progress"><div style="width:${Math.max(0, Math.min(100, Number(state.progress || 0)))}%"></div></div>

        ${state.error ? `<div class="beta7-import-error">${escStudio(state.error)}</div>` : ""}
        ${state.notice ? `<div class="beta7-import-notice">${escStudio(state.notice)}</div>` : ""}

        <section class="beta7-import-body">
          ${state.mode === "gallery" ? `
            <aside class="beta7-import-tree">
              <button class="${state.source === "archive" ? "active" : ""}" data-beta7-source="archive">📁 Archiv</button>
              <button class="${state.source === "sd" ? "active" : ""}" data-beta7-source="sd">💾 SD-Karte</button>
              <button data-beta7-import-action="up" ${state.parent ? "" : "disabled"}>Eine Ebene hoch</button>
              <button data-beta7-import-action="refresh">Aktualisieren</button>
              <small>Pfad: ${escStudio(state.folder || "Hauptordner")}</small>
            </aside>
            <div class="beta7-import-grid">
              ${state.loading ? `<div class="beta7-import-loading">Lade Galerie …</div>` : itemHtml || `<div class="beta7-import-loading">Keine 3MF-Dateien gefunden.</div>`}
            </div>
          ` : ""}

          ${state.mode === "upload" ? `
            <div class="beta7-upload-pane">
              <h3>3MF-Datei hochladen / vorbereiten</h3>
              <p>Wähle eine lokale 3MF-Datei. Sie wird als Studio-Job vorbereitet; die Archivablage bleibt über den Galerie-Dateimanager möglich.</p>
              <input type="file" accept=".3mf" data-beta7-upload-file>
              <div>${state.uploadFiles?.length ? escStudio(state.uploadFiles.map((file) => file.name).join(", ")) : "Noch keine Datei ausgewählt."}</div>
            </div>
          ` : ""}

          ${state.mode === "link" ? `
            <div class="beta7-link-pane">
              <h3>Modell-Link verknüpfen</h3>
              <p>MakerWorld-, HTTP- oder interne Modell-URL eintragen.</p>
              <input type="text" value="${escStudio(state.link || "")}" placeholder="https://…" data-beta7-link-input>
            </div>
          ` : ""}
        </section>

        <footer>
          <button class="action primary" data-beta7-import-action="import">${state.mode === "gallery" ? "Auswahl ins Studio übernehmen" : state.mode === "upload" ? "Datei als Studio-Job vorbereiten" : "Link verknüpfen"}</button>
        </footer>
      </div>
    `;

    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) this.closeBeta7ImportAssistant();
    }, {once:true});

    for (const tab of [...overlay.querySelectorAll("[data-beta7-mode]")]) {
      tab.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        state.mode = tab.dataset.beta7Mode || "gallery";
        state.error = "";
        state.notice = "";
        this.renderBeta7ImportAssistant();
        if (state.mode === "gallery" && !state.items.length) this.beta7LoadImportFolder(true);
      });
    }

    for (const source of [...overlay.querySelectorAll("[data-beta7-source]")]) {
      source.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        state.source = source.dataset.beta7Source || "archive";
        state.folder = state.source === "sd" ? "/" : "";
        state.parent = "";
        state.selected = null;
        state.items = [];
        this.beta7LoadImportFolder(true);
      });
    }

    overlay.querySelector("[data-beta7-upload-file]")?.addEventListener("change", (event) => {
      state.uploadFiles = [...(event.target?.files || [])].filter((file) => String(file.name || "").toLowerCase().endsWith(".3mf"));
      state.notice = state.uploadFiles.length ? `${state.uploadFiles.length} 3MF-Datei(en) ausgewählt.` : "Nur .3mf-Dateien sind erlaubt.";
      this.renderBeta7ImportAssistant();
    });

    overlay.querySelector("[data-beta7-link-input]")?.addEventListener("input", (event) => {
      state.link = event.target?.value || "";
    });

    for (const button of [...overlay.querySelectorAll("[data-beta7-import-action]")]) {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();

        const action = String(button.dataset.beta7ImportAction || "");
        const card = button.closest(".beta7-import-item");
        const path = card?.dataset?.beta7Path || "";
        const item = (state.items || []).find((candidate) => String(candidate.path || "") === path) || null;

        if (action === "close") this.closeBeta7ImportAssistant();
        else if (action === "refresh") this.beta7LoadImportFolder(true);
        else if (action === "up") {
          state.folder = state.parent || "";
          state.selected = null;
          this.beta7LoadImportFolder(false);
        } else if (action === "open-folder" && item) {
          state.folder = item.path || "";
          state.selected = null;
          this.beta7LoadImportFolder(false);
        } else if (action === "select" && item) {
          state.selected = item;
          state.notice = `Ausgewählt: ${item.name || item.path}`;
          this.renderBeta7ImportAssistant();
        } else if (action === "import") {
          this.beta7ImportSelected();
        }
      });
    }

    for (const card of [...overlay.querySelectorAll(".beta7-import-item")]) {
      card.addEventListener("dblclick", (event) => {
        event.preventDefault();
        event.stopPropagation();
        const path = card.dataset.beta7Path || "";
        const item = (state.items || []).find((candidate) => String(candidate.path || "") === path) || null;
        if (!item) return;
        if (item.kind === "folder") {
          state.folder = item.path || "";
          state.selected = null;
          this.beta7LoadImportFolder(false);
        } else {
          state.selected = item;
          this.beta7ImportSelected();
        }
      });
    }

    pccBeta7SanitizeRoot(overlay);
  };

  PCC_BETA7_STUDIO_CLASS.prototype.deleteActiveJob = async function deleteActiveJob() {
    const active = this._activeJob || {};
    const activeId = String(this._activeJobId || active.id || "");
    const activePath = String(active.file_path || active.path || active.model?.path || "").trim();

    if (!activeId && !activePath) {
      this._status = "Kein aktiver Studio-Job zum Entfernen ausgewählt.";
      this.render();
      return;
    }

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
          serial:clone.serial || this.beta7Serial(),
          plan:clone
        });
        const created = response?.job || response || null;
        if (created?.id) recreated.push(created);
      }

      this._jobs = recreated;
      this._jobsLoaded = true;
      this._activeJob = recreated[0] || null;
      this._activeJobId = this._activeJob?.id || "";
      this._studioMesh = null;
      this._studioMeshJobId = "";
      this._studioMeshUrl = "";
      this._studioModelImageUrl = "";
      this._lastDryRun = null;
      this._lastStudioPlan = null;

      if (this._activeJob) this.applyActiveJob?.(this._activeJob, {status:false, render:false});
      else {
        this._transform = defaultTransform();
        this._studioMeshStatus = "Kein Studio-Job aktiv. Öffne den Import-Assistenten.";
      }

      this._status = "Studio-Job dauerhaft entfernt.";
    } catch (error) {
      this._status = `Studio-Job konnte nicht dauerhaft entfernt werden: ${String(error?.message || error)}`;
    }

    this.render();
  };

  if (!PCC_BETA7_STUDIO_CLASS.prototype._pccBeta7ClickWrapped) {
    PCC_BETA7_STUDIO_CLASS.prototype.handleClick = function handleClickBeta7(event) {
      const action = event.target?.closest?.("[data-action]")?.dataset?.action || "";
      if (action === "import") {
        event.preventDefault();
        event.stopPropagation();
        this.openBeta7ImportAssistant();
        return;
      }
      return PCC_BETA7_ORIGINAL_HANDLE_CLICK.call(this, event);
    };
    PCC_BETA7_STUDIO_CLASS.prototype._pccBeta7ClickWrapped = true;
  }


  const PCC_BETA8_BUILD_PLATES = [
    {
      id: "cool_plate",
      name: "Cool Plate/PLA Plate",
      short: "Cool Plate / PLA",
      label: "Bambu Cool Plate / PLA Plate",
      surface: "cool",
      logo: "Bambu Cool Plate",
      footer: "PLA / PETG",
      badge: "COOL",
      tint: "#9edfff"
    },
    {
      id: "engineering_plate",
      name: "Engineering Plate",
      short: "Engineering Plate",
      label: "Bambu Engineering Plate",
      surface: "engineering",
      logo: "Bambu Engineering Plate",
      footer: "ENGINEERING",
      badge: "ENG",
      tint: "#b8bcc4"
    },
    {
      id: "smooth_pei_high_temp",
      name: "Smooth PEI Plate / High Temp Plate",
      short: "Smooth PEI / High Temp",
      label: "Bambu Smooth PEI Plate / High Temp Plate",
      surface: "smooth",
      logo: "Bambu Smooth PEI Plate / High Temp Plate",
      footer: "PLA / PETG / ABS / TPU / PC",
      badge: "HOT SURFACE",
      tint: "#d8c061"
    },
    {
      id: "textured_pei",
      name: "Textured PEI Plate",
      short: "Textured PEI",
      label: "Bambu Textured PEI Plate",
      surface: "textured",
      logo: "Bambu Textured PEI Plate",
      footer: "PLA / PETG",
      badge: "TEXTURED",
      tint: "#c99f45"
    },
    {
      id: "bambu_cool_plate_supertack",
      name: "Bambu Cool Plate SuperTack",
      short: "Cool Plate SuperTack",
      label: "Bambu Cool Plate SuperTack",
      surface: "supertack",
      logo: "Bambu Cool Plate (SuperTack)",
      footer: "GLUE STICK CAN HELP",
      badge: "SUPER TACK",
      tint: "#8bd46a"
    }
  ];

  function pccBeta8Esc(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[char]));
  }

  function pccBeta8PlateById(id) {
    const wanted = String(id || "").trim();
    return PCC_BETA8_BUILD_PLATES.find((plate) => plate.id === wanted) ||
      PCC_BETA8_BUILD_PLATES.find((plate) => plate.id === "smooth_pei_high_temp") ||
      PCC_BETA8_BUILD_PLATES[0];
  }

  function pccBeta8PlateClass(plate) {
    return `pcc-beta8-plate-${String(plate?.surface || "smooth")}`;
  }

  const PCC_BETA8_STUDIO_CLASS = customElements.get("printer-control-center-studio-card") || PrinterControlCenterStudioCard;
  const PCC_BETA8_PREV_CLEANUP = PCC_BETA8_STUDIO_CLASS.prototype.cleanupBetaStudioUi;

  PCC_BETA8_STUDIO_CLASS.prototype.beta8CurrentPlate = function beta8CurrentPlate() {
    const job = this._activeJob || {};
    const profile = job.profile_context || {};

    const id =
      this._studioBuildPlate ||
      profile?.build_plate?.id ||
      profile?.build_plate_id ||
      job?.build_plate_id ||
      "smooth_pei_high_temp";

    return pccBeta8PlateById(id);
  };

  PCC_BETA8_STUDIO_CLASS.prototype.beta8SetPlate = function beta8SetPlate(id) {
    const plate = pccBeta8PlateById(id);
    this._studioBuildPlate = plate.id;

    if (this._activeJob) {
      this._activeJob.profile_context = this._activeJob.profile_context || {};
      this._activeJob.profile_context.build_plate = {
        id: plate.id,
        name: plate.name,
        short: plate.short,
        label: plate.label,
        surface: plate.surface
      };
      this._activeJob.profile_context.build_plate_id = plate.id;
      this._activeJob.build_plate = plate.name;
      this._activeJob.build_plate_id = plate.id;

      try {
        this.scheduleActiveJobSave?.();
      } catch (_error) {}
    }

    this._status = `Druckplatte gewählt: ${plate.name}.`;
    this.render();
  };

  PCC_BETA8_STUDIO_CLASS.prototype.beta8TogglePlateDropdown = function beta8TogglePlateDropdown(forceOpen=null) {
    const root = this.shadowRoot;
    const dropdown = root?.querySelector?.(".pcc-beta8-plate-dropdown");
    if (!dropdown) return;

    const open = forceOpen === null ? dropdown.hasAttribute("hidden") : Boolean(forceOpen);
    if (open) dropdown.removeAttribute("hidden");
    else dropdown.setAttribute("hidden", "");
  };

  PCC_BETA8_STUDIO_CLASS.prototype.beta8InstallBambuPlateSelector = function beta8InstallBambuPlateSelector() {
    const root = this.shadowRoot;
    if (!root) return;

    const panels = [...root.querySelectorAll(".panel")];
    const leftPanel = panels[0];
    if (!leftPanel) return;

    leftPanel.querySelectorAll(".beta7-buildplate-deck,.beta6-buildplate-switcher,.beta5-buildplate-switcher,.pcc-beta8-plate-selector").forEach((node) => node.remove());

    const current = this.beta8CurrentPlate();

    const selector = document.createElement("section");
    selector.className = "pcc-beta8-plate-selector";
    selector.innerHTML = `
      <h3>Druckplatte</h3>
      <div class="pcc-beta8-bambu-row">
        <button class="pcc-beta8-device-card" type="button" title="Aktiver Drucker">
          <span class="pcc-beta8-printer-thumb"></span>
          <span>Bambu Lab A1</span>
        </button>

        <button class="pcc-beta8-active-plate-card" type="button" data-beta8-toggle-plate title="Druckplatte auswählen">
          <span class="pcc-beta8-plate-thumb ${pccBeta8PlateClass(current)}">
            <span class="pcc-beta8-thumb-grid"></span>
          </span>
          <span class="pcc-beta8-active-plate-label">${pccBeta8Esc(current.short)}</span>
          <span class="pcc-beta8-caret">⌄</span>
        </button>

        <button class="pcc-beta8-sync-card" type="button" title="Sync Infos">
          <span class="pcc-beta8-sync-icon">↻</span>
          <span>Sync Infos</span>
        </button>
      </div>

      <div class="pcc-beta8-plate-dropdown" hidden>
        ${PCC_BETA8_BUILD_PLATES.map((plate) => `
          <button class="pcc-beta8-plate-option ${plate.id === current.id ? "active" : ""}" type="button" data-beta8-plate="${pccBeta8Esc(plate.id)}">
            <span class="pcc-beta8-check">${plate.id === current.id ? "✓" : ""}</span>
            <span class="pcc-beta8-option-thumb ${pccBeta8PlateClass(plate)}">
              <span class="pcc-beta8-thumb-grid"></span>
            </span>
            <span class="pcc-beta8-option-text">
              <b>${pccBeta8Esc(plate.name)}</b>
              <small>${pccBeta8Esc(plate.label)}</small>
            </span>
          </button>
        `).join("")}
      </div>
    `;

    const insertAfter = leftPanel.querySelector("h3") || leftPanel.firstElementChild;
    if (insertAfter?.nextSibling) leftPanel.insertBefore(selector, insertAfter.nextSibling);
    else leftPanel.insertBefore(selector, leftPanel.firstChild);

    selector.querySelector("[data-beta8-toggle-plate]")?.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.beta8TogglePlateDropdown();
    });

    for (const button of [...selector.querySelectorAll("[data-beta8-plate]")]) {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.beta8SetPlate(button.dataset.beta8Plate);
      });
    }

    root.addEventListener("pointerdown", (event) => {
      if (event.target?.closest?.(".pcc-beta8-plate-selector")) return;
      const dropdown = root.querySelector(".pcc-beta8-plate-dropdown");
      dropdown?.setAttribute?.("hidden", "");
    }, {capture:true, once:true});
  };

  PCC_BETA8_STUDIO_CLASS.prototype.beta8ApplyBuildPlateSurface = function beta8ApplyBuildPlateSurface() {
    const root = this.shadowRoot;
    if (!root) return;

    const plate = this.beta8CurrentPlate();
    const buildplate = root.querySelector(".buildplate");
    if (!buildplate) return;

    buildplate.classList.remove(
      "pcc-beta8-buildplate",
      "pcc-beta8-plate-cool",
      "pcc-beta8-plate-engineering",
      "pcc-beta8-plate-smooth",
      "pcc-beta8-plate-textured",
      "pcc-beta8-plate-supertack"
    );

    buildplate.classList.add("pcc-beta8-buildplate", pccBeta8PlateClass(plate));
    buildplate.dataset.beta8Plate = plate.id;

    const label = root.querySelector(".plate-label");
    if (label) label.textContent = `Buildplate – ${plate.name}`;

    let skin = buildplate.querySelector(":scope > .pcc-beta8-buildplate-skin");
    if (!skin) {
      skin = document.createElement("div");
      skin.className = "pcc-beta8-buildplate-skin";
      buildplate.insertBefore(skin, buildplate.firstChild);
    }

    skin.innerHTML = `
      <div class="pcc-beta8-grid-major"></div>
      <div class="pcc-beta8-grid-minor"></div>
      <div class="pcc-beta8-side-logo">${pccBeta8Esc(plate.logo)}</div>
      <div class="pcc-beta8-front-strip">
        <span class="pcc-beta8-front-icon">▦</span>
        <span>${pccBeta8Esc(plate.footer)}</span>
        <span class="pcc-beta8-front-badge">${pccBeta8Esc(plate.badge)}</span>
      </div>
      <div class="pcc-beta8-plate-number">01</div>
      <div class="pcc-beta8-handle-top"></div>
      <div class="pcc-beta8-corner-cut left"></div>
      <div class="pcc-beta8-corner-cut right"></div>
    `;

    const model = root.querySelector(".model");
    if (model) model.style.zIndex = "10";

    const mesh = root.querySelector(".studio-mesh-canvas");
    if (mesh) mesh.style.zIndex = "11";

    const image = root.querySelector(".studio-model-image");
    if (image) image.style.zIndex = "12";
  };

  PCC_BETA8_STUDIO_CLASS.prototype.cleanupBetaStudioUi = function cleanupBetaStudioUi() {
    try {
      if (typeof PCC_BETA8_PREV_CLEANUP === "function") {
        PCC_BETA8_PREV_CLEANUP.call(this);
      }
    } catch (_error) {}

    this.beta8InstallBambuPlateSelector?.();
    this.beta8ApplyBuildPlateSurface?.();

    try {
      if (typeof pccBeta7SanitizeRoot === "function") pccBeta7SanitizeRoot(this.shadowRoot);
    } catch (_error) {}
  };


  const PCC_BETA9_BUILD_PLATES = [
    {
      id: "cool_plate",
      name: "Cool Plate/PLA Plate",
      short: "Cool Plate / PLA",
      label: "Bambu Cool Plate / PLA Plate",
      surface: "cool",
      logo: "Bambu Cool Plate",
      footer: "PLA / PETG",
      badge: "COOL PLATE"
    },
    {
      id: "engineering_plate",
      name: "Engineering Plate",
      short: "Engineering Plate",
      label: "Bambu Engineering Plate",
      surface: "engineering",
      logo: "Bambu Engineering Plate",
      footer: "ENGINEERING",
      badge: "ENGINEERING"
    },
    {
      id: "smooth_pei_high_temp",
      name: "Smooth PEI Plate / High Temp Plate",
      short: "Smooth PEI / High Temp",
      label: "Bambu Smooth PEI Plate / High Temp Plate",
      surface: "smooth",
      logo: "Bambu Smooth PEI Plate / High Temp Plate",
      footer: "PLA / PETG / ABS / TPU / PC",
      badge: "HOT SURFACE"
    },
    {
      id: "textured_pei",
      name: "Textured PEI Plate",
      short: "Textured PEI",
      label: "Bambu Textured PEI Plate",
      surface: "textured",
      logo: "Bambu Textured PEI Plate",
      footer: "PLA / PETG",
      badge: "TEXTURED"
    },
    {
      id: "bambu_cool_plate_supertack",
      name: "Bambu Cool Plate SuperTack",
      short: "Cool Plate SuperTack",
      label: "Bambu Cool Plate SuperTack",
      surface: "supertack",
      logo: "Bambu Cool Plate (SuperTack)",
      footer: "GLUE STICK CAN HELP",
      badge: "SUPER TACK"
    }
  ];

  function pccBeta9Esc(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[char]));
  }

  function pccBeta9PlateById(id) {
    const wanted = String(id || "").trim();
    return PCC_BETA9_BUILD_PLATES.find((plate) => plate.id === wanted) ||
      PCC_BETA9_BUILD_PLATES.find((plate) => plate.id === "smooth_pei_high_temp") ||
      PCC_BETA9_BUILD_PLATES[0];
  }

  function pccBeta9PlateClass(plate) {
    return `pcc-beta9-plate-${String(plate?.surface || "smooth")}`;
  }

  const PCC_BETA9_STUDIO_CLASS = customElements.get("printer-control-center-studio-card") || PrinterControlCenterStudioCard;
  const PCC_BETA9_PREV_CLEANUP = PCC_BETA9_STUDIO_CLASS.prototype.cleanupBetaStudioUi;

  PCC_BETA9_STUDIO_CLASS.prototype.beta9CurrentPlate = function beta9CurrentPlate() {
    const job = this._activeJob || {};
    const profile = job.profile_context || {};

    const id =
      this._studioBuildPlate ||
      profile?.build_plate?.id ||
      profile?.build_plate_id ||
      job?.build_plate_id ||
      "smooth_pei_high_temp";

    return pccBeta9PlateById(id);
  };

  PCC_BETA9_STUDIO_CLASS.prototype.beta9SetPlate = function beta9SetPlate(id) {
    const plate = pccBeta9PlateById(id);
    this._studioBuildPlate = plate.id;

    if (this._activeJob) {
      this._activeJob.profile_context = this._activeJob.profile_context || {};
      this._activeJob.profile_context.build_plate = {
        id: plate.id,
        name: plate.name,
        short: plate.short,
        label: plate.label,
        surface: plate.surface
      };
      this._activeJob.profile_context.build_plate_id = plate.id;
      this._activeJob.build_plate = plate.name;
      this._activeJob.build_plate_id = plate.id;

      try {
        this.scheduleActiveJobSave?.();
      } catch (_error) {}
    }

    this._status = `Druckplatte gewählt: ${plate.name}.`;
    this.beta9RenderPlateSelector();
    this.beta9ApplyBuildplateVisual();
  };

  PCC_BETA9_STUDIO_CLASS.prototype.beta9EnsureStyle = function beta9EnsureStyle() {
    const root = this.shadowRoot;
    if (!root || root.querySelector("#pcc-beta9-buildplate-style")) return;

    const style = document.createElement("style");
    style.id = "pcc-beta9-buildplate-style";
    style.textContent = `
      .pcc-beta9-plate-selector{
        margin:10px 0 14px;
        padding:0;
        border:0;
        background:transparent;
        position:relative;
        overflow:visible;
      }
      .pcc-beta9-plate-selector h3{
        margin:0 0 7px;
        font-size:14px;
        font-weight:800;
        color:var(--primary-text-color,#fff);
      }
      .pcc-beta9-bambu-row{
        display:grid;
        grid-template-columns:1.14fr 1fr .92fr;
        gap:7px;
        align-items:stretch;
        overflow:visible;
      }
      .pcc-beta9-device-card,
      .pcc-beta9-active-plate-card,
      .pcc-beta9-sync-card{
        min-height:88px;
        border:1px solid #d7d7d7;
        border-radius:9px;
        background:linear-gradient(180deg,#ffffff,#f5f5f5);
        color:#111;
        display:grid;
        align-content:center;
        justify-items:center;
        gap:4px;
        padding:7px;
        box-shadow:0 1px 2px rgba(0,0,0,.18);
        cursor:pointer;
        font-size:12px;
        line-height:1.15;
        position:relative;
        overflow:hidden;
      }
      .pcc-beta9-device-card.active,
      .pcc-beta9-active-plate-card.active{
        outline:2px solid #14c86f;
        outline-offset:-2px;
      }
      .pcc-beta9-device-card.active::after,
      .pcc-beta9-active-plate-card.active::after{
        content:"";
        position:absolute;
        top:0;
        right:0;
        border-left:18px solid transparent;
        border-top:18px solid #13c76b;
      }
      .pcc-beta9-printer-thumb{
        width:46px;
        height:42px;
        display:block;
        position:relative;
        border-radius:5px;
        border:1px solid #ddd;
        background:linear-gradient(180deg,#fff,#ececec);
      }
      .pcc-beta9-printer-thumb::before{
        content:"";
        position:absolute;
        left:10px;
        right:10px;
        top:8px;
        height:24px;
        border:2px solid #555;
        border-bottom:6px solid #555;
        border-radius:2px;
      }
      .pcc-beta9-printer-thumb::after{
        content:"";
        position:absolute;
        left:16px;
        top:3px;
        width:13px;
        height:8px;
        border:1px solid #777;
        background:#fafafa;
      }
      .pcc-beta9-active-plate-card{
        grid-template-rows:42px auto;
      }
      .pcc-beta9-active-plate-label{
        max-width:100%;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
        font-size:12px;
      }
      .pcc-beta9-caret{
        position:absolute;
        left:8px;
        bottom:6px;
        color:#707070;
        font-size:13px;
      }
      .pcc-beta9-sync-icon{
        font-size:30px;
        color:#111;
        line-height:30px;
      }
      .pcc-beta9-sync-card span:last-child{
        font-size:14px;
        font-weight:700;
      }
      .pcc-beta9-plate-thumb,
      .pcc-beta9-option-thumb{
        display:block;
        position:relative;
        overflow:hidden;
        border-radius:4px;
        border:1px solid rgba(0,0,0,.25);
        box-shadow:inset 0 0 14px rgba(0,0,0,.22);
      }
      .pcc-beta9-plate-thumb{
        width:44px;
        height:40px;
      }
      .pcc-beta9-option-thumb{
        width:40px;
        height:32px;
      }
      .pcc-beta9-thumb-grid{
        position:absolute;
        inset:0;
        background-image:
          linear-gradient(rgba(255,255,255,.30) 1px,transparent 1px),
          linear-gradient(90deg,rgba(255,255,255,.30) 1px,transparent 1px);
        background-size:7px 7px;
      }
      .pcc-beta9-plate-cool{
        background:linear-gradient(135deg,#536470,#262c32);
      }
      .pcc-beta9-plate-engineering{
        background:linear-gradient(135deg,#787d82,#303336);
      }
      .pcc-beta9-plate-smooth{
        background:linear-gradient(135deg,#313436,#151719);
      }
      .pcc-beta9-plate-textured{
        background-color:#b89652;
        background-image:radial-gradient(circle at 6px 6px,rgba(255,255,255,.42) 1px,transparent 2px);
      }
      .pcc-beta9-plate-supertack{
        background:linear-gradient(135deg,#3e503b,#171f16);
      }
      .pcc-beta9-plate-dropdown{
        position:absolute;
        z-index:2147482500;
        left:calc(33% + 5px);
        top:101px;
        width:342px;
        background:#fff;
        color:#111;
        border:1px solid #c9c9c9;
        box-shadow:0 14px 34px rgba(0,0,0,.34);
        padding:4px 0;
      }
      .pcc-beta9-plate-dropdown[hidden]{
        display:none!important;
      }
      .pcc-beta9-plate-option{
        display:grid;
        grid-template-columns:24px 44px 1fr;
        gap:8px;
        align-items:center;
        width:100%;
        min-height:44px;
        border:0;
        background:#fff;
        color:#111;
        text-align:left;
        padding:5px 10px;
        cursor:pointer;
        font-size:14px;
      }
      .pcc-beta9-plate-option:hover{
        background:#e9fff1;
      }
      .pcc-beta9-plate-option.active{
        background:#dcffe8;
      }
      .pcc-beta9-check{
        color:#10b85f;
        font-weight:900;
        font-size:18px;
        text-align:center;
      }
      .pcc-beta9-option-text b{
        display:block;
        font-weight:500;
        line-height:1.15;
      }
      .pcc-beta9-option-text small{
        display:block;
        color:#666;
        font-size:11px;
        margin-top:2px;
      }

      .buildplate.pcc-beta9-buildplate{
        position:relative!important;
        overflow:hidden!important;
        border:3px solid #3b3f40!important;
        border-radius:18px!important;
        background:#2f3334!important;
        box-shadow:
          inset 0 0 0 2px rgba(255,255,255,.04),
          inset 0 0 70px rgba(0,0,0,.35),
          0 16px 42px rgba(0,0,0,.42)!important;
      }
      .pcc-beta9-buildplate-skin{
        position:absolute;
        inset:0;
        z-index:0;
        pointer-events:none;
        border-radius:inherit;
        overflow:hidden;
      }
      .pcc-beta9-buildplate-skin::before{
        content:"";
        position:absolute;
        inset:30px 38px 42px 38px;
        background-image:
          linear-gradient(rgba(230,235,235,.28) 2px,transparent 2px),
          linear-gradient(90deg,rgba(230,235,235,.28) 2px,transparent 2px),
          linear-gradient(rgba(230,235,235,.14) 1px,transparent 1px),
          linear-gradient(90deg,rgba(230,235,235,.14) 1px,transparent 1px);
        background-size:56px 56px,56px 56px,14px 14px,14px 14px;
      }
      .buildplate.pcc-beta9-surface-cool{
        background:#32393d!important;
      }
      .buildplate.pcc-beta9-surface-engineering{
        background:#393d40!important;
      }
      .buildplate.pcc-beta9-surface-smooth{
        background:#303334!important;
      }
      .buildplate.pcc-beta9-surface-textured{
        background:#3a3324!important;
      }
      .buildplate.pcc-beta9-surface-supertack{
        background:#293228!important;
      }
      .buildplate.pcc-beta9-surface-textured .pcc-beta9-buildplate-skin::after{
        content:"";
        position:absolute;
        inset:0;
        background-image:radial-gradient(circle at 10px 10px,rgba(255,224,150,.20) 1px,transparent 2px);
        background-size:18px 18px;
      }
      .buildplate.pcc-beta9-surface-cool .pcc-beta9-buildplate-skin::after{
        content:"";
        position:absolute;
        inset:0;
        background:linear-gradient(135deg,rgba(130,215,255,.10),transparent 58%);
      }
      .buildplate.pcc-beta9-surface-supertack .pcc-beta9-buildplate-skin::after{
        content:"";
        position:absolute;
        inset:0;
        background:linear-gradient(135deg,rgba(110,190,95,.12),transparent 58%);
      }
      .pcc-beta9-side-logo{
        position:absolute;
        left:48px;
        top:75px;
        writing-mode:vertical-rl;
        transform:rotate(180deg);
        font-size:22px;
        font-weight:900;
        letter-spacing:.5px;
        color:rgba(232,236,236,.62);
        text-shadow:0 1px 2px rgba(0,0,0,.55);
        z-index:2;
      }
      .pcc-beta9-front-strip{
        position:absolute;
        left:35%;
        right:7%;
        bottom:11px;
        height:23px;
        border-radius:4px;
        background:linear-gradient(90deg,rgba(218,222,222,.96),rgba(160,166,166,.92));
        color:#555;
        display:flex;
        align-items:center;
        justify-content:space-around;
        gap:8px;
        font-size:11px;
        font-weight:800;
        box-shadow:0 -1px 0 rgba(255,255,255,.55) inset;
        z-index:3;
      }
      .pcc-beta9-front-badge{
        font-size:9px;
        color:#777;
      }
      .pcc-beta9-plate-number{
        position:absolute;
        right:17px;
        bottom:29px;
        color:#08c965;
        font-size:34px;
        font-weight:1000;
        letter-spacing:1px;
        z-index:3;
      }
      .pcc-beta9-handle-top{
        position:absolute;
        top:12px;
        left:50%;
        width:190px;
        height:28px;
        margin-left:-95px;
        border-radius:0 0 17px 17px;
        background:#242829;
        border:2px solid rgba(225,230,230,.32);
        border-top:0;
        z-index:3;
      }
      .pcc-beta9-handle-top::after{
        content:"";
        position:absolute;
        left:42px;
        right:42px;
        top:9px;
        height:4px;
        background:rgba(230,235,235,.88);
        border-radius:999px;
      }
      .pcc-beta9-corner-cut{
        position:absolute;
        bottom:0;
        width:94px;
        height:34px;
        background:#151718;
        border-top:2px solid rgba(220,225,225,.4);
        z-index:3;
      }
      .pcc-beta9-corner-cut.left{
        left:0;
        clip-path:polygon(0 100%,100% 100%,70% 0,0 0);
      }
      .pcc-beta9-corner-cut.right{
        right:0;
        clip-path:polygon(0 100%,100% 100%,100% 0,30% 0);
      }
      .buildplate.pcc-beta9-buildplate .model,
      .buildplate.pcc-beta9-buildplate .model-label,
      .buildplate.pcc-beta9-buildplate .studio-mesh-canvas,
      .buildplate.pcc-beta9-buildplate .studio-model-image{
        z-index:20!important;
      }
    `;
    root.appendChild(style);
  };

  PCC_BETA9_STUDIO_CLASS.prototype.beta9InstallSelector = function beta9InstallSelector() {
    const root = this.shadowRoot;
    if (!root) return;

    this.beta9EnsureStyle();

    const panels = [...root.querySelectorAll(".panel")];
    const leftPanel = panels[0];
    if (!leftPanel) return;

    leftPanel.querySelectorAll(
      ".pcc-beta9-plate-selector,.pcc-beta8-plate-selector,.beta7-buildplate-deck,.beta6-buildplate-switcher,.beta5-buildplate-switcher"
    ).forEach((node) => node.remove());

    const current = this.beta9CurrentPlate();

    const selector = document.createElement("section");
    selector.className = "pcc-beta9-plate-selector";
    selector.innerHTML = `
      <h3>Druckplatte</h3>
      <div class="pcc-beta9-bambu-row">
        <button class="pcc-beta9-device-card active" type="button" title="Aktiver Drucker">
          <span class="pcc-beta9-printer-thumb"></span>
          <span>Bambu Lab A1</span>
        </button>

        <button class="pcc-beta9-active-plate-card active" type="button" data-beta9-toggle-plate title="Druckplatte auswählen">
          <span class="pcc-beta9-plate-thumb ${pccBeta9PlateClass(current)}">
            <span class="pcc-beta9-thumb-grid"></span>
          </span>
          <span class="pcc-beta9-active-plate-label">${pccBeta9Esc(current.short)}</span>
          <span class="pcc-beta9-caret">⌄</span>
        </button>

        <button class="pcc-beta9-sync-card" type="button" title="Sync Infos">
          <span class="pcc-beta9-sync-icon">↻</span>
          <span>Sync Infos</span>
        </button>
      </div>

      <div class="pcc-beta9-plate-dropdown" hidden>
        ${PCC_BETA9_BUILD_PLATES.map((plate) => `
          <button class="pcc-beta9-plate-option ${plate.id === current.id ? "active" : ""}" type="button" data-beta9-plate="${pccBeta9Esc(plate.id)}">
            <span class="pcc-beta9-check">${plate.id === current.id ? "✓" : ""}</span>
            <span class="pcc-beta9-option-thumb ${pccBeta9PlateClass(plate)}">
              <span class="pcc-beta9-thumb-grid"></span>
            </span>
            <span class="pcc-beta9-option-text">
              <b>${pccBeta9Esc(plate.name)}</b>
              <small>${pccBeta9Esc(plate.label)}</small>
            </span>
          </button>
        `).join("")}
      </div>
    `;

    const oldHeading = [...leftPanel.querySelectorAll("h3")].find((h3) => String(h3.textContent || "").trim() === "Druckplatte");
    if (oldHeading) {
      oldHeading.insertAdjacentElement("afterend", selector);
    } else {
      const firstHeading = leftPanel.querySelector("h3");
      if (firstHeading?.nextSibling) leftPanel.insertBefore(selector, firstHeading.nextSibling);
      else leftPanel.insertBefore(selector, leftPanel.firstChild);
    }

    const dropdown = selector.querySelector(".pcc-beta9-plate-dropdown");

    selector.querySelector("[data-beta9-toggle-plate]")?.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (!dropdown) return;
      if (dropdown.hasAttribute("hidden")) dropdown.removeAttribute("hidden");
      else dropdown.setAttribute("hidden", "");
    });

    for (const button of [...selector.querySelectorAll("[data-beta9-plate]")]) {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.beta9SetPlate(button.dataset.beta9Plate);
      });
    }

    if (!this._beta9PlateOutsideBound) {
      this._beta9PlateOutsideBound = true;
      root.addEventListener("pointerdown", (event) => {
        if (event.target?.closest?.(".pcc-beta9-plate-selector")) return;
        root.querySelectorAll(".pcc-beta9-plate-dropdown").forEach((node) => node.setAttribute("hidden", ""));
      }, {capture:false});
    }
  };

  PCC_BETA9_STUDIO_CLASS.prototype.beta9ApplyBuildplateVisual = function beta9ApplyBuildplateVisual() {
    const root = this.shadowRoot;
    if (!root) return;

    this.beta9EnsureStyle();

    const plate = this.beta9CurrentPlate();
    const buildplate = root.querySelector(".buildplate");
    if (!buildplate) return;

    buildplate.classList.remove(
      "pcc-beta8-buildplate",
      "pcc-beta9-buildplate",
      "pcc-beta9-surface-cool",
      "pcc-beta9-surface-engineering",
      "pcc-beta9-surface-smooth",
      "pcc-beta9-surface-textured",
      "pcc-beta9-surface-supertack",
      "pcc-beta8-plate-cool",
      "pcc-beta8-plate-engineering",
      "pcc-beta8-plate-smooth",
      "pcc-beta8-plate-textured",
      "pcc-beta8-plate-supertack"
    );

    buildplate.classList.add("pcc-beta9-buildplate", `pcc-beta9-surface-${plate.surface}`);
    buildplate.dataset.beta9Plate = plate.id;

    const label = root.querySelector(".plate-label");
    if (label) label.textContent = `Buildplate – ${plate.name}`;

    let skin = [...buildplate.children].find((node) => node.classList?.contains?.("pcc-beta9-buildplate-skin"));
    if (!skin) {
      buildplate.querySelectorAll(":scope > .pcc-beta8-buildplate-skin").forEach((node) => node.remove());
      skin = document.createElement("div");
      skin.className = "pcc-beta9-buildplate-skin";
      buildplate.insertBefore(skin, buildplate.firstChild);
    }

    skin.innerHTML = `
      <div class="pcc-beta9-side-logo">${pccBeta9Esc(plate.logo)}</div>
      <div class="pcc-beta9-front-strip">
        <span>▦</span>
        <span>${pccBeta9Esc(plate.footer)}</span>
        <span class="pcc-beta9-front-badge">${pccBeta9Esc(plate.badge)}</span>
      </div>
      <div class="pcc-beta9-plate-number">01</div>
      <div class="pcc-beta9-handle-top"></div>
      <div class="pcc-beta9-corner-cut left"></div>
      <div class="pcc-beta9-corner-cut right"></div>
    `;

    const model = root.querySelector(".model");
    if (model) model.style.zIndex = "20";

    const labelNode = root.querySelector(".model-label");
    if (labelNode) labelNode.style.zIndex = "21";

    const mesh = root.querySelector(".studio-mesh-canvas");
    if (mesh) mesh.style.zIndex = "22";

    const image = root.querySelector(".studio-model-image");
    if (image) image.style.zIndex = "23";
  };

  PCC_BETA9_STUDIO_CLASS.prototype.cleanupBetaStudioUi = function cleanupBetaStudioUi() {
    try {
      if (typeof PCC_BETA9_PREV_CLEANUP === "function") {
        PCC_BETA9_PREV_CLEANUP.call(this);
      }
    } catch (_error) {}

    this.beta9InstallSelector();
    this.beta9ApplyBuildplateVisual();

    try {
      if (typeof pccBeta7SanitizeRoot === "function") pccBeta7SanitizeRoot(this.shadowRoot);
    } catch (_error) {}
  };

const PCC_BETA20_STUDIO_CLASS = customElements.get("printer-control-center-studio-card") || PrinterControlCenterStudioCard;
  const PCC_BETA20_PREV_CLEANUP = PCC_BETA20_STUDIO_CLASS.prototype.cleanupBetaStudioUi;
  const PCC_BETA20_PREV_HANDLE_CLICK = PCC_BETA20_STUDIO_CLASS.prototype.handleClick;
  const PCC_BETA20_PREV_RENDER_MESH = PCC_BETA20_STUDIO_CLASS.prototype.renderMeshCanvas;
  const PCC_BETA20_PRIMITIVES = {
    cube: {label:"Würfel", width:40, depth:40, height:40, type:"box"},
    cuboid: {label:"Quader", width:80, depth:45, height:30, type:"box"},
    cylinder: {label:"Zylinder", radius:22, height:55, type:"cylinder", segments:48},
    first_layer: {label:"First Layer", width:120, depth:80, height:0.28, visualHeight:1.2, type:"box"}
  };

  function pccBeta20Point(x, y, z) { return [Number(x || 0), Number(y || 0), Number(z || 0)]; }

  function pccBeta20BuildMesh(triangles, meta={}) {
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
    return {triangles, min, max, center, size, meta};
  }

  function pccBeta20BoxMesh(width, depth, height, meta={}) {
    const w = Math.max(0.1, Number(width || 40)) / 2;
    const d = Math.max(0.1, Number(depth || 40)) / 2;
    const h = Math.max(0.1, Number(height || 40));
    const p = {
      nwb:pccBeta20Point(-w,-d,0), neb:pccBeta20Point(w,-d,0), seb:pccBeta20Point(w,d,0), swb:pccBeta20Point(-w,d,0),
      nwt:pccBeta20Point(-w,-d,h), net:pccBeta20Point(w,-d,h), set:pccBeta20Point(w,d,h), swt:pccBeta20Point(-w,d,h)
    };
    return pccBeta20BuildMesh([
      [p.nwb,p.neb,p.seb],[p.nwb,p.seb,p.swb],
      [p.nwt,p.swt,p.set],[p.nwt,p.set,p.net],
      [p.nwb,p.nwt,p.net],[p.nwb,p.net,p.neb],
      [p.neb,p.net,p.set],[p.neb,p.set,p.seb],
      [p.seb,p.set,p.swt],[p.seb,p.swt,p.swb],
      [p.swb,p.swt,p.nwt],[p.swb,p.nwt,p.nwb],
    ], meta);
  }

  function pccBeta20CylinderMesh(radius, height, segments=48, meta={}) {
    const r = Math.max(0.1, Number(radius || 22));
    const h = Math.max(0.1, Number(height || 55));
    const count = Math.max(12, Math.min(96, Number(segments || 48)));
    const bottom = pccBeta20Point(0,0,0);
    const top = pccBeta20Point(0,0,h);
    const triangles = [];
    for (let i = 0; i < count; i++) {
      const a = (Math.PI * 2 * i) / count;
      const b = (Math.PI * 2 * (i + 1)) / count;
      const p1 = pccBeta20Point(Math.cos(a)*r, Math.sin(a)*r, 0);
      const p2 = pccBeta20Point(Math.cos(b)*r, Math.sin(b)*r, 0);
      const p3 = pccBeta20Point(Math.cos(a)*r, Math.sin(a)*r, h);
      const p4 = pccBeta20Point(Math.cos(b)*r, Math.sin(b)*r, h);
      triangles.push([bottom,p2,p1], [top,p3,p4], [p1,p2,p4], [p1,p4,p3]);
    }
    return pccBeta20BuildMesh(triangles, meta);
  }

  function pccBeta20PrimitiveMesh(kind) {
    const spec = PCC_BETA20_PRIMITIVES[kind] || PCC_BETA20_PRIMITIVES.cube;
    if (spec.type === "cylinder") {
      return pccBeta20CylinderMesh(spec.radius, spec.height, spec.segments, {
        primitive:kind, label:spec.label, width_mm:spec.radius*2, depth_mm:spec.radius*2, height_mm:spec.height
      });
    }
    return pccBeta20BoxMesh(spec.width, spec.depth, spec.visualHeight || spec.height, {
      primitive:kind, label:spec.label, width_mm:spec.width, depth_mm:spec.depth, height_mm:spec.height
    });
  }

  function pccBeta20Dimensions(mesh, transform={}) {
    const meta = mesh?.meta || {};
    const scale = Math.max(0.05, toNumber(transform.scale,100)/100);
    const sx = Math.max(0.05, toNumber(transform.sx,100)/100);
    const sy = Math.max(0.05, toNumber(transform.sy,100)/100);
    const sz = Math.max(0.05, toNumber(transform.sz,100)/100);
    return {
      width: Math.abs(Number(meta.width_mm || (mesh?.max?.[0]-mesh?.min?.[0]) || 0) * scale * sx),
      depth: Math.abs(Number(meta.depth_mm || (mesh?.max?.[1]-mesh?.min?.[1]) || 0) * scale * sy),
      height: Math.abs(Number(meta.height_mm || (mesh?.max?.[2]-mesh?.min?.[2]) || 0) * scale * sz)
    };
  }

  function pccBeta20Mm(value) {
    const n = Number(value || 0);
    if (!Number.isFinite(n)) return "0 mm";
    return `${(n < 10 ? n.toFixed(2) : n.toFixed(1)).replace(/\.?0+$/,"")} mm`;
  }

  PCC_BETA20_STUDIO_CLASS.prototype.beta20EnsureStyle = function beta20EnsureStyle() {
    const root = this.shadowRoot;
    if (!root || root.querySelector("#pcc-beta20-studio-style")) return;
    const style = document.createElement("style");
    style.id = "pcc-beta20-studio-style";
    style.textContent = `
      .buildplate.pcc-beta9-buildplate{background:#303334!important;}
      .buildplate.pcc-beta9-buildplate .pcc-beta9-buildplate-skin::before{background-image:none!important;}
      .buildplate.mesh-loaded .model{opacity:.12!important;}
      .buildplate .plate-help{display:none!important;}
      .pcc-beta20-primitive-panel{margin:12px 0;padding:10px;border:1px solid rgba(0,169,214,.36);border-radius:12px;background:rgba(0,0,0,.18);}
      .pcc-beta20-primitive-panel h3{margin:0 0 8px;font-size:14px;}
      .pcc-beta20-primitive-grid{display:grid;grid-template-columns:1fr 1fr;gap:7px;}
      .pcc-beta20-primitive-grid .action{width:100%;min-height:32px;}
      .pcc-beta20-dimensions{margin-top:8px;display:grid;gap:4px;color:var(--pcc-muted);font-size:11px;}
      .pcc-beta20-render-badge{position:absolute;left:14px;top:34px;z-index:29;padding:4px 8px;border:1px solid rgba(255,68,68,.40);border-radius:999px;background:rgba(0,0,0,.42);color:rgba(255,230,230,.92);font-size:11px;pointer-events:none;}
    `;
    root.appendChild(style);
  };

  PCC_BETA20_STUDIO_CLASS.prototype.beta20InjectPrimitivePanel = function beta20InjectPrimitivePanel() {
    const root = this.shadowRoot;
    const leftPanel = root?.querySelector(".studio-grid > .panel");
    if (!leftPanel) return;
    let panel = leftPanel.querySelector(".pcc-beta20-primitive-panel");
    if (!panel) {
      panel = document.createElement("div");
      panel.className = "pcc-beta20-primitive-panel";
      const before = [...leftPanel.querySelectorAll("h3")].find((node) => String(node.textContent || "").includes("Studio-Jobs"));
      leftPanel.insertBefore(panel, before || null);
    }
    const dims = this._studioMesh ? pccBeta20Dimensions(this._studioMesh, this._transform || defaultTransform()) : null;
    panel.innerHTML = `
      <h3>Primitive / Testkörper</h3>
      <div class="pcc-beta20-primitive-grid">
        <button class="action" data-action="primitive-cube">Würfel</button>
        <button class="action" data-action="primitive-cuboid">Quader</button>
        <button class="action" data-action="primitive-cylinder">Zylinder</button>
        <button class="action" data-action="primitive-first-layer">First Layer</button>
      </div>
      <div class="pcc-beta20-dimensions">
        <span>Breite: <b>${pccBeta20Mm(dims?.width || 0)}</b></span>
        <span>Länge: <b>${pccBeta20Mm(dims?.depth || 0)}</b></span>
        <span>Höhe: <b>${pccBeta20Mm(dims?.height || 0)}</b></span>
      </div>
    `;
    root.querySelectorAll('button[data-action="snap-grid"]').forEach((button) => button.remove());
  };

  PCC_BETA20_STUDIO_CLASS.prototype.beta20AddPrimitive = function beta20AddPrimitive(kind) {
    const cleanKind = String(kind || "cube").replace(/^primitive-/, "").replace(/-/g, "_");
    const spec = PCC_BETA20_PRIMITIVES[cleanKind] || PCC_BETA20_PRIMITIVES.cube;
    const mesh = pccBeta20PrimitiveMesh(cleanKind);
    const now = new Date().toISOString();
    this._studioMesh = mesh;
    this._studioMeshError = "";
    this._studioMeshUrl = "";
    this._studioMeshJobId = `primitive:${cleanKind}:${now}`;
    this._studioModelImageUrl = "";
    this._transform = {...defaultTransform(), ...(this._transform || {}), x:0, y:0, z:0, rx:0, ry:0, rz:0, scale:100, sx:100, sy:100, sz:100, skewX:0, skewY:0};
    const job = {
      id:this._studioMeshJobId,
      name:spec.label,
      modelName:spec.label,
      file_name:`${cleanKind}.primitive`,
      filename:`${cleanKind}.primitive`,
      file_path:"",
      path:"",
      source:"primitive",
      origin:"primitive",
      primitive:{kind:cleanKind, label:spec.label, width_mm:mesh.meta?.width_mm || 0, depth_mm:mesh.meta?.depth_mm || 0, height_mm:mesh.meta?.height_mm || 0},
      model:{name:spec.label, source:"primitive", primitive:cleanKind},
      transform:{...this._transform},
      profile_context:this.buildProfileContext?.() || {},
      real_slicing_enabled:false,
      direct_print_enabled:false,
      updated_at:now
    };
    this._activeJob = job;
    this._activeJobId = job.id;
    this._jobs = [job, ...(Array.isArray(this._jobs) ? this._jobs.filter((entry) => String(entry?.id) !== job.id) : [])].slice(0,12);
    this._lastDryRun = null;
    this._lastStudioPlan = null;
    this._health = null;
    this._studioMeshStatus = `Primitive Mesh geladen: ${spec.label}.`;
    this._status = `Primitive erzeugt: ${spec.label}. Rote Markierungen zeigen Start und Ende der Objektmaße.`;
    this.render();
  };

  PCC_BETA20_STUDIO_CLASS.prototype.beta20DrawRulers = function beta20DrawRulers(ctx, canvasWidth, canvasHeight, dpr) {
    const mesh = this._studioMesh;
    if (!mesh?.triangles?.length) return;
    const t = this.clampTransform?.() || this._transform || defaultTransform();
    const zoom = Math.max(0.25, Math.min(4, toNumber(this._viewZoom,1)));
    const base = Math.min(canvasWidth, canvasHeight) * 0.34 * zoom * Math.max(0.05, toNumber(t.scale,100)/100);
    const sx = Math.max(0.05, toNumber(t.sx,100)/100) * (Number(t.mx) === -1 ? -1 : 1);
    const sy = Math.max(0.05, toNumber(t.sy,100)/100) * (Number(t.my) === -1 ? -1 : 1);
    const sz = Math.max(0.05, toNumber(t.sz,100)/100) * (Number(t.mz) === -1 ? -1 : 1);
    const rz = toNumber(t.rz,0) * Math.PI / 180;
    const cos = Math.cos(rz);
    const sin = Math.sin(rz);
    const ox = canvasWidth / 2 + toNumber(t.x,0) * dpr;
    const oy = canvasHeight / 2 + toNumber(t.y,0) * dpr;
    const project = (p) => {
      let x = ((p[0] - mesh.center[0]) / mesh.size) * sx;
      let y = ((p[1] - mesh.center[1]) / mesh.size) * sy;
      let z = ((p[2] - mesh.center[2]) / mesh.size) * sz;
      const rx = x * cos - y * sin;
      const ry = x * sin + y * cos;
      return [ox + (rx - ry * 0.28) * base, oy + (ry * 0.48 - z * 0.72) * base];
    };
    const corners = [
      [mesh.min[0],mesh.min[1],mesh.min[2]],[mesh.max[0],mesh.min[1],mesh.min[2]],[mesh.max[0],mesh.max[1],mesh.min[2]],[mesh.min[0],mesh.max[1],mesh.min[2]],
      [mesh.min[0],mesh.min[1],mesh.max[2]],[mesh.max[0],mesh.min[1],mesh.max[2]],[mesh.max[0],mesh.max[1],mesh.max[2]],[mesh.min[0],mesh.max[1],mesh.max[2]]
    ].map(project);
    const minX = Math.min(...corners.map((p) => p[0]));
    const maxX = Math.max(...corners.map((p) => p[0]));
    const minY = Math.min(...corners.map((p) => p[1]));
    const maxY = Math.max(...corners.map((p) => p[1]));
    const dims = pccBeta20Dimensions(mesh, t);
    const clamp = (v, low, high) => Math.max(low, Math.min(high, v));
    const rx1 = clamp(minX, 52*dpr, canvasWidth - 52*dpr);
    const rx2 = clamp(maxX, 52*dpr, canvasWidth - 52*dpr);
    const ry1 = clamp(minY, 52*dpr, canvasHeight - 52*dpr);
    const ry2 = clamp(maxY, 52*dpr, canvasHeight - 52*dpr);
    const bottom = canvasHeight - 34*dpr;
    const left = 38*dpr;
    const right = canvasWidth - 38*dpr;
    const drawLine = (x1,y1,x2,y2,color,width=1) => {
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = Math.max(1, width*dpr);
      ctx.moveTo(x1,y1);
      ctx.lineTo(x2,y2);
      ctx.stroke();
    };
    ctx.save();
    ctx.font = `${Math.round(11*dpr)}px Arial`;
    ctx.fillStyle = "rgba(255,255,255,.84)";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    drawLine(52*dpr,bottom,canvasWidth-52*dpr,bottom,"rgba(255,255,255,.34)");
    drawLine(rx1,bottom-10*dpr,rx1,bottom+10*dpr,"rgba(255,80,80,.95)",2);
    drawLine(rx2,bottom-10*dpr,rx2,bottom+10*dpr,"rgba(255,80,80,.95)",2);
    ctx.fillText(`Breite ${pccBeta20Mm(dims.width)}`, (rx1+rx2)/2, bottom-18*dpr);
    drawLine(left,52*dpr,left,canvasHeight-52*dpr,"rgba(255,255,255,.34)");
    drawLine(left-10*dpr,ry1,left+10*dpr,ry1,"rgba(255,80,80,.95)",2);
    drawLine(left-10*dpr,ry2,left+10*dpr,ry2,"rgba(255,80,80,.95)",2);
    ctx.save(); ctx.translate(left+18*dpr,(ry1+ry2)/2); ctx.rotate(-Math.PI/2); ctx.fillText(`Länge ${pccBeta20Mm(dims.depth)}`,0,0); ctx.restore();
    drawLine(right,52*dpr,right,canvasHeight-52*dpr,"rgba(255,255,255,.34)");
    drawLine(right-10*dpr,ry1,right+10*dpr,ry1,"rgba(255,80,80,.95)",2);
    drawLine(right-10*dpr,ry2,right+10*dpr,ry2,"rgba(255,80,80,.95)",2);
    ctx.save(); ctx.translate(right-18*dpr,(ry1+ry2)/2); ctx.rotate(-Math.PI/2); ctx.fillText(`Höhe ${pccBeta20Mm(dims.height)}`,0,0); ctx.restore();
    ctx.restore();
  };

  PCC_BETA20_STUDIO_CLASS.prototype.renderMeshCanvas = function beta20RenderMeshCanvas() {
    if (typeof PCC_BETA20_PREV_RENDER_MESH === "function") {
      PCC_BETA20_PREV_RENDER_MESH.call(this);
    }
    const canvas = this.shadowRoot?.querySelector(".studio-mesh-canvas");
    const ctx = canvas?.getContext?.("2d");
    if (!canvas || !ctx || !this._studioMesh?.triangles?.length) return;
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    this.beta20DrawRulers(ctx, canvas.width || 0, canvas.height || 0, dpr);
    const badge = this.shadowRoot?.querySelector(".pcc-beta20-render-badge");
    if (badge) {
      const dims = pccBeta20Dimensions(this._studioMesh, this._transform || defaultTransform());
      badge.textContent = `Mesh ${this._studioMesh.triangles.length} Dreiecke · ${pccBeta20Mm(dims.width)} × ${pccBeta20Mm(dims.depth)} × ${pccBeta20Mm(dims.height)}`;
    }
  };

  PCC_BETA20_STUDIO_CLASS.prototype.cleanupBetaStudioUi = function cleanupBetaStudioUi() {
    try {
      if (typeof PCC_BETA20_PREV_CLEANUP === "function") PCC_BETA20_PREV_CLEANUP.call(this);
    } catch (_error) {}
    this.beta20EnsureStyle();
    this.beta20InjectPrimitivePanel();
    const buildplate = this.shadowRoot?.querySelector(".buildplate");
    if (buildplate && !buildplate.querySelector(".pcc-beta20-render-badge")) {
      const badge = document.createElement("div");
      badge.className = "pcc-beta20-render-badge";
      badge.textContent = "3D-Mesh bereit";
      buildplate.appendChild(badge);
    }
    this.shadowRoot?.querySelectorAll('button[data-action="snap-grid"]').forEach((button) => button.remove());
    this.queueMeshRender?.();
  };

  PCC_BETA20_STUDIO_CLASS.prototype.handleClick = function handleClick(event) {
    const action = event.target?.dataset?.action;
    if (String(action || "").startsWith("primitive-")) {
      event.preventDefault();
      event.stopPropagation();
      this.beta20AddPrimitive(String(action).replace("primitive-",""));
      return;
    }
    if (action === "snap-grid") {
      event.preventDefault();
      event.stopPropagation();
      this._status = "Raster ist in beta20 ausgeblendet; Maßlineale bleiben aktiv.";
      this.render();
      return;
    }
    return PCC_BETA20_PREV_HANDLE_CLICK.call(this, event);
  };

const PCC_BETA21_STUDIO_CLASS = customElements.get("printer-control-center-studio-card") || PrinterControlCenterStudioCard;
  const PCC_BETA21_PREV_CLEANUP = PCC_BETA21_STUDIO_CLASS.prototype.cleanupBetaStudioUi;
  const PCC_BETA21_PREV_HANDLE_CLICK = PCC_BETA21_STUDIO_CLASS.prototype.handleClick;
  const PCC_BETA21_PREV_APPLY_JOB = PCC_BETA21_STUDIO_CLASS.prototype.applyActiveJob;
  const PCC_BETA21_PREV_LOAD_JOBS = PCC_BETA21_STUDIO_CLASS.prototype.loadStudioJobs;
  const PCC_BETA21_PREV_DELETE_JOB = PCC_BETA21_STUDIO_CLASS.prototype.deleteActiveJob;
  const PCC_BETA21_PREV_ENSURE_MESH = PCC_BETA21_STUDIO_CLASS.prototype.ensureStudioMeshLoaded;

  function pccBeta21JobPrimitiveKind(job) {
    return String(
      job?.primitive?.kind ||
      job?.primitive_kind ||
      job?.model?.primitive_kind ||
      job?.model?.primitive ||
      ""
    ).trim();
  }

  function pccBeta21IsPrimitiveJob(job) {
    const source = String(job?.source || job?.origin || job?.model?.source || "").trim();
    return source === "primitive" || Boolean(pccBeta21JobPrimitiveKind(job));
  }

  function pccBeta21ValidModelJob(job) {
    if (!job) return false;
    if (pccBeta21IsPrimitiveJob(job)) return true;
    const path = String(job.file_path || job.path || job.model?.path || "").trim();
    const name = String(job.modelName || job.file_name || job.filename || job.name || job.model?.name || "").trim();
    if (path && /\.(3mf|stl|obj)$/i.test(path)) return true;
    if (name && /\.(3mf|stl|obj)$/i.test(name)) return true;
    return false;
  }

  function pccBeta21TriangleNormal(tri) {
    const a = tri[0], b = tri[1], c = tri[2];
    const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2];
    const vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
    const nx = uy * vz - uz * vy;
    const ny = uz * vx - ux * vz;
    const nz = ux * vy - uy * vx;
    const len = Math.hypot(nx, ny, nz) || 1;
    return [nx / len, ny / len, nz / len];
  }

  function pccBeta21Shade(normal, depth) {
    const light = [0.28, -0.44, 0.85];
    const dot = Math.max(0, normal[0] * light[0] + normal[1] * light[1] + normal[2] * light[2]);
    const shade = Math.max(72, Math.min(235, 82 + dot * 135 - depth * 18));
    return {
      fill: `rgba(${Math.round(shade * 0.45)}, ${Math.round(shade * 0.86)}, ${Math.round(shade)}, 0.88)`,
      stroke: `rgba(0, 218, 255, ${0.22 + dot * 0.35})`
    };
  }

  PCC_BETA21_STUDIO_CLASS.prototype.beta21EnsureStyle = function beta21EnsureStyle() {
    const root = this.shadowRoot;
    if (!root || root.querySelector("#pcc-beta21-real-render-style")) return;

    const style = document.createElement("style");
    style.id = "pcc-beta21-real-render-style";
    style.textContent = `
      .buildplate.pcc-beta21-empty .model,
      .buildplate.pcc-beta21-empty .model-label,
      .buildplate.pcc-beta21-empty .studio-mesh-canvas,
      .buildplate.pcc-beta21-empty .studio-model-image,
      .buildplate.pcc-beta21-primitive .studio-model-image,
      .buildplate.pcc-beta21-mesh .studio-model-image{
        display:none!important;
      }

      .buildplate.pcc-beta21-mesh .model,
      .buildplate.pcc-beta21-primitive .model{
        opacity:0!important;
        border:0!important;
        box-shadow:none!important;
        background:transparent!important;
        pointer-events:none!important;
      }

      .buildplate.pcc-beta21-mesh .studio-mesh-canvas,
      .buildplate.pcc-beta21-primitive .studio-mesh-canvas{
        display:block!important;
        opacity:1!important;
        z-index:28!important;
        pointer-events:auto!important;
      }

      .buildplate.pcc-beta21-empty .pcc-beta20-render-badge{
        display:none!important;
      }

      .pcc-beta21-empty-note{
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        z-index:32;
        padding:10px 14px;
        border:1px dashed rgba(255,255,255,.22);
        border-radius:12px;
        background:rgba(0,0,0,.32);
        color:rgba(255,255,255,.74);
        font-size:12px;
        pointer-events:none;
      }

      .pcc-beta21-object-label{
        position:absolute;
        left:50%;
        top:calc(50% + 118px);
        transform:translateX(-50%);
        z-index:33;
        padding:4px 9px;
        border-radius:999px;
        background:rgba(0,0,0,.42);
        border:1px solid rgba(0,169,214,.35);
        color:rgba(255,255,255,.82);
        font-size:11px;
        max-width:70%;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        pointer-events:none;
      }
    `;
    root.appendChild(style);
  };

  PCC_BETA21_STUDIO_CLASS.prototype.beta21HardClearObjectState = function beta21HardClearObjectState(status="Buildplate ist leer.") {
    this._activeJob = null;
    this._activeJobId = "";
    this._jobs = [];
    this._jobsLoaded = true;
    this._studioMesh = null;
    this._studioMeshJobId = "";
    this._studioMeshUrl = "";
    this._studioMeshError = "";
    this._studioMeshStatus = "Kein echtes Mesh geladen.";
    this._studioModelImageUrl = "";
    this._lastDryRun = null;
    this._lastStudioPlan = null;
    this._health = null;
    this._transform = defaultTransform();
    this._pccBeta21PrimitiveLocked = false;
    this._pccBeta21LockedJobId = "";
    this._status = status;
  };

  PCC_BETA21_STUDIO_CLASS.prototype.beta21SetPrimitiveActive = async function beta21SetPrimitiveActive(kind) {
    const cleanKind = String(kind || "cube").replace(/^primitive-/, "").replace(/-/g, "_");
    const spec = (typeof PCC_BETA20_PRIMITIVES === "object" ? PCC_BETA20_PRIMITIVES[cleanKind] : null) || {label:"Würfel"};
    const mesh = typeof pccBeta20PrimitiveMesh === "function" ? pccBeta20PrimitiveMesh(cleanKind) : null;
    if (!mesh?.triangles?.length) {
      this._status = "Primitive konnte kein echtes Mesh erzeugen.";
      this.render();
      return;
    }

    const now = new Date().toISOString();
    const jobId = `primitive://${cleanKind}/${Date.now()}`;
    const job = {
      id: jobId,
      version: STUDIO_VERSION,
      schema: "printer-control-center.v5.beta21.primitive",
      source: "primitive",
      origin: "primitive",
      serial: String(this._config?.serial || this._activeJob?.serial || ""),
      created_at: now,
      updated_at: now,
      name: spec.label,
      modelName: spec.label,
      file_name: `${cleanKind}.primitive`,
      filename: `${cleanKind}.primitive`,
      file_path: jobId,
      path: jobId,
      primitive_kind: cleanKind,
      primitive: {
        kind: cleanKind,
        label: spec.label,
        width_mm: mesh.meta?.width_mm || 0,
        depth_mm: mesh.meta?.depth_mm || 0,
        height_mm: mesh.meta?.height_mm || 0
      },
      model: {
        name: spec.label,
        source: "primitive",
        path: jobId,
        primitive_kind: cleanKind
      },
      transform: {...defaultTransform()},
      profile_context: this.buildProfileContext?.() || {},
      real_slicing_enabled: false,
      direct_print_enabled: false,
      status: "prepared",
      stage: "primitive"
    };

    try {
      await this.ws?.({type:"printer_control_center/studio_jobs/clear"});
    } catch (_error) {}

    try {
      const response = await this.ws?.({
        type:"printer_control_center/studio_jobs/create",
        serial: job.serial,
        plan: job
      });
      const saved = response?.job || response || job;
      Object.assign(job, saved, {
        source:"primitive",
        origin:"primitive",
        primitive_kind: cleanKind,
        primitive: job.primitive,
        model: job.model,
        transform: job.transform
      });
    } catch (_error) {}

    this._pccBeta21PrimitiveLocked = true;
    this._pccBeta21LockedJobId = String(job.id || jobId);
    this._jobs = [job];
    this._jobsLoaded = true;
    this._activeJob = job;
    this._activeJobId = String(job.id || jobId);
    this._studioMesh = mesh;
    this._studioMeshJobId = this._activeJobId;
    this._studioMeshUrl = "";
    this._studioMeshError = "";
    this._studioModelImageUrl = "";
    this._studioMeshStatus = `Echtes Primitive-Mesh aktiv: ${spec.label}.`;
    this._transform = {...defaultTransform()};
    this._lastDryRun = null;
    this._lastStudioPlan = null;
    this._health = null;
    this._status = `${spec.label} aktiv. Alte Galerie-/Proxy-Objekte wurden entfernt.`;
    this.render();
  };

  PCC_BETA21_STUDIO_CLASS.prototype.applyActiveJob = function beta21ApplyActiveJob(job, options={}) {
    if (this._pccBeta21PrimitiveLocked && !pccBeta21IsPrimitiveJob(job)) {
      return;
    }

    if (!pccBeta21ValidModelJob(job)) {
      this.beta21HardClearObjectState("Ungültiger oder leerer Studio-Job entfernt.");
      if (options?.render !== false) this.render();
      return;
    }

    return PCC_BETA21_PREV_APPLY_JOB.call(this, job, options);
  };

  PCC_BETA21_STUDIO_CLASS.prototype.loadStudioJobs = async function beta21LoadStudioJobs(...args) {
    if (this._pccBeta21PrimitiveLocked && this._activeJob && pccBeta21IsPrimitiveJob(this._activeJob)) {
      this._jobs = [this._activeJob];
      this._jobsLoaded = true;
      return this._jobs;
    }

    const result = await PCC_BETA21_PREV_LOAD_JOBS.apply(this, args);

    if (this._pccBeta21PrimitiveLocked && this._activeJob && pccBeta21IsPrimitiveJob(this._activeJob)) {
      this._jobs = [this._activeJob];
      return this._jobs;
    }

    if (!pccBeta21ValidModelJob(this._activeJob)) {
      this.beta21HardClearObjectState("Kein gültiges Studio-Objekt geladen.");
      this.render();
    }

    return result;
  };

  PCC_BETA21_STUDIO_CLASS.prototype.ensureStudioMeshLoaded = async function beta21EnsureStudioMeshLoaded(force=false) {
    if (this._pccBeta21PrimitiveLocked && this._studioMesh?.triangles?.length) {
      this._studioMeshStatus = "Primitive-Mesh bleibt aktiv; Galeriejob wird nicht zurückgeladen.";
      this.queueMeshRender?.();
      return;
    }
    return PCC_BETA21_PREV_ENSURE_MESH.call(this, force);
  };

  PCC_BETA21_STUDIO_CLASS.prototype.deleteActiveJob = async function beta21DeleteActiveJob() {
    try {
      await this.ws?.({type:"printer_control_center/studio_jobs/clear"});
    } catch (_error) {}

    this.beta21HardClearObjectState("Studio-Objekt entfernt. Die Buildplate ist leer.");
    this.render();
  };

  PCC_BETA21_STUDIO_CLASS.prototype.beta21ProjectPointFactory = function beta21ProjectPointFactory(canvasWidth, canvasHeight, dpr) {
    const mesh = this._studioMesh;
    const t = this.clampTransform?.() || this._transform || defaultTransform();
    const zoom = Math.max(0.25, Math.min(4, toNumber(this._viewZoom,1)));
    const base = Math.min(canvasWidth, canvasHeight) * 0.35 * zoom * Math.max(0.05, toNumber(t.scale,100)/100);
    const sx = Math.max(0.05, toNumber(t.sx,100)/100) * (Number(t.mx) === -1 ? -1 : 1);
    const sy = Math.max(0.05, toNumber(t.sy,100)/100) * (Number(t.my) === -1 ? -1 : 1);
    const sz = Math.max(0.05, toNumber(t.sz,100)/100) * (Number(t.mz) === -1 ? -1 : 1);
    const rz = toNumber(t.rz,0) * Math.PI / 180;
    const rx = (toNumber(t.rx,0) - 20) * Math.PI / 180;
    const ry = (toNumber(t.ry,0) + 28) * Math.PI / 180;
    const cosZ = Math.cos(rz), sinZ = Math.sin(rz);
    const cosX = Math.cos(rx), sinX = Math.sin(rx);
    const cosY = Math.cos(ry), sinY = Math.sin(ry);
    const ox = canvasWidth / 2 + toNumber(t.x,0) * dpr;
    const oy = canvasHeight / 2 + toNumber(t.y,0) * dpr;

    return (p) => {
      let x = ((p[0] - mesh.center[0]) / mesh.size) * sx;
      let y = ((p[1] - mesh.center[1]) / mesh.size) * sy;
      let z = ((p[2] - mesh.center[2]) / mesh.size) * sz;

      let x1 = x * cosZ - y * sinZ;
      let y1 = x * sinZ + y * cosZ;
      let z1 = z;

      let y2 = y1 * cosX - z1 * sinX;
      let z2 = y1 * sinX + z1 * cosX;
      let x2 = x1;

      let x3 = x2 * cosY + z2 * sinY;
      let z3 = -x2 * sinY + z2 * cosY;
      let y3 = y2;

      const perspective = 1 / (1 + z3 * 0.20);
      return {
        x: ox + x3 * base * perspective,
        y: oy + y3 * base * perspective - z3 * base * 0.38,
        z: z3
      };
    };
  };

  PCC_BETA21_STUDIO_CLASS.prototype.renderMeshCanvas = function beta21RenderMeshCanvas() {
    const canvas = this.shadowRoot?.querySelector(".studio-mesh-canvas");
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    const width = Math.max(320, Math.round(rect.width * dpr));
    const height = Math.max(260, Math.round(rect.height * dpr));
    if (canvas.width !== width) canvas.width = width;
    if (canvas.height !== height) canvas.height = height;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0,0,width,height);

    const mesh = this._studioMesh;
    if (!mesh?.triangles?.length) return;

    const project = this.beta21ProjectPointFactory(width, height, dpr);
    const triangles = [];
    const maxDraw = Math.min(mesh.triangles.length, 14000);
    const step = Math.max(1, Math.ceil(mesh.triangles.length / maxDraw));

    for (let i = 0; i < mesh.triangles.length; i += step) {
      const tri = mesh.triangles[i];
      const p = tri.map(project);
      const avgZ = (p[0].z + p[1].z + p[2].z) / 3;
      const normal = pccBeta21TriangleNormal(tri);
      triangles.push({p, tri, avgZ, normal});
    }

    triangles.sort((a,b) => a.avgZ - b.avgZ);

    ctx.save();
    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    for (const item of triangles) {
      const shade = pccBeta21Shade(item.normal, item.avgZ);
      ctx.beginPath();
      ctx.moveTo(item.p[0].x, item.p[0].y);
      ctx.lineTo(item.p[1].x, item.p[1].y);
      ctx.lineTo(item.p[2].x, item.p[2].y);
      ctx.closePath();
      ctx.fillStyle = shade.fill;
      ctx.fill();
      ctx.strokeStyle = shade.stroke;
      ctx.lineWidth = Math.max(0.7, 0.75 * dpr);
      ctx.stroke();
    }

    ctx.restore();

    if (typeof this.beta20DrawRulers === "function") {
      this.beta20DrawRulers(ctx, width, height, dpr);
    }

    const badge = this.shadowRoot?.querySelector(".pcc-beta20-render-badge");
    if (badge && typeof pccBeta20Dimensions === "function" && typeof pccBeta20Mm === "function") {
      const dims = pccBeta20Dimensions(mesh, this._transform || defaultTransform());
      badge.textContent = `3D Mesh · ${mesh.triangles.length} Dreiecke · ${pccBeta20Mm(dims.width)} × ${pccBeta20Mm(dims.depth)} × ${pccBeta20Mm(dims.height)}`;
    }
  };

  PCC_BETA21_STUDIO_CLASS.prototype.beta21SyncBuildplateState = function beta21SyncBuildplateState() {
    const root = this.shadowRoot;
    const buildplate = root?.querySelector(".buildplate");
    if (!buildplate) return;

    const hasMesh = Boolean(this._studioMesh?.triangles?.length);
    const validJob = pccBeta21ValidModelJob(this._activeJob);
    const primitive = pccBeta21IsPrimitiveJob(this._activeJob);

    buildplate.classList.toggle("pcc-beta21-empty", !hasMesh || !validJob);
    buildplate.classList.toggle("pcc-beta21-mesh", hasMesh && validJob && !primitive);
    buildplate.classList.toggle("pcc-beta21-primitive", hasMesh && validJob && primitive);

    const oldName = String(this._activeJob?.modelName || this._activeJob?.file_name || this._activeJob?.filename || this._activeJob?.name || this._activeJob?.model?.name || "").trim();
    const labelText = hasMesh && validJob ? oldName : "";

    let cleanLabel = buildplate.querySelector(".pcc-beta21-object-label");
    if (labelText) {
      if (!cleanLabel) {
        cleanLabel = document.createElement("div");
        cleanLabel.className = "pcc-beta21-object-label";
        buildplate.appendChild(cleanLabel);
      }
      cleanLabel.textContent = labelText;
    } else {
      cleanLabel?.remove();
    }

    let empty = buildplate.querySelector(".pcc-beta21-empty-note");
    if (!hasMesh || !validJob) {
      if (!empty) {
        empty = document.createElement("div");
        empty.className = "pcc-beta21-empty-note";
        buildplate.appendChild(empty);
      }
      empty.textContent = "Keine aktive Geometrie geladen";
    } else {
      empty?.remove();
    }

    const nativeLabel = root?.querySelector(".model-label");
    if (nativeLabel) nativeLabel.textContent = "";
  };

  PCC_BETA21_STUDIO_CLASS.prototype.cleanupBetaStudioUi = function beta21CleanupBetaStudioUi() {
    try {
      if (typeof PCC_BETA21_PREV_CLEANUP === "function") PCC_BETA21_PREV_CLEANUP.call(this);
    } catch (_error) {}

    this.beta21EnsureStyle();
    this.beta21SyncBuildplateState();
    this.queueMeshRender?.();
  };

  PCC_BETA21_STUDIO_CLASS.prototype.handleClick = function beta21HandleClick(event) {
    const action = event.target?.dataset?.action;
    if (String(action || "").startsWith("primitive-")) {
      event.preventDefault();
      event.stopPropagation();
      this.beta21SetPrimitiveActive(String(action).replace("primitive-",""));
      return;
    }
    if (action === "delete") {
      event.preventDefault();
      event.stopPropagation();
      this.deleteActiveJob();
      return;
    }
    return PCC_BETA21_PREV_HANDLE_CLICK.call(this, event);
  };

const PCC_BETA22_STUDIO_CLASS = customElements.get("printer-control-center-studio-card") || PrinterControlCenterStudioCard;
  const PCC_BETA22_PREV_CLEANUP = PCC_BETA22_STUDIO_CLASS.prototype.cleanupBetaStudioUi;
  const PCC_BETA22_PREV_HANDLE_CLICK = PCC_BETA22_STUDIO_CLASS.prototype.handleClick;
  const PCC_BETA22_PREV_RENDER_MESH = PCC_BETA22_STUDIO_CLASS.prototype.renderMeshCanvas;

  function pccBeta22Clamp(value, min, max) {
    const n = Number(value);
    if (!Number.isFinite(n)) return min;
    return Math.max(min, Math.min(max, n));
  }

  function pccBeta22HexToRgb(hex) {
    const clean = String(hex || "#00a9d6").trim().replace("#", "");
    const full = clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean;
    const value = Number.parseInt(full, 16);
    if (!Number.isFinite(value)) return {r:0, g:169, b:214};
    return {r:(value >> 16) & 255, g:(value >> 8) & 255, b:value & 255};
  }

  function pccBeta22RgbToHex(rgb) {
    const part = (v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0");
    return `#${part(rgb.r)}${part(rgb.g)}${part(rgb.b)}`;
  }

  function pccBeta22ShadeColor(hex, normal, depth) {
    const base = pccBeta22HexToRgb(hex);
    const light = [0.28, -0.44, 0.85];
    const dot = Math.max(0, normal[0] * light[0] + normal[1] * light[1] + normal[2] * light[2]);
    const factor = Math.max(0.38, Math.min(1.28, 0.54 + dot * 0.62 - depth * 0.055));
    const r = base.r * factor;
    const g = base.g * factor;
    const b = base.b * factor;
    return {
      fill: `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, 0.90)`,
      stroke: `rgba(${Math.min(255, Math.round(r + 30))}, ${Math.min(255, Math.round(g + 30))}, ${Math.min(255, Math.round(b + 30))}, ${0.18 + dot * 0.28})`
    };
  }

  function pccBeta22TriangleNormal(tri) {
    const a = tri[0], b = tri[1], c = tri[2];
    const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2];
    const vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
    const nx = uy * vz - uz * vy;
    const ny = uz * vx - ux * vz;
    const nz = ux * vy - uy * vx;
    const len = Math.hypot(nx, ny, nz) || 1;
    return [nx / len, ny / len, nz / len];
  }

  PCC_BETA22_STUDIO_CLASS.prototype.beta22ObjectColor = function beta22ObjectColor() {
    const fromJob = this._activeJob?.color || this._activeJob?.model?.color || this._activeJob?.filament_color || "";
    const value = String(this._pccBeta22ObjectColor || fromJob || "#00a9d6").trim();
    return /^#[0-9a-f]{6}$/i.test(value) ? value : "#00a9d6";
  };

  PCC_BETA22_STUDIO_CLASS.prototype.beta22SetObjectColor = function beta22SetObjectColor(color) {
    const clean = String(color || "").trim();
    if (!/^#[0-9a-f]{6}$/i.test(clean)) return;
    this._pccBeta22ObjectColor = clean;
    if (this._activeJob) {
      this._activeJob.color = clean;
      this._activeJob.model = {...(this._activeJob.model || {}), color: clean};
    }
    this.queueMeshRender?.();
    this.beta22UpdateToolbarState?.();
  };

  PCC_BETA22_STUDIO_CLASS.prototype.beta22EnsureStyle = function beta22EnsureStyle() {
    const root = this.shadowRoot;
    if (!root || root.querySelector("#pcc-beta22-top-toolbar-style")) return;

    const style = document.createElement("style");
    style.id = "pcc-beta22-top-toolbar-style";
    style.textContent = `
      .studio-grid{
        grid-template-columns:minmax(250px,280px) minmax(560px,1fr)!important;
      }

      @media(max-width:1100px){
        .studio-grid{grid-template-columns:1fr!important;}
      }

      .pcc-beta22-hidden-right-inspector{
        display:none!important;
      }

      .pcc-beta22-bottom-message,
      .pcc-beta22-hidden-status{
        display:none!important;
      }

      .pcc-beta22-top-toolbar{
        position:sticky;
        top:0;
        z-index:80;
        display:flex;
        align-items:center;
        gap:7px;
        padding:7px 8px;
        margin:0 0 8px;
        border:1px solid rgba(0,169,214,.28);
        border-radius:12px;
        background:linear-gradient(180deg,rgba(28,31,35,.94),rgba(14,18,22,.94));
        box-shadow:0 10px 28px rgba(0,0,0,.28);
        overflow-x:auto;
        scrollbar-width:thin;
      }

      .pcc-beta22-toolbar-group{
        display:flex;
        align-items:center;
        gap:5px;
        padding-right:7px;
        border-right:1px solid rgba(255,255,255,.16);
        flex:0 0 auto;
      }

      .pcc-beta22-toolbar-group:last-child{
        border-right:0;
      }

      .pcc-beta22-tool{
        width:34px;
        height:34px;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        border:1px solid rgba(255,255,255,.20);
        border-radius:7px;
        background:rgba(255,255,255,.055);
        color:rgba(255,255,255,.88);
        font-size:18px;
        line-height:1;
        cursor:pointer;
        user-select:none;
      }

      .pcc-beta22-tool:hover{
        border-color:rgba(0,195,255,.70);
        background:rgba(0,169,214,.16);
        color:#fff;
      }

      .pcc-beta22-tool.danger:hover{
        border-color:rgba(255,80,80,.76);
        background:rgba(255,80,80,.18);
      }

      .pcc-beta22-tool.active{
        border-color:rgba(0,235,255,.82);
        box-shadow:0 0 0 1px rgba(0,235,255,.32) inset;
      }

      .pcc-beta22-color{
        width:34px;
        height:34px;
        border:1px solid rgba(255,255,255,.25);
        border-radius:7px;
        padding:0;
        background:transparent;
        cursor:pointer;
      }

      .pcc-beta22-swatch{
        width:24px;
        height:24px;
        border-radius:6px;
        border:1px solid rgba(255,255,255,.28);
        cursor:pointer;
      }

      .pcc-beta22-swatch.active{
        outline:2px solid rgba(0,235,255,.78);
        outline-offset:1px;
      }

      .pcc-beta22-tool-label{
        font-size:10px;
        color:rgba(255,255,255,.58);
        white-space:nowrap;
        padding:0 2px;
      }

      .pcc-beta22-toolbar-spacer{
        width:6px;
        flex:0 0 auto;
      }
    `;
    root.appendChild(style);
  };

  PCC_BETA22_STUDIO_CLASS.prototype.beta22ToolbarHtml = function beta22ToolbarHtml() {
    const color = this.beta22ObjectColor();
    const swatches = ["#00a9d6", "#f44336", "#ff9800", "#ffeb3b", "#4caf50", "#2196f3", "#9c27b0", "#ffffff", "#111111"];
    const swatchHtml = swatches.map((value) => `
      <button class="pcc-beta22-swatch ${value.toLowerCase() === color.toLowerCase() ? "active" : ""}" data-beta22-color="${value}" title="Farbe ${value}" style="background:${value}"></button>
    `).join("");

    return `
      <div class="pcc-beta22-top-toolbar" aria-label="Studio Bearbeitungswerkzeuge">
        <div class="pcc-beta22-toolbar-group">
          <button class="pcc-beta22-tool" data-beta22-action="import" title="Importieren">▣</button>
          <button class="pcc-beta22-tool danger" data-beta22-action="delete" title="Löschen">⌫</button>
        </div>

        <div class="pcc-beta22-toolbar-group">
          <span class="pcc-beta22-tool-label">Position</span>
          <button class="pcc-beta22-tool" data-beta22-action="move-left" title="Links">←</button>
          <button class="pcc-beta22-tool" data-beta22-action="move-right" title="Rechts">→</button>
          <button class="pcc-beta22-tool" data-beta22-action="move-up" title="Nach hinten">↑</button>
          <button class="pcc-beta22-tool" data-beta22-action="move-down" title="Nach vorne">↓</button>
          <button class="pcc-beta22-tool" data-beta22-action="z-up" title="Z höher">⇧</button>
          <button class="pcc-beta22-tool" data-beta22-action="z-down" title="Z tiefer">⇩</button>
        </div>

        <div class="pcc-beta22-toolbar-group">
          <span class="pcc-beta22-tool-label">Drehen</span>
          <button class="pcc-beta22-tool" data-beta22-action="rot-x" title="Rot X +15°">⤸</button>
          <button class="pcc-beta22-tool" data-beta22-action="rot-y" title="Rot Y +15°">⤹</button>
          <button class="pcc-beta22-tool" data-beta22-action="rot-z" title="Rot Z +15°">↻</button>
          <button class="pcc-beta22-tool" data-beta22-action="lay-flat" title="Flach legen">▰</button>
        </div>

        <div class="pcc-beta22-toolbar-group">
          <span class="pcc-beta22-tool-label">Größe</span>
          <button class="pcc-beta22-tool" data-beta22-action="scale-down" title="Kleiner">−</button>
          <button class="pcc-beta22-tool" data-beta22-action="scale-up" title="Größer">＋</button>
          <button class="pcc-beta22-tool" data-beta22-action="stretch-x-up" title="Breite +">⇔</button>
          <button class="pcc-beta22-tool" data-beta22-action="stretch-y-up" title="Länge +">⇕</button>
          <button class="pcc-beta22-tool" data-beta22-action="stretch-z-up" title="Höhe +">⬍</button>
        </div>

        <div class="pcc-beta22-toolbar-group">
          <span class="pcc-beta22-tool-label">Spiegeln/Zerren</span>
          <button class="pcc-beta22-tool" data-beta22-action="mirror-x" title="Spiegel X">X</button>
          <button class="pcc-beta22-tool" data-beta22-action="mirror-y" title="Spiegel Y">Y</button>
          <button class="pcc-beta22-tool" data-beta22-action="mirror-z" title="Spiegel Z">Z</button>
          <button class="pcc-beta22-tool" data-beta22-action="skew-x" title="Zerr X +5°">▱</button>
          <button class="pcc-beta22-tool" data-beta22-action="skew-y" title="Zerr Y +5°">▰</button>
        </div>

        <div class="pcc-beta22-toolbar-group">
          <span class="pcc-beta22-tool-label">Ansicht</span>
          <button class="pcc-beta22-tool" data-beta22-action="center" title="Zentrieren">◎</button>
          <button class="pcc-beta22-tool" data-beta22-action="zoom-out" title="Zoom -">⌕−</button>
          <button class="pcc-beta22-tool" data-beta22-action="zoom-in" title="Zoom +">⌕＋</button>
          <button class="pcc-beta22-tool" data-beta22-action="reset" title="Reset">↺</button>
        </div>

        <div class="pcc-beta22-toolbar-group">
          <span class="pcc-beta22-tool-label">Farbe</span>
          <input class="pcc-beta22-color" type="color" value="${color}" title="Objekt einfärben">
          ${swatchHtml}
        </div>
      </div>
    `;
  };

  PCC_BETA22_STUDIO_CLASS.prototype.beta22InstallTopToolbar = function beta22InstallTopToolbar() {
    const root = this.shadowRoot;
    if (!root) return;

    let toolbar = root.querySelector(".pcc-beta22-top-toolbar");
    const shell = root.querySelector(".studio-shell") || root.querySelector(".studio-grid")?.parentElement || root.querySelector(".buildplate")?.parentElement;
    if (!shell) return;

    if (!toolbar) {
      const wrap = document.createElement("div");
      wrap.innerHTML = this.beta22ToolbarHtml().trim();
      toolbar = wrap.firstElementChild;
      shell.insertBefore(toolbar, shell.firstElementChild);
    } else {
      const colorInput = toolbar.querySelector(".pcc-beta22-color");
      if (colorInput) colorInput.value = this.beta22ObjectColor();
      toolbar.querySelectorAll("[data-beta22-color]").forEach((button) => {
        button.classList.toggle("active", String(button.dataset.beta22Color).toLowerCase() === this.beta22ObjectColor().toLowerCase());
      });
    }

    if (toolbar.dataset.beta22Bound === "1") return;
    toolbar.dataset.beta22Bound = "1";

    toolbar.addEventListener("click", (event) => {
      const colorButton = event.target?.closest?.("[data-beta22-color]");
      if (colorButton) {
        event.preventDefault();
        event.stopPropagation();
        this.beta22SetObjectColor(colorButton.dataset.beta22Color);
        return;
      }

      const button = event.target?.closest?.("[data-beta22-action]");
      if (!button) return;
      event.preventDefault();
      event.stopPropagation();
      this.beta22ApplyToolbarAction(button.dataset.beta22Action);
    });

    toolbar.addEventListener("input", (event) => {
      const input = event.target?.closest?.(".pcc-beta22-color");
      if (!input) return;
      event.preventDefault();
      event.stopPropagation();
      this.beta22SetObjectColor(input.value);
    });
  };

  PCC_BETA22_STUDIO_CLASS.prototype.beta22UpdateToolbarState = function beta22UpdateToolbarState() {
    const root = this.shadowRoot;
    const toolbar = root?.querySelector(".pcc-beta22-top-toolbar");
    if (!toolbar) return;
    const color = this.beta22ObjectColor();
    const colorInput = toolbar.querySelector(".pcc-beta22-color");
    if (colorInput && colorInput.value.toLowerCase() !== color.toLowerCase()) colorInput.value = color;
    toolbar.querySelectorAll("[data-beta22-color]").forEach((button) => {
      button.classList.toggle("active", String(button.dataset.beta22Color).toLowerCase() === color.toLowerCase());
    });
  };

  PCC_BETA22_STUDIO_CLASS.prototype.beta22Transform = function beta22Transform() {
    this._transform = {...defaultTransform(), ...(this._transform || {})};
    return this._transform;
  };

  PCC_BETA22_STUDIO_CLASS.prototype.beta22ApplyToolbarAction = function beta22ApplyToolbarAction(action) {
    const t = this.beta22Transform();
    const step = 5;
    const rot = 15;

    switch (action) {
      case "import":
        this.handleClick?.({target:{dataset:{action:"import"}}, preventDefault(){}, stopPropagation(){}});
        return;

      case "delete":
        this.deleteActiveJob?.();
        return;

      case "move-left": t.x = toNumber(t.x,0) - step; break;
      case "move-right": t.x = toNumber(t.x,0) + step; break;
      case "move-up": t.y = toNumber(t.y,0) - step; break;
      case "move-down": t.y = toNumber(t.y,0) + step; break;
      case "z-up": t.z = toNumber(t.z,0) + step; break;
      case "z-down": t.z = toNumber(t.z,0) - step; break;

      case "rot-x": t.rx = toNumber(t.rx,0) + rot; break;
      case "rot-y": t.ry = toNumber(t.ry,0) + rot; break;
      case "rot-z": t.rz = toNumber(t.rz,0) + rot; break;
      case "lay-flat": t.rx = 0; t.ry = 0; t.rz = 0; t.z = 0; break;

      case "scale-up": t.scale = pccBeta22Clamp(toNumber(t.scale,100) + 5, 5, 500); break;
      case "scale-down": t.scale = pccBeta22Clamp(toNumber(t.scale,100) - 5, 5, 500); break;
      case "stretch-x-up": t.sx = pccBeta22Clamp(toNumber(t.sx,100) + 5, 5, 500); break;
      case "stretch-y-up": t.sy = pccBeta22Clamp(toNumber(t.sy,100) + 5, 5, 500); break;
      case "stretch-z-up": t.sz = pccBeta22Clamp(toNumber(t.sz,100) + 5, 5, 500); break;

      case "mirror-x": t.mx = Number(t.mx) === -1 ? 1 : -1; break;
      case "mirror-y": t.my = Number(t.my) === -1 ? 1 : -1; break;
      case "mirror-z": t.mz = Number(t.mz) === -1 ? 1 : -1; break;
      case "skew-x": t.skewX = pccBeta22Clamp(toNumber(t.skewX,0) + 5, -80, 80); break;
      case "skew-y": t.skewY = pccBeta22Clamp(toNumber(t.skewY,0) + 5, -80, 80); break;

      case "center": t.x = 0; t.y = 0; t.z = 0; break;
      case "zoom-in": this._viewZoom = pccBeta22Clamp(toNumber(this._viewZoom,1) + 0.1, 0.25, 4); break;
      case "zoom-out": this._viewZoom = pccBeta22Clamp(toNumber(this._viewZoom,1) - 0.1, 0.25, 4); break;
      case "reset":
        this._transform = defaultTransform();
        this._viewZoom = 1;
        break;

      default:
        return;
    }

    if (this._activeJob) this._activeJob.transform = {...this._transform};
    this.queueMeshRender?.();
    this.beta22UpdateToolbarState?.();
  };

  PCC_BETA22_STUDIO_CLASS.prototype.beta22HideRightInspector = function beta22HideRightInspector() {
    const root = this.shadowRoot;
    if (!root) return;

    const panels = [...root.querySelectorAll(".studio-grid > .panel, .studio-grid > section, .studio-grid > aside, .panel")];
    for (const panel of panels) {
      const text = String(panel.textContent || "");
      const isRightInspector =
        /\bTransform\b/.test(text) ||
        /\bRot X\b/.test(text) ||
        /\bStretch X\b/.test(text) ||
        /\bZerr X\b/.test(text) ||
        /\bStudio Health\b/.test(text);

      if (isRightInspector && !panel.querySelector(".pcc-beta20-primitive-panel")) {
        panel.classList.add("pcc-beta22-hidden-right-inspector");
      }
    }
  };

  PCC_BETA22_STUDIO_CLASS.prototype.beta22RemoveBottomMessages = function beta22RemoveBottomMessages() {
    const root = this.shadowRoot;
    if (!root) return;

    const needles = [
      "Studio-Job aus Galerie/Dateimanager geladen",
      "Noch kein Dry-Run",
      "Plan prüfen verwendet",
      "Studio Health",
      "No health result yet",
      "Dry-Run",
      "dry-run",
      "Health prüfen"
    ];

    for (const node of [...root.querySelectorAll("p, .status, .muted, .alert, .studio-status, .health, .studio-health, .footer, .message, ha-alert")]) {
      const text = String(node.textContent || "");
      if (needles.some((needle) => text.includes(needle))) {
        if (node.closest(".pcc-beta22-top-toolbar")) continue;
        if (node.closest(".pcc-beta20-primitive-panel")) continue;
        node.classList.add("pcc-beta22-bottom-message");
      }
    }

    for (const node of [...root.querySelectorAll("div")]) {
      const text = String(node.textContent || "").trim();
      if (!text || text.length > 220) continue;
      if (needles.some((needle) => text.includes(needle))) {
        if (node.closest(".studio-grid")) continue;
        if (node.closest(".pcc-beta22-top-toolbar")) continue;
        node.classList.add("pcc-beta22-bottom-message");
      }
    }
  };

  PCC_BETA22_STUDIO_CLASS.prototype.beta22RenderMeshCanvas = function beta22RenderMeshCanvas() {
    const canvas = this.shadowRoot?.querySelector(".studio-mesh-canvas");
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    const width = Math.max(320, Math.round(rect.width * dpr));
    const height = Math.max(260, Math.round(rect.height * dpr));
    if (canvas.width !== width) canvas.width = width;
    if (canvas.height !== height) canvas.height = height;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0,0,width,height);

    const mesh = this._studioMesh;
    if (!mesh?.triangles?.length) return;

    const project = this.beta21ProjectPointFactory?.(width, height, dpr);
    if (typeof project !== "function") {
      PCC_BETA22_PREV_RENDER_MESH.call(this);
      return;
    }

    const triangles = [];
    const maxDraw = Math.min(mesh.triangles.length, 16000);
    const step = Math.max(1, Math.ceil(mesh.triangles.length / maxDraw));

    for (let i = 0; i < mesh.triangles.length; i += step) {
      const tri = mesh.triangles[i];
      const p = tri.map(project);
      const avgZ = (p[0].z + p[1].z + p[2].z) / 3;
      const normal = pccBeta22TriangleNormal(tri);
      triangles.push({p, tri, avgZ, normal});
    }

    triangles.sort((a,b) => a.avgZ - b.avgZ);

    const color = this.beta22ObjectColor();

    ctx.save();
    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    for (const item of triangles) {
      const shade = pccBeta22ShadeColor(color, item.normal, item.avgZ);
      ctx.beginPath();
      ctx.moveTo(item.p[0].x, item.p[0].y);
      ctx.lineTo(item.p[1].x, item.p[1].y);
      ctx.lineTo(item.p[2].x, item.p[2].y);
      ctx.closePath();
      ctx.fillStyle = shade.fill;
      ctx.fill();
      ctx.strokeStyle = shade.stroke;
      ctx.lineWidth = Math.max(0.55, 0.62 * dpr);
      ctx.stroke();
    }

    ctx.restore();

    if (typeof this.beta20DrawRulers === "function") {
      this.beta20DrawRulers(ctx, width, height, dpr);
    }

    const badge = this.shadowRoot?.querySelector(".pcc-beta20-render-badge");
    if (badge && typeof pccBeta20Dimensions === "function" && typeof pccBeta20Mm === "function") {
      const dims = pccBeta20Dimensions(mesh, this._transform || defaultTransform());
      badge.textContent = `3D Mesh · ${mesh.triangles.length} Dreiecke · ${pccBeta20Mm(dims.width)} × ${pccBeta20Mm(dims.depth)} × ${pccBeta20Mm(dims.height)}`;
      badge.style.borderColor = color;
    }
  };

  PCC_BETA22_STUDIO_CLASS.prototype.renderMeshCanvas = function beta22RenderMeshCanvasProxy() {
    return this.beta22RenderMeshCanvas();
  };

  PCC_BETA22_STUDIO_CLASS.prototype.cleanupBetaStudioUi = function beta22CleanupBetaStudioUi() {
    try {
      if (typeof PCC_BETA22_PREV_CLEANUP === "function") PCC_BETA22_PREV_CLEANUP.call(this);
    } catch (_error) {}

    this.beta22EnsureStyle();
    this.beta22InstallTopToolbar();
    this.beta22HideRightInspector();
    this.beta22RemoveBottomMessages();
    this.beta22UpdateToolbarState();
    this.queueMeshRender?.();
  };

  PCC_BETA22_STUDIO_CLASS.prototype.handleClick = function beta22HandleClick(event) {
    const action = event.target?.dataset?.action;
    if (String(action || "").startsWith("primitive-")) {
      return PCC_BETA22_PREV_HANDLE_CLICK.call(this, event);
    }
    return PCC_BETA22_PREV_HANDLE_CLICK.call(this, event);
  };

const PCC_BETA23_STUDIO_CLASS = customElements.get("printer-control-center-studio-card") || PrinterControlCenterStudioCard;
  const PCC_BETA23_PREV_CLEANUP = PCC_BETA23_STUDIO_CLASS.prototype.cleanupBetaStudioUi;
  const PCC_BETA23_PREV_APPLY_JOB = PCC_BETA23_STUDIO_CLASS.prototype.applyActiveJob;
  const PCC_BETA23_PREV_LOAD_JOBS = PCC_BETA23_STUDIO_CLASS.prototype.loadStudioJobs;
  const PCC_BETA23_PREV_RENDER_MESH = PCC_BETA23_STUDIO_CLASS.prototype.renderMeshCanvas;
  const PCC_BETA23_PREV_TOOLBAR_ACTION = PCC_BETA23_STUDIO_CLASS.prototype.beta22ApplyToolbarAction;

  if (typeof PCC_BETA20_PRIMITIVES === "object" && PCC_BETA20_PRIMITIVES.first_layer) {
    Object.assign(PCC_BETA20_PRIMITIVES.first_layer, {
      label: "First Layer",
      width: 256,
      depth: 256,
      height: 0.28,
      visualHeight: 0.75,
      type: "box"
    });
  }

  function pccBeta23Icon(name) {
    const common = 'viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
    const paths = {
      import: '<path d="M4 17v3h16v-3"/><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/>',
      delete: '<path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M8 10v9"/><path d="M16 10v9"/><path d="M6 7l1 14h10l1-14"/>',
      move: '<path d="M12 2v20"/><path d="M2 12h20"/><path d="m8 6 4-4 4 4"/><path d="m8 18 4 4 4-4"/><path d="m6 8-4 4 4 4"/><path d="m18 8 4 4-4 4"/>',
      zup: '<path d="M12 20V4"/><path d="m6 10 6-6 6 6"/><path d="M6 20h12"/>',
      zdown: '<path d="M12 4v16"/><path d="m6 14 6 6 6-6"/><path d="M6 4h12"/>',
      rotate: '<path d="M4 12a8 8 0 0 1 13.7-5.7"/><path d="M18 3v5h-5"/><path d="M20 12a8 8 0 0 1-13.7 5.7"/><path d="M6 21v-5h5"/>',
      layflat: '<path d="M4 16h16"/><path d="m7 12 10-4"/><path d="M7 12h10v4H7z"/>',
      scale: '<path d="M5 19 19 5"/><path d="M9 5h10v10"/><path d="M5 9v10h10"/>',
      stretchx: '<path d="M4 12h16"/><path d="m8 8-4 4 4 4"/><path d="m16 8 4 4-4 4"/>',
      stretchy: '<path d="M12 4v16"/><path d="m8 8 4-4 4 4"/><path d="m8 16 4 4 4-4"/>',
      mirror: '<path d="M12 3v18"/><path d="M4 7h5v10H4z"/><path d="M20 7h-5v10h5z"/>',
      skew: '<path d="M7 5h12l-2 14H5z"/><path d="M10 5 8 19"/>',
      center: '<circle cx="12" cy="12" r="7"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M2 12h4"/><path d="M18 12h4"/>',
      zoomin: '<circle cx="10" cy="10" r="6"/><path d="M14.5 14.5 21 21"/><path d="M10 7v6"/><path d="M7 10h6"/>',
      zoomout: '<circle cx="10" cy="10" r="6"/><path d="M14.5 14.5 21 21"/><path d="M7 10h6"/>',
      reset: '<path d="M4 4v6h6"/><path d="M20 20v-6h-6"/><path d="M20 10A8 8 0 0 0 6.3 4.7L4 7"/><path d="M4 14a8 8 0 0 0 13.7 5.3L20 17"/>',
      paint: '<path d="M4 14 14 4l6 6-10 10H4z"/><path d="M13 5l6 6"/><path d="M4 20h6"/>',
      cube: '<path d="M12 2 4 6v12l8 4 8-4V6z"/><path d="M12 22V10"/><path d="M4 6l8 4 8-4"/>',
      gallery: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m7 15 3-3 3 3 2-2 3 3"/><circle cx="8" cy="9" r="1.5"/>',
      reload: '<path d="M20 6v6h-6"/><path d="M4 18v-6h6"/><path d="M19 12a7 7 0 0 0-12-5l-3 3"/><path d="M5 12a7 7 0 0 0 12 5l3-3"/>'
    };
    return `<svg ${common}>${paths[name] || paths.cube}</svg>`;
  }

  function pccBeta23RenderableJob(job) {
    if (!job) return false;
    if (typeof pccBeta21IsPrimitiveJob === "function" && pccBeta21IsPrimitiveJob(job)) return true;

    const candidates = [
      job.archive_model_stl,
      job.sd_model_stl,
      job.model_stl,
      job.stl_url,
      job.mesh_url,
      job.geometry_url,
      job.model?.archive_model_stl,
      job.model?.sd_model_stl,
      job.model?.stl_url,
      job.model?.mesh_url,
      job.model?.geometry_url,
      job.preview_mesh_url,
      job.file_url,
      job.download_url,
    ];

    if (candidates.some((value) => String(value || "").trim() && /\.(stl|obj)(\?|#|$)/i.test(String(value)))) return true;

    const path = String(job.file_path || job.path || job.model?.path || "").trim();
    if (/\.(stl|obj)(\?|#|$)/i.test(path)) return true;

    return false;
  }

  function pccBeta23GetRenderableSource(job) {
    const values = [
      job?.archive_model_stl,
      job?.sd_model_stl,
      job?.model_stl,
      job?.stl_url,
      job?.mesh_url,
      job?.geometry_url,
      job?.model?.archive_model_stl,
      job?.model?.sd_model_stl,
      job?.model?.stl_url,
      job?.model?.mesh_url,
      job?.model?.geometry_url,
      job?.preview_mesh_url,
      job?.file_url,
      job?.download_url,
      job?.file_path,
      job?.path,
      job?.model?.path,
    ];
    return values.map((value) => String(value || "").trim()).find((value) => /\.(stl|obj)(\?|#|$)/i.test(value)) || "";
  }

  PCC_BETA23_STUDIO_CLASS.prototype.beta23EnsureStyle = function beta23EnsureStyle() {
    const root = this.shadowRoot;
    if (!root || root.querySelector("#pcc-beta23-grid-mouse-icons-style")) return;

    const style = document.createElement("style");
    style.id = "pcc-beta23-grid-mouse-icons-style";
    style.textContent = `
      .buildplate.pcc-beta9-buildplate .pcc-beta9-buildplate-skin::before{
        background-image:
          linear-gradient(rgba(255,255,255,.075) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.075) 1px, transparent 1px),
          linear-gradient(rgba(0,169,214,.12) 2px, transparent 2px),
          linear-gradient(90deg, rgba(0,169,214,.12) 2px, transparent 2px)!important;
        background-size:20px 20px,20px 20px,100px 100px,100px 100px!important;
        background-position:center center!important;
      }

      .studio-mesh-canvas{
        cursor:grab!important;
      }

      .buildplate.pcc-beta23-right-drag .studio-mesh-canvas,
      .buildplate.pcc-beta23-left-drag .studio-mesh-canvas{
        cursor:grabbing!important;
      }

      .pcc-beta23-top-toolbar{
        position:sticky;
        top:0;
        z-index:90;
        display:flex;
        align-items:center;
        gap:6px;
        padding:7px 8px;
        margin:0 0 8px;
        border:1px solid rgba(0,169,214,.32);
        border-radius:12px;
        background:linear-gradient(180deg,rgba(42,45,49,.96),rgba(18,22,27,.96));
        box-shadow:0 10px 28px rgba(0,0,0,.30);
        overflow-x:auto;
        scrollbar-width:thin;
      }

      .pcc-beta23-toolbar-group{
        display:flex;
        align-items:center;
        gap:5px;
        padding-right:7px;
        border-right:1px solid rgba(255,255,255,.16);
        flex:0 0 auto;
      }

      .pcc-beta23-toolbar-group:last-child{
        border-right:0;
      }

      .pcc-beta23-tool{
        width:35px;
        height:35px;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        border:1px solid rgba(255,255,255,.22);
        border-radius:7px;
        background:rgba(255,255,255,.055);
        color:rgba(255,255,255,.90);
        cursor:pointer;
        user-select:none;
      }

      .pcc-beta23-tool:hover{
        border-color:rgba(0,195,255,.72);
        background:rgba(0,169,214,.18);
        color:#fff;
      }

      .pcc-beta23-tool.danger:hover{
        border-color:rgba(255,80,80,.80);
        background:rgba(255,80,80,.20);
      }

      .pcc-beta23-color{
        width:35px;
        height:35px;
        border:1px solid rgba(255,255,255,.28);
        border-radius:7px;
        padding:0;
        background:transparent;
        cursor:pointer;
      }

      .pcc-beta23-swatch{
        width:24px;
        height:24px;
        border-radius:6px;
        border:1px solid rgba(255,255,255,.28);
        cursor:pointer;
      }

      .pcc-beta23-swatch.active{
        outline:2px solid rgba(0,235,255,.78);
        outline-offset:1px;
      }

      .pcc-beta23-ruler-label{
        font:700 12px Arial;
      }
    `;
    root.appendChild(style);
  };

  PCC_BETA23_STUDIO_CLASS.prototype.beta23ToolbarHtml = function beta23ToolbarHtml() {
    const color = this.beta22ObjectColor?.() || "#00a9d6";
    const swatches = ["#00a9d6", "#f44336", "#ff9800", "#ffeb3b", "#4caf50", "#2196f3", "#9c27b0", "#ffffff", "#111111"];
    const swatchHtml = swatches.map((value) => `
      <button class="pcc-beta23-swatch ${value.toLowerCase() === color.toLowerCase() ? "active" : ""}" data-beta23-color="${value}" title="Farbe ${value}" style="background:${value}"></button>
    `).join("");

    return `
      <div class="pcc-beta23-top-toolbar" aria-label="Studio Bearbeitungswerkzeuge">
        <div class="pcc-beta23-toolbar-group">
          <button class="pcc-beta23-tool" data-beta23-action="gallery-import" title="Aus Galerie importieren">${pccBeta23Icon("gallery")}</button>
          <button class="pcc-beta23-tool" data-beta23-action="reload-model" title="Modell neu laden">${pccBeta23Icon("reload")}</button>
          <button class="pcc-beta23-tool danger" data-beta23-action="delete" title="Löschen">${pccBeta23Icon("delete")}</button>
        </div>

        <div class="pcc-beta23-toolbar-group">
          <button class="pcc-beta23-tool" data-beta23-action="move-left" title="Links">${pccBeta23Icon("move")}</button>
          <button class="pcc-beta23-tool" data-beta23-action="z-up" title="Z höher">${pccBeta23Icon("zup")}</button>
          <button class="pcc-beta23-tool" data-beta23-action="z-down" title="Z tiefer">${pccBeta23Icon("zdown")}</button>
        </div>

        <div class="pcc-beta23-toolbar-group">
          <button class="pcc-beta23-tool" data-beta23-action="rot-x" title="Rot X +15°">${pccBeta23Icon("rotate")}</button>
          <button class="pcc-beta23-tool" data-beta23-action="rot-y" title="Rot Y +15°">${pccBeta23Icon("rotate")}</button>
          <button class="pcc-beta23-tool" data-beta23-action="rot-z" title="Rot Z +15°">${pccBeta23Icon("rotate")}</button>
          <button class="pcc-beta23-tool" data-beta23-action="lay-flat" title="Flach legen">${pccBeta23Icon("layflat")}</button>
        </div>

        <div class="pcc-beta23-toolbar-group">
          <button class="pcc-beta23-tool" data-beta23-action="scale-down" title="Kleiner">${pccBeta23Icon("zoomout")}</button>
          <button class="pcc-beta23-tool" data-beta23-action="scale-up" title="Größer">${pccBeta23Icon("zoomin")}</button>
          <button class="pcc-beta23-tool" data-beta23-action="stretch-x-up" title="Breite +">${pccBeta23Icon("stretchx")}</button>
          <button class="pcc-beta23-tool" data-beta23-action="stretch-y-up" title="Länge +">${pccBeta23Icon("stretchy")}</button>
          <button class="pcc-beta23-tool" data-beta23-action="stretch-z-up" title="Höhe +">${pccBeta23Icon("scale")}</button>
        </div>

        <div class="pcc-beta23-toolbar-group">
          <button class="pcc-beta23-tool" data-beta23-action="mirror-x" title="Spiegel X">${pccBeta23Icon("mirror")}</button>
          <button class="pcc-beta23-tool" data-beta23-action="mirror-y" title="Spiegel Y">${pccBeta23Icon("mirror")}</button>
          <button class="pcc-beta23-tool" data-beta23-action="mirror-z" title="Spiegel Z">${pccBeta23Icon("mirror")}</button>
          <button class="pcc-beta23-tool" data-beta23-action="skew-x" title="Zerr X +5°">${pccBeta23Icon("skew")}</button>
          <button class="pcc-beta23-tool" data-beta23-action="skew-y" title="Zerr Y +5°">${pccBeta23Icon("skew")}</button>
        </div>

        <div class="pcc-beta23-toolbar-group">
          <button class="pcc-beta23-tool" data-beta23-action="center" title="Zentrieren">${pccBeta23Icon("center")}</button>
          <button class="pcc-beta23-tool" data-beta23-action="zoom-out" title="Zoom -">${pccBeta23Icon("zoomout")}</button>
          <button class="pcc-beta23-tool" data-beta23-action="zoom-in" title="Zoom +">${pccBeta23Icon("zoomin")}</button>
          <button class="pcc-beta23-tool" data-beta23-action="reset" title="Reset">${pccBeta23Icon("reset")}</button>
        </div>

        <div class="pcc-beta23-toolbar-group">
          <button class="pcc-beta23-tool" data-beta23-action="paint" title="Einfärben">${pccBeta23Icon("paint")}</button>
          <input class="pcc-beta23-color" type="color" value="${color}" title="Objekt einfärben">
          ${swatchHtml}
        </div>
      </div>
    `;
  };

  PCC_BETA23_STUDIO_CLASS.prototype.beta23InstallToolbar = function beta23InstallToolbar() {
    const root = this.shadowRoot;
    if (!root) return;

    root.querySelectorAll(".pcc-beta22-top-toolbar").forEach((node) => node.remove());

    const shell = root.querySelector(".studio-shell") || root.querySelector(".studio-grid")?.parentElement || root.querySelector(".buildplate")?.parentElement;
    if (!shell) return;

    let toolbar = root.querySelector(".pcc-beta23-top-toolbar");
    if (!toolbar) {
      const wrap = document.createElement("div");
      wrap.innerHTML = this.beta23ToolbarHtml().trim();
      toolbar = wrap.firstElementChild;
      shell.insertBefore(toolbar, shell.firstElementChild);
    }

    const color = this.beta22ObjectColor?.() || "#00a9d6";
    const colorInput = toolbar.querySelector(".pcc-beta23-color");
    if (colorInput) colorInput.value = color;

    toolbar.querySelectorAll("[data-beta23-color]").forEach((button) => {
      button.classList.toggle("active", String(button.dataset.beta23Color).toLowerCase() === color.toLowerCase());
    });

    if (toolbar.dataset.beta23Bound === "1") return;
    toolbar.dataset.beta23Bound = "1";

    toolbar.addEventListener("click", (event) => {
      const colorButton = event.target?.closest?.("[data-beta23-color]");
      if (colorButton) {
        event.preventDefault();
        event.stopPropagation();
        this.beta22SetObjectColor?.(colorButton.dataset.beta23Color);
        this.beta23InstallToolbar();
        return;
      }

      const button = event.target?.closest?.("[data-beta23-action]");
      if (!button) return;
      event.preventDefault();
      event.stopPropagation();
      this.beta23ApplyToolbarAction(button.dataset.beta23Action);
    });

    toolbar.addEventListener("input", (event) => {
      const input = event.target?.closest?.(".pcc-beta23-color");
      if (!input) return;
      event.preventDefault();
      event.stopPropagation();
      this.beta22SetObjectColor?.(input.value);
      this.beta23InstallToolbar();
    });
  };

  PCC_BETA23_STUDIO_CLASS.prototype.beta23ApplyToolbarAction = function beta23ApplyToolbarAction(action) {
    if (action === "gallery-import") {
      this._pccBeta23AllowNextGalleryJob = true;
      const importButton = this.shadowRoot?.querySelector('[data-action="import"],[data-action="open-gallery"],[data-action="gallery"]');
      if (importButton) {
        importButton.click();
        return;
      }
      this.handleClick?.({target:{dataset:{action:"import"}}, preventDefault(){}, stopPropagation(){}});
      return;
    }

    if (action === "reload-model") {
      this._pccBeta21PrimitiveLocked = false;
      this.ensureStudioMeshLoaded?.(true);
      this.queueMeshRender?.();
      return;
    }

    if (action === "paint") {
      const input = this.shadowRoot?.querySelector(".pcc-beta23-color");
      input?.click?.();
      return;
    }

    if (typeof PCC_BETA23_PREV_TOOLBAR_ACTION === "function") {
      return PCC_BETA23_PREV_TOOLBAR_ACTION.call(this, action);
    }
  };

  PCC_BETA23_STUDIO_CLASS.prototype.beta23NormalizeFirstLayer = function beta23NormalizeFirstLayer() {
    const kind = String(this._activeJob?.primitive_kind || this._activeJob?.primitive?.kind || "").trim();
    if (kind !== "first_layer") return;
    const width = Number(this._studioMesh?.meta?.width_mm || 0);
    const depth = Number(this._studioMesh?.meta?.depth_mm || 0);
    if (Math.round(width) === 256 && Math.round(depth) === 256) return;

    const mesh = typeof pccBeta20PrimitiveMesh === "function" ? pccBeta20PrimitiveMesh("first_layer") : null;
    if (!mesh?.triangles?.length) return;

    this._studioMesh = mesh;
    this._studioMeshJobId = String(this._activeJob?.id || "primitive://first_layer");
    this._activeJob.primitive = {
      ...(this._activeJob.primitive || {}),
      kind: "first_layer",
      label: "First Layer",
      width_mm: 256,
      depth_mm: 256,
      height_mm: 0.28
    };
    this._activeJob.model = {
      ...(this._activeJob.model || {}),
      source: "primitive",
      primitive_kind: "first_layer"
    };
  };

  PCC_BETA23_STUDIO_CLASS.prototype.beta23DrawGrid = function beta23DrawGrid(ctx, width, height, dpr) {
    ctx.save();
    const minor = 20 * dpr;
    const major = 100 * dpr;
    ctx.lineWidth = Math.max(0.5, 0.55 * dpr);

    for (let x = width / 2 % minor; x < width; x += minor) {
      ctx.beginPath();
      ctx.strokeStyle = "rgba(255,255,255,.055)";
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    for (let y = height / 2 % minor; y < height; y += minor) {
      ctx.beginPath();
      ctx.strokeStyle = "rgba(255,255,255,.055)";
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    ctx.lineWidth = Math.max(0.8, 0.9 * dpr);
    for (let x = width / 2 % major; x < width; x += major) {
      ctx.beginPath();
      ctx.strokeStyle = "rgba(0,169,214,.15)";
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    for (let y = height / 2 % major; y < height; y += major) {
      ctx.beginPath();
      ctx.strokeStyle = "rgba(0,169,214,.15)";
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
    ctx.restore();
  };

  PCC_BETA23_STUDIO_CLASS.prototype.beta23DrawReadableRulers = function beta23DrawReadableRulers(ctx, canvasWidth, canvasHeight, dpr) {
    const mesh = this._studioMesh;
    if (!mesh?.triangles?.length || typeof pccBeta20Dimensions !== "function" || typeof pccBeta20Mm !== "function") return;

    const dims = pccBeta20Dimensions(mesh, this._transform || defaultTransform());
    const labelBox = (text, x, y, align="center") => {
      ctx.save();
      ctx.font = `${Math.round(12*dpr)}px Arial`;
      ctx.textAlign = align;
      ctx.textBaseline = "middle";
      const metrics = ctx.measureText(text);
      const padX = 6*dpr;
      const padY = 4*dpr;
      const w = metrics.width + padX * 2;
      const h = 20*dpr;
      const left = align === "center" ? x - w/2 : align === "right" ? x - w : x;
      ctx.fillStyle = "rgba(0,0,0,.62)";
      ctx.strokeStyle = "rgba(255,80,80,.55)";
      ctx.lineWidth = Math.max(1, dpr);
      ctx.beginPath();
      ctx.roundRect(left, y - h/2, w, h, 7*dpr);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "rgba(255,255,255,.92)";
      ctx.fillText(text, x, y);
      ctx.restore();
    };

    const bottom = canvasHeight - 28*dpr;
    const left = 42*dpr;
    const right = canvasWidth - 42*dpr;
    const top = 62*dpr;

    ctx.save();
    ctx.strokeStyle = "rgba(255,255,255,.35)";
    ctx.lineWidth = Math.max(1, dpr);

    ctx.beginPath();
    ctx.moveTo(60*dpr, bottom);
    ctx.lineTo(canvasWidth - 60*dpr, bottom);
    ctx.stroke();

    ctx.strokeStyle = "rgba(255,80,80,.95)";
    ctx.lineWidth = Math.max(2, 2*dpr);
    ctx.beginPath();
    ctx.moveTo(60*dpr, bottom - 10*dpr);
    ctx.lineTo(60*dpr, bottom + 10*dpr);
    ctx.moveTo(canvasWidth - 60*dpr, bottom - 10*dpr);
    ctx.lineTo(canvasWidth - 60*dpr, bottom + 10*dpr);
    ctx.stroke();

    ctx.strokeStyle = "rgba(255,255,255,.35)";
    ctx.lineWidth = Math.max(1, dpr);
    ctx.beginPath();
    ctx.moveTo(left, top);
    ctx.lineTo(left, canvasHeight - 60*dpr);
    ctx.moveTo(right, top);
    ctx.lineTo(right, canvasHeight - 60*dpr);
    ctx.stroke();

    ctx.strokeStyle = "rgba(255,80,80,.95)";
    ctx.lineWidth = Math.max(2, 2*dpr);
    ctx.beginPath();
    ctx.moveTo(left - 10*dpr, top);
    ctx.lineTo(left + 10*dpr, top);
    ctx.moveTo(left - 10*dpr, canvasHeight - 60*dpr);
    ctx.lineTo(left + 10*dpr, canvasHeight - 60*dpr);
    ctx.moveTo(right - 10*dpr, top);
    ctx.lineTo(right + 10*dpr, top);
    ctx.moveTo(right - 10*dpr, canvasHeight - 60*dpr);
    ctx.lineTo(right + 10*dpr, canvasHeight - 60*dpr);
    ctx.stroke();

    ctx.restore();

    labelBox(`Breite ${pccBeta20Mm(dims.width)}`, canvasWidth/2, bottom - 18*dpr);
    labelBox(`Länge ${pccBeta20Mm(dims.depth)}`, left + 50*dpr, top + 28*dpr, "left");
    labelBox(`Höhe ${pccBeta20Mm(dims.height)}`, right - 50*dpr, top + 28*dpr, "right");
  };

  PCC_BETA23_STUDIO_CLASS.prototype.renderMeshCanvas = function beta23RenderMeshCanvas() {
    const canvas = this.shadowRoot?.querySelector(".studio-mesh-canvas");
    if (!canvas) return;

    this.beta23NormalizeFirstLayer();

    const rect = canvas.getBoundingClientRect();
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    const width = Math.max(320, Math.round(rect.width * dpr));
    const height = Math.max(260, Math.round(rect.height * dpr));
    if (canvas.width !== width) canvas.width = width;
    if (canvas.height !== height) canvas.height = height;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0,0,width,height);
    this.beta23DrawGrid(ctx, width, height, dpr);

    const mesh = this._studioMesh;
    if (!mesh?.triangles?.length) return;

    const project = this.beta21ProjectPointFactory?.(width, height, dpr);
    if (typeof project !== "function") {
      PCC_BETA23_PREV_RENDER_MESH.call(this);
      return;
    }

    const triangles = [];
    const maxDraw = Math.min(mesh.triangles.length, 16000);
    const step = Math.max(1, Math.ceil(mesh.triangles.length / maxDraw));

    for (let i = 0; i < mesh.triangles.length; i += step) {
      const tri = mesh.triangles[i];
      const p = tri.map(project);
      const avgZ = (p[0].z + p[1].z + p[2].z) / 3;
      const normal = typeof pccBeta22TriangleNormal === "function" ? pccBeta22TriangleNormal(tri) : [0,0,1];
      triangles.push({p, tri, avgZ, normal});
    }

    triangles.sort((a,b) => a.avgZ - b.avgZ);

    const color = this.beta22ObjectColor?.() || "#00a9d6";

    ctx.save();
    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    for (const item of triangles) {
      const shade = typeof pccBeta22ShadeColor === "function"
        ? pccBeta22ShadeColor(color, item.normal, item.avgZ)
        : {fill:"rgba(0,169,214,.86)", stroke:"rgba(0,218,255,.25)"};

      ctx.beginPath();
      ctx.moveTo(item.p[0].x, item.p[0].y);
      ctx.lineTo(item.p[1].x, item.p[1].y);
      ctx.lineTo(item.p[2].x, item.p[2].y);
      ctx.closePath();
      ctx.fillStyle = shade.fill;
      ctx.fill();
      ctx.strokeStyle = shade.stroke;
      ctx.lineWidth = Math.max(0.55, 0.62 * dpr);
      ctx.stroke();
    }

    ctx.restore();

    this.beta23DrawReadableRulers(ctx, width, height, dpr);

    const badge = this.shadowRoot?.querySelector(".pcc-beta20-render-badge");
    if (badge && typeof pccBeta20Dimensions === "function" && typeof pccBeta20Mm === "function") {
      const dims = pccBeta20Dimensions(mesh, this._transform || defaultTransform());
      badge.textContent = `3D Mesh · ${mesh.triangles.length} Dreiecke · ${pccBeta20Mm(dims.width)} × ${pccBeta20Mm(dims.depth)} × ${pccBeta20Mm(dims.height)}`;
      badge.style.borderColor = color;
    }
  };

  PCC_BETA23_STUDIO_CLASS.prototype.beta23BindMouseTools = function beta23BindMouseTools() {
    const root = this.shadowRoot;
    const buildplate = root?.querySelector(".buildplate");
    const canvas = root?.querySelector(".studio-mesh-canvas");
    if (!buildplate || !canvas || buildplate.dataset.beta23MouseBound === "1") return;

    buildplate.dataset.beta23MouseBound = "1";

    const preventMenu = (event) => {
      if (event.target?.closest?.(".buildplate")) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    buildplate.addEventListener("contextmenu", preventMenu, {capture:true});
    canvas.addEventListener("contextmenu", preventMenu, {capture:true});
    root.addEventListener("contextmenu", preventMenu, {capture:true});

    const state = {active:false, button:-1, x:0, y:0};

    canvas.addEventListener("pointerdown", (event) => {
      if (event.button !== 0 && event.button !== 2) return;
      event.preventDefault();
      event.stopPropagation();

      state.active = true;
      state.button = event.button;
      state.x = event.clientX;
      state.y = event.clientY;

      buildplate.classList.toggle("pcc-beta23-left-drag", event.button === 0);
      buildplate.classList.toggle("pcc-beta23-right-drag", event.button === 2);

      try { canvas.setPointerCapture(event.pointerId); } catch (_error) {}
    }, {capture:true});

    canvas.addEventListener("pointermove", (event) => {
      if (!state.active) return;
      event.preventDefault();
      event.stopPropagation();

      const dx = event.clientX - state.x;
      const dy = event.clientY - state.y;
      state.x = event.clientX;
      state.y = event.clientY;

      this._transform = {...defaultTransform(), ...(this._transform || {})};
      if (state.button === 0) {
        this._transform.rz = toNumber(this._transform.rz,0) + dx * 0.35;
        this._transform.rx = toNumber(this._transform.rx,0) - dy * 0.25;
      } else if (state.button === 2) {
        this._transform.x = toNumber(this._transform.x,0) + dx;
        this._transform.y = toNumber(this._transform.y,0) + dy;
      }

      if (this._activeJob) this._activeJob.transform = {...this._transform};
      this.queueMeshRender?.();
    }, {capture:true});

    const finish = (event) => {
      if (!state.active) return;
      event.preventDefault?.();
      event.stopPropagation?.();

      state.active = false;
      state.button = -1;
      buildplate.classList.remove("pcc-beta23-left-drag");
      buildplate.classList.remove("pcc-beta23-right-drag");
      try { canvas.releasePointerCapture(event.pointerId); } catch (_error) {}
    };

    canvas.addEventListener("pointerup", finish, {capture:true});
    canvas.addEventListener("pointercancel", finish, {capture:true});
    canvas.addEventListener("pointerleave", finish, {capture:true});
  };

  PCC_BETA23_STUDIO_CLASS.prototype.applyActiveJob = function beta23ApplyActiveJob(job, options={}) {
    if (!pccBeta23RenderableJob(job)) {
      if (typeof this.beta21HardClearObjectState === "function") {
        this.beta21HardClearObjectState("Nicht renderbarer Galerie-/Phantom-Job entfernt.");
      }
      if (options?.render !== false) this.render();
      return;
    }

    const source = pccBeta23GetRenderableSource(job);
    if (source) {
      job.archive_model_stl = job.archive_model_stl || source;
      job.model = {...(job.model || {}), archive_model_stl: job.model?.archive_model_stl || source};
    }

    return PCC_BETA23_PREV_APPLY_JOB.call(this, job, options);
  };

  PCC_BETA23_STUDIO_CLASS.prototype.loadStudioJobs = async function beta23LoadStudioJobs(...args) {
    const result = await PCC_BETA23_PREV_LOAD_JOBS.apply(this, args);

    if (Array.isArray(this._jobs)) {
      this._jobs = this._jobs.filter((job) => pccBeta23RenderableJob(job));
    }

    if (this._activeJob && !pccBeta23RenderableJob(this._activeJob)) {
      if (typeof this.beta21HardClearObjectState === "function") {
        this.beta21HardClearObjectState("Alter Phantom-Job entfernt. Bitte Modell aus Galerie importieren.");
      }
      this.render();
    }

    return result;
  };

  PCC_BETA23_STUDIO_CLASS.prototype.cleanupBetaStudioUi = function beta23CleanupBetaStudioUi() {
    try {
      if (typeof PCC_BETA23_PREV_CLEANUP === "function") PCC_BETA23_PREV_CLEANUP.call(this);
    } catch (_error) {}

    this.beta23EnsureStyle();
    this.beta23InstallToolbar();
    this.beta23BindMouseTools();

    const root = this.shadowRoot;
    root?.querySelectorAll(".context-menu,.pcc-context-menu,.gallery-context-menu,[data-context-menu]").forEach((node) => node.remove());
    root?.querySelectorAll(".model-label").forEach((node) => {
      if (!this._studioMesh?.triangles?.length) node.textContent = "";
    });

    this.queueMeshRender?.();
  };

const PCC_BETA26_STUDIO_CLASS = customElements.get("printer-control-center-studio-card") || PrinterControlCenterStudioCard;
  const PCC_BETA26_PREV_ENSURE_MESH = PCC_BETA26_STUDIO_CLASS.prototype.ensureStudioMeshLoaded;
  const PCC_BETA26_PREV_RENDER_MESH = PCC_BETA26_STUDIO_CLASS.prototype.renderMeshCanvas;
  const PCC_BETA26_PREV_BETA7_IMPORT_PLAN = PCC_BETA26_STUDIO_CLASS.prototype.beta7ImportPlan;

  function pccBeta26PrimitiveKind(job) {
    return String(job?.primitive?.kind || job?.primitive_kind || job?.model?.primitive_kind || job?.model?.primitive || "")
      .trim()
      .replace(/^primitive-/, "")
      .replace(/-/g, "_");
  }

  function pccBeta26IsPrimitiveJob(job) {
    const source = String(job?.source || job?.origin || job?.model?.source || "").trim();
    return source === "primitive" || Boolean(pccBeta26PrimitiveKind(job));
  }

  function pccBeta26RenderablePath(job) {
    const values = [
      job?.archive_model_stl,
      job?.sd_model_stl,
      job?.model_stl,
      job?.stl_url,
      job?.mesh_url,
      job?.geometry_url,
      job?.preview_mesh_url,
      job?.download_url,
      job?.file_url,
      job?.file_path,
      job?.path,
      job?.model?.archive_model_stl,
      job?.model?.sd_model_stl,
      job?.model?.stl_url,
      job?.model?.mesh_url,
      job?.model?.geometry_url,
      job?.model?.download_url,
      job?.model?.file_url,
      job?.model?.path,
      job?.filename,
      job?.file_name,
      job?.name,
      job?.model?.name
    ];

    return values.map((value) => String(value || "").trim()).find((value) => /\.(3mf|stl|obj)(\?|#|$)/i.test(value)) || "";
  }

  function pccBeta26IsRenderableJob(job) {
    if (!job) return false;
    if (pccBeta26IsPrimitiveJob(job)) return true;
    return Boolean(pccBeta26RenderablePath(job));
  }

  function pccBeta26ToolIcon(name) {
    const common = 'viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
    const icons = {
      import:'<path d="M4 17v3h16v-3"/><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/>',
      primitive:'<path d="M12 2 4 6v12l8 4 8-4V6z"/><path d="M12 22V10"/><path d="M4 6l8 4 8-4"/>',
      move:'<path d="M12 2v20"/><path d="M2 12h20"/><path d="m8 6 4-4 4 4"/><path d="m8 18 4 4 4-4"/><path d="m6 8-4 4 4 4"/><path d="m18 8 4 4-4 4"/>',
      rotate:'<path d="M4 12a8 8 0 0 1 13.7-5.7"/><path d="M18 3v5h-5"/><path d="M20 12a8 8 0 0 1-13.7 5.7"/><path d="M6 21v-5h5"/>',
      scale:'<path d="M5 19 19 5"/><path d="M9 5h10v10"/><path d="M5 9v10h10"/>',
      mirror:'<path d="M12 3v18"/><path d="M4 7h5v10H4z"/><path d="M20 7h-5v10h5z"/>',
      view:'<circle cx="10" cy="10" r="6"/><path d="M14.5 14.5 21 21"/><path d="M10 7v6"/><path d="M7 10h6"/>',
      color:'<path d="M4 14 14 4l6 6-10 10H4z"/><path d="M13 5l6 6"/><path d="M4 20h6"/>',
      delete:'<path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M8 10v9"/><path d="M16 10v9"/><path d="M6 7l1 14h10l1-14"/>',
      reload:'<path d="M20 6v6h-6"/><path d="M4 18v-6h6"/><path d="M19 12a7 7 0 0 0-12-5l-3 3"/><path d="M5 12a7 7 0 0 0 12 5l3-3"/>',
      center:'<circle cx="12" cy="12" r="7"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M2 12h4"/><path d="M18 12h4"/>'
    };
    return `<svg ${common}>${icons[name] || icons.primitive}</svg>`;
  }

  function pccBeta26MenuButton(action, icon, label) {
    return `<button class="pcc-beta26-menu-action" data-beta26-action="${action}" title="${label}">${pccBeta26ToolIcon(icon)}<span>${label}</span></button>`;
  }

  PCC_BETA26_STUDIO_CLASS.prototype.beta26EnsurePrimitiveMesh = function beta26EnsurePrimitiveMesh() {
    if (!pccBeta26IsPrimitiveJob(this._activeJob)) return false;

    const kind = pccBeta26PrimitiveKind(this._activeJob) || "cube";
    const mesh = typeof pccBeta20PrimitiveMesh === "function" ? pccBeta20PrimitiveMesh(kind) : null;
    if (!mesh?.triangles?.length) return false;

    this._studioMesh = mesh;
    this._studioMeshJobId = String(this._activeJob?.id || `primitive://${kind}`);
    this._studioMeshUrl = "";
    this._studioMeshError = "";
    this._studioModelImageUrl = "";
    return true;
  };

  PCC_BETA26_STUDIO_CLASS.prototype.beta26EnsureStyle = function beta26EnsureStyle() {
    const root = this.shadowRoot;
    if (!root || root.querySelector("#pcc-beta26-compact-toolbar-single-render-style")) return;

    const style = document.createElement("style");
    style.id = "pcc-beta26-compact-toolbar-single-render-style";
    style.textContent = `
      .pcc-beta22-top-toolbar,
      .pcc-beta23-top-toolbar{display:none!important;}

      .studio-grid{grid-template-columns:minmax(250px,280px) minmax(560px,1fr)!important;}
      .studio-grid > aside.panel:last-child{display:none!important;}

      .studio-shell > .status,
      .studio-shell .buildplate-wrap > .status,
      .studio-shell .buildplate-wrap > .plan-note,
      .studio-shell .buildplate-wrap > .plan-summary{display:none!important;}

      .pcc-beta26-toolbar{
        position:sticky;top:0;z-index:180;display:flex;align-items:center;gap:0;
        min-height:38px;padding:0;margin:0 0 8px;
        border-top:1px solid rgba(255,255,255,.18);
        border-bottom:1px solid rgba(0,169,214,.42);
        background:linear-gradient(180deg,rgba(47,50,54,.98),rgba(24,28,33,.98));
        box-shadow:0 8px 22px rgba(0,0,0,.26);
        overflow:visible;
      }

      .pcc-beta26-menu,.pcc-beta26-direct{position:relative;flex:0 0 auto;border-right:1px solid rgba(255,255,255,.18);}
      .pcc-beta26-menu > summary,.pcc-beta26-direct{
        list-style:none;width:38px;height:36px;display:grid;place-items:center;
        border:0;border-radius:0;background:rgba(255,255,255,.045);
        color:rgba(255,255,255,.86);cursor:pointer;padding:0;
      }
      .pcc-beta26-menu > summary::-webkit-details-marker{display:none;}
      .pcc-beta26-menu[open] > summary,.pcc-beta26-menu > summary:hover,.pcc-beta26-direct:hover{background:rgba(0,169,214,.18);color:#fff;}

      .pcc-beta26-menu-body{
        position:absolute;top:37px;left:0;z-index:240;display:grid;
        min-width:190px;padding:6px;gap:3px;
        border:1px solid rgba(0,169,214,.45);
        background:rgba(22,26,31,.98);
        box-shadow:0 18px 38px rgba(0,0,0,.44);
      }

      .pcc-beta26-menu-action{
        display:grid;grid-template-columns:28px 1fr;gap:7px;align-items:center;
        min-height:32px;padding:4px 8px;border:1px solid transparent;border-radius:0;
        background:transparent;color:rgba(255,255,255,.86);text-align:left;cursor:pointer;
      }
      .pcc-beta26-menu-action:hover{border-color:rgba(0,169,214,.55);background:rgba(0,169,214,.14);color:#fff;}
      .pcc-beta26-danger:hover{border-color:rgba(255,80,80,.75)!important;background:rgba(255,80,80,.16)!important;}

      .pcc-beta26-color-row{display:flex;align-items:center;gap:5px;flex-wrap:wrap;max-width:230px;}
      .pcc-beta26-color{width:32px;height:28px;padding:0;border:1px solid rgba(255,255,255,.26);border-radius:0;background:transparent;cursor:pointer;}
      .pcc-beta26-swatch{width:24px;height:24px;border:1px solid rgba(255,255,255,.28);border-radius:0;cursor:pointer;}
      .pcc-beta26-swatch.active{outline:2px solid rgba(0,235,255,.80);outline-offset:1px;}

      .buildplate.pcc-beta26-single-frame .model,
      .buildplate.pcc-beta26-single-frame .model-label,
      .buildplate.pcc-beta26-single-frame .studio-model-image{opacity:0!important;pointer-events:none!important;}

      .buildplate.pcc-beta26-single-frame .studio-mesh-canvas{opacity:1!important;display:block!important;z-index:31!important;}

      .pcc-beta9-plate-selector,.pcc-beta9-plate-selector *{pointer-events:auto!important;}
      .pcc-beta9-plate-dropdown{z-index:260!important;}
    `;
    root.appendChild(style);
  };

  PCC_BETA26_STUDIO_CLASS.prototype.beta26ToolbarHtml = function beta26ToolbarHtml() {
    const color = this.beta22ObjectColor?.() || "#00a9d6";
    const swatches = ["#00a9d6", "#f44336", "#ff9800", "#ffeb3b", "#4caf50", "#2196f3", "#9c27b0", "#ffffff", "#111111"];
    const swatchHtml = swatches.map((value) => `<button class="pcc-beta26-swatch ${value.toLowerCase() === color.toLowerCase() ? "active" : ""}" data-beta26-color="${value}" title="${value}" style="background:${value}"></button>`).join("");

    return `
      <div class="pcc-beta26-toolbar" aria-label="Studio Werkzeugleiste">
        <button class="pcc-beta26-direct" data-beta26-action="open-import" title="Aus Galerie importieren">${pccBeta26ToolIcon("import")}</button>
        <details class="pcc-beta26-menu"><summary title="Primitive">${pccBeta26ToolIcon("primitive")}</summary><div class="pcc-beta26-menu-body">
          ${pccBeta26MenuButton("primitive-cube","primitive","Würfel")}
          ${pccBeta26MenuButton("primitive-cuboid","primitive","Quader")}
          ${pccBeta26MenuButton("primitive-cylinder","primitive","Zylinder")}
          ${pccBeta26MenuButton("primitive-first-layer","primitive","First Layer")}
        </div></details>
        <details class="pcc-beta26-menu"><summary title="Verschieben">${pccBeta26ToolIcon("move")}</summary><div class="pcc-beta26-menu-body">
          ${pccBeta26MenuButton("move-left","move","Links")}
          ${pccBeta26MenuButton("move-right","move","Rechts")}
          ${pccBeta26MenuButton("move-up","move","Nach hinten")}
          ${pccBeta26MenuButton("move-down","move","Nach vorne")}
          ${pccBeta26MenuButton("z-up","move","Z höher")}
          ${pccBeta26MenuButton("z-down","move","Z tiefer")}
          ${pccBeta26MenuButton("center","center","Zentrieren")}
        </div></details>
        <details class="pcc-beta26-menu"><summary title="Drehen">${pccBeta26ToolIcon("rotate")}</summary><div class="pcc-beta26-menu-body">
          ${pccBeta26MenuButton("rot-x","rotate","Rot X +15°")}
          ${pccBeta26MenuButton("rot-y","rotate","Rot Y +15°")}
          ${pccBeta26MenuButton("rot-z","rotate","Rot Z +15°")}
          ${pccBeta26MenuButton("lay-flat","rotate","Flach legen")}
        </div></details>
        <details class="pcc-beta26-menu"><summary title="Skalieren / Strecken">${pccBeta26ToolIcon("scale")}</summary><div class="pcc-beta26-menu-body">
          ${pccBeta26MenuButton("scale-down","scale","Kleiner")}
          ${pccBeta26MenuButton("scale-up","scale","Größer")}
          ${pccBeta26MenuButton("stretch-x-up","scale","Breite +")}
          ${pccBeta26MenuButton("stretch-y-up","scale","Länge +")}
          ${pccBeta26MenuButton("stretch-z-up","scale","Höhe +")}
        </div></details>
        <details class="pcc-beta26-menu"><summary title="Spiegeln / Zerren">${pccBeta26ToolIcon("mirror")}</summary><div class="pcc-beta26-menu-body">
          ${pccBeta26MenuButton("mirror-x","mirror","Spiegel X")}
          ${pccBeta26MenuButton("mirror-y","mirror","Spiegel Y")}
          ${pccBeta26MenuButton("mirror-z","mirror","Spiegel Z")}
          ${pccBeta26MenuButton("skew-x","mirror","Zerr X +5°")}
          ${pccBeta26MenuButton("skew-y","mirror","Zerr Y +5°")}
        </div></details>
        <details class="pcc-beta26-menu"><summary title="Ansicht">${pccBeta26ToolIcon("view")}</summary><div class="pcc-beta26-menu-body">
          ${pccBeta26MenuButton("zoom-out","view","Zoom -")}
          ${pccBeta26MenuButton("zoom-in","view","Zoom +")}
          ${pccBeta26MenuButton("reload-model","reload","Modell neu laden")}
          ${pccBeta26MenuButton("reset","view","Reset")}
        </div></details>
        <details class="pcc-beta26-menu"><summary title="Objektfarbe">${pccBeta26ToolIcon("color")}</summary><div class="pcc-beta26-menu-body">
          <div class="pcc-beta26-color-row"><input class="pcc-beta26-color" type="color" value="${color}" title="Objekt einfärben">${swatchHtml}</div>
        </div></details>
        <button class="pcc-beta26-direct pcc-beta26-danger" data-beta26-action="delete" title="Löschen">${pccBeta26ToolIcon("delete")}</button>
      </div>
    `;
  };

  PCC_BETA26_STUDIO_CLASS.prototype.beta26InstallToolbar = function beta26InstallToolbar() {
    const root = this.shadowRoot;
    if (!root) return;

    root.querySelectorAll(".pcc-beta22-top-toolbar,.pcc-beta23-top-toolbar").forEach((node) => node.remove());

    const shell = root.querySelector(".studio-shell") || root.querySelector(".studio-grid")?.parentElement || root.querySelector(".buildplate")?.parentElement;
    if (!shell) return;

    let toolbar = root.querySelector(".pcc-beta26-toolbar");
    if (!toolbar) {
      const wrap = document.createElement("div");
      wrap.innerHTML = this.beta26ToolbarHtml().trim();
      toolbar = wrap.firstElementChild;
      shell.insertBefore(toolbar, shell.firstElementChild);
    }

    if (toolbar.dataset.beta26Bound === "1") return;
    toolbar.dataset.beta26Bound = "1";

    toolbar.addEventListener("click", (event) => {
      const colorButton = event.target?.closest?.("[data-beta26-color]");
      if (colorButton) {
        event.preventDefault();
        event.stopPropagation();
        this.beta22SetObjectColor?.(colorButton.dataset.beta26Color);
        this.queueMeshRender?.();
        return;
      }

      const button = event.target?.closest?.("[data-beta26-action]");
      if (!button) return;
      event.preventDefault();
      event.stopPropagation();
      this.beta26CloseToolbarMenus(button.closest("details"));
      this.beta26ApplyToolbarAction(button.dataset.beta26Action);
    });

    toolbar.addEventListener("input", (event) => {
      const input = event.target?.closest?.(".pcc-beta26-color");
      if (!input) return;
      event.preventDefault();
      event.stopPropagation();
      this.beta22SetObjectColor?.(input.value);
      this.queueMeshRender?.();
    });
  };

  PCC_BETA26_STUDIO_CLASS.prototype.beta26CloseToolbarMenus = function beta26CloseToolbarMenus(keep=null) {
    this.shadowRoot?.querySelectorAll(".pcc-beta26-menu[open]").forEach((details) => {
      if (details !== keep) details.removeAttribute("open");
    });
  };

  PCC_BETA26_STUDIO_CLASS.prototype.beta26ApplyToolbarAction = function beta26ApplyToolbarAction(action) {
    const text = String(action || "");

    if (text === "open-import") {
      this.openBeta7ImportAssistant?.();
      return;
    }

    if (text.startsWith("primitive-")) {
      this.beta21SetPrimitiveActive?.(text.replace("primitive-", ""));
      return;
    }

    if (text === "delete") {
      this.deleteActiveJob?.();
      return;
    }

    if (text === "reload-model") {
      this._pccBeta26MeshFailedKey = "";
      this.ensureStudioMeshLoaded?.(true);
      return;
    }

    this.beta22ApplyToolbarAction?.(text);
  };

  PCC_BETA26_STUDIO_CLASS.prototype.beta26CleanWorkflowTopbar = function beta26CleanWorkflowTopbar() {
    const topbar = this.shadowRoot?.querySelector(".studio-topbar");
    if (!topbar) return;

    const keepLabels = new Set(["Importieren", "Löschen", "Plan prüfen", "Health prüfen", "Jobs neu laden"]);
    for (const button of [...topbar.querySelectorAll("button")]) {
      const label = String(button.textContent || "").trim();
      if (!keepLabels.has(label)) {
        button.remove();
        continue;
      }
      if (label === "Importieren") {
        button.className = "action";
        button.dataset.action = "import";
      }
      if (label === "Löschen") {
        button.className = "action";
        button.dataset.action = "delete";
      }
    }
  };

  PCC_BETA26_STUDIO_CLASS.prototype.beta9SetPlate = function beta26SetPlate(id) {
    const plate = typeof pccBeta9PlateById === "function" ? pccBeta9PlateById(id) : {id, name:id, short:id, label:id, surface:"smooth"};
    this._studioBuildPlate = plate.id;

    if (this._activeJob) {
      this._activeJob.profile_context = this._activeJob.profile_context || {};
      this._activeJob.profile_context.build_plate = {id:plate.id,name:plate.name,short:plate.short,label:plate.label,surface:plate.surface};
      this._activeJob.profile_context.build_plate_id = plate.id;
      this._activeJob.build_plate = plate.name;
      this._activeJob.build_plate_id = plate.id;
      try { this.scheduleActiveJobSave?.(); } catch (_error) {}
    }

    this._status = `Druckplatte gewählt: ${plate.name}.`;
    try { this.beta9ApplyBuildplateVisual?.(); } catch (_error) {}
    this.shadowRoot?.querySelectorAll(".pcc-beta9-plate-dropdown").forEach((node) => node.setAttribute("hidden", ""));
    this.queueMeshRender?.();
  };

  PCC_BETA26_STUDIO_CLASS.prototype.queueMeshRender = function beta26QueueMeshRender() {
    this._pccBeta26CanvasDirty = true;
    if (this._pccBeta26RenderFrame) return;

    this._pccBeta26RenderFrame = requestAnimationFrame(() => {
      this._pccBeta26RenderFrame = 0;
      if (!this._pccBeta26CanvasDirty) return;
      this._pccBeta26CanvasDirty = false;
      this.renderMeshCanvas?.();
    });
  };

  PCC_BETA26_STUDIO_CLASS.prototype.renderMeshCanvas = function beta26RenderMeshCanvas() {
    if (this._pccBeta26Rendering) return;
    this._pccBeta26Rendering = true;

    try {
      this.beta26EnsurePrimitiveMesh();
      if (typeof PCC_BETA26_PREV_RENDER_MESH === "function") PCC_BETA26_PREV_RENDER_MESH.call(this);
      const buildplate = this.shadowRoot?.querySelector(".buildplate");
      if (buildplate) buildplate.classList.add("pcc-beta26-single-frame");
    } finally {
      this._pccBeta26Rendering = false;
    }
  };

  PCC_BETA26_STUDIO_CLASS.prototype.ensureStudioMeshLoaded = async function beta26EnsureStudioMeshLoaded(force=false) {
    const job = this._activeJob;

    if (pccBeta26IsPrimitiveJob(job)) {
      this.beta26EnsurePrimitiveMesh();
      this.queueMeshRender?.();
      return;
    }

    if (!pccBeta26IsRenderableJob(job)) return;

    const key = this.meshJobKey?.() || pccBeta26RenderablePath(job);
    if (!force && this._pccBeta26MeshFailedKey && this._pccBeta26MeshFailedKey === key) return;

    await PCC_BETA26_PREV_ENSURE_MESH.call(this, force);

    if (!this._studioMesh?.triangles?.length && this._studioMeshError) {
      this._pccBeta26MeshFailedKey = key;
    } else {
      this._pccBeta26MeshFailedKey = "";
    }
  };

  PCC_BETA26_STUDIO_CLASS.prototype.applyActiveJob = function beta26ApplyActiveJob(job, options={}) {
    if (!pccBeta26IsRenderableJob(job)) {
      this._activeJob = null;
      this._activeJobId = "";
      this._jobs = [];
      this._studioMesh = null;
      this._studioMeshJobId = "";
      this._studioMeshUrl = "";
      this._studioMeshError = "";
      this._studioModelImageUrl = "";
      if (options?.render !== false) this.render();
      return;
    }

    const result = PCC_BETA23_PREV_APPLY_JOB.call(this, job, options);

    if (!pccBeta26IsPrimitiveJob(this._activeJob || job)) {
      this._pccBeta26MeshFailedKey = "";
      window.setTimeout(() => this.ensureStudioMeshLoaded?.(false), 0);
    }

    return result;
  };

  PCC_BETA26_STUDIO_CLASS.prototype.loadStudioJobs = async function beta26LoadStudioJobs(...args) {
    const result = await PCC_BETA23_PREV_LOAD_JOBS.apply(this, args);
    if (Array.isArray(this._jobs)) this._jobs = this._jobs.filter((job) => pccBeta26IsRenderableJob(job));
    return result;
  };

  PCC_BETA26_STUDIO_CLASS.prototype.beta7ImportPlan = async function beta26Beta7ImportPlan(plan) {
    await PCC_BETA26_PREV_BETA7_IMPORT_PLAN.call(this, plan);
    this._pccBeta26MeshFailedKey = "";
    window.setTimeout(() => this.ensureStudioMeshLoaded?.(true), 0);
  };

  PCC_BETA26_STUDIO_CLASS.prototype.handleContextMenu = function beta26HandleContextMenu(event) {
    if (event.target?.closest?.(".buildplate")) {
      event.preventDefault();
      event.stopPropagation();
      this._studioContextMenu = null;
    }
  };

  PCC_BETA26_STUDIO_CLASS.prototype.cleanupBetaStudioUi = function beta26CleanupBetaStudioUi() {
    this.beta26EnsureStyle();
    this.beta26CleanWorkflowTopbar();

    try { this.beta9EnsureStyle?.(); } catch (_error) {}
    try { this.beta9InstallSelector?.(); } catch (_error) {}
    try { this.beta9ApplyBuildplateVisual?.(); } catch (_error) {}
    try { this.beta20EnsureStyle?.(); } catch (_error) {}
    try { this.beta20InjectPrimitivePanel?.(); } catch (_error) {}
    try { this.beta21EnsureStyle?.(); } catch (_error) {}
    try { this.beta21SyncBuildplateState?.(); } catch (_error) {}
    try { this.beta22EnsureStyle?.(); } catch (_error) {}
    try { this.beta22HideRightInspector?.(); } catch (_error) {}
    try { this.beta22RemoveBottomMessages?.(); } catch (_error) {}

    this.beta26InstallToolbar();
    this.beta23BindMouseTools?.();

    const root = this.shadowRoot;
    root?.querySelectorAll(".pcc-beta22-top-toolbar,.pcc-beta23-top-toolbar,.context-menu,.pcc-context-menu,.gallery-context-menu,[data-context-menu]").forEach((node) => node.remove());

    const buildplate = root?.querySelector(".buildplate");
    if (buildplate) buildplate.classList.add("pcc-beta26-single-frame");
  };

const PCC_BETA27_STUDIO_CLASS = customElements.get("printer-control-center-studio-card") || PrinterControlCenterStudioCard;
  const PCC_BETA27_PREV_CLEANUP = PCC_BETA27_STUDIO_CLASS.prototype.cleanupBetaStudioUi;
  const PCC_BETA27_PREV_OPEN_IMPORT = PCC_BETA27_STUDIO_CLASS.prototype.openBeta7ImportAssistant;
  const PCC_BETA27_PREV_BETA26_INSTALL_TOOLBAR = PCC_BETA27_STUDIO_CLASS.prototype.beta26InstallToolbar;
  const PCC_BETA27_PREV_BETA26_CLOSE_MENUS = PCC_BETA27_STUDIO_CLASS.prototype.beta26CloseToolbarMenus;

  PCC_BETA27_STUDIO_CLASS.prototype.beta27EnsureStyle = function beta27EnsureStyle() {
    const root = this.shadowRoot;
    if (!root || root.querySelector("#pcc-beta27-import-popup-menu-style")) return;

    const style = document.createElement("style");
    style.id = "pcc-beta27-import-popup-menu-style";
    style.textContent = `
      .studio-shell{
        position:relative!important;
      }

      .pcc-beta26-toolbar{
        overflow:visible!important;
      }

      .pcc-beta26-menu[open] > summary{
        background:rgba(0,169,214,.26)!important;
        color:#fff!important;
      }

      .pcc-beta26-menu-body{
        z-index:520!important;
      }

      .pcc-beta27-import-modal{
        position:absolute;
        inset:48px 10px 10px 10px;
        z-index:500;
        display:flex;
        align-items:flex-start;
        justify-content:center;
        padding:18px;
        background:rgba(0,0,0,.54);
        border:1px solid rgba(0,169,214,.28);
        backdrop-filter:blur(2px);
      }

      .pcc-beta27-import-dialog{
        position:relative;
        width:min(980px,96%);
        max-height:calc(100% - 8px);
        overflow:auto;
        border:1px solid rgba(0,169,214,.62);
        background:linear-gradient(180deg,rgba(16,22,27,.98),rgba(7,12,16,.98));
        box-shadow:0 24px 58px rgba(0,0,0,.58);
        padding:14px;
      }

      .pcc-beta27-import-close{
        position:sticky;
        top:0;
        float:right;
        z-index:2;
        width:34px;
        height:30px;
        border:1px solid rgba(0,169,214,.55);
        border-radius:0;
        background:rgba(0,48,64,.88);
        color:#fff;
        cursor:pointer;
        font-weight:800;
      }

      .pcc-beta27-import-close:hover{
        background:rgba(0,119,158,.92);
      }

      .pcc-beta27-import-dialog h1,
      .pcc-beta27-import-dialog h2,
      .pcc-beta27-import-dialog h3{
        margin-top:0!important;
      }

      .pcc-beta27-import-dialog button,
      .pcc-beta27-import-dialog select,
      .pcc-beta27-import-dialog input{
        max-width:100%;
      }
    `;
    root.appendChild(style);
  };

  PCC_BETA27_STUDIO_CLASS.prototype.beta27ToolbarMenuKey = function beta27ToolbarMenuKey(details, index) {
    const title = details?.querySelector?.("summary")?.getAttribute?.("title") || "";
    return title || `menu-${index}`;
  };

  PCC_BETA27_STUDIO_CLASS.prototype.beta27StoreOpenMenus = function beta27StoreOpenMenus() {
    const root = this.shadowRoot;
    if (!root) return;
    this._pccBeta27OpenMenus = [...root.querySelectorAll(".pcc-beta26-menu")]
      .map((details, index) => ({details, key:this.beta27ToolbarMenuKey(details,index)}))
      .filter((entry) => entry.details.open)
      .map((entry) => entry.key);
  };

  PCC_BETA27_STUDIO_CLASS.prototype.beta27RestoreOpenMenus = function beta27RestoreOpenMenus() {
    const root = this.shadowRoot;
    const open = new Set(this._pccBeta27OpenMenus || []);
    if (!root || !open.size) return;

    [...root.querySelectorAll(".pcc-beta26-menu")].forEach((details, index) => {
      const key = this.beta27ToolbarMenuKey(details, index);
      if (open.has(key)) details.setAttribute("open", "");
    });
  };

  PCC_BETA27_STUDIO_CLASS.prototype.beta27BindToolbarMenus = function beta27BindToolbarMenus() {
    const root = this.shadowRoot;
    const toolbar = root?.querySelector(".pcc-beta26-toolbar");
    if (!toolbar || toolbar.dataset.beta27MenuStable === "1") return;

    toolbar.dataset.beta27MenuStable = "1";

    toolbar.addEventListener("pointerdown", (event) => {
      event.stopPropagation();
    }, {capture:true});

    toolbar.addEventListener("click", (event) => {
      event.stopPropagation();
      window.setTimeout(() => this.beta27StoreOpenMenus(), 0);
    }, {capture:true});

    toolbar.querySelectorAll(".pcc-beta26-menu").forEach((details, index) => {
      details.dataset.beta27MenuKey = this.beta27ToolbarMenuKey(details, index);
      details.addEventListener("toggle", () => {
        window.setTimeout(() => this.beta27StoreOpenMenus(), 0);
      });
    });

    root.addEventListener("click", (event) => {
      if (event.target?.closest?.(".pcc-beta26-toolbar")) return;
      if (event.target?.closest?.(".pcc-beta27-import-modal")) return;
      this._pccBeta27OpenMenus = [];
      root.querySelectorAll(".pcc-beta26-menu[open]").forEach((details) => details.removeAttribute("open"));
    }, {capture:true});
  };

  PCC_BETA27_STUDIO_CLASS.prototype.beta26CloseToolbarMenus = function beta27CloseToolbarMenus(keep=null) {
    const root = this.shadowRoot;
    if (!root) return;

    root.querySelectorAll(".pcc-beta26-menu[open]").forEach((details) => {
      if (keep && details === keep) return;
      details.removeAttribute("open");
    });

    window.setTimeout(() => this.beta27StoreOpenMenus(), 0);

    if (!keep && typeof PCC_BETA27_PREV_BETA26_CLOSE_MENUS === "function") {
      try { PCC_BETA27_PREV_BETA26_CLOSE_MENUS.call(this, keep); } catch (_error) {}
    }
  };

  PCC_BETA27_STUDIO_CLASS.prototype.beta27FindImportAssistantNode = function beta27FindImportAssistantNode() {
    const root = this.shadowRoot;
    if (!root) return null;

    const existing = root.querySelector(".pcc-beta27-import-dialog > *:not(.pcc-beta27-import-close)");
    if (existing) return existing;

    const titleNode = [...root.querySelectorAll("h1,h2,h3,strong,b,div,section")]
      .find((node) => String(node.textContent || "").trim().startsWith("Studio-Import-Assistent"));

    if (!titleNode) return null;

    let panel = titleNode;
    for (let i = 0; i < 5; i++) {
      const parent = panel.parentElement;
      if (!parent) break;
      const text = String(parent.textContent || "");
      if (!text.includes("Studio-Import-Assistent")) break;
      if (parent.classList?.contains?.("studio-shell")) break;
      if (parent.classList?.contains?.("studio-grid")) break;
      if (parent.classList?.contains?.("buildplate")) break;
      if (parent.classList?.contains?.("pcc-beta27-import-dialog")) break;
      panel = parent;
      if (text.includes("Galerie/Archiv") || text.includes("Galerie / Archiv") || text.includes("3MF hochladen") || text.includes("Verknüpfen")) break;
    }

    return panel;
  };

  PCC_BETA27_STUDIO_CLASS.prototype.beta27PromoteImportAssistant = function beta27PromoteImportAssistant() {
    const root = this.shadowRoot;
    if (!root) return;

    const panel = this.beta27FindImportAssistantNode();
    if (!panel) return;

    if (panel.closest?.(".pcc-beta27-import-dialog")) return;

    const shell = root.querySelector(".studio-shell") || root.querySelector(".studio-grid")?.parentElement || root.host;
    if (!shell) return;

    let overlay = root.querySelector(".pcc-beta27-import-modal");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "pcc-beta27-import-modal";
      overlay.innerHTML = `
        <div class="pcc-beta27-import-dialog" role="dialog" aria-modal="true">
          <button class="pcc-beta27-import-close" type="button" title="Schließen">×</button>
        </div>
      `;
      shell.appendChild(overlay);

      overlay.addEventListener("click", (event) => {
        if (event.target === overlay || event.target?.closest?.(".pcc-beta27-import-close")) {
          event.preventDefault();
          event.stopPropagation();
          this.beta27CloseImportPopup();
        }
      }, {capture:true});
    }

    const dialog = overlay.querySelector(".pcc-beta27-import-dialog");
    if (!dialog) return;

    dialog.appendChild(panel);
    this._pccBeta27ImportOpen = true;

    dialog.addEventListener("click", (event) => {
      const button = event.target?.closest?.("button");
      if (!button) return;
      const label = String(button.textContent || "").trim();
      if (label === "Schließen") {
        window.setTimeout(() => this.beta27CloseImportPopup(), 0);
      }
    }, {capture:true, once:false});
  };

  PCC_BETA27_STUDIO_CLASS.prototype.beta27CloseImportPopup = function beta27CloseImportPopup() {
    const root = this.shadowRoot;
    this._pccBeta27ImportOpen = false;

    for (const key of ["_beta7ImportOpen", "_studioImportOpen", "_importAssistantOpen", "_showImportAssistant"]) {
      try { this[key] = false; } catch (_error) {}
    }

    root?.querySelectorAll(".pcc-beta27-import-modal").forEach((node) => node.remove());
  };

  PCC_BETA27_STUDIO_CLASS.prototype.openBeta7ImportAssistant = function beta27OpenImportAssistant(...args) {
    this._pccBeta27ImportOpen = true;

    let result;
    if (typeof PCC_BETA27_PREV_OPEN_IMPORT === "function") {
      result = PCC_BETA27_PREV_OPEN_IMPORT.apply(this, args);
    }

    const promote = () => this.beta27PromoteImportAssistant();
    window.requestAnimationFrame(promote);
    window.setTimeout(promote, 50);
    window.setTimeout(promote, 250);

    return result;
  };

  PCC_BETA27_STUDIO_CLASS.prototype.beta26InstallToolbar = function beta27InstallToolbar(...args) {
    if (typeof PCC_BETA27_PREV_BETA26_INSTALL_TOOLBAR === "function") {
      PCC_BETA27_PREV_BETA26_INSTALL_TOOLBAR.apply(this, args);
    }
    this.beta27BindToolbarMenus();
    this.beta27RestoreOpenMenus();
  };

  PCC_BETA27_STUDIO_CLASS.prototype.cleanupBetaStudioUi = function beta27CleanupBetaStudioUi(...args) {
    if (typeof PCC_BETA27_PREV_CLEANUP === "function") {
      PCC_BETA27_PREV_CLEANUP.apply(this, args);
    }

    this.beta27EnsureStyle();
    this.beta27BindToolbarMenus();
    this.beta27RestoreOpenMenus();

    if (this._pccBeta27ImportOpen) {
      window.requestAnimationFrame(() => this.beta27PromoteImportAssistant());
    }
  };

const PCC_BETA28_STUDIO_CLASS = customElements.get("printer-control-center-studio-card") || PrinterControlCenterStudioCard;
  const PCC_BETA28_PREV_CLEANUP = PCC_BETA28_STUDIO_CLASS.prototype.cleanupBetaStudioUi;
  const PCC_BETA28_PREV_OPEN_IMPORT = PCC_BETA28_STUDIO_CLASS.prototype.openBeta7ImportAssistant;

  function pccBeta28Icon(name) {
    const common = 'viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
    const icons = {
      import:'<path d="M4 17v3h16v-3"/><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/>',
      cube:'<path d="M12 2 4 6v12l8 4 8-4V6z"/><path d="M12 22V10"/><path d="M4 6l8 4 8-4"/>',
      move:'<path d="M12 2v20"/><path d="M2 12h20"/><path d="m8 6 4-4 4 4"/><path d="m8 18 4 4 4-4"/><path d="m6 8-4 4 4 4"/><path d="m18 8 4 4-4 4"/>',
      rotate:'<path d="M4 12a8 8 0 0 1 13.7-5.7"/><path d="M18 3v5h-5"/><path d="M20 12a8 8 0 0 1-13.7 5.7"/><path d="M6 21v-5h5"/>',
      scale:'<path d="M5 19 19 5"/><path d="M9 5h10v10"/><path d="M5 9v10h10"/>',
      mirror:'<path d="M12 3v18"/><path d="M4 7h5v10H4z"/><path d="M20 7h-5v10h5z"/>',
      view:'<circle cx="10" cy="10" r="6"/><path d="M14.5 14.5 21 21"/><path d="M10 7v6"/><path d="M7 10h6"/>',
      color:'<path d="M4 14 14 4l6 6-10 10H4z"/><path d="M13 5l6 6"/><path d="M4 20h6"/>',
      trash:'<path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M8 10v9"/><path d="M16 10v9"/><path d="M6 7l1 14h10l1-14"/>',
      reload:'<path d="M20 6v6h-6"/><path d="M4 18v-6h6"/><path d="M19 12a7 7 0 0 0-12-5l-3 3"/><path d="M5 12a7 7 0 0 0 12 5l3-3"/>',
      center:'<circle cx="12" cy="12" r="7"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M2 12h4"/><path d="M18 12h4"/>'
    };
    return `<svg ${common}>${icons[name] || icons.cube}</svg>`;
  }

  function pccBeta28ActionButton(action, icon, label) {
    return `<button class="pcc-beta28-menu-action" data-beta28-action="${action}" title="${label}">${pccBeta28Icon(icon)}<span>${label}</span></button>`;
  }

  PCC_BETA28_STUDIO_CLASS.prototype.beta28EnsureStyle = function beta28EnsureStyle() {
    const root = this.shadowRoot;
    if (!root || root.querySelector("#pcc-beta28-polished-toolbar-import-style")) return;

    const style = document.createElement("style");
    style.id = "pcc-beta28-polished-toolbar-import-style";
    style.textContent = `
      .studio-shell{position:relative!important;}

      .pcc-beta22-top-toolbar,
      .pcc-beta23-top-toolbar,
      .pcc-beta26-toolbar{
        display:none!important;
      }

      .pcc-beta28-toolbar{
        position:sticky;
        top:0;
        z-index:620;
        display:flex;
        align-items:center;
        gap:0;
        min-height:34px;
        padding:0;
        margin:0 0 7px;
        border-top:1px solid rgba(255,255,255,.16);
        border-bottom:1px solid rgba(0,169,214,.46);
        background:linear-gradient(180deg,rgba(45,48,52,.98),rgba(21,25,30,.98));
        box-shadow:0 8px 20px rgba(0,0,0,.26);
        overflow:visible;
      }

      .pcc-beta28-import-main{
        height:33px;
        min-width:82px;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        gap:6px;
        padding:0 9px;
        border:0;
        border-right:1px solid rgba(255,255,255,.16);
        border-radius:0;
        background:rgba(0,118,150,.24);
        color:#fff;
        font-size:12px;
        font-weight:700;
        cursor:pointer;
      }

      .pcc-beta28-menu-wrap{
        position:relative;
        flex:0 0 auto;
        border-right:1px solid rgba(255,255,255,.16);
      }

      .pcc-beta28-main{
        width:34px;
        height:33px;
        display:grid;
        place-items:center;
        border:0;
        border-radius:0;
        background:rgba(255,255,255,.045);
        color:rgba(255,255,255,.86);
        cursor:pointer;
        padding:0;
      }

      .pcc-beta28-main:hover,
      .pcc-beta28-main.active,
      .pcc-beta28-import-main:hover{
        background:rgba(0,169,214,.20);
        color:#fff;
      }

      .pcc-beta28-delete{
        color:rgba(255,210,210,.95);
      }

      .pcc-beta28-delete:hover{
        background:rgba(210,50,50,.24)!important;
      }

      .pcc-beta28-menu-body{
        position:absolute;
        top:34px;
        left:0;
        z-index:700;
        min-width:172px;
        max-width:260px;
        max-height:280px;
        overflow:auto;
        padding:5px;
        display:none;
        grid-template-columns:1fr;
        gap:3px;
        border:1px solid rgba(0,169,214,.55);
        background:rgba(15,20,25,.98);
        box-shadow:0 16px 34px rgba(0,0,0,.42);
      }

      .pcc-beta28-menu-wrap.open > .pcc-beta28-menu-body{
        display:grid;
      }

      .pcc-beta28-menu-action{
        min-height:29px;
        display:grid;
        grid-template-columns:24px 1fr;
        gap:6px;
        align-items:center;
        padding:3px 7px;
        border:1px solid transparent;
        border-radius:0;
        background:transparent;
        color:rgba(255,255,255,.88);
        font-size:12px;
        text-align:left;
        cursor:pointer;
        white-space:nowrap;
      }

      .pcc-beta28-menu-action:hover{
        border-color:rgba(0,169,214,.55);
        background:rgba(0,169,214,.14);
        color:#fff;
      }

      .pcc-beta28-color-row{
        display:flex;
        align-items:center;
        gap:5px;
        flex-wrap:wrap;
        width:168px;
      }

      .pcc-beta28-color{
        width:28px;
        height:25px;
        padding:0;
        border:1px solid rgba(255,255,255,.26);
        border-radius:0;
        background:transparent;
        cursor:pointer;
      }

      .pcc-beta28-swatch{
        width:22px;
        height:22px;
        border:1px solid rgba(255,255,255,.28);
        border-radius:0;
        cursor:pointer;
      }

      .pcc-beta28-swatch.active{
        outline:2px solid rgba(0,235,255,.82);
        outline-offset:1px;
      }

      .pcc-beta27-import-modal{
        position:absolute!important;
        inset:46px auto auto 50%!important;
        transform:translateX(-50%)!important;
        width:min(760px,calc(100% - 24px))!important;
        max-height:min(70vh,calc(100% - 62px))!important;
        z-index:650!important;
        display:block!important;
        padding:0!important;
        background:transparent!important;
        border:0!important;
        backdrop-filter:none!important;
      }

      .pcc-beta27-import-dialog{
        width:100%!important;
        max-height:min(70vh,620px)!important;
        overflow:auto!important;
        padding:12px!important;
        border:1px solid rgba(0,169,214,.68)!important;
        border-radius:12px!important;
        background:linear-gradient(180deg,rgba(14,21,27,.98),rgba(5,11,15,.98))!important;
        box-shadow:0 20px 52px rgba(0,0,0,.58)!important;
      }

      .pcc-beta27-import-close{
        position:absolute!important;
        right:10px!important;
        top:10px!important;
        width:30px!important;
        height:28px!important;
        border-radius:6px!important;
        background:rgba(0,72,96,.90)!important;
      }

      .pcc-beta27-import-dialog h1,
      .pcc-beta27-import-dialog h2,
      .pcc-beta27-import-dialog h3{
        margin:0 40px 10px 0!important;
        font-size:18px!important;
        line-height:1.2!important;
      }

      .pcc-beta27-import-dialog p,
      .pcc-beta27-import-dialog div,
      .pcc-beta27-import-dialog span{
        font-size:12px;
      }

      .pcc-beta27-import-dialog button{
        min-height:28px!important;
        padding:4px 9px!important;
        border-radius:7px!important;
        border:1px solid rgba(0,169,214,.55)!important;
        background:rgba(0,64,86,.70)!important;
        color:#fff!important;
        font-size:12px!important;
        font-weight:600!important;
        cursor:pointer!important;
      }

      .pcc-beta27-import-dialog button:hover{
        background:rgba(0,110,148,.85)!important;
      }

      .pcc-beta27-import-dialog button:disabled{
        opacity:.45!important;
        cursor:not-allowed!important;
      }

      .pcc-beta27-import-dialog input,
      .pcc-beta27-import-dialog select{
        min-height:28px!important;
        border-radius:7px!important;
        border:1px solid rgba(0,169,214,.38)!important;
        background:rgba(0,0,0,.25)!important;
        color:#fff!important;
      }

      .pcc-beta27-import-dialog [data-folder],
      .pcc-beta27-import-dialog [data-path],
      .pcc-beta27-import-dialog .folder,
      .pcc-beta27-import-dialog .file{
        border-radius:8px;
      }
    `;
    root.appendChild(style);
  };

  PCC_BETA28_STUDIO_CLASS.prototype.beta28ToolbarHtml = function beta28ToolbarHtml() {
    const color = this.beta22ObjectColor?.() || "#00a9d6";
    const colors = ["#00a9d6", "#f44336", "#ff9800", "#ffeb3b", "#4caf50", "#2196f3", "#9c27b0", "#ffffff", "#111111"];
    const swatches = colors.map((value) => `<button class="pcc-beta28-swatch ${value.toLowerCase() === color.toLowerCase() ? "active" : ""}" data-beta28-color="${value}" title="${value}" style="background:${value}"></button>`).join("");

    return `
      <div class="pcc-beta28-toolbar" aria-label="Studio Werkzeugleiste">
        <button class="pcc-beta28-import-main" data-beta28-action="open-import" title="Galerie/Archiv importieren">${pccBeta28Icon("import")}<span>Import</span></button>

        <div class="pcc-beta28-menu-wrap">
          <button class="pcc-beta28-main" data-beta28-menu="primitive" title="Primitive">${pccBeta28Icon("cube")}</button>
          <div class="pcc-beta28-menu-body">
            ${pccBeta28ActionButton("primitive-cube","cube","Würfel")}
            ${pccBeta28ActionButton("primitive-cuboid","cube","Quader")}
            ${pccBeta28ActionButton("primitive-cylinder","cube","Zylinder")}
            ${pccBeta28ActionButton("primitive-first-layer","cube","First Layer")}
          </div>
        </div>

        <div class="pcc-beta28-menu-wrap">
          <button class="pcc-beta28-main" data-beta28-menu="move" title="Verschieben">${pccBeta28Icon("move")}</button>
          <div class="pcc-beta28-menu-body">
            ${pccBeta28ActionButton("move-left","move","Links")}
            ${pccBeta28ActionButton("move-right","move","Rechts")}
            ${pccBeta28ActionButton("move-up","move","Nach hinten")}
            ${pccBeta28ActionButton("move-down","move","Nach vorne")}
            ${pccBeta28ActionButton("z-up","move","Z höher")}
            ${pccBeta28ActionButton("z-down","move","Z tiefer")}
            ${pccBeta28ActionButton("center","center","Zentrieren")}
          </div>
        </div>

        <div class="pcc-beta28-menu-wrap">
          <button class="pcc-beta28-main" data-beta28-menu="rotate" title="Drehen">${pccBeta28Icon("rotate")}</button>
          <div class="pcc-beta28-menu-body">
            ${pccBeta28ActionButton("rot-x","rotate","Rot X +15°")}
            ${pccBeta28ActionButton("rot-y","rotate","Rot Y +15°")}
            ${pccBeta28ActionButton("rot-z","rotate","Rot Z +15°")}
            ${pccBeta28ActionButton("lay-flat","rotate","Flach legen")}
          </div>
        </div>

        <div class="pcc-beta28-menu-wrap">
          <button class="pcc-beta28-main" data-beta28-menu="scale" title="Skalieren">${pccBeta28Icon("scale")}</button>
          <div class="pcc-beta28-menu-body">
            ${pccBeta28ActionButton("scale-down","scale","Kleiner")}
            ${pccBeta28ActionButton("scale-up","scale","Größer")}
            ${pccBeta28ActionButton("stretch-x-up","scale","Breite +")}
            ${pccBeta28ActionButton("stretch-y-up","scale","Länge +")}
            ${pccBeta28ActionButton("stretch-z-up","scale","Höhe +")}
          </div>
        </div>

        <div class="pcc-beta28-menu-wrap">
          <button class="pcc-beta28-main" data-beta28-menu="mirror" title="Spiegeln/Zerren">${pccBeta28Icon("mirror")}</button>
          <div class="pcc-beta28-menu-body">
            ${pccBeta28ActionButton("mirror-x","mirror","Spiegel X")}
            ${pccBeta28ActionButton("mirror-y","mirror","Spiegel Y")}
            ${pccBeta28ActionButton("mirror-z","mirror","Spiegel Z")}
            ${pccBeta28ActionButton("skew-x","mirror","Zerr X +5°")}
            ${pccBeta28ActionButton("skew-y","mirror","Zerr Y +5°")}
          </div>
        </div>

        <div class="pcc-beta28-menu-wrap">
          <button class="pcc-beta28-main" data-beta28-menu="view" title="Ansicht">${pccBeta28Icon("view")}</button>
          <div class="pcc-beta28-menu-body">
            ${pccBeta28ActionButton("zoom-out","view","Zoom -")}
            ${pccBeta28ActionButton("zoom-in","view","Zoom +")}
            ${pccBeta28ActionButton("reload-model","reload","Modell neu laden")}
            ${pccBeta28ActionButton("reset","view","Reset")}
          </div>
        </div>

        <div class="pcc-beta28-menu-wrap">
          <button class="pcc-beta28-main" data-beta28-menu="color" title="Farbe">${pccBeta28Icon("color")}</button>
          <div class="pcc-beta28-menu-body">
            <div class="pcc-beta28-color-row">
              <input class="pcc-beta28-color" type="color" value="${color}" title="Objekt einfärben">
              ${swatches}
            </div>
          </div>
        </div>

        <button class="pcc-beta28-main pcc-beta28-delete" data-beta28-action="delete" title="Löschen">${pccBeta28Icon("trash")}</button>
      </div>
    `;
  };

  PCC_BETA28_STUDIO_CLASS.prototype.beta28InstallToolbar = function beta28InstallToolbar() {
    const root = this.shadowRoot;
    if (!root) return;

    root.querySelectorAll(".pcc-beta22-top-toolbar,.pcc-beta23-top-toolbar,.pcc-beta26-toolbar").forEach((node) => node.remove());

    const shell = root.querySelector(".studio-shell") || root.querySelector(".studio-grid")?.parentElement || root.querySelector(".buildplate")?.parentElement;
    if (!shell) return;

    let toolbar = root.querySelector(".pcc-beta28-toolbar");
    if (!toolbar) {
      const wrap = document.createElement("div");
      wrap.innerHTML = this.beta28ToolbarHtml().trim();
      toolbar = wrap.firstElementChild;
      shell.insertBefore(toolbar, shell.firstElementChild);
    }

    this.beta28SyncColor();

    if (toolbar.dataset.beta28Bound === "1") return;
    toolbar.dataset.beta28Bound = "1";

    toolbar.addEventListener("click", (event) => {
      const menuButton = event.target?.closest?.("[data-beta28-menu]");
      if (menuButton) {
        event.preventDefault();
        event.stopPropagation();
        this.beta28ToggleMenu(menuButton.closest(".pcc-beta28-menu-wrap"));
        return;
      }

      const colorButton = event.target?.closest?.("[data-beta28-color]");
      if (colorButton) {
        event.preventDefault();
        event.stopPropagation();
        this.beta22SetObjectColor?.(colorButton.dataset.beta28Color);
        this.beta28SyncColor();
        this.queueMeshRender?.();
        return;
      }

      const actionButton = event.target?.closest?.("[data-beta28-action]");
      if (actionButton) {
        event.preventDefault();
        event.stopPropagation();
        this.beta28CloseMenus();
        this.beta28ApplyAction(actionButton.dataset.beta28Action);
      }
    }, {capture:true});

    toolbar.addEventListener("input", (event) => {
      const input = event.target?.closest?.(".pcc-beta28-color");
      if (!input) return;
      event.preventDefault();
      event.stopPropagation();
      this.beta22SetObjectColor?.(input.value);
      this.beta28SyncColor();
      this.queueMeshRender?.();
    }, {capture:true});

    root.addEventListener("click", (event) => {
      if (event.target?.closest?.(".pcc-beta28-toolbar")) return;
      if (event.target?.closest?.(".pcc-beta27-import-modal")) return;
      this.beta28CloseMenus();
    }, {capture:true});
  };

  PCC_BETA28_STUDIO_CLASS.prototype.beta28ToggleMenu = function beta28ToggleMenu(wrap) {
    if (!wrap) return;
    const wasOpen = wrap.classList.contains("open");
    this.shadowRoot?.querySelectorAll(".pcc-beta28-menu-wrap.open").forEach((node) => {
      node.classList.remove("open");
      node.querySelector(".pcc-beta28-main")?.classList.remove("active");
    });
    if (!wasOpen) {
      wrap.classList.add("open");
      wrap.querySelector(".pcc-beta28-main")?.classList.add("active");
    }
  };

  PCC_BETA28_STUDIO_CLASS.prototype.beta28CloseMenus = function beta28CloseMenus() {
    this.shadowRoot?.querySelectorAll(".pcc-beta28-menu-wrap.open").forEach((node) => {
      node.classList.remove("open");
      node.querySelector(".pcc-beta28-main")?.classList.remove("active");
    });
  };

  PCC_BETA28_STUDIO_CLASS.prototype.beta28ApplyAction = function beta28ApplyAction(action) {
    const text = String(action || "");

    if (text === "open-import") {
      this.openBeta7ImportAssistant?.();
      return;
    }

    if (text.startsWith("primitive-")) {
      this.beta21SetPrimitiveActive?.(text.replace("primitive-", ""));
      return;
    }

    if (text === "delete") {
      this.deleteActiveJob?.();
      return;
    }

    if (text === "reload-model") {
      this._pccBeta26MeshFailedKey = "";
      this.ensureStudioMeshLoaded?.(true);
      return;
    }

    this.beta22ApplyToolbarAction?.(text);
  };

  PCC_BETA28_STUDIO_CLASS.prototype.beta28SyncColor = function beta28SyncColor() {
    const root = this.shadowRoot;
    const toolbar = root?.querySelector(".pcc-beta28-toolbar");
    if (!toolbar) return;
    const color = this.beta22ObjectColor?.() || "#00a9d6";

    const input = toolbar.querySelector(".pcc-beta28-color");
    if (input && input.value.toLowerCase() !== color.toLowerCase()) input.value = color;

    toolbar.querySelectorAll("[data-beta28-color]").forEach((button) => {
      button.classList.toggle("active", String(button.dataset.beta28Color).toLowerCase() === color.toLowerCase());
    });
  };

  PCC_BETA28_STUDIO_CLASS.prototype.openBeta7ImportAssistant = function beta28OpenImportAssistant(...args) {
    let result;
    if (typeof PCC_BETA28_PREV_OPEN_IMPORT === "function") {
      result = PCC_BETA28_PREV_OPEN_IMPORT.apply(this, args);
    }

    const promote = () => {
      this.beta27PromoteImportAssistant?.();
      this.beta28PolishImportPopup?.();
    };

    requestAnimationFrame(promote);
    window.setTimeout(promote, 60);
    window.setTimeout(promote, 220);

    return result;
  };

  PCC_BETA28_STUDIO_CLASS.prototype.beta28PolishImportPopup = function beta28PolishImportPopup() {
    const root = this.shadowRoot;
    const modal = root?.querySelector(".pcc-beta27-import-modal");
    const dialog = root?.querySelector(".pcc-beta27-import-dialog");
    if (!modal || !dialog) return;

    modal.dataset.beta28Polished = "1";
    dialog.dataset.beta28Polished = "1";

    const headings = [...dialog.querySelectorAll("h1,h2,h3")];
    for (const heading of headings) {
      if (String(heading.textContent || "").includes("Studio-Import-Assistent")) {
        heading.textContent = "Studio-Import";
      }
    }

    dialog.querySelectorAll("button").forEach((button) => {
      const txt = String(button.textContent || "").trim();
      if (txt === "Schließen") button.textContent = "Schließen";
      if (txt === "Auswahl ins Studio übernehmen") button.textContent = "Ins Studio übernehmen";
    });
  };

  PCC_BETA28_STUDIO_CLASS.prototype.cleanupBetaStudioUi = function beta28CleanupBetaStudioUi(...args) {
    if (typeof PCC_BETA28_PREV_CLEANUP === "function") {
      PCC_BETA28_PREV_CLEANUP.apply(this, args);
    }

    this.beta28EnsureStyle();
    this.beta28InstallToolbar();
    this.beta28SyncColor();

    this.shadowRoot?.querySelectorAll(".pcc-beta22-top-toolbar,.pcc-beta23-top-toolbar,.pcc-beta26-toolbar").forEach((node) => node.remove());

    if (this.shadowRoot?.querySelector(".pcc-beta27-import-modal")) {
      this.beta28PolishImportPopup();
    }
  };

const PCC_BETA29_STUDIO_CLASS = customElements.get("printer-control-center-studio-card") || PrinterControlCenterStudioCard;
  const PCC_BETA29_PREV_CLEANUP = PCC_BETA29_STUDIO_CLASS.prototype.cleanupBetaStudioUi;
  const PCC_BETA29_PREV_OPEN_IMPORT = PCC_BETA29_STUDIO_CLASS.prototype.openBeta7ImportAssistant;
  const PCC_BETA29_PREV_IMPORT_PLAN = PCC_BETA29_STUDIO_CLASS.prototype.beta7ImportPlan;

  function pccBeta29IsPrimitiveJob(job) {
    const source = String(job?.source || job?.origin || job?.model?.source || "").trim();
    const primitive = String(job?.primitive?.kind || job?.primitive_kind || job?.model?.primitive_kind || "").trim();
    return source === "primitive" || Boolean(primitive);
  }

  function pccBeta29Transform(instance) {
    instance._transform = {...defaultTransform(), ...(instance._transform || {})};
    return instance._transform;
  }

  PCC_BETA29_STUDIO_CLASS.prototype.beta29EnsureStyle = function beta29EnsureStyle() {
    const root = this.shadowRoot;
    if (!root || root.querySelector("#pcc-beta29-menu-import-mouse-style")) return;

    const style = document.createElement("style");
    style.id = "pcc-beta29-menu-import-mouse-style";
    style.textContent = `
      .studio-shell{position:relative!important;}

      .pcc-beta28-toolbar{
        min-height:32px!important;
        height:32px!important;
        margin:0 0 6px!important;
      }

      .pcc-beta28-import-main{
        height:31px!important;
        min-width:76px!important;
        padding:0 8px!important;
        font-size:11px!important;
      }

      .pcc-beta28-main{
        width:32px!important;
        height:31px!important;
      }

      .pcc-beta28-menu-body{
        top:32px!important;
        min-width:168px!important;
        max-width:230px!important;
        max-height:260px!important;
        overflow:auto!important;
        padding:5px!important;
      }

      .pcc-beta28-menu-action{
        min-height:28px!important;
        grid-template-columns:22px 1fr!important;
        gap:6px!important;
        padding:3px 7px!important;
        font-size:12px!important;
      }

      .pcc-beta28-menu-wrap.open > .pcc-beta28-menu-body{
        display:grid!important;
      }

      .pcc-beta27-import-modal{
        position:absolute!important;
        inset:42px auto auto 50%!important;
        transform:translateX(-50%)!important;
        width:min(640px,calc(100% - 28px))!important;
        height:auto!important;
        max-height:min(58vh,500px)!important;
        z-index:760!important;
        display:block!important;
        padding:0!important;
        margin:0!important;
        background:transparent!important;
        border:0!important;
        backdrop-filter:none!important;
      }

      .pcc-beta27-import-dialog{
        width:100%!important;
        max-height:min(58vh,500px)!important;
        overflow:auto!important;
        padding:10px!important;
        border:1px solid rgba(0,169,214,.70)!important;
        border-radius:8px!important;
        background:linear-gradient(180deg,rgba(13,20,25,.99),rgba(5,10,14,.99))!important;
        box-shadow:0 18px 42px rgba(0,0,0,.58)!important;
      }

      .pcc-beta27-import-close{
        position:absolute!important;
        right:8px!important;
        top:8px!important;
        width:28px!important;
        height:26px!important;
        border-radius:5px!important;
        padding:0!important;
      }

      .pcc-beta27-import-dialog h1,
      .pcc-beta27-import-dialog h2,
      .pcc-beta27-import-dialog h3{
        font-size:17px!important;
        margin:0 36px 8px 0!important;
        line-height:1.2!important;
      }

      .pcc-beta27-import-dialog p,
      .pcc-beta27-import-dialog div,
      .pcc-beta27-import-dialog span,
      .pcc-beta27-import-dialog label{
        font-size:12px!important;
        line-height:1.28!important;
      }

      .pcc-beta27-import-dialog button{
        min-height:26px!important;
        padding:3px 8px!important;
        border-radius:6px!important;
        font-size:12px!important;
        line-height:1.2!important;
      }

      .pcc-beta27-import-dialog input,
      .pcc-beta27-import-dialog select{
        min-height:26px!important;
        border-radius:6px!important;
        font-size:12px!important;
      }

      .pcc-beta29-import-grid{
        display:grid!important;
        grid-template-columns:repeat(auto-fit,minmax(150px,1fr))!important;
        gap:6px!important;
      }

      .buildplate.pcc-beta29-dragging .studio-mesh-canvas{
        cursor:grabbing!important;
      }

      .buildplate .studio-mesh-canvas{
        cursor:grab!important;
      }
    `;
    root.appendChild(style);
  };

  PCC_BETA29_STUDIO_CLASS.prototype.beta29CloseAllMenus = function beta29CloseAllMenus(except=null) {
    const root = this.shadowRoot;
    if (!root) return;

    root.querySelectorAll(".pcc-beta28-menu-wrap.open").forEach((wrap) => {
      if (except && wrap === except) return;
      wrap.classList.remove("open");
      wrap.querySelector(".pcc-beta28-main")?.classList.remove("active");
    });
  };

  PCC_BETA29_STUDIO_CLASS.prototype.beta28ToggleMenu = function beta29ToggleMenu(wrap) {
    if (!wrap) return;
    const wasOpen = wrap.classList.contains("open");
    this.beta29CloseAllMenus(wrap);

    if (wasOpen) {
      wrap.classList.remove("open");
      wrap.querySelector(".pcc-beta28-main")?.classList.remove("active");
    } else {
      wrap.classList.add("open");
      wrap.querySelector(".pcc-beta28-main")?.classList.add("active");
    }
  };

  PCC_BETA29_STUDIO_CLASS.prototype.beta28CloseMenus = function beta29CloseMenus() {
    this.beta29CloseAllMenus();
  };

  PCC_BETA29_STUDIO_CLASS.prototype.beta29PatchToolbarEvents = function beta29PatchToolbarEvents() {
    const root = this.shadowRoot;
    const oldToolbar = root?.querySelector(".pcc-beta28-toolbar");
    if (!root || !oldToolbar) return;

    if (oldToolbar.dataset.beta29Rebuilt === "1") return;

    const toolbar = oldToolbar.cloneNode(true);
    toolbar.dataset.beta29Rebuilt = "1";
    oldToolbar.replaceWith(toolbar);

    toolbar.addEventListener("pointerdown", (event) => {
      event.stopPropagation();
    }, {capture:true});

    toolbar.addEventListener("click", (event) => {
      const menuButton = event.target?.closest?.("[data-beta28-menu]");
      if (menuButton) {
        event.preventDefault();
        event.stopPropagation();
        this.beta28ToggleMenu(menuButton.closest(".pcc-beta28-menu-wrap"));
        return;
      }

      const colorButton = event.target?.closest?.("[data-beta28-color]");
      if (colorButton) {
        event.preventDefault();
        event.stopPropagation();
        this.beta22SetObjectColor?.(colorButton.dataset.beta28Color);
        this.beta28SyncColor?.();
        this.queueMeshRender?.();
        return;
      }

      const actionButton = event.target?.closest?.("[data-beta28-action]");
      if (actionButton) {
        event.preventDefault();
        event.stopPropagation();

        const action = String(actionButton.dataset.beta28Action || "");
        const keepMenuOpen = !["open-import", "delete", "primitive-cube", "primitive-cuboid", "primitive-cylinder", "primitive-first-layer"].includes(action);

        if (!keepMenuOpen) this.beta29CloseAllMenus();

        this.beta28ApplyAction?.(action);
        return;
      }
    }, {capture:true});

    toolbar.addEventListener("input", (event) => {
      const input = event.target?.closest?.(".pcc-beta28-color");
      if (!input) return;
      event.preventDefault();
      event.stopPropagation();
      this.beta22SetObjectColor?.(input.value);
      this.beta28SyncColor?.();
      this.queueMeshRender?.();
    }, {capture:true});

    root.addEventListener("pointerdown", (event) => {
      if (event.target?.closest?.(".pcc-beta28-toolbar")) return;
      if (event.target?.closest?.(".pcc-beta27-import-modal")) return;
      if (event.target?.closest?.(".buildplate")) return;
      this.beta29CloseAllMenus();
    }, {capture:true});
  };

  PCC_BETA29_STUDIO_CLASS.prototype.beta29BindStableMouse = function beta29BindStableMouse() {
    const root = this.shadowRoot;
    const buildplate = root?.querySelector(".buildplate");
    const canvas = root?.querySelector(".studio-mesh-canvas");
    if (!root || !buildplate || !canvas || buildplate.dataset.beta29MouseBound === "1") return;

    buildplate.dataset.beta29MouseBound = "1";

    const blockContext = (event) => {
      if (!event.target?.closest?.(".buildplate")) return;
      event.preventDefault();
      event.stopPropagation();
      this._studioContextMenu = null;
    };

    root.addEventListener("contextmenu", blockContext, {capture:true});
    buildplate.addEventListener("contextmenu", blockContext, {capture:true});
    canvas.addEventListener("contextmenu", blockContext, {capture:true});

    const state = {active:false, button:-1, x:0, y:0, pointerId:null};

    const moveHandler = (event) => {
      if (!state.active) return;

      event.preventDefault();
      event.stopPropagation();

      const dx = event.clientX - state.x;
      const dy = event.clientY - state.y;
      state.x = event.clientX;
      state.y = event.clientY;

      const t = pccBeta29Transform(this);

      if (state.button === 0) {
        t.rz = toNumber(t.rz, 0) + dx * 0.32;
        t.rx = toNumber(t.rx, 0) - dy * 0.22;
      } else if (state.button === 2) {
        t.x = toNumber(t.x, 0) + dx;
        t.y = toNumber(t.y, 0) + dy;
      }

      if (this._activeJob) this._activeJob.transform = {...t};
      this.queueMeshRender?.();
    };

    const upHandler = (event) => {
      if (!state.active) return;

      event.preventDefault?.();
      event.stopPropagation?.();

      state.active = false;
      state.button = -1;
      state.pointerId = null;
      buildplate.classList.remove("pcc-beta29-dragging");

      window.removeEventListener("pointermove", moveHandler, true);
      window.removeEventListener("pointerup", upHandler, true);
      window.removeEventListener("pointercancel", upHandler, true);

      try { canvas.releasePointerCapture(event.pointerId); } catch (_error) {}
    };

    canvas.addEventListener("pointerdown", (event) => {
      if (event.button !== 0 && event.button !== 2) return;

      event.preventDefault();
      event.stopPropagation();

      state.active = true;
      state.button = event.button;
      state.x = event.clientX;
      state.y = event.clientY;
      state.pointerId = event.pointerId;

      buildplate.classList.add("pcc-beta29-dragging");

      try { canvas.setPointerCapture(event.pointerId); } catch (_error) {}

      window.addEventListener("pointermove", moveHandler, true);
      window.addEventListener("pointerup", upHandler, true);
      window.addEventListener("pointercancel", upHandler, true);
    }, {capture:true});
  };

  PCC_BETA29_STUDIO_CLASS.prototype.openBeta7ImportAssistant = function beta29OpenImportAssistant(...args) {
    this._pccBeta29ImportOpen = true;
    this._pccBeta27ImportOpen = true;

    let result;
    if (typeof PCC_BETA29_PREV_OPEN_IMPORT === "function") {
      result = PCC_BETA29_PREV_OPEN_IMPORT.apply(this, args);
    }

    const promote = () => {
      this.beta27PromoteImportAssistant?.();
      this.beta28PolishImportPopup?.();
      this.beta29PolishImportPopup?.();
    };

    requestAnimationFrame(promote);
    window.setTimeout(promote, 60);
    window.setTimeout(promote, 180);
    window.setTimeout(promote, 420);

    return result;
  };

  PCC_BETA29_STUDIO_CLASS.prototype.beta29PolishImportPopup = function beta29PolishImportPopup() {
    const root = this.shadowRoot;
    const modal = root?.querySelector(".pcc-beta27-import-modal");
    const dialog = root?.querySelector(".pcc-beta27-import-dialog");
    if (!modal || !dialog) return;

    modal.dataset.beta29Stable = "1";
    dialog.dataset.beta29Stable = "1";

    dialog.querySelectorAll("h1,h2,h3").forEach((heading) => {
      if (String(heading.textContent || "").includes("Studio-Import")) {
        heading.textContent = "Studio-Import";
      }
    });

    dialog.querySelectorAll("button").forEach((button) => {
      const txt = String(button.textContent || "").trim();
      if (txt === "Auswahl ins Studio übernehmen") button.textContent = "Ins Studio übernehmen";
      if (txt === "Eine Ebene hoch") button.textContent = "Hoch";
      if (txt === "Aktualisieren") button.textContent = "Neu laden";
    });

    const folderArea = [...dialog.querySelectorAll("div,section")]
      .find((node) => {
        const text = String(node.textContent || "");
        return text.includes("Bad Bad Ordner") || text.includes("Deko Deko Ordner") || text.includes("Drucker Drucker Ordner");
      });

    if (folderArea) folderArea.classList.add("pcc-beta29-import-grid");
  };

  PCC_BETA29_STUDIO_CLASS.prototype.beta7ImportPlan = async function beta29ImportPlan(plan) {
    const beforeJobs = Array.isArray(this._jobs) ? [...this._jobs] : [];
    const beforeActive = this._activeJob || null;

    if (typeof PCC_BETA29_PREV_IMPORT_PLAN === "function") {
      await PCC_BETA29_PREV_IMPORT_PLAN.call(this, plan);
    }

    const afterActive = this._activeJob || null;

    this._pccBeta29PlateObjects = Array.isArray(this._pccBeta29PlateObjects) ? this._pccBeta29PlateObjects : [];

    for (const job of [...beforeJobs, beforeActive, afterActive]) {
      if (!job) continue;
      const id = String(job.id || job.file_path || job.path || job.name || "");
      if (!id) continue;
      if (!this._pccBeta29PlateObjects.some((item) => String(item.id || item.file_path || item.path || item.name || "") === id)) {
        this._pccBeta29PlateObjects.push(job);
      }
    }

    if (Array.isArray(this._jobs)) {
      const merged = [...this._jobs];
      for (const job of this._pccBeta29PlateObjects) {
        const id = String(job.id || job.file_path || job.path || job.name || "");
        if (!id) continue;
        if (!merged.some((item) => String(item.id || item.file_path || item.path || item.name || "") === id)) merged.push(job);
      }
      this._jobs = merged;
    }

    this._pccBeta29ImportOpen = true;
    this._pccBeta27ImportOpen = true;

    window.setTimeout(() => {
      this.ensureStudioMeshLoaded?.(true);
      this.beta29PolishImportPopup?.();
    }, 0);
  };

  PCC_BETA29_STUDIO_CLASS.prototype.handleContextMenu = function beta29HandleContextMenu(event) {
    if (event.target?.closest?.(".buildplate")) {
      event.preventDefault();
      event.stopPropagation();
      this._studioContextMenu = null;
    }
  };

  PCC_BETA29_STUDIO_CLASS.prototype.cleanupBetaStudioUi = function beta29CleanupBetaStudioUi(...args) {
    if (typeof PCC_BETA29_PREV_CLEANUP === "function") {
      PCC_BETA29_PREV_CLEANUP.apply(this, args);
    }

    this.beta29EnsureStyle();
    this.beta29PatchToolbarEvents();
    this.beta29BindStableMouse();

    this.shadowRoot?.querySelectorAll(".context-menu,.pcc-context-menu,.gallery-context-menu,[data-context-menu]").forEach((node) => node.remove());

    if (this._pccBeta29ImportOpen || this.shadowRoot?.querySelector(".pcc-beta27-import-modal")) {
      this._pccBeta29ImportOpen = true;
      requestAnimationFrame(() => {
        this.beta27PromoteImportAssistant?.();
        this.beta28PolishImportPopup?.();
        this.beta29PolishImportPopup?.();
      });
    }
  };

const PCC_BETA30_STUDIO_CLASS = customElements.get("printer-control-center-studio-card") || PrinterControlCenterStudioCard;
  const PCC_BETA30_PREV_OPEN_IMPORT = PCC_BETA30_STUDIO_CLASS.prototype.openBeta7ImportAssistant;
  const PCC_BETA30_PREV_IMPORT_PLAN = PCC_BETA30_STUDIO_CLASS.prototype.beta7ImportPlan;
  const PCC_BETA30_PREV_ENSURE_MESH = PCC_BETA30_STUDIO_CLASS.prototype.ensureStudioMeshLoaded;
  const PCC_BETA30_PREV_RENDER_MESH = PCC_BETA30_STUDIO_CLASS.prototype.renderMeshCanvas;

  function pccBeta30Icon(name) {
    const common = 'viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
    const icons = {
      import:'<path d="M4 17v3h16v-3"/><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/>',
      cube:'<path d="M12 2 4 6v12l8 4 8-4V6z"/><path d="M12 22V10"/><path d="M4 6l8 4 8-4"/>',
      move:'<path d="M12 2v20"/><path d="M2 12h20"/><path d="m8 6 4-4 4 4"/><path d="m8 18 4 4 4-4"/><path d="m6 8-4 4 4 4"/><path d="m18 8 4 4-4 4"/>',
      rotate:'<path d="M4 12a8 8 0 0 1 13.7-5.7"/><path d="M18 3v5h-5"/><path d="M20 12a8 8 0 0 1-13.7 5.7"/><path d="M6 21v-5h5"/>',
      scale:'<path d="M5 19 19 5"/><path d="M9 5h10v10"/><path d="M5 9v10h10"/>',
      mirror:'<path d="M12 3v18"/><path d="M4 7h5v10H4z"/><path d="M20 7h-5v10h5z"/>',
      view:'<circle cx="10" cy="10" r="6"/><path d="M14.5 14.5 21 21"/><path d="M10 7v6"/><path d="M7 10h6"/>',
      color:'<path d="M4 14 14 4l6 6-10 10H4z"/><path d="M13 5l6 6"/><path d="M4 20h6"/>',
      trash:'<path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M8 10v9"/><path d="M16 10v9"/><path d="M6 7l1 14h10l1-14"/>',
      reload:'<path d="M20 6v6h-6"/><path d="M4 18v-6h6"/><path d="M19 12a7 7 0 0 0-12-5l-3 3"/><path d="M5 12a7 7 0 0 0 12 5l3-3"/>',
      center:'<circle cx="12" cy="12" r="7"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M2 12h4"/><path d="M18 12h4"/>'
    };
    return `<svg ${common}>${icons[name] || icons.cube}</svg>`;
  }

  function pccBeta30Action(action, icon, label) {
    return `<button class="pcc-beta30-menu-action" data-beta30-action="${action}" title="${label}">${pccBeta30Icon(icon)}<span>${label}</span></button>`;
  }

  function pccBeta30Transform(instance) {
    instance._transform = {...defaultTransform(), ...(instance._transform || {})};
    return instance._transform;
  }

  function pccBeta30PrimitiveKind(job) {
    return String(job?.primitive?.kind || job?.primitive_kind || job?.model?.primitive_kind || job?.model?.primitive || "")
      .trim()
      .replace(/^primitive-/, "")
      .replace(/-/g, "_");
  }

  function pccBeta30IsPrimitive(job) {
    const source = String(job?.source || job?.origin || job?.model?.source || "").trim();
    return source === "primitive" || Boolean(pccBeta30PrimitiveKind(job));
  }

  PCC_BETA30_STUDIO_CLASS.prototype.beta30EnsureStyle = function beta30EnsureStyle() {
    const root = this.shadowRoot;
    if (!root || root.querySelector("#pcc-beta30-studio-ui-squash-style")) return;

    const style = document.createElement("style");
    style.id = "pcc-beta30-studio-ui-squash-style";
    style.textContent = `
      .studio-shell{position:relative!important;}

      .pcc-beta22-top-toolbar,
      .pcc-beta23-top-toolbar,
      .pcc-beta26-toolbar,
      .pcc-beta28-toolbar{
        display:none!important;
      }

      .pcc-beta30-toolbar{
        position:sticky;
        top:0;
        z-index:780;
        height:32px;
        min-height:32px;
        display:flex;
        align-items:center;
        gap:0;
        margin:0 0 6px;
        padding:0;
        border-top:1px solid rgba(255,255,255,.15);
        border-bottom:1px solid rgba(0,169,214,.48);
        background:linear-gradient(180deg,rgba(45,48,52,.98),rgba(20,24,28,.98));
        box-shadow:0 8px 20px rgba(0,0,0,.28);
        overflow:visible;
      }

      .pcc-beta30-import{
        height:31px;
        min-width:78px;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        gap:6px;
        padding:0 8px;
        border:0;
        border-right:1px solid rgba(255,255,255,.16);
        border-radius:0;
        background:rgba(0,118,150,.26);
        color:#fff;
        font-size:11px;
        font-weight:800;
        cursor:pointer;
      }

      .pcc-beta30-menu-wrap{
        position:relative;
        flex:0 0 auto;
        border-right:1px solid rgba(255,255,255,.16);
      }

      .pcc-beta30-main{
        width:32px;
        height:31px;
        display:grid;
        place-items:center;
        border:0;
        border-radius:0;
        background:rgba(255,255,255,.045);
        color:rgba(255,255,255,.86);
        cursor:pointer;
        padding:0;
      }

      .pcc-beta30-main:hover,
      .pcc-beta30-main.active,
      .pcc-beta30-import:hover{
        background:rgba(0,169,214,.20);
        color:#fff;
      }

      .pcc-beta30-menu-body{
        position:absolute;
        top:32px;
        left:0;
        z-index:860;
        min-width:168px;
        max-width:230px;
        max-height:260px;
        overflow:auto;
        padding:5px;
        display:none;
        grid-template-columns:1fr;
        gap:3px;
        border:1px solid rgba(0,169,214,.58);
        background:rgba(14,19,24,.99);
        box-shadow:0 16px 36px rgba(0,0,0,.44);
      }

      .pcc-beta30-menu-wrap.open > .pcc-beta30-menu-body{
        display:grid;
      }

      .pcc-beta30-menu-action{
        min-height:28px;
        display:grid;
        grid-template-columns:22px 1fr;
        gap:6px;
        align-items:center;
        padding:3px 7px;
        border:1px solid transparent;
        border-radius:0;
        background:transparent;
        color:rgba(255,255,255,.90);
        font-size:12px;
        line-height:1.2;
        text-align:left;
        cursor:pointer;
        white-space:nowrap;
      }

      .pcc-beta30-menu-action:hover{
        border-color:rgba(0,169,214,.56);
        background:rgba(0,169,214,.14);
      }

      .pcc-beta30-delete{
        color:rgba(255,210,210,.95);
      }

      .pcc-beta30-delete:hover{
        background:rgba(210,50,50,.24)!important;
      }

      .pcc-beta30-color-row{
        display:flex;
        gap:5px;
        flex-wrap:wrap;
        width:168px;
      }

      .pcc-beta30-color{
        width:28px;
        height:24px;
        border:1px solid rgba(255,255,255,.28);
        border-radius:0;
        padding:0;
        background:transparent;
      }

      .pcc-beta30-swatch{
        width:22px;
        height:22px;
        border:1px solid rgba(255,255,255,.28);
        border-radius:0;
        cursor:pointer;
      }

      .pcc-beta30-swatch.active{
        outline:2px solid rgba(0,235,255,.82);
        outline-offset:1px;
      }

      .pcc-beta27-import-modal{
        position:absolute!important;
        inset:40px auto auto 50%!important;
        transform:translateX(-50%)!important;
        width:min(620px,calc(100% - 30px))!important;
        height:auto!important;
        max-height:min(56vh,480px)!important;
        z-index:820!important;
        display:block!important;
        padding:0!important;
        margin:0!important;
        background:transparent!important;
        border:0!important;
        backdrop-filter:none!important;
      }

      .pcc-beta27-import-dialog{
        width:100%!important;
        max-height:min(56vh,480px)!important;
        overflow:auto!important;
        padding:10px!important;
        border:1px solid rgba(0,169,214,.70)!important;
        border-radius:8px!important;
        background:linear-gradient(180deg,rgba(13,20,25,.99),rgba(5,10,14,.99))!important;
        box-shadow:0 18px 42px rgba(0,0,0,.58)!important;
      }

      .pcc-beta27-import-close{
        position:absolute!important;
        right:8px!important;
        top:8px!important;
        width:28px!important;
        height:26px!important;
        border-radius:5px!important;
        padding:0!important;
      }

      .pcc-beta27-import-dialog h1,
      .pcc-beta27-import-dialog h2,
      .pcc-beta27-import-dialog h3{
        font-size:17px!important;
        margin:0 36px 8px 0!important;
        line-height:1.2!important;
      }

      .pcc-beta27-import-dialog p,
      .pcc-beta27-import-dialog div,
      .pcc-beta27-import-dialog span,
      .pcc-beta27-import-dialog label{
        font-size:12px!important;
        line-height:1.28!important;
      }

      .pcc-beta27-import-dialog button{
        min-height:26px!important;
        padding:3px 8px!important;
        border-radius:6px!important;
        font-size:12px!important;
        line-height:1.2!important;
      }

      .pcc-beta27-import-dialog input,
      .pcc-beta27-import-dialog select{
        min-height:26px!important;
        border-radius:6px!important;
        font-size:12px!important;
      }

      .pcc-beta30-import-grid{
        display:grid!important;
        grid-template-columns:repeat(auto-fit,minmax(150px,1fr))!important;
        gap:6px!important;
      }

      .buildplate .studio-mesh-canvas{
        cursor:grab!important;
      }

      .buildplate.pcc-beta30-dragging .studio-mesh-canvas{
        cursor:grabbing!important;
      }
    `;
    root.appendChild(style);
  };

  PCC_BETA30_STUDIO_CLASS.prototype.beta30ToolbarHtml = function beta30ToolbarHtml() {
    const color = this.beta22ObjectColor?.() || "#00a9d6";
    const colors = ["#00a9d6","#f44336","#ff9800","#ffeb3b","#4caf50","#2196f3","#9c27b0","#ffffff","#111111"];
    const swatches = colors.map((value) => `<button class="pcc-beta30-swatch ${value.toLowerCase() === color.toLowerCase() ? "active" : ""}" data-beta30-color="${value}" title="${value}" style="background:${value}"></button>`).join("");

    return `
      <div class="pcc-beta30-toolbar" aria-label="Studio Werkzeugleiste">
        <button class="pcc-beta30-import" data-beta30-action="open-import" title="Galerie/Archiv importieren">${pccBeta30Icon("import")}<span>Import</span></button>

        <div class="pcc-beta30-menu-wrap">
          <button class="pcc-beta30-main" data-beta30-menu="primitive" title="Primitive">${pccBeta30Icon("cube")}</button>
          <div class="pcc-beta30-menu-body">
            ${pccBeta30Action("primitive-cube","cube","Würfel")}
            ${pccBeta30Action("primitive-cuboid","cube","Quader")}
            ${pccBeta30Action("primitive-cylinder","cube","Zylinder")}
            ${pccBeta30Action("primitive-first-layer","cube","First Layer")}
          </div>
        </div>

        <div class="pcc-beta30-menu-wrap">
          <button class="pcc-beta30-main" data-beta30-menu="move" title="Verschieben">${pccBeta30Icon("move")}</button>
          <div class="pcc-beta30-menu-body">
            ${pccBeta30Action("move-left","move","Links")}
            ${pccBeta30Action("move-right","move","Rechts")}
            ${pccBeta30Action("move-up","move","Nach hinten")}
            ${pccBeta30Action("move-down","move","Nach vorne")}
            ${pccBeta30Action("z-up","move","Z höher")}
            ${pccBeta30Action("z-down","move","Z tiefer")}
            ${pccBeta30Action("center","center","Zentrieren")}
          </div>
        </div>

        <div class="pcc-beta30-menu-wrap">
          <button class="pcc-beta30-main" data-beta30-menu="rotate" title="Drehen">${pccBeta30Icon("rotate")}</button>
          <div class="pcc-beta30-menu-body">
            ${pccBeta30Action("rot-x","rotate","Rot X +15°")}
            ${pccBeta30Action("rot-y","rotate","Rot Y +15°")}
            ${pccBeta30Action("rot-z","rotate","Rot Z +15°")}
            ${pccBeta30Action("lay-flat","rotate","Flach legen")}
          </div>
        </div>

        <div class="pcc-beta30-menu-wrap">
          <button class="pcc-beta30-main" data-beta30-menu="scale" title="Skalieren">${pccBeta30Icon("scale")}</button>
          <div class="pcc-beta30-menu-body">
            ${pccBeta30Action("scale-down","scale","Kleiner")}
            ${pccBeta30Action("scale-up","scale","Größer")}
            ${pccBeta30Action("stretch-x-up","scale","Breite +")}
            ${pccBeta30Action("stretch-y-up","scale","Länge +")}
            ${pccBeta30Action("stretch-z-up","scale","Höhe +")}
          </div>
        </div>

        <div class="pcc-beta30-menu-wrap">
          <button class="pcc-beta30-main" data-beta30-menu="mirror" title="Spiegeln/Zerren">${pccBeta30Icon("mirror")}</button>
          <div class="pcc-beta30-menu-body">
            ${pccBeta30Action("mirror-x","mirror","Spiegel X")}
            ${pccBeta30Action("mirror-y","mirror","Spiegel Y")}
            ${pccBeta30Action("mirror-z","mirror","Spiegel Z")}
            ${pccBeta30Action("skew-x","mirror","Zerr X +5°")}
            ${pccBeta30Action("skew-y","mirror","Zerr Y +5°")}
          </div>
        </div>

        <div class="pcc-beta30-menu-wrap">
          <button class="pcc-beta30-main" data-beta30-menu="view" title="Ansicht">${pccBeta30Icon("view")}</button>
          <div class="pcc-beta30-menu-body">
            ${pccBeta30Action("zoom-out","view","Zoom -")}
            ${pccBeta30Action("zoom-in","view","Zoom +")}
            ${pccBeta30Action("reload-model","reload","Modell neu laden")}
            ${pccBeta30Action("reset","view","Reset")}
          </div>
        </div>

        <div class="pcc-beta30-menu-wrap">
          <button class="pcc-beta30-main" data-beta30-menu="color" title="Farbe">${pccBeta30Icon("color")}</button>
          <div class="pcc-beta30-menu-body">
            <div class="pcc-beta30-color-row">
              <input class="pcc-beta30-color" type="color" value="${color}" title="Objekt einfärben">
              ${swatches}
            </div>
          </div>
        </div>

        <button class="pcc-beta30-main pcc-beta30-delete" data-beta30-action="delete" title="Löschen">${pccBeta30Icon("trash")}</button>
      </div>
    `;
  };

  PCC_BETA30_STUDIO_CLASS.prototype.beta30InstallToolbar = function beta30InstallToolbar() {
    const root = this.shadowRoot;
    if (!root) return;

    root.querySelectorAll(".pcc-beta22-top-toolbar,.pcc-beta23-top-toolbar,.pcc-beta26-toolbar,.pcc-beta28-toolbar").forEach((node) => node.remove());

    const shell = root.querySelector(".studio-shell") || root.querySelector(".studio-grid")?.parentElement || root.querySelector(".buildplate")?.parentElement;
    if (!shell) return;

    let toolbar = root.querySelector(".pcc-beta30-toolbar");
    if (!toolbar) {
      const wrap = document.createElement("div");
      wrap.innerHTML = this.beta30ToolbarHtml().trim();
      toolbar = wrap.firstElementChild;
      shell.insertBefore(toolbar, shell.firstElementChild);
    }

    this.beta30SyncColor();

    if (toolbar.dataset.beta30Bound === "1") return;
    toolbar.dataset.beta30Bound = "1";

    toolbar.addEventListener("pointerdown", (event) => {
      event.stopPropagation();
    }, {capture:true});

    toolbar.addEventListener("click", (event) => {
      const menuButton = event.target?.closest?.("[data-beta30-menu]");
      if (menuButton) {
        event.preventDefault();
        event.stopPropagation();
        this.beta30ToggleMenu(menuButton.closest(".pcc-beta30-menu-wrap"));
        return;
      }

      const colorButton = event.target?.closest?.("[data-beta30-color]");
      if (colorButton) {
        event.preventDefault();
        event.stopPropagation();
        this.beta22SetObjectColor?.(colorButton.dataset.beta30Color);
        this.beta30SyncColor();
        this.queueMeshRender?.();
        return;
      }

      const actionButton = event.target?.closest?.("[data-beta30-action]");
      if (actionButton) {
        event.preventDefault();
        event.stopPropagation();

        const action = String(actionButton.dataset.beta30Action || "");
        const keepOpen = !["open-import","delete","primitive-cube","primitive-cuboid","primitive-cylinder","primitive-first-layer"].includes(action);
        if (!keepOpen) this.beta30CloseMenus();

        this.beta30ApplyAction(action);
      }
    }, {capture:true});

    toolbar.addEventListener("input", (event) => {
      const input = event.target?.closest?.(".pcc-beta30-color");
      if (!input) return;
      event.preventDefault();
      event.stopPropagation();
      this.beta22SetObjectColor?.(input.value);
      this.beta30SyncColor();
      this.queueMeshRender?.();
    }, {capture:true});

    root.addEventListener("pointerdown", (event) => {
      if (event.target?.closest?.(".pcc-beta30-toolbar")) return;
      if (event.target?.closest?.(".pcc-beta27-import-modal")) return;
      if (event.target?.closest?.(".buildplate")) return;
      this.beta30CloseMenus();
    }, {capture:true});
  };

  PCC_BETA30_STUDIO_CLASS.prototype.beta30ToggleMenu = function beta30ToggleMenu(wrap) {
    if (!wrap) return;
    const wasOpen = wrap.classList.contains("open");
    this.beta30CloseMenus();
    if (!wasOpen) {
      wrap.classList.add("open");
      wrap.querySelector(".pcc-beta30-main")?.classList.add("active");
    }
  };

  PCC_BETA30_STUDIO_CLASS.prototype.beta30CloseMenus = function beta30CloseMenus() {
    this.shadowRoot?.querySelectorAll(".pcc-beta30-menu-wrap.open").forEach((wrap) => {
      wrap.classList.remove("open");
      wrap.querySelector(".pcc-beta30-main")?.classList.remove("active");
    });
  };

  PCC_BETA30_STUDIO_CLASS.prototype.beta30ApplyAction = function beta30ApplyAction(action) {
    const text = String(action || "");

    if (text === "open-import") {
      this.openBeta7ImportAssistant?.();
      return;
    }

    if (text.startsWith("primitive-")) {
      this.beta21SetPrimitiveActive?.(text.replace("primitive-", ""));
      return;
    }

    if (text === "delete") {
      this.deleteActiveJob?.();
      return;
    }

    if (text === "reload-model") {
      this._pccBeta30MeshFailedKey = "";
      this.ensureStudioMeshLoaded?.(true);
      return;
    }

    this.beta22ApplyToolbarAction?.(text);
  };

  PCC_BETA30_STUDIO_CLASS.prototype.beta30SyncColor = function beta30SyncColor() {
    const toolbar = this.shadowRoot?.querySelector(".pcc-beta30-toolbar");
    if (!toolbar) return;

    const color = this.beta22ObjectColor?.() || "#00a9d6";
    const input = toolbar.querySelector(".pcc-beta30-color");
    if (input && input.value.toLowerCase() !== color.toLowerCase()) input.value = color;

    toolbar.querySelectorAll("[data-beta30-color]").forEach((button) => {
      button.classList.toggle("active", String(button.dataset.beta30Color).toLowerCase() === color.toLowerCase());
    });
  };

  PCC_BETA30_STUDIO_CLASS.prototype.beta30EnsurePrimitiveMesh = function beta30EnsurePrimitiveMesh() {
    if (!pccBeta30IsPrimitive(this._activeJob)) return false;

    const kind = pccBeta30PrimitiveKind(this._activeJob) || "cube";
    const mesh = typeof pccBeta20PrimitiveMesh === "function" ? pccBeta20PrimitiveMesh(kind) : null;
    if (!mesh?.triangles?.length) return false;

    this._studioMesh = mesh;
    this._studioMeshJobId = String(this._activeJob?.id || `primitive://${kind}`);
    this._studioMeshUrl = "";
    this._studioMeshError = "";
    this._studioModelImageUrl = "";
    return true;
  };

  PCC_BETA30_STUDIO_CLASS.prototype.queueMeshRender = function beta30QueueMeshRender() {
    this._pccBeta30CanvasDirty = true;
    if (this._pccBeta30RenderFrame) return;

    this._pccBeta30RenderFrame = requestAnimationFrame(() => {
      this._pccBeta30RenderFrame = 0;
      if (!this._pccBeta30CanvasDirty) return;
      this._pccBeta30CanvasDirty = false;
      this.renderMeshCanvas?.();
    });
  };

  PCC_BETA30_STUDIO_CLASS.prototype.renderMeshCanvas = function beta30RenderMeshCanvas() {
    if (this._pccBeta30Rendering) return;
    this._pccBeta30Rendering = true;

    try {
      this.beta30EnsurePrimitiveMesh();

      if (typeof PCC_BETA30_PREV_RENDER_MESH === "function") {
        PCC_BETA30_PREV_RENDER_MESH.call(this);
      }

      const buildplate = this.shadowRoot?.querySelector(".buildplate");
      if (buildplate) buildplate.classList.add("pcc-beta30-single-frame");
    } finally {
      this._pccBeta30Rendering = false;
    }
  };

  PCC_BETA30_STUDIO_CLASS.prototype.ensureStudioMeshLoaded = async function beta30EnsureStudioMeshLoaded(force=false) {
    if (pccBeta30IsPrimitive(this._activeJob)) {
      this.beta30EnsurePrimitiveMesh();
      this.queueMeshRender?.();
      return;
    }

    if (typeof PCC_BETA30_PREV_ENSURE_MESH === "function") {
      await PCC_BETA30_PREV_ENSURE_MESH.call(this, force);
    }
  };

  PCC_BETA30_STUDIO_CLASS.prototype.beta30BindMouse = function beta30BindMouse() {
    const root = this.shadowRoot;
    const buildplate = root?.querySelector(".buildplate");
    const canvas = root?.querySelector(".studio-mesh-canvas");
    if (!root || !buildplate || !canvas || buildplate.dataset.beta30MouseBound === "1") return;

    buildplate.dataset.beta30MouseBound = "1";

    const blockContext = (event) => {
      if (!event.target?.closest?.(".buildplate")) return;
      event.preventDefault();
      event.stopPropagation();
      this._studioContextMenu = null;
    };

    root.addEventListener("contextmenu", blockContext, {capture:true});
    buildplate.addEventListener("contextmenu", blockContext, {capture:true});
    canvas.addEventListener("contextmenu", blockContext, {capture:true});

    const state = {active:false, button:-1, x:0, y:0};

    const moveHandler = (event) => {
      if (!state.active) return;

      event.preventDefault();
      event.stopPropagation();

      const dx = event.clientX - state.x;
      const dy = event.clientY - state.y;
      state.x = event.clientX;
      state.y = event.clientY;

      const t = pccBeta30Transform(this);

      if (state.button === 0) {
        t.rz = toNumber(t.rz, 0) + dx * 0.32;
        t.rx = toNumber(t.rx, 0) - dy * 0.22;
      } else if (state.button === 2) {
        t.x = toNumber(t.x, 0) + dx;
        t.y = toNumber(t.y, 0) + dy;
      }

      if (this._activeJob) this._activeJob.transform = {...t};
      this.queueMeshRender?.();
    };

    const upHandler = (event) => {
      if (!state.active) return;

      event.preventDefault?.();
      event.stopPropagation?.();

      state.active = false;
      state.button = -1;
      buildplate.classList.remove("pcc-beta30-dragging");

      window.removeEventListener("pointermove", moveHandler, true);
      window.removeEventListener("pointerup", upHandler, true);
      window.removeEventListener("pointercancel", upHandler, true);

      try { canvas.releasePointerCapture(event.pointerId); } catch (_error) {}
    };

    canvas.addEventListener("pointerdown", (event) => {
      if (event.button !== 0 && event.button !== 2) return;

      event.preventDefault();
      event.stopPropagation();

      state.active = true;
      state.button = event.button;
      state.x = event.clientX;
      state.y = event.clientY;

      buildplate.classList.add("pcc-beta30-dragging");

      try { canvas.setPointerCapture(event.pointerId); } catch (_error) {}

      window.addEventListener("pointermove", moveHandler, true);
      window.addEventListener("pointerup", upHandler, true);
      window.addEventListener("pointercancel", upHandler, true);
    }, {capture:true});
  };

  PCC_BETA30_STUDIO_CLASS.prototype.openBeta7ImportAssistant = function beta30OpenImportAssistant(...args) {
    this._pccBeta30ImportOpen = true;
    this._pccBeta27ImportOpen = true;

    let result;
    if (typeof PCC_BETA30_PREV_OPEN_IMPORT === "function") {
      result = PCC_BETA30_PREV_OPEN_IMPORT.apply(this, args);
    }

    const promote = () => {
      this.beta27PromoteImportAssistant?.();
      this.beta30PolishImportPopup?.();
    };

    requestAnimationFrame(promote);
    window.setTimeout(promote, 50);
    window.setTimeout(promote, 160);
    window.setTimeout(promote, 360);

    return result;
  };

  PCC_BETA30_STUDIO_CLASS.prototype.beta30PolishImportPopup = function beta30PolishImportPopup() {
    const root = this.shadowRoot;
    const modal = root?.querySelector(".pcc-beta27-import-modal");
    const dialog = root?.querySelector(".pcc-beta27-import-dialog");
    if (!modal || !dialog) return;

    modal.dataset.beta30Stable = "1";
    dialog.dataset.beta30Stable = "1";

    dialog.querySelectorAll("h1,h2,h3").forEach((heading) => {
      if (String(heading.textContent || "").includes("Studio-Import")) heading.textContent = "Studio-Import";
    });

    dialog.querySelectorAll("button").forEach((button) => {
      const txt = String(button.textContent || "").trim();
      if (txt === "Auswahl ins Studio übernehmen") button.textContent = "Ins Studio übernehmen";
      if (txt === "Eine Ebene hoch") button.textContent = "Hoch";
      if (txt === "Aktualisieren") button.textContent = "Neu laden";
    });

    const folderArea = [...dialog.querySelectorAll("div,section")]
      .find((node) => {
        const text = String(node.textContent || "");
        return text.includes("Bad Bad Ordner") || text.includes("Deko Deko Ordner") || text.includes("Drucker Drucker Ordner");
      });

    if (folderArea) folderArea.classList.add("pcc-beta30-import-grid");
  };

  PCC_BETA30_STUDIO_CLASS.prototype.beta7ImportPlan = async function beta30ImportPlan(plan) {
    const beforeJobs = Array.isArray(this._jobs) ? [...this._jobs] : [];
    const beforeActive = this._activeJob || null;

    if (typeof PCC_BETA30_PREV_IMPORT_PLAN === "function") {
      await PCC_BETA30_PREV_IMPORT_PLAN.call(this, plan);
    }

    const afterActive = this._activeJob || null;

    this._pccBeta30PlateObjects = Array.isArray(this._pccBeta30PlateObjects) ? this._pccBeta30PlateObjects : [];

    for (const job of [...beforeJobs, beforeActive, afterActive]) {
      if (!job) continue;
      const id = String(job.id || job.file_path || job.path || job.name || "");
      if (!id) continue;
      if (!this._pccBeta30PlateObjects.some((item) => String(item.id || item.file_path || item.path || item.name || "") === id)) {
        this._pccBeta30PlateObjects.push(job);
      }
    }

    if (Array.isArray(this._jobs)) {
      const merged = [...this._jobs];
      for (const job of this._pccBeta30PlateObjects) {
        const id = String(job.id || job.file_path || job.path || job.name || "");
        if (!id) continue;
        if (!merged.some((item) => String(item.id || item.file_path || item.path || item.name || "") === id)) merged.push(job);
      }
      this._jobs = merged;
    }

    this._pccBeta30ImportOpen = true;
    this._pccBeta27ImportOpen = true;

    window.setTimeout(() => {
      this.ensureStudioMeshLoaded?.(true);
      this.beta30PolishImportPopup?.();
    }, 0);
  };

  PCC_BETA30_STUDIO_CLASS.prototype.handleContextMenu = function beta30HandleContextMenu(event) {
    if (event.target?.closest?.(".buildplate")) {
      event.preventDefault();
      event.stopPropagation();
      this._studioContextMenu = null;
    }
  };

  PCC_BETA30_STUDIO_CLASS.prototype.cleanupBetaStudioUi = function beta30CleanupBetaStudioUi() {
    this.beta30EnsureStyle();

    try { this.beta9EnsureStyle?.(); } catch (_error) {}
    try { this.beta9InstallSelector?.(); } catch (_error) {}
    try { this.beta9ApplyBuildplateVisual?.(); } catch (_error) {}
    try { this.beta20EnsureStyle?.(); } catch (_error) {}
    try { this.beta20InjectPrimitivePanel?.(); } catch (_error) {}
    try { this.beta21EnsureStyle?.(); } catch (_error) {}
    try { this.beta21SyncBuildplateState?.(); } catch (_error) {}
    try { this.beta22EnsureStyle?.(); } catch (_error) {}
    try { this.beta22HideRightInspector?.(); } catch (_error) {}
    try { this.beta22RemoveBottomMessages?.(); } catch (_error) {}

    this.beta30InstallToolbar();
    this.beta30BindMouse();

    const root = this.shadowRoot;
    root?.querySelectorAll(".pcc-beta22-top-toolbar,.pcc-beta23-top-toolbar,.pcc-beta26-toolbar,.pcc-beta28-toolbar,.context-menu,.pcc-context-menu,.gallery-context-menu,[data-context-menu]").forEach((node) => node.remove());

    const buildplate = root?.querySelector(".buildplate");
    if (buildplate) buildplate.classList.add("pcc-beta30-single-frame");

    if (this._pccBeta30ImportOpen || root?.querySelector(".pcc-beta27-import-modal")) {
      this._pccBeta30ImportOpen = true;
      requestAnimationFrame(() => {
        this.beta27PromoteImportAssistant?.();
        this.beta30PolishImportPopup?.();
      });
    }
  };

const PCC_BETA34_STUDIO_CLASS = customElements.get("printer-control-center-studio-card") || PrinterControlCenterStudioCard;
  const PCC_BETA34_PREV_CLEANUP = PCC_BETA34_STUDIO_CLASS.prototype.cleanupBetaStudioUi;
  const PCC_BETA34_PREV_OPEN_IMPORT = PCC_BETA34_STUDIO_CLASS.prototype.openBeta7ImportAssistant;
  const PCC_BETA34_PREV_IMPORT_PLAN = PCC_BETA34_STUDIO_CLASS.prototype.beta7ImportPlan;

  PCC_BETA34_STUDIO_CLASS.prototype.beta34EnsureStyle = function beta34EnsureStyle() {
    const root = this.shadowRoot;
    if (!root || root.querySelector("#pcc-beta34-clean-studio-ui-style")) return;

    const style = document.createElement("style");
    style.id = "pcc-beta34-clean-studio-ui-style";
    style.textContent = `
      .studio-shell{position:relative!important;}

      .pcc-beta22-top-toolbar,
      .pcc-beta23-top-toolbar,
      .pcc-beta26-toolbar,
      .pcc-beta28-toolbar{
        display:none!important;
        pointer-events:none!important;
      }

      .pcc-beta34-hidden,
      .pcc-beta34-footer-hidden,
      .studio-context,
      .beta4-floating-context,
      .pcc-context-menu,
      .context-menu,
      .gallery-context-menu,
      [data-context-menu]{
        display:none!important;
        pointer-events:none!important;
      }

      .studio-shell .status,
      .studio-shell .plan-note,
      .studio-shell .plan-summary,
      .studio-shell .studio-status,
      .studio-shell .studio-footer,
      .studio-shell .studio-log,
      .studio-shell [data-studio-plan-details-panel],
      .studio-shell [data-studio-health-panel]{
        display:none!important;
        pointer-events:none!important;
      }

      .pcc-beta27-import-modal{
        position:absolute!important;
        inset:42px auto auto 50%!important;
        transform:translateX(-50%)!important;
        width:min(620px,calc(100% - 32px))!important;
        height:auto!important;
        max-height:min(56vh,480px)!important;
        z-index:900!important;
        display:block!important;
        padding:0!important;
        margin:0!important;
        background:transparent!important;
        border:0!important;
        backdrop-filter:none!important;
      }

      .pcc-beta27-import-dialog{
        width:100%!important;
        max-height:min(56vh,480px)!important;
        overflow:auto!important;
        padding:10px!important;
        border:1px solid rgba(0,169,214,.70)!important;
        border-radius:8px!important;
        background:linear-gradient(180deg,rgba(13,20,25,.99),rgba(5,10,14,.99))!important;
        box-shadow:0 18px 42px rgba(0,0,0,.58)!important;
      }

      .pcc-beta27-import-close{
        position:absolute!important;
        right:8px!important;
        top:8px!important;
        width:28px!important;
        height:26px!important;
        border-radius:5px!important;
        padding:0!important;
      }

      .pcc-beta27-import-dialog h1,
      .pcc-beta27-import-dialog h2,
      .pcc-beta27-import-dialog h3{
        font-size:17px!important;
        margin:0 36px 8px 0!important;
        line-height:1.2!important;
      }

      .pcc-beta27-import-dialog p,
      .pcc-beta27-import-dialog div,
      .pcc-beta27-import-dialog span,
      .pcc-beta27-import-dialog label{
        font-size:12px!important;
        line-height:1.28!important;
      }

      .pcc-beta27-import-dialog button{
        min-height:26px!important;
        padding:3px 8px!important;
        border-radius:6px!important;
        font-size:12px!important;
        line-height:1.2!important;
      }

      .pcc-beta34-import-primary{
        display:inline-flex!important;
        align-items:center!important;
        justify-content:center!important;
        min-width:136px!important;
        background:rgba(0,120,155,.92)!important;
        color:#fff!important;
        border-color:rgba(0,210,255,.75)!important;
        font-weight:800!important;
      }

      .pcc-beta34-import-grid{
        display:grid!important;
        grid-template-columns:repeat(auto-fit,minmax(150px,1fr))!important;
        gap:6px!important;
      }
    `;
    root.appendChild(style);
  };

  PCC_BETA34_STUDIO_CLASS.prototype.beta34CleanTextNavigation = function beta34CleanTextNavigation() {
    const root = this.shadowRoot;
    if (!root) return;

    const remove = new Set([
      "Verschieben", "Drehen", "Skalieren",
      "Zoom -", "Zoom +",
      "Rot -45", "Rot +45",
      "Scale -", "Scale +",
      "Spiegel X", "Spiegel Y", "Spiegel Z",
      "Zerr X -", "Zerr X +",
      "Duplizieren", "Zentrieren", "Flach legen",
      "Links", "Rechts", "Nach hinten", "Nach vorne",
      "Z höher", "Z tiefer",
      "Modell neu laden", "Reset"
    ]);

    root.querySelectorAll("button").forEach((button) => {
      if (button.closest(".pcc-beta30-toolbar")) return;
      if (button.closest(".pcc-beta27-import-modal")) return;
      if (button.closest(".pcc-beta9-plate-selector")) return;
      if (button.closest(".pcc-beta20-primitive-panel")) return;

      const text = String(button.textContent || "").trim().replace(/\s+/g, " ");
      if (remove.has(text)) {
        button.classList.add("pcc-beta34-hidden");
        button.remove();
      }
    });

    root.querySelectorAll("div,span,small").forEach((node) => {
      if (node.closest(".pcc-beta27-import-modal")) return;
      const text = String(node.textContent || "").trim();
      if (text === "object Object" || text === "[object Object]" || text === "Object Object") {
        node.classList.add("pcc-beta34-hidden");
        node.remove();
      }
    });
  };

  PCC_BETA34_STUDIO_CLASS.prototype.beta34RemoveFooters = function beta34RemoveFooters() {
    const root = this.shadowRoot;
    if (!root) return;

    const badTexts = [
      "Noch kein Dry-Run",
      "Dry-Run",
      "STL-Mesh nicht geladen",
      "Kein STL-/Geometrie-Link",
      "Modellbild-Fallback aktiv",
      "Studio-Job aus Galerie",
      "planning_only"
    ];

    root.querySelectorAll("div,p,small,section,article,footer").forEach((node) => {
      if (node.closest(".pcc-beta27-import-modal")) return;
      if (node.closest(".pcc-beta9-plate-selector")) return;
      if (node.closest(".pcc-beta20-primitive-panel")) return;
      if (node.closest(".pcc-beta30-toolbar")) return;

      const text = String(node.textContent || "").trim();
      if (!text || text.length > 260) return;

      if (badTexts.some((bad) => text.includes(bad))) {
        node.classList.add("pcc-beta34-footer-hidden");
        node.remove();
      }
    });
  };

  PCC_BETA34_STUDIO_CLASS.prototype.beta34KillContextMenus = function beta34KillContextMenus() {
    const root = this.shadowRoot;
    if (!root) return;

    root.querySelectorAll(".studio-context,.beta4-floating-context,.pcc-context-menu,.context-menu,.gallery-context-menu,[data-context-menu]").forEach((node) => node.remove());

    if (this._pccBeta34ContextKilled === true) return;
    this._pccBeta34ContextKilled = true;

    const handler = (event) => {
      if (!event.target?.closest?.(".buildplate")) return;
      event.preventDefault();
      event.stopPropagation();
      this._studioContextMenu = null;
      root.querySelectorAll(".studio-context,.beta4-floating-context,.pcc-context-menu,.context-menu,.gallery-context-menu,[data-context-menu]").forEach((node) => node.remove());
    };

    root.addEventListener("contextmenu", handler, {capture:true});
    root.addEventListener("pointerdown", (event) => {
      if (event.button === 2 && event.target?.closest?.(".buildplate")) {
        this._studioContextMenu = null;
        root.querySelectorAll(".studio-context,.beta4-floating-context,.pcc-context-menu,.context-menu,.gallery-context-menu,[data-context-menu]").forEach((node) => node.remove());
      }
    }, {capture:true});
  };

  PCC_BETA34_STUDIO_CLASS.prototype.handleContextMenu = function beta34HandleContextMenu(event) {
    if (event.target?.closest?.(".buildplate")) {
      event.preventDefault();
      event.stopPropagation();
      this._studioContextMenu = null;
      this.shadowRoot?.querySelectorAll(".studio-context,.beta4-floating-context,.pcc-context-menu,.context-menu,.gallery-context-menu,[data-context-menu]").forEach((node) => node.remove());
    }
  };

  PCC_BETA34_STUDIO_CLASS.prototype.openBeta7ImportAssistant = function beta34OpenImportAssistant(...args) {
    this._pccBeta34ImportOpen = true;
    this._pccBeta30ImportOpen = true;
    this._pccBeta27ImportOpen = true;

    let result;
    if (typeof PCC_BETA34_PREV_OPEN_IMPORT === "function") {
      result = PCC_BETA34_PREV_OPEN_IMPORT.apply(this, args);
    }

    const polish = () => {
      this.beta27PromoteImportAssistant?.();
      this.beta34PolishImportPopup?.();
    };

    requestAnimationFrame(polish);
    window.setTimeout(polish, 60);
    window.setTimeout(polish, 180);
    window.setTimeout(polish, 420);

    return result;
  };

  PCC_BETA34_STUDIO_CLASS.prototype.beta34PolishImportPopup = function beta34PolishImportPopup() {
    const root = this.shadowRoot;
    const modal = root?.querySelector(".pcc-beta27-import-modal");
    const dialog = root?.querySelector(".pcc-beta27-import-dialog");
    if (!modal || !dialog) return;

    modal.dataset.beta34Stable = "1";
    dialog.dataset.beta34Stable = "1";

    dialog.querySelectorAll("h1,h2,h3").forEach((heading) => {
      if (String(heading.textContent || "").includes("Studio-Import")) heading.textContent = "Studio-Import";
    });

    dialog.querySelectorAll("button").forEach((button) => {
      const txt = String(button.textContent || "").trim();

      if (txt === "Auswahl ins Studio übernehmen" || txt === "Ins Studio übernehmen") {
        button.textContent = "Objekt importieren";
        button.classList.add("pcc-beta34-import-primary");
        button.dataset.beta34ImportObject = "1";
      }

      if (txt === "Eine Ebene hoch") button.textContent = "Hoch";
      if (txt === "Aktualisieren") button.textContent = "Neu laden";
    });

    if (dialog.dataset.beta34ClickBound !== "1") {
      dialog.dataset.beta34ClickBound = "1";
      dialog.addEventListener("click", (event) => {
        const button = event.target?.closest?.("[data-beta34-extra-import-object],[data-beta34-import-object]");
        if (!button) return;
        event.preventDefault();
        event.stopPropagation();
        this.beta7ImportSelected?.();
      }, {capture:true});
    }

    const state = this._beta7Import;
    const selected = Boolean(state?.selected || state?.selectedItem || state?.plan || state?.path);
    if (selected && !dialog.querySelector("[data-beta34-extra-import-object]")) {
      const footer = document.createElement("div");
      footer.style.display = "flex";
      footer.style.justifyContent = "flex-end";
      footer.style.gap = "8px";
      footer.style.marginTop = "8px";
      footer.innerHTML = `<button class="pcc-beta34-import-primary" data-beta34-extra-import-object="1" type="button">Objekt importieren</button>`;
      dialog.appendChild(footer);
    }

    const folderArea = [...dialog.querySelectorAll("div,section")]
      .find((node) => {
        const text = String(node.textContent || "");
        return text.includes("Bad Bad Ordner") || text.includes("Deko Deko Ordner") || text.includes("Drucker Drucker Ordner");
      });

    if (folderArea) folderArea.classList.add("pcc-beta34-import-grid");
  };

  PCC_BETA34_STUDIO_CLASS.prototype.beta7ImportPlan = async function beta34ImportPlan(plan) {
    const beforeJobs = Array.isArray(this._jobs) ? [...this._jobs] : [];
    const beforeActive = this._activeJob || null;

    if (typeof PCC_BETA34_PREV_IMPORT_PLAN === "function") {
      await PCC_BETA34_PREV_IMPORT_PLAN.call(this, plan);
    }

    const afterActive = this._activeJob || null;
    this._pccBeta34PlateObjects = Array.isArray(this._pccBeta34PlateObjects) ? this._pccBeta34PlateObjects : [];

    for (const job of [...beforeJobs, beforeActive, afterActive]) {
      if (!job) continue;
      const id = String(job.id || job.file_path || job.path || job.name || job.modelName || "");
      if (!id) continue;
      if (!this._pccBeta34PlateObjects.some((item) => String(item.id || item.file_path || item.path || item.name || item.modelName || "") === id)) {
        this._pccBeta34PlateObjects.push(job);
      }
    }

    if (Array.isArray(this._jobs)) {
      const merged = [...this._jobs];
      for (const job of this._pccBeta34PlateObjects) {
        const id = String(job.id || job.file_path || job.path || job.name || job.modelName || "");
        if (!id) continue;
        if (!merged.some((item) => String(item.id || item.file_path || item.path || item.name || item.modelName || "") === id)) merged.push(job);
      }
      this._jobs = merged;
    }

    this._pccBeta34ImportOpen = true;
    this._pccBeta30ImportOpen = true;
    this._pccBeta27ImportOpen = true;

    window.setTimeout(() => {
      this.ensureStudioMeshLoaded?.(true);
      this.beta34PolishImportPopup?.();
      this.beta34RemoveFooters?.();
      this.render?.();
    }, 0);
  };

  PCC_BETA34_STUDIO_CLASS.prototype.beta34FinalCleanup = function beta34FinalCleanup() {
    this.beta34EnsureStyle();
    this.beta34CleanTextNavigation();
    this.beta34RemoveFooters();
    this.beta34KillContextMenus();

    try { this.beta9ApplyBuildplateVisual?.(); } catch (_error) {}

    if (this._pccBeta34ImportOpen || this.shadowRoot?.querySelector(".pcc-beta27-import-modal")) {
      requestAnimationFrame(() => this.beta34PolishImportPopup());
    }
  };

  PCC_BETA34_STUDIO_CLASS.prototype.cleanupBetaStudioUi = function beta34CleanupBetaStudioUi(...args) {
    if (typeof PCC_BETA34_PREV_CLEANUP === "function") {
      try { PCC_BETA34_PREV_CLEANUP.apply(this, args); } catch (_error) {}
    }

    this.beta34FinalCleanup();

    requestAnimationFrame(() => this.beta34FinalCleanup());
    window.setTimeout(() => this.beta34FinalCleanup(), 80);
  };

const PCC_BETA35_STUDIO_CLASS = customElements.get("printer-control-center-studio-card") || PrinterControlCenterStudioCard;
  const PCC_BETA35_PREV_CLEANUP = PCC_BETA35_STUDIO_CLASS.prototype.cleanupBetaStudioUi;
  const PCC_BETA35_PREV_OPEN_IMPORT = PCC_BETA35_STUDIO_CLASS.prototype.openBeta7ImportAssistant;
  const PCC_BETA35_PREV_IMPORT_PLAN = PCC_BETA35_STUDIO_CLASS.prototype.beta7ImportPlan;

  function pccBeta35ToNumber(value, fallback=0) {
    const n = Number(value);
    return Number.isFinite(n) ? n : fallback;
  }

  function pccBeta35Transform(instance) {
    const base = typeof defaultTransform === "function" ? defaultTransform() : {x:0,y:0,z:0,rx:0,ry:0,rz:0,scale:100,sx:100,sy:100,sz:100,skewX:0,skewY:0};
    instance._transform = {...base, ...(instance._transform || {}), ...(instance._activeJob?.transform || {})};
    return instance._transform;
  }

  PCC_BETA35_STUDIO_CLASS.prototype.beta35EnsureStyle = function beta35EnsureStyle() {
    const root = this.shadowRoot;
    if (!root || root.querySelector("#pcc-beta35-import-popup-rightdrag-style")) return;

    const style = document.createElement("style");
    style.id = "pcc-beta35-import-popup-rightdrag-style";
    style.textContent = `
      .studio-shell{position:relative!important;}

      .studio-context,
      .beta4-floating-context,
      .pcc-context-menu,
      .context-menu,
      .gallery-context-menu,
      [data-context-menu]{
        display:none!important;
        pointer-events:none!important;
      }

      .pcc-beta27-import-modal{
        position:absolute!important;
        inset:42px auto auto 50%!important;
        transform:translateX(-50%)!important;
        width:min(700px,calc(100% - 34px))!important;
        height:auto!important;
        max-height:min(62vh,540px)!important;
        z-index:940!important;
        display:block!important;
        padding:0!important;
        margin:0!important;
        background:transparent!important;
        border:0!important;
        backdrop-filter:none!important;
      }

      .pcc-beta27-import-dialog{
        width:100%!important;
        max-height:min(62vh,540px)!important;
        overflow:hidden!important;
        display:flex!important;
        flex-direction:column!important;
        padding:0!important;
        border:1px solid rgba(0,169,214,.72)!important;
        border-radius:8px!important;
        background:linear-gradient(180deg,rgba(13,20,25,.99),rgba(5,10,14,.99))!important;
        box-shadow:0 18px 42px rgba(0,0,0,.58)!important;
      }

      .pcc-beta35-import-header{
        position:sticky;
        top:0;
        z-index:3;
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:10px;
        padding:10px 12px 8px;
        border-bottom:1px solid rgba(0,169,214,.32);
        background:linear-gradient(180deg,rgba(18,28,34,.99),rgba(8,15,20,.99));
      }

      .pcc-beta35-import-title{
        font-size:16px;
        font-weight:800;
        color:#fff;
      }

      .pcc-beta35-import-actions{
        display:flex;
        align-items:center;
        gap:8px;
      }

      .pcc-beta35-import-primary{
        min-height:28px!important;
        min-width:132px!important;
        display:inline-flex!important;
        align-items:center!important;
        justify-content:center!important;
        padding:4px 10px!important;
        border:1px solid rgba(0,210,255,.78)!important;
        border-radius:6px!important;
        background:rgba(0,120,155,.94)!important;
        color:#fff!important;
        font-size:12px!important;
        font-weight:800!important;
        cursor:pointer!important;
      }

      .pcc-beta35-import-primary:disabled{
        opacity:.42!important;
        cursor:not-allowed!important;
      }

      .pcc-beta27-import-close{
        position:static!important;
        width:28px!important;
        height:26px!important;
        border-radius:5px!important;
        padding:0!important;
        flex:0 0 auto!important;
      }

      .pcc-beta35-import-body{
        overflow:auto!important;
        padding:10px 12px 12px!important;
        max-height:calc(min(62vh,540px) - 50px)!important;
      }

      .pcc-beta27-import-dialog > :not(.pcc-beta35-import-header):not(.pcc-beta35-import-body){
        margin-left:12px!important;
        margin-right:12px!important;
      }

      .pcc-beta35-import-body h1,
      .pcc-beta35-import-body h2,
      .pcc-beta35-import-body h3{
        display:none!important;
      }

      .pcc-beta35-import-body p,
      .pcc-beta35-import-body div,
      .pcc-beta35-import-body span,
      .pcc-beta35-import-body label{
        font-size:12px!important;
        line-height:1.25!important;
      }

      .pcc-beta35-import-body button{
        min-height:25px!important;
        padding:3px 8px!important;
        border-radius:6px!important;
        font-size:12px!important;
        line-height:1.2!important;
      }

      .pcc-beta35-import-body input,
      .pcc-beta35-import-body select{
        min-height:25px!important;
        border-radius:6px!important;
        font-size:12px!important;
      }

      .pcc-beta35-import-card-grid{
        display:grid!important;
        grid-template-columns:repeat(auto-fill,minmax(132px,1fr))!important;
        gap:8px!important;
        align-items:stretch!important;
        margin-top:8px!important;
      }

      .pcc-beta35-import-card{
        min-height:92px!important;
        display:flex!important;
        flex-direction:column!important;
        justify-content:space-between!important;
        gap:5px!important;
        padding:8px!important;
        border:1px solid rgba(0,169,214,.32)!important;
        border-radius:8px!important;
        background:linear-gradient(180deg,rgba(12,24,28,.96),rgba(8,15,18,.96))!important;
        box-shadow:inset 0 1px 0 rgba(255,255,255,.05)!important;
      }

      .pcc-beta35-import-card:hover{
        border-color:rgba(0,210,255,.72)!important;
        background:linear-gradient(180deg,rgba(14,34,40,.98),rgba(8,18,22,.98))!important;
      }

      .pcc-beta35-import-card button{
        width:100%!important;
      }

      .pcc-beta35-remove-extra{
        display:none!important;
      }

      .buildplate,
      .buildplate .studio-mesh-canvas{
        user-select:none!important;
        -webkit-user-select:none!important;
      }

      .buildplate .studio-mesh-canvas{
        cursor:grab!important;
      }

      .buildplate.pcc-beta35-dragging .studio-mesh-canvas,
      .buildplate.pcc-beta35-dragging{
        cursor:grabbing!important;
      }
    `;
    root.appendChild(style);
  };

  PCC_BETA35_STUDIO_CLASS.prototype.beta35IsImportSelectionReady = function beta35IsImportSelectionReady() {
    const state = this._beta7Import || this._studioImport || {};
    const direct = Boolean(
      state.selected ||
      state.selectedItem ||
      state.selectedFile ||
      state.selectedModel ||
      state.selectedPath ||
      state.plan ||
      state.prepared ||
      state.link ||
      state.model ||
      state.file
    );
    if (direct) return true;

    const dialog = this.shadowRoot?.querySelector(".pcc-beta27-import-dialog");
    const text = String(dialog?.textContent || "");
    if (!text.includes("Ausgewählt:")) return false;

    const selectedLine = text.split("Ausgewählt:").slice(1).join(" ").trim();
    return selectedLine.length > 2 && !selectedLine.startsWith("—") && !selectedLine.startsWith("-");
  };

  PCC_BETA35_STUDIO_CLASS.prototype.beta35EnsureImportShell = function beta35EnsureImportShell() {
    const root = this.shadowRoot;
    const dialog = root?.querySelector(".pcc-beta27-import-dialog");
    if (!dialog) return;

    dialog.querySelectorAll("[data-beta31-extra-import-object],[data-beta34-extra-import-object],[data-beta35-extra-import-object]").forEach((node) => {
      node.closest("div")?.remove();
      node.remove();
    });

    dialog.querySelectorAll(".pcc-beta31-import-primary,.pcc-beta34-import-primary").forEach((button) => {
      if (button.dataset.beta35Primary === "1") return;
      button.classList.add("pcc-beta35-remove-extra");
    });

    let header = dialog.querySelector(".pcc-beta35-import-header");
    let body = dialog.querySelector(".pcc-beta35-import-body");

    if (!header) {
      header = document.createElement("div");
      header.className = "pcc-beta35-import-header";
      header.innerHTML = `
        <div class="pcc-beta35-import-title">Studio-Import</div>
        <div class="pcc-beta35-import-actions">
          <button class="pcc-beta35-import-primary" data-beta35-import-object="1" type="button" disabled>Objekt importieren</button>
          <button class="pcc-beta27-import-close" type="button" title="Schließen">×</button>
        </div>
      `;
      dialog.insertBefore(header, dialog.firstChild);
    }

    if (!body) {
      body = document.createElement("div");
      body.className = "pcc-beta35-import-body";

      const nodes = [...dialog.childNodes].filter((node) => node !== header && node.nodeType === 1);
      for (const node of nodes) {
        if (node.classList?.contains?.("pcc-beta35-import-body")) continue;
        body.appendChild(node);
      }
      dialog.appendChild(body);
    }

    const oldCloseButtons = [...body.querySelectorAll("button")].filter((button) => String(button.textContent || "").trim() === "Schließen");
    oldCloseButtons.forEach((button) => button.remove());

    if (dialog.dataset.beta35ShellBound !== "1") {
      dialog.dataset.beta35ShellBound = "1";

      dialog.addEventListener("click", (event) => {
        const close = event.target?.closest?.(".pcc-beta27-import-close");
        if (close) {
          event.preventDefault();
          event.stopPropagation();
          this.beta27CloseImportPopup?.();
          this._pccBeta35ImportOpen = false;
          return;
        }

        const importButton = event.target?.closest?.("[data-beta35-import-object]");
        if (importButton) {
          event.preventDefault();
          event.stopPropagation();
          if (importButton.disabled) return;
          this.beta7ImportSelected?.();
          window.setTimeout(() => {
            this.ensureStudioMeshLoaded?.(true);
            this.queueMeshRender?.();
            this.render?.();
          }, 0);
          return;
        }

        window.setTimeout(() => this.beta35PolishImportPopup(), 0);
        window.setTimeout(() => this.beta35PolishImportPopup(), 120);
      }, {capture:true});

      dialog.addEventListener("input", () => window.setTimeout(() => this.beta35PolishImportPopup(), 0), {capture:true});
      dialog.addEventListener("change", () => window.setTimeout(() => this.beta35PolishImportPopup(), 0), {capture:true});
    }
  };

  PCC_BETA35_STUDIO_CLASS.prototype.beta35GridImportFolders = function beta35GridImportFolders() {
    const dialog = this.shadowRoot?.querySelector(".pcc-beta27-import-dialog");
    const body = dialog?.querySelector(".pcc-beta35-import-body");
    if (!dialog || !body) return;

    let cards = [];

    body.querySelectorAll("button").forEach((button) => {
      const text = String(button.textContent || "").trim();
      if (text !== "Öffnen") return;

      let card = button.parentElement;
      for (let i = 0; i < 4 && card && card !== body; i++) {
        const cardText = String(card.textContent || "").trim();
        if (cardText.includes("Ordner") && cardText.length < 180) break;
        card = card.parentElement;
      }

      if (!card || card === body || card.closest(".pcc-beta35-import-card-grid")) return;

      const cardText = String(card.textContent || "").trim();
      if (!cardText.includes("Ordner") || cardText.length > 220) return;

      card.classList.add("pcc-beta35-import-card");
      cards.push(card);
    });

    if (cards.length < 2) return;

    const first = cards[0];
    const wrapper = document.createElement("div");
    wrapper.className = "pcc-beta35-import-card-grid";
    first.parentElement.insertBefore(wrapper, first);

    cards.forEach((card) => wrapper.appendChild(card));
  };

  PCC_BETA35_STUDIO_CLASS.prototype.beta35PolishImportPopup = function beta35PolishImportPopup() {
    const root = this.shadowRoot;
    const modal = root?.querySelector(".pcc-beta27-import-modal");
    const dialog = root?.querySelector(".pcc-beta27-import-dialog");
    if (!modal || !dialog) return;

    modal.dataset.beta35Stable = "1";
    dialog.dataset.beta35Stable = "1";

    this.beta35EnsureImportShell();

    const body = dialog.querySelector(".pcc-beta35-import-body") || dialog;

    body.querySelectorAll("h1,h2,h3").forEach((heading) => {
      if (String(heading.textContent || "").includes("Studio-Import")) heading.remove();
    });

    body.querySelectorAll("button").forEach((button) => {
      const txt = String(button.textContent || "").trim();

      if (txt === "Auswahl ins Studio übernehmen" || txt === "Ins Studio übernehmen") {
        button.classList.add("pcc-beta35-remove-extra");
        button.dataset.beta35LegacyImport = "1";
      }

      if (txt === "Eine Ebene hoch") button.textContent = "Hoch";
      if (txt === "Aktualisieren") button.textContent = "Neu laden";
    });

    const ready = this.beta35IsImportSelectionReady();
    const primary = dialog.querySelector("[data-beta35-import-object]");
    if (primary) {
      primary.disabled = !ready;
      primary.textContent = ready ? "Objekt importieren" : "Objekt auswählen";
      primary.dataset.beta35Primary = "1";
    }

    this.beta35GridImportFolders();
  };

  PCC_BETA35_STUDIO_CLASS.prototype.openBeta7ImportAssistant = function beta35OpenImportAssistant(...args) {
    this._pccBeta35ImportOpen = true;
    this._pccBeta34ImportOpen = true;
    this._pccBeta30ImportOpen = true;
    this._pccBeta27ImportOpen = true;

    let result;
    if (typeof PCC_BETA35_PREV_OPEN_IMPORT === "function") {
      result = PCC_BETA35_PREV_OPEN_IMPORT.apply(this, args);
    }

    const polish = () => {
      this.beta27PromoteImportAssistant?.();
      this.beta35PolishImportPopup?.();
    };

    requestAnimationFrame(polish);
    window.setTimeout(polish, 40);
    window.setTimeout(polish, 120);
    window.setTimeout(polish, 260);
    window.setTimeout(polish, 520);

    return result;
  };

  PCC_BETA35_STUDIO_CLASS.prototype.beta7ImportPlan = async function beta35ImportPlan(plan) {
    const beforeJobs = Array.isArray(this._jobs) ? [...this._jobs] : [];
    const beforeActive = this._activeJob || null;

    if (typeof PCC_BETA35_PREV_IMPORT_PLAN === "function") {
      await PCC_BETA35_PREV_IMPORT_PLAN.call(this, plan);
    }

    const afterActive = this._activeJob || null;
    this._pccBeta35PlateObjects = Array.isArray(this._pccBeta35PlateObjects) ? this._pccBeta35PlateObjects : [];

    for (const job of [...beforeJobs, beforeActive, afterActive]) {
      if (!job) continue;
      const id = String(job.id || job.file_path || job.path || job.name || job.modelName || "");
      if (!id) continue;
      if (!this._pccBeta35PlateObjects.some((item) => String(item.id || item.file_path || item.path || item.name || item.modelName || "") === id)) {
        this._pccBeta35PlateObjects.push(job);
      }
    }

    if (Array.isArray(this._jobs)) {
      const merged = [...this._jobs];
      for (const job of this._pccBeta35PlateObjects) {
        const id = String(job.id || job.file_path || job.path || job.name || job.modelName || "");
        if (!id) continue;
        if (!merged.some((item) => String(item.id || item.file_path || item.path || item.name || item.modelName || "") === id)) merged.push(job);
      }
      this._jobs = merged;
    }

    window.setTimeout(() => {
      this.ensureStudioMeshLoaded?.(true);
      this.queueMeshRender?.();
      this.render?.();
    }, 0);
  };

  PCC_BETA35_STUDIO_CLASS.prototype.beta35BindRightDrag = function beta35BindRightDrag() {
    const root = this.shadowRoot;
    const buildplate = root?.querySelector(".buildplate");
    if (!root || !buildplate || buildplate.dataset.beta35RightDragBound === "1") return;

    buildplate.dataset.beta35RightDragBound = "1";

    const removeMenus = () => {
      this._studioContextMenu = null;
      root.querySelectorAll(".studio-context,.beta4-floating-context,.pcc-context-menu,.context-menu,.gallery-context-menu,[data-context-menu]").forEach((node) => node.remove());
    };

    const blockContext = (event) => {
      if (!event.target?.closest?.(".buildplate")) return;
      event.preventDefault();
      event.stopPropagation();
      removeMenus();
    };

    root.addEventListener("contextmenu", blockContext, {capture:true});
    buildplate.addEventListener("contextmenu", blockContext, {capture:true});
    window.addEventListener("contextmenu", (event) => {
      if (!root.contains(event.target)) return;
      if (!event.target?.closest?.(".buildplate")) return;
      event.preventDefault();
      event.stopPropagation();
      removeMenus();
    }, true);

    const state = {active:false, button:-1, x:0, y:0};

    const moveHandler = (event) => {
      if (!state.active) return;

      event.preventDefault();
      event.stopPropagation();

      const dx = event.clientX - state.x;
      const dy = event.clientY - state.y;
      state.x = event.clientX;
      state.y = event.clientY;

      const t = pccBeta35Transform(this);

      if (state.button === 0) {
        t.rz = pccBeta35ToNumber(t.rz, 0) + dx * 0.32;
        t.rx = pccBeta35ToNumber(t.rx, 0) - dy * 0.22;
      }

      if (state.button === 2) {
        t.x = pccBeta35ToNumber(t.x, 0) + dx;
        t.y = pccBeta35ToNumber(t.y, 0) + dy;
      }

      if (this._activeJob) this._activeJob.transform = {...t};
      this.queueMeshRender?.();
      removeMenus();
    };

    const upHandler = (event) => {
      if (!state.active) return;

      event.preventDefault?.();
      event.stopPropagation?.();

      state.active = false;
      state.button = -1;
      buildplate.classList.remove("pcc-beta35-dragging");

      window.removeEventListener("pointermove", moveHandler, true);
      window.removeEventListener("pointerup", upHandler, true);
      window.removeEventListener("pointercancel", upHandler, true);

      removeMenus();
    };

    buildplate.addEventListener("pointerdown", (event) => {
      if (event.target?.closest?.(".pcc-beta27-import-modal")) return;
      if (event.target?.closest?.(".pcc-beta9-plate-selector")) return;
      if (event.button !== 0 && event.button !== 2) return;

      event.preventDefault();
      event.stopPropagation();

      state.active = true;
      state.button = event.button;
      state.x = event.clientX;
      state.y = event.clientY;

      buildplate.classList.add("pcc-beta35-dragging");
      removeMenus();

      try { buildplate.setPointerCapture(event.pointerId); } catch (_error) {}

      window.addEventListener("pointermove", moveHandler, true);
      window.addEventListener("pointerup", upHandler, true);
      window.addEventListener("pointercancel", upHandler, true);
    }, {capture:true});
  };

  PCC_BETA35_STUDIO_CLASS.prototype.handleContextMenu = function beta35HandleContextMenu(event) {
    if (event.target?.closest?.(".buildplate")) {
      event.preventDefault();
      event.stopPropagation();
      this._studioContextMenu = null;
      this.shadowRoot?.querySelectorAll(".studio-context,.beta4-floating-context,.pcc-context-menu,.context-menu,.gallery-context-menu,[data-context-menu]").forEach((node) => node.remove());
    }
  };

  PCC_BETA35_STUDIO_CLASS.prototype.beta35FinalCleanup = function beta35FinalCleanup() {
    this.beta35EnsureStyle();

    try { this.beta34CleanTextNavigation?.(); } catch (_error) {}
    try { this.beta34RemoveFooters?.(); } catch (_error) {}
    try { this.beta34KillContextMenus?.(); } catch (_error) {}

    this.beta35BindRightDrag();

    this.shadowRoot?.querySelectorAll("[data-beta31-extra-import-object],[data-beta34-extra-import-object],[data-beta35-extra-import-object],.studio-context,.beta4-floating-context,.pcc-context-menu,.context-menu,.gallery-context-menu,[data-context-menu]").forEach((node) => node.remove());

    if (this._pccBeta35ImportOpen || this.shadowRoot?.querySelector(".pcc-beta27-import-modal")) {
      requestAnimationFrame(() => this.beta35PolishImportPopup());
    }
  };

  PCC_BETA35_STUDIO_CLASS.prototype.cleanupBetaStudioUi = function beta35CleanupBetaStudioUi(...args) {
    if (typeof PCC_BETA35_PREV_CLEANUP === "function") {
      try { PCC_BETA35_PREV_CLEANUP.apply(this, args); } catch (_error) {}
    }

    this.beta35FinalCleanup();

    requestAnimationFrame(() => this.beta35FinalCleanup());
    window.setTimeout(() => this.beta35FinalCleanup(), 80);
  };

const PCC_BETA36_STUDIO_CLASS = customElements.get("printer-control-center-studio-card") || PrinterControlCenterStudioCard;
  const PCC_BETA36_PREV_CLEANUP = PCC_BETA36_STUDIO_CLASS.prototype.cleanupBetaStudioUi;
  const PCC_BETA36_PREV_BETA7_IMPORT_PLAN = PCC_BETA36_STUDIO_CLASS.prototype.beta7ImportPlan;
  const PCC_BETA36_PREV_BETA7_IMPORT_SELECTED = PCC_BETA36_STUDIO_CLASS.prototype.beta7ImportSelected;
  const PCC_BETA36_PREV_APPLY_ACTIVE_JOB = PCC_BETA36_STUDIO_CLASS.prototype.applyActiveJob;
  const PCC_BETA36_PREV_ENSURE_MESH = PCC_BETA36_STUDIO_CLASS.prototype.ensureStudioMeshLoaded;
  const PCC_BETA36_PREV_RENDER_MESH = PCC_BETA36_STUDIO_CLASS.prototype.renderMeshCanvas;

  function pccBeta36Number(value, fallback=0) {
    const n = Number(value);
    return Number.isFinite(n) ? n : fallback;
  }

  function pccBeta36Transform(instance) {
    const base = typeof defaultTransform === "function"
      ? defaultTransform()
      : {x:0,y:0,z:0,rx:0,ry:0,rz:0,scale:100,sx:100,sy:100,sz:100,skewX:0,skewY:0};
    instance._transform = {...base, ...(instance._transform || {}), ...(instance._activeJob?.transform || {})};
    return instance._transform;
  }

  function pccBeta36JobId(job) {
    return String(job?.id || job?.file_path || job?.path || job?.name || job?.modelName || job?.model?.path || job?.model?.name || "").trim();
  }

  function pccBeta36Preview(job) {
    const values = [
      job?.preview_data_url,
      job?.preview_url,
      job?.thumbnail,
      job?.image,
      job?.model?.preview_data_url,
      job?.model?.preview_url,
      job?.model?.thumbnail,
      job?.model?.image,
      job?.preview?.data_url,
      job?.preview?.url
    ];
    return values.map((value) => String(value || "").trim()).find(Boolean) || "";
  }

  function pccBeta36RenderablePath(job) {
    const values = [
      job?.archive_model_stl,
      job?.sd_model_stl,
      job?.model_stl,
      job?.stl_url,
      job?.mesh_url,
      job?.geometry_url,
      job?.preview_mesh_url,
      job?.download_url,
      job?.file_url,
      job?.file_path,
      job?.path,
      job?.model?.archive_model_stl,
      job?.model?.sd_model_stl,
      job?.model?.model_stl,
      job?.model?.stl_url,
      job?.model?.mesh_url,
      job?.model?.geometry_url,
      job?.model?.preview_mesh_url,
      job?.model?.download_url,
      job?.model?.file_url,
      job?.model?.file_path,
      job?.model?.path,
      job?.filename,
      job?.file_name,
      job?.modelName,
      job?.name,
      job?.model?.name
    ];
    return values.map((value) => String(value || "").trim()).find((value) => /\.(3mf|stl|obj)(\?|#|$)/i.test(value)) || "";
  }

  function pccBeta36MergeImportFields(target, source) {
    if (!target || !source) return target;

    const keys = [
      "archive_model_stl", "sd_model_stl", "model_stl", "stl_url", "mesh_url",
      "geometry_url", "preview_mesh_url", "download_url", "file_url",
      "file_path", "path", "preview_data_url", "preview_url", "thumbnail", "image"
    ];

    for (const key of keys) {
      if (!target[key] && source[key]) target[key] = source[key];
      target.model = target.model || {};
      if (!target.model[key] && source[key]) target.model[key] = source[key];
    }

    if (source.preview?.data_url && !target.preview_data_url) target.preview_data_url = source.preview.data_url;
    if (source.preview?.url && !target.preview_url) target.preview_url = source.preview.url;

    return target;
  }

  PCC_BETA36_STUDIO_CLASS.prototype.beta36EnsureStyle = function beta36EnsureStyle() {
    const root = this.shadowRoot;
    if (!root || root.querySelector("#pcc-beta36-studio-interaction-import-style")) return;

    const style = document.createElement("style");
    style.id = "pcc-beta36-studio-interaction-import-style";
    style.textContent = `
      .pcc-beta36-hidden-import,
      .pcc-beta36-hidden-context,
      .studio-context,
      .beta4-floating-context,
      .pcc-context-menu,
      .context-menu,
      .gallery-context-menu,
      [data-context-menu]{
        display:none!important;
        pointer-events:none!important;
      }

      .buildplate,
      .buildplate *{
        user-select:none!important;
        -webkit-user-select:none!important;
      }

      .buildplate{
        cursor:grab!important;
      }

      .buildplate.pcc-beta36-dragging{
        cursor:grabbing!important;
      }

      .pcc-beta36-imported-image{
        position:absolute!important;
        left:50%!important;
        top:50%!important;
        width:min(34%,260px)!important;
        max-height:42%!important;
        object-fit:contain!important;
        transform:translate(-50%,-50%)!important;
        filter:drop-shadow(0 16px 22px rgba(0,0,0,.38))!important;
        border:1px solid rgba(0,169,214,.55)!important;
        border-radius:8px!important;
        background:rgba(0,0,0,.22)!important;
        z-index:8!important;
        pointer-events:none!important;
      }

      .pcc-beta36-imported-placeholder{
        position:absolute!important;
        left:50%!important;
        top:50%!important;
        width:180px!important;
        height:120px!important;
        transform:translate(-50%,-50%)!important;
        display:grid!important;
        place-items:center!important;
        border:1px solid rgba(0,169,214,.72)!important;
        border-radius:8px!important;
        background:linear-gradient(135deg,rgba(0,120,160,.72),rgba(0,55,70,.72))!important;
        color:#fff!important;
        font-weight:800!important;
        font-size:12px!important;
        box-shadow:0 18px 28px rgba(0,0,0,.36)!important;
        z-index:8!important;
        pointer-events:none!important;
      }

      .pcc-beta30-menu-wrap.open > .pcc-beta30-menu-body,
      .pcc-beta28-menu-wrap.open > .pcc-beta28-menu-body{
        display:grid!important;
      }
    `;
    root.appendChild(style);
  };

  PCC_BETA36_STUDIO_CLASS.prototype.beta36HideSecondImportButton = function beta36HideSecondImportButton() {
    const root = this.shadowRoot;
    if (!root) return;

    root.querySelectorAll("button").forEach((button) => {
      if (button.closest(".pcc-beta30-toolbar")) return;
      if (button.closest(".pcc-beta28-toolbar")) return;
      if (button.closest(".pcc-beta27-import-modal")) return;
      if (button.closest(".pcc-beta9-plate-selector")) return;
      if (button.closest(".pcc-beta20-primitive-panel")) return;

      const text = String(button.textContent || "").trim().replace(/\s+/g, " ");
      if (text === "Importieren") {
        button.classList.add("pcc-beta36-hidden-import");
        button.remove();
      }
    });
  };

  PCC_BETA36_STUDIO_CLASS.prototype.beta36RemoveContextMenus = function beta36RemoveContextMenus() {
    const root = this.shadowRoot;
    if (!root) return;
    this._studioContextMenu = null;
    root.querySelectorAll(".studio-context,.beta4-floating-context,.pcc-context-menu,.context-menu,.gallery-context-menu,[data-context-menu]").forEach((node) => {
      node.classList.add("pcc-beta36-hidden-context");
      node.remove();
    });
  };

  PCC_BETA36_STUDIO_CLASS.prototype.beta36ToolbarKey = function beta36ToolbarKey(wrap) {
    const btn = wrap?.querySelector?.("[data-beta30-menu],[data-beta28-menu]");
    return String(btn?.dataset?.beta30Menu || btn?.dataset?.beta28Menu || btn?.getAttribute?.("title") || "");
  };

  PCC_BETA36_STUDIO_CLASS.prototype.beta36OpenToolbarMenu = function beta36OpenToolbarMenu(key) {
    const root = this.shadowRoot;
    if (!root || !key) return;
    const wraps = [...root.querySelectorAll(".pcc-beta30-menu-wrap,.pcc-beta28-menu-wrap")];

    wraps.forEach((wrap) => {
      const current = this.beta36ToolbarKey(wrap);
      const open = current === key;
      wrap.classList.toggle("open", open);
      wrap.querySelector(".pcc-beta30-main,.pcc-beta28-main")?.classList.toggle("active", open);
    });
  };

  PCC_BETA36_STUDIO_CLASS.prototype.beta36CloseToolbarMenus = function beta36CloseToolbarMenus() {
    const root = this.shadowRoot;
    if (!root) return;
    this._pccBeta36PinnedMenu = "";
    root.querySelectorAll(".pcc-beta30-menu-wrap.open,.pcc-beta28-menu-wrap.open").forEach((wrap) => {
      wrap.classList.remove("open");
      wrap.querySelector(".pcc-beta30-main,.pcc-beta28-main")?.classList.remove("active");
    });
  };

  PCC_BETA36_STUDIO_CLASS.prototype.beta36BindToolbar = function beta36BindToolbar() {
    const root = this.shadowRoot;
    const oldToolbar = root?.querySelector(".pcc-beta30-toolbar") || root?.querySelector(".pcc-beta28-toolbar");
    if (!root || !oldToolbar) return;

    if (oldToolbar.dataset.beta36Bound !== "1") {
      const toolbar = oldToolbar.cloneNode(true);
      toolbar.dataset.beta36Bound = "1";
      oldToolbar.replaceWith(toolbar);

      toolbar.addEventListener("pointerdown", (event) => {
        event.stopPropagation();
      }, {capture:true});

      toolbar.addEventListener("click", (event) => {
        const menuButton = event.target?.closest?.("[data-beta30-menu],[data-beta28-menu]");
        if (menuButton) {
          event.preventDefault();
          event.stopPropagation();

          const wrap = menuButton.closest(".pcc-beta30-menu-wrap,.pcc-beta28-menu-wrap");
          const key = this.beta36ToolbarKey(wrap);
          const wasOpen = wrap?.classList?.contains?.("open");

          this.beta36CloseToolbarMenus();

          if (!wasOpen && key) {
            this._pccBeta36PinnedMenu = key;
            this.beta36OpenToolbarMenu(key);
          }
          return;
        }

        const colorButton = event.target?.closest?.("[data-beta30-color],[data-beta28-color]");
        if (colorButton) {
          event.preventDefault();
          event.stopPropagation();
          this.beta22SetObjectColor?.(colorButton.dataset.beta30Color || colorButton.dataset.beta28Color);
          this.queueMeshRender?.();
          return;
        }

        const actionButton = event.target?.closest?.("[data-beta30-action],[data-beta28-action]");
        if (actionButton) {
          event.preventDefault();
          event.stopPropagation();

          const action = String(actionButton.dataset.beta30Action || actionButton.dataset.beta28Action || "");
          const wrap = actionButton.closest(".pcc-beta30-menu-wrap,.pcc-beta28-menu-wrap");
          const key = this.beta36ToolbarKey(wrap);
          const keepOpen = !["open-import", "delete", "primitive-cube", "primitive-cuboid", "primitive-cylinder", "primitive-first-layer"].includes(action);

          if (keepOpen && key) this._pccBeta36PinnedMenu = key;

          if (action === "open-import") {
            this.beta36CloseToolbarMenus();
            this.openBeta7ImportAssistant?.();
            return;
          }

          if (action === "delete") {
            this.beta36CloseToolbarMenus();
            this.deleteActiveJob?.();
            return;
          }

          if (action.startsWith("primitive-")) {
            this.beta36CloseToolbarMenus();
            this.beta21SetPrimitiveActive?.(action.replace("primitive-", ""));
            return;
          }

          if (typeof this.beta30ApplyAction === "function") this.beta30ApplyAction(action);
          else if (typeof this.beta28ApplyAction === "function") this.beta28ApplyAction(action);
          else this.beta22ApplyToolbarAction?.(action);

          if (keepOpen && key) {
            window.setTimeout(() => this.beta36OpenToolbarMenu(key), 0);
            window.setTimeout(() => this.beta36OpenToolbarMenu(key), 80);
          }
        }
      }, {capture:true});
    }

    if (this._pccBeta36PinnedMenu) this.beta36OpenToolbarMenu(this._pccBeta36PinnedMenu);
  };

  PCC_BETA36_STUDIO_CLASS.prototype.beta36ActivateJobOnPlate = function beta36ActivateJobOnPlate(job, render=true) {
    if (!job) return;

    job.transform = {...pccBeta36Transform(this), ...(job.transform || {})};

    const id = pccBeta36JobId(job);
    if (id) {
      job.id = job.id || id;
      this._activeJobId = id;
    }

    this._activeJob = job;
    this._activeJobId = this._activeJobId || id;

    const preview = pccBeta36Preview(job);
    if (preview) this._studioModelImageUrl = preview;

    const renderable = pccBeta36RenderablePath(job);
    if (renderable) {
      job.mesh_url = job.mesh_url || renderable;
      job.model = job.model || {};
      job.model.mesh_url = job.model.mesh_url || renderable;
    }

    if (Array.isArray(this._jobs)) {
      const key = pccBeta36JobId(job);
      const idx = this._jobs.findIndex((item) => pccBeta36JobId(item) === key);
      if (idx >= 0) this._jobs[idx] = {...this._jobs[idx], ...job};
      else this._jobs.push(job);
    } else {
      this._jobs = [job];
    }

    if (render) {
      this.ensureStudioMeshLoaded?.(true);
      this.queueMeshRender?.();
      window.setTimeout(() => this.beta36RenderActiveJobFallback(), 40);
      window.setTimeout(() => this.beta36RenderActiveJobFallback(), 160);
    }
  };

  PCC_BETA36_STUDIO_CLASS.prototype.beta36RenderActiveJobFallback = function beta36RenderActiveJobFallback() {
    const root = this.shadowRoot;
    const buildplate = root?.querySelector(".buildplate");
    if (!root || !buildplate) return;

    const existingMesh = root.querySelector(".studio-mesh-canvas");
    const hasVisibleMesh = Boolean(existingMesh && existingMesh.width > 0 && existingMesh.height > 0 && this._studioMesh?.triangles?.length);
    if (hasVisibleMesh) {
      root.querySelectorAll(".pcc-beta36-imported-image,.pcc-beta36-imported-placeholder").forEach((node) => node.remove());
      return;
    }

    const job = this._activeJob;
    if (!job) return;

    const preview = pccBeta36Preview(job) || this._studioModelImageUrl || "";
    const label = String(job.name || job.modelName || job.file_name || job.model?.name || "Objekt").trim();

    root.querySelectorAll(".pcc-beta36-imported-image,.pcc-beta36-imported-placeholder").forEach((node) => node.remove());

    let node;
    if (preview) {
      node = document.createElement("img");
      node.className = "pcc-beta36-imported-image";
      node.src = preview;
      node.alt = label;
    } else {
      node = document.createElement("div");
      node.className = "pcc-beta36-imported-placeholder";
      node.textContent = label;
    }

    buildplate.appendChild(node);
    this.beta36ApplyVisualTransform();
  };

  PCC_BETA36_STUDIO_CLASS.prototype.beta36ApplyVisualTransform = function beta36ApplyVisualTransform() {
    const root = this.shadowRoot;
    const t = pccBeta36Transform(this);
    const transform = `translate(-50%,-50%) translate(${pccBeta36Number(t.x)}px,${pccBeta36Number(t.y)}px) rotateX(${pccBeta36Number(t.rx)}deg) rotateZ(${pccBeta36Number(t.rz)}deg) scale(${pccBeta36Number(t.scale,100)/100})`;
    root?.querySelectorAll(".pcc-beta36-imported-image,.pcc-beta36-imported-placeholder").forEach((node) => {
      node.style.transform = transform;
    });
  };

  PCC_BETA36_STUDIO_CLASS.prototype.applyActiveJob = function beta36ApplyActiveJob(job, options={}) {
    if (typeof PCC_BETA36_PREV_APPLY_ACTIVE_JOB === "function") {
      PCC_BETA36_PREV_APPLY_ACTIVE_JOB.call(this, job, options);
    }
    this.beta36ActivateJobOnPlate(job, options?.render !== false);
  };

  PCC_BETA36_STUDIO_CLASS.prototype.beta7ImportSelected = async function beta36ImportSelected(...args) {
    const state = this._beta7Import || {};
    const selectedBefore = state.selected || state.selectedItem || state.selectedFile || state.selectedModel || null;

    if (typeof PCC_BETA36_PREV_BETA7_IMPORT_SELECTED === "function") {
      await PCC_BETA36_PREV_BETA7_IMPORT_SELECTED.apply(this, args);
    }

    if (this._activeJob) {
      pccBeta36MergeImportFields(this._activeJob, selectedBefore || {});
      this.beta36ActivateJobOnPlate(this._activeJob, true);
    }

    window.setTimeout(() => this.beta36RenderActiveJobFallback(), 80);
    window.setTimeout(() => this.beta36RenderActiveJobFallback(), 220);
  };

  PCC_BETA36_STUDIO_CLASS.prototype.beta7ImportPlan = async function beta36ImportPlan(plan) {
    const state = this._beta7Import || {};
    const selected = state.selected || state.selectedItem || state.selectedFile || state.selectedModel || {};
    pccBeta36MergeImportFields(plan, selected);

    if (typeof PCC_BETA36_PREV_BETA7_IMPORT_PLAN === "function") {
      await PCC_BETA36_PREV_BETA7_IMPORT_PLAN.call(this, plan);
    }

    if (this._activeJob) {
      pccBeta36MergeImportFields(this._activeJob, plan);
      pccBeta36MergeImportFields(this._activeJob, selected);
      this.beta36ActivateJobOnPlate(this._activeJob, true);
    }

    window.setTimeout(() => this.beta36RenderActiveJobFallback(), 80);
    window.setTimeout(() => this.beta36RenderActiveJobFallback(), 220);
  };

  PCC_BETA36_STUDIO_CLASS.prototype.ensureStudioMeshLoaded = async function beta36EnsureStudioMeshLoaded(force=false) {
    if (this._activeJob) {
      const renderable = pccBeta36RenderablePath(this._activeJob);
      if (renderable) {
        this._activeJob.mesh_url = this._activeJob.mesh_url || renderable;
        this._activeJob.model = this._activeJob.model || {};
        this._activeJob.model.mesh_url = this._activeJob.model.mesh_url || renderable;
      }
    }

    if (typeof PCC_BETA36_PREV_ENSURE_MESH === "function") {
      await PCC_BETA36_PREV_ENSURE_MESH.call(this, force);
    }

    this.beta36RenderActiveJobFallback();
  };

  PCC_BETA36_STUDIO_CLASS.prototype.renderMeshCanvas = function beta36RenderMeshCanvas(...args) {
    if (typeof PCC_BETA36_PREV_RENDER_MESH === "function") {
      PCC_BETA36_PREV_RENDER_MESH.apply(this, args);
    }
    this.beta36RenderActiveJobFallback();
  };

  PCC_BETA36_STUDIO_CLASS.prototype.beta36BindRightLeftDrag = function beta36BindRightLeftDrag() {
    const root = this.shadowRoot;
    const buildplate = root?.querySelector(".buildplate");
    if (!root || !buildplate || buildplate.dataset.beta36DragBound === "1") return;

    buildplate.dataset.beta36DragBound = "1";

    const removeMenus = () => this.beta36RemoveContextMenus();

    const blockContext = (event) => {
      const path = event.composedPath?.() || [];
      const onPlate = path.includes(buildplate) || event.target?.closest?.(".buildplate");
      if (!onPlate) return;
      event.preventDefault();
      event.stopPropagation();
      removeMenus();
    };

    root.addEventListener("contextmenu", blockContext, {capture:true});
    buildplate.addEventListener("contextmenu", blockContext, {capture:true});
    window.addEventListener("contextmenu", blockContext, true);

    const state = {active:false, button:-1, x:0, y:0};

    const moveHandler = (event) => {
      if (!state.active) return;

      event.preventDefault();
      event.stopPropagation();

      const dx = event.clientX - state.x;
      const dy = event.clientY - state.y;
      state.x = event.clientX;
      state.y = event.clientY;

      const t = pccBeta36Transform(this);

      if (state.button === 0) {
        t.rz = pccBeta36Number(t.rz) + dx * 0.32;
        t.rx = pccBeta36Number(t.rx) - dy * 0.22;
      } else if (state.button === 2) {
        t.x = pccBeta36Number(t.x) + dx;
        t.y = pccBeta36Number(t.y) + dy;
      }

      if (this._activeJob) this._activeJob.transform = {...t};
      this.beta36ApplyVisualTransform();
      this.queueMeshRender?.();
      removeMenus();
    };

    const upHandler = (event) => {
      if (!state.active) return;

      event.preventDefault?.();
      event.stopPropagation?.();

      state.active = false;
      state.button = -1;
      buildplate.classList.remove("pcc-beta36-dragging");

      window.removeEventListener("pointermove", moveHandler, true);
      window.removeEventListener("pointerup", upHandler, true);
      window.removeEventListener("pointercancel", upHandler, true);

      removeMenus();
    };

    buildplate.addEventListener("pointerdown", (event) => {
      if (event.target?.closest?.(".pcc-beta27-import-modal")) return;
      if (event.target?.closest?.(".pcc-beta9-plate-selector")) return;
      if (event.button !== 0 && event.button !== 2) return;

      event.preventDefault();
      event.stopPropagation();

      state.active = true;
      state.button = event.button;
      state.x = event.clientX;
      state.y = event.clientY;

      buildplate.classList.add("pcc-beta36-dragging");
      removeMenus();

      try { buildplate.setPointerCapture(event.pointerId); } catch (_error) {}

      window.addEventListener("pointermove", moveHandler, true);
      window.addEventListener("pointerup", upHandler, true);
      window.addEventListener("pointercancel", upHandler, true);
    }, {capture:true});
  };

  PCC_BETA36_STUDIO_CLASS.prototype.handleContextMenu = function beta36HandleContextMenu(event) {
    if (event.target?.closest?.(".buildplate")) {
      event.preventDefault();
      event.stopPropagation();
      this.beta36RemoveContextMenus();
    }
  };

  PCC_BETA36_STUDIO_CLASS.prototype.beta36FinalCleanup = function beta36FinalCleanup() {
    this.beta36EnsureStyle();

    try { this.beta34CleanTextNavigation?.(); } catch (_error) {}
    try { this.beta34RemoveFooters?.(); } catch (_error) {}
    try { this.beta35PolishImportPopup?.(); } catch (_error) {}

    this.beta36HideSecondImportButton();
    this.beta36RemoveContextMenus();
    this.beta36BindToolbar();
    this.beta36BindRightLeftDrag();
    this.beta36RenderActiveJobFallback();
  };

  PCC_BETA36_STUDIO_CLASS.prototype.cleanupBetaStudioUi = function beta36CleanupBetaStudioUi(...args) {
    if (typeof PCC_BETA36_PREV_CLEANUP === "function") {
      try { PCC_BETA36_PREV_CLEANUP.apply(this, args); } catch (_error) {}
    }

    this.beta36FinalCleanup();

    requestAnimationFrame(() => this.beta36FinalCleanup());
    window.setTimeout(() => this.beta36FinalCleanup(), 80);
    window.setTimeout(() => this.beta36FinalCleanup(), 240);
  };

const PCC_BETA39_STUDIO_CLASS = customElements.get("printer-control-center-studio-card") || PrinterControlCenterStudioCard;
  const PCC_BETA39_PREV_OPEN_IMPORT = PCC_BETA39_STUDIO_CLASS.prototype.openBeta7ImportAssistant;
  const PCC_BETA39_PREV_IMPORT_PLAN = PCC_BETA39_STUDIO_CLASS.prototype.beta7ImportPlan;
  const PCC_BETA39_PREV_ENSURE_MESH = PCC_BETA39_STUDIO_CLASS.prototype.ensureStudioMeshLoaded;
  const PCC_BETA39_PREV_RENDER_MESH = PCC_BETA39_STUDIO_CLASS.prototype.renderMeshCanvas;

  function pccBeta39Number(value, fallback=0) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
  }

  function pccBeta39Transform(instance) {
    instance._transform = {...defaultTransform(), ...(instance._transform || {})};
    return instance._transform;
  }

  function pccBeta39ToolbarKey(wrap) {
    const button = wrap?.querySelector?.("[data-beta30-menu],[data-beta28-menu]");
    return String(button?.dataset?.beta30Menu || button?.dataset?.beta28Menu || button?.getAttribute?.("title") || "");
  }

  function pccBeta39PrimitiveKind(job) {
    return String(job?.primitive?.kind || job?.primitive_kind || job?.model?.primitive_kind || job?.model?.primitive || "")
      .trim()
      .replace(/^primitive-/, "")
      .replace(/-/g, "_");
  }

  function pccBeta39IsPrimitive(job) {
    const source = String(job?.source || job?.origin || job?.model?.source || "").trim();
    return source === "primitive" || Boolean(pccBeta39PrimitiveKind(job));
  }

  PCC_BETA39_STUDIO_CLASS.prototype.beta39EnsureStyle = function beta39EnsureStyle() {
    const root = this.shadowRoot;
    if (!root || root.querySelector("#pcc-beta39-beta38-studio-fix-style")) return;

    const style = document.createElement("style");
    style.id = "pcc-beta39-beta38-studio-fix-style";
    style.textContent = `
      .studio-shell{position:relative!important;}

      .pcc-beta22-top-toolbar,
      .pcc-beta23-top-toolbar,
      .pcc-beta26-toolbar,
      .pcc-beta28-toolbar{
        display:none!important;
        pointer-events:none!important;
      }

      .studio-context,
      .beta4-floating-context,
      .pcc-context-menu,
      .context-menu,
      .gallery-context-menu,
      [data-context-menu]{
        display:none!important;
        pointer-events:none!important;
      }

      .studio-shell .status,
      .studio-shell .plan-note,
      .studio-shell .plan-summary,
      .studio-shell .studio-status,
      .studio-shell .studio-footer,
      .studio-shell .studio-log,
      .studio-shell [data-studio-plan-details-panel],
      .studio-shell [data-studio-health-panel]{
        display:none!important;
        pointer-events:none!important;
      }

      .pcc-beta30-toolbar{
        position:sticky!important;
        top:0!important;
        z-index:820!important;
        height:32px!important;
        min-height:32px!important;
        max-height:32px!important;
        display:flex!important;
        align-items:center!important;
        gap:0!important;
        margin:0 0 6px!important;
        padding:0!important;
        border-radius:0!important;
        overflow:visible!important;
      }

      .pcc-beta30-import{
        min-width:76px!important;
        height:31px!important;
        padding:0 8px!important;
        border-radius:0!important;
        font-size:11px!important;
        font-weight:800!important;
      }

      .pcc-beta30-main{
        width:32px!important;
        height:31px!important;
        border-radius:0!important;
      }

      .pcc-beta30-menu-wrap{
        position:relative!important;
      }

      .pcc-beta30-menu-wrap.open > .pcc-beta30-menu-body{
        display:grid!important;
      }

      .pcc-beta30-menu-body{
        position:absolute!important;
        top:32px!important;
        left:0!important;
        z-index:900!important;
        min-width:168px!important;
        max-width:230px!important;
        max-height:260px!important;
        overflow:auto!important;
        padding:5px!important;
        display:none;
        grid-template-columns:1fr!important;
        gap:3px!important;
        border-radius:0!important;
        border:1px solid rgba(0,169,214,.58)!important;
        background:rgba(14,19,24,.99)!important;
        box-shadow:0 16px 36px rgba(0,0,0,.44)!important;
      }

      .pcc-beta30-menu-action{
        min-height:28px!important;
        display:grid!important;
        grid-template-columns:22px 1fr!important;
        gap:6px!important;
        align-items:center!important;
        padding:3px 7px!important;
        border-radius:0!important;
        font-size:12px!important;
        line-height:1.2!important;
        white-space:nowrap!important;
      }

      .pcc-beta27-import-modal{
        position:absolute!important;
        inset:38px auto auto 50%!important;
        transform:translateX(-50%)!important;
        width:min(600px,calc(100% - 30px))!important;
        height:auto!important;
        max-height:min(54vh,460px)!important;
        z-index:880!important;
        display:block!important;
        padding:0!important;
        margin:0!important;
        background:transparent!important;
        border:0!important;
        backdrop-filter:none!important;
      }

      .pcc-beta27-import-dialog{
        width:100%!important;
        max-height:min(54vh,460px)!important;
        overflow:auto!important;
        padding:10px!important;
        border:1px solid rgba(0,169,214,.70)!important;
        border-radius:8px!important;
        background:linear-gradient(180deg,rgba(13,20,25,.99),rgba(5,10,14,.99))!important;
        box-shadow:0 18px 42px rgba(0,0,0,.58)!important;
      }

      .pcc-beta27-import-close{
        position:absolute!important;
        right:8px!important;
        top:8px!important;
        width:28px!important;
        height:26px!important;
        border-radius:5px!important;
        padding:0!important;
      }

      .pcc-beta27-import-dialog h1,
      .pcc-beta27-import-dialog h2,
      .pcc-beta27-import-dialog h3{
        font-size:16px!important;
        margin:0 36px 8px 0!important;
        line-height:1.2!important;
      }

      .pcc-beta27-import-dialog p,
      .pcc-beta27-import-dialog div,
      .pcc-beta27-import-dialog span,
      .pcc-beta27-import-dialog label{
        font-size:12px!important;
        line-height:1.28!important;
      }

      .pcc-beta27-import-dialog button{
        min-height:26px!important;
        padding:3px 8px!important;
        border-radius:6px!important;
        font-size:12px!important;
        line-height:1.2!important;
      }

      .pcc-beta27-import-dialog input,
      .pcc-beta27-import-dialog select{
        min-height:26px!important;
        border-radius:6px!important;
        font-size:12px!important;
      }

      .pcc-beta35-import-body{
        max-height:390px!important;
        overflow:auto!important;
      }

      .pcc-beta35-import-card-grid,
      .pcc-beta39-import-grid{
        display:grid!important;
        grid-template-columns:repeat(auto-fit,minmax(145px,1fr))!important;
        gap:6px!important;
      }

      .buildplate .studio-mesh-canvas,
      .buildplate .pcc-beta36-imported-image,
      .buildplate .pcc-beta36-imported-placeholder{
        cursor:grab!important;
      }

      .buildplate.pcc-beta39-dragging .studio-mesh-canvas,
      .buildplate.pcc-beta39-dragging .pcc-beta36-imported-image,
      .buildplate.pcc-beta39-dragging .pcc-beta36-imported-placeholder{
        cursor:grabbing!important;
      }
    `;
    root.appendChild(style);
  };

  PCC_BETA39_STUDIO_CLASS.prototype.beta39CloseToolbarMenus = function beta39CloseToolbarMenus(except=null) {
    const root = this.shadowRoot;
    if (!root) return;

    root.querySelectorAll(".pcc-beta30-menu-wrap.open,.pcc-beta28-menu-wrap.open").forEach((wrap) => {
      if (except && wrap === except) return;
      wrap.classList.remove("open");
      wrap.querySelector(".pcc-beta30-main,.pcc-beta28-main")?.classList.remove("active");
    });
  };

  PCC_BETA39_STUDIO_CLASS.prototype.beta39OpenToolbarMenu = function beta39OpenToolbarMenu(wrap) {
    if (!wrap) return;
    this.beta39CloseToolbarMenus(wrap);
    wrap.classList.add("open");
    wrap.querySelector(".pcc-beta30-main,.pcc-beta28-main")?.classList.add("active");
    this._pccBeta39PinnedMenu = pccBeta39ToolbarKey(wrap);
  };

  PCC_BETA39_STUDIO_CLASS.prototype.beta39RestorePinnedMenu = function beta39RestorePinnedMenu() {
    const key = String(this._pccBeta39PinnedMenu || "");
    if (!key) return;

    const wrap = [...(this.shadowRoot?.querySelectorAll(".pcc-beta30-menu-wrap,.pcc-beta28-menu-wrap") || [])]
      .find((node) => pccBeta39ToolbarKey(node) === key);

    if (wrap) this.beta39OpenToolbarMenu(wrap);
  };

  PCC_BETA39_STUDIO_CLASS.prototype.beta39BindToolbar = function beta39BindToolbar() {
    const root = this.shadowRoot;
    if (!root) return;

    if (typeof this.beta30InstallToolbar === "function") {
      try { this.beta30InstallToolbar(); } catch (_error) {}
    }

    root.querySelectorAll(".pcc-beta26-toolbar,.pcc-beta28-toolbar,.pcc-beta22-top-toolbar,.pcc-beta23-top-toolbar").forEach((node) => node.remove());

    const oldToolbar = root.querySelector(".pcc-beta30-toolbar");
    if (!oldToolbar) return;

    if (oldToolbar.dataset.beta39Bound !== "1") {
      const toolbar = oldToolbar.cloneNode(true);
      toolbar.dataset.beta39Bound = "1";
      oldToolbar.replaceWith(toolbar);

      toolbar.addEventListener("pointerdown", (event) => {
        event.stopPropagation();
      }, {capture:true});

      toolbar.addEventListener("click", (event) => {
        const menuButton = event.target?.closest?.("[data-beta30-menu],[data-beta28-menu]");
        if (menuButton) {
          event.preventDefault();
          event.stopPropagation();

          const wrap = menuButton.closest(".pcc-beta30-menu-wrap,.pcc-beta28-menu-wrap");
          const wasOpen = wrap?.classList?.contains?.("open");

          this.beta39CloseToolbarMenus();

          if (!wasOpen && wrap) this.beta39OpenToolbarMenu(wrap);
          else this._pccBeta39PinnedMenu = "";

          return;
        }

        const colorButton = event.target?.closest?.("[data-beta30-color],[data-beta28-color]");
        if (colorButton) {
          event.preventDefault();
          event.stopPropagation();
          this.beta22SetObjectColor?.(colorButton.dataset.beta30Color || colorButton.dataset.beta28Color);
          this.queueMeshRender?.();
          this.beta39RestorePinnedMenu();
          return;
        }

        const actionButton = event.target?.closest?.("[data-beta30-action],[data-beta28-action]");
        if (actionButton) {
          event.preventDefault();
          event.stopPropagation();

          const action = String(actionButton.dataset.beta30Action || actionButton.dataset.beta28Action || "");
          const wrap = actionButton.closest(".pcc-beta30-menu-wrap,.pcc-beta28-menu-wrap");
          const key = pccBeta39ToolbarKey(wrap);

          if (action === "open-import") {
            this.beta39CloseToolbarMenus();
            this.openBeta7ImportAssistant?.();
            return;
          }

          if (action === "delete") {
            this.beta39CloseToolbarMenus();
            this.deleteActiveJob?.();
            return;
          }

          if (key) this._pccBeta39PinnedMenu = key;

          if (action.startsWith("primitive-")) {
            this.beta21SetPrimitiveActive?.(action.replace("primitive-", ""));
          } else if (typeof this.beta30ApplyAction === "function") {
            this.beta30ApplyAction(action);
          } else if (typeof this.beta28ApplyAction === "function") {
            this.beta28ApplyAction(action);
          } else {
            this.beta22ApplyToolbarAction?.(action);
          }

          window.setTimeout(() => this.beta39RestorePinnedMenu(), 0);
          window.setTimeout(() => this.beta39RestorePinnedMenu(), 80);
          return;
        }
      }, {capture:true});

      root.addEventListener("pointerdown", (event) => {
        if (event.target?.closest?.(".pcc-beta30-toolbar,.pcc-beta28-toolbar")) return;
        if (event.target?.closest?.(".pcc-beta27-import-modal")) return;
        if (event.target?.closest?.(".buildplate")) return;
        this._pccBeta39PinnedMenu = "";
        this.beta39CloseToolbarMenus();
      }, {capture:true});
    }

    this.beta39RestorePinnedMenu();
  };

  PCC_BETA39_STUDIO_CLASS.prototype.beta39RemoveContextMenus = function beta39RemoveContextMenus() {
    this._studioContextMenu = null;
    this.shadowRoot?.querySelectorAll(".studio-context,.beta4-floating-context,.pcc-context-menu,.context-menu,.gallery-context-menu,[data-context-menu]").forEach((node) => node.remove());
  };

  PCC_BETA39_STUDIO_CLASS.prototype.beta39ApplyVisualTransform = function beta39ApplyVisualTransform() {
    const root = this.shadowRoot;
    const t = pccBeta39Transform(this);
    const transform = `translate(-50%,-50%) translate(${pccBeta39Number(t.x)}px,${pccBeta39Number(t.y)}px) rotateX(${pccBeta39Number(t.rx)}deg) rotateZ(${pccBeta39Number(t.rz)}deg) scale(${pccBeta39Number(t.scale,100)/100})`;
    root?.querySelectorAll(".pcc-beta36-imported-image,.pcc-beta36-imported-placeholder").forEach((node) => {
      node.style.transform = transform;
    });
  };

  PCC_BETA39_STUDIO_CLASS.prototype.beta39BindMouse = function beta39BindMouse() {
    const root = this.shadowRoot;
    const buildplate = root?.querySelector(".buildplate");
    if (!root || !buildplate || buildplate.dataset.beta39MouseBound === "1") return;

    buildplate.dataset.beta39MouseBound = "1";

    const blockContext = (event) => {
      if (!event.target?.closest?.(".buildplate")) return;
      event.preventDefault();
      event.stopPropagation();
      this.beta39RemoveContextMenus();
    };

    root.addEventListener("contextmenu", blockContext, {capture:true});
    buildplate.addEventListener("contextmenu", blockContext, {capture:true});
    window.addEventListener("contextmenu", blockContext, true);

    const state = {active:false, button:-1, x:0, y:0};

    const moveHandler = (event) => {
      if (!state.active) return;

      event.preventDefault();
      event.stopPropagation();

      const dx = event.clientX - state.x;
      const dy = event.clientY - state.y;
      state.x = event.clientX;
      state.y = event.clientY;

      const t = pccBeta39Transform(this);

      if (state.button === 0) {
        t.rz = pccBeta39Number(t.rz) + dx * 0.32;
        t.rx = pccBeta39Number(t.rx) - dy * 0.22;
      } else if (state.button === 2) {
        t.x = pccBeta39Number(t.x) + dx;
        t.y = pccBeta39Number(t.y) + dy;
      }

      if (this._activeJob) this._activeJob.transform = {...t};
      this.beta39ApplyVisualTransform();
      this.queueMeshRender?.();
      this.beta39RemoveContextMenus();
    };

    const upHandler = (event) => {
      if (!state.active) return;

      event.preventDefault?.();
      event.stopPropagation?.();

      state.active = false;
      state.button = -1;
      buildplate.classList.remove("pcc-beta39-dragging");

      window.removeEventListener("pointermove", moveHandler, true);
      window.removeEventListener("pointerup", upHandler, true);
      window.removeEventListener("pointercancel", upHandler, true);

      this.beta39RemoveContextMenus();
    };

    buildplate.addEventListener("pointerdown", (event) => {
      if (event.target?.closest?.(".pcc-beta27-import-modal")) return;
      if (event.target?.closest?.(".pcc-beta9-plate-selector")) return;
      if (event.target?.closest?.(".pcc-beta30-toolbar")) return;
      if (event.button !== 0 && event.button !== 2) return;

      event.preventDefault();
      event.stopPropagation();

      state.active = true;
      state.button = event.button;
      state.x = event.clientX;
      state.y = event.clientY;

      buildplate.classList.add("pcc-beta39-dragging");
      this.beta39RemoveContextMenus();

      try { buildplate.setPointerCapture(event.pointerId); } catch (_error) {}

      window.addEventListener("pointermove", moveHandler, true);
      window.addEventListener("pointerup", upHandler, true);
      window.addEventListener("pointercancel", upHandler, true);
    }, {capture:true});
  };

  PCC_BETA39_STUDIO_CLASS.prototype.openBeta7ImportAssistant = function beta39OpenImportAssistant(...args) {
    this._pccBeta39ImportOpen = true;
    this._pccBeta35ImportOpen = true;
    this._pccBeta34ImportOpen = true;
    this._pccBeta30ImportOpen = true;
    this._pccBeta27ImportOpen = true;

    let result;
    if (typeof PCC_BETA39_PREV_OPEN_IMPORT === "function") {
      result = PCC_BETA39_PREV_OPEN_IMPORT.apply(this, args);
    }

    const polish = () => {
      this.beta27PromoteImportAssistant?.();
      this.beta35PolishImportPopup?.();
      this.beta39PolishImportPopup?.();
    };

    requestAnimationFrame(polish);
    window.setTimeout(polish, 40);
    window.setTimeout(polish, 120);
    window.setTimeout(polish, 260);
    window.setTimeout(polish, 520);

    return result;
  };

  PCC_BETA39_STUDIO_CLASS.prototype.beta39PolishImportPopup = function beta39PolishImportPopup() {
    const root = this.shadowRoot;
    const modal = root?.querySelector(".pcc-beta27-import-modal");
    const dialog = root?.querySelector(".pcc-beta27-import-dialog");
    if (!modal || !dialog) return;

    modal.dataset.beta39Stable = "1";
    dialog.dataset.beta39Stable = "1";

    dialog.querySelectorAll("h1,h2,h3").forEach((heading) => {
      if (String(heading.textContent || "").includes("Studio-Import")) heading.textContent = "Studio-Import";
    });

    dialog.querySelectorAll("button").forEach((button) => {
      const txt = String(button.textContent || "").trim();
      if (txt === "Auswahl ins Studio übernehmen" || txt === "Ins Studio übernehmen") button.textContent = "Objekt importieren";
      if (txt === "Eine Ebene hoch") button.textContent = "Hoch";
      if (txt === "Aktualisieren") button.textContent = "Neu laden";
    });

    const body = dialog.querySelector(".pcc-beta35-import-body") || dialog;
    const folderArea = [...body.querySelectorAll("div,section")]
      .find((node) => {
        const text = String(node.textContent || "");
        return text.includes("Ordner") && text.length < 1200;
      });

    if (folderArea) folderArea.classList.add("pcc-beta39-import-grid");
  };

  PCC_BETA39_STUDIO_CLASS.prototype.beta7ImportPlan = async function beta39ImportPlan(plan) {
    const beforeJobs = Array.isArray(this._jobs) ? [...this._jobs] : [];
    const beforeActive = this._activeJob || null;

    if (typeof PCC_BETA39_PREV_IMPORT_PLAN === "function") {
      await PCC_BETA39_PREV_IMPORT_PLAN.call(this, plan);
    }

    const afterActive = this._activeJob || null;
    this._pccBeta39PlateObjects = Array.isArray(this._pccBeta39PlateObjects) ? this._pccBeta39PlateObjects : [];

    for (const job of [...beforeJobs, beforeActive, afterActive]) {
      if (!job) continue;
      const id = String(job.id || job.file_path || job.path || job.name || job.modelName || "");
      if (!id) continue;
      if (!this._pccBeta39PlateObjects.some((item) => String(item.id || item.file_path || item.path || item.name || item.modelName || "") === id)) {
        this._pccBeta39PlateObjects.push(job);
      }
    }

    if (Array.isArray(this._jobs)) {
      const merged = [...this._jobs];
      for (const job of this._pccBeta39PlateObjects) {
        const id = String(job.id || job.file_path || job.path || job.name || job.modelName || "");
        if (!id) continue;
        if (!merged.some((item) => String(item.id || item.file_path || item.path || item.name || item.modelName || "") === id)) merged.push(job);
      }
      this._jobs = merged;
    }

    this._pccBeta39ImportOpen = true;
    this._pccBeta35ImportOpen = true;
    this._pccBeta27ImportOpen = true;

    window.setTimeout(() => {
      this.ensureStudioMeshLoaded?.(true);
      this.queueMeshRender?.();
      this.beta35PolishImportPopup?.();
      this.beta39PolishImportPopup?.();
    }, 0);
  };

  PCC_BETA39_STUDIO_CLASS.prototype.ensureStudioMeshLoaded = async function beta39EnsureStudioMeshLoaded(force=false) {
    if (pccBeta39IsPrimitive(this._activeJob) && typeof this.beta30EnsurePrimitiveMesh === "function") {
      this.beta30EnsurePrimitiveMesh();
      this.queueMeshRender?.();
      return;
    }

    if (typeof PCC_BETA39_PREV_ENSURE_MESH === "function") {
      await PCC_BETA39_PREV_ENSURE_MESH.call(this, force);
    }
  };

  PCC_BETA39_STUDIO_CLASS.prototype.renderMeshCanvas = function beta39RenderMeshCanvas(...args) {
    if (this._pccBeta39Rendering) return;
    this._pccBeta39Rendering = true;
    try {
      if (typeof PCC_BETA39_PREV_RENDER_MESH === "function") {
        PCC_BETA39_PREV_RENDER_MESH.apply(this, args);
      }
      this.beta36RenderActiveJobFallback?.();
      this.beta39ApplyVisualTransform();
    } finally {
      this._pccBeta39Rendering = false;
    }
  };

  PCC_BETA39_STUDIO_CLASS.prototype.handleContextMenu = function beta39HandleContextMenu(event) {
    if (event.target?.closest?.(".buildplate")) {
      event.preventDefault();
      event.stopPropagation();
      this.beta39RemoveContextMenus();
    }
  };

  PCC_BETA39_STUDIO_CLASS.prototype.cleanupBetaStudioUi = function beta39CleanupBetaStudioUi() {
    this.beta39EnsureStyle();

    try { this.beta9EnsureStyle?.(); } catch (_error) {}
    try { this.beta9InstallSelector?.(); } catch (_error) {}
    try { this.beta9ApplyBuildplateVisual?.(); } catch (_error) {}
    try { this.beta20EnsureStyle?.(); } catch (_error) {}
    try { this.beta20InjectPrimitivePanel?.(); } catch (_error) {}
    try { this.beta21EnsureStyle?.(); } catch (_error) {}
    try { this.beta21SyncBuildplateState?.(); } catch (_error) {}
    try { this.beta22EnsureStyle?.(); } catch (_error) {}
    try { this.beta22HideRightInspector?.(); } catch (_error) {}
    try { this.beta22RemoveBottomMessages?.(); } catch (_error) {}
    try { this.beta34CleanTextNavigation?.(); } catch (_error) {}
    try { this.beta34RemoveFooters?.(); } catch (_error) {}

    this.beta36HideSecondImportButton?.();
    this.beta39RemoveContextMenus();
    this.beta39BindToolbar();
    this.beta39BindMouse();

    const root = this.shadowRoot;
    root?.querySelectorAll(".pcc-beta22-top-toolbar,.pcc-beta23-top-toolbar,.pcc-beta26-toolbar,.pcc-beta28-toolbar,.studio-context,.beta4-floating-context,.pcc-context-menu,.context-menu,.gallery-context-menu,[data-context-menu]").forEach((node) => node.remove());

    if (this._activeJob) {
      this.beta36RenderActiveJobFallback?.();
      this.beta39ApplyVisualTransform();
    }

    if (this._pccBeta39ImportOpen || root?.querySelector(".pcc-beta27-import-modal")) {
      this._pccBeta39ImportOpen = true;
      requestAnimationFrame(() => {
        this.beta27PromoteImportAssistant?.();
        this.beta35PolishImportPopup?.();
        this.beta39PolishImportPopup?.();
      });
    }
  };

  if (!customElements.get("printer-control-center-studio-card")) {
    customElements.define("printer-control-center-studio-card", PrinterControlCenterStudioCard);
  }

  window.customCards = window.customCards || [];
  if (!window.customCards.some((card) => card.type === "printer-control-center-studio-card")) {
    window.customCards.push({
      type: "printer-control-center-studio-card",
      name: "3D-Studio / CAD-Vorschau",
      description: "v5 beta9 Buildplate Selector Visual Fix with stable Bambu-style plate dropdown and visible textured buildplate rendering."
    });
  }
})();
