# Contribuindo para GRIDCTRL

Obrigado por contribuir! O projeto reúne uma landing demonstrativa e uma Skill de engenharia visual e frontend.

## Como começar
1. Faça fork e crie uma branch descritiva (`feat/...`, `fix/...`, `docs/...`).
2. Preserve a identidade GRIDCTRL nos exemplos, mas mantenha as regras da Skill genéricas o suficiente para projetos reais.
3. Se alterar tokens ou presets, atualize juntos `skill/assets/tokens.css`, `tokens.json`, `variants.json` e os exemplos de documentação relevantes.
4. Documente mudanças no comportamento esperado, especialmente responsividade, foco, legibilidade e determinismo.
5. Abra um pull request com motivação, arquivos afetados e testes efetivamente executados.

## Critérios para pull requests
- Sem aleatoriedade não determinística em layouts.
- Arte e efeitos não bloqueiam conteúdo ou controles.
- Contraste e semântica preservados também no modo pastel.
- CSS/SVG antes de motores 3D pesados, salvo justificativa.
- Auditoria prévia em alterações de sistema existente.
- Evidências de fidelidade visual, não apenas nova cor/sombra.

## Validação manual da landing
- Abra `index.html` em navegador atualizado, ou sirva com `python -m http.server 8000`.
- Teste navegação, FAQ, menu móvel, links de download e formulários demonstrativos.
- Confira zoom, teclado e larguras mobile/tablet/desktop.
- Não afirme cobertura de testes automatizados sem executá-los.

## Avisos
Não inclua segredos, dados pessoais ou imagens de terceiros sem licença. Discussões e solicitações devem descrever passos de reprodução claros. Consulte a licença MIT na raiz do repositório.
