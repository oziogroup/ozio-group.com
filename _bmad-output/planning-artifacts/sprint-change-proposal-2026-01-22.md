# Sprint Change Proposal: Enhancement Sprint

**Date:** 2026-01-22  
**Author:** John (PM Agent)  
**Approved by:** Simon  
**Status:** APPROVED FOR IMPLEMENTATION

---

## Section 1: Issue Summary

### Problem Statement

The MVP implementation of ozio-group.com was completed but fundamentally fails to deliver the specified experience documented in the PRD, Architecture, and UX Design specifications developed through 2+ hours of collaborative discovery.

**Core Gap:** The implementation treated the project as a basic static site build (~10% of spec) rather than the premium, animation-rich credibility showcase that was designed.

### Discovery Context

- **Trigger:** Post-implementation review by stakeholder (Simon)
- **Date Discovered:** 2026-01-22
- **Severity:** CRITICAL — Site fails to achieve primary goal of "WOW factor" differentiation

### Evidence Summary

| Category | Specified | Delivered | Gap Severity |
|----------|-----------|-----------|--------------|
| Animations | GSAP parallax, scroll reveals, section transitions, 60fps micro-interactions | Basic `fade-up` only | **CRITICAL** |
| Content Depth | Detailed stories, department narratives, ~2000+ words homepage | ~200 words homepage | **CRITICAL** |
| Page Depth | Apple-style 80-120px padding, 6+ sections, 400vh+ scroll | <1000px total, 3 sections | **CRITICAL** |
| Logo | `logo_ozio.png` brand integration | Not implemented | **HIGH** |
| Tone | Professional balance — "Direct, demanding, fair" | Too aggressive/confrontational | **HIGH** |
| Button Interactions | Lift 2px + orange glow, 200ms transitions | Basic scale hover | **MEDIUM** |
| Background Effects | Animated gradients, geometric patterns | Flat solid colors | **HIGH** |
| Team Photos | 25 real photos with hover effects | Basic implementation | **MEDIUM** |

---

## Section 2: Impact Analysis

### Epic Impact

| Epic | Original Status | Actual Status | Required Action |
|------|-----------------|---------------|-----------------|
| **Epic 1: Foundation** | ✅ Complete | ⚠️ Partial | Add logo integration |
| **Epic 2: Homepage** | ✅ Complete | ❌ Failed | Complete rework — missing FR19-23 |
| **Epic 3: Culture & Story** | ✅ Complete | ❌ Failed | Content expansion, storytelling depth |
| **Epic 4: Careers & Application** | ✅ Complete | ⚠️ Partial | UX polish, form styling |
| **Epic 5: SEO & Polish** | ✅ Complete | ⚠️ Partial | True "polish" pass required |

### Artifact Conflicts

**PRD:**
- FR19-23 (Visual Experience) — Not implemented
- "Apple-level WOW effect" — Not achieved
- "Premium animations" — Missing

**Architecture:**
- No conflicts — stack is correct (Astro + GSAP + Tailwind)
- Issue is implementation depth, not architectural decisions

**UX Design:**
- Section padding (80-120px) — Not implemented
- Button hover specs — Not matched
- Background effects — Not implemented
- Stagger animations — Not implemented

### Technical Impact

- **No code rewrite needed** — Enhancement to existing components
- **No dependency changes** — GSAP already installed
- **No infrastructure changes** — Same deployment pipeline

---

## Section 3: Recommended Approach

### Selected Path: Direct Adjustment (Enhancement Sprint)

**Rationale:**
1. Architecture is sound — no rewrite required
2. Components exist — need enhancement, not replacement  
3. Content structure is there — needs depth, not restructuring
4. Clear, actionable list of missing features

### Effort Estimate

| Category | Effort | Sessions |
|----------|--------|----------|
| Animation System Enhancement | Medium | 1-2 |
| Content Expansion (EN + FR) | Medium | 1-2 |
| Visual Polish (buttons, backgrounds) | Low-Medium | 1 |
| Logo & Photo Integration | Low | 1 |
| **Total** | **Medium-High** | **4-6 sessions** |

### Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Animation complexity | Low | Medium | GSAP is already working, just expanding |
| Performance degradation | Low | High | Test Lighthouse after each addition |
| Content translation drift | Medium | Low | Update EN and FR in parallel |

### Timeline Impact

- **Original:** MVP "complete"
- **Revised:** +1-2 sprints for Enhancement Sprint
- **Justification:** Delivering the actual spec, not a hollow shell

---

## Section 4: Detailed Change Proposals

### Summary of Approved Changes

| # | Proposal | Epic | Priority |
|---|----------|------|----------|
| 1 | Parallax & Background Animations | Epic 2 | P0 |
| 2 | Page Depth & Section Spacing | Epic 2 | P0 |
| 3 | Content Depth Expansion (Stories) | Epic 3 | P0 |
| 4 | Logo Integration | Epic 1 | P1 |
| 5 | Button Hover Animations | Epic 2 | P1 |
| 6 | Content Tone Adjustment | Epic 3 | P1 |
| 7 | Background Visual Effects | Epic 2 | P1 |
| 8 | Departments Section Enhancement | Epic 3 | P1 |
| 9 | Stagger Animations & Transitions | Epic 2 | P1 |
| 10 | Photo Gallery Enhancement | Epic 3 | P2 |

---

### Proposal 1: Parallax & Background Animations

**Story:** 2.4 Animation System & Performance (Enhancement)

**Changes:**
- Add parallax effect to hero section (0.5x scroll speed)
- Implement text layer depth (different scroll speeds)
- Add smooth visual transitions between sections
- Implement button hover effects (lift 2px + orange glow)

