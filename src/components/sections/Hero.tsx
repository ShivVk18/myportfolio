"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileText, ArrowDown, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

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

  return (
    <section id="hero" className="relative w-full min-h-[75vh] md:min-h-[80vh] flex flex-col justify-center items-center py-16 md:py-20 text-center">
      <div className="max-w-[1140px] w-[90%] sm:w-[88%] mx-auto flex flex-col items-center space-y-6 sm:space-y-7 z-10">
        
        {/* Small Label / Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-mono text-muted-foreground select-none"
        >
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-sm border-2 border-[#141414] dark:border-white/20 bg-[#FFFFFF] dark:bg-[#1E1E1C] text-[#141414] dark:text-[#F5F4EE] paper-shadow-sm font-bold">
            <span className="text-primary text-xs">●</span>
            <span>FULL-STACK DEVELOPER</span>
          </div>

          <span className="hidden sm:inline text-muted-foreground/40 font-mono">·</span>

          <div className="flex items-center gap-1.5 text-xs font-mono text-[#555555] dark:text-[#9C9A92]">
            <span>Madhya Pradesh, IN</span>
            <span>·</span>
            <span className="font-semibold text-foreground">{timeStr || "10:30 PM"} IST</span>
          </div>
        </motion.div>

        {/* Large Centered Name Typography */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-0 select-none text-center"
        >
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8rem] font-black tracking-tight leading-[0.9] text-[#141414] dark:text-[#F5F4EE] uppercase">
            SHIVANSH <br />
            SAXENA
          </h1>
        </motion.div>

        {/* Short One-Line Supporting Sentence */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-[#4A4A4A] dark:text-[#B5B3A8] text-lg sm:text-xl md:text-2xl max-w-xl mx-auto leading-relaxed font-sans font-normal"
        >
          Building web products, mobile apps &amp; AI systems.
        </motion.p>

        {/* Compact Brutalist CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.28 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2"
        >
          {/* Primary Black Button */}
          <a
            href="#projects"
            className="px-5 sm:px-6 py-3 rounded-sm bg-[#141414] dark:bg-[#F5F4EE] text-white dark:text-[#141414] font-mono text-xs sm:text-sm font-bold border-2 border-[#141414] dark:border-white/20 tactile-btn flex items-center gap-2"
            data-cursor="pointer"
          >
            <span>VIEW WORK</span>
            <ArrowDown className="w-4 h-4 text-primary" />
          </a>

          {/* Orange Accent CTA */}
          <a
            href="#contact"
            className="px-5 sm:px-6 py-3 rounded-sm bg-[#FF4D00] text-white font-mono text-xs sm:text-sm font-bold border-2 border-[#141414] tactile-btn flex items-center gap-1.5"
            data-cursor="pointer"
          >
            <span>LET&apos;S TALK</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Understated Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="flex items-center justify-center gap-4 sm:gap-5 pt-3 text-xs sm:text-sm font-mono text-[#555555] dark:text-[#9C9A92]"
        >
          <a
            href="https://github.com/ShivVk18"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors flex items-center gap-1.5 underline underline-offset-4 decoration-[#141414]/30 hover:decoration-primary font-medium"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <span>·</span>
          <a
            href="https://www.linkedin.com/in/shivansh-saxena-0679ab22a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors flex items-center gap-1.5 underline underline-offset-4 decoration-[#141414]/30 hover:decoration-primary font-medium"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <span>·</span>
          <a
            href="mailto:shivansh.dev2708@gmail.com"
            className="hover:text-primary transition-colors flex items-center gap-1.5 underline underline-offset-4 decoration-[#141414]/30 hover:decoration-primary font-medium"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
