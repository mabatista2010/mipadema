'use client';

import { useState, useEffect } from 'react';

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [placesLeft, setPlacesLeft] = useState(3);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    setPlacesLeft(Math.floor(Math.random() * 5) + 2);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    let count = 10;
    setCountdown(count);
    const timer = setInterval(() => {
      count--;
      setCountdown(count);
      if (count <= 0) {
        clearInterval(timer);
        setCountdown(null);
      }
    }, 1000);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', comment: '' });
    }, 12000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const infoCards = [
    {
      value: '24/7',
      label: 'Spam garantizado',
      icon: '📧',
      color: 'purple',
    },
    {
      value: '100%',
      label: 'Arrepentimiento seguro',
      icon: '😭',
      color: 'pink',
    },
    {
      value: '∞',
      label: 'Cursos por vender',
      icon: '💸',
      color: 'yellow',
    },
  ];

  return (
    <section id="cta" className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-600/20 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="glass-card rounded-[2.5rem] p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-500/10 to-transparent rounded-full blur-3xl" />

          {/* Floating decorations */}
          <div className="absolute top-8 right-8 text-6xl opacity-10 float-slow hidden lg:block">
            💰
          </div>
          <div className="absolute bottom-8 left-8 text-5xl opacity-10 float hidden lg:block">
            🚀
          </div>

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 badge-pink mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                </span>
                <span>Oferta limitada</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                ¡ULTIMA OPORTUNIDAD!
              </h2>

              <div className="inline-flex items-center gap-3 glass-dark px-6 py-3 rounded-full mb-6">
                <span className="text-2xl animate-pulse">⏰</span>
                <span className="text-xl md:text-2xl font-bold text-yellow-400">
                  Solo quedan {placesLeft} plazas*
                </span>
              </div>

              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Unete a la lista de espera para el curso que cambiara tu vida
              </p>
              <p className="text-sm text-gray-500 mt-2">
                (O al menos cambiara tu saldo bancario... a negativo)
              </p>
            </div>

            {/* Form or Success State */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-purple-400 mb-2">
                      Nombre Completo*
                    </label>
                    <div
                      className={`relative transition-all duration-300 ${
                        focusedField === 'name' ? 'scale-[1.02]' : ''
                      }`}
                    >
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        placeholder="Futuro Millonario"
                        className="input-modern"
                      />
                      {focusedField === 'name' && (
                        <div className="absolute inset-0 rounded-xl bg-purple-500/10 pointer-events-none" />
                      )}
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-purple-400 mb-2">
                      Email*
                    </label>
                    <div
                      className={`relative transition-all duration-300 ${
                        focusedField === 'email' ? 'scale-[1.02]' : ''
                      }`}
                    >
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        placeholder="tufuturo@vibecoding.com"
                        className="input-modern"
                      />
                    </div>
                  </div>
                </div>

                {/* Comment field */}
                <div>
                  <label className="block text-sm font-medium text-purple-400 mb-2">
                    ¿Por que mereces ser millonario?
                  </label>
                  <div
                    className={`relative transition-all duration-300 ${
                      focusedField === 'comment' ? 'scale-[1.01]' : ''
                    }`}
                  >
                    <textarea
                      name="comment"
                      value={formData.comment}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('comment')}
                      onBlur={() => setFocusedField(null)}
                      rows={4}
                      placeholder="Convencenos de que no eres otro perdedor mas..."
                      className="input-modern resize-none"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="btn-gradient text-lg md:text-xl px-12 py-5 group"
                  >
                    <span className="flex items-center gap-3">
                      <span>¡QUIERO SER RICO YA!</span>
                      <svg
                        className="w-6 h-6 group-hover:translate-x-1 transition-transform"
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
                  <p className="text-xs text-gray-500 mt-4">
                    *Al enviar aceptas recibir 847 emails diarios hasta el fin de los
                    tiempos
                  </p>
                </div>
              </form>
            ) : (
              <div className="max-w-xl mx-auto text-center py-8">
                <div className="text-7xl mb-6 animate-bounce">🎉</div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  ¡FELICIDADES{' '}
                  <span className="gradient-text">
                    {formData.name.toUpperCase()}
                  </span>
                  !
                </h3>
                <p className="text-xl text-green-400 mb-6">
                  Ya eres 0.001% mas rico (en experiencia)
                </p>

                <div className="glass-dark rounded-2xl p-8">
                  <p className="text-gray-300 mb-6">
                    Tu solicitud ha sido recibida y archivada en{' '}
                    <code className="text-purple-400">/dev/null</code>
                  </p>

                  {countdown !== null && countdown > 0 && (
                    <div className="space-y-4">
                      <p className="text-purple-400 font-bold text-2xl">
                        Proximos pasos en: {countdown}s
                      </p>
                      <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                          style={{ width: `${(10 - countdown) * 10}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {countdown === 0 && (
                    <p className="text-yellow-400 animate-pulse text-lg">
                      Procesando tu futuro millonario...
                      <br />
                      <span className="text-sm">(Error 404: Dinero no encontrado)</span>
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Info cards */}
            <div className="mt-12 grid md:grid-cols-3 gap-4 lg:gap-6">
              {infoCards.map((card, index) => (
                <div
                  key={card.label}
                  className="glass-dark rounded-2xl p-6 text-center card-hover group"
                >
                  <div
                    className={`text-4xl lg:text-5xl font-bold mb-2 ${
                      card.color === 'purple'
                        ? 'gradient-text'
                        : card.color === 'pink'
                        ? 'text-pink-400'
                        : 'gradient-text-gold'
                    } group-hover:scale-110 transition-transform`}
                  >
                    {card.value}
                  </div>
                  <p className="text-sm text-gray-400 mb-2">{card.label}</p>
                  <div className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                    {card.icon}
                  </div>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <p className="text-center text-xs text-gray-600 mt-8">
              *Las plazas son infinitas pero la presion psicologica es real
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
