'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import Header from '@/components/common/Header';
import HeaderNav from '@/components/common/HeaderNav';
import { HistoryButton, LogoutButton } from '@/components/mypage';

import authRequest from '../../api/authRequest';

interface UserInfo {
  email: string;
  nickname: string;
  phone: string;
}

const Mypage = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const checkSignin = async () => {
    try {
      const res = await authRequest.getUser();
      setUserInfo(res.data);
      console.log('현재 로그인이 되어있습니다.', res);
    } catch (error) {
      console.log('로그인이 필요합니다.', error);
      router.replace('/auth/signin');
    }
  };

  useEffect(() => {
    checkSignin();
  }, []);

  return (
    <>
      <Header>
        <HeaderNav showBack showHome showCart>
          마이페이지
        </HeaderNav>
      </Header>
      <main className='mt-12 w-full bg-white px-12 pb-10'>
        <section className='py-8'>
          <div className='my-4'>
            <p className='my-2 font-semibold'>이름</p>
            <p className='border-lightGray flex h-14 items-center rounded-[10px] border-2 px-4'>
              {userInfo?.nickname}
            </p>
          </div>
          <div className='my-4 '>
            <p className='my-2 font-semibold'>이메일</p>
            <p className='border-lightGray flex h-14 items-center rounded-[10px] border-2 px-4'>
              {userInfo?.email}
            </p>
          </div>
          <div className='my-4'>
            <p className='my-2 font-semibold'>핸드폰 번호</p>
            <p className='border-lightGray flex h-14 items-center rounded-[10px] border-2 px-4'>
              {userInfo?.phone}
            </p>
          </div>
        </section>

        <HistoryButton />
        <LogoutButton />
      </main>
    </>
  );
};

export default Mypage;
