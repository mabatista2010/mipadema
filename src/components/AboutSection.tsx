'use client';

import { useState } from 'react';

export default function AboutSection() {
  const [hoveredFounder, setHoveredFounder] = useState<number | null>(null);

  const founders = [
    {
      name: 'Chad Codemaster',
      role: 'CEO & Visionario',
      bio: 'Aprendio a programar en 3 dias viendo TikToks. Ahora "maneja" 5 startups (todas en quiebra).',
      emoji: '🧑‍💻',
      achievement: 'Hello World en 17 lenguajes',
      color: 'purple',
    },
    {
      name: 'Karen Blockchain',
      role: 'CTO & Guru del Copy-Paste',
      bio: 'Stack Overflow Premium Member. Su codigo funciona pero nadie sabe por que.',
      emoji: '👩‍💻',
      achievement: '0 bugs (no testeados)',
      color: 'pink',
    },
    {
      name: 'Brad NFT',
      role: 'CFO & Experto en Criptoestafas',
      bio: 'Perdio todo en Bitcoin pero te ensenara a ser millonario. Trust me bro.',
      emoji: '🤵',
      achievement: '-$50,000 en crypto',
      color: 'yellow',
    },
  ];

  const methodology = [
    {
      step: '01',
      title: 'Motivacion Toxica',
      description: 'Te haremos sentir mal por no ganar $10k/mes',
      icon: '🎯',
    },
    {
      step: '02',
      title: 'Contenido Reciclado',
      description: 'Tutoriales de YouTube pero mas caros',
      icon: '📚',
    },
    {
      step: '03',
      title: 'Falsas Promesas',
      description: 'Garantizamos* tu exito (*no garantizado)',
      icon: '🚀',
    },
    {
      step: '04',
      title: 'Profit (nuestro)',
      description: 'Tu fracaso es nuestro exito',
      icon: '💸',
    },
  ];

  const stats = [
    { label: 'Estudiantes "satisfechos"', value: '1M+', note: '*En nuestros suenos' },
    { label: 'Tasa de exito', value: '99.9%', note: '*Autodeclarada' },
    { label: 'Certificados sin valor', value: '∞', note: '*Literalmente' },
    { label: 'Demandas recibidas', value: '0', note: '*Este mes' },
  ];

  return (
    <section id="about" className="section-padding relative">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-[120px]" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="badge-pink mb-4 inline-block">Conocenos</span>
          <h2 className="section-title">Quienes Somos</h2>
          <p className="section-subtitle">
            Somos un equipo de &quot;expertos&quot; que descubrio el secreto del exito:
            cobrar mucho por cursos que ensenan a cobrar mucho por cursos.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Es como un esquema piramidal, pero con mas CSS
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-24">
          {founders.map((founder, index) => (
            <div
              key={founder.name}
              className="relative group"
              onMouseEnter={() => setHoveredFounder(index)}
              onMouseLeave={() => setHoveredFounder(null)}
            >
              <div
                className={`glass-card rounded-3xl p-8 h-full transition-all duration-500 ${
                  hoveredFounder === index ? 'scale-105 glow-purple' : ''
                }`}
              >
                {/* Emoji Avatar */}
                <div className="relative mb-6">
                  <div
                    className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${
                      founder.color === 'purple'
                        ? 'from-purple-500/20 to-purple-600/20'
                        : founder.color === 'pink'
                        ? 'from-pink-500/20 to-pink-600/20'
                        : 'from-yellow-500/20 to-yellow-600/20'
                    } flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}
                  >
                    <span className="text-5xl">{founder.emoji}</span>
                  </div>
                  {/* Status indicator */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                    <span className="badge-purple text-[10px]">Verificado*</span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-3">
                  <h3 className="text-xl font-bold text-white">{founder.name}</h3>
                  <p
                    className={`text-sm font-medium ${
                      founder.color === 'purple'
                        ? 'text-purple-400'
                        : founder.color === 'pink'
                        ? 'text-pink-400'
                        : 'text-yellow-400'
                    }`}
                  >
                    {founder.role}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">{founder.bio}</p>
                </div>

                {/* Achievement badge */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="glass-dark rounded-xl px-4 py-3 text-center">
                    <span className="text-green-400 text-xs font-medium flex items-center justify-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {founder.achievement}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Methodology Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          {/* Left - Methodology steps */}
          <div className="space-y-6">
            <div className="mb-8">
              <span className="badge-purple mb-4 inline-block">Proceso</span>
              <h3 className="text-3xl lg:text-4xl font-bold text-white">
                Nuestra &quot;Metodologia&quot; Revolucionaria
              </h3>
            </div>

            <div className="space-y-4">
              {methodology.map((item, index) => (
                <div
                  key={item.step}
                  className="glass-card rounded-2xl p-5 card-hover group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-2xl">{item.icon}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-mono text-purple-400">
                          {item.step}
                        </span>
                        <h4 className="font-bold text-white">{item.title}</h4>
                      </div>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats card */}
          <div className="relative">
            <div className="glass-card rounded-3xl p-8 lg:p-10">
              {/* Trophy icon */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 mb-4">
                  <span className="text-5xl">🏆</span>
                </div>
                <h4 className="text-2xl font-bold gradient-text-gold">
                  Logros Inventados
                </h4>
              </div>

              {/* Stats grid */}
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between py-3 border-b border-white/5 last:border-0"
                  >
                    <span className="text-gray-400 text-sm">{stat.label}</span>
                    <div className="text-right">
                      <span className="text-xl font-bold gradient-text">
                        {stat.value}
                      </span>
                      <span className="block text-[10px] text-gray-500">
                        {stat.note}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Disclaimer */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs text-gray-500 text-center">
                  *Todas las estadisticas son 100% inventadas
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 glass-card rounded-xl px-4 py-2 float hidden lg:block">
              <span className="text-sm">🔥 Trending</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 glass-card rounded-full px-6 py-3">
            <span className="text-gray-400">¿Listo para fracasar con estilo?</span>
            <a
              href="#pricing"
              className="text-purple-400 font-medium hover:text-purple-300 transition-colors flex items-center gap-1"
            >
              Ver planes
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
