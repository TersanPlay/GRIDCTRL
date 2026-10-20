import {test} from "node:test";
import assert from "node:assert/strict";
import { listVariants, getRegistry, resolveVariant, DEFAULT_VARIANT, LAYOUT_ID, cssVariables, generateCSS, generateSass, generateDTCG, validateRegistry, contrastRatio, normalizeHex } from "../../src/core/index.js";

test("six stable variants and a reproducible layout",()=>{
 assert.deepEqual(listVariants().map(x=>x.id),["industrial","soft-pastel","warm-editorial","mint-lab","lilac-lab","midnight"]);
 assert.equal(DEFAULT_VARIANT,"industrial");
 assert.equal(getRegistry().composition.allowUnseededRandomness,false);
 for(const {id} of listVariants()) {assert.deepEqual(resolveVariant(id),resolveVariant(id)); assert.equal(resolveVariant(id).layoutId,LAYOUT_ID);}
});
test("isolation: callers cannot mutate registry",()=>{
 const copy=resolveVariant("industrial");copy.art.accent="#000000";
 assert.notEqual(resolveVariant("industrial").art.accent,copy.art.accent);
 const registry=getRegistry();registry.variants.industrial.art.canvas="#123456";
 assert.notEqual(getRegistry().variants.industrial.art.canvas,"#123456");
});
test("semantic contrast validates every preset",()=>{
 const status=validateRegistry();
 assert.equal(status.ok,true,JSON.stringify(status.issues,null,2));
 assert.equal(status.variantCount,6);
});
test("deliberately low-contrast text is rejected",()=>{
 const r=getRegistry();r.variants.midnight.semantic.textMuted="#222222";
 const result=validateRegistry(r);
 assert.equal(result.ok,false);
 assert.ok(result.issues.some(x=>x.variant==="midnight" && x.field==="textMuted/surface"));
});
test("color normalization and WCAG contrast",()=>{
 assert.equal(normalizeHex("#abc"),"#AABBCC");
 assert.ok(contrastRatio("#FFFFFF","#000000")>20);
 assert.throws(()=>normalizeHex("orange"),TypeError);
});
test("CSS and JSON exports contain all themes and semantic components",()=>{
 const css=generateCSS(),tokens=generateDTCG();
 for (const {id} of listVariants()) {
   assert.match(css,new RegExp('data-gridctrl-variant="'+id+'"'));
   assert.ok(tokens.variants[id]?.text?.$value);
 }
 assert.ok(generateSass().includes("$gc-canvas:"));
 assert.match(css,/prefers-reduced-motion/);
 assert.match(css,/gc-button:focus-visible/);
});
test("Mint and Lilac preserve neutral canvas and separate accent from background",()=>{
 for(const id of ["mint-lab","lilac-lab"]){
  const vars=cssVariables(id);
  assert.equal(vars.canvas,"#ECECEC");
  assert.notEqual(vars.accent,vars.canvas);
  assert.match(vars["canvas-background"],/linear-gradient/);
 }
});
test("unknown variant throws actionable error",()=>assert.throws(()=>resolveVariant("random"),/Unknown GRIDCTRL variant/));
