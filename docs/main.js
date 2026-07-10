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

  function showError(container, message) {
    container.innerHTML = '<p class="error">' + esc(message) + "</p>";
  }

  // Return a copy of the characters sorted alphabetically by name.
  function sortedByName(characters) {
    return (characters || []).slice().sort(function (a, b) {
      return String(a.name).localeCompare(String(b.name), undefined, {
        sensitivity: "base",
        numeric: true
      });
    });
  }

  // --- Character changes (per-release .md files) + modal --------------------

  var changesBase = (cfg.changesBasePath || "changes").replace(/\/+$/, "");

  // Minimal Markdown -> HTML renderer (dependency-free). Covers the common
  // constructs used in change docs: headings, lists, tables, code, blockquotes,
  // bold/italic/links, horizontal rules, and paragraphs. Input is HTML-escaped
  // before any tags are generated, so it is safe to inject the result.
  function escHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function safeUrl(url) {
    // Block javascript:/data: URLs; allow the rest.
    return /^\s*(javascript|data):/i.test(url) ? "#" : url;
  }

  function inlineMd(text) {
    // `text` is already HTML-escaped.
    var codes = [];
    text = text.replace(/`([^`]+)`/g, function (_m, c) {
      codes.push("<code>" + c + "</code>");
      return "\u0000" + (codes.length - 1) + "\u0000";
    });
    text = text.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, function (_m, t, u) {
      return '<a href="' + escHtml(safeUrl(u)) + '" target="_blank" rel="noopener">' + t + "</a>";
    });
    text = text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    text = text.replace(/__([^_]+)__/g, "<strong>$1</strong>");
    text = text.replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>");
    text = text.replace(/(^|[^_])_([^_\n]+)_/g, "$1<em>$2</em>");
    text = text.replace(/\u0000(\d+)\u0000/g, function (_m, i) {
      return codes[+i];
    });
    return text;
  }

  function splitRow(line) {
    return line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")
      .map(function (c) { return c.trim(); });
  }

  function isTableSep(s) {
    return /^\s*\|?\s*:?-{1,}:?\s*(\|\s*:?-{1,}:?\s*)+\|?\s*$/.test(s);
  }

  function markdownToHtml(md) {
    var lines = String(md).replace(/\r\n?/g, "\n").split("\n");
    var out = [];
    var i = 0;
    var blockStart = /^(#{1,6}\s+|```|\s*>\s?|\s*[-*+]\s+|\s*\d+\.\s+)/;

    while (i < lines.length) {
      var line = lines[i];

      if (/^```/.test(line)) {
        var buf = [];
        i++;
        while (i < lines.length && !/^```/.test(lines[i])) { buf.push(lines[i]); i++; }
        i++; // closing fence
        out.push("<pre><code>" + escHtml(buf.join("\n")) + "</code></pre>");
        continue;
      }
      if (/^\s*$/.test(line)) { i++; continue; }

      var h = line.match(/^(#{1,6})\s+(.*)$/);
      if (h) {
        var lvl = h[1].length;
        // Strip an optional closing hash sequence, e.g. "### Up B ###".
        var htext = h[2].replace(/\s+#+\s*$/, "").trim();
        out.push("<h" + lvl + ">" + inlineMd(escHtml(htext)) + "</h" + lvl + ">");
        i++;
        continue;
      }
      if (/^\s*([-*_])(\s*\1){2,}\s*$/.test(line)) { out.push("<hr>"); i++; continue; }

      if (line.indexOf("|") !== -1 && i + 1 < lines.length && isTableSep(lines[i + 1])) {
        var header = splitRow(line);
        i += 2;
        var body = [];
        while (i < lines.length && lines[i].indexOf("|") !== -1 && !/^\s*$/.test(lines[i])) {
          body.push(splitRow(lines[i]));
          i++;
        }
        var t = "<table><thead><tr>" + header.map(function (c) {
          return "<th>" + inlineMd(escHtml(c)) + "</th>";
        }).join("") + "</tr></thead><tbody>";
        t += body.map(function (r) {
          return "<tr>" + r.map(function (c) {
            return "<td>" + inlineMd(escHtml(c)) + "</td>";
          }).join("") + "</tr>";
        }).join("");
        out.push(t + "</tbody></table>");
        continue;
      }

      if (/^\s*>\s?/.test(line)) {
        var q = [];
        while (i < lines.length && /^\s*>\s?/.test(lines[i])) {
          q.push(lines[i].replace(/^\s*>\s?/, ""));
          i++;
        }
        out.push("<blockquote>" + markdownToHtml(q.join("\n")) + "</blockquote>");
        continue;
      }

      if (/^\s*[-*+]\s+/.test(line) || /^\s*\d+\.\s+/.test(line)) {
        var ordered = /^\s*\d+\.\s+/.test(line);
        var itemRe = ordered ? /^\s*\d+\.\s+(.*)$/ : /^\s*[-*+]\s+(.*)$/;
        var contRe = ordered ? /^\s*\d+\.\s+/ : /^\s*[-*+]\s+/;
        var items = [];
        while (i < lines.length && contRe.test(lines[i])) {
          items.push(lines[i].replace(itemRe, "$1"));
          i++;
        }
        var tag = ordered ? "ol" : "ul";
        out.push("<" + tag + ">" + items.map(function (it) {
          return "<li>" + inlineMd(escHtml(it)) + "</li>";
        }).join("") + "</" + tag + ">");
        continue;
      }

      // Paragraph: gather consecutive non-blank, non-block-start lines.
      var p = [line];
      i++;
      while (i < lines.length && !/^\s*$/.test(lines[i]) && !blockStart.test(lines[i])) {
        p.push(lines[i]);
        i++;
      }
      out.push("<p>" + inlineMd(escHtml(p.join("\n"))).replace(/\n/g, "<br>") + "</p>");
    }
    return out.join("\n");
  }

  // Modal ------------------------------------------------------------------

  var lastFocused = null;

  function openModal(title, bodyHtml) {
    var modal = el("modal");
    el("modal-title").textContent = title;
    el("modal-body").innerHTML = bodyHtml;
    lastFocused = document.activeElement;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    var closeBtn = modal.querySelector(".modal-close");
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    var modal = el("modal");
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  function initModal() {
    var modal = el("modal");
    modal.addEventListener("click", function (e) {
      if (e.target.hasAttribute("data-close")) closeModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !modal.hidden) closeModal();
    });
  }

  function openCharacterChanges(version, character) {
    openModal(character.name, '<p class="loading">Loading…</p>');
    var url = changesBase + "/" + encodeURIComponent(version) +
      "/characters/" + encodeURIComponent(character.file);
    fetch(url)
      .then(function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.text();
      })
      .then(function (md) {
        el("modal-body").innerHTML = markdownToHtml(md);
      })
      .catch(function (err) {
        el("modal-body").innerHTML =
          '<p class="error">Could not load changes for this character.</p>';
        console.warn("Failed to load", url, err);
      });
  }

  var changesIconBase = cfg.changesIconBase || "images/characters";

  function renderCharacterGrid(container, version, characters) {
    renderIconGrid(container, characters, changesIconBase, function (c) {
      openCharacterChanges(version, c);
    }, "No characters for this release.");
  }

  function loadChangesSection() {
    var listEl = el("characters-list");
    var select = el("release-select");

    fetch(changesBase + "/index.json")
      .then(function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.json();
      })
      .then(function (data) {
        var releases = (data && data.releases) || [];
        if (releases.length === 0) {
          select.innerHTML = "";
          select.disabled = true;
          listEl.innerHTML =
            '<p class="loading">No releases available yet. Add change files under ' +
            esc(changesBase) + "/&lt;release&gt;/characters/.</p>";
          return;
        }
        select.innerHTML = releases.map(function (rel) {
          return '<option value="' + esc(rel.version) + '">' + esc(rel.version) + "</option>";
        }).join("");
        function showSelected() {
          var rel = releases.filter(function (r) {
            return r.version === select.value;
          })[0] || releases[0];
          renderCharacterGrid(listEl, rel.version, rel.characters);
        }
        select.addEventListener("change", showSelected);
        showSelected(); // default = first (latest) release
      })
      .catch(function (err) {
        select.disabled = true;
        listEl.innerHTML =
          '<p class="loading">No change data found. Copy the character ' +
          ".md files into " + esc(changesBase) + "/&lt;release&gt;/characters/.</p>";
        console.warn("Failed to load changes index", err);
      });
  }

  // --- Quirks (per-release: clickable icon grid -> modal) -------------------

  var quirkIconBase = (cfg.quirkIconBase || "images/characters").replace(/\/+$/, "");

  function slugify(name) {
    return String(name).toLowerCase()
      .replace(/[()]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  // Shared renderer: a grid of clickable icon tiles. Each entry needs a `name`
  // and optionally an `icon` slug; a missing icon image falls back to a text
  // tile. `onClick` receives the entry. Used by both quirks and credits.
  function renderIconGrid(container, entries, iconBase, onClick, emptyMsg) {
    if (!entries || entries.length === 0) {
      container.className = "";
      container.innerHTML = '<p class="loading">' + esc(emptyMsg || "Nothing here yet.") + "</p>";
      return;
    }
    var base = String(iconBase).replace(/\/+$/, "");
    container.className = "icon-grid";
    container.innerHTML = "";
    sortedByName(entries).forEach(function (entry) {
      var tile = document.createElement("button");
      tile.type = "button";
      tile.className = "icon-card no-icon";

      var img = document.createElement("img");
      img.className = "icon-img";
      img.alt = "";
      img.loading = "lazy";
      // Show the icon if it exists; otherwise keep the text-only tile.
      img.addEventListener("load", function () { tile.classList.remove("no-icon"); });
      img.addEventListener("error", function () { img.remove(); });
      img.src = base + "/" + encodeURIComponent(entry.icon || slugify(entry.name)) + ".png";

      var label = document.createElement("span");
      label.className = "icon-label";
      label.textContent = entry.name;

      tile.appendChild(img);
      tile.appendChild(label);
      tile.addEventListener("click", function () { onClick(entry); });
      container.appendChild(tile);
    });
  }

  function openQuirkModal(character) {
    var items = (character.quirks || []).map(function (q) {
      return "<li>" + esc(q) + "</li>";
    }).join("");
    var body = items
      ? "<ul>" + items + "</ul>"
      : '<p class="loading">No quirks listed for this character.</p>';
    openModal(character.name, body);
  }

  function renderQuirks(container, characters) {
    renderIconGrid(container, characters, quirkIconBase, openQuirkModal,
      "No quirks for this release.");
  }

  function loadQuirksSection() {
    var listEl = el("quirks-list");
    var select = el("quirks-release-select");
    var url = cfg.quirksUrl || "data/quirks.json";

    fetch(url)
      .then(function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.json();
      })
      .then(function (data) {
        var releases = (data && data.releases) || [];
        if (releases.length === 0) {
          select.disabled = true;
          listEl.innerHTML = '<p class="loading">No quirks available yet.</p>';
          return;
        }
        select.innerHTML = releases.map(function (rel) {
          return '<option value="' + esc(rel.version) + '">' + esc(rel.version) + "</option>";
        }).join("");
        function showSelected() {
          var rel = releases.filter(function (r) {
            return r.version === select.value;
          })[0] || releases[0];
          renderQuirks(listEl, rel.characters);
        }
        select.addEventListener("change", showSelected);
        showSelected();
      })
      .catch(function (err) {
        select.disabled = true;
        listEl.innerHTML = '<p class="error">Could not load quirks.</p>';
        console.warn("Failed to load quirks from", url, err);
      });
  }

  // --- Credits (characters / stages / other: icon grids -> modal) -----------
  // Not release-based: one flat list per category.

  var creditsIconBases = cfg.creditsIconBase || {};

  // Which categories to render, their container id, and default icon folder.
  var CREDITS_GROUPS = [
    { key: "characters", el: "credits-characters", base: "images/characters" },
    { key: "stages", el: "credits-stages", base: "images/stages" },
    { key: "other", el: "credits-other", base: "images/other" }
  ];

  function openCreditModal(entry) {
    var items = (entry.credits || []).map(function (c) {
      return "<li>" + esc(c) + "</li>";
    }).join("");
    var body = items
      ? "<ul>" + items + "</ul>"
      : '<p class="loading">No credit details listed yet.</p>';
    openModal(entry.name, body);
  }

  function loadCreditsSection() {
    var url = cfg.creditsUrl || "data/credits.json";
    fetch(url)
      .then(function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.json();
      })
      .then(function (data) {
        CREDITS_GROUPS.forEach(function (g) {
          renderIconGrid(el(g.el), data[g.key], creditsIconBases[g.key] || g.base,
            openCreditModal, "Nothing here yet.");
        });
      })
      .catch(function (err) {
        CREDITS_GROUPS.forEach(function (g) {
          el(g.el).innerHTML = '<p class="loading">Nothing here yet.</p>';
        });
        console.warn("Failed to load credits from", url, err);
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
    initModal();
    loadChangesSection();
    loadQuirksSection();
    loadCreditsSection();
    loadTrailer();
    loadFaq();
    loadDownload();
    loadAbout();
  });
})();
