import type { StaticImageData } from "next/image";
import { ascendaiFull, fitfusionFull, splitmates } from "../../public/images";

export type Project = {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  category: string;
  bullets: string[];
  tags: string[];
  links: { label: string; href: string }[];
  /** Screenshot. Full-page shots of live sites scroll inside the frame on hover. Leave out for a generated visual in `tint`. */
  image?: StaticImageData;
  tint: string;
};

export const projects: Project[] = [
  {
    slug: "ascendai",
    index: "01",
    title: "AscendAI",
    tagline: "AI-Powered Career Coach",
    category: "AI · Career",
    bullets: [
      "Generates career roadmaps, runs skill-gap analysis against real job descriptions and produces ATS-tailored resumes.",
      "AI mock interviews with real-time feedback on technical answers and communication.",
    ],
    tags: ["LLM Integration", "Skill-gap analysis", "Mock interviews"],
    links: [
      { label: "GitHub", href: "https://github.com/ShivVk18/ai-career-buddy" },
      { label: "Live", href: "https://ascendai-two.vercel.app/" },
    ],
    image: ascendaiFull,
    tint: "#E8643C",
  },
  {
    slug: "fitfusion",
    index: "02",
    title: "FitFusion AI",
    tagline: "Autonomous Health & Fitness Platform",
    category: "AI · Health",
    bullets: [
      "Full-stack AI app generating personalized workouts, nutrition plans and recovery analysis from user data.",
      "Schema validation with fallbacks on every LLM response so malformed AI output never reaches the UI; analytics dashboards and a conversational AI assistant.",
    ],
    tags: ["Schema-validated LLM output", "Dashboards", "AI assistant"],
    links: [
      { label: "Backend", href: "https://github.com/ShivVk18/fitfusion-backend" },
      { label: "Frontend", href: "https://github.com/ShivVk18/fitfusion-frontend" },
      { label: "Live", href: "https://fitfusio.netlify.app/" },
    ],
    image: fitfusionFull,
    tint: "#4F9D7E",
  },
  {
    slug: "splitmates",
    index: "03",
    title: "SplitMates",
    tagline: "AI-Powered Bill Splitting & Budgeting",
    category: "Fintech · Real-time",
    bullets: [
      "Shared-expense platform with real-time group balance updates over WebSockets.",
      "Graph-based debt-settlement algorithm that minimizes the number of transactions needed to settle a group.",
      "Scheduled payment reminders, monthly spending reports and LLM-generated insights from each user's expense data.",
    ],
    tags: ["WebSockets", "Graph algorithm", "LLM insights"],
    links: [
      { label: "Backend", href: "https://github.com/ShivVk18/split-mates-backend" },
      { label: "Frontend", href: "https://github.com/ShivVk18/split-mates-frontend" },
    ],
    image: splitmates,
    tint: "#5B7BD5",
  },
];
