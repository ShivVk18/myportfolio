"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { apnaDhaba, fitfusion, splitmates, ascendai, emptrack } from "../../../public/images";
import { ArrowUpRight, X, Sparkles, FileText } from "lucide-react";

/* ---------------- TYPES ---------------- */

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  problemSolved: string;
  image: StaticImageData;
  techStack: string[];
  links: { label: string; url: string; isPrimary?: boolean }[];
  details: string[];
};

/* ---------------- DATA ---------------- */

const projectsData: Project[] = [
  
  {
    id: "fitfusion",
    number: "02",
    title: "FITFUSION AI",
    category: "AI PRODUCTIVITY",
    description: "Adaptive AI workout regimens and personalized nutrition planning powered by Gemini API.",
    problemSolved: "Replaces rigid, one-size-fits-all workout templates with adaptive routines tailored to daily fatigue levels, dietary preferences, and available equipment via Google Gemini API.",
    image: fitfusion,
    techStack: ["React", "Node.js", "PostgreSQL", "Prisma", "Gemini API"],
    links: [
      { label: "Live ↗", url: "https://fitfusion-frontend-seven.vercel.app/", isPrimary: true },
      { label: "GitHub ↗", url: "https://github.com/ShivVk18/fitfusion-frontend" },
    ],
    details: [
      "Built a full-stack AI fitness web application using React, Node.js, Express, PostgreSQL, Prisma, and Google Gemini API.",
      "Implemented schema-validated AI outputs to deliver accurate, personalized exercise and nutrition schedules with zero hallucinations.",
      "Integrated Recharts-powered performance and recovery tracking to provide clear visual feedback on workout consistency.",
    ],
  },
  {
    id: "splitmates",
    number: "03",
    title: "SPLITMATES",
    category: "FINTECH & REAL-TIME",
    description: "Real-time shared expense tracking with optimal group debt settlement algorithms.",
    problemSolved: "Removes chaotic group expense spreadsheets and awkward roommate IOUs by recalculating shared expenses in real time and computing the minimum number of transactions needed to settle all debts.",
    image: splitmates,
    techStack: ["React", "Node.js", "PostgreSQL", "WebSockets", "Prisma"],
    links: [
      { label: "GitHub ↗", url: "https://github.com/ShivVk18/split-mates-frontend" },
    ],
    details: [
      "Built real-time bill splitting and ledger updates using WebSockets, Node.js, and PostgreSQL with Prisma ORM.",
      "Engineered optimal debt settlement algorithms that minimize transactions across multi-person trip and household expenses.",
      "Integrated secure JWT-based authentication and contextual spending insights powered by Gemini API.",
    ],
  },
  {
    id: "ascendai",
    number: "04",
    title: "ASCENDAI",
    category: "CAREER INTELLIGENCE",
    description: "AI career roadmap generator and interactive mock technical interview simulator.",
    problemSolved: "Bridges the gap between academic education and industry requirements by analyzing candidate profiles against live job descriptions and delivering real-time feedback during mock technical interviews.",
    image: ascendai,
    techStack: ["Next.js", "Prisma", "PostgreSQL", "Gemini API", "Tailwind"],
    links: [
      { label: "Live ↗", url: "https://ascendai-two.vercel.app/", isPrimary: true },
      { label: "GitHub ↗", url: "https://github.com/ShivVk18/ai-career-buddy" },
    ],
    details: [
      "Built an AI career buddy that parses candidate profiles, evaluates skill gaps against industry requirements, and creates tailored action plans.",
      "Integrated conversational mock interview simulations with real-time feedback on response structure and technical depth.",
      "Architected with Next.js App Router, Clerk authentication, PostgreSQL, and Prisma for fast, reliable data persistence.",
    ],
  },
  {
    id: "emptrack",
    number: "05",
    title: "EMPTRACK",
    category: "SYSTEMS & RBAC",
    description: "Scalable RBAC employee lifecycle management with multi-tenant company data isolation.",
    problemSolved: "Streamlines internal corporate workforce operations by enforcing role-based permissions, automated payroll workflows, and secure employee lifecycle auditing.",
    image: emptrack,
    techStack: ["React", "Node.js", "Express", "Prisma", "PostgreSQL"],
    links: [
      { label: "GitHub ↗", url: "https://github.com/ShivVk18/empTrack-backend" },
    ],
    details: [
      "Engineered secure role-based access control (RBAC) separating administrative, managerial, and staff privileges.",
      "Implemented automated payroll calculation and lifecycle event auditing with relational PostgreSQL schema design.",
      "Designed responsive administration views with fast filtering, search indexing, and real-time status updates.",
    ],
  },
];

