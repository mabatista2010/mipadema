'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [typedText, setTypedText] = useState('');
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
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contenido Izquierdo */}
          <div className="space-y-8 fade-in">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                {typedText}
                <span className="animate-pulse">|</span>
              </h1>
              <h2 className="text-3xl md:text-4xl gradient-text font-bold">
                ¡VibeCoding te hará MILLONARIO!*
              </h2>
              <p className="text-xs text-gray-400 mt-2">
                *Resultados no garantizados. El 99.9% de nuestros estudiantes siguen viviendo con sus padres.
              </p>
            </div>

            <div className="space-y-4 text-gray-200">
              <p className="text-lg">
                🚀 Aprende a programar en <strong className="text-purple-400">7 días</strong> (o 7 años, depende de tu "vibe")
              </p>
              <p className="text-lg">
                💸 Gana <strong className="text-green-400">$10,000 USD</strong> al mes (en pesos venezolanos)
              </p>
              <p className="text-lg">
                🏖️ Trabaja desde la playa (WiFi no incluido)
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-gradient group">
                <span className="group-hover:hidden">QUIERO SER RICO</span>
                <span className="hidden group-hover:inline">¡Ya casi lo eres!</span>
              </button>
              <button className="btn-glass">
                Ver testimonios falsos
              </button>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                <span>4.9/5 (3 reseñas)</span>
              </div>
              <div>
                <span className="text-purple-400 font-bold">+1,000,000</span> estudiantes*
                <p className="text-xs">*contando bots</p>
              </div>
            </div>
          </div>

          {/* Imagen Derecha */}
          <div className="relative">
            <div className="glass-effect rounded-3xl p-4 glow float">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/guru.webp"
                  alt="CEO de VibeCoding - El gurú del éxito"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-center text-white">
                    <p className="text-2xl font-bold gradient-text mb-2">Tu Mentor Personal</p>
                    <p className="text-sm opacity-90">"El éxito está a un curso de distancia"</p>
                    <p className="text-xs opacity-60 mt-2">*Resultados no garantizados</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Elementos decorativos flotantes */}
            <div className="absolute -top-10 right-0 text-6xl animate-bounce">💎</div>
            <div className="absolute -bottom-10 left-0 text-6xl animate-pulse">🚀</div>
            <div className="absolute top-1/2 right-0 text-4xl float">💸</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-12 animate-bounce">
          <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}