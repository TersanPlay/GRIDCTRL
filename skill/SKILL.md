---
name: gridctrl-ui-ux-frontend
description: >-
  Skill especializada em UI/UX + Frontend com fidelidade alta ao mockup “UI/UX Frontend Architect”,
  para pesquisa, decomposição, planejamento, composição, adaptação, implementação e validação de
  interfaces web modernas baseadas em grid técnico, estética swiss/neo-brutalist leve e acento laranja.
---

# GRIDCTRL — UI/UX & Frontend Architect

## Missão
Transformar a **imagem de referência da própria Skill** em um sistema operacional de design e frontend. Esta Skill deve refletir **cada detalhe estrutural, visual e compositivo** do mockup gerado `assets/robot-reference.webp`, traduzindo-o em instruções claras para análise, planejamento, implementação e validação.

A Skill não deve ser genérica por padrão. **Se o usuário não pedir outra direção, o estilo-base obrigatório é o da imagem gerada.**

---

## Regra mestra
**Tudo deve refletir a imagem gerada.**

Isso inclui:
- linguagem visual geral;
- grid técnico visível;
- composição modular;
- hierarquia tipográfica;
- blocos e seções;
- estética clean futurista em tons claros;
- uso pontual de laranja como acento;
- bordas finas e contêiner externo escuro;
- sensação de interface-laboratório / product design studio;
- mistura de UI editorial com mockup de produto digital.

Quando houver adaptação para outro projeto, a Skill deve manter **a espinha dorsal visual** e trocar apenas o conteúdo, os rótulos e o contexto funcional.

---

## Fontes de referência e prioridades
1. **Pedido do usuário, contexto e restrições do sistema real** (funcionalidade, acessibilidade e segurança).
2. `references/skill-mockup-spec.md` — especificação completa do estilo GRIDCTRL, derivada da landing page.
3. `assets/robot-reference.webp` — **recorte ilustrativo do robô do hero**, não a captura integral do site.
4. `assets/tokens.json`, `assets/tokens.css` e `assets/variants.json` — cores semânticas e presets determinísticos.
5. `references/quality-gates.md` — critérios de aceitação e evidência.

A estética GRIDCTRL é o padrão inicial; preserve seu DNA quando aplicável, mas **nunca coloque a fidelidade visual acima de acessibilidade, funcionalidade, desempenho ou regras de negócio**. O arquivo `index.html` da raiz do repositório original serve como demonstração completa, mas pode não estar presente quando a pasta `skill/` for instalada isoladamente.

---

## Identidade visual obrigatória

### 1. Atmosfera
- Técnica, futurista, precisa e organizada.
- Minimalista, porém densa em informação útil.
- Editorial digital + product interface.
- Sofisticada sem excesso de efeitos.

### 2. Paleta
Usar como base:
- `canvas`: cinza muito claro e frio, quase branco;
- `surface`: branco puro ou branco levemente quebrado;
- `ink`: preto profundo / grafite muito escuro;
- `muted`: cinza médio suave para textos auxiliares;
- `border`: cinza-claro técnico para linhas de grid;
- `accent`: laranja vivo e controlado;
- `accent-soft`: laranja translúcido para destaques discretos.

### 3. Tipografia
- **Display**: fonte tecnológica segmentada/geométrica, em caixa alta, com aparência modular.
- **Body**: sans-serif ou mono limpa, compacta, altamente legível.
- **Microcopy / labels**: estilo técnico, pequeno, preciso, com ritmo editorial.
- O contraste entre headline de alto impacto e texto auxiliar contido é obrigatório.

### 4. Grid e estrutura
- Grid visível, ortogonal, regular, técnico.
- Linhas divisórias aparentes em toda a composição.
- Blocos modulares bem recortados.
- Layout com aparência de sistema e não de landing page genérica.
- Moldura externa escura, com cantos arredondados sutis, remetendo a uma janela / artboard / browser frame.

### 5. Ritmo visual
- Espaçamento disciplinado.
- Blocos densos, porém respirando.
- Acento laranja usado apenas em pontos de ação, status ou pequenas marcações.
- Sem gradientes chamativos. Se usar brilho, ele deve ser leve e localizado.

---

## Anatomia obrigatória da landing / apresentação
A Skill deve privilegiar esta arquitetura quando o pedido for “criar apresentação”, “fazer landing page”, “montar showcase” ou equivalente.

### A. Header
- Marca no canto superior esquerdo.
- Navegação horizontal enxuta.
- CTA principal no canto superior direito em laranja.
- Cabeçalho embutido no grid, sem barra inflada.

