import type { APIRoute } from 'astro';

export const prerender = false;

const web3FormsEndpoint = 'https://api.web3forms.com/submit';
const web3FormsAccessKey = 'e138342b-b691-410c-a7fb-3b3ce5a49ea6';

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

  if (accessKey !== web3FormsAccessKey) {
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

  const response = await fetch(web3FormsEndpoint, {
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
