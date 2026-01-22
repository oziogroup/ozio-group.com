---
stepsCompleted: ["step-01-init", "step-02-context", "step-03-starter", "step-04-decisions", "step-05-patterns", "step-06-structure", "step-07-validation", "step-08-complete"]
status: "complete"
completedAt: "2026-01-22T19:15:00+02:00"
inputDocuments:
  - "_bmad-output/planning-artifacts/prd.md"
  - "_bmad-output/planning-artifacts/ux-design-specification.md"
  - "_bmad-output/planning-artifacts/product-brief-ozio-group.com-2026-01-22.md"
workflowType: 'architecture'
project_name: 'ozio-group.com'
user_name: 'Simon'
date: '2026-01-22'
---

# Architecture Decision Document

_This document builds collaboratively through step-by-step discovery. Sections are appended as we work through each architectural decision together._

## Project Context Analysis

### Requirements Overview

**Functional Requirements (32 total):**
- Site Structure: 4 FRs (navigation, language toggle, responsive, persistence)
- Content Display: 7 FRs (hero, proof points, culture, departments, photos)
- Career Discovery: 3 FRs (LinkedIn embed, apply flow)
- Application: 4 FRs (form, confirmation, email delivery)
- Visual Experience: 5 FRs (scroll animations, counters, parallax, 60fps)
- SEO: 6 FRs (meta, sitemap, hreflang, OG, Schema.org)
- Performance: 3 FRs (load time, progressive enhancement, auto-deploy)

**Non-Functional Requirements (17 total):**
- Performance: 8 NFRs (Lighthouse 90+, FCP <1.5s, LCP <2.5s, CLS <0.1, 60fps, <2MB)
- SEO Quality: 4 NFRs (Lighthouse SEO 90+, hreflang valid, Schema valid, sitemap valid)
- Reliability: 3 NFRs (99.9% uptime, SSL, form 99%+ success)
- Compatibility: 2 NFRs (cross-browser, responsive)

### Scale & Complexity

| Factor | Assessment |
|--------|------------|
| Complexity | **Low** — static site, no backend, no auth, no database |
| Primary Domain | Static web (MPA) |
| Pages | 5 pages × 2 languages = 10 static pages |
| Components | ~15-20 custom components |
| Data | Hardcoded content only |

### Technical Constraints

| Constraint | Source | Impact |
|------------|--------|--------|
| **No React/Vue/Angular** | PRD | Must use vanilla JS or lightweight framework |
| **Lighthouse 90+ (mobile)** | PRD | Animation performance is critical |
| **Static HTML only** | PRD | No SSR, no backend |
| **Free hosting** | PRD | Cloudflare Pages (free tier) |
| **Free form service** | PRD | Formspree/Web3Forms/Cloudflare Workers |

### Cross-Cutting Concerns

| Concern | Scope |
|---------|-------|
| Bilingual (i18n) | All pages — duplicate structure with /fr/ and /en/ paths |
| Animation System | All content sections — consistent scroll-triggered reveals |
| Performance Optimization | All assets — image compression, lazy loading, CSS-first animations |
| SEO | All pages — meta, hreflang, sitemaps, structured data |
| Dark Mode | All components — consistent color system |

## Starter Template Evaluation

### Primary Technology Domain

**Static MPA** — content-driven marketing site with premium animations

### Starter Options Considered

| Option | Pros | Cons | Verdict |
|--------|------|------|---------|
| **Astro** | Zero JS by default, 62% Core Web Vitals pass rate, Tailwind integration, Cloudflare native | Learning curve if unfamiliar | ✅ Selected |
| **Eleventy (11ty)** | Simple, flexible, fast builds | Less modern DX, manual asset pipeline | ❌ |
| **Vanilla + Vite** | Total control, no framework overhead | More manual setup, no conventions | ❌ |

### Selected Starter: Astro

**Rationale:**
- Zero JS by default — ships pure HTML/CSS unless explicitly added
- Best-in-class Core Web Vitals (62% pass rate, highest of all frameworks)
- First-class Tailwind CSS integration
- GSAP compatible as client-side script
- Native Cloudflare Pages adapter
- Content Collections for bilingual content organization
- Built-in image optimization for Lighthouse targets

