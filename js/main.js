/* =========================================================
   Suresh Babu Gopalkrishna — Portfolio
   Renders all sections from js/profile-data.js and
   js/certs-data.js, and drives the palette / view controls.
   ========================================================= */

(function () {
  "use strict";

  /* ---------------------------------------------------------
     1. COLOUR ENGINE
     Turns a flat list of { name, hex } swatches into theme
     roles (background / surface / accent) and always resolves
     body text to pure black or white, whichever contrasts
     better against that specific background (WCAG relative
     luminance).
  --------------------------------------------------------- */

  function hexToRgb(hex) {
    const h = hex.replace("#", "");
    const full = h.length === 3 ? h.split("").map(c => c + c).join("") : h;
    const num = parseInt(full, 16);
    return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
  }

  function relativeLuminance(hex) {
    const { r, g, b } = hexToRgb(hex);
    const chan = [r, g, b].map(c => {
      const s = c / 255;
      return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * chan[0] + 0.7152 * chan[1] + 0.0722 * chan[2];
  }

  function contrastRatio(hexA, hexB) {
    const la = relativeLuminance(hexA);
    const lb = relativeLuminance(hexB);
    const [light, dark] = la > lb ? [la, lb] : [lb, la];
    return (light + 0.05) / (dark + 0.05);
  }

  // Always returns pure black or pure white — whichever reads better.
  function bestTextColor(bgHex) {
    const white = contrastRatio(bgHex, "#ffffff");
    const black = contrastRatio(bgHex, "#111111");
    return white >= black ? "#ffffff" : "#111111";
  }

  function hexToSaturation(hex) {
    const { r, g, b } = hexToRgb(hex);
    const [rn, gn, bn] = [r, g, b].map(c => c / 255);
    const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn);
    const l = (max + min) / 2;
    if (max === min) return 0;
    const d = max - min;
    return l > 0.5 ? d / (2 - max - min) : d / (max + min);
  }

  function assignPaletteRoles(swatches) {
    const withMeta = swatches.map(s => ({
      ...s,
      lum: relativeLuminance(s.hex),
      sat: hexToSaturation(s.hex)
    }));
    const byLum = [...withMeta].sort((a, b) => b.lum - a.lum);
    const bySat = [...withMeta].sort((a, b) => b.sat - a.sat);

    const bg = byLum[0];
    const surface = byLum[1] || byLum[0];
    const line = byLum[byLum.length - 2] || surface;

    let accent = bySat[0];
    if (accent.hex.toLowerCase() === bg.hex.toLowerCase() && bySat[1]) accent = bySat[1];
    // Prefer an accent with some real contrast against the background.
    if (contrastRatio(accent.hex, bg.hex) < 1.6) {
      const alt = withMeta.find(c => contrastRatio(c.hex, bg.hex) >= 1.6);
      if (alt) accent = alt;
    }

    return { bg, surface, line, accent };
  }

  function applyPalette(key) {
    const palette = PALETTES[key];
    if (!palette) return;
    const roles = assignPaletteRoles(palette.swatches);
    const root = document.documentElement.style;

    root.setProperty("--bg", roles.bg.hex);
    root.setProperty("--on-bg", bestTextColor(roles.bg.hex));
    root.setProperty("--surface", roles.surface.hex);
    root.setProperty("--on-surface", bestTextColor(roles.surface.hex));
    root.setProperty("--accent", roles.accent.hex);
    root.setProperty("--on-accent", bestTextColor(roles.accent.hex));
    root.setProperty("--line", roles.line.hex);

    document.querySelectorAll(".palette-option").forEach(btn => {
      btn.setAttribute("aria-checked", String(btn.dataset.key === key));
    });

    const preview = document.getElementById("paletteSwatchPreview");
    if (preview) {
      preview.innerHTML = palette.swatches
        .slice(0, 3)
        .map(s => `<span style="background:${s.hex}"></span>`)
        .join("");
    }

    localStorage.setItem("portfolio-palette", key);
  }

  function buildPaletteMenu() {
    const menu = document.getElementById("paletteMenu");
    menu.innerHTML = Object.entries(PALETTES).map(([key, p]) => `
      <button type="button" class="palette-option" data-key="${key}" role="menuitemradio" aria-checked="false">
        <span class="dots">${p.swatches.slice(0, 5).map(s => `<span style="background:${s.hex}"></span>`).join("")}</span>
        ${p.label}
      </button>
    `).join("");

    menu.querySelectorAll(".palette-option").forEach(btn => {
      btn.addEventListener("click", () => {
        applyPalette(btn.dataset.key);
        menu.classList.remove("open");
        document.getElementById("paletteToggle").setAttribute("aria-expanded", "false");
      });
    });
  }

  function initPalettePicker() {
    buildPaletteMenu();
    const saved = localStorage.getItem("portfolio-palette");
    applyPalette(saved && PALETTES[saved] ? saved : DEFAULT_PALETTE_KEY);

    const toggle = document.getElementById("paletteToggle");
    const menu = document.getElementById("paletteMenu");
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    document.addEventListener("click", (e) => {
      if (!menu.contains(e.target) && e.target !== toggle) {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------------------------------------------------------
     2. VIEW TOGGLE (Research / Industry)
  --------------------------------------------------------- */

  const TAGLINES = {
    research: "Dr.-Ing. researcher in thermal simulation and inverse heat conduction — now extending finite-element and experimental work with physics-informed neural networks.",
    industry: "Simulation engineer applying FEM, CFD and scientific machine learning to real-world thermal systems — from R&D prototypes to production-ready workflows."
  };

  function applyView(view) {
    document.body.classList.remove("view-research", "view-industry");
    document.body.classList.add(`view-${view}`);
    document.querySelectorAll(".view-toggle button").forEach(btn => {
      btn.setAttribute("aria-pressed", String(btn.dataset.view === view));
    });
    document.getElementById("heroTagline").textContent = TAGLINES[view];
    const researchDetails = document.getElementById("researchDetails");
    if (researchDetails) researchDetails.open = view === "research";
    localStorage.setItem("portfolio-view", view);
  }

  function initViewToggle() {
    document.querySelectorAll(".view-toggle button").forEach(btn => {
      btn.addEventListener("click", () => applyView(btn.dataset.view));
    });
    const saved = localStorage.getItem("portfolio-view");
    applyView(saved === "industry" ? "industry" : "research");
  }

  /* ---------------------------------------------------------
     3. RENDER: hero, about, footer
  --------------------------------------------------------- */

  function renderIdentity() {
    document.title = `${PROFILE.name} — Simulation & ML Engineer`;
    document.getElementById("heroName").textContent = `${PROFILE.credentials} ${PROFILE.name}`;
    document.getElementById("statusText").textContent = PROFILE.status;
    document.getElementById("aboutText").textContent = PROFILE.about;
    document.getElementById("footerName").textContent = `${PROFILE.credentials} ${PROFILE.name}`;
    document.getElementById("githubUserLabel").textContent = `github.com/${PROFILE.github}`;

    const contactRow = document.getElementById("contactRow");
    const items = [
      { label: `✉ ${PROFILE.email}`, url: `mailto:${PROFILE.email}` },
      // { label: `☎ ${PROFILE.phone}`, url: `tel:${PROFILE.phone.replace(/\s+/g, "")}` },
      { label: `📍 ${PROFILE.location}`, url: null },
      ...PROFILE.links.map(l => ({ label: l.label, url: l.url }))
    ];
    contactRow.innerHTML = items.map(item => {
      const tag = item.url ? "a" : "span";
      const href = item.url ? `href="${item.url}" target="_blank" rel="noopener"` : "";
      return `<${tag} class="chip" ${href}>${item.label}</${tag}>`;
    }).join("");
  }

  /* ---------------------------------------------------------
     4. RENDER: experience timeline
  --------------------------------------------------------- */

  function formatMonth(ym) {
    if (!ym) return "Present";
    const [y, m] = ym.split("-");
    const names = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return `${names[parseInt(m, 10) - 1]} ${y}`;
  }

  function renderExperience() {
    const list = document.getElementById("timelineList");
    list.innerHTML = PROFILE.experience.map(item => `
      <li class="timeline-item" data-tags="${item.tags.join(" ")}">
        <div class="timeline-date">${formatMonth(item.start)} – ${formatMonth(item.end)}</div>
        <div>
          <h3 class="timeline-role">${item.role}</h3>
          <p class="timeline-org">${item.org} · ${item.location}</p>
          <div class="timeline-tags">
            ${item.tags.map(t => `<span class="tag-pill">${t}</span>`).join("")}
          </div>
          <ul>${item.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
        </div>
      </li>
    `).join("");
  }

  /* ---------------------------------------------------------
     5. RENDER: education
  --------------------------------------------------------- */

  function renderEducation() {
    const grid = document.getElementById("educationGrid");
    grid.innerHTML = PROFILE.education.map(ed => `
      <div class="card edu-card">
        <div class="degree-date">${formatMonth(ed.start)} – ${formatMonth(ed.end)}</div>
        <h3>${ed.degree}</h3>
        <p class="org">${ed.org} · ${ed.location}</p>
        <span class="grade">${ed.grade}</span>
        <p class="detail">${ed.detail}</p>
      </div>
    `).join("");
  }

  /* ---------------------------------------------------------
     6. RENDER: research (publications, supervision, teaching, grants)
  --------------------------------------------------------- */

  function renderResearch() {
    document.getElementById("researchSummary").textContent = PROFILE.research.summary;
    const groups = document.getElementById("researchGroups");

    const section = (title, items, ordered) => {
      if (!items || !items.length) return "";
      const tag = ordered ? "ol" : "ul";
      return `
        <div class="research-group">
          <h4>${title}</h4>
          <${tag}>${items.map(i => `<li>${i}</li>`).join("")}</${tag}>
        </div>`;
    };

    groups.innerHTML = [
      section("Journal Publications", PROFILE.research.journalPublications, true),
      section("Conference Papers & Presentations", PROFILE.research.conferencePapers, true),
      section("Master's Thesis Supervision", PROFILE.research.supervision, false),
      section("Teaching", PROFILE.research.teaching, false),
      section("Research Projects & Grants", PROFILE.research.grants, false),
      section("Memberships, Reviewing & Awards", PROFILE.research.membershipsAwards, false)
    ].join("");
  }

  /* ---------------------------------------------------------
     7. RENDER: skills
  --------------------------------------------------------- */

  function renderSkills() {
    const grid = document.getElementById("skillsGrid");
    grid.innerHTML = Object.entries(PROFILE.skills).map(([group, items]) => `
      <div class="skill-group">
        <h3>${group}</h3>
        <div class="skill-chips">
          ${items.map(i => `<span class="skill-chip">${i}</span>`).join("")}
        </div>
      </div>
    `).join("");
  }

  /* ---------------------------------------------------------
     8. RENDER: GitHub projects (live fetch)
  --------------------------------------------------------- */

  async function renderProjects() {
    const grid = document.getElementById("projectsGrid");
    const status = document.getElementById("projectsStatus");
    const username = PROFILE.github;

    try {
      const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
      if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);
      let repos = await res.json();

      // Prefer original (non-fork) repos, but fall back to everything if that's all there is.
      const original = repos.filter(r => !r.fork);
      repos = (original.length ? original : repos)
        .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
        .slice(0, 9);

      if (!repos.length) {
        status.innerHTML = `No public repositories found yet for <a href="https://github.com/${username}" target="_blank" rel="noopener">github.com/${username}</a>.`;
        return;
      }

      grid.innerHTML = repos.map(r => `
        <a class="repo-card" href="${r.html_url}" target="_blank" rel="noopener">
          <div class="repo-name">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>
            ${r.name}
          </div>
          <p class="repo-desc">${r.description ? r.description : "No description provided."}</p>
          <div class="repo-meta">
            ${r.language ? `<span><span class="lang-dot"></span> ${r.language}</span>` : ""}
            <span>★ ${r.stargazers_count}</span>
            <span>Updated ${new Date(r.pushed_at).toLocaleDateString(undefined, { year: "numeric", month: "short" })}</span>
          </div>
        </a>
      `).join("");
      status.textContent = "";
    } catch (err) {
      grid.innerHTML = "";
      status.innerHTML = `Couldn't load repositories right now (GitHub API may be rate-limited). View them directly on <a href="https://github.com/${username}" target="_blank" rel="noopener">github.com/${username}</a>.`;
      console.warn("GitHub fetch failed:", err);
    }
  }

  /* ---------------------------------------------------------
     9. RENDER: certifications (image + PDF-first-page via PDF.js)
  --------------------------------------------------------- */

  if (window.pdfjsLib) {
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
  }

  function isPdf(path) {
    return /\.pdf($|\?)/i.test(path);
  }

  async function renderPdfThumb(canvas, url) {
    const loadingTask = pdfjsLib.getDocument(url);
    const pdf = await loadingTask.promise;
    const page = await pdf.getPage(1);
    const baseViewport = page.getViewport({ scale: 1 });

    const targetWidth = canvas.parentElement.clientWidth * 2 || 480; // 2x for sharpness
    const scale = targetWidth / baseViewport.width;
    const viewport = page.getViewport({ scale });

    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const ctx = canvas.getContext("2d");
    await page.render({ canvasContext: ctx, viewport }).promise;
  }

  function certCardMarkup(cert) {
    const dateLabel = new Date(cert.date).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
    const verify = cert.verifyUrl
      ? `<a class="cert-verify" href="${cert.verifyUrl}" target="_blank" rel="noopener">Verify ↗</a>`
      : `<span></span>`;

    return `
      <div class="cert-card" data-category="${cert.category}">
        <a class="cert-thumb" href="${cert.file}" target="_blank" rel="noopener" aria-label="Open certificate: ${cert.title}">
          ${isPdf(cert.file)
            ? `<span class="pdf-flag">PDF</span><span class="thumb-loading">Rendering…</span><canvas class="cert-canvas"></canvas>`
            : `<img src="${cert.file}" alt="${cert.title} certificate" loading="lazy">`
          }
        </a>
        <div class="cert-body">
          <span class="cert-category">${cert.category}</span>
          <p class="cert-title">${cert.title}</p>
          <p class="cert-issuer">${cert.issuer}</p>
          <div class="cert-footer">
            <span class="cert-date">${dateLabel}</span>
            ${verify}
          </div>
        </div>
      </div>
    `;
  }

  function renderCertifications(activeCategory) {
    const grid = document.getElementById("certGrid");
    const certs = [...CERTIFICATIONS]
      .filter(c => activeCategory === "All" || c.category === activeCategory)
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    grid.innerHTML = certs.map(certCardMarkup).join("");

    // Render PDF thumbnails after markup is in the DOM.
    grid.querySelectorAll(".cert-thumb").forEach((thumbEl, i) => {
      const cert = certs[i];
      if (!cert || !isPdf(cert.file)) return;
      const canvas = thumbEl.querySelector(".cert-canvas");
      const loadingLabel = thumbEl.querySelector(".thumb-loading");
      renderPdfThumb(canvas, cert.file)
        .then(() => { if (loadingLabel) loadingLabel.remove(); })
        .catch(err => {
          if (loadingLabel) loadingLabel.textContent = "Preview unavailable — click to open";
          console.warn("PDF thumbnail failed for", cert.file, err);
        });
    });
  }

  function initCertFilters() {
    const categories = ["All", ...new Set(CERTIFICATIONS.map(c => c.category))];
    const filters = document.getElementById("certFilters");
    filters.innerHTML = categories.map((cat, i) => `
      <button type="button" class="cert-filter" data-cat="${cat}" aria-pressed="${i === 0}">${cat}</button>
    `).join("");

    filters.querySelectorAll(".cert-filter").forEach(btn => {
      btn.addEventListener("click", () => {
        filters.querySelectorAll(".cert-filter").forEach(b => b.setAttribute("aria-pressed", "false"));
        btn.setAttribute("aria-pressed", "true");
        renderCertifications(btn.dataset.cat);
      });
    });

    renderCertifications("All");
  }

  /* ---------------------------------------------------------
     INIT
  --------------------------------------------------------- */

  document.addEventListener("DOMContentLoaded", () => {
    initPalettePicker();
    initViewToggle();
    renderIdentity();
    renderExperience();
    renderEducation();
    renderResearch();
    renderSkills();
    renderProjects();
    initCertFilters();
  });
})();
