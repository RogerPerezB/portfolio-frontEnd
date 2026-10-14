import React, { useState } from 'react';
import { FaTerminal, FaCheckCircle, FaExternalLinkAlt, FaSyncAlt, FaServer } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function LeetCodeBadge() {
  const [submission, setSubmission] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { language, t } = useLanguage();

  const fetchLatestSolve = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('https://portfolio-server-ncp0.onrender.com/api/leetcode/latest');
      if (!response.ok) {
        throw new Error(
          language === 'fr' 
            ? "L'API se réveille, veuillez réessayer dans quelques secondes." 
            : "API warming up, please try again in a few seconds."
        );
      }
      
      const json = await response.json();
      setSubmission(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Helper to convert LeetCode's Unix timestamp to localized relative time ("X days ago" / "il y a X jours")
  const getRelativeTime = (unixSeconds) => {
    try {
      const diffInSeconds = Math.floor(Date.now() / 1000) - parseInt(unixSeconds, 10);
      const rtf = new Intl.RelativeTimeFormat(language || 'en', { numeric: 'auto' });
      
      if (diffInSeconds < 60) return rtf.format(-Math.max(diffInSeconds, 1), 'second');
      if (diffInSeconds < 3600) return rtf.format(-Math.floor(diffInSeconds / 60), 'minute');
      if (diffInSeconds < 86400) return rtf.format(-Math.floor(diffInSeconds / 3600), 'hour');
      return rtf.format(-Math.floor(diffInSeconds / 86400), 'day');
    } catch {
      return '';
    }
  };

  const isFr = language === 'fr';

  return (
    <section className="leetcode-showcase-section">
      <div className="leetcode-card-container">
        {/* Live Server Indicator Header */}
        <div className="leetcode-status-bar">
          <div className="server-status-pill">
            <span className="status-dot"></span>
            <span>{isFr ? 'Microservice Render en ligne' : 'Render Microservice Live'}</span>
            <span className="server-endpoint-url">(leetcode-server-2d3r.onrender.com)</span>
          </div>
          <span className="leetcode-section-kicker">
            <FaTerminal className="inline-icon" /> {isFr ? 'API Backend en direct' : 'Live Backend Microservice'}
          </span>
        </div>

        {!submission ? (
          <div className="leetcode-initial-state">
            <div className="leetcode-cta-text">
              <h3>{isFr ? 'Cache Serveur LeetCode en temps réel' : 'Real-Time LeetCode Server Cache'}</h3>
              <p>
                {isFr 
                  ? 'Connecté à mon microservice backend sur Render qui interroge et met en cache mes dernières résolutions algorithmiques de manière asynchrone.' 
                  : 'Connected to my live backend service on Render that asynchronously polls and caches recent algorithmic problem solves.'}
              </p>
            </div>
            
            <button 
              onClick={fetchLatestSolve} 
              disabled={loading}
              className="btn-leetcode-fetch"
            >
              {loading ? (
                <>
                  <FaSyncAlt className="spin-icon" />
                  <span>{isFr ? 'Récupération du cache serveur...' : 'Fetching Server Cache...'}</span>
                </>
              ) : (
                <>
                  <FaServer />
                  <span>{isFr ? 'Voir ma dernière résolution LeetCode' : 'See My Latest LeetCode Solve'}</span>
                </>
              )}
            </button>
          </div>
        ) : (
          <div className="leetcode-result-card">
            <div className="leetcode-card-header">
              <div className="leetcode-badge-status">
                <FaCheckCircle className="text-emerald" />
                <span>
                  {submission.data?.statusDisplay || 'Accepted'} {isFr ? 'Solution acceptée' : 'Solution'}
                </span>
              </div>
              
              <div className="leetcode-source-badge">
                <span className="cache-pill">
                  {isFr ? 'Hit de cache' : 'Cache Hit'}: {submission.source}
                </span>
                <button 
                  onClick={fetchLatestSolve} 
                  disabled={loading}
                  className="btn-re-fetch"
                  title={isFr ? 'Actualiser le cache' : 'Refresh Cache'}
                  aria-label="Refresh Cache"
                >
                  <FaSyncAlt className={loading ? 'spin-icon' : ''} />
                </button>
              </div>
            </div>

            <a 
              href={submission.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="leetcode-problem-title"
            >
              <span>{submission.data?.title}</span>
              <FaExternalLinkAlt className="external-link-icon" />
            </a>

            <div className="leetcode-meta-row">
              <div className="leetcode-lang-badge">
                <span className="meta-label">{isFr ? 'Langage :' : 'Language:'}</span>
                <code className="meta-code">{submission.data?.lang}</code>
              </div>
              
              <div className="leetcode-timestamp">
                {getRelativeTime(submission.data?.timestamp)}
              </div>
            </div>

            <div className="leetcode-system-design">
              <span className="code-dot">&bull;</span>
              <span>
                {isFr 
                  ? 'Architecture système : Servi via un cache backend asynchrone.' 
                  : 'System Design: Served via asynchronous backend cache.'}
              </span>
            </div>
          </div>
        )}

        {error && (
          <div className="leetcode-error-message">
            <span>{error}</span>
          </div>
        )}
      </div>
    </section>
  );
}