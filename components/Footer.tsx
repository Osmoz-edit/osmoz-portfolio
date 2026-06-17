'use client';

import Link from "next/link";
import OsmozLogo from "./OsmozLogo";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/projets", label: "Projets" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#111110", borderTop: "1px solid rgba(212,168,83,0.1)" }}>
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex flex-col gap-3">
          <OsmozLogo variant="wordmark" theme="dark" size={22} />
          <p style={{ fontSize: 12, color: "#3a3a38", fontFamily: "var(--font-jost), sans-serif", fontWeight: 400 }}>
            hello@osmoz.media
          </p>
          <p style={{ fontSize: 12, color: "#3a3a38", fontFamily: "var(--font-jost), sans-serif", fontWeight: 400 }}>
            © {new Date().getFullYear()} Osmoz — Tous droits réservés
          </p>
        </div>

        <nav className="flex gap-6 flex-wrap">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontSize: 13,
                color: "#3a3a38",
                fontFamily: "var(--font-jost), sans-serif",
                fontWeight: 400,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#8A8070"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#3a3a38"; }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
