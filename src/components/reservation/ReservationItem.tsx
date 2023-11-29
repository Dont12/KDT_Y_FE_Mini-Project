import React from 'react';

const ReservationItem = ({
  productName,
  roomName,
  checkInDate,
  checkOutDate,
  checkInTime,
  checkOutTime,
  baseGuestCount,
  maxGuestCount,
  price,
}) => {
  return (
    <div className='max-w-3xl bg-white p-8'>
      <p className='font-bold'>숙소</p>
      <div className='flex'>
        <p className='mr-2'>{productName}</p>
        <p className='bg-mediumGray w-120 mx-1 mb-2 rounded px-3 py-0.5 text-center text-xs '>
          예약 취소 안내
        </p>
      </div>
      <p>{roomName}</p>
      <div className='mt-8 flex'>
        <div className='mr-60'>
          <p className='text-mediumGray'>체크인</p>
          <p>{checkInDate}</p>
          <p>{checkInTime}</p>
        </div>
        <div>
          <p className='text-mediumGray'>체크아웃</p>
          <p>{checkOutDate}</p>
          <p>{checkOutTime}</p>
        </div>
      </div>
      <p className='text-mediumGray'>
        기준{baseGuestCount}명 / 최대 {maxGuestCount}명
      </p>
      <div className='flex justify-end'>
        <p className='text-mediumGray'>숙박 / 1박</p>
        <p className='ml-4 font-bold'>
          {new Intl.NumberFormat().format(price)}원
        </p>
      </div>
    </div>
  );
};

export default ReservationItem;
