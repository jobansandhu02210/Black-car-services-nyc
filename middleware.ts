import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

function unauthorized() {
  return new NextResponse('Unauthorized', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Admin", charset="UTF-8"',
    },
  });
}

export function middleware(req: NextRequest) {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    // In production, fail CLOSED: an unset password must never leave the admin
    // dashboard and the card-charging endpoint open to the public. Locally,
    // stay open so you're not locked out during first-time setup.
    if (process.env.NODE_ENV === 'production') return unauthorized();
    return NextResponse.next();
  }

  const auth = req.headers.get('authorization') || '';
  const [scheme, encoded] = auth.split(' ');
  if (scheme !== 'Basic' || !encoded) return unauthorized();

  try {
    const decoded = Buffer.from(encoded, 'base64').toString('utf8');
    const [user, pass] = decoded.split(':');
    const okUser = (process.env.ADMIN_USERNAME ?? 'admin') === user;
    const okPass = pass === password;
    if (!okUser || !okPass) return unauthorized();
    return NextResponse.next();
  } catch {
    return unauthorized();
  }
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*', '/api/booking/:id/charge'],
};

