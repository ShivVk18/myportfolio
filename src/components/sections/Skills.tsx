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
      viewport={{ once: true }}
      transition={{
        delay: index * 0.05,
        duration: 0.35,
        ease: "easeOut",
      }}
      whileHover={{ y: -4 }}
    >
      <div
        className="
          w-[110px] h-[110px] sm:w-[120px] sm:h-[120px]
          flex flex-col items-center justify-center gap-3
          rounded-xl
          bg-white/70 dark:bg-zinc-900/70
          border border-neutral-200 dark:border-zinc-800
          backdrop-blur-md
          transition-all duration-300
          hover:border-teal-500/40
        "
      >
        {/* Icon */}
        <div
          className="
            flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14
            rounded-lg
            bg-neutral-200/60 dark:bg-zinc-800/60
          "
        >
          {skill.image ? (
            <Image
              src={skill.image}
              alt={skill.label}
              width={32}
              height={32}
              className="object-contain max-w-[32px] max-h-[32px]"
            />
          ) : (
            <span className="font-semibold text-neutral-800 dark:text-white">
              {skill.label.charAt(0)}
            </span>
          )}
        </div>

        {/* Label */}
        <h3 className="text-xs sm:text-sm font-medium text-neutral-700 dark:text-gray-200 text-center">
          {skill.label}
        </h3>
      </div>
    </motion.div>
  );
}



export function Skills() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" })

  return (
    <section
      className="
        relative w-full min-h-screen overflow-hidden
        bg-white dark:bg-black
        py-20 md:py-32
        transition-colors duration-300
      "
    >
      {/* Background */}
      <div className="absolute inset-0">
        {/* Grid */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(45,212,191,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.04)_1px,transparent_1px)]
            dark:bg-[linear-gradient(rgba(45,212,191,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.02)_1px,transparent_1px)]
            bg-[size:80px_80px]
          "
        />

        {/* Orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute top-1/4 left-1/4
            w-[300px] h-[300px] sm:w-[500px] sm:h-[500px]
            bg-teal-500/20 rounded-full blur-3xl
          "
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="
            absolute bottom-1/4 right-1/4
            w-[300px] h-[300px] sm:w-[500px] sm:h-[500px]
            bg-emerald-500/20 rounded-full blur-3xl
          "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: -30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1
            className="
              text-4xl sm:text-5xl md:text-6xl
              font-black tracking-tight
              bg-clip-text text-transparent
              bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400
              drop-shadow-[0_0_30px_rgba(45,212,191,0.35)]
              mb-4
            "
          >
            Skills
          </h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "7rem" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto"
          >
            <div className="h-1 w-full bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 rounded-full blur-sm" />
            <div className="h-1 w-full -mt-1 bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 rounded-full" />
          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 place-items-center">
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
          className="mt-20 flex flex-wrap justify-center items-center gap-8"
        >
          <span className="text-neutral-600 dark:text-gray-400 text-sm">
            10+ Technologies
          </span>
          <span className="hidden sm:block w-px h-4 bg-neutral-300 dark:bg-gray-800" />
          <span className="text-neutral-600 dark:text-gray-400 text-sm">
            3 Categories
          </span>
          <span className="hidden sm:block w-px h-4 bg-neutral-300 dark:bg-gray-800" />
          <span className="text-teal-500 dark:text-teal-400 text-sm font-semibold">
            Always Learning
          </span>
        </motion.div>
      </div>
    </section>
  )
}
