import React from 'react';

import '../styles/global.css';

interface AppLayout {
  children: React.ReactNode;
}

const RootLayout = ({ children }: AppLayout) => (
  <html lang='en'>
    <body className='box-border'>{children}</body>
  </html>
);

export default RootLayout;
