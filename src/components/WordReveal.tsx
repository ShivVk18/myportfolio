"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE, VIEWPORT } from "@/lib/motion";

type Props = {
  text: string;
  /** Extra words rendered in muted ink after `text`. */
  muted?: string;
  as?: "h2" | "h3" | "p";
  className?: string;
};

// Display title revealed one word at a time through a mask (same move as the hero).
export function WordReveal({ text, muted, as = "h3", className = "" }: Props) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  const words = [
    ...text.split(" ").map((w) => ({ w, muted: false })),
    ...(muted ? muted.split(" ").map((w) => ({ w, muted: true })) : []),
  ];
  const word = {
    hidden: reduce ? { opacity: 0 } : { y: "105%" },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: EASE } },
  };
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
    >
      <span className="sr-only">{[text, muted].filter(Boolean).join(" ")}</span>
      <span aria-hidden="true">
        {words.map(({ w, muted: m }, i) => (
          <span key={i} className="mr-[0.24em] inline-block overflow-hidden pb-[0.1em] align-bottom last:mr-0">
            <motion.span variants={word} className={`inline-block ${m ? "text-muted" : ""}`}>
              {w}
            </motion.span>
          </span>
        ))}
      </span>
    </Tag>
  );
}
