"use client";

import { useEffect, useRef } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import type { Job } from "@/data/experience";
import { EASE, fadeUp } from "@/lib/motion";

function CountUp({ stat }: { stat: NonNullable<Job["stat"]> }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const mv = useMotionValue(0);
  const text = useTransform(mv, (v) => `${stat.prefix ?? ""}${Math.round(v)}${stat.suffix ?? ""}`);
  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      mv.set(stat.value);
      return;
    }
    const c = animate(mv, stat.value, { duration: 1.4, ease: EASE, delay: 0.2 });
    return () => c.stop();
  }, [inView, mv, reduce, stat.value]);
  return (
    <motion.span ref={ref} className="tabular-nums">
      {text}
    </motion.span>
  );
}

const bulletList = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } } };
const bulletIn = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.5, ease: EASE } } };
const arrowIn = { hidden: { x: -10, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: 0.5, ease: EASE } } };

type Props = { job: Job; index: number; open: boolean; lit: boolean; onToggle: () => void };

export const NODE_TOP = 9; // px from row top to the node centre; the timeline uses it too.

export function ExperienceItem({ job, index, open, lit, onToggle }: Props) {
  const panelId = `job-panel-${index}`;
  return (
    <motion.li variants={fadeUp()} data-row className="kv group/row relative py-3">
      {/* Accent tint sweeps in from the left on hover. Bleeds past the text so alignment is untouched. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-4 inset-y-0 origin-left scale-x-0 rounded-xl bg-accent/[0.04] transition-transform duration-500 ease-out-expo group-hover/row:scale-x-100"
      />

      {/* Timeline node: hollow until the fill line reaches it. */}
      <span
        aria-hidden="true"
        className="absolute left-[calc(var(--kv)+0.75rem)] hidden -translate-x-1/2 -translate-y-1/2 sm:block"
        style={{ top: `calc(0.75rem + ${NODE_TOP}px)` }}
      >
        {lit && <span className="pulse-ring absolute inset-0 rounded-full bg-accent" />}
        <span
          className={`relative block size-[9px] rounded-full border transition-colors duration-300 ${
            lit ? "border-accent bg-accent" : "border-muted bg-paper"
          }`}
        />
      </span>

      <p className="mono-label relative pt-1 tabular-nums text-muted">{job.period}</p>
      <div className="relative">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="group flex w-full items-baseline justify-between gap-4 text-left"
        >
          <span className="text-lg">
            <span className="font-medium">{job.role}</span>
            <span className="text-muted"> · {job.company}</span>
            <span className="mono-label ml-2 align-[2px] text-muted">{job.mode}</span>
          </span>
          <motion.span
            aria-hidden="true"
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className={`font-mono text-xl leading-none ${open ? "text-accent" : "text-muted group-hover:text-ink"}`}
          >
            +
          </motion.span>
          <span className="sr-only">{open ? "Collapse" : "Expand"}</span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              key="panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.55, ease: EASE }}
              className="overflow-hidden"
            >
              <div className="pb-3 pt-3">
                {job.companyFull && <p className="text-sm text-muted">{job.companyFull}</p>}
                {job.stat && (
                  <p className="mt-6 flex flex-wrap items-end gap-x-4 gap-y-1">
                    <span className="text-[64px] font-semibold leading-[0.9] tracking-[-0.05em] text-accent-text">
                      <CountUp stat={job.stat} />
                    </span>
                    <span className="mono-label pb-1.5 text-muted">{job.stat.label}</span>
                  </p>
                )}
                <motion.ul initial="hidden" animate="show" variants={bulletList} className="mt-6 space-y-3">
                  {job.bullets.map((b) => (
                    <motion.li key={b} variants={bulletIn} className="relative pl-6 text-muted">
                      <motion.span variants={arrowIn} aria-hidden="true" className="absolute left-0 top-0 text-accent">
                        →
                      </motion.span>
                      {b}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.li>
  );
}
