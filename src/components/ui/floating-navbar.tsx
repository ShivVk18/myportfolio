"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { JSX } from "react/jsx-runtime";
import { ModeToggle } from "../DarkMode";
import { Terminal } from "lucide-react";

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
  const triggerCmdPalette = () => {
    window.dispatchEvent(
      new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true })
    );
  };

  return (
    <motion.div
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={cn(
        "hidden md:flex",
        "fixed left-6 top-1/2 -translate-y-1/2 z-[5000]",
        "isolate",
        "flex-col items-center gap-3.5 px-3 py-4",
        "rounded-2xl",
        "bg-card/70 dark:bg-card/40",
        "backdrop-blur-xl backdrop-saturate-150",
        "border border-primary/20 dark:border-primary/20",
        "shadow-[0_10px_40px_rgba(0,0,0,0.2)]",
        className
      )}
    >
      {navItems.map((navItem, idx) => (
        <a
          key={`link=${idx}`}
          href={navItem.link}
          title={navItem.name}
          className="
            p-2.5 rounded-xl
            text-muted-foreground
            hover:bg-primary/10 hover:text-primary
            transition-all duration-200
          "
          data-cursor="pointer"
        >
          {navItem.icon}
        </a>
      ))}

      {/* Divider */}
      <span className="w-6 h-px bg-border/60 my-1" />

      {/* Command Palette Quick Button */}
      <button
        onClick={triggerCmdPalette}
        title="Command Palette (⌘K)"
        className="
          p-2.5 rounded-xl
          text-primary bg-primary/10 hover:bg-primary/20
          transition-all duration-200
        "
        data-cursor="pointer"
      >
        <Terminal size={18} />
      </button>

      {/* Theme Toggle */}
      <ModeToggle />
    </motion.div>
  );
};
