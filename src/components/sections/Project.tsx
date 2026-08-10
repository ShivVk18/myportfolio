"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { ascendai, fitfusion, splitmates } from "../../../public/images";
import { Terminal, ExternalLink, Github, ArrowRight, MousePointer } from "lucide-react";

/* ---------------- TYPES ---------------- */

type Project = {
  title: string;
  subtitle: string;
  description: string;
  image: StaticImageData;
  techStack: string[];
  links: { label: string; url: string }[];
  content: React.ReactNode;
  tagInline: string;
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
    <section id="projects" className="relative w-full py-24 px-4 sm:px-8 md:pl-28 lg:pl-32 lg:pr-16">
      <div className="max-w-7xl mx-auto">

        {/* Asymmetric Section Header */}
        <div className="flex flex-col items-start mb-16 relative">
          <div className="flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-widest mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>{"// 03. FEATURED_PROJECTS.ts"}</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-heading text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-muted-foreground uppercase"
          >
            Live <span className="text-primary">Products</span>
          </motion.h2>

          <div className="h-1 w-28 bg-gradient-to-r from-primary via-violet-400 to-transparent rounded-full mt-4" />
        </div>

        {/* Expanded Modal Overlay */}
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-background/85 backdrop-blur-xl"
            />
          )}
        </AnimatePresence>

        {/* Expanded Modal */}
        <AnimatePresence>
          {active && (
            <div className="fixed inset-0 z-50 grid place-items-center px-4 py-8 overflow-y-auto">
              <motion.div
                ref={ref}
                layoutId={`card-${active.title}-${id}`}
                className="
                  w-full max-w-3xl
                  max-h-[90vh] overflow-y-auto
                  rounded-3xl
                  bg-card shadow-2xl
                  border border-primary/40
                  font-sans
                "
              >
                {/* Modal Top Bar */}
                <div className="flex items-center justify-between px-6 py-4 bg-secondary/50 border-b border-border/50">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="ml-2 font-mono text-xs text-muted-foreground">
                      project_preview.tsx
                    </span>
                  </div>

                  <button
                    onClick={() => setActive(null)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-background border border-border text-foreground hover:bg-secondary transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <div className="relative w-full aspect-video border-b border-border/30 overflow-hidden bg-black/60">
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                <div className="p-6 sm:p-8 space-y-6">
                  <div>
                    <span className="text-xs font-mono text-primary font-bold uppercase tracking-wider">
                      {active.subtitle}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-1">
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
                        className="px-3 py-1.5 text-xs font-mono rounded-lg bg-secondary text-secondary-foreground border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Content / Bullets */}
                  <div className="text-sm sm:text-base leading-relaxed text-muted-foreground font-sans">
                    {active.content}
                  </div>

                  {/* External Links */}
                  <div className="flex flex-wrap gap-4 pt-6 border-t border-border/30">
                    {active.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          px-6 py-2.5 rounded-xl font-medium shadow-md transition-all
                          bg-primary text-primary-foreground hover:bg-primary/90
                          text-sm flex items-center gap-2 font-mono
                        "
                        data-cursor="pointer"
                      >
                        {link.label.includes("GitHub") ? (
                          <Github className="w-4 h-4" />
                        ) : (
                          <ExternalLink className="w-4 h-4" />
                        )}
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Staggered Entrance Cards Grid (Left 0ms, Center 100ms, Right 200ms) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }} // 100ms staggered entrance
              layoutId={`card-${project.title}-${id}`}
              onClick={() => setActive(project)}
              className="
                group cursor-pointer rounded-3xl overflow-hidden
                bg-card/70 backdrop-blur-xl
                border border-border/70 hover:border-primary
                hover:shadow-[0_20px_50px_rgba(var(--color-primary-rgb),0.25)]
                hover:scale-[1.02]
                transition-all duration-500 flex flex-col h-full relative
              "
              data-cursor="pointer"
            >
              {/* Card Top Mockup Header Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-secondary/40 border-b border-border/40 font-mono text-[11px] text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span>0{index + 1}.app</span>
              </div>

              {/* Image Container with Ken Burns Hover Pan & Cursor Motion */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-background">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110 group-hover:translate-x-1 group-hover:translate-y-[-2%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />

                {/* Animated UI Cursor Overlay Simulation on Hover */}
                <motion.div
                  animate={{
                    x: [0, 15, -10, 0],
                    y: [0, -10, 8, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/3 left-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                >
                  <div className="flex items-center gap-1 bg-primary text-primary-foreground text-[10px] font-mono px-2 py-0.5 rounded-full shadow-lg">
                    <MousePointer className="w-3 h-3 fill-current" />
                    <span>Live Preview</span>
                  </div>
                </motion.div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground/80 mt-1">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground flex-grow line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tag Context Row under description */}
                <div className="pt-1 text-xs font-mono text-primary/90 font-semibold border-t border-border/30">
                  {project.tagInline}
                </div>

                {/* "View Case Study" with 4px Translate Animation on Hover */}
                <div className="pt-2 flex items-center text-xs font-mono font-bold text-primary">
                  <span>VIEW CASE STUDY</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
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
    title: "AscendAi — AI Career Coach",
    subtitle: "Personalized Roadmaps & Mock Interviews",
    description:
      "AI-powered platform for career roadmaps, skill gap analysis, resume building, and mock interviews.",
    tagInline: "Next.js · Prisma · PostgreSQL · Gemini API · Clerk",
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
      { label: "Live Demo", url: "https://ascendai-two.vercel.app/" },
      { label: "GitHub", url: "https://github.com/ShivVk18/ai-career-buddy" },
    ],
    content: (
      <ul className="list-disc pl-5 space-y-3">
        <li>
          Developed an AI-powered career guidance platform that generates personalized career roadmaps, performs skill gap analysis, and creates tailored resumes by matching user profiles with real-world job descriptions.
        </li>
        <li>
          Integrated AI-driven mock interview simulations with real-time, personalized feedback to enhance users&apos; technical responses, communication skills, and overall interview readiness.
        </li>
      </ul>
    ),
  },
  {
    title: "FitFusion AI — Autonomous Health",
    subtitle: "AI Workout Generation & Recovery Analytics",
    description:
      "Full-stack AI fitness application for workout generation, nutrition planning, and recovery analysis.",
    tagInline: "React · Node.js · Express · Prisma · PostgreSQL · Gemini API",
    image: fitfusion,
    techStack: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Gemini API",
      "Recharts",
      "Tailwind",
    ],
    links: [
      { label: "Live Demo", url: "https://fitfusio.netlify.app/" },
      { label: "Backend GitHub", url: "https://github.com/ShivVk18/FitFusion-backend" },
      { label: "Frontend GitHub", url: "https://github.com/ShivVk18/FitFusion-frontend" },
    ],
    content: (
      <ul className="list-disc pl-5 space-y-3">
        <li>
          Built a full-stack AI fitness application using React, Node.js, PostgreSQL, Prisma, and Google Gemini API, enabling personalized workout generation, nutrition planning, and AI-powered recovery analysis.
        </li>
        <li>
          Integrated conversational AI, Recharts-based analytics, and schema-validated AI outputs to deliver accurate, interactive, and personalized fitness recommendations.
        </li>
      </ul>
    ),
  },
  {
    title: "SplitMates — AI Bill Splitting",
    subtitle: "Real-Time Expense Sharing & Debt Settlement",
    description:
      "Full-stack AI expense-sharing platform with real-time bill splitting and financial insights.",
    tagInline: "React · Node.js · Express · WebSockets · JWT · Gemini API",
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
      "Tailwind",
    ],
    links: [
      { label: "Backend GitHub", url: "https://github.com/ShivVk18/split-mates-backend" },
      { label: "Frontend GitHub", url: "https://github.com/ShivVk18/split-mates-backend" },
    ],
    content: (
      <ul className="list-disc pl-5 space-y-3">
        <li>
          Developed SplitMates, a full-stack AI-powered expense-sharing platform using React, Node.js, Express, Prisma, PostgreSQL, WebSockets, and Google Gemini API, enabling real-time bill splitting, intelligent financial assistance, and AI-driven expense management.
        </li>
        <li>
          Integrated AI-powered financial insights, optimal debt settlement recommendations, personalized monthly spending reports, and context-aware payment reminders by leveraging LLM integration, graph-based optimization, scheduled automation, and real-time user data.
        </li>
      </ul>
    ),
  },
];
