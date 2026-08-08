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
    <section id="contact" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-inter-tight font-extrabold text-4xl md:text-5xl text-black">Contact</h2>
          <p className="text-gray-600 mt-4 text-lg">Let's discuss how we can scale your operations.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              id="contactName"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="contactEmail"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label htmlFor="contactMessage" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea
              id="contactMessage"
              rows={5}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all resize-y"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell me about your business and current challenges..."
            ></textarea>
          </div>

          {status && (
            <div className={`p-4 rounded-xl text-sm font-medium ${status.type === "error" ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"}`}>
              {status.message}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-800 text-white font-medium py-4 px-6 rounded-xl transition-colors shadow-md text-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
