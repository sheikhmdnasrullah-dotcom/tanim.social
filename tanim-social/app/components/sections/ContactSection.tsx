'use client';

import { useState } from 'react';

type QuizAnswer = {
  q1?: string;
  q2?: string;
  q3?: string;
  q4?: string;
};

function getQuizResult(answers: QuizAnswer): string {
  const { q1, q2, q3, q4 } = answers;

  if (q1 === 'Content Output') {
    if (q4 === 'More inbound leads' || q4 === 'More content published') {
      return `Based on your answers, you need a Content Production System. You're spending too much time producing content manually, and it's costing you leads and growth. Here's what I'd build for you: a fully automated content pipeline where you record once and your entire distribution strategy executes automatically. Video editing, social cutting, publishing, and repurposing — all handled. Timeline: 2–3 weeks to deploy. Result: 3–5x more content output with zero additional time from you.`;
    }
    return `You need an Autonomous Content Engine. Your content bottleneck is the #1 thing holding back your growth. I'd build a system where you record once per week and the pipeline handles everything else — editing, social cuts, thumbnails, publishing across all platforms. Zero ongoing input after setup.`;
  }

  if (q1 === 'Lead Generation') {
    return `You need an Outbound Infrastructure System. Cold email done right can generate 10–40 qualified meetings per month on autopilot. I'd set up your entire infrastructure from scratch: domain setup, inbox warming, lead sourcing, sequence writing, and ongoing optimization. Most clients see their first booked meeting within 2 weeks of launch.`;
  }

  if (q1 === 'Internal Operations') {
    if (q2 === '30+ hours' || q2 === '15 to 30 hours') {
      return `You need AI Automation urgently. You're spending 15–30+ hours per week on work that should be automated. I'd map your most time-consuming workflows and build custom AI agents and n8n automations to eliminate them. Typical result: 60–80% reduction in repetitive task time within the first month.`;
    }
    return `You need AI-Powered Workflow Automation. Your internal operations are creating unnecessary friction. I'd audit your current workflows, identify the biggest time drains, and build custom automation that eliminates them permanently. You focus on strategy. The systems handle the rest.`;
  }

  if (q1 === 'All Three') {
    return `You need the full Remote HQ stack. You're at a scale where all three pillars — content, outbound, and operations — need to be systematized simultaneously. I'd build an integrated system that operates like a full back-office: content engine running autonomously, outbound generating qualified leads daily, and AI workflows eliminating operational drag. This is the infrastructure that lets you scale without hiring.`;
  }

  return `Based on your situation, I'd recommend starting with a strategy call where we map your current bottlenecks and design a system that addresses all of them in priority order. Every business has a different constraint. Let's find yours.`;
}

