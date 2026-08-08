"use client";
import React, { useState } from "react";

const Thoughts = () => {
  const [activeArticle, setActiveArticle] = useState<string | null>(null);

  const handleScrollToTop = () => {
    const elem = document.getElementById("thoughts");
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="thoughts" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Thoughts List */}
        {!activeArticle && (
          <div>
            <div className="text-center mb-16">
              <h2 className="font-inter-tight font-extrabold text-4xl md:text-5xl text-black">Thoughts</h2>
              <p className="text-gray-600 mt-4 text-lg">Essays on operations, growth, and AI.</p>
            </div>
            
            <div 
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer group"
              onClick={() => { setActiveArticle("remote-hq"); handleScrollToTop(); }}
            >
              <div className="flex items-center gap-4 text-sm font-medium text-gray-500 mb-4">
                <span className="bg-[var(--color-primary)] text-white px-3 py-1 rounded-full text-xs">Essay</span>
                <span>March 2025</span>
                <span>18 min read</span>
              </div>
              <h3 className="font-inter-tight font-bold text-2xl md:text-3xl text-black mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                The Remote Headquarters Revolution
              </h3>
              <p className="text-gray-600 mb-6 line-clamp-2">
                Why AI-Powered Operational Partners Will Replace Traditional Business Models by 2035. The traditional model of building in-house teams is dying, and in its place, a new paradigm is emerging.
              </p>
              <div className="font-medium text-[var(--color-primary)] flex items-center gap-2">
                Read article <span>→</span>
              </div>
            </div>
          </div>
        )}

        {/* Article View */}
        {activeArticle === "remote-hq" && (
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            <button 
              onClick={() => { setActiveArticle(null); handleScrollToTop(); }}
              className="mb-10 text-gray-500 hover:text-[var(--color-primary)] font-medium flex items-center gap-2 transition-colors"
            >
              ← Back to Thoughts
            </button>

            <div className="mb-12 border-b border-gray-100 pb-10">
              <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-500 mb-6">
                <span className="bg-[var(--color-primary)] text-white px-3 py-1 rounded-full text-xs">Essay</span>
                <span>March 2025</span>
                <span>18 min read</span>
              </div>
              <h1 className="font-inter-tight font-extrabold text-4xl md:text-5xl text-black mb-4 leading-tight">
                The Remote Headquarters Revolution
              </h1>
              <p className="text-xl text-gray-500 font-inter">
                Why AI-Powered Operational Partners Will Replace Traditional Business Models by 2035
              </p>
            </div>

            <div className="prose prose-lg max-w-none prose-headings:font-inter-tight prose-headings:font-bold prose-headings:text-black prose-p:text-gray-700 prose-a:text-[var(--color-primary)] prose-strong:text-black prose-li:text-gray-700">
              <div className="bg-[var(--color-background)] border-l-4 border-[var(--color-primary)] p-6 rounded-r-xl mb-10 text-gray-800">
                <div className="text-2xl mb-2">🏢</div>
                <div><strong>Thesis:</strong> By 2035, most companies will not employ traditional operations teams. Instead, they will subscribe to <strong>Remote Headquarters (Remote HQ)</strong> platforms that combine AI, specialized human expertise, and proprietary technology.</div>
              </div>

              <h2 className="text-2xl mt-10 mb-4">Executive Summary</h2>
              <p>We stand at the precipice of the most significant shift in business operations since the advent of the internet. The traditional model of building in-house teams, renting expensive office space, and managing complex vendor relationships is dying.</p>
              <p>In its place, a new paradigm is emerging: the <strong>Remote Headquarters (Remote HQ)</strong> model. These are AI-powered operational partners that serve as an organization's complete back-office, middle-office, and increasingly, front-office operations.</p>
              <p>This isn't speculation. The convergence of four massive trends has created the perfect conditions for this transformation:</p>
              <ul>
                <li>AI maturation</li>
                <li>Permanent remote work normalization</li>
                <li>Service delivery platformization</li>
                <li>Economic pressure for efficiency</li>
              </ul>
              <p>The thesis is simple but profound: <strong>By 2035, most companies will not employ traditional operations teams. Instead, they will subscribe to Remote HQ platforms that combine artificial intelligence, specialized human expertise, and proprietary technology to deliver what previously required dozens of employees.</strong></p>
              <p>This article examines why this shift is inevitable, how it will reshape every major industry, and what it means for the future of work itself.</p>

              <hr className="my-12 border-gray-200" />

              <h2 className="text-2xl mt-10 mb-4">1. The Crisis of the Current Model</h2>
              <h3 className="text-xl mt-6 mb-3">The Broken Economics of Traditional Operations</h3>
              <p>Consider the economics of a typical mid-sized company ($10–50M revenue) today.</p>

              <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl my-8">
                <div className="font-bold text-black mb-4 pb-2 border-b border-gray-200">Traditional Operational Burden, $25M Revenue Software Company</div>
                <ul className="space-y-2 list-none p-0 m-0">
                  <li className="flex justify-between"><span>Chief Marketing Officer</span><span className="font-medium">$234,000</span></li>
                  <li className="flex justify-between"><span>Marketing Manager</span><span className="font-medium">$110,500</span></li>
                  <li className="flex justify-between"><span>2 Content Creators</span><span className="font-medium">$169,000</span></li>
                  <li className="flex justify-between"><span>Video Editor</span><span className="font-medium">$84,500</span></li>
                  <li className="flex justify-between"><span>2 SDRs (Sales Development Reps)</span><span className="font-medium">$156,000</span></li>
                  <li className="flex justify-between"><span>Marketing Operations Specialist</span><span className="font-medium">$97,500</span></li>
                  <li className="flex justify-between"><span>Web Developer</span><span className="font-medium">$123,500</span></li>
                  <li className="flex justify-between"><span>Data Analyst</span><span className="font-medium">$104,000</span></li>
                  <li className="flex justify-between pt-2 mt-2 border-t border-gray-200 font-bold text-black"><span>Subtotal: Direct Compensation</span><span>$1,079,000</span></li>
                </ul>
              </div>

              <h3 className="text-xl mt-6 mb-3">The Compounding Problem</h3>
              <p>This isn't just expensive. It's getting worse.</p>
              <ol className="list-decimal pl-5 space-y-2">
                <li><strong>Talent Competition:</strong> Average tech worker salary increased 42% from 2019–2024</li>
                <li><strong>Benefits Escalation:</strong> Healthcare, retirement, and other benefits now average 30–35% of salary</li>
                <li><strong>Office Space:</strong> Despite remote work, most companies maintain expensive office footprints</li>
                <li><strong>Turnover Crisis:</strong> Average employee tenure in tech is 2.8 years; each replacement costs 6–9 months of salary</li>
                <li><strong>Coordination Overhead:</strong> As teams grow, coordination costs increase exponentially (Brooks's Law)</li>
              </ol>

              <hr className="my-12 border-gray-200" />

              <h2 className="text-2xl mt-10 mb-4">2. What is a Remote Headquarters?</h2>
              <p>A Remote Headquarters is an AI-powered operational partner that serves as a company's complete operational infrastructure, combining:</p>
              <ol className="list-decimal pl-5 space-y-2">
                <li><strong>Artificial Intelligence:</strong> Autonomous agents handling repetitive, pattern-based, and data-intensive work</li>
                <li><strong>Global Human Expertise:</strong> Specialists distributed worldwide, working asynchronously, coordinated by AI</li>
                <li><strong>Proprietary Technology:</strong> Custom tools, platforms, and workflows optimized for specific operational functions</li>
                <li><strong>Persistent Memory:</strong> Complete context and history of client's business, accumulating institutional knowledge</li>
                <li><strong>Orchestration Layer:</strong> Intelligent routing of work between AI and humans based on complexity, stakes, and context</li>
              </ol>

              <h3 className="text-xl mt-8 mb-3">The Value Proposition</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Cost efficiency:</strong> 60–85% cheaper than an equivalent in-house team</li>
                <li><strong>Superior velocity:</strong> 3–5x faster execution, AI doesn't sleep, global team works across timezones</li>
                <li><strong>Expertise access:</strong> Top specialists in every domain, on demand</li>
                <li><strong>Scalability:</strong> Instantly scale up or down based on business needs</li>
                <li><strong>Continuity:</strong> Institutional knowledge never walks out the door</li>
              </ul>
              <p className="mt-6 font-medium">The bottom line: companies get enterprise-grade operational capabilities at startup-level costs, with none of the management burden.</p>

            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Thoughts;
