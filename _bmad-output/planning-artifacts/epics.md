---
stepsCompleted: ["step-01-validate-prerequisites", "step-02-design-epics", "step-03-create-stories", "step-04-final-validation"]
status: "complete"
completedAt: "2026-01-22T19:23:00+02:00"
inputDocuments:
  - "_bmad-output/planning-artifacts/prd.md"
  - "_bmad-output/planning-artifacts/architecture.md"
  - "_bmad-output/planning-artifacts/ux-design-specification.md"
workflowType: 'epics'
project_name: 'ozio-group.com'
user_name: 'Simon'
date: '2026-01-22'
---

# ozio-group.com - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for ozio-group.com, decomposing the requirements from the PRD, UX Design, and Architecture into implementable stories.

## Requirements Inventory

### Functional Requirements

**Site Structure & Navigation:**
- **FR1:** Visitor can navigate between 5 main pages (Home, About, Culture, Careers, Contact)
- **FR2:** Visitor can switch between French and English languages site-wide
- **FR3:** Visitor can access the site on mobile, tablet, and desktop devices
- **FR4:** Language preference persists across page navigation

**Content Display:**
- **FR5:** Visitor can view hero section with primary anti-call-center messaging
- **FR6:** Visitor can view animated proof points (25K requests, €15M ARR, 2000+ artisans, 9 years)
- **FR7:** Visitor can view marketplace explanation (what Ozio does)
- **FR8:** Visitor can view company culture and values content
- **FR9:** Visitor can view "soul" content (why the work matters)
- **FR10:** Visitor can view department overviews (Tech, Marketing, Sales, Operations, Support)
- **FR11:** Visitor can view team/office life photos

**Career Discovery:**
- **FR12:** Visitor can view current open positions via LinkedIn embed
- **FR13:** Visitor can click through to apply for specific positions on LinkedIn
- **FR14:** Visitor can understand role expectations before applying

**Application & Contact:**
- **FR15:** Visitor can submit spontaneous application (name, email, phone, message, optional CV)
- **FR16:** Visitor receives on-page confirmation after form submission
- **FR17:** Simon receives email notification with submission details
- **FR18:** Visitor can view contact information

**Visual Experience:**
- **FR19:** Visitor experiences scroll-triggered content reveals
- **FR20:** Visitor experiences animated number counters on proof points
- **FR21:** Visitor experiences smooth page transitions and hover states
- **FR22:** Visitor experiences parallax effects on hero/background elements
- **FR23:** All animations perform at 60fps without jank

**SEO & Discoverability:**
- **FR24:** Search engines can crawl and index all pages
- **FR25:** Each page has unique meta title and description
- **FR26:** Site provides XML sitemap(s) for search engines
- **FR27:** Site provides proper hreflang tags for language variants
- **FR28:** Site provides Open Graph tags for social sharing
- **FR29:** Site provides Schema.org markup (Organization, JobPosting)

**Performance & Reliability:**
- **FR30:** Site loads and becomes interactive within performance targets
- **FR31:** Site functions without JavaScript for core content (progressive enhancement)
- **FR32:** Site deploys automatically when code is pushed to GitHub

### Non-Functional Requirements

**Performance:**
- **NFR1:** Lighthouse Performance (Desktop) — 90+
- **NFR2:** Lighthouse Performance (Mobile) — 90+
- **NFR3:** First Contentful Paint — < 1.5s
- **NFR4:** Largest Contentful Paint — < 2.5s
- **NFR5:** Cumulative Layout Shift — < 0.1
- **NFR6:** Animation Frame Rate — 60fps
- **NFR7:** Total Page Weight — < 2MB
- **NFR8:** Time to Interactive — < 3.5s

**SEO Quality:**
- **NFR9:** Lighthouse SEO Score — 90+
- **NFR10:** Valid hreflang implementation — Pass
- **NFR11:** Valid Schema.org markup — Pass
- **NFR12:** Valid sitemap — Pass

**Reliability:**
- **NFR13:** Site Uptime — 99.9%
- **NFR14:** SSL Certificate — Valid, auto-renewed
- **NFR15:** Form submission success rate — > 99%

**Browser Compatibility:**
- **NFR16:** Cross-browser consistency — Visual parity across supported browsers
- **NFR17:** Responsive breakpoints — Fluid layout at all viewport widths

