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

const plans = [
  {
    name: "Essentiel",
    price: "1 000 €",
    badge: "Pour démarrer",
    featured: false,
    items: [
      "4 vidéos YouTube montées / mois",
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
      "4 vidéos YouTube montées / mois",
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
      "6 vidéos YouTube montées / mois",
      "Jusqu'à 60 min de rushes / vidéo",
      "Sous-titres FR + EN",
      "12 Reels / Shorts extraits",
      "Habillage avancé + motion titles",
      "Livraison en 48h",
      "Révisions illimitées",
      "1 VSL ou vidéo de vente / mois",
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
      {/* HERO */}
      <section className="pt-32 pb-16" style={{ backgroundColor: "#F7F2E8" }}>
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
              Services & Forfaits
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
              Choisis ton rythme<br />
              <em style={{ color: "#2C4A3E" }}>de publication</em>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-jost), sans-serif",
                fontWeight: 300,
                fontSize: 16,
                lineHeight: 1.7,
                color: "#8A8070",
                maxWidth: 500,
              }}
            >
              Trois forfaits conçus pour les infopreneurs qui veulent publier régulièrement sans s&apos;épuiser au montage.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FORFAITS */}
      <section className="py-20" style={{ backgroundColor: "#2C4A3E" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="relative flex flex-col gap-6 p-8"
                style={
                  plan.featured
                    ? {
                        backgroundColor: "#1A1A18",
                        border: "1px solid #D4A853",
                        borderRadius: 8,
                      }
                    : {
                        backgroundColor: "rgba(26,26,24,0.35)",
                        border: "1px solid rgba(212,168,83,0.15)",
                        borderRadius: 8,
                      }
                }
              >
                {/* Badge */}
                <div className="flex flex-col gap-2">
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontWeight: 600,
                      fontSize: 22,
                      color: "#F7F2E8",
                    }}
                  >
                    {plan.name}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: 10,
                      fontWeight: 500,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#D4A853",
                    }}
                  >
                    {plan.badge}
                  </span>
                </div>

                {/* Prix */}
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontWeight: 600,
                      fontSize: 62,
                      color: plan.featured ? "#D4A853" : "#F7F2E8",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    {plan.price}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-jost), sans-serif",
                      fontWeight: 300,
                      fontSize: 13,
                      color: "rgba(247,242,232,0.5)",
                      marginLeft: 6,
                    }}
                  >
                    / mois
                  </span>
                </div>

                {/* Liste */}
                <ul className="flex flex-col gap-3 flex-1">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0" style={{ marginTop: 3 }}>
                        <path d="M2.5 7l3 3 6-6" stroke="#D4A853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span
                        style={{
                          fontFamily: "var(--font-jost), sans-serif",
                          fontWeight: 300,
                          fontSize: 13,
                          lineHeight: 1.5,
                          color: "rgba(247,242,232,0.75)",
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
                  className="block w-full py-3.5 text-sm text-center transition-all duration-200"
                  style={
                    plan.featured
                      ? {
                          backgroundColor: "#D4A853",
                          color: "#1A1A18",
                          fontFamily: "var(--font-jost), sans-serif",
                          fontWeight: 500,
                          borderRadius: 6,
                        }
                      : {
                          border: "1px solid rgba(212,168,83,0.3)",
                          color: "#D4A853",
                          fontFamily: "var(--font-jost), sans-serif",
                          fontWeight: 400,
                          borderRadius: 6,
                        }
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
      <section className="py-24" style={{ backgroundColor: "#E8DFC8" }}>
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
                Comment ça marche
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 600,
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  letterSpacing: "-0.02em",
                  color: "#1A1A18",
                }}
              >
                4 étapes, zéro friction
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-4"
              style={{ borderTop: "1px solid rgba(26,26,24,0.1)" }}
            >
              {steps.map((step, i) => (
                <motion.div
                  key={step.n}
                  variants={fadeUp}
                  className="flex flex-col gap-4 p-6 md:py-8"
                  style={{
                    borderRight: i < 3 ? "1px solid rgba(26,26,24,0.1)" : "none",
                    borderBottom: "1px solid rgba(26,26,24,0.1)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontWeight: 600,
                      fontSize: 64,
                      lineHeight: 1,
                      color: "transparent",
                      WebkitTextStroke: "1px rgba(26,26,24,0.15)",
                    }}
                  >
                    {step.n}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontWeight: 600,
                      fontSize: 20,
                      color: "#1A1A18",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-jost), sans-serif",
                      fontWeight: 300,
                      fontSize: 13,
                      lineHeight: 1.7,
                      color: "#8A8070",
                    }}
                  >
                    {step.body}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="py-24" style={{ backgroundColor: "#F7F2E8" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-14"
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
                Témoignages
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 600,
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  letterSpacing: "-0.02em",
                  color: "#1A1A18",
                }}
              >
                Ce qu&apos;ils en disent
              </h2>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <motion.div
                  key={t.name}
                  variants={fadeUp}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="flex flex-col gap-5 p-7 transition-all duration-300 cursor-default"
                  style={{
                    backgroundColor: "#E8DFC8",
                    borderBottom: "3px solid transparent",
                    borderRadius: 8,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderBottomColor = "#D4A853"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderBottomColor = "transparent"; }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontWeight: 600,
                      fontSize: 48,
                      color: "#D4A853",
                      opacity: 0.6,
                      lineHeight: 0.8,
                    }}
                  >
                    &ldquo;
                  </span>
                  <p
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontStyle: "italic",
                      fontWeight: 400,
                      fontSize: 17,
                      lineHeight: 1.6,
                      color: "#1A1A18",
                      flex: 1,
                    }}
                  >
                    {t.quote}
                  </p>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-jost), sans-serif",
                        fontWeight: 500,
                        fontSize: 14,
                        color: "#1A1A18",
                      }}
                    >
                      {t.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-jost), sans-serif",
                        fontWeight: 300,
                        fontSize: 12,
                        color: "#8A8070",
                      }}
                    >
                      {t.role}
                    </p>
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
