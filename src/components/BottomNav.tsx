"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Briefcase, FileText, House, LayoutGrid, Layers, Mail, type LucideIcon } from "lucide-react";
import { links } from "@/data/links";
import { sections, type SectionId } from "@/data/profile";
import { EASE } from "@/lib/motion";
import { scrollToId } from "@/lib/scroll";

const ICONS: Record<SectionId, LucideIcon> = {
  experience: Briefcase,
  work: LayoutGrid,
  stack: Layers,
  contact: Mail,
};

const items = [
  { id: "top", name: "Home", Icon: House },
  ...sections.map((s) => ({ id: s.id, name: s.name, Icon: ICONS[s.id] })),
];

/** Id of the item whose target crosses the middle band of the viewport. */
function useActiveItem() {
  const [active, setActive] = useState("top");
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return active;
}

/**
 * Small rounded horizontal nav, pinned to the bottom and centred on the content column.
 */
export function BottomNav() {
  const active = useActiveItem();

  return (
    <motion.nav
      aria-label="Primary"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
      // The content column is centred on the page, so centring on the viewport centres it on the column too.
      className="pointer-events-none fixed inset-x-0 bottom-5 z-[75] flex justify-center px-4"
    >
      <ul className="pointer-events-auto flex gap-1 rounded-2xl border border-hairline bg-card/80 p-1.5 shadow-[0_8px_30px_-12px_rgb(0_0_0/0.18)] backdrop-blur-md">
        {items.map(({ id, name, Icon }) => {
          const isActive = active === id;
          return (
            <li key={id} className="group relative">
              <button
                type="button"
                onClick={() => scrollToId(id)}
                aria-label={name}
                aria-current={isActive ? "true" : undefined}
                className={`relative flex size-9 items-center justify-center rounded-xl transition-colors duration-300 ${
                  isActive ? "text-paper" : "text-muted hover:text-ink"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="bottomnav-active"
                    aria-hidden="true"
                    className="absolute inset-0 rounded-xl bg-ink"
                    transition={{ duration: 0.45, ease: EASE }}
                  />
                )}
                <Icon strokeWidth={1.75} className="relative size-4" />
              </button>
              {/* Hover label above the icon (mouse only). */}
              <span
                aria-hidden="true"
                className="mono-label pointer-events-none absolute bottom-full left-1/2 mb-3 hidden -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md bg-ink px-2 py-1 text-paper opacity-0 transition-[opacity,translate] duration-200 group-hover:translate-y-0 group-hover:opacity-100 can-hover:block"
              >
                {name}
              </span>
            </li>
          );
        })}
        <li aria-hidden="true" className="mx-1 my-2 w-px bg-hairline" />
        <li className="group relative">
          <Link
            href={links.resume}
            aria-label="Resume"
            className="relative flex size-9 items-center justify-center rounded-xl text-muted transition-colors duration-300 hover:text-ink"
          >
            <FileText strokeWidth={1.75} className="size-4" />
          </Link>
          <span
            aria-hidden="true"
            className="mono-label pointer-events-none absolute bottom-full left-1/2 mb-3 hidden -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md bg-ink px-2 py-1 text-paper opacity-0 transition-[opacity,translate] duration-200 group-hover:translate-y-0 group-hover:opacity-100 can-hover:block"
          >
            Resume
          </span>
        </li>
      </ul>
    </motion.nav>
  );
}
