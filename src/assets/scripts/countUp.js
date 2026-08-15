function setFinalValue(el) {
  const target = Number(el.dataset.countTo);
  const suffix = el.dataset.countSuffix || '';
  if (!Number.isFinite(target)) return;
  el.textContent = `${target}${suffix}`;
}

function animateCount(el) {
  const target = Number(el.dataset.countTo);
  const suffix = el.dataset.countSuffix || '';
  if (!Number.isFinite(target)) return;

  const duration = 900;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    el.textContent = `${value}${suffix}`;
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

function initCountUp() {
  const targets = document.querySelectorAll(
    '[data-count-to]:not([data-count-bound])'
  );
  if (!targets.length) return;

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  targets.forEach(el => el.setAttribute('data-count-bound', 'true'));

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    targets.forEach(el => setFinalValue(el));
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        animateCount(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.4 }
  );

  targets.forEach(el => observer.observe(el));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCountUp);
} else {
  initCountUp();
}

document.addEventListener('astro:page-load', initCountUp);

export {};
