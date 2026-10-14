import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaAward, FaCheckCircle } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function Experience({ onOpenResume }) {
  const { t } = useLanguage();

  return (
    <section id="experience" className="experience-section">
      <div className="section-header">
        <span className="section-kicker">{t.experience.kicker}</span>
        <h2>{t.experience.title}</h2>
        <p className="section-intro">{t.experience.intro}</p>
      </div>

      <div className="timeline-container">
        {t.experience.items.map((exp, index) => (
          <div key={index} className="timeline-card">
            <div className="timeline-badge-node">
              <FaBriefcase />
            </div>

            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <div className="role-and-award">
                    <h3 className="timeline-role">{exp.role}</h3>
                    {exp.award && (
                      <span className="timeline-award-pill">
                        <FaAward /> {exp.award}
                      </span>
                    )}
                  </div>
                  <div className="timeline-company-meta">
                    <span className="timeline-company">{exp.company}</span>
                    <span className="timeline-meta-dot">&bull;</span>
                    <span className="timeline-location"><FaMapMarkerAlt /> {exp.location}</span>
                  </div>
                </div>

                <div className="timeline-period-badge">
                  <FaCalendarAlt /> {exp.period}
                </div>
              </div>

              <p className="timeline-desc">{exp.description}</p>

              <ul className="timeline-bullets">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>
                    <FaCheckCircle className="bullet-check text-indigo" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="timeline-skills">
                {exp.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="timeline-skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="experience-cta-banner">
        <div>
          <h4>{t.experience.ctaTitle}</h4>
          <p>{t.experience.ctaSubtitle}</p>
        </div>
        <button onClick={onOpenResume} className="btn-secondary">
          {t.experience.ctaBtn}
        </button>
      </div>
    </section>
  );
}
