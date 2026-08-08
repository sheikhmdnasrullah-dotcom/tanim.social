"use client";
import React, { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "System", href: "#system" },
  { name: "Work", href: "#work" },
  { name: "Thoughts", href: "#thoughts" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const ids = [...navLinks.map((l) => l.href.slice(1)), "contact"];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));

    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] h-16 flex items-center transition-colors duration-300 ${
          scrolled ? "bg-[var(--color-background)]/90 backdrop-blur-md border-b border-[var(--color-border)]" : "border-b border-transparent"
        }`}
      >
        <div className="container-page w-full flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => handleClick(e, "#home")}
            className="font-syne font-bold text-base text-black tracking-tight"
          >
            Nasrullah Tanim
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = active === id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative py-1.5 text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-black" : "text-black/50 hover:text-black"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 right-0 -bottom-[1px] h-[2px] rounded-full transition-opacity duration-200 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ backgroundColor: "var(--color-primary)" }}
                  />
                </a>
              );
            })}
          </nav>

          <a
            href="#contact"
            onClick={(e) => handleClick(e, "#contact")}
            className="hidden md:inline-flex btn-primary !py-2.5 !px-5 text-sm"
          >
            Let&apos;s Talk
          </a>

          <button
            aria-label="Toggle menu"
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
            onClick={() => setIsOpen((v) => !v)}
          >
            <span className={`block w-5 h-[1.5px] bg-black transition-transform duration-300 ${isOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-black transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-black transition-transform duration-300 ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      <div
        className={`md:hidden fixed inset-0 top-16 z-[90] bg-[var(--color-background)] transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="container-page pt-10 flex flex-col gap-1">
          {[...navLinks, { name: "Contact", href: "#contact" }].map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`py-4 text-2xl font-syne font-semibold border-b border-black/[0.06] transition-colors ${
                  isActive ? "text-black" : "text-black/40"
                }`}
              >
                {link.name}
              </a>
            );
          })}

          <div className="flex gap-5 mt-10">
            <a href="https://www.linkedin.com/in/sheikh-md-nasrullah-910b203b3/" target="_blank" rel="noopener noreferrer" className="text-black/50">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="mailto:nasrullahtanim@gmail.com" className="text-black/50">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
