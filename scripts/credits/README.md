# Credits source

Credits are **not** release-based. One file per category:

```
scripts/credits/characters.txt
scripts/credits/stages.txt
scripts/credits/other.txt
```

`scripts/build_credits.py` reads these and generates `docs/data/credits.json`,
which the site renders as three icon grids under the Credits section (same
grid/modal style as Quirks).

## Format

One block per entry: a name line ending in `:`, then one credit line per line.
Blank lines separate blocks. Lines starting with `#` are comments (ignored).

```
Mario:
Model: SomeArtist
Animations: AnotherPerson
```

- The name becomes the display label and the **icon slug**
  (e.g. `Fox (Melee):` -> `fox-melee.png`).
- Icons live in `docs/images/<category>/` — characters reuse
  `docs/images/characters/`, stages use `docs/images/stages/`, other uses
  `docs/images/other/`. Missing icons fall back to a text tile.

Entries are sorted alphabetically by name on the site, so you can list them in
any order here.
