# GRIDCTRL · Skill UI/UX & Frontend

A Skill de GRIDCTRL é um pacote de instruções e recursos para agentes de IA que trabalham com interfaces e código frontend. Requer um agente capaz de ler arquivos do projeto e **não executa nada autonomamente**.

## Instalação
Copie a pasta `skill/` completa para o diretório de Skills do seu agente, renomeando-a para `gridctrl-ui-ux-frontend`, se necessário. Exemplo: `.agents/skills/gridctrl-ui-ux-frontend/` ou `.claude/skills/gridctrl-ui-ux-frontend/` conforme a plataforma. Os caminhos variam por ferramenta; veja [o guia de integração](../docs/AGENT-INTEGRATION.md).

## Referências
- [SKILL.md](SKILL.md): instruções centrais, modos e seis regras obrigatórias.
- [Especificação do visual](references/skill-mockup-spec.md): identidade técnica.
- [Quality gates](references/quality-gates.md): validação e critérios de aceite.
- [Presets determinísticos](assets/variants.json): `industrial`, `soft-pastel`, `warm-editorial`.
- [Tokens semânticos CSS](assets/tokens.css) e [JSON](assets/tokens.json).
- [Exemplos de comandos](../examples/prompts.md).

## Modos
`DISCOVER`, `DECONSTRUCT`, `PLAN`, `ADAPT`, `BUILD`, `AUDIT`, `VALIDATE`.

Em projetos existentes, **AUDIT antes de BUILD**. A prioridade de produto é: dados e funcionalidades → acessibilidade e performance → fidelidade ao estilo.

## Paletas e componentes

Seis presets versionados estão disponíveis em [assets/variants.json](assets/variants.json), incluindo alternativas pastel, menta, lilás e escura. A [referência de componentes e shadcn/ui](references/componentes-e-shadcn.md) determina que a Skill não proponha widgets com a aparência nativa não estilizada do navegador. Em React, priorize shadcn/ui quando apropriado; fora de React, utilize um kit de componentes acessível do framework atual.

## Toolkit executável complementar

Quando a raiz do repositório estiver disponível, `npm run build` gera CSS, tokens em JSON DTCG-style e Sass a partir de `skill/assets/variants.json`. A CLI `node src/cli/index.js themes|validate|build|init` valida ou instala os arquivos gerados. `src/react/index.js` fornece GridctrlProvider; `examples/react-shadcn/` e `examples/vue/` exemplificam sua utilização. Essa camada é opcional para agentes que apenas leem SKILL.md. Consulte [Arquitetura](../docs/ARCHITECTURE.md).
