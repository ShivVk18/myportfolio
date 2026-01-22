"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { JSX } from "react/jsx-runtime";
import { ModeToggle } from "../DarkMode";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={cn(
          "hidden md:flex", // 👈 important
  "fixed left-6 top-1/2 -translate-y-1/2 z-[5000]",
  "isolate",
  "flex-col items-center gap-4 px-3 py-4",
  "rounded-xl",
  "bg-white/60 dark:bg-black/40",
  "backdrop-blur-md backdrop-saturate-150",
  "border border-white/30 dark:border-white/10",
  "shadow-[0_8px_30px_rgba(0,0,0,0.12)]",
        className
      )}
    >
      {navItems.map((navItem, idx) => (
        <a
          key={`link=${idx}`}
          href={navItem.link}
          title={navItem.name}
          className="
            p-2 rounded-lg
            text-neutral-700 dark:text-neutral-300
            hover:bg-white/60 dark:hover:bg-white/10
            hover:text-black dark:hover:text-white
            transition-all duration-200
          "
        >
          {navItem.icon}
        </a>
      ))}

      {/* Divider */}
      <span className="w-6 h-px bg-neutral-300/60 dark:bg-white/20 my-1" />

      {/* Theme Toggle */}
      <ModeToggle />
    </motion.div>
  );
};
