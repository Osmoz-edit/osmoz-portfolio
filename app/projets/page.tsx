'use client';

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

type Category = "Tous" | "YouTube" | "Reels" | "VSL" | "Formation";

const projects = [
  {
    id: 1,
    title: "Série YouTube — Finance personnelle",
    category: "YouTube",
    stat1: "8 vidéos",
    stat2: "45k vues",
    bg: "linear-gradient(135deg, #1A1028 0%, #2D1F42 100%)",
    accent: "#C084FC",
  },
  {
    id: 2,
    title: "Reels Instagram — Coach business",
    category: "Reels",
    stat1: "12 reels",
    stat2: "200k vues cumulées",
    bg: "linear-gradient(135deg, #2D1F42 0%, #1A1028 100%)",
    accent: "#7B2FBE",
  },
  {
    id: 3,
    title: "VSL — Formation productivité",
    category: "VSL",
    stat1: "8 min",
    stat2: "Taux conv. 4.2%",
    bg: "linear-gradient(135deg, #1A1028 0%, #0D0A14 100%)",
    accent: "#C084FC",
  },
  {
    id: 4,
    title: "Podcast vidéo mensuel — Marketing digital",
    category: "YouTube",
    stat1: "6 épisodes",
    stat2: "Série en cours",
    bg: "linear-gradient(135deg, #2D1F42 0%, #3D2A5A 100%)",
    accent: "#7B2FBE",
  },
  {
    id: 5,
    title: "Module de formation — Nutrition",
    category: "Formation",
    stat1: "24 leçons",
    stat2: "2h de contenu",
    bg: "linear-gradient(135deg, #1A1028 0%, #2D1F42 100%)",
    accent: "#C084FC",
  },
  {
    id: 6,
    title: "Capsules LinkedIn — Consultant RH",
    category: "Reels",
    stat1: "16 vidéos",
    stat2: "Campagne 3 mois",
    bg: "linear-gradient(135deg, #0D0A14 0%, #1A1028 100%)",
    accent: "#7B2FBE",
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
      <section className="pt-32 pb-12 relative" style={{ backgroundColor: "#0D0A14" }}>
        <div
          className="absolute top-0 right-0 pointer-events-none"
          style={{
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(123,47,190,0.2) 0%, transparent 70%)",
            filter: "blur(100px)",
            transform: "translate(30%, -20%)",
          }}
        />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-5 max-w-2xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs uppercase tracking-widest flex items-center gap-3"
              style={{ color: "#C084FC", fontFamily: "var(--font-outfit), sans-serif", fontWeight: 500 }}
            >
              <span style={{ display: "inline-block", width: 24, height: 1, backgroundColor: "#C084FC" }} />
              Portfolio
            </motion.p>
            <motion.h1
              variants={fadeUp}
              style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 900, fontSize: "clamp(38px, 5vw, 72px)", letterSpacing: "-0.03em", color: "#F0E6FF", lineHeight: 1.1 }}
            >
              Projets réalisés
            </motion.h1>
            <motion.p
              variants={fadeUp}
              style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 300, fontSize: 17, lineHeight: 1.7, color: "#9B88B0", maxWidth: 460 }}
            >
              Une sélection de projets montés pour des infopreneurs francophones — YouTube, Reels, VSL, formations.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FILTRES */}
      <div className="sticky top-16 z-40 py-4" style={{ backgroundColor: "rgba(13,10,20,0.95)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(192,132,252,0.08)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 uppercase tracking-wider"
                style={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  backgroundColor: active === cat ? "#7B2FBE" : "rgba(45,31,66,0.5)",
                  color: active === cat ? "#F0E6FF" : "#9B88B0",
                  border: active === cat ? "none" : "1px solid rgba(192,132,252,0.1)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* GRILLE */}
      <section className="py-16 relative" style={{ backgroundColor: "#0D0A14" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-3 gap-0.5"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                  className="relative group cursor-pointer overflow-hidden"
                  style={{ aspectRatio: "16/9", background: project.bg }}
                >
                  {/* Waveform décoratif */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <svg width="80%" height="60%" viewBox="0 0 200 80" fill="none">
                      <path
                        d="M0 40 Q20 10 40 40 Q60 70 80 40 Q100 10 120 40 Q140 70 160 40 Q180 10 200 40"
                        stroke={project.accent}
                        strokeWidth="1.5"
                        fill="none"
                      />
                    </svg>
                  </div>

                  {/* Category tag */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="text-xs uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: "rgba(13,10,20,0.7)",
                        color: project.accent,
                        fontFamily: "var(--font-outfit), sans-serif",
                        fontWeight: 500,
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-5 transition-all duration-300 opacity-0 group-hover:opacity-100"
                    style={{ background: "linear-gradient(to top, rgba(13,10,20,0.95) 0%, transparent 60%)", border: `1px solid ${project.accent}40` }}
                  >
                    <h3
                      style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 700, fontSize: 16, color: "#F0E6FF", lineHeight: 1.3 }}
                    >
                      {project.title}
                    </h3>
                    <div className="flex gap-4 mt-2">
                      <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 500, fontSize: 12, color: project.accent }}>
                        {project.stat1}
                      </span>
                      <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 500, fontSize: 12, color: "#9B88B0" }}>
                        {project.stat2}
                      </span>
                    </div>
                  </div>

                  {/* Titre visible par défaut en bas */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 group-hover:opacity-0"
                    style={{ background: "linear-gradient(to top, rgba(13,10,20,0.7) 0%, transparent 100%)" }}
                  >
                    <h3
                      style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 700, fontSize: 14, color: "#F0E6FF" }}
                    >
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative" style={{ backgroundColor: "#1A1028" }}>
        <div className="light-line absolute top-0 left-0 right-0" />
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col items-center gap-6"
          >
            <motion.h2
              variants={fadeUp}
              style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "-0.03em", color: "#F0E6FF", lineHeight: 1.2 }}
            >
              Tu as un projet ?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 300, fontSize: 17, lineHeight: 1.7, color: "#9B88B0" }}
            >
              Parle-moi de ton contenu, ta niche et tes objectifs. Je te réponds en moins de 24h.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl text-sm font-semibold"
                style={{ backgroundColor: "#7B2FBE", color: "#F0E6FF", fontFamily: "var(--font-outfit), sans-serif" }}
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
