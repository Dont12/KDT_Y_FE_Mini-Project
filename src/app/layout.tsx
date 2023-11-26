import React from 'react';

import '../styles/global.css';

import Footer from '@/components/common/footer/Footer';

interface AppLayout {
  children: React.ReactNode;
}

// TODO|서지수: 푸터 필요없는 페이지에서는 안보이게 하기

const RootLayout = ({ children }: AppLayout) => (
  <html lang='ko' className='bg-background'>
    <body className='container mx-auto mb-24 max-w-3xl'>
      {children}
      <Footer />
    </body>
  </html>
);

export default RootLayout;
