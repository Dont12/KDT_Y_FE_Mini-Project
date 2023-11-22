import React from 'react';

import '../styles/global.css';

interface AppLayout {
  children: React.ReactNode;
}

const RootLayout = ({ children }: AppLayout) => (
<<<<<<< HEAD
  <html lang='en'>
=======
  <html lang='ko'>
>>>>>>> 2d210687261cfe0f724bff005ac77430cadacc0d
    <body className='box-border'>{children}</body>
  </html>
);

export default RootLayout;
