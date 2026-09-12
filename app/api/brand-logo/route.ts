const LOGO_SOURCE =
  'https://raw.githubusercontent.com/savrdhtechnology-cloud/SHREE-KRISHNA-EXPORTS/main/public/images/shree-krishna-exports-logo.svg';

export async function GET() {
  return Response.redirect(LOGO_SOURCE, 307);
}
