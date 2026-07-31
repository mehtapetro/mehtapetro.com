// heroVideo.js
// Smoothly fade hero video in/out and pause on page hide to avoid sudden playback

function initHeroVideo() {
  const video = document.querySelector('section.relative h-screen video, video[poster]');
  if (!video) return;

  // Use a gentle opacity transition
  video.style.transition = 'opacity 700ms cubic-bezier(.22,.9,.29,1)';
  // Start slightly transparent if still loading
  if (video.readyState < 3) {
    video.style.opacity = '0';
  }

  const fadeIn = () => { video.style.opacity = '1'; };
  const fadeOut = () => { video.style.opacity = '0'; };

  const onCanPlay = () => {
    // small delay so it doesn't feel abrupt
    setTimeout(fadeIn, 120);
  };

  if (video.readyState >= 3) onCanPlay();
  else video.addEventListener('canplaythrough', onCanPlay, { once: true });

  // Pause video when page hidden to avoid sudden resume
  function handleVisibility() {
    if (document.hidden) {
      try { video.pause(); } catch (e) {}
      fadeOut();
    } else {
      try { video.play().catch(()=>{}); } catch (e) {}
      // fade in after a small delay to keep it smooth
      setTimeout(fadeIn, 120);
    }
  }

  document.addEventListener('visibilitychange', handleVisibility);

  // Also listen to pagehide/pageshow (navigation away/back)
  window.addEventListener('pagehide', () => { try { video.pause(); } catch (e){}; fadeOut(); });
  window.addEventListener('pageshow', () => { try { video.play().catch(()=>{}); } catch (e){}; setTimeout(fadeIn, 120); });

  // If user clicks navigation links, gently fade out before leaving
  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('a');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
    // fade out quickly to avoid abrupt stop
    fadeOut();
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initHeroVideo);
else initHeroVideo();

export {};
