"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ModeToggle } from "../DarkMode";
import { pixelAvatar } from "../../../public/images";
import { Menu, X, ArrowUpRight } from "lucide-react";

export interface NavItem {
  name: string;
  link: string;
  num: string;
}

export const navItems: NavItem[] = [
  { name: "ABOUT", link: "#about", num: "01" },
  { name: "STACK", link: "#skills", num: "02" },
  { name: "WORK", link: "#projects", num: "03" },
  { name: "EXPERIENCE", link: "#experience", num: "04" },
  { name: "CONTACT", link: "#contact", num: "05" },
];

export const TopNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "projects", "about", "skills", "experience", "contact"];
      const scrollY = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF8F5]/95 dark:bg-[#121211]/95 backdrop-blur-md border-b-2 border-[#141414] dark:border-[#3A3832] transition-colors">
      <div className="max-w-[1140px] w-[90%] sm:w-[88%] mx-auto py-2.5 sm:py-3 flex items-center justify-between gap-4">
        
        {/* Brand: Editorial Print Header */}
        <a
          href="#hero"
          className="flex items-center gap-3 group select-none"
          aria-label="Shivansh Saxena Home"
        >
          {/* Pixel Avatar Box */}
          <div className="relative w-8 h-8 rounded-sm overflow-hidden border-2 border-[#141414] dark:border-white/20 bg-[#FFFFFF] dark:bg-[#1E1E1C] paper-shadow-sm group-hover:-translate-y-0.5 transition-transform shrink-0">
            <Image
              src={pixelAvatar}
              alt="Shivansh Pixel Avatar"
              fill
              className="object-cover pixel-art"
              priority
            />
          </div>

          <div className="flex flex-col text-left">
            <span className="font-heading font-black tracking-tight text-base sm:text-lg text-[#141414] dark:text-[#F5F4EE] leading-none group-hover:text-primary transition-colors">
              SHIVANSH SAXENA
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-[10px] font-mono text-[#555555] dark:text-[#9C9A92] uppercase tracking-wider font-semibold">
                FULL-STACK DEVELOPER
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
            </div>
          </div>
        </a>

        {/* Center Desktop Navigation: Minimal Editorial Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.link.replace("#", "");
            return (
              <a
                key={item.name}
                href={item.link}
                className={`px-3 py-1.5 text-xs lg:text-sm font-mono tracking-wide rounded-sm transition-all flex items-center gap-1.5 ${
                  isActive
                    ? "text-[#141414] dark:text-[#FFFFFF] font-bold bg-[#EFECE6] dark:bg-[#252422] border border-[#141414] dark:border-white/20 paper-shadow-sm"
                    : "text-[#4A4A4A] dark:text-[#9C9A92] hover:text-[#141414] dark:hover:text-[#FFFFFF] hover:bg-[#EFECE6]/60 dark:hover:bg-[#252422]/60"
                }`}
              >
                <span className="text-[10px] text-primary font-bold">{item.num}</span>
                <span>{item.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Desktop Utilities: Resume Button, Command Palette, Dark Mode */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Integrated Persistent RESUME ↗ Button */}
          <a
            href="https://drive.google.com/file/d/1cI3seyZ0gpCzkRKnG1vkeePFBwpEFgpg/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-sm bg-[#141414] dark:bg-[#F5F4EE] text-[#FFFFFF] dark:text-[#141414] text-xs font-mono font-bold border-2 border-[#141414] dark:border-[#FFFFFF] tactile-btn flex items-center gap-1.5"
            data-cursor="pointer"
          >
            <span>RESUME</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-primary dark:text-[#FF4D00]" />
          </a>

          {/* Theme Toggle */}
          <ModeToggle />
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <ModeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-sm border-2 border-[#141414] dark:border-white/20 bg-[#FFFFFF] dark:bg-[#1C1C1A] text-foreground paper-shadow-sm"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t-2 border-[#141414] dark:border-[#3A3832] bg-[#FAF8F5] dark:bg-[#121211] p-5 space-y-4">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-sm border border-[#141414]/15 dark:border-white/10 bg-[#FFFFFF] dark:bg-[#1C1C1A] font-mono text-sm font-bold text-[#141414] dark:text-[#F5F4EE] flex items-center justify-between"
              >
                <span>{item.name}</span>
                <span className="text-xs text-primary font-mono">{item.num} →</span>
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://drive.google.com/file/d/1cI3seyZ0gpCzkRKnG1vkeePFBwpEFgpg/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-sm bg-[#141414] dark:bg-[#F5F4EE] text-white dark:text-[#141414] font-mono text-xs font-bold text-center border-2 border-[#141414] dark:border-white flex items-center justify-center gap-2 paper-shadow-sm"
            >
              <span>DOWNLOAD RESUME</span>
              <ArrowUpRight className="w-4 h-4 text-primary" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default TopNav;
