# The Artifact Index

The cultural ecology of [Artifice World](https://artificenyc.org) — a relational intelligence layer for cultural production.

**Live:** [renaise.github.io/artifactindex.github.io](https://renaise.github.io/artifactindex.github.io/)

---

### Naming Verdict: Artifice ES

**Artifice ES** is vastly superior. "The Eco System" feels generic and slightly crunchy, whereas "Artifice ES" (Ecosystem Schema) sounds like a proprietary, high-end cultural infrastructure. It nods to the legacy of an "OS" while confidently signaling a new paradigm.

Here is the highly effective, prototype-ready PRD optimized for a frontend-first build using your existing vanilla HTML/CSS/JS stack in the `artifactindex.github.io` repository.

---

# PRD: Artifice ES (MVP Prototype)

## 1. Product Vision

Artifice ES is a relational intelligence layer for cultural production. The MVP focuses exclusively on **The Open Call Curation** use case, transforming the traditionally extractive, linear application process into a dynamic data-ingestion engine. It replaces static forms with a beautiful, spatial UI that instantly maps applicants into the four core books of the ecosystem.

## 2. The Core Use Case: Open Call Curation

Instead of an institution using Google Forms to collect PDFs, they deploy the Artifice ES Intake Protocol.

* **The Flow:** An applicant submits their work for a Studio Artifice residency or exhibition.
* **The Magic:** The UI forces the applicant to categorize their own work (WHITEBOX process vs. BLACKBOX experience, spatial requirements, medium).
* **The Output:** Upon submission, the data does not go to a spreadsheet; it instantly populates the four interconnected databases as relational nodes.

## 3. Architecture & Shared Schemas (The 4 Books)

For the prototype, these four books share a unified underlying JSON schema so they can be easily linked and visualized in the frontend.

**1. RADAR (The Intake Valve)**

* **Role:** The staging ground for the Open Call.
* **Schema primitives:** `signal_id`, `applicant_name`, `submission_date`, `status` (Watching, Contacted, Converted, Passed).
* **Action:** When an applicant submits, they land here. If approved by curation, their data automatically bifurcates into Nodes and Artifacts.

**2. NODES (The Creators)**

* **Role:** The human layer. The artists, technologists, and designers applying.
* **Schema primitives:** `node_id`, `capabilities` (tags), `aesthetic_affinities`, `status` (Available, Resting).
* **Action:** Extracted from the Radar submission.

**3. ATLAS (The Venues/Context)**

* **Role:** The spatial constraints of the Open Call.
* **Schema primitives:** `atlas_id`, `spatial_type` (Whitebox gallery, digital, public realm), `technical_specs`.
* **Action:** Applicants select which Atlas environment their proposed work requires, instantly creating a relational link between the Node, the Artifact, and the Space.

**4. ARTIFACTS (The Work)**

* **Role:** The core atomic unit. The proposed installation, protocol, or media.
* **Schema primitives:** `artifact_id`, `type`, `mode` (WHITEBOX/BLACKBOX), `creator_node_id`, `target_atlas_id`.
* **Action:** The submitted portfolio piece becomes an Artifact, permanently linked to the Node that made it and the Atlas space it targets.

## 4. UI/UX Principles: Beautiful & Navigable

Since the current repo (`artifactindex.github.io`) is running vanilla HTML, CSS, and JS, the prototype should avoid clunky backend frameworks and focus entirely on a striking, fluid frontend experience.

* **Atmospheric & Subdued:** Lean into a dark, eco-futurist aesthetic. The UI should feel immersive, utilizing deep contrasts, subtle gradients, and clean typography rather than bright, noisy SaaS dashboards.
* **Spatial Navigation over Lists:** Do not build a table-view CRM. Use an HTML5 canvas or D3.js (which can be easily integrated into `app.js`) to visualize the database as a constellation. Nodes are connected to Artifacts via elegant, animated lines.
* **The "Drawer" Paradigm:** Keep the user in the main spatial view. When they click a Node or an Artifact, a beautifully styled side-drawer slides in with the detailed schema data, rather than navigating away to a new page.
* **Frictionless Intake UI:** The Open Call application form should feel like an editorial experience. One question per screen, large typography, and smooth CSS transitions.

## 5. Execution Plan for the Prototype

**Phase 1: The Dummy Data (Days 1-2)**

* Create a single `data.json` file in your repository containing 10 fabricated Open Call submissions mapped perfectly to the Radar, Nodes, Atlas, and Artifacts schema.

**Phase 2: The Constellation View (Days 3-5)**

* Use `app.js` to parse the JSON and render the relational graph. Focus purely on making the connections between Nodes and Artifacts look beautiful and responsive.

**Phase 3: The Intake Form (Days 6-7)**

* Build the frontend Open Call form. For the prototype, it doesn't need a real backend—just have the "Submit" button dynamically push a new JSON object into the graph so users can watch their submission instantly populate the Artifice ES visualizer in real-time.
