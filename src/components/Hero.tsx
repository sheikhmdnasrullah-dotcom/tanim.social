"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Hero = () => {
  const rotatingTexts = ["Content Production.", "AI Automation.", "Outbound Systems."];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

  const handleScrollTo = (targetId: string) => {
    const elem = document.getElementById(targetId);
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center pt-24 pb-16">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 border-b border-[#e2e2e2] pb-14 mb-14">
        <div className="flex-1 text-center md:text-left">
          <h1 className="font-syne font-extrabold text-5xl md:text-7xl leading-none tracking-tight mb-4 text-black">
            Nasrullah Tanim
          </h1>
          <div className="text-xl md:text-2xl text-gray-700 font-inter">
            <strong>
              Helping founders with{" "}
              <span className="inline-block relative text-[var(--color-primary)] w-[260px] text-left">
                {rotatingTexts[currentIndex]}
              </span>
            </strong>
          </div>
        </div>
        <div className="w-40 h-40 md:w-48 md:h-48 relative overflow-hidden rounded-full shadow-lg border-4 border-white">
          <Image
            src="/photo.webp"
            alt="Nasrullah Tanim"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 max-w-4xl mx-auto w-full">
        <h2 className="font-inter-tight font-extrabold text-3xl md:text-4xl mb-6 text-black">Who I Am</h2>
        <div className="text-lg text-gray-600 leading-relaxed space-y-4">
          <p>
            I'm Tanim. I love building systems that scale a business. I solve three problems. First, <strong>content</strong>: planning, editing, producing, and distributing video across every major platform. Second, <strong>growth</strong>: engineering cold outreach systems that consistently find and convert the right leads. Third, <strong>operations</strong>: designing custom AI agents and internal workflows that remove the bottlenecks eating up founder time.
          </p>
        </div>
        <div className="mt-10 flex justify-center md:justify-start">
          <button
            onClick={() => handleScrollTo("expertise")}
            className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-semibold py-3 px-8 rounded-full transition-colors shadow-md"
          >
            How I Can Help You Scale
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
