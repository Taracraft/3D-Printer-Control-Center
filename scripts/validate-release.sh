#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
COMP="$ROOT/custom_components/taracraft_3d_printer"

python3 -m json.tool "$ROOT/hacs.json" >/dev/null
python3 -m json.tool "$COMP/manifest.json" >/dev/null
python3 -m json.tool "$COMP/translations/de.json" >/dev/null
python3 -m json.tool "$COMP/translations/en.json" >/dev/null
python3 -m py_compile $(find "$COMP" -name '*.py' -print)
node --check "$COMP/frontend/taracraft-3d-printer-cards.js"

if grep -RIn 'Path("/config\|/config/taracraft_3d_printer' "$COMP" --exclude='*.pyc'; then
  echo "Hard-coded /config path found" >&2
  exit 1
fi

test -f "$ROOT/README.md"
test -f "$ROOT/README.de.md"
test -f "$ROOT/CHANGELOG.md"
test -f "$ROOT/hacs.json"
test -f "$ROOT/brand/icon.png"
test -f "$ROOT/docs/PRIVACY.md"
test -f "$ROOT/docs/PRIVACY.de.md"

echo "OK: local release validation passed"
