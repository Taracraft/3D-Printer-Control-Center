#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
COMP="$ROOT/custom_components/printer_control_center"
python3 -m json.tool "$ROOT/hacs.json" >/dev/null
python3 -m json.tool "$COMP/manifest.json" >/dev/null
python3 -m json.tool "$COMP/translations/de.json" >/dev/null
python3 -m json.tool "$COMP/translations/en.json" >/dev/null
python3 -m py_compile $(find "$COMP" -name '*.py' -print)
node --check "$COMP/frontend/printer-control-center-cards.js"
LEGACY_DOMAIN="taracraft""_3d_printer"
if grep -RIn "$LEGACY_DOMAIN" "$ROOT" --exclude-dir='.git'; then
  echo "Legacy internal domain found" >&2
  exit 1
fi
if grep -RIn 'Path("/config\|/config/printer_control_center' "$COMP" --exclude='*.pyc'; then
  echo "Hard-coded /config path found" >&2
  exit 1
fi
test -f "$ROOT/brand/icon.png"
test -f "$COMP/brand/icon.png"
test -f "$COMP/dashboards.py"
echo "OK: release validation passed"
