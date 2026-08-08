'use client';

import { useState } from 'react';
import type { Section } from './SiteClient';

interface NavbarProps {
  activeSection: Section;
  switchSection: (section: Section) => void;
}

const navItems: { id: Section; label: string }[] = [
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'thoughts', label: 'Thoughts' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar({ activeSection, switchSection }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '75px',
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        padding: '0 2.5rem',
        zIndex: 100,
        background: 'var(--navbar-bg)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
      }}>
        {/* Brand */}
        <button
          onClick={() => switchSection('about')}
          style={{
            gridColumn: '1',
            justifySelf: 'start',
            fontFamily: "'Fraunces', serif",
            fontSize: '1rem',
            fontWeight: 900,
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-primary)')}
        >
          Nasrullah Tanim
        </button>

        {/* Desktop Nav */}
        <ul style={{
          gridColumn: '2',
          display: 'flex',
          alignItems: 'center',
          gap: '2px',
          listStyle: 'none',
          background: 'rgba(255, 116, 51, 0.04)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 116, 51, 0.18)',
          borderRadius: '999px',
          padding: '6px 8px',
          boxShadow: '0 0 28px rgba(255, 116, 51, 0.06)',
        }} className="desktop-nav">
          {navItems.map(item => (
            <li key={item.id}>
              <button
                onClick={() => switchSection(item.id)}
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: '0.9rem',
                  fontWeight: activeSection === item.id ? 600 : 500,
                  color: activeSection === item.id ? '#ffffff' : 'var(--text-muted)',
                  cursor: 'pointer',
                  padding: '0.5rem 1.15rem',
                  borderRadius: '999px',
                  transition: 'all 0.2s ease',
                  background: activeSection === item.id ? 'var(--accent)' : 'none',
                  border: 'none',
                  whiteSpace: 'nowrap',
                  boxShadow: activeSection === item.id ? '0 0 14px rgba(255, 116, 51, 0.4), 0 2px 6px rgba(255, 116, 51, 0.25)' : 'none',
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Socials */}
        <div style={{
          gridColumn: '3',
          justifySelf: 'end',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          paddingLeft: '1.25rem',
          borderLeft: '1px solid var(--border)',
        }} className="navbar-socials">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sheikh-md-nasrullah-910b203b3/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '36px', height: '36px',
              color: 'var(--text-muted)',
              transition: 'color 0.2s ease',
              borderRadius: '6px',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          {/* Website */}
          <a
            href="https://slideinventure.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Website"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '36px', height: '36px',
              color: 'var(--text-muted)',
              transition: 'color 0.2s ease',
              borderRadius: '6px',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </a>
          {/* Email */}
          <a
            href="mailto:nasrullahtanim@gmail.com"
            aria-label="Email"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '36px', height: '36px',
              color: 'var(--text-muted)',
              transition: 'color 0.2s ease',
              borderRadius: '6px',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className="mobile-menu-btn"
          style={{
            display: 'none',
            gridColumn: '2',
            background: 'none',
            border: 'none',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            padding: '0.4rem',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
          }}
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block',
              width: '22px',
              height: '2px',
              borderRadius: '2px',
              background: 'currentColor',
              transformOrigin: 'center',
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              transform: mobileOpen
                ? i === 0 ? 'translateY(7px) rotate(45deg)'
                  : i === 2 ? 'translateY(-7px) rotate(-45deg)'
                  : 'scaleX(0)'
                : 'none',
              opacity: mobileOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div style={{
          position: 'fixed',
          top: '75px',
          left: 0,
          right: 0,
          background: 'rgba(245, 243, 239, 0.97)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(255, 116, 51, 0.15)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          zIndex: 99,
          padding: '1rem 2.5rem 1.75rem',
        }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.1rem', marginBottom: '1.25rem' }}>
            {navItems.map(item => (
              <li key={item.id}>
                <button
                  onClick={() => { switchSection(item.id); setMobileOpen(false); }}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    fontFamily: "'Sora', sans-serif",
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    color: activeSection === item.id ? 'var(--accent)' : 'var(--text-secondary)',
                    padding: '0.55rem 0',
                    cursor: 'pointer',
                    background: 'none',
                    border: 'none',
                    borderLeft: activeSection === item.id ? '2px solid var(--accent)' : '2px solid transparent',
                    paddingLeft: activeSection === item.id ? '0.75rem' : '0',
                    transition: 'all 0.2s',
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
            <a href="https://www.linkedin.com/in/sheikh-md-nasrullah-910b203b3/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://slideinventure.com" target="_blank" rel="noopener noreferrer" aria-label="Website"
              style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </a>
            <a href="mailto:nasrullahtanim@gmail.com" aria-label="Email"
              style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .navbar-socials { display: none !important; }
          .mobile-menu-btn { display: flex !important; grid-column: 3 !important; justify-self: end; }
        }
      `}</style>
    </>
  );
}
