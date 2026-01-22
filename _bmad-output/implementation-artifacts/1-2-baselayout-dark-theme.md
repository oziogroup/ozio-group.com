# Story 1.2: BaseLayout & Dark Theme Foundation

## Story

As a **visitor**,
I want **a professional dark-themed layout that loads fast**,
So that **I immediately perceive Ozio as a serious tech company**.

## Acceptance Criteria

**AC1: Dark Theme Visual**
- Given I visit any page
- When the page loads
- Then I see a dark background (#0a0a0a)
- And text is white/gray with proper contrast
- And the page has proper `<head>` with charset, viewport, and base meta tags
- And global.css includes Tailwind imports and custom color tokens
- And core content is visible without JavaScript (progressive enhancement)

**AC2: Semantic HTML**
- Given I view the page source
- When I inspect the HTML
- Then semantic HTML structure is used (header, main, footer, nav)
- And the page is crawlable by search engines

## Tasks/Subtasks

- [x] **Task 1: Create BaseLayout.astro**
  - [x] Create layout file with Props interface (title, description, lang)
  - [x] Add proper DOCTYPE and html tag with lang attribute
  - [x] Configure head with charset, viewport, meta tags
  - [x] Import global.css for Tailwind styles
  - [x] Add slot for page content

- [x] **Task 2: Implement Semantic Structure**
  - [x] Add header element (placeholder for nav - Story 1.3)
  - [x] Add main element with slot
  - [x] Add footer element with copyright
  - [x] Ensure proper landmark structure for accessibility

- [x] **Task 3: Update Pages to Use Layout**
  - [x] Update /fr/index.astro to use BaseLayout
  - [x] Update /en/index.astro to use BaseLayout
  - [x] Pass appropriate props (title, description, lang)

- [x] **Task 4: Verify Build & Progressive Enhancement**
  - [x] Run npm run build successfully
  - [x] Verify core content visible without JS
  - [x] Check contrast ratios meet WCAG AA

## Dev Notes

### From Architecture
- BaseLayout is the single base layout for all pages
- Dark mode palette from global.css @theme tokens
- Space Grotesk font for headings (loaded via Google Fonts or local)

### Color Tokens (from global.css)
- background: #0a0a0a
- surface: #1a1a1a
- elevated: #242424
- text-primary: #FFFFFF
- text-secondary: #A3A3A3
- text-muted: #737373
- accent: #F59E0B

### Layout Structure
```astro
<html lang={lang}>
  <head>...</head>
  <body class="bg-background text-text-primary">
    <header><!-- Nav placeholder --></header>
    <main><slot /></main>
    <footer><!-- Copyright --></footer>
  </body>
</html>
```

## Dev Agent Record

### Implementation Plan
1. Create BaseLayout.astro with Props interface and semantic HTML
2. Add Space Grotesk font via Google Fonts
3. Configure header/main/footer structure
4. Update pages to use layout with content from JSON files
5. Verify build passes

### Debug Log
- Initial build failed: `font-body` utility not recognized
- Fix: Tailwind v4 requires `--font-*` naming (not `--font-family-*`) for font utilities
- Build now passes with 0 errors

### Completion Notes
**AC1 Satisfied:**
- ✅ Dark background (#0a0a0a) via `bg-background` class
- ✅ White/gray text with proper contrast
- ✅ Proper `<head>` with charset, viewport, meta tags
- ✅ global.css imported with custom Tailwind tokens
- ✅ Core content visible without JavaScript (static HTML)

**AC2 Satisfied:**
- ✅ Semantic HTML: `<header>`, `<nav>`, `<main>`, `<footer>`
- ✅ Pages crawlable by search engines (static output)

## File List

**Created:**
- `src/layouts/BaseLayout.astro` - Main layout with dark theme, semantic structure

**Modified:**
- `src/styles/global.css` - Fixed font variable naming for Tailwind v4
- `src/pages/fr/index.astro` - Now uses BaseLayout with fr.json content
- `src/pages/en/index.astro` - Now uses BaseLayout with en.json content

## Change Log

| Date | Change | Author |
|------|--------|--------|
| 2026-01-22 | Story created from Epic 1.2 | Dev Agent |
| 2026-01-22 | All tasks completed, build verified | Dev Agent (Amelia) |

## Status

**Status:** review
**Epic:** Epic 1 - Site Foundation & Navigation Shell
**Sprint:** Sprint 1
