import Image from "next/image";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "./ProjectVisual";

const liveHref = (p: Project) => p.links.find((l) => l.label === "Live")?.href;

/** Domain shown in the URL bar — only for projects with a live site. */
const frameUrl = (p: Project) => {
  const href = liveHref(p);
  if (!href) return "";
  const u = new URL(href);
  return (u.host + u.pathname).replace(/\/$/, "");
};

type Props = { project: Project; sizes: string; className?: string };

// Minimal browser chrome around a screenshot. Projects with a live site get a full-page shot
// that scrolls on card hover (see .shot); the rest show a static screenshot that fills the frame.
export function BrowserFrame({ project, sizes, className = "" }: Props) {
  const scrolls = Boolean(project.image && liveHref(project));
  return (
    <div className={`flex flex-col bg-paper ${className}`}>
      <div className="flex items-center gap-3 border-b border-hairline px-3.5 py-2.5" aria-hidden="true">
        <span className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="size-2 rounded-full bg-hairline" />
          ))}
        </span>
        <span className="mx-auto max-w-[70%] truncate rounded-md border border-hairline bg-card px-3 py-0.5 font-mono text-[10.5px] text-muted empty:invisible">
          {frameUrl(project)}
        </span>
        <span className="w-[34px]" />
      </div>
      <div className="shot-frame relative min-h-0 flex-1 overflow-hidden">
        {project.image && scrolls ? (
          <div className="shot absolute inset-x-0 top-0">
            <Image
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              sizes={sizes}
              placeholder="blur"
              className="block h-auto min-h-[100cqh] w-full object-cover object-left-top"
            />
          </div>
        ) : project.image ? (
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            sizes={sizes}
            placeholder="blur"
            className="object-cover object-left-top"
          />
        ) : (
          <ProjectVisual project={project} sizes={sizes} />
        )}
      </div>
    </div>
  );
}
