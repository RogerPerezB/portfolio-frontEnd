import React, { useState, useEffect } from 'react';
import { 
  FaTimes, 
  FaCopy, 
  FaCheck, 
  FaDownload, 
  FaBriefcase, 
  FaGraduationCap, 
  FaAward, 
  FaCode, 
  FaGlobe, 
  FaSearch, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt
} from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function ResumeModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const [downloadNotice, setDownloadNotice] = useState(false);
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copyContact = () => {
    navigator.clipboard.writeText('Roger Perez Becerra | rperezbecerra@yahoo.ca | 819-271-7461 | Gatineau QC');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadClick = () => {
    setDownloadNotice(true);
    setTimeout(() => setDownloadNotice(false), 4500);
  };

  const experiences = language === 'fr' ? [
    {
      role: 'Développeur logiciel Full Stack',
      company: 'Limitless Digital Agency',
      period: '05/2023 – 08/2023',
      location: 'À distance',
      highlights: [
        'Intervention à titre de développeur full-stack couvrant le cycle de développement complet.',
        'Conception et livraison de fonctionnalités clés sur la plateforme HighLevel dans le respect strict des spécifications.',
        'Intégration d’API et de services pour garantir des interfaces réactives et une performance d’exécution optimale.',
        'Gestion et optimisation de bases de données relationnelles et requêtes SQL pour des traitements à haut volume.'
      ],
      skills: ['Cycle complet', 'SQL & SGBD', 'Intégration d’API', 'Optimisation de données', 'HighLevel']
    },
    {
      role: 'Développeur logiciel junior',
      company: 'Inteloom Inc',
      period: '05/2022 – 12/2022',
      location: 'Gatineau, QC',
      award: 'Employé recrue de l’année',
      highlights: [
        'Contribution déterminante à la fiabilité logicielle en diagnostiquant et résolvant des anomalies d’interface et de backend.',
        'Développement de nouvelles fonctionnalités selon des spécifications d’architecture rigoureuses.',
        'Rédaction de suites exhaustives de tests unitaires pour assurer une couverture et une qualité constantes du code.',
        'Exploitation de Java, Node.js et de protocoles d’API REST normalisés pour une communication interservices robuste.'
      ],
      skills: ['Java', 'Node.js', 'API REST', 'Tests unitaires', 'Dépannage backend', 'Agile']
    },
    {
      role: 'Développeur en automatisation des tests',
      company: 'Inteloom Inc',
      period: '05/2021 – 08/2021',
      location: 'Gatineau, QC',
      highlights: [
        'Création de scripts de tests automatisés modulaires et évolutifs garantissant la haute disponibilité en production.',
        'Développement de suites de tests de bout en bout et de non-régression avec JavaScript, Jasmine et Selenium.',
        'Optimisation des pipelines d’assurance qualité, réduisant considérablement la vérification manuelle.'
      ],
      skills: ['JavaScript', 'Selenium', 'Jasmine', 'Automatisation des tests', 'Tests de non-régression']
    }
  ] : [
    {
      role: 'Full Stack Software Developer',
      company: 'Limitless Digital Agency',
      period: '05/2023 – 08/2023',
      location: 'Remote',
      highlights: [
        'Operated as full-stack developer overseeing end-to-end development workflows.',
        'Created and implemented high-demand features on the HighLevel platform adhering strictly to project specifications.',
        'Ensured seamless API integrations, responsive interfaces, and optimal runtime performance.',
        'Managed and optimized relational database schemas and SQL operations for high-throughput data processing.'
      ],
      skills: ['Full-Cycle Development', 'SQL', 'Databases', 'HighLevel Platform', 'API Integration']
    },
    {
      role: 'Junior Software Developer',
      company: 'Inteloom Inc',
      period: '05/2022 – 12/2022',
      location: 'Gatineau, QC',
      award: 'Rookie of the Year Award',
      highlights: [
        'Played a key role in enhancing enterprise application reliability by identifying and resolving critical UI and backend bottlenecks.',
        'Engineered new features following rigorous architectural specifications.',
        'Authored comprehensive unit test suites ensuring continuous code quality and high test coverage.',
        'Leveraged Java, Node.js, and standardized REST API protocols for robust service communication.'
      ],
      skills: ['Java', 'Node.js', 'REST APIs', 'Unit Testing', 'Backend Troubleshooting']
    },
    {
      role: 'Test Automation Developer',
      company: 'Inteloom Inc',
      period: '05/2021 – 08/2021',
      location: 'Gatineau, QC',
      highlights: [
        'Engineered extensive, scalable automated testing scripts to ensure optimal performance across web application modules.',
        'Developed high-quality, modular, and maintainable test suites utilizing JavaScript, Jasmine, and Selenium.',
        'Streamlined regression testing pipelines, significantly boosting application robustness and deployment confidence.'
      ],
      skills: ['JavaScript', 'Selenium', 'Jasmine', 'Test Automation', 'Regression Testing']
    }
  ];

  const education = language === 'fr' ? [
    {
      degree: 'Baccalauréat spécialisé en informatique (Honours)',
      institution: 'Université Carleton',
      location: 'Ottawa, ON',
      period: 'Obtenu en 02/2026',
      details: 'Spécialisation en informatique avec mineure en biologie. Accent sur la conception algorithmique, les systèmes distribués et la modélisation informatique.',
      honor: 'Bourse d’excellence académique'
    },
    {
      degree: 'DEC en sciences de la nature',
      institution: 'Collège Heritage',
      location: 'Gatineau, QC',
      period: '06/2020',
      details: 'Programme scientifique préuniversitaire axé sur les mathématiques avancées, l’informatique et les sciences physiques.',
      honor: "Liste d’honneur du doyen"
    }
  ] : [
    {
      degree: 'Bachelor of Computer Science Honours',
      institution: 'Carleton University',
      location: 'Ottawa, ON',
      period: 'Completed 02/2026',
      details: 'Computer Science Honours with a Minor in Biology. Focused on algorithm design, distributed computing, and computational modeling.',
      honor: 'Academic Excellence Award'
    },
    {
      degree: 'Science DEC (Diplôme d’études collégiales)',
      institution: 'Heritage College',
      location: 'Gatineau, QC',
      period: '06/2020',
      details: 'Pre-university science program with intensive focus on mathematics, computing, and laboratory sciences.',
      honor: "Dean's List"
    }
  ];

  const accomplishments = language === 'fr' ? [
    {
      title: 'Employé recrue de l’année',
      organization: 'Inteloom Inc',
      description: 'Reconnu au sein de l’équipe d’ingénierie pour son apprentissage rapide, sa curiosité technique et son écoute attentive.'
    },
    {
      title: 'Bourse d’excellence académique',
      organization: 'Université Carleton',
      description: 'Attribuée pour l’excellence du dossier académique tout au long du baccalauréat spécialisé en informatique.'
    },
    {
      title: "Liste d’honneur du doyen",
      organization: 'Collège Heritage',
      description: 'Mention d’excellence continue pour le rendement scolaire remarquable lors des études collégiales en sciences.'
    }
  ] : [
    {
      title: 'Rookie of the Year',
      organization: 'Inteloom Inc',
      description: 'Recognized across the engineering team for rapid learning, technical curiosity, and exceptional listening and execution skills.'
    },
    {
      title: 'Academic Excellence Award',
      organization: 'Carleton University',
      description: 'Honored for outstanding academic performance throughout the Computer Science Honours program.'
    },
    {
      title: "Dean's List",
      organization: 'Heritage College',
      description: 'Recognized for consistently outstanding academic standing throughout collegiate science studies.'
    }
  ];

  const skillsCategories = language === 'fr' ? [
    {
      name: 'Langages de programmation',
      items: ['Java', 'Python', 'C++', 'C#', 'C', 'JavaScript', 'PL/SQL', 'SQL']
    },
    {
      name: 'Frameworks & Bibliothèques',
      items: ['Spring Boot', 'Node.js', 'Express', 'React', 'Qt', 'Jasmine', 'Selenium', 'Qiskit']
    },
    {
      name: 'Bases de données & Infonuagique',
      items: ['Bases relationnelles', 'Optimisation SQL', 'Oracle DB', 'PostgreSQL', 'Docker', 'AWS', 'OpenStack', 'Git']
    },
    {
      name: 'Pratiques d’ingénierie logicielle',
      items: ['Agile / Scrum', 'DevSecOps', 'Pipelines CI/CD', 'Architecture REST', 'Tests unitaires & intégration', 'Débogage & profilage']
    }
  ] : [
    {
      name: 'Programming Languages',
      items: ['Java', 'Python', 'C++', 'C#', 'C', 'JavaScript', 'PL/SQL', 'SQL']
    },
    {
      name: 'Frameworks & Libraries',
      items: ['Spring Boot', 'Node.js', 'Express', 'React', 'Qt', 'Jasmine', 'Selenium', 'Qiskit']
    },
    {
      name: 'Databases & Cloud',
      items: ['Relational Databases', 'SQL Optimization', 'Oracle DB', 'PostgreSQL', 'Docker', 'AWS', 'OpenStack', 'Git']
    },
    {
      name: 'Engineering Practices',
      items: ['Agile / Scrum', 'DevSecOps', 'CI/CD Pipelines', 'RESTful API Design', 'Unit & Integration Testing', 'Debugging & Profiling']
    }
  ];

  const languages = language === 'fr' ? [
    { lang: 'Français', level: 'Langue maternelle / Bilingue', fluency: 100 },
    { lang: 'Anglais', level: 'Langue maternelle / Bilingue', fluency: 100 },
    { lang: 'Espagnol', level: 'Langue maternelle / Bilingue', fluency: 100 },
    { lang: 'Portugais', level: 'Notions professionnelles', fluency: 40 }
  ] : [
    { lang: 'English', level: 'Native / Bilingual', fluency: 100 },
    { lang: 'French', level: 'Native / Bilingual', fluency: 100 },
    { lang: 'Spanish', level: 'Native / Bilingual', fluency: 100 },
    { lang: 'Portuguese', level: 'Limited Working Proficiency', fluency: 40 }
  ];

  // Filtering based on search query
  const query = searchQuery.toLowerCase().trim();
  const matchesSearch = (text) => !query || text.toLowerCase().includes(query);

  const filteredExperiences = experiences.filter(exp => 
    matchesSearch(exp.role) || 
    matchesSearch(exp.company) || 
    matchesSearch(exp.location) ||
    exp.highlights.some(h => matchesSearch(h)) ||
    exp.skills.some(s => matchesSearch(s))
  );

  const filteredEducation = education.filter(edu =>
    matchesSearch(edu.degree) ||
    matchesSearch(edu.institution) ||
    matchesSearch(edu.details) ||
    (edu.honor && matchesSearch(edu.honor))
  );

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-badge">{t.cvModal.badge}</div>
            <h2>Roger Perez Becerra</h2>
            <p className="modal-subtitle">{t.cvModal.subtitle}</p>
            <div className="modal-contact-row">
              <span className="contact-item"><FaEnvelope /> rperezbecerra@yahoo.ca</span>
              <span className="contact-item"><FaPhone /> 819-271-7461</span>
              <span className="contact-item"><FaMapMarkerAlt /> Gatineau, QC</span>
            </div>
          </div>

          <div className="modal-header-actions">
            <button 
              onClick={copyContact} 
              className="btn-modal-action"
              title={t.cvModal.copyInfo}
            >
              {copied ? <><FaCheck className="text-emerald" /> {t.cvModal.copied}</> : <><FaCopy /> {t.cvModal.copyInfo}</>}
            </button>
            <button 
              onClick={handleDownloadClick} 
              className="btn-modal-action btn-download-interactive"
              title={t.cvModal.downloadPdf}
            >
              <FaDownload /> {t.cvModal.downloadPdf}
            </button>
            <button 
              onClick={onClose} 
              className="btn-modal-close"
              aria-label="Close modal"
            >
              <FaTimes />
            </button>
          </div>
        </div>

        {/* Notice for Download */}
        {downloadNotice && (
          <div className="modal-notice">
            <div className="notice-icon"><FaAward /></div>
            <div>
              <strong>{t.cvModal.noticeTitle}</strong>
              <p>{t.cvModal.noticeText}</p>
            </div>
          </div>
        )}

        {/* Interactive Controls Bar */}
        <div className="modal-controls">
          <div className="modal-tabs">
            <button 
              className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              {t.cvModal.tabs.all}
            </button>
            <button 
              className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              <FaBriefcase className="tab-icon" /> {t.cvModal.tabs.experience}
            </button>
            <button 
              className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              <FaGraduationCap className="tab-icon" /> {t.cvModal.tabs.education}
            </button>
            <button 
              className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
              onClick={() => setActiveTab('skills')}
            >
              <FaCode className="tab-icon" /> {t.cvModal.tabs.skills}
            </button>
            <button 
              className={`tab-btn ${activeTab === 'accomplishments' ? 'active' : ''}`}
              onClick={() => setActiveTab('accomplishments')}
            >
              <FaAward className="tab-icon" /> {t.cvModal.tabs.honors}
            </button>
            <button 
              className={`tab-btn ${activeTab === 'languages' ? 'active' : ''}`}
              onClick={() => setActiveTab('languages')}
            >
              <FaGlobe className="tab-icon" /> {t.cvModal.tabs.languages}
            </button>
          </div>

          <div className="modal-search">
            <FaSearch className="search-icon" />
            <input 
              type="text" 
              placeholder={t.cvModal.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search CV content"
            />
            {searchQuery && (
              <button className="search-clear" onClick={() => setSearchQuery('')}>×</button>
            )}
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="modal-body">
          {/* Executive Summary */}
          {(activeTab === 'all') && !searchQuery && (
            <div className="cv-section">
              <h3 className="section-title">
                <FaCode className="title-icon" /> {t.cvModal.summaryTitle}
              </h3>
              <p className="summary-text">
                {t.cvModal.summaryText}
              </p>
            </div>
          )}

          {/* Work Experience */}
          {(activeTab === 'all' || activeTab === 'experience') && (
            <div className="cv-section">
              <h3 className="section-title">
                <FaBriefcase className="title-icon" /> {t.cvModal.experienceTitle}
              </h3>
              <div className="experience-list">
                {filteredExperiences.map((exp, idx) => (
                  <div key={idx} className="cv-item">
                    <div className="cv-item-header">
                      <div>
                        <h4 className="cv-role">{exp.role}</h4>
                        <div className="cv-company">
                          <strong>{exp.company}</strong> • <span>{exp.location}</span>
                          {exp.award && <span className="award-pill"><FaAward /> {exp.award}</span>}
                        </div>
                      </div>
                      <span className="cv-period">{exp.period}</span>
                    </div>

                    <ul className="cv-bullets">
                      {exp.highlights.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>

                    <div className="cv-tags">
                      {exp.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="cv-skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
                {filteredExperiences.length === 0 && (
                  <p className="no-results">{t.cvModal.noResults} &ldquo;{searchQuery}&rdquo;</p>
                )}
              </div>
            </div>
          )}

          {/* Education */}
          {(activeTab === 'all' || activeTab === 'education') && (
            <div className="cv-section">
              <h3 className="section-title">
                <FaGraduationCap className="title-icon" /> {t.cvModal.educationTitle}
              </h3>
              <div className="education-list">
                {filteredEducation.map((edu, idx) => (
                  <div key={idx} className="cv-item">
                    <div className="cv-item-header">
                      <div>
                        <h4 className="cv-role">{edu.degree}</h4>
                        <div className="cv-company">
                          <strong>{edu.institution}</strong> • <span>{edu.location}</span>
                          {edu.honor && <span className="award-pill"><FaAward /> {edu.honor}</span>}
                        </div>
                      </div>
                      <span className="cv-period">{edu.period}</span>
                    </div>
                    <p className="edu-details">{edu.details}</p>
                  </div>
                ))}
                {filteredEducation.length === 0 && (
                  <p className="no-results">{t.cvModal.noResults} &ldquo;{searchQuery}&rdquo;</p>
                )}
              </div>
            </div>
          )}

          {/* Skills */}
          {(activeTab === 'all' || activeTab === 'skills') && (
            <div className="cv-section">
              <h3 className="section-title">
                <FaCode className="title-icon" /> {t.cvModal.skillsTitle}
              </h3>
              <div className="skills-matrix">
                {skillsCategories.map((cat, idx) => {
                  const filteredItems = cat.items.filter(item => matchesSearch(item));
                  if (filteredItems.length === 0 && searchQuery) return null;
                  return (
                    <div key={idx} className="skills-matrix-cat">
                      <h5>{cat.name}</h5>
                      <div className="matrix-tags">
                        {filteredItems.map((item, iIdx) => (
                          <span key={iIdx} className="matrix-tag">{item}</span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Honors & Accomplishments */}
          {(activeTab === 'all' || activeTab === 'accomplishments') && (
            <div className="cv-section">
              <h3 className="section-title">
                <FaAward className="title-icon" /> {t.cvModal.honorsTitle}
              </h3>
              <div className="accomplishments-grid">
                {accomplishments.map((acc, idx) => (
                  <div key={idx} className="accomplishment-card">
                    <div className="acc-icon-box">
                      <FaAward />
                    </div>
                    <div>
                      <h4>{acc.title}</h4>
                      <div className="acc-org">{acc.organization}</div>
                      <p>{acc.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {(activeTab === 'all' || activeTab === 'languages') && (
            <div className="cv-section">
              <h3 className="section-title">
                <FaGlobe className="title-icon" /> {t.cvModal.languagesTitle}
              </h3>
              <div className="languages-grid">
                {languages.map((l, idx) => (
                  <div key={idx} className="lang-card">
                    <div className="lang-info">
                      <span className="lang-name">{l.lang}</span>
                      <span className="lang-level">{l.level}</span>
                    </div>
                    <div className="lang-bar-bg">
                      <div className="lang-bar-fill" style={{ width: `${l.fluency}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <p className="footer-note">
            {t.cvModal.footerNote}
          </p>
          <button onClick={onClose} className="btn-modal-close-bottom">
            {t.cvModal.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
}
