# Story 1.1: Project Initialization & Deployment Pipeline

## Story

As a **developer**,
I want **the Astro project initialized with all dependencies and Cloudflare deployment configured**,
So that **I have a working foundation that auto-deploys on every push**.

## Acceptance Criteria

**AC1: Astro Project Setup**
- Given no project exists
- When I run the initialization commands
- Then an Astro project is created with TypeScript strict mode
- And Tailwind CSS is installed and configured with custom color tokens
- And GSAP is installed as a dependency
- And @astrojs/sitemap integration is added
- And the project builds without errors

**AC2: Cloudflare Deployment Ready**
- Given the project is pushed to GitHub
- When Cloudflare Pages is connected
- Then the site auto-deploys on every push to main
- And the site is accessible at ozio-group.com
- And SSL is active

## Tasks/Subtasks

- [x] **Task 1: Initialize Astro Project**
  - [x] Run `npm create astro@latest` with minimal template and TypeScript strict
  - [x] Verify project structure created correctly
  - [x] Confirm TypeScript strict mode enabled in tsconfig.json

- [x] **Task 2: Add Tailwind CSS**
  - [x] Run `npx astro add tailwind`
  - [x] Configure custom color tokens in global.css (Tailwind v4 uses CSS @theme)
  - [x] Create global.css with Tailwind imports and custom theme

- [x] **Task 3: Install Dependencies**
  - [x] Install GSAP: `npm install gsap`
  - [x] Add @astrojs/sitemap: `npx astro add sitemap`
  - [x] Verify all dependencies in package.json

- [x] **Task 4: Configure Project Structure**
  - [x] Create directory structure per Architecture spec
  - [x] Add placeholder content files (fr.json, en.json)
  - [x] Configure astro.config.mjs with site URL and integrations

- [x] **Task 5: Verify Build**
  - [x] Run `npm run build` successfully
  - [x] Verify dist/ output is generated
  - [x] No TypeScript or build errors

## Dev Notes

### Architecture Requirements
- Starter: Astro with TypeScript strict (`npm create astro@latest -- --template minimal --typescript strict`)
- Styling: Tailwind CSS via @astrojs/tailwind
- Animation: GSAP (client-side)
- SEO: @astrojs/sitemap for auto-generated sitemaps
- Output: Static HTML to /dist

### Custom Color Tokens (from Architecture)
```javascript
colors: {
  background: '#0a0a0a',
  surface: '#1a1a1a',
  elevated: '#242424',
  accent: '#F59E0B',
  'accent-hover': '#EF4444',
  text: {
    primary: '#FFFFFF',
    secondary: '#A3A3A3',
    muted: '#737373'
  }
}
```

### Project Structure Target
```
/src/
├── pages/
│   ├── fr/
│   └── en/
├── components/
│   ├── ui/
│   ├── sections/
│   └── layout/
├── layouts/
├── styles/
├── assets/
│   ├── images/
│   └── icons/
├── content/
│   ├── fr.json
│   └── en.json
└── lib/
```

### Technical Decisions
- Site URL: https://ozio-group.com
- Build output: static
- Node version: 18+

## Dev Agent Record

### Implementation Plan
1. Initialize Astro with TypeScript strict in existing workspace
2. Add Tailwind CSS v4 with custom color tokens via @theme directive
3. Install GSAP and @astrojs/sitemap integrations
4. Create full directory structure per Architecture spec
5. Add bilingual content files and animation utilities
6. Verify build passes with 0 errors

### Debug Log
- Astro CLI detected non-empty directory, initialized manually with npm packages
- Tailwind v4 uses CSS-based @theme configuration instead of tailwind.config.mjs
- IDE shows warnings for @theme/@apply directives (expected - Tailwind-specific CSS)

### Completion Notes
**AC1 Satisfied:**
- ✅ Astro 5.16.14 installed with TypeScript strict mode (tsconfig.json extends astro/tsconfigs/strict)
- ✅ Tailwind CSS v4.1.18 configured with custom color tokens (background, surface, elevated, accent, text variants)
- ✅ GSAP 3.x installed as dependency
- ✅ @astrojs/sitemap added and generating sitemap-index.xml
- ✅ Build passes: 0 errors, 0 warnings, 3 pages built in 269ms

**AC2 Preparation:**
- Site URL configured: https://ozio-group.com
- Static output configured for Cloudflare Pages compatibility
- Build command ready: `npm run build` → outputs to `/dist`
- GitHub push + Cloudflare connection is manual step (outside scope of code implementation)

## File List

**Created:**
- `package.json` - Project manifest with Astro scripts
- `tsconfig.json` - TypeScript strict configuration with path aliases
- `astro.config.mjs` - Astro config with Tailwind + Sitemap integrations
- `src/pages/index.astro` - Root redirect to /fr/
- `src/pages/fr/index.astro` - French homepage placeholder
- `src/pages/en/index.astro` - English homepage placeholder
- `src/styles/global.css` - Tailwind imports + custom theme tokens
- `src/content/fr.json` - French content strings
- `src/content/en.json` - English content strings
- `src/lib/animations.ts` - GSAP animation utilities

**Directories Created:**
- `src/pages/fr/`, `src/pages/en/`
- `src/components/ui/`, `src/components/sections/`, `src/components/layout/`
- `src/layouts/`, `src/styles/`, `src/assets/images/`, `src/assets/icons/`
- `src/content/`, `src/lib/`

**Build Output:**
- `dist/` - Static site output with sitemap-index.xml

## Change Log

| Date | Change | Author |
|------|--------|--------|
| 2026-01-22 | Story created from Epic 1.1 | Dev Agent |
| 2026-01-22 | All tasks completed, build verified | Dev Agent (Amelia) |

## Status

**Status:** review
**Epic:** Epic 1 - Site Foundation & Navigation Shell
**Sprint:** Sprint 1
