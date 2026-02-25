## Cursor Cloud specific instructions

This is a static HTML/CSS/JS website ("The Artifact Index") with zero build tools, no package manager, and no external dependencies. The codebase consists of three files at the repo root: `index.html`, `styles.css`, and `app.js`.

### Running the development server

Serve the project root with any static HTTP server:

```
python3 -m http.server 8080
```

Then open `http://localhost:8080/` in a browser.

### Lint / Test / Build

- **No linter, test suite, or build step is configured.** There is no `package.json`, `Makefile`, or CI config.
- HTML/CSS/JS validation can be done manually or via external tools (e.g. `npx html-validate index.html`), but nothing is preconfigured.

### Notes

- The `fonts/` directory is present but contains only a placeholder `README.txt`; Helvetica Now Display `.woff2` files are referenced in `styles.css` but not committed. The site falls back gracefully to system fonts.
- Fragment Mono is loaded from a CDN (`cdn.jsdelivr.net`); the site works offline but that font will be missing.
- `about.html` and `contact.html` exist as empty files; they are linked from the header but have no content.
