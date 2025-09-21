"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import Header from '@/components/header2';
import { FaBed, FaBath, FaRulerCombined, FaEye, FaMapMarkerAlt, FaFilter, FaPhone, FaWhatsapp } from 'react-icons/fa';
const safeDocument = typeof document !== 'undefined' ? document : null;

export default function Properties() {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedCity, setSelectedCity] = useState('Toutes');
  const [priceRange, setPriceRange] = useState([0, 500000]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  // Catégories et villes disponibles
  const categories = ['Tous', 'Bureau', 'Studio', 'Loft', 'Appartement', 'Maison', 'Villa'];
  const cities = ['Toutes', 'Brazzaville', 'Pointe-Noire'];

  // Chargement des propriétés (simulation)
  useEffect(() => {
    // En réalité, ces données viendraient d'une API
    const mockProperties = [
      {
        id: 1,
        title: "Appartement Moderne à Bacongo",
        description: "Magnifique appartement de 3 pièces avec vue sur la ville, proche de toutes commodités.",
        price: 250000,
        category: "Appartement",
        city: "Brazzaville",
        bedrooms: 3,
        bathrooms: 2,
        area: 120,
        views: 150,
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        featured: true
      },
      {
        id: 2,
        title: "Bureau Élégant au Centre-Ville",
        description: "Espace de bureau professionnel au cœur de Brazzaville, idéal pour les entreprises.",
        price: 180000,
        category: "Bureau",
        city: "Brazzaville",
        bedrooms: 2,
        bathrooms: 1,
        area: 80,
        views: 98,
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        featured: false
      },
      {
        id: 3,
        title: "Studio Meublé à Mpila",
        description: "Studio entièrement meublé et équipé, proche de l'Université Marien Ngouabi.",
        price: 120000,
        category: "Studio",
        city: "Brazzaville",
        bedrooms: 1,
        bathrooms: 1,
        area: 45,
        views: 120,
        image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        featured: true
      },
      {
        id: 4,
        title: "Loft Industriel à Pointe-Noire",
        description: "Loft spacieux avec style industriel, proche de la plage et des zones commerciales.",
        price: 320000,
        category: "Loft",
        city: "Pointe-Noire",
        bedrooms: 2,
        bathrooms: 2,
        area: 150,
        views: 85,
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        featured: false
      },
      {
        id: 5,
        title: "Villa de Luxe à Gombe",
        description: "Superbe villa avec piscine et jardin, dans le quartier huppé de Gombe.",
        price: 750000,
        category: "Villa",
        city: "Brazzaville",
        bedrooms: 5,
        bathrooms: 4,
        area: 350,
        views: 210,
        image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        featured: true
      },
      {
        id: 6,
        title: "Maison Familiale à Tié-Tié",
        description: "Parfaite pour une famille, cette maison dispose d'un grand salon et d'un jardin.",
        price: 380000,
        category: "Maison",
        city: "Pointe-Noire",
        bedrooms: 4,
        bathrooms: 3,
        area: 200,
        views: 135,
        image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        featured: false
      }
    ];
    
    setProperties(mockProperties);
    setFilteredProperties(mockProperties);
  }, []);

  // Filtrer les propriétés
  useEffect(() => {
    let result = properties;
    
    if (selectedCategory !== 'Tous') {
      result = result.filter(property => property.category === selectedCategory);
    }
    
    if (selectedCity !== 'Toutes') {
      result = result.filter(property => property.city === selectedCity);
    }
    
    result = result.filter(property => 
      property.price >= priceRange[0] && property.price <= priceRange[1]
    );
    
    setFilteredProperties(result);
  }, [selectedCategory, selectedCity, priceRange, properties]);

  // Animation des cartes de propriétés
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
    <Header/>
    <div style={styles.container}>
      {/* En-tête */}
      <motion.div 
        style={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 style={styles.title}>Nos Propriétés</h1>
        <p style={styles.subtitle}>Découvrez notre sélection de biens immobiliers exceptionnels</p>
      </motion.div>

      {/* Filtres */}
     <motion.div style={styles.filters} initial={{ height: 'auto', opacity: 1 }} animate={{ height: 'auto', opacity: 1 }}>
  <div style={styles.filterGroup}>
    <label style={styles.filterLabel}>Catégorie</label>
    <div style={styles.categoryButtons}>
      {categories.map(category => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          style={{
            ...styles.categoryBtn,
            ...(selectedCategory === category ? styles.activeCategoryBtn : {})
          }}
        >
          {category}
        </button>
      ))}
    </div>
  </div>

  <div style={styles.filterGroup}>
    <label style={styles.filterLabel}>Ville</label>
    <div style={styles.cityButtons}>
      {cities.map(city => (
        <button
          key={city}
          onClick={() => setSelectedCity(city)}
          style={{
            ...styles.cityBtn,
            ...(selectedCity === city ? styles.activeCityBtn : {})
          }}
        >
          {city}
        </button>
      ))}
    </div>
  </div>

  <div style={styles.filterGroup}>
    <label style={styles.filterLabel}>
      Prix: {priceRange[0].toLocaleString()} FCFA - {priceRange[1].toLocaleString()} FCFA
    </label>
    <div style={styles.sliderContainer}>
      <input
        type="range"
        min="0"
        max="1000000"
        step="50000"
        value={priceRange[0]}
        onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
        style={styles.slider}
      />
      <input
        type="range"
        min="0"
        max="1000000"
        step="50000"
        value={priceRange[1]}
        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
        style={styles.slider}
      />
    </div>
  </div>
</motion.div>


      {/* Résultats */}
      <div style={styles.resultsSection}>
        <motion.p 
          style={styles.resultsCount}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {filteredProperties.length} propriété(s) trouvée(s)
        </motion.p>

        {filteredProperties.length === 0 ? (
          <motion.div 
            style={styles.noResults}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Aucune propriété ne correspond à vos critères</h3>
            <p>Essayez de modifier vos filtres pour voir plus de résultats</p>
          </motion.div>
        ) : (
          <div style={styles.propertiesGrid}>
            <AnimatePresence>
              {filteredProperties.map((property, index) => (
                <motion.div
                  key={property.id}
                  style={styles.propertyCard}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                >
                  {property.featured && (
                    <div style={styles.featuredBadge}>Featured</div>
                  )}
                  <div 
                    style={{...styles.propertyImage, backgroundImage: `url(${property.image})`}}
                  >
                    <div style={styles.propertyOverlay}>
                      <span style={styles.propertyPrice}>
                        {property.price.toLocaleString()} FCFA
                      </span>
                    </div>
                  </div>
                  
                  <div style={styles.propertyContent}>
                    <h3 style={styles.propertyTitle}>{property.title}</h3>
                    <p style={styles.propertyLocation}>
                      <FaMapMarkerAlt style={{ marginRight: '5px' }} />
                      {property.city}
                    </p>
                    <p style={styles.propertyDescription}>{property.description}</p>
                    
                    <div style={styles.propertyFeatures}>
                      <div style={styles.feature}>
                        <FaBed style={styles.featureIcon} />
                        <span>{property.bedrooms} chambres</span>
                      </div>
                      <div style={styles.feature}>
                        <FaBath style={styles.featureIcon} />
                        <span>{property.bathrooms} sdb</span>
                      </div>
                      <div style={styles.feature}>
                        <FaRulerCombined style={styles.featureIcon} />
                        <span>{property.area}m²</span>
                      </div>
                      <div style={styles.feature}>
                        <FaEye style={styles.featureIcon} />
                        <span>{property.views} vues</span>
                      </div>
                    </div>
                    
                    <motion.button 
                      style={styles.consultationBtn}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedProperty(property)}
                    >
                      Demander une consultation
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Modal de consultation */}
      <AnimatePresence>
        {selectedProperty && (
          <motion.div 
            style={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProperty(null)}
          >
            <motion.div 
              style={styles.modal}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 style={styles.modalTitle}>Demande de consultation</h2>
              <p style={styles.modalProperty}>Pour: {selectedProperty.title}</p>
              
              <form style={styles.consultationForm}>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Nom complet</label>
                  <input type="text" style={styles.formInput} required />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Email</label>
                  <input type="email" style={styles.formInput} required />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Téléphone</label>
                  <input type="tel" style={styles.formInput} required />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Message (optionnel)</label>
                  <textarea style={styles.formTextarea} rows="4"></textarea>
                </div>
                
                <div style={styles.modalActions}>
                  <button 
                    type="button" 
                    style={styles.cancelBtn}
                    onClick={() => setSelectedProperty(null)}
                  >
                    Annuler
                  </button>
                  <button type="submit" style={styles.submitBtn}>
                    Envoyer la demande
                  </button>
                </div>
              </form>
              
              <div style={styles.contactMethods}>
                <p style={styles.contactTitle}>Ou contactez-nous directement:</p>
                <div style={styles.contactButtons}>
                  <a href="tel:+242012345678" style={styles.phoneLink}>
                    <FaPhone /> Appeler
                  </a>
                  <a 
                    href={`https://wa.me/242012345678?text=Je suis intéressé par: ${selectedProperty.title}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={styles.whatsappLink}
                  >
                    <FaWhatsapp /> WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    
</>
  );
}
const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    marginTop: '150px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: '#1a1a1a',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#666',
  },
  filterSection: {
    backgroundColor: '#f8f9fa',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '30px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  },
  filterHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px',
  },
  filterTitle: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#1a1a1a',
    margin: 0,
  },
  toggleFilterBtn: {
    background: 'none',
    border: '1px solid #ddd',
    padding: '8px 15px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'all 0.3s ease',
  },
  filters: {
    overflow: 'hidden',
  },
  filterGroup: {
    marginBottom: '20px',
  },
  filterLabel: {
    display: 'block',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#333',
  },
  categoryButtons: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  categoryBtn: {
    padding: '8px 16px',
    borderRadius: '20px',
    border: '1px solid #ddd',
    background: 'white',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontWeight: '500',
  },
  activeCategoryBtn: {
    backgroundColor: '#f8c100',
    borderColor: '#f8c100',
    color: '#000',
  },
  cityButtons: {
    display: 'flex',
    gap: '10px',
  },
  cityBtn: {
    padding: '8px 16px',
    borderRadius: '6px',
    border: '1px solid #ddd',
    background: 'white',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontWeight: '500',
  },
  activeCityBtn: {
    backgroundColor: '#1a1a1a',
    borderColor: '#1a1a1a',
    color: 'white',
  },
  sliderContainer: {
    position: 'relative',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
  },
  slider: {
    position: 'absolute',
    width: '100%',
    height: '5px',
    borderRadius: '5px',
    background: '#ddd',
    outline: 'none',
    WebkitAppearance: 'none',
  },
  resultsSection: {
    marginBottom: '40px',
  },
  resultsCount: {
    fontSize: '1.1rem',
    fontWeight: '500',
    marginBottom: '20px',
  },
  noResults: {
    textAlign: 'center',
    padding: '40px',
    backgroundColor: '#f8f9fa',
    borderRadius: '12px',
  },
  propertiesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '30px',
  },
  propertyCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
    transition: 'all 0.3s ease',
    position: 'relative',
  },
  featuredBadge: {
    position: 'absolute',
    top: '15px',
    left: '15px',
    backgroundColor: '#f8c100',
    color: '#000',
    padding: '5px 10px',
    borderRadius: '4px',
    fontWeight: '600',
    fontSize: '0.8rem',
    zIndex: 10,
  },
  propertyImage: {
    height: '250px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  },
  propertyOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
    padding: '20px',
    color: 'white',
  },
  propertyPrice: {
    fontSize: '1.5rem',
    fontWeight: '700',
  },
  propertyContent: {
    padding: '20px',
  },
  propertyTitle: {
    fontSize: '1.3rem',
    fontWeight: '700',
    margin: '0 0 10px 0',
    color: '#1a1a1a',
  },
  propertyLocation: {
    display: 'flex',
    alignItems: 'center',
    color: '#666',
    margin: '0 0 15px 0',
    fontSize: '0.9rem',
  },
  propertyDescription: {
    color: '#555',
    lineHeight: '1.5',
    marginBottom: '20px',
  },
  propertyFeatures: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '15px',
    marginBottom: '25px',
  },
  feature: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.9rem',
  },
  featureIcon: {
    color: '#f8c100',
  },
  consultationBtn: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#1a1a1a',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    padding: '20px',
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '30px',
    maxWidth: '500px',
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto',
  },
  modalTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    marginBottom: '10px',
  },
  modalProperty: {
    color: '#666',
    marginBottom: '20px',
  },
  consultationForm: {
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  formLabel: {
    display: 'block',
    fontWeight: '600',
    marginBottom: '5px',
  },
  formInput: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '6px',
    fontSize: '1rem',
  },
  formTextarea: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '6px',
    fontSize: '1rem',
    resize: 'vertical',
  },
  modalActions: {
    display: 'flex',
    gap: '10px',
    marginTop: '20px',
  },
  cancelBtn: {
    padding: '10px 20px',
    border: '1px solid #ddd',
    backgroundColor: 'transparent',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '500',
    flex: 1,
  },
  submitBtn: {
    padding: '10px 20px',
    border: 'none',
    backgroundColor: '#1a1a1a',
    color: 'white',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '500',
    flex: 1,
  },
  contactMethods: {
    borderTop: '1px solid #eee',
    paddingTop: '20px',
  },
  contactTitle: {
    fontWeight: '600',
    marginBottom: '10px',
  },
  contactButtons: {
    display: 'flex',
    gap: '10px',
  },
  phoneLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    padding: '10px 15px',
    backgroundColor: '#1a1a1a',
    color: 'white',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: '500',
  },
  whatsappLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    padding: '10px 15px',
    backgroundColor: '#25D366',
    color: 'white',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: '500',
  },
};

// Styles supplémentaires pour les inputs range
const sliderStyles = `
  input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    height: 5px;
    border-radius: 5px;
    background: #ddd;
    outline: none;
  }
  
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #f8c100;
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  }
  
  input[type="range"]::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #f8c100;
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  }
  
  .category-btn:hover, .city-btn:hover {
    background-color: #f0f0f0;
  }
  
  .consultation-btn:hover {
    background-color: #000;
  }
`;

