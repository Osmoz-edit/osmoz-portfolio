'use client';

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

type Category = "Tous" | "YouTube" | "Reels" | "VSL" | "Formation";

const projects = [
  {
    id: 1,
    title: "Série YouTube — Finance personnelle",
    category: "YouTube" as Category,
    stat1: "8 vidéos",
    stat2: "45k vues cumulées",
    bg: "#E8DFC8",
    accent: "#2C4A3E",
  },
  {
    id: 2,
    title: "Reels Instagram — Coach business",
    category: "Reels" as Category,
    stat1: "12 reels",
    stat2: "200k vues cumulées",
    bg: "#D8D0B8",
    accent: "#4A7C6F",
  },
  {
    id: 3,
    title: "VSL — Formation productivité",
    category: "VSL" as Category,
    stat1: "8 min",
    stat2: "Taux conv. 4.2%",
    bg: "#E0D8C0",
    accent: "#D4A853",
  },
  {
    id: 4,
    title: "Podcast vidéo mensuel — Marketing digital",
    category: "YouTube" as Category,
    stat1: "6 épisodes",
    stat2: "Série en cours",
    bg: "#D0C8B0",
    accent: "#2C4A3E",
  },
  {
    id: 5,
    title: "Module de formation — Nutrition",
    category: "Formation" as Category,
    stat1: "24 leçons",
    stat2: "2h de contenu",
    bg: "#E8DFC8",
    accent: "#4A7C6F",
  },
  {
    id: 6,
    title: "Capsules LinkedIn — Consultant RH",
    category: "Reels" as Category,
    stat1: "16 vidéos",
    stat2: "Campagne 3 mois",
    bg: "#D8D0B8",
    accent: "#D4A853",
  },
];

const categories: Category[] = ["Tous", "YouTube", "Reels", "VSL", "Formation"];

export default function ProjetsPage() {
  const [active, setActive] = useState<Category>("Tous");

  const filtered =
    active === "Tous" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-12" style={{ backgroundColor: "#F7F2E8" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-5 max-w-2xl"
          >
            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 11,
                fontWeight: 400,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#D4A853",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span style={{ display: "inline-block", width: 20, height: 1, backgroundColor: "#D4A853" }} />
              Portfolio
            </motion.p>
            <motion.h1
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 600,
                fontSize: "clamp(38px, 5vw, 72px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
                color: "#1A1A18",
              }}
            >
              Projets réalisés
            </motion.h1>
            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-jost), sans-serif",
                fontWeight: 300,
                fontSize: 16,
                lineHeight: 1.7,
                color: "#8A8070",
                maxWidth: 460,
              }}
            >
              Une sélection de projets montés pour des infopreneurs francophones — YouTube, Reels, VSL, formations.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FILTRES */}
      <div
        className="sticky top-16 z-40 py-4"
        style={{
          backgroundColor: "rgba(247,242,232,0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid #E8DFC8",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="transition-all duration-200"
                style={{
                  padding: "6px 16px",
                  borderRadius: 100,
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  backgroundColor: active === cat ? "#2C4A3E" : "transparent",
                  color: active === cat ? "#F7F2E8" : "#8A8070",
                  border: active === cat ? "none" : "1px solid #E8DFC8",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* GRILLE */}
      <section className="py-0" style={{ backgroundColor: "#F7F2E8" }}>
        <div className="max-w-6xl mx-auto px-6 py-8">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                  className="relative group cursor-pointer overflow-hidden"
                  style={{ aspectRatio: "16/9", backgroundColor: project.bg }}
                >
                  {/* Decorative element */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-15">
                    <svg width="70%" height="60%" viewBox="0 0 200 80" fill="none">
                      <rect x="20" y="30" width="4" height="20" rx="2" fill={project.accent} />
                      <rect x="32" y="20" width="4" height="40" rx="2" fill={project.accent} />
                      <rect x="44" y="10" width="4" height="60" rx="2" fill={project.accent} />
                      <rect x="56" y="25" width="4" height="30" rx="2" fill={project.accent} />
                      <rect x="68" y="15" width="4" height="50" rx="2" fill={project.accent} />
                      <rect x="80" y="35" width="4" height="10" rx="2" fill={project.accent} />
                      <rect x="92" y="20" width="4" height="40" rx="2" fill={project.accent} />
                      <rect x="104" y="30" width="4" height="20" rx="2" fill={project.accent} />
                      <rect x="116" y="10" width="4" height="60" rx="2" fill={project.accent} />
                      <rect x="128" y="25" width="4" height="30" rx="2" fill={project.accent} />
                      <rect x="140" y="20" width="4" height="40" rx="2" fill={project.accent} />
                      <rect x="152" y="30" width="4" height="20" rx="2" fill={project.accent} />
                      <rect x="164" y="15" width="4" height="50" rx="2" fill={project.accent} />
                      <rect x="176" y="35" width="4" height="10" rx="2" fill={project.accent} />
                    </svg>
                  </div>

                  {/* Category tag */}
                  <div className="absolute top-4 left-4">
                    <span
                      style={{
                        fontFamily: "var(--font-mono), monospace",
                        fontSize: 9,
                        fontWeight: 500,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        backgroundColor: "rgba(247,242,232,0.8)",
                        color: project.accent,
                        padding: "4px 10px",
                        borderRadius: 100,
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Title visible by default */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-5 transition-opacity duration-300 group-hover:opacity-0"
                    style={{ background: "linear-gradient(to top, rgba(26,26,24,0.5) 0%, transparent 100%)" }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontWeight: 600,
                        fontSize: 15,
                        color: "#F7F2E8",
                        lineHeight: 1.3,
                      }}
                    >
                      {project.title}
                    </h3>
                  </div>

                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-5 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    style={{ backgroundColor: "rgba(44,74,62,0.92)" }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontWeight: 600,
                        fontSize: 17,
                        color: "#F7F2E8",
                        lineHeight: 1.3,
                        marginBottom: 8,
                      }}
                    >
                      {project.title}
                    </h3>
                    <div className="flex gap-4">
                      <span
                        style={{
                          fontFamily: "var(--font-mono), monospace",
                          fontSize: 10,
                          fontWeight: 500,
                          letterSpacing: "0.1em",
                          color: "#D4A853",
                        }}
                      >
                        {project.stat1}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono), monospace",
                          fontSize: 10,
                          fontWeight: 400,
                          letterSpacing: "0.1em",
                          color: "rgba(247,242,232,0.6)",
                        }}
                      >
                        {project.stat2}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#2C4A3E" }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center gap-6"
          >
            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 600,
                fontSize: "clamp(28px, 4vw, 48px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                color: "#F7F2E8",
              }}
            >
              Tu as un projet&nbsp;?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-jost), sans-serif",
                fontWeight: 300,
                fontSize: 16,
                lineHeight: 1.7,
                color: "rgba(247,242,232,0.65)",
              }}
            >
              Parle-moi de ton contenu, ta niche et tes objectifs. Je te réponds en moins de 24h.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                style={{
                  padding: "16px 36px",
                  backgroundColor: "#D4A853",
                  color: "#1A1A18",
                  fontFamily: "var(--font-jost), sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  borderRadius: 6,
                  display: "inline-block",
                }}
              >
                Me contacter
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
