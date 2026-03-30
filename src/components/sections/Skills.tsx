"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import Image from "next/image"
import { cplus, express, javascript, mongo, nextjs, node, postgre, python, react, tailwind } from "../../../public/images"
import type { StaticImageData } from "next/image";

type Skill = { label: string; image?:StaticImageData; sublabel?: string }

const languages: Skill[] = [
  { label: "C++", image: cplus, sublabel: "Language" },
  { label: "JavaScript", image: javascript, sublabel: "Language" },
  { label: "Python", image: python, sublabel: "Language" },
]

const frontend: Skill[] = [
  { label: "ReactJS", image: react, sublabel: "Frontend" },
  { label: "NextJS", image: nextjs, sublabel: "Frontend" },
  { label: "Tailwind CSS", image: tailwind, sublabel: "Frontend" },
]

const backend: Skill[] = [
  { label: "Node.js", image: node, sublabel: "Backend" },
  { label: "Express", image: express, sublabel: "Backend" },
  { label: "MongoDB", image: mongo, sublabel: "Backend" },
  { label: "PostgreSQL", image: postgre, sublabel: "Backend" },
]

const allSkills = [...languages, ...frontend, ...backend]

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.05,
        duration: 0.4,
        ease: "easeOut",
      }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group"
    >
      <div className="w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] flex flex-col items-center justify-center gap-2 sm:gap-3 rounded-2xl bg-card border border-border shadow-sm backdrop-blur-md transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:group-hover:shadow-[0_8px_30px_var(--color-primary)]">
        {/* Icon Container */}
        <div className="flex items-center justify-center w-10 h-10 sm:w-16 sm:h-16 rounded-xl bg-background border border-border/50 group-hover:bg-primary/10 transition-colors duration-300">
          {skill.image ? (
            <Image
              src={skill.image}
              alt={skill.label}
              width={36}
              height={36}
              className="object-contain max-w-[24px] max-h-[24px] sm:max-w-[40px] sm:max-h-[40px] drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <span className="font-semibold text-foreground text-lg sm:text-xl">
              {skill.label.charAt(0)}
            </span>
          )}
        </div>

        {/* Label Container */}
        <div className="flex flex-col items-center gap-0.5">
          <h3 className="text-xs sm:text-sm font-medium text-foreground tracking-wide text-center group-hover:text-primary transition-colors">
            {skill.label}
          </h3>
          <span className="text-[10px] text-muted-foreground uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
            {skill.sublabel}
          </span>
        </div>
      </div>
    </motion.div>
  );
}



export function Skills() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" })

  return (
    <section className="relative w-full min-h-screen py-20 md:py-32 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-primary/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-secondary/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: -30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <span className="text-xs font-bold tracking-widest text-primary uppercase mb-3">
            02. Tech Stack
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground mb-4">
            Arsenal
          </h1>

          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 place-items-center">
            {allSkills.map((skill, index) => (
              <SkillCard key={skill.label} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Footer Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 sm:mt-24 py-4 sm:py-6 px-6 sm:px-8 rounded-full border border-border bg-card/50 backdrop-blur-md mx-auto w-fit flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-6 shadow-sm"
        >
          <span className="text-muted-foreground font-medium text-xs sm:text-sm">
            <strong className="text-foreground">10+</strong> Technologies
          </span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-border" />
          <span className="text-muted-foreground font-medium text-xs sm:text-sm">
            <strong className="text-foreground">3</strong> Categories
          </span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-border" />
          <span className="text-primary font-bold text-xs sm:text-sm uppercase tracking-wide">
            Always Learning
          </span>
        </motion.div>
      </div>
    </section>
  )
}
