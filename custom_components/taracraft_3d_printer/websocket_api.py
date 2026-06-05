"""Authenticated WebSocket commands for Taracraft file management."""
from __future__ import annotations

import base64
from functools import partial
import logging
from pathlib import Path
import secrets
import time
from urllib.parse import quote

import voluptuous as vol

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant

from .const import DOMAIN
from .http_api import _archive, _browser, _find_coordinator, _path_token, _signature, _slicer_filename
from .print_queue import PrintQueueRepository

_LOGGER = logging.getLogger(__name__)

_UPLOAD_MAX_BYTES = 150_000_000
_UPLOAD_CHUNK_BYTES = 128 * 1024
_UPLOAD_TTL_SECONDS = 30 * 60


def _upload_root(hass: HomeAssistant) -> Path:
    """Return a portable upload staging folder below the HA config directory."""
    root = Path(hass.config.path("taracraft_3d_printer", "uploads"))
    root.mkdir(parents=True, exist_ok=True)
    return root


def _decode_upload(value: str) -> bytes:
    try:
        payload = base64.b64decode(value, validate=True)
    except Exception as exc:
        raise ValueError("Invalid base64 upload") from exc
    if not payload:
        raise ValueError("Upload chunk is empty")
    return payload


def _uploads(hass: HomeAssistant) -> dict[str, dict]:
    data = hass.data.setdefault(DOMAIN, {})
    sessions = data.setdefault("_upload_sessions", {})
    _upload_root(hass)

    now = time.time()
    stale = [
        upload_id
        for upload_id, session in sessions.items()
        if now - float(session.get("created", 0)) > _UPLOAD_TTL_SECONDS
    ]

    for upload_id in stale:
        session = sessions.pop(upload_id, {})
        try:
            Path(session.get("tmp_path", "")).unlink(missing_ok=True)
        except Exception:
            pass

    return sessions


def _new_upload(
    hass: HomeAssistant,
    *,
    serial: str,
    source: str,
    filename: str,
    folder: str,
    size: int,
) -> dict:
    if source not in {"archive", "sd"}:
        raise ValueError("Unknown upload source")
    if not filename.lower().endswith(".3mf"):
        raise ValueError("Only .3mf uploads are accepted")
    if size <= 0:
        raise ValueError("Upload is empty")
    if size > _UPLOAD_MAX_BYTES:
        raise ValueError("Upload exceeds 150 MB")

    sessions = _uploads(hass)
    upload_id = secrets.token_urlsafe(18)
    tmp_path = _upload_root(hass) / f"{upload_id}.part"
    tmp_path.parent.mkdir(parents=True, exist_ok=True)
    tmp_path.write_bytes(b"")

    _LOGGER.info("Prepared upload staging file: %s", tmp_path)

    sessions[upload_id] = {
        "serial": serial,
        "source": source,
        "filename": filename,
        "folder": folder,
        "size": size,
        "received": 0,
        "created": time.time(),
        "tmp_path": str(tmp_path),
    }

    return {
        "upload_id": upload_id,
        "chunk_bytes": _UPLOAD_CHUNK_BYTES,
        "size": size,
    }


def _append_chunk(hass: HomeAssistant, upload_id: str, payload: bytes) -> dict:
    sessions = _uploads(hass)
    session = sessions.get(upload_id)
    if session is None:
        raise ValueError("Upload session not found or expired")

    received = int(session["received"])
    expected = int(session["size"])

    if received + len(payload) > expected:
        raise ValueError("Upload exceeds announced size")

    with Path(session["tmp_path"]).open("ab") as handle:
        handle.write(payload)

    session["received"] = received + len(payload)

    return {
        "received": session["received"],
        "size": expected,
    }


def _consume_upload(hass: HomeAssistant, upload_id: str) -> tuple[dict, bytes]:
    sessions = _uploads(hass)
    session = sessions.pop(upload_id, None)

    if session is None:
        raise ValueError("Upload session not found or expired")

    tmp_path = Path(session["tmp_path"])

    try:
        if int(session["received"]) != int(session["size"]):
            raise ValueError("Upload is incomplete")
        payload = tmp_path.read_bytes()
        if len(payload) != int(session["size"]):
            raise ValueError("Stored upload size mismatch")
        return session, payload
    finally:
        tmp_path.unlink(missing_ok=True)



