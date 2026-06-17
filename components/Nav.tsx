'use client';

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import OsmozLogo from "./OsmozLogo";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/projets", label: "Projets" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg"
      style={{
        backgroundColor: "rgba(247,242,232,0.94)",
        borderBottom: "1px solid #E8DFC8",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <OsmozLogo variant="wordmark" theme="light" size={22} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm transition-colors duration-200"
              style={{
                color: pathname === l.href ? "#1A1A18" : "#8A8070",
                fontFamily: "var(--font-jost), sans-serif",
                fontWeight: 400,
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-5 py-2 text-sm font-medium transition-all duration-200"
            style={{
              backgroundColor: "#2C4A3E",
              color: "#F7F2E8",
              fontFamily: "var(--font-jost), sans-serif",
              fontWeight: 500,
              borderRadius: 6,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#1A1A18";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#2C4A3E";
            }}
          >
            Travailler ensemble
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span
            className="block w-5 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: "#1A1A18",
              transform: open ? "rotate(45deg) translate(2px, 5px)" : "none",
            }}
          />
          <span
            className="block w-5 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: "#1A1A18",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: "#1A1A18",
              transform: open ? "rotate(-45deg) translate(2px, -5px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
            style={{
              backgroundColor: "#F7F2E8",
              borderTop: "1px solid #E8DFC8",
            }}
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 600,
                  fontSize: 22,
                  color: pathname === l.href ? "#1A1A18" : "#8A8070",
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-5 py-3 text-sm font-medium text-center"
              style={{
                backgroundColor: "#2C4A3E",
                color: "#F7F2E8",
                fontFamily: "var(--font-jost), sans-serif",
                borderRadius: 6,
              }}
            >
              Travailler ensemble
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
