import { sections, type SectionId } from "@/data/profile";
import { Cover } from "@/components/Cover";
import { Identity } from "@/components/Identity";
import { Section } from "@/components/Section";
import { Work } from "@/components/Work";
import { Experience } from "@/components/Experience";
import { Stack } from "@/components/Stack";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollRuler } from "@/components/ScrollRuler";
import { CommandPalette } from "@/components/CommandPalette";
import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";

// What goes in each section: `body` sits in cols 3–12, `after` spans the full width below it.
const content: Record<SectionId, { body?: React.ComponentType; after?: React.ComponentType }> = {
  experience: { body: Experience },
  work: { body: Work },
  stack: { body: Stack },
  contact: { body: Contact },
};

export default function Home() {
  return (
    <>
      <a
        href="#work"
        className="mono-label sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[99] focus:rounded focus:bg-card focus:px-3 focus:py-2"
      >
        Skip to work
      </a>
      {/* Symmetric padding keeps the column centred (full-bleed rows rely on it) and clears the ruler on lg. */}
      <main className="relative z-10 mx-auto w-full max-w-[1180px] px-4 pt-4 sm:px-8 sm:pt-8 lg:px-28 min-[1440px]:px-16">
        <header>
          <Cover />
          <Identity />
        </header>
        {sections.map((s) => {
          const { body: Body, after: After } = content[s.id];
          const title = "title" in s ? s.title : undefined;
          return (
            <Section
              key={s.id}
              id={s.id}
              number={s.number}
              name={s.name}
              title={title}
              after={After ? <After /> : undefined}
            >
              {Body ? <Body /> : null}
            </Section>
          );
        })}
        <Footer />
      </main>
      <ScrollRuler />
      <CommandPalette />
      <CustomCursor />
      <SmoothScroll />
    </>
  );
}