**Initialization Command:**

```bash
npm create astro@latest ozio-group-site -- --template minimal --typescript strict
npx astro add tailwind
```

### Architectural Decisions Provided by Starter

| Layer | Decision |
|-------|----------|
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS via @astrojs/tailwind |
| Build | Vite (under the hood) |
| Output | Static HTML (default) |
| Routing | File-based (/src/pages/) |
| Components | .astro files (HTML-like, zero JS) |
| Assets | Built-in optimization |

### Project Structure

```
/src/
├── pages/
│   ├── index.astro        → redirects to /fr/
│   ├── fr/
│   │   ├── index.astro    → Home (FR)
│   │   ├── about.astro
│   │   ├── culture.astro
│   │   ├── careers.astro
│   │   └── contact.astro
│   └── en/
│       ├── index.astro    → Home (EN)
│       ├── about.astro
│       ├── culture.astro
│       ├── careers.astro
│       └── contact.astro
├── components/
├── layouts/
├── styles/
└── content/
```

## Core Architectural Decisions

### Decision Summary

| Category | Decision | Rationale |
|----------|----------|-----------|
| Animation | GSAP | Industry standard, 60fps, no framework dependency |
| Form Service | Web3Forms | 250 free submissions/month, no account needed |
| Image Optimization | Astro Image (built-in) | Free, automatic format conversion, lazy loading |
| Bilingual Structure | Duplicate pages | Simpler for 5 pages, clearer structure |
| SEO Sitemap | @astrojs/sitemap | Native integration |
| Schema.org | JSON-LD scripts | Manual implementation in layouts |

### Animation Architecture

**Library:** GSAP (GreenSock Animation Platform)

```bash
npm install gsap
```

**Implementation Pattern:**
```astro
---
// Server-rendered component
---
<section class="hero" data-animate="fade-up">
  <h1>Not Another Call Center</h1>
</section>

<script>
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.utils.toArray('[data-animate="fade-up"]').forEach(el => {
    gsap.from(el, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: { trigger: el, start: 'top 80%' }
    });
  });
</script>
```

### Form Architecture

**Service:** Web3Forms (free tier)

**Implementation:**
```html
<form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
  <input type="hidden" name="redirect" value="https://ozio-group.com/fr/merci">
  <input type="checkbox" name="botcheck" class="hidden">
  <!-- Form fields -->
</form>
```

**Features:**
- 250 submissions/month (free)
- Honeypot spam protection
- File uploads supported
- Email delivery to Simon's inbox

### Image Optimization

**Tool:** Astro Image (built-in)

```astro
---
import { Image } from 'astro:assets';
import teamPhoto from '../assets/team.jpg';
---
<Image src={teamPhoto} alt="Ozio team" width={800} loading="lazy" />
```

**Auto-optimization:**
- WebP/AVIF format conversion
- Responsive srcset generation
- Lazy loading by default
- Width/height attributes (prevents CLS)

### SEO Implementation

| Element | Implementation |
|---------|----------------|
| Meta tags | Frontmatter → BaseLayout `<head>` |
| Sitemap | `@astrojs/sitemap` (auto-generated) |
| Schema.org | JSON-LD in layout |
| Hreflang | Manual `<link>` tags in layout |
| Canonical | Self-referencing per page |

**Hreflang Pattern:**
```astro
<link rel="alternate" hreflang="fr" href="https://ozio-group.com/fr/about" />
<link rel="alternate" hreflang="en" href="https://ozio-group.com/en/about" />
<link rel="alternate" hreflang="x-default" href="https://ozio-group.com/fr/about" />
```

### Infrastructure & Deployment

| Component | Tool |
|-----------|------|
| Source Control | GitHub |
| CI/CD | Cloudflare Pages (auto-deploy) |
| Hosting | Cloudflare Pages (free tier) |
| CDN | Cloudflare (included) |
| SSL | Cloudflare (auto) |
| Domain | ozio-group.com |

