"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileText, ArrowUpRight, Clock, Code, CheckCircle2 } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";

export const Hero = () => {
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
          timeZone: "Asia/Kolkata",
        })
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const nameWords = ["Shivansh", "Saxena"];

  return (
    <div className="relative min-h-[90vh] w-full flex flex-col justify-center overflow-hidden px-4 sm:px-8 md:pl-28 lg:pl-32 lg:pr-16 pt-24 pb-16">
      
      {/* EXCLUSION ZONE RADIAL MASK: Fades background grid/text to 0% opacity behind the name */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-background/90 blur-3xl rounded-full -z-10 pointer-events-none opacity-95" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Main Container - Asymmetric 65 / 35 Grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        
        {/* Left Column: 65% width focus area */}
        <div className="lg:col-span-8 flex flex-col items-start text-left z-10 space-y-6 relative">
          
          {/* Top Status Bar: MAX 2 ITEMS ONLY */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-3"
          >
            {/* Status 1: Available for Hire */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Hire</span>
            </div>

            {/* Status 2: Location & Clock */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/40 border border-border/40 text-muted-foreground text-xs font-mono">
              <Clock className="w-3 h-3 text-cyan-400" />
              <span>Bhopal, IN</span>
              <span className="text-foreground font-semibold">{timeStr}</span>
            </div>
          </motion.div>

          {/* THE SINGLE FOCAL POINT: NAME (GUARANTEED ZERO OVERLAPPING TEXT) */}
          <div className="pt-2 relative">
            <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 items-baseline">
              {nameWords.map((word, index) => (
                <div key={word} className="overflow-hidden py-1">
                  <motion.h1
                    initial={{ clipPath: "inset(100% 0% 0% 0%)", y: 50 }}
                    animate={{ clipPath: "inset(0% 0% 0% 0%)", y: 0 }}
                    transition={{
                      duration: 1,
                      delay: 0.15 + index * 0.15,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-[7.2rem] font-black tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-muted-foreground/90 uppercase drop-shadow-sm"
                  >
                    {word}
                  </motion.h1>
                </div>
              ))}
            </div>
          </div>

          {/* Subtitle / Role Tagline - Visually Quiet */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex items-center gap-3 font-mono text-xs sm:text-sm text-primary font-medium opacity-90"
          >
            <span className="px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-xs">
              fullstack.ts
            </span>
            <span className="text-muted-foreground/60">/</span>
            <span className="text-foreground/90 tracking-wide font-sans text-base sm:text-lg font-semibold">
              Crafting High-Scale Products &amp; AI Ecosystems
            </span>
          </motion.div>

          {/* Bio Description - Visually Quiet */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-muted-foreground/80 text-sm sm:text-base max-w-xl leading-relaxed font-sans font-normal pt-2"
          >
            Full-stack software engineer building web &amp; mobile applications with React, Next.js, Node.js, and Google Gemini API. Passionate about clean architecture, system performance, and responsive UI design.
          </motion.p>

          {/* Buttons Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease: "easeOut" }}
            className="flex flex-wrap gap-4 pt-6 items-center"
          >
            {/* View Resume: High Contrast Orange Fill + Magnetic Effect */}
            <MagneticButton href="https://autumn-bird-212.linkyhost.com" target="_blank" rel="noopener noreferrer">
              <div className="group relative overflow-hidden rounded-xl bg-primary text-primary-foreground font-semibold text-sm sm:text-base py-4 px-8 shadow-[0_0_35px_-5px_var(--color-primary)] transition-all flex items-center gap-2.5">
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </MagneticButton>

            {/* Explore My Work: Outline/Ghost Button + Magnetic Effect */}
            <MagneticButton href="#about">
              <div className="rounded-xl border border-border/70 hover:border-primary/50 text-foreground/90 font-medium text-sm sm:text-base py-4 px-8 bg-transparent transition-all flex items-center gap-2 hover:bg-card/40">
                <span>Explore My Work</span>
              </div>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right Column: 35% width Distinct Bounded Window Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.85, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="lg:col-span-4 relative select-none hidden lg:block z-10"
        >
          {/* Polished Distinct IDE Window Card with 1px Border and Fill */}
          <div className="rounded-2xl bg-card/90 dark:bg-card/75 border border-primary/30 dark:border-white/15 shadow-2xl backdrop-blur-xl overflow-hidden font-mono text-[11px] text-muted-foreground transition-colors hover:border-primary/50">
            {/* Header */}
            <div className="flex items-center justify-between px-3.5 py-2.5 bg-secondary/50 dark:bg-secondary/30 border-b border-border/40">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-[10px] text-muted-foreground/80 font-semibold">
                  developer.ts
                </span>
              </div>
              <div className="flex items-center gap-1 text-[9px] text-emerald-400 font-medium px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                <CheckCircle2 className="w-2.5 h-2.5" />
                <span>BUILD PASSING</span>
              </div>
            </div>

            {/* Code Body */}
            <div className="p-4 sm:p-5 space-y-2.5 leading-relaxed text-[11px]">
              <div>
                <span className="text-primary font-semibold">const</span> dev = &#123;
              </div>
              <div className="pl-3">
                name: <span className="text-emerald-400 font-medium">&quot;Shivansh Saxena&quot;</span>,
              </div>
              <div className="pl-3">
                role: <span className="text-emerald-400 font-medium">&quot;Full-Stack Engineer&quot;</span>,
              </div>
              <div className="pl-3">
                stack: [<span className="text-cyan-400">&quot;React&quot;</span>, <span className="text-cyan-400">&quot;Next.js&quot;</span>, <span className="text-cyan-400 font-medium">&quot;Node&quot;</span>]
              </div>
              <div>&#125;;</div>
              <div className="pt-2.5 border-t border-border/30 text-[10px] text-primary font-medium flex items-center gap-1.5">
                <Code className="w-3 h-3" />
                <span>git commit -m &quot;feat: fullstack ready&quot;</span>
              </div>
            </div>

            {/* Footer Status Bar */}
            <div className="px-3.5 py-1.5 bg-secondary/30 border-t border-border/30 flex justify-between items-center text-[9px] text-muted-foreground/70">
              <span>TypeScript 5.7</span>
              <span>UTF-8</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
