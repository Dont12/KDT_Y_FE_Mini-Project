'use client';

import {
  InputContact,
  InputEmail,
  InputName,
  InputPassword,
  InputPasswordConfirm,
} from '@components/auth';
import { useAuthInput, useButtonActivate } from '@hooks/auth';
import { debounce } from 'lodash';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

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

type SetInput = React.Dispatch<React.SetStateAction<InputType>>;

const SignUp = () => {
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
    passwordConfirm as InputType,
    contact as InputType
  );

  const router = useRouter();

  const signup = debounce(
    async (
      email: InputType,
      password: InputType,
      nickname: InputType,
      phone: InputType
    ) => {
      try {
        const res = await authRequest.createUser({
          email: email.value,
          password: password.value,
          nickname: nickname.value,
          phone: phone.value,
        });
        const data = await res.json();
        console.log(data);

        if (data.status === 'SUCCESS') {
          router.replace('/auth/signin');
        }
        if (data.status === 'FAIL') {
          alert(data.errorMessage);
        }
      } catch {
        console.error(Error);
      }
    },
    200
  );

  const checkSignin = async () => {
    try {
      await authRequest.getUser();
      // router.replace('/');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkSignin();
  }, []);

  const handleSubmit = async (e: FormTarget) => {
    e.preventDefault();
    await signup(
      email as InputType,
      password as InputType,
      name as InputType,
      contact as InputType
    );
  };

  return (
    <>
      <Header>
        <HeaderNav showBack>회원가입</HeaderNav>
      </Header>
      <form className='w-full px-20 pb-6' onSubmit={handleSubmit}>
        <div className='mb-10'>
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
        </div>

        <SubmitButton content='회원가입' activate={buttonActivate} />
      </form>
    </>
  );
};

export default SignUp;
