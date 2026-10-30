"use client";

import { motion } from "motion/react";
import { useThemeSwitch } from "@/lib/useThemeSwitch";
import { EASE } from "@/lib/motion";

// LIGHT / DARK — the active option gets an accent underline that slides between them.
export function ThemeToggle() {
  const { mounted, isDark, switchTo } = useThemeSwitch();
  const option = (value: "light" | "dark", active: boolean) => (
    <button
      type="button"
      onClick={() => switchTo(value)}
      aria-pressed={active}
      className={`relative py-0.5 transition-colors hover:text-ink ${active ? "text-ink" : "text-muted"}`}
    >
      {value}
      {active && (
        <motion.span
          layoutId="theme-underline"
          className="absolute inset-x-0 -bottom-px h-px bg-accent"
          transition={{ duration: 0.4, ease: EASE }}
        />
      )}
    </button>
  );
  return (
    <div role="group" aria-label="Color theme" className="mono-label flex items-center gap-1.5">
      {option("light", mounted && !isDark)}
      <span className="text-muted" aria-hidden="true">/</span>
      {option("dark", isDark)}
    </div>
  );
}
