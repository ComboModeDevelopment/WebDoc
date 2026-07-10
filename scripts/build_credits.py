#!/usr/bin/env python3
"""Generate docs/data/credits.json from the files in scripts/credits/.

Credits are NOT release-based. There is one file per category:

    scripts/credits/characters.txt
    scripts/credits/stages.txt
    scripts/credits/other.txt

Inside each file, list entries as blocks — a name line ending in `:` followed by
one credit line per line. Blank lines separate blocks. Lines starting with `#`
are comments (ignored), so you can keep notes/templates in the file.

    Mario:
    Model: SomeArtist
    Animations: AnotherPerson

Output shape:

    { "characters": [ {"name", "icon", "credits": [...]}, ... ],
      "stages": [...], "other": [...] }

To update, edit the relevant file and re-run this script (the deploy workflow
also runs it).
"""
import json
import os
import re

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_DIR = os.path.join(REPO_ROOT, "scripts", "credits")
OUT = os.path.join(REPO_ROOT, "docs", "data", "credits.json")

CATEGORIES = ["characters", "stages", "other"]


def slugify(name):
    """Name -> icon filename stem, e.g. 'Final Destination' -> 'final-destination'."""
    s = re.sub(r"[()]", "", name.lower())
    s = re.sub(r"[^a-z0-9]+", "-", s)
    return s.strip("-")


def parse_file(path):
    entries = []
    current = None
    with open(path, encoding="utf-8") as f:
        for raw in f:
            line = raw.strip()
            if not line or line.startswith("#"):
                continue
            if line.endswith(":"):
                name = line[:-1].strip()
                current = {"name": name, "icon": slugify(name), "credits": []}
                entries.append(current)
            elif current is not None:
                current["credits"].append(line)
    return entries


def build():
    data = {}
    for category in CATEGORIES:
        path = os.path.join(SRC_DIR, category + ".txt")
        data[category] = parse_file(path) if os.path.isfile(path) else []

    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write("\n")

    summary = ", ".join("%s (%d)" % (c, len(data[c])) for c in CATEGORIES)
    print("Wrote %s: %s" % (os.path.relpath(OUT, REPO_ROOT), summary))


if __name__ == "__main__":
    build()
