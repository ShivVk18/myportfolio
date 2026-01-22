"use client";

import Image from "next/image";
import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { profilePic } from "../../../public/images";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen py-16 md:py-24 overflow-hidden
        bg-white dark:bg-black transition-colors duration-300"
    >
      {/* Grid Overlay */}
      <div
        className="absolute inset-0
        bg-[linear-gradient(rgba(45,212,191,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.04)_1px,transparent_1px)]
        dark:bg-[linear-gradient(rgba(45,212,191,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.03)_1px,transparent_1px)]
        bg-[size:72px_72px]
        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"
      />

      <div className="container relative z-10 mx-auto px-4 md:px-10 lg:px-20">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="text-center
            text-4xl sm:text-5xl md:text-6xl
            font-black tracking-tight
            bg-clip-text text-transparent
            bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400
            drop-shadow-[0_0_30px_rgba(45,212,191,0.35)]
            mb-4"
          >
            About Me
          </h1>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "7rem" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mb-12"
        >
          <div className="h-1 w-full bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 rounded-full blur-sm" />
          <div className="h-1 w-full -mt-1 bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 rounded-full" />
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12 mt-12 md:mt-16">

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:w-1/2 space-y-6 order-2 md:order-1"
          >
            {/* Identity Badge */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-xl blur-xl" />
              <div
                className="relative text-base sm:text-lg font-semibold
                text-center md:text-left py-4 px-6
                rounded-full border border-teal-400/30
                bg-teal-500/10 dark:bg-teal-500/15
                backdrop-blur-xl"
              >
                <TextGenerateEffect
                  words="Full-Stack Web Developer · UI-Focused · Problem Solver"
                  className="text-teal-600 dark:text-teal-200 tracking-wide"
                />
              </div>
            </div>

            {/* Paragraphs */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-base sm:text-lg leading-relaxed text-justify
                text-neutral-700 dark:text-neutral-300"
            >
              I am a full-stack web developer with a strong passion for building
              <span className="text-amber-500 dark:text-amber-300 bg-amber-400/10 px-1 rounded font-semibold"> dynamic</span>,
              <span className="text-amber-500 dark:text-amber-300 bg-amber-400/10 px-1 rounded font-semibold"> responsive</span>, and
              <span className="text-amber-500 dark:text-amber-300 bg-amber-400/10 px-1 rounded font-semibold"> scalable</span> web applications that deliver
              meaningful user experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-base sm:text-lg leading-relaxed text-justify
                text-neutral-700 dark:text-neutral-300"
            >
              I enjoy solving real-world problems with
              <span className="text-amber-500 dark:text-amber-300 bg-amber-400/10 px-1 rounded font-semibold"> clean architecture</span>,
              efficient APIs, and thoughtful UI/UX while continuously learning.
            </motion.p>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8"
            >
              <h3 className="font-semibold text-lg text-teal-600 dark:text-teal-200">
                Find Me Online
              </h3>

              <motion.a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="
                  flex items-center gap-2 px-6 py-3
                  border-2 border-teal-400/60
                  text-teal-600 dark:text-teal-300
                  rounded-full font-medium
                  hover:bg-teal-500/10
                  transition-all backdrop-blur-xl"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:w-1/2 flex justify-center order-1 md:order-2"
          >
            <div className="relative group">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 blur-lg opacity-60"
                style={{ padding: "6px" }}
              />

              <div
                className="
                  relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80
                  rounded-full overflow-hidden
                  ring-4 ring-teal-400/30
                  shadow-[0_0_50px_rgba(45,212,191,0.35)]
                  transition-transform group-hover:scale-105"
              >
                <Image
                  src={profilePic}
                  alt="Profile Picture"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
