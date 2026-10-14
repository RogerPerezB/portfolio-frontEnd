import React, { useState } from 'react';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub, 
  FaCopy, 
  FaCheck, 
  FaFileAlt,
  FaPaperPlane
} from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function Contact({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const { t } = useLanguage();

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <span className="section-kicker">{t.contact.kicker}</span>
        <h2>{t.contact.title}</h2>
        <p className="section-intro">{t.contact.intro}</p>
      </div>

      <div className="contact-grid">
        {/* Contact Info Card */}
        <div className="contact-card">
          <h3>{t.contact.detailsTitle}</h3>
          <p className="contact-card-sub">{t.contact.detailsSub}</p>

          <div className="contact-items-list">
            <div className="contact-item-box">
              <div className="contact-icon-wrapper">
                <FaEnvelope />
              </div>
              <div className="contact-item-content">
                <span className="contact-label">{t.contact.emailLabel}</span>
                <a href="mailto:rperezbecerra@yahoo.ca" className="contact-value-link">
                  rperezbecerra@yahoo.ca
                </a>
              </div>
              <button 
                onClick={() => copyToClipboard('rperezbecerra@yahoo.ca', 'email')}
                className="btn-copy-mini"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedEmail ? <FaCheck className="text-emerald" /> : <FaCopy />}
              </button>
            </div>

            <div className="contact-item-box">
              <div className="contact-icon-wrapper">
                <FaPhone />
              </div>
              <div className="contact-item-content">
                <span className="contact-label">{t.contact.phoneLabel}</span>
                <a href="tel:819-271-7461" className="contact-value-link">
                  819-271-7461
                </a>
              </div>
              <button 
                onClick={() => copyToClipboard('819-271-7461', 'phone')}
                className="btn-copy-mini"
                title="Copy phone to clipboard"
                aria-label="Copy phone number"
              >
                {copiedPhone ? <FaCheck className="text-emerald" /> : <FaCopy />}
              </button>
            </div>

            <div className="contact-item-box">
              <div className="contact-icon-wrapper">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-item-content">
                <span className="contact-label">{t.contact.locationLabel}</span>
                <span className="contact-value">{t.contact.locationValue}</span>
              </div>
            </div>
          </div>

          <div className="contact-social-links">
            <a 
              href="https://www.linkedin.com/in/r%C3%B3ger-p%C3%A9rez-becerra-93136114a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-btn linkedin"
              aria-label={t.contact.linkedinBtn}
            >
              <FaLinkedin />
              <span>{t.contact.linkedinBtn}</span>
            </a>

            <a 
              href="https://github.com/RogerPerezB" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-btn github"
              aria-label={t.contact.githubBtn}
            >
              <FaGithub />
              <span>{t.contact.githubBtn}</span>
            </a>
          </div>
        </div>

        {/* Action Card */}
        <div className="contact-action-card">
          <div className="action-card-badge">Direct Inquiries</div>
          <h3>{t.contact.actionTitle}</h3>
          <p>{t.contact.actionDesc}</p>

          <div className="action-card-buttons">
            <button 
              onClick={onOpenResume} 
              className="btn-primary w-full"
            >
              <FaFileAlt className="btn-icon" />
              <span>{t.contact.launchCvBtn}</span>
            </button>

            <a 
              href="mailto:rperezbecerra@yahoo.ca?subject=Software%20Engineering%20Opportunity%20-%20Roger%20Perez%20Becerra"
              className="btn-secondary w-full text-center"
            >
              <FaPaperPlane className="btn-icon" />
              <span>{t.contact.composeEmailBtn}</span>
            </a>
          </div>

          <div className="availability-callout">
            <span className="status-dot"></span>
            <div>
              <strong>{t.contact.statusLabel}</strong> {t.contact.statusValue}
              <p className="callout-detail">{t.contact.statusDetail}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
