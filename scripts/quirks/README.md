# Quirks source

One file per release, named after the version:

```
scripts/quirks/0.9.0.txt
scripts/quirks/1.0.0.txt
```

`scripts/build_quirks.py` reads every `*.txt` here (the version is the filename)
and generates `docs/data/quirks.json`.

## Format

List characters as blocks — a name line ending in `:` followed by one quirk per
line. Blank lines separate blocks. No `RELEASE:` line is needed; the version
comes from the filename.

```
Mario:
Can cancel jab 2 into any attack
Can wall jump out of up b

Bowser:
Built off P+ bowser...
```

- The character's **name line** becomes its display name, and its icon slug
  (e.g. `Fox (Melee):` -> `fox-melee.png`).
- A `Combo Mode:` block, if present, is treated as the section intro.

## Adding a release

Copy the latest file to the new version and edit it:

```
cp scripts/quirks/1.0.0.txt scripts/quirks/1.1.0.txt
```

Whether a release actually shows on the site is controlled by
`scripts/release_config.json` (`latest_published`). See `scripts/releasecfg.py`.
