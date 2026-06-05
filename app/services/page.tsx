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

const plans = [
  {
    name: "Essentiel",
    price: "1 000 €",
    badge: "Pour démarrer",
    featured: false,
    items: [
      "4 vidéos YouTube / mois",
      "Jusqu'à 30 min de rushes / vidéo",
      "Sous-titres FR inclus",
      "Coupes & rythme pédagogique",
      "Export prêt à publier",
      "Livraison en 72h",
      "1 révision incluse",
    ],
  },
  {
    name: "Régularité",
    price: "1 500 €",
    badge: "Le plus choisi",
    featured: true,
    items: [
      "4 vidéos YouTube / mois",
      "Jusqu'à 45 min de rushes / vidéo",
      "Sous-titres FR inclus",
      "8 Reels / Shorts extraits",
      "Habillage graphique simple",
      "Livraison en 48h",
      "2 révisions incluses",
      "Suivi Notion partagé",
    ],
  },
  {
    name: "Studio",
    price: "2 500 €",
    badge: "Machine à contenu",
    featured: false,
    items: [
      "6 vidéos YouTube / mois",
      "Jusqu'à 60 min de rushes / vidéo",
      "Sous-titres FR + EN",
      "12 Reels / Shorts extraits",
      "Habillage avancé + motion titles",
      "Livraison en 48h",
      "Révisions illimitées",
      "1 VSL par mois",
      "Appel stratégie 30 min / mois",
    ],
  },
];

const steps = [
  { n: "01", title: "Tu filmes", body: "Tu enregistres ton contenu comme d'habitude, sans te soucier du montage." },
  { n: "02", title: "Tu envoies", body: "Tu déposes les rushes dans un dossier partagé. Je prends le relais." },
  { n: "03", title: "Je monte", body: "Découpe, rythme, sous-titres, habillage. Tout est traité selon tes consignes." },
  { n: "04", title: "Tu publies", body: "Tu reçois ta vidéo prête à publier. Feedback simple si révision nécessaire." },
];

