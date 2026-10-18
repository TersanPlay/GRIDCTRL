# Componentes GRIDCTRL — uso profissional com shadcn/ui

## Regra essencial
A Skill **não deve sugerir componentes visuais nativos sem estilização**. Priorizar sistemas de componentes acessíveis e customizáveis; em React/Next.js, preferir shadcn/ui quando adequado. Componentes HTML semânticos subjacentes são necessários e permitidos.

## Catálogo recomendado
| Necessidade | Prioridade em React | Requisitos |
| --- | --- | --- |
| Ações | shadcn/ui Button | loading, disabled, foco visível, alvo touch |
| Cartões | Card + CardHeader/Content | hierarquia, densidade, contraste |
| Etiquetas | Badge | não depender só da cor |
| Navegação contextual | Tabs | teclado, seleção, orientação |
| Diálogos | Dialog / AlertDialog | foco, Escape, descrição, confirmação |
| Formulários | Field/Form, Input, Select | labels, mensagens, validação |
| Configuração | Switch / Slider | aria, teclado, estados |
| Informações auxiliares | Tooltip / Popover | toque, teclado, posicionamento |
| FAQ | Accordion | expansão com foco e estado |
| Feedback | Sonner/Toast | mensagens, live region, timeout adequado |

Antes de instalar componentes shadcn/ui, inspecionar a versão e o setup do projeto; comandos de instalação variam. Usar documentação oficial atual e respeitar aliases, estilos, framework e caminhos existentes.

## Padrão de adaptação
- Componentes recebem classes de projeto ou variantes baseadas em tokens GRIDCTRL.
- Identidade artística pode mudar por preset, mas estados semânticos não.
- Prefira primitives existentes ao invés de recriar acessibilidade complexa do zero.
- Evite duplicar UI kits. Migração de stack requer pedido explícito.
- Se frontend é HTML estático, a documentação pode demonstrar equivalentes customizados acessíveis; **não afirmar que esse código é shadcn/ui real**.

## Checklist
- [ ] Sem controles visuais crus de navegador.
- [ ] Foco, teclado, touch e leitura por tecnologia assistiva.
- [ ] Erros, warnings, sucesso e disabled visualmente distintos.
- [ ] Contraste e zoom adequados.
- [ ] Tokens e presets aplicados sem mudar semântica.
- [ ] Nenhum overlay decorativo cobre componentes.
