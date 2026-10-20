#!/usr/bin/env node
/** GRIDCTRL CLI — no external runtime dependencies, safe (non-destructive) defaults. */
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { pathToFileURL } from "node:url";
import { DEFAULT_VARIANT, LAYOUT_ID, getRegistry, listVariants, resolveVariant, validateRegistry, generateCSS, generateDTCG, generateSass } from "../core/index.js";
function usage() {
  return `GRIDCTRL CLI v${getRegistry().version}
Usage:
  gridctrl themes
  gridctrl validate [--json] [--config ./gridctrl.config.json]
  gridctrl build [--out dist]
  gridctrl init [--target ./my-project] [--variant industrial] [--force]
  gridctrl help
Safe defaults: never overwrite existing project files without --force.
`;
}
const arg=(args,name,fallback)=>{const i=args.indexOf(name);return i>=0?args[i+1] ?? (()=>{throw new Error("Missing value for "+name)})():fallback};
function write(output,data,force=true) {
  if (!force && fs.existsSync(output)) throw new Error(`Refusing to overwrite ${output}; use --force`);
  fs.mkdirSync(path.dirname(output),{recursive:true});
  fs.writeFileSync(output,data,"utf8");
}
export function main(args=process.argv.slice(2)) {
  const [command="help",...options]=args;
  if(["help","--help","-h"].includes(command)) {process.stdout.write(usage());return}
  if(command==="themes") {for(const {id,label} of listVariants())console.log(`${id.padEnd(17)} ${label}`);return}
  if(command==="validate") {
    const result=validateRegistry();
    const config=arg(options,"--config",null);
    if(config) {
      const parsed=JSON.parse(fs.readFileSync(path.resolve(config),"utf8"));
      try { resolveVariant(parsed.variantId); } catch(e) { result.issues.push({variant:"project",field:"variantId",reason:e.message});result.ok=false; }
      if(!parsed.stableId||typeof parsed.stableId!=="string") {result.issues.push({variant:"project",field:"stableId",reason:"Missing stable ID"});result.ok=false}
      if(parsed.allowRandomLayout!==false) {result.issues.push({variant:"project",field:"allowRandomLayout",reason:"Layout must be deterministic"});result.ok=false}
    }
    if(options.includes("--json")) console.log(JSON.stringify(result,null,2));
    else console.log(result.ok?`PASS: ${result.variantCount} variants validated, deterministic layout ID ${LAYOUT_ID}`:result.issues.map(x=>`FAIL: ${x.variant} / ${x.field}: ${x.reason}`).join("\n"));
    if(!result.ok)process.exitCode=1;
    return result;
  }
  if(command==="build") {
    const out=path.resolve(arg(options,"--out","dist"));
    const status=validateRegistry();
    if(!status.ok) throw new Error("Invalid variants: "+JSON.stringify(status.issues));
    const resources=[
      ["gridctrl.css",generateCSS()],
      ["gridctrl.tokens.json",JSON.stringify(generateDTCG(),null,2)+"\n"],
      ["_gridctrl.scss",generateSass()],
      ["gridctrl.variants.json",JSON.stringify(getRegistry(),null,2)+"\n"]
    ];
    for(const [name,data] of resources){write(path.join(out,name),data);console.log(`generated ${path.join(out,name)}`)}
    return;
  }
  if(command==="init") {
    const target=path.resolve(arg(options,"--target","."));
    const id=arg(options,"--variant",DEFAULT_VARIANT);
    resolveVariant(id);
    const force=options.includes("--force");
    const files=[
      [path.join(target,"gridctrl.config.json"),JSON.stringify({variantId:id,stableId:LAYOUT_ID,allowRandomLayout:false,registryVersion:getRegistry().version},null,2)+"\n"],
      [path.join(target,"gridctrl.css"),generateCSS()]
    ];
    const existing=files.filter(([name])=>fs.existsSync(name)).map(([name])=>name);
    if(existing.length&&!force)throw new Error(`Existing file(s) would be overwritten: ${existing.join(", ")}. Use --force to replace.`);
    for(const [name,data] of files) {write(name,data,true);console.log("created "+name)}
    console.log('Use <html data-gridctrl-variant="'+id+'"> or set the attribute on the app root.');
    return;
  }
  throw new Error(`Unknown command "${command}".\n${usage()}`);
}
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  try {main()}catch(e){console.error("GRIDCTRL:",e.message);process.exitCode=1}
}
