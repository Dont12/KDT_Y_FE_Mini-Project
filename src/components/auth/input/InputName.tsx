import { ErrorMsg, ValidationIcon } from '@components/auth';
import { memo } from 'react';

interface InputType {
  value: string;
  validationPass: boolean;
}

interface NameProps {
  name: InputType;
  handleName: React.ChangeEventHandler<HTMLInputElement>;
}

const InputName = memo(({ name, handleName }: NameProps) => (
  <div className='relative my-5'>
    <label htmlFor='user' className='text-base leading-10'>
      이름*
    </label>

    <input
      type='text'
      name='user'
      id='user'
      value={name.value}
      placeholder='이름을 입력해주세요.'
      onChange={handleName}
      required
      autoComplete='off'
      className='border-lightGray top-10 h-14 w-full rounded-[20px] border-2 p-4 text-base text-black'
    />

    <ValidationIcon input={name} />
    <ErrorMsg target='name' input={name} />
  </div>
));

export default InputName;
