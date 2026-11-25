"use client";
import {AnimatePresence,motion,useReducedMotion} from "motion/react";
export function StatusAccent({active}: {active:boolean}) {
  const reduced = useReducedMotion();
  return <span aria-hidden="true" style={{display:"inline-grid",width:24,height:24}}><AnimatePresence initial={false}>{active && <motion.span key="active" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:reduced === false ?.18:0}} style={{gridArea:"1 / 1"}}>✓</motion.span>}</AnimatePresence></span>;
}
