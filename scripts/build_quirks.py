#!/usr/bin/env python3
"""Generate docs/data/quirks.json from the per-release files in scripts/quirks/.

Each release is its own file, named after the version:

    scripts/quirks/0.9.0.txt
    scripts/quirks/1.0.0.txt

Inside a file, list characters as blocks (the version comes from the filename,
so no RELEASE line is needed):

    Character Name:
    quirk line
    quirk line

Blank lines separate blocks. A `Combo Mode:` block, if present, is treated as
the section intro rather than a character. Releases newer than `latest_published`
(scripts/release_config.json) are gated out — see scripts/releasecfg.py. To
update the quirks, edit the relevant file and re-run this script (the deploy
workflow also runs it).
"""
import json
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import releasecfg

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_DIR = os.path.join(REPO_ROOT, "scripts", "quirks")
OUT = os.path.join(REPO_ROOT, "docs", "data", "quirks.json")


def slugify(name):
    """Character name -> icon filename stem, e.g. 'Fox (Melee)' -> 'fox-melee'."""
    s = re.sub(r"[()]", "", name.lower())
    s = re.sub(r"[^a-z0-9]+", "-", s)
    return s.strip("-")


def parse_release_file(path):
    """Parse one release file -> (characters, intro_text)."""
    characters = []
    intro_lines = []
    current = None
    mode = None      # "intro" or "char"

    with open(path, encoding="utf-8") as f:
        for raw in f:
            line = raw.strip()
            if not line:
                continue
            if line.endswith(":"):
                name = line[:-1].strip()
                if name.lower() == "combo mode":
                    mode, current = "intro", None
                else:
                    mode = "char"
                    current = {"name": name, "icon": slugify(name), "quirks": []}
                    # "General" is roster-wide rather than a character: it uses
                    # the sandbag icon and is pinned to the front of the grid.
                    if name.lower() == "general":
                        current["icon"] = "sandbag"
                        current["pinned"] = True
                    characters.append(current)
                continue
            if mode == "intro":
                intro_lines.append(line)
            elif mode == "char" and current is not None:
                current["quirks"].append(line)

    return characters, " ".join(intro_lines).strip()


def build():
    releases = []
    intro = ""

    if os.path.isdir(SRC_DIR):
        for filename in sorted(os.listdir(SRC_DIR)):
            if not filename.lower().endswith(".txt"):
                continue
            version = os.path.splitext(filename)[0]
            characters, file_intro = parse_release_file(os.path.join(SRC_DIR, filename))
            if file_intro:
                intro = file_intro
            if characters:
                releases.append({"version": version, "characters": characters})

    releases, hidden = releasecfg.partition_releases(releases)
    releases.sort(key=lambda r: releasecfg.version_key(r["version"]), reverse=True)

    data = {"intro": intro, "releases": releases}
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write("\n")

    summary = ", ".join("%s (%d)" % (r["version"], len(r["characters"])) for r in releases)
    note = ""
    if hidden:
        note = "  (hidden: %s)" % ", ".join(sorted(h["version"] for h in hidden))
    print("Wrote %s: %d release(s): %s%s"
          % (os.path.relpath(OUT, REPO_ROOT), len(releases), summary or "(none)", note))


if __name__ == "__main__":
    build()
