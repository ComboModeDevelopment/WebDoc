/*
 * Site configuration. Edit these values to point at your real data.
 * This file is loaded before main.js and exposes a global `SITE_CONFIG`.
 */
window.SITE_CONFIG = {
  // --- Characters + Credits data (lives in a SEPARATE repo) ---------------
  // Point this at a raw JSON file. Use a raw.githubusercontent.com URL, e.g.:
  //   https://raw.githubusercontent.com/<owner>/<repo>/<branch>/characters.json
  // Expected shape:
  //   [
  //     { "name": "Ryu", "changes": ["...", "..."], "credits": ["Author A", "..."] },
  //     ...
  //   ]
  // If this fetch fails (e.g. not wired up yet), placeholder data is shown.
  charactersUrl: "",

  // --- FAQ data (lives in THIS repo, under docs/data) ---------------------
  faqUrl: "data/faq.json",

  // --- Trailer ------------------------------------------------------------
  // Just the YouTube video ID (the part after "v=").
  youtubeVideoId: "GuMWO0644FI",

  // --- Download -----------------------------------------------------------
  downloadUrl: "https://github.com/ComboModeDevelopment/Combo-Mode-Releases/releases/latest",
  downloadLabel: "Get ComboMode",

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
