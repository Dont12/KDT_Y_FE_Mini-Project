import { ErrorMsg, ValidationIcon } from '@components/auth';
import { memo } from 'react';

import { ContactProps } from '@/@types/auth.types';

const InputContact = memo(({ contact, handleContact }: ContactProps) => (
  <div className='relative my-5'>
    <label htmlFor='contact' className='text-base leading-10'>
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
