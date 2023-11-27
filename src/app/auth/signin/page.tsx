'use client';

import { useAuthInput, useButtonActivate } from '@hooks/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { InputEmail, InputPassword } from '@/components/auth';
import Header from '@/components/common/Header';
import HeaderNav from '@/components/common/HeaderNav';
import SubmitButton from '@/components/common/SubmitButton';

import authRequest from '@/app/api/authRequest';

interface FormElements extends HTMLFormElement {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

interface FormTarget extends React.FormEvent<HTMLFormElement> {
  target: FormElements;
}

interface InputType {
  value: string;
  validationPass: boolean;
}

type InputHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;

const SignIn = () => {
  const [email, handleEmail] = useAuthInput('email');
  const [password, handlePassword] = useAuthInput('password');
  const buttonActivate = useButtonActivate(
    email as InputType,
    password as InputType
  );

  const router = useRouter();

  const signin = async (email: InputType, password: InputType) => {
    try {
      const res = await authRequest.signin({
        email: email.value,
        password: password.value,
      });

      console.log(res);

      if (res.status === 'SUCCESS') {
        router.replace('/');
      }
      if (res.status === 'FAIL') {
        alert('이메일 또는 비밀번호가 틀렸습니다.');
      }
      if (res.status === 'ERROR') {
        alert('SERVER ERROR');
      }
    } catch {
      console.error(Error);
    }
  };

  const checkSignin = async () => {
    await authRequest.getUser();
    router.replace('/');
  };

  useEffect(() => {
    checkSignin();
  }, []);

  const handleSubmit = (e: FormTarget) => {
    e.preventDefault();
    signin(email as InputType, password as InputType);
  };

  return (
    <>
      <Header>
        <HeaderNav showBack>로그인</HeaderNav>
      </Header>
      <form className='w-full px-20' onSubmit={handleSubmit}>
        <div className='mb-6'>
          <InputEmail
            email={email as InputType}
            handleEmail={handleEmail as InputHandler}
          />

          <InputPassword
            password={password as InputType}
            handlePassword={handlePassword as InputHandler}
          />
        </div>

        <SubmitButton content='이메일로 로그인' activate={buttonActivate} />
      </form>
      <Link href='/auth/signup' className='mt-10'>
        <div className='cursor-default'>
          아직 회원이 아니신가요?
          <span className='ml-2 cursor-pointer underline'>
            이메일로 회원가입
          </span>
        </div>
      </Link>
    </>
  );
};

export default SignIn;
