"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { projects } from "@/data/projects";
import { VIEWPORT, staggerParent } from "@/lib/motion";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

// Card 01 is featured full-width; the rest pair up below it.
export function Work() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const close = useCallback(() => setOpenSlug(null), []);
  const open = projects.find((p) => p.slug === openSlug);

  return (
    <>
      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        variants={staggerParent(0.12)}
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        {projects.map((p, i) => (
          <ProjectCard
            key={p.slug}
            project={p}
            featured={i === 0}
            hidden={p.slug === openSlug}
            onOpen={() => setOpenSlug(p.slug)}
          />
        ))}
      </motion.ul>
      <AnimatePresence>{open && <ProjectModal key={open.slug} project={open} onClose={close} />}</AnimatePresence>
    </>
  );
}
