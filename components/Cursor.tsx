"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/** Curseur personnalisé : point + anneau élastique. Desktop uniquement. */
export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 260, damping: 24, mass: 0.6 });
  const ry = useSpring(y, { stiffness: 260, damping: 24, mass: 0.6 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement;
      setActive(!!t.closest("a, button, [data-cursor]"));
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <>
      <motion.div className="cursor-dot" style={{ x, y }} aria-hidden />
      <motion.div
        className={`cursor-ring ${active ? "is-active" : ""}`}
        style={{ x: rx, y: ry }}
        aria-hidden
      />
    </>
  );
}
