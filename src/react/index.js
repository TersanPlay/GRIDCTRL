/** React adapter: optional peer dependency, no JSX/transpilation required in core. */
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { DEFAULT_VARIANT, listVariants, resolveVariant } from "../core/index.js";
const Context=createContext(null);
const STORAGE_KEY="gridctrl:variant:v1";
export function GridctrlProvider({variant=DEFAULT_VARIANT, persist=true, children}) {
  const [current,setCurrent]=useState(()=> {
    if (typeof window === "undefined" || !persist) return variant;
    try { const saved=window.localStorage.getItem(STORAGE_KEY); return saved && listVariants().some(t=>t.id===saved) ? saved : variant; }
    catch { return variant; }
  });
  useEffect(()=>{resolveVariant(variant);},[variant]);
  useEffect(()=>{
    if (typeof document==="undefined") return;
    document.documentElement.setAttribute("data-gridctrl-variant", current);
    if(persist) try { window.localStorage.setItem(STORAGE_KEY,current); } catch {}
  },[current,persist]);
  const selectVariant=useCallback(id=>{resolveVariant(id);setCurrent(id)},[]);
  const value=useMemo(()=>({variant:current,theme:resolveVariant(current),setVariant:selectVariant,variants:listVariants()}),[current,selectVariant]);
  return React.createElement(Context.Provider,{value},children);
}
export function useGridctrl() {
  const value=useContext(Context);
  if (!value) throw new Error("useGridctrl requires a GridctrlProvider.");
  return value;
}
export const useGridctrlTheme=useGridctrl;
