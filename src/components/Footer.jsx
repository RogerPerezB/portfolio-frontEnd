import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function Footer({ onOpenResume }) {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">
              &lt;RPB /&gt;
            </span>
            <p className="footer-tagline">{t.footer.tagline}</p>
            <p className="footer-subtext">{t.footer.subtext}</p>
          </div>

          <div className="footer-links-group">
            <div className="footer-column">
              <h4>{t.footer.navCol}</h4>
              <ul>
                <li><a href="#about">{t.nav.about}</a></li>
                <li><a href="#experience">{t.nav.experience}</a></li>
                <li><a href="#skills">{t.nav.skills}</a></li>
                <li><a href="#projects">{t.nav.projects}</a></li>
                <li><a href="#contact">{t.nav.contact}</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>{t.footer.credCol}</h4>
              <ul>
                <li>
                  <button onClick={onOpenResume} className="footer-link-btn">
                    {t.footer.interactiveCv}
                  </button>
                </li>
                <li>
                  <a href="https://github.com/RogerPerezB" target="_blank" rel="noopener noreferrer">
                    {t.footer.github}
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/r%C3%B3ger-p%C3%A9rez-becerra-93136114a/" target="_blank" rel="noopener noreferrer">
                    {t.footer.linkedin}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Roger Perez Becerra. {t.footer.builtWith}</p>
          
          <div className="footer-meta">
            <span className="lang-indicator">{t.footer.trilingual}</span>
            <button 
              onClick={scrollToTop} 
              className="btn-back-to-top"
              aria-label="Back to top of page"
              title="Back to top"
            >
              <FaArrowUp /> {t.footer.topBtn}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
