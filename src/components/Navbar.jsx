import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaFileAlt, FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ theme, toggleTheme, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="nav-logo" aria-label="Roger Perez Becerra Home">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">RPB</span>
          <span className="logo-slash">/</span>
          <span className="logo-bracket">&gt;</span>
        </a>

        {/* Desktop Nav */}
        <div className="nav-desktop">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            {/* Interactive Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="lang-toggle-btn"
              aria-label={`Switch language to ${language === 'en' ? 'French' : 'English'}`}
              title={`Switch language to ${language === 'en' ? 'Français' : 'English'}`}
            >
              <FaGlobe className="lang-icon" />
              <span className={`lang-choice ${language === 'en' ? 'active' : ''}`}>EN</span>
              <span className="lang-separator">/</span>
              <span className={`lang-choice ${language === 'fr' ? 'active' : ''}`}>FR</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <FaSun className="theme-icon sun" /> : <FaMoon className="theme-icon moon" />}
            </button>

            {/* Interactive CV Trigger */}
            <button
              onClick={onOpenResume}
              className="btn-resume-nav"
              aria-label={t.nav.exploreCv}
            >
              <FaFileAlt className="btn-icon" />
              <span>{t.nav.interactiveCv}</span>
            </button>
          </div>
        </div>

        {/* Mobile Header Buttons */}
        <div className="nav-mobile-toggle">
          <button
            onClick={toggleLanguage}
            className="lang-toggle-btn mobile-lang"
            aria-label="Toggle language"
          >
            <span className={language === 'en' ? 'active' : ''}>EN</span>/
            <span className={language === 'fr' ? 'active' : ''}>FR</span>
          </button>
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FaSun className="theme-icon sun" /> : <FaMoon className="theme-icon moon" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-hamburger"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="nav-mobile-menu">
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={handleLinkClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-nav-actions">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="btn-resume-nav w-full"
            >
              <FaFileAlt className="btn-icon" />
              <span>{t.nav.exploreCv}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
