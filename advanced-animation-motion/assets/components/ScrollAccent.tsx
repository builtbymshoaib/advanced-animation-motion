"use client";
import {useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
gsap.registerPlugin(ScrollTrigger,useGSAP);
export function ScrollAccent() {
  const root = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from("[data-am-line]", {scaleX:.25, transformOrigin:"left", duration:.55, ease:"power2.out", scrollTrigger:{trigger:root.current, start:"top 85%", once:true}});
    });
    return () => mm.revert();
  }, {scope:root});
  return <div ref={root} aria-hidden="true"><div data-am-line style={{height:2,background:"currentColor"}}/></div>;
}
