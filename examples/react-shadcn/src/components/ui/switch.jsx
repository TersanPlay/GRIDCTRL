import React from "react";import * as SwitchPrimitive from "@radix-ui/react-switch";
export const Switch=React.forwardRef(function Switch(props,ref){return <SwitchPrimitive.Root ref={ref} className="gc-ui-switch" {...props}><SwitchPrimitive.Thumb className="gc-ui-switch__thumb"/></SwitchPrimitive.Root>});
