'use client';

import { motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Project";
import Experience from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import { CornerIdentity } from "@/components/ui/CornerIdentity";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { NoiseMeshBackground } from "@/components/ui/NoiseMeshBackground";
import { MarqueeDivider } from "@/components/ui/MarqueeDivider";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative min-h-screen bg-background text-foreground transition-colors duration-300 overflow-x-hidden font-sans selection:bg-[#FF4D00] selection:text-white"
    >
      {/* Precision Pixel / Retro Crosshair Cursor */}
      <CustomCursor />

      {/* Warm Subtle Paper Texture, Blueprint Guides & Minimalist Drafting Grid */}
      <NoiseMeshBackground />

      {/* Unobtrusive Fixed Corner Identity & Utilities (No traditional navbar) */}
      <CornerIdentity />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* 1. Hero Poster Section */}
        <Hero />

        {/* Subtle Horizontal Typographic Marquee Divider */}
        <MarqueeDivider
          text="FULL-STACK DEVELOPER • REACT & NEXT.JS • NODE.JS & FASTAPI • POSTGRESQL • SYSTEMS ARCHITECTURE • AI INTEGRATIONS • BHOPAL, IN • SHIPPING REAL VALUE •"
        />

        {/* 2. Selected Projects Case Archive (01) */}
        <Projects />

        {/* 3. Work Experience Section (02) */}
        <Experience />

        {/* 4. Skills & Tech Stack Section (03) */}
        <Skills />

        {/* 5. Contact & Footer Section (04) */}
        <Contact />
      </div>
    </motion.main>
  );
}
