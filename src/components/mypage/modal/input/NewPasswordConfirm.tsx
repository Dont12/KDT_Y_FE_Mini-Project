import { ErrorMsg, ValidationIcon } from '@components/auth';

import { passwordConfirmProps } from '@/@types/auth.types';

const NewPasswordConfirm = ({
  passwordConfirm,
  handlePasswordConfirm,
}: passwordConfirmProps) => (
  <div className='relative my-6'>
    <label htmlFor='change'>변경하실 비밀번호를 한번 더 입력해주세요</label>
    <input
      name='change'
      type='password'
      value={passwordConfirm.value}
      onChange={handlePasswordConfirm}
      className='bg-background border-lightGray mt-2 h-14 w-full rounded-[10px] border-2 p-4'
    />

    <ValidationIcon input={passwordConfirm} />

    <ErrorMsg target='passwordConfirm' input={passwordConfirm} />
  </div>
);

export default NewPasswordConfirm;
