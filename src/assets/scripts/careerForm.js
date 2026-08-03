function setStatus(statusElement, message, variant) {
  if (!(statusElement instanceof HTMLElement)) return;

  statusElement.textContent = message;
  statusElement.classList.remove(
    'hidden',
    'text-red-600',
    'text-emerald-700',
    'text-[#0039E6]',
    'opacity-0'
  );
  statusElement.classList.add('transition-opacity', 'duration-500');

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
  statusElement.classList.add('opacity-0');
  window.setTimeout(() => {
    statusElement.textContent = '';
    statusElement.classList.add('hidden');
    statusElement.classList.remove('opacity-0');
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
      if (window.grecaptcha?.execute) {
        resolve();
        return;
      }

      const src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`;
      const existing = document.querySelector(`script[src="${src}"]`);
      if (existing) {
        existing.addEventListener('load', () => resolve(), { once: true });
        existing.addEventListener('error', reject, { once: true });
        return;
      }

      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = reject;
      document.head.appendChild(script);
    } catch (error) {
      reject(error);
    }
  });
}

async function attachRecaptchaToken(form, siteKey) {
  await loadRecaptcha(siteKey);

  const token = await new Promise((resolve, reject) => {
    try {
      window.grecaptcha.ready(() => {
        window.grecaptcha.execute(siteKey, { action: 'submit' }).then(resolve).catch(reject);
      });
    } catch (error) {
      reject(error);
    }
  });

  if (!token) return;

  form.querySelector('input[name="g-recaptcha-response"]')?.remove();
  const input = document.createElement('input');
  input.type = 'hidden';
  input.name = 'g-recaptcha-response';
  input.value = token;
  form.appendChild(input);
}

function fallbackIframeSubmit(form) {
  return new Promise((resolve, reject) => {
    const iframeName = `career-form-iframe-${Date.now()}`;
    const iframe = document.createElement('iframe');
    iframe.name = iframeName;
    iframe.style.display = 'none';

    const oldTarget = form.target;
    form.target = iframeName;

    let settled = false;
    const finish = callback => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timeoutId);
      form.target = oldTarget || '';
      iframe.remove();
      callback();
    };

    iframe.addEventListener('load', () => finish(resolve), { once: true });
    const timeoutId = window.setTimeout(
      () => finish(() => reject(new Error('Submission timed out. Please try again.'))),
      15000
    );

    document.body.appendChild(iframe);
    form.submit();
  });
}

async function submitCareerForm(form, errorMessage) {
  const siteKey = form.dataset.recaptchaSitekey?.trim();
  if (siteKey) {
    await attachRecaptchaToken(form, siteKey);
  }

  try {
    const response = await fetch(form.action || '/', {
      method: 'POST',
      body: new FormData(form),
      headers: {
        Accept: 'application/json, text/plain, */*',
      },
    });

    if (!response.ok) {
      let message = errorMessage;
      try {
        const data = await response.json();
        if (data?.error || data?.message) {
          message = data.error || data.message;
        }
      } catch {
        const text = await response.text().catch(() => '');
        if (text) message = text;
      }
      throw new Error(message);
    }

    return;
  } catch (fetchError) {
    try {
      await fallbackIframeSubmit(form);
      return;
    } catch (iframeError) {
      throw iframeError instanceof Error ? iframeError : fetchError;
    }
  }
}

function initCareerForm() {
  const form = document.getElementById('career-form');
  if (!form || !(form instanceof HTMLFormElement)) return;
  if (form.dataset.careerBound === 'true') return;

  form.dataset.careerBound = 'true';

  const status = form.querySelector('[data-form-status]');
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonText =
    submitButton?.textContent?.trim() || 'Submit Application';
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
      await submitCareerForm(form, errorMessage);

      form.reset();
      setStatus(status, successMessage, 'success');
      setButtonLabel(submitButton, originalButtonText);
      successTimeoutId = window.setTimeout(() => {
        hideStatus(status);
        successTimeoutId = 0;
      }, 5000);
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

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCareerForm);
} else {
  initCareerForm();
}

document.addEventListener('astro:page-load', initCareerForm);

export {};
