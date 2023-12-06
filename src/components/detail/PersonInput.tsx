'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import Toast from '@/components/common/Toast';

const PersonInput = ({
  roomId,
  checkIn,
  checkOut,
  guest,
}: {
  roomId: string;
  checkIn: string;
  checkOut: string;
  guest: string;
}) => {
  const [person, setPerson] = useState(guest);
  const [toastVisible, setToastVisible] = useState(false);

  const router = useRouter();

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
    router.replace(
      `/detail/${roomId}?checkInDate=${checkIn}&checkOutDate=${checkOut}&guest=${inputValue}
      `,
      { scroll: false }
    );
    showToast();
  };

  return (
    <form className='flex flex-col'>
      <label htmlFor='person'>인원</label>
      <input
        id='person'
        type='number'
        className='border-lightGray h-8 w-[305px] rounded-md border border-solid indent-2 md:w-52'
        min='1'
        max='9'
        value={person}
        onChange={handleInputChange}
      />
      {toastVisible && (
        <Toast message='한번에 예약 할 수 있는 것은 최대 9명 입니다.' />
      )}
    </form>
  );
};

export default PersonInput;
