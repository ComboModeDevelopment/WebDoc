#!/usr/bin/env python3
"""Generate docs/data/quirks.json from scripts/quirks_source.txt.

The source is plain text. A `RELEASE: x.y.z` line starts a new release; every
`Character Name:` block after it (until the next `RELEASE:`) belongs to that
release:

    RELEASE: 1.0.0

    Character Name:
    quirk line
    quirk line

You can have multiple `RELEASE:` sections — each becomes its own entry in the
dropdown (sorted newest-first). The special block `Combo Mode:` is treated as
the section intro rather than a character. To update the quirks, edit the source
text and re-run this script (the deploy workflow also runs it).
"""
import json
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import releasecfg

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(REPO_ROOT, "scripts", "quirks_source.txt")
OUT = os.path.join(REPO_ROOT, "docs", "data", "quirks.json")


def slugify(name):
    """Character name -> icon filename stem, e.g. 'Fox (Melee)' -> 'fox-melee'."""
    s = re.sub(r"[()]", "", name.lower())
    s = re.sub(r"[^a-z0-9]+", "-", s)
    return s.strip("-")


def build():
    intro = ""
    releases = []
    current_release = None
    current_char = None
    mode = None      # "intro" or "char"

    with open(SRC, encoding="utf-8") as f:
        for raw in f:
            line = raw.strip()
            if not line:
                continue

            m = re.match(r"(?i)^RELEASE:\s*(.+)$", line)
            if m:
                current_release = {"version": m.group(1).strip(), "characters": []}
                releases.append(current_release)
                current_char = None
                mode = None
                continue

            if line.endswith(":"):
                name = line[:-1].strip()
                if name.lower() == "combo mode":
                    mode, current_char = "intro", None
                else:
                    if current_release is None:
                        # Characters before any RELEASE line: bucket them.
                        current_release = {"version": "unversioned", "characters": []}
                        releases.append(current_release)
                    mode = "char"
                    current_char = {"name": name, "icon": slugify(name), "quirks": []}
                    current_release["characters"].append(current_char)
                continue

            # content line
            if mode == "intro":
                intro = (intro + " " + line).strip()
            elif mode == "char" and current_char is not None:
                current_char["quirks"].append(line)

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
