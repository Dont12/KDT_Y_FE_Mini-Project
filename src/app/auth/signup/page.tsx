'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { SignupForm } from '@/components/auth';
import { Header, HeaderNav } from '@/components/common/header';

import authRequest from '@/api/authRequest';

const SignUp = () => {
  const router = useRouter();

  const checkSignin = async () => {
    try {
      const res = await authRequest.getUser();
      console.log('현재 로그인이 되어있습니다.', res);
      router.replace('/');
    } catch (error) {
      console.log('로그인이 되어있지 않습니다.', error);
    }
  };

  useEffect(() => {
    checkSignin();
  }, []);

  return (
    <>
      <Header>
        <HeaderNav showBack>회원가입</HeaderNav>
      </Header>

      <main className='w-full'>
        <SignupForm />
      </main>
    </>
  );
};

export default SignUp;
