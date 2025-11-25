'use client';

import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
    setEmail('');
  };

  const socialLinks = [
    { name: 'Instagram', icon: '📸', href: '#', followers: '1M' },
    { name: 'TikTok', icon: '🎵', href: '#', followers: '500K' },
    { name: 'YouTube', icon: '📺', href: '#', followers: '3M' },
    { name: 'Twitter', icon: '𝕏', href: '#', followers: '800K' },
    { name: 'LinkedIn', icon: '💼', href: '#', followers: '10' },
  ];

  const footerLinks = {
    producto: [
      { name: 'Cursos', href: '#pricing' },
      { name: 'Precios', href: '#pricing' },
      { name: 'Testimonios', href: '#', badge: 'Falsos' },
      { name: 'FAQ', href: '#', badge: 'Inutil' },
    ],
    empresa: [
      { name: 'Sobre Nosotros', href: '#about' },
      { name: 'Blog', href: '#', badge: 'Vacio' },
      { name: 'Carreras', href: '#', badge: 'No contratamos' },
      { name: 'Prensa', href: '#' },
    ],
    legal: [
      { name: 'Terminos', href: '#' },
      { name: 'Privacidad', href: '#' },
      { name: 'Cookies', href: '#' },
      { name: 'Reembolsos', href: '#', badge: 'No hay' },
    ],
  };

  return (
    <footer className="relative mt-20">
      {/* Top gradient line */}
      <div className="divider-gradient" />

      {/* Main footer */}
      <div className="glass-dark">
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-6 gap-12">
            {/* Brand section */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <a href="#hero" className="inline-block">
                  <span className="text-3xl font-bold gradient-text">VibeCoding</span>
                </a>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  Transformando vidas desde 2024*
                  <span className="block text-xs text-gray-600 mt-1">
                    *Empezamos ayer
                  </span>
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="badge-purple">#NoEsEstafa</span>
                <span className="badge-pink">#TrustMeBro</span>
                <span className="badge-gold">#VibeCoding</span>
              </div>

              {/* Contact info */}
              <div className="space-y-2 text-sm text-gray-500">
                <p className="flex items-center gap-2">
                  <span>📧</span> info@vibecoding.scam
                </p>
                <p className="flex items-center gap-2">
                  <span>📱</span> +1-800-ESTAFA
                </p>
                <p className="flex items-center gap-2">
                  <span>🏢</span> Torre Imaginaria, Piso 404
                </p>
              </div>
            </div>

            {/* Links columns */}
            <div className="lg:col-span-3 grid sm:grid-cols-3 gap-8">
              {/* Producto */}
              <div>
                <h4 className="font-bold text-white mb-4">Producto</h4>
                <ul className="space-y-3">
                  {footerLinks.producto.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2"
                      >
                        {link.name}
                        {link.badge && (
                          <span className="text-[10px] text-gray-600">
                            ({link.badge})
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Empresa */}
              <div>
                <h4 className="font-bold text-white mb-4">Empresa</h4>
                <ul className="space-y-3">
                  {footerLinks.empresa.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2"
                      >
                        {link.name}
                        {link.badge && (
                          <span className="text-[10px] text-gray-600">
                            ({link.badge})
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="font-bold text-white mb-4">Legal</h4>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2"
                      >
                        {link.name}
                        {link.badge && (
                          <span className="text-[10px] text-gray-600">
                            ({link.badge})
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-1">
              <h4 className="font-bold text-white mb-4">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">
                Suscribete para mas promesas vacias
              </p>

              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    required
                    className="w-full px-4 py-3 rounded-xl glass-dark text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  />
                  <button type="submit" className="w-full btn-gradient text-sm py-3">
                    Vender mi alma
                  </button>
                </form>
              ) : (
                <div className="glass-dark rounded-xl p-4 text-center">
                  <span className="text-2xl">🎉</span>
                  <p className="text-green-400 text-sm mt-2">
                    Spam en camino!
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Social links */}
          <div className="mt-12 pt-8 border-t border-white/5">
            <div className="flex flex-wrap justify-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="glass-card px-4 py-2 rounded-full hover:scale-105 transition-all group flex items-center gap-2"
                >
                  <span className="text-xl">{social.icon}</span>
                  <span className="text-xs text-gray-400">
                    {social.followers}
                    <span className="text-gray-600 group-hover:text-purple-400 transition-colors">
                      *
                    </span>
                  </span>
                </a>
              ))}
            </div>
            <p className="text-center text-xs text-gray-600 mt-3">
              *Seguidores comprados en Fiverr
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-black/50 border-t border-white/5">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-600 text-center md:text-left">
              © 2024 VibeCoding. Todos los derechos reservados (pero no respetados).
            </p>

            <div className="flex items-center gap-2 text-xs text-gray-600">
              <span>💔</span>
              <span>Hecho con desesperacion por desarrolladores mal pagados</span>
            </div>
          </div>

          {/* Final disclaimer */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full">
              <span className="text-yellow-400">⚠️</span>
              <span className="text-xs text-gray-400">
                Este sitio es una parodia. Por favor no nos demandes. Ya somos pobres.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
