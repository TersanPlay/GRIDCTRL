# GRIDCTRL — Validation checklist

## Visual
- Compare reference and implementation for frame, grid/divider lines, overall spacing, typography hierarchy, orange usage and module order.
- Verify that hero and prominent visual remain focal points. Check text wrapping and line breaks at multiple widths.
- Preserve rectangular cards, compact line icons, numerical section labels and restrained color variations.

## Interaction
- All CTAs point to real targets. FAQ, dialog, filters and menu work with mouse, touch and keyboard.
- No fake success from forms lacking backend. Announce errors and status appropriately.
- Close overlays with Escape; manage focus properly; links and button labels are explicit.

## Responsive
- Test at 320, 390, 768 and 1440 pixels or representative project breakpoints.
- Check overflow, spacing, horizontal scroll, text clipping, tap target size and density.
- Test zoom and reduced-motion preference.

## Technical
- Check HTML semantics, JavaScript syntax, valid asset paths, browser console, build/lint where available, page load behavior, and deployability.
- Aim for WCAG 2.2 AA: contrast, accessible names, focus indicator, keyboard operation and state announcements.
- Report actual test evidence and mark any untested areas explicitly.
