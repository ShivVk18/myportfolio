"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../DarkMode";

export const MobileBottomNav = ({
  navItems,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
}) => {
  return (
    <div
      className={cn(
        "md:hidden fixed bottom-4 inset-x-4 z-[5000]",
        "flex items-center justify-between px-4 py-3",
        "rounded-xl",
        "bg-white/70 dark:bg-black/50",
        "backdrop-blur-md",
        "border border-white/30 dark:border-white/10",
        "shadow-lg"
      )}
    >
      {navItems.map((navItem, idx) => (
        <a
          key={idx}
          href={navItem.link}
          className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white"
        >
          {navItem.icon}
        </a>
      ))}

      <ModeToggle />
    </div>
  );
};
