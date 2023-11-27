import { ErrorMsg, ValidationIcon } from '@components/auth';
import { memo } from 'react';

interface InputType {
  value: string;
  validationPass: boolean;
}

interface EmailProps {
  email: InputType;
  handleEmail: React.ChangeEventHandler<HTMLInputElement>;
}

const InputEmail = memo(({ email, handleEmail }: EmailProps) => (
  <div className='relative mt-3'>
    <label htmlFor='email' className='text-base leading-10'>
      이메일*
    </label>

    <input
      type='text'
      name='email'
      id='email'
      value={email.value}
      placeholder='이메일을 입력해주세요.'
      onChange={handleEmail}
      required
      autoComplete='off'
      className='border-lightGray top-10 h-14 w-full rounded-[20px] border-2 p-4 text-base text-black'
    />

    <ValidationIcon input={email} />
    <ErrorMsg target='email' input={email} />
  </div>
));

export default InputEmail;
