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
    <section id="portfolio" className="py-24 bg-white">
      <div className="text-center mb-12">
        <h2 className="font-inter-tight font-extrabold text-4xl md:text-5xl text-black">Portfolio</h2>
        <p className="text-gray-600 mt-4 text-lg">Examples of my work in action</p>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("podcast")}
            className={`px-8 py-3 rounded-full font-semibold transition-colors ${
              activeTab === "podcast"
                ? "bg-[var(--color-primary)] text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Podcast Edits
          </button>
          <button
            onClick={() => setActiveTab("reel")}
            className={`px-8 py-3 rounded-full font-semibold transition-colors ${
              activeTab === "reel"
                ? "bg-[var(--color-primary)] text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Reel Edits
          </button>
        </div>

        {activeTab === "podcast" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {podcastVideos.map((url, i) => (
              <div key={i} className="aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-sm">
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
              <div key={i} className="aspect-[9/16] bg-gray-100 rounded-xl overflow-hidden shadow-sm">
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
