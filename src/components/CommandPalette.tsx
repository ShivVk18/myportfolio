"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Command } from "cmdk";
import { AnimatePresence, motion } from "motion/react";
import { sections } from "@/data/profile";
import { links } from "@/data/links";
import { projects } from "@/data/projects";
import { EASE } from "@/lib/motion";
import { lockScroll, scrollToId } from "@/lib/scroll";
import { useCopy } from "@/lib/useCopy";
import { useFocusTrap } from "@/lib/useFocusTrap";
import { useThemeSwitch } from "@/lib/useThemeSwitch";

const OPEN_EVENT = "palette:open";

const isTyping = (t: EventTarget | null) =>
  t instanceof HTMLElement && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName));

const openUrl = (href: string) => window.open(href, "_blank", "noopener,noreferrer");

/** "⌘K" hint in the identity row; opens the palette on click. */
export function PaletteHint() {
  const [mac, setMac] = useState(true);
  useEffect(() => setMac(/Mac|iPhone|iPad/.test(navigator.userAgent)), []);
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
      aria-label="Open command menu"
      className="mono-label hidden rounded border border-hairline px-1.5 py-0.5 text-muted transition-colors hover:text-ink can-hover:inline-block"
    >
      {mac ? "⌘K" : "Ctrl K"}
    </button>
  );
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const { toggle: toggleTheme } = useThemeSwitch();
  const { copied, copy } = useCopy(900);
  const close = useCallback(() => setOpen(false), []);
  useFocusTrap(panel, open, close);

  useEffect(() => {
    lockScroll(open);
  }, [open]);

  // ⌘K / Ctrl+K, plus "g + key" section jumps and "t" for theme.
  useEffect(() => {
    let gAt = 0;
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
        return;
      }
      if (open || e.metaKey || e.ctrlKey || e.altKey || isTyping(e.target)) return;
      if (document.querySelector("[aria-modal='true']")) return;
      const key = e.key.toLowerCase();
      const target = sections.find((s) => s.key === key);
      if (gAt && Date.now() - gAt < 1000 && target) {
        gAt = 0;
        scrollToId(target.id);
      } else if (key === "g") {
        gAt = Date.now();
      } else {
        gAt = 0;
        if (key === "t") toggleTheme();
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_EVENT, onOpen);
    };
  }, [open, toggleTheme]);

  const run = (fn: () => void) => {
    setOpen(false);
    // Let the palette unlock scroll before jumping.
    requestAnimationFrame(fn);
  };

  const item =
    "flex cursor-pointer items-center justify-between gap-4 rounded-lg px-3 py-2.5 text-[15px] data-[selected=true]:bg-ink/[0.06]";
  const group =
    "[&_[cmdk-group-heading]]:mono-label [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pb-1.5 [&_[cmdk-group-heading]]:pt-3 [&_[cmdk-group-heading]]:text-muted";
  const hint = "mono-label shrink-0 text-muted";
  const liveProjects = projects.flatMap((p) => p.links.filter((l) => l.label === "Live").map((l) => ({ p, href: l.href })));

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[98] flex items-start justify-center px-4 pt-[16vh]">
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 bg-paper/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            onClick={close}
          />
          <motion.div
            ref={panel}
            role="dialog"
            aria-modal="true"
            aria-label="Command menu"
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -4 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="relative w-full max-w-[560px] overflow-hidden rounded-2xl border border-hairline bg-card"
          >
            <Command label="Command menu" loop>
              <div className="flex items-center gap-3 border-b border-hairline px-4">
                <span className="mono-label text-accent-text" aria-hidden="true">›</span>
                <Command.Input
                  autoFocus
                  placeholder="Jump to, toggle, copy…"
                  className="w-full bg-transparent py-4 text-[15px] outline-none placeholder:text-muted"
                />
                <kbd className={hint}>Esc</kbd>
              </div>
              <Command.List className="max-h-[52vh] overflow-y-auto p-2" data-lenis-prevent>
                <Command.Empty className="px-3 py-8 text-center text-muted">No results.</Command.Empty>
                <Command.Group heading="Jump to" className={group}>
                  {sections.map((s) => (
                    <Command.Item key={s.id} value={`jump ${s.name}`} onSelect={() => run(() => scrollToId(s.id))} className={item}>
                      <span>
                        <span className="mono-label mr-3 text-muted">{s.number}</span>
                        {s.name}
                      </span>
                      <kbd className={hint}>g {s.key}</kbd>
                    </Command.Item>
                  ))}
                </Command.Group>
                <Command.Group heading="Actions" className={group}>
                  <Command.Item value="toggle theme light dark" onSelect={() => run(toggleTheme)} className={item}>
                    Toggle theme <kbd className={hint}>t</kbd>
                  </Command.Item>
                  <Command.Item
                    value="copy email"
                    onSelect={() => {
                      copy(links.email);
                      setTimeout(close, 700);
                    }}
                    className={item}
                  >
                    Copy email
                    <span className={copied ? "mono-label text-accent-text" : hint}>{copied ? "Copied ✓" : links.email}</span>
                  </Command.Item>
                </Command.Group>
                <Command.Group heading="Open" className={group}>
                  {[
                    { label: "GitHub", href: links.github },
                    { label: "LinkedIn", href: links.linkedin },
                    { label: "Resume", href: links.resume },
                  ].map((l) => (
                    <Command.Item key={l.label} value={`open ${l.label}`} onSelect={() => run(() => openUrl(l.href))} className={item}>
                      {l.label} <span className={hint}>↗</span>
                    </Command.Item>
                  ))}
                  {liveProjects.map(({ p, href }) => (
                    <Command.Item key={href} value={`open ${p.title} live`} onSelect={() => run(() => openUrl(href))} className={item}>
                      {p.title} — live <span className={hint}>↗</span>
                    </Command.Item>
                  ))}
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
