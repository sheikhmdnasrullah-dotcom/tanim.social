'use client';

import { useState } from 'react';

type ThoughtsView = 'list' | 'article';

export function ThoughtsSection() {
  const [view, setView] = useState<ThoughtsView>('list');

  if (view === 'article') {
    return <ArticleView onBack={() => setView('list')} />;
  }

  return (
    <section id="thoughts" style={{ paddingTop: '4.2rem', paddingBottom: '0.6rem' }}>
      <div className="animate-up">
        <article
          onClick={() => setView('article')}
          style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--border)',
            borderRadius: '14px',
            padding: '2rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--text-muted)';
            e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'none';
          }}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, var(--accent), transparent)', opacity: 0 }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem', flexWrap: 'wrap' }}>
            <span style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '0.25rem 0.6rem',
              borderRadius: '5px',
              background: 'rgba(255, 116, 51, 0.08)',
              color: 'var(--accent)',
              border: '1px solid rgba(255, 116, 51, 0.15)',
            }}>Essay</span>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500 }}>· March 2025</span>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500 }}>18 min read</span>
          </div>
          <h2 style={{
            fontFamily: "'Fraunces', serif",
            fontSize: '1.5rem',
            fontWeight: 900,
            color: 'var(--text-primary)',
            marginBottom: '0.65rem',
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
          }}>
            The Remote Headquarters Revolution
          </h2>
          <p style={{
            fontSize: '0.9375rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            marginBottom: '1.25rem',
            fontWeight: 300,
          }}>
            Why AI-Powered Operational Partners Will Replace Traditional Business Models by 2035. The traditional model of building in-house teams is dying, and in its place, a new paradigm is emerging.
          </p>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--accent)' }}>Read article →</span>
          </div>
        </article>
      </div>
    </section>
  );
}

