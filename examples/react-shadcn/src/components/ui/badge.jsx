import React from "react";export function Badge({variant="neutral",className="",...props}){return <span className={`gc-ui-badge gc-ui-badge--${variant} ${className}`.trim()} {...props}/>;}
