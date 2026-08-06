#!/usr/bin/env python3
"""Generate docs/changes/index.json by scanning the per-release change folders.

The site is static, so the browser can't list directories. This script walks:

    docs/changes/<release>/characters/<Character>.md   (cumulative, since 0.0.0)
    docs/changes/<release>/deltas/<Character>.md       (just this release)

and writes a manifest the front-end reads to build the release dropdown and the
per-release character list.

The `characters/` file is the full history up to that release; the optional
`deltas/` file covers only what changed versus the previous release, and powers
the "What changed in this release" view. Delta files are hand-written and are
being added character by character, so a release may have deltas for only some
of its roster — each release also records `previous` so the UI can label the
comparison.

Run it locally before previewing, or let the deploy workflow run it (it does).

Releases newer than `latest_published` (scripts/release_config.json) are gated
out — see scripts/releasecfg.py.
"""
import io
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import releasecfg

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CHANGES_DIR = os.path.join(REPO_ROOT, "docs", "changes")


def _md_files(directory):
    if not os.path.isdir(directory):
        return set()
    return {f for f in os.listdir(directory) if f.lower().endswith(".md")}


def _reports_removal(path):
    """True when a delta records that the character was cut from the roster.

    They stay listed with their history intact; the front-end greys the tile.
    Once announced, the removal holds for every later release too.
    """
    with io.open(path, encoding="utf-8") as fh:
        return "removed from Combo Mode" in fh.read()


def _reports_no_changes(path):
    """True when a delta's whole body is the "nothing happened" sentence.

    Those files are worth keeping on disk — they record that a character was
    checked and left alone — but listing them under "Changes this release"
    reads as though the character *did* change. A delta that carries an
    arrival note or any section is real content and stays.
    """
    body = []
    with io.open(path, encoding="utf-8") as fh:
        for line in fh:
            s = line.strip()
            if not s or s.startswith("# ") or s.startswith("## "):
                continue
            body.append(s)
    return body == ["No changes this release."]


def build():
    releases = []
    removed_at = {}          # character -> first release announcing removal
    if os.path.isdir(CHANGES_DIR):
        for version in sorted(os.listdir(CHANGES_DIR)):
            version_dir = os.path.join(CHANGES_DIR, version)
            if not os.path.isdir(version_dir):
                continue
            cumulative = _md_files(os.path.join(version_dir, "characters"))
            deltas = _md_files(os.path.join(version_dir, "deltas"))
            # A release needs at least one of the two kinds of file. Either may
            # stand alone: a release can ship delta notes before its cumulative
            # files have been copied over, or vice versa.
            characters = []
            unchanged = 0
            for filename in sorted(cumulative | deltas):
                entry = {"name": os.path.splitext(filename)[0]}
                # The front-end keys off these two: `file` puts a character in
                # the "All changes so far" view, `delta` in "Changes this
                # release". Absent means that view skips them.
                if filename in cumulative:
                    entry["file"] = filename
                if filename in deltas:
                    dpath = os.path.join(version_dir, "deltas", filename)
                    if _reports_removal(dpath):
                        removed_at.setdefault(entry["name"], version)
                    if _reports_no_changes(dpath):
                        unchanged += 1
                    else:
                        entry["delta"] = filename
                characters.append(entry)
            if characters:
                rel = {"version": version, "characters": characters}
                # Lets the page distinguish "nobody changed" from "nobody has
                # been written up yet" when the delta grid comes out empty.
                if unchanged:
                    rel["unchanged"] = unchanged
                releases.append(rel)

    # A removal holds from the release it was announced in onwards.
    for rel in releases:
        for entry in rel["characters"]:
            since = removed_at.get(entry["name"])
            if since and releasecfg.version_key(rel["version"]) >= releasecfg.version_key(since):
                entry["removed"] = True

    releases, hidden = releasecfg.partition_releases(releases)
    releases.sort(key=lambda r: releasecfg.version_key(r["version"]), reverse=True)

    # Sorted newest-first, so each release's predecessor is the next entry along.
    for i, rel in enumerate(releases):
        if i + 1 < len(releases):
            rel["previous"] = releases[i + 1]["version"]

    os.makedirs(CHANGES_DIR, exist_ok=True)
    out_path = os.path.join(CHANGES_DIR, "index.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump({"releases": releases}, f, indent=2)
        f.write("\n")

    total_chars = sum(1 for r in releases for c in r["characters"] if c.get("file"))
    total_deltas = sum(1 for r in releases for c in r["characters"] if c.get("delta"))
    note = ""
    if hidden:
        note = "  (hidden by latest_published: %s)" % ", ".join(
            sorted(h["version"] for h in hidden))
    print("Wrote %s: %d release(s), %d character file(s), %d delta file(s).%s"
          % (os.path.relpath(out_path, REPO_ROOT), len(releases), total_chars,
             total_deltas, note))

    # Call out releases that are only half-populated, so an empty folder
    # doesn't quietly drop a view's worth of content.
    for rel in releases:
        if not any(c.get("file") for c in rel["characters"]):
            print("  note: %s has no characters/*.md — it will only appear "
                  "under \"Changes this release\"." % rel["version"])
        elif not any(c.get("delta") for c in rel["characters"]):
            # Distinguish "nobody written up" from "everyone written up as
            # unchanged" — the second is complete, not a gap to chase.
            if rel.get("unchanged"):
                print("  note: %s has %d delta(s), all reporting no changes — "
                      "\"Changes this release\" will say so."
                      % (rel["version"], rel["unchanged"]))
            else:
                print("  note: %s has no deltas/*.md — it will only appear "
                      "under \"All changes so far\"." % rel["version"])


if __name__ == "__main__":
    build()
