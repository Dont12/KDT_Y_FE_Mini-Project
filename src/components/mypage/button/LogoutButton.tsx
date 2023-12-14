'use client';

import { SubmitButton } from '@components/common';
import { debounce } from 'lodash';
import { useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';

import authRequest from '@/api/authRequest';

const LogoutButton = () => {
  const router = useRouter();
  const cookies = useCookies();

  const logout = debounce(async () => {
    try {
      const res = await authRequest.logout();
      console.log(res);
      cookies.remove('accessToken');
      router.push('/auth/signin');
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }, 200);

  return (
    <SubmitButton
      type='button'
      content='로그아웃'
      activate={true}
      className='my-2'
      onClick={logout}
    />
  );
};

export default LogoutButton;
