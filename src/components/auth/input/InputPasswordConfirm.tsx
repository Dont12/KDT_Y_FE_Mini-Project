import { ErrorMsg, ValidationIcon } from '@components/auth';
import { memo } from 'react';

interface InputType {
  value: string;
  validationPass: boolean;
}

interface passwordConfirmProps {
  passwordConfirm: InputType;
  handlePasswordConfirm: React.ChangeEventHandler<HTMLInputElement>;
}

const InputPasswordConfirm = memo(
  ({ passwordConfirm, handlePasswordConfirm }: passwordConfirmProps) => (
    <div className='relative mt-3'>
      <label htmlFor='password-confirm' className='text-base leading-10'>
        비밀번호 확인*
      </label>

      <input
        type='password'
        name='password- confirm'
        id='password-confirm'
        value={passwordConfirm.value}
        placeholder='비밀번호를 한번 더 입력해주세요.'
        onChange={handlePasswordConfirm}
        required
        autoComplete='off'
        className='border-lightGray top-10 h-14 w-full rounded-[20px] border-2 p-4 text-base text-black'
      />

      <ValidationIcon input={passwordConfirm} />
      <ErrorMsg target='passwordConfirm' input={passwordConfirm} />
    </div>
  )
);

export default InputPasswordConfirm;
