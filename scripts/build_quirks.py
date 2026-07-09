#!/usr/bin/env python3
"""Generate docs/data/quirks.json from scripts/quirks_source.txt.

The source is plain text: a `RELEASE: x.y.z` line, then blocks of

    Character Name:
    quirk line
    quirk line

Blank lines separate blocks. The special block `Combo Mode:` is treated as the
section intro rather than a character. To update the quirks, edit the source
text and re-run this script (the deploy workflow also runs it).
"""
import json
import os
import re

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(REPO_ROOT, "scripts", "quirks_source.txt")
OUT = os.path.join(REPO_ROOT, "docs", "data", "quirks.json")


def slugify(name):
    """Character name -> icon filename stem, e.g. 'Fox (Melee)' -> 'fox-melee'."""
    s = re.sub(r"[()]", "", name.lower())
    s = re.sub(r"[^a-z0-9]+", "-", s)
    return s.strip("-")


def build():
    version = "0.9.0"
    intro = ""
    characters = []
    mode = None      # "intro" or "char"
    current = None

    with open(SRC, encoding="utf-8") as f:
        for raw in f:
            line = raw.strip()
            if not line:
                continue

            m = re.match(r"(?i)^RELEASE:\s*(.+)$", line)
            if m:
                version = m.group(1).strip()
                continue

            if line.endswith(":"):
                name = line[:-1].strip()
                if name.lower() == "combo mode":
                    mode, current = "intro", None
                else:
                    mode = "char"
                    current = {"name": name, "icon": slugify(name), "quirks": []}
                    characters.append(current)
                continue

            # content line
            if mode == "intro":
                intro = (intro + " " + line).strip()
            elif mode == "char" and current is not None:
                current["quirks"].append(line)

    data = {
        "intro": intro,
        "releases": [{"version": version, "characters": characters}],
    }
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write("\n")

    print("Wrote %s: release %s, %d character(s)."
          % (os.path.relpath(OUT, REPO_ROOT), version, len(characters)))


if __name__ == "__main__":
    build()
