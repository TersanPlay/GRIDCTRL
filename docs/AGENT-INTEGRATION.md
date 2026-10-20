# GRIDCTRL — integração com agentes de IA

## O que é uma Skill de arquivo?
É um conjunto de instruções e recursos que o agente pode ler **quando sua plataforma permite Skills locais ou anexos de contexto**. Ela não executa ações sozinha: depende do ambiente do agente. **Além disso, o repositório agora oferece um pacote JavaScript/CLI separado**, com tokens reais, validação, React e exemplos Vue. O pacote não é necessário para que o agente leia a Skill e ainda não é anunciado como publicado no npm.

## Conteúdo mínimo a copiar
Copie toda a pasta `skill/`, preservando `SKILL.md`, `references/` e `assets/`. Não copiar só `SKILL.md` se quiser que o agente tenha acesso aos presets, tokens e critérios técnicos.

## Agentes que reconhecem SKILL.md
Use o diretório de Skills documentado pelo seu agente. Exemplos comuns **dependem da configuração/versão**:

- Alguns agentes compatíveis com o padrão Agent Skills: `<projeto>/.agents/skills/gridctrl-ui-ux-frontend/`
- Claude Code: `<projeto>/.claude/skills/gridctrl-ui-ux-frontend/`

Estes caminhos são exemplos de projeto, **não garantias** de suporte em toda plataforma. Se o agente não detectar automaticamente, abra/anexe `SKILL.md` e os arquivos de referência ao contexto do projeto.

## Ativação explícita
Dê uma instrução direta ao agente:

> Use a Skill GRIDCTRL de `.agents/skills/gridctrl-ui-ux-frontend/SKILL.md`. Faça AUDIT antes de editar, preserve rotas/regras funcionais, selecione preset industrial e reporte os testes executados.

## Fluxo em novo projeto
`DISCOVER → DECONSTRUCT → PLAN → BUILD → VALIDATE`

## Fluxo em projeto existente
`AUDIT → PLAN → BUILD → VALIDATE`

## Variações determinísticas
O arquivo `skill/assets/variants.json` inclui os presets `industrial`, `soft-pastel` e `warm-editorial`. Use um `variantId` fixo e um identificador estável de layout. Mudar o preset pode alterar superfícies, cor artística e motivos, mas não deve mudar rotas, DOM semântico, posição de controles ou ordem do conteúdo.

### Exemplo de configuração
```json
{
  "variantId": "soft-pastel",
  "stableId": "dashboard-v1",
  "allowRandomLayout": false
}
```

## Regras de segurança de mudança
Não alterar autenticação, endpoints, banco de dados ou negócios apenas para adequar visual. Art assets não podem interceptar cliques nem cobrir texto, foco ou formulários.

## Como validar a execução
Pedir ao agente **evidências**: arquivos afetados, matriz de fidelidade, teste de estabilidade entre renders, contraste semântico, navegação por teclado, responsividade, console/build e custo de bibliotecas visuais. Não aceitar alegação de testes sem logs/execução.

## Paletas e visualização em tempo real
A landing estática na raiz (`index.html`) oferece seis variantes determinísticas no seletor **Theme Lab**. As escolhas ficam salvas no localStorage, sem modificar a hierarquia ou a geometria. O arquivo `skill/assets/variants.json` armazena presets equivalentes para integração por agentes.

## shadcn/ui e componentes profissionais
Para projetos React/Next.js, prefira componentes shadcn/ui reais, quando compatíveis. Em outros frameworks, use bibliotecas equivalentes acessíveis. **Não induza a IA a entregar controles visuais crus do navegador**; mantenha HTML semântico e todas as interações necessárias. Consulte `skill/references/componentes-e-shadcn.md`.

Os controles shadcn-inspired da landing estática são uma demonstração visual, não imports de componentes React. Não force migração de stack apenas para reproduzir essa demonstração.

## Ferramentas disponíveis quando o código inteiro está instalado

Execute `npm install && npm run check && npm test && npm run build` na raiz (Node 22+). Em seguida `node src/cli/index.js init --target ./meu-app --variant industrial` cria CSS + configuração de forma não destrutiva. Consulte [docs/TOKENS.md](TOKENS.md) e [docs/ARCHITECTURE.md](ARCHITECTURE.md). Em React, `GridctrlProvider`/ `useGridctrl()` aplicam os presets do mesmo registry usado pela CLI. São recursos opcionais e **não constituem integração automática em todos os agentes**.
