#!/usr/bin/env python3
"""Generate docs/changes/index.json by scanning the per-release change folders.

The site is static, so the browser can't list directories. This script walks:

    docs/changes/<release>/characters/<Character>.md

and writes a manifest the front-end reads to build the release dropdown and the
per-release character list.

Run it locally before previewing, or let the deploy workflow run it (it does).
"""
import json
import os

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CHANGES_DIR = os.path.join(REPO_ROOT, "docs", "changes")


def version_key(version):
    """Sort key so 0.10.0 > 0.9.0. Falls back to string parts when non-numeric."""
    parts = []
    for part in version.lstrip("vV").split("."):
        parts.append((0, int(part)) if part.isdigit() else (1, part))
    return parts


def build():
    releases = []
    if os.path.isdir(CHANGES_DIR):
        for version in os.listdir(CHANGES_DIR):
            char_dir = os.path.join(CHANGES_DIR, version, "characters")
            if not os.path.isdir(char_dir):
                continue
            characters = []
            for filename in sorted(os.listdir(char_dir)):
                if filename.lower().endswith(".md"):
                    characters.append({
                        "name": os.path.splitext(filename)[0],
                        "file": filename,
                    })
            if characters:
                releases.append({"version": version, "characters": characters})

    try:
        releases.sort(key=lambda r: version_key(r["version"]), reverse=True)
    except Exception:
        releases.sort(key=lambda r: r["version"], reverse=True)

    os.makedirs(CHANGES_DIR, exist_ok=True)
    out_path = os.path.join(CHANGES_DIR, "index.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump({"releases": releases}, f, indent=2)
        f.write("\n")

    total_chars = sum(len(r["characters"]) for r in releases)
    print("Wrote %s: %d release(s), %d character file(s)."
          % (os.path.relpath(out_path, REPO_ROOT), len(releases), total_chars))


if __name__ == "__main__":
    build()
