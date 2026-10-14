import React from 'react';
import { FaGraduationCap, FaAward, FaGlobe, FaCheckCircle } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <span className="section-kicker">{t.about.kicker}</span>
        <h2>{t.about.title}</h2>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <p className="about-lead">{t.about.lead}</p>
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>

          <div className="about-highlights-list">
            <div className="highlight-item">
              <FaCheckCircle className="highlight-icon text-indigo" />
              <div>
                <strong>{t.about.highlight1Title}</strong> {t.about.highlight1Text}
              </div>
            </div>
            <div className="highlight-item">
              <FaCheckCircle className="highlight-icon text-indigo" />
              <div>
                <strong>{t.about.highlight2Title}</strong> {t.about.highlight2Text}
              </div>
            </div>
            <div className="highlight-item">
              <FaCheckCircle className="highlight-icon text-indigo" />
              <div>
                <strong>{t.about.highlight3Title}</strong> {t.about.highlight3Text}
              </div>
            </div>
          </div>
        </div>

        <div className="about-cards">
          <div className="about-card">
            <div className="about-card-icon">
              <FaGraduationCap />
            </div>
            <h3>{t.about.eduTitle}</h3>
            <p className="card-title-strong">{t.about.eduSchool}</p>
            <p className="card-sub">{t.about.eduDegree}</p>
            <span className="card-pill">{t.about.eduGrad}</span>
          </div>

          <div className="about-card">
            <div className="about-card-icon">
              <FaAward />
            </div>
            <h3>{t.about.honorsTitle}</h3>
            <ul className="about-card-list">
              <li>{t.about.honor1}</li>
              <li>{t.about.honor2}</li>
              <li>{t.about.honor3}</li>
            </ul>
          </div>

          <div className="about-card">
            <div className="about-card-icon">
              <FaGlobe />
            </div>
            <h3>{t.about.langTitle}</h3>
            <div className="lang-chips">
              <span className="lang-chip">{t.about.langEn}</span>
              <span className="lang-chip">{t.about.langFr}</span>
              <span className="lang-chip">{t.about.langEs}</span>
              <span className="lang-chip">{t.about.langPt}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
