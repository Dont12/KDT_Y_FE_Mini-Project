'use client';

import { Modal } from '@components/common';
import { debounce } from 'lodash';
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

  const pushCartElement = debounce(async () => {
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
      console.log(error);
    }
  }, 200);

  return (
    <>
      {roomStock === 0 || Number(guestCount) > maxguest ? null : (
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
        <Modal
          title='장바구니에 담겼습니다'
          cancel='계속 쇼핑하기'
          onCancelClick={remainPage}
          confirm='장바구니로 이동'
          onConfirmClick={movePage}
        />
      ) : null}
    </>
  );
};

export default CartButton;
