"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { cover } from "@/data/profile";
import { EASE, rise } from "@/lib/motion";

const GLOW = 520;

export function Cover() {
  const wrap = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const words = cover.headline;

  // Parallax: drifts down and shrinks slightly as the page scrolls past it.
  const { scrollYProgress } = useScroll({ target: wrap, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  // Cursor glow, spring-smoothed.
  const gx = useMotionValue(0);
  const gy = useMotionValue(0);
  const glowX = useSpring(gx, { stiffness: 90, damping: 20 });
  const glowY = useSpring(gy, { stiffness: 90, damping: 20 });

  useEffect(() => {
    const r = wrap.current?.getBoundingClientRect();
    if (!r) return;
    gx.jump(r.width * 0.72 - GLOW / 2);
    gy.jump(r.height * 0.35 - GLOW / 2);
  }, [gx, gy]);

  const onMove = (e: React.PointerEvent) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    gx.set(e.clientX - r.left - GLOW / 2);
    gy.set(e.clientY - r.top - GLOW / 2);
  };

  // After the words land, the highlight loops BUILD → SHIP → APPLY → REPEAT.
  const [active, setActive] = useState(-1);
  useEffect(() => {
    let loop: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      setActive(0);
      loop = setInterval(() => setActive((a) => (a + 1) % words.length), 1600);
    }, 1400);
    return () => {
      clearTimeout(start);
      clearInterval(loop);
    };
  }, [words.length]);

  const activeWord = active >= 0 ? words[active].replace(/\W/g, "") : "";

  return (
    <div ref={wrap}>
      <motion.div style={reduce ? undefined : { y, scale }} className="origin-top">
        <motion.div
          {...rise(0, { y: 24 })}
          onPointerMove={onMove}
          className="blueprint relative h-[300px] overflow-hidden rounded-2xl border border-hairline bg-card sm:h-[340px]"
        >
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 rounded-full"
            style={{
              x: glowX,
              y: glowY,
              width: GLOW,
              height: GLOW,
              background: "radial-gradient(circle, rgb(232 100 60 / 0.16), transparent 62%)",
            }}
          />

          <div className="mono-label absolute right-5 top-4 flex gap-3 text-muted tabular-nums" aria-hidden="true">
            <span>{active >= 0 ? String(active + 1).padStart(2, "0") : "--"} / {String(words.length).padStart(2, "0")}</span>
            <span className="w-14 text-accent-text">{activeWord}</span>
          </div>

          <div className="grid-12 relative h-full content-center px-5 pb-8 sm:px-8 lg:px-0">
            <p className="col-content text-[clamp(2.6rem,7.4vw,5.75rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
              <span className="sr-only">{words.join(" ")}</span>
              <span aria-hidden="true" className="flex flex-wrap gap-x-[0.26em]">
                {words.map((w, i) => (
                  <span key={w} className="relative inline-block overflow-hidden pb-[0.14em]">
                    <motion.span
                      className="relative inline-block"
                      initial={reduce ? { opacity: 0 } : { y: "105%" }}
                      animate={reduce ? { opacity: 1 } : { y: 0 }}
                      transition={{ duration: 0.8, ease: EASE, delay: 0.25 + i * 0.12 }}
                    >
                      {w}
                      <motion.span
                        className="absolute inset-0 text-accent"
                        initial={false}
                        animate={{ opacity: active === i ? 1 : 0 }}
                        transition={{ duration: 0.4, ease: EASE }}
                      >
                        {w}
                      </motion.span>
                    </motion.span>
                    {active === i && (
                      <motion.span
                        layoutId="cover-underline"
                        className="absolute bottom-[0.06em] left-0 h-[3px] w-[calc(100%-0.25em)] bg-accent"
                        transition={{ duration: 0.6, ease: EASE }}
                      />
                    )}
                  </span>
                ))}
              </span>
            </p>
          </div>

          <div className="absolute inset-x-0 bottom-0 overflow-hidden border-t border-hairline bg-paper/70 py-2" aria-hidden="true">
            <motion.div
              className="mono-label flex w-max text-muted"
              animate={reduce ? undefined : { x: ["0%", "-50%"] }}
              transition={{ duration: 32, ease: "linear", repeat: Infinity }}
            >
              {[0, 1].map((half) => (
                <span key={half} className="flex shrink-0">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className="whitespace-nowrap px-3">
                      {cover.marquee}
                    </span>
                  ))}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
