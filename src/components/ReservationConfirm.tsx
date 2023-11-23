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
}: ProductProps) => {
  return (
    <div className='bg-white'>
      <div className='flex'>
        <div className='text-base'>숙소 예약번호: 123891734892748</div>
        <div className='flex'>
          <div className='text-base'>상세보기</div>
          <IoIosArrowForward />
        </div>
      </div>
      <div className='text-xs'>예약완료</div>
      <div className='text-xl'>{productName}</div>
      <div className='text-xl'>{roomName}</div>
      <div className='flex'>
        <Image width={50} height={50} src={imageUrl} alt='room img' />
        <div>
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
