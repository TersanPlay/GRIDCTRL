/** Single source of truth: skill/assets/variants.json. No randomness or runtime layout mutations. */
import registry from "../../skill/assets/variants.json" with { type: "json" };
import { contrastRatio, passesContrast, normalizeHex } from "./colors.js";
export { contrastRatio, passesContrast, normalizeHex };
export const REGISTRY_VERSION = registry.version;
export const DEFAULT_VARIANT = registry.defaultVariant;
export const LAYOUT_ID = registry.composition.stableId;
export function listVariants() {
  return Object.entries(registry.variants).map(([id, config]) => ({ id, label: config.label }));
}
export function getRegistry() { return structuredClone(registry); }
export function resolveVariant(id = DEFAULT_VARIANT) {
  const preset = registry.variants[id];
  if (!preset) throw new RangeError(`Unknown GRIDCTRL variant "${id}". Available: ${Object.keys(registry.variants).join(", ")}`);
  return structuredClone({ id, version: registry.version, layoutId: LAYOUT_ID, ...preset });
}
export function cssVariables(id = DEFAULT_VARIANT) {
  const { art, semantic } = resolveVariant(id);
  const fields = {
    canvas:art.canvas, surface:art.surface, ink:art.ink, line:art.divider,
    accent:art.accent, ornament:art.ornament, "text":semantic.text,
    "text-muted":semantic.textMuted, "action-bg":semantic.actionBackground,
    "action-text":semantic.actionText, focus:semantic.focus,
    error:semantic.error, warning:semantic.warning, success:semantic.success,
    "dialog-bg":semantic.dialogBackground || art.surface,
    "dialog-text":semantic.dialogText || semantic.text,
    "dialog-secondary":semantic.dialogSecondary || semantic.textMuted
  };
  if (art.backgroundBlend) {
    fields["blend-from"] = art.backgroundBlend.from;
    fields["blend-to"] = art.backgroundBlend.to;
    fields["canvas-background"] = `linear-gradient(${art.backgroundBlend.direction}, var(--gc-blend-from), #ECECEC 49%, var(--gc-blend-to))`;
  } else fields["canvas-background"] = "var(--gc-canvas)";
  return fields;
}
export function generateCSS() {
  const groups = listVariants().map(({id}) => {
    const vars = cssVariables(id);
    const selector = id === DEFAULT_VARIANT ? `:root, [data-gridctrl-variant="${id}"]` : `[data-gridctrl-variant="${id}"]`;
    return `${selector} {\n${Object.entries(vars).map(([name, value]) => `  --gc-${name}: ${value};`).join("\n")}\n}`;
  });
  return `/* GRIDCTRL generated from skill/assets/variants.json — do not edit manually. */\n${groups.join("\n\n")}\n
.gc-theme { background: var(--gc-canvas-background); color: var(--gc-text); }
.gc-card { background: var(--gc-surface); color: var(--gc-text); border: 1px solid var(--gc-line); }
.gc-button { background: var(--gc-action-bg); color: var(--gc-action-text); border: 1px solid var(--gc-accent); border-radius: 4px; padding: .65rem 1.1rem; font: inherit; cursor: pointer; }
.gc-button:focus-visible, .gc-card:focus-visible { outline: 3px solid var(--gc-focus); outline-offset: 3px; }
.gc-description { color: var(--gc-text-muted); }
.gc-decor { pointer-events: none; user-select: none; }
@media (prefers-reduced-motion: reduce) { .gc-decor { animation: none !important; transition: none !important; } }
`;
}
export function generateDTCG() {
  const out = {};
  for (const {id} of listVariants()) {
    out[id] = { $description:`GRIDCTRL preset ${id}`, ...Object.fromEntries(
      Object.entries(cssVariables(id)).filter(([,v]) => typeof v === "string" && v.startsWith("#")).map(([k,v]) => [k.replaceAll("-", "_"), { $type: "color", $value: v }])
    ) };
  }
  return { $description:"DTCG-style exported GRIDCTRL tokens; registry source: skill/assets/variants.json", $version:REGISTRY_VERSION, variants:out };
}
export function generateSass() {
  return `// GRIDCTRL generated variables; apply CSS custom properties from gridctrl.css for runtime switching.\n${Object.entries(cssVariables()).filter(([,value])=>value.startsWith("#")).map(([key,val])=>`$gc-${key}: ${val};`).join("\n")}\n`;
}
export function validateRegistry(data = registry) {
  const issues = [];
  const fail = (variant, field, reason) => issues.push({variant, field, reason});
  if (!data || !data.variants || !data.composition || !data.version) {
    return {ok:false, issues:[{variant:"registry",field:"structure",reason:"Missing version, composition or variants"}], variantCount:0};
  }
  if (!data.variants[data.defaultVariant]) fail("registry", "defaultVariant", "Default variant not found");
  if (data.composition.allowUnseededRandomness !== false) fail("registry","composition","Unseeded randomness must be disabled");
  if (typeof data.composition.stableId !== "string" || !data.composition.stableId) fail("registry", "stableId", "Missing deterministic layout ID");
  for (const [id, variant] of Object.entries(data.variants)) {
    const a=variant.art || {}, s=variant.semantic || {};
    const requiredArt=["canvas","surface","ink","divider","accent","ornament"];
    const requiredSemantic=["text","textMuted","actionBackground","actionText","focus","error","warning","success"];
    for (const key of requiredArt) if (!a[key]) fail(id,`art.${key}`,"Missing visual token");
    for (const key of requiredSemantic) if (!s[key]) fail(id,`semantic.${key}`,"Missing semantic token");
    const check = (name, fg, bg, minimum) => {
      try { if (contrastRatio(fg,bg) < minimum) fail(id,name,`Contrast below ${minimum}:1 (${contrastRatio(fg,bg).toFixed(2)}:1)`); }
      catch { fail(id,name,"Invalid color value"); }
    };
    if (a.surface && s.text) check("text/surface",s.text,a.surface,4.5);
    if (a.surface && s.textMuted) check("textMuted/surface",s.textMuted,a.surface,4.5);
    if (s.actionBackground && s.actionText) check("actionText/actionBackground",s.actionText,s.actionBackground,4.5);
    if (a.surface && s.focus) check("focus/surface",s.focus,a.surface,3);
    if (a.surface && s.error) check("error/surface",s.error,a.surface,4.5);
    if (a.surface && s.warning) check("warning/surface",s.warning,a.surface,4.5);
    if (a.surface && s.success) check("success/surface",s.success,a.surface,4.5);
    if (a.backgroundBlend) {
      for(const key of ["from","to"]) try { normalizeHex(a.backgroundBlend[key]); } catch { fail(id,`backgroundBlend.${key}`,"Invalid blend color"); }
      if (!a.backgroundBlend.direction) fail(id,"backgroundBlend.direction","Gradient direction missing");
    }
  }
  return {ok:issues.length===0, issues, variantCount:Object.keys(data.variants).length};
}
