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
      className="relative w-full min-h-screen py-20 overflow-hidden"
    >
      <div className="container relative z-10 mx-auto px-4 md:px-10 lg:px-20 max-w-6xl">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-xs font-bold tracking-widest text-primary uppercase mb-3">
            01. Introduction
          </span>
          <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground mb-4">
            About Me
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-16 mt-16 md:mt-24">

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="md:w-1/2 space-y-8 order-2 md:order-1"
          >
            {/* Identity Badge */}
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl" />
              <div className="relative text-sm sm:text-base font-semibold py-3 px-5 rounded-lg border border-primary/20 bg-background/50 backdrop-blur-xl">
                <TextGenerateEffect
                  words="Full-Stack Web Developer · UI-Focused · Problem Solver"
                  className="text-foreground tracking-wide font-mono text-sm"
                />
              </div>
            </div>

            {/* Paragraphs */}
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg leading-relaxed text-muted-foreground"
              >
                I am a full-stack web developer with a strong passion for building{" "}
                <span className="text-foreground font-semibold">dynamic</span>,{" "}
                <span className="text-foreground font-semibold">responsive</span>, and{" "}
                <span className="text-foreground font-semibold">scalable</span> web applications that deliver meaningful user experiences.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base sm:text-lg leading-relaxed text-muted-foreground"
              >
                I enjoy solving real-world problems with{" "}
                <span className="text-foreground font-semibold">clean architecture</span>,{" "}
                efficient APIs, and thoughtful UI/UX while continuously learning and keeping up with the bleeding edge of web technologies.
              </motion.p>
            </div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-6"
            >
              <motion.a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, border: "1px solid var(--color-primary)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-6 py-3 border border-border bg-card/50 text-foreground rounded-full font-medium hover:bg-card/80 transition-all backdrop-blur-xl shadow-lg"
              >
                <Linkedin className="w-5 h-5 text-primary" />
                <span className="text-sm">Connect on LinkedIn</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="md:w-1/2 flex justify-center order-1 md:order-2 perspective-[1000px]"
          >
            <div className="relative group p-4">
              {/* Glassmorphic Frame Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-background/50 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-60" />
              <div className="absolute inset-2 rounded-full border border-primary/20 border-t-primary/50 rotate-45 group-hover:rotate-[225deg] transition-all duration-1000 ease-in-out" />
              
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-border/50 bg-card p-2 shadow-2xl group-hover:border-primary/50 transition-colors duration-500">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src={profilePic}
                    alt="Profile Picture"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                  {/* Subtle overlay for blending */}
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
