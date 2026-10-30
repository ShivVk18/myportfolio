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
      <div aria-hidden="true" className="absolute inset-x-0 -top-1 h-2 overflow-hidden">
        <motion.span
          className="absolute inset-x-0 top-1 h-px origin-left bg-hairline"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: inView ? 1 : 0 }}
          transition={{ duration: reduce ? 0 : 1.1, ease: EASE }}
        />
        {!reduce && (
          <motion.span
            className="absolute inset-x-0 top-1"
            initial={{ x: "0%", opacity: 0 }}
            animate={inView ? { x: "100%", opacity: [0, 1, 1, 0] } : {}}
            transition={{ duration: 1.1, ease: EASE, opacity: { times: [0, 0.1, 0.8, 1], duration: 1.1 } }}
          >
            <span className="absolute left-0 top-0 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
          </motion.span>
        )}
      </div>

      <div className="col-gutter lg:sticky lg:top-[120px] lg:self-start">
        <MaskLines
          as="h2"
          id={`${id}-title`}
          lines={[<span key="n" className="text-accent-text">{number}</span>, name]}
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
