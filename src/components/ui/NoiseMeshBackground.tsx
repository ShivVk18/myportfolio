"use client";

export const NoiseMeshBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* Subtle Warm Paper Texture Grain Overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.025] dark:opacity-[0.035] mix-blend-multiply dark:mix-blend-screen z-10">
        <filter id="paperNoise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#paperNoise)" />
      </svg>

      {/* Fine Minimalist Drafting Grid (24px) */}
      <div className="absolute inset-0 retro-grid-bg opacity-70 dark:opacity-40" />

      {/* Subtle Corner Editorial Coordinates */}
     
    </div>
  );
};

