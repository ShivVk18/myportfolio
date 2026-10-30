"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { profile } from "@/data/profile";
import { rise } from "@/lib/motion";
import { Clock } from "./Clock";
import { ThemeToggle } from "./ThemeToggle";
import { PaletteHint } from "./CommandPalette";

export function Identity() {
  return (
    <div className="grid-12 relative z-10">
      {/* Avatar overlaps the cover's bottom-left edge, sitting in the gutter. */}
      <motion.div {...rise(1, { scale: 0.8 })} className="col-gutter -mt-12 pl-5 sm:-mt-14 sm:pl-6">
        <Image
          src={profile.avatar}
          alt={`Pixel-art portrait of ${profile.name}`}
          width={104}
          height={104}
          priority
          className="size-24 rounded-2xl border-4 border-paper bg-paper [image-rendering:pixelated] sm:size-26"
        />
      </motion.div>

      <div className="col-content mt-5 flex flex-wrap items-start justify-between gap-x-6 gap-y-4">
        <div>
          <motion.h1 {...rise(2)} className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            {profile.name}
          </motion.h1>
          <motion.p {...rise(3)} className="mono-label mt-2 text-muted">
            {profile.subtitle}
          </motion.p>
        </div>
        <motion.div {...rise(3)} className="flex items-center gap-4 sm:pt-2">
          <Clock />
          <ThemeToggle />
          <PaletteHint />
        </motion.div>
      </div>

      <motion.p {...rise(4)} className="col-content mt-8 max-w-[62ch] text-lg leading-relaxed text-pretty">
        {profile.intro}
      </motion.p>

      <motion.div {...rise(5)} className="col-content mt-6">
        <span className="mono-label inline-flex items-center gap-2.5 rounded-full border border-hairline px-3 py-1.5 text-muted">
          <span className="relative flex size-2" aria-hidden="true">
            <span className="pulse-ring absolute inset-0 rounded-full bg-accent" />
            <span className="relative size-2 rounded-full bg-accent" />
          </span>
          {profile.status}
        </span>
      </motion.div>
    </div>
  );
}
