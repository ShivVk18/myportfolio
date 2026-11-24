import type { StaticImageData } from "next/image";
import { pixelAvatar } from "../../public/images";

export const profile = {
  name: "Shivansh Saxena",
  title: "Full-Stack & GenAI Engineer",
  subtitle: "MERN & GenAI engineer · Madhya Pradesh, IN",
  location: "Madhya Pradesh, IN",
  timezone: "Asia/Kolkata",
  timezoneLabel: "IST",
  avatar: pixelAvatar as StaticImageData,
  intro:
    "Full-stack engineer building across the MERN stack and Generative AI — from RAG pipelines and multi-agent LLM systems to fast React and Next.js apps — with a focus on reliable AI output, clean APIs and smooth UX.",
  status: "Available for work",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

export const cover = {
  headline: ["Build.", "Ship.", "Apply.", "Repeat."],
  marquee: "IDEA → BUILD → TEST → DEPLOY → ITERATE → REPEAT →",
};

// Section order, ids, gutter labels and display titles. `key` is the "g + key" shortcut.
export const sections = [
  { id: "experience", number: "01", name: "Experience", key: "e", title: "Where I've", titleMuted: "worked" },
  { id: "work", number: "02", name: "Work", key: "w", title: "Selected", titleMuted: "work" },
  { id: "stack", number: "03", name: "Stack", key: "s", title: "What I", titleMuted: "build with" },
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
