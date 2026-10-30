"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE, VIEWPORT, staggerParent } from "@/lib/motion";

type Props = {
  lines: React.ReactNode[];
  as?: "h2" | "h3" | "p" | "div";
  className?: string;
  id?: string;
};

// Reveals each line through a mask, one after another, when scrolled into view.
export function MaskLines({ lines, as = "div", className, id }: Props) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  const line = {
    hidden: reduce ? { opacity: 0 } : { y: "105%" },
    show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: EASE } },
  };
  return (
    <Tag id={id} className={className} initial="hidden" whileInView="show" viewport={VIEWPORT} variants={staggerParent(0.08)}>
      {lines.map((l, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span className="block" variants={line}>
            {l}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