export function ContactSection() {
  const [quizStep, setQuizStep] = useState(1);
  const [answers, setAnswers] = useState<QuizAnswer>({});
  const [quizDone, setQuizDone] = useState(false);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const progress = quizDone ? 100 : ((quizStep - 1) / 4) * 100;

  const handleAnswer = (question: keyof QuizAnswer, answer: string) => {
    const newAnswers = { ...answers, [question]: answer };
    setAnswers(newAnswers);
    if (quizStep < 4) {
      setQuizStep(s => s + 1);
    } else {
      setQuizDone(true);
    }
  };

  const restartQuiz = () => {
    setQuizStep(1);
    setAnswers({});
    setQuizDone(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setFormStatus('error');
      return;
    }
    const subject = encodeURIComponent('Portfolio Contact from ' + name);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:nasrullahtanim@gmail.com?subject=${subject}&body=${body}`;
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 6000);
  };

  const quizOptions = [
    { step: 1, q: 'q1' as const, label: 'What is your biggest bottleneck right now?', options: ['Content Output', 'Lead Generation', 'Internal Operations', 'All Three'] },
    { step: 2, q: 'q2' as const, label: 'How many hours per week do you personally spend on this?', options: ['Under 5 hours', '5 to 15 hours', '15 to 30 hours', '30+ hours'] },
    { step: 3, q: 'q3' as const, label: 'What have you already tried?', options: ['Hiring freelancers', 'Buying SaaS tools', 'Building in-house', 'Nothing yet'] },
    { step: 4, q: 'q4' as const, label: 'What outcome matters most to you?', options: ['More inbound leads', 'More content published', 'More time back', 'Faster business growth'] },
  ];

  const currentQ = quizOptions[quizStep - 1];

  return (
    <section id="contact" style={{ paddingTop: '5.4rem', position: 'relative' }}>
      {/* Ops Quiz */}
      <div className="animate-up" style={{ margin: '4rem 0 3rem', padding: '3rem 0' }}>
        <h2 style={{
          fontFamily: "'JetBrains Mono', 'Courier New', monospace",
          fontSize: '1.5rem',
          fontWeight: 600,
          color: 'var(--accent)',
          letterSpacing: '0.02em',
          marginBottom: '2rem',
        }}>
          // WHAT DOES YOUR BUSINESS ACTUALLY NEED?
        </h2>

        <div style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          padding: '2.5rem',
          boxShadow: 'var(--shadow-lg)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Progress bar */}
          <div style={{
            position: 'absolute', top: 0, left: 0,
            height: '4px',
            width: `${progress}%`,
            background: 'linear-gradient(90deg, var(--accent), #e55f1f)',
            transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 0 10px rgba(255, 116, 51, 0.4)',
          }} />

          {!quizDone ? (
            <div style={{ minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', animation: 'quizFadeIn 0.5s ease' }}>
              <h3 style={{
                fontFamily: "'Fraunces', serif",
                fontSize: '1.4rem',
                fontWeight: 900,
                color: 'var(--text-primary)',
                marginBottom: '2rem',
                lineHeight: 1.3,
              }}>
                {currentQ.label}
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
              }} className="quiz-options-grid">
                {currentQ.options.map(option => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(currentQ.q, option)}
                    style={{
                      padding: '1.25rem 1.5rem',
                      background: 'rgba(0,0,0,0.02)',
                      border: '2px solid var(--border)',
                      borderRadius: '8px',
                      color: 'var(--text-secondary)',
                      fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      textAlign: 'left',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'var(--accent)';
                      e.currentTarget.style.background = 'rgba(255, 116, 51, 0.05)';
                      e.currentTarget.style.color = 'var(--accent)';
                      e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 116, 51, 0.15)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                      e.currentTarget.style.background = 'rgba(0,0,0,0.02)';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.transform = 'none';
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div style={{ minHeight: '300px', animation: 'quizFadeIn 0.5s ease' }}>
              <div style={{
                padding: '2rem',
                background: 'rgba(0,0,0,0.02)',
                border: '1px solid rgba(255, 116, 51, 0.2)',
                borderRadius: '8px',
                fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                fontSize: '0.95rem',
                lineHeight: 1.8,
                color: 'var(--text-primary)',
                marginBottom: '2rem',
              }}>
                {getQuizResult(answers)}
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href="mailto:nasrullahtanim@gmail.com?subject=Book%20a%20Strategy%20Call"
                  style={{
                    flex: 1,
                    padding: '1rem 2rem',
                    background: 'linear-gradient(135deg, var(--accent), #e55f1f)',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(255, 116, 51, 0.3)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}
                >
                  // Book a Call
                </a>
                <button
                  onClick={restartQuiz}
                  style={{
                    padding: '1rem 2rem',
                    background: 'rgba(255,255,255,0.6)',
                    border: '2px solid var(--border)',
                    borderRadius: '8px',
                    color: 'var(--text-secondary)',
                    fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                >
                  // Retake Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Contact Section */}
      <div className="animate-up">
        <h1 style={{
          fontFamily: "'Fraunces', serif",
          fontSize: 'clamp(2.4rem, 4.2vw, 3.6rem)',
          fontWeight: 900,
          color: 'var(--text-primary)',
          letterSpacing: '-0.022em',
          lineHeight: 1.02,
          marginBottom: '0.5rem',
        }}>
          Let&apos;s build something.
        </h1>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.4fr',
        gap: '2.5rem',
        marginTop: '0.5rem',
      }} className="contact-grid">
        {/* Info */}
        <div className="animate-up">
          {[
            {
              icon: '📧',
              label: 'Email',
              content: (
                <>
                  <a href="mailto:nasrullahtanim@gmail.com" style={{ color: 'var(--text-secondary)', display: 'block' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >nasrullahtanim@gmail.com</a>
                  <a href="mailto:hello@tanim.social" style={{ color: 'var(--text-secondary)', display: 'block' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >hello@tanim.social</a>
                </>
              ),
            },
            {
              icon: '🔗',
              label: 'LinkedIn',
              content: (
                <a href="https://www.linkedin.com/in/sheikh-md-nasrullah-910b203b3/" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >Sheikh Md Nasrullah</a>
              ),
            },
            {
              icon: '🌐',
              label: 'Website',
              content: (
                <a href="https://slideinventure.com" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >slideinventure.com</a>
              ),
            },
          ].map(({ icon, label, content }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem', marginBottom: '1.75rem' }}>
              <div style={{
                fontSize: '1.1rem',
                flexShrink: 0,
                width: '40px',
                height: '40px',
                background: 'rgba(255, 116, 51, 0.08)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>{icon}</div>
              <div>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                  {label}
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  {content}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="animate-up">
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { id: 'contactName', label: 'Name', type: 'text', key: 'name', placeholder: '// your name' },
              { id: 'contactEmail', label: 'Email', type: 'email', key: 'email', placeholder: '// your@email.com' },
            ].map(({ id, label, type, key, placeholder }) => (
              <div key={id} style={{ position: 'relative' }}>
                <label htmlFor={id} style={{ display: 'block', fontSize: '0.76rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem', letterSpacing: '0.02em' }}>
                  {label}
                </label>
                <input
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  value={formData[key as 'name' | 'email']}
                  onChange={e => setFormData(d => ({ ...d, [key]: e.target.value }))}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    fontFamily: "'JetBrains Mono', 'Inter', monospace",
                    fontSize: '0.875rem',
                    color: 'var(--text-primary)',
                    background: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 116, 51, 0.2)',
                    borderRadius: '10px',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onFocus={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 20px rgba(255, 116, 51, 0.15), 0 0 0 3px rgba(255, 116, 51, 0.08)'; }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(255, 116, 51, 0.2)'; e.target.style.boxShadow = 'none'; }}
                />
              </div>
            ))}
            <div style={{ position: 'relative' }}>
              <label htmlFor="contactMessage" style={{ display: 'block', fontSize: '0.76rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem', letterSpacing: '0.02em' }}>
                Message
              </label>
              <textarea
                id="contactMessage"
                placeholder="// tell me about what you're building and what bottleneck you're trying to solve..."
                value={formData.message}
                onChange={e => setFormData(d => ({ ...d, message: e.target.value }))}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  fontFamily: "'JetBrains Mono', 'Inter', monospace",
                  fontSize: '0.875rem',
                  color: 'var(--text-primary)',
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 116, 51, 0.2)',
                  borderRadius: '10px',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  resize: 'vertical',
                  minHeight: '140px',
                }}
                onFocus={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 20px rgba(255, 116, 51, 0.15), 0 0 0 3px rgba(255, 116, 51, 0.08)'; }}
                onBlur={e => { e.target.style.borderColor = 'rgba(255, 116, 51, 0.2)'; e.target.style.boxShadow = 'none'; }}
              />
            </div>
            <button
              type="submit"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.8rem 1.75rem',
                fontFamily: "'Sora', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 700,
                color: 'var(--accent)',
                background: 'transparent',
                border: '2px solid var(--accent)',
                borderRadius: '10px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                alignSelf: 'flex-start',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.background = 'var(--accent)';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 116, 51, 0.3), 0 4px 20px rgba(255, 116, 51, 0.2)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--accent)';
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'none';
              }}
            >
              Send message
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>

            {formStatus === 'success' && (
              <div style={{ fontSize: '0.82rem', padding: '0.65rem 1rem', borderRadius: '8px', background: 'rgba(34,197,94,0.08)', color: '#16a34a', border: '1px solid rgba(34,197,94,0.18)' }}>
                Opening your email client… If nothing happens, email nasrullahtanim@gmail.com directly.
              </div>
            )}
            {formStatus === 'error' && (
              <div style={{ fontSize: '0.82rem', padding: '0.65rem 1rem', borderRadius: '8px', background: 'rgba(239,68,68,0.08)', color: '#ef4444', border: '1px solid rgba(239,68,68,0.18)' }}>
                Please fill in all fields.
              </div>
            )}
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .quiz-options-grid { grid-template-columns: 1fr !important; }
        }
        @keyframes quizFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
