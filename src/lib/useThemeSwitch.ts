"use client";

import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";

type ViewTransitionDoc = Document & { startViewTransition?: (cb: () => void) => unknown };

// Theme switch that cross-fades the whole page via the View Transitions API.
export function useThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  const switchTo = useCallback(
    (next: "light" | "dark") => {
      const apply = () => {
        // Apply the class synchronously so the transition snapshots the new theme;
        // next-themes then persists it to localStorage.
        const root = document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(next);
        root.style.colorScheme = next;
        setTheme(next);
      };
      const doc = document as ViewTransitionDoc;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!doc.startViewTransition || reduce) apply();
      else doc.startViewTransition(apply);
    },
    [setTheme],
  );

  const toggle = useCallback(() => switchTo(isDark ? "light" : "dark"), [isDark, switchTo]);

  return { mounted, isDark, switchTo, toggle };
}
