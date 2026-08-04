/** Shared dialog helpers for product gate + inquiry modal. */

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * @param {ParentNode} container
 * @returns {HTMLElement[]}
 */
export function getFocusableElements(container) {
  return Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR)).filter(
    el =>
      el instanceof HTMLElement &&
      !el.hasAttribute('disabled') &&
      el.getAttribute('aria-hidden') !== 'true' &&
      el.tabIndex !== -1
  );
}

/**
 * @param {HTMLElement} container
 * @param {KeyboardEvent} event
 */
export function trapFocus(container, event) {
  if (event.key !== 'Tab') return;

  const focusable = getFocusableElements(container);
  if (focusable.length === 0) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  const active = document.activeElement;

  if (event.shiftKey && active === first) {
    event.preventDefault();
    last.focus();
    return;
  }

  if (!event.shiftKey && active === last) {
    event.preventDefault();
    first.focus();
  }
}

/**
 * @param {HTMLElement} container
 */
export function focusFirstField(container) {
  const focusable = getFocusableElements(container);
  const preferred =
    focusable.find(
      el =>
        (el instanceof HTMLInputElement ||
          el instanceof HTMLTextAreaElement ||
          el instanceof HTMLSelectElement) &&
        el.type !== 'hidden' &&
        el.type !== 'checkbox'
    ) || focusable[0];

  preferred?.focus();
}

export function lockPageScroll() {
  document.body.classList.add('overflow-hidden');
  window.__lenis?.stop();
}

export function unlockPageScroll() {
  document.body.classList.remove('overflow-hidden');
  document.body.style.overflow = '';
  window.__lenis?.start();
}
