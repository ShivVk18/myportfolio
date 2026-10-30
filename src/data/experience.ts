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
    role: "Graduate Engineer Trainee",
    company: "MPSEDC",
    companyFull: "M.P. State Electronics Development Corporation Ltd",
    mode: "On-site",
    bullets: [
      "Develop responsive React.js interfaces for a state Housing ERP, translating client requirements into reusable, component-based UI modules.",
      "Improved page load performance by ~30% through lazy loading, code splitting, memoization and leaner state management.",
      "Ship features in two-week Agile sprints with peer code reviews on a CMS-based enterprise application.",
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