**Acceptance Criteria:**
```
Given I view the hero section
When I scroll down
Then the background has a subtle parallax effect
And text layers move at different speeds creating depth

Given I hover over any button
When hover state activates
Then the button lifts 2px with transform
And an orange glow shadow appears
And transition duration is 200ms
```

---

### Proposal 2: Page Depth & Section Spacing

**Story:** Homepage Structure Enhancement

**Changes:**
- Expand homepage from 3 sections to 6+ sections
- Add Soul Stories preview to homepage
- Add Culture teaser section
- Add Join Us CTA section
- Increase section padding to 96-160px

**New Homepage Structure:**
1. Hero (100vh)
2. Stats (py-24 md:py-32)
3. What We Do (py-24 md:py-40)
4. Why It Matters — Soul stories preview (py-24 md:py-40)
5. Our Culture — Values teaser (py-24 md:py-40)
6. Join Us — Careers CTA (py-24 md:py-40)
7. Footer

**Acceptance Criteria:**
```
Given I view the homepage
When I scroll from top to bottom
Then I encounter at least 6 distinct content sections
And total page scroll depth exceeds 400vh
```

---

### Proposal 3: Content Depth Expansion

**Story:** 3.2 Soul Section Enhancement

**Changes:**
- Expand story content with full narratives
- Add stats to stories (25 min, €1M)
- Add subtitle and visual hierarchy
- Include April Fools story for culture page
- Display 2 stories on homepage

**Sample Enhanced Story:**
```json
{
  "title": "25 Minutes",
  "subtitle": "When Every Second Counts",
  "content": "A mother with 3 young children — ages 5, 3, and 2 — locked out...",
  "highlight": "We don't handle calls. We handle lives.",
  "stat": "25 min",
  "statLabel": "response time"
}
```

---

### Proposal 4: Logo Integration

**Story:** 1.3 Navigation Enhancement

**Changes:**
- Copy `assets/logo_ozio.png` to `public/images/`
- Update Navbar to display logo image
- Add logo to Footer
- Ensure logo in mobile menu

---

### Proposal 5: Button Hover Animations

**Story:** UI Component Enhancement

**Changes:**
- Add `.btn-primary` class with lift + glow effect
- Add `.btn-secondary` class with fill effect
- Add `.btn-ghost` class with underline effect
- Standardize 200ms transition timing

**CSS Addition:**
```css
.btn-primary:hover {
  @apply -translate-y-0.5;
  @apply shadow-xl shadow-accent/40;
}
```

---

### Proposal 6: Content Tone Adjustment

**Story:** 3.1 Culture Content Enhancement

**Changes:**
- Soften aggressive language while maintaining directness
- Change "Mediocrity has no place here" → "Because the work matters"
- Add warmth to Anti-Robot section
- Balance challenge with invitation

---

### Proposal 7: Background Visual Effects

**Story:** NEW — 2.5 Background Animation System

**Changes:**
- Create `AnimatedBackground.astro` component
- Add floating gradient orbs
- Add optional grid pattern overlay
- Respect prefers-reduced-motion

---

### Proposal 8: Departments Enhancement

**Story:** 3.3 Department Overviews Enhancement

**Changes:**
- Add tagline to each department
- Add team size numbers
- Add "looking for" hints
- Expand descriptions with real details

---

### Proposal 9: Stagger Animations

**Story:** 2.4 Animation System Expansion

**Changes:**
- Add `data-animate="stagger"` for grids
- Add `data-animate="slide-left/right"`
- Add `data-animate="scale-up"`
- Add `initParallax()` function
- Implement 100ms stagger delay

---

### Proposal 10: Photo Gallery Enhancement

**Story:** 3.4 Team Photos Enhancement

**Changes:**
- Copy team photos from `/assets/` to `/public/images/team/`
- Implement hover zoom effect
- Add orange border glow on hover
- Use stagger animation on scroll
- Ensure lazy loading

---

## Section 5: Implementation Handoff

### Change Scope Classification

**MODERATE** — Requires backlog reorganization and focused implementation sprint

### Handoff Recipients

| Role | Responsibility |
|------|----------------|
| **Developer (Dev Agent)** | Implement all 10 approved proposals |
| **Content** | Update EN and FR JSON files in parallel |
| **QA** | Lighthouse validation after implementation |

### Implementation Sequence

**Phase 1: Foundation (Session 1)**
- [ ] Logo integration (Proposal 4)
- [ ] Button hover animations (Proposal 5)
- [ ] Expanded animation system (Proposal 9)

**Phase 2: Visual WOW (Session 2)**
- [ ] Background effects (Proposal 7)
- [ ] Parallax & section transitions (Proposal 1)

**Phase 3: Content & Depth (Session 3-4)**
- [ ] Page depth expansion (Proposal 2)
- [ ] Story content expansion (Proposal 3)
- [ ] Tone adjustments (Proposal 6)
- [ ] Department enhancements (Proposal 8)

**Phase 4: Polish (Session 5)**
- [ ] Photo gallery (Proposal 10)
- [ ] Final integration testing
- [ ] Lighthouse validation

### Success Criteria

| Metric | Target |
|--------|--------|
| Homepage scroll depth | > 400vh |
| Lighthouse Performance | 90+ |
| Animation smoothness | 60fps |
| Content word count (homepage) | > 800 words |
| "WOW factor" | Stakeholder approval |

---

## Approval

**Proposal Status:** ✅ APPROVED

**Approved Changes:** 10/10

**Next Action:** Route to Developer for implementation

---

*Document generated by Course Correction Workflow — 2026-01-22*
