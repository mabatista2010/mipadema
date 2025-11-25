'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'pricing', 'cta'];
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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#hero', id: 'hero' },
    { name: 'Nosotros', href: '#about', id: 'about' },
    { name: 'Planes', href: '#pricing', id: 'pricing' },
    { name: 'Contacto', href: '#cta', id: 'cta' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-dark py-3 shadow-lg shadow-purple-900/10'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="relative">
              <span className="text-2xl md:text-3xl font-bold gradient-text tracking-tight">
                VibeCoding
              </span>
              <span className="absolute -top-1 -right-4 text-sm opacity-80 group-hover:animate-bounce">
                💰
              </span>
            </div>
            <span className="hidden sm:inline-block badge-purple text-[10px]">
              v2.0
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  activeSection === item.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {activeSection === item.id && (
                  <span className="absolute inset-0 bg-white/10 rounded-full" />
                )}
                <span className="relative">{item.name}</span>
              </a>
            ))}
            <div className="ml-4 pl-4 border-l border-white/10">
              <button className="btn-gradient text-sm py-2.5 px-6">
                Empezar Gratis
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center glass-effect rounded-xl"
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-4 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="glass-card rounded-2xl p-4 space-y-2">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 rounded-xl text-center font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-purple-500/20 text-white'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2">
              <button className="btn-gradient w-full text-sm py-3">
                Empezar Gratis
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