/* ---------------- COMPONENT ---------------- */

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <section id="projects" className="relative w-full py-16 md:py-24 border-b-2 border-[#141414] dark:border-[#3A3832]">
      <div className="max-w-[1140px] w-[90%] sm:w-[88%] mx-auto">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#141414] dark:text-[#F5F4EE] uppercase">
            SELECTED WORK.
          </h2>
          <div className="h-1 w-16 bg-primary mt-2.5" />
        </div>

        {/* Compact Centered Project Browser Cards */}
        <div className="space-y-8 md:space-y-12">
          {projectsData.map((project, idx) => {
            const isAlternate = idx % 2 === 1;

            return (
              <article
                key={project.id}
                className="rounded-sm border-2 border-[#141414] dark:border-[#3A3832] bg-white dark:bg-[#181816] paper-shadow-lg hover:paper-shadow-xl transition-all duration-200 overflow-hidden"
              >
                {/* Browser / Window Header */}
                <div className="flex items-center justify-between px-4 sm:px-5 py-2.5 bg-[#F0EDE6] dark:bg-[#1E1E1C] border-b-2 border-[#141414] dark:border-[#3A3832] font-mono text-xs select-none">
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#141414]/30" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#141414]/30" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#141414]/30" />
                    </div>
                    <span className="text-[11px] font-bold text-[#141414] dark:text-[#F5F4EE] tracking-wider ml-1">
                      {project.number} {"//"} {project.id.toUpperCase()}
                    </span>
                  </div>

                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider font-semibold border border-[#141414]/15 dark:border-white/15 px-2 py-0.5 rounded-[2px] bg-white dark:bg-[#252422]">
                    {project.category}
                  </span>
                </div>

                {/* Card Body: 2-Column Layout */}
                <div className="p-5 sm:p-7 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                  
                  {/* Image Column (Alternates gracefully on desktop) */}
                  <div className={`md:col-span-5 ${isAlternate ? "md:order-last" : "md:order-first"}`}>
                    <div
                      onClick={() => setActive(project)}
                      className="relative aspect-[16/10] w-full rounded-[2px] overflow-hidden border-2 border-[#141414] dark:border-white/20 bg-black cursor-pointer group/img paper-shadow-sm hover:paper-shadow transition-all"
                      title="Click to inspect full specification"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top transition-transform duration-300 group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-[#141414] text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded-[2px] border border-white/20 shadow-md">
                          VIEW SPEC ↗
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`md:col-span-7 space-y-3 sm:space-y-4 ${isAlternate ? "md:order-first" : "md:order-last"}`}>
                    <div className="flex items-center gap-2 font-mono text-xs text-primary font-bold uppercase tracking-wider">
                      <span>{project.number} {"//"}</span>
                      <span className="text-[#666666] dark:text-[#9C9A92]">{project.category}</span>
                    </div>

                    <h3 className="font-heading text-2xl sm:text-3xl font-black text-[#141414] dark:text-[#F5F4EE] uppercase tracking-tight leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#444444] dark:text-[#B5B3A8] leading-relaxed font-sans">
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-[2px] font-mono text-xs font-semibold border border-[#141414]/20 dark:border-white/15 bg-[#FAF8F5] dark:bg-[#1E1E1C] text-[#222222] dark:text-[#E2E0D8]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2.5 pt-2 flex-wrap">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`px-3.5 py-1.5 rounded-[2px] font-mono text-xs font-bold border-2 border-[#141414] dark:border-white/20 tactile-btn flex items-center gap-1.5 ${
                            link.isPrimary
                              ? "bg-primary text-white"
                              : "bg-white dark:bg-[#1E1E1C] text-[#141414] dark:text-[#F5F4EE]"
                          }`}
                          data-cursor="pointer"
                        >
                          <span>{link.label}</span>
                        </a>
                      ))}

                      <button
                        onClick={() => setActive(project)}
                        className="px-3 py-1.5 rounded-[2px] font-mono text-xs font-bold border-2 border-[#141414]/30 dark:border-white/20 text-[#141414] dark:text-[#F5F4EE] hover:border-[#141414] hover:bg-[#FAF8F5] dark:hover:bg-[#1E1E1C] transition-all flex items-center gap-1.5"
                        title="Inspect full specification"
                      >
                        <FileText className="w-3.5 h-3.5 text-primary" />
                        <span>Spec Sheet</span>
                      </button>
                    </div>
                  </div>

                </div>
              </article>
            );
          })}
        </div>

        {/* Modal / Deep-Dive Spec Sheet Inspector */}
        <AnimatePresence>
          {active && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              />

              <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 15 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-sm border-2 border-[#141414] dark:border-[#3A3832] bg-[#FAF8F5] dark:bg-[#1A1A18] shadow-[10px_10px_0px_#000000] z-10 flex flex-col"
              >
                <div className="sticky top-0 z-20 flex items-center justify-between px-5 py-3 bg-[#F0EDE6] dark:bg-[#22221F] border-b-2 border-[#141414] dark:border-[#3A3832] font-mono text-xs">
                  <div className="flex items-center gap-2 font-bold text-[#141414] dark:text-[#F5F4EE]">
                    <span className="w-2.5 h-2.5 bg-primary border border-[#141414]" />
                    <span>SPEC_SHEET // {active.id.toUpperCase()}</span>
                  </div>

                  <button
                    onClick={() => setActive(null)}
                    className="p-1 rounded-sm border border-[#141414] dark:border-white/20 bg-[#FFFFFF] dark:bg-[#1A1A18] hover:bg-primary hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-6 sm:p-8 space-y-6">
                  <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden border-2 border-[#141414] dark:border-[#3A3832] bg-black">
                    <Image
                      src={active.image}
                      alt={active.title}
                      fill
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-mono text-primary font-bold uppercase">
                      {active.category}
                    </span>
                    <h3 className="font-heading text-3xl sm:text-4xl font-black text-[#141414] dark:text-[#F5F4EE] uppercase">
                      {active.title}
                    </h3>
                  </div>

                  <div className="p-4 rounded-sm border border-[#141414]/20 dark:border-white/10 bg-[#FFFFFF] dark:bg-[#1A1A18] space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#141414] dark:text-white uppercase flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-primary" />
                      Problem &amp; Solution
                    </span>
                    <p className="text-sm text-[#4A4A4A] dark:text-[#A8A69E] leading-relaxed font-sans">
                      {active.problemSolved}
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    <span className="text-xs font-mono font-bold text-[#141414] dark:text-white uppercase block">
                      Architectural Highlights:
                    </span>
                    <ul className="space-y-2">
                      {active.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[#333333] dark:text-[#B5B3A8] font-sans">
                          <span className="text-primary font-mono font-bold mt-0.5">▪</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-[#141414]/15 dark:border-white/10">
                    <span className="text-xs font-mono text-muted-foreground uppercase">TECH:</span>
                    <div className="flex flex-wrap gap-2">
                      {active.techStack.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 text-xs font-mono bg-[#F0EDE6] dark:bg-[#252422] border border-[#141414]/20 dark:border-white/10 font-bold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-3">
                    {active.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-5 py-2.5 rounded-sm text-xs font-mono font-bold border-2 border-[#141414] tactile-btn flex items-center gap-2 ${
                          link.isPrimary ? "bg-primary text-white" : "bg-[#FFFFFF] dark:bg-[#1E1E1C] text-[#141414] dark:text-white"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
