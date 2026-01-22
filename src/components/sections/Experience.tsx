"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="
        relative w-full min-h-screen py-16 md:py-20 overflow-hidden
        bg-white dark:bg-black
        transition-colors duration-300
      "
    >
      {/* Grid Overlay */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(45,212,191,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.04)_1px,transparent_1px)]
          dark:bg-[linear-gradient(rgba(45,212,191,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.03)_1px,transparent_1px)]
          bg-[size:72px_72px]
          [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]
        "
      />

      <div className="container relative z-10 mx-auto px-4 md:px-10 lg:px-20">
        
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
            mb-4
          "
        >
          Experience
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

        {/* Experience Cards */}
        <div className="space-y-12">

          {/* Experience Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              relative p-6 sm:p-8 rounded-2xl
              border border-teal-400/30
              bg-teal-500/10 dark:bg-teal-500/10
              backdrop-blur-xl
              shadow-[0_0_30px_rgba(45,212,191,0.2)]
            "
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-full bg-teal-500/20 border border-teal-400/40">
                <Briefcase className="text-teal-500 dark:text-teal-300 w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-teal-700 dark:text-teal-200">
                  Software Engineer Intern
                </h3>
                <p className="text-sm text-neutral-600 dark:text-gray-400">
                  MindIn · Remote | Aug 2025 – Nov 2025
                </p>
              </div>
            </div>

            <p className="text-sm text-teal-600 dark:text-teal-300 mb-4">
              Tech Stack: React Native, Node.js, WebSockets, Gemini API, NativeWind
            </p>

            <ul className="space-y-3 text-sm sm:text-base text-neutral-700 dark:text-gray-300 list-disc list-inside">
              <li>
                Collaborated closely with founders and product teams to build the
                MVP for a mental health startup.
              </li>
              <li>
                Took end-to-end ownership of features in an agile environment.
              </li>
            </ul>
          </motion.div>

          {/* Experience Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="
              relative p-6 sm:p-8 rounded-2xl
              border border-teal-400/30
              bg-teal-500/10 dark:bg-teal-500/10
              backdrop-blur-xl
              shadow-[0_0_30px_rgba(45,212,191,0.2)]
            "
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-full bg-teal-500/20 border border-teal-400/40">
                <Briefcase className="text-teal-500 dark:text-teal-300 w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-teal-700 dark:text-teal-200">
                  Graduate Engineer Trainee
                </h3>
                <p className="text-sm text-neutral-600 dark:text-gray-400">
                  MPSEDC · On-Site | Nov 2025 – Present
                </p>
              </div>
            </div>

            <p className="text-sm text-teal-600 dark:text-teal-300 mb-4">
              Tech Stack: React.js, Bootstrap
            </p>

            <ul className="space-y-3 text-sm sm:text-base text-neutral-700 dark:text-gray-300 list-disc list-inside">
              <li>
                Designed and implemented responsive frontend pages for a Housing
                ERP system.
              </li>
              <li>
                Gained hands-on experience with sprint-based delivery and
                large-scale CMS architecture.
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
