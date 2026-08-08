'use client';

import { useEffect, useRef, useState } from 'react';
import type { Section } from '../SiteClient';

interface AboutSectionProps {
  switchSection: (section: Section) => void;
}

const taglines = [
  'Content Production.',
  'AI Automation.',
  'Outbound Systems.',
];

export function AboutSection({ switchSection }: AboutSectionProps) {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentTagline(i => (i + 1) % taglines.length);
        setVisible(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" style={{ paddingTop: '0.5rem', paddingBottom: '2.2rem' }}>
      {/* Hero */}
      <div className="animate-up" style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        gap: '1.8rem',
        paddingBottom: '4.4rem',
        marginBottom: '2.5rem',
        borderBottom: '1px solid var(--border)',
      }}>
        {/* Photo */}
        <div style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          overflow: 'hidden',
          flexShrink: 0,
          border: '2px solid rgba(255, 116, 51, 0.25)',
          background: 'var(--surface)',
          boxShadow: '0 0 60px 20px rgba(255, 116, 51, 0.12)',
        }}>
          <img
            src="/photo.webp"
            alt="Nasrullah Tanim"
            width={200}
            height={200}
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
            loading="eager"
          />
        </div>

        <div style={{ flex: 1 }}>
          <h1 style={{
            fontFamily: "'Inter Tight', sans-serif",
            fontSize: 'clamp(3.5rem, 8vw, 5.5rem)',
            fontWeight: 900,
            color: 'var(--text-primary)',
            lineHeight: 0.95,
            marginBottom: '1.25rem',
            letterSpacing: '-0.032em',
          }}>
            Nasrullah Tanim
          </h1>

          <div style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: '1.12rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            fontWeight: 300,
            letterSpacing: '0.014em',
            maxWidth: '660px',
            margin: '0 auto',
          }}>
            <strong style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
              {'Helping founders with '}
            </strong>
            <span style={{
              position: 'relative',
              display: 'inline-block',
              minHeight: '1.6em',
              minWidth: '220px',
            }}>
              <span style={{
                color: 'var(--accent)',
                fontWeight: 600,
                transition: 'opacity 0.3s ease',
                opacity: visible ? 1 : 0,
                position: 'relative',
              }}>
                {taglines[currentTagline]}
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Who I Am Box */}
      <div className="animate-up" style={{
        background: 'var(--card-bg)',
        border: '1px solid rgba(255, 255, 255, 0.8)',
        borderRadius: '20px',
        padding: '2.8rem 2.5rem 2.6rem',
        margin: '2.4rem 0 3.6rem',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)',
      }}>
        <h2 style={{
          fontFamily: "'Fraunces', serif",
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 900,
          color: 'var(--text-primary)',
          letterSpacing: '-0.024em',
          marginBottom: '1.5rem',
          marginTop: 0,
        }}>
          Who I Am
        </h2>
        <div>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.05rem',
            lineHeight: 1.8,
            fontWeight: 300,
            letterSpacing: '0.01em',
            maxWidth: '68ch',
            marginBottom: '1.1rem',
          }}>
            I&apos;m Tanim. I love building systems that scale a business. I solve three problems. First,{' '}
            <strong style={{ color: 'var(--accent)', fontWeight: 600 }}>content</strong>: planning, editing, producing,
            and distributing video across every major platform. Second,{' '}
            <strong style={{ color: 'var(--accent)', fontWeight: 600 }}>growth</strong>: engineering cold outreach
            systems that consistently find and convert the right leads. Third,{' '}
            <strong style={{ color: 'var(--accent)', fontWeight: 600 }}>operations</strong>: designing custom AI agents
            and internal workflows that remove the bottlenecks eating up founder time.
          </p>
        </div>

        <div style={{ paddingTop: '1.25rem', marginTop: '0.5rem', display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={() => switchSection('expertise')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              padding: '0.72rem 1.75rem',
              fontFamily: "'Sora', sans-serif",
              fontSize: '0.875rem',
              fontWeight: 700,
              color: '#ffffff',
              background: 'linear-gradient(100deg, var(--accent), #e55f1f)',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'transform 0.3s cubic-bezier(0.21, 0.82, 0.31, 1.2), box-shadow 0.3s ease',
              boxShadow: '0 9px 18px rgba(255, 116, 51, 0.22)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 14px 28px rgba(255, 116, 51, 0.3), 0 0 24px rgba(255, 116, 51, 0.2)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 9px 18px rgba(255, 116, 51, 0.22)';
            }}
          >
            How I Can Help You Scale
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .hero-photo {
            width: 120px !important;
            height: 120px !important;
          }
        }
      `}</style>
    </section>
  );
}
