'use client';

import { useState } from 'react';
import type { Section } from '../SiteClient';

interface ExpertiseSectionProps {
  switchSection: (section: Section) => void;
  openChatAgent: () => void;
  openYoutubeModal: (url: string) => void;
}

const cardStyle = {
  background: 'var(--card-bg)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.7)',
  borderRadius: '16px',
  padding: '2rem',
  position: 'relative' as const,
  overflow: 'hidden' as const,
  transition: 'all 0.3s ease',
  boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
};

const primaryBtnStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.4rem',
  padding: '0.64rem 1.5rem',
  fontFamily: "'Sora', sans-serif",
  fontSize: '0.8rem',
  fontWeight: 600,
  color: '#ffffff',
  background: 'linear-gradient(100deg, var(--accent), #e55f1f)',
  border: 'none',
  borderRadius: '12px',
  cursor: 'pointer',
  transition: 'transform 0.3s cubic-bezier(0.21, 0.82, 0.31, 1.2), box-shadow 0.3s ease',
  boxShadow: '0 9px 18px rgba(255, 116, 51, 0.22)',
};

const secondaryBtnStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.4rem',
  padding: '0.64rem 1.5rem',
  fontFamily: "'Sora', sans-serif",
  fontSize: '0.8rem',
  fontWeight: 600,
  color: 'var(--text-primary)',
  background: 'rgba(255, 255, 255, 0.5)',
  border: '1px solid rgba(0,0,0,0.12)',
  borderRadius: '12px',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
};

const aiBtnStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.4rem',
  padding: '0.64rem 1.3rem',
  fontFamily: "'Sora', sans-serif",
  fontSize: '0.8rem',
  fontWeight: 600,
  color: 'var(--accent)',
  background: 'rgba(255, 116, 51, 0.06)',
  border: '1px solid rgba(255, 116, 51, 0.3)',
  borderRadius: '12px',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
};

function ExpertiseCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={className}
      style={{
        ...cardStyle,
        borderColor: hovered ? 'rgba(255, 116, 51, 0.35)' : 'rgba(255, 255, 255, 0.7)',
        boxShadow: hovered
          ? '0 0 30px rgba(255, 116, 51, 0.15), 0 8px 32px rgba(0,0,0,0.08)'
          : '0 8px 30px rgba(0,0,0,0.06)',
        transform: hovered ? 'translateY(-2px)' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, var(--accent), transparent)',
        }} />
      )}
      {children}
    </div>
  );
}

