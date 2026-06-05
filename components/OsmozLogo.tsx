interface OsmozLogoProps {
  variant?: "horizontal" | "avatar" | "typo";
  size?: number;
}

export default function OsmozLogo({
  variant = "horizontal",
  size,
}: OsmozLogoProps) {
  if (variant === "avatar") {
    const s = size ?? 48;
    return (
      <svg width={s} height={s} viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="12" fill="#0D0A14" />
        <rect x="6" y="6" width="36" height="36" rx="8" fill="#2D1F42" />
        <path
          d="M9 24 Q14.5 15 20 24 Q25.5 33 31 24 Q36.5 15 42 24"
          stroke="#F0E6FF"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    );
  }

  if (variant === "typo") {
    return (
      <span
        style={{
          fontFamily: "var(--font-outfit), sans-serif",
          fontWeight: 700,
          fontSize: size ?? 18,
          letterSpacing: "-0.02em",
          color: "#F0E6FF",
        }}
      >
        osm<span style={{ color: "#C084FC" }}>o</span>z
      </span>
    );
  }

  // horizontal (default)
  const h = size ?? 40;
  return (
    <div className="flex items-center gap-3">
      <svg width={h} height={h} viewBox="0 0 50 50" fill="none">
        <rect width="50" height="50" rx="10" fill="#2D1F42" />
        <path
          d="M7 26 Q13 16 19 26 Q25 36 31 26 Q37 16 43 26"
          stroke="#F0E6FF"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <div className="flex flex-col leading-tight">
        <span
          style={{
            fontFamily: "var(--font-outfit), sans-serif",
            fontWeight: 700,
            fontSize: 20,
            letterSpacing: "-0.02em",
            color: "#F0E6FF",
          }}
        >
          osm<span style={{ color: "#C084FC" }}>o</span>z
        </span>
        <span
          style={{
            fontFamily: "var(--font-outfit), sans-serif",
            fontWeight: 400,
            fontSize: 11,
            letterSpacing: "0.06em",
            color: "#9B88B0",
            textTransform: "uppercase",
          }}
        >
          Montage Vidéo
        </span>
      </div>
    </div>
  );
}
