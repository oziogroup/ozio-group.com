---
stepsCompleted: ["step-01-init", "step-02-discovery", "step-03-success", "step-04-journeys", "step-05-domain-skipped", "step-06-innovation-skipped", "step-07-project-type", "step-08-scoping", "step-09-functional", "step-10-nonfunctional", "step-11-polish", "step-12-complete"]
status: "complete"
completedAt: "2026-01-22T16:48:00Z"
inputDocuments:
  - "_bmad-output/planning-artifacts/product-brief-ozio-group.com-2026-01-22.md"
  - "_bmad-output/analysis/brainstorming-session-2026-01-22.md"
  - "_bmad-output/planning-artifacts/bmm-workflow-status.yaml"
workflowType: 'prd'
documentCounts:
  briefs: 1
  research: 0
  brainstorming: 1
  projectDocs: 0
userPreferences:
  visual: "Tech-forward, shiny, modern animations, makes company feel big"
  architecture: "Static site, no heavy JS frameworks (no React), minimal maintenance"
  form_handling: "TBD - needs serverless solution"
  seo: "Important - titles, descriptions, well-structured content, demonstrate SEO expertise"
  accessibility: "Nice-to-have, not priority"
classification:
  projectType: "web_app_static"
  domain: "general"
  complexity: "low"
  projectContext: "greenfield"
  architecture: "MPA"
  seo_required: true
  realtime: false
  accessibility: "basic"
---

# Product Requirements Document - Ozio Group

**Author:** Simon
**Date:** 2026-01-22

## Executive Summary

**Product:** Ozio Group Recruitment Website (ozio-group.com)
**Purpose:** Employer branding site that converts "who is Ozio?" into "this is a serious company worth joining"
**Differentiator:** Premium Apple-level animations + anti-call-center messaging + real numbers

**Key Constraints:**
- Static HTML only (no backend, no React)
- Lighthouse 90+ on mobile AND desktop
- Free hosting (Cloudflare Pages) + free form service
- Bilingual (FR/EN) with proper hreflang

**MVP Scope:** 5-page static site with LinkedIn jobs embed, spontaneous application form, premium scroll animations, full SEO

**Success Metric:** 40%+ application quality rate (up from 17-25%)

**Verified Company Data:**
- Team size: 28 people
- Founded: 2016
- Office location: Raanana, Israel
- Leadership: Anonymous (no names/photos on site)
- Monthly requests: 25K ✓
- ARR: €15M+ ✓
- Artisans in network: 2000+ ✓
- Monthly inbound calls: 50K ✓

**Real Stories (for Soul Section):**

**Story 1 — Customer Impact (Urgency):**
> Mother with 3 young children (5, 3, and 2 years old), locked out of apartment. -5°C freezing weather. No car. Neighbors not home. Called us — locksmith arrived in under 25 minutes. Door opened. Family safe.

**Story 2 — Artisan Success:**
> Former banker, tired of spreadsheets, wanted real human contact. Completed locksmith training. Had skills, no clients. Started with Ozio in 2022. Today (2026): manages a team of 3, nearly €1M annual revenue. Ozio represents 50%+ of his growth.

**Story 3 — Funny/Culture (April 1st):**
> Busy evening. Client calls: "I need help, but not with a door... with a chastity belt." Date: April 1st. No technician accepted. True story. (Use for culture section to show team humor and that real calls can be wild.)

## Success Criteria

### User Success

- **Immediate Impression (5 sec):** "This is serious" — professional, polished, tech-forward
- **Validation (30 sec):** "These are real guys" — numbers visible, industry clear, no red flags
- **Confidence (2 min):** "They're building real stuff" — understand the product, see the scale, feel the opportunity
- **Decision:** Apply with confidence OR self-select out (both are wins)

### Business Success

| Metric | Baseline | 3-Month Target | 6-Month Target |
|--------|----------|----------------|----------------|
| Application Quality Rate | 17-25% | 40%+ | 50%+ |
| Site-Aware Candidates | — | 50% mention site in interview | — |
| Bounce Rate | — | <60% | — |
| Time on Site | — | >90 sec | — |

### Technical Success

| Criteria | Definition of Done |
|----------|-------------------|
| Deployed | Live, no broken links |
| Bilingual | Full FR + EN content |
| SEO | Meta titles, descriptions, semantic HTML, sitemap |
| Form | Submissions arrive in inbox, confirmation shown |
| Mobile | Responsive on all devices (mobile, tablet, desktop) |
| Performance | Fast load (<3s), smooth animations |
| Analytics | GA tracking active |

