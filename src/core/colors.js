/** WCAG relative luminance and contrast, with no external dependencies. */
export function normalizeHex(input) {
  if (typeof input !== "string" || !/^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(input)) {
    throw new TypeError(`Expected a #RGB or #RRGGBB color, received ${String(input)}`);
  }
  const h = input.slice(1);
  return `#${(h.length === 3 ? [...h].map(c => c + c).join("") : h).toUpperCase()}`;
}
export function luminance(hex) {
  const value = normalizeHex(hex).slice(1);
  const rgb = [0, 2, 4].map(n => parseInt(value.slice(n, n + 2), 16) / 255);
  const [r, g, b] = rgb.map(c => c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  return r * 0.2126 + g * 0.7152 + b * 0.0722;
}
export function contrastRatio(foreground, background) {
  const a = luminance(foreground);
  const b = luminance(background);
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}
export const passesContrast = (fg, bg, threshold = 4.5) => contrastRatio(fg, bg) >= threshold;
