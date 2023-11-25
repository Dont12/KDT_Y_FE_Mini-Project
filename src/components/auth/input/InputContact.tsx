import { ErrorMsg, ValidationIcon } from '@components/auth';
import { memo } from 'react';

interface InputType {
  value: string;
  validationPass: boolean;
}

interface ContactProps {
  contact: InputType;
  handleContact: React.ChangeEventHandler<HTMLInputElement>;
}

const InputContact = memo(({ contact, handleContact }: ContactProps) => (
  <div className='relative mt-3'>
    <label htmlFor='user' className='text-base leading-10'>
      휴대번호*
    </label>

    <input
      type='text'
      name='contact'
      id='contact'
      value={contact.value}
      placeholder='휴대번호를 입력해주세요.'
      onChange={handleContact}
      required
      autoComplete='off'
      className='border-lightGray top-10 h-14 w-full rounded-[20px] border-2 p-4 text-base text-black'
    />

    <ValidationIcon input={contact} />
    <ErrorMsg target='contact' input={contact} />
  </div>
));

export default InputContact;
