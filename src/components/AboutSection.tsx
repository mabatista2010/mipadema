'use client';

export default function AboutSection() {
  const founders = [
    {
      name: 'Chad Codemaster',
      role: 'CEO & Visionario',
      bio: 'Aprendió a programar en 3 días viendo TikToks. Ahora "maneja" 5 startups (todas en quiebra).',
      emoji: '🧑‍💻',
      achievement: 'Hello World en 17 lenguajes'
    },
    {
      name: 'Karen Blockchain',
      role: 'CTO & Gurú del Copy-Paste',
      bio: 'Stack Overflow Premium Member. Su código funciona pero nadie sabe por qué.',
      emoji: '👩‍💻',
      achievement: '0 bugs (no testeados)'
    },
    {
      name: 'Brad NFT',
      role: 'CFO & Experto en Criptoestafas',
      bio: 'Perdió todo en Bitcoin pero te enseñará a ser millonario. Trust me bro.',
      emoji: '🤵',
      achievement: '-$50,000 en crypto'
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Quiénes Somos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Somos un equipo de "expertos" que descubrió el secreto del éxito: 
            cobrar mucho por cursos que enseñan a cobrar mucho por cursos.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Es como un esquema piramidal, pero con más CSS
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {founders.map((founder, index) => (
            <div
              key={founder.name}
              className="glass-effect rounded-2xl p-6 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="text-6xl mb-4">{founder.emoji}</div>
                <h3 className="text-2xl font-bold text-white mb-1">{founder.name}</h3>
                <p className="text-purple-400 mb-4">{founder.role}</p>
                <p className="text-gray-300 mb-4">{founder.bio}</p>
                <div className="glass-dark rounded-full px-4 py-2 inline-block">
                  <span className="text-xs text-green-400">✓ {founder.achievement}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Nuestra "Metodología" Revolucionaria
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-bold text-purple-400">Paso 1: Motivación Tóxica</h4>
                  <p className="text-gray-300">Te haremos sentir mal por no ganar $10k/mes</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">📚</span>
                <div>
                  <h4 className="font-bold text-purple-400">Paso 2: Contenido Reciclado</h4>
                  <p className="text-gray-300">Tutoriales de YouTube pero más caros</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">🚀</span>
                <div>
                  <h4 className="font-bold text-purple-400">Paso 3: Falsas Promesas</h4>
                  <p className="text-gray-300">Garantizamos* tu éxito (*no garantizado)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">💸</span>
                <div>
                  <h4 className="font-bold text-purple-400">Paso 4: Profit (nuestro)</h4>
                  <p className="text-gray-300">Tu fracaso es nuestro éxito</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-3xl p-8">
            <div className="text-center">
              <div className="text-8xl mb-4">🏆</div>
              <h4 className="text-2xl font-bold gradient-text mb-4">
                Logros Inventados
              </h4>
              <div className="space-y-3 text-left">
                <div className="flex justify-between text-gray-300">
                  <span>Estudiantes "satisfechos"</span>
                  <span className="text-purple-400 font-bold">1M+</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Tasa de éxito</span>
                  <span className="text-purple-400 font-bold">99.9%*</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Certificados sin valor</span>
                  <span className="text-purple-400 font-bold">∞</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Demandas recibidas</span>
                  <span className="text-purple-400 font-bold">0**</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                *En nuestros sueños | **Este mes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}