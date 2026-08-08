"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const rotatingTexts = ["Content Production.", "Outreach Systems.", "AI Automation."];

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sheikh-md-nasrullah-910b203b3/",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:nasrullahtanim@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="section pt-32 md:pt-40 relative"
      style={{
        backgroundImage:
          "radial-gradient(rgba(10,10,10,0.06) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        backgroundPosition: "-12px -12px",
      }}
    >
      <div className="container-page">
        <div className="max-w-2xl mb-20 md:mb-28">
          <span className="eyebrow">Content · Outreach · Automation</span>
          <h1 className="font-heading italic font-normal text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight text-black mb-6">
            Helping founders with{" "}
            <span style={{ color: "var(--color-primary)" }}>
              {rotatingTexts[currentIndex]}
            </span>
          </h1>
          <p className="body-lg max-w-xl">
            I build the systems that let a founder scale without hiring a team
            first: content that publishes itself, outreach that fills the
            pipeline, and automation that removes the busywork in between.
          </p>
        </div>

        {/* Bento profile grid */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-4xl">
          {/* Left: portrait card */}
          <div className="flex flex-col gap-6">
            <div
              className="relative w-full max-w-xs aspect-[4/5] rounded-3xl overflow-hidden border"
              style={{
                borderColor: "rgba(255,255,255,0.8)",
                boxShadow: "0 20px 40px -15px rgba(0,0,0,0.07)",
              }}
            >
              <Image
                src="/photo.webp"
                alt="Nasrullah Tanim"
                fill
                className="object-cover"
                priority
              />
              <span
                className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center ring-4 ring-white"
                aria-label="Verified"
                title="Verified"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-white stroke-[3]">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
            <div>
              <p className="font-heading italic font-normal text-3xl text-black">
                Nasrullah Tanim
              </p>
              <p className="text-black/50 text-sm mt-1">
                Content Production &middot; Outreach &middot; AI Automation
              </p>
            </div>
          </div>

          {/* Right: action & contact stack */}
          <div className="flex flex-col gap-4 max-w-sm">
            <button
              onClick={() => handleScrollTo("contact")}
              className="btn-accent-glow w-full"
            >
              Book a call <span aria-hidden>&rarr;</span>
            </button>

            <a href="mailto:nasrullahtanim@gmail.com" className="pill-card group">
              <span className="flex items-center gap-3 min-w-0">
                <span className="icon-badge">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-black truncate">
                  nasrullahtanim@gmail.com
                </span>
              </span>
              <span className="link-arrow shrink-0 text-sm">
                Send <span aria-hidden>&rarr;</span>
              </span>
            </a>

            <div className="grid grid-cols-2 gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="social-card"
                >
                  <span className="social-card-icon">{social.icon}</span>
                  <span className="text-xs font-medium text-black/50">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
