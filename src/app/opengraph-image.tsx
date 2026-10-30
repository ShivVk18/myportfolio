import { ImageResponse } from "next/og";
import { cover, profile } from "@/data/profile";

export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Mirrors the cover: blueprint grid, headline with SHIP highlighted, marquee strip.
export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#111111", color: "#EDEDED", padding: 48 }}>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "1px solid #2a2a2a",
            borderRadius: 24,
            overflow: "hidden",
            backgroundColor: "#151515",
            backgroundImage:
              "radial-gradient(circle at 75% 30%, rgba(232,100,60,0.22), transparent 45%), radial-gradient(rgba(237,237,237,0.14) 1.5px, transparent 1.5px)",
            backgroundSize: "100% 100%, 24px 24px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", padding: "28px 36px", fontSize: 20, letterSpacing: 3, color: "#8A8A8A" }}>
            <span>{profile.name.toUpperCase()}</span>
            <span>{profile.title.toUpperCase()}</span>
          </div>
          <div style={{ display: "flex", padding: "0 36px", fontSize: 92, fontWeight: 700, letterSpacing: -3 }}>
            {cover.headline.map((w, i) => (
              <span key={w} style={{ marginRight: 26, color: i === 1 ? "#E8643C" : "#EDEDED", borderBottom: i === 1 ? "6px solid #E8643C" : "6px solid transparent" }}>
                {w}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", borderTop: "1px solid #2a2a2a", padding: "16px 36px", fontSize: 18, letterSpacing: 3, color: "#8A8A8A", whiteSpace: "nowrap" }}>
            {`${cover.marquee}  ${cover.marquee}`}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
