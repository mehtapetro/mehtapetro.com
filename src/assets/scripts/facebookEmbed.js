const FB_SDK_ID = 'facebook-jssdk';
const FB_VERSION = 'v24.0';

function isDesktopEmbed() {
  return window.matchMedia('(min-width: 768px)').matches;
}

/** @returns {HTMLElement | null} */
function getEmbedRoot() {
  const root = document.querySelector('[data-facebook-embed]');
  return root instanceof HTMLElement ? root : null;
}

function ensureFbRoot() {
  if (document.getElementById('fb-root')) return;
  const root = document.createElement('div');
  root.id = 'fb-root';
  document.body.appendChild(root);
}

function showError(root) {
  const href = root.dataset.facebookHref || 'https://www.facebook.com/mehtapetro';
  root.dataset.facebookState = 'error';
  root.innerHTML = `
    <div class="flex min-h-[240px] w-full flex-col items-center justify-center gap-3 px-4 text-center">
      <p class="text-sm text-[#4A5F8C]">Couldn't load the Facebook feed.</p>
      <a
        href="${href}"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex min-h-11 items-center justify-center rounded-xl bg-[#1877F2] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#166FE5]"
      >Open on Facebook</a>
    </div>
  `;
}

function renderPagePlugin(root) {
  const href = root.dataset.facebookHref || 'https://www.facebook.com/mehtapetro';
  const height = root.dataset.facebookHeight || '580';
  const width = Math.min(Math.floor(root.clientWidth) || 340, 500);

  root.innerHTML = `
    <div
      class="fb-page w-full"
      data-href="${href}"
      data-tabs="timeline"
      data-width="${width}"
      data-height="${height}"
      data-small-header="false"
      data-adapt-container-width="true"
      data-hide-cover="false"
      data-show-facepile="false"
      data-hide-cta="false"
    >
      <blockquote cite="${href}" class="fb-xfbml-parse-ignore">
        <a href="${href}">Mehta Petro-Refineries Limited</a>
      </blockquote>
    </div>
  `;

  if (window.FB) {
    window.FB.XFBML.parse(root);
  }
}

function loadFacebookSdk() {
  return new Promise((resolve, reject) => {
    ensureFbRoot();

    if (window.FB) {
      resolve();
      return;
    }

    const existing = document.getElementById(FB_SDK_ID);
    if (existing) {
      const onReady = () => {
        window.removeEventListener('facebook-sdk-ready', onReady);
        resolve();
      };
      window.addEventListener('facebook-sdk-ready', onReady);
      existing.addEventListener(
        'error',
        () => {
          window.removeEventListener('facebook-sdk-ready', onReady);
          reject(new Error('Facebook SDK failed to load'));
        },
        { once: true }
      );
      return;
    }

    const previousInit = window.fbAsyncInit;
    window.fbAsyncInit = function () {
      if (typeof previousInit === 'function') previousInit();
      window.FB.init({ xfbml: true, version: FB_VERSION });
      window.dispatchEvent(new Event('facebook-sdk-ready'));
      resolve();
    };

    const script = document.createElement('script');
    script.id = FB_SDK_ID;
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    script.src = `https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=${FB_VERSION}`;
    script.addEventListener('error', () =>
      reject(new Error('Facebook SDK failed to load'))
    );
    document.body.appendChild(script);
  });
}

async function activateEmbed(root) {
  if (!(root instanceof HTMLElement)) return;
  if (
    root.dataset.facebookState === 'loaded' ||
    root.dataset.facebookState === 'loading'
  ) {
    return;
  }

  root.dataset.facebookState = 'loading';

  try {
    await loadFacebookSdk();
    renderPagePlugin(root);
    root.dataset.facebookState = 'loaded';
  } catch {
    showError(root);
  }
}

function initFacebookEmbed() {
  const root = getEmbedRoot();
  if (!root || !isDesktopEmbed()) return;
  if (root.dataset.facebookState === 'loaded') return;

  activateEmbed(root);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFacebookEmbed);
} else {
  initFacebookEmbed();
}

document.addEventListener('astro:page-load', initFacebookEmbed);

export {};
