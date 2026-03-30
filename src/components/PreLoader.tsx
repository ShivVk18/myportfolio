"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete?: () => void;
}

const PortfolioPreloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Easing-based fake loading progress
    const start = Date.now();
    const duration = 2500; // 2.5 seconds total

    const timer = setInterval(() => {
      const timePassed = Date.now() - start;
      let rawProgress = (timePassed / duration) * 100;

      if (rawProgress > 100) rawProgress = 100;

      setProgress(Math.floor(rawProgress));

      if (rawProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setDone(true);
          onComplete?.();
        }, 600); // Hold at 100% briefly before resolving
      }
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (done) return null;

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, filter: "blur(10px)", transition: { duration: 0.8, ease: "easeInOut" } }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background overflow-hidden"
      >
        <div className="flex flex-col items-center gap-8 px-4 w-full max-w-sm sm:max-w-md relative z-10">
          
          {/* Typographic Counter */}
          <div className="relative overflow-hidden flex justify-center w-full">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-8xl sm:text-[10rem] font-black tracking-tighter text-foreground tabular-nums leading-none"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {progress < 10 ? `0${progress}` : progress}
              </motion.span>
              <span className="text-4xl sm:text-6xl text-muted-foreground/50 absolute bottom-4 sm:bottom-6 ml-1">%</span>
            </motion.div>
          </div>

          {/* Minimalist Loading Bar */}
          <div className="w-full relative">
            <div className="w-full h-[1px] sm:h-[2px] bg-border relative overflow-hidden rounded-full">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: progress / 100 }}
                style={{ transformOrigin: "left" }}
                transition={{ duration: 0.1, ease: "linear" }}
                className="absolute inset-0 bg-foreground h-full rounded-full"
              />
            </div>
            
            {/* Subtle glow on the loading bar */}
            <motion.div
              className="absolute left-0 top-1/2 -translate-y-1/2 h-4 bg-primary/20 blur-md pointer-events-none rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "linear" }}
            />
          </div>

          {/* Status Label */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex w-full justify-between items-center text-[10px] sm:text-xs font-semibold tracking-widest text-muted-foreground uppercase"
          >
            <span>Loading Experience</span>
            <span>{progress === 100 ? "System Ready" : "Please Wait"}</span>
          </motion.div>
        </div>

        {/* Ambient subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      </motion.div>
    </AnimatePresence>
  );
};

export default PortfolioPreloader;
