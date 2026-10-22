"use client";

import Image from "next/image";
import { ArrowUpRight, MapPin, Code2, Layers } from "lucide-react";
import { pixelAvatar } from "../../../public/images";

export const AboutMe = () => {

  return (
    <section id="about" className="relative w-full py-16 md:py-24 border-b-2 border-[#141414] dark:border-[#3A3832]">
      <div className="max-w-[1140px] w-[90%] sm:w-[88%] mx-auto">
        
        {/* Section Heading */}
        <div className="mb-10 sm:mb-12">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#141414] dark:text-[#F5F4EE] uppercase">
            ABOUT ME.
          </h2>
          <div className="h-1 w-16 bg-primary mt-2.5" />
        </div>

        {/* Minimal 2-Column Overview: Bio + Compact Facts */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Left Column: Short Paragraph + Compact Facts */}
          <div className="md:col-span-8 space-y-6">
            <p className="text-lg sm:text-xl text-[#333333] dark:text-[#B5B3A8] leading-relaxed font-sans">
              Full-stack developer based in Bhopal, India, focused on building end-to-end web products, mobile applications, and AI integrations. I enjoy turning complex, manual workflows into fast, reliable software with clean architecture and high visual polish.
            </p>

            {/* Compact Facts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {/* Fact 1: Location */}
              <div className="p-3.5 rounded-sm border border-[#141414]/20 dark:border-white/15 bg-white dark:bg-[#1A1A18] space-y-1 paper-shadow-sm">
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-primary font-bold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>LOCATION</span>
                </div>
                <p className="font-sans text-sm font-bold text-[#141414] dark:text-[#F5F4EE]">
                  Bhopal, India
                </p>
              </div>

              {/* Fact 2: Focus */}
              <div className="p-3.5 rounded-sm border border-[#141414]/20 dark:border-white/15 bg-white dark:bg-[#1A1A18] space-y-1 paper-shadow-sm">
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-primary font-bold">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>DISCIPLINE</span>
                </div>
                <p className="font-sans text-sm font-bold text-[#141414] dark:text-[#F5F4EE]">
                  Full-Stack Developer
                </p>
              </div>

              {/* Fact 3: Domains */}
              <div className="p-3.5 rounded-sm border border-[#141414]/20 dark:border-white/15 bg-white dark:bg-[#1A1A18] space-y-1 paper-shadow-sm">
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-primary font-bold">
                  <Layers className="w-3.5 h-3.5" />
                  <span>SPECIALTIES</span>
                </div>
                <p className="font-sans text-sm font-bold text-[#141414] dark:text-[#F5F4EE]">
                  Web · Mobile · AI
                </p>
              </div>
            </div>

            {/* Quick Action Link */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href="#projects"
                className="px-4 py-2 rounded-sm bg-[#141414] dark:bg-[#F5F4EE] text-white dark:text-[#141414] font-mono text-xs font-bold tactile-btn flex items-center gap-1.5"
              >
                <span>VIEW SELECTED WORK</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-primary" />
              </a>

              <a
                href="mailto:shivansh.dev2708@gmail.com"
                className="font-mono text-xs text-[#555555] dark:text-[#9C9A92] hover:text-primary transition-colors underline underline-offset-4"
              >
                Get in touch →
              </a>
            </div>
          </div>

          {/* Right Column: Compact Photo Card */}
          <div className="md:col-span-4 flex justify-center md:justify-end">
            <div className="w-48 sm:w-56 rounded-sm border-2 border-[#141414] dark:border-[#3A3832] bg-white dark:bg-[#1A1A18] p-3 space-y-2.5 paper-shadow">
              <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground border-b border-[#141414]/15 dark:border-white/10 pb-1.5">
                <span className="font-bold text-[#141414] dark:text-[#F5F4EE]">
                  AVATAR.PNG
                </span>
                <span className="px-1.5 py-0.5 rounded-[2px] border border-[#141414]/20 dark:border-white/20 text-[9px] font-mono font-bold text-primary bg-[#F0EDE6] dark:bg-[#252422]">
                  PIXEL
                </span>
              </div>

              <div className="relative aspect-square w-full rounded-[2px] overflow-hidden bg-[#FAF8F5] dark:bg-[#121211] border border-[#141414]/20 dark:border-white/10">
                <Image
                  src={pixelAvatar}
                  alt="Shivansh Saxena (Pixel Avatar)"
                  fill
                  className="object-cover pixel-art"
                  priority
                />
              </div>

              <div className="text-center font-mono text-[10px] text-[#555555] dark:text-[#9C9A92] uppercase font-semibold">
                SHIVANSH · DEV_ID #01
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutMe;
