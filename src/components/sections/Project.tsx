"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { ascendai, emptrack, splitmates } from "../../../public/images";

/* ---------------- TYPES ---------------- */

type Project = {
  title: string;
  description: string;
  image: StaticImageData;
  techStack: string[];
  links: { label: string; url: string }[];
  content: React.ReactNode;
};

/* ---------------- COMPONENT ---------------- */

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useOutsideClick(ref, () => setActive(null));

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "auto";
  }, [active]);

  return (
    <section className="relative w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center mb-16"
        >
          <span className="text-xs font-bold tracking-widest text-primary uppercase mb-3">
            03. Portfolio
          </span>
          <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground mb-4">
            Featured Projects
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
        </motion.div>

        {/* Overlay */}
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-md"
            />
          )}
        </AnimatePresence>

        {/* Expanded Modal */}
        <AnimatePresence>
          {active && (
            <div className="fixed inset-0 z-50 grid place-items-center px-4 py-8">
              <motion.div
                ref={ref}
                layoutId={`card-${active.title}-${id}`}
                className="
                  w-full max-w-3xl
                  max-h-[90vh] overflow-y-auto
                  rounded-2xl
                  bg-card shadow-2xl
                  border border-border/50
                "
              >
                <div className="relative w-full aspect-video border-b border-border/30">
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Close button */}
                  <button 
                    onClick={() => setActive(null)}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-background/50 backdrop-blur-md border border-border text-foreground hover:bg-background transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="p-6 sm:p-8 space-y-6">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                      {active.title}
                    </h2>
                    <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                      {active.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {active.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-medium rounded-md bg-secondary text-secondary-foreground border border-border/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Content */}
                  <div className="text-sm sm:text-base leading-relaxed space-y-4 text-muted-foreground">
                    {active.content}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4 pt-6 border-t border-border/30">
                    {active.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          px-6 py-2.5 rounded-full font-medium shadow-sm transition-all
                          bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_15px_var(--color-primary)]
                          text-sm flex items-center gap-2
                        "
                      >
                        {link.label}
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layoutId={`card-${project.title}-${id}`}
              onClick={() => setActive(project)}
              className="
                group cursor-pointer rounded-2xl overflow-hidden
                bg-card/50 backdrop-blur-sm
                border border-border shadow-sm
                hover:border-primary/50 hover:shadow-[0_10px_40px_-10px_var(--color-primary)]
                transition-all duration-300 flex flex-col h-full
              "
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-10 transition-opacity duration-300 mix-blend-overlay" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-3 flex-grow line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-6 flex items-center text-sm font-semibold text-primary">
                  View Case Study
                  <motion.svg 
                    className="w-4 h-4 ml-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </motion.svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- DATA ---------------- */

const projects: Project[] = [
  {
    title: "AscendAI — AI Career Coach",
    description:
      "AI-powered platform for career roadmaps, resumes, and interview prep.",
    image: ascendai,
    techStack: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Gemini API",
      "OpenAI",
      "Clerk",
      "Inngest",
      "shadcn/ui",
      "Tailwind",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/ShivVk18/ai-career-buddy" },
    ],
    content: (
      <>
        <p>
          Built an AI-driven career coaching platform that generates
          personalized career roadmaps and resumes using real job postings.
        </p>
        <p>
          Integrated mock interviews with AI feedback to improve performance.
        </p>
      </>
    ),
  },
  {
    title: "Employee Management System",
    description:
      "Secure RBAC-based system for employee & payroll management.",
    image: emptrack,
    techStack: [
      "React",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "shadcn/ui",
      "Tailwind",
    ],
    links: [
      { label: "Backend", url: "https://github.com/ShivVk18/empTrack-backend" },
      { label: "Frontend", url: "https://github.com/ShivVk18/EmpTrack-frontend" },
    ],
    content: (
      <>
        <p>
          Developed a scalable employee management system with RBAC and
          company-level data isolation.
        </p>
        <p>
          Implemented payroll and lifecycle management features.
        </p>
      </>
    ),
  },
  {
    title: "SplitMates — AI Bill Splitting",
    description:
      "Real-time expense splitting & budgeting app with analytics.",
    image: splitmates,
    techStack: [
      "React",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "WebSockets",
      "JWT",
      "Gemini API",
    ],
    links: [
      { label: "Backend", url: "https://github.com/ShivVk18/split-mates-backend" },
      { label: "Frontend", url: "https://github.com/ShivVk18/split-mates-backend" },
    ],
    content: (
      <>
        <p>
          Built a full-stack app for expense splitting with real-time sync.
        </p>
        <p>
          Designed secure JWT-based authentication and analytics dashboards.
        </p>
      </>
    ),
  },
];
