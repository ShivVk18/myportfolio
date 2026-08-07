"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Terminal, Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 50%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "MindIn",
      location: "Remote",
      period: "Aug 2025 – Nov 2025",
      type: "Internship",
      tech: ["React Native", "Node.js", "WebSockets", "Gemini API", "NativeWind"],
      bullets: [
        "Collaborated closely with founders and product teams to build the MVP for a mental health startup.",
        "Took end-to-end ownership of features in an agile environment.",
      ],
    },
    {
      title: "Graduate Engineer Trainee",
      company: "MPSEDC",
      location: "On-Site",
      period: "Nov 2025 – Present",
      type: "Full-Time",
      tech: ["React.js", "Bootstrap", "ERP Systems", "JavaScript"],
      bullets: [
        "Designed and implemented responsive frontend pages for a Housing ERP system.",
        "Gained hands-on experience with sprint-based delivery and large-scale CMS architecture.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full min-h-screen py-24 overflow-hidden px-4 sm:px-8 md:pl-28 lg:pl-32 lg:pr-16"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Asymmetric Section Header */}
        <div className="flex flex-col items-start mb-16 relative">
          <div className="flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-widest mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>{"// 04. EXPERIENCE_TIMELINE.ts"}</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-heading text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-muted-foreground uppercase"
          >
            Career <span className="text-primary">Timeline</span>
          </motion.h2>

          <div className="h-1 w-28 bg-gradient-to-r from-primary via-rose-400 to-transparent rounded-full mt-4" />
        </div>

        {/* Timeline Area with Scroll Line & Snap Nodes */}
        <div className="relative max-w-4xl mx-auto py-6">

          {/* Background Static Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-border/40 -translate-x-1/2" />

          {/* Animated Scroll-Driven Foreground Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 sm:left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary via-amber-400 to-primary -translate-x-1/2 shadow-[0_0_15px_var(--color-primary)]"
          />

          <div className="space-y-16">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={exp.title + exp.company}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot Snap Node (Spring Overshoot) */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 350, damping: 18 }}
                    className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 z-20 w-9 h-9 rounded-full border-2 border-primary bg-background flex items-center justify-center shadow-[0_0_20px_var(--color-primary)]"
                  >
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  </motion.div>

                  {/* Connecting Line from Dot to Card */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "24px" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className={`hidden sm:block absolute top-10 h-0.5 bg-primary/60 z-10 ${
                      isEven ? "right-1/2 translate-x-0" : "left-1/2 translate-x-0"
                    }`}
                  />

                  {/* Side-Specific Sliding Card (Left slides from left -60px, Right slides from right 60px) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full sm:w-[calc(50%-40px)] pl-12 sm:pl-0 ${
                      isEven ? "sm:pr-8" : "sm:pl-8"
                    }`}
                  >
                    <div className="p-6 sm:p-8 rounded-3xl bg-card/75 border border-border/80 hover:border-primary/60 backdrop-blur-xl shadow-xl space-y-4 group transition-all">
                      
                      {/* Prominent Date Pill & Type */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="px-3 py-1 text-xs font-mono font-bold rounded-lg bg-primary/15 border border-primary/30 text-primary flex items-center gap-1.5 shadow-sm">
                          <Calendar className="w-3.5 h-3.5 text-primary" />
                          <span>{exp.period}</span>
                        </span>

                        <span className="px-2.5 py-0.5 text-[10px] font-mono rounded-md bg-secondary border border-border/50 text-muted-foreground font-semibold">
                          {exp.type}
                        </span>
                      </div>

                      {/* Title & Company */}
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>

                        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mt-1">
                          <Briefcase className="w-3.5 h-3.5 text-primary" />
                          <span className="text-foreground font-semibold">{exp.company}</span>
                          <span>·</span>
                          <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Staggered Tech Badges */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="pt-2 flex flex-wrap gap-1.5 border-t border-border/30"
                      >
                        {exp.tech.map((t, tIdx) => (
                          <motion.span
                            key={t}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.45 + tIdx * 0.05 }}
                            className="px-2.5 py-1 text-[10px] font-mono rounded-md bg-secondary/80 border border-border/40 text-muted-foreground"
                          >
                            {t}
                          </motion.span>
                        ))}
                      </motion.div>

                      {/* Bullets */}
                      <ul className="pt-2 space-y-2 text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed">
                        {exp.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary font-bold text-base leading-none">›</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
