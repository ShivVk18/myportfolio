"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { EASE } from "@/lib/motion";
import { MaskLines } from "./MaskLines";
import { WordReveal } from "./WordReveal";

type Props = {
  id: string;
  number: string;
  name: string;
  title?: string;
  titleMuted?: string;
  children?: React.ReactNode;
  /** Full-width row under the content (cols 1–12), e.g. a marquee. */
  after?: React.ReactNode;
};

export function Section({ id, number, name, title, titleMuted, children, after }: Props) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });

  return (
    <section
      ref={ref}
      id={id}
      aria-labelledby={`${id}-title`}
      className="grid-12 relative mt-20 scroll-mt-8 pt-8 lg:mt-30"
    >
      {/* Divider draws left → right with a dot riding along it. Clipped so the dot never widens the page. */}
      <motion.div
        aria-hidden="true"
        className="bg-stripes absolute inset-x-0 -top-3 h-3 origin-left border-y border-hairline"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: inView ? 1 : 0 }}
        transition={{ duration: reduce ? 0 : 1.1, ease: EASE }}
      />

      <div className="col-gutter lg:sticky lg:top-[120px] lg:self-start">
        <MaskLines
          as="h2"
          id={`${id}-title`}
          lines={[<span key="n" className="text-ink">{number}</span>, name]}
          className="mono-label text-muted"
        />
      </div>

      {(title || children) && (
        <div className="col-content relative mt-6 lg:mt-0">
          {title && (
            <WordReveal
              text={title}
              muted={titleMuted}
              className="mb-10 text-[clamp(2rem,4.4vw,3.5rem)] font-semibold leading-[1.04] tracking-[-0.035em]"
            />
          )}
          {children}
        </div>
      )}

      {after && <div className="relative col-span-12 mt-8">{after}</div>}
    </section>
  );
}
