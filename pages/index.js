"use client";
import Footer from '@/components/footer';
import Header from '@/components/header1';
import Head from 'next/head';
import Product from '@/components/product'; 
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaCrown, FaLock, FaHandshake, FaHome } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";

export default function Home() {
  const [counts, setCounts] = useState({ clients: 0, transactions: 0, years: 0 });

  // Compteur animé
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setCounts({
        clients: Math.min(i, 98),
        transactions: Math.min(i * 5, 500),
        years: Math.min(Math.floor(i / 7), 15)
      });
      if (i > 100) clearInterval(interval);
    }, 30);
  }, []);

  function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div style={styles.faqItem} layout onClick={() => setOpen(!open)}>
      <div style={styles.faqQuestion}>
        {question} <span style={{ fontWeight: "bold" }}>{open ? "-" : "+"}</span>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          style={styles.faqAnswer}
        >
          {answer}
        </motion.div>
      )}
    </motion.div>
  );
}

const faqData = [
  { question: "Comment acheter un bien ?", answer: "Vous pouvez nous contacter ou utiliser notre plateforme pour sélectionner et réserver votre bien." },
  { question: "Comment vendre un bien ?", answer: "Inscrivez-vous et ajoutez votre propriété via notre formulaire sécurisé." },
  { question: "Est-ce sécurisé ?", answer: "Toutes les transactions sont 100% sécurisées et encadrées légalement." },
  { question: "Quels types de biens proposez-vous ?", answer: "Terrains, maisons, appartements et propriétés commerciales." },
];


  const avantages = [
    { title: "Expertise locale", desc: "Une parfaite connaissance du marché immobilier.", icon: <FaHome size={40} /> },
    { title: "Service personnalisé", desc: "Chaque client bénéficie d'un accompagnement sur-mesure.", icon: <FaCrown size={40} /> },
    { title: "Sécurité garantie", desc: "Vos transactions sont 100% sécurisées et fiables.", icon: <FaLock size={40} /> },
    { title: "Accompagnement complet", desc: "De la visite à la signature, nous sommes à vos côtés.", icon: <FaHandshake size={40} /> },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <>
      <Head>
        <title>Loge Connect - Immobilier au Congo-Brazzaville</title>
        <meta name="description" content="Découvrez nos propriétés exclusives et notre expertise haut de gamme dans l'immobilier de prestige." />
      </Head>

      <Header />


      {/* Produits */}
      <Product />

      {/* Avantages 3D */}
      <section style={styles.avantages}>
        <h2 style={styles.sectionTitle}>Notre différence Prestige</h2>
        <div style={styles.grid}>
          {avantages.map((item, i) => (
            <motion.div 
              key={i}
              style={styles.card}
              whileHover={{ scale: 1.05, rotateY: 5, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div style={styles.iconWrapper}>{item.icon}</div>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardDesc}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>



      {/* À propos de nous */}
<section style={styles.about}>
  <h2 style={styles.sectionTitle}>À propos de nous</h2>
  <div style={styles.aboutGrid}>
    <motion.div 
      style={styles.aboutCard} 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.8 }}
    >
      <h3 style={styles.aboutTitle}>Notre histoire</h3>
      <p style={styles.aboutDesc}>
        Loge Connect a été fondé avec pour mission d’apporter transparence et excellence dans le marché immobilier au Congo-Brazzaville.
      </p>
    </motion.div>
    <motion.div 
      style={styles.aboutCard} 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h3 style={styles.aboutTitle}>Notre mission</h3>
      <p style={styles.aboutDesc}>
        Fournir un service sur-mesure et sécurisé pour chaque client, en offrant des biens immobiliers de qualité.
      </p>
    </motion.div>
    <motion.div 
      style={styles.aboutCard} 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <h3 style={styles.aboutTitle}>Nos valeurs</h3>
      <p style={styles.aboutDesc}>
        Intégrité, professionnalisme et satisfaction client au cœur de notre démarche.
      </p>
    </motion.div>
  </div>
</section>


      {/* Stats */}
      <section style={styles.stats}>
        <h2 style={styles.sectionTitle}>Notre impact en chiffres</h2>
        <div style={styles.grid}>
          <motion.div style={styles.stat} whileHover={{ scale: 1.1 }}>
            <span style={styles.statNumber}>{counts.clients}%</span>
            <p>Clients satisfaits</p>
          </motion.div>
          <motion.div style={styles.stat} whileHover={{ scale: 1.1 }}>
            <span style={styles.statNumber}>{counts.transactions}+</span>
            <p>Transactions</p>
          </motion.div>
          <motion.div style={styles.stat} whileHover={{ scale: 1.1 }}>
            <span style={styles.statNumber}>{counts.years}+</span>
            <p>Années d&apos;expertise</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ / Questions fréquentes */}
<section style={styles.faq}>
  <h2 style={styles.sectionTitle}>Questions fréquentes</h2>
  <div style={styles.faqGrid}>
    {faqData.map((item, i) => (
      <FAQItem key={i} question={item.question} answer={item.answer} />
    ))}
  </div>
</section>


      {/* Hero */}
      <section style={styles.hero}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          style={styles.heroContent}
        >
          <motion.h1 style={styles.heroTitle}>
            Votre rêve immobilier, <span style={{ color: '#f8c100' }}>notre excellence</span>
          </motion.h1>
          <motion.p style={styles.heroSubtitle}>
            Des biens d&apos;exception sélectionnés avec rigueur, pour une expérience sur-mesure
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            style={styles.cta}
          >
            Découvrir nos biens <MdArrowForward size={24} />
          </motion.button>
        </motion.div>

        {/* Effets 3D flottants */}
        <motion.div style={styles.floating} animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 6 }}/>
        <motion.div style={styles.floating2} animate={{ x: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 5 }}/>
      </section>


      <Footer />
    </>
  );
}