function ArticleView({ onBack }: { onBack: () => void }) {
  const proseStyle = {
    fontSize: '0.965rem' as const,
    color: 'var(--text-secondary)' as const,
    lineHeight: 1.875,
    marginBottom: '1.35rem',
    fontWeight: 300,
  };

  const h2Style = {
    fontFamily: "'Fraunces', serif",
    fontSize: '1.45rem',
    fontWeight: 900,
    color: 'var(--text-primary)',
    letterSpacing: '-0.02em',
    marginTop: '3rem',
    marginBottom: '1rem',
    paddingBottom: '0.6rem',
    borderBottom: '1px solid var(--border)',
  };

  const h3Style = {
    fontFamily: "'Fraunces', serif",
    fontSize: '1.05rem',
    fontWeight: 700,
    color: 'var(--text-primary)',
    marginTop: '2rem',
    marginBottom: '0.65rem',
  };

  const h4Style = {
    fontFamily: "'Sora', sans-serif",
    fontSize: '0.72rem',
    fontWeight: 700,
    color: 'var(--accent)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.1em',
    marginTop: '1.5rem',
    marginBottom: '0.5rem',
  };

  const liStyle = {
    fontSize: '0.94rem',
    color: 'var(--text-secondary)',
    lineHeight: 1.75,
    padding: '0.22rem 0 0.22rem 1.35rem',
    position: 'relative' as const,
    fontWeight: 300,
  };

  const olLiStyle = {
    ...liStyle,
  };

  const breakdown = (title: string, items: [string, string][], hasTotal?: boolean) => (
    <div style={{
      background: 'var(--card-bg)',
      border: '1px solid var(--border)',
      borderRadius: '10px',
      padding: '1.25rem 1.5rem',
      marginBottom: '1.25rem',
    }}>
      <div style={{
        fontFamily: "'Sora', sans-serif",
        fontSize: '0.68rem',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase' as const,
        color: 'var(--accent)',
        marginBottom: '0.85rem',
      }}>{title}</div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map(([label, value], i) => (
          <li key={i} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            gap: '1rem',
            padding: '0.4rem 0',
            borderBottom: i < items.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none',
            fontSize: '0.84rem',
            color: i === items.length - 1 && hasTotal ? 'var(--text-primary)' : 'var(--text-secondary)',
            fontWeight: i === items.length - 1 && hasTotal ? 700 : 300,
            borderTop: i === items.length - 1 && hasTotal ? '1px solid var(--border)' : 'none',
          }}>
            <span>{label}</span>
            <span style={{ color: i === items.length - 1 && hasTotal ? 'var(--accent)' : 'inherit' }}>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="thoughts" style={{ paddingTop: '4.2rem', paddingBottom: '0.6rem' }}>
      <button
        onClick={onBack}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontFamily: "'Sora', sans-serif",
          fontSize: '0.82rem',
          fontWeight: 600,
          color: 'var(--text-muted)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          marginBottom: '2.5rem',
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
      >
        ← Back to Thoughts
      </button>

      <div style={{ maxWidth: '680px' }}>
        {/* Header */}
        <div style={{ marginBottom: '2.5rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{
              fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
              padding: '0.25rem 0.6rem', borderRadius: '5px',
              background: 'rgba(255, 116, 51, 0.08)', color: 'var(--accent)',
              border: '1px solid rgba(255, 116, 51, 0.15)',
            }}>Essay</span>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500 }}>March 2025</span>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500 }}>18 min read</span>
          </div>
          <h1 style={{
            fontFamily: "'Fraunces', serif",
            fontSize: '2.75rem',
            fontWeight: 900,
            color: 'var(--text-primary)',
            letterSpacing: '-0.04em',
            lineHeight: 1.0,
            marginBottom: '0.85rem',
          }}>The Remote Headquarters Revolution</h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300 }}>
            Why AI-Powered Operational Partners Will Replace Traditional Business Models by 2035
          </p>
        </div>

        {/* Callout */}
        <div style={{
          display: 'flex', gap: '1rem',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderLeft: '2px solid rgba(255, 116, 51, 0.62)',
          borderRadius: '6px',
          padding: '1.2rem 1.1rem',
          marginBottom: '2rem',
          fontSize: '0.875rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
          fontWeight: 300,
        }}>
          <div style={{ fontSize: '1.25rem', flexShrink: 0 }}>🏢</div>
          <div><strong>Thesis:</strong> By 2035, most companies will not employ traditional operations teams. Instead, they will subscribe to <strong>Remote Headquarters (Remote HQ)</strong> platforms that combine AI, specialized human expertise, and proprietary technology.</div>
        </div>

        {/* Executive Summary */}
        <h2 style={h2Style}>Executive Summary</h2>
        <p style={proseStyle}>We stand at the precipice of the most significant shift in business operations since the advent of the internet. The traditional model of building in-house teams, renting expensive office space, and managing complex vendor relationships is dying.</p>
        <p style={proseStyle}>In its place, a new paradigm is emerging: the <strong>Remote Headquarters (Remote HQ)</strong> model. These are AI-powered operational partners that serve as an organization's complete back-office, middle-office, and increasingly, front-office operations.</p>
        <p style={proseStyle}>This isn't speculation. The convergence of four massive trends has created the perfect conditions for this transformation:</p>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.35rem' }}>
          {['AI maturation', 'Permanent remote work normalization', 'Service delivery platformization', 'Economic pressure for efficiency'].map(item => (
            <li key={item} style={liStyle}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 700, fontSize: '0.82rem', top: '0.32rem' }}>—</span>
              {item}
            </li>
          ))}
        </ul>
        <p style={proseStyle}>The thesis is simple but profound: <strong>By 2035, most companies will not employ traditional operations teams. Instead, they will subscribe to Remote HQ platforms that combine artificial intelligence, specialized human expertise, and proprietary technology to deliver what previously required dozens of employees.</strong></p>
        <p style={proseStyle}>This article examines why this shift is inevitable, how it will reshape every major industry, and what it means for the future of work itself.</p>
        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '3rem 0' }} />

        {/* Section 1 */}
        <h2 style={h2Style}>1. The Crisis of the Current Model</h2>
        <h3 style={h3Style}>The Broken Economics of Traditional Operations</h3>
        <p style={proseStyle}>Consider the economics of a typical mid-sized company ($10–50M revenue) today.</p>

        {breakdown('Traditional Operational Burden, $25M Revenue Software Company', [
          ['Chief Marketing Officer', '$234,000'],
          ['Marketing Manager', '$110,500'],
          ['2 Content Creators', '$169,000'],
          ['Video Editor', '$84,500'],
          ['2 SDRs (Sales Development Reps)', '$156,000'],
          ['Marketing Operations Specialist', '$97,500'],
          ['Web Developer', '$123,500'],
          ['Data Analyst', '$104,000'],
          ['Subtotal: Direct Compensation', '$1,079,000'],
        ], true)}

        {breakdown('Additional Operational Costs', [
          ['Office space (10 people × $12,000/year)', '$120,000'],
          ['Equipment and technology', '$50,000'],
          ['Software licenses and tools', '$60,000'],
          ['Recruitment and training', '$80,000'],
          ['Management overhead (CEO/COO time)', '$150,000'],
          ['Employee turnover and backfill', '$100,000'],
          ['Total Annual Cost', '$1,639,000'],
        ], true)}

        <h3 style={h3Style}>The Hidden Costs</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.35rem' }}>
          {[
            'Management complexity (coordinating 10 different people)',
            'Knowledge loss when people leave',
            'Misalignment between departments',
            'Time spent in meetings coordinating work',
            'Inefficiency from context-switching',
            'Inconsistent quality across individuals',
            'Limited scalability (each new hire is slow)',
            'Geographic constraints on talent access',
          ].map(item => (
            <li key={item} style={liStyle}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 700, fontSize: '0.82rem', top: '0.32rem' }}>—</span>
              {item}
            </li>
          ))}
        </ul>

        <h3 style={h3Style}>The Compounding Problem</h3>
        <p style={proseStyle}>This isn't just expensive. It's getting worse.</p>
        <ol style={{ listStyle: 'none', padding: 0, marginBottom: '1.35rem', counterReset: 'prose-ol' }}>
          {[
            ['Talent Competition:', 'Average tech worker salary increased 42% from 2019–2024'],
            ['Benefits Escalation:', 'Healthcare, retirement, and other benefits now average 30–35% of salary'],
            ['Office Space:', 'Despite remote work, most companies maintain expensive office footprints ($50–150/sq ft annually in major cities)'],
            ['Turnover Crisis:', 'Average employee tenure in tech is 2.8 years; each replacement costs 6–9 months of salary'],
            ['Coordination Overhead:', 'As teams grow, coordination costs increase exponentially (Brooks\'s Law)'],
          ].map(([label, desc], i) => (
            <li key={i} style={{ ...olLiStyle, counterIncrement: 'prose-ol' }}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 700, fontSize: '0.82rem', top: '0.32rem' }}>{i + 1}.</span>
              <strong>{label}</strong> {desc}
            </li>
          ))}
        </ol>
        <p style={proseStyle}>The result: Companies spend 30–50% of revenue on operations that don't directly create value for customers.</p>

        <h3 style={h3Style}>The Small Business Trap</h3>
        <p style={proseStyle}>The situation is even more dire for smaller companies. A startup with $2M in revenue needs the same operational functions but can't afford dedicated specialists. Founders end up doing marketing, sales, and operations themselves, 80-hour weeks, every week. They hire generalists who aren't expert in anything, outsource to disconnected freelancers across five different platforms, or buy DIY SaaS tools that require expertise to deploy effectively.</p>
        <p style={proseStyle}>The impossible choice: stay small and do everything yourself, or scale and drown in operational complexity.</p>

        <h3 style={h3Style}>Industry-Specific Breaking Points</h3>
        <h4 style={h4Style}>Audit Firms</h4>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.35rem' }}>
          {['Junior auditors cost $65–85K but bill at $150–250/hour','60–70% of audit work is data gathering, document review, and compliance checking','Busy season requires temporary staff, hire, train, manage, lay off, repeatedly'].map(item => (<li key={item} style={liStyle}><span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 700, fontSize: '0.82rem', top: '0.32rem' }}>—</span>{item}</li>))}
        </ul>
        <h4 style={h4Style}>Law Firms</h4>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.35rem' }}>
          {['Associates cost $120–180K but 40% of their time goes to research and administrative tasks','Document management and research tools cost $15–30K per attorney','Billing coordination and admin consume 15–20% of partner time'].map(item => (<li key={item} style={liStyle}><span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 700, fontSize: '0.82rem', top: '0.32rem' }}>—</span>{item}</li>))}
        </ul>
        <h4 style={h4Style}>Video Production Companies</h4>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.35rem' }}>
          {['Full-time editors cost $55–85K but are only 60–70% utilized','Equipment and software licenses add $20–30K per editor annually','Project management and client coordination consume 25–30% of production time'].map(item => (<li key={item} style={liStyle}><span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 700, fontSize: '0.82rem', top: '0.32rem' }}>—</span>{item}</li>))}
        </ul>
        <h4 style={h4Style}>Tech Companies</h4>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.35rem' }}>
          {['Marketing and sales teams represent 40–60% of headcount at growth-stage companies','Each channel requires specialized expertise: SEO, paid, content, social, email','Average company uses 120+ SaaS tools, creating complexity and integration debt'].map(item => (<li key={item} style={liStyle}><span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 700, fontSize: '0.82rem', top: '0.32rem' }}>—</span>{item}</li>))}
        </ul>
        <p style={proseStyle}>The current model is breaking. Companies can feel it. The question isn't whether things will change, but what replaces this broken system.</p>
        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '3rem 0' }} />

        {/* Section 2 */}
        <h2 style={h2Style}>2. What is a Remote Headquarters?</h2>
        <h3 style={h3Style}>Defining the Remote HQ Model</h3>
        <p style={proseStyle}>A Remote Headquarters is an AI-powered operational partner that serves as a company's complete operational infrastructure, combining:</p>
        <ol style={{ listStyle: 'none', padding: 0, marginBottom: '1.35rem', counterReset: 'prose-ol' }}>
          {[
            ['Artificial Intelligence:', 'Autonomous agents handling repetitive, pattern-based, and data-intensive work'],
            ['Global Human Expertise:', 'Specialists distributed worldwide, working asynchronously, coordinated by AI'],
            ['Proprietary Technology:', 'Custom tools, platforms, and workflows optimized for specific operational functions'],
            ['Persistent Memory:', 'Complete context and history of client\'s business, accumulating institutional knowledge'],
            ['Orchestration Layer:', 'Intelligent routing of work between AI and humans based on complexity, stakes, and context'],
          ].map(([label, desc], i) => (
            <li key={i} style={{ ...olLiStyle, counterIncrement: 'prose-ol' }}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 700, fontSize: '0.82rem', top: '0.32rem' }}>{i + 1}.</span>
              <strong>{label}</strong> {desc}
            </li>
          ))}
        </ol>

        <h3 style={h3Style}>What It Is Not</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.35rem' }}>
          {['A traditional outsourcing company (human-only, low-skill, transaction-based)','A staffing agency (provides bodies, not systems)','A SaaS tool (provides software, not execution)','A freelancer marketplace (disconnected individuals, not coordinated teams)','A traditional agency (project-based, expensive, forgets context between engagements)'].map(item => (<li key={item} style={liStyle}><span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 700, fontSize: '0.82rem', top: '0.32rem' }}>—</span>{item}</li>))}
        </ul>

        <h3 style={h3Style}>What It Is</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.35rem' }}>
          {['Your virtual COO + full operational team','Your always-on, always-learning business partner','Your scalable, cost-effective operational infrastructure','Your competitive advantage through superior execution velocity'].map(item => (<li key={item} style={liStyle}><span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 700, fontSize: '0.82rem', top: '0.32rem' }}>—</span>{item}</li>))}
        </ul>

        <h3 style={h3Style}>The Architecture of a Remote HQ</h3>
        <p style={proseStyle}>Think of a Remote HQ as having three interconnected layers.</p>
        <h4 style={h4Style}>Layer 1: The Intelligence Layer (The Brain)</h4>
        <p style={proseStyle}>The AI-powered orchestration system that understands your business deeply, industry, customers, goals, constraints, history. It makes strategic recommendations based on data and context, routes work to the appropriate execution resources, learns continuously from outcomes, and maintains institutional memory that never forgets.</p>
        <h4 style={h4Style}>Layer 2: The Execution Layer (The Hands)</h4>
        <p style={proseStyle}>Where work actually happens, through two pathways. <strong>AI Agents (60–80% of work):</strong> data processing, content creation, video editing, email outreach at scale, report generation, research, CRM management, and scheduling. <strong>Human Specialists (20–40% of work):</strong> complex strategy, high-stakes deliverables, creative direction, client relationship management, and quality assurance.</p>
        <p style={proseStyle}>The division is dynamic. As AI improves, more work shifts from human to AI, improving margins and speed without reducing quality.</p>
        <h4 style={h4Style}>Layer 3: The Integration Layer (The Nervous System)</h4>
        <p style={proseStyle}>Connects the Remote HQ to all client systems: CRM, communication platforms, marketing tools, financial systems, project management, and data warehouses. The result: the Remote HQ has full visibility and can act on any system the client already uses.</p>

        <h3 style={h3Style}>How It Works: A Day in the Life</h3>
        <p style={proseStyle}><strong>6 AM:</strong> Remote HQ AI analyzes overnight data, detects an email deliverability issue, runs a root-cause diagnostic, routes the fix to a technical specialist who resolves the expired DNS record, and sends the client a plain-English summary, before they've had their coffee.</p>
        <p style={proseStyle}><strong>9 AM:</strong> Client asks, "Our sales have been flat for 6 weeks. What's wrong?" AI analyzes the full funnel, identifies that the sales cycle lengthened from 45 to 62 days, traces it to two new lower-priced competitors, and routes execution to produce competitive comparison content and an ROI calculator, within the same afternoon.</p>
        <p style={proseStyle}><strong>2 PM:</strong> Client needs 10 slides for a conference next week. AI reviews past presentations, brand guidelines, and audience context. Generates outline and first draft. Routes to design agent. Delivers in 6 hours, proactively including a relevant case study.</p>
        <p style={proseStyle}><strong>8 PM (automated, nobody asked):</strong> 2,000 cold emails sent. 50 qualification calls made. 12 meetings booked. 100 LinkedIn connection requests sent with personalized messages. 3 social posts published. 2 YouTube videos finished editing. Weekly performance report auto-generated and sent.</p>
        <p style={proseStyle}>This is the power of the Remote HQ model: always working, always learning, always improving.</p>

        <h3 style={h3Style}>The Value Proposition</h3>
        <ol style={{ listStyle: 'none', padding: 0, marginBottom: '1.35rem', counterReset: 'prose-ol' }}>
          {[
            ['Cost efficiency:', '60–85% cheaper than an equivalent in-house team'],
            ['Superior velocity:', '3–5x faster execution, AI doesn\'t sleep, global team works across timezones'],
            ['Expertise access:', 'Top specialists in every domain, on demand'],
            ['Scalability:', 'Instantly scale up or down based on business needs'],
            ['Continuity:', 'Institutional knowledge never walks out the door'],
            ['Strategic partnership:', 'Not just execution, but proactive recommendations and optimization'],
            ['Continuous improvement:', 'AI learns from every project and gets measurably better'],
          ].map(([label, desc], i) => (
            <li key={i} style={{ ...olLiStyle, counterIncrement: 'prose-ol' }}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 700, fontSize: '0.82rem', top: '0.32rem' }}>{i + 1}.</span>
              <strong>{label}</strong> {desc}
            </li>
          ))}
        </ol>
        <p style={proseStyle}>The bottom line: companies get enterprise-grade operational capabilities at startup-level costs, with none of the management burden.</p>
        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '3rem 0' }} />

        {/* Sections 3-7 condensed */}
        <h2 style={h2Style}>3. The Four Converging Forces</h2>
        <h3 style={h3Style}>Force 1: AI Maturation (The Capability Revolution)</h3>
        <p style={proseStyle}>In 2020, AI could classify images and transcribe speech. In 2025, AI can reason, strategize, and make complex decisions through natural language interfaces, with multimodal understanding and autonomous multi-step execution. Content generation required 80% human editing in 2020. By 2025 that's down to 20%. The trajectory is clear: every year, AI handles more complex tasks with higher quality, at lower cost.</p>
        <h3 style={h3Style}>Force 2: Permanent Remote Work Normalization</h3>
        <p style={proseStyle}>Remote work is now the default. This removed the psychological barrier to distributed execution. If internal teams are already remote, the operational partner can be remote too. It unlocked global talent access, asynchronous collaboration, results-based assessment, and a fundamentally transformed cost structure for service delivery.</p>
        <h3 style={h3Style}>Force 3: Service Delivery Platformization</h3>
        <p style={proseStyle}>The market is shifting from fragmented point vendors to integrated platforms: one partner providing all services, unified process and communication, integrated data and insights, and persistent context. Platform economics create winner-take-all dynamics through network effects and compounding economies of scale.</p>
        <h3 style={h3Style}>Force 4: Economic Pressure for Efficiency</h3>
        <p style={proseStyle}>Margin compression is forcing efficiency everywhere. AI-native competitors operate at radically lower cost structures. Remote HQ delivers 40–60% operational cost reduction and 2–3x execution velocity, a performance gap traditional operators cannot close without structural change.</p>
        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '3rem 0' }} />

        <h2 style={h2Style}>4. Why Traditional Models Are Obsolete</h2>
        <h3 style={h3Style}>The Five Fatal Flaws</h3>
        <h4 style={h4Style}>Flaw 1: Fixed Costs in a Variable World</h4>
        <p style={proseStyle}>Traditional employment creates fixed costs regardless of output. Capacity is always mismatched to demand, overstaffed during slow periods, understaffed during peaks. You pay for presence, not performance.</p>
        <h4 style={h4Style}>Flaw 2: The Expertise Paradox</h4>
        <p style={proseStyle}>Modern business needs deep expertise across dozens of specialized domains. Most companies cannot afford full-time specialists for all of them, so they hire generalists and get mediocre results across the board.</p>
        <h4 style={h4Style}>Flaw 3: The Knowledge Loss Crisis</h4>
        <p style={proseStyle}>When employees leave, institutional knowledge walks out the door. Rebuilding productivity after turnover takes months and costs more than the initial hiring expense did. The average tech company faces this every 2.8 years per employee.</p>
        <h4 style={h4Style}>Flaw 4: Coordination Overhead</h4>
        <p style={proseStyle}>Communication channels scale as n(n-1)/2. A 10-person team has 45 communication channels. A 50-person team has 1,225. Most knowledge work time is spent coordinating rather than executing. This overhead is invisible in org charts but devastating in practice.</p>
        <h4 style={h4Style}>Flaw 5: Innovation Stagnation</h4>
        <p style={proseStyle}>Internal teams get entrenched in "the way we've always done it," limiting the continuous optimization that competitive markets demand. The same people doing the same work the same way, quarter after quarter.</p>
        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '3rem 0' }} />

        <h2 style={h2Style}>5. The Remote HQ Model Across Industries</h2>
        <h3 style={h3Style}>Professional Services</h3>
        <p style={proseStyle}><strong>Audit firms:</strong> AI agents automate data gathering, testing, and documentation. Human auditors focus on judgment, client interaction, and reporting. <strong>Law firms:</strong> AI handles document review, research, discovery, and first drafts. Lawyers focus on strategy, negotiation, and courtroom work. <strong>Consulting:</strong> AI performs research, analysis, and deck creation. Consultants focus on workshops, recommendations, and implementation planning. In every case, the ratio of billable output per professional increases dramatically.</p>
        <h3 style={h3Style}>Financial Services</h3>
        <p style={proseStyle}>AI handles transactions, customer support, underwriting, and compliance monitoring at scale. Human specialists handle exceptions, complex relationships, and decisions that require regulatory judgment. The result: dramatically higher client capacity with the same headcount.</p>
        <h3 style={h3Style}>Technology Companies</h3>
        <p style={proseStyle}>AI-powered growth engines automate execution across content, ads, email, social, and analytics. Humans focus on strategy, brand direction, and the high-judgment creative work that differentiates market positioning. Growth velocity increases while headcount stays flat.</p>
        <h3 style={h3Style}>Creative Industries</h3>
        <p style={proseStyle}>AI-first studios automate mechanical editing, formatting, and distribution. Humans focus on storytelling, creative direction, and quality assurance, compressing production timelines from weeks to days, and days to hours.</p>
        <h3 style={h3Style}>Sales Operations</h3>
        <p style={proseStyle}>AI-powered outbound engines scale prospecting, personalization, outreach, and qualification continuously. Humans focus on strategy, VIP accounts, and ongoing optimization. The result: a sales machine that never sleeps, never misses a follow-up, and gets smarter with every campaign.</p>
        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '3rem 0' }} />

        <h2 style={h2Style}>6. The Economic Case</h2>
        <h3 style={h3Style}>The Unit Economics</h3>
        <p style={proseStyle}><strong>Traditional in-house model:</strong> Fully loaded costs run 125–137% of base salary. Productive utilization sits at 60–70%. Scaling is linear, every new output unit requires a new hire, a new onboarding cycle, and a new management overhead.</p>
        <p style={proseStyle}><strong>Remote HQ model:</strong> AI utilization runs 90–95%. Efficiency on repetitive tasks is 5–10x human baseline. Scaling is exponential, capacity grows without proportional cost growth. The comparison, on a unit-economics basis, is not close.</p>
        <h3 style={h3Style}>The Employment Transition</h3>
        <p style={proseStyle}>A major portion of knowledge work will shift from routine execution to strategy, oversight, quality assurance, relationship management, and ethical judgment. The transition will be disruptive. The key question facing societies and policymakers is not whether this happens, but how to manage the pace and distribution of that disruption responsibly.</p>
        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '3rem 0' }} />

        <h2 style={h2Style}>7. The Technology Stack Enabling This Future</h2>
        <h4 style={h4Style}>Layer 1: Foundation Models</h4>
        <p style={proseStyle}>LLMs (Claude, GPT-4, Gemini) provide reasoning, decision-making, and multimodal understanding, the cognitive engine of the entire system.</p>
        <h4 style={h4Style}>Layer 2: Specialized Models</h4>
        <p style={proseStyle}>Computer vision, speech, code generation, and video editing models handle domain-specific work with expert-level output across verticals.</p>
        <h4 style={h4Style}>Layer 3: Orchestration and Memory</h4>
        <p style={proseStyle}>Vector databases, knowledge graphs, and persistent memory systems store business context and institutional knowledge that compounds in value over time.</p>
        <h4 style={h4Style}>Layer 4: Integration and Automation</h4>
        <p style={proseStyle}>APIs, webhooks, RPA, and iPaaS connect systems and execute workflows across any client's existing tool stack, no rip-and-replace required.</p>
        <h4 style={h4Style}>Layer 5: Deployment and Infrastructure</h4>
        <p style={proseStyle}>Cloud compute, GPU infrastructure, monitoring, and security complete the platform, ensuring reliability, compliance, and performance at any scale.</p>
      </div>
    </section>
  );
}
