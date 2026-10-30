// One easing for the whole site.
export const EASE = [0.22, 1, 0.36, 1] as const;

/** Load-sequence entry: element `i` waits i × 80ms. */
export const rise = (i: number, from: { y?: number; scale?: number } = { y: 16 }) => ({
  initial: { opacity: 0, ...from },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.7, ease: EASE, delay: i * 0.08 },
});

/** Parent/child variants for lists that stagger in on scroll. */
export const staggerParent = (stagger = 0.08) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger } },
});

export const fadeUp = (y = 16) => ({
  hidden: { opacity: 0, y },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
});

export const VIEWPORT = { once: true, margin: "0px 0px -12% 0px" } as const;
