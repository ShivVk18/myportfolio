"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Linkedin, Terminal, ArrowUpRight, Code2, CheckCircle } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { profilePic } from "../../../public/images";
import { MagneticButton } from "../ui/MagneticButton";

// Scroll Typewriter Tag Component
const TypewriterTag = ({ text }: { text: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!isInView) return;
    let i = 0;
    const timer = setInterval(() => {
      if (i <= text.length) {
        setDisplayedText(text.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isInView, text]);

  return (
    <div
      ref={ref}
      className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-primary/35 bg-primary/10 backdrop-blur-xl font-mono text-xs sm:text-sm text-foreground font-semibold max-w-full shadow-sm"
    >
      <Code2 className="w-4 h-4 text-primary shrink-0" />
      <span className="break-all sm:break-normal">{displayedText}</span>
      <span className="w-1.5 h-4 bg-primary animate-pulse shrink-0" />
    </div>
  );
};

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen py-24 overflow-hidden"
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-8 md:pl-28 lg:pl-32 lg:pr-16 max-w-7xl">
        
        {/* Asymmetric Section Header */}
        <div className="flex flex-col items-start mb-16 relative">
          <div className="flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-widest mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>{"// 01. ABOUT_ME.ts"}</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-heading text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-muted-foreground uppercase"
          >
            Personal <span className="text-primary">Statement</span>
          </motion.h2>

          <div className="h-1 w-28 bg-gradient-to-r from-primary via-cyan-400 to-transparent rounded-full mt-4" />
        </div>

        {/* 2-Column Asymmetric Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Personal Statement Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Typewriter Tagline */}
            <TypewriterTag text="Full-Stack Web Developer · UI-Focused · Problem Solver" />

            {/* Paragraph Rhythm: Punchy Bold Opening Line */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-snug font-heading">
                I build high-scale web products with clean code, modern architecture, and purposeful UI.
              </h3>

              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground font-sans">
                My approach bridges technical rigor with aesthetic precision — engineering fast React &amp; Next.js applications, robust PostgreSQL databases, and real-time AI integrations.
              </p>

              <p className="text-base text-muted-foreground/80 font-sans">
                Currently, I am deep diving into native iOS development to expand cross-platform engineering capabilities while continuing to deliver full-stack web solutions.
              </p>
            </div>

            {/* Social Connect Button */}
            <div className="pt-4 flex items-center gap-4">
              <MagneticButton href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <div className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-primary/30 bg-card/80 text-foreground rounded-xl font-medium hover:border-primary transition-all backdrop-blur-xl shadow-lg text-sm group">
                  <Linkedin className="w-4 h-4 text-primary" />
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </MagneticButton>
            </div>
          </motion.div>

          {/* Right Column: Iris/Wipe Mask Animated Photo with Duotone Dark Rim Glow */}
          <div className="lg:col-span-5 flex justify-center perspective-[1000px]">
            <motion.div
              initial={{ clipPath: "circle(0% at 50% 50%)" }}
              whileInView={{ clipPath: "circle(75% at 50% 50%)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative group p-3 w-full max-w-md"
            >
              {/* Soft Orange Rim Light Glow Container */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/40 via-amber-500/20 to-transparent blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Duotone Dark Profile Frame */}
              <div className="relative rounded-3xl border border-primary/40 bg-card/90 p-4 backdrop-blur-2xl shadow-2xl space-y-3">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-neutral-950 border border-primary/30">
                  <Image
                    src={profilePic}
                    alt="Shivansh Saxena"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale contrast-125 brightness-90 mix-blend-luminosity"
                    priority
                  />
                  {/* Duotone Tint Overlay (Black + Orange Rim Light Glow) */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black via-primary/10 to-primary/25 mix-blend-overlay pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />

                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-xs font-mono">
                    <div>
                      <div className="text-foreground font-bold text-base">Shivansh Saxena</div>
                      <div className="text-primary font-semibold">Full-Stack Engineer</div>
                    </div>
                    <div className="px-2 py-1 rounded bg-card/90 border border-primary/30 text-[10px] text-emerald-400 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> VERIFIED
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
