"use client";
import React, { useState } from "react";

type Pillar = {
  id: string;
  index: string;
  name: string;
  tagline: string;
  process: string[];
  output: string;
  value: string;
  cta: { label: string; href: string };
};

const pillars: Pillar[] = [
  {
    id: "content",
    index: "01",
    name: "Content Systems",
    tagline: "Plan it once. Publish everywhere.",
    process: [
      "Ideation, research & scripting",
      "Video & podcast editing",
      "Shorts, reels & thumbnails",
      "Multi-platform distribution",
    ],
    output: "A content pipeline that runs without you in the edit bay.",
    value: "Consistent presence, zero founder hours spent editing.",
    cta: { label: "See the work", href: "#work" },
  },
  {
    id: "outreach",
    index: "02",
    name: "Outreach Systems",
    tagline: "Find the right people. Start real conversations.",
    process: [
      "ICP definition & lead research",
      "Deliverability-safe email infrastructure",
      "Personalized sequence design",
      "Testing, monitoring & follow-up",
    ],
    output: "An inbox of qualified conversations, running on autopilot.",
    value: "Predictable pipeline without a sales team.",
    cta: { label: "Send a live cold email", href: "mailto:nasrullahtanim@gmail.com?subject=Hey%20Tanim%2C%20saw%20your%20site" },
  },
  {
    id: "automation",
    index: "03",
    name: "AI & Automation",
    tagline: "Remove the busywork for good.",
    process: [
      "Map the manual workflow",
      "Build the n8n workflow or agent",
      "Wire it into your existing tools",
      "Monitor, refine & hand off",
    ],
    output: "Custom agents and workflows doing the repetitive work.",
    value: "Hours back in the founder's week, every week.",
    cta: { label: "Get in touch", href: "#contact" },
  },
];

const System = () => {
  const [activeId, setActiveId] = useState(pillars[0].id);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="system" className="section">
      <div className="container-page">
        <div className="max-w-2xl mb-16 md:mb-20">
          <span className="eyebrow">The System</span>
          <h2 className="h2 mb-4">How the work actually happens</h2>
          <p className="body-lg">
            Three connected systems. Each one takes a raw input and returns a
            business outcome &mdash; open one to see how it runs end to end.
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute left-[19px] top-2 bottom-2 w-px bg-black/10"
            aria-hidden
          />

          {pillars.map((pillar) => {
            const isActive = activeId === pillar.id;
            return (
              <div key={pillar.id} className="relative flex gap-5 md:gap-8">
                <div className="pt-1">
                  <span
                    className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full border font-mono text-xs shrink-0 transition-colors duration-300 ${
                      isActive
                        ? "bg-black border-black text-white"
                        : "bg-[var(--color-background)] border-black/15 text-black/40"
                    }`}
                  >
                    {pillar.index}
                  </span>
                </div>

                <div className="flex-1 pb-10">
                  <button
                    onClick={() => setActiveId(isActive ? "" : pillar.id)}
                    aria-expanded={isActive}
                    className="w-full flex items-center justify-between gap-4 text-left py-1.5 group"
                  >
                    <span>
                      <span
                        className={`block font-sans font-bold text-xl md:text-2xl transition-colors ${
                          isActive ? "text-black" : "text-black/70 group-hover:text-black"
                        }`}
                      >
                        {pillar.name}
                      </span>
                      <span className="block text-sm md:text-base text-black/45 mt-1">
                        {pillar.tagline}
                      </span>
                    </span>
                    <span
                      className={`shrink-0 w-6 h-6 rounded-full border border-black/15 flex items-center justify-center text-black/50 transition-transform duration-300 ${
                        isActive ? "rotate-45" : ""
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-editorial ${
                      isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-6 grid sm:grid-cols-2 gap-8">
                        <div>
                          <span className="eyebrow mb-3">Process</span>
                          <ol className="space-y-2.5">
                            {pillar.process.map((step, i) => (
                              <li key={step} className="flex items-baseline gap-3 text-sm text-black/70">
                                <span className="font-mono text-xs text-black/30 w-4 shrink-0">{i + 1}</span>
                                {step}
                              </li>
                            ))}
                          </ol>
                        </div>
                        <div className="flex flex-col justify-between gap-6">
                          <div>
                            <span className="eyebrow mb-3">Output</span>
                            <p className="text-sm text-black/70 mb-5">{pillar.output}</p>
                            <span className="eyebrow mb-3">Business Value</span>
                            <p className="text-sm font-medium text-black">{pillar.value}</p>
                          </div>
                          <a
                            href={pillar.cta.href}
                            onClick={(e) => handleClick(e, pillar.cta.href)}
                            className="link-arrow"
                          >
                            {pillar.cta.label} <span aria-hidden>&rarr;</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default System;
