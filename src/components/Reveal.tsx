"use client";

import { motion } from "motion/react";
import { VIEWPORT, fadeUp } from "@/lib/motion";

type Tag = "div" | "p";

/** Simple fade + 12px rise, once. Used by the Contact note. */
export function Reveal({ as = "div", className, children }: { as?: Tag; className?: string; children: React.ReactNode }) {
  const M = motion[as];
  return (
    <M className={className} initial="hidden" whileInView="show" viewport={VIEWPORT} variants={fadeUp(12)}>
      {children}
    </M>
  );
}
