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

function initCareerForm() {
  const form = document.getElementById('career-form');
  if (!form || !(form instanceof HTMLFormElement)) return;
  if (form.dataset.careerBound === 'true') return;
  form.dataset.careerBound = 'true';

  // ensure a status element exists
  let status = form.querySelector('[data-form-status]');
  if (!status) {
    status = document.createElement('p');
    status.setAttribute('data-form-status', '');
    status.className = 'hidden min-h-[1.5rem] text-sm leading-6';
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
      const response = await fetch(form.action || '/', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        // try parse json error
        let msg = errorMessage;
        try {
          const data = await response.json();
          if (data && data.message) msg = data.message;
        } catch (e) {
          // ignore JSON parse errors
        }
        throw new Error(msg);
      }

      // Try parse JSON success response, but treat any ok response as success
      try {
        const data = await response.json();
        if (data && data.success === false)
          throw new Error(data.message || errorMessage);
      } catch (e) {
        // if parsing failed, still consider response.ok as success
      }

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

export {};