### Measurable Outcomes

- Reduction in "what do you actually do?" questions from candidates
- Hiring managers report higher quality initial conversations
- HR partners can share single link for credibility validation
- 100% of job posts link to site

## Product Scope

### MVP - Minimum Viable Product

- **5-page static site:** Home, About, Culture, Careers, Contact
- **Bilingual:** FR primary, EN secondary with language toggle
- **Proof points display:** Key numbers prominently featured
- **LinkedIn jobs embed:** Live positions displayed
- **Contact/Application form:** Serverless delivery (email to Simon + confirmation)
- **Premium animations:** Apple-level "wow" effect — scroll-triggered animations, smooth transitions, parallax, reveal effects
- **SEO fundamentals:** Titles, meta descriptions, semantic structure, sitemap
- **Google Analytics:** Basic tracking
- **Fully responsive:** Mobile, tablet, desktop — all with polished experience

### Growth Features (Post-MVP)

- Individual job detail pages
- Team member profiles
- Video content integration
- Enhanced analytics/heatmaps

### Vision (Future)

- Candidate portal with application status tracking
- Internal referral system
- Blog/content section
- Multi-language expansion (Hebrew)

## User Journeys

### Journey 1: Yael, The Ambitious Newcomer

**Profile:** 26, made aliyah two years ago. Smart, driven, fluent French. Took a call center job "temporarily" — it's been 18 months.

**Trigger:** LinkedIn job post for Ozio. Clicks company link.

**On the Site:**
- **0-5 sec:** Hero loads with smooth animation. "Not Another Call Center." Numbers appear: 25K requests/month, €15M ARR. *"Wait, this looks... real?"*
- **30 sec:** Scrolls. Sees marketplace explanation. Locksmith, plumber, real trades. *"They actually say what they do."*
- **1 min:** Culture page. "Direct. Demanding. Fair." Real photos. *"No stock photos. No 'dynamic team' bullshit."*
- **2 min:** Careers section. SDR role. B2B. Enterprise clients. Build from scratch. *"This is an actual opportunity."*

**Decision:** Clicks LinkedIn apply. Excited about a job for the first time in months.

---

### Journey 2: David, The Skeptical Senior

**Profile:** 34, 8 years in tech sales. Moved to Israel for wife's work. Burned before — joined a boiler room disguised as a startup, then a multinational where French was a cost center.

**Trigger:** Recruiter email: "Check out Ozio Group." Googles them. Nothing. Goes to link anyway.

**On the Site:**
- **0-5 sec:** Professional. Premium animations. *"Someone invested in this."*
- **15 sec:** Numbers. €15M+ ARR. 9 years. 2000+ artisans. *"Specific numbers. Either lying or real."*
- **45 sec:** About page. European home services marketplace. Clear explanation. *"I can explain this to my wife."*
- **1.5 min:** Looks for red flags. Finds none. Bilingual works. SEO looks intentional.
- **2 min:** Careers. Team Lead role. Real responsibilities.

**Decision:** Replies to recruiter: "Set up a call."

---

### Journey 3: Marie, The Frustrated Call Center Veteran

**Profile:** 29, 4 years in call centers. Top performer but exhausted. Same objections, same rejection, same empty praise.

**Trigger:** Friend WhatsApps her: "Saw this, thought of you." Link to site.

**On the Site:**
- **5 sec:** "Not Another Call Center" — *"Okay, they know."*
- **20 sec:** "Inbound demand. 50K calls/month from people who NEED help." *"They come to us?"*
- **45 sec:** Culture. "Anti-Robot. If you feel like a robot, something is broken." *"Someone gets it."*
- **1 min:** Soul section. Mother locked out at 2AM. Technician building a business. *"This actually means something."*

**Decision:** Fills out spontaneous application. Writes a real cover letter for the first time in years.

---

### Journey 4: Recruiter / HR Partner

**Profile:** Noa, HR partner sourcing for Ozio. Found a candidate, needs to answer "Who are they?"

**On the Site:**
- **10 sec:** Grabs link, sends to candidate. Done.

**Requirements:** Shareable URL, fast load, answers "who is Ozio" immediately.

---

### Journey 5: Simon (Admin)

**Profile:** Receives form submissions.

**Flow:**
- Form submission triggers email to inbox
- Email contains: Name, contact info, message/CV
- Simon reviews, follows up directly

**Requirements:** Serverless form → email delivery, clear submission format.

