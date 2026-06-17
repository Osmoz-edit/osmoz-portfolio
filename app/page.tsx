'use client';

import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const heroStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const painPoints = [
  {
    index: "01",
    title: "Tu passes des heures au montage",
    body: "Entre le découpage, les sous-titres, les exports — tu perds du temps que tu devrais passer à créer.",
  },
  {
    index: "02",
    title: "Tes vidéos manquent de rythme",
    body: "Tu sais que la qualité visuelle influence ta crédibilité. Mais le montage ce n'est pas ton truc, et ça se voit.",
  },
  {
    index: "03",
    title: "Tu publies en retard ou pas assez",
    body: "Le montage est le goulot d'étranglement. Tu voudrais publier plus, mais tu n'as pas le temps.",
  },
  {
    index: "04",
    title: "Tu fais tout tout seul",
    body: "Infopreneurs solitaires : vous portez trop de chapeaux. Il est temps de déléguer ce qui peut l'être.",
  },
];

const features = [
  {
    title: "Livraison 48h",
    body: "Tu envoies les rushes, je te rends une vidéo prête à publier en 48 à 72h selon le forfait.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#2C4A3E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "100% infopreneurs",
    body: "Mon expertise est calibrée pour le rythme pédagogique, les tutoriels et les VSL. Pas de mariage, pas de clip.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="#2C4A3E" strokeWidth="1.8" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#2C4A3E" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Communication claire",
    body: "Suivi Notion partagé, feedback structuré, révisions sans friction. Tu sais toujours où en est ta vidéo.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#2C4A3E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const marqueeItems = [
  "Montage YouTube",
  "Sous-titres inclus",
  "Reels & Shorts",
  "Livraison 48h",
  "Sans engagement",
  "Spécialisé infopreneurs",
];

export default function Home() {
  return (
    <>
      {/* HERO — split screen */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2" style={{ paddingTop: 64 }}>
        {/* Gauche — cream */}
        <div
          className="flex flex-col justify-center px-8 md:px-16 py-20"
          style={{ backgroundColor: "#F7F2E8" }}
        >
          <motion.div
            variants={heroStagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-0 max-w-lg"
          >
            {/* Kicker */}
            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.05, ease: "easeOut" } } }}
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontWeight: 400,
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#D4A853",
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 24,
              }}
            >
              <span style={{ display: "inline-block", width: 20, height: 1, backgroundColor: "#D4A853" }} />
              Montage Vidéo · Infopreneurs
            </motion.p>

            {/* H1 lines */}
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1, ease: "easeOut" } } }}
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 600,
                fontSize: "clamp(52px, 6.5vw, 88px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
                color: "#1A1A18",
              }}
            >
              Tu filmes.
            </motion.h1>
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.18, ease: "easeOut" } } }}
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 600,
                fontStyle: "italic",
                fontSize: "clamp(52px, 6.5vw, 88px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
                color: "#2C4A3E",
              }}
            >
              Je monte.
            </motion.h1>
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.26, ease: "easeOut" } } }}
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 600,
                fontSize: "clamp(52px, 6.5vw, 88px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
                color: "#1A1A18",
                marginBottom: 24,
              }}
            >
              Tu publies.
            </motion.h1>

            {/* Sous-titre signature */}
            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.32, ease: "easeOut" } } }}
              className="hero-tagline"
            >
              Le montage, c&apos;est la technique.<br />
              Raconter une histoire, c&apos;est le métier.
            </motion.p>

            {/* Paragraphe */}
            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4, ease: "easeOut" } } }}
              style={{
                fontFamily: "var(--font-jost), sans-serif",
                fontWeight: 300,
                fontSize: 16,
                lineHeight: 1.7,
                color: "#8A8070",
                maxWidth: 400,
                marginBottom: 32,
              }}
            >
              Monteur vidéo freelance spécialisé pour les infopreneurs francophones.
              Je transforme tes rushes bruts en contenu prêt à publier — en 48h.
            </motion.p>

            {/* Boutons */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.48, ease: "easeOut" } } }}
              className="flex gap-4 flex-wrap"
            >
              <Link
                href="/services"
                style={{
                  padding: "14px 28px",
                  backgroundColor: "#2C4A3E",
                  color: "#F7F2E8",
                  fontFamily: "var(--font-jost), sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  borderRadius: 6,
                  display: "inline-block",
                }}
              >
                Voir les forfaits
              </Link>
              <Link
                href="/projets"
                style={{
                  padding: "14px 28px",
                  border: "1px solid #E8DFC8",
                  color: "#8A8070",
                  fontFamily: "var(--font-jost), sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  borderRadius: 6,
                  display: "inline-block",
                }}
              >
                Voir les projets
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Droite — forest */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col justify-center px-8 md:px-16 py-20 gap-5"
          style={{ backgroundColor: "#2C4A3E" }}
        >
          {/* Stat cards row */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "48h", label: "Délai garanti" },
              { value: "4×", label: "Vidéos par mois" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex flex-col gap-2 p-6"
                style={{ backgroundColor: "rgba(26,26,24,0.25)", borderRadius: 8 }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontWeight: 600,
                    fontSize: 52,
                    color: "#F7F2E8",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-jost), sans-serif",
                    fontWeight: 400,
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(247,242,232,0.55)",
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Full-width stat */}
          <div
            className="flex flex-col gap-2 p-6"
            style={{ backgroundColor: "rgba(26,26,24,0.25)", borderRadius: 8 }}
          >
            <span
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 600,
                fontSize: 52,
                color: "#D4A853",
                lineHeight: 1,
              }}
            >
              0
            </span>
            <span
              style={{
                fontFamily: "var(--font-jost), sans-serif",
                fontWeight: 400,
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(247,242,232,0.55)",
              }}
            >
              Heure de montage pour le client
            </span>
          </div>
        </motion.div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden py-4" style={{ backgroundColor: "#1A1A18" }}>
        <motion.div
          className="flex gap-0 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 2 }, (_, i) =>
            marqueeItems.map((item, j) => (
              <span
                key={`${i}-${j}`}
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: (i + j) % 2 === 0 ? "#3a3a38" : "#D4A853",
                  padding: "0 32px",
                }}
              >
                {item}
                <span style={{ marginLeft: 32, color: "#2a2a28" }}>·</span>
              </span>
            ))
          )}
        </motion.div>
      </div>

      {/* CE QUE TU VIS — pain points */}
      <section className="py-28" style={{ backgroundColor: "#F7F2E8" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
            {/* Gauche — kicker + titre */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-4 md:sticky md:top-28"
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
                Le problème
              </motion.p>
              <motion.h2
                variants={fadeUp}
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 600,
                  fontSize: "clamp(32px, 4vw, 52px)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  color: "#1A1A18",
                }}
              >
                Ce que tu vis probablement
              </motion.h2>
              <motion.p
                variants={fadeUp}
                style={{
                  fontFamily: "var(--font-jost), sans-serif",
                  fontWeight: 300,
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: "#8A8070",
                  maxWidth: 320,
                }}
              >
                La plupart des infopreneurs perdent entre 3 et 8h par vidéo. C&apos;est du temps que tu pourrais passer à créer, vendre, ou te reposer.
              </motion.p>
            </motion.div>

            {/* Droite — pain points */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-8"
            >
              {painPoints.map((p) => (
                <motion.div
                  key={p.index}
                  variants={fadeUp}
                  className="flex gap-5"
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: 11,
                      fontWeight: 500,
                      letterSpacing: "0.14em",
                      color: "#D4A853",
                      flexShrink: 0,
                      paddingTop: 3,
                    }}
                  >
                    {p.index}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3
                      style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontWeight: 600,
                        fontSize: 20,
                        color: "#1A1A18",
                        lineHeight: 1.2,
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-jost), sans-serif",
                        fontWeight: 300,
                        fontSize: 14,
                        lineHeight: 1.7,
                        color: "#8A8070",
                      }}
                    >
                      {p.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Citation */}
          <motion.blockquote
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-20 flex gap-6 items-start p-8"
            style={{
              backgroundColor: "#E8DFC8",
              borderLeft: "3px solid #D4A853",
              borderRadius: "0 8px 8px 0",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 600,
                fontSize: 80,
                color: "#D4A853",
                lineHeight: 0.8,
                flexShrink: 0,
                marginTop: 8,
              }}
            >
              &ldquo;
            </span>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "clamp(17px, 2vw, 22px)",
                  color: "#1A1A18",
                  lineHeight: 1.6,
                }}
              >
                J&apos;avais le contenu, les idées, l&apos;audience — mais le montage me prenait 3h par vidéo.
                Maintenant je filme, j&apos;envoie, et deux jours après c&apos;est en ligne.
              </p>
              <footer
                className="mt-3"
                style={{
                  fontFamily: "var(--font-jost), sans-serif",
                  fontWeight: 300,
                  fontSize: 13,
                  color: "#8A8070",
                }}
              >
                — Marc L., coach business · 28k abonnés
              </footer>
            </div>
          </motion.blockquote>
        </div>
      </section>

      {/* POURQUOI OSMOZ */}
      <section className="py-28" style={{ backgroundColor: "#1A1A18" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-16"
          >
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <p
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
                La solution
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 600,
                  fontSize: "clamp(32px, 4vw, 52px)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  color: "#F7F2E8",
                }}
              >
                Pourquoi Osmoz
              </h2>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((f) => (
                <motion.div
                  key={f.title}
                  variants={fadeUp}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="flex flex-col gap-4 p-7"
                  style={{
                    backgroundColor: "rgba(44,74,62,0.25)",
                    border: "1px solid rgba(212,168,83,0.1)",
                    borderRadius: 8,
                  }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(212,168,83,0.1)", borderRadius: 6 }}
                  >
                    {f.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontWeight: 600,
                      fontSize: 20,
                      color: "#F7F2E8",
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-jost), sans-serif",
                      fontWeight: 300,
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: "#8A8070",
                    }}
                  >
                    {f.body}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        className="py-28 relative overflow-hidden"
        style={{ backgroundColor: "#2C4A3E" }}
      >
        {/* Filigrane osmoz */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden
        >
          <span
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontWeight: 600,
              fontSize: "clamp(160px, 22vw, 280px)",
              color: "transparent",
              WebkitTextStroke: "1px rgba(247,242,232,0.06)",
              letterSpacing: "-0.04em",
              lineHeight: 1,
              userSelect: "none",
            }}
          >
            osm<span style={{ WebkitTextStrokeColor: "rgba(212,168,83,0.08)" }}>o</span>z
          </span>
        </div>

        <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center gap-8"
          >
            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 600,
                fontSize: "clamp(32px, 5vw, 56px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                color: "#F7F2E8",
              }}
            >
              Prêt à publier plus,<br />
              <em>sans monter toi-même&nbsp;?</em>
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
              Découvre les forfaits et choisis celui qui correspond à ton rythme de publication.
            </motion.p>
            <motion.div variants={fadeUp} className="flex gap-4 flex-wrap justify-center">
              <Link
                href="/services"
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
                Voir les forfaits
              </Link>
              <Link
                href="/contact"
                style={{
                  padding: "16px 36px",
                  border: "1px solid rgba(247,242,232,0.25)",
                  color: "#F7F2E8",
                  fontFamily: "var(--font-jost), sans-serif",
                  fontWeight: 400,
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
