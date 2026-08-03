import '@styles/lenis.css';

import Lenis from 'lenis';

const HEADER_OFFSET = 88;

const LENIS_OPTIONS = {
  autoRaf: true,
  lerp: 0.085,
  smoothWheel: true,
  wheelMultiplier: 0.92,
  touchMultiplier: 1.25,
  syncTouch: true,
};

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function disableLenis() {
  window.__lenis?.destroy?.();
  window.__lenis = undefined;
  document.documentElement.classList.remove('lenis', 'lenis-smooth');
}

function bindAnchorScroll(lenis) {
  if (window.__lenisAnchorsBound) return;
  window.__lenisAnchorsBound = true;

  document.addEventListener('click', event => {
    if (!(event.target instanceof Element)) return;

    const anchor = event.target.closest('a[href^="#"]');
    if (!(anchor instanceof HTMLAnchorElement)) return;

    const hash = anchor.getAttribute('href');
    if (!hash || hash === '#') return;

    const target = document.querySelector(hash);
    if (!target) return;

    event.preventDefault();
    lenis.scrollTo(target, { offset: -HEADER_OFFSET });
  });
}

function createLenis() {
  if (window.__lenis) return window.__lenis;

  const lenis = new Lenis(LENIS_OPTIONS);
  window.__lenis = lenis;
  bindAnchorScroll(lenis);

  let resizeTimeoutId = 0;
  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimeoutId);
    resizeTimeoutId = window.setTimeout(() => {
      lenis.resize();
    }, 150);
  });

  return lenis;
}

function refreshLenisScrollPosition(lenis) {
  window.requestAnimationFrame(() => {
    lenis.resize();

    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        lenis.scrollTo(target, { offset: -HEADER_OFFSET, immediate: true });
        return;
      }
    }

    lenis.scrollTo(0, { immediate: true, force: true });
  });
}

function initLenis() {
  if (prefersReducedMotion()) {
    disableLenis();
    return;
  }

  document.documentElement.classList.add('lenis', 'lenis-smooth');

  const lenis = createLenis();
  lenis.start();
  refreshLenisScrollPosition(lenis);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLenis);
} else {
  initLenis();
}

document.addEventListener('astro:page-load', initLenis);

window
  .matchMedia('(prefers-reduced-motion: reduce)')
  .addEventListener('change', event => {
    if (event.matches) {
      disableLenis();
      return;
    }

    initLenis();
  });

export {};
