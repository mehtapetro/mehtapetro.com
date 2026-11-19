const ROTATION_INTERVAL_MS = 7000;

let cleanup;

function initProductRotation() {
  cleanup?.();
  cleanup = undefined;

  const section = document.querySelector('[data-product-rotation]');
  const tablist = section?.querySelector('[role="tablist"]');
  const toggle = section?.querySelector('[data-product-rotation-toggle]');
  const tabs = Array.from(tablist?.querySelectorAll('[role="tab"]') ?? []);
  if (!section || !tablist || !toggle || tabs.length < 2) return;

  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const listeners = new AbortController();
  const { signal } = listeners;
  let visible = false;
  let paused = false;
  let rotating = false;
  let timer;

  function schedule() {
    window.clearTimeout(timer);
    if (!visible || document.hidden || paused || motion.matches) return;

    timer = window.setTimeout(() => {
      if (!tablist.contains(document.activeElement)) {
        const current = tabs.findIndex(tab => tab.ariaSelected === 'true');
        rotating = true;
        tabs[(current + 1) % tabs.length].click();
        rotating = false;
      }
      schedule();
    }, ROTATION_INTERVAL_MS);
  }

  function setPaused(value) {
    paused = value;
    toggle.textContent = paused ? 'Resume rotation' : 'Pause rotation';
    schedule();
  }

  function syncMotion() {
    toggle.hidden = motion.matches;
    schedule();
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      visible = entry.intersectionRatio >= 0.3;
      schedule();
    },
    { threshold: 0.3 }
  );

  observer.observe(section);
  tablist.addEventListener(
    'click',
    event => {
      if (!rotating && event.target.closest('[role="tab"]')) setPaused(true);
    },
    { signal }
  );
  toggle.addEventListener('click', () => setPaused(!paused), { signal });
  motion.addEventListener('change', syncMotion, { signal });
  document.addEventListener('visibilitychange', schedule, { signal });
  syncMotion();

  cleanup = () => {
    window.clearTimeout(timer);
    observer.disconnect();
    listeners.abort();
  };
}

document.addEventListener('astro:page-load', initProductRotation);
document.addEventListener('astro:before-swap', () => {
  cleanup?.();
  cleanup = undefined;
});
initProductRotation();
