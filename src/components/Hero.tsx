"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const rotatingTexts = ["Content Production.", "Outreach Systems.", "AI Automation."];

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
    <section id="home" className="section pt-32 md:pt-40">
      <div className="container-page">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-16">
          <div className="flex-1 max-w-2xl">
            <span className="eyebrow">Content · Outreach · Automation</span>
            <h1 className="font-syne font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-black mb-5">
              Nasrullah Tanim
            </h1>
            <p className="text-xl md:text-2xl text-black/70 leading-snug mb-8">
              Helping founders with{" "}
              <span
                className="inline-block font-medium"
                style={{ color: "var(--color-primary)" }}
              >
                {rotatingTexts[currentIndex]}
              </span>
            </p>
            <p className="body-lg max-w-xl mb-10">
              I build the systems that let a founder scale without hiring a team first:
              content that publishes itself, outreach that fills the pipeline, and
              automation that removes the busywork in between.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button onClick={() => handleScrollTo("system")} className="btn-accent">
                See how it works
              </button>
              <button onClick={() => handleScrollTo("contact")} className="link-arrow">
                Get in touch <span aria-hidden>&rarr;</span>
              </button>
            </div>
          </div>

          <div className="w-28 h-28 md:w-36 md:h-36 relative overflow-hidden rounded-full ring-1 ring-black/10 shrink-0 order-first md:order-last">
            <Image src="/photo.webp" alt="Nasrullah Tanim" fill className="object-cover" priority />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
