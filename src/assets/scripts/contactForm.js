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

function buildSuccessPanel(locale, contactPath) {
  const wrapper = document.createElement('div');
  wrapper.id = 'contact-success';
  wrapper.className =
    'rounded-[2rem] border border-emerald-200/90 bg-linear-to-br from-emerald-50 via-white to-[#F5FAFF] p-8 text-center shadow-[0_30px_90px_-50px_rgba(16,185,129,0.45)] sm:p-10';

  const badge = document.createElement('div');
  badge.className =
    'mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 shadow-sm ring-8 ring-emerald-100/70';
  badge.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-7 w-7" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>';

  const label = document.createElement('p');
  label.className =
    'mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700';
  label.textContent = locale === 'fr' ? 'Message envoyé' : 'Message sent';

  const title = document.createElement('h3');
  title.className = 'mt-2 text-2xl font-bold text-[#10245F] sm:text-3xl';
  title.textContent =
    locale === 'fr'
      ? 'Merci — votre demande est arrivée à notre équipe.'
      : 'Thanks — your enquiry has reached our team.';

  const text = document.createElement('p');
  text.className = 'mt-3 text-base leading-7 text-neutral-600';
  text.textContent =
    locale === 'fr'
      ? 'Nous avons bien reçu vos informations. Notre équipe examinera votre demande et vous répondra sous peu.'
      : 'We’ve received your details successfully. Our team will review your request and get back to you shortly.';

  const secondary = document.createElement('p');
  secondary.className = 'mt-3 text-sm text-neutral-500';
  secondary.textContent =
    locale === 'fr'
      ? 'En attendant, vous pouvez continuer à parcourir nos solutions, produits et ressources.'
      : 'In the meantime, feel free to continue exploring our products, services, and resources.';

  const actions = document.createElement('div');
  actions.className =
    'mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row';

  const cta = document.createElement('a');
  cta.href = contactPath;
  cta.className =
    'inline-flex items-center justify-center rounded-xl bg-[#1E3AFF] px-5 py-3 text-sm font-bold text-white transition duration-300 hover:bg-[#1632E0]';
  cta.textContent =
    locale === 'fr' ? 'Envoyer un autre message' : 'Send another message';

  const secondaryCta = document.createElement('a');
  secondaryCta.href = locale === 'fr' ? '/fr/products' : '/products';
  secondaryCta.className =
    'inline-flex items-center justify-center rounded-xl border border-[#D6E2FF] bg-white px-5 py-3 text-sm font-bold text-[#10245F] transition duration-300 hover:border-[#B8CBFF] hover:bg-[#F5F8FF]';
  secondaryCta.textContent =
    locale === 'fr' ? 'Voir les produits' : 'Explore products';

  actions.append(cta, secondaryCta);
  wrapper.append(badge, label, title, text, secondary, actions);
  return wrapper;
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
    const locale = document.documentElement.lang === 'fr' ? 'fr' : 'en';
    const contactPath = locale === 'fr' ? '/fr/contact' : '/contact';
    const subTitle =
      form.parentElement?.querySelector('p.text-sm.text-neutral-600')?.textContent?.trim() ||
      (locale === 'fr'
        ? 'Nous vous répondrons dans un délai de 1 à 2 jours ouvrables.'
        : "We'll get back to you in 1-2 business days.");

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
        setStatus(status, 'Contact form is not configured yet. Please try again later.', 'error');
        return;
      }

      setStatus(status, sendingMessage, 'info');
      form.setAttribute('aria-busy', 'true');

      if (submitButton instanceof HTMLButtonElement) {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
      }

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

        const formContainer = form.parentElement;
        const heading = formContainer?.querySelector('h2');
        form.reset();

        if (formContainer instanceof HTMLElement) {
          form.remove();
          const successPanel = buildSuccessPanel(locale, contactPath);
          formContainer.appendChild(successPanel);
          if (heading instanceof HTMLElement) {
            heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            successPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      } catch (error) {
        const message =
          error instanceof Error && error.message ? error.message : errorMessage;
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
