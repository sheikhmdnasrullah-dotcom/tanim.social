"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Thoughts", href: "#thoughts" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScroll = () => {
    const sections = navLinks.map((link) => link.name.toLowerCase());
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const elem = document.getElementById(targetId);
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 80,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-[75px] z-[100] bg-[rgba(245,243,239,0.88)] backdrop-blur-md border-b border-[#e2e2e2] flex items-center justify-between px-6 md:px-10">
        <div className="font-syne font-bold text-lg cursor-pointer hover:text-[var(--color-primary)] transition-colors" onClick={(e) => handleClick(e as any, "#about")}>
          Nasrullah Tanim
        </div>

        <ul className="hidden md:flex items-center gap-1 bg-white/50 backdrop-blur-md border border-[#e2e2e2] rounded-full px-2 py-1.5 shadow-sm">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeSection === link.name.toLowerCase()
                    ? "bg-[var(--color-primary)] text-white shadow-md"
                    : "text-gray-600 hover:text-black hover:bg-black/5"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3 pl-5 border-l border-[#e2e2e2]">
          <a href="https://www.linkedin.com/in/sheikh-md-nasrullah-910b203b3/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[var(--color-primary)] transition-colors">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://slideinventure.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[var(--color-primary)] transition-colors">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          </a>
          <a href="mailto:nasrullahtanim@gmail.com" className="text-gray-500 hover:text-[var(--color-primary)] transition-colors">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setIsOpen(!isOpen)}>
          <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}></span>
        </button>
      </nav>

      {/* Mobile Nav Dropdown */}
      <div className={`fixed inset-0 top-[75px] bg-[rgba(245,243,239,0.98)] backdrop-blur-xl z-50 transition-all duration-300 p-8 ${isOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}`}>
        <ul className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`block text-xl font-medium transition-colors ${
                  activeSection === link.name.toLowerCase() ? "text-[var(--color-primary)]" : "text-gray-600"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-4 mt-8 pt-6 border-t border-gray-200">
          <a href="https://www.linkedin.com/in/sheikh-md-nasrullah-910b203b3/" target="_blank" rel="noopener noreferrer" className="text-gray-500">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://slideinventure.com" target="_blank" rel="noopener noreferrer" className="text-gray-500">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          </a>
          <a href="mailto:nasrullahtanim@gmail.com" className="text-gray-500">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
