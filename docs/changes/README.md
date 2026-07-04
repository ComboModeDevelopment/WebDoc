# Character changes

The Characters section reads per-release, per-character change notes from this
folder. The source of truth is the private `Combo-Mode` repo
(`changes/characters/*.md`); copy those files in here per release.

## Folder layout

```
docs/changes/
  index.json                     <- auto-generated, do not edit by hand
  0.6.0/
    characters/
      Mario.md
      Link.md
      ...
  0.5.0/
    characters/
      ...
```

- One folder per release, named exactly as you want it shown in the dropdown
  (e.g. `0.6.0`). Releases are sorted newest-first automatically.
- Inside each release, put the character markdown files under `characters/`.
- The **file name (without `.md`)** is used as the character's display name, so
  name them how you want them to appear (e.g. `Captain Falcon.md`).

## Updating for a new release

1. Copy the `changes/characters/*.md` files from the private repo into a new
   `docs/changes/<version>/characters/` folder.
2. Regenerate the manifest:

   ```
   python3 scripts/build_changes_index.py
   ```

   (The deploy workflow also runs this automatically, so committing the `.md`
   files is enough — but running it locally lets you preview first.)

3. Commit and push.

The markdown is rendered to HTML in a popup modal when a visitor clicks a
character. Headings, lists, tables, code, blockquotes, bold/italic, and links
are supported.
