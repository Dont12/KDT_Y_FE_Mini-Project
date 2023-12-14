import { ErrorMsg, ValidationIcon } from '@components/auth';
import { useEffect } from 'react';

import { PasswordProps } from '@/@types/auth.types';

const NewPassword = ({
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
    <div className='relative my-6'>
      <label htmlFor='change'>변경하실 비밀번호를 입력해주세요</label>
      <input
        name='change'
        type='password'
        value={password.value}
        onChange={handlePassword}
        className='bg-background border-lightGray mt-2 h-14 w-full rounded-[10px] border-2 p-4'
      />

      <ValidationIcon input={password} />

      <ErrorMsg target='password' input={password} />
    </div>
  );
};

export default NewPassword;
