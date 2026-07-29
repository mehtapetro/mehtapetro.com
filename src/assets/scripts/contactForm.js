function setStatus(statusElement, message, variant) {
  if (!(statusElement instanceof HTMLElement)) return;

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

function setButtonLoading(button, label) {
  if (!(button instanceof HTMLButtonElement)) return;
  button.disabled = true;
  button.innerHTML = `<span class="inline-flex items-center gap-2"><span class="h-4 w-4 animate-spin rounded-full border-2 border-white/35 border-t-white"></span><span>${label}</span></span>`;
}

function setButtonLabel(button, label) {
  if (!(button instanceof HTMLButtonElement)) return;
  button.disabled = false;
  button.textContent = label;
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
    const accessKeyField = form.querySelector('input[name="access_key"]');
    const successMessage =
      form.dataset.successMessage || 'Thanks! Your message has been sent.';
    const errorMessage =
      form.dataset.errorMessage ||
      'Sorry, we could not send your message right now. Please try again.';
    const sendingMessage =
      form.dataset.sendingMessage || 'Sending your message…';
    const sendAnotherMessage =
      form.dataset.sendAnotherMessage || 'Send another message';

    form.addEventListener('submit', async event => {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      if (
        accessKeyField instanceof HTMLInputElement &&
        !accessKeyField.value.trim()
      ) {
        setStatus(
          status,
          'Contact form is not configured yet. Please try again later.',
          'error'
        );
        return;
      }

      setStatus(status, sendingMessage, 'info');
      form.setAttribute('aria-busy', 'true');
      setButtonLoading(submitButton, sendingMessage);

      try {
        const response = await fetch(form.action || 'https://api.web3forms.com/submit', {
          method: 'POST',
          body: new FormData(form),
          headers: {
            Accept: 'application/json',
          },
        });

        const data = await response.json();

        if (!response.ok || !data?.success) {
          throw new Error(data?.message || errorMessage);
        }

        form.reset();
        setStatus(status, successMessage, 'success');
        setButtonLabel(submitButton, sendAnotherMessage);
      } catch (error) {
        const message =
          error instanceof Error && error.message ? error.message : errorMessage;
        setStatus(status, message, 'error');
        setButtonLabel(submitButton, originalButtonText);
      } finally {
        form.removeAttribute('aria-busy');
      }
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initContactForms);
} else {
  initContactForms();
}
