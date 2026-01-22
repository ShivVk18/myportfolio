"use client";

import { Spotlight } from "@/components/ui/spotlight-new";
import { motion } from "motion/react";

export const Hero = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden px-4 sm:px-6
      bg-white dark:bg-black transition-colors duration-300"
    >
      {/* Spotlights */}
      <Spotlight
        className="-top-52 left-0 sm:left-40 sm:-top-20 opacity-40 sm:opacity-70"
       
      />
      <Spotlight
        className="top-20 left-full h-[40vh] w-[40vw] sm:h-[60vh] sm:w-[60vw] hidden sm:block opacity-50"
       
      />
      <Spotlight
        className="left-40 top-40 h-[40vh] w-[40vw] sm:h-[60vh] sm:w-[60vw] hidden sm:block opacity-40"
       
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0
        bg-[linear-gradient(rgba(45,212,191,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.04)_1px,transparent_1px)]
        dark:bg-[linear-gradient(rgba(45,212,191,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.03)_1px,transparent_1px)]
        bg-[size:72px_72px]
        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]
      " />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="
            text-4xl sm:text-6xl md:text-7xl lg:text-8xl
            font-black tracking-tight
            bg-clip-text text-transparent
            bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400
            drop-shadow-[0_0_30px_rgba(45,212,191,0.35)]
          ">
            Shivansh Saxena
          </h1>

          <div className="h-1 w-20 sm:w-28 mx-auto mt-4 bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 rounded-full blur-sm" />
          <div className="h-1 w-20 sm:w-28 mx-auto -mt-1 bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 rounded-full" />
        </motion.div>

        {/* Role Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="
            mt-6 px-4 sm:px-5 py-2
            bg-teal-500/10 dark:bg-teal-500/15
            backdrop-blur-xl rounded-full
            border border-teal-400/30
          "
        >
          <span className="text-xs sm:text-sm md:text-base font-semibold text-teal-600 dark:text-teal-200 tracking-wide">
            FULL STACK DEVELOPER
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg
            text-neutral-700 dark:text-neutral-300 leading-relaxed"
        >
          Crafting{" "}
          <span className="text-amber-500 dark:text-amber-300 bg-amber-400/10 px-1 rounded font-semibold">
            stunning
          </span>{" "}
          digital experiences with{" "}
          <span className="text-amber-500 dark:text-amber-300 bg-amber-400/10 px-1 rounded font-semibold">
            cutting-edge
          </span>{" "}
          technology and{" "}
          <span className="text-amber-500 dark:text-amber-300 bg-amber-400/10 px-1 rounded font-semibold">
            pixel-perfect
          </span>{" "}
          design
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto"
        >
          <motion.a
            href="/Shivansh_Saxena_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="
              w-full sm:w-auto px-8 py-4
              bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500
              text-slate-900 rounded-full font-bold
              text-base sm:text-lg shadow-lg text-center
            "
          >
            Get Resume
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="
              w-full sm:w-auto px-8 py-4
              border-2 border-teal-400/60
              text-teal-600 dark:text-teal-300
              rounded-full font-bold
              text-base sm:text-lg
              hover:bg-teal-500/10
              relative group
            "
          >
            Get in Touch
          </motion.button>
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-12 text-neutral-600 dark:text-neutral-400 text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Available for work</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>India</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
