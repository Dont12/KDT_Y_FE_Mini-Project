import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getCookies } from 'next-client-cookies/server';

import authRequest from './api/authRequest';

export async function needAuth(req: NextRequest) {
  const cookies = getCookies();
  const url = req.nextUrl.clone();
  url.pathname = '/auth/signin';

  try {
    const response = await authRequest.getUser(cookies?.get('accessToken'));

    if (response.status === 'SUCCESS') {
      return NextResponse.next();
    }
  } catch (error) {
    console.log('err: ', error);
    return NextResponse.redirect(url);
  }
}

export async function alreadyAuth(req: NextRequest) {
  const cookies = getCookies();
  const url = req.nextUrl.clone();
  url.pathname = '/';

  try {
    const response = await authRequest.getUser(cookies?.get('accessToken'));

    if (response.status === 'SUCCESS') {
      return NextResponse.redirect(url);
    }
  } catch (error) {
    console.log('err: ', error);
    return NextResponse.next();
  }
}

export function middleware(request: NextRequest) {
  // <user signed> redirect to '/' when access auth pages
  if (request.nextUrl.pathname.startsWith('/auth/signin')) {
    console.log('call middleware - /auth/signin');

    return alreadyAuth(request);
  }
  if (request.nextUrl.pathname.startsWith('/auth/signup')) {
    console.log('call middleware - /auth/signup');

    return alreadyAuth(request);
  }

  // <user not signed> redirect to '/auth/signin' when access pages required authentication
  if (request.nextUrl.pathname.startsWith('/mypage')) {
    console.log('call middleware - /mypage');

    return needAuth(request);
  }

  if (request.nextUrl.pathname.startsWith('/cart')) {
    console.log('call middleware - /cart');

    return needAuth(request);
  }

  if (request.nextUrl.pathname.startsWith('/reservation')) {
    console.log('call middleware - /reservation');

    return needAuth(request);
  }

  if (request.nextUrl.pathname.startsWith('/reservationConfirm')) {
    console.log('call middleware - /reservationConfirm');

    return needAuth(request);
  }
}

export const config = {
  matcher: [
    '/',
    '/mypage',
    '/cart',
    '/auth/:path*',
    '/reservation/:path*',
    '/reservationConfirm/:path*',
  ],
};
