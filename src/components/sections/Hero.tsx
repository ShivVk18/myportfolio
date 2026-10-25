"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { pixelAvatar } from "../../../public/images";

export const Hero = () => {
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
          timeZone: "Asia/Kolkata",
        })
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Split string into interactive letter spans with subtle tactile hover
  const renderInteractiveText = (text: string) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className="inline-block transition-transform duration-200 ease-out hover:-translate-y-1 hover:text-primary cursor-default"
      >
        {char}
      </span>
    ));
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-12 overflow-hidden"
    >
      <div className="max-w-[1240px] w-[90%] sm:w-[88%] mx-auto flex-1 flex flex-col justify-between z-10">

        {/* ---------------- 1. TOP MICRO HEADER BAR ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 select-none"
        >
          {/* Micro Technical Status Label */}
          <div className="flex items-center flex-wrap gap-2 sm:gap-2.5 font-mono text-[11px] sm:text-xs text-[#555555] dark:text-[#A8A69E] uppercase tracking-wider">
            <span className="inline-block w-2 h-2 rounded-full bg-[#FF4D00] animate-pulse" />
            <span className="font-bold text-[#141414] dark:text-[#F5F4EE]">FULL-STACK DEVELOPER</span>
            <span className="text-[#999999] dark:text-[#666666]">•</span>
            <span>BHOPAL, INDIA</span>
            <span className="text-[#999999] dark:text-[#666666]">•</span>
            <span className="font-semibold text-[#141414] dark:text-[#F5F4EE]">AVAILABLE FOR WORK</span>
          </div>

          {/* Right Micro Technical Metadata */}
          <div className="flex items-center gap-3 font-mono text-[11px] text-[#777777] dark:text-[#8E8C84]">
            <span className="hidden md:inline">23.2599° N, 77.4126° E</span>
            <span className="hidden md:inline">•</span>
            <span className="font-semibold text-[#141414] dark:text-[#F5F4EE]">
              {timeStr ? `${timeStr} IST` : "10:30:00 PM IST"}
            </span>
            <span>•</span>
            <span className="px-1.5 py-0.5 border border-[#141414] dark:border-white/20 text-[#141414] dark:text-[#F5F4EE] font-bold text-[10px]">
              2026 {"//"} 01
            </span>
          </div>
        </motion.div>

        {/* ---------------- 2. CENTER ASYMMETRIC POSTER GRID ---------------- */}
        <div className="my-auto py-8 sm:py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">

          {/* LEFT / CENTER: Dominant Asymmetric Typography & Content */}
          <div className="lg:col-span-8 flex flex-col justify-center space-y-6 sm:space-y-8">
            
            {/* The Dominant Asymmetric Name */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="select-none tracking-tight font-heading font-black text-[#141414] dark:text-[#F5F4EE] leading-[0.84] uppercase"
            >
              {/* Line 1: SHIVANSH */}
              <div className="text-[13.5vw] sm:text-[11vw] md:text-[9.5vw] lg:text-[7.8vw] xl:text-[8.8rem] block">
                {renderInteractiveText("SHIVANSH")}
              </div>

              {/* Line 2: SAXENA — Offset Asymmetric Indent */}
              <div className="text-[13.5vw] sm:text-[11vw] md:text-[9.5vw] lg:text-[7.8vw] xl:text-[8.8rem] block pl-6 sm:pl-14 md:pl-24 lg:pl-28 xl:pl-36 text-primary hover:text-[#141414] dark:hover:text-[#F5F4EE] transition-colors duration-300">
                {renderInteractiveText("SAXENA")}
              </div>
            </motion.div>

            {/* Hero Description & Technical Stack Strip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3 max-w-xl"
            >
              {/* Hero Statement */}
              <p className="text-[#333333] dark:text-[#C5C3BA] text-lg sm:text-xl md:text-2xl font-sans font-normal leading-snug">
                Building web products, mobile apps &amp; AI systems.
              </p>

              {/* Curated Stack Micro Strip */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs sm:text-[13px] text-[#666666] dark:text-[#9C9A92]">
                <span className="font-semibold text-[#141414] dark:text-[#F5F4EE]">STACK {"//"}</span>
                <span>React</span>
                <span className="text-[#999999]">•</span>
                <span>Next.js</span>
                <span className="text-[#999999]">•</span>
                <span>Node.js</span>
                <span className="text-[#999999]">•</span>
                <span>FastAPI</span>
                <span className="text-[#999999]">•</span>
                <span>PostgreSQL</span>
              </div>
            </motion.div>

            {/* Brutalist Rectangular CTAs & Minimal Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4 pt-1"
            >
              {/* Exactly Two Strong Rectangular Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                {/* Primary Button: Black bg / White text */}
                <a
                  href="#projects"
                  className="group px-6 sm:px-7 py-3.5 sm:py-4 bg-[#141414] text-white dark:bg-[#F5F4EE] dark:text-[#141414] font-mono text-xs sm:text-sm font-bold border-2 border-[#141414] dark:border-white tactile-btn flex items-center gap-2.5 rounded-none"
                  data-cursor="pointer"
                >
                  <span>VIEW WORK</span>
                  <ArrowDown className="w-4 h-4 text-primary group-hover:translate-y-1 transition-transform duration-200" />
                </a>

                {/* Secondary Button: Orange bg / Black text */}
                <a
                  href="#contact"
                  className="group px-6 sm:px-7 py-3.5 sm:py-4 bg-[#FF4D00] text-[#141414] font-mono text-xs sm:text-sm font-bold border-2 border-[#141414] tactile-btn flex items-center gap-2 rounded-none"
                  data-cursor="pointer"
                >
                  <span>LET&apos;S TALK</span>
                  <ArrowUpRight className="w-4 h-4 text-[#141414] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </a>
              </div>

              {/* Minimal Understated Social Links */}
              <div className="flex items-center gap-4 sm:gap-5 pt-1 font-mono text-xs text-[#555555] dark:text-[#A8A69E]">
                <a
                  href="https://github.com/ShivVk18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 hover:text-[#141414] dark:hover:text-[#F5F4EE] transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span className="underline underline-offset-4 decoration-[#141414]/30 dark:decoration-white/30 group-hover:decoration-primary font-medium">
                    GitHub
                  </span>
                </a>
                <span className="text-[#999999]/50">•</span>
                <a
                  href="https://www.linkedin.com/in/shivansh-saxena-0679ab22a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 hover:text-[#141414] dark:hover:text-[#F5F4EE] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span className="underline underline-offset-4 decoration-[#141414]/30 dark:decoration-white/30 group-hover:decoration-primary font-medium">
                    LinkedIn
                  </span>
                </a>
                <span className="text-[#999999]/50">•</span>
                <a
                  href="mailto:shivansh.dev2708@gmail.com"
                  className="group flex items-center gap-1.5 hover:text-[#141414] dark:hover:text-[#F5F4EE] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span className="underline underline-offset-4 decoration-[#141414]/30 dark:decoration-white/30 group-hover:decoration-primary font-medium">
                    Email
                  </span>
                </a>
              </div>
            </motion.div>

          </div>

          {/* RIGHT / ASYMMETRIC COLUMN: Editorial Portrait / Identity Document */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center select-none"
          >
            {/* The Designed Physical Editorial Photograph */}
            <div className="group relative w-52 sm:w-60 md:w-64 lg:w-72 bg-white dark:bg-[#1A1A18] border-2 border-[#141414] dark:border-white/30 p-2.5 sm:p-3 shadow-[4px_4px_0px_#141414] dark:shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#141414] dark:hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-1 hover:translate-x-1 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
              
              {/* Header Metadata Tab */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#141414]/15 dark:border-white/10 font-mono text-[10px]">
                <div className="flex items-center gap-1.5 font-bold text-[#141414] dark:text-[#F5F4EE]">
                  <span className="w-1.5 h-1.5 bg-[#FF4D00]" />
                  <span>FIG 01.0</span>
                </div>
                <span className="text-[#777777] dark:text-[#8E8C84] uppercase tracking-wider font-semibold">
                  IDENTITY {"//"} 24-BIT
                </span>
              </div>

              {/* Photo Frame with subtle inspection interaction & scanlines */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#EAE7DF] dark:bg-[#111110] border border-[#141414]/20 dark:border-white/10">
                <Image
                  src={pixelAvatar}
                  alt="Shivansh Saxena — Editorial Portrait"
                  fill
                  priority
                  className="object-cover pixel-art scale-100 group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />

                {/* Subtle Scanline Overlay revealed on inspection */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.22)_50%)] bg-[length:100%_4px] z-10" />

                {/* Revealing technical metadata banner on hover */}
                <div className="absolute bottom-0 inset-x-0 p-2 bg-[#141414]/90 dark:bg-black/90 text-white font-mono text-[9px] uppercase tracking-wider translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 flex items-center justify-between">
                  <span>STATUS: ACTIVE</span>
                  <span className="text-[#FF4D00]">ONLINE ●</span>
                </div>
              </div>

              {/* Identity Document Footer Caption */}
              <div className="pt-2.5 flex items-center justify-between font-mono text-[10px] text-[#555555] dark:text-[#A8A69E]">
                <span className="font-bold text-[#141414] dark:text-[#F5F4EE]">
                  SHIVANSH / 01
                </span>
                <span className="text-[#888888] dark:text-[#777777]">
                  DEV_SPEC {"//"} ARCHIVE
                </span>
              </div>
            </div>

            {/* Editorial Caption Tag under the photo */}
            <div className="mt-3 font-mono text-[10px] text-[#777777] dark:text-[#8E8C84] flex items-center gap-2 tracking-wider">
              <span className="text-primary font-bold">●</span>
              <span>ENGINEER / CREATIVE TECH</span>
            </div>
          </motion.div>

        </div>

        {/* ---------------- 3. BOTTOM TRANSITION BAR ---------------- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-4 flex items-center justify-between font-mono text-xs select-none"
        >
          {/* Direct Transition into Selected Work */}
          <a
            href="#projects"
            className="group flex items-center gap-2 sm:gap-3 text-[#141414] dark:text-[#F5F4EE] font-bold tracking-wider hover:text-primary transition-colors"
          >
            <span className="text-primary">01 —</span>
            <span>SELECTED WORK</span>
            <ArrowDown className="w-3.5 h-3.5 text-primary group-hover:translate-y-1 transition-transform duration-200" />
          </a>

          {/* Micro Blueprint Indicators */}
          <div className="flex items-center gap-4 sm:gap-6 text-[#777777] dark:text-[#8E8C84] text-[11px]">
            <span className="hidden sm:inline">PORTFOLIO — 2026</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5 text-primary font-semibold">
              <span>SCROLL TO EXPLORE</span>
              <ArrowDown className="w-3 h-3 animate-bounce" />
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