def _project_link(
    hass: HomeAssistant,
    *,
    serial: str,
    source: str,
    path: str,
) -> dict:
    """Create a short-lived signed download URL for the original project file."""
    if source not in {"archive", "sd"}:
        raise ValueError("Unknown source")

    expires = int(time.time()) + 300
    token = _signature(hass, serial, source, path, expires)
    filename = _slicer_filename(path.replace("\\", "/").rsplit("/", 1)[-1] or "project.3mf", suffix=".3mf")

    relative = (
        f"/api/taracraft_3d_printer/public_download/"
        f"{quote(serial, safe='')}/{quote(source, safe='')}/{expires}/{token}/"
        f"{quote(_path_token(path), safe='')}/{quote(filename, safe='')}"
    )

    return {
        "download_url": relative,
        "mode": "original_project",
        "expires": expires,
    }


def _studio_link(
    hass: HomeAssistant,
    *,
    serial: str,
    source: str,
    path: str,
    export_format: str = "3mf",
) -> dict:
    if source not in {"archive", "sd"}:
        raise ValueError("Unknown source")
    if export_format not in {"3mf", "stl"}:
        raise ValueError("Unknown model export format")

    source_suffix = "model_3mf" if export_format == "3mf" else "model_stl"
    model_source = f"{source}_{source_suffix}"
    expires = int(time.time()) + 300
    token = _signature(hass, serial, model_source, path, expires)
    original_filename = path.replace("\\", "/").rsplit("/", 1)[-1] or "model.3mf"
    filename = _slicer_filename(original_filename, suffix=f".{export_format}")

    relative = (
        f"/api/taracraft_3d_printer/public_download/"
        f"{quote(serial, safe='')}/{quote(model_source, safe='')}/{expires}/{token}/"
        f"{quote(_path_token(path), safe='')}/{quote(filename, safe='')}"
    )

    return {
        "download_url": relative,
        "mode": f"model_only_{export_format}",
        "expires": expires,
    }


@websocket_api.websocket_command(
    {
        vol.Required("type"): "taracraft_3d_printer/archive/list",
        vol.Required("serial"): str,
        vol.Optional("folder", default=""): str,
    }
)
@websocket_api.async_response
async def websocket_archive_list(hass, connection, msg) -> None:
    _find_coordinator(hass, msg["serial"])
    result = await hass.async_add_executor_job(
        _archive(hass).list_items,
        msg["folder"],
    )
    connection.send_result(msg["id"], result)


@websocket_api.websocket_command(
    {
        vol.Required("type"): "taracraft_3d_printer/archive/tree",
        vol.Required("serial"): str,
    }
)
@websocket_api.async_response
async def websocket_archive_tree(hass, connection, msg) -> None:
    _find_coordinator(hass, msg["serial"])
    result = await hass.async_add_executor_job(_archive(hass).tree)
    connection.send_result(msg["id"], {"folders": result})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "taracraft_3d_printer/archive/create_folder",
        vol.Required("serial"): str,
        vol.Optional("folder", default=""): str,
        vol.Required("name"): str,
    }
)
@websocket_api.async_response
async def websocket_archive_create_folder(hass, connection, msg) -> None:
    _find_coordinator(hass, msg["serial"])
    result = await hass.async_add_executor_job(
        _archive(hass).create_folder,
        msg["folder"],
        msg["name"],
    )
    connection.send_result(msg["id"], result)


@websocket_api.websocket_command(
    {
        vol.Required("type"): "taracraft_3d_printer/archive/delete",
        vol.Required("serial"): str,
        vol.Required("path"): str,
    }
)
@websocket_api.async_response
async def websocket_archive_delete(hass, connection, msg) -> None:
    _find_coordinator(hass, msg["serial"])
    await hass.async_add_executor_job(_archive(hass).delete, msg["path"])
    connection.send_result(msg["id"], {"ok": True})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "taracraft_3d_printer/archive/rename",
        vol.Required("serial"): str,
        vol.Required("path"): str,
        vol.Required("new_name"): str,
    }
)
@websocket_api.async_response
async def websocket_archive_rename(hass, connection, msg) -> None:
    _find_coordinator(hass, msg["serial"])
    result = await hass.async_add_executor_job(
        _archive(hass).rename,
        msg["path"],
        msg["new_name"],
    )
    connection.send_result(msg["id"], result)


