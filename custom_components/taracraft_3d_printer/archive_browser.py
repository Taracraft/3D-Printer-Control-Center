"""Local 3MF file manager used by the Taracraft dashboard card."""
from __future__ import annotations

from dataclasses import dataclass
from io import BytesIO
import base64
from pathlib import Path, PurePosixPath
import re
import shutil
from typing import Any
import zipfile

_MAX_BYTES = 150_000_000
_PREVIEW_MAX_BYTES = 600_000


def _clean_segment(value: str, *, require_3mf: bool = False) -> str:
    name = Path(str(value or "")).name.strip()
    name = re.sub(r"[^A-Za-z0-9ÄÖÜäöüß._() +\-]", "_", name)
    if not name:
        raise ValueError("Name is empty")
    if name in {".", ".."}:
        raise ValueError("Invalid name")
    if require_3mf and not name.lower().endswith(".3mf"):
        raise ValueError("Only .3mf files are accepted")
    return name


def _safe_relative(value: str, *, allow_root: bool = True) -> PurePosixPath:
    raw = str(value or "").replace("\\", "/").strip("/")
    if not raw:
        if allow_root:
            return PurePosixPath(".")
        raise ValueError("Path is empty")
    path = PurePosixPath(raw)
    if path.is_absolute() or ".." in path.parts:
        raise ValueError("Unsafe path")
    return path


def _real_path(root: Path, relative: PurePosixPath) -> Path:
    target = (root / Path(*relative.parts)).resolve()
    root = root.resolve()
    if target != root and root not in target.parents:
        raise ValueError("Unsafe path")
    return target


def _preview(raw: bytes) -> str:
    try:
        with zipfile.ZipFile(BytesIO(raw)) as archive:
            names = [
                name
                for name in archive.namelist()
                if name.lower().endswith((".png", ".jpg", ".jpeg", ".webp"))
            ]
            names.sort(
                key=lambda name: (
                    0 if "plate_1" in name.lower() else 1,
                    0 if "thumbnail" in name.lower() else 1,
                    len(name),
                )
            )
            for name in names:
                image = archive.read(name)
                if not image or len(image) > _PREVIEW_MAX_BYTES:
                    continue
                mime = "image/png"
                if name.lower().endswith((".jpg", ".jpeg")):
                    mime = "image/jpeg"
                elif name.lower().endswith(".webp"):
                    mime = "image/webp"
                return (
                    f"data:{mime};base64,"
                    f"{base64.b64encode(image).decode('ascii')}"
                )
    except Exception:
        return ""
    return ""


def _display_path(path: PurePosixPath) -> str:
    value = str(path)
    return "" if value == "." else value


@dataclass
class ArchiveStats:
    files: int
    folders: int
    bytes: int

    def as_dict(self) -> dict[str, int]:
        return {
            "files": self.files,
            "folders": self.folders,
            "bytes": self.bytes,
        }


