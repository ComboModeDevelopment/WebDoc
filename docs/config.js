/*
 * Site configuration. Edit these values to point at your real data.
 * This file is loaded before main.js and exposes a global `SITE_CONFIG`.
 */
window.SITE_CONFIG = {
  // --- Character changes (per-release .md files, in THIS repo) ------------
  // Copy the private repo's changes into docs/changes/<release>/characters/*.md
  // e.g. docs/changes/0.6.0/characters/Mario.md
  // The release list + character list is read from an auto-generated
  // index.json (see scripts/build_changes_index.py). This is the folder that
  // index.json and the .md files live under, relative to the site root.
  changesBasePath: "changes",
  // Icon folder for the changes grid (same slug rule as quirks). Changes
  // characters reuse the shared character icons.
  changesIconBase: "images/characters",

  // --- Quirks (per-release character quirks, in THIS repo) ----------------
  // Generated from scripts/quirks/<version>.txt by scripts/build_quirks.py.
  quirksUrl: "data/quirks.json",
  // Folder holding per-character icons for the quirks grid. Each icon is
  // <quirkIconBase>/<icon>.png where <icon> is the slug in quirks.json
  // (e.g. images/characters/fox-melee.png). Missing icons fall back to a
  // text tile, so you can add art gradually.
  quirkIconBase: "images/characters",

  // --- Credits (characters / stages / other, in THIS repo) ----------------
  // Generated from scripts/credits/{characters,stages,other}.txt by
  // scripts/build_credits.py. Not release-based.
  creditsUrl: "data/credits.json",
  // Icon folder per credits category (same slug -> <base>/<slug>.png rule as
  // quirks). Character credits reuse the shared character icons.
  creditsIconBase: {
    characters: "images/characters",
    stages: "images/stages",
    other: "images/other"
  },

  // --- Gallery (images in docs/pics) --------------------------------------
  // Drop images into docs/pics; scripts/build_gallery.py writes the manifest.
  // A manifest entry's "file" may also be a full URL (e.g. an imgur/CDN link),
  // in which case it's used as-is instead of being served from galleryBasePath.
  galleryUrl: "data/gallery.json",
  galleryBasePath: "pics",

  // --- FAQ data (lives in THIS repo, under docs/data) ---------------------
  faqUrl: "data/faq.json",

  // --- Trailer ------------------------------------------------------------
  // Just the YouTube video ID (the part after "v=").
  youtubeVideoId: "7LJMByRe5tI",

  // --- Download -----------------------------------------------------------
  downloadUrl: "https://github.com/ComboModeDevelopment/Combo-Mode-Releases/releases/latest",
  downloadLabel: "Get ComboMode",
  // Discord invite for the "Join" card (right side of Download and Join).
  // Just your invite link — no server-side setup needed. Leave "" to hide it.
  discordInviteUrl: "https://discord.gg/CH6H7JVN77",

  // --- About --------------------------------------------------------------
  // An array of paragraphs (each rendered as its own <p>).
  aboutText: [
    "Combo Mode is a Super Smash Bros. Brawl mod built by a two-person team. " +
      "Its most defining feature is a high amount of hitstun, making it a " +
      "fast-paced platform fighter built around expressive, satisfying combos " +
      "that anyone can pick up and play.",

    "It exists to fill a niche we felt was missing. Modern Smash titles like " +
      "Smash 4 and Ultimate are inviting and easy to enter, but lack the " +
      "hitstun needed for real combo expression. Melee and Project+ have deep, " +
      "on-the-fly combo creativity, but a high barrier to entry. Combo Mode " +
      "aims for the best of both: the ease and quality-of-life of newer Smash " +
      "games with the freeform, satisfying combos of the older ones.",

    "Unlike most Brawl mods, Combo Mode wasn't built on Project+. It was " +
      "started from the ground up as a vanilla Brawl mod, then refined using " +
      "parts of the P+ and REX engines to smooth out the physics and controls. " +
      "It keeps modern conveniences like no random tripping, fully " +
      "customizable controls, auto edge-sweetspotting, and dash dancing, while " +
      "adding near-zero aerial landing lag (no L-canceling), reworked shield " +
      "stun, instant out-of-shield actions, and generous powershielding.",

    "The roster is a mixed bag of Brawl, Project+, Ultimate, and unique " +
      "mashups, with nearly every character retuned to have cool moves, combo " +
      "routes, and fun options. Perfect balance isn't the goal, giving " +
      "every character something expressive and satisfying to do is.",

    "Combo Mode has been in development for two years and is still growing," +
      " some single-player modes aren't playable yet, but versus, " +
      "training, and stadium modes are, along with extras like Combo Mode " +
      "Classic and a debug mode. It's built on player feedback, so give it a " +
      "try, main a few characters, and let us know what you think!",
  ],
};
