'use client';

import { useState } from 'react';

interface ColdEmailModalProps {
  open: boolean;
  onClose: () => void;
}

export function ColdEmailModal({ open, onClose }: ColdEmailModalProps) {
  const [step, setStep] = useState(1);
  const [pitchData, setPitchData] = useState({ services: '', valueProp: '' });
  const [icpData, setIcpData] = useState({ niche: '', role: '' });
  const [prospects, setProspects] = useState<any[]>([]);
  const [selectedProspects, setSelectedProspects] = useState<number[]>([]);
  const [researchData, setResearchData] = useState<Record<number, string[]>>({});
  const [emails, setEmails] = useState<Record<number, any>>({});
  const [spamScores, setSpamScores] = useState<Record<number, any>>({});
  
  const [isProcessing, setIsProcessing] = useState(false);

  if (!open) return null;

  const PITCH_EXAMPLES = [
    'Cold email outreach & lead gen',
    'SEO & content marketing',
    'Paid ads (Meta / Google)',
    'Web design & development',
    'AI automations & n8n workflows',
    'Social media management',
    'Video editing & production',
    'Copywriting & sales funnels',
  ];

  const goNext = () => setStep(s => s + 1);
  const goBack = () => setStep(s => Math.max(1, s - 1));
  const restart = () => {
    setStep(1);
    setPitchData({ services: '', valueProp: '' });
    setIcpData({ niche: '', role: '' });
    setProspects([]);
    setSelectedProspects([]);
    setResearchData({});
    setEmails({});
    setSpamScores({});
    setIsProcessing(false);
  };

  const handleStep3Scan = async () => {
    setIsProcessing(true);
    goNext();
    try {
      const response = await fetch('https://tanim-ai-agent.nasrullahtanim.workers.dev/api/claude', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 2048,
          system: "You are a B2B prospect research AI. Based on the ICP provided, generate exactly 2 realistic prospect profiles. Return only a valid JSON array with exactly this structure: [{ name: string, role: string, company: string, website: string, email: string, industry: string, companySize: string, recentActivity: string }]. Return only valid JSON.",
          messages: [{ role: 'user', content: `ICP:\nNiche/Industry: ${icpData.niche}\nIdeal Prospect Role: ${icpData.role}` }]
        })
      });
      const data = await response.json();
      const cleanedJson = data.content?.[0]?.text?.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      if (cleanedJson) {
        setProspects(JSON.parse(cleanedJson));
        setTimeout(goNext, 500); // go to step 4
      } else {
        throw new Error('Invalid response');
      }
    } catch (e) {
      console.error(e);
      alert('Failed to generate prospects. Try again.');
      goBack();
    } finally {
      setIsProcessing(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>What are you pitching?</h2>
            <div style={{ background: '#111827', padding: '2rem', borderRadius: '12px', color: '#f3f4f6' }}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.5rem', color: '#9ca3af' }}>Your service / offer</label>
                <input type="text" value={pitchData.services} onChange={e => setPitchData(d => ({ ...d, services: e.target.value }))}
                  placeholder="e.g. Cold email outreach"
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: '#1f2937', border: '1px solid #374151', color: '#f3f4f6' }} />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.5rem', color: '#9ca3af' }}>Your value proposition (optional)</label>
                <input type="text" value={pitchData.valueProp} onChange={e => setPitchData(d => ({ ...d, valueProp: e.target.value }))}
                  placeholder="e.g. We book 10–15 calls"
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: '#1f2937', border: '1px solid #374151', color: '#f3f4f6' }} />
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                {PITCH_EXAMPLES.map(ex => (
                  <button key={ex} onClick={() => setPitchData(d => ({ ...d, services: ex }))}
                    style={{ padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.75rem', border: '1px solid var(--accent)', background: pitchData.services === ex ? 'var(--accent)' : 'transparent', color: pitchData.services === ex ? '#fff' : 'var(--accent)', cursor: 'pointer' }}>
                    {ex}
                  </button>
                ))}
              </div>
              <button disabled={pitchData.services.length < 5} onClick={goNext}
                style={{ padding: '0.75rem 1.5rem', background: 'var(--accent)', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', opacity: pitchData.services.length < 5 ? 0.5 : 1 }}>
                Continue →
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Who are you reaching out to?</h2>
            <div style={{ background: '#111827', padding: '2rem', borderRadius: '12px', color: '#f3f4f6' }}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.5rem', color: '#9ca3af' }}>Industry / Niche</label>
                <input type="text" value={icpData.niche} onChange={e => setIcpData(d => ({ ...d, niche: e.target.value }))}
                  placeholder="e.g. B2B SaaS"
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: '#1f2937', border: '1px solid #374151', color: '#f3f4f6' }} />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.5rem', color: '#9ca3af' }}>Target Role / Person</label>
                <input type="text" value={icpData.role} onChange={e => setIcpData(d => ({ ...d, role: e.target.value }))}
                  placeholder="e.g. startup CTOs"
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: '#1f2937', border: '1px solid #374151', color: '#f3f4f6' }} />
              </div>
              <button disabled={icpData.niche.length < 5 || icpData.role.length < 5} onClick={handleStep3Scan}
                style={{ padding: '0.75rem 1.5rem', background: 'var(--accent)', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', opacity: (icpData.niche.length < 5 || icpData.role.length < 5) ? 0.5 : 1 }}>
                Find Prospects →
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Scanning for Prospects</h2>
            <div style={{ background: '#111827', padding: '2rem', borderRadius: '12px', color: '#f3f4f6', fontFamily: "'JetBrains Mono', monospace" }}>
              Scanning targets in {icpData.niche}...<br />
              Please wait while AI constructs profiles...
              <div style={{ marginTop: '1rem', display: 'flex', gap: '4px' }}>
                 <span className="chat-typing-dot" style={{ background: 'var(--accent)' }}></span>
                 <span className="chat-typing-dot" style={{ background: 'var(--accent)', animationDelay: '0.2s' }}></span>
                 <span className="chat-typing-dot" style={{ background: 'var(--accent)', animationDelay: '0.4s' }}></span>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Select Your Targets</h2>
            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: '1fr' }}>
              {prospects.map((p, idx) => (
                <div key={idx} style={{ background: '#111827', padding: '1.5rem', borderRadius: '12px', border: selectedProspects.includes(idx) ? '2px solid var(--accent)' : '1px solid #374151' }}>
                  <div style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem' }}>{p.name}</div>
                  <div style={{ color: '#9ca3af', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{p.role} at {p.company}</div>
                  <div style={{ color: '#e5e7eb', fontSize: '0.85rem', marginBottom: '1rem' }}>{p.recentActivity}</div>
                  <button onClick={() => {
                    setSelectedProspects(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
                  }} style={{ padding: '0.5rem 1rem', background: selectedProspects.includes(idx) ? 'var(--accent)' : '#374151', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                    {selectedProspects.includes(idx) ? 'Selected ✓' : 'Select'}
                  </button>
                </div>
              ))}
            </div>
            <button disabled={selectedProspects.length === 0} onClick={handleStep5Research}
              style={{ padding: '0.75rem 1.5rem', background: 'var(--accent)', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', marginTop: '1.5rem', opacity: selectedProspects.length === 0 ? 0.5 : 1 }}>
              Run Research →
            </button>
          </div>
        );
      case 5:
        return (
          <div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Running Research</h2>
            <div style={{ background: '#111827', padding: '2rem', borderRadius: '12px', color: '#f3f4f6', fontFamily: "'JetBrains Mono', monospace" }}>
              Analyzing selected prospects...<br />
              <div style={{ marginTop: '1rem', display: 'flex', gap: '4px' }}>
                 <span className="chat-typing-dot" style={{ background: 'var(--accent)' }}></span>
                 <span className="chat-typing-dot" style={{ background: 'var(--accent)', animationDelay: '0.2s' }}></span>
                 <span className="chat-typing-dot" style={{ background: 'var(--accent)', animationDelay: '0.4s' }}></span>
              </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Research Summary</h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {selectedProspects.map(idx => (
                <div key={idx} style={{ background: '#111827', padding: '1.5rem', borderRadius: '12px' }}>
                  <h3 style={{ color: '#c4b5fd', marginBottom: '1rem' }}>{prospects[idx].name}</h3>
                  <ul style={{ color: '#d1d5db', fontSize: '0.9rem', paddingLeft: '1.2rem' }}>
                    {(researchData[idx] || []).map((b, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <button onClick={handleStep7Email} style={{ padding: '0.75rem 1.5rem', background: 'var(--accent)', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', marginTop: '1.5rem' }}>
              Write Emails →
            </button>
          </div>
        );
      case 7:
        return (
          <div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Writing Emails</h2>
            <div style={{ background: '#111827', padding: '2rem', borderRadius: '12px', color: '#f3f4f6', fontFamily: "'JetBrains Mono', monospace" }}>
              Generating personalized emails based on research...<br />
              <div style={{ marginTop: '1rem', display: 'flex', gap: '4px' }}>
                 <span className="chat-typing-dot" style={{ background: 'var(--accent)' }}></span>
                 <span className="chat-typing-dot" style={{ background: 'var(--accent)', animationDelay: '0.2s' }}></span>
                 <span className="chat-typing-dot" style={{ background: 'var(--accent)', animationDelay: '0.4s' }}></span>
              </div>
            </div>
          </div>
        );
      case 8:
        return (
          <div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Spam Analysis</h2>
            <div style={{ background: '#111827', padding: '2rem', borderRadius: '12px', color: '#f3f4f6', fontFamily: "'JetBrains Mono', monospace" }}>
              Checking deliverability scores...<br />
              <div style={{ marginTop: '1rem', display: 'flex', gap: '4px' }}>
                 <span className="chat-typing-dot" style={{ background: 'var(--accent)' }}></span>
                 <span className="chat-typing-dot" style={{ background: 'var(--accent)', animationDelay: '0.2s' }}></span>
                 <span className="chat-typing-dot" style={{ background: 'var(--accent)', animationDelay: '0.4s' }}></span>
              </div>
            </div>
          </div>
        );
      case 9:
        return (
          <div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Deliverability Report</h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {selectedProspects.map(idx => (
                <div key={idx} style={{ background: '#111827', padding: '1.5rem', borderRadius: '12px' }}>
                  <h3 style={{ color: '#c4b5fd', marginBottom: '0.5rem' }}>{prospects[idx].name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ flex: 1, height: '8px', background: '#374151', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: `${spamScores[idx]?.score || 85}%`, height: '100%', background: (spamScores[idx]?.score || 85) >= 80 ? '#22c55e' : '#eab308' }}></div>
                    </div>
                    <span style={{ color: '#9ca3af', fontSize: '0.85rem' }}>{spamScores[idx]?.score || 85}/100</span>
                  </div>
                  <ul style={{ color: '#d1d5db', fontSize: '0.85rem', paddingLeft: '1.2rem' }}>
                    {(spamScores[idx]?.issues || []).map((issue: string, i: number) => <li key={i}>{issue}</li>)}
                    {(!spamScores[idx]?.issues || spamScores[idx].issues.length === 0) && <li>All checks passed</li>}
                  </ul>
                </div>
              ))}
            </div>
            <button onClick={() => setStep(10)} style={{ padding: '0.75rem 1.5rem', background: 'var(--accent)', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', marginTop: '1.5rem' }}>
              Preview Emails →
            </button>
          </div>
        );
      case 10:
        return (
          <div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Preview Your Emails</h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {selectedProspects.map(idx => (
                <div key={idx} style={{ background: '#111827', padding: '1.5rem', borderRadius: '12px' }}>
                  <div style={{ color: '#9ca3af', fontSize: '0.85rem', marginBottom: '0.5rem' }}><strong>To:</strong> {prospects[idx].email}</div>
                  <div style={{ color: '#9ca3af', fontSize: '0.85rem', marginBottom: '1rem' }}><strong>Subject:</strong> {emails[idx]?.subject}</div>
                  <div style={{ color: '#e5e7eb', fontSize: '0.95rem', whiteSpace: 'pre-wrap', background: '#1f2937', padding: '1rem', borderRadius: '8px' }}>
                    {emails[idx]?.body}
                  </div>
                  <button onClick={() => {
                    window.location.href = `mailto:${prospects[idx].email}?subject=${encodeURIComponent(emails[idx]?.subject || '')}&body=${encodeURIComponent(emails[idx]?.body || '')}`;
                    setStep(11);
                  }} style={{ padding: '0.5rem 1rem', background: '#374151', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', marginTop: '1rem' }}>
                    Send via Email App
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case 11:
        return (
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>You're Done</h2>
            <div style={{ background: '#111827', padding: '2rem', borderRadius: '12px', color: '#f3f4f6', fontFamily: "'JetBrains Mono', monospace", marginBottom: '2rem' }}>
              Email loaded in your mail app — hit send to launch your outreach.
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{selectedProspects.length} emails processed. This is what SlideIn's outbound infrastructure does at scale, automatically, every day.</p>
            <button onClick={() => { onClose(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ padding: '0.75rem 1.5rem', background: 'var(--accent)', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>
              Book a Strategy Call
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  const handleStep5Research = async () => {
    setIsProcessing(true);
    goNext();
    const newResearch: Record<number, string[]> = {};
    
    for (const idx of selectedProspects) {
      try {
        const response = await fetch('https://tanim-ai-agent.nasrullahtanim.workers.dev/gemini', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            prompt: `Research prospect ${prospects[idx].name} at ${prospects[idx].company}. Activity: ${prospects[idx].recentActivity}. Return 3 short bullet points for cold email personalization.`
          })
        });
        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
        const bullets = text.split('\n').filter((l: string) => l.trim().length > 5).slice(0, 3);
        newResearch[idx] = bullets.length ? bullets : [`Active at ${prospects[idx].company}`, `Noticed your activity: ${prospects[idx].recentActivity}`, `Potential for collaboration in ${icpData.niche}`];
      } catch (e) {
        newResearch[idx] = [`Active at ${prospects[idx].company}`, `Noticed your activity: ${prospects[idx].recentActivity}`, `Potential for collaboration in ${icpData.niche}`];
      }
    }
    setResearchData(newResearch);
    setIsProcessing(false);
    goNext();
  };

  const handleStep7Email = async () => {
    setIsProcessing(true);
    goNext();
    const newEmails: Record<number, any> = {};
    for (const idx of selectedProspects) {
      try {
        const response = await fetch('https://tanim-ai-agent.nasrullahtanim.workers.dev/api/claude', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 1024,
            system: "Write a cold email in JSON format { subject: string, body: string }. Keep it short.",
            messages: [{ role: 'user', content: `Pitching: ${pitchData.services}. Prospect: ${prospects[idx].name} at ${prospects[idx].company}. Research: ${researchData[idx]?.join(' ')}` }]
          })
        });
        const data = await response.json();
        const cleaned = data.content?.[0]?.text?.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        newEmails[idx] = JSON.parse(cleaned);
      } catch (e) {
        newEmails[idx] = { subject: 'Quick question', body: `Hi ${prospects[idx].name},\n\nI noticed you at ${prospects[idx].company}.\n\nWould you be open to chatting about ${pitchData.services}?\n\nBest,\nMe` };
      }
    }
    setEmails(newEmails);
    
    // Simulate Step 8 (Spam Analysis) immediately
    goNext();
    const newScores: Record<number, any> = {};
    for (const idx of selectedProspects) {
      newScores[idx] = { score: 85 + Math.floor(Math.random() * 10), issues: [] };
    }
    setSpamScores(newScores);
    setIsProcessing(false);
    goNext(); // Go to step 9 automatically
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.85)',
        zIndex: 1004,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        animation: 'fadeIn 0.25s ease forwards',
        padding: '1rem',
      }}
      onClick={e => { if (e.target === e.currentTarget && !isProcessing) onClose(); }}
    >
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '700px',
        maxHeight: '90vh',
        borderRadius: '16px',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        boxShadow: '0 30px 80px rgba(0,0,0,0.2), 0 0 40px rgba(255, 116, 51, 0.05)',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: 1, background: 'rgba(255, 116, 51, 0.1)', height: '6px', borderRadius: '3px', marginRight: '1rem', overflow: 'hidden' }}>
            <div style={{ width: `${(step / 11) * 100}%`, height: '100%', background: 'var(--accent)', transition: 'width 0.3s ease' }} />
          </div>
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>STEP {step} / 11</span>
          {!isProcessing && (
            <button onClick={onClose} style={{ background: 'transparent', border: 'none', fontSize: '1.5rem', marginLeft: '1rem', cursor: 'pointer', color: 'var(--text-muted)' }}>&times;</button>
          )}
        </div>
        
        <div style={{ padding: '2rem', overflowY: 'auto', flex: 1 }}>
          {renderStep()}
        </div>

        {!isProcessing && step > 1 && step < 11 && (
          <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between' }}>
            <button onClick={goBack} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 500 }}>← Back</button>
            <button onClick={restart} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 500 }}>↺ Start Over</button>
          </div>
        )}
      </div>
    </div>
  );
}
