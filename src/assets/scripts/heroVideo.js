// Hero video: load only on desktop, poster on mobile, avoid listener leaks.

function isMobile() {
  return window.matchMedia('(max-width: 767px)').matches;
}

function teardownHeroVideo(video) {
  const cleanup = video.__heroCleanup;
  if (typeof cleanup === 'function') {
    cleanup();
    video.__heroCleanup = undefined;
  }
}

function initHeroVideo() {
  const video = document.querySelector('video[data-hero-video]');
  if (!(video instanceof HTMLVideoElement)) return;

  teardownHeroVideo(video);

  const heroSrc = video.dataset.heroSrc;
  if (!heroSrc) return;

  // Phones: poster background only — never download the large video
  if (isMobile()) {
    video.pause();
    video.removeAttribute('src');
    video.removeAttribute('autoplay');
    video.load();
    video.style.opacity = '0';
    return;
  }

  video.style.transition = 'opacity 600ms cubic-bezier(.22,.9,.29,1)';
  video.style.opacity = '0';
  video.preload = 'metadata';

  if (video.getAttribute('src') !== heroSrc) {
    video.setAttribute('src', heroSrc);
    video.load();
  }

  const playVideo = () => {
    video.play().catch(() => {});
  };

  const fadeIn = () => {
    video.style.opacity = '1';
  };

  const onCanPlay = () => {
    playVideo();
    fadeIn();
  };

  if (video.readyState >= 2) {
    onCanPlay();
  } else {
    video.addEventListener('loadeddata', onCanPlay, { once: true });
    video.addEventListener('canplay', onCanPlay, { once: true });
  }

  const handleVisibility = () => {
    if (document.hidden) {
      video.pause();
    } else {
      playVideo();
      fadeIn();
    }
  };

  const handlePageHide = () => {
    video.pause();
  };

  const handlePageShow = () => {
    playVideo();
    fadeIn();
  };

  document.addEventListener('visibilitychange', handleVisibility);
  window.addEventListener('pagehide', handlePageHide);
  window.addEventListener('pageshow', handlePageShow);

  video.__heroCleanup = () => {
    document.removeEventListener('visibilitychange', handleVisibility);
    window.removeEventListener('pagehide', handlePageHide);
    window.removeEventListener('pageshow', handlePageShow);
  };
}

function boot() {
  initHeroVideo();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}

document.addEventListener('astro:page-load', () => {
  window.requestAnimationFrame(boot);
});

export {};
