// App.js
import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TechnologiesGrid from './components/TechnologiesGrid';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ThemeProvider from './components/ThemeContext';
import './App.css';

function App() {
  const aboutRef = useRef(null);
  const technologiesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <ThemeProvider>
      <Navbar refs={{ aboutRef, technologiesRef, contactRef }} />
      <HeroSection />
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      <div ref={technologiesRef}>
        <TechnologiesGrid />
      </div>
      <Testimonials />
      <div ref={contactRef}>
        <ContactSection />
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
