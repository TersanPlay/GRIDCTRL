import {test} from "node:test";
import assert from "node:assert/strict";
import {spawnSync} from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
const cwd=process.cwd();
function run(...args){return spawnSync(process.execPath,["src/cli/index.js",...args],{cwd,encoding:"utf8"})}
test("CLI themes and validation",()=>{
 const themes=run("themes");assert.equal(themes.status,0,themes.stderr);assert.match(themes.stdout,/midnight/);
 const validate=run("validate","--json");assert.equal(validate.status,0,validate.stdout+validate.stderr);
 assert.equal(JSON.parse(validate.stdout).ok,true);
});
test("CLI build generates CSS, DTCG and Sass",()=>{
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),"gridctrl-build-"));
 try {
  const result=run("build","--out",dir);
  assert.equal(result.status,0,result.stderr);
  const css=fs.readFileSync(path.join(dir,"gridctrl.css"),"utf8");
  const json=JSON.parse(fs.readFileSync(path.join(dir,"gridctrl.tokens.json"),"utf8"));
  assert.match(css,/--gc-text-muted/);
  assert.ok(json.variants["soft-pastel"]);
  assert.ok(fs.existsSync(path.join(dir,"_gridctrl.scss")));
 }finally{fs.rmSync(dir,{recursive:true,force:true})}
});
test("CLI init is safe, deterministic and validates config",()=>{
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),"gridctrl-init-"));
 try {
  let a=run("init","--target",dir,"--variant","mint-lab");
  assert.equal(a.status,0,a.stderr);
  const config=JSON.parse(fs.readFileSync(path.join(dir,"gridctrl.config.json"),"utf8"));
  assert.equal(config.variantId,"mint-lab");
  assert.equal(config.allowRandomLayout,false);
  assert.equal(run("validate","--config",path.join(dir,"gridctrl.config.json")).status,0);
  a=run("init","--target",dir);assert.notEqual(a.status,0);
  assert.match(a.stderr,/Refusing|Existing file/);
  assert.equal(run("init","--target",dir,"--force").status,0);
 }finally{fs.rmSync(dir,{recursive:true,force:true})}
});
test("CLI reports invalid variant/config",()=>{
 assert.notEqual(run("init","--variant","not-a-preset").status,0);
 assert.notEqual(run("nonsense").status,0);
});