const testimonials = [
  {
    name: "Marc L.",
    role: "Coach business · 28k abonnés",
    quote: "Depuis qu'Osmoz gère mon montage, j'ai doublé ma cadence de publication sans passer de nuits blanches. La qualité est exactement ce que je cherchais.",
  },
  {
    name: "Sophie C.",
    role: "Formatrice nutrition · 15k abonnés",
    quote: "Le suivi Notion est un vrai game-changer. Je sais exactement où en est chaque vidéo, et les délais sont toujours respectés.",
  },
  {
    name: "Thomas M.",
    role: "Infopreneur finance · 52k abonnés",
    quote: "Les Reels extraits de mes YouTube ont explosé ma visibilité Instagram. C'est du travail sérieux, efficace et sans prise de tête.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO COMPACT */}
      <section
        className="pt-32 pb-16 relative"
        style={{ backgroundColor: "#0D0A14" }}
      >
        <div
          className="absolute top-0 left-1/2 pointer-events-none"
          style={{
            width: 500,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(123,47,190,0.25) 0%, transparent 70%)",
            filter: "blur(100px)",
            transform: "translateX(-50%)",
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
              Services & Forfaits
            </motion.p>
            <motion.h1
              variants={fadeUp}
              style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 900, fontSize: "clamp(38px, 5vw, 72px)", letterSpacing: "-0.03em", color: "#F0E6FF", lineHeight: 1.1 }}
            >
              Choisis ton rythme de publication
            </motion.h1>
            <motion.p
              variants={fadeUp}
              style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 300, fontSize: 17, lineHeight: 1.7, color: "#9B88B0", maxWidth: 500 }}
            >
              Trois forfaits conçus pour les infopreneurs qui veulent publier régulièrement sans s&apos;épuiser au montage.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FORFAITS */}
      <section className="py-20 relative" style={{ backgroundColor: "#0D0A14" }}>
        <div className="light-line absolute top-0 left-0 right-0" />
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="relative rounded-2xl p-8 flex flex-col gap-6"
                style={
                  plan.featured
                    ? { backgroundColor: "#7B2FBE", border: "none" }
                    : { backgroundColor: "#1A1028", border: "1px solid rgba(192,132,252,0.1)" }
                }
              >
                {/* Badge */}
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-1">
                    <span
                      style={{
                        fontFamily: "var(--font-outfit), sans-serif",
                        fontWeight: 700,
                        fontSize: 20,
                        color: plan.featured ? "#F0E6FF" : "#F0E6FF",
                      }}
                    >
                      {plan.name}
                    </span>
                    <span
                      className="text-xs uppercase tracking-widest px-3 py-1 rounded-full self-start mt-1"
                      style={{
                        backgroundColor: plan.featured ? "rgba(240,230,255,0.15)" : "rgba(123,47,190,0.15)",
                        color: plan.featured ? "#F0E6FF" : "#C084FC",
                        fontFamily: "var(--font-outfit), sans-serif",
                        fontWeight: 500,
                      }}
                    >
                      {plan.badge}
                    </span>
                  </div>
                </div>

                {/* Prix */}
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-outfit), sans-serif",
                      fontWeight: 800,
                      fontSize: 40,
                      color: plan.featured ? "#F0E6FF" : "#F0E6FF",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {plan.price}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 300,
                      fontSize: 14,
                      color: plan.featured ? "rgba(240,230,255,0.7)" : "#9B88B0",
                      marginLeft: 4,
                    }}
                  >
                    / mois
                  </span>
                </div>

                {/* Liste */}
                <ul className="flex flex-col gap-3 flex-1">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="flex-shrink-0 mt-0.5"
                      >
                        <circle
                          cx="8"
                          cy="8"
                          r="7"
                          fill={plan.featured ? "rgba(240,230,255,0.15)" : "rgba(123,47,190,0.2)"}
                        />
                        <path
                          d="M5 8l2 2 4-4"
                          stroke={plan.featured ? "#F0E6FF" : "#C084FC"}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        style={{
                          fontFamily: "var(--font-inter), sans-serif",
                          fontWeight: 300,
                          fontSize: 14,
                          lineHeight: 1.5,
                          color: plan.featured ? "rgba(240,230,255,0.9)" : "#9B88B0",
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/contact"
                  className="w-full py-3.5 rounded-xl text-sm font-semibold text-center transition-all duration-200 block"
                  style={
                    plan.featured
                      ? { backgroundColor: "#F0E6FF", color: "#7B2FBE", fontFamily: "var(--font-outfit), sans-serif" }
                      : { backgroundColor: "rgba(123,47,190,0.15)", color: "#C084FC", border: "1px solid rgba(192,132,252,0.2)", fontFamily: "var(--font-outfit), sans-serif" }
                  }
                >
                  Choisir ce forfait
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 relative" style={{ backgroundColor: "#1A1028" }}>
        <div className="light-line absolute top-0 left-0 right-0" />
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-16"
          >
            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-widest" style={{ color: "#C084FC", fontFamily: "var(--font-outfit), sans-serif", fontWeight: 500 }}>
                — Comment ça marche
              </p>
              <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 800, fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-0.03em", color: "#F0E6FF" }}>
                4 étapes, zéro friction
              </h2>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
              {/* Ligne de connexion */}
              <div
                className="hidden md:block absolute top-6 left-0 right-0"
                style={{
                  height: 1,
                  background: "linear-gradient(90deg, #7B2FBE, rgba(123,47,190,0.1))",
                  zIndex: 0,
                }}
              />
              {steps.map((step, i) => (
                <motion.div
                  key={step.n}
                  variants={fadeUp}
                  className="relative z-10 flex flex-col gap-4 p-6"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{
                      backgroundColor: i === 0 ? "#7B2FBE" : "#2D1F42",
                      border: i === 0 ? "none" : "1px solid rgba(192,132,252,0.2)",
                      color: "#F0E6FF",
                      fontFamily: "var(--font-outfit), sans-serif",
                    }}
                  >
                    {step.n}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 700, fontSize: 18, color: "#F0E6FF" }}>
                    {step.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 300, fontSize: 14, lineHeight: 1.7, color: "#9B88B0" }}>
                    {step.body}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="py-24 relative" style={{ backgroundColor: "#0D0A14" }}>
        <div className="light-line absolute top-0 left-0 right-0" />
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-14"
          >
            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-widest" style={{ color: "#C084FC", fontFamily: "var(--font-outfit), sans-serif", fontWeight: 500 }}>
                — Témoignages
              </p>
              <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 800, fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-0.03em", color: "#F0E6FF" }}>
                Ce qu&apos;ils en disent
              </h2>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <motion.div
                  key={t.name}
                  variants={fadeUp}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-7 rounded-2xl flex flex-col gap-5 transition-colors duration-200"
                  style={{ backgroundColor: "#1A1028", border: "1px solid rgba(192,132,252,0.1)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(192,132,252,0.3)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(192,132,252,0.1)"; }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-outfit), sans-serif",
                      fontStyle: "italic",
                      fontWeight: 400,
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: "#C084FC",
                      flex: 1,
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 700, fontSize: 15, color: "#F0E6FF" }}>{t.name}</p>
                    <p style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 300, fontSize: 13, color: "#9B88B0" }}>{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
