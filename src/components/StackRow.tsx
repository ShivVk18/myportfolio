"use client";

import { motion } from "motion/react";
import { EASE, fadeUp } from "@/lib/motion";

const chipList = { hidden: {}, show: { transition: { staggerChildren: 0.02, delayChildren: 0.1 } } };
const chipIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: EASE } },
};

type Props = {
  category: string;
  items: string[];
  highlighted: boolean;
  dimmed: boolean;
  onHover: (on: boolean) => void;
};

export function StackRow({ category, items, highlighted, dimmed, onHover }: Props) {
  return (
    <motion.div variants={fadeUp()} className="kv items-start">
      <dt
        onPointerEnter={() => onHover(true)}
        onPointerLeave={() => onHover(false)}
        className={`mono-label cursor-default pt-1.5 transition-opacity duration-300 ${
          highlighted ? "text-accent-text" : "text-muted"
        } ${dimmed ? "opacity-30" : ""}`}
      >
        {category}
      </dt>
      <dd className={`transition-opacity duration-300 ${dimmed ? "opacity-30" : ""}`}>
        <motion.ul variants={chipList} className="flex flex-wrap gap-1.5">
          {items.map((item) => (
            <motion.li
              key={item}
              variants={chipIn}
              className={`mono-label relative rounded-full border px-3 py-1.5 transition-[translate,border-color,color] duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-accent ${
                highlighted ? "border-accent/70 text-accent-text" : "border-hairline text-ink/80"
              }`}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </dd>
    </motion.div>
  );
}
