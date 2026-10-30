import { profile } from "@/data/profile";
import { BackToTop } from "./BackToTop";

// Static page, so this is the build date.
const built = new Date();
const builtLabel = built.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: profile.timezone });

export function Footer() {
  return (
    <footer className="grid-12 mt-20 border-t border-hairline py-8 lg:mt-30">
      <div className="col-content flex flex-wrap items-end justify-between gap-x-8 gap-y-4 text-sm text-muted">
        <div>
          <p>
            © {built.getFullYear()} {profile.name} · {profile.location}
          </p>
          
        </div>
        <div className="flex flex-col items-start gap-2 sm:items-end">
          <BackToTop />
          <p className="mono-label">
            Last updated: <time dateTime={built.toISOString().slice(0, 10)}>{builtLabel}</time>
          </p>
        </div>
      </div>
    </footer>
  );
}
