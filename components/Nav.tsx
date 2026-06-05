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
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl"
      style={{
        backgroundColor: "rgba(13,10,20,0.85)",
        borderBottom: "1px solid rgba(192,132,252,0.12)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <OsmozLogo variant="horizontal" size={38} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm transition-colors duration-200"
              style={{
                color: pathname === l.href ? "#F0E6FF" : "#9B88B0",
                fontFamily: "var(--font-inter), sans-serif",
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
            className="px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200"
            style={{
              backgroundColor: "#7B2FBE",
              color: "#0D0A14",
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 600,
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.backgroundColor = "#C084FC";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.backgroundColor = "#7B2FBE";
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
              backgroundColor: "#F0E6FF",
              transform: open ? "rotate(45deg) translate(2px, 5px)" : "none",
            }}
          />
          <span
            className="block w-5 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: "#F0E6FF",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: "#F0E6FF",
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
            style={{ borderTop: "1px solid rgba(192,132,252,0.08)" }}
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base py-1"
                style={{
                  color: pathname === l.href ? "#F0E6FF" : "#9B88B0",
                  fontFamily: "var(--font-inter), sans-serif",
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-center"
              style={{
                backgroundColor: "#7B2FBE",
                color: "#0D0A14",
                fontFamily: "var(--font-outfit), sans-serif",
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
