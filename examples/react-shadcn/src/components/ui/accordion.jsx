import React from "react";import * as AccordionPrimitive from "@radix-ui/react-accordion";
export const Accordion=AccordionPrimitive.Root;
export const AccordionItem=props=><AccordionPrimitive.Item className="gc-ui-accordion-item" {...props}/>;
export function AccordionTrigger({children,...props}){return <AccordionPrimitive.Header><AccordionPrimitive.Trigger className="gc-ui-accordion-trigger" {...props}>{children}<span aria-hidden="true">+</span></AccordionPrimitive.Trigger></AccordionPrimitive.Header>}
export const AccordionContent=props=><AccordionPrimitive.Content className="gc-ui-accordion-content" {...props}/>;
