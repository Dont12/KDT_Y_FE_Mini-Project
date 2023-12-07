'use client';

import { SignupForm } from '@/components/auth';
import { Header, HeaderNav } from '@/components/common';

const SignUp = () => (
  <>
    <Header>
      <HeaderNav showBack>회원가입</HeaderNav>
    </Header>
    <main className='w-full'>
      <SignupForm />
    </main>
  </>
);

export default SignUp;
