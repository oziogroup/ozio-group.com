/**
 * GSAP Animation Utilities for Ozio Group
 * Centralized animation configuration following Architecture spec
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Animation timing constants (from UX spec)
export const TIMING = {
  scrollReveal: 0.5,      // 500ms for scroll reveals
  counterAnimation: 1.5,  // 1.5s for counter animations
  hoverState: 0.2,        // 200ms for hover states
  pageTransition: 0.3,    // 300ms for page transitions
} as const;

// Easing functions
export const EASING = {
  default: 'power2.out',
  smooth: 'power3.out',
  bounce: 'back.out(1.7)',
} as const;

/**
 * Initialize scroll-triggered fade-up animations
 * Uses data-animate="fade-up" attribute
 */
export function initScrollReveal(): void {
  // Check for reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Make all elements visible immediately
    gsap.set('[data-animate]', { opacity: 1, y: 0, x: 0, scale: 1 });
    return;
  }

  // Fade up animation
  gsap.utils.toArray<HTMLElement>('[data-animate="fade-up"]').forEach((el) => {
    gsap.from(el, {
      y: 30,
      opacity: 0,
      duration: TIMING.scrollReveal,
      ease: EASING.default,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    });
  });

  // Fade in animation
  gsap.utils.toArray<HTMLElement>('[data-animate="fade-in"]').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      duration: TIMING.scrollReveal,
      ease: EASING.default,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    });
  });

  // Slide left animation
  gsap.utils.toArray<HTMLElement>('[data-animate="slide-left"]').forEach((el) => {
    gsap.from(el, {
      x: 60,
      opacity: 0,
      duration: TIMING.scrollReveal,
      ease: EASING.smooth,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    });
  });

  // Slide right animation
  gsap.utils.toArray<HTMLElement>('[data-animate="slide-right"]').forEach((el) => {
    gsap.from(el, {
      x: -60,
      opacity: 0,
      duration: TIMING.scrollReveal,
      ease: EASING.smooth,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    });
  });

  // Scale up animation
  gsap.utils.toArray<HTMLElement>('[data-animate="scale-up"]').forEach((el) => {
    gsap.from(el, {
      scale: 0.8,
      opacity: 0,
      duration: TIMING.scrollReveal,
      ease: EASING.bounce,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    });
  });

  // Stagger animation for grids/lists
  gsap.utils.toArray<HTMLElement>('[data-animate="stagger"]').forEach((container) => {
    const children = container.children;
    // Set initial state explicitly
    gsap.set(children, { y: 40, opacity: 0 });
    // Animate to visible state on scroll
    gsap.to(children, {
      y: 0,
      opacity: 1,
      duration: TIMING.scrollReveal,
      ease: EASING.default,
      stagger: 0.1,
      scrollTrigger: {
        trigger: container,
        start: 'top 85%',
        once: true,
      },
    });
  });

  // Refresh ScrollTrigger after all animations are set up
  ScrollTrigger.refresh();
}

/**
 * Animate a counter from 0 to target value
 */
export function animateCounter(
  element: HTMLElement,
  target: number,
  suffix: string = ''
): void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    element.textContent = `${target}${suffix}`;
    return;
  }

  const counter = { value: 0 };
  gsap.to(counter, {
    value: target,
    duration: TIMING.counterAnimation,
    ease: EASING.smooth,
    onUpdate: () => {
      element.textContent = `${Math.round(counter.value)}${suffix}`;
    },
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      once: true,
    },
  });
}

/**
 * Initialize parallax effects on elements with data-parallax attribute
 * Usage: data-parallax="0.5" for 50% scroll speed
 */
export function initParallax(): void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
    const speed = parseFloat(el.dataset.parallax || '0.5');
    
    gsap.to(el, {
      yPercent: -30 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: el.parentElement || el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });
}

/**
 * Initialize all animations
 */
export function initAllAnimations(): void {
  initScrollReveal();
  initParallax();
}

export { gsap, ScrollTrigger };
