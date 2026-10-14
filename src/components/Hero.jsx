import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt, FaChevronDown } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import SleepMoodBadge from './SleepMoodBadge'; 

export default function Hero({ onOpenResume }) {
  const { t } = useLanguage();

  return (
    <section className="hero-section">
      <div className="hero-status-pill">
        <span className="status-dot"></span>
        <span>{t.hero.status}</span>
      </div>

      <h1 className="hero-title">
        {t.hero.greeting} <span className="hero-name-gradient">{t.hero.name}</span>
      </h1>

      <h2 className="hero-tagline">{t.hero.tagline}</h2>

      <p className="hero-bio">{t.hero.bio}</p>

      <div className="hero-quick-stack">
        <span className="stack-label">{t.hero.coreFocus}</span>
        <div className="stack-pills">
          <span className="stack-pill">Java / Spring</span>
          <span className="stack-pill">Python</span>
          <span className="stack-pill">Node.js</span>
          <span className="stack-pill">SQL & Databases</span>
          <span className="stack-pill">Docker</span>
          <span className="stack-pill">Automated Testing</span>
        </div>
      </div>

      <div className="hero-mood-wrapper">
        <SleepMoodBadge />
      </div>

      <div className="hero-actions">
        <button 
          onClick={onOpenResume} 
          className="btn-primary"
          aria-label={t.hero.exploreCvBtn}
        >
          <FaFileAlt className="btn-icon" />
          <span>{t.hero.exploreCvBtn}</span>
        </button>

        <a href="#projects" className="btn-secondary">
          <span>{t.hero.viewProjectsBtn}</span>
        </a>

        <a href="#contact" className="btn-tertiary">
          <FaEnvelope className="btn-icon" />
          <span>{t.hero.contactMeBtn}</span>
        </a>
      </div>

      <div className="hero-socials">
        <a 
          href="https://github.com/RogerPerezB" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hero-social-link"
          aria-label="GitHub Profile"
          title="GitHub: RogerPerezB"
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.linkedin.com/in/r%C3%B3ger-p%C3%A9rez-becerra-93136114a/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hero-social-link"
          aria-label="LinkedIn Profile"
          title="LinkedIn: Roger Perez Becerra"
        >
          <FaLinkedin />
        </a>
        <a 
          href="mailto:rperezbecerra@yahoo.ca" 
          className="hero-social-link"
          aria-label="Send Email"
          title="rperezbecerra@yahoo.ca"
        >
          <FaEnvelope />
        </a>
      </div>

      <a href="#about" className="hero-scroll-indicator" aria-label="Scroll to About section">
        <FaChevronDown />
      </a>
    </section>
  );
}
