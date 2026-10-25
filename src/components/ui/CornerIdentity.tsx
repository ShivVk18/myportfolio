"use client";

import React from "react";
import { ModeToggle } from "../DarkMode";
import { ArrowUpRight } from "lucide-react";

export const CornerIdentity = () => {
  return (
    <>
      {/* Top-Left: Minimal Unobtrusive Fixed Identity Marker */}
      <div className="fixed top-5 left-5 sm:top-6 sm:left-8 z-40 select-none">
        <a
          href="#hero"
          className="group inline-flex flex-col items-start focus:outline-none"
          aria-label="Shivansh Saxena — Return to top"
        >
          <span className="font-heading font-black text-xs sm:text-sm tracking-tight text-[#141414] dark:text-[#F5F4EE] leading-none group-hover:text-primary transition-colors">
            SHIVANSH SAXENA
          </span>
          <span className="font-mono text-[9px] sm:text-[10px] text-[#666666] dark:text-[#9C9A92] uppercase tracking-wider font-semibold mt-0.5 flex items-center gap-1.5">
            <span>FULL-STACK DEVELOPER</span>
          </span>
        </a>
      </div>

      {/* Top-Right: Discreet Utility Pill (Resume + Theme Toggle) */}
      <div className="fixed top-5 right-5 sm:top-6 sm:right-8 z-40 flex items-center gap-2 select-none">
        <a
          href="https://drive.google.com/file/d/1cI3seyZ0gpCzkRKnG1vkeePFBwpEFgpg/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-2.5 py-1.5 rounded-none bg-white/90 dark:bg-[#1A1A18]/90 text-[#141414] dark:text-[#F5F4EE] font-mono text-[10px] sm:text-[11px] font-bold border-2 border-[#141414] dark:border-white/30 paper-shadow-sm hover:bg-[#141414] hover:text-white dark:hover:bg-white dark:hover:text-[#141414] transition-colors flex items-center gap-1"
          data-cursor="pointer"
        >
          <span>RESUME</span>
          <ArrowUpRight className="w-3 h-3 text-primary group-hover:text-current" />
        </a>

        <div className="border-2 border-[#141414] dark:border-white/30 bg-white/90 dark:bg-[#1A1A18]/90 paper-shadow-sm flex items-center justify-center h-8 w-8">
          <ModeToggle />
        </div>
      </div>
    </>
  );
};

export default CornerIdentity;
