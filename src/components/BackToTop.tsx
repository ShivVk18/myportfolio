"use client";

import { getLenis } from "@/lib/scroll";

// Smooth-scrolls to the top; the scroll ruler's needle follows back to 0%.
export function BackToTop() {
  const toTop = () => {
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(0, { duration: 1.6 });
    else window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    history.replaceState(null, "", location.pathname);
  };
  return (
    <button type="button" onClick={toTop} className="mono-label group inline-flex items-center gap-1.5 text-muted transition-colors hover:text-ink">
      Back to top
      <span aria-hidden="true" className="inline-block transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5">
        ↑
      </span>
    </button>
  );
}
