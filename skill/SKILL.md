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

## Fonte primária de verdade
Antes de responder ou implementar, considerar nesta ordem:
1. `assets/robot-reference.webp` — referência visual principal e mandatória.
2. `references/skill-mockup-spec.md` — tradução técnica detalhada da imagem.
3. `assets/swiss-reference.tokens.json` e `assets/swiss-reference.tokens.css` — tokens base.
4. Demais arquivos de apoio desta Skill.

Se alguma instrução conflitar com a referência visual, **prevalece a referência visual** salvo solicitação explícita do usuário.

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
- a acessibilidade mínima estiver preservada.

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
- `assets/swiss-reference.tokens.json`
- `assets/swiss-reference.tokens.css`
