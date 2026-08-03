// Product inquiry modal open/close — survives Astro view transitions.

/**
 * @param {HTMLElement} modal
 */
function closeInquiryModal(modal) {
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('overflow-hidden');
  window.__lenis?.start();
}

/**
 * @param {HTMLElement} modal
 */
function openInquiryModal(modal) {
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('overflow-hidden');
  window.__lenis?.stop();
}

/**
 * @param {string | null | undefined} modalId
 */
function getInquiryModal(modalId) {
  if (modalId) {
    const byId = document.getElementById(modalId);
    if (byId instanceof HTMLElement) return byId;
  }

  const modal = document.querySelector('[data-product-inquiry-modal]');
  return modal instanceof HTMLElement ? modal : null;
}

function bindProductInquiryModals() {
  if (window.__productInquiryModalBound) return;
  window.__productInquiryModalBound = true;

  document.addEventListener('click', event => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const openTrigger = target.closest('[data-product-inquiry-open]');
    if (openTrigger) {
      const modalId =
        openTrigger.getAttribute('data-product-inquiry-target') ||
        openTrigger.getAttribute('aria-controls');
      const modal = getInquiryModal(modalId);
      if (modal) openInquiryModal(modal);
      return;
    }

    if (target.closest('[data-product-inquiry-close]')) {
      const modal = target.closest('[data-product-inquiry-modal]');
      if (modal instanceof HTMLElement) closeInquiryModal(modal);
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;

    document.querySelectorAll('[data-product-inquiry-modal]').forEach(modal => {
      if (
        modal instanceof HTMLElement &&
        modal.getAttribute('aria-hidden') === 'false'
      ) {
        closeInquiryModal(modal);
      }
    });
  });

  document.addEventListener('contact-form:success', event => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) return;

    const modal = form.closest('[data-product-inquiry-modal]');
    if (!(modal instanceof HTMLElement)) return;

    window.setTimeout(() => closeInquiryModal(modal), 2500);
  });

  document.addEventListener('astro:page-load', () => {
    document.querySelectorAll('[data-product-inquiry-modal]').forEach(modal => {
      if (
        modal instanceof HTMLElement &&
        modal.getAttribute('aria-hidden') === 'false'
      ) {
        closeInquiryModal(modal);
      }
    });
    document.body.classList.remove('overflow-hidden');
    window.__lenis?.start();
  });
}

bindProductInquiryModals();

export {};
