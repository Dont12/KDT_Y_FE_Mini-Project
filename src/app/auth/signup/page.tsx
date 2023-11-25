'use client';

import {
  InputContact,
  InputEmail,
  InputName,
  InputPassword,
  InputPasswordConfirm,
  SubmitButton,
} from '@components/auth';
import { useAuthInput, useButtonActivate } from '@hooks/auth';
import { useRouter } from 'next/navigation';
import React from 'react';

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

type SetInput = React.Dispatch<React.SetStateAction<InputType>>;

const SignUp = (): JSX.Element => {
  const [name, handleName] = useAuthInput('name');
  const [email, handleEmail] = useAuthInput('email');
  const [password, handlePassword] = useAuthInput('password');
  const [passwordConfirm, handlePasswordConfirm, setPasswordConfirm] =
    useAuthInput('passwordConfirm', password as InputType);
  const [contact, handleContact] = useAuthInput('contact');
  const buttonActivate = useButtonActivate(
    name as InputType,
    email as InputType,
    password as InputType,
    passwordConfirm as InputType
  );

  const router = useRouter();

  const handleSubmit = (e: FormTarget) => {
    e.preventDefault();

    /* ------------------------------------ - ----------------------------------- */
    // request to server
    /* ------------------------------------ - ----------------------------------- */

    router.replace('/auth/signin');
  };

  return (
    <>
      <Header>
        <HeaderNav showBack>회원가입</HeaderNav>
      </Header>
      <form className='w-full px-20' onSubmit={handleSubmit}>
        <InputName
          name={name as InputType}
          handleName={handleName as InputHandler}
        />

        <InputEmail
          email={email as InputType}
          handleEmail={handleEmail as InputHandler}
        />

        <InputPassword
          password={password as InputType}
          handlePassword={handlePassword as InputHandler}
          passwordConfirm={passwordConfirm as InputType}
          setPasswordConfirm={setPasswordConfirm as SetInput}
        />

        <InputPasswordConfirm
          passwordConfirm={passwordConfirm as InputType}
          handlePasswordConfirm={handlePasswordConfirm as InputHandler}
        />

        <InputContact
          contact={contact as InputType}
          handleContact={handleContact as InputHandler}
        />

        <SubmitButton content='회원가입' activate={buttonActivate} />
      </form>
    </>
  );
};

export default SignUp;
