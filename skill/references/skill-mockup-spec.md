# GRIDCTRL — Visual specification

## Identity and mood
Swiss-grid techno-minimalism, restrained neo-brutalist layout and editorial product-design language. Off-white surfaces, visible fine graphite dividers, precise orthogonal arrangement and selective orange accent. The interface should feel like a futuristic design lab, not a generic rounded-corner SaaS template.

## Hierarchy and composition
1. Browser-like black rounded external frame.
2. Top navigation: two-line GRID / CTRL identity, Skill, Workflow, Use Cases, FAQ and Resources links, orange GET SKILL action.
3. Large two-line display title: UI/UX FRONTEND ARCHITECT. Introductory microcopy at left, detailed white-orange 3D robot as primary art at right.
4. Three hero indicators: capabilities, use cases, interface ambition.
5. Section title bars use section indices /01 onward, large industrial display typography and tiny technical descriptions.
6. Six compact capability modules (Research, Planning, Composition, Adaptation, Implementation, Validation).
7. Six-step linear workflow (Discovery, Strategy, Design System, Development, Testing, Delivery).
8. Six use-case modules (SaaS, Dashboards, Admin Systems, Landing Pages, Design Systems, Refactors).
9. FAQ accordion uses 1px lines and vivid orange small square toggles.
10. Resource/article cards pair illustrations with title and short description.
11. Footer offers an honest newsletter placeholder and ends with oversized SKILL lettering.

## Design tokens
Canvas #ECECEC; paper #F7F7F7; ink #101010; muted #626262; dividers #C8C8C8; orange #FF741D. Technical borders 1px, rounded external frame, rectangular cards and CTAs. Typography uses ultra-bold geometric display with compact monospaced labels and neutral sans-serif body text. Typography approximates the reference: actual proprietary font is not supplied.

## Implementation requirements
Use semantic HTML, CSS Grid/Flexbox, accessible interaction states, visible keyboard focus, responsive reflow, reduced-motion support and data-driven components. Avoid overly-rounded cards, full-bleed gradient backgrounds, decorative neon and floating glass panels. Orange must remain a scarce accent.

## Image reference
See `assets/robot-reference.webp` for the 3D robot integrated in the landing page hero. The complete visual reference is the rendered index.html; stylistic rules are approximations, not pixel-accurate measurements of original artwork.

## Fundos neutros para Mint / Forest e Lilac / Iris
Nos presets `mint-lab` e `lilac-lab`, manter a estrutura clara original: canvas `#ECECEC`, superfícies `#F7F7F7` e paper `#FDFDFD`. A cor principal dos botões deve permanecer separada do fundo. O fundo recebe uma mescla **muito sutil de duas cores dessaturadas e próximas do cinza**, nunca um preenchimento verde ou lilás saturado.

- **Mint / Forest:** mesclar cinza-sálvia `#E7EDEA` e cinza-azulado `#EAEDF0`, com `#ECECEC` no centro; CTA verde `#83CBA8`.
- **Lilac / Iris:** mesclar cinza-lavanda `#ECE9F0` e cinza-ardósia `#E9EDF1`, com `#ECECEC` no centro; CTA lilás `#B7A1E2`.

A mescla é apenas estética, não deve cobrir conteúdo, comprometer contraste ou causar instabilidade de layout. Preferir `linear-gradient` leve e estático em CSS, sem engines gráficas.

## Midnight / Electric — imagem da hero sobre fundo escuro
Em modo escuro, manter a imagem do robô claramente reconhecível. O CSS base pode empregar `mix-blend-mode: multiply` para a skin clara; **sob `midnight`, sobrescrever para `mix-blend-mode: normal`**, com `brightness(1.12) contrast(1.05) saturate(1.05)` na arte. O painel visual usa degradê grafite discreto `#293540 → #26333F → #30404D` e o grid decorativo recebe opacidade reduzida `0.20`. Nenhuma dessas correções pode clarear o canvas principal ou afetar as outras cinco paletas.


## Regra visual: textos e modais em Midnight / Electric
Em superfícies grafite, cartões `Capabilities`, `The Process` e `Use Cases` devem usar descrições claras `#C1CDD5`, rótulos auxiliares `#B4C4CB` e títulos `#F2F6F8`. O modal nativo estilizado `.detail-dialog` mantém fundo escuro `#202833` e corpo `#C1CDD5`, inclusive listas dinâmicas e FAQ expandida. Inspecionar todos os seletores existentes antes de aplicar qualquer patch; não alterar as demais paletas.
