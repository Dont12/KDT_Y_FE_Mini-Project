import Link from 'next/link';
import React from 'react';

const HistoryButton = () => (
  <Link href='/reservationConfirm'>
    <button
      type='button'
      className='bg-lightGray hover:bg-mediumGray my-2 w-full rounded-lg px-4 py-3 text-base'
    >
      예약 내역 확인하기
    </button>
  </Link>
);

export default HistoryButton;
