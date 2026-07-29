import type { APIRoute } from 'astro';

export const prerender = false;

function json(status: number, body: { ok: boolean; message: string }) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}

function readField(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === 'string' ? value.trim() : '';
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const incomingForm = await request.formData();

    const honeypot = readField(incomingForm, 'company');
    if (honeypot) {
      return json(200, {
        ok: true,
        message: 'Thanks! Your message has been sent.',
      });
    }

    const accessKey = import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      return json(500, {
        ok: false,
        message: 'Contact form is not configured yet. Please try again later.',
      });
    }

    const outboundForm = new FormData();
    outboundForm.set('access_key', accessKey);
    outboundForm.set('subject', readField(incomingForm, 'subject') || 'New website enquiry from Mehta Petro');
    outboundForm.set('from_name', readField(incomingForm, 'from_name') || 'Mehta Petro Website');
    outboundForm.set('name', readField(incomingForm, 'name'));
    outboundForm.set('email', readField(incomingForm, 'email'));
    outboundForm.set('phone', readField(incomingForm, 'phone'));
    outboundForm.set('message', readField(incomingForm, 'message'));
    outboundForm.set('source', readField(incomingForm, 'source'));

    const lastName = readField(incomingForm, 'lastName');
    const phoneCountryCode = readField(incomingForm, 'phoneCountryCode');

    if (lastName) outboundForm.set('lastName', lastName);
    if (phoneCountryCode) outboundForm.set('phoneCountryCode', phoneCountryCode);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: outboundForm,
    });

    const data = await response.json();

    if (!response.ok || !data?.success) {
      return json(502, {
        ok: false,
        message:
          data?.message ||
          'Unable to send your message right now. Please try again shortly.',
      });
    }

    return json(200, {
      ok: true,
      message: 'Thanks! Your message has been sent.',
    });
  } catch (error) {
    console.error('Contact form submission failed:', error);
    return json(500, {
      ok: false,
      message: 'Unable to send your message right now. Please try again shortly.',
    });
  }
};
