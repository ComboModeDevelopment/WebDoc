# Character changes

The Characters section reads per-release, per-character change notes from this
folder. The source of truth is the private `Combo-Mode` repo
(`changes/characters/*.md`); copy those files in here per release.

There are two views on the site, toggled by a segmented control above the
release picker:

| View | Reads from | Contents |
|------|-----------|----------|
| **Changes this release** (default) | `<release>/deltas/` | Only what changed versus the release immediately before |
| **All changes so far** | `<release>/characters/` | Cumulative — everything since 0.0.0, as of that release |

`characters/` is required; `deltas/` is optional and hand-written.

The page opens on **Changes this release**, so the delta files are the first
thing a visitor sees. Until a character has one, they only appear under
"All changes so far".

## Folder layout

```
docs/changes/
  index.json                     <- auto-generated, do not edit by hand
  0.6.0/
    characters/                  <- cumulative (required)
      Mario.md
      Link.md
      ...
    deltas/                      <- just this release (optional)
      Yoshi.md
  0.5.0/
    characters/
      ...
```

- One folder per release, named exactly as you want it shown in the dropdown
  (e.g. `0.6.0`). Releases are sorted newest-first automatically.
- Inside each release, put the cumulative character markdown files under
  `characters/`.
- The **file name (without `.md`)** is used as the character's display name, so
  name them how you want them to appear (e.g. `Captain Falcon.md`). A delta file
  must use the **same file name** as its cumulative counterpart so the two are
  matched up.

## Delta files (the "Changes this release" view)

Delta files are written by hand, one per character per release, and describe
only what changed since the previous release. They are being added character by
character — **Yoshi is done for every release; the rest are still to do.**

The compare view lists only the characters that have a delta file for the
selected release, and shows a note saying how many are written up so far. A
character with no delta file simply doesn't appear in that view; nothing breaks.

Write them in the same markdown style as the cumulative files, with a
`## Changes since <previous version>` heading:

```markdown
# Yoshi — 0.9.5

## Changes since 0.9.0

### Smash Attacks

**Up Smash**
kbg: 93 → 115
```

Conventions worth keeping:

- If a release changed nothing for a character, still write the file with a
  `No changes this release.` body. That is how the site tells "nothing changed"
  apart from "not written up yet".
- State values relative to the **previous release**, not to vanilla. Where the
  cumulative file reads `kbg: 83 → 93 → 115`, the 0.9.5 delta reads
  `kbg: 93 → 115`.
- Only include the sections and moves that actually changed.

## Updating for a new release

1. Copy the `changes/characters/*.md` files from the private repo into a new
   `docs/changes/<version>/characters/` folder.
2. Optionally add hand-written delta files under
   `docs/changes/<version>/deltas/`.
3. Regenerate the manifest:

   ```
   python3 scripts/build_changes_index.py
   ```

   (The deploy workflow also runs this automatically, so committing the `.md`
   files is enough — but running it locally lets you preview first.)

4. Commit and push.

The markdown is rendered to HTML in a popup modal when a visitor clicks a
character. Headings, lists, tables, code, blockquotes, bold/italic, and links
are supported.
