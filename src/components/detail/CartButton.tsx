'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import { IsCartPropsValid, PushCartResponse } from '@/@types/cart.types';
import cartRequest from '@/api/cartRequest';

const CartButton = ({
  roomId,
  checkInDate,
  checkOutDate,
  roomStock,
  maxguest,
  guestCount,
}: IsCartPropsValid) => {
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const remainPage = () => {
    setModalOpen(false);
  };

  const movePage = () => {
    setModalOpen(false);
    router.push(`/cart`);
  };

  const pushCartElement = async () => {
    try {
      const response: PushCartResponse = await cartRequest.pushCart({
        roomId,
        checkInDate,
        checkOutDate,
        guestCount,
      });
      if (response.status === 'SUCCESS') {
        setModalOpen(true);
      }
    } catch (error) {
      router.push(`/auth/signin`);
    }
  };

  return (
    <>
      {roomStock == 0 || Number(guestCount) > maxguest ? null : (
        <button
          className='border-mediumGray mr-3 flex h-12 w-12 items-center justify-center rounded border border-solid p-1'
          onClick={pushCartElement}
        >
          <Image
            src='/svg/cartIcon.svg'
            alt='cartIcon'
            className='h-6 w-6'
            width={30}
            height={30}
          />
        </button>
      )}
      {modalOpen ? (
        <div className='relative'>
          <div
            className='fixed left-0 top-0 z-50 h-screen w-screen bg-[rgba(0,0,0,0.5)]'
            onClick={() => {
              setModalOpen(false);
            }}
          />
          <div className='fixed left-1/2 top-1/2 z-50 flex h-[150px] w-[400px] translate-x-[-50%] translate-y-[-50%] flex-col justify-around rounded-lg bg-white p-4 shadow-[0px_0px_10px_rgba(0,0,0,0.5)]'>
            <div className='w-full text-center font-bold'>
              장바구니에 담겼습니다
            </div>
            <div className='flex justify-around'>
              <button
                className='grow-1 text-gray1 w-full font-bold'
                onClick={remainPage}
              >
                계속 둘러보기
              </button>
              <button className='grow-1 w-full font-bold' onClick={movePage}>
                장바구니로 이동하기
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CartButton;
