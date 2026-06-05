'use client';

import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const painPoints = [
  {
    icon: "⏱",
    title: "Tu passes des heures au montage",
    body: "Entre le découpage, les sous-titres, les exports — tu perds du temps que tu devrais passer à créer.",
  },
  {
    icon: "📉",
    title: "Tes vidéos manquent de rythme",
    body: "Tu sais que la qualité visuelle influence ta crédibilité. Mais le montage ce n'est pas ton truc, et ça se voit.",
  },
  {
    icon: "🔄",
    title: "Tu publies en retard ou pas assez",
    body: "Le montage est le goulot d'étranglement. Tu voudrais publier plus, mais tu n'as pas le temps.",
  },
  {
    icon: "😩",
    title: "Tu fais tout tout seul",
    body: "Infopreneurs solitaires : vous portez trop de chapeaux. Il est temps de déléguer ce qui peut l'être.",
  },
];

const features = [
  {
    title: "Livraison rapide",
    body: "48 à 72h par vidéo selon le forfait. Tu envoies les rushes, je te rends une vidéo prête à publier.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#C084FC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "100% infopreneurs",
    body: "Mon expertise est calibrée pour le rythme pédagogique, les tutoriels et les VSL. Pas de mariage, pas de clip.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="#C084FC" strokeWidth="1.8" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#C084FC" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Communication claire",
    body: "Suivi Notion partagé, feedback structuré, révisions sans friction. Tu sais toujours où en est ta vidéo.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#C084FC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ backgroundColor: "#0D0A14", paddingTop: "80px" }}
      >
        <div
          className="absolute top-0 right-0 pointer-events-none"
          style={{
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(123,47,190,0.35) 0%, transparent 70%)",
            filter: "blur(90px)",
            transform: "translate(30%, -20%)",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              className="flex items-center gap-3 text-xs uppercase tracking-widest"
              style={{ color: "#C084FC", fontFamily: "var(--font-outfit), sans-serif", fontWeight: 500 }}
            >
              <span style={{ display: "inline-block", width: 24, height: 1, backgroundColor: "#C084FC" }} />
              Montage Vidéo · Infopreneurs Francophones
            </motion.p>

            <div className="flex flex-col gap-1">
              <motion.h1
                variants={fadeUp}
                style={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(54px, 8vw, 108px)",
                  letterSpacing: "-3px",
                  lineHeight: 1.0,
                  color: "#F0E6FF",
                }}
              >
                Tu filmes.
              </motion.h1>
              <motion.h1
                variants={fadeUp}
                style={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontWeight: 900,
                  fontStyle: "italic",
                  fontSize: "clamp(54px, 8vw, 108px)",
                  letterSpacing: "-3px",
                  lineHeight: 1.0,
                  color: "#C084FC",
                }}
              >
                Je monte.
              </motion.h1>
              <motion.h1
                variants={fadeUp}
                style={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(54px, 8vw, 108px)",
                  letterSpacing: "-3px",
                  lineHeight: 1.0,
                  WebkitTextStroke: "1.5px #C084FC",
                  color: "transparent",
                }}
              >
                Tu publies.
              </motion.h1>
            </div>

            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 300,
                fontSize: 17,
                lineHeight: 1.7,
                color: "#9B88B0",
                maxWidth: 460,
              }}
            >
              Monteur vidéo freelance spécialisé pour les infopreneurs francophones.
              Je transforme tes rushes bruts en contenu prêt à publier — en 48h.
            </motion.p>

            <motion.div variants={fadeUp} className="flex gap-4 flex-wrap">
              <Link
                href="/services"
                className="px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{ backgroundColor: "#7B2FBE", color: "#F0E6FF", fontFamily: "var(--font-outfit), sans-serif" }}
              >
                Voir les forfaits
              </Link>
              <Link
                href="/projets"
                className="px-7 py-3.5 rounded-xl text-sm font-medium transition-all duration-200"
                style={{ border: "1px solid rgba(192,132,252,0.2)", color: "#C084FC", fontFamily: "var(--font-outfit), sans-serif" }}
              >
                Voir les projets
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex gap-10 pt-8 mt-4 flex-wrap"
              style={{ borderTop: "1px solid rgba(192,132,252,0.15)" }}
            >
              {[
                { value: "48h", label: "Délai de livraison" },
                { value: "4×", label: "Plus de contenu publié" },
                { value: "0", label: "Mauvaise surprise" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span
                    style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 700, fontSize: 48, color: "#F0E6FF", lineHeight: 1 }}
                  >
                    {s.value}
                  </span>
                  <span
                    style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 300, fontSize: 13, color: "#9B88B0", marginTop: 4 }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <div
        className="overflow-hidden py-5"
        style={{
          backgroundColor: "#1A1028",
          borderTop: "1px solid rgba(192,132,252,0.15)",
          borderBottom: "1px solid rgba(192,132,252,0.15)",
        }}
      >
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 2 }, (_, i) =>
            ["Montage YouTube", "Reels Instagram", "VSL & Tunnels", "Sous-titres FR", "Podcasts Vidéo", "Formations en ligne", "LinkedIn Capsules", "Motion Titles"].map((item, j) => (
              <span
                key={`${i}-${j}`}
                className="text-sm uppercase tracking-widest"
                style={{
                  color: (i + j) % 2 === 0 ? "#9B88B0" : "#C084FC",
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontWeight: 500,
                }}
              >
                {item}
                <span style={{ margin: "0 24px", color: "#2D1F42" }}>✦</span>
              </span>
            ))
          )}
        </motion.div>
      </div>

      {/* CE QUE TU VIS */}
      <section className="py-28 relative" style={{ backgroundColor: "#1A1028" }}>
        <div className="light-line absolute top-0 left-0 right-0" />
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="flex flex-col gap-16">
            <motion.div variants={fadeUp} className="flex flex-col gap-3 max-w-xl">
              <p className="text-xs uppercase tracking-widest" style={{ color: "#C084FC", fontFamily: "var(--font-outfit), sans-serif", fontWeight: 500 }}>
                — Le problème
              </p>
              <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 800, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em", color: "#F0E6FF", lineHeight: 1.15 }}>
                Ce que tu vis probablement
              </h2>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {painPoints.map((p) => (
                <motion.div
                  key={p.title}
                  variants={fadeUp}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-7 rounded-2xl flex flex-col gap-3 transition-colors duration-200 cursor-default"
                  style={{ backgroundColor: "rgba(45,31,66,0.5)", border: "1px solid rgba(192,132,252,0.1)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(192,132,252,0.3)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(192,132,252,0.1)"; }}
                >
                  <span style={{ fontSize: 24 }}>{p.icon}</span>
                  <h3 style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 700, fontSize: 18, color: "#F0E6FF" }}>{p.title}</h3>
                  <p style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 300, fontSize: 15, lineHeight: 1.7, color: "#9B88B0" }}>{p.body}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.blockquote
              variants={fadeUp}
              className="p-8 rounded-2xl"
              style={{ border: "1px solid rgba(192,132,252,0.2)", backgroundColor: "rgba(123,47,190,0.06)" }}
            >
              <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(16px, 2vw, 22px)", color: "#C084FC", lineHeight: 1.6 }}>
                &ldquo;J&rsquo;avais le contenu, les idées, l&rsquo;audience — mais le montage me prenait 3h par vidéo. Maintenant je filme, j&rsquo;envoie, et deux jours après c&rsquo;est en ligne.&rdquo;
              </p>
              <footer className="mt-4 text-sm" style={{ color: "#9B88B0", fontFamily: "var(--font-inter), sans-serif" }}>
                — Marc L., coach business · 28k abonnés
              </footer>
            </motion.blockquote>
          </motion.div>
        </div>
      </section>

      {/* POURQUOI OSMOZ */}
      <section className="py-28 relative" style={{ backgroundColor: "#0D0A14" }}>
        <div className="light-line absolute top-0 left-0 right-0" />
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="flex flex-col gap-16">
            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-widest" style={{ color: "#C084FC", fontFamily: "var(--font-outfit), sans-serif", fontWeight: 500 }}>
                — La solution
              </p>
              <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 800, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em", color: "#F0E6FF", lineHeight: 1.15 }}>
                Pourquoi Osmoz
              </h2>
            </motion.div>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((f) => (
                <motion.div
                  key={f.title}
                  variants={fadeUp}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="flex flex-col gap-4 p-7 rounded-2xl"
                  style={{ backgroundColor: "rgba(45,31,66,0.3)", border: "1px solid rgba(192,132,252,0.08)" }}
                >
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl" style={{ backgroundColor: "rgba(123,47,190,0.15)" }}>
                    {f.icon}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 700, fontSize: 18, color: "#F0E6FF" }}>{f.title}</h3>
                  <p style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 300, fontSize: 15, lineHeight: 1.7, color: "#9B88B0" }}>{f.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative" style={{ backgroundColor: "#2D1F42" }}>
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
              Prêt à publier plus, sans monter toi-même ?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 300, fontSize: 17, lineHeight: 1.7, color: "#9B88B0" }}
            >
              Découvre les forfaits et choisis celui qui correspond à ton rythme de publication.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/services"
                className="px-8 py-4 rounded-xl text-sm font-semibold"
                style={{ backgroundColor: "#7B2FBE", color: "#F0E6FF", fontFamily: "var(--font-outfit), sans-serif" }}
              >
                Voir les forfaits
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
