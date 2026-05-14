import React, { useState, useEffect } from 'react';

const projects = [
  {
    title: 'Brand Identity for NovaTech Solutions',
    category: 'Logo & Branding Design',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Social Media Campaign for Urban Wear',
    category: 'Marketing Design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Video Editing for Fitness Creator',
    category: 'Video Editing',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
  },
];

const services = [
  'Logo Design',
  'Social Media Design',
  'Video Editing',
  'Branding',
  'UI Design',
  'Thumbnail Design',
  'Packaging Design',
  'Ad Creative Design',
];

const testimonials = [
  {
    name: 'Client Review',
    text: 'Excellent design quality and fast delivery. Highly recommended!',
  },
  {
    name: 'Business Owner',
    text: 'Professional work and great communication throughout the project.',
  },
];

const faqs = [
  {
    q: 'Do you work internationally?',
    a: 'Yes, I work with clients worldwide.',
  },
  {
    q: 'Delivery time?',
    a: 'Usually 1–3 days depending on project size.',
  },
  {
    q: 'Tools used?',
    a: 'Canva, Figma, CapCut, Adobe tools.',
  },
];

export default function PortfolioWebsite() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white text-2xl">
        Loading Elite Portfolio...
      </div>
    );
  }

  return (
    <div className="bg-white text-black min-h-screen overflow-x-hidden scroll-smooth">
      <a
        href="https://wa.me/923489970649"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-xl hover:scale-105 transition z-50"
      >
        WhatsApp
      </a>

      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl bg-white/80 backdrop-blur-xl rounded-full shadow-xl z-50 px-8 py-4 flex justify-between items-center">
        <h1 className="font-bold text-lg">Syed Irtiza Haider</h1>
        <div className="hidden md:flex gap-6 text-sm text-gray-600">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 md:pt-40 relative overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-gray-200 rounded-full blur-3xl opacity-40 animate-pulse" />
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight relative z-10 max-w-6xl">
          Premium Branding<br />For Modern Businesses
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl relative z-10">
          Elite freelance designer crafting high-end branding, social media visuals, and video content.
        </p>
        <div className="mt-10 relative z-10">
          <a href="https://www.fiverr.com/s/wkvD3jA" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-4 rounded-full hover:scale-105 hover:shadow-2xl transition">
            Hire Me on Fiverr
          </a>
        </div>
      </section>

      <section id="services" className="py-24 px-6 bg-gray-50">
        <h2 className="text-center text-5xl font-bold mb-16">Elite Services</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-md border hover:-translate-y-2 transition">
              <h3 className="text-2xl font-semibold">{s}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="py-24 px-6">
        <h2 className="text-center text-5xl font-bold mb-16">Case Studies</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <div key={i} className="rounded-3xl overflow-hidden shadow-xl hover:scale-[1.03] transition">
              <img src={p.image} alt={p.title} className="w-full h-80 object-cover" />
              <div className="p-6 bg-white">
                <p className="text-gray-500">{p.category}</p>
                <h3 className="text-2xl font-semibold mt-2">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="py-24 bg-black text-white text-center px-6">
        <h2 className="text-5xl font-bold mb-10">About Studio</h2>
        <p className="max-w-3xl mx-auto text-gray-300">
          Syed Irtiza Haider — Freelance Graphic Designer & Software Engineering Student specializing in premium branding, UI design, and video editing.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
          <div><h3 className="text-5xl font-bold">50+</h3><p className="text-gray-400">Projects</p></div>
          <div><h3 className="text-5xl font-bold">100%</h3><p className="text-gray-400">Satisfaction</p></div>
          <div><h3 className="text-5xl font-bold">Global</h3><p className="text-gray-400">Clients</p></div>
        </div>
      </section>

      <section id="testimonials" className="py-24 px-6 bg-white text-center">
        <h2 className="text-5xl font-bold mb-12">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 border rounded-3xl shadow-sm">
              <p className="text-gray-600">"{t.text}"</p>
              <h4 className="mt-4 font-semibold">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="py-24 px-6 bg-gray-50 text-center">
        <h2 className="text-5xl font-bold mb-12">FAQ</h2>
        <div className="max-w-3xl mx-auto text-left">
          {faqs.map((f, i) => (
            <div key={i} className="mb-6 border-b pb-4">
              <h3 className="font-semibold text-xl">{f.q}</h3>
              <p className="text-gray-600 mt-2">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-24 px-6 text-center bg-gradient-to-b from-white to-gray-100">
        <h2 className="text-6xl font-bold mb-6">Let's Build Something Elite</h2>
        <p className="text-gray-600 mb-10">Connect instantly via platforms below.</p>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="https://www.fiverr.com/s/wkvD3jA" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-4 rounded-full">Fiverr</a>
          <a href="https://www.linkedin.com/in/syed-irtiza-haider-kazmi-92a93228a" target="_blank" rel="noopener noreferrer" className="border px-8 py-4 rounded-full">LinkedIn</a>
          <a href="https://wa.me/923489970649" target="_blank" rel="noopener noreferrer" className="border px-8 py-4 rounded-full">WhatsApp</a>
        </div>
      </section>

      <footer className="py-10 text-center text-gray-500">
        © 2026 Syed Irtiza Haider — Elite Portfolio
      </footer>
    </div>
  );
}