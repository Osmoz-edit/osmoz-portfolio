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
    <footer
      style={{
        backgroundColor: "rgba(13,10,20,0.98)",
        borderTop: "1px solid rgba(192,132,252,0.08)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex flex-col gap-3">
          <OsmozLogo variant="typo" size={22} />
          <p
            className="text-sm"
            style={{
              color: "#9B88B0",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 300,
            }}
          >
            hello@osmoz-video.fr
          </p>
          <p
            className="text-xs"
            style={{
              color: "#9B88B0",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 300,
            }}
          >
            © {new Date().getFullYear()} Osmoz — Tous droits réservés
          </p>
        </div>

        <nav className="flex gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm transition-colors duration-200 hover:text-mist"
              style={{
                color: "#9B88B0",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 400,
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
