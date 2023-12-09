'use client';

import React, { useEffect, useState } from 'react';

import orderRequest from '@/api/orderRequest';
import { UserData } from '@/app/reservation/[orderToken]/page';

interface Props {
  onUserInfoChange: (newUserInfo: UserData) => void;
}

const UserInformation = ({ onUserInfoChange }: Props) => {
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userInfo, setUserInfo] = useState<UserInfo | null>();

  const fetchUserInfo = async () => {
    try {
      const userInfoData = await orderRequest.getUserInfo();
      const userInfo = await userInfoData.data;
      setUserInfo(userInfo);
      console.log(userInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (userInfo && userInfo.email && userInfo.phone && e.target.checked) {
      setUserName(userInfo.nickname);
      setUserPhone(userInfo.phone);
      onUserInfoChange({
        userName: userInfo.nickname,
        userPhone: userInfo.phone,
      });
    } else {
      setUserName('');
      setUserPhone('');
      onUserInfoChange({ userName: '', userPhone: '' });
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
    onUserInfoChange({ userName: e.target.value, userPhone: e.target.value });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPhone(e.target.value);
    onUserInfoChange({ userName: e.target.value, userPhone: e.target.value });
  };

  return (
    <div className='mt-8 bg-white'>
      <div className=' flex justify-between p-8'>
        <p>이용자 정보</p>
        <label>
          <input
            type='checkbox'
            className='mr-2'
            onChange={handleCheckboxChange}
          />
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
          required
        />
        <p className='mt-4 font-bold'>휴대폰 번호</p>
        <input
          type='text'
          value={userPhone}
          onChange={handlePhoneChange}
          placeholder='휴대폰 번호를 입력해주세요'
          className='my-2 w-11/12'
          required
        />
      </div>
    </div>
  );
};

export default UserInformation;

interface UserInformation {
  userName: string;
  userPhone: string;
}

interface UserInfo {
  email: string;
  nickname: string;
  phone: string;
}
