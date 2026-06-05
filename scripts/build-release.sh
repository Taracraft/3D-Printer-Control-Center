#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUT="${1:-$ROOT/dist}"
VERSION="2.0.0"
mkdir -p "$OUT"
"$ROOT/scripts/validate-release.sh"
rm -rf "$ROOT/custom_components/printer_control_center/__pycache__"
(
  cd "$ROOT"
  zip -qr "$OUT/printer_control_center-v$VERSION-manual-install.zip" custom_components/printer_control_center
)
sha256sum "$OUT/printer_control_center-v$VERSION-manual-install.zip" \
  > "$OUT/printer_control_center-v$VERSION-manual-install.zip.sha256"
echo "Built manual-install package in $OUT"
