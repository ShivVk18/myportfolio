"use client";

import { motion } from "motion/react";

export const Hero = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden px-4 sm:px-6">
      
      {/* Liquid Aurora Background Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-r from-primary/30 via-secondary/20 to-accent/30 blur-[120px] mix-blend-screen opacity-50 dark:opacity-40"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-l from-primary/20 via-accent/30 to-secondary/20 blur-[120px] mix-blend-screen opacity-50 dark:opacity-40"
        />
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[50px] mix-blend-overlay" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto pt-20">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 px-4 py-2 rounded-full border border-primary/20 bg-background/50 backdrop-blur-md flex items-center gap-2 group cursor-default shadow-sm"
        >
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
          </div>
          <span className="text-xs sm:text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors">
            Available for new opportunities
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-[1.1] sm:leading-none bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground/90 to-muted-foreground drop-shadow-sm pb-4">
            Shivansh Saxena
          </h1>
          
          {/* Subtle Glow Behind Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-primary/20 blur-[100px] -z-10 rounded-full mix-blend-screen opacity-50" />
        </motion.div>

        {/* Role Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-2 sm:mt-6 overflow-hidden"
        >
          <h2 className="text-lg sm:text-2xl md:text-3xl font-light text-muted-foreground tracking-wide">
            Crafting <span className="font-semibold text-foreground">Digital Excellence</span> through Code
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mt-6 sm:mt-8 text-sm sm:text-lg text-muted-foreground/80 max-w-2xl leading-relaxed mx-auto font-medium"
        >
          I build scalable web applications with a focus on performance, aesthetic design, and exceptional user experiences. Transforming complex problems into elegant interfaces.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-12 w-full sm:w-auto items-center justify-center perspective-[1000px]"
        >
          <motion.a
            href="/Shivansh_Saxena_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, translateY: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-primary text-primary-foreground font-semibold text-base sm:text-lg py-4 px-10 shadow-[0_0_40px_-10px_var(--color-primary)] transition-shadow hover:shadow-[0_0_60px_-10px_var(--color-primary)]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View Resume
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.02, translateY: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full sm:w-auto rounded-full bg-secondary text-secondary-foreground border border-border/50 font-semibold text-base sm:text-lg py-4 px-10 hover:bg-secondary/80 transition-colors"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get in Touch
            </span>
          </motion.button>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Hero;