@websocket_api.websocket_command(
    {
        vol.Required("type"): "taracraft_3d_printer/archive/move",
        vol.Required("serial"): str,
        vol.Required("path"): str,
        vol.Optional("target_folder", default=""): str,
        vol.Optional("overwrite", default=False): bool,
    }
)
@websocket_api.async_response
async def websocket_archive_move(hass, connection, msg) -> None:
    _find_coordinator(hass, msg["serial"])
    result = await hass.async_add_executor_job(
        _archive(hass).move,
        msg["path"],
        msg["target_folder"],
        msg["overwrite"],
    )
    connection.send_result(msg["id"], result)


@websocket_api.websocket_command(
    {
        vol.Required("type"): "taracraft_3d_printer/sd/list",
        vol.Required("serial"): str,
        vol.Optional("folder", default="/"): str,
        vol.Optional("force", default=False): bool,
    }
)
@websocket_api.async_response
async def websocket_sd_list(hass, connection, msg) -> None:
    coordinator = _find_coordinator(hass, msg["serial"])
    folder = msg["folder"] or "/"
    items = await hass.async_add_executor_job(
        _browser(hass, coordinator).list_items,
        folder,
        msg["force"],
    )
    stats = {
        "files": sum(1 for item in items if item.get("kind") != "folder"),
        "folders": sum(1 for item in items if item.get("kind") == "folder"),
        "bytes": sum(int(item.get("size") or 0) for item in items if item.get("kind") != "folder"),
    }
    normalized_folder = str(folder or "/")
    parent = str(Path(normalized_folder).parent).replace("\\", "/")
    if parent in {".", ""}:
        parent = "/"
    connection.send_result(
        msg["id"],
        {
            "folder": normalized_folder,
            "parent": parent,
            "items": items,
            "stats": stats,
        },
    )


@websocket_api.websocket_command(
    {
        vol.Required("type"): "taracraft_3d_printer/sd/tree",
        vol.Required("serial"): str,
    }
)
@websocket_api.async_response
async def websocket_sd_tree(hass, connection, msg) -> None:
    coordinator = _find_coordinator(hass, msg["serial"])
    folders = await hass.async_add_executor_job(_browser(hass, coordinator).tree)
    connection.send_result(msg["id"], {"folders": folders})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "taracraft_3d_printer/sd/create_folder",
        vol.Required("serial"): str,
        vol.Optional("folder", default="/"): str,
        vol.Required("name"): str,
    }
)
@websocket_api.async_response
async def websocket_sd_create_folder(hass, connection, msg) -> None:
    coordinator = _find_coordinator(hass, msg["serial"])
    result = await hass.async_add_executor_job(
        _browser(hass, coordinator).create_folder,
        msg["folder"],
        msg["name"],
    )
    connection.send_result(msg["id"], result)


@websocket_api.websocket_command(
    {
        vol.Required("type"): "taracraft_3d_printer/sd/delete",
        vol.Required("serial"): str,
        vol.Required("path"): str,
    }
)
@websocket_api.async_response
async def websocket_sd_delete(hass, connection, msg) -> None:
    coordinator = _find_coordinator(hass, msg["serial"])
    await hass.async_add_executor_job(_browser(hass, coordinator).delete, msg["path"])
    connection.send_result(msg["id"], {"ok": True})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "taracraft_3d_printer/sd/rename",
        vol.Required("serial"): str,
        vol.Required("path"): str,
        vol.Required("new_name"): str,
    }
)
@websocket_api.async_response
async def websocket_sd_rename(hass, connection, msg) -> None:
    coordinator = _find_coordinator(hass, msg["serial"])
    result = await hass.async_add_executor_job(
        _browser(hass, coordinator).rename,
        msg["path"],
        msg["new_name"],
    )
    connection.send_result(msg["id"], result)


@websocket_api.websocket_command(
    {
        vol.Required("type"): "taracraft_3d_printer/sd/move",
        vol.Required("serial"): str,
        vol.Required("path"): str,
        vol.Optional("target_folder", default="/"): str,
        vol.Optional("overwrite", default=False): bool,
    }
)
@websocket_api.async_response
async def websocket_sd_move(hass, connection, msg) -> None:
    coordinator = _find_coordinator(hass, msg["serial"])
    result = await hass.async_add_executor_job(
        _browser(hass, coordinator).move,
        msg["path"],
        msg["target_folder"],
        msg["overwrite"],
    )
    connection.send_result(msg["id"], result)


