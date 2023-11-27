'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import Header from '@/components/common/Header';
import HeaderNav from '@/components/common/HeaderNav';

import authRequest from '../api/authRequest';

const Mypage = () => {
  const router = useRouter();

  const checkSignin = async () => {
    try {
      const res = await authRequest.getUser();
      console.log('유저정보', res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkSignin();
  }, []);

  const logout = async () => {
    try {
      await authRequest.logout();
      router.push('/auth/signin');
    } catch (error) {
      console.log(error);
    }
  };

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
              고길동
            </p>
          </div>
          <div className='my-4 '>
            <p className='my-2 font-semibold'>이메일</p>
            <p className='border-lightGray flex h-14 items-center rounded-[10px] border-2 px-4'>
              vbghdl@naver.com
            </p>
          </div>
          <div className='my-4'>
            <p className='my-2 font-semibold'>휴대폰 번호</p>
            <p className='border-lightGray flex h-14 items-center rounded-[10px] border-2 px-4'>
              010-6428-6518
            </p>
          </div>
        </section>

        <button
          type='button'
          // 예약 내역으로 route onClick={}
          className='bg-lightGray hover:bg-mediumGray mb-6 h-12 w-full rounded-[10px]'
        >
          예약 내역 확인하기
        </button>
        <button
          type='button'
          onClick={logout}
          className=' bg-mainButton hover:bg-mainButtonHov mb-6 h-12 w-full  rounded-[10px] text-white'
        >
          로그아웃
        </button>
      </main>
    </>
  );
};

export default Mypage;
