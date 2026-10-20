# GRIDCTRL · Tokens and deterministic palettes

The canonical source is [variants.json](../skill/assets/variants.json). The core uses native JS (Node 22+/modern bundlers) and no runtime styling engine.

## Commands
```bash
npm install
npm run check
npm run test
npm run build
node src/cli/index.js themes
node src/cli/index.js init --target ./sandbox --variant lilac-lab
node src/cli/index.js validate --config ./sandbox/gridctrl.config.json --json
```

## Generated assets
- `dist/gridctrl.css`: `:root` plus selectors `[data-gridctrl-variant="…"]`.
- `dist/gridctrl.tokens.json`: DTCG-style `$type/$value` object; can be processed by downstream token tooling (not a Style Dictionary package plug-in).
- `dist/_gridctrl.scss`: default variant variables for Sass users; live switching still requires CSS custom properties.
- `dist/gridctrl.variants.json`: copy of the canonical registry for tooling.

## Example without a framework
```html
<link rel="stylesheet" href="./dist/gridctrl.css">
<main class="gc-theme" data-gridctrl-variant="mint-lab">
  <article class="gc-card">
    <p class="gc-description">Accessible semantic copy.</p>
    <button class="gc-button">Primary action</button>
  </article>
</main>
```

CSS gradient is present only on the `gc-theme` shell. The two-tone neutral blending in Mint and Lilac does not turn backgrounds into the button accent.

## Color quality gate
`validateRegistry` checks every palette against WCAG relative contrast for normal text, secondary text, CTAs, focus and status text. 4.5:1 for text, 3:1 for focus markers. It does **not** replace a browser audit of actual combinations and states.

## Stability
`resolveVariant` returns a copy. Two calls given the same ID always produce equivalent values. Applying `data-gridctrl-variant` only changes CSS variables and does not change DOM order, data binding, routing or component geometry.
