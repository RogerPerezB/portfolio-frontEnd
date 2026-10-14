import React from 'react';
import { FaGithub, FaCodeBranch, FaServer, FaAtom, FaLaptopCode, FaHardHat } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();

  const getProjectIcon = (id) => {
    switch (id) {
      case 'quantum-trajectory-dwave':
      case 'quantum-shor': return <FaAtom />;
      case 'portfolio-server': return <FaServer />;
      case 'portfolio-frontend': return <FaLaptopCode />;
      case 'project-in-progress': return <FaHardHat />;
      default: return <FaServer />;
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <span className="section-kicker">{t.projects.kicker}</span>
        <h2>{t.projects.title}</h2>
        <p className="section-intro">{t.projects.intro}</p>
      </div>

      <div className="projects-grid">
        {t.projects.items.map((proj, index) => {
          const isUnderConstruction = proj.id === 'project-in-progress';

          return (
            <div 
              key={proj.id} 
              className={`project-card ${index < 2 ? 'project-card-featured' : ''} ${isUnderConstruction ? 'project-card-construction' : ''}`}
            >
              <div className="project-card-top">
                <div className="project-icon-and-kicker">
                  <span className={`project-type-icon ${isUnderConstruction ? 'icon-construction' : ''}`}>
                    {getProjectIcon(proj.id)}
                  </span>
                  <span className={`project-kicker ${isUnderConstruction ? 'kicker-construction' : ''}`}>
                    {proj.kicker}
                  </span>
                </div>
                
                <div className="project-links">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                    title={isUnderConstruction ? "GitHub Profile & Upcoming Repositories" : "View Repository on GitHub"}
                    aria-label={`View ${proj.title} on GitHub`}
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>

              <h3 className="project-title">{proj.title}</h3>
              <p className="project-description">{proj.description}</p>

              <div className="project-highlights">
                <strong>{proj.achievementsHeader}</strong>
                <ul>
                  {proj.highlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="project-tags">
                {proj.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className={`project-tag ${isUnderConstruction ? 'tag-construction' : ''}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-card-footer">
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-repo-link"
                >
                  <span>{isUnderConstruction ? (t.nav.about === 'À propos' ? 'Suivre les mises à jour' : 'Track Updates on GitHub') : t.projects.inspectCode}</span>
                  <FaCodeBranch className="link-arrow" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