**Deploy Command:**
```bash
npm run build  # Outputs to /dist
```

**Cloudflare Pages Config:**
- Build command: `npm run build`
- Output directory: `dist`
- Node version: 18+

## Implementation Patterns & Consistency Rules

### Naming Patterns

| Element | Convention | Example |
|---------|------------|---------|
| Pages | kebab-case | `about.astro`, `careers.astro` |
| Components | PascalCase | `HeroSection.astro`, `StatCounter.astro` |
| Layouts | PascalCase | `BaseLayout.astro` |
| CSS Classes | Tailwind utilities | `class="text-white bg-zinc-900"` |
| Data Attributes | kebab-case | `data-animate="fade-up"` |
| Assets | kebab-case | `team-photo.jpg`, `logo-white.svg` |

### File Structure Patterns

```
/src/
├── pages/
│   ├── fr/                 # French pages
│   └── en/                 # English pages
├── components/
│   ├── ui/                 # Reusable UI (Button, Card)
│   ├── sections/           # Page sections (Hero, Stats)
│   └── layout/             # Nav, Footer, etc.
├── layouts/
│   └── BaseLayout.astro    # Single base layout
├── styles/
│   └── global.css          # Tailwind imports + custom
├── assets/
│   ├── images/             # Photos, graphics
│   └── icons/              # SVG icons
├── content/
│   ├── fr.json             # French strings
│   └── en.json             # English strings
└── lib/
    └── animations.ts       # GSAP utilities
```

### Component Structure Pattern

```astro
---
// 1. Imports
import { Image } from 'astro:assets';

// 2. Props interface
interface Props {
  title: string;
  lang: 'fr' | 'en';
}

// 3. Props destructuring
const { title, lang } = Astro.props;
---

<!-- 4. Template -->
<section class="py-20">
  <h2>{title}</h2>
</section>

<!-- 5. Scoped styles (if needed) -->
<style>
  /* Component-specific styles */
</style>

<!-- 6. Client-side script (if needed) -->
<script>
  // GSAP animations
</script>
```

### Animation Patterns

**Data Attribute Convention:**
| Attribute | Effect |
|-----------|--------|
| `data-animate="fade-up"` | Fade in from below |
| `data-animate="fade-in"` | Simple fade |
| `data-animate="slide-left"` | Slide from left |
| `data-animate="counter"` | Number counter |
| `data-animate="stagger"` | Staggered children |

**GSAP Utilities Location:** `/src/lib/animations.ts`

### Bilingual Content Pattern

**Content JSON Structure:**
```json
{
  "nav": { "home": "Accueil", "about": "À Propos" },
  "hero": { "headline": "Pas un autre call center." }
}
```

**Usage:** Import from `/src/content/{lang}.json`

### Tailwind Color System

```javascript
colors: {
  background: '#0a0a0a',
  surface: '#1a1a1a',
  elevated: '#242424',
  accent: '#F59E0B',
  'accent-red': '#EF4444',
}
```

### Enforcement Rules

**All AI Agents MUST:**
1. Use PascalCase for components, kebab-case for files/assets
2. Place all animations in `/src/lib/animations.ts`
3. Use `data-animate` attributes, not inline GSAP calls
4. Load content from JSON files, not hardcode strings
5. Follow the exact folder structure defined above

## Project Structure & Boundaries

### Complete Project Directory Structure

