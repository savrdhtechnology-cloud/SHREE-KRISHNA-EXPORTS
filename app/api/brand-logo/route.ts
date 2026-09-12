const LOGO_SOURCE =
  'https://raw.githubusercontent.com/savrdhtechnology-cloud/SHREE-KRISHNA-EXPORTS/main/public/images/shree-krishna-exports-logo.svg';

export const dynamic = 'force-dynamic';

export async function GET() {
  const upstream = await fetch(LOGO_SOURCE, { cache: 'no-store' });

  if (!upstream.ok) {
    return new Response('Logo unavailable', { status: 502 });
  }

  const svg = await upstream.text();
  const match = svg.match(/base64,([^"']+)/);

  if (!match) {
    return new Response('Logo data unavailable', { status: 502 });
  }

  const binary = atob(match[1]);
  const bytes = new Uint8Array(binary.length);

  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }

  return new Response(bytes, {
    status: 200,
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
