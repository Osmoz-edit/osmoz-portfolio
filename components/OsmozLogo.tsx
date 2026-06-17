interface OsmozLogoProps {
  variant?: "wordmark" | "icon" | "full";
  theme?: "light" | "dark";
  size?: number;
}

export default function OsmozLogo({
  variant = "wordmark",
  theme = "light",
  size,
}: OsmozLogoProps) {
  const textColor = theme === "dark" ? "#F7F2E8" : "#1A1A18";
  const iconBg = "#2C4A3E";

  if (variant === "icon") {
    const s = size ?? 40;
    return (
      <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="8" fill={iconBg} />
        <rect x="17" y="10" width="6" height="20" rx="3" fill="#D4A853" />
        <rect x="10" y="15" width="6" height="10" rx="3" fill="rgba(247,242,232,0.4)" />
        <rect x="24" y="15" width="6" height="10" rx="3" fill="rgba(247,242,232,0.4)" />
      </svg>
    );
  }

  const wordmark = (
    <span
      style={{
        fontFamily: "var(--font-cormorant), serif",
        fontWeight: 600,
        fontSize: size ?? 22,
        letterSpacing: "0.04em",
        color: textColor,
        lineHeight: 1,
      }}
    >
      osm<span style={{ color: "#D4A853" }}>o</span>z
    </span>
  );

  if (variant === "wordmark") return wordmark;

  // full = icon + wordmark
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <OsmozLogo variant="icon" theme={theme} size={size ? size - 4 : 36} />
      {wordmark}
    </div>
  );
}