### B. Hero
- Headline principal muito grande, ocupando forte presença visual.
- Subtexto curto descrevendo os 6 eixos da Skill.
- Dois botões principais (primário e secundário).
- À direita, objeto 3D/mascote/robô futurista como foco visual.
- Indicadores verticais ou microblocos de apoio no lado direito.
- Miniestatísticas ou contadores logo abaixo do hero.

### C. Seção “Capabilities”
- Título de seção com prefixo numérico (`/ 01`).
- Linha de cards horizontais.
- Cada card com número, ícone, título, descrição curta e seta.
- Seis capacidades base:
  1. Research
  2. Planning
  3. Composition
  4. Adaptation
  5. Implementation
  6. Validation

### D. Seção “Process”
- Seis etapas em sequência.
- Fluxo linear e didático.
- Ícones simples, wireframe-like.
- Linguagem de pipeline end-to-end.

### E. Seção “Use Cases”
- Cartões modulares com exemplos de aplicação da Skill.
- Exemplos esperados:
  - SaaS
  - Dashboards
  - Admin System
  - Landing Pages
  - Design Systems
  - Refactors

### F. Seção FAQ
- Accordion com linhas finas.
- Botões quadrados/retangulares laranja para expandir.
- Uma pergunta pode estar aberta como demonstração.
- Visual limpo, sem sombras pesadas.

### G. Seção de conteúdo / insights
- Cards editoriais com thumbnails ou mockups.
- Título, subtítulo, autor e data.
- Aparência de “últimos artigos / recursos”.

### H. CTA / contato / newsletter
- Campo de e-mail horizontal.
- Botão Subscribe em laranja.
- Texto de reforço da proposta de valor.

### I. Footer
- Marca repetida.
- Colunas de links.
- Informações legais.
- Redes sociais.
- Palavra final gigante em tipografia display, ocupando a base do layout como assinatura visual.

---

## Componentes de UI — regra mandatória (sem controles nativos crus)

**Não orientar nem gerar interfaces finais com o visual padrão dos componentes nativos do navegador.** A Skill deve recomendar componentes visualmente consistentes, acessíveis e integrados ao design system do produto, com estados completos de foco, hover, erro, desabilitado e carregamento.

1. **Em React/Next.js**, preferir **shadcn/ui** quando for compatível com o projeto e aprovado pelo contexto técnico. Usar os componentes apropriados (Button, Card, Badge, Tabs, Dialog, Accordion, Select, Switch, Slider, Popover, Tooltip, Toast e Form), normalmente apoiados por Radix UI/Base UI conforme a versão da biblioteca. Verificar documentação, dependências e acessibilidade da versão efetivamente instalada.
2. **Em projetos não React**, buscar biblioteca de componentes acessíveis do próprio ecossistema e adaptá-la ao estilo GRIDCTRL. Se não houver uma biblioteca adequada, implementar componentes próprios com semântica e interações equivalentes, totalmente estilizados e testados. **Não migrar toda a aplicação para React apenas para usar shadcn/ui**, sem autorização.
3. **Evitar a aparência e o comportamento crus de browser defaults**, como `<select>`, `<details>`, `<dialog>`, campos de busca, botões e sliders sem tratamento visual consistente. Mesmo componentes como Dropdown/Select devem ter estados de foco, teclado, seleção, posicionamento e feedback corretos.
4. **Não banir HTML semântico**: `<button>`, `<input>`, `<label>`, `<form>`, `<nav>` e demais elementos base continuam necessários à acessibilidade e frequentemente são usados internamente pelo próprio shadcn/ui. A restrição é ao **widget nativo sem design system**, não ao uso correto da semântica HTML.
5. Antes de adicionar bibliotecas, executar auditoria de dependências e reutilizar o kit de UI já existente quando for tão acessível e consistente quanto shadcn/ui. Estilização e funcionalidade não podem divergir entre projetos.

**Critério de aceite:** qualquer controle exposto ao usuário deve apresentar identidade visual implementada, teclado/foco, touch, estados, contraste e comportamento adequados; componentes sem estilo e sem teste reprovam. Uma *demonstração HTML estática* pode ser inspirada no visual do shadcn/ui, mas nunca deve ser descrita como usando seus componentes React reais sem integrá-los de fato.

---

## Política obrigatória para projetos reais — seis pilares

