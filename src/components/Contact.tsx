"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<{ type: "error" | "success"; message: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }

    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:nasrullahtanim@gmail.com?subject=${subject}&body=${body}`;
    
    setStatus({ type: "success", message: "Opening your email client… If nothing happens, email nasrullahtanim@gmail.com directly." });
    
    setTimeout(() => {
      setStatus(null);
    }, 6000);
  };

  return (
    <section id="contact" className="section border-t border-[var(--color-border)]">
      <div className="container-page max-w-2xl">
        <div className="mb-14">
          <span className="eyebrow">Let&apos;s Work Together</span>
          <h2 className="h2 mb-4">Let&apos;s talk</h2>
          <p className="body-lg">Tell me about your business and where the bottleneck is.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="contactName" className="block text-sm font-medium text-black/60 mb-2">Name</label>
            <input
              type="text"
              id="contactName"
              className="w-full bg-transparent border border-black/15 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-black/40 transition-colors"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="contactEmail" className="block text-sm font-medium text-black/60 mb-2">Email</label>
            <input
              type="email"
              id="contactEmail"
              className="w-full bg-transparent border border-black/15 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-black/40 transition-colors"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label htmlFor="contactMessage" className="block text-sm font-medium text-black/60 mb-2">Message</label>
            <textarea
              id="contactMessage"
              rows={5}
              className="w-full bg-transparent border border-black/15 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-black/40 transition-colors resize-y"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell me about your business and current challenges..."
            ></textarea>
          </div>

          {status && (
            <div className={`p-4 rounded-lg text-sm font-medium ${status.type === "error" ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"}`}>
              {status.message}
            </div>
          )}

          <button type="submit" className="btn-primary w-full !py-4 text-base">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
