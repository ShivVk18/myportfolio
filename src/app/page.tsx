'use client';

import { useState } from "react";
import PortfolioPreloader from "@/components/PreLoader";
import AboutMe from "@/components/sections/AboutMe";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Project";
import { Skills } from "@/components/sections/Skills";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { MobileBottomNav } from "@/components/ui/MobileBottomNav";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { NoiseMeshBackground } from "@/components/ui/NoiseMeshBackground";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { navItems } from "@/data/navItems";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main className="relative min-h-screen bg-background text-foreground transition-colors duration-500 overflow-hidden font-sans selection:bg-primary/25 selection:text-primary">
      {/* Custom Interactive Ring/Dot Cursor */}
      <CustomCursor />

      {/* Dynamic Animated Noise & Mesh Background */}
      <NoiseMeshBackground />

      {/* Cmd+K Command Palette Modal */}
      <CommandPalette />

      <div className="relative z-10">
        {/* Preloader if active */}
        {isLoading && (
          <PortfolioPreloader onComplete={() => setIsLoading(false)} />
        )}

        {!isLoading && (
          <>
            <FloatingNav navItems={navItems} />
            <MobileBottomNav navItems={navItems} />
          </>
        )}

        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center">
          <Hero />
        </section>

        {/* About Me Section */}
        <section id="about" className="min-h-screen flex items-center justify-center">
          <AboutMe />
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen flex items-center justify-center">
          <Skills />
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center justify-center">
          <Projects />
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen flex items-center justify-center">
          <Experience />
        </section>
      </div>
    </main>
  );
}
