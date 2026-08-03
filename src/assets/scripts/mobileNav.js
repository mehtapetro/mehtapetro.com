// Full-screen mobile navigation with document-level delegation so it
// survives Astro view transitions when the navbar DOM is swapped.

const MENU_ID = 'mobile-nav-menu';
const TOGGLE_ID = 'mobile-nav-toggle';
const CLOSE_ID = 'mobile-nav-close';

/** @returns {import('lenis').default | undefined} */
function getLenis() {
  return window.__lenis;
}

function getElements() {
  const menu = document.getElementById(MENU_ID);
  const toggle = document.getElementById(TOGGLE_ID);
  if (!menu || !toggle) return null;
  return { menu, toggle };
}

/**
 * @param {HTMLElement} menu
 * @param {HTMLButtonElement} toggle
 */
function openMenu(menu, toggle) {
  menu.classList.remove('invisible', 'opacity-0', 'pointer-events-none');
  menu.classList.add('opacity-100', 'pointer-events-auto', 'touch-none');
  menu.setAttribute('aria-hidden', 'false');
  menu.removeAttribute('inert');
  toggle.setAttribute('aria-expanded', 'true');
  document.documentElement.classList.add('overflow-hidden');
  getLenis()?.stop();
}

/**
 * @param {HTMLElement} menu
 * @param {HTMLButtonElement} toggle
 */
function closeMenu(menu, toggle) {
  menu.classList.add('invisible', 'opacity-0', 'pointer-events-none');
  menu.classList.remove('opacity-100', 'pointer-events-auto', 'touch-none');
  menu.setAttribute('aria-hidden', 'true');
  menu.setAttribute('inert', '');
  toggle.setAttribute('aria-expanded', 'false');
  document.documentElement.classList.remove('overflow-hidden');
  getLenis()?.start();
}

function resetMenuState() {
  const elements = getElements();
  if (!elements) {
    document.documentElement.classList.remove('overflow-hidden');
    getLenis()?.start();
    return;
  }
  closeMenu(elements.menu, elements.toggle);
}

function bindMobileNav() {
  if (window.__mobileNavBound) return;
  window.__mobileNavBound = true;

  document.addEventListener('click', e => {
    const target = e.target;
    if (!(target instanceof Element)) return;

    if (target.closest(`#${TOGGLE_ID}`)) {
      const elements = getElements();
      if (!elements) return;
      const { menu, toggle } = elements;
      if (toggle.getAttribute('aria-expanded') === 'true')
        closeMenu(menu, toggle);
      else openMenu(menu, toggle);
      return;
    }

    if (target.closest(`#${CLOSE_ID}`)) {
      const elements = getElements();
      if (!elements) return;
      const { menu, toggle } = elements;
      if (toggle.getAttribute('aria-expanded') === 'true')
        closeMenu(menu, toggle);
      return;
    }

    if (target.closest(`#${MENU_ID} a[href]`)) {
      const elements = getElements();
      if (!elements) return;
      const { menu, toggle } = elements;
      if (toggle.getAttribute('aria-expanded') === 'true')
        closeMenu(menu, toggle);
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    const elements = getElements();
    if (!elements) return;
    const { menu, toggle } = elements;
    if (toggle.getAttribute('aria-expanded') === 'true')
      closeMenu(menu, toggle);
  });

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    const elements = getElements();
    if (!elements) return;
    const { menu, toggle } = elements;
    if (toggle.getAttribute('aria-expanded') === 'true')
      closeMenu(menu, toggle);
  });

  document.addEventListener('astro:page-load', resetMenuState);
}

bindMobileNav();

export {};
