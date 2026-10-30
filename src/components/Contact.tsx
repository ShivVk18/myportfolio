"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { contact, profile } from "@/data/profile";
import { links } from "@/data/links";
import { useCopy } from "@/lib/useCopy";
import { Reveal } from "./Reveal";

const LATE = (h: number) => h >= 23 || h < 7;

/** "It's 20:16 in Bhopal — I'm probably still at my desk." Swaps after dark. */
function LocalTime() {
  const [now, setNow] = useState<{ time: string; hour: number } | null>(null);
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const time = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: profile.timezone }).format(d);
      setNow({ time, hour: Number(time.slice(0, 2)) });
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  if (!now) return <p className="mono-label text-muted">&nbsp;</p>;
  return (
    <p className="mono-label normal-case tracking-[0.04em] text-muted">
      It&apos;s <span className="tabular-nums">{now.time}</span> in {contact.city} — {LATE(now.hour) ? contact.asleep : contact.awake}
    </p>
  );
}

const inline = "underline decoration-muted/60 decoration-1 underline-offset-[5px] transition-colors hover:decoration-accent";

export function Contact() {
  const { copied, copy } = useCopy(1500);

  const onEmail = async () => {
    const ok = await copy(links.email);
    if (!ok) window.location.href = `mailto:${links.email}`;
  };

  return (
    <div className="max-w-[34ch] text-[clamp(1.4rem,2.6vw,1.75rem)] leading-[1.45] tracking-[-0.01em]">
      <Reveal as="p" className="text-pretty">
        {contact.note}
      </Reveal>

      <Reveal className="mt-6">
        {/* Click copies. The underline turns into "copied" for 1.5s. */}
        <button
          type="button"
          onClick={onEmail}
          aria-label={`Copy email address ${links.email}`}
          className="relative pb-1 text-left text-accent-text [overflow-wrap:anywhere]"
        >
          {links.email}
          <span
            aria-hidden="true"
            className={`absolute inset-x-0 bottom-0 h-px bg-current transition-opacity duration-200 ${copied ? "opacity-0" : "opacity-100"}`}
          />
          <span
            aria-hidden="true"
            className={`mono-label absolute left-0 top-full mt-0.5 text-ink transition-opacity duration-200 ${copied ? "opacity-100" : "opacity-0"}`}
          >
            copied
          </span>
        </button>
        <span className="sr-only" aria-live="polite">
          {copied ? "Email copied" : ""}
        </span>
      </Reveal>

      <Reveal className="mt-8">
        <LocalTime />
      </Reveal>

      <Reveal as="p" className="mt-10 text-lg leading-relaxed sm:text-xl">
        Elsewhere:{" "}
        <a href={links.github} target="_blank" rel="noopener noreferrer" className={inline}>GitHub</a>,{" "}
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className={inline}>LinkedIn</a>, or grab my{" "}
        <a href={links.resume} target="_blank" rel="noopener noreferrer" className={inline}>resume</a>.
      </Reveal>

      <Reveal className="mt-14 flex items-center gap-3">
        <Image
          src={profile.avatar}
          alt=""
          width={32}
          height={32}
          className="size-8 rounded-md [image-rendering:pixelated]"
        />
        <span className="text-xl font-medium tracking-[-0.01em]">{contact.signoff}</span>
      </Reveal>
    </div>
  );
}
