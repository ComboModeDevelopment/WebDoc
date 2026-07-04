/*
 * Loads data for each section and renders it. Vanilla JS, no build step.
 */
(function () {
  "use strict";

  var cfg = window.SITE_CONFIG || {};

  // --- Helpers --------------------------------------------------------------

  function el(id) {
    return document.getElementById(id);
  }

  // Escape text before inserting into innerHTML.
  function esc(str) {
    var d = document.createElement("div");
    d.textContent = str == null ? "" : String(str);
    return d.innerHTML;
  }

  // Render an array of strings as a <ul>, or a single line, or an em-dash.
  function listCell(items) {
    if (!items || (Array.isArray(items) && items.length === 0)) return "—";
    if (!Array.isArray(items)) return esc(items);
    return "<ul>" + items.map(function (i) {
      return "<li>" + esc(i) + "</li>";
    }).join("") + "</ul>";
  }

  function showError(container, message) {
    container.innerHTML = '<p class="error">' + esc(message) + "</p>";
  }

  // --- Placeholder character data (used when charactersUrl is unset/fails) ---

  function placeholderCharacters() {
    var out = [];
    for (var i = 1; i <= 40; i++) {
      out.push({
        name: "Character " + i,
        changes: ["Placeholder change for character " + i + "."],
        credits: ["Placeholder credit"]
      });
    }
    return out;
  }

  // --- Characters + Credits -------------------------------------------------

  function renderCharactersTable(container, characters) {
    var rows = characters.map(function (c) {
      return "<tr><td>" + esc(c.name) + "</td><td>" + listCell(c.changes) + "</td></tr>";
    }).join("");
    container.innerHTML =
      "<table><thead><tr><th>Character</th><th>Changes</th></tr></thead>" +
      "<tbody>" + rows + "</tbody></table>";
  }

  function renderCreditsTable(container, characters) {
    var rows = characters.map(function (c) {
      return "<tr><td>" + esc(c.name) + "</td><td>" + listCell(c.credits) + "</td></tr>";
    }).join("");
    container.innerHTML =
      "<table><thead><tr><th>Character</th><th>Credits</th></tr></thead>" +
      "<tbody>" + rows + "</tbody></table>";
  }

  function loadCharacters() {
    var charsEl = el("characters-content");
    var creditsEl = el("credits-content");

    function render(data) {
      renderCharactersTable(charsEl, data);
      renderCreditsTable(creditsEl, data);
    }

    if (!cfg.charactersUrl) {
      // Not wired up yet — show placeholders so the layout is visible.
      render(placeholderCharacters());
      return;
    }

    fetch(cfg.charactersUrl)
      .then(function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.json();
      })
      .then(function (data) {
        if (!Array.isArray(data)) throw new Error("Expected a JSON array");
        render(data);
      })
      .catch(function (err) {
        // Fall back to placeholders but note the failure.
        render(placeholderCharacters());
        console.warn("Failed to load characters from", cfg.charactersUrl, err);
      });
  }

  // --- Trailer --------------------------------------------------------------

  function loadTrailer() {
    var container = el("trailer-content");
    if (!cfg.youtubeVideoId) {
      showError(container, "No trailer configured.");
      return;
    }
    var src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(cfg.youtubeVideoId);
    var iframe = document.createElement("iframe");
    iframe.src = src;
    iframe.title = "Trailer";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    container.appendChild(iframe);
  }

  // --- FAQ ------------------------------------------------------------------

  function renderFaq(container, items) {
    if (!Array.isArray(items) || items.length === 0) {
      showError(container, "No FAQ entries.");
      return;
    }
    container.innerHTML = items.map(function (item) {
      return '<div class="faq-item">' +
        '<p class="faq-q">' + esc(item.question) + "</p>" +
        '<p class="faq-a">' + esc(item.answer) + "</p>" +
        "</div>";
    }).join("");
  }

  function loadFaq() {
    var container = el("faq-content");
    if (!cfg.faqUrl) {
      showError(container, "No FAQ configured.");
      return;
    }
    fetch(cfg.faqUrl)
      .then(function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.json();
      })
      .then(function (data) {
        renderFaq(container, data);
      })
      .catch(function (err) {
        showError(container, "Could not load FAQ.");
        console.warn("Failed to load FAQ from", cfg.faqUrl, err);
      });
  }

  // --- Download -------------------------------------------------------------

  function loadDownload() {
    var container = el("download-content");
    if (!cfg.downloadUrl) {
      showError(container, "No download link configured.");
      return;
    }
    var a = document.createElement("a");
    a.className = "download-button";
    a.href = cfg.downloadUrl;
    a.textContent = cfg.downloadLabel || "Download";
    a.target = "_blank";
    a.rel = "noopener";
    container.appendChild(a);
  }

  // --- About ----------------------------------------------------------------

  function loadAbout() {
    var container = el("about-content");
    // aboutText may be a single string or an array of paragraph strings.
    var paragraphs = Array.isArray(cfg.aboutText)
      ? cfg.aboutText
      : [cfg.aboutText || ""];
    paragraphs.forEach(function (text) {
      var p = document.createElement("p");
      p.textContent = text;
      container.appendChild(p);
    });
  }

  // --- Init -----------------------------------------------------------------

  document.addEventListener("DOMContentLoaded", function () {
    loadCharacters();
    loadTrailer();
    loadFaq();
    loadDownload();
    loadAbout();
  });
})();
