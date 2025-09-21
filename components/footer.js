"use client";
import { motion } from "framer-motion";
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTiktok, FaArrowUp, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useEffect, useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToTop = () => {
    if (isClient) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer style={styles.footer}>
      {/* Contenu principal du footer */}
      <div style={styles.mainContent}>
        {/* Section informations de contact */}
        <motion.div 
          style={styles.contactSection}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 style={styles.sectionTitle}>Contactez-nous</h3>
          <div style={styles.contactItem} id="contact">
            <FaPhone style={styles.contactIcon} />
            <span>+33 1 ************* </span>
          </div>
          <div style={styles.contactItem}>
            <FaEnvelope style={styles.contactIcon} />
            <span>contact@logeco**********</span>
          </div>
          <div style={styles.contactItem}>
            <FaMapMarkerAlt style={styles.contactIcon} />
            <span>123 Avenue *******************</span>
          </div>
        </motion.div>

        {/* Liens rapides */}
        <motion.div 
          style={styles.linksSection}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 style={styles.sectionTitle}>Liens Rapides</h3>
          <div style={styles.linksContainer}>
            <Link href="/" style={styles.link}>Accueil</Link>
            <Link href="/sejour" style={styles.link}>Programmer un Séjour</Link>
            <Link href="/terrain" style={styles.link}> Offres disponibles </Link>
            <Link href="#contact" style={styles.link}>Contact</Link>
            <Link href="/demande" style={styles.link}>Ajouter une propriété</Link>
          </div>
        </motion.div>
      </div>

      {/* Séparateur */}
      <div style={styles.separator}></div>

      {/* Section Réseaux sociaux et copyright */}
      <div style={styles.bottomSection} >
        {/* Section Réseaux sociaux */}
        <motion.div 
          id="social" 
          style={styles.socialContainer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p style={styles.socialTitle}>Suivez-nous</p>
          <div style={styles.socialIcons}>
            <motion.a 
              href="https://www.facebook.com/share/17U3Fcy6T7/?mibextid=wwXIfr" 
              target="_blank" 
              rel="noreferrer" 
              style={styles.iconLink}
              whileHover={{ y: -5, color: "#f8c100" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FaFacebookF />
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/loge.connect?igsh=MWg4ZnU3Y2N6ZTIyOQ%3D%3D&utm_source=qr" 
              target="_blank" 
              rel="noreferrer" 
              style={styles.iconLink}
              whileHover={{ y: -5, color: "#f8c100" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FaInstagram />
            </motion.a>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          style={styles.copyrightContainer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p style={styles.footerText}>
            © {currentYear} Loge Connect. Tous droits réservés. 
            <span style={styles.credit}>
              Développé par <Link href="https://magicandtech.netlify.app" target="_blank" rel="noreferrer" style={styles.creditLink}>
                Magic&Tech
              </Link>
            </span>
          </p>
        </motion.div>

        {/* Bouton retour en haut */}
        <motion.button 
          style={styles.backToTop}
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, backgroundColor: "#f8c100", color: "#000" }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <FaArrowUp />
        </motion.button>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "linear-gradient(to bottom, #0a0a0a 0%, #000 100%)",
    color: "#fff",
    padding: "3rem 5% 1.5rem",
    position: "relative",
    overflow: "hidden",
  },
  mainContent: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2.5rem",
    marginBottom: "2rem",
  },
  contactSection: {
    display: "flex",
    flexDirection: "column",
  },
  sectionTitle: {
    fontSize: "1.3rem",
    fontWeight: "700",
    marginBottom: "1.5rem",
    color: "#f8c100",
    position: "relative",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
    fontSize: "0.95rem",
  },
  contactIcon: {
    marginRight: "0.8rem",
    color: "#f8c100",
    fontSize: "1rem",
  },
  linksSection: {
    display: "flex",
    flexDirection: "column",
  },
  linksContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "0.8rem",
  },
  link: {
    color: "#ddd",
    textDecoration: "none",
    fontWeight: "400",
    transition: "all 0.3s ease",
    fontSize: "0.95rem",
    padding: "0.3rem 0",
    position: "relative",
  },
  newsletterSection: {
    display: "flex",
    flexDirection: "column",
  },
  newsletterText: {
    marginBottom: "1.2rem",
    fontSize: "0.95rem",
    lineHeight: "1.5",
    color: "#ccc",
  },
  newsletterForm: {
    display: "flex",
    flexDirection: "column",
    gap: "0.8rem",
  },
  newsletterInput: {
    padding: "0.8rem 1rem",
    borderRadius: "4px",
    border: "1px solid #333",
    background: "#1a1a1a",
    color: "#fff",
    fontSize: "0.9rem",
  },
  newsletterButton: {
    background: "linear-gradient(135deg, #f8c100, #ffd54f)",
    color: "#000",
    border: "none",
    padding: "0.8rem 1rem",
    borderRadius: "4px",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "0.9rem",
    transition: "all 0.3s ease",
  },
  separator: {
    height: "1px",
    background: "linear-gradient(to right, transparent, #333, transparent)",
    margin: "1.5rem 0",
  },
  bottomSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
  socialContainer: {
    marginBottom: "1.5rem",
    textAlign: "center",
  },
  socialTitle: {
    fontSize: "1.1rem",
    fontWeight: "600",
    marginBottom: "1rem",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "1.2rem",
    fontSize: "1.4rem",
  },
  iconLink: {
    color: "#fff",
    transition: "all 0.3s ease",
  },
  copyrightContainer: {
    textAlign: "center",
    marginBottom: "1.5rem",
  },
  footerText: {
    fontSize: "0.9rem",
    opacity: 0.8,
    lineHeight: "1.6",
  },
  credit: {
    display: "block",
    marginTop: "0.5rem",
  },
  creditLink: {
    color: "#f8c100",
    textDecoration: "none",
    fontWeight: "600",
    marginLeft: "0.3rem",
  },
  backToTop: {
    position: "absolute",
    right: "0",
    bottom: "0",
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    background: "#333",
    color: "#fff",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "1.2rem",
    transition: "all 0.3s ease",
  },
};

const linkHoverStyles = `
  @media (hover: hover) {
    a[style*="color: #ddd"]:hover {
      color: #f8c100 !important;
      transform: translateX(5px);
    }
    
    a[style*="color: #ddd"]:before {
      content: "";
      position: absolute;
      width: 0;
      height: 1px;
      bottom: 0;
      left: 0;
      background-color: #f8c100;
      transition: width 0.3s ease;
    }
    
    a[style*="color: #ddd"]:hover:before {
      width: 100%;
    }
  }
`;