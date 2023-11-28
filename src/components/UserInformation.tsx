'use client';

import React, { useState } from 'react';

const UserInformation = () => {
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPhone(e.target.value);
  };

  return (
    <div className='mt-8 bg-white'>
      <div className=' flex justify-between p-8'>
        <p>이용자 정보</p>
        <label>
          <input type='checkbox' className='mr-2' />
          예약자 정보와 일치합니다.
        </label>
      </div>
      <div className='pb-8 pl-8'>
        <p className='font-bold'>성명</p>
        <input
          type='text'
          value={userName}
          onChange={handleNameChange}
          placeholder='성명을 입력해주세요'
          className='my-2 w-11/12'
        />
        <p className='mt-4 font-bold'>휴대폰 번호</p>
        <input
          type='text'
          value={userPhone}
          onChange={handlePhoneChange}
          placeholder='휴대폰 번호를 입력해주세요'
          className='my-2 w-11/12'
        />
      </div>
    </div>
  );
};

export default UserInformation;
