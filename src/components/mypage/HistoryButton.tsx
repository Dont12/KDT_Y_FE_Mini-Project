import Link from 'next/link';
import React from 'react';

const HistoryButton = () => (
  <Link href='/reservationConfirm'>
    <button
      type='button'
      className='bg-lightGray hover:bg-mediumGray mb-6 h-12 w-full rounded-[10px]'
    >
      예약 내역 확인하기
    </button>
  </Link>
);

export default HistoryButton;
