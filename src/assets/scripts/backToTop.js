const SHOW_AFTER_PX = 640;

function scrollToTop() {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (window.__lenis?.scrollTo) {
    window.__lenis.scrollTo(0, { immediate: prefersReducedMotion });
    return;
  }

  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
  });
}

function initBackToTop() {
  const button = document.querySelector('[data-back-to-top]');
  if (!(button instanceof HTMLButtonElement)) return;
  if (button.dataset.backToTopBound === 'true') return;
  button.dataset.backToTopBound = 'true';

  const update = () => {
    button.classList.toggle('is-visible', window.scrollY > SHOW_AFTER_PX);
  };

  window.addEventListener('scroll', update, { passive: true });
  button.addEventListener('click', scrollToTop);
  update();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBackToTop);
} else {
  initBackToTop();
}

document.addEventListener('astro:page-load', initBackToTop);

export {};
