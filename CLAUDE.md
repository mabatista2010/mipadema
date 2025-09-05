# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

### Dependencies
- `npm install` - Install all dependencies

## Project Architecture

This is a Next.js 14 application with TypeScript and Tailwind CSS:

- **Framework**: Next.js 14.0.4 with App Router
- **Styling**: Tailwind CSS with PostCSS
- **Language**: TypeScript with strict mode enabled
- **Font**: Inter from Google Fonts

### Key Structure

- `/src/app/` - App Router pages and layouts
  - `layout.tsx` - Root layout with Inter font and Spanish locale
  - `page.tsx` - Home page with welcome content
  - `globals.css` - Global styles with Tailwind directives
- `/src/components/` - Reusable React components (currently empty)
- `/src/styles/` - Additional style files

### Path Aliases

- `@/*` maps to `./src/*` for clean imports

### TypeScript Configuration

- Target: ES5
- Strict mode enabled
- Module resolution: bundler
- JSX: preserve