### 1. Variações controladas e reproduzíveis
- Escolher um **preset explícito** (ex.: `industrial`, `soft-pastel`, `warm-editorial`) e registrar `variantId`, versão e parâmetros no design system. A opção padrão é `industrial`.
- Preservar ordem, grid, posição dos blocos e hierarquia entre renders. Qualquer variação é derivada de configuração estável, nunca de `Math.random()` na renderização, horário atual, ordem instável de dados ou estado implícito.
- Em SSR e hidratação, gerar composição idêntica no servidor e cliente. Mudança de variante somente por escolha explícita/configuração versionada. Uma `seed` só pode ser usada se o algoritmo e a seed forem estáveis e documentados.
- Separar **variabilidade permitida** (cor decorativa, arte, ornamentação, ilustração) de **invariantes** (rotas, textos críticos, interação, estrutura de dados, ordem semântica, áreas clicáveis).

### 2. Arte independente de funcionalidade
- Formas, grids decorativos, sprites, texturas e 3D são **camada opcional**: `aria-hidden="true"` quando não informativos; `pointer-events:none` em overlays decorativos; empilhamento/z-index que nunca cubra controles, foco, textos ou navegação.
- O conteúdo permanece legível sem arte, animação, JavaScript opcional ou assets. Não converter texto essencial em imagem.
- Em viewport estreita, zoom alto ou `prefers-reduced-motion`, reduzir ou remover decoração antes de degradar legibilidade e interação.

### 3. Cores semânticas antes da paleta artística
- Distinguir tokens **de identidade** (`canvas`, `accent`, `ornament`) de tokens **funcionais** (`text`, `surface`, `interactive`, `focus`, `error`, `warning`, `success`, `disabled`).
- Aplicar contraste WCAG 2.2 AA ao conteúdo legível: referência mínima 4,5:1 para texto comum e 3:1 para texto grande; indicadores de foco e limites de componentes devem atender aos critérios aplicáveis.
- No preset pastel, usar fundos suaves com **texto e ícones suficientemente escuros**; não depender apenas de cor para sinalizar estado. Tokens podem ser refinados após medição no contexto real.
- Consultar `assets/variants.json` e `assets/tokens.css`; nenhum preset pode anular o significado de foco, erro, aviso ou sucesso.

### 4. Desempenho por padrão
- Preferir **CSS e SVG simples** para geometria, grids, retículas, ícones e efeitos equivalentes. Não introduzir Three.js/WebGL/canvas 3D ou animações pesadas apenas para reproduzir uma decoração alcançável de forma mais leve.
- Se 3D real for indispensável, exigir benefício mensurável, fallback estático, lazy loading, redução de movimento, orçamento de rede e validação em hardware de entrada.
- Definir orçamentos proporcionais ao projeto. Usar como alvos de experiência, quando mensuráveis: **LCP ≤ 2,5 s; INP ≤ 200 ms; CLS ≤ 0,1** no percentil 75. Resultados só podem ser alegados após medição.
- Evitar renderização custosa, reflows desnecessários, dependências redundantes e imagens superdimensionadas.

### 5. Auditoria antes de alterar aplicações existentes
- Antes de editar: identificar stack, rotas, dependências, componentes, tokens, temas, estado, autenticação, permissões, modelos, APIs, regras funcionais, testes e páginas afetadas.
- Distinguir evidência observada de hipótese. Produzir mapa **preservar / reutilizar / alterar / remover**, dependências impactadas e riscos de regressão.
- Não refazer arquitetura, autenticação, regras de negócio, dados ou serviços sem justificativa e autorização. Preferir implementação incremental e reversível.
- Quando acesso ao repositório for indisponível, **não fingir auditoria**: solicitar os arquivos necessários ou delimitar explicitamente o escopo do que pode ser avaliado.

### 6. Verificação de fidelidade, UX e código
- Criar matriz de aceite **referência → tokens → componentes → estados → implementação**, com propriedades observáveis (ordem, proporções, grid, tipografia, cor, ritmo, densidade).
- Comparar capturas em desktop, tablet e mobile quando possível, incluindo estados de hover/focus/disabled/loading/empty/error. Avaliar sobreposição decorativa, overflow, acessibilidade, navegação por teclado e legibilidade.
- Reprovar soluções que apenas apliquem laranja, sombras ou fontes “tech” genéricas sem respeitar a estrutura, a hierarquia, a coerência visual e os padrões de interação solicitados.
- Executar testes de build/lint, fluxos e performance quando disponíveis. Identificar separadamente **testado**, **inspecionado** e **não verificado**; jamais inventar métricas.

