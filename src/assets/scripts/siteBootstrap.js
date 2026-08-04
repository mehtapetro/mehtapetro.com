/**
 * Site-wide script bootstrap.
 * Always load critical UX scripts; lazily load page-specific ones so
 * contact/news/career pages don't pay for home-only features.
 */
import '@scripts/lenisSmoothScroll.js';
import '@scripts/mobileNav.js';
import '@scripts/contactForm.js';
import '@scripts/productInquiryModal.js';
import '@scripts/phoneInputValidation.js';
import '@scripts/textareaCharCount.js';

async function loadWhenPresent(selector, importer) {
  if (!document.querySelector(selector)) return;
  await importer();
}

async function loadPageScripts() {
  await Promise.all([
    loadWhenPresent(
      'video[data-hero-video]',
      () => import('@scripts/heroVideo.js')
    ),
    loadWhenPresent(
      '.client-marquee',
      () => import('@scripts/clientMarquee.js')
    ),
    loadWhenPresent(
      '[data-facebook-embed]',
      () => import('@scripts/facebookEmbed.js')
    ),
    loadWhenPresent('#career-form', () => import('@scripts/careerForm.js')),
    loadWhenPresent(
      '[data-product-image-modal], [data-product-image-open]',
      () => import('@scripts/productImageModal.js')
    ),
  ]);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadPageScripts);
} else {
  loadPageScripts();
}

document.addEventListener('astro:page-load', loadPageScripts);

export {};
