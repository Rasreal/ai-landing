// TechnologiesGrid.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './TechnologiesGrid.css';

import mlImage from '../assets/ml.png';
import nlpImage from '../assets/nlp.png';
import cvImage from '../assets/cv.png';

const technologies = [
  {
    title: 'Machine Learning',
    image: mlImage,
    description: 'Algorithms that improve automatically through experience.',
    details:
      'Machine Learning enables systems to learn and improve from data without being explicitly programmed.',
  },
  {
    title: 'Natural Language Processing',
    image: nlpImage,
    description: 'Interacting with computers using natural language.',
    details:
      'NLP focuses on the interaction between computers and humans through natural language.',
  },
  {
    title: 'Computer Vision',
    image: cvImage,
    description: 'Enabling computers to interpret and understand visual information.',
    details: 'Detailed information about Computer Vision.',
  },
  // Add more technologies as needed
];

function TechnologiesGrid() {
  const [selectedTech, setSelectedTech] = useState(null);

  return (
    <div className="grid-container" id="technologies">
      <h2>Our Technologies</h2>
      <div className="grid">
        {technologies.map((tech) => (
          <div
            key={tech.title}
            className="grid-item"
            onClick={() => setSelectedTech(tech)}
          >
            <img src={tech.image} alt={tech.title} />
            <h3>{tech.title}</h3>
            <p>{tech.description}</p>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedTech && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTech(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2>{selectedTech.title}</h2>
              <p>{selectedTech.details}</p>
              <button onClick={() => setSelectedTech(null)}>Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default TechnologiesGrid;
