// footerAccordion.js
// Physics-based spring animation for footer <details> accordions on mobile

function isMobile() {
  return window.matchMedia('(max-width: 1023px)').matches;
}

function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }

function animateSpring(element, getTargetHeight, onComplete) {
  let running = true;
  let last = performance.now();
  let height = parseFloat(getComputedStyle(element).height) || 0;
  let velocity = 0;

  // Tunable spring parameters (feel free to tweak)
  const mass = 1;
  const stiffness = 0.024; // spring stiffness
  const damping = 0.14; // damping (friction)

  function frame(now) {
    const dt = Math.min(32, now - last) / 1000; // cap dt
    last = now;

    const target = getTargetHeight();
    const displacement = height - target;
    const springForce = -stiffness * displacement;
    const dampingForce = -damping * velocity;
    const acceleration = (springForce + dampingForce) / mass;

    velocity += acceleration * dt;
    height += velocity * dt * 1000; // scale to px/s

    // small threshold to stop
    const isSettled = Math.abs(velocity) < 0.02 && Math.abs(height - target) < 0.5;

    element.style.height = `${Math.max(0, height)}px`;

    if (!isSettled && running) requestAnimationFrame(frame);
    else {
      // finalize
      element.style.height = target ? `${target}px` : '';
      running = false;
      onComplete && onComplete();
    }
  }

  requestAnimationFrame(frame);

  return () => { running = false; };
}

function initFooterAccordions() {
  if (!isMobile()) return;

  const container = document.querySelector('footer');
  if (!container) return;

  const detailsList = container.querySelectorAll('details');

  detailsList.forEach(details => {
    const summary = details.querySelector('summary');
    if (!summary) return;

    // find the first sibling element that is not summary
    const content = Array.from(details.children).find(n => n.tagName.toLowerCase() !== 'summary');
    if (!content) return;

    // don't modify layout on init to avoid jumps; only set styles when animating

    let animCancel = null;
    let isAnimating = false;

    function measureOpenHeight() {
      const wasOpen = details.hasAttribute('open');
      if (!wasOpen) details.setAttribute('open', '');
      const h = content.scrollHeight;
      if (!wasOpen) details.removeAttribute('open');
      return h;
    }

    function openNow() {
      // prepare for open animation
      details._shouldBeOpen = true;
      summary.setAttribute('aria-expanded', 'true');
      // cancel previous
      if (animCancel) animCancel();
      isAnimating = true;
      // ensure content is hidden from layout while we animate height
      content.style.overflow = 'hidden';
      content.style.willChange = 'height, opacity';
      // start from current rendered height (likely 0)
      const startH = content.getBoundingClientRect().height || 0;
      content.style.height = `${startH}px`;

      const targetH = measureOpenHeight();

      animCancel = animateSpring(content, () => targetH, () => {
        isAnimating = false;
        details.setAttribute('open', '');
        content.style.height = '';
        content.style.overflow = '';
        content.style.willChange = '';
        animCancel = null;
      });
    }

    function closeNow() {
      details._shouldBeOpen = false;
      summary.setAttribute('aria-expanded', 'false');
      // cancel previous
      if (animCancel) animCancel();
      isAnimating = true;

      // set initial explicit height so spring starts from current rendered height
      const startH = content.getBoundingClientRect().height || 0;
      content.style.overflow = 'hidden';
      content.style.willChange = 'height, opacity';
      content.style.height = `${startH}px`;

      animCancel = animateSpring(content, () => 0, () => {
        isAnimating = false;
        details.removeAttribute('open');
        content.style.height = '';
        content.style.overflow = '';
        content.style.willChange = '';
        animCancel = null;
      });
    }

    summary.addEventListener('click', (e) => {
      // only handle on mobile
      if (!isMobile()) return;
      e.preventDefault();

      // toggle
      if (details.hasAttribute('open') || details._shouldBeOpen) closeNow();
      else openNow();
    });

    // keyboard: space/enter
    summary.addEventListener('keydown', (e) => {
      if (!isMobile()) return;
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        summary.click();
      }
    });

    // ensure window resize re-evaluates heights
    window.addEventListener('resize', () => {
      if (!isMobile()) return;
      if (details.hasAttribute('open') || details._shouldBeOpen) {
        content.style.height = '';
      }
    });
  });
}

// Auto-init when DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFooterAccordions);
} else initFooterAccordions();

export {};
