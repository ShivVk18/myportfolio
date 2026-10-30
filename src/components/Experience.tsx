"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { experience } from "@/data/experience";
import { VIEWPORT, staggerParent } from "@/lib/motion";
import { ExperienceItem, NODE_TOP } from "./ExperienceItem";

export function Experience() {
  const [open, setOpen] = useState<number[]>([0]); // first role open by default
  const [stops, setStops] = useState<number[]>([]);
  const [litCount, setLitCount] = useState(0);
  const list = useRef<HTMLOListElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // The line fills as the section scrolls through the viewport.
  const { scrollYProgress } = useScroll({ target: list, offset: ["start 75%", "end 55%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const headY = useTransform(fill, (p) => `${p * 100}%`);

  // Where each node sits along the track (0..1), so it can light up when the fill reaches it.
  useEffect(() => {
    const measure = () => {
      const t = track.current;
      const l = list.current;
      if (!t || !l) return;
      const trackTop = t.offsetTop;
      const h = t.offsetHeight || 1;
      const rows = Array.from(l.querySelectorAll<HTMLElement>("[data-row]"));
      setStops(rows.map((r) => (r.offsetTop + 12 + NODE_TOP - trackTop) / h));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (list.current) ro.observe(list.current);
    return () => ro.disconnect();
  }, []);

  const update = (p: number) => setLitCount(stops.filter((s) => s <= p + 0.01).length);
  useMotionValueEvent(fill, "change", update);
  useEffect(() => update(reduce ? 1 : fill.get()));

  const toggle = (i: number) => setOpen((o) => (o.includes(i) ? o.filter((x) => x !== i) : [...o, i]));

  return (
    <motion.ol
      ref={list}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={staggerParent(0.1)}
      className="relative space-y-4"
    >
      <div
        ref={track}
        aria-hidden="true"
        className="absolute bottom-3 left-[calc(var(--kv)+0.75rem)] top-[21px] hidden w-px sm:block"
      >
        <span className="absolute inset-0 bg-hairline" />
        <motion.span className="absolute inset-0 origin-top bg-accent" style={{ scaleY: reduce ? 1 : fill }} />
        {!reduce && (
          <motion.span className="absolute inset-x-0 top-0 h-full" style={{ y: headY }}>
            <span className="absolute left-1/2 top-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_12px_3px_rgb(232_100_60/0.55)]" />
          </motion.span>
        )}
      </div>
      {experience.map((job, i) => (
        <ExperienceItem
          key={job.company}
          job={job}
          index={i}
          open={open.includes(i)}
          lit={reduce || i < litCount}
          onToggle={() => toggle(i)}
        />
      ))}
    </motion.ol>
  );
}
