import type { StaticImageData } from "next/image";
import { pixelAvatar } from "../../public/images";

export const profile = {
  name: "Shivansh Saxena",
  title: "Full-Stack Engineer",
  subtitle: "Full-stack engineer · Madhya Pradesh, IN",
  location: "Madhya Pradesh, IN",
 
  timezone: "Asia/Kolkata",
  timezoneLabel: "IST",
  avatar: pixelAvatar as StaticImageData,
  intro:
    "Full-stack engineer who enjoys taking features from idea to production — building web apps and Generative AI features with a focus on reliable AI output, clean code and smooth UX.",
  status: "Available for work",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

export const cover = {
  headline: ["Build.", "Ship.", "Apply.", "Repeat."],
  marquee: "IDEA → BUILD → TEST → DEPLOY → ITERATE → REPEAT →",
};

// Section order, ids, gutter labels and display titles. `key` is the "g + key" shortcut.
export const sections = [
  { id: "experience", number: "01", name: "Experience", key: "e", title: "Where I've worked" },
  { id: "work", number: "02", name: "Work", key: "w", title: "Selected work" },
  { id: "stack", number: "03", name: "Stack", key: "s", title: "What I build with" },
  { id: "contact", number: "04", name: "Contact", key: "c" },
] as const satisfies readonly { id: string; number: string; name: string; key: string; title?: string; titleMuted?: string }[];

export const contact = {
  note: "If you're hiring, building something, or just want to talk about LLMs that don't hallucinate their JSON — email me. I read everything and usually reply within a day.",
  city: "Bhopal",
  awake: "I'm probably still at my desk.",
  asleep: "I'm probably asleep, but I'll reply in the morning.",
  signoff: "— Shivansh",
};

export type SectionId = (typeof sections)[number]["id"];
