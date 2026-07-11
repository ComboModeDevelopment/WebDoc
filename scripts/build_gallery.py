#!/usr/bin/env python3
"""Generate docs/data/gallery.json by scanning docs/pics/.

The site is static and a browser can't list a directory, so this writes a
manifest of the gallery images in docs/pics/. The images are served full-size
and lazy-loaded on the page. Drop new images into docs/pics/ and re-run this
(the deploy workflow also runs it).
"""
import json
import os
import re

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PICS_DIR = os.path.join(REPO_ROOT, "docs", "pics")
ORDER_FILE = os.path.join(PICS_DIR, "order.txt")
OUT = os.path.join(REPO_ROOT, "docs", "data", "gallery.json")

EXTS = {".png", ".jpg", ".jpeg", ".webp", ".gif"}


def load_order():
    """Filenames (one per line) that should lead the gallery, in order."""
    if not os.path.isfile(ORDER_FILE):
        return []
    order = []
    with open(ORDER_FILE, encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith("#"):
                order.append(line)
    return order


def prettify(stem):
    """'cool_dudes' -> 'Cool Dudes'; keeps all-caps words like 'CSS' intact."""
    words = re.split(r"[_\-\s]+", stem)
    out = [w if not w.islower() else w.capitalize() for w in words]
    return " ".join(w for w in out if w)


def build():
    images = []
    if os.path.isdir(PICS_DIR):
        files = [f for f in os.listdir(PICS_DIR)
                 if os.path.splitext(f)[1].lower() in EXTS]
        # Listed files lead (in the given order); the rest follow, A->Z.
        ordered, seen = [], set()
        for name in load_order():
            if name in files and name not in seen:
                ordered.append(name)
                seen.add(name)
        for name in sorted(files):
            if name not in seen:
                ordered.append(name)
                seen.add(name)
        for filename in ordered:
            stem = os.path.splitext(filename)[0]
            images.append({"file": filename, "alt": prettify(stem)})

    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, "w", encoding="utf-8") as f:
        json.dump({"images": images}, f, indent=2, ensure_ascii=False)
        f.write("\n")

    print("Wrote %s: %d image(s)." % (os.path.relpath(OUT, REPO_ROOT), len(images)))


if __name__ == "__main__":
    build()
