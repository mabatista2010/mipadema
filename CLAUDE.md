# CLAUDE.md

Este archivo proporciona orientación a Claude Code (claude.ai/code) cuando trabaja con código en este repositorio.

## Comandos

### Desarrollo
- `npm run dev` - Iniciar servidor de desarrollo en http://localhost:3000
- `npm run build` - Crear build de producción
- `npm run start` - Iniciar servidor de producción
- `npm run lint` - Ejecutar ESLint para verificación de calidad de código

### Dependencias
- `npm install` - Instalar todas las dependencias

## Resumen del Proyecto

**VibeCoding** - Una landing page satírica que parodia los cursos de "hazte rico rápido" con programación. El sitio usa humor e ironía para burlarse de las promesas típicas de los cursos de programación en línea.

## Arquitectura del Proyecto

Esta es una aplicación Next.js 14 con TypeScript y Tailwind CSS:

- **Framework**: Next.js 14.0.4 con App Router
- **Estilos**: Tailwind CSS con PostCSS, efectos Glassmorphism, gradientes
- **Lenguaje**: TypeScript con modo estricto habilitado
- **Fuente**: Inter de Google Fonts
- **Diseño**: Tema oscuro con gradientes púrpura/rosa, animaciones modernas

### Estructura Principal

- `/src/app/` - Páginas y layouts del App Router
  - `layout.tsx` - Layout raíz con fuente Inter y configuración en español
  - `page.tsx` - Página principal que importa todos los componentes
  - `globals.css` - Estilos globales con animaciones personalizadas, glassmorphism, gradientes
- `/src/components/` - Componentes React para cada sección:
  - `Navbar.tsx` - Navegación fija con smooth scroll y menú móvil
  - `HeroSection.tsx` - Hero con animación de escritura y emojis flotantes
  - `AboutSection.tsx` - Presentación satírica del equipo
  - `PricingSection.tsx` - Tres niveles de precios (Gratis, Pro, Enterprise) con efectos hover
  - `CTASection.tsx` - Formulario de registro con cuenta regresiva falsa y animaciones
  - `Footer.tsx` - Footer con enlaces sociales y mockups legales

### Sistema de Diseño

#### Paleta de Colores
- Primario: Gradiente de púrpura a rosa
- Fondo: Gradiente oscuro (gray-900, purple-900)
- Texto: Blanco, tonos grises para jerarquía
- Acentos: Purple-400, pink-600, yellow-400

#### Efectos y Animaciones
- **Glassmorphism**: Clases `.glass-effect` y `.glass-dark`
- **Gradientes**: `.gradient-text`, `.btn-gradient`
- **Animaciones**: fade-in, slide-up, float, glow, pulse
- **Efectos Hover**: Transformaciones de escala, transiciones de color, cambios de elevación

### Alias de Rutas

- `@/*` mapea a `./src/*` para imports limpios

### Configuración de TypeScript

- Target: ES5
- Modo estricto habilitado
- Resolución de módulos: bundler
- JSX: preserve

## Notas sobre el Contenido

- Todo el contenido es satírico y humorístico
- Idioma español en todo el sitio
- Testimonios y estadísticas falsas
- Precios intencionalmente exagerados
- Tácticas falsas de urgencia y escasez
- Disclaimers conscientes sobre la naturaleza de parodia