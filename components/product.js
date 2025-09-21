"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Product() {
  const properties = [
    { id: 1, title: "Appartement Lumineux", location: "Paris 16ème", city: "Paris", price: "750 000 €", image: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Magnifique appartement de 85m² avec terrasse et vue sur la tour Eiffel.", type: "Appartement" },
    { id: 2, title: "Maison de Ville", location: "Lyon, Croix-Rousse", city: "Lyon", price: "520 000 €", image: "https://images.unsplash.com/photo-1721523237192-c1b2dc5dbdbb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Authentique maison rénovée avec cour intérieure et garage.", type: "Maison" },
    { id: 3, title: "Villa Contemporaine", location: "Bordeaux", city: "Bordeaux", price: "1 250 000 €", image: "https://images.unsplash.com/photo-1721522288229-1c09300d84da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Villa moderne avec piscine et vue sur les vignobles.", type: "Villa" },
  ];

  return (
    <section style={styles.properties}>
      <h2 style={styles.sectionTitle}>Nos biens en vedette</h2>
      <div style={styles.grid}>
        {properties.map((property, i) => (
          <motion.div 
            key={property.id} 
            style={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <div style={{...styles.image, backgroundImage: `url(${property.image})`}}>
              <motion.span 
                style={styles.badge}
                whileHover={{ scale: 1.1 }}
              >
                {property.price}
              </motion.span>
            </div>
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>{property.title}</h3>
              <p style={styles.cardLocation}>{property.location}</p>
              <p style={styles.cardDesc}>{property.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ✅ Bouton global en bas avec redirection */}
      <motion.div 
        style={styles.buttonWrapper}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Link href="/terrain" passHref>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor:"#f8c100", color:"#fff" }} 
            style={styles.allOffersBtn}
          >
            Voir toutes les offres disponibles
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}

/* Styles spécifiques au composant Product */
const styles = {
  properties:{ padding:"4rem 5%", background:"#f8f9fa" },
  sectionTitle:{ textAlign:"center", fontSize:"2rem", marginBottom:"2rem", color:"#222" },
  grid:{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"2rem" },
  card:{ background:"#fff", borderRadius:"12px", overflow:"hidden", boxShadow:"0 5px 15px rgba(0,0,0,0.1)", transition:"transform 0.3s" },
  image:{ height:"220px", backgroundSize:"cover", backgroundPosition:"center", position:"relative" },
  badge:{ position:"absolute", top:"1rem", right:"1rem", background:"#f8c100", padding:"0.4rem 0.8rem", borderRadius:"20px", fontWeight:"700", color:"#222" },
  cardContent:{ padding:"1.5rem" },
  cardTitle:{ fontSize:"1.4rem", fontWeight:"600", marginBottom:"0.5rem", color:"#222" },
  cardLocation:{ fontWeight:"500", color:"#f8c100", marginBottom:"1rem" },
  cardDesc:{ color:"#555", marginBottom:"1.2rem" },

  // ✅ Styles pour le bouton global
  buttonWrapper:{ textAlign:"center", marginTop:"3rem" },
  allOffersBtn:{ border:"2px solid #f8c100", background:"transparent", color:"#f8c100", padding:"0.8rem 2rem", borderRadius:"30px", fontWeight:"600", cursor:"pointer", fontSize:"1rem" },
};
