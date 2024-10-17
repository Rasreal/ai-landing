// HeroSection.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';
// import ImageCarousel from './ImageCarousel';

// Move headlines outside the component
const headlines = [
  'Innovating the Future with AI',
  'Empowering Businesses with AI Solutions',
  'Unlocking Potential with Artificial Intelligence',
];

function HeroSection() {
  const [currentHeadline, setCurrentHeadline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 3000); // Change headline every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Dependency array remains empty

  return (
    <div className="hero-container">
      <motion.h1
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        Welcome to AI Tech
      </motion.h1>
      <motion.p
        key={currentHeadline}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {headlines[currentHeadline]}
      </motion.p>
      <motion.button
        className="cta-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Get Started
      </motion.button>
      {/* <ImageCarousel /> */}
    </div>
  );
}

export default HeroSection;
