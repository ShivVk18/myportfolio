'use client';

import { motion } from "framer-motion";
import AboutMe from "@/components/sections/AboutMe";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Project";
import { Skills } from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import { TopNav } from "@/components/ui/TopNav";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { NoiseMeshBackground } from "@/components/ui/NoiseMeshBackground";
import { MarqueeDivider } from "@/components/ui/MarqueeDivider";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative min-h-screen bg-background text-foreground transition-colors duration-300 overflow-x-hidden font-sans selection:bg-[#FF4D00] selection:text-white"
    >
      {/* Precision Pixel / Retro Crosshair Cursor */}
      <CustomCursor />

      {/* Warm Subtle Paper Texture & Minimalist Drafting Grid */}
      <NoiseMeshBackground />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Editorial Top Navigation */}
        <TopNav />

        {/* Hero Section */}
        <Hero />

        {/* Subtle Horizontal Typographic Marquee Divider */}
        <MarqueeDivider
          text="FULL-STACK DEVELOPER • REACT & NEXT.JS • NODE.JS & FASTAPI • POSTGRESQL • SYSTEMS ARCHITECTURE • AI INTEGRATIONS • BHOPAL, IN • SHIPPING REAL VALUE •"
        />

        {/* About Me Section (01) */}
        <AboutMe />

        {/* Skills & Tech Stack Section (02) */}
        <Skills />

        {/* Selected Projects Case Archive (03) */}
        <Projects />

        {/* Work Experience Section (04) */}
        <Experience />

        {/* Contact & Footer Section (05) */}
        <Contact />
      </div>
    </motion.main>
  );
}
