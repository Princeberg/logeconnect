"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header2() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header style={styles.header}>
      {/* Navbar avec effet de fond au scroll */}
      <motion.div 
        style={{
          ...styles.navContainer,
          background: isScrolled ? "rgba(0, 0, 0, 0.43)" : "transparent",
          backdropFilter: isScrolled ? "blur(10px)" : "none",
          boxShadow: isScrolled ? "0 4px 20px rgba(0, 0, 0, 0.1)" : "none"
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Logo avec animation au hover */}
        <motion.div 
          style={styles.logoWrapper}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link href="/" style={styles.logoLink}>
            <motion.div 
              style={styles.logoCircle}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Image 
                src="/favicon.png" 
                alt="Logo" 
                width={50} 
                height={50} 
                style={styles.logoImage} 
              />
            </motion.div>
          </Link>
        </motion.div>

        {/* Menu mobile */}
        <motion.button 
          style={{
            ...styles.mobileMenuButton,
            display: window.innerWidth < 969 ? "flex" : "none"
          }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
          aria-expanded={isMobileMenuOpen}
          className="mobile-menu-button"
        >
          <span style={{
            ...styles.mobileMenuIcon,
            transform: isMobileMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none"
          }}></span>
          <span style={{
            ...styles.mobileMenuIcon,
            opacity: isMobileMenuOpen ? 0 : 1
          }}></span>
          <span style={{
            ...styles.mobileMenuIcon,
            transform: isMobileMenuOpen ? "rotate(-45deg) translate(7px, -6px)" : "none"
          }}></span>
        </motion.button>

        {/* Navigation avec animations - Version Desktop */}
        <nav style={{
          ...styles.nav,
          display: window.innerWidth < 969 ? "none" : "flex"
        }}>
          <Link href="/" passHref>
            <motion.button
              style={styles.navButton}
              whileHover={{ 
                scale: 1.05,
                background: "linear-gradient(135deg, #f8c100, #ffd54f)",
                color: "#000"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Accueil
            </motion.button>
          </Link>

          <Link href="/" passHref>
            <motion.button
              style={styles.navButton}
              whileHover={{ 
                scale: 1.05,
                background: "linear-gradient(135deg, #f8c100, #ffd54f)",
                color: "#000"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Programmer un sejour
            </motion.button>
          </Link>

          <Link href="/demande" passHref>
            <motion.button
              style={styles.ctaNavButton}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(248, 193, 0, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Vendre ou Faire Louer un bien
            </motion.button>
          </Link>
        </nav>

        {/* Menu mobile - Version mobile */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav 
              style={styles.mobileNav}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/" passHref>
                <motion.button
                  style={styles.mobileNavButton}
                  whileHover={{ 
                    background: "linear-gradient(135deg, #f8c100, #ffd54f)",
                    color: "#000"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={closeMobileMenu}
                >
                  Accueil
                </motion.button>
              </Link>

              <Link href="/sejour" passHref>
                <motion.button
                  style={styles.mobileNavButton}
                  whileHover={{ 
                    background: "linear-gradient(135deg, #f8c100, #ffd54f)",
                    color: "#000"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={closeMobileMenu}
                >
                  Programmer un Séjour
                </motion.button>
              </Link>

              <Link href="/sell" passHref>
                <motion.button
                  style={styles.mobileCtaButton}
                  whileHover={{ 
                    boxShadow: "0 10px 25px rgba(248, 193, 0, 0.6)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={closeMobileMenu}
                >
                  Vendre | Faire Louer un bien
                </motion.button>
              </Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.div>

      <style jsx global>{`
        @media (max-width: 968px) {
          .nav {
            display: none !important;
          }
          
          .mobile-menu-button {
            display: flex !important;
          }
        }
        
        @media (min-width: 969px) {
          .mobile-nav {
            display: none !important;
          }
        }
        
        /* Animation du menu hamburger */
        .mobile-menu-button {
          flex-direction: column;
          justify-content: space-around;
          width: 30px;
          height: 30px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 1001;
        }
        
        .mobile-menu-button span {
          width: 30px;
          height: 3px;
          background: white;
          border-radius: 10px;
          transition: all 0.3s linear;
          position: relative;
          transform-origin: 1px;
        }
      `}</style>
    </header>
  );
}

const styles = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    zIndex: 1000,
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
  },
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 5%",
    transition: "all 0.3s ease",
  },
  logoWrapper: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    zIndex: 1001,
  },
  logoLink: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  logoCircle: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  logoImage: {
    width: "40px",
    height: "auto",
    objectFit: "contain",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  navButton: {
    background: "transparent",
    color: "white",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "0.9rem",
    transition: "all 0.3s ease",
    whiteSpace: "nowrap",
  },
  ctaNavButton: {
    background: "linear-gradient(135deg, #f8c100, #ffd54f)",
    color: "#000",
    border: "none",
    padding: "0.6rem 1.2rem",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "0.9rem",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(248, 193, 0, 0.3)",
    whiteSpace: "nowrap",
  },
  mobileMenuButton: {
    display: "none",
    flexDirection: "column",
    justifyContent: "space-around",
    width: "30px",
    height: "30px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: 0,
    zIndex: 1001,
  },
  mobileMenuIcon: {
    width: "30px",
    height: "3px",
    background: "white",
    borderRadius: "10px",
    transition: "all 0.3s linear",
    position: "relative",
    transformOrigin: "1px",
  },
  mobileNav: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.95)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.5rem",
    zIndex: 999,
  },
  mobileNavButton: {
    background: "transparent",
    color: "white",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    padding: "1rem 2rem",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "1rem",
    width: "80%",
    maxWidth: "300px",
  },
  mobileCtaButton: {
    background: "linear-gradient(135deg, #f8c100, #ffd54f)",
    color: "#000",
    border: "none",
    padding: "1rem 2rem",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "1rem",
    width: "80%",
    maxWidth: "300px",
    boxShadow: "0 4px 15px rgba(248, 193, 0, 0.3)",
  },
};

// Additional responsive styles
const responsiveStyles = `
  @media (max-width: 768px) {
    .nav-container {
      padding: 0.8rem 4%;
    }
    
    .logo-circle {
      width: 50px;
      height: 50px;
    }
    
    .logo-image {
      width: 30px;
    }
  }
  
  @media (max-width: 480px) {
    .nav-container {
      padding: 0.6rem 3%;
    }
    
    .logo-circle {
      width: 45px;
      height: 45px;
    }
    
    .mobile-nav-button, .mobile-cta-button {
      padding: 0.8rem 1.5rem;
      font-size: 0.9rem;
    }
  }
`;