```
ozio-group-site/
├── README.md
├── package.json
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── .env.example
├── .gitignore
│
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── _headers                    # Cloudflare headers
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── logo-white.svg
│   │   │   ├── logo-black.svg
│   │   │   ├── team-office.jpg
│   │   │   ├── team-outing.jpg
│   │   │   └── hero-bg.jpg
│   │   └── icons/
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.astro
│   │   │   ├── MobileMenu.astro
│   │   │   ├── Footer.astro
│   │   │   └── LanguageToggle.astro
│   │   │
│   │   ├── sections/
│   │   │   ├── HeroSection.astro
│   │   │   ├── StatsSection.astro
│   │   │   ├── AboutSection.astro
│   │   │   ├── CultureSection.astro
│   │   │   ├── SoulSection.astro
│   │   │   ├── DepartmentsSection.astro
│   │   │   ├── TeamPhotos.astro
│   │   │   └── JobsSection.astro
│   │   │
│   │   └── ui/
│   │       ├── Button.astro
│   │       ├── Card.astro
│   │       ├── StatCounter.astro
│   │       ├── Badge.astro
│   │       └── ContactForm.astro
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro              # Redirect to /fr/
│   │   ├── fr/
│   │   │   ├── index.astro
│   │   │   ├── a-propos.astro
│   │   │   ├── culture.astro
│   │   │   ├── carrieres.astro
│   │   │   ├── contact.astro
│   │   │   └── merci.astro
│   │   └── en/
│   │       ├── index.astro
│   │       ├── about.astro
│   │       ├── culture.astro
│   │       ├── careers.astro
│   │       ├── contact.astro
│   │       └── thank-you.astro
│   │
│   ├── content/
│   │   ├── fr.json
│   │   └── en.json
│   │
│   ├── lib/
│   │   ├── animations.ts
│   │   └── utils.ts
│   │
│   └── styles/
│       └── global.css
│
└── dist/                            # Build output (gitignored)
```

### Requirements to Structure Mapping

| FR | Description | Location |
|----|-------------|----------|
| FR1-4 | Navigation & language | `components/layout/` |
| FR5-11 | Content display | `components/sections/` |
| FR12-14 | Career discovery | `components/sections/JobsSection.astro` |
| FR15-18 | Application form | `components/ui/ContactForm.astro` |
| FR19-23 | Animations | `lib/animations.ts` |
| FR24-29 | SEO | `layouts/BaseLayout.astro` |

### External Integrations

| Service | Integration Point |
|---------|-------------------|
| Web3Forms | `ContactForm.astro` POST action |
| LinkedIn | `JobsSection.astro` embed |
| Google Analytics | `BaseLayout.astro` head |
| Cloudflare | `astro.config.mjs` adapter |

### Key Configuration Files

**astro.config.mjs:**
```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ozio-group.com',
  integrations: [tailwind(), sitemap()],
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
  },
});
```

**tailwind.config.mjs:**
```javascript
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#1a1a1a',
        elevated: '#242424',
        accent: '#F59E0B',
        'accent-red': '#EF4444',
      },
    },
  },
};
```

## Architecture Validation

### Coherence Check ✅

| Check | Status |
|-------|--------|
| Astro + Tailwind + GSAP compatibility | ✅ Pass |
| TypeScript strict mode | ✅ Pass |
| Static output + Cloudflare | ✅ Pass |
| Web3Forms + static HTML | ✅ Pass |
| Patterns aligned with stack | ✅ Pass |

### Requirements Coverage ✅

- **32 Functional Requirements:** All mapped to components
- **17 Non-Functional Requirements:** All architecturally supported
- **No gaps identified**

### Implementation Readiness ✅

- [x] Technology stack complete
- [x] Project structure defined
- [x] Naming conventions established
- [x] Animation patterns documented
- [x] Integration points specified
- [x] Assets available

## Implementation Resources

### Existing Assets

**Location:** `/assets/` (copy to `/src/assets/images/` during setup)

**Logos:**
- `logo_ozio.png` — White version (dark backgrounds)
- `logo_ozio_black.png` — Black version (light backgrounds)

**Team Photos:** 25 photos from 2022-2025 (team outings, office)

### External Service Credentials

**Web3Forms:**
- Access Key: `455a56ff-7dbf-44b7-9d0a-2a1542d554e9`
- Endpoint: `https://api.web3forms.com/submit`

**LinkedIn:**
- Company Page: `https://www.linkedin.com/company/ozio-group/`
- Jobs URL: `https://www.linkedin.com/company/ozio-group/jobs/`

### First Implementation Step

```bash
npm create astro@latest ozio-group-site -- --template minimal --typescript strict
cd ozio-group-site
npx astro add tailwind sitemap
npm install gsap
```

## Architecture Status: COMPLETE ✅

**Ready for:** Epic breakdown → Sprint planning → Implementation
