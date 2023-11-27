import React from 'react';

import { SignupForm } from '@/components/auth';
import Header from '@/components/common/Header';
import HeaderNav from '@/components/common/HeaderNav';

import authRequest from '@/app/api/authRequest';

const SignUp = () => {
  const checkSignin = async () => {
    try {
      await authRequest.getUser();
      // router.replace('/');
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   checkSignin();
  // }, []);

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
