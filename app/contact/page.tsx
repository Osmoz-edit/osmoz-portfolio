'use client';

import { useState } from "react";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const labelStyle = {
  fontFamily: "var(--font-outfit), sans-serif",
  fontWeight: 500,
  fontSize: 11,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  color: "#9B88B0",
};

const inputStyle = {
  fontFamily: "var(--font-inter), sans-serif",
  fontWeight: 300,
  fontSize: 15,
  color: "#F0E6FF",
  backgroundColor: "#2D1F42",
  border: "1px solid rgba(192,132,252,0.2)",
  borderRadius: 10,
  padding: "12px 16px",
  width: "100%",
  outline: "none",
  transition: "border-color 0.2s",
};

export default function ContactPage() {
  const [form, setForm] = useState({
    prenom: "",
    email: "",
    niche: "",
    forfait: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-12 relative" style={{ backgroundColor: "#0D0A14" }}>
        <div
          className="absolute top-0 left-0 pointer-events-none"
          style={{
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(123,47,190,0.2) 0%, transparent 70%)",
            filter: "blur(100px)",
            transform: "translate(-30%, -20%)",
          }}
        />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-5 max-w-xl">
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-widest flex items-center gap-3" style={{ color: "#C084FC", fontFamily: "var(--font-outfit), sans-serif", fontWeight: 500 }}>
              <span style={{ display: "inline-block", width: 24, height: 1, backgroundColor: "#C084FC" }} />
              Contact
            </motion.p>
            <motion.h1 variants={fadeUp} style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 900, fontSize: "clamp(38px, 5vw, 72px)", letterSpacing: "-0.03em", color: "#F0E6FF", lineHeight: 1.1 }}>
              Travaillons ensemble
            </motion.h1>
            <motion.p variants={fadeUp} style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 300, fontSize: 17, lineHeight: 1.7, color: "#9B88B0" }}>
              Parle-moi de ton projet. Je te réponds dans les 24h.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* MAIN */}
      <section className="py-16 pb-28 relative" style={{ backgroundColor: "#0D0A14" }}>
        <div className="light-line absolute top-0 left-0 right-0" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            {/* COLONNE GAUCHE — Infos */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col gap-10"
            >
              {/* Badge disponibilité */}
              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    style={{ backgroundColor: "#22c55e" }}
                  />
                  <span className="relative inline-flex rounded-full h-3 w-3" style={{ backgroundColor: "#22c55e" }} />
                </span>
                <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 500, fontSize: 14, color: "#22c55e" }}>
                  Disponible pour de nouveaux clients
                </span>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-col gap-6">
                <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 700, fontSize: 22, color: "#F0E6FF" }}>
                  Ce qu&apos;Osmoz propose
                </h2>
                {[
                  { icon: "✂️", text: "Montage YouTube : coupes, rythme, sous-titres, exports" },
                  { icon: "📱", text: "Reels & Shorts : extraction et reformatage vertical" },
                  { icon: "🎬", text: "VSL & pages de vente vidéo : structure narrative, motion" },
                  { icon: "🎓", text: "Formations en ligne : découpage modulaire, transitions" },
                  { icon: "📊", text: "Suivi Notion partagé + révisions incluses" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
                    <p style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 300, fontSize: 15, lineHeight: 1.7, color: "#9B88B0" }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="p-6 rounded-2xl flex flex-col gap-4"
                style={{ backgroundColor: "rgba(45,31,66,0.4)", border: "1px solid rgba(192,132,252,0.12)" }}
              >
                <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 700, fontSize: 16, color: "#F0E6FF" }}>
                  Coordonnées
                </p>
                <div className="flex flex-col gap-2">
                  <p style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 300, fontSize: 15, color: "#C084FC" }}>
                    hello@osmoz-video.fr
                  </p>
                  <p style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 300, fontSize: 14, color: "#9B88B0" }}>
                    Réponse sous 24h · Du lundi au vendredi
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* COLONNE DROITE — Formulaire */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-10 rounded-2xl text-center flex flex-col items-center gap-6"
                  style={{ backgroundColor: "rgba(45,31,66,0.5)", border: "1px solid rgba(192,132,252,0.2)" }}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(123,47,190,0.2)" }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12l5 5 9-9" stroke="#C084FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 700, fontSize: 22, color: "#F0E6FF" }}>
                    Message envoyé !
                  </h3>
                  <p style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 300, fontSize: 15, color: "#9B88B0", lineHeight: 1.7 }}>
                    Je te recontacte dans les 24h pour discuter de ton projet.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  variants={stagger}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
                  <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label style={labelStyle}>Prénom</label>
                      <input
                        name="prenom"
                        value={form.prenom}
                        onChange={handleChange}
                        placeholder="Marc"
                        required
                        style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = "#7B2FBE"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(192,132,252,0.2)"; }}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label style={labelStyle}>Email</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="marc@exemple.fr"
                        required
                        style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = "#7B2FBE"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(192,132,252,0.2)"; }}
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={fadeUp} className="flex flex-col gap-2">
                    <label style={labelStyle}>Ta niche</label>
                    <input
                      name="niche"
                      value={form.niche}
                      onChange={handleChange}
                      placeholder="Coach business, Nutrition, Finance…"
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = "#7B2FBE"; }}
                      onBlur={(e) => { e.target.style.borderColor = "rgba(192,132,252,0.2)"; }}
                    />
                  </motion.div>

                  <motion.div variants={fadeUp} className="flex flex-col gap-2">
                    <label style={labelStyle}>Forfait souhaité</label>
                    <select
                      name="forfait"
                      value={form.forfait}
                      onChange={handleChange}
                      style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                      onFocus={(e) => { e.target.style.borderColor = "#7B2FBE"; }}
                      onBlur={(e) => { e.target.style.borderColor = "rgba(192,132,252,0.2)"; }}
                    >
                      <option value="" style={{ backgroundColor: "#2D1F42" }}>Choisir un forfait</option>
                      <option value="essentiel" style={{ backgroundColor: "#2D1F42" }}>Essentiel — 1 000 € / mois</option>
                      <option value="regularite" style={{ backgroundColor: "#2D1F42" }}>Régularité — 1 500 € / mois</option>
                      <option value="studio" style={{ backgroundColor: "#2D1F42" }}>Studio — 2 500 € / mois</option>
                      <option value="inconnu" style={{ backgroundColor: "#2D1F42" }}>Je ne sais pas encore</option>
                    </select>
                  </motion.div>

                  <motion.div variants={fadeUp} className="flex flex-col gap-2">
                    <label style={labelStyle}>Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Parle-moi de ton contenu, ta fréquence de publication, ce que tu cherches…"
                      rows={5}
                      style={{ ...inputStyle, resize: "vertical" }}
                      onFocus={(e) => { e.target.style.borderColor = "#7B2FBE"; }}
                      onBlur={(e) => { e.target.style.borderColor = "rgba(192,132,252,0.2)"; }}
                    />
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl text-sm font-semibold transition-all duration-200"
                      style={{
                        backgroundColor: "#7B2FBE",
                        color: "#F0E6FF",
                        fontFamily: "var(--font-outfit), sans-serif",
                        fontWeight: 600,
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#C084FC"; e.currentTarget.style.color = "#0D0A14"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#7B2FBE"; e.currentTarget.style.color = "#F0E6FF"; }}
                    >
                      Envoyer le message
                    </button>
                  </motion.div>
                </motion.form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