---

### Journey Requirements Summary

| Capability | Revealed By |
|------------|-------------|
| Hero with anti-call-center positioning | Yael, Marie |
| Animated proof points (numbers) | Yael, David |
| Marketplace explanation | David |
| Culture/values content | Marie, Yael |
| Soul/meaning section | Marie |
| Department pages | Yael |
| LinkedIn jobs embed | Yael, David |
| Spontaneous application form | Marie |
| Bilingual (FR/EN) | David |
| Premium animations | David (credibility signal) |
| Fast load, shareable | Noa (recruiter) |
| Form → email delivery | Simon |

## Technical Requirements

### Project-Type Overview

**Type:** Static MPA (Multi-Page Application)
**Architecture:** Pre-rendered HTML pages with CSS animations and minimal JavaScript
**Source Control:** GitHub repository
**Hosting:** Cloudflare Pages with auto-deployment from GitHub
**Build:** Static HTML — no server-side rendering, no backend

### Browser Support

| Browser | Support Level |
|---------|---------------|
| Chrome (latest 2) | Full |
| Firefox (latest 2) | Full |
| Safari (latest 2) | Full |
| Edge (latest 2) | Full |
| Mobile Safari (iOS) | Full |
| Chrome Mobile (Android) | Full |

### Responsive Design

| Breakpoint | Target |
|------------|--------|
| Mobile | 320px - 767px |
| Tablet | 768px - 1023px |
| Desktop | 1024px+ |

**Approach:** Mobile-first CSS, fluid typography, responsive images.

### Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Score (Mobile) | 90+ |
| Lighthouse Score (Desktop) | 90+ |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Animation FPS | 60fps smooth |

**Constraints:**
- No heavy JS frameworks (React, Vue, Angular)
- CSS animations preferred over JS animations
- Lazy load images below fold
- Optimize/compress all assets
- **Beautiful AND fast — both are required**

### SEO Strategy

| Element | Implementation |
|---------|----------------|
| Meta Titles | Unique per page, keyword-optimized |
| Meta Descriptions | Compelling, action-oriented, 150-160 chars |
| Semantic HTML | Proper heading hierarchy (h1-h6) |
| Open Graph | Full OG tags for social sharing |
| Sitemap | XML sitemap per language |
| Robots.txt | Allow all crawling |
| Schema.org | Organization + JobPosting markup |
| **Hreflang** | Proper hreflang tags for FR/EN pages |
| **Canonical URLs** | Self-referencing canonicals per language |

### Animation Approach (Apple-Level Wow)

| Technique | Use Case |
|-----------|----------|
| Scroll-triggered reveals | Content sections fade/slide in |
| Parallax effects | Hero backgrounds, depth layers |
| Number counters | Animated stats on scroll |
| Smooth transitions | Page elements, hover states |
| Micro-interactions | Buttons, links, form fields |

**Libraries to Consider:**
- GSAP (GreenSock) — industry-standard animation
- Intersection Observer API — native scroll detection
- CSS @keyframes — lightweight effects
- Lenis or Locomotive Scroll — smooth scrolling

### Form Implementation

| Requirement | Solution |
|-------------|----------|
| Service | **Free tier** — Formspree Free, Web3Forms, or Cloudflare Workers (free tier) |
| Email delivery | To Simon's inbox |
| Confirmation | On-page success message |
| Fields | Name, Email, Phone (optional), Message, CV upload (optional) |
| Spam protection | Honeypot field + rate limiting |
| Cost | **$0** |

### Bilingual (i18n) Approach

| Requirement | Implementation |
|-------------|----------------|
| Structure | Separate pages per language (/fr/, /en/) |
| Default | French (/) or /fr/ as primary |
| Toggle | Persistent language selector in header |
| URLs | Language prefix in path |
| **Hreflang** | `<link rel="alternate" hreflang="fr">` and `hreflang="en"` on all pages |
| **Sitemaps** | Separate sitemap per language OR combined with hreflang |
| Content | Duplicated pages per language |

### Deployment Pipeline

| Component | Tool |
|-----------|------|
| Source Control | GitHub |
| CI/CD | Cloudflare Pages (auto-deploy on push) |
| Hosting | Cloudflare Pages (free tier) |
| CDN | Cloudflare (included) |
| SSL | Cloudflare (included) |
| Domain | ozio-group.com (configure DNS) |

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Animations hurt Lighthouse score | Medium | High | CSS-first approach, test early, Lighthouse as gate |
| Form service unreliable | Low | Medium | Multiple free options available, easy to swap |
| Content delays | Medium | Medium | Build structure first, content can be refined |
| Animation complexity exceeds timeline | Medium | Medium | Start with core animations, enhance iteratively |

