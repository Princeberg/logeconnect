"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// Import direct de Swiper (plus stable que dynamic import pour ce cas)
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

// Import CSS Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
    
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      
      const checkMobile = () => {
        setIsMobile(window.innerWidth <= 968);
      };
      
      checkMobile();
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", checkMobile);
      
      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", checkMobile);
      };
    }
  }, []);


  return (
    <header style={styles.header}>
      {/* Navbar avec effet de fond au scroll */}
      <motion.div 
        style={{
          ...styles.navContainer,
          background: isScrolled ? "rgba(0, 0, 0, 0.8)" : "transparent",
          backdropFilter: isScrolled ? "blur(10px)" : "none",
          boxShadow: isScrolled ? "0 4px 20px rgba(0, 0, 0, 0.1)" : "none",
          padding: isMobile ? "1rem 5%" : "1rem 5%",
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Logo avec animation au hover */}
        <motion.div 
          style={{
            ...styles.logoWrapper,
            width: isMobile ? "60px" : "100px",
            height: isMobile ? "60px" : "100px",
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link href="/" style={styles.logoLink}>
            <motion.div 
              style={{
                ...styles.logoCircle,
                width: isMobile ? "60px" : "100px",
                height: isMobile ? "60px" : "100px",
              }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Image 
                src="/favicon.png" 
                alt="Logo" 
                width={isMobile ? 80 : 150} 
                height={isMobile ? 80 : 150} 
                style={styles.logoImage} 
              />
            </motion.div>
          </Link>
        </motion.div>

        {/* Menu mobile - Bouton hamburger */}
        <motion.button 
          style={{
            ...styles.mobileMenuButton,
            display: isMobile ? "flex" : "none",
          }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label="Menu mobile"
          aria-expanded={isMobileMenuOpen}
        >
          <span style={{
            ...styles.mobileMenuIcon,
            transform: isMobileMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
          }}></span>
          <span style={{
            ...styles.mobileMenuIcon,
            opacity: isMobileMenuOpen ? 0 : 1,
          }}></span>
          <span style={{
            ...styles.mobileMenuIcon,
            transform: isMobileMenuOpen ? "rotate(-45deg) translate(7px, -6px)" : "none",
          }}></span>
        </motion.button>

        {/* Navigation avec animations - Version Desktop */}
        <nav style={{
          ...styles.nav,
          display: isMobile && !isMobileMenuOpen ? "none" : isMobileMenuOpen ? "none" : "flex",
        }}>
          <Link href="/terrain" passHref>
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
              Offres disponibles
            </motion.button>
          </Link>

          <Link href="/sejour" passHref>
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
              Programmer un Séjour
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
              Vendre | Louer
            </motion.button>
          </Link>
        </nav>

        {/* Menu mobile - Version mobile */}
        <AnimatePresence>
          {isMobileMenuOpen && isMobile && (
            <motion.nav 
              style={styles.mobileNav}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >

              <Link href="/terrain" passHref>
                <motion.button
                  style={styles.mobileNavButton}
                  whileHover={{ 
                    background: "linear-gradient(135deg, #f8c100, #ffd54f)",
                    color: "#000"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Offres disponibles
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
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Programmer un Séjour
                </motion.button>
              </Link>

              <Link href="/demande" passHref>
                <motion.button
                  style={styles.mobileCtaButton}
                  whileHover={{ 
                    boxShadow: "0 10px 25px rgba(248, 193, 0, 0.6)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Vendre ou Faire Louer
                </motion.button>
              </Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Hero Carousel avec Swiper fonctionnel */}
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ 
          delay: 2000, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        pagination={{ 
          clickable: true,
          el: '.custom-pagination',
          renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
          },
        }}
        effect="fade"
        speed={1000}
        loop={true}
        className="heroSwiper"
        onSwiper={(swiper) => {
          // Stocker la référence du swiper
          swiperRef.current = swiper;
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                ...styles.slide,
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0,0,0,0.2)), url(${slide.image})`,
                padding: isMobile ? "0 5%" : "0 0 0 10%",
                justifyContent: isMobile ? "center" : "flex-start",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{
                  ...styles.heroContent,
                  maxWidth: isMobile ? "100%" : "650px",
                  alignItems: isMobile ? "center" : "flex-start",
                }}
              >
                <motion.h1 
                  style={{
                    ...styles.heroTitle,
                    fontSize: isMobile ? "2.2rem" : "3.5rem",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  {slide.title}
                </motion.h1>
                <motion.p 
                  style={{
                    ...styles.heroSubtitle,
                    fontSize: isMobile ? "1rem" : "1.3rem",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  {slide.subtitle}
                </motion.p>
                <Link href={slide.link} passHref>
                  <motion.button
                    style={styles.ctaButton}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px rgba(248, 193, 0, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {slide.buttonText}
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Pagination personnalisée */}
      <div className="custom-pagination" style={{
        ...styles.pagination,
        left: isMobile ? "50%" : "10%",
        transform: isMobile ? "translateX(-50%)" : "none",
        justifyContent: isMobile ? "center" : "flex-start",
      }}></div>
      
      {/* Indicateur de défilement */}
      <motion.div 
        style={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={styles.scrollArrow}
        >
          ↓
        </motion.div>
      </motion.div>

      <style jsx global>{`
        .custom-bullet {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 0 6px;
          display: inline-block;
        }
        
        .custom-bullet-active {
          background: #f8c100;
          transform: scale(1.3);
        }
        
        .heroSwiper {
          width: 100%;
          height: 100vh;
        }
        
        .heroSwiper .swiper-pagination {
          display: flex;
          justify-content: flex-start;
          padding-left: 10%;
          bottom: 80px;
        }
        
        /* Styles responsives */
        @media (max-width: 968px) {
          .heroSwiper .swiper-pagination {
            justify-content: center;
            padding-left: 0;
            bottom: 100px;
          }
        }
        
        @media (max-width: 480px) {
          .heroSwiper .swiper-pagination {
            bottom: 70px;
          }
          
          .custom-bullet {
            width: 10px;
            height: 10px;
          }
        }
      `}</style>
    </header>
  );
}

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1600494448868-9fbd1ac2d9f5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Terrains disponibles",
    subtitle: "Investissez dans l'avenir avec nos offres exclusives",
    buttonText: "Voir les terrains disponibles",
    link: "/properties?type=terrain",
  },
  {
    image:
      "https://images.unsplash.com/photo-1649972904914-5d5aaf3d1793?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ajoutez votre propriété",
    subtitle: "Publiez votre maison, appartement ou terrain facilement",
    buttonText: "Ajouter une propriété",
    link: "/add-property",
  },
  {
    image:
      "https://images.unsplash.com/photo-1740042270024-dbf3400af7fb?q=80&w=1132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "À propos de nous",
    subtitle: "Découvrez l'histoire et la mission de Loge Connect",
    buttonText: "À propos de nous",
    link: "/about",
  },
  {
    image:
      "https://images.unsplash.com/photo-1665686304355-0b09b1e3b03c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Rejoignez notre communauté",
    subtitle: "Suivez-nous sur les réseaux sociaux et restez informés",
    buttonText: "Suivez-nous",
    link: "#social",
  },
];

const styles = {
  header: {
    position: "relative",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
    color: "white",
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
  },
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 5%",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
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
    borderRadius: "50%",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  },
  logoImage: {
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
    padding: "0.6rem 1rem",
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
    padding: "0.7rem 1.2rem",
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
    justifyContent: "space-between",
    width: "30px",
    height: "21px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: 0,
    zIndex: 1001,
  },
  mobileMenuIcon: {
    width: "100%",
    height: "3px",
    background: "white",
    borderRadius: "10px",
    transition: "all 0.3s ease",
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
    padding: "1rem 1.5rem",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "1rem",
    width: "80%",
    maxWidth: "250px",
  },
  mobileCtaButton: {
    background: "linear-gradient(135deg, #f8c100, #ffd54f)",
    color: "#000",
    border: "none",
    padding: "1rem 1.5rem",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "1rem",
    width: "80%",
    maxWidth: "250px",
    boxShadow: "0 4px 15px rgba(248, 193, 0, 0.3)",
  },
  slide: {
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
  },
  heroContent: {
    display: "flex",
    flexDirection: "column",
  },
  heroTitle: {
    fontWeight: "800",
    marginBottom: "1.5rem",
    lineHeight: "1.1",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  },
  heroSubtitle: {
    marginBottom: "2.5rem",
    fontWeight: "400",
    opacity: 0.9,
    lineHeight: "1.6",
    maxWidth: "90%",
  },
  ctaButton: {
    background: "linear-gradient(135deg, #f8c100, #ffd54f)",
    color: "#000",
    border: "none",
    padding: "0.8rem 1.5rem",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "0.9rem",
    boxShadow: "0 4px 15px rgba(248, 193, 0, 0.3)",
    alignSelf: "flex-start",
  },
  pagination: {
    position: "absolute",
    bottom: "30px",
    display: "flex",
    gap: "12px",
    zIndex: 10,
  },
  scrollIndicator: {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    color: "white",
    fontSize: "2rem",
    zIndex: 10,
  },
  scrollArrow: {
    cursor: "pointer",
  }
};