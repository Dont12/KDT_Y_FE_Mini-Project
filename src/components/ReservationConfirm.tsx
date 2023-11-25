import React from 'react';
import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/io';

const ReservationConfirm = ({
  productName,
  roomName,
  imageUrl,
  visitType,
  checkInDate,
  checkOutDate,
  checkInTime,
  checkOutTime,
  baseGuestCount,
  maxGuestCount,
  hideDetailLink,
}: ProductProps & { hideDetailLink?: boolean }) => {
  return (
    <div className='border-mediumGray m-8  items-center justify-center rounded-md border border-solid px-5 py-8 '>
      <div className='flex justify-between'>
        <div className='text-mediumGray m-2 text-base'>
          숙소 예약번호: 123891734892748
        </div>
        {!hideDetailLink && ( //hideDetailLink가 false인 경우에만 렌더링
          <button className='m-1 flex items-center justify-center'>
            <p className='mr-2 text-xl'>상세보기</p>
            <IoIosArrowForward />
          </button>
        )}
      </div>
      <div className='bg-mediumGray mx-1 mb-2 w-16 rounded p-1 text-center text-xs  text-white'>
        예약완료
      </div>
      <div className='m-1 text-xl'>{productName}</div>
      <div className='m-1 text-xl'>{roomName}</div>
      <div className='flex items-center'>
        <Image
          className='p-1'
          width={100}
          height={50}
          src={imageUrl}
          alt='room img'
        />
        <div className='m-4'>
          <div className='text-base'>{visitType}방문</div>
          <div className='text-base'>
            {checkInDate} ~ {checkOutDate}
          </div>
          <div className='text-base'>
            체크인 {checkInTime} 체크아웃 {checkOutTime}
          </div>
          <div className='text-base'>
            기준 {baseGuestCount}명 / 최대 {maxGuestCount}명
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationConfirm;

interface ProductProps {
  productName: string;
  roomName: string;
  imageUrl: string;
  visitType: string;
  checkInTime: string;
  checkOutTime: string;
  baseGuestCount: number;
  maxGuestCount: number;
  checkInDate: string;
  checkOutDate: string;
}
