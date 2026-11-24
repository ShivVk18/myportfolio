export type Job = {
  period: string;
  role: string;
  company: string;
  companyFull?: string;
  mode: string;
  bullets: string[];
  /** Highlighted number that counts up when the row opens. */
  stat?: { prefix?: string; value: number; suffix?: string; label: string };
};

export const experience: Job[] = [
  {
    period: "Nov 2025 – Present",
    role: "Graduate Engineer Trainee (MERN Developer)",
    company: "MPSEDC",
    companyFull: "M.P. State Electronics Development Corporation Ltd",
    mode: "On-site",
    bullets: [
      "Build features across the MERN stack for a state Housing ERP, turning client requirements into reusable React.js modules; improved page load by ~30% through lazy loading, code splitting and memoization.",
      "Developed SQL-backed REST APIs for modules that needed relational data, alongside MongoDB services, in two-week Agile sprints with peer code reviews.",
      "Built an internal SRS Document Parser using RAG for the engineering team that extracts key information from Software Requirement Specifications and maps it to the company's standard SRS format.",
      "Designed a conditional chunking strategy that adapts to each document's structure and content instead of a fixed chunk size, keeping retrieval accurate on 100–500 page documents.",
      "Adopted by the team to parse SRS and related technical documentation, making requirement analysis faster and more consistent.",
    ],
    stat: { prefix: "~", value: 30, suffix: "%", label: "faster page loads" },
  },
  {
    period: "Aug 2025 – Nov 2025",
    role: "Software Engineer Intern",
    company: "MindIn",
    companyFull: "Mental Health Startup",
    mode: "Remote",
    bullets: [
      "Partnered with founders and the product team to design and build the MVP, converting business requirements into scalable product features.",
      "Owned the end-to-end feature lifecycle: requirement analysis, implementation, testing, deployment and post-release iteration.",
    ],
  },
];
