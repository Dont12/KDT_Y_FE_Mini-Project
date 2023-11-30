'use client';

import { debounce } from 'lodash';
import { useRouter } from 'next/navigation';
import React from 'react';

import {
  OrderButtonProps,
  PushOrderElementResponse,
} from '@/@types/order.types';
import orderRequest from '@/api/orderRequest';

const ReservationButton = ({
  productId,
  roomId,
  checkInDate,
  checkInTime,
  checkOutDate,
  checkOutTime,
  price,
  guestCount,
  maxguest,
  stock,
}: OrderButtonProps) => {
  const router = useRouter();

  const pushReservationElement = debounce(async () => {
    try {
      const response: PushOrderElementResponse =
        await orderRequest.pushOrderElement({
          productId,
          roomId,
          checkInDate,
          checkInTime,
          checkOutDate,
          checkOutTime,
          guestCount,
          price,
        });
      if (response.status === 'SUCCESS') {
        router.push(`/reservation/${response.data.orderToken}`);
      } else {
        router.push(`/auth/signin`);
      }
    } catch (error) {
      router.push(`/auth/signin`);
      console.log(error);
    }
  }, 200);

  return (
    <input
      type='button'
      className={
        stock === 0 || maxguest < Number(guestCount)
          ? 'grow-1 bg-gray1  h-12 w-full rounded text-[18px] font-bold text-white'
          : 'grow-1 bg-mainButton hover:bg-mainButtonHov h-12 w-full rounded text-[18px] font-bold text-white'
      }
      value={
        stock === 0
          ? '재고 없음'
          : maxguest < Number(guestCount)
          ? '최대인원 초과'
          : '예약 하기'
      }
      onClick={pushReservationElement}
      disabled={stock === 0 || maxguest < Number(guestCount)}
    />
  );
};

export default ReservationButton;
