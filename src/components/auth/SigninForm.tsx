'use client';

import { useAuthInput, useButtonActivate } from '@hooks/auth';
import { debounce } from 'lodash';
import { useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';
import { useState } from 'react';

import { InputEmail, InputPassword } from '@/components/auth';
import SubmitButton from '@/components/common/SubmitButton';

import { FormTarget, InputType } from '@/@types/auth.types';
import authRequest from '@/api/authRequest';

const SigninForm = () => {
  const [email, handleEmail] = useAuthInput('email');
  const [password, handlePassword] = useAuthInput('password');
  const buttonActivate = useButtonActivate(email, password);
  const [submitError, setSubmitError] = useState(null);

  const router = useRouter();
  const cookies = useCookies();

  const signin = debounce(async (email: InputType, password: InputType) => {
    try {
      const res = await authRequest.signin({
        email: email.value,
        password: password.value,
      });
      console.log(res);

      if (res.status === 'SUCCESS') {
        cookies.set('accessToken', cookies.get('accessToken') as string);
        router.push('/');
        router.refresh();
      } else {
        setSubmitError(res.errorMessage);
      }
    } catch (error) {
      console.log(error);
    }
  }, 200);

  const handleSubmit = (e: FormTarget) => {
    e.preventDefault();
    signin(email, password);
  };

  return (
    <form className='w-full px-20' onSubmit={handleSubmit}>
      <div className='mb-10'>
        <InputEmail email={email} handleEmail={handleEmail} />

        <InputPassword password={password} handlePassword={handlePassword} />
      </div>

      <SubmitButton content='이메일로 로그인' activate={buttonActivate} />

      <p className='text-red flex w-full justify-center pt-4 text-sm font-semibold'>
        {submitError}
      </p>
    </form>
  );
};

export default SigninForm;
