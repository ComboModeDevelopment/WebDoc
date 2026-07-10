"""Shared release-gating helpers for the build scripts.

A single setting (`latest_published` in release_config.json) controls which
releases are visible on the site, for BOTH quirks and character changes. Any
release newer than `latest_published` is filtered out at build time.

Set the env var SHOW_UNPUBLISHED=1 to bypass the gate (useful for local
previews of not-yet-published content).
"""
import json
import os

_DIR = os.path.dirname(os.path.abspath(__file__))
_CONFIG = os.path.join(_DIR, "release_config.json")


def version_key(version):
    """Sort key so 1.0.0 > 0.9.0. Falls back to string parts when non-numeric."""
    parts = []
    for part in str(version).lstrip("vV").split("."):
        parts.append((0, int(part)) if part.isdigit() else (1, part))
    return parts


def latest_published():
    """Newest version allowed on the site, or None to allow everything."""
    if os.environ.get("SHOW_UNPUBLISHED"):
        return None
    try:
        with open(_CONFIG, encoding="utf-8") as f:
            data = json.load(f)
    except (FileNotFoundError, ValueError):
        return None
    value = data.get("latest_published")
    return value or None


def is_published(version, latest=None):
    if latest is None:
        latest = latest_published()
    if not latest:
        return True
    return version_key(version) <= version_key(latest)


def partition_releases(releases, key=lambda r: r["version"]):
    """Return (published, hidden) lists, gated by latest_published()."""
    latest = latest_published()
    if not latest:
        return list(releases), []
    published, hidden = [], []
    for r in releases:
        (published if is_published(key(r), latest) else hidden).append(r)
    return published, hidden
