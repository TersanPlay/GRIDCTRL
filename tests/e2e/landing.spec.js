import {test,expect} from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import {contrastRatio} from "../../src/core/colors.js";

test("Landing renders, switches theme and preserves stable layout",async({page})=>{
 await page.goto("/");
 await expect(page.locator("h1")).toContainText("FRONTEND");
 await expect(page.locator('[data-palette="mint-lab"]')).toBeVisible();
 const cardsBefore=await page.locator(".capacity-tile").count();
 await page.locator('[data-palette="midnight"]').click();
 await expect(page.locator("html")).toHaveAttribute("data-gridctrl-theme","midnight");
 const text=page.locator(".capacity-tile .tile-desc").first();
 const details=await text.evaluate(node=>{const css=getComputedStyle(node),bg=getComputedStyle(node.closest(".capacity-tile"));return{color:css.color,bg:bg.backgroundColor}});
 const rgbToHex=s=>{const nums=s.match(/[\d.]+/g)?.slice(0,3).map(x=>Math.round(Number(x)));return "#"+nums.map(n=>n.toString(16).padStart(2,"0")).join("")};
 expect(contrastRatio(rgbToHex(details.color),rgbToHex(details.bg))).toBeGreaterThanOrEqual(4.5);
 expect(await page.locator(".capacity-tile").count()).toBe(cardsBefore);
 await page.locator('[data-palette="lilac-lab"]').click();
 expect(await page.locator(".capacity-tile").count()).toBe(cardsBefore);
});
test("Dialog remains readable in Midnight and closes with Escape",async({page})=>{
 await page.goto("/");
 await page.locator('[data-palette="midnight"]').click();
 await page.locator('[data-cap="research"]').click();
 const dialog=page.locator("#detail-dialog");
 await expect(dialog).toBeVisible();
 await expect(dialog.locator("#dialog-body")).not.toBeEmpty();
 const properties=await dialog.evaluate(node=>{const p=node.querySelector("#dialog-body");return{text:getComputedStyle(p).color,bg:getComputedStyle(node).backgroundColor}});
 const hex=s=>"#"+s.match(/[\d.]+/g).slice(0,3).map(x=>Number(x).toString(16).padStart(2,"0")).join("");
 expect(contrastRatio(hex(properties.text),hex(properties.bg))).toBeGreaterThanOrEqual(4.5);
 await page.keyboard.press("Escape");
 await expect(dialog).not.toBeVisible();
});
test("Keyboard focus and basic accessibility scans",async({page})=>{
 await page.goto("/");
 const result=await new AxeBuilder({page}).withTags(["wcag2a","wcag2aa"]).analyze();
 const high=result.violations.filter(v=>["critical","serious"].includes(v.impact));
 expect(high,JSON.stringify(high.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.length})),null,2)).toEqual([]);
});
