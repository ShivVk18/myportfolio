"use client";

import { Calendar, Building2, MapPin } from "lucide-react";

interface ExperienceItem {
  id: string;
  number: string;
  role: string;
  company: string;
  location: string;
  period: string;
  technologies: string[];
  bullets: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: "mpsedc",
    number: "01",
    role: "GRADUATE ENGINEER TRAINEE",
    company: "MPSEDC",
    location: "Bhopal, India",
    period: "NOV 2025 — PRESENT",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Enterprise Systems"],
    bullets: [
      "Engineered 4 production citizen-service web modules across frontend and backend for an enterprise state housing portal.",
      "Designed reusable UI form components and client validation libraries, accelerating sprint feature delivery by ~30%.",
      "Optimized client render cycles and state transitions, eliminating UI frame drops across low-spec government kiosks.",
    ],
  },
  {
    id: "mindin",
    number: "02",
    role: "SOFTWARE ENGINEER INTERN",
    company: "MindIn",
    location: "Remote",
    period: "AUG 2025 — NOV 2025",
    technologies: ["React Native", "Google Gemini API", "TypeScript", "FastAPI"],
    bullets: [
      "Developed core React Native MVP screens and real-time check-in streak notification routines from ground zero.",
      "Integrated Google Gemini API workflows with strict schema validation and fallback handling for personalized health insights.",
      "Improved frontend bundle delivery and client render performance by ~25% across cross-platform mobile flows.",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="relative w-full py-16 md:py-24 border-b-2 border-[#141414] dark:border-[#3A3832]">
      <div className="max-w-[1140px] w-[90%] sm:w-[88%] mx-auto">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#141414] dark:text-[#F5F4EE] uppercase">
            WHERE I&apos;VE CONTRIBUTED.
          </h2>
          <div className="h-1 w-16 bg-primary mt-2.5" />
        </div>

        {/* Concise Centered Experience Cards */}
        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp) => (
            <article
              key={exp.id}
              className="rounded-sm border-2 border-[#141414] dark:border-[#3A3832] bg-white dark:bg-[#181816] paper-shadow-lg hover:paper-shadow-xl transition-all duration-200 overflow-hidden"
            >
              {/* Browser / Record Header */}
              <div className="flex items-center justify-between px-4 sm:px-5 py-2.5 bg-[#F0EDE6] dark:bg-[#1E1E1C] border-b-2 border-[#141414] dark:border-[#3A3832] font-mono text-xs select-none">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#141414]/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#141414]/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#141414]/30" />
                  </div>
                  <span className="text-[11px] font-bold text-[#141414] dark:text-[#F5F4EE] tracking-wider ml-1">
                    {exp.number} {"//"} {exp.id.toUpperCase()}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-primary">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-7 space-y-5">
                {/* Role + Organization Details */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#141414]/10 dark:border-white/10 pb-4">
                  <div className="space-y-1">
                    <h3 className="font-heading text-xl sm:text-2xl font-black text-[#141414] dark:text-[#F5F4EE] uppercase tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#555555] dark:text-[#9C9A92]">
                      <span className="flex items-center gap-1 font-bold text-[#141414] dark:text-white">
                        <Building2 className="w-3.5 h-3.5 text-primary" />
                        {exp.company}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 opacity-60" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 2-3 Concise Outcome Bullets */}
                <ul className="space-y-2 font-sans text-sm sm:text-base text-[#333333] dark:text-[#B5B3A8] leading-relaxed">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="text-primary font-mono font-bold mt-1 shrink-0">▪</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies Used */}
                <div className="pt-2 flex flex-wrap gap-1.5 sm:gap-2 border-t border-[#141414]/10 dark:border-white/10">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase self-center mr-1">STACK:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-[2px] font-mono text-[11px] font-medium border border-[#141414]/20 dark:border-white/15 bg-[#FAF8F5] dark:bg-[#1E1E1C] text-[#222222] dark:text-[#E2E0D8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
