// Testimonials.js
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Testimonials.css";

import client2Image from '../assets/clients/client2.jpg';
import client1Image from '../assets/clients/client1.jpg';

const testimonials = [
  {
    quote:
      "AI Tech transformed our business processes with their innovative solutions.",
    author: "John Smith",
    company: "TechCorp",
    image: client1Image,
  },
  {
    quote: "Their expertise in AI is unparalleled. Highly recommended!",
    author: "Jane Doe",
    company: "Innovate Inc.",
    image: client2Image
  },
  // More testimonials...
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoScroll = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(autoScroll);
  }, [testimonials.length]);

  return (
    <div className="testimonials-container">
      <h2>What Our Clients Say</h2>
      <div className="carousel">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="testimonial-item"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={testimonials[currentIndex].image}
              alt={`${testimonials[currentIndex].author} from ${testimonials[currentIndex].company}`}
              className="testimonial-image"
            />
            <p>"{testimonials[currentIndex].quote}"</p>
            <h4>
              - {testimonials[currentIndex].author},{" "}
              {testimonials[currentIndex].company}
            </h4>
          </motion.div>
        </AnimatePresence>
        <div className="carousel-controls">
          <button
            onClick={() =>
              setCurrentIndex(
                (currentIndex - 1 + testimonials.length) % testimonials.length
              )
            }
          >
            &lt;
          </button>
          <button
            onClick={() =>
              setCurrentIndex((currentIndex + 1) % testimonials.length)
            }
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
