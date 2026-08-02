// heroVideo.js
// Smoothly fade hero video in/out and pause on page hide to avoid sudden playback

function initHeroVideo() {
  const video = document.querySelector('video[data-hero-video]');
  if (!video) return;

  // Use a gentle opacity transition
  video.style.transition = 'opacity 700ms cubic-bezier(.22,.9,.29,1)';
  video.style.opacity = '1';

  try {
    video.load();
  } catch (e) {}

  const playVideo = () => {
    try {
      video.play().catch(() => {});
    } catch (e) {}
  };

  const fadeIn = () => {
    video.style.opacity = '1';
  };
  const fadeOut = () => {
    video.style.opacity = '0';
  };

  const onCanPlay = () => {
    // small delay so it doesn't feel abrupt
    playVideo();
    setTimeout(fadeIn, 120);
  };

  if (video.readyState >= 2) {
    onCanPlay();
  } else {
    video.addEventListener('loadeddata', onCanPlay, { once: true });
    video.addEventListener('canplay', onCanPlay, { once: true });
    video.addEventListener('canplaythrough', onCanPlay, { once: true });
  }

  // Pause video when page hidden to avoid sudden resume
  function handleVisibility() {
    if (document.hidden) {
      try {
        video.pause();
      } catch (e) {}
      fadeOut();
    } else {
      playVideo();
      // fade in after a small delay to keep it smooth
      setTimeout(fadeIn, 120);
    }
  }

  document.addEventListener('visibilitychange', handleVisibility);

  // Also listen to pagehide/pageshow (navigation away/back)
  window.addEventListener('pagehide', () => {
    try {
      video.pause();
    } catch (e) {}
    fadeOut();
  });
  window.addEventListener('pageshow', () => {
    playVideo();
    setTimeout(fadeIn, 120);
  });

  // If user clicks navigation links, gently fade out before leaving
  document.addEventListener('click', e => {
    const a = e.target.closest && e.target.closest('a');
    if (!a) return;
    const href = a.getAttribute('href');
    if (
      !href ||
      href.startsWith('#') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:')
    )
      return;
    // fade out quickly to avoid abrupt stop
    fadeOut();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHeroVideo);
} else {
  initHeroVideo();
}

document.addEventListener('astro:page-load', () => {
  window.requestAnimationFrame(initHeroVideo);
});

export {};
