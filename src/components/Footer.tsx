'use client';

export default function Footer() {
  const socialLinks = [
    { name: 'Instagram', icon: '📸', href: '#', followers: '1M*' },
    { name: 'TikTok', icon: '🎵', href: '#', followers: '500K*' },
    { name: 'Facebook', icon: '👤', href: '#', followers: '2M*' },
    { name: 'Twitter/X', icon: '🐦', href: '#', followers: '800K*' },
    { name: 'YouTube', icon: '📺', href: '#', followers: '3M*' },
    { name: 'LinkedIn', icon: '💼', href: '#', followers: '10*' },
  ];

  const legalLinks = [
    { name: 'Términos y Condiciones', href: '#', description: '(300 páginas de texto legal)' },
    { name: 'Política de Privacidad', href: '#', description: '(vendemos tus datos)' },
    { name: 'Política de Reembolsos', href: '#', description: '(spoiler: no hay)' },
    { name: 'Aviso Legal', href: '#', description: '(no nos hacemos responsables)' },
  ];

  const quickLinks = [
    { name: 'Cursos', href: '#pricing' },
    { name: 'Sobre Nosotros', href: '#about' },
    { name: 'Blog', href: '#', badge: 'Vacío' },
    { name: 'Testimonios', href: '#', badge: 'Falsos' },
    { name: 'FAQ', href: '#', badge: 'Inútil' },
    { name: 'Contacto', href: '#', badge: 'No respondemos' },
  ];

  return (
    <footer className="mt-20">
      {/* Main Footer */}
      <div className="glass-dark border-t border-white/10">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold gradient-text">VibeCoding</h3>
              <p className="text-gray-400 text-sm">
                Transformando vidas desde 2024*
                <span className="block text-xs mt-1">
                  *Empezamos ayer
                </span>
              </p>
              <div className="flex gap-2">
                <span className="glass-effect px-3 py-1 rounded-full text-xs text-purple-400">
                  #NoEsEstafa
                </span>
                <span className="glass-effect px-3 py-1 rounded-full text-xs text-pink-400">
                  #TrustMeBro
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2"
                    >
                      {link.name}
                      {link.badge && (
                        <span className="text-xs text-gray-600">({link.badge})</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-white mb-4">Contacto</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <p>📧 info@vibecoding.scam</p>
                <p>📱 +1-800-ESTAFA</p>
                <p>🏢 Torre Imaginaria, Piso 404</p>
                <p>🌍 Ciudad Inexistente, 00000</p>
                <div className="mt-4 glass-effect rounded-lg p-3">
                  <p className="text-xs text-purple-400">
                    Horario de atención:
                  </p>
                  <p className="text-xs">
                    Nunca - Jamás
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-bold text-white mb-4">Más Spam</h4>
              <p className="text-sm text-gray-400 mb-3">
                Suscríbete para más promesas vacías
              </p>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full px-3 py-2 rounded-lg glass-dark text-white placeholder-gray-500 text-sm"
                />
                <button className="w-full btn-glass text-sm py-2">
                  Vender mi alma
                </button>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="glass-effect px-4 py-2 rounded-full hover:scale-105 transition-transform group"
                >
                  <span className="text-2xl">{social.icon}</span>
                  <span className="text-xs text-gray-400 ml-2">{social.followers}</span>
                  <span className="hidden group-hover:inline text-xs text-purple-400 ml-1">
                    *bots
                  </span>
                </a>
              ))}
            </div>
            <p className="text-center text-xs text-gray-600 mt-4">
              *Seguidores comprados en Fiverr
            </p>
          </div>
        </div>
      </div>

      {/* Legal Footer */}
      <div className="bg-black/50 border-t border-white/5">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            {legalLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs text-gray-500 hover:text-gray-400 transition-colors"
              >
                {link.name}
                <span className="text-gray-700 ml-1">{link.description}</span>
              </a>
            ))}
          </div>
          
          <div className="text-center text-xs text-gray-600 space-y-2">
            <p>
              © 2024 VibeCoding. Todos los derechos reservados (pero no respetados).
            </p>
            <p>
              💔 Hecho con desesperación por desarrolladores mal pagados
            </p>
            <p className="text-[10px]">
              Este sitio es una parodia. Por favor no nos demandes. Ya somos pobres.
            </p>
          </div>

          {/* Fun disclaimer */}
          <div className="mt-6 text-center">
            <div className="inline-block glass-effect px-4 py-2 rounded-full">
              <p className="text-xs text-yellow-400">
                ⚠️ ADVERTENCIA: Este curso puede causar pobreza extrema ⚠️
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}