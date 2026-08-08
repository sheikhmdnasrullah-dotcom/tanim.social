'use client';

import { useState } from 'react';

const podcastVideos = [
  'https://www.youtube.com/embed/kWw5P7IqfKU?si=Eedy9yg2mkxSuTfB',
  'https://www.youtube.com/embed/Jq--0pSIiwk?si=wXUNRbJ9vq6kCW2J',
  'https://www.youtube.com/embed/JmpK396sDoY?si=syUvX2IsUdVPnAAZ',
  'https://www.youtube.com/embed/_qUNzwRWdDc?si=6mqeFdn1Hrl1s6eg',
  'https://www.youtube.com/embed/mpf8zpSkbxg?si=v-fqa_H_K4J6TiK_',
  'https://www.youtube.com/embed/HhNAsraWyvA?si=A4-bWt81Kj-uqUT5',
];

const reelVideos = [
  'https://www.youtube.com/embed/YIOb6yP-Vqg',
  'https://www.youtube.com/embed/Q04ktHx09sY',
  'https://www.youtube.com/embed/NdlODkhmZQI',
  'https://www.youtube.com/embed/6_-dpyy9NPc',
  'https://www.youtube.com/embed/RuQZjz2qgoI',
  'https://www.youtube.com/embed/_KvU5e1Y3Mk',
  'https://www.youtube.com/embed/QfKsH8sp1RI',
  'https://www.youtube.com/embed/y78HsXO4MOM',
  'https://www.youtube.com/embed/uviaSTc5bAo',
  'https://www.youtube.com/embed/R8cuivdgUFk',
  'https://www.youtube.com/embed/ZtdZl419cys',
  'https://www.youtube.com/embed/lRVlu8G-3Vo',
  'https://www.youtube.com/embed/u-lQqR65Ox0',
  'https://www.youtube.com/embed/vgvHQRCwPq0',
  'https://www.youtube.com/embed/_zX8pe1S96g',
  'https://www.youtube.com/embed/g_D2BvQIAkw',
];

export function PortfolioSection() {
  const [activeTab, setActiveTab] = useState<'podcast' | 'reel'>('podcast');

  return (
    <section id="portfolio" style={{ paddingTop: '3.6rem', paddingBottom: '0.4rem' }}>
      {/* Tab Switcher */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '2.5rem',
        padding: '0.5rem',
        background: 'var(--card-bg)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        width: 'fit-content',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
        {(['podcast', 'reel'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '0.75rem 2rem',
              fontFamily: "'Sora', sans-serif",
              fontSize: '1rem',
              fontWeight: 600,
              color: activeTab === tab ? '#ffffff' : 'var(--text-muted)',
              background: activeTab === tab ? 'var(--accent)' : 'transparent',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: activeTab === tab ? '0 4px 12px rgba(255, 116, 51, 0.3)' : 'none',
              whiteSpace: 'nowrap',
            }}
          >
            {tab === 'podcast' ? 'Podcast Edits' : 'Reel Edits'}
          </button>
        ))}
      </div>

      {/* Podcast Edits */}
      {activeTab === 'podcast' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.25rem',
          animation: 'fadeIn 0.4s ease',
        }} className="podcast-grid">
          {podcastVideos.map((src, i) => (
            <div key={i} style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid var(--border)',
              background: 'var(--card-bg)',
              paddingTop: '56.25%',
              transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255, 116, 51, 0.3)'; e.currentTarget.style.boxShadow = 'var(--glow)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <iframe
                src={src}
                title={`Podcast video ${i + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Reel Edits */}
      {activeTab === 'reel' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
          animation: 'fadeIn 0.4s ease',
        }} className="reel-grid">
          {reelVideos.map((src, i) => (
            <div key={i} style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid var(--border)',
              background: 'var(--card-bg)',
              paddingTop: '177.78%',
              transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255, 116, 51, 0.3)'; e.currentTarget.style.boxShadow = 'var(--glow)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <iframe
                src={src}
                title={`Reel video ${i + 1}`}
                frameBorder="0"
                allowFullScreen
                loading="lazy"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
              />
            </div>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .podcast-grid { grid-template-columns: 1fr !important; }
          .reel-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
