# Quality gates e regras de adoção — GRIDCTRL

Este documento amplia as seis regras mandatórias de `SKILL.md`, com critérios objetivos para implantação em aplicações reais.

## Gate 0 — Diagnóstico do produto e do repositório
**Entrada:** briefing, acesso a arquivos, rotas, ambiente, dispositivos e referências.

**Evidências mínimas:** stack e dependências atuais; rotas e layouts afetados; estado e gerenciamento de dados; componentes e design tokens; autenticação, permissões e regras de negócio; APIs e contratos; testes e build existentes; riscos de regressão.

**Não passar** se a proposta apagar controles existentes sem análise ou prometer alterações sobre arquivos não inspecionados.

## Gate 1 — Configuração determinística
Definir preset como `industrial`, `soft-pastel` ou `warm-editorial`; anotar `variantId`, `version` e `stableId` da composição. Alterar cores e motivos apenas onde o preset permitir.

**Teste:** renderizar a mesma página duas vezes com as mesmas entradas e verificar mesmas posições, ordem e estrutura; em SSR, comparar composição inicial com hidratação. Não executar `Math.random()` no render.

## Gate 2 — Arte não bloqueante
**Teste de remoção:** desabilitar a camada decorativa. Todo conteúdo, foco, navegação, CTAs e formulários continuam acessíveis. Formas decorativas recebem `aria-hidden` e overlays CSS recebem `pointer-events:none`; SVGs informativos devem possuir descrição acessível.

## Gate 3 — Cores semânticas e contrastes
Usar tokens separados para marca e funcionalidade. Verificar contraste de texto e foco nos estados default/hover/focus/disabled/error/warning/success. Cores semânticas nunca mudam de significado ao trocar um preset. Priorizar texto escuro sobre pastel suave. Não usar exclusivamente cor para diferenciar status.

## Gate 4 — Performance justificada
CSS/SVG nativo são preferidos. Adicionar engine WebGL/Three.js somente se existir funcionalidade essencial impossível de entregar adequadamente sem ela e houver medição comparativa. Em caso de uso, exigir fallback, lazy loading e suporte a movimento reduzido.

**Alvos (quando medidos):** LCP ≤2,5s, INP ≤200ms e CLS ≤0,1 no p75 de experiência real. Não atribuir notas ou tempos sem testes.

## Gate 5 — Fidelidade real, não maquiagem
Comparar:
- Grid, alinhamento e posições relativas
- Hierarquia, tamanho e espaçamento de títulos
- Proporções e densidade de cards
- Uso intencional da cor de acento
- Responsive reflow para mobile/tablet/desktop
- Estados visuais e interativos com teclado/touch
- Coerência de tipografia, ícones e escala

Uma página com laranja, sombra e cards genéricos **não** atende ao estilo GRIDCTRL sem cumprir os critérios estruturais.

## Gate 6 — Verificação e entrega
Registre `verificado`, `inspecionado` e `não verificado` separadamente. Execute lint/build/testes se disponíveis, navegabilidade real, erros de console, overflow, responsividade, WCAG e performance. Toda entrega final deve informar arquivos alterados, justificativa, testes executados e riscos.

### Checklist resumido
- [ ] Arquitetura existente inspecionada (se aplicável)
- [ ] Variante e configuração estáveis
- [ ] Arte removível sem perda de uso
- [ ] Tokens de cor semântica preservados
- [ ] Solução sem dependência visual pesada não justificada
- [ ] Desktop, tablet, mobile e teclado verificados
- [ ] Comparação com referência documentada
- [ ] Testes reais e limitações declarados


### Gate específico: descrições e modais escuros
- [ ] `midnight`: cada card e cada texto auxiliar mantém contraste ≥4,5:1 com a superfície aplicável.
- [ ] Os componentes de modal reais foram identificados no repositório antes do CSS; títulos, body, lista dinâmica e botões conferidos.
- [ ] FAQ expandida não herda superfícies claras incompatíveis.
- [ ] Hover, foco, estado aberto e responsividade foram avaliados ou marcados como não verificados.
- [ ] As demais variantes foram preservadas sem regressão visual.
