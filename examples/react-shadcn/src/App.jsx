import React,{useState} from "react";
import {useGridctrl} from "@tersanplay/gridctrl/react";
import {Button} from "./components/ui/button.jsx";
import {Badge} from "./components/ui/badge.jsx";
import {Card,CardHeader,CardTitle,CardContent,CardDescription} from "./components/ui/card.jsx";
import {Dialog,DialogTrigger,DialogContent,DialogTitle,DialogDescription} from "./components/ui/dialog.jsx";
import {Accordion,AccordionItem,AccordionTrigger,AccordionContent} from "./components/ui/accordion.jsx";
import {Switch} from "./components/ui/switch.jsx";
const capabilities=[["01","Research","Referências e necessidades"],["02","Planning","Arquitetura e experiência"],["03","Composition","Grid, tokens e componentes"],["04","Adaptation","Responsividade sem aleatoriedade"],["05","Implementation","Código funcional"],["06","Validation","Qualidade e acessibilidade"]];
export default function App(){
 const {variant,setVariant,variants,theme}=useGridctrl();const [enabled,setEnabled]=useState(true);
 return <main className="gc-react-showcase gc-theme">
 <header className="gc-react-header"><div><span className="gc-mark">■</span> <strong>GRIDCTRL / REACT</strong><p>UI/UX + Frontend Design Intelligence</p></div><Badge variant="accent">SKILL / 001</Badge></header>
 <section className="gc-react-hero"><div><p className="gc-eyebrow">/ 01 — DETERMINISTIC UI SYSTEM</p><h1>DESIGN SYSTEM<br/>IN MOTION_</h1><p className="gc-ui-description">Este exemplo utiliza componentes em código-fonte no padrão shadcn/ui, primitives Radix e as seis variantes reais do pacote GRIDCTRL.</p><Dialog><DialogTrigger asChild><Button>OPEN COMPONENT DIALOG →</Button></DialogTrigger><DialogContent><DialogTitle>GRIDCTRL / Dialog</DialogTitle><DialogDescription>Componentes acessíveis e estilizados com os tokens semânticos. Escape e controle de foco são providos pelo Radix.</DialogDescription><p>Paleta ativa: <strong>{theme.label}</strong></p></DialogContent></Dialog></div><div className="gc-robot-geometry" aria-hidden="true"><span>◉</span><small>COMPONENT SYSTEM</small></div></section>
 <section className="gc-react-theme-picker"><div><h2>/ 02 CHOOSE PALETTE</h2><p className="gc-ui-description">Alteração imediata, preservando estrutura e estados.</p></div><div className="gc-react-palette-buttons" role="group" aria-label="Paletas GRIDCTRL">{variants.map(p=><Button key={p.id} variant={p.id===variant?"primary":"outline"} aria-pressed={p.id===variant} onClick={()=>setVariant(p.id)}>{p.id}</Button>)}</div></section>
 <section className="gc-react-section"><h2>/ 03 CAPABILITIES</h2><div className="gc-react-grid">{capabilities.map(([index,title,desc])=><Card key={index}><CardHeader><Badge>{index}</Badge><CardTitle>{title}</CardTitle></CardHeader><CardContent><CardDescription>{desc}</CardDescription></CardContent></Card>)}</div></section>
 <section className="gc-react-footer"><Accordion type="single" collapsible defaultValue="item-1"><AccordionItem value="item-1"><AccordionTrigger>Como preservar a consistência?</AccordionTrigger><AccordionContent>Variante e identificador de layout permanecem estáveis. A cor muda sem alterar DOM semântico, navegação ou posições.</AccordionContent></AccordionItem><AccordionItem value="item-2"><AccordionTrigger>Como funciona o preset escuro?</AccordionTrigger><AccordionContent>Tokens funcionais mantêm contraste e componentes recebem superfícies compatíveis.</AccordionContent></AccordionItem></Accordion><label className="gc-switch-label"><span>Ativar visualização técnica</span><Switch checked={enabled} onCheckedChange={setEnabled} aria-label="Ativar visualização técnica"/></label><p className="gc-ui-description">Visualização técnica: {enabled?"ativa":"desativada"}.</p></section>
 </main>
}
