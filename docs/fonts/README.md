# Fonts

The site headers use **Edo SZ**, a freeware display font by Vic Fieger. It is
not a Google/web font, so it has to be self-hosted here.

## What to add

Place the font file(s) in this folder so the `@font-face` rule in
`../styles.css` can find them:

- `edosz.woff2`  ← preferred (smallest, add if you can generate it)
- `edosz.ttf`    ← the file you download works directly

The stylesheet references both names:

```css
src: url("fonts/edosz.woff2") format("woff2"),
     url("fonts/edosz.ttf") format("truetype");
```

You only need one of them, but woff2 loads faster. To make a woff2 from the
ttf you can use any TTF→WOFF2 converter (e.g. `woff2_compress edosz.ttf`).

## Where to get it

Search for "Edo SZ font" (Vic Fieger). It's distributed as freeware. Download
the `.ttf`, rename it to `edosz.ttf`, and drop it here.

Until the file is present, headers fall back to `Impact, "Arial Black",
sans-serif` — the site still works, it just won't show the Edo SZ styling.
