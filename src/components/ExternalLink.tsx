type Props = { href: string; children: React.ReactNode; className?: string; onClick?: (e: React.MouseEvent) => void };

// Text link with an arrow that nudges up-right on hover.
export function ExternalLink({ href, children, className = "", onClick }: Props) {
  const external = /^https?:/.test(href) || href.endsWith(".pdf");
  return (
    <a
      href={href}
      onClick={onClick}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group inline-flex items-baseline gap-1 ${className}`}
    >
      <span className="grow-line">{children}</span>
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      >
        ↗
      </span>
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
