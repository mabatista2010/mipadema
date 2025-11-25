'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = '¿Cansado de ser pobre?';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    // Cursor blink
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, []);

  const features = [
    {
      icon: '⚡',
      text: 'Aprende en',
      highlight: '7 dias',
      subtext: '(o 7 anos, depende)',
    },
    {
      icon: '💰',
      text: 'Gana',
      highlight: '$10,000/mes',
      subtext: '(en pesos venezolanos)',
    },
    {
      icon: '🌴',
      text: 'Trabaja desde',
      highlight: 'la playa',
      subtext: '(WiFi no incluido)',
    },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-24 pb-12 px-6 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-32 left-10 w-72 h-72 bg-purple-600/30 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/20 rounded-full blur-[120px] animate-pulse" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 badge-purple">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span>+1,000,000 estudiantes inscritos*</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                {typedText}
                <span
                  className={`inline-block w-1 h-12 sm:h-14 lg:h-16 ml-1 bg-purple-500 ${
                    showCursor ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                <span className="gradient-text">VibeCoding te hara MILLONARIO</span>
                <span className="text-purple-400">*</span>
              </h2>
              <p className="text-sm text-gray-500 max-w-md">
                *Resultados no garantizados. El 99.9% de nuestros estudiantes
                siguen viviendo con sus padres.
              </p>
            </div>

            {/* Features */}
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 glass-card rounded-xl p-4 card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-3xl">{feature.icon}</span>
                  <div>
                    <p className="text-gray-300">
                      {feature.text}{' '}
                      <span className="text-purple-400 font-bold">
                        {feature.highlight}
                      </span>
                    </p>
                    <p className="text-xs text-gray-500">{feature.subtext}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-gradient group text-lg py-4 px-8">
                <span className="flex items-center justify-center gap-2">
                  <span className="group-hover:hidden">QUIERO SER RICO</span>
                  <span className="hidden group-hover:inline">Ya casi lo eres!</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </button>
              <button className="btn-glass text-lg py-4 px-8">
                Ver testimonios falsos
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-2 border-gray-900 flex items-center justify-center text-xs"
                    >
                      {['😎', '🤑', '😊', '🚀'][i - 1]}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <p className="text-white font-medium">4.9/5</p>
                  <p className="text-gray-500 text-xs">(3 resenas)</p>
                </div>
              </div>
              <div className="h-8 w-px bg-white/10 hidden sm:block" />
              <div className="text-sm">
                <p className="text-purple-400 font-bold">+1M estudiantes*</p>
                <p className="text-gray-500 text-xs">*contando bots</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative lg:pl-8">
            <div className="relative">
              {/* Main image card */}
              <div className="glass-card rounded-3xl p-3 glow float">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/images/guru.webp"
                    alt="CEO de VibeCoding - El guru del exito"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="glass-dark rounded-xl p-4 text-center">
                      <p className="text-xl font-bold gradient-text mb-1">
                        Tu Mentor Personal
                      </p>
                      <p className="text-sm text-gray-300">
                        &quot;El exito esta a un curso de distancia&quot;
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        *Resultados no garantizados
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 glass-card rounded-2xl p-4 float-delayed hidden lg:block">
                <div className="text-center">
                  <p className="text-3xl font-bold gradient-text-gold">$999</p>
                  <p className="text-xs text-gray-400">valor del curso*</p>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-4 py-3 float hidden lg:flex items-center gap-2">
                <span className="text-2xl">🔥</span>
                <div>
                  <p className="text-sm font-medium text-white">En tendencia</p>
                  <p className="text-xs text-gray-400">#1 en estafas</p>
                </div>
              </div>

              {/* Decorative emojis */}
              <div className="absolute -top-8 left-1/4 text-5xl float-slow hidden lg:block">
                💎
              </div>
              <div className="absolute top-1/2 -right-4 text-4xl float hidden lg:block">
                💸
              </div>
              <div className="absolute -bottom-8 right-1/4 text-5xl float-delayed hidden lg:block">
                🚀
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors group"
          >
            <span className="text-sm">Descubre mas</span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
