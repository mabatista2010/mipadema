export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Bienvenido a Mi Sitio Web
        </h1>
        <p className="text-xl text-center text-gray-600">
          Este es un sitio web creado con Next.js
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">Característica 1</h2>
            <p className="text-gray-600">
              Descripción de la primera característica de tu sitio web.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">Característica 2</h2>
            <p className="text-gray-600">
              Descripción de la segunda característica de tu sitio web.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">Característica 3</h2>
            <p className="text-gray-600">
              Descripción de la tercera característica de tu sitio web.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}