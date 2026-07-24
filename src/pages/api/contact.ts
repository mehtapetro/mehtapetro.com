import type { APIRoute } from 'astro';

export const prerender = false;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 80;
const MAX_EMAIL_LENGTH = 120;
const MAX_PHONE_LENGTH = 40;
const MAX_MESSAGE_LENGTH = 5000;

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

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export const POST: APIRoute = async ({ request }) => {
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
    const phone = readField(formData, 'hs-phone-number');
    const message = readField(formData, 'hs-about-contacts');

    if (!firstName) {
      return json(400, { ok: false, message: 'First name is required.' });
    }

    if (firstName.length > MAX_NAME_LENGTH || lastName.length > MAX_NAME_LENGTH) {
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

    if (phone.length > MAX_PHONE_LENGTH) {
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

    const apiKey = import.meta.env.RESEND_API_KEY;
    const toEmail = import.meta.env.CONTACT_TO_EMAIL || 'info@mehtapetro.com';
    const fromEmail = import.meta.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !fromEmail) {
      console.error('Contact form is missing email configuration.');
      return json(500, {
        ok: false,
        message: 'Email service is not configured yet. Please try again later.',
      });
    }

    const fullName = [firstName, lastName].filter(Boolean).join(' ');
    const subject = `New website enquiry from ${fullName}`;
    const submittedAt = new Date().toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
      timeZone: 'Asia/Kolkata',
    });

    const html = `
      <div style="font-family: Arial, sans-serif; color: #10245F; line-height: 1.6;">
        <h2 style="margin-bottom: 16px;">New contact form submission</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 720px;">
          <tr>
            <td style="padding: 8px 0; font-weight: 700; width: 160px;">Name</td>
            <td style="padding: 8px 0;">${escapeHtml(fullName)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 700;">Email</td>
            <td style="padding: 8px 0;">${escapeHtml(email)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 700;">Phone</td>
            <td style="padding: 8px 0;">${escapeHtml(phone || 'Not provided')}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 700; vertical-align: top;">Message</td>
            <td style="padding: 8px 0; white-space: pre-wrap;">${escapeHtml(message)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 700;">Submitted</td>
            <td style="padding: 8px 0;">${escapeHtml(submittedAt)}</td>
          </tr>
        </table>
      </div>
    `;

    const text = [
      'New contact form submission',
      '',
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone || 'Not provided'}`,
      `Submitted: ${submittedAt}`,
      '',
      'Message:',
      message,
    ].join('\n');

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject,
        html,
        text,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error('Resend API error:', resendResponse.status, errorText);

      return json(502, {
        ok: false,
        message: 'Unable to send your message right now. Please try again shortly.',
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
