function setStatus(statusElement, message, variant) {
  if (!(statusElement instanceof HTMLElement)) return;

  statusElement.textContent = message;
  statusElement.classList.remove(
    'hidden',
    'text-red-600',
    'text-emerald-700',
    'text-[#0039E6]',
    'opacity-0',
    'translate-y-2',
    'scale-95'
  );
  statusElement.classList.add(
    'transition-all',
    'duration-500',
    'ease-out',
    'will-change-transform'
  );

  statusElement.classList.add('opacity-0', 'translate-y-2', 'scale-95');
  statusElement.getBoundingClientRect();
  statusElement.classList.remove('opacity-0', 'translate-y-2', 'scale-95');
  statusElement.classList.add('opacity-100', 'translate-y-0', 'scale-100');

  if (variant === 'success') {
    statusElement.classList.add('text-emerald-700');
    return;
  }

  if (variant === 'error') {
    statusElement.classList.add('text-red-600');
    return;
  }

  statusElement.classList.add('text-[#0039E6]');
}

function hideStatus(statusElement) {
  if (!(statusElement instanceof HTMLElement)) return;
  statusElement.classList.add('opacity-0', 'translate-y-2', 'scale-95');
  window.setTimeout(() => {
    statusElement.textContent = '';
    statusElement.classList.add('hidden');
    statusElement.classList.remove(
      'opacity-0',
      'opacity-100',
      'translate-y-0',
      'translate-y-2',
      'scale-100',
      'scale-95'
    );
  }, 350);
}

function setButtonLoading(button, label) {
  if (!(button instanceof HTMLButtonElement)) return;
  button.disabled = true;
  button.classList.add(
    'cursor-wait',
    'shadow-[0_20px_45px_-25px_rgba(30,58,255,0.95)]'
  );
  button.innerHTML = `<span class="inline-flex items-center gap-3"><span class="relative flex h-4 w-4"><span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/35 opacity-75"></span><span class="relative inline-flex h-4 w-4 animate-spin rounded-full border-2 border-white/35 border-t-white"></span></span><span>${label}</span></span>`;
}

function setButtonLabel(button, label) {
  if (!(button instanceof HTMLButtonElement)) return;
  button.disabled = false;
  button.classList.remove(
    'cursor-wait',
    'shadow-[0_20px_45px_-25px_rgba(30,58,255,0.95)]'
  );
  button.innerHTML = label;
}

