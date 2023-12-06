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
    return NextResponse.redirect(url);
  } catch (error) {
    console.log('err: ', error);
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
    return NextResponse.next();
  } catch (error) {
    console.log('err: ', error);
  }
}

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/auth/signin')) {
    console.log('call middleware - /auth/signin');

    return alreadyAuth(request);
  }
  if (request.nextUrl.pathname.startsWith('/auth/signup')) {
    console.log('call middleware - /auth/signup');

    return alreadyAuth(request);
  }
  if (request.nextUrl.pathname.startsWith('/mypage')) {
    console.log('call middleware - /mypage');

    return needAuth(request);
  }
}

export const config = {
  matcher: ['/auth/signin', '/auth/signup', '/', '/mypage'],
};
