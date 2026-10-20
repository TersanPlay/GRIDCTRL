import React from "react";import {Slot} from "@radix-ui/react-slot";
export const Button=React.forwardRef(function Button({asChild=false,variant="primary",className="",...props},ref){const Component=asChild?Slot:"button";return <Component ref={ref} className={`gc-ui-button gc-ui-button--${variant} ${className}`.trim()} {...props}/>;});
