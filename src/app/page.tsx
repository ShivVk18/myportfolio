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
     <main className="relative min-h-screen bg-white dark:bg-black">
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

      {/* Contact Section */}
      <section id="experience" className="min-h-screen ">
        <div className="container mx-auto px-4">
          <Experience />
        </div>
      </section>
    </main>
  );
}
