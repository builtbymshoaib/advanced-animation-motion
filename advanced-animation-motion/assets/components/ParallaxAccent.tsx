"use client";
import {useRef} from "react";
import {motion,useScroll,useTransform,useReducedMotion} from "motion/react";
export function ParallaxAccent() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const {scrollYProgress} = useScroll({target:ref,offset:["start end","end start"]});
  const y = useTransform(scrollYProgress,[0,1],[-12,12]);
  return <div ref={ref} aria-hidden="true" style={{height:100,overflow:"hidden",display:"grid",placeItems:"center"}}><motion.div style={{y:reduced === false ? y : 0,width:40,height:40,borderRadius:"50%",background:"currentColor"}}/></div>;
}
