import React from "react";
export const Card=React.forwardRef(function Card({className="",...props},ref){return <div ref={ref} className={`gc-ui-card ${className}`.trim()} {...props}/>;});
export const CardHeader=({className="",...props})=><div className={`gc-ui-card__head ${className}`.trim()} {...props}/>;
export const CardContent=({className="",...props})=><div className={`gc-ui-card__body ${className}`.trim()} {...props}/>;
export const CardTitle=({className="",...props})=><h3 className={`gc-ui-card__title ${className}`.trim()} {...props}/>;
export const CardDescription=({className="",...props})=><p className={`gc-ui-description ${className}`.trim()} {...props}/>;
