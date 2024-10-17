// AboutSection.js
import React from 'react';
import { motion } from 'framer-motion';
import './AboutSection.css';

function AboutSection() {
  return (
    <div className="about-container" id="about">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About AI Tech
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        At AI Tech, we are committed to leveraging artificial intelligence to
        solve real-world problems. Our team of experts is dedicated to
        innovating and delivering cutting-edge AI solutions.
      </motion.p>
    </div>
  );
}

export default AboutSection;
