import React from 'react';
import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/io';

const Divider = () => <div className='border-lightGray border-b  pb-4 '></div>;

const ReservationConfirm = ({
  orderId,
  productName,
  roomName,
  imageUrl,
  checkInDate,
  checkOutDate,
  checkInTime,
  checkOutTime,
  baseGuestCount,
  maxGuestCount,
  isLastItem,
}: ReservationConfirmProps & {
  isLastItem?: boolean;
}) => {
  return (
    <div className='px-8 py-4'>
      <div className='flex justify-between'>
        <div className='text-mediumGray mx-1 pb-4 text-base'>
          숙소 예약번호: {orderId}
        </div>
      </div>
      <div className='bg-mediumGray  mb-2 w-16 rounded p-1 text-center text-xs  text-white'>
        예약완료
      </div>
      <div className='m-1 text-xl font-bold'>{productName}</div>
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
      {isLastItem ? null : <Divider />}
    </div>
  );
};

export default ReservationConfirm;

interface ReservationConfirmProps {
  orderId: number;
  productName: string;
  roomName: string;
  imageUrl: string;
  checkInDate: string;
  checkOutDate: string;
  checkInTime: string;
  checkOutTime: string;
  baseGuestCount: number;
  maxGuestCount: number;
}
