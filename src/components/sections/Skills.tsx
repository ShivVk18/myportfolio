"use client";

import { motion } from "framer-motion";

interface SkillCategory {
  id: string;
  number: string;
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    number: "01",
    title: "LANGUAGES",
    skills: ["TypeScript", "JavaScript", "C++", "Python", "SQL"],
  },
  {
    id: "frontend",
    number: "02",
    title: "FRONTEND & MOBILE",
    skills: ["React", "Next.js", "React Native", "Tailwind CSS", "Three.js"],
  },
  {
    id: "backend",
    number: "03",
    title: "BACKEND & DATA",
    skills: ["Node.js", "Express", "FastAPI", "PostgreSQL", "Prisma", "Redis", "WebSockets"],
  },
  {
    id: "infrastructure",
    number: "04",
    title: "AI & INFRASTRUCTURE",
    skills: ["Gemini API", "Docker", "Git", "Linux", "REST APIs"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="relative w-full py-16 md:py-24">
      <div className="max-w-[1140px] w-[90%] sm:w-[88%] mx-auto">
        
        {/* Section Heading */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-primary font-bold tracking-widest uppercase mb-2">
            <span>03</span>
            <span>{"//"}</span>
            <span>TECHNICAL STACK</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#141414] dark:text-[#F5F4EE] uppercase">
            WHAT I WORK WITH.
          </h2>
          <div className="h-1 w-16 bg-primary mt-2.5" />
        </div>

        {/* Compact Editorial Technical Index */}
        <div className="divide-y divide-[#141414]/15 dark:divide-white/10 border-y border-[#141414]/20 dark:border-white/15">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="py-4 sm:py-5 grid grid-cols-1 md:grid-cols-12 gap-3.5 md:gap-8 items-center px-2 sm:px-3 hover:bg-[#F0EDE6]/30 dark:hover:bg-[#1A1A18]/40 transition-colors"
            >
              {/* Category Number + Name */}
              <div className="md:col-span-4 flex items-center gap-2.5">
                <span className="font-mono text-xs font-bold text-primary tracking-wider">
                  {cat.number} —
                </span>
                <h3 className="font-heading text-base sm:text-lg font-bold tracking-tight text-[#141414] dark:text-[#F5F4EE] uppercase">
                  {cat.title}
                </h3>
              </div>

              {/* Compact Inline Bordered Technical Tags */}
              <div className="md:col-span-8 flex flex-wrap gap-2 sm:gap-2.5 items-center">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-2.5 sm:px-3 py-1 text-xs font-mono font-medium border border-[#141414]/25 dark:border-white/20 bg-[#FFFFFF] dark:bg-[#1A1A18] text-[#222222] dark:text-[#E2E0D8] rounded-[2px] transition-all duration-150 hover:border-primary hover:text-primary hover:-translate-y-0.5 paper-shadow-sm select-none cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
