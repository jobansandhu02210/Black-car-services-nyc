import { NextResponse, type NextRequest } from 'next/server';

/**
 * Verifies a request against the same HTTP Basic Auth credentials used by
 * middleware.ts (ADMIN_USERNAME / ADMIN_PASSWORD). Use this to protect admin
 * API routes so a single admin password guards both pages and APIs.
 *
 * Returns a 401 NextResponse if the request is not authorized, or null if it is.
 *
 * If ADMIN_PASSWORD is not set: in local dev this allows the request through so
 * you're not locked out during setup; in production it fails CLOSED (401) so an
 * unset password can never leave the card-charging endpoint open to the public.
 */
export function assertAdmin(request: NextRequest): NextResponse | null {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    return process.env.NODE_ENV === 'production' ? unauthorized() : null;
  }

  const auth = request.headers.get('authorization') || '';
  const [scheme, encoded] = auth.split(' ');
  if (scheme !== 'Basic' || !encoded) return unauthorized();

  try {
    const decoded = Buffer.from(encoded, 'base64').toString('utf8');
    const idx = decoded.indexOf(':');
    const user = decoded.slice(0, idx);
    const pass = decoded.slice(idx + 1);
    const okUser = (process.env.ADMIN_USERNAME ?? 'admin') === user;
    const okPass = pass === password;
    if (!okUser || !okPass) return unauthorized();
    return null;
  } catch {
    return unauthorized();
  }
}

function unauthorized(): NextResponse {
  return NextResponse.json(
    { error: 'Unauthorized' },
    { status: 401, headers: { 'WWW-Authenticate': 'Basic realm="Admin", charset="UTF-8"' } }
  );
}
