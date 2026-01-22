"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete?: () => void;
}

const PortfolioPreloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setDone(true);
            onComplete?.();
          }, 700);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (done) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="
        fixed inset-0 z-50 flex items-center justify-center overflow-hidden
        bg-white dark:bg-black
        transition-colors duration-300
      "
    >
      {/* GRID OVERLAY */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(45,212,191,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.035)_1px,transparent_1px)]
          dark:bg-[linear-gradient(rgba(45,212,191,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.025)_1px,transparent_1px)]
          bg-[size:80px_80px]
          [mask-image:radial-gradient(ellipse_70%_45%_at_50%_50%,black,transparent)]
        "
      />

      {/* LEFT CODE */}
      <div className="absolute top-24 left-4 sm:left-10 space-y-2 text-xs font-mono text-teal-500/25 dark:text-teal-300/25">
        {["<Developer />", "const loading = true;", "import { vision } from 'react';"].map(
          (line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              {line}
            </motion.div>
          )
        )}
      </div>

      {/* RIGHT CODE */}
      <div className="absolute bottom-24 right-4 sm:right-10 space-y-2 text-xs font-mono text-emerald-500/25 dark:text-emerald-300/25 text-right">
        {["// crafting products", "export default Portfolio;", "</>"].map(
          (line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 + 0.3, duration: 0.5 }}
            >
              {line}
            </motion.div>
          )
        )}
      </div>

      {/* CENTER */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">

        {/* ORBIT RINGS */}
        <div className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] pointer-events-none">
          {[0, 18, 36].map((offset, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                inset: `${offset}px`,
                border: `1px solid rgba(45,212,191,${0.2 - i * 0.05})`,
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 40 - i * 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* AMBIENT GLOW */}
        <motion.div
          className="
            absolute w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80
            rounded-full
            bg-gradient-to-r from-teal-400/25 via-emerald-400/25 to-cyan-400/25
            blur-[110px]
          "
          animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, y: [0, -4, 0] }}
          transition={{
            opacity: { delay: 0.6, duration: 0.6 },
            scale: { delay: 0.6, duration: 0.6 },
            y: { delay: 1.2, duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="relative mb-10"
        >
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
            <Image
              src="/images/logo.png"
              alt="Portfolio Logo"
              fill
              priority
              className="object-contain drop-shadow-[0_0_40px_rgba(45,212,191,0.7)]"
            />
          </div>
        </motion.div>

        {/* STATUS TEXT */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.4 }}
          className="
            text-xl sm:text-2xl md:text-3xl font-semibold
            bg-clip-text text-transparent
            bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400
          "
        >
          {progress < 40 && "Initializing"}
          {progress >= 40 && progress < 80 && "Loading"}
          {progress >= 80 && "Almost Ready"}
          <motion.span
            className="inline-block ml-1"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            ...
          </motion.span>
        </motion.h1>

        {/* PROGRESS BAR */}
        <div className="mt-8 w-56 sm:w-64 md:w-72">
          <div className="h-[2px] bg-black/10 dark:bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: progress / 100 }}
              style={{ transformOrigin: "left" }}
              transition={{ duration: 0.25 }}
            />
          </div>
        </div>

        {/* PERCENT */}
        <motion.div
          key={progress}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 0.2 }}
          className="mt-3 text-sm sm:text-base font-medium text-teal-500/80 dark:text-teal-300/80"
        >
          {progress}%
        </motion.div>
      </div>

      {/* SCANLINES */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <motion.div
          className="w-full h-full"
          animate={{ y: ["0%", "100%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(45,212,191,0.25) 2px, rgba(45,212,191,0.25) 4px)",
          }}
        />
      </div>
    </motion.div>
  );
};

export default PortfolioPreloader;
