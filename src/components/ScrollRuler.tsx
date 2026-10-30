"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import { sections } from "@/data/profile";
import { scrollToId } from "@/lib/scroll";

const MINOR = 100; // one tick per 1%
const MAGNIFY = 0.045; // how far (in progress) the magnify effect reaches

/** Minor tick that grows as the needle passes. */
function Tick({ at, progress }: { at: number; progress: MotionValue<number> }) {
  const scaleX = useTransform(progress, (p) => 1 + 1.4 * Math.max(0, 1 - Math.abs(p - at) / MAGNIFY));
  return (
    <motion.span
      className="absolute right-0 h-px w-2 origin-right bg-muted/50"
      style={{ top: `${at * 100}%`, scaleX }}
    />
  );
}

/** Where each section starts, as a fraction of total scroll. */
function useSectionStops() {
  const [stops, setStops] = useState<number[]>(() => sections.map((_, i) => i / sections.length));
  useEffect(() => {
    const measure = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      setStops(
        sections.map((s) => {
          const el = document.getElementById(s.id);
          if (!el) return 0;
          const top = el.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.35;
          return Math.min(1, Math.max(0, top / max));
        }),
      );
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);
    return () => ro.disconnect();
  }, []);
  return stops;
}

/** Index of the section crossing the middle band of the viewport. */
function useActiveSection() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(sections.findIndex((s) => s.id === e.target.id));
        }
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return active;
}

export function ScrollRuler() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.4 });
  const needleY = useTransform(progress, (p) => `${p * 100}%`);
  const readout = useTransform(progress, (p) => `${String(Math.round(p * 100)).padStart(3, "0")}%`);
  const stops = useSectionStops();
  const active = useActiveSection();

  return (
    <>
      {/* Mobile / tablet: 2px progress bar. */}
      <motion.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[80] h-0.5 origin-left bg-accent lg:hidden"
        style={{ scaleX: progress }}
      />

      <nav
        aria-label="Page sections"
        className="group pointer-events-none fixed right-14 top-[20vh] z-[70] hidden h-[60vh] w-40 lg:block"
      >
        <div className="pointer-events-auto absolute inset-y-0 right-[-8px] w-10" aria-hidden="true" />

        {/* Track is inset so labels at 0% and 100% stay inside the ruler. */}
        <div className="absolute inset-x-0 inset-y-4">
          {/* Spine + minor ticks */}
          <div aria-hidden="true" className="absolute inset-y-0 right-0 w-4">
            <span className="absolute inset-y-0 right-0 w-px bg-hairline" />
            {Array.from({ length: MINOR + 1 }, (_, i) => (
              <Tick key={i} at={i / MINOR} progress={progress} />
            ))}
          </div>

          {/* Major ticks + labels (left of the ticks) */}
          <ol>
            {sections.map((s, i) => {
              const isActive = i === active;
              return (
                <li key={s.id} className="absolute right-0" style={{ top: `${stops[i] * 100}%` }}>
                  <span
                    aria-hidden="true"
                    className={`absolute right-0 h-px w-4 ${isActive ? "bg-accent" : "bg-ink/60"}`}
                  />
                  <button
                    type="button"
                    onClick={() => scrollToId(s.id)}
                    aria-current={isActive ? "true" : undefined}
                    className={`mono-label absolute right-7 -translate-y-1/2 whitespace-nowrap rounded bg-paper/85 px-1.5 transition-opacity duration-300 ${
                      isActive
                        ? "pointer-events-auto text-accent-text opacity-100"
                        : "pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-35 hover:!opacity-100 focus-visible:pointer-events-auto focus-visible:opacity-100"
                    }`}
                  >
                    {s.number} {s.name}
                  </button>
                </li>
              );
            })}
          </ol>

          {/* Needle; the % readout sits on the opposite (right) side of the ticks so it never meets a label. */}
          <motion.div aria-hidden="true" className="absolute inset-x-0 top-0 h-full" style={{ y: needleY }}>
            <span className="absolute right-0 h-0.5 w-7 -translate-y-1/2 bg-accent" />
            <span className="absolute right-[1.85rem] size-1.5 -translate-y-1/2 rounded-full bg-accent" />
            <motion.span className="mono-label absolute left-[calc(100%+10px)] -translate-y-1/2 tabular-nums text-muted">
              {readout}
            </motion.span>
          </motion.div>
        </div>

        <p aria-hidden="true" className="mono-label absolute -bottom-6 right-0 tabular-nums text-muted">
          {sections[active]?.number} / {sections[sections.length - 1].number}
        </p>
      </nav>
    </>
  );
}
