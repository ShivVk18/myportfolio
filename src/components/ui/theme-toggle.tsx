"use client";

// Adapted from @pixel-ui/theme-toggle: circular reveal from the click point,
// restyled on the portfolio tokens (paper / ink / muted / hairline / accent).
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export type ThemeToggleProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  sound?: boolean;
};

function tick() {
  try {
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(1600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1000, ctx.currentTime + 0.04);
    gain.gain.setValueAtTime(0.035, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.04);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.onended = () => void ctx.close();
    osc.stop(ctx.currentTime + 0.06);
  } catch {
    // Audio blocked; the toggle still works silently.
  }
}

type VTDoc = Document & {
  startViewTransition?: (cb: () => void) => { ready: Promise<void>; finished: Promise<void> };
};

export function ThemeToggle({ className, onClick, sound = false, ...props }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    if (sound) tick();

    const next = resolvedTheme === "dark" ? "light" : "dark";
    // Swap the class synchronously so the transition snapshots the new theme; next-themes persists it.
    const apply = () => {
      const root = document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(next);
      root.style.colorScheme = next;
      setTheme(next);
    };

    const doc = document as VTDoc;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!doc.startViewTransition || reduce) {
      apply();
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX || rect.left + rect.width / 2;
    const y = event.clientY || rect.top + rect.height / 2;
    const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    const root = document.documentElement;
    root.classList.add("theme-reveal");
    const t = doc.startViewTransition(apply);
    t.ready
      .then(() =>
        root.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
          { duration: 560, easing: "cubic-bezier(0.22, 1, 0.36, 1)", pseudoElement: "::view-transition-new(root)" },
        ),
      )
      .catch(() => {});
    t.finished.finally(() => root.classList.remove("theme-reveal"));
  };

  return (
    <button
      type="button"
      data-slot="theme-toggle"
      aria-label="Toggle colour theme"
      onClick={toggleTheme}
      className={cn(
        "relative inline-flex size-8 items-center justify-center rounded-full border border-hairline text-muted transition-[color,rotate] duration-300 hover:rotate-12 hover:text-ink",
        className,
      )}
      {...props}
    >
      <Sun
        strokeWidth={1.75}
        className="size-4 rotate-0 scale-100 transition-transform duration-300 motion-reduce:transition-none dark:-rotate-90 dark:scale-0"
      />
      <Moon
        strokeWidth={1.75}
        className="absolute size-4 rotate-90 scale-0 transition-transform duration-300 motion-reduce:transition-none dark:rotate-0 dark:scale-100"
      />
    </button>
  );
}
