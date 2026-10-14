import React, { useState } from 'react';
import { FaRedo } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function SleepMoodBadge() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { language } = useLanguage();
  const isFr = language === 'fr';

  const fetchSleepScore = async () => {
    setLoading(true);
    try {
      // Connect to your live Render endpoint:
      const res = await fetch('https://portfolio-server-ncp0.onrender.com/api/garmin/sleep');
      if (res.ok) {
        const json = await res.json();
        setData(json.data);
      } else {
        // Fallback calculation if server is waking up
        const easternHour = new Date().toLocaleString("en-US", { timeZone: "America/Toronto", hour: "numeric", hour12: false });
        if (parseInt(easternHour, 10) < 8) {
          setData({ status: 'asleep', score: null });
        } else {
          setData({ status: 'default_fallback', score: 85 });
        }
      }
    } catch {
      setData({ status: 'default_fallback', score: 85 });
    } finally {
      setLoading(false);
    }
  };

  const getMoodConfig = (score, status) => {
    // 🌙 Sleeping State (Midnight to 8:00 AM)
    if (status === 'asleep') {
      return {
        color: '#818cf8', // Calming lavender / indigo
        glowColor: 'rgba(129, 140, 248, 0.45)',
        strokeColor: '#818cf8',
        label: isFr ? 'Endormi' : 'Asleep',
        sub: isFr ? 'Enregistrement des constantes vitales la nuit' : 'Monitoring overnight vitals on Garmin watch',
        mouthPath: 'M 42 66 Q 50 64 58 66',
        eyes: 'sleeping'
      };
    }

    // Daytime score-based moods:
    const num = score ?? 85;
    if (num < 40) {
      return {
        color: '#0f172a',
        glowColor: 'rgba(15, 23, 42, 0.6)',
        strokeColor: '#334155',
        label: isFr ? 'Épuisé' : 'Exhausted',
        sub: isFr ? 'Score de sommeil critique' : 'Critical sleep score',
        mouthPath: 'M 36 68 Q 50 62 64 68',
        eyes: 'droopy'
      };
    } else if (num < 60) {
      return {
        color: '#ef4444',
        glowColor: 'rgba(239, 68, 68, 0.4)',
        strokeColor: '#ef4444',
        label: isFr ? 'Fatigué' : 'Low Energy',
        sub: isFr ? 'Besoin de récupération' : 'Needs more rest',
        mouthPath: 'M 36 68 Q 50 60 64 66',
        eyes: 'tired'
      };
    } else if (num < 80) {
      return {
        color: '#eab308',
        glowColor: 'rgba(234, 179, 8, 0.4)',
        strokeColor: '#eab308',
        label: isFr ? 'Équilibré' : 'Balanced',
        sub: isFr ? 'Bonne récupération' : 'Steady focus & recovery',
        mouthPath: 'M 36 64 Q 50 72 64 64',
        eyes: 'normal'
      };
    } else {
      return {
        color: '#10b981',
        glowColor: 'rgba(16, 185, 129, 0.45)',
        strokeColor: '#10b981',
        label: isFr ? 'Plein d’énergie' : 'High Energy',
        sub: isFr ? 'Sommeil optimal' : 'Peak sleep',
        mouthPath: 'M 34 60 Q 50 76 66 60',
        eyes: 'sparkle'
      };
    }
  };

  const mood = data ? getMoodConfig(data.score, data.status) : null;

  return (
    <div className="mood-seamless-widget">
      {!data ? (
        <div className="mood-blend-trigger-wrapper">
          <button 
            onClick={fetchSleepScore}
            disabled={loading}
            className="btn-mood-seamless"
          >
            <div className="character-face-orb neutral-float">
              <svg viewBox="0 0 100 100" className="character-face-svg" fill="none">
                <circle cx="50" cy="50" r="44" className="face-outline" stroke="currentColor" strokeWidth="4" />
                <circle cx="36" cy="44" r="5" fill="currentColor" />
                <circle cx="64" cy="44" r="5" fill="currentColor" />
                <path d="M 38 64 Q 50 72 62 64" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
            <div className="mood-text-group">
              <span className="mood-headline">
                {isFr ? 'Cliquez pour voir mon humeur' : 'Click to see my mood today'}
              </span>
              <span className="mood-hint">
                {loading ? (isFr ? 'Lecture des constantes...' : 'Reading Garmin vitals...') : (isFr ? 'Score de sommeil du jour' : "Today's sleep score")}
              </span>
            </div>
          </button>
        </div>
      ) : (
        <div className="mood-blend-result">
          <div className="mood-active-row">
            {/* Coloured Character Face (Sleeping or Awake) */}
            <div 
              className="character-face-orb coloured-face"
              style={{ color: mood.color, filter: `drop-shadow(0 0 14px ${mood.glowColor})` }}
            >
              <svg viewBox="0 0 100 100" className="character-face-svg" fill="none">
                <circle cx="50" cy="50" r="44" fill={mood.color} stroke={mood.strokeColor} strokeWidth="3" />

                {/* Sleeping Closed Eyes (– –) and Floating zZ */}
                {mood.eyes === 'sleeping' && (
                  <>
                    <path d="M 30 46 Q 36 50 42 46" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" />
                    <path d="M 58 46 Q 64 50 70 46" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" />
                    <text x="68" y="32" fill="#ffffff" fontSize="13" fontWeight="900" fontFamily="sans-serif">z</text>
                    <text x="78" y="24" fill="#ffffff" fontSize="16" fontWeight="900" fontFamily="sans-serif">Z</text>
                  </>
                )}
                {mood.eyes === 'droopy' && (
                  <>
                    <path d="M 30 46 Q 36 40 42 46" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
                    <path d="M 58 46 Q 64 40 70 46" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
                  </>
                )}
                {mood.eyes === 'tired' && (
                  <>
                    <path d="M 30 42 L 42 46" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
                    <path d="M 70 42 L 58 46" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
                  </>
                )}
                {mood.eyes === 'normal' && (
                  <>
                    <circle cx="36" cy="44" r="5" fill="#ffffff" />
                    <circle cx="64" cy="44" r="5" fill="#ffffff" />
                  </>
                )}
                {mood.eyes === 'sparkle' && (
                  <>
                    <circle cx="36" cy="44" r="6" fill="#ffffff" />
                    <circle cx="38" cy="42" r="2" fill="#818cf8" />
                    <circle cx="64" cy="44" r="6" fill="#ffffff" />
                    <circle cx="66" cy="42" r="2" fill="#818cf8" />
                  </>
                )}

                {/* Mouth */}
                <path d={mood.mouthPath} stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" fill="none" />
              </svg>
            </div>

            <div className="mood-details-col">
              <div className="mood-score-line">
                {data.status === 'asleep' ? (
                  <span className="mood-name-label" style={{ color: mood.color, fontSize: '1.35rem' }}>
                    {mood.label} 😴
                  </span>
                ) : (
                  <>
                    <span className="mood-tag-number" style={{ color: mood.color }}>
                      {data.score} / 100
                    </span>
                    <span className="mood-name-label" style={{ color: mood.color }}>
                      {mood.label}
                    </span>
                  </>
                )}
              </div>
              <p className="mood-tag-sub">{mood.sub}</p>
            </div>
          </div>
        </div>
      )}
      <div className="mood-telemetry-banner">
        <span className="status-dot"></span>
        <span className="mood-telemetry-text">
          {isFr
            ? 'Télémétrie en direct connectée à la montre Garmin'
            : 'Live telemetry connected to Garmin watch'}
        </span>
      </div>
    </div>
  );
}
