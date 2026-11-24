"use client";

import { useEffect, useRef } from "react";

type Kind = "stars" | "snow";

type Star = { x: number; y: number; r: number; p: number; s: number };
type Flake = { x: number; y: number; r: number; vy: number; sway: number; p: number; a: number };

/**
 * Lightweight canvas overlay for the cover photo: twinkling stars (upper sky only) or a sparse,
 * slow snowfall. Stops drawing while off-screen; draws a single still frame when `paused`.
 */
export function ColdAir({ kind, paused = false }: { kind: Kind; paused?: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let w = 0;
    let h = 0;
    let stars: Star[] = [];
    let flakes: Flake[] = [];

    const seed = () => {
      const area = (w * h) / 10000;
      if (kind === "stars") {
        stars = Array.from({ length: Math.round(area * 1.6) }, () => ({
          x: Math.random() * w,
          y: Math.random() ** 1.6 * h * 0.32, // open sky only: denser near the top
          r: Math.random() < 0.08 ? 1.3 : 0.4 + Math.random() * 0.6,
          p: Math.random() * Math.PI * 2,
          s: 0.6 + Math.random() * 1.8,
        }));
      } else {
        flakes = Array.from({ length: Math.round(area * 0.9) }, () => ({
          x: Math.random() * w,
          y: Math.random() * h,
          r: 0.6 + Math.random() * 1.8,
          vy: 10 + Math.random() * 22,
          sway: 6 + Math.random() * 14,
          p: Math.random() * Math.PI * 2,
          a: 0.35 + Math.random() * 0.5,
        }));
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const draw = (t: number, dt: number) => {
      ctx.clearRect(0, 0, w, h);
      if (kind === "stars") {
        for (const s of stars) {
          const tw = 0.55 + 0.45 * Math.sin(t * s.s + s.p);
          ctx.globalAlpha = tw * (1 - s.y / (h * 0.36)); // fade toward the horizon
          ctx.fillStyle = "#eaf2ff";
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
          ctx.fill();
        }
      } else {
        ctx.fillStyle = "#f4f8ff";
        for (const f of flakes) {
          f.y += f.vy * dt;
          if (f.y > h + 4) {
            f.y = -4;
            f.x = Math.random() * w;
          }
          ctx.globalAlpha = f.a;
          ctx.beginPath();
          ctx.arc(f.x + Math.sin(t * 0.8 + f.p) * f.sway, f.y, f.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let raf = 0;
    let last = 0;
    let visible = true;
    const loop = (now: number) => {
      const dt = last ? Math.min((now - last) / 1000, 0.05) : 0;
      last = now;
      draw(now / 1000, dt);
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (paused || raf || !visible) return;
      last = 0;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) start();
      else stop();
    });
    io.observe(canvas);

    if (paused) draw(0, 0);
    else start();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
    };
  }, [kind, paused]);

  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 size-full" />;
}
