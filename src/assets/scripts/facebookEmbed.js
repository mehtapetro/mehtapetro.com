const FB_SDK_ID = 'facebook-jssdk';
const FB_VERSION = 'v24.0';

function isDesktopEmbed() {
  return window.matchMedia('(min-width: 768px)').matches;
}

function getEmbedRoot() {
  const root = document.querySelector('[data-facebook-embed]');
  return root instanceof HTMLElement ? root : null;
}

function parseFacebookEmbed() {
  if (!isDesktopEmbed()) return;

  const root = getEmbedRoot();
  if (!root || !window.FB) return;

  window.FB.XFBML.parse(root);
}

function scheduleFacebookParse() {
  parseFacebookEmbed();
  window.requestAnimationFrame(parseFacebookEmbed);
  window.setTimeout(parseFacebookEmbed, 300);
  window.setTimeout(parseFacebookEmbed, 1200);
}

function ensureFbRoot() {
  if (document.getElementById('fb-root')) return;

  const root = document.createElement('div');
  root.id = 'fb-root';
  document.body.appendChild(root);
}

function onFacebookSdkReady() {
  window.dispatchEvent(new Event('facebook-sdk-ready'));
  scheduleFacebookParse();
}

function loadFacebookSdk() {
  if (!isDesktopEmbed() || !getEmbedRoot()) return;

  ensureFbRoot();

  if (window.FB) {
    scheduleFacebookParse();
    return;
  }

  if (document.getElementById(FB_SDK_ID)) {
    window.addEventListener('facebook-sdk-ready', scheduleFacebookParse, {
      once: true,
    });
    return;
  }

  const previousInit = window.fbAsyncInit;
  window.fbAsyncInit = function () {
    if (typeof previousInit === 'function') previousInit();
    window.FB.init({ xfbml: true, version: FB_VERSION });
    onFacebookSdkReady();
  };

  const script = document.createElement('script');
  script.id = FB_SDK_ID;
  script.async = true;
  script.defer = true;
  script.crossOrigin = 'anonymous';
  script.src = `https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=${FB_VERSION}`;
  script.addEventListener('load', () => {
    if (window.FB) onFacebookSdkReady();
  });
  document.body.appendChild(script);
}

function initFacebookEmbed() {
  if (!isDesktopEmbed()) return;
  loadFacebookSdk();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFacebookEmbed);
} else {
  initFacebookEmbed();
}

document.addEventListener('astro:page-load', initFacebookEmbed);

let resizeTimeoutId = 0;
window.addEventListener('resize', () => {
  window.clearTimeout(resizeTimeoutId);
  resizeTimeoutId = window.setTimeout(initFacebookEmbed, 200);
});

export {};
