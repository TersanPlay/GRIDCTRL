# GRIDCTRL · Architecture and source-of-truth map

## Status
The repository has **two distinct entrypoints**:
- `skill/SKILL.md` — **normative instructions** consumed by compatible AI agents; it does not execute itself.
- `src/core/index.js` — **executable** cross-framework design token engine used by the CLI and React/Vue examples.

The **single canonical theme registry** is `skill/assets/variants.json`. It is not duplicated in React, Vue, CLI or the landing page's exported API. Build outputs from `npm run build` are derivative and should not be hand-edited. The existing `index.html` is a separate historical standalone demo with its own theme switcher; migration to the shared engine is a future compatibility task, not an excuse to break this page.

## Data flow
```text
skill/assets/variants.json  (CANONICAL THEME DATA)
  ├── src/core/index.js → validateRegistry(), cssVariables(), contrastRatio()
  │     ├── src/cli/index.js → gridctrl build/validate/themes/init
  │     ├── dist/gridctrl.css
  │     ├── dist/gridctrl.tokens.json (DTCG-style)
  │     ├── dist/_gridctrl.scss
  │     ├── src/react/index.js → GridctrlProvider/useGridctrl
  │     └── examples/vue → dynamic data-gridctrl-variant
  └── skill/SKILL.md → AI-agent behavioral instructions
```

## Hard boundaries
1. **No magic activation**: a compatible agent must discover/read `SKILL.md` or be given the file explicitly.
2. **No unsafe changes**: audit before modifying existing routes, auth, data, or business logic.
3. **No migration mandate**: React/shadcn integration is optional, and Vue can use core without React.
4. **No random reflow**: runtime theme selection affects tokens only. Semantic DOM order, focus order and layout ID stay fixed.
5. **No unstyled controls**: reuse accessible component libraries and style them; HTML semantics remain required.
6. **No false validation**: test output is the evidence; the Skill does not guarantee WCAG compliance for every consumer.
7. **No package publication claim**: the npm package is source-installable from GitHub until actually published to npm.

## Versioning contract
`variants.json.version` tracks registry content version. `package.json.version` tracks released CLI/core package. `composition.stableId` identifies the layout contract; changing it is a deliberate breaking design decision. Any variant changes require updating tests and CI evidence.

## Extending the system
Add/edit a preset in `skill/assets/variants.json` according to `skill/assets/variants.schema.json`, run `npm run check && npm test && npm run build`, then test the React/Vue showcases. The CLI builds deterministic outputs; add new functional tokens to both generated CSS and validation rules when necessary. Keep legacy CSS files clearly marked as compatibility assets, not a second registry.