export function ExpertiseSection({ switchSection, openChatAgent, openYoutubeModal }: ExpertiseSectionProps) {
  const capabilityStyle = {
    fontSize: '0.875rem',
    color: 'var(--text-secondary)',
    padding: '0.3rem 0 0.3rem 1.2rem',
    position: 'relative' as const,
    fontWeight: 300,
    letterSpacing: '0.008em',
    lineHeight: 1.6,
  };

  return (
    <section id="expertise" style={{ paddingTop: '1.5rem', paddingBottom: '1rem' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1.8rem',
        marginTop: '0.5rem',
      }} className="expertise-grid">

        {/* Card 1: Content Production */}
        <ExpertiseCard>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ fontSize: '2rem', lineHeight: 1 }}>🎬</div>
            <h3 style={{
              fontFamily: "'Fraunces', serif",
              fontSize: '1.38rem',
              fontWeight: 900,
              color: 'var(--text-primary)',
              margin: 0,
              letterSpacing: '-0.015em',
            }}>Content Production at Scale</h3>
          </div>
          <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.1rem', fontWeight: 300 }}>
            Premium video editing, podcast production, and social media management that runs like clockwork. From raw footage to published content across every platform, without you touching a thing.
          </p>
          <ul style={{ listStyle: 'none', marginBottom: '1.4rem', padding: 0 }}>
            {[
              'Video editing and post-production',
              'Podcast editing and production',
              'Shorts, Reels, and TikTok optimization',
              'Thumbnail design and brand systems',
              'Content distribution workflows',
            ].map(item => (
              <li key={item} style={capabilityStyle}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem' }}>–</span>
                {item}
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
            <button
              onClick={() => switchSection('portfolio')}
              style={primaryBtnStyle}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 14px 28px rgba(255, 116, 51, 0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 9px 18px rgba(255, 116, 51, 0.22)'; }}
            >
              View Portfolio
            </button>
            <button
              onClick={() => openYoutubeModal('https://www.youtube.com/embed/GsMrpkB-Ggk')}
              style={secondaryBtnStyle}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255, 116, 51, 0.06)'; e.currentTarget.style.borderColor = 'rgba(255, 116, 51, 0.35)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.5)'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)'; }}
            >
              Service Explained
            </button>
          </div>
        </ExpertiseCard>

        {/* Card 2: Outbound Infrastructure */}
        <ExpertiseCard>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ fontSize: '2rem', lineHeight: 1 }}>📧</div>
            <h3 style={{
              fontFamily: "'Fraunces', serif",
              fontSize: '1.38rem',
              fontWeight: 900,
              color: 'var(--text-primary)',
              margin: 0,
              letterSpacing: '-0.015em',
            }}>Outbound Infrastructure</h3>
          </div>
          <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.1rem', fontWeight: 300 }}>
            Compliance-first cold email systems engineered to land in inboxes, not spam folders. Full infrastructure from DNS setup to sequence optimization, built to generate pipeline on autopilot.
          </p>
          <ul style={{ listStyle: 'none', marginBottom: '1.4rem', padding: 0 }}>
            {[
              'Cold email infrastructure and DNS setup',
              'Deliverability optimization and sender reputation management',
              'Lead sourcing and ICP framework development',
              'Email sequence design and A/B testing',
              'Performance monitoring and ongoing optimization',
            ].map(item => (
              <li key={item} style={capabilityStyle}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem' }}>–</span>
                {item}
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
            <button
              onClick={() => openYoutubeModal('https://www.youtube.com/embed/avRBuBSSdUg')}
              style={secondaryBtnStyle}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255, 116, 51, 0.06)'; e.currentTarget.style.borderColor = 'rgba(255, 116, 51, 0.35)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.5)'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)'; }}
            >
              Service Explained
            </button>
          </div>
          <a
            href="#"
            onClick={e => { e.preventDefault(); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              marginTop: '1.5rem',
              width: '100%',
              padding: '0.9rem 2rem',
              fontFamily: "'Sora', sans-serif",
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--accent)',
              background: 'transparent',
              border: '2px solid var(--accent)',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              textDecoration: 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255, 116, 51, 0.06)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 116, 51, 0.12)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <span>// Send a Cold Email Right Now</span>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80', animation: 'statusBlink 2s ease-in-out infinite', display: 'inline-block' }} />
          </a>
        </ExpertiseCard>

        {/* Card 3: AI Automation */}
        <ExpertiseCard>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ fontSize: '2rem', lineHeight: 1 }}>🤖</div>
            <h3 style={{
              fontFamily: "'Fraunces', serif",
              fontSize: '1.38rem',
              fontWeight: 900,
              color: 'var(--text-primary)',
              margin: 0,
              letterSpacing: '-0.015em',
            }}>AI-Powered Automation</h3>
          </div>
          <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.1rem', fontWeight: 300 }}>
            Custom n8n workflows and AI agents that handle repetitive work so you never have to touch it again. Built around how your specific business actually operates, not a generic off-the-shelf solution.
          </p>
          <ul style={{ listStyle: 'none', marginBottom: '1.4rem', padding: 0 }}>
            {[
              'n8n workflow development',
              'AI agent development for custom operations',
              'Lead research and qualification systems',
              'CRM automation and data processing',
              'Custom integrations via APIs and webhooks',
            ].map(item => (
              <li key={item} style={capabilityStyle}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem' }}>–</span>
                {item}
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
            <button
              onClick={openChatAgent}
              style={aiBtnStyle}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255, 116, 51, 0.12)'; e.currentTarget.style.borderColor = 'rgba(255, 116, 51, 0.5)'; e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(255, 116, 51, 0.2)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255, 116, 51, 0.06)'; e.currentTarget.style.borderColor = 'rgba(255, 116, 51, 0.3)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              Try Custom Chat Agent
            </button>
          </div>
        </ExpertiseCard>

        {/* Card 4: Autonomous Content Engine */}
        <ExpertiseCard>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ fontSize: '2rem', lineHeight: 1 }}>🚀</div>
            <h3 style={{
              fontFamily: "'Fraunces', serif",
              fontSize: '1.38rem',
              fontWeight: 900,
              color: 'var(--text-primary)',
              margin: 0,
              letterSpacing: '-0.015em',
            }}>Autonomous Content Engine</h3>
          </div>
          <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.1rem', fontWeight: 300 }}>
            Fully autonomous content production system where a founder records once and the entire pipeline runs on its own. Script writing, strategy, editing, reels creation, and publishing—all handled without touching anything again.
          </p>
          <ul style={{ listStyle: 'none', marginBottom: '1.4rem', padding: 0 }}>
            {[
              'AI-powered script writing and content strategy',
              'Automated video editing and reels creation',
              'Custom AI voice and avatar clones (ElevenLabs, HeyGen)',
              'Full publishing pipeline across all platforms',
              'Zero ongoing input required after setup',
            ].map(item => (
              <li key={item} style={capabilityStyle}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem' }}>–</span>
                {item}
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
            <button
              onClick={() => openYoutubeModal('https://www.youtube.com/embed/CpDM2ZXapBs')}
              style={primaryBtnStyle}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 14px 28px rgba(255, 116, 51, 0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 9px 18px rgba(255, 116, 51, 0.22)'; }}
            >
              View Example
            </button>
          </div>
        </ExpertiseCard>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .expertise-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
