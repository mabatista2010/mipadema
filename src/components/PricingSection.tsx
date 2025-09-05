'use client';

import { useState } from 'react';

export default function PricingSection() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  const plans = [
    {
      name: 'Gratis',
      price: '$0',
      period: '/mes',
      description: 'Para los que quieren soñar gratis',
      features: [
        '1 video de motivación',
        'Acceso al grupo de Telegram (solo lectura)',
        'Newsletter spam semanal',
        'Certificado en Comic Sans',
        'Soporte por palomas mensajeras'
      ],
      notIncluded: [
        'Contenido útil',
        'Resultados reales',
        'Devoluciones'
      ],
      cta: 'Empezar a Soñar',
      popular: false,
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      name: 'Pro',
      price: '$999',
      period: '/mes',
      description: 'El más vendido (porque lo decimos nosotros)',
      features: [
        'Todo lo del plan Gratis',
        '10 horas de videos obsoletos',
        'Plantillas de 2015',
        'Mentor IA (ChatGPT gratis)',
        'Grupo VIP de WhatsApp (200 personas)',
        'Descuento del 0.1% en el próximo curso'
      ],
      notIncluded: [
        'Trabajo garantizado',
        'Conocimiento actualizado',
        'Sentido común'
      ],
      cta: '¡Hazte "Pro"!',
      popular: true,
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      name: 'Enterprise',
      price: '$9,999',
      period: '/mes',
      description: 'Para CEOs del futuro (desempleados del presente)',
      features: [
        'Todo lo del plan Pro',
        'Llamada mensual de 5 minutos',
        'Tu nombre en los créditos',
        'NFT exclusivo (sin valor)',
        'Acceso al "Círculo Interno" (grupo de Facebook)',
        'Diploma enmarcado (marco no incluido)',
        'Sesión de coaching (venderte más cursos)'
      ],
      notIncluded: [
        'ROI positivo',
        'Dignidad',
        'Reembolsos'
      ],
      cta: 'Vender un Riñón',
      popular: false,
      gradient: 'from-yellow-500 to-yellow-700'
    }
  ];

  return (
    <section id="pricing" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Planes de "Inversión"
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Elige cuánto quieres perder este mes. Recuerda: no es un gasto, 
            es una "inversión en tu futuro" (spoiler: no lo es).
          </p>
          <div className="mt-4 inline-block glass-effect px-4 py-2 rounded-full">
            <span className="text-yellow-400">⚠️</span>
            <span className="text-sm text-gray-300 ml-2">
              Sin garantía de devolución bajo ninguna circunstancia
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative ${plan.popular ? 'md:-mt-8' : ''}`}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-bold whitespace-nowrap">
                    MÁS POPULAR (según nosotros)
                  </span>
                </div>
              )}
              
              <div className={`glass-effect rounded-3xl p-8 h-full card-hover ${
                plan.popular ? 'border-2 border-purple-500 glow' : ''
              }`}>
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                    {plan.name}
                  </h3>
                  <div className="mt-4">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">{plan.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  <p className="text-sm font-bold text-green-400">✓ Incluye:</p>
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 mb-6 opacity-60">
                  <p className="text-sm font-bold text-red-400">✗ No incluye:</p>
                  {plan.notIncluded.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">✗</span>
                      <span className="text-gray-400 text-sm line-through">{item}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full ${
                  plan.popular ? 'btn-gradient' : 'btn-glass'
                } ${hoveredPlan === index ? 'animate-pulse' : ''}`}>
                  {plan.cta}
                </button>

                {hoveredPlan === index && (
                  <p className="text-xs text-center text-gray-500 mt-3 animate-pulse">
                    Por favor, no lo hagas
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-gray-400">
          <p className="text-sm">
            💡 <strong>Pro tip:</strong> El plan gratis tiene el mismo valor educativo que los otros dos
          </p>
        </div>
      </div>
    </section>
  );
}