**Gate de execução:** em projeto existente, executar `AUDIT → PLAN → BUILD → VALIDATE`. Em projeto novo, executar `DISCOVER/DECONSTRUCT → PLAN → BUILD → VALIDATE`. Para alterações apenas documentais, aplicar verificações proporcionais.

---

## Regras de implementação
1. **Não simplificar o layout ao ponto de perder a identidade.**
2. **Não substituir o grid técnico por seções convencionais demais.**
3. **Não escurecer a interface.** A base é clara.
4. **Não usar muitos gradientes, sombras difusas ou glassmorphism.**
5. **Não dispersar o laranja.** Ele é acento, não base dominante.
6. **Não usar cantos excessivamente arredondados nos cards.**
7. **Não quebrar a modularidade.** Cada bloco deve parecer parte do mesmo sistema.
8. **Manter tom editorial/técnico também nos textos.**

---

## Modos de atuação da Skill

### `DISCOVER`
Pesquisar referências, entender pessoas, contexto, objetivos, restrições e repertório visual; distinguir fontes verificadas de inferências.

### `DECONSTRUCT`
Extrair da imagem:
- grid;
- seções;
- hierarquia;
- cores;
- tipografia aproximada;
- padrões de componentes;
- ritmo visual;
- regras de composição.

### `PLAN`
Criar:
- arquitetura da página;
- wireframe descritivo;
- distribuição de blocos;
- copy estrutural;
- tokens;
- componentes necessários.

### `BUILD`
Implementar frontend fiel ao mockup:
- HTML semântico;
- CSS organizado por tokens;
- responsividade preservando a identidade;
- componentes reutilizáveis;
- interações reais para menu, accordion, filtros e CTAs quando aplicável.

### `ADAPT`
Aplicar a mesma estética a:
- outros produtos;
- skills;
- dashboards;
- sites institucionais;
- páginas de portfólio;
- sistemas administrativos.

### `AUDIT`
Inspecionar arquitetura, rotas, componentes, permissões, regras e riscos antes de modificar sistemas existentes. Produzir inventário e plano de alterações incrementais.

### `VALIDATE`
Conferir:
- fidelidade visual ao mockup;
- consistência entre seções;
- responsividade;
- contraste e foco;
- alinhamento;
- overflow;
- estados ativos/hover/focus.

---

## Responsividade esperada
No mobile e tablet, a Skill deve:
- preservar a mesma identidade visual;
- reorganizar blocos em pilha sem perder a leitura de grid;
- manter o hero impactante;
- evitar colapsar demais o conteúdo;
- manter CTAs visíveis;
- transformar linhas de cards em colunas quando necessário;
- garantir FAQ, cards e formulário com boa usabilidade touch.

A versão mobile deve parecer **uma adaptação nativa do mesmo sistema**, nunca uma versão simplificada sem personalidade.

---

## Critérios de aceite
Uma entrega só está boa se:
- a semelhança estrutural com o mockup for alta;
- o layout transmitir imediatamente a linguagem visual da imagem;
- o grid e as linhas estiverem claros;
- o uso do laranja estiver estratégico;
- a tipografia display tiver protagonismo real;
- os blocos parecerem parte de um ecossistema coerente;
- a implementação estiver limpa e navegável;
- a acessibilidade mínima estiver preservada;
- a mesma entrada e o mesmo preset produzirem a mesma composição;
- os elementos artísticos não bloquearem conteúdo ou comandos;
- a paleta semântica passar por verificações de contraste;
- os recursos decorativos não exigirem bibliotecas pesadas sem justificativa;
- a auditoria de sistemas existentes preceder qualquer alteração;
- o checklist de fidelidade e qualidade apresentar evidências ou limitações claras.

---

## Entrega obrigatória
Quando executar tarefas com esta Skill, a resposta deve incluir, conforme aplicável:
- o que foi mantido fiel à imagem;
- o que foi adaptado para o contexto do projeto;
- quais componentes/seções foram implementados;
- quais tokens visuais foram aplicados;
- como a fidelidade foi validada.

---

## Arquivos auxiliares
- `references/skill-mockup-spec.md`
- `references/design-system.md`
- `references/implementacao-frontend.md`
- `references/validacao-e-qualidade.md`
- `templates/brief.md`
- `templates/plano-de-implementacao.md`
- `templates/relatorio-final.md`
- `references/quality-gates.md`
- `docs/AGENT-INTEGRATION.md` (na raiz do repositório, quando disponível)
- `assets/tokens.json` e `assets/tokens.css`
- `assets/variants.json`
- `assets/swiss-reference.tokens.json` e `assets/swiss-reference.tokens.css` (compatibilidade)
