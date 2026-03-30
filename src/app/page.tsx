'use client'

import PortfolioPreloader from "@/components/PreLoader";
import AboutMe from "@/components/sections/AboutMe";
import Experience from "@/components/sections/Experience";

import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Project";
import { Skills } from "@/components/sections/Skills";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { MobileBottomNav } from "@/components/ui/MobileBottomNav";
import { navItems } from "@/data/navItems";
import { useState } from "react";


export default function Home() {

  const [isLoading,setIsLoading] = useState(false)
  
  return (
    <main className="relative min-h-screen bg-background text-foreground transition-colors duration-500 overflow-hidden">
      {/* Global Ambient Background */}
      <div className="fixed inset-0 z-[1] pointer-events-none bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]" />
      <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="relative z-10">
      {/* Floating Navigation */}
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
      <section id="hero" className="min-h-screen ">
        <Hero />
      </section>

      {/* About Me Section */}
      <section id="about" className="min-h-screen ">
        <div className="container mx-auto px-4">
          <AboutMe />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen ">
        <div className="container mx-auto px-4">
          <Skills />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen ">
        <div className="container mx-auto px-4">
          <Projects />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen ">
        <div className="container mx-auto px-4">
          <Experience />
        </div>
      </section>
      </div>
    </main>
  );
}
