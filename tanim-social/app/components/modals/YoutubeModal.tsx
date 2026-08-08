'use client';

interface YoutubeModalProps {
  open: boolean;
  url: string;
  onClose: () => void;
}

export function YoutubeModal({ open, url, onClose }: YoutubeModalProps) {
  if (!open) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.85)',
        zIndex: 1003,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        animation: 'fadeIn 0.25s ease forwards',
        padding: '2rem',
      }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '900px',
        borderRadius: '16px',
        overflow: 'hidden',
        background: '#000',
        border: '1px solid rgba(255, 116, 51, 0.3)',
        boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 60px rgba(255, 116, 51, 0.1)',
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            zIndex: 1,
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: '1px solid rgba(255, 116, 51, 0.4)',
            background: 'rgba(255, 116, 51, 0.15)',
            color: '#ffffff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.25rem',
            transition: 'all 0.2s ease',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255, 116, 51, 0.35)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255, 116, 51, 0.15)'; }}
          aria-label="Close video"
        >
          ×
        </button>
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <iframe
            src={url ? `${url}?autoplay=1` : ''}
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 0,
            }}
          />
        </div>
      </div>
    </div>
  );
}
