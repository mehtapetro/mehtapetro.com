function setStatus(statusElement, message, variant) {
  if (!statusElement) return;

  statusElement.textContent = message;
  statusElement.classList.remove(
    'hidden',
    'text-red-600',
    'text-emerald-700',
    'text-[#1E3AFF]'
  );

  if (variant === 'success') {
    statusElement.classList.add('text-emerald-700');
    return;
  }

  if (variant === 'error') {
    statusElement.classList.add('text-red-600');
    return;
  }

  statusElement.classList.add('text-[#1E3AFF]');
}

function initContactForms() {
  document.querySelectorAll('[data-contact-form]').forEach(form => {
    if (!(form instanceof HTMLFormElement)) return;
    if (form.dataset.contactBound === 'true') return;

    form.dataset.contactBound = 'true';

    const status = form.querySelector('[data-form-status]');
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText =
      submitButton?.textContent?.trim() || 'Send Message';

    form.addEventListener('submit', async event => {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const sendingMessage =
        form.dataset.sendingMessage || 'Sending your message…';
      const successMessage =
        form.dataset.successMessage || 'Thanks! Your message has been sent.';
      const errorMessage =
        form.dataset.errorMessage ||
        'Sorry, we could not send your message right now. Please try again.';
      const missingKeyMessage =
        form.dataset.missingKeyMessage ||
        'Contact form is not configured yet. Please try again later.';
      const accessKeyField = form.querySelector('input[name="access_key"]');

      if (
        accessKeyField instanceof HTMLInputElement &&
        !accessKeyField.value.trim()
      ) {
        setStatus(status, missingKeyMessage, 'error');
        return;
      }

      setStatus(status, sendingMessage, 'info');
      form.setAttribute('aria-busy', 'true');

      if (submitButton instanceof HTMLButtonElement) {
        submitButton.disabled = true;
        submitButton.textContent = sendingMessage;
      }

      try {
        const response = await fetch(form.action || 'https://api.web3forms.com/submit', {
          method: 'POST',
          body: new FormData(form),
          headers: {
            Accept: 'application/json',
          },
        });

        let payload = null;
        const contentType = response.headers.get('content-type') || '';

        if (contentType.includes('application/json')) {
          payload = await response.json();
        }

        const ok = response.ok && (payload?.success ?? payload?.ok);

        if (!ok) {
          throw new Error(payload?.message || errorMessage);
        }

        form.reset();
        setStatus(status, payload?.message || successMessage, 'success');
      } catch (error) {
        const message =
          error instanceof Error && error.message
            ? error.message
            : errorMessage;
        setStatus(status, message, 'error');
      } finally {
        form.removeAttribute('aria-busy');

        if (submitButton instanceof HTMLButtonElement) {
          submitButton.disabled = false;
          submitButton.textContent = originalButtonText;
        }
      }
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initContactForms);
} else {
  initContactForms();
}
