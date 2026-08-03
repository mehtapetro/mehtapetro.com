const marqueeControllers = new WeakMap();

function destroyMarquee(marquee) {
  const controller = marqueeControllers.get(marquee);
  if (!controller) return;

  window.cancelAnimationFrame(controller.animationFrame);
  window.removeEventListener('resize', controller.measure);
  marqueeControllers.delete(marquee);
}

function initClientMarquees() {
  document.querySelectorAll('[data-client-marquee]').forEach(marquee => {
    if (!(marquee instanceof HTMLElement)) return;

    destroyMarquee(marquee);

    const track = marquee.querySelector('[data-client-marquee-track]');
    const group = marquee.querySelector('[data-client-marquee-group]');

    if (!(track instanceof HTMLElement) || !(group instanceof HTMLElement)) return;

    let animationFrame = 0;
    let lastTime = 0;
    let offset = 0;
    let groupWidth = 0;
    const pixelsPerSecond = 28;

    const measure = () => {
      groupWidth = group.getBoundingClientRect().width;
      track.style.transform = 'translate3d(0, 0, 0)';
      offset = 0;
    };

    const tick = time => {
      if (!lastTime) lastTime = time;
      const delta = time - lastTime;
      lastTime = time;

      if (groupWidth > 0) {
        offset += (pixelsPerSecond * delta) / 1000;

        if (offset >= groupWidth) {
          offset = 0;
        }

        track.style.transform = `translate3d(-${offset}px, 0, 0)`;
      }

      animationFrame = window.requestAnimationFrame(tick);
      controller.animationFrame = animationFrame;
    };

    const controller = { animationFrame: 0, measure };
    marqueeControllers.set(marquee, controller);

    window.addEventListener('resize', measure);
    measure();
    animationFrame = window.requestAnimationFrame(tick);
    controller.animationFrame = animationFrame;
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initClientMarquees);
} else {
  initClientMarquees();
}

document.addEventListener('astro:page-load', initClientMarquees);

export {};
