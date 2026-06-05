#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUT="${1:-$ROOT/dist}"
VERSION="1.0.0"
mkdir -p "$OUT"
"$ROOT/scripts/validate-release.sh"
rm -rf "$ROOT/custom_components/taracraft_3d_printer/__pycache__"
(
  cd "$ROOT"
  zip -qr "$OUT/taracraft_3d_printer-v$VERSION-manual-install.zip" custom_components/taracraft_3d_printer
)
sha256sum "$OUT/taracraft_3d_printer-v$VERSION-manual-install.zip" \
  > "$OUT/taracraft_3d_printer-v$VERSION-manual-install.zip.sha256"
echo "Built manual-install package in $OUT"
