"use client";

import { motion } from "framer-motion";

export const NoiseMeshBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* SVG Grain Noise Overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.04] mix-blend-overlay z-10">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Dynamic Animated Gradient Mesh Orbs */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        {/* Orb 1: Primary Cyan/Mango Accent */}
        <motion.div
          animate={{
            x: [0, 80, -60, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.25, 0.9, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[15%] left-[10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-tr from-primary/20 via-emerald-500/10 to-transparent blur-[140px] opacity-50 dark:opacity-30"
        />

        {/* Orb 2: Deep Violet / Indigo Accent */}
        <motion.div
          animate={{
            x: [0, -90, 70, 0],
            y: [0, 80, -60, 0],
            scale: [1, 1.3, 0.95, 1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute top-[35%] -right-[10%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full bg-gradient-to-br from-indigo-500/15 via-primary/15 to-teal-500/10 blur-[150px] opacity-40 dark:opacity-25"
        />
      </div>

      {/* Code Editor Watermark Grid Lines & Syntax Accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_40%,#000_60%,transparent_100%)] dark:bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)]" />

      {/* Subtle Code Line Numbers Blueprint Accent - Positioned in Top & Bottom Margins ONLY (Exclusion Zone around middle) */}
      <div className="hidden lg:flex flex-col justify-between fixed left-3 top-6 bottom-6 text-[9px] font-mono text-muted-foreground/5 select-none pointer-events-none z-0">
        <div className="space-y-4">
          <div>01 // INIT_CORE</div>
          <div>02 // SYNC_MODULES</div>
        </div>
        <div className="space-y-4">
          <div>07 // GEMINI_AI</div>
          <div>08 // DEPLOY_PROD</div>
        </div>
      </div>
    </div>
  );
};
