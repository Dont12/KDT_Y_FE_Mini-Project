import React from 'react';

import '../styles/global.css';
interface AppLayout {
  children: React.ReactNode;
}

const RootLayout = ({ children }: AppLayout) => (
  <html lang='ko' className='bg-lightGray'>
    <body className='container'>
      <main className='mx-auto max-w-3xl'>{children}</main>
    </body>
  </html>
);

export default RootLayout;
