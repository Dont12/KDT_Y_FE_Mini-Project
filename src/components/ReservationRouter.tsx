'use client';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { useRouter } from 'next/navigation';

const ReservationRouter = ({ orderId }) => {
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
