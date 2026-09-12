const LOGO_SOURCE =
  'https://raw.githubusercontent.com/savrdhtechnology-cloud/SHREE-KRISHNA-EXPORTS/main/public/images/shree-krishna-exports-logo.svg';

export const dynamic = 'force-dynamic';

export async function GET() {
  const upstream = await fetch(LOGO_SOURCE, { cache: 'no-store' });

  if (!upstream.ok) {
    return new Response('Logo unavailable', { status: 502 });
  }

  const logo = await upstream.arrayBuffer();

  return new Response(logo, {
    status: 200,
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
