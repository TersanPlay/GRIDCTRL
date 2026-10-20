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


## Critérios adicionais — contraste Dark Mode e conteúdo de modais

Ao implementar o preset `midnight` ou qualquer tema escuro:

1. A paleta semântica `text` e `textMuted` deve ser efetivamente aplicada à **descrição de cada card**, parágrafos, labels e metadados. Não permitir literais `#565656`, `#626262` ou `#777` em superfície grafite.
2. No GRIDCTRL, conferir especificamente `.tile-desc`, `.tile p`, `.insight-card p`, `.faq-content`, `.section-heading > p`, `.tile-top` e labels secundários.
3. Em modais, **inspecionar os seletores e a semântica reais do projeto**, sem presumir classes como `.modal`. A demonstração GRIDCTRL utiliza o elemento `<dialog class="detail-dialog">` com `.dialog-head`, `.dialog-content`, `#dialog-body` e `#dialog-extra`; verificar texto gerado dinamicamente em listas e rótulos.
4. Todos os títulos, parágrafos, listas, CTAs e controles do modal devem apresentar contraste adequado com **a superfície efetivamente renderizada**. A cor do texto e o fundo devem ser definidos juntos ao alternar entre light/dark.
5. Componentes abertos (FAQ, Dialog, Popover, Accordion) devem seguir tokens do tema; revalidar os estados abertos, especialmente backgrounds com valores hex hard-coded.
6. **Matriz de verificação**: testar `midnight` nos cards de Capabilities, Process, Use Cases; abrir cada tipo de modal; comparar FAQ fechado/aberto; verificar teclado, foco visível e zoom; confirmar que as outras cinco paletas não foram alteradas.
7. Validar conformidade WCAG 2.2 AA pelo menos para os pares de cor usados: corpo/texto comum ≥4,5:1, textos grandes ≥3:1, e requisitos aplicáveis de foco e controles. Não declarar validação visual concluída sem abrir a página no navegador.


### Gate: qualidade de imagens e ilustrações
- [ ] A imagem do hero tem densidade adequada ao tamanho final e ao DPR, sem artefatos evidentes.
- [ ] Thumbnails de cards são originais de alta resolução ou SVGs bem formados, não miniaturas ampliadas.
- [ ] SVGs são autocontidos, têm texto alternativo contextual e não fazem requisições externas.
- [ ] Imagens possuem tamanho explícito e carregamento apropriado (hero prioritário; cards abaixo da dobra lazy).
- [ ] Compressão e filtros CSS não tornam textos/traços ilegíveis em tema claro ou Midnight.
- [ ] Composição visual continua fiel à direção aprovada; quaisquer redesenhos são declarados.
