'use client';

import { useState, useRef, useEffect } from 'react';

interface ChatModalProps {
  open: boolean;
  onClose: () => void;
}

type Message = {
  role: 'agent' | 'user';
  content: string;
};

const AGENT_URL = 'https://tanim-ai-agent.nasrullahtanim.workers.dev';

export function ChatModal({ open, onClose }: ChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'agent', content: "Hey! I'm a demo of what a custom AI agent built for your business looks like. What's your name and tell me what your business does?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const newMessages: Message[] = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const history = newMessages.map(m => ({ role: m.role === 'agent' ? 'assistant' : 'user', content: m.content }));
      const response = await fetch(AGENT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      });

      if (!response.ok) throw new Error('API error');
      const data = await response.json();
      const agentMsg = data.content?.[0]?.text ?? "Sorry, I couldn't process that. Try again!";
      setMessages(prev => [...prev, { role: 'agent', content: agentMsg }]);
    } catch {
      setMessages(prev => [...prev, { role: 'agent', content: "Sorry, I'm having trouble connecting right now. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

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
        maxWidth: '480px',
        height: '600px',
        background: 'rgba(245, 243, 239, 0.97)',
        border: '1px solid rgba(255, 116, 51, 0.3)',
        borderRadius: '20px',
        backdropFilter: 'blur(30px)',
        WebkitBackdropFilter: 'blur(30px)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 0 80px rgba(255, 116, 51, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        transform: 'translateY(30px)',
        animation: 'slideUp 0.3s ease forwards',
      }}>
        {/* Header */}
        <div style={{
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid rgba(255, 116, 51, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(255, 116, 51, 0.04)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{
              width: '10px', height: '10px', borderRadius: '50%',
              background: '#4ade80',
              animation: 'pulse 2s ease-in-out infinite',
              boxShadow: '0 0 0 0 rgba(74, 222, 128, 0.7)',
              display: 'block',
            }} />
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--accent)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>// AI Ops Agent</span>
          </div>
          <button
            onClick={onClose}
            style={{
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
            ×
          </button>
        </div>

        {/* Messages */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          {messages.map((msg, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                animation: 'messageSlideIn 0.3s ease',
              }}
            >
              <div style={{
                maxWidth: '80%',
                padding: '0.875rem 1.125rem',
                borderRadius: '12px',
                fontSize: '0.9375rem',
                lineHeight: 1.5,
                background: msg.role === 'user' ? 'var(--accent)' : 'rgba(255, 116, 51, 0.08)',
                color: msg.role === 'user' ? '#ffffff' : 'var(--text-primary)',
                border: msg.role === 'user' ? '1px solid rgba(255, 116, 51, 0.5)' : '1px solid rgba(255, 116, 51, 0.2)',
              }}>
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <div style={{
                background: 'rgba(255, 116, 51, 0.08)',
                border: '1px solid rgba(255, 116, 51, 0.2)',
                padding: '0.875rem 1.125rem',
                borderRadius: '12px',
                display: 'flex',
                gap: '4px',
              }}>
                {[0, 1, 2].map(i => (
                  <span key={i} className="chat-typing-dot" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div style={{
          padding: '1.25rem 1.5rem',
          borderTop: '1px solid rgba(255, 116, 51, 0.15)',
          display: 'flex',
          gap: '0.75rem',
          background: 'rgba(255, 116, 51, 0.02)',
        }}>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
            placeholder="Type your message..."
            style={{
              flex: 1,
              padding: '0.875rem 1rem',
              background: 'rgba(255, 255, 255, 0.7)',
              border: '1px solid rgba(255, 116, 51, 0.2)',
              borderRadius: '10px',
              color: 'var(--text-primary)',
              fontFamily: "'Sora', sans-serif",
              fontSize: '0.9375rem',
              outline: 'none',
              transition: 'all 0.2s ease',
            }}
            onFocus={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px rgba(255, 116, 51, 0.1)'; }}
            onBlur={e => { e.target.style.borderColor = 'rgba(255, 116, 51, 0.2)'; e.target.style.boxShadow = 'none'; }}
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            style={{
              width: '44px', height: '44px',
              background: 'var(--accent)',
              border: 'none',
              borderRadius: '10px',
              color: 'white',
              cursor: loading ? 'not-allowed' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s ease',
              opacity: loading ? 0.5 : 1,
            }}
            onMouseEnter={e => { if (!loading) { e.currentTarget.style.background = 'var(--accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 116, 51, 0.4)'; } }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
