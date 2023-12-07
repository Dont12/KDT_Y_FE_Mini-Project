'use client';

import { debounce } from 'lodash';
import { useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';
import React from 'react';

import authRequest from '@/api/authRequest';

const LogoutButton = () => {
  const router = useRouter();
  const cookies = useCookies();

  const logout = debounce(async () => {
    try {
      const res = await authRequest.logout();
      console.log(res);
      cookies.remove('accessToken');
      // router.push('/auth/signin');
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }, 200);

  return (
    <button
      type='button'
      onClick={logout}
      className=' bg-mainButton hover:bg-mainButtonHov mb-6 h-12 w-full  rounded-[10px] text-white'
    >
      로그아웃
    </button>
  );
};

export default LogoutButton;
