import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { links } from "@/data/links";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Resume — ${profile.name}`,
  description: `Resume of ${profile.name}, ${profile.title}.`,
};

const button =
  "mono-label inline-flex items-center gap-2 rounded-xl border border-hairline bg-card px-3 py-2 text-muted transition-colors hover:text-ink";

export default function ResumePage() {
  const file = `${profile.name.replace(/\s+/g, "_")}_Resume.pdf`;

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-[1000px] flex-col px-4 py-6 sm:px-8 sm:py-10">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Link href="/" className="mono-label inline-flex items-center gap-1.5 text-muted transition-colors hover:text-ink">
            <ArrowLeft strokeWidth={1.75} className="size-3.5" />
            Back to portfolio
          </Link>
          <h1 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Resume <span className="font-serif font-normal text-muted">— {profile.name}</span>
          </h1>
        </div>
        <div className="flex gap-2">
          <a href={links.resumePdf} target="_blank" rel="noopener noreferrer" className={button}>
            <ExternalLink strokeWidth={1.75} className="size-3.5" />
            Open
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={links.resumePdf} download={file} className={`${button} !border-ink !bg-ink !text-paper hover:opacity-90`}>
            <Download strokeWidth={1.75} className="size-3.5" />
            Download PDF
          </a>
        </div>
      </header>

      {/* Inline viewer. Browsers that can't show PDFs inline (most phones) get the fallback inside <object>. */}
      <object
        data={`${links.resumePdf}#view=FitH&toolbar=0`}
        type="application/pdf"
        aria-label={`Resume of ${profile.name} (PDF)`}
        className="mt-6 min-h-[75dvh] w-full flex-1 overflow-hidden rounded-2xl border border-hairline bg-card"
      >
        <div className="flex h-full min-h-[50dvh] flex-col items-center justify-center gap-4 p-8 text-center">
          <p className="text-muted">Your browser can&apos;t show the PDF here.</p>
          <a href={links.resumePdf} target="_blank" rel="noopener noreferrer" className={button}>
            <ExternalLink strokeWidth={1.75} className="size-3.5" />
            Open the resume
          </a>
        </div>
      </object>
    </main>
  );
}