/* Styles modernisés */
const styles = {
  hero: {
    height: "90vh",
    background: "linear-gradient(135deg, #0c2461, #4a69bd)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    color: "white",
    textAlign: "center",
    position: "relative",
    overflow: "hidden"
  },
  heroContent: { zIndex: 2 },
  heroTitle: { fontSize: "3.5rem", fontWeight: "800", marginBottom: "1rem" },
  heroSubtitle: { fontSize: "1.2rem", marginBottom: "2rem", opacity: 0.9 },
  cta: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "1rem 2rem",
    background: "#f8c100",
    borderRadius: "50px",
    border: "none",
    fontWeight: "700",
    cursor: "pointer",
    fontSize: "1.1rem",
    color: "#0c2461",
    boxShadow: "0 10px 20px rgba(248,193,0,0.4)"
  },
  floating: {
    position: "absolute",
    width: "120px",
    height: "120px",
    background: "radial-gradient(circle, rgba(255,255,255,0.2), transparent)",
    borderRadius: "50%",
    top: "15%",
    left: "10%"
  },
  floating2: {
    position: "absolute",
    width: "150px",
    height: "150px",
    background: "radial-gradient(circle, rgba(248,193,0,0.2), transparent)",
    borderRadius: "50%",
    bottom: "15%",
    right: "10%"
  },
  sectionTitle: { textAlign: "center", fontSize: "2.2rem", fontWeight: "800", marginBottom: "2rem", color: "#0c2461" },
  avantages: { padding: "6rem 2rem", background: "#fff" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" },
  card: {
    background: "white",
    borderRadius: "20px",
    padding: "2rem",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    transition: "0.3s"
  },
  iconWrapper: { fontSize: "2.5rem", color: "#f8c100", marginBottom: "1rem" },
  cardTitle: { fontWeight: "700", fontSize: "1.3rem", marginBottom: "1rem", color: "#0c2461" },
  cardDesc: { color: "#555" },
  stats: { padding: "6rem 2rem", background: "linear-gradient(to bottom, #f8f9fa, #fff)" },
  stat: { textAlign: "center", background: "#fff", padding: "2rem", borderRadius: "15px", boxShadow: "0 10px 20px rgba(0,0,0,0.05)" },
  statNumber: { fontSize: "2.5rem", fontWeight: "800", color: "#0c2461" },
  about: { padding: "6rem 2rem", background: "#f4f6f8" },
aboutGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" },
aboutCard: { background: "white", padding: "2rem", borderRadius: "20px", boxShadow: "0 10px 25px rgba(0,0,0,0.08)" },
aboutTitle: { fontSize: "1.5rem", fontWeight: "700", marginBottom: "1rem", color: "#0c2461" },
aboutDesc: { color: "#555", lineHeight: 1.6 },
faq: { padding: "6rem 2rem", background: "#fff" },
faqGrid: { display: "grid", gap: "1.5rem", maxWidth: "800px", margin: "0 auto" },
faqItem: { background: "#f8f9fa", padding: "1.5rem", borderRadius: "15px", cursor: "pointer", boxShadow: "0 5px 15px rgba(0,0,0,0.05)" },
faqQuestion: { fontWeight: "600", fontSize: "1.1rem", color: "#0c2461", display: "flex", justifyContent: "space-between" },
faqAnswer: { marginTop: "0.8rem", color: "#555", fontSize: "1rem", lineHeight: 1.5 },
};
