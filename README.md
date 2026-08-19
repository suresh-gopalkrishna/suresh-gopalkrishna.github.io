# Suresh Babu Gopalkrishna — Portfolio

A static, single-page portfolio covering both research and industry work. No build
step, no framework — plain HTML/CSS/JS, ready to serve from GitHub Pages.

## Deploy on GitHub Pages

1. Push the contents of this folder to the root of your `<username>.github.io`
   repository (or to any repo, then enable Pages on it in **Settings → Pages**).
2. Wait a minute for GitHub to build it, then visit `https://<username>.github.io/`.

## Important: fix the GitHub username

Open `js/profile-data.js` and check the `github` field:

```js
github: "suresh-gopalkrishna",
```

The **Projects** section fetches your repositories live from the GitHub API using
this username. Make sure it matches your actual GitHub handle — the link you
pasted in the request pointed to two different usernames
(`suresh-gopalkrishna` vs `charithracrs`), so double-check which one is really
yours before publishing.

## Adding a new certificate (do this whenever you finish a new course)

1. Save the certificate file (PNG, JPG or PDF) into `assets/`.
2. Open `js/certs-data.js` and copy one block inside the `CERTIFICATIONS` array, e.g.:

   ```js
   {
     title: "Course Name",
     issuer: "Issuing Organisation",
     date: "2026-09-01",
     category: "AI & Machine Learning", // or "Simulation & CFD" / "Programming & Data Science" / "Other"
     file: "assets/your-file.pdf",
     verifyUrl: "https://…"            // leave as "" if there isn't one
   }
   ```
3. Save. The gallery re-sorts by date automatically — no other file needs touching.
   PDFs render their first page as a thumbnail (via PDF.js) and PNG/JPG show directly;
   every card links out to the original file.

## Updating CV content

- `js/profile-data.js` — name, contact links, status line, experience, education,
  skills, and the Research section (publications, supervision, teaching, grants).
- `js/palettes-data.js` — the 5 selectable colour themes. Add a new one by copying
  a block; roles (background/surface/accent) and black-vs-white text are worked
  out automatically at runtime for contrast, so you only ever need to supply hex
  swatches.

## Notes

- The Research/Industry toggle in the nav re-emphasises the same experience list
  (dims roles that don't match) and expands/collapses the Publications block —
  it doesn't duplicate content, so there's only ever one CV to maintain.
- Selected theme and view persist per-browser via `localStorage`.
- Everything runs client-side; opening `index.html` directly (double-click) works
  for layout/content checks, but GitHub's repo list and PDF thumbnails need it to
  be served over http(s) (GitHub Pages, or `python3 -m http.server` locally) —
  browsers block some of those requests from a raw `file://` page.
