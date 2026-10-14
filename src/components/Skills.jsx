import React, { useState } from 'react';
import { 
  FaServer, 
  FaCode, 
  FaCloud, 
  FaVial, 
  FaAtom, 
  FaLayerGroup 
} from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { t } = useLanguage();

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'languages': return <FaCode />;
      case 'frameworks': return <FaServer />;
      case 'devops': return <FaCloud />;
      case 'testing': return <FaVial />;
      case 'specialized': return <FaAtom />;
      default: return <FaCode />;
    }
  };

  const getLevelClass = (level) => {
    const l = level.toLowerCase();
    if (l.includes('adv') || l.includes('avanc')) return 'level-advanced';
    if (l.includes('prof') || l.includes('maîtr')) return 'level-proficient';
    return 'level-workingknowledge';
  };

  const displayedGroups = activeCategory === 'all' 
    ? t.skills.categories 
    : t.skills.categories.filter(g => g.id === activeCategory);

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <span className="section-kicker">{t.skills.kicker}</span>
        <h2>{t.skills.title}</h2>
        <p className="section-intro">{t.skills.intro}</p>
      </div>

      {/* Filter Tabs */}
      <div className="skills-category-tabs">
        <button 
          className={`category-tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => setActiveCategory('all')}
        >
          <FaLayerGroup className="tab-icon" /> {t.skills.allTab}
        </button>
        {t.skills.categories.map((group) => (
          <button
            key={group.id}
            className={`category-tab-btn ${activeCategory === group.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(group.id)}
          >
            <span className="tab-icon">{getCategoryIcon(group.id)}</span>
            <span>{group.short}</span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {displayedGroups.map((group) => (
          <div key={group.id} className="skill-category-card">
            <div className="skill-category-header">
              <div className="category-icon-box">
                {getCategoryIcon(group.id)}
              </div>
              <div className="category-title-wrap">
                <h3>{group.name}</h3>
              </div>
            </div>

            <div className="skills-item-list">
              {group.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-item-card">
                  <div className="skill-item-top">
                    <span className="skill-name">{skill.name}</span>
                    <span className={`skill-level-badge ${getLevelClass(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                  <p className="skill-note">{skill.note}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
