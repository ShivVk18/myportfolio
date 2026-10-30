"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

type Props = { children: React.ReactNode; max?: number; className?: string };

// Pulls its child a few px toward the cursor; springs back on leave.
export function Magnetic({ children, max = 6, className = "" }: Props) {
  const reduce = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 260, damping: 18, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 260, damping: 18, mass: 0.4 });

  const move = (e: React.PointerEvent<HTMLSpanElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    const clamp = (v: number) => Math.max(-max, Math.min(max, v));
    x.set(clamp((e.clientX - (r.left + r.width / 2)) * 0.35));
    y.set(clamp((e.clientY - (r.top + r.height / 2)) * 0.35));
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span style={{ x, y }} onPointerMove={move} onPointerLeave={reset} className={`inline-block ${className}`}>
      {children}
    </motion.span>
  );
}
