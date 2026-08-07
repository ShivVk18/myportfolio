"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitCommit, Clock } from "lucide-react";

export const DevActivityWidget = () => {
  const [timeStr, setTimeStr] = useState<string>("");
  const [activeCommitIdx, setActiveCommitIdx] = useState(0);

  const commits = [
    { hash: "7f92a1b", msg: "feat(ai): optimize Gemini API pipeline for AscendAi", time: "12m ago" },
    { hash: "3e481c9", msg: "perf: add schema-validated outputs in FitFusion AI", time: "45m ago" },
    { hash: "9b01f42", msg: "style: responsive glassmorphic design system", time: "2h ago" },
    { hash: "c410e88", msg: "refactor: WebSocket real-time sync for SplitMates", time: "5h ago" },
  ];

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
          timeZone: "Asia/Kolkata",
        })
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    const commitTimer = setInterval(() => {
      setActiveCommitIdx((prev) => (prev + 1) % commits.length);
    }, 4500);

    return () => {
      clearInterval(timer);
      clearInterval(commitTimer);
    };
  }, [commits.length]);

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-3.5 rounded-2xl bg-card/60 border border-primary/20 backdrop-blur-xl shadow-xl font-mono text-xs text-foreground">
      {/* Live Status Indicator */}
      <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-primary/10 border border-primary/20 shrink-0">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span className="text-[11px] font-semibold text-emerald-400">
          Available for Hire
        </span>
      </div>

      {/* Vertical / Horizontal Divider */}
      <div className="hidden sm:block w-px h-6 bg-border/60" />

      {/* Live Commit Feed Ticker */}
      <div className="flex-1 overflow-hidden relative min-h-[22px] flex items-center">
        <motion.div
          key={activeCommitIdx}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="flex items-center gap-2 text-[11px] text-muted-foreground truncate"
        >
          <GitCommit className="w-3.5 h-3.5 text-primary shrink-0" />
          <span className="text-primary/90 font-bold shrink-0">
            [{commits[activeCommitIdx].hash}]
          </span>
          <span className="truncate text-foreground font-medium">
            {commits[activeCommitIdx].msg}
          </span>
          <span className="text-[10px] text-muted-foreground/60 shrink-0 hidden md:inline">
            · {commits[activeCommitIdx].time}
          </span>
        </motion.div>
      </div>

      {/* Location & Local Time Widget */}
      <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-secondary/50 border border-border/40 text-[10px] text-muted-foreground shrink-0">
        <Clock className="w-3 h-3 text-cyan-400" />
        <span>Bhopal, IN</span>
        <span className="text-foreground font-bold">{timeStr}</span>
      </div>
    </div>
  );
};
