/**
 * Continuous client-logo marquee.
 * Uses rAF + pixel translate so it works even when % CSS transforms fail
 * under max-content widths / view transitions.
 */
const SPEED_PX_PER_SEC = 60;

/** @type {WeakMap<Element, { stop: () => void }>} */
const running = new WeakMap();

/**
 * @param {HTMLElement} root
 */
function startMarquee(root) {
  const existing = running.get(root);
  if (existing) existing.stop();

  const viewport = root.querySelector('.client-marquee__viewport');
  const sequence = root.querySelector('.client-marquee__sequence');
  if (
    !(viewport instanceof HTMLElement) ||
    !(sequence instanceof HTMLElement)
  ) {
    return;
  }

  let offset = 0;
  let frame = 0;
  let last = performance.now();
  let paused = false;

  const onEnter = () => {
    paused = true;
  };
  const onLeave = () => {
    paused = false;
    last = performance.now();
  };

  root.addEventListener('pointerenter', onEnter);
  root.addEventListener('pointerleave', onLeave);

  const tick = now => {
    if (!root.isConnected) {
      cancelAnimationFrame(frame);
      running.delete(root);
      return;
    }

    const loopWidth = sequence.offsetWidth;
    if (loopWidth > 0 && !paused) {
      const dt = Math.min((now - last) / 1000, 0.064);
      offset -= SPEED_PX_PER_SEC * dt;
      if (-offset >= loopWidth) {
        offset += loopWidth;
      }
      viewport.style.transform = `translate3d(${offset}px,0,0)`;
    }
    last = now;
    frame = requestAnimationFrame(tick);
  };

  viewport.style.animation = 'none';
  viewport.style.willChange = 'transform';
  frame = requestAnimationFrame(tick);

  running.set(root, {
    stop() {
      cancelAnimationFrame(frame);
      root.removeEventListener('pointerenter', onEnter);
      root.removeEventListener('pointerleave', onLeave);
      viewport.style.willChange = '';
    },
  });
}

function initClientMarquees() {
  document.querySelectorAll('.client-marquee').forEach(root => {
    if (root instanceof HTMLElement) startMarquee(root);
  });
}

function boot() {
  initClientMarquees();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}

document.addEventListener('astro:page-load', boot);

export {};
