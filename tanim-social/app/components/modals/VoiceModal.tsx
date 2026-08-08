'use client';

import { useState } from 'react';

interface VoiceModalProps {
  open: boolean;
  onClose: () => void;
}

export function VoiceModal({ open, onClose }: VoiceModalProps) {
  const [status, setStatus] = useState('Initializing...');

  if (!open) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.4)',
        zIndex: 1002,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        animation: 'fadeIn 0.3s ease forwards',
      }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{
        width: '90%',
        maxWidth: '400px',
        background: 'rgba(245, 243, 239, 0.97)',
        border: '1px solid rgba(255, 116, 51, 0.3)',
        borderRadius: '24px',
        padding: '2.5rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 0 80px rgba(255, 116, 51, 0.08)',
        transform: 'translateY(30px)',
        animation: 'slideUp 0.3s ease forwards',
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '1.25rem', right: '1.25rem',
            width: '32px', height: '32px',
            borderRadius: '8px',
            border: '1px solid rgba(255, 116, 51, 0.3)',
            background: 'rgba(255, 116, 51, 0.08)',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.25rem',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255, 116, 51, 0.15)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255, 116, 51, 0.08)'; }}
        >
          &times;
        </button>

        <div style={{
          width: '96px', height: '96px',
          borderRadius: '50%',
          background: 'var(--accent)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '3rem',
          boxShadow: '0 0 30px rgba(255, 116, 51, 0.4)',
          marginBottom: '1.5rem',
          position: 'relative',
        }}>
          🤖
          <div style={{
            position: 'absolute', inset: -8,
            border: '2px solid rgba(255, 116, 51, 0.4)',
            borderRadius: '50%',
            animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
          }} />
        </div>
        
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.85rem',
          fontWeight: 600,
          color: 'var(--accent)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: '2rem',
        }}>
          {status}
        </div>

        <button
          onClick={() => setStatus('Listening...')}
          style={{
            width: '64px', height: '64px',
            borderRadius: '50%',
            background: 'rgba(255, 116, 51, 0.1)',
            border: '1px solid rgba(255, 116, 51, 0.3)',
            color: 'var(--accent)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--accent)';
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = '0 10px 25px rgba(255, 116, 51, 0.4)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(255, 116, 51, 0.1)';
            e.currentTarget.style.color = 'var(--accent)';
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
            <line x1="12" y1="19" x2="12" y2="23"></line>
            <line x1="8" y1="23" x2="16" y2="23"></line>
          </svg>
        </button>
      </div>
    </div>
  );
}
