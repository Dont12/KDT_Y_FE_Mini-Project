'use client';

import { ErrorMsg, ValidationIcon } from '@components/auth';
import { memo, useEffect } from 'react';

interface InputType {
  value: string;
  validationPass: boolean;
}

interface PasswordProps {
  password: InputType;
  handlePassword: React.ChangeEventHandler<HTMLInputElement>;
  passwordConfirm?: InputType;
  setPasswordConfirm?: React.Dispatch<React.SetStateAction<InputType>>;
}

const InputPassword = memo(
  ({
    password,
    handlePassword,
    passwordConfirm,
    setPasswordConfirm,
  }: PasswordProps) => {
    useEffect(() => {
      if (setPasswordConfirm && passwordConfirm)
        setPasswordConfirm({
          ...passwordConfirm,
          validationPass: password.value === passwordConfirm.value,
        });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [password]);

    return (
      <div className='relative my-5'>
        <label htmlFor='password' className='text-base leading-10'>
          비밀번호*
        </label>

        <input
          type='password'
          name='password'
          id='password'
          value={password.value}
          placeholder='비밀번호를 입력해주세요.'
          onChange={handlePassword}
          required
          autoComplete='off'
          className='border-lightGray top-10 h-14 w-full rounded-[20px] border-2 p-4 text-base text-black'
        />

        <ValidationIcon input={password} />

        <ErrorMsg target='password' input={password} />
      </div>
    );
  }
);

export default InputPassword;
