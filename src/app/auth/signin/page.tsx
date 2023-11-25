'use client';

import { useAuthInput, useButtonActivate } from '@hooks/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { InputEmail, InputPassword, SubmitButton } from '@/components/auth';
import Header from '@/components/Common/Header';
import HeaderNav from '@/components/Common/HeaderNav';

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

const SignIn = (): JSX.Element => {
  const [email, handleEmail] = useAuthInput('email');
  const [password, handlePassword] = useAuthInput('password');
  const buttonActivate = useButtonActivate(
    email as InputType,
    password as InputType
  );

  const router = useRouter();

  const handleSubmit = (e: FormTarget) => {
    e.preventDefault();

    /* ------------------------------------ - ----------------------------------- */
    // request to server
    /* ------------------------------------ - ----------------------------------- */

    router.replace('/');
  };

  return (
    <>
      <Header>
        <HeaderNav showBack>로그인</HeaderNav>
      </Header>
      <form className='w-full px-20' onSubmit={handleSubmit}>
        <InputEmail
          email={email as InputType}
          handleEmail={handleEmail as InputHandler}
        />

        <InputPassword
          password={password as InputType}
          handlePassword={handlePassword as InputHandler}
        />

        <SubmitButton content='이메일로 로그인' activate={buttonActivate} />
      </form>
      <Link href='/auth/signup'>
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