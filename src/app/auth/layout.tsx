import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Footer } from '@/components/common';

interface AppLayout {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AppLayout) => (
  <>
    <div className='flex min-h-screen flex-col items-center justify-center bg-white'>
      <Link href='/'>
        <Image
          width={130}
          height={40}
          alt='stayinn'
          src='/svg/logo.svg'
          className='mb-8 mt-24'
        />
      </Link>
      {children}
    </div>
    <Footer />
  </>
);

export default AuthLayout;