## Functional Requirements

### Site Structure & Navigation

- **FR1:** Visitor can navigate between 5 main pages (Home, About, Culture, Careers, Contact)
- **FR2:** Visitor can switch between French and English languages site-wide
- **FR3:** Visitor can access the site on mobile, tablet, and desktop devices
- **FR4:** Language preference persists across page navigation

### Content Display

- **FR5:** Visitor can view hero section with primary anti-call-center messaging
- **FR6:** Visitor can view animated proof points (25K requests, €15M ARR, 2000+ artisans, 9 years)
- **FR7:** Visitor can view marketplace explanation (what Ozio does)
- **FR8:** Visitor can view company culture and values content
- **FR9:** Visitor can view "soul" content (why the work matters)
- **FR10:** Visitor can view department overviews (Tech, Marketing, Sales, Operations, Support)
- **FR11:** Visitor can view team/office life photos

### Career Discovery

- **FR12:** Visitor can view current open positions via LinkedIn embed
- **FR13:** Visitor can click through to apply for specific positions on LinkedIn
- **FR14:** Visitor can understand role expectations before applying

### Application & Contact

- **FR15:** Visitor can submit spontaneous application (name, email, phone, message, optional CV)
- **FR16:** Visitor receives on-page confirmation after form submission
- **FR17:** Simon receives email notification with submission details
- **FR18:** Visitor can view contact information

### Visual Experience

- **FR19:** Visitor experiences scroll-triggered content reveals
- **FR20:** Visitor experiences animated number counters on proof points
- **FR21:** Visitor experiences smooth page transitions and hover states
- **FR22:** Visitor experiences parallax effects on hero/background elements
- **FR23:** All animations perform at 60fps without jank

### SEO & Discoverability

- **FR24:** Search engines can crawl and index all pages
- **FR25:** Each page has unique meta title and description
- **FR26:** Site provides XML sitemap(s) for search engines
- **FR27:** Site provides proper hreflang tags for language variants
- **FR28:** Site provides Open Graph tags for social sharing
- **FR29:** Site provides Schema.org markup (Organization, JobPosting)

### Performance & Reliability

- **FR30:** Site loads and becomes interactive within performance targets
- **FR31:** Site functions without JavaScript for core content (progressive enhancement)
- **FR32:** Site deploys automatically when code is pushed to GitHub

## Non-Functional Requirements

### Performance

| Requirement | Target | Measurement |
|-------------|--------|-------------|
| **NFR1:** Lighthouse Performance (Desktop) | 90+ | Lighthouse audit |
| **NFR2:** Lighthouse Performance (Mobile) | 90+ | Lighthouse audit |
| **NFR3:** First Contentful Paint | < 1.5s | Lighthouse/WebPageTest |
| **NFR4:** Largest Contentful Paint | < 2.5s | Lighthouse/WebPageTest |
| **NFR5:** Cumulative Layout Shift | < 0.1 | Lighthouse |
| **NFR6:** Animation Frame Rate | 60fps | DevTools performance panel |
| **NFR7:** Total Page Weight | < 2MB | DevTools network panel |
| **NFR8:** Time to Interactive | < 3.5s | Lighthouse |

### SEO Quality

| Requirement | Target | Measurement |
|-------------|--------|-------------|
| **NFR9:** Lighthouse SEO Score | 90+ | Lighthouse audit |
| **NFR10:** Valid hreflang implementation | Pass | SEO audit tools |
| **NFR11:** Valid Schema.org markup | Pass | Google Rich Results Test |
| **NFR12:** Valid sitemap | Pass | Google Search Console |

### Reliability

| Requirement | Target | Measurement |
|-------------|--------|-------------|
| **NFR13:** Site Uptime | 99.9% | Cloudflare Pages SLA |
| **NFR14:** SSL Certificate | Valid, auto-renewed | Cloudflare (automatic) |
| **NFR15:** Form submission success rate | > 99% | Form service dashboard |

### Browser Compatibility

| Requirement | Target | Measurement |
|-------------|--------|-------------|
| **NFR16:** Cross-browser consistency | Visual parity across supported browsers | Manual QA |
| **NFR17:** Responsive breakpoints | Fluid layout at all viewport widths | Manual QA |

