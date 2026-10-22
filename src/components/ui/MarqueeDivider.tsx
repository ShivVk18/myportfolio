"use client";

import React from "react";

interface MarqueeDividerProps {
  text?: string;
  className?: string;
  speed?: string;
}

export const MarqueeDivider: React.FC<MarqueeDividerProps> = ({
  text = "FULL-STACK DEVELOPER • REACT & NEXT.JS • NODE.JS & FASTAPI • POSTGRESQL • SYSTEMS THINKING • AI INTEGRATIONS • BHOPAL, IN • SHIPPING REAL VALUE •",
  className = "",
}) => {
  return (
    <div
      className={`w-full overflow-hidden border-y-2 border-[#141414] dark:border-[#3A3832] bg-[#F0EDE6] dark:bg-[#1A1A18] py-2.5 select-none ${className}`}
      aria-hidden="true"
    >
      <div className="flex w-max animate-[marquee_28s_linear_infinite] whitespace-nowrap font-mono text-xs sm:text-sm font-bold tracking-wider text-[#141414] dark:text-[#F5F4EE]">
        <span className="mr-6">{text}</span>
        <span className="mr-6">{text}</span>
        <span className="mr-6">{text}</span>
        <span className="mr-6">{text}</span>
      </div>
    </div>
  );
};

export default MarqueeDivider;
