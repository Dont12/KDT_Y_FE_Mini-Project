'use client';
import React, { useState } from 'react';

import { Toast } from '@/components/common/Toast';

const PersonInput = () => {
  const [person, setPerson] = useState('1');
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = () => {
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value.replace(/[^0-9]/g, '');
    inputValue = Math.min(Math.max(parseInt(inputValue), 1), 9).toString();
    setPerson(inputValue);
    showToast();
  };

  return (
    <div className='flex flex-col'>
      <label htmlFor='person'>인원</label>
      <input
        id='person'
        type='number'
        className='border-lightGray h-8 w-52 rounded-md border border-solid indent-2'
        min='1'
        max='9'
        value={person}
        onChange={handleInputChange}
      />
      {toastVisible && (
        <Toast message='한번에 예약 할 수 있는 것은 최대 9명 입니다.' />
      )}
    </div>
  );
};

export default PersonInput;
