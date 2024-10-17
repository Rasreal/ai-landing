// Navbar.js
import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './Navbar.css';

function Navbar({ refs }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [navBackground, setNavBackground] = useState(false);
  const { aboutRef, technologiesRef, contactRef } = refs;

  useEffect(() => {
    const handleScroll = () => {
      setNavBackground(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${navBackground ? 'navbar--scrolled' : ''} ${theme}`}>
      <h1>AI Tech</h1>
      <ul>
        <li>
          <button onClick={() => scrollToSection(aboutRef)}>About</button>
        </li>
        <li>
          <button onClick={() => scrollToSection(technologiesRef)}>Technologies</button>
        </li>
        <li>
          <button onClick={() => scrollToSection(contactRef)}>Contact</button>
        </li>
        <li>
          <button onClick={toggleTheme}>Switch Theme</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
