import React from 'react';

import '../styles/global.css';

export interface AppLayout {
  children: React.ReactNode;
}

const RootLayout = ({ children }: AppLayout) => (
  <html lang='ko' className='bg-lightGray'>
    <body className='container mx-auto max-w-3xl'>{children}</body>
  </html>
);

export default RootLayout;
