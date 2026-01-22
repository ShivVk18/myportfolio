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
    <section
      className="
        relative w-full py-20
        bg-white dark:bg-black
        transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            text-center text-4xl sm:text-5xl md:text-6xl
            font-black tracking-tight
            bg-clip-text text-transparent
            bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400
            drop-shadow-[0_0_30px_rgba(45,212,191,0.35)]
            mb-5
          "
        >
          Projects
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "7rem" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mb-16"
        >
          <div className="h-1 w-full bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 rounded-full blur-sm" />
          <div className="h-1 w-full -mt-1 bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 rounded-full" />
        </motion.div>

        {/* Overlay */}
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 dark:bg-black/70 backdrop-blur-sm"
            />
          )}
        </AnimatePresence>

        {/* Expanded Modal */}
        <AnimatePresence>
          {active && (
            <div className="fixed inset-0 z-50 grid place-items-center px-4">
              <motion.div
                ref={ref}
                layoutId={`card-${active.title}-${id}`}
                className="
                  w-full max-w-3xl
                  max-h-[90vh] overflow-y-auto
                  rounded-2xl
                  bg-white dark:bg-neutral-900
                  border border-neutral-200 dark:border-neutral-800
                "
              >
                <div className="relative w-full aspect-video">
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="p-6 space-y-5">
                  <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
                    {active.title}
                  </h2>

                  <p className="text-neutral-600 dark:text-gray-400">
                    {active.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {active.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-3 py-1 text-xs rounded-full
                          bg-neutral-200 dark:bg-neutral-800
                          text-neutral-700 dark:text-gray-300
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Content */}
                  <div className="text-sm leading-relaxed space-y-3 text-neutral-700 dark:text-gray-300">
                    {active.content}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    {active.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          px-4 py-2 rounded-full
                          bg-teal-600 hover:bg-teal-500
                          text-sm text-white
                        "
                      >
                        {link.label}
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
          {projects.map((project) => (
            <motion.div
              key={project.title}
              layoutId={`card-${project.title}-${id}`}
              onClick={() => setActive(project)}
              className="
                cursor-pointer rounded-xl overflow-hidden
                bg-white/80 dark:bg-neutral-900
                border border-neutral-200 dark:border-neutral-800
                backdrop-blur-md
                hover:border-teal-500/40
                transition
              "
            >
              <div className="relative w-full aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-gray-400 mt-2">
                  {project.description}
                </p>

                <span className="inline-block mt-4 text-sm text-teal-500 font-medium">
                  View Details →
                </span>
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