@websocket_api.websocket_command(
    {
        vol.Required("type"): "taracraft_3d_printer/upload/start",
        vol.Required("serial"): str,
        vol.Required("source"): str,
        vol.Required("filename"): str,
        vol.Optional("folder", default=""): str,
        vol.Required("size"): int,
    }
)
@websocket_api.async_response
async def websocket_upload_start(hass, connection, msg) -> None:
    _find_coordinator(hass, msg["serial"])
    _LOGGER.info(
        "Starting upload session: source=%s filename=%s size=%s serial=%s",
        msg["source"],
        msg["filename"],
        msg["size"],
        msg["serial"],
    )
    result = await hass.async_add_executor_job(
        partial(
            _new_upload,
            hass,
            serial=msg["serial"],
            source=msg["source"],
            filename=msg["filename"],
            folder=msg["folder"],
            size=msg["size"],
        )
    )
    connection.send_result(msg["id"], result)


@websocket_api.websocket_command(
    {
        vol.Required("type"): "taracraft_3d_printer/upload/chunk",
        vol.Required("upload_id"): str,
        vol.Required("content_base64"): str,
    }
)
@websocket_api.async_response
async def websocket_upload_chunk(hass, connection, msg) -> None:
    payload = await hass.async_add_executor_job(
        _decode_upload,
        msg["content_base64"],
    )
    result = await hass.async_add_executor_job(
        _append_chunk,
        hass,
        msg["upload_id"],
        payload,
    )
    connection.send_result(msg["id"], result)


@websocket_api.websocket_command(
    {
        vol.Required("type"): "taracraft_3d_printer/upload/finish",
        vol.Required("upload_id"): str,
    }
)
@websocket_api.async_response
async def websocket_upload_finish(hass, connection, msg) -> None:
    session, payload = await hass.async_add_executor_job(
        _consume_upload,
        hass,
        msg["upload_id"],
    )

    coordinator = _find_coordinator(hass, session["serial"])

    if session["source"] == "archive":
        result = await hass.async_add_executor_job(
            _archive(hass).upload,
            session["filename"],
            payload,
            session["folder"],
        )
    else:
        result = await hass.async_add_executor_job(
            _browser(hass, coordinator).upload,
            session["filename"],
            payload,
            session["folder"] or "/",
        )

    _LOGGER.info(
        "Completed upload session: source=%s filename=%s size=%s serial=%s",
        session["source"],
        session["filename"],
        session["size"],
        session["serial"],
    )
    connection.send_result(msg["id"], result)



@websocket_api.websocket_command(
    {
        vol.Required("type"): "taracraft_3d_printer/project/link",
        vol.Required("serial"): str,
        vol.Required("source"): str,
        vol.Required("path"): str,
    }
)
@websocket_api.callback
def websocket_project_link(hass, connection, msg) -> None:
    _find_coordinator(hass, msg["serial"])
    connection.send_result(
        msg["id"],
        _project_link(
            hass,
            serial=msg["serial"],
            source=msg["source"],
            path=msg["path"],
        ),
    )


@websocket_api.websocket_command(
    {
        vol.Required("type"): "taracraft_3d_printer/studio/link",
        vol.Required("serial"): str,
        vol.Required("source"): str,
        vol.Required("path"): str,
        vol.Optional("format", default="3mf"): vol.In({"3mf", "stl"}),
    }
)
@websocket_api.callback
def websocket_studio_link(hass, connection, msg) -> None:
    _find_coordinator(hass, msg["serial"])
    connection.send_result(
        msg["id"],
        _studio_link(
            hass,
            serial=msg["serial"],
            source=msg["source"],
            path=msg["path"],
            export_format=msg["format"],
        ),
    )



def _queue(hass: HomeAssistant) -> PrintQueueRepository:
    data = hass.data.setdefault(DOMAIN, {})
    repository = data.get("_print_queue_repository")
    if not isinstance(repository, PrintQueueRepository):
        repository = PrintQueueRepository(Path(hass.config.path("taracraft_3d_printer", "print_queue.json")))
        data["_print_queue_repository"] = repository
    return repository


@websocket_api.websocket_command(
    {
        vol.Required("type"): "taracraft_3d_printer/queue/list",
        vol.Required("serial"): str,
    }
)
@websocket_api.async_response
async def websocket_queue_list(hass, connection, msg) -> None:
    coordinator = _find_coordinator(hass, msg["serial"])
    result = await hass.async_add_executor_job(_queue(hass).list, msg["serial"])

    # Old queue entries from rc1.32 did not persist thumbnails. Enrich the
    # response on demand so the simplified queue tiles can still show a model.
    for item in result.get("items", [])[:36]:
        if item.get("preview_data_url") or not str(item.get("name", "")).lower().endswith(".3mf"):
            continue
        try:
            if item.get("source") == "archive":
                preview = await hass.async_add_executor_job(_archive(hass).preview, item["path"])
            elif item.get("source") == "sd":
                preview = await hass.async_add_executor_job(_browser(hass, coordinator).preview, item["path"])
            else:
                preview = ""
            item["preview_data_url"] = preview
        except Exception:
            item["preview_data_url"] = ""

    connection.send_result(msg["id"], result)


