import type { APIRoute } from 'astro';

export const prerender = false;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 80;
const MAX_EMAIL_LENGTH = 120;
const MAX_PHONE_LENGTH = 40;
const MAX_MESSAGE_LENGTH = 5000;

type JsonBody = { ok: boolean; message: string };

type ContactPayload = {
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  phoneCountryCode: string;
  phoneNumber: string;
  phone: string;
  message: string;
  submittedAt: string;
  source: string;
};

function json(status: number, body: JsonBody) {
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

async function sendWithWeb3Forms(payload: ContactPayload) {
  const accessKey = import.meta.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error('Web3Forms access key is not configured.');
  }

  const submission = {
    access_key: accessKey,
    subject: `New website enquiry from ${payload.fullName}`,
    from_name: 'Mehta Petro Website',
    name: payload.fullName,
    email: payload.email,
    phone: payload.phone,
    message: payload.message,
    firstName: payload.firstName,
    lastName: payload.lastName,
    phoneCountryCode: payload.phoneCountryCode,
    phoneNumber: payload.phoneNumber,
    submittedAt: payload.submittedAt,
    source: payload.source,
  };

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(submission),
  });

  let responseBody: { success?: boolean; message?: string } | null = null;
  const contentType = response.headers.get('content-type') || '';

  if (contentType.includes('application/json')) {
    responseBody = await response.json();
  }

  if (!response.ok || !responseBody?.success) {
    throw new Error(
      responseBody?.message ||
        `Web3Forms request failed with status ${response.status}.`
    );
  }
}

export const POST: APIRoute = async ({ request, url }) => {
  try {
    const formData = await request.formData();

    const honeypot = readField(formData, 'company');
    if (honeypot) {
      return json(200, {
        ok: true,
        message: 'Thanks! Your message has been sent.',
      });
    }

    const firstName = readField(formData, 'hs-firstname-contacts');
    const lastName = readField(formData, 'hs-lastname-contacts');
    const email = readField(formData, 'hs-email-contacts').toLowerCase();
    const phoneCountryCode = readField(formData, 'hs-phone-country-code');
    const phoneNumber = readField(formData, 'hs-phone-number');
    const message = readField(formData, 'hs-about-contacts');

    if (!firstName) {
      return json(400, { ok: false, message: 'First name is required.' });
    }

    if (
      firstName.length > MAX_NAME_LENGTH ||
      lastName.length > MAX_NAME_LENGTH
    ) {
      return json(400, {
        ok: false,
        message: 'Please keep the name fields under 80 characters.',
      });
    }

    if (!email || !EMAIL_REGEX.test(email) || email.length > MAX_EMAIL_LENGTH) {
      return json(400, {
        ok: false,
        message: 'Please enter a valid email address.',
      });
    }

    if (phoneCountryCode.length > 12 || phoneNumber.length > MAX_PHONE_LENGTH) {
      return json(400, {
        ok: false,
        message: 'Please keep the phone number under 40 characters.',
      });
    }

    if (!message) {
      return json(400, { ok: false, message: 'Message is required.' });
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return json(400, {
        ok: false,
        message: 'Please keep the message under 5000 characters.',
      });
    }

    const fullName = [firstName, lastName].filter(Boolean).join(' ');
    const phone = [phoneCountryCode, phoneNumber].filter(Boolean).join(' ');
    const submittedAt = new Date().toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
      timeZone: 'Asia/Kolkata',
    });

    const payload: ContactPayload = {
      firstName,
      lastName,
      fullName,
      email,
      phoneCountryCode,
      phoneNumber,
      phone,
      message,
      submittedAt,
      source: url.origin,
    };

    await sendWithWeb3Forms(payload);

    return json(200, {
      ok: true,
      message: 'Thanks! Your message has been sent.',
    });
  } catch (error) {
    console.error('Contact form submission failed:', error);
    return json(500, {
      ok: false,
      message:
        'Unable to send your message right now. Please try again shortly.',
    });
  }
};
