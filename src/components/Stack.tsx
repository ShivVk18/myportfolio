"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { skills } from "@/data/skills";
import { VIEWPORT, staggerParent } from "@/lib/motion";
import { StackRow } from "./StackRow";

export function Stack() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <motion.dl initial="hidden" whileInView="show" viewport={VIEWPORT} variants={staggerParent(0.07)} className="space-y-5">
      {skills.map((s, i) => (
        <StackRow
          key={s.category}
          category={s.category}
          items={s.items}
          highlighted={hovered === i}
          dimmed={hovered !== null && hovered !== i}
          onHover={(on) => setHovered(on ? i : null)}
        />
      ))}
    </motion.dl>
  );
}