@websocket_api.websocket_command(
    {
        vol.Required("type"): "taracraft_3d_printer/queue/add",
        vol.Required("serial"): str,
        vol.Required("source"): vol.In({"archive", "sd"}),
        vol.Required("path"): str,
        vol.Optional("name", default=""): str,
        vol.Optional("quantity", default=1): int,
        vol.Optional("scheduled_for", default=""): str,
        vol.Optional("preview_data_url", default=""): str,
    }
)
@websocket_api.async_response
async def websocket_queue_add(hass, connection, msg) -> None:
    _find_coordinator(hass, msg["serial"])
    result = await hass.async_add_executor_job(
        partial(
            _queue(hass).add,
            serial=msg["serial"],
            source=msg["source"],
            path=msg["path"],
            name=msg["name"],
            quantity=msg["quantity"],
            scheduled_for=msg["scheduled_for"],
            preview_data_url=msg["preview_data_url"],
        )
    )
    connection.send_result(msg["id"], result)


@websocket_api.websocket_command(
    {
        vol.Required("type"): "taracraft_3d_printer/queue/update",
        vol.Required("serial"): str,
        vol.Required("queue_id"): str,
        vol.Optional("quantity"): int,
        vol.Optional("scheduled_for"): str,
    }
)
@websocket_api.async_response
async def websocket_queue_update(hass, connection, msg) -> None:
    _find_coordinator(hass, msg["serial"])
    kwargs = {
        "serial": msg["serial"],
        "queue_id": msg["queue_id"],
    }
    if "quantity" in msg:
        kwargs["quantity"] = msg["quantity"]
    if "scheduled_for" in msg:
        kwargs["scheduled_for"] = msg["scheduled_for"]
    result = await hass.async_add_executor_job(partial(_queue(hass).update, **kwargs))
    connection.send_result(msg["id"], result)


@websocket_api.websocket_command(
    {
        vol.Required("type"): "taracraft_3d_printer/queue/delete",
        vol.Required("serial"): str,
        vol.Required("queue_id"): str,
    }
)
@websocket_api.async_response
async def websocket_queue_delete(hass, connection, msg) -> None:
    _find_coordinator(hass, msg["serial"])
    await hass.async_add_executor_job(
        partial(_queue(hass).delete, serial=msg["serial"], queue_id=msg["queue_id"])
    )
    connection.send_result(msg["id"], {"ok": True})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "taracraft_3d_printer/queue/move",
        vol.Required("serial"): str,
        vol.Required("queue_id"): str,
        vol.Required("direction"): vol.In({"up", "down"}),
    }
)
@websocket_api.async_response
async def websocket_queue_move(hass, connection, msg) -> None:
    _find_coordinator(hass, msg["serial"])
    result = await hass.async_add_executor_job(
        partial(
            _queue(hass).move,
            serial=msg["serial"],
            queue_id=msg["queue_id"],
            direction=msg["direction"],
        )
    )
    connection.send_result(msg["id"], result)

def async_register_websocket_commands(hass: HomeAssistant) -> None:
    """Register commands exactly once."""
    data = hass.data.setdefault(DOMAIN, {})

    if data.get("_websocket_registered"):
        return

    for command in (
        websocket_archive_list,
        websocket_archive_tree,
        websocket_archive_create_folder,
        websocket_archive_delete,
        websocket_archive_rename,
        websocket_archive_move,
        websocket_sd_list,
        websocket_sd_tree,
        websocket_sd_create_folder,
        websocket_sd_delete,
        websocket_sd_rename,
        websocket_sd_move,
        websocket_upload_start,
        websocket_upload_chunk,
        websocket_upload_finish,
        websocket_project_link,
        websocket_studio_link,
        websocket_queue_list,
        websocket_queue_add,
        websocket_queue_update,
        websocket_queue_delete,
        websocket_queue_move,
    ):
        websocket_api.async_register_command(hass, command)

    data["_websocket_registered"] = True
