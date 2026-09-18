/* ============================================
   Suresh Gopalkrishna — Portfolio
   Renders content from PROFILE (js/profile-data.js)
   and, if present, CERTS (js/certs-data.js)
   ============================================ */

(function () {
  const P = window.PROFILE;
  if (!P) return;

  const monthName = (ym) => {
    if (!ym) return "Present";
    const [y, m] = ym.split("-");
    const d = new Date(Number(y), Number(m) - 1);
    return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  const navBrand = document.getElementById("navBrand");
  if (navBrand) navBrand.textContent = P.name;

  document.getElementById("heroEyebrow").textContent = P.location || "";
  document.getElementById("heroName").textContent = `${P.credentials || ""} ${P.name}`.trim();
  document.getElementById("heroTagline").textContent = P.tagline || "";
  document.getElementById("statusText").textContent = P.status || "";

  const contactRow = document.getElementById("contactRow");
  if (P.email) {
    const a = document.createElement("a");
    a.href = `mailto:${P.email}`;
    a.textContent = "Email";
    contactRow.appendChild(a);
  }
  (P.links || []).forEach((link) => {
    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.label;
    a.target = "_blank";
    a.rel = "noopener";
    contactRow.appendChild(a);
  });

  document.getElementById("aboutText").textContent = P.about || "";

  const timelineList = document.getElementById("timelineList");
  (P.experience || []).forEach((job) => {
    const li = document.createElement("li");
    li.className = "timeline-item";
    li.innerHTML = `
      <p class="timeline-dates">${monthName(job.start)} — ${monthName(job.end)}</p>
      <p class="timeline-role">${job.role}</p>
      <p class="timeline-org">${job.org}</p>
      <p class="timeline-loc">${job.location || ""}</p>
      <ul>${(job.bullets || []).map((b) => `<li>${b}</li>`).join("")}</ul>
    `;
    timelineList.appendChild(li);
  });

  const eduGrid = document.getElementById("educationGrid");
  (P.education || []).forEach((edu) => {
    const div = document.createElement("div");
    div.className = "edu-card";
    div.innerHTML = `
      <p class="edu-dates">${monthName(edu.start)} — ${monthName(edu.end)}</p>
      <p class="edu-degree">${edu.degree}</p>
      <p class="edu-org">${edu.org}</p>
      <p class="edu-detail">${edu.detail || ""}</p>
    `;
    eduGrid.appendChild(div);
  });

  if (P.research) {
    document.getElementById("researchSummary").textContent = P.research.summary || "";
    const groups = document.getElementById("researchGroups");
    const groupDefs = [
      ["journalPublications", "Journal Publications"],
      ["conferencePapers", "Conference Papers & Presentations"],
      ["supervision", "Thesis Supervision"],
      ["teaching", "Teaching"],
      ["grants", "Grants"],
      ["membershipsAwards", "Memberships & Awards"],
    ];
    groupDefs.forEach(([key, label]) => {
      const items = P.research[key];
      if (!items || !items.length) return;
      const details = document.createElement("details");
      details.className = "research-group";
      details.innerHTML = `<summary>${label} (${items.length})</summary>
        <ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
      groups.appendChild(details);
    });
  }

  const skillsGrid = document.getElementById("skillsGrid");
  Object.entries(P.skills || {}).forEach(([category, items]) => {
    const card = document.createElement("div");
    card.className = "skill-card";
    card.innerHTML = `<h3>${category}</h3>
      <div class="chip-row">${items.map((i) => `<span class="chip">${i}</span>`).join("")}</div>`;
    skillsGrid.appendChild(card);
  });

  const githubUserLabel = document.getElementById("githubUserLabel");
  const projectsGrid = document.getElementById("projectsGrid");
  const projectsStatus = document.getElementById("projectsStatus");
  const EXCLUDED_REPOS = ["github-slideshow", P.github ? P.github.toLowerCase() : ""];

  if (P.github) {
    githubUserLabel.textContent = `@${P.github}`;
    projectsStatus.textContent = "Loading repositories…";
    fetch(`https://api.github.com/users/${P.github}/repos?per_page=100&sort=updated`)
      .then((r) => {
        if (!r.ok) throw new Error("GitHub API error");
        return r.json();
      })
      .then((repos) => {
        const filtered = repos
          .filter((r) => !r.fork && !r.archived)
          .filter((r) => !EXCLUDED_REPOS.includes(r.name.toLowerCase()))
          .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
          .slice(0, 6);

        if (!filtered.length) {
          projectsStatus.textContent = "No public repositories to display yet.";
          return;
        }
        projectsStatus.textContent = "";
        filtered.forEach((repo) => {
          const a = document.createElement("a");
          a.className = "project-card";
          a.href = repo.html_url;
          a.target = "_blank";
          a.rel = "noopener";
          a.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description || "No description provided."}</p>
            <div class="project-meta">
              <span>${repo.language || "—"}</span>
              <span>★ ${repo.stargazers_count}</span>
            </div>
          `;
          projectsGrid.appendChild(a);
        });
      })
      .catch(() => {
        projectsStatus.textContent = "Unable to load repositories right now.";
      });
  }

  const certsSection = document.getElementById("certifications");
  const CERTS = window.CERTS;
  if (Array.isArray(CERTS) && CERTS.length) {
    const certFilters = document.getElementById("certFilters");
    const certGrid = document.getElementById("certGrid");
    const categories = ["All", ...new Set(CERTS.map((c) => c.category).filter(Boolean))];

    const render = (filter) => {
      certGrid.innerHTML = "";
      CERTS.filter((c) => filter === "All" || c.category === filter).forEach((c) => {
        const a = document.createElement("a");
        a.className = "cert-card";
        a.href = c.url || "#";
        a.target = "_blank";
        a.rel = "noopener";
        a.innerHTML = `<h4>${c.title}</h4><p>${c.issuer || ""}${c.date ? " · " + c.date : ""}</p>`;
        certGrid.appendChild(a);
      });
    };

    categories.forEach((cat) => {
      const btn = document.createElement("button");
      btn.textContent = cat;
      btn.className = cat === "All" ? "active" : "";
      btn.addEventListener("click", () => {
        certFilters.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        render(cat);
      });
      certFilters.appendChild(btn);
    });
    render("All");
  } else if (certsSection) {
    certsSection.style.display = "none";
  }

  document.getElementById("footerName").textContent = `${P.credentials || ""} ${P.name}`.trim();
})();
