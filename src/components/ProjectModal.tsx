"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import type { Project } from "@/data/projects";
import { EASE } from "@/lib/motion";
import { lockScroll } from "@/lib/scroll";
import { useFocusTrap } from "@/lib/useFocusTrap";
import { ProjectVisual } from "./ProjectVisual";
import { ExternalLink } from "./ExternalLink";

type Props = { project: Project; onClose: () => void };

// Expanded card. Shares layoutId with its card so it grows out of it.
export function ProjectModal({ project, onClose }: Props) {
  const panel = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  useFocusTrap(panel, true, onClose);

  useEffect(() => {
    lockScroll(true);
    closeBtn.current?.focus({ preventScroll: true });
    return () => lockScroll(false);
  }, []);

  return (
    <div className="fixed inset-0 z-[95] flex items-center justify-center p-4 sm:p-8" onClick={onClose}>
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-paper/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
      />
      <motion.article
        ref={panel}
        layoutId={`project-${project.slug}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`modal-${project.slug}`}
        onClick={(e) => e.stopPropagation()}
        transition={{ duration: 0.55, ease: EASE }}
        className="relative flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-hairline bg-card"
      >
        <div className="relative aspect-[16/10] max-h-[38vh] w-full shrink-0 overflow-hidden border-b border-hairline">
          <ProjectVisual project={project} sizes="(max-width: 768px) 92vw, 672px" />
        </div>
        <motion.div
          className="overflow-y-auto p-6 sm:p-8"
          data-lenis-prevent
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5, ease: EASE } }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
        >
          <div className="mono-label flex items-center justify-between text-muted">
            <span className="tabular-nums">
              {project.index} · {project.category}
            </span>
            <button ref={closeBtn} type="button" onClick={onClose} className="mono-label hover:text-ink">
              Esc ×<span className="sr-only"> Close</span>
            </button>
          </div>
          <h3 id={`modal-${project.slug}`} className="mt-5 text-2xl font-semibold tracking-[-0.02em]">
            {project.title}
          </h3>
          <p className="mt-1 text-muted">{project.tagline}</p>
          <ul className="mt-6 space-y-3">
            {project.bullets.map((b) => (
              <li key={b} className="relative pl-5">
                <span aria-hidden="true" className="absolute left-0 top-[0.7em] h-px w-2.5 bg-accent" />
                {b}
              </li>
            ))}
          </ul>
          <ul className="mt-6 flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <li key={t} className="mono-label rounded-full border border-hairline px-2.5 py-1 text-[10px] text-muted">
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-1">
            {project.links.map((l) => (
              <ExternalLink key={l.href} href={l.href}>
                {l.label}
              </ExternalLink>
            ))}
          </div>
        </motion.div>
      </motion.article>
    </div>
  );
}
