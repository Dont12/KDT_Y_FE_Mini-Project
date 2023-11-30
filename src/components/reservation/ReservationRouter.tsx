'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const ReservationRouter = ({ orderId }: any) => {
  const router = useRouter();

  const handleDetailClick = () => {
    router.push(`/reservationConfirm/${orderId}`);
  };

  return (
    <button
      className='m-4 flex items-center justify-center'
      onClick={handleDetailClick}
    >
      상세보기 <IoIosArrowForward />
    </button>
  );
};

export default ReservationRouter;
