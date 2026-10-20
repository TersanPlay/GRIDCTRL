import React from "react";import * as DialogPrimitive from "@radix-ui/react-dialog";
export const Dialog=DialogPrimitive.Root;export const DialogTrigger=DialogPrimitive.Trigger;export const DialogClose=DialogPrimitive.Close;
export function DialogContent({children,...props}){return <DialogPrimitive.Portal><DialogPrimitive.Overlay className="gc-ui-dialog-overlay"/><DialogPrimitive.Content className="gc-ui-dialog" {...props}>{children}<DialogPrimitive.Close className="gc-ui-dialog-close" aria-label="Fechar janela">×</DialogPrimitive.Close></DialogPrimitive.Content></DialogPrimitive.Portal>}
export const DialogTitle=props=><DialogPrimitive.Title className="gc-ui-dialog-title" {...props}/>;
export const DialogDescription=props=><DialogPrimitive.Description className="gc-ui-description" {...props}/>;
