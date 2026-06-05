#!/usr/bin/env python3
"""Create an importable gallery ZIP backup from a Home Assistant config path."""
from __future__ import annotations
import argparse
from datetime import datetime
from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile

parser = argparse.ArgumentParser()
parser.add_argument("source", type=Path, help="Gallery archive directory")
parser.add_argument("--output", type=Path, default=None)
args = parser.parse_args()
source = args.source.expanduser().resolve()
if not source.is_dir():
    raise SystemExit(f"Gallery directory not found: {source}")
stamp = datetime.now().strftime("%Y%m%d-%H%M%S")
output = (args.output or Path.cwd() / f"3d-printer-control-center-gallery-{stamp}.zip").expanduser().resolve()
with ZipFile(output, "w", ZIP_DEFLATED) as archive:
    for folder in sorted((p for p in source.rglob("*") if p.is_dir())):
        archive.writestr(folder.relative_to(source).as_posix().rstrip("/") + "/", b"")
    for model in sorted((p for p in source.rglob("*") if p.is_file() and p.suffix.lower() == ".3mf")):
        archive.write(model, model.relative_to(source).as_posix())
print(output)
