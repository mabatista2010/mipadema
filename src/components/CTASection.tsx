'use client';

import { useState, useEffect } from 'react';

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [placesLeft, setPlacesLeft] = useState(3);

  useEffect(() => {
    // Set random number only on client side
    setPlacesLeft(Math.floor(Math.random() * 5) + 2);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Fake countdown
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

    // Reset form
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', comment: '' });
    }, 12000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="cta" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-effect rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 text-[200px] opacity-5 rotate-12">💰</div>
          <div className="absolute bottom-0 left-0 text-[150px] opacity-5 -rotate-12">🚀</div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                ¡ÚLTIMA OPORTUNIDAD!
              </h2>
              <div className="text-2xl text-yellow-400 font-bold mb-4 animate-pulse">
                ⏰ Solo quedan {placesLeft} plazas* ⏰
              </div>
              <p className="text-xl text-gray-300 mb-2">
                Únete a la lista de espera para el curso que cambiará tu vida
                <span className="text-xs block text-gray-500">
                  (O al menos cambiará tu saldo bancario... a negativo)
                </span>
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-purple-400 mb-2">
                      Nombre Completo*
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Futuro Millonario"
                      className="w-full px-4 py-3 rounded-lg glass-dark text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-purple-400 mb-2">
                      Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="tufuturo@vibecoding.com"
                      className="w-full px-4 py-3 rounded-lg glass-dark text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-purple-400 mb-2">
                    ¿Por qué mereces ser millonario?
                  </label>
                  <textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Convéncenos de que no eres otro perdedor más..."
                    className="w-full px-4 py-3 rounded-lg glass-dark text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn-gradient text-lg px-12 py-4 group relative overflow-hidden"
                  >
                    <span className="relative z-10">
                      ¡QUIERO SER RICO YA!
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                  <p className="text-xs text-gray-500 mt-2">
                    *Al enviar aceptas recibir 847 emails diarios hasta el fin de los tiempos
                  </p>
                </div>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  ¡FELICIDADES {formData.name.toUpperCase()}!
                </h3>
                <p className="text-xl text-green-400 mb-4">
                  Ya eres 0.001% más rico (en experiencia)
                </p>
                <div className="glass-dark rounded-2xl p-6 max-w-md mx-auto">
                  <p className="text-gray-300 mb-4">
                    Tu solicitud ha sido recibida y archivada en /dev/null
                  </p>
                  {countdown !== null && countdown > 0 && (
                    <div>
                      <p className="text-purple-400 font-bold text-2xl mb-2">
                        Próximos pasos en: {countdown}s
                      </p>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${(10 - countdown) * 10}%` }}
                        />
                      </div>
                    </div>
                  )}
                  {countdown === 0 && (
                    <p className="text-yellow-400 animate-pulse">
                      Procesando tu futuro millonario... (Error 404: Dinero no encontrado)
                    </p>
                  )}
                </div>
              </div>
            )}

            <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
              <div className="glass-dark rounded-xl p-6 card-hover group transition-all duration-300 hover:border-purple-400/50">
                <div className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  24/7
                </div>
                <p className="text-sm text-gray-300 group-hover:text-purple-300 transition-colors">
                  Spam garantizado
                </p>
                <div className="text-2xl mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  📧
                </div>
              </div>
              <div className="glass-dark rounded-xl p-6 card-hover group transition-all duration-300 hover:border-pink-400/50">
                <div className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  100%
                </div>
                <p className="text-sm text-gray-300 group-hover:text-pink-300 transition-colors">
                  Arrepentimiento seguro
                </p>
                <div className="text-2xl mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  😭
                </div>
              </div>
              <div className="glass-dark rounded-xl p-6 card-hover group transition-all duration-300 hover:border-yellow-400/50">
                <div className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300 group-hover:animate-spin">
                  ∞
                </div>
                <p className="text-sm text-gray-300 group-hover:text-yellow-300 transition-colors">
                  Cursos por vender
                </p>
                <div className="text-2xl mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  💸
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-gray-500 mt-6">
              *Las plazas son infinitas pero la presión psicológica es real
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}