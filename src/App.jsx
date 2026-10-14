import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import LeetCodeBadge from './components/LeetCodeBadge';
import SleepMoodBadge from './components/SleepMoodBadge';
import './App.css';

function PortfolioMain() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('rpb_theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('rpb_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
  };

  return (
    <div className="portfolio-app">
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onOpenResume={handleOpenResume} 
      />

      <main className="portfolio-content">
        <Hero onOpenResume={handleOpenResume} />
        <LeetCodeBadge />
        <About />
        <Experience onOpenResume={handleOpenResume} />
        <Skills />
        <Projects />
        <Contact onOpenResume={handleOpenResume} />
      </main>

      <Footer onOpenResume={handleOpenResume} />

      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={handleCloseResume} 
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioMain />
    </LanguageProvider>
  );
}
