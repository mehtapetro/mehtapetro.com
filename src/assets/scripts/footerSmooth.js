// footerSmooth.js
// Lightweight smooth open/close for <details> in the footer (mobile only)

function isMobile() {
  return window.matchMedia('(max-width: 1023px)').matches;
}

function initFooterSmooth() {
  if (!isMobile()) return;
  const footer = document.querySelector('footer');
  if (!footer) return;

  const detailsList = footer.querySelectorAll('details');

  detailsList.forEach(details => {
    const summary = details.querySelector('summary');
    if (!summary) return;
    const content = Array.from(details.children).find(
      c => c.tagName.toLowerCase() !== 'summary'
    );
    if (!content) return;

    // Ensure content has transition styles
    content.style.overflow = 'hidden';
    content.style.transition =
      'max-height 520ms cubic-bezier(.22,.9,.29,1), opacity 420ms ease';
    content.style.maxHeight = details.hasAttribute('open')
      ? `${content.scrollHeight}px`
      : '0px';
    content.style.opacity = details.hasAttribute('open') ? '1' : '0';

    let transitioning = false;

    function open() {
      if (transitioning) return;
      transitioning = true;
      details.setAttribute('data-smooth', 'open');
      summary.setAttribute('aria-expanded', 'true');

      // from 0 to full height
      content.style.maxHeight = `${content.scrollHeight}px`;
      content.style.opacity = '1';

      const onEnd = e => {
        if (e.target !== content) return;
        content.removeEventListener('transitionend', onEnd);
        // cleanup inline maxHeight so it can expand naturally if content changes
        content.style.maxHeight = '';
        details.setAttribute('open', '');
        details.removeAttribute('data-smooth');
        transitioning = false;
      };

      content.addEventListener('transitionend', onEnd);
    }

    function close() {
      if (transitioning) return;
      transitioning = true;
      details.setAttribute('data-smooth', 'closing');
      summary.setAttribute('aria-expanded', 'false');

      // set explicit starting height then collapse to 0
      content.style.maxHeight = `${content.scrollHeight}px`;
      // force reflow
      content.offsetHeight;
      content.style.maxHeight = '0px';
      content.style.opacity = '0';

      const onEnd = e => {
        if (e.target !== content) return;
        content.removeEventListener('transitionend', onEnd);
        details.removeAttribute('open');
        details.removeAttribute('data-smooth');
        content.style.maxHeight = '0px';
        transitioning = false;
      };

      content.addEventListener('transitionend', onEnd);
    }

    summary.addEventListener('click', e => {
      if (!isMobile()) return; // only on mobile
      e.preventDefault();

      if (details.hasAttribute('open')) close();
      else open();
    });

    summary.addEventListener('keydown', e => {
      if (!isMobile()) return;
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        summary.click();
      }
    });

    // keep heights correct on resize
    window.addEventListener('resize', () => {
      if (!isMobile()) return;
      if (details.hasAttribute('open')) {
        content.style.maxHeight = '';
        content.style.opacity = '1';
      } else {
        content.style.maxHeight = '0px';
        content.style.opacity = '0';
      }
    });
  });
}

if (document.readyState === 'loading')
  document.addEventListener('DOMContentLoaded', initFooterSmooth);
else initFooterSmooth();

export {};
