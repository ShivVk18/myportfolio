"use client";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const next = isDark ? "light" : "dark";

    // CSS View Transitions API — radial wipe from click point
    if (
      typeof document !== "undefined" &&
      "startViewTransition" in document
    ) {
      const x = e.clientX;
      const y = e.clientY;
      const maxR = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      // Inject the keyframe for THIS click position dynamically
      const styleId = "__vt-style__";
      let el = document.getElementById(styleId) as HTMLStyleElement | null;
      if (!el) {
        el = document.createElement("style");
        el.id = styleId;
        document.head.appendChild(el);
      }
      el.textContent = `
        ::view-transition-old(root) {
          animation: none;
          mix-blend-mode: normal;
        }
        ::view-transition-new(root) {
          animation: vt-clip-in 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
          clip-path: circle(0px at ${x}px ${y}px);
        }
        @keyframes vt-clip-in {
          to { clip-path: circle(${maxR}px at ${x}px ${y}px); }
        }
      `;

      // @ts-expect-error — startViewTransition is not yet in TS DOM lib
      document.startViewTransition(() => setTheme(next));
    } else {
      setTheme(next);
    }
  };

  if (!mounted) {
    return (
      <button
        className="p-2.5 rounded-xl text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 w-9 h-9"
        aria-label="Toggle theme"
      />
    );
  }

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="relative p-2.5 rounded-xl text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 overflow-hidden w-9 h-9 flex items-center justify-center"
      data-cursor="pointer"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute"
          >
            <Moon className="w-[1.1rem] h-[1.1rem]" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute"
          >
            <Sun className="w-[1.1rem] h-[1.1rem]" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
