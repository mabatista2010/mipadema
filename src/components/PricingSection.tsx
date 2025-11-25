'use client';

import { useState } from 'react';

export default function PricingSection() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Gratis',
      price: '$0',
      yearlyPrice: '$0',
      period: '/mes',
      description: 'Para los que quieren sonar gratis',
      features: [
        { text: '1 video de motivacion', included: true },
        { text: 'Acceso al grupo de Telegram (solo lectura)', included: true },
        { text: 'Newsletter spam semanal', included: true },
        { text: 'Certificado en Comic Sans', included: true },
        { text: 'Soporte por palomas mensajeras', included: true },
      ],
      notIncluded: ['Contenido util', 'Resultados reales', 'Devoluciones'],
      cta: 'Empezar a Sonar',
      popular: false,
      gradient: 'from-gray-500 to-gray-700',
      icon: '🆓',
    },
    {
      name: 'Pro',
      price: '$999',
      yearlyPrice: '$9,999',
      period: '/mes',
      description: 'El mas vendido (porque lo decimos nosotros)',
      features: [
        { text: 'Todo lo del plan Gratis', included: true },
        { text: '10 horas de videos obsoletos', included: true },
        { text: 'Plantillas de 2015', included: true },
        { text: 'Mentor IA (ChatGPT gratis)', included: true },
        { text: 'Grupo VIP de WhatsApp', included: true },
        { text: 'Descuento del 0.1% en proximo curso', included: true },
      ],
      notIncluded: ['Trabajo garantizado', 'Conocimiento actualizado'],
      cta: '¡Hazte "Pro"!',
      popular: true,
      gradient: 'from-purple-500 to-pink-500',
      icon: '⭐',
    },
    {
      name: 'Enterprise',
      price: '$9,999',
      yearlyPrice: '$99,999',
      period: '/mes',
      description: 'Para CEOs del futuro',
      features: [
        { text: 'Todo lo del plan Pro', included: true },
        { text: 'Llamada mensual de 5 minutos', included: true },
        { text: 'Tu nombre en los creditos', included: true },
        { text: 'NFT exclusivo (sin valor)', included: true },
        { text: 'Acceso al "Circulo Interno"', included: true },
        { text: 'Diploma enmarcado (marco no incluido)', included: true },
        { text: 'Sesion de coaching (venderte mas cursos)', included: true },
      ],
      notIncluded: ['ROI positivo'],
      cta: 'Vender un Rinon',
      popular: false,
      gradient: 'from-yellow-500 to-orange-500',
      icon: '👑',
    },
  ];

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-[120px]" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="badge-gold mb-4 inline-block">Precios</span>
          <h2 className="section-title">Planes de &quot;Inversion&quot;</h2>
          <p className="section-subtitle">
            Elige cuanto quieres perder este mes. Recuerda: no es un gasto, es una
            &quot;inversion en tu futuro&quot; (spoiler: no lo es).
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center gap-4 glass-card rounded-full p-2">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-purple-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                billingCycle === 'yearly'
                  ? 'bg-purple-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Anual
              <span className="badge-pink text-[10px]">-0.1%</span>
            </button>
          </div>

          {/* Warning badge */}
          <div className="mt-6">
            <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm">
              <span className="text-yellow-400">⚠️</span>
              <span className="text-gray-400">
                Sin garantia de devolucion bajo ninguna circunstancia
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative ${plan.popular ? 'md:-mt-8 md:mb-8' : ''}`}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-5 left-0 right-0 flex justify-center z-10">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-purple-500/30">
                    MAS POPULAR (segun nosotros)
                  </span>
                </div>
              )}

              <div
                className={`h-full glass-card rounded-3xl p-8 transition-all duration-500 ${
                  plan.popular ? 'border-2 border-purple-500/50 glow-purple' : ''
                } ${hoveredPlan === index ? 'scale-[1.02]' : ''}`}
              >
                {/* Plan header */}
                <div className="text-center mb-8">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} bg-opacity-20 mb-4`}
                  >
                    <span className="text-3xl">{plan.icon}</span>
                  </div>
                  <h3
                    className={`text-2xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-5xl font-bold text-white">
                      {billingCycle === 'monthly' ? plan.price : plan.yearlyPrice}
                    </span>
                    <span className="text-gray-500 mb-2">
                      {billingCycle === 'monthly' ? '/mes' : '/año'}
                    </span>
                  </div>
                  {plan.popular && (
                    <p className="text-xs text-purple-400 mt-2">
                      Ahorras $0.99 al ano*
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                        <svg
                          className="w-3 h-3 text-green-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-300">{feature.text}</span>
                    </div>
                  ))}

                  {/* Not included */}
                  <div className="pt-4 border-t border-white/5">
                    {plan.notIncluded.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 mt-3 opacity-50">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-red-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-500 line-through">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                    plan.popular
                      ? 'btn-gradient'
                      : 'glass-dark hover:bg-white/10 text-white'
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Hover message */}
                {hoveredPlan === index && (
                  <p className="text-xs text-center text-gray-500 mt-4 animate-pulse">
                    Por favor, no lo hagas
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pro tip */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 glass-card rounded-full px-6 py-3">
            <span className="text-xl">💡</span>
            <span className="text-gray-400 text-sm">
              <strong className="text-white">Pro tip:</strong> El plan gratis tiene el
              mismo valor educativo que los otros dos
            </span>
          </div>
        </div>

        {/* Guarantee section */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="glass-card rounded-3xl p-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-4xl">🛡️</span>
              <h4 className="text-xl font-bold text-white">
                Garantia de 0 dias
              </h4>
            </div>
            <p className="text-gray-400 text-sm">
              Si no estas satisfecho con tu compra, puedes escribirnos un email que
              nunca responderemos. Tu dinero ya es nuestro, pero valoramos tu opinion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
