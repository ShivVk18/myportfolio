"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { rise } from "@/lib/motion";
import { ColdAir } from "./ColdAir";

// Same scene, same framing; night is the original. Photo: Maximus Mazar on Unsplash (unsplash.com/photos/IED7T01FDDI), colour-graded.
const DAY_SRC = "/images/cover/day.jpg";
const NIGHT_SRC = "/images/cover/night.jpg";

const FADE_MS = 1800;
const EASE_CSS = "cubic-bezier(0.45, 0, 0.2, 1)";

/** Fires `onChange(isDark)` the moment the `dark` class on <html> flips (i.e. on every theme switch). */
function useThemeFlip(onChange: (dark: boolean) => void) {
  const cb = useRef(onChange);
  useEffect(() => {
    cb.current = onChange;
  });
  useEffect(() => {
    const root = document.documentElement;
    let dark = root.classList.contains("dark");
    const mo = new MutationObserver(() => {
      const next = root.classList.contains("dark");
      if (next !== dark) cb.current((dark = next));
    });
    mo.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => mo.disconnect();
  }, []);
}

export function Cover() {
  const wrap = useRef<HTMLDivElement>(null);
  const night = useRef<HTMLDivElement>(null);
  const dusk = useRef<HTMLDivElement>(null);
  const stars = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [missing, setMissing] = useState(false);

  // Parallax: drifts down and shrinks slightly as the page scrolls past it.
  const { scrollYProgress } = useScroll({ target: wrap, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  // The photo leans gently away from the cursor.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const imgX = useSpring(px, { stiffness: 60, damping: 20 });
  const imgY = useSpring(py, { stiffness: 60, damping: 20 });
  const onMove = (e: React.PointerEvent) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set(((e.clientX - r.left) / r.width - 0.5) * -18);
    py.set(((e.clientY - r.top) / r.height - 0.5) * -10);
  };
  const onLeave = () => {
    px.set(0);
    py.set(0);
  };

  // Day ⇄ night. Before the first switch the layers follow the `dark:` classes (correct on first paint);
  // on a switch, WAAPI takes over (next-themes disables CSS transitions during the change).
  useThemeFlip((dark) => {
    const ms = reduce ? 0 : FADE_MS;
    const fill = "forwards" as const;
    night.current?.animate({ opacity: dark ? [0, 1] : [1, 0] }, { duration: ms, easing: EASE_CSS, fill });
    // Stars come out late at dusk and go first at dawn.
    stars.current?.animate(
      { opacity: dark ? [0, 1] : [1, 0] },
      { duration: ms * 0.6, delay: dark ? ms * 0.5 : 0, easing: EASE_CSS, fill },
    );
    // A cold blue-violet twilight washes over the middle of the change.
    if (ms) dusk.current?.animate({ opacity: [0, 0.55, 0] }, { duration: ms, easing: "ease-in-out" });
  });

  return (
    <div ref={wrap}>
      <motion.div style={reduce ? undefined : { y, scale }} className="origin-top">
        <motion.div
          {...rise(0, { y: 24 })}
          onPointerMove={onMove}
          onPointerLeave={onLeave}
          role="img"
          aria-label="A small wooden cabin in a snowy pine forest: a cold, crisp winter day in light mode, a starry night with the cabin lit up in dark mode."
          className="relative h-[300px] overflow-hidden rounded-2xl border border-hairline bg-[#0b1630] sm:h-[400px]"
        >
          {/* Placeholder sky until the photos exist. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-[#8fb8d8] via-[#d6e6f2] to-[#eef4f9] dark:from-[#030712] dark:via-[#0b1a3a] dark:to-[#1c2c4a]"
          />

          <motion.div
            aria-hidden="true"
            className={`absolute -inset-4 ${reduce ? "" : "cover-drift"}`}
            style={reduce ? undefined : { x: imgX, y: imgY }}
          >
            {!missing && (
              <>
                <Image
                  src={DAY_SRC}
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1180px) 1180px, 100vw"
                  className="object-cover object-[50%_82%]"
                  onError={() => setMissing(true)}
                />
                <div ref={night} className="absolute inset-0 opacity-0 dark:opacity-100">
                  <Image
                    src={NIGHT_SRC}
                    alt=""
                    fill
                    priority
                    sizes="(min-width: 1180px) 1180px, 100vw"
                    className="object-cover object-[50%_82%]"
                    onError={() => setMissing(true)}
                  />
                </div>
              </>
            )}
          </motion.div>

          <div
            ref={dusk}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-0 mix-blend-multiply"
            style={{ background: "linear-gradient(180deg, #3b3f8f 0%, #6a6fb8 45%, #9fb3d9 100%)" }}
          />

          <div ref={stars} aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-0 dark:opacity-100">
            <ColdAir kind="stars" paused={!!reduce} />
          </div>
          <ColdAir kind="snow" paused={!!reduce} />

          {/* Cool vignette keeps the edges calm and the avatar corner readable. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(120% 90% at 55% 40%, transparent 55%, rgb(8 18 40 / 0.35) 100%)" }}
          />

          {missing && process.env.NODE_ENV === "development" && (
            <p className="mono-label absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[#0b1630]/70 dark:text-white/70">
              Add public/images/cover/day.jpg + night.jpg
            </p>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
