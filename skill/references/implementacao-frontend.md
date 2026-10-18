# GRIDCTRL — Frontend implementation

1. Inspect the project's existing framework, folders, routes, data models, auth, styles and tests before editing. Preserve business rules and public APIs.
2. Define semantic page sections with accessible headings and landmark navigation. The reference landing page ships as a self-contained HTML file; reuse its grid and tokens as the visual baseline.
3. Implement CSS Grid/Flexbox with reusable card primitives. Avoid fixed viewport widths, accidental overflow and decorative CSS that hides content on small screens.
4. Provide working actions: nav anchors, mobile menu, focus management, FAQ expand/collapse, dialog close, and valid download paths. Never claim newsletter functionality if there is no backend; label as demo.
5. Keep text selectable and accessible. Use inline SVG or icons that can be labeled/hidden appropriately; give meaningful image alt text.
6. Put colors, typography and dimensions behind tokens. For React/Next/Vue, derive components from sections; for static sites use progressive enhancement with vanilla JS.
7. Respect safe HTML handling, escaping for external data, and minimal dependencies. Avoid third-party trackers and external fonts unless approved.
8. Document delivered paths, implemented functions and limitations. Verify syntax and deployment compatibility before claiming production readiness.
