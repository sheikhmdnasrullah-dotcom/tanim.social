"use client";
import React from "react";

const Expertise = () => {
  return (
    <section id="expertise" className="py-24">
      <div className="text-center mb-16">
        <h2 className="font-inter-tight font-extrabold text-4xl md:text-5xl text-black">Expertise</h2>
        <p className="text-gray-600 mt-4 text-lg">How I can help you scale your business</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-4xl">🎬</div>
            <h3 className="font-inter-tight font-bold text-2xl text-black">Content Production at Scale</h3>
          </div>
          <p className="text-gray-600 mb-6">
            Premium video editing, podcast production, and social media management that runs like clockwork. From raw footage to published content across every platform, without you touching a thing.
          </p>
          <ul className="space-y-2 mb-8 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-primary)]">✓</span> Video editing and post-production
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-primary)]">✓</span> Podcast editing and production
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-primary)]">✓</span> Shorts, Reels, and TikTok optimization
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-primary)]">✓</span> Thumbnail design and brand systems
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-primary)]">✓</span> Content distribution workflows
            </li>
          </ul>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-medium py-2 px-6 rounded-full transition-colors">
              View Portfolio
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-6 rounded-full transition-colors">
              Service Explained
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-4xl">📧</div>
            <h3 className="font-inter-tight font-bold text-2xl text-black">Outbound Infrastructure</h3>
          </div>
          <p className="text-gray-600 mb-6">
            Compliance-first cold email systems engineered to land in inboxes, not spam folders. Full infrastructure from DNS setup to sequence optimization, built to generate pipeline on autopilot.
          </p>
          <ul className="space-y-2 mb-8 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-primary)]">✓</span> Cold email infrastructure and DNS setup
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-primary)]">✓</span> Deliverability optimization
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-primary)]">✓</span> Lead sourcing and ICP framework
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-primary)]">✓</span> Email sequence design and A/B testing
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-primary)]">✓</span> Performance monitoring
            </li>
          </ul>
          <div className="flex flex-col gap-4">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-6 rounded-full transition-colors self-start">
              Service Explained
            </button>
            <button className="bg-black text-white hover:bg-gray-800 font-medium py-3 px-6 rounded-xl transition-colors w-full flex items-center justify-center gap-2">
              // Send a Cold Email Right Now
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-4xl">🤖</div>
            <h3 className="font-inter-tight font-bold text-2xl text-black">AI-Powered Automation</h3>
          </div>
          <p className="text-gray-600 mb-6">
            Custom n8n workflows and AI agents that handle repetitive work so you never have to touch it again. Built around how your specific business actually operates.
          </p>
          <ul className="space-y-2 mb-8 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-primary)]">✓</span> n8n workflow development
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-primary)]">✓</span> AI agent development for custom ops
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-primary)]">✓</span> Lead research and qualification
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-primary)]">✓</span> CRM automation and data processing
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-primary)]">✓</span> Custom integrations via APIs
            </li>
          </ul>
          <div className="flex flex-wrap gap-4">
            <button className="bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium py-2 px-4 rounded-full transition-colors flex items-center gap-2 text-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              Try Custom Chat Agent
            </button>
            <button className="bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium py-2 px-4 rounded-full transition-colors flex items-center gap-2 text-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
              Try Voice Agent
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-4xl">🚀</div>
            <h3 className="font-inter-tight font-bold text-2xl text-black">Autonomous Content Engine</h3>
          </div>
          <p className="text-gray-600 mb-6">
            Fully autonomous content production system where a founder records once and the entire pipeline runs on its own. Script writing, strategy, editing, and publishing handled without touching anything again.
          </p>
          <ul className="space-y-2 mb-8 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-primary)]">✓</span> AI-powered script writing
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-primary)]">✓</span> Automated video editing
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-primary)]">✓</span> Custom AI voice and avatars
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-primary)]">✓</span> Full publishing pipeline
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-primary)]">✓</span> Zero ongoing input required
            </li>
          </ul>
          <div>
            <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-medium py-2 px-6 rounded-full transition-colors">
              View Example
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
