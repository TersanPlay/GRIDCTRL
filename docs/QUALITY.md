# GRIDCTRL · Executable quality gates

The automated checks in `.github/workflows/ci.yml` currently cover:
- Registry validity, contrast and intentional deterministic presets.
- Unit tests for the CLI (safe init, build, variants and failure modes).
- React + Radix composition and Vue build compilation.
- Real browser smoke tests for the landing's theme controls, dialog, and text/background contrast.
- Axe-based WCAG 2 A/AA scan with **critical and serious** violations failing the test (other issues must still be reviewed).
- Separate legacy workflows for high-definition SVG assets and README PNG rendering.

**Not guaranteed**: complete keyboard navigation of every flow, every WCAG 2.2 AA success criterion, production performance budgets or automatic prevention of all business-logic regressions. Agents must inspect real projects and report what was tested, not just what the Skill requests.

Recommended author checklist:
1. Audit stack, dependencies, routes, business rules and existing components.
2. Resolve a stable preset and layout ID; record reference and acceptance criteria.
3. Build from semantic design tokens; prefer shadcn/ui or an existing accessible component library.
4. Compare visual layout at 320/390/768/1440 px and user-visible states.
5. Check reduced-motion, focus, keyboard operation, colors and contrast in both light/dark.
6. Run `npm run check`, `npm test`, `npm run build`, React/Vue builds and `npm run test:e2e` (after installing Playwright Chromium).
7. Write a report distinguishing verified, inspected and unverified.

No test screenshot should be described as a faithful comparison with the source artwork without an actual reviewer baseline.
