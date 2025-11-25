import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  themeColor: '#7c3aed',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'VibeCoding | Hazte Millonario Programando*',
  description: 'El curso de programacion que cambiara tu vida (financiera, para peor). Aprende a programar en 7 dias y gana $10,000/mes. Landing page satirica sobre cursos de programacion.',
  keywords: ['programacion', 'cursos', 'desarrollo web', 'satira', 'humor', 'vibecoding'],
  authors: [{ name: 'VibeCoding Team' }],
  creator: 'VibeCoding',
  publisher: 'VibeCoding',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://vibecoding.com',
    siteName: 'VibeCoding',
    title: 'VibeCoding | Hazte Millonario Programando*',
    description: 'El curso de programacion mas honesto del internet. *Resultados no garantizados.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VibeCoding - Cursos de Programacion',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VibeCoding | Hazte Millonario Programando*',
    description: 'El curso de programacion mas honesto del internet.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <div className="relative min-h-screen overflow-x-hidden">
          {/* Background effects */}
          <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-50" />
          <div className="fixed top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-[120px] pointer-events-none" />

          {/* Main content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
