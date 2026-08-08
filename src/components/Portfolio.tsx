"use client";
import React, { useState } from "react";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState<"podcast" | "reel">("podcast");

  const podcastVideos = [
    "https://www.youtube.com/embed/kWw5P7IqfKU",
    "https://www.youtube.com/embed/Jq--0pSIiwk",
    "https://www.youtube.com/embed/JmpK396sDoY",
    "https://www.youtube.com/embed/_qUNzwRWdDc",
    "https://www.youtube.com/embed/mpf8zpSkbxg",
    "https://www.youtube.com/embed/HhNAsraWyvA",
  ];

  const reelVideos = [
    "https://www.youtube.com/embed/YIOb6yP-Vqg",
    "https://www.youtube.com/embed/Q04ktHx09sY",
    "https://www.youtube.com/embed/NdlODkhmZQI",
    "https://www.youtube.com/embed/6_-dpyy9NPc",
    "https://www.youtube.com/embed/RuQZjz2qgoI",
    "https://www.youtube.com/embed/_KvU5e1Y3Mk",
    "https://www.youtube.com/embed/QfKsH8sp1RI",
    "https://www.youtube.com/embed/y78HsXO4MOM",
  ];

  return (
    <section id="work" className="section border-t border-[var(--color-border)]">
      <div className="container-page">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">Selected Work</span>
          <h2 className="h2 mb-4">Proof, not promises</h2>
          <p className="body-lg">A sample of the content production system in action.</p>
        </div>

        <div className="flex gap-8 mb-12 border-b border-[var(--color-border)]">
          <button
            onClick={() => setActiveTab("podcast")}
            className={`relative pb-4 text-sm font-medium transition-colors ${
              activeTab === "podcast" ? "text-black" : "text-black/40 hover:text-black"
            }`}
          >
            Podcast Edits
            <span
              className={`absolute left-0 right-0 -bottom-[1px] h-[2px] transition-opacity ${
                activeTab === "podcast" ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundColor: "var(--color-primary)" }}
            />
          </button>
          <button
            onClick={() => setActiveTab("reel")}
            className={`relative pb-4 text-sm font-medium transition-colors ${
              activeTab === "reel" ? "text-black" : "text-black/40 hover:text-black"
            }`}
          >
            Reel Edits
            <span
              className={`absolute left-0 right-0 -bottom-[1px] h-[2px] transition-opacity ${
                activeTab === "reel" ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundColor: "var(--color-primary)" }}
            />
          </button>
        </div>

        {activeTab === "podcast" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {podcastVideos.map((url, i) => (
              <div key={i} className="aspect-video bg-black/[0.03] rounded-2xl overflow-hidden border border-black/[0.08]">
                <iframe
                  src={url}
                  title="YouTube video player"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            ))}
          </div>
        )}

        {activeTab === "reel" && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {reelVideos.map((url, i) => (
              <div key={i} className="aspect-[9/16] bg-black/[0.03] rounded-2xl overflow-hidden border border-black/[0.08]">
                <iframe
                  src={url}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
