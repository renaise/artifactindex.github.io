# AGENTS.md

## Cursor Cloud specific instructions

**The Artifact Index** is a zero-dependency static HTML/CSS/JS website. There is no package manager, no build system, no linter, and no test framework.

### Running the dev server

```
python3 -m http.server 8000
```

Serve from the repository root (`/workspace`). The site is then accessible at `http://localhost:8000/`.

### Project structure

- `index.html` — main page (The Artifact Index)
- `app.js` — client-side vanilla JS (IIFE); contains hardcoded artifact data and all UI logic (search, filter, view toggle, keyboard navigation)
- `styles.css` — full stylesheet (dark theme, responsive)
- `about.html`, `contact.html` — static pages (currently empty)
- `fonts/` — placeholder for Helvetica Now Display `.woff2`/`.woff` files (site falls back to system sans-serif)

### Notes

- No `npm`, `pip`, or other dependency install step is required.
- No lint, test, or build commands exist in this repository.
- The Fragment Mono font is loaded from `cdn.jsdelivr.net`; the site works without network access (falls back to system monospace).
