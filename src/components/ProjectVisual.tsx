import Image from "next/image";
import type { Project } from "@/data/projects";

type Props = { project: Project; sizes: string; className?: string; priority?: boolean };

// Screenshot when there is one; otherwise a generated visual tinted per project.
export function ProjectVisual({ project, sizes, className = "", priority }: Props) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        fill
        sizes={sizes}
        priority={priority}
        placeholder="blur"
        className={`object-cover object-left-top ${className}`}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={`${project.title} visual`}
      className={`blueprint absolute inset-0 flex items-end p-5 ${className}`}
      style={{ backgroundColor: `color-mix(in srgb, ${project.tint} 14%, var(--card))` }}
    >
      <span className="text-7xl font-semibold tracking-[-0.06em]" style={{ color: project.tint }}>
        {project.index}
      </span>
    </div>
  );
}
