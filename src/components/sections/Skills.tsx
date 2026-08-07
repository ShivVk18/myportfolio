"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cplus, express, javascript, mongo, nextjs, node, postgre, python, react, tailwind, fastapi } from "../../../public/images";
import type { StaticImageData } from "next/image";
import { TiltCard } from "../ui/TiltCard";
import { Code2, Terminal, Cpu, Layers } from "lucide-react";

type SkillCategory = "Languages" | "Frontend" | "Backend" | "Database";

type Skill = {
  label: string;
  image?: StaticImageData;
  category: SkillCategory;
  codeTag: string;
};

const skills: Skill[] = [
  { label: "C++", image: cplus, category: "Languages", codeTag: "std::vector" },
  { label: "JavaScript", image: javascript, category: "Languages", codeTag: "ES2024" },
  { label: "Python", image: python, category: "Languages", codeTag: "py3.12" },
  { label: "ReactJS", image: react, category: "Frontend", codeTag: "v19.0" },
  { label: "NextJS", image: nextjs, category: "Frontend", codeTag: "AppRouter" },
  { label: "Tailwind CSS", image: tailwind, category: "Frontend", codeTag: "@theme" },
  { label: "Node.js", image: node, category: "Backend", codeTag: "Runtime" },
  { label: "Express", image: express, category: "Backend", codeTag: "REST API" },
  { label: "FastAPI", image: fastapi, category: "Backend", codeTag: "Async Py" },
  { label: "MongoDB", image: mongo, category: "Database", codeTag: "NoSQL" },
  { label: "PostgreSQL", image: postgre, category: "Database", codeTag: "SQL / Relational" },
];

const categories: Array<"All" | SkillCategory> = ["All", "Languages", "Frontend", "Backend", "Database"];

export function Skills() {
  const [activeFilter, setActiveFilter] = useState<"All" | SkillCategory>("All");

  const filteredSkills = activeFilter === "All"
    ? skills
    : skills.filter((skill) => skill.category === activeFilter);

  return (
    <section id="skills" className="relative w-full min-h-screen py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 md:pl-28 lg:pl-32 lg:pr-16">
        
        {/* Asymmetric Section Header */}
        <div className="flex flex-col items-start mb-12 relative">
          <div className="flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-widest mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>{"// 02. TECH_ARSENAL.ts"}</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-heading text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-muted-foreground uppercase"
          >
            Technical <span className="text-primary">Arsenal</span>
          </motion.h2>

          <div className="h-1 w-28 bg-gradient-to-r from-primary via-emerald-400 to-transparent rounded-full mt-4" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          <span className="text-xs font-mono text-muted-foreground mr-2 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-primary" /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-primary text-primary-foreground font-bold shadow-[0_0_15px_var(--color-primary)] border border-primary"
                  : "bg-card/60 text-muted-foreground hover:text-foreground border border-border/60 hover:border-primary/40"
              }`}
              data-cursor="pointer"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Tilt Grid with Active Filter Layout Animation */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.label}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.04,
                  ease: "easeOut",
                }}
              >
                <TiltCard intensity={8}>
                  <div
                    className="relative p-5 rounded-2xl bg-card/70 border border-border/70 hover:border-primary/70 backdrop-blur-xl shadow-lg transition-all group flex flex-col items-center justify-between min-h-[160px] overflow-hidden"
                    data-cursor="pointer"
                  >
                    {/* Top Index */}
                    <div className="w-full flex justify-between items-center text-[10px] font-mono text-muted-foreground/60">
                      <span>0{index + 1}</span>
                      <span className="text-muted-foreground/40">{skill.codeTag}</span>
                    </div>

                    {/* Icon Container */}
                    <div className="my-3 p-3 rounded-xl bg-background/80 border border-border/50 group-hover:border-primary/40 transition-colors">
                      {skill.image ? (
                        <Image
                          src={skill.image}
                          alt={skill.label}
                          width={40}
                          height={40}
                          className="object-contain w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <Code2 className="w-8 h-8 text-primary" />
                      )}
                    </div>

                    {/* Label & Slide-Up Category Tag on Hover */}
                    <div className="text-center w-full relative overflow-hidden h-9 flex flex-col items-center justify-center">
                      <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors group-hover:-translate-y-2 transition-transform duration-300">
                        {skill.label}
                      </h3>

                      {/* Category Label Slide-Up */}
                      <span className="text-[9px] font-mono font-bold text-primary uppercase tracking-widest absolute bottom-0 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Summary Footer Stat Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 p-4 px-6 rounded-2xl border border-primary/20 bg-card/60 backdrop-blur-xl mx-auto w-fit flex flex-wrap justify-center items-center gap-4 text-xs font-mono text-muted-foreground shadow-md"
        >
          <div className="flex items-center gap-2 text-foreground font-semibold">
            <Cpu className="w-4 h-4 text-primary" />
            <span>{filteredSkills.length} Technologies Shown</span>
          </div>
          <span>·</span>
          <span>4 Categories (Languages / Frontend / Backend / Database)</span>
          <span>·</span>
          <span className="text-primary font-bold">Earned Mastery</span>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;
