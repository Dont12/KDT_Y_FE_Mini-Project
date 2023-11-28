'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

import orderRequest from '@/app/api/orderRequest';

const ReservationButton = ({
  productId,
  roomId,
  checkInDate,
  checkInTime,
  checkOutDate,
  checkOutTime,
  price,
  guestCount,
  stock,
}: any) => {
  const router = useRouter();

  const pushReservationElement = async () => {
    const response = await orderRequest.pushOrderElement({
      productId: productId,
      roomId: roomId,
      checkInDate: checkInDate,
      checkInTime: checkInTime,
      checkOutDate: checkOutDate,
      checkOutTime: checkOutTime,
      guestCount: guestCount,
      price: price,
    });
    if (response.status === 'SUCCESS') {
      router.push(`/reservation/${response.data.orderToken}`);
    } else {
      router.push(`/auth/signin`);
    }
  };

  return (
    <input
      type='button'
      className='grow-1 bg-mainButton hover:bg-mainButtonHov w-full rounded text-[18px] font-bold text-white'
      value={stock == '0' ? '재고 없음' : '예약 하기'}
      onClick={pushReservationElement}
      disabled={stock == '0'}
    />
  );
};

export default ReservationButton;
