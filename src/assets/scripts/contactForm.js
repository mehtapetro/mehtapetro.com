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

function resultSafeSet(statusElement, message, variant) {
  setStatus(statusElement, message, variant);
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

      resultSafeSet(status, sendingMessage, 'info');
      form.setAttribute('aria-busy', 'true');

      if (submitButton instanceof HTMLButtonElement) {
        submitButton.disabled = true;
        submitButton.textContent = sendingMessage;
      }

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: new FormData(form),
        });

        const data = await response.json();

        if (data.success) {
          form.reset();
          resultSafeSet(status, successMessage, 'success');
        } else {
          resultSafeSet(status, data.message || errorMessage, 'error');
        }
      } catch (error) {
        const message =
          error instanceof Error && error.message
            ? error.message
            : errorMessage;
        resultSafeSet(status, message, 'error');
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