class LocalArchiveRepository:
    """Manage a safe local 3MF directory tree inside Home Assistant."""

    def __init__(self, root: Path) -> None:
        self.root = Path(root)
        self.root.mkdir(parents=True, exist_ok=True)

    def stats(self) -> dict[str, int]:
        files = 0
        folders = 0
        size = 0
        for path in self.root.rglob("*"):
            if path.is_dir():
                folders += 1
            elif path.is_file():
                files += 1
                size += path.stat().st_size
        return ArchiveStats(files=files, folders=folders, bytes=size).as_dict()

    def tree(self) -> list[dict[str, str]]:
        """Return every archive folder for the graphical move dialog."""
        result: list[dict[str, str]] = [
            {"name": "Hauptordner", "path": ""}
        ]
        for path in sorted(
            (item for item in self.root.rglob("*") if item.is_dir()),
            key=lambda item: item.relative_to(self.root).as_posix().lower(),
        ):
            relative = path.relative_to(self.root).as_posix()
            result.append(
                {
                    "name": path.name,
                    "path": relative,
                }
            )
        return result

    def list_items(self, folder: str = "") -> dict[str, Any]:
        relative = _safe_relative(folder)
        current = _real_path(relative)
        if not current.exists():
            raise FileNotFoundError(folder)
        if not current.is_dir():
            raise NotADirectoryError(folder)

        items: list[dict[str, Any]] = []
        for path in sorted(
            current.iterdir(),
            key=lambda item: (not item.is_dir(), item.name.lower()),
        ):
            rel = path.relative_to(self.root).as_posix()
            if path.is_dir():
                items.append(
                    {
                        "name": path.name,
                        "path": rel,
                        "size": 0,
                        "modified": path.stat().st_mtime,
                        "preview_data_url": "",
                        "kind": "folder",
                    }
                )
                continue

            if not path.name.lower().endswith(".3mf"):
                continue

            raw = path.read_bytes()
            items.append(
                {
                    "name": path.name,
                    "path": rel,
                    "size": len(raw),
                    "modified": path.stat().st_mtime,
                    "preview_data_url": _preview(raw),
                    "kind": "archive",
                }
            )

        parent = ""
        if relative != PurePosixPath("."):
            parent = _display_path(relative.parent)

        return {
            "folder": _display_path(relative),
            "parent": parent,
            "items": items,
            "stats": self.stats(),
        }

    def upload(
        self,
        filename: str,
        payload: bytes,
        folder: str = "",
    ) -> dict[str, Any]:
        name = _clean_segment(filename, require_3mf=True)
        if not payload:
            raise ValueError("Upload is empty")
        if len(payload) > _MAX_BYTES:
            raise ValueError("Upload exceeds 150 MB")

        directory = _real_path(self.root, _safe_relative(folder))
        directory.mkdir(parents=True, exist_ok=True)
        target = directory / name
        target.write_bytes(payload)
        return {
            "name": target.name,
            "path": target.relative_to(self.root).as_posix(),
            "size": len(payload),
        }

    def create_folder(self, folder: str, name: str) -> dict[str, str]:
        directory = _real_path(self.root, _safe_relative(folder))
        directory.mkdir(parents=True, exist_ok=True)
        target = directory / _clean_segment(name)
        target.mkdir(exist_ok=False)
        return {
            "name": target.name,
            "path": target.relative_to(self.root).as_posix(),
        }

    def delete(self, path: str) -> None:
        target = _real_path(self.root, _safe_relative(path, allow_root=False))
        if not target.exists():
            raise FileNotFoundError(path)
        if target == self.root:
            raise ValueError("Archive root cannot be deleted")
        if target.is_dir():
            shutil.rmtree(target)
        else:
            target.unlink()

    def rename(self, path: str, new_name: str) -> dict[str, str]:
        target = _real_path(self.root, _safe_relative(path, allow_root=False))
        if not target.exists():
            raise FileNotFoundError(path)
        clean = _clean_segment(
            new_name,
            require_3mf=target.is_file(),
        )
        destination = target.with_name(clean)
        if destination.exists():
            raise FileExistsError(clean)
        target.rename(destination)
        return {
            "name": destination.name,
            "path": destination.relative_to(self.root).as_posix(),
        }

    def move(self, path: str, target_folder: str, overwrite: bool = False) -> dict[str, str]:
        source = _real_path(self.root, _safe_relative(path, allow_root=False))
        if not source.exists():
            raise FileNotFoundError(path)
        directory = _real_path(self.root, _safe_relative(target_folder))
        if not directory.exists() or not directory.is_dir():
            raise NotADirectoryError(target_folder)
        destination = directory / source.name
        if source == destination:
            return {
                "name": source.name,
                "path": source.relative_to(self.root).as_posix(),
            }
        if source.is_dir() and source in directory.parents:
            raise ValueError("Folder cannot be moved into itself")
        if destination.exists():
            if not overwrite:
                raise FileExistsError(destination.name)
            if destination.is_dir():
                shutil.rmtree(destination)
            else:
                destination.unlink()

        # Archive source and destination always live below the same HA config
        # directory. Use an actual filesystem rename instead of copy semantics.
        source.rename(destination)
        if source.exists() or not destination.exists():
            raise RuntimeError("Archive move verification failed")
        return {
            "name": destination.name,
            "path": destination.relative_to(self.root).as_posix(),
        }

    def preview(self, path: str) -> str:
        """Return the embedded preview for one archived 3MF project."""
        target = _real_path(self.root, _safe_relative(path, allow_root=False))
        if not target.is_file():
            raise FileNotFoundError(path)
        return _preview(target.read_bytes())

    def download(self, path: str) -> bytes:
        target = _real_path(self.root, _safe_relative(path, allow_root=False))
        if not target.is_file():
            raise FileNotFoundError(path)
        return target.read_bytes()
