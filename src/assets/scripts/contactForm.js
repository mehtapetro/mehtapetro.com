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
  const successPanel = document.getElementById('contact-success');
  if (successPanel instanceof HTMLElement) {
    successPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  document.querySelectorAll('#contact-form').forEach(form => {
    if (!(form instanceof HTMLFormElement)) return;

    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText =
      submitButton?.textContent?.trim() || 'Send Message';
    const accessKeyField = form.querySelector('input[name="access_key"]');

    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        form.reportValidity();
        return;
      }

      if (
        accessKeyField instanceof HTMLInputElement &&
        !accessKeyField.value.trim()
      ) {
        event.preventDefault();
        return;
      }

      form.setAttribute('aria-busy', 'true');

      if (submitButton instanceof HTMLButtonElement) {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
      }

      window.setTimeout(() => {
        form.removeAttribute('aria-busy');

        if (submitButton instanceof HTMLButtonElement) {
          submitButton.disabled = false;
          submitButton.textContent = originalButtonText;
        }
      }, 8000);
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initContactForms);
} else {
  initContactForms();
}