function loadRecaptcha(siteKey) {
  return new Promise((resolve, reject) => {
    try {
      if (window.grecaptcha && window.grecaptcha.execute) {
        return resolve();
      }

      const src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(
        siteKey
      )}`;
      const existing = document.querySelector(`script[src="${src}"]`);
      if (existing) {
        existing.addEventListener('load', () => resolve());
        existing.addEventListener('error', reject);
        return;
      }

      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = reject;
      document.head.appendChild(script);
    } catch (e) {
      reject(e);
    }
  });
}

function initCareerForm() {
  const form = document.getElementById('career-form');
  if (!form || !(form instanceof HTMLFormElement)) return;
  if (form.dataset.careerBound === 'true') return;

  form.dataset.careerBound = 'true';

  let status = form.querySelector('[data-form-status]');
  if (!status) {
    status = document.createElement('p');
    status.setAttribute('data-form-status', '');
    status.className =
      'hidden min-h-[1.5rem] text-sm leading-6 opacity-0 translate-y-2 scale-95';
    form.appendChild(status);
  }

  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonText = submitButton?.textContent?.trim() || 'Submit';
  const successMessage =
    form.dataset.successMessage ||
    'Thank you — your application has been submitted.';
  const errorMessage =
    form.dataset.errorMessage ||
    'Sorry, we could not submit your application. Please try again.';
  const sendingMessage =
    form.dataset.sendingMessage || 'Sending your application…';
  let successTimeoutId = 0;

  form.addEventListener('submit', async event => {
    event.preventDefault();

    if (successTimeoutId) {
      window.clearTimeout(successTimeoutId);
      successTimeoutId = 0;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus(status, sendingMessage, 'info');
    form.setAttribute('aria-busy', 'true');
    setButtonLoading(submitButton, sendingMessage);

    try {
      // If a reCAPTCHA site key is provided on the form, ensure we get a token
      const siteKey = form.dataset.recaptchaSitekey;
      if (siteKey) {
        await loadRecaptcha(siteKey);
        const token = await new Promise((resolve, reject) => {
          try {
            window.grecaptcha.ready(() => {
              window.grecaptcha
                .execute(siteKey, { action: 'submit' })
                .then(resolve)
                .catch(reject);
            });
          } catch (e) {
            reject(e);
          }
        });

        if (token) {
          const existing = form.querySelector('input[name="g-recaptcha-response"]');
          if (existing) existing.remove();
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = 'g-recaptcha-response';
          input.value = token;
          form.appendChild(input);
        }
      }

      // Attempt XHR/fetch submission first
      try {
        const response = await fetch(form.action || '/', {
          method: 'POST',
          body: new FormData(form),
          headers: {
            Accept: 'application/json',
          },
        });

        if (!response.ok) {
          let msg = errorMessage;
          try {
            const text = await response.text();
            if (text) msg = text;
          } catch (e) {
            // ignore body parsing errors
          }
          throw new Error(msg);
        }

        form.reset();
        setStatus(status, successMessage, 'success');
        setButtonLabel(submitButton, originalButtonText);
        successTimeoutId = window.setTimeout(() => {
          hideStatus(status);
          successTimeoutId = 0;
        }, 5000);
      } catch (xhrError) {
        // Likely a CORS or network error. Fall back to an iframe-based form submit (bypasses CORS).
        try {
          await fallbackIframeSubmit(form);
          form.reset();
          setStatus(status, successMessage, 'success');
          setButtonLabel(submitButton, originalButtonText);
          successTimeoutId = window.setTimeout(() => {
            hideStatus(status);
            successTimeoutId = 0;
          }, 5000);
        } catch (fbErr) {
          throw fbErr || xhrError;
        }
      }
    } catch (error) {
      const message =
        error instanceof Error && error.message ? error.message : errorMessage;
      setStatus(status, message, 'error');
      setButtonLabel(submitButton, originalButtonText);
    } finally {
      form.removeAttribute('aria-busy');
    }
  });
}

/**
 * Submit the form using a hidden iframe to avoid CORS issues with fetch.
 * Resolves when the iframe fires a load event, or rejects on timeout.
 */
function fallbackIframeSubmit(form) {
  return new Promise((resolve, reject) => {
    try {
      const iframeName = 'career-form-iframe-' + Date.now();
      const iframe = document.createElement('iframe');
      iframe.name = iframeName;
      iframe.style.display = 'none';

      let settled = false;

      const cleanup = () => {
        if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
        form.removeAttribute('target');
      };

      const onLoad = () => {
        if (settled) return;
        settled = true;
        cleanup();
        resolve();
      };

      iframe.addEventListener('load', onLoad);
      document.body.appendChild(iframe);

      // Save old target and set to iframe
      const oldTarget = form.target;
      form.target = iframeName;

      // Submit the form normally (will post into the iframe)
      form.submit();

      // Timeout if nothing happens
      const timeoutId = window.setTimeout(() => {
        if (settled) return;
        settled = true;
        cleanup();
        form.target = oldTarget || '';
        reject(new Error('Submission timed out'));
      }, 15000);

      // Ensure we restore target on resolve/reject
      const originalResolve = resolve;
      const originalReject = reject;
      resolve = (...args) => {
        clearTimeout(timeoutId);
        form.target = oldTarget || '';
        originalResolve(...args);
      };
      reject = (...args) => {
        clearTimeout(timeoutId);
        form.target = oldTarget || '';
        originalReject(...args);
      };
    } catch (e) {
      reject(e);
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCareerForm);
} else {
  initCareerForm();
}

export {};
