"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import type { Project } from "@/data/projects";
import { EASE } from "@/lib/motion";
import { BrowserFrame } from "./BrowserFrame";
import { Magnetic } from "./Magnetic";

const SPRING = { stiffness: 180, damping: 18, mass: 0.5 };

const cardIn = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: EASE } },
};
const tagList = { hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.35 } } };
const tagIn = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

type Props = { project: Project; featured?: boolean; hidden: boolean; onOpen: () => void };

export function ProjectCard({ project, featured = false, hidden, onOpen }: Props) {
  const reduce = useReducedMotion();
  const maxTilt = featured ? 3 : 6;

  // Pointer position in the card, 0..1 → tilt.
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [maxTilt, -maxTilt]), SPRING);
  const rotateY = useSpring(useTransform(px, [0, 1], [-maxTilt, maxTilt]), SPRING);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.li variants={cardIn} className={`[perspective:1400px] ${featured ? "md:col-span-2" : ""}`}>
      <motion.div
        onPointerMove={reduce ? undefined : onMove}
        onPointerLeave={reset}
        style={reduce ? undefined : { rotateX, rotateY }}
        className="h-full"
        data-cursor
      >
        <motion.article
          layoutId={`project-${project.slug}`}
          style={{ opacity: hidden ? 0 : 1 }}
          className="group relative h-full overflow-hidden rounded-2xl bg-hairline p-px"
        >
          {/* Beam: a rotating conic gradient showing through the 1px border gap. */}
          <span
            aria-hidden="true"
            className="beam pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[260%] -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />

          <div
            className={`relative flex h-full flex-col overflow-hidden rounded-[15px] bg-card ${
              featured ? "md:grid md:grid-cols-[3fr_2fr]" : ""
            }`}
          >
            <BrowserFrame
              project={project}
              sizes={featured ? "(max-width: 768px) 92vw, 640px" : "(max-width: 768px) 92vw, 480px"}
              className={
                featured
                  ? "aspect-[16/10] border-b border-hairline md:aspect-auto md:min-h-[400px] md:border-b-0 md:border-r"
                  : "aspect-[16/10] border-b border-hairline"
              }
            />

            <div className="relative flex flex-1 flex-col p-5 sm:p-6 md:p-7">
              {/* Large corner index: 15% ink, accent on hover. */}
              <span aria-hidden="true" className="absolute right-5 top-3 font-mono text-5xl font-medium tabular-nums">
                <span className="text-ink opacity-15 transition-opacity duration-300 group-hover:opacity-0">{project.index}</span>
                <span className="absolute inset-0 text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {project.index}
                </span>
              </span>

              <p className="mono-label text-muted">{project.category}</p>
              <h3 className={`mt-10 font-semibold tracking-[-0.025em] ${featured ? "text-3xl" : "text-2xl"}`}>
                {/* Stretched button: the whole card opens the modal. */}
                <button type="button" onClick={onOpen} className="text-left after:absolute after:inset-0 after:z-[3] after:content-['']">
                  {project.title}
                </button>
              </h3>
              <p className="mt-1.5 text-muted">{project.tagline}</p>
              {featured && <p className="mt-5 text-pretty text-[15px] leading-relaxed">{project.bullets[0]}</p>}

              <motion.ul variants={tagList} className="mt-5 flex flex-wrap gap-1.5">
                {project.tags.map((t) => (
                  <motion.li
                    key={t}
                    variants={tagIn}
                    className="mono-label rounded-full border border-hairline px-2.5 py-1 text-[10px] text-muted"
                  >
                    {t}
                  </motion.li>
                ))}
              </motion.ul>

              <div className="relative z-[4] mt-auto flex flex-wrap gap-2 pt-7">
                {project.links.map((l) => (
                  <Magnetic key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mono-label inline-flex items-center gap-1.5 rounded-full border border-hairline bg-paper/60 px-3 py-1.5 text-ink transition-colors hover:border-accent/70"
                    >
                      {l.label}
                      <span aria-hidden="true">↗</span>
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      </motion.div>
    </motion.li>
  );
}
