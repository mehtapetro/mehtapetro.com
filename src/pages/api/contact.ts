import type { APIRoute } from 'astro';
import { WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT } from '@/data/web3forms';

export const prerender = false;

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const accessKey = String(formData.get('access_key') ?? '').trim();

  if (accessKey !== WEB3FORMS_ACCESS_KEY) {
    return jsonResponse(
      {
        success: false,
        message: 'Contact form is not configured correctly.',
      },
      400
    );
  }

  const nameParts = [
    String(formData.get('firstName') ?? '').trim(),
    String(formData.get('lastName') ?? '').trim(),
  ].filter(Boolean);
  const email = String(formData.get('email') ?? '').trim();
  const payload = new FormData();

  for (const [key, value] of formData.entries()) {
    payload.append(key, value);
  }

  if (nameParts.length > 0 && !payload.has('name')) {
    payload.set('name', nameParts.join(' '));
  }

  if (email) {
    payload.set('replyto', email);
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    body: payload,
    headers: {
      Accept: 'application/json',
    },
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    return jsonResponse(
      {
        success: false,
        message:
          (data as { message?: string } | null)?.message ||
          'Sorry, we could not send your message right now. Please try again.',
      },
      502
    );
  }

  return jsonResponse(data ?? { success: true });
};