### Additional Requirements

**From Architecture:**
- Starter Template: Astro with TypeScript strict mode (`npm create astro@latest -- --template minimal --typescript strict`)
- Animation Library: GSAP with ScrollTrigger plugin
- Form Service: Web3Forms (access key provided, 250 submissions/month free)
- Bilingual Structure: Duplicate pages in `/fr/` and `/en/` paths with hreflang
- Image Optimization: Astro Image built-in (WebP/AVIF, lazy loading)
- Styling: Tailwind CSS with custom color tokens
- Deployment: Cloudflare Pages with auto-deploy from GitHub
- File Structure: Defined component/layout/page organization

**From UX Design:**
- Dark Mode Primary: Near-black base (#0a0a0a), surface (#1a1a1a), elevated (#242424)
- Warm Tech Accent: Orange (#F59E0B) → Red (#EF4444) gradient
- Typography: Space Grotesk (bold, geometric) for headlines
- Mobile Menu: Full-screen canvas overlay (100vh × 100vw) with blur backdrop
- Animation Timing: 500ms scroll reveals, 1.5s counter animations, 200ms hover states
- Spacing: 80-120px section padding (Apple-style generous whitespace)
- Touch Targets: Minimum 48px height on mobile
- Reduced Motion: Respect `prefers-reduced-motion` media query
- Button Hierarchy: Primary (gradient fill), Secondary (border), Ghost (text only)

### FR Coverage Map

| FR | Epic | Description |
|----|------|-------------|
| FR1 | Epic 1 | Navigate between 5 pages |
| FR2 | Epic 1 | Switch FR/EN languages |
| FR3 | Epic 1 | Mobile/tablet/desktop access |
| FR4 | Epic 1 | Language preference persistence |
| FR5 | Epic 2 | Hero with anti-call-center messaging |
| FR6 | Epic 2 | Animated proof points |
| FR7 | Epic 2 | Marketplace explanation |
| FR8 | Epic 3 | Culture and values content |
| FR9 | Epic 3 | Soul content (why work matters) |
| FR10 | Epic 3 | Department overviews |
| FR11 | Epic 3 | Team/office photos |
| FR12 | Epic 4 | LinkedIn jobs embed |
| FR13 | Epic 4 | Click to LinkedIn apply |
| FR14 | Epic 4 | Role expectations visible |
| FR15 | Epic 4 | Spontaneous application form |
| FR16 | Epic 4 | On-page confirmation |
| FR17 | Epic 4 | Email to Simon |
| FR18 | Epic 4 | Contact information |
| FR19 | Epic 2 | Scroll-triggered reveals |
| FR20 | Epic 2 | Animated number counters |
| FR21 | Epic 2 | Smooth transitions/hover states |
| FR22 | Epic 2 | Parallax effects |
| FR23 | Epic 2 | 60fps animations |
| FR24 | Epic 1 | Crawlable pages |
| FR25 | Epic 5 | Unique meta per page |
| FR26 | Epic 1 | XML sitemap |
| FR27 | Epic 5 | Hreflang tags |
| FR28 | Epic 5 | Open Graph tags |
| FR29 | Epic 5 | Schema.org markup |
| FR30 | Epic 1 | Performance targets |
| FR31 | Epic 1 | Progressive enhancement |
| FR32 | Epic 1 | Auto-deploy from GitHub |

## Epic List

### Epic 1: Site Foundation & Navigation Shell
Candidates can navigate a professional, bilingual site shell that immediately signals credibility.

**FRs covered:** FR1, FR2, FR3, FR4, FR24, FR26, FR30, FR31, FR32

**Delivers:**
- Astro project with Tailwind + GSAP setup
- BaseLayout with dark mode styling
- Responsive Navbar + Mobile Menu (canvas)
- Language toggle (FR/EN) with persistence
- Basic SEO meta structure
- Cloudflare Pages deployment pipeline

---

### Epic 2: Homepage & First Impression
Candidates land and within 5 seconds see proof that Ozio is "not another call center."

**FRs covered:** FR5, FR6, FR7, FR19, FR20, FR21, FR22, FR23

**Delivers:**
- Hero section with anti-call-center headline
- Animated StatCounter components (25K, €15M, 2000+, 9 years)
- Marketplace explanation section
- Scroll-triggered reveals + parallax
- 60fps animation performance

---

### Epic 3: Culture & Story Content
Candidates explore culture, values, and "soul" stories — understanding WHO Ozio is.

**FRs covered:** FR8, FR9, FR10, FR11

**Delivers:**
- Culture page with values ("Direct. Demanding. Fair.")
- Soul section with emotional stories
- Department overviews (Tech, Marketing, Sales, Ops, Support)
- Team photo gallery with office/outing images

---

### Epic 4: Career Discovery & Application
Candidates find relevant positions and apply with confidence.

**FRs covered:** FR12, FR13, FR14, FR15, FR16, FR17, FR18

**Delivers:**
- Careers page with LinkedIn jobs embed
- Click-through to LinkedIn Easy Apply
- Contact/spontaneous application form (Web3Forms)
- Form confirmation + thank you page
- Email delivery to Simon

---

### Epic 5: SEO & Performance Polish
Site ranks well, shares beautifully, and loads blazing fast.

**FRs covered:** FR25, FR27, FR28, FR29

**Delivers:**
- Unique meta titles/descriptions per page
- Hreflang tags for FR/EN variants
- Open Graph tags for social sharing
- Schema.org markup (Organization, JobPosting)
- Final Lighthouse 90+ validation

---

## Epic 1: Site Foundation & Navigation Shell

Candidates can navigate a professional, bilingual site shell that immediately signals credibility.

### Story 1.1: Project Initialization & Deployment Pipeline

As a **developer**,
I want **the Astro project initialized with all dependencies and Cloudflare deployment configured**,
So that **I have a working foundation that auto-deploys on every push**.

**Acceptance Criteria:**

**Given** no project exists
**When** I run the initialization commands
**Then** an Astro project is created with TypeScript strict mode
**And** Tailwind CSS is installed and configured with custom color tokens
**And** GSAP is installed as a dependency
**And** @astrojs/sitemap integration is added
**And** the project builds without errors

**Given** the project is pushed to GitHub
**When** Cloudflare Pages is connected
**Then** the site auto-deploys on every push to main
**And** the site is accessible at ozio-group.com
**And** SSL is active

---

### Story 1.2: BaseLayout & Dark Theme Foundation

As a **visitor**,
I want **a professional dark-themed layout that loads fast**,
So that **I immediately perceive Ozio as a serious tech company**.

**Acceptance Criteria:**

**Given** I visit any page
**When** the page loads
**Then** I see a dark background (#0a0a0a)
**And** text is white/gray with proper contrast
**And** the page has proper `<head>` with charset, viewport, and base meta tags
**And** global.css includes Tailwind imports and custom color tokens
**And** core content is visible without JavaScript (progressive enhancement)

**Given** I view the page source
**When** I inspect the HTML
**Then** semantic HTML structure is used (header, main, footer, nav)
**And** the page is crawlable by search engines

---

### Story 1.3: Responsive Navigation & Language Toggle

As a **visitor**,
I want **to navigate between pages and switch languages seamlessly**,
So that **I can explore the site in my preferred language on any device**.

**Acceptance Criteria:**

**Given** I am on any page (desktop)
**When** I view the navbar
**Then** I see the Ozio logo (left), navigation links (center), and language toggle (right)
**And** clicking a nav link takes me to that page
**And** the current page link is visually highlighted

**Given** I am on any page (mobile < 768px)
**When** I tap the hamburger menu icon
**Then** a full-screen canvas overlay opens (100vh × 100vw)
**And** nav links are displayed vertically with large touch targets (48px+)
**And** I can close the menu via X button or tapping outside
**And** body scroll is locked while menu is open

**Given** I click the language toggle (FR/EN)
**When** the toggle switches
**Then** I am redirected to the equivalent page in the other language
**And** my preference is saved to localStorage
**And** on subsequent visits, my language preference is respected

**Given** I resize the browser
**When** crossing the 768px breakpoint
**Then** the navigation smoothly transitions between mobile/desktop modes

---

### Story 1.4: Page Shell & Sitemap Generation

As a **visitor**,
I want **all pages to exist and be linked**,
So that **I can navigate the complete site structure**.

**Acceptance Criteria:**

**Given** the site is deployed
**When** I visit any of these URLs
**Then** the page loads successfully (no 404):
- `/` → redirects to `/fr/`
- `/fr/` (Home)
- `/fr/a-propos` (About)
- `/fr/culture`
- `/fr/carrieres`
- `/fr/contact`
- `/fr/merci` (Thank you)
- `/en/` (Home)
- `/en/about`
- `/en/culture`
- `/en/careers`
- `/en/contact`
- `/en/thank-you`

**Given** the site is built
**When** I check `/sitemap-index.xml`
**Then** a valid XML sitemap exists listing all pages
**And** the sitemap is accessible to search engines

---

## Epic 2: Homepage & First Impression

Candidates land and within 5 seconds see proof that Ozio is "not another call center."

### Story 2.1: Hero Section with Anti-Call-Center Messaging

As a **candidate**,
I want **to see a bold hero section that immediately differentiates Ozio**,
So that **I know within 5 seconds this isn't another call center**.

**Acceptance Criteria:**

**Given** I land on the homepage
**When** the page loads
**Then** I see a full-viewport hero section with dark background
**And** the headline "Pas un autre call center." (FR) / "Not Another Call Center." (EN) is prominently displayed
**And** a subheadline explains what Ozio actually does (European home services marketplace)
**And** a primary CTA button "Voir les postes" / "View Positions" is visible
**And** the hero loads and is visible within 1.5 seconds (FCP target)

**Given** I am on mobile
**When** I view the hero
**Then** the text is readable and the CTA is easily tappable (48px+ touch target)

---

### Story 2.2: Animated Statistics Section

As a **candidate**,
I want **to see Ozio's key numbers animate as I scroll**,
So that **I have proof this is a real, scaled company**.

**Acceptance Criteria:**

**Given** I scroll past the hero section
**When** the stats section enters the viewport (20% visible)
**Then** I see 4 stat counters animate from 0 to their target values:
- 25K+ (monthly requests)
- €15M+ (ARR)
- 2000+ (artisans in network)
- 9 (years in business)
**And** each counter completes in ~1.5 seconds with ease-out timing
**And** numbers display with appropriate suffixes (+, €, years)
**And** stats are displayed in a 2×2 grid (mobile) or 4-column row (desktop)

**Given** animations are running
**When** I check performance
**Then** animations maintain 60fps without jank
**And** the animation respects `prefers-reduced-motion` (instant display if enabled)

---

### Story 2.3: Marketplace Explanation Section

As a **candidate**,
I want **to understand what Ozio actually does**,
So that **I can explain the company to others and know what I'd be working on**.

**Acceptance Criteria:**

**Given** I scroll to the explanation section
**When** it enters the viewport
**Then** I see a clear explanation of the European home services marketplace
**And** content includes: connecting homeowners with artisans (locksmiths, plumbers, etc.)
**And** the section uses scroll-triggered fade-up reveal animation
**And** content is bilingual (loads from fr.json / en.json)

**Given** I read the section
**When** I finish
**Then** I understand the business model without industry jargon
**And** a secondary CTA encourages me to explore further

---

### Story 2.4: Animation System & Performance

As a **candidate**,
I want **smooth, Apple-level animations throughout the homepage**,
So that **the site feels premium and professional**.

**Acceptance Criteria:**

**Given** I scroll through the homepage
**When** sections enter the viewport
**Then** content reveals with consistent fade-up animations (20px movement, 500ms duration)
**And** animations use GSAP ScrollTrigger for scroll detection
**And** animation utilities are centralized in `/src/lib/animations.ts`
**And** components use `data-animate` attributes, not inline GSAP calls

**Given** I have `prefers-reduced-motion: reduce` enabled
**When** I view the page
**Then** all animations are disabled and content appears instantly

**Given** the page is loaded
**When** I run Lighthouse on mobile
**Then** Performance score is 90+ with animations active
**And** LCP is under 2.5 seconds
**And** CLS is under 0.1

---

## Epic 3: Culture & Story Content

Candidates explore culture, values, and "soul" stories — understanding WHO Ozio is.

### Story 3.1: Culture Page with Values

As a **candidate**,
I want **to understand Ozio's culture and values**,
So that **I can decide if I'd fit in and thrive here**.

**Acceptance Criteria:**

**Given** I navigate to the Culture page
**When** the page loads
**Then** I see the company values prominently displayed: "Direct. Demanding. Fair."
**And** each value has a brief explanation of what it means in practice
**And** the "Anti-Robot" philosophy is explained (variety, no scripts, real conversations)
**And** content loads from bilingual JSON files

**Given** I scroll through the culture page
**When** sections enter viewport
**Then** content reveals with scroll-triggered animations
**And** the design matches the dark theme with orange accents

---

### Story 3.2: Soul Section with Emotional Stories

As a **candidate**,
I want **to see real stories that show why Ozio's work matters**,
So that **I feel emotionally connected to the mission**.

**Acceptance Criteria:**

**Given** I view the Soul section (on Culture or About page)
**When** the section loads
**Then** I see at least 2 compelling stories:
- **Story 1 (Urgency):** Mother with 3 children locked out at -5°C, locksmith arrived in 25 minutes
- **Story 2 (Success):** Former banker became locksmith, now manages team of 3 with €1M revenue
**And** stories are presented with impactful typography and subtle animations
**And** the emotional impact is clear without being preachy

**Given** I read the stories
**When** I finish
**Then** I understand the real-world impact of the marketplace
**And** I feel this work has meaning beyond just calls

---

### Story 3.3: Department Overviews

As a **candidate**,
I want **to see what each department does**,
So that **I can find where I might fit**.

**Acceptance Criteria:**

**Given** I navigate to the About page
**When** I view the departments section
**Then** I see cards for each department:
- Tech
- Marketing
- Sales
- Operations
- Support
**And** each card has a brief description of what that team does
**And** cards have hover effects (lift + orange border glow)
**And** clicking a department scrolls to or links to relevant careers info

**Given** I am on mobile
**When** I view departments
**Then** cards stack vertically and are fully readable

---

### Story 3.4: Team Photo Gallery

As a **candidate**,
I want **to see real photos of the team and office**,
So that **I can verify this is a real company with real people**.

**Acceptance Criteria:**

**Given** I view the team photos section (Culture page)
**When** the section loads
**Then** I see a gallery of authentic team photos (office, outings, events)
**And** photos use Astro Image optimization (WebP/AVIF, lazy loading)
**And** photos have subtle hover effects (zoom)
**And** no stock photos are used

**Given** images load
**When** I check performance
**Then** images are lazy loaded below the fold
**And** images have width/height attributes (no CLS)
**And** total page weight stays under 2MB

---

## Epic 4: Career Discovery & Application

Candidates find relevant positions and apply with confidence.

### Story 4.1: Careers Page with LinkedIn Jobs Embed

As a **candidate**,
I want **to see current open positions**,
So that **I can find a role that matches my skills**.

**Acceptance Criteria:**

**Given** I navigate to the Careers page
**When** the page loads
**Then** I see a LinkedIn jobs widget/embed showing current openings
**And** the embed displays roles from Ozio's LinkedIn company page
**And** I can scroll through available positions
**And** each position shows title and basic info

**Given** I see a position I'm interested in
**When** I click on it
**Then** I am taken to LinkedIn to view full details and apply
**And** the link opens in a new tab

**Given** no positions are available
**When** I view the careers page
**Then** I see a message encouraging spontaneous applications
**And** the contact form is prominently featured

---

### Story 4.2: Contact & Spontaneous Application Form

As a **candidate**,
I want **to submit a spontaneous application**,
So that **I can express interest even if no perfect role is listed**.

**Acceptance Criteria:**

**Given** I navigate to the Contact page or careers form
**When** I view the form
**Then** I see fields for:
- Name (required)
- Email (required)
- Phone (optional)
- Message (required)
- CV upload (optional, future enhancement)
**And** the form uses Web3Forms for submission
**And** a honeypot field is present for spam protection (hidden)

**Given** I fill out the form correctly
**When** I click Submit
**Then** the button shows a loading state
**And** the form submits to Web3Forms API
**And** I see an on-page success confirmation
**And** I am redirected to the Thank You page (/fr/merci or /en/thank-you)

**Given** I submit with invalid data
**When** validation fails
**Then** I see inline error messages below invalid fields
**And** the form does not submit until errors are corrected

---

### Story 4.3: Form Email Delivery & Thank You Page

As **Simon (admin)**,
I want **to receive form submissions via email**,
So that **I can follow up with interested candidates**.

**Acceptance Criteria:**

**Given** a candidate submits the form
**When** submission is processed
**Then** an email is sent to Simon's inbox
**And** the email contains: Name, Email, Phone, Message
**And** the email has a clear subject line identifying it as an application

**Given** I am a candidate who just submitted
**When** I land on the Thank You page
**Then** I see a confirmation message thanking me for my interest
**And** I see next steps or timeline expectations
**And** I have a link to return to the homepage or careers page
**And** the page maintains the site design (dark theme, navigation)

---

## Epic 5: SEO & Performance Polish

Site ranks well, shares beautifully, and loads blazing fast.

### Story 5.1: Unique Meta Tags Per Page

As a **search engine / social platform**,
I want **unique, optimized meta tags on each page**,
So that **pages rank well and display correctly in search results**.

**Acceptance Criteria:**

**Given** I inspect any page
**When** I view the `<head>`
**Then** each page has a unique `<title>` (50-60 chars, keyword-optimized)
**And** each page has a unique `<meta name="description">` (150-160 chars)
**And** meta titles follow pattern: "Page Name | Ozio Group"
**And** descriptions are compelling and action-oriented

**Given** the site is crawled
**When** pages appear in search results
**Then** titles and descriptions display correctly
**And** no duplicate meta tags exist across pages

---

### Story 5.2: Hreflang Implementation

As a **search engine**,
I want **proper hreflang tags for language variants**,
So that **users see the correct language version in search results**.

**Acceptance Criteria:**

**Given** I inspect any page
**When** I view the `<head>`
**Then** I see hreflang tags for both language variants:
```html
<link rel="alternate" hreflang="fr" href="https://ozio-group.com/fr/[page]" />
<link rel="alternate" hreflang="en" href="https://ozio-group.com/en/[page]" />
<link rel="alternate" hreflang="x-default" href="https://ozio-group.com/fr/[page]" />
```
**And** canonical URLs are self-referencing
**And** hreflang values are valid ISO language codes

**Given** I run an SEO audit tool
**When** it checks hreflang implementation
**Then** no errors are reported
**And** all language variants are properly linked

---

### Story 5.3: Open Graph & Social Sharing

As a **candidate sharing the site**,
I want **rich previews when I share links**,
So that **the site looks professional on LinkedIn/social media**.

**Acceptance Criteria:**

**Given** I inspect any page
**When** I view the `<head>`
**Then** I see Open Graph tags:
- `og:title` (page title)
- `og:description` (page description)
- `og:image` (branded share image)
- `og:url` (canonical URL)
- `og:type` (website)
- `og:locale` (fr_FR or en_US)
**And** Twitter Card tags are present for Twitter/X sharing

**Given** I share a page URL on LinkedIn
**When** the preview generates
**Then** the title, description, and image display correctly
**And** the preview looks professional and branded

---

### Story 5.4: Schema.org Structured Data

As a **search engine**,
I want **Schema.org markup**,
So that **rich results can be displayed**.

**Acceptance Criteria:**

**Given** I inspect the homepage
**When** I view the JSON-LD script
**Then** I see valid Organization schema with:
- name: "Ozio Group"
- url: site URL
- logo: logo URL
- sameAs: LinkedIn profile URL

**Given** I inspect the careers page
**When** I view structured data
**Then** JobPosting schema is present (if positions are hardcoded)
**Or** the page links to LinkedIn where JobPosting exists

**Given** I test with Google Rich Results Test
**When** I validate the pages
**Then** no errors are reported
**And** Organization markup is valid

---

### Story 5.5: Final Performance Validation

As a **developer**,
I want **to verify all performance targets are met**,
So that **the site delivers the promised fast experience**.

**Acceptance Criteria:**

**Given** the site is fully built
**When** I run Lighthouse on mobile for all pages
**Then** Performance score is 90+ on every page
**And** SEO score is 90+ on every page
**And** FCP is < 1.5s
**And** LCP is < 2.5s
**And** CLS is < 0.1
**And** TTI is < 3.5s

**Given** I check total page weight
**When** I inspect network requests
**Then** each page is under 2MB total
**And** images are optimized (WebP/AVIF)
**And** no render-blocking resources delay FCP

