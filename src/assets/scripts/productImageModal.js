import { lockSiteScroll, unlockSiteScroll } from '@scripts/scrollLock.js';

function initProductImageModals() {
  document.querySelectorAll('[data-product-image-modal]').forEach(modal => {
    if (!(modal instanceof HTMLElement)) return;
    if (modal.dataset.productImageModalBound === 'true') return;
    modal.dataset.productImageModalBound = 'true';

    const section = modal.closest('section') || modal.parentElement;
    const openButton = section?.querySelector('[data-product-image-open]');
    const closeButtons = modal.querySelectorAll('[data-product-image-close]');

    const openModal = () => {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      modal.setAttribute('aria-hidden', 'false');
      lockSiteScroll();
    };

    const closeModal = () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      modal.setAttribute('aria-hidden', 'true');
      unlockSiteScroll();
    };

    openButton?.addEventListener('click', openModal);
    closeButtons.forEach(button => {
      button.addEventListener('click', closeModal);
    });

    window.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
      }
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initProductImageModals);
} else {
  initProductImageModals();
}

document.addEventListener('astro:page-load', initProductImageModals);

export {};
