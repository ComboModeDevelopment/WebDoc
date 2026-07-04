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
  youtubeVideoId: "dQw4w9WgXcQ",

  // --- Download -----------------------------------------------------------
  downloadUrl: "https://github.com/ComboModeDevelopment",
  downloadLabel: "Get ComboMode",

  // --- About --------------------------------------------------------------
  aboutText:
    "ComboMode is a community-made mod. Replace this text with the real " +
    "description of the project, its goals, and how to get involved.",
};
