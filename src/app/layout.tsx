import type { Metadata } from 'next';
import { CookiesProvider } from 'next-client-cookies/server';
import React from 'react';

import '../styles/global.css';

export interface AppLayout {
  children: React.ReactNode;
}

// 메타데이터베이스 배포 후 url 추가하기

export const metadata: Metadata = {
  metadataBase: new URL('https://www.stayinn.site/'),
  title: 'STAYINN | 스테이인',
  description:
    '국내 호텔, 펜션, 모텔, 게스트하우스, 콘도, 유스호스텔, 민박, 홈스테이, 서비스드레지던스, 한옥 등 다양한 숙박 시설 및 공간 대여까지 모두가 최저가! 지금 바로 스테이인에서 예약하세요.',
  icons: {
    icon: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
  alternates: {
    canonical: '/',
  },
};

const RootLayout = ({ children }: AppLayout) => (
  <CookiesProvider>
    <html lang='ko' className='bg-background'>
      <body className='container mx-auto mb-24 max-w-3xl'>{children}</body>
    </html>
  </CookiesProvider>
);

export default RootLayout;
