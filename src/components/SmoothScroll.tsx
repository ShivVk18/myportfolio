"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { cancelFrame, frame, useReducedMotion } from "motion/react";
import { setLenis } from "@/lib/scroll";

// Lenis smooth scroll, driven by Motion's frame loop so scroll-linked animations stay in sync.
export function SmoothScroll() {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const lenis = new Lenis({ autoRaf: false, anchors: { offset: -32 }, lerp: 0.12 });
    setLenis(lenis);
    const update = ({ timestamp }: { timestamp: number }) => lenis.raf(timestamp);
    frame.update(update, true);
    return () => {
      cancelFrame(update);
      lenis.destroy();
      setLenis(null);
    };
  }, [reduce]);

  return null;
}
