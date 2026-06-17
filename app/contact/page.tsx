'use client';

import { useState } from "react";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono), monospace",
  fontWeight: 500,
  fontSize: 10,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "#8A8070",
};

const inputBase: React.CSSProperties = {
  fontFamily: "var(--font-jost), sans-serif",
  fontWeight: 300,
  fontSize: 15,
  color: "#1A1A18",
  backgroundColor: "#F7F2E8",
  border: "1px solid #E8DFC8",
  borderRadius: 6,
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

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-12" style={{ backgroundColor: "#F7F2E8" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-5 max-w-xl"
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
              Contact
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
              Travaillons<br />
              <em style={{ color: "#2C4A3E" }}>ensemble</em>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-jost), sans-serif",
                fontWeight: 300,
                fontSize: 16,
                lineHeight: 1.7,
                color: "#8A8070",
              }}
            >
              Parle-moi de ton projet. Je te réponds dans les 24h.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* MAIN */}
      <section className="py-16 pb-28" style={{ backgroundColor: "#F7F2E8" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            {/* GAUCHE — infos */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-10"
            >
              {/* Badge disponible */}
              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <motion.span
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    display: "inline-block",
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: "#4A7C6F",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-jost), sans-serif",
                    fontWeight: 500,
                    fontSize: 14,
                    color: "#4A7C6F",
                  }}
                >
                  Disponible pour nouveau client
                </span>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-col gap-6">
                <h2
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontWeight: 600,
                    fontSize: 24,
                    color: "#1A1A18",
                  }}
                >
                  Ce qu&apos;Osmoz propose
                </h2>
                {[
                  "Montage YouTube : coupes, rythme, sous-titres, exports",
                  "Reels & Shorts : extraction et reformatage vertical",
                  "VSL & pages de vente vidéo : structure narrative, motion",
                  "Formations en ligne : découpage modulaire, transitions",
                  "Suivi Notion partagé + révisions incluses",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginTop: 3, flexShrink: 0 }}>
                      <path d="M2.5 7l3 3 6-6" stroke="#D4A853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p
                      style={{
                        fontFamily: "var(--font-jost), sans-serif",
                        fontWeight: 300,
                        fontSize: 14,
                        lineHeight: 1.7,
                        color: "#8A8070",
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="flex flex-col gap-3 p-6"
                style={{
                  backgroundColor: "#E8DFC8",
                  borderRadius: 8,
                  borderLeft: "3px solid #D4A853",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#8A8070",
                  }}
                >
                  Coordonnées
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-jost), sans-serif",
                    fontWeight: 400,
                    fontSize: 15,
                    color: "#2C4A3E",
                  }}
                >
                  hello@osmoz.media
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-jost), sans-serif",
                    fontWeight: 300,
                    fontSize: 13,
                    color: "#8A8070",
                  }}
                >
                  Réponse sous 24h · Du lundi au vendredi
                </p>
              </motion.div>
            </motion.div>

            {/* DROITE — formulaire */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="p-8"
              style={{ backgroundColor: "#E8DFC8", borderRadius: 8 }}
            >
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center flex flex-col items-center gap-6 py-12"
                >
                  <div
                    className="w-16 h-16 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(44,74,62,0.15)", borderRadius: "50%" }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12l5 5 9-9" stroke="#2C4A3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontWeight: 600,
                      fontSize: 24,
                      color: "#1A1A18",
                    }}
                  >
                    Message envoyé&nbsp;!
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-jost), sans-serif",
                      fontWeight: 300,
                      fontSize: 15,
                      color: "#8A8070",
                      lineHeight: 1.7,
                    }}
                  >
                    Je te recontacte dans les 24h pour discuter de ton projet.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label style={labelStyle}>Prénom</label>
                      <input
                        name="prenom"
                        value={form.prenom}
                        onChange={handleChange}
                        placeholder="Marc"
                        required
                        style={inputBase}
                        onFocus={(e) => { e.target.style.borderColor = "#2C4A3E"; }}
                        onBlur={(e) => { e.target.style.borderColor = "#E8DFC8"; }}
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
                        style={inputBase}
                        onFocus={(e) => { e.target.style.borderColor = "#2C4A3E"; }}
                        onBlur={(e) => { e.target.style.borderColor = "#E8DFC8"; }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label style={labelStyle}>Ta niche</label>
                    <input
                      name="niche"
                      value={form.niche}
                      onChange={handleChange}
                      placeholder="Coach business, Nutrition, Finance…"
                      style={inputBase}
                      onFocus={(e) => { e.target.style.borderColor = "#2C4A3E"; }}
                      onBlur={(e) => { e.target.style.borderColor = "#E8DFC8"; }}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label style={labelStyle}>Forfait souhaité</label>
                    <select
                      name="forfait"
                      value={form.forfait}
                      onChange={handleChange}
                      style={{ ...inputBase, cursor: "pointer" }}
                      onFocus={(e) => { e.target.style.borderColor = "#2C4A3E"; }}
                      onBlur={(e) => { e.target.style.borderColor = "#E8DFC8"; }}
                    >
                      <option value="">Choisir un forfait</option>
                      <option value="essentiel">Essentiel — 1 000 € / mois</option>
                      <option value="regularite">Régularité — 1 500 € / mois</option>
                      <option value="studio">Studio — 2 500 € / mois</option>
                      <option value="inconnu">Je ne sais pas encore</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label style={labelStyle}>Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Parle-moi de ton contenu, ta fréquence de publication, ce que tu cherches…"
                      rows={5}
                      style={{ ...inputBase, resize: "vertical" }}
                      onFocus={(e) => { e.target.style.borderColor = "#2C4A3E"; }}
                      onBlur={(e) => { e.target.style.borderColor = "#E8DFC8"; }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 text-sm transition-all duration-200"
                    style={{
                      backgroundColor: "#D4A853",
                      color: "#1A1A18",
                      fontFamily: "var(--font-jost), sans-serif",
                      fontWeight: 500,
                      borderRadius: 6,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#2C4A3E";
                      e.currentTarget.style.color = "#F7F2E8";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#D4A853";
                      e.currentTarget.style.color = "#1A1A18";
                    }}
                  >
                    Envoyer le message
                  </button>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
