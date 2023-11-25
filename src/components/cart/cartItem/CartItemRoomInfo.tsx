'use client';

import Image from 'next/image';
import Link from 'next/link';
import { HiMiniXMark } from 'react-icons/hi2';

import { convertFullDate } from '@/utils/dateFormat';

interface Props {
  productId: number;
  roomName: string;
  imageUrl: string;
  checkInDate: string;
  checkOutDate: string;
  numberOfNights: number;
  checkInTime: string;
  checkOutTime: string;
  baseGuestCount: number;
  maxGuestCount: number;
  price: number;
}

const CartItemRoomInfo = ({
  productId,
  roomName,
  imageUrl,
  checkInDate,
  checkOutDate,
  numberOfNights,
  checkInTime,
  checkOutTime,
  baseGuestCount,
  maxGuestCount,
  price,
}: Props): JSX.Element => {
  const deleteCartItem = () => {
    // TODO|서지수 장바구니 삭제 기능 구현
    console.log('장바구니 삭제 기능 구현');
  };
  return (
    <div className='border-gray3 mt-4 border-t border-solid pt-5'>
      <div className='flex items-start justify-between'>
        <Link href={`/detail/${productId}`}>
          <h3 className='mb-3 text-base font-bold'>{roomName}</h3>
        </Link>
        <button
          type='button'
          aria-label='장바구니 삭제'
          onClick={deleteCartItem}
        >
          <HiMiniXMark className='text-gray1' />
        </button>
      </div>
      <div className='flex items-start gap-2'>
        <input type='checkbox' />
        <Image
          src={imageUrl}
          width={80}
          height={80}
          alt={`${roomName} 이미지`}
          className='rounded'
        />
        <div className='flex-col text-xs font-light'>
          <div>
            <span>{convertFullDate(checkInDate)}</span>
            <span> ~ </span>
            <span>{convertFullDate(checkOutDate)}</span>
            <span className='bar'>|</span>
            <span>{numberOfNights}박</span>
          </div>
          <div className='text-gray1'>
            <span>체크인 {checkInTime}명</span>
            <span className='bar'>|</span>
            <span>체크아웃 {checkOutTime}명</span>
          </div>
          <div className='text-gray1'>
            기준 {baseGuestCount} / 최대 {maxGuestCount}
          </div>
        </div>
      </div>
      <div className='mt-4 text-right text-sm font-bold'>
        {price.toLocaleString('ko-KR')}원
      </div>
    </div>
  );
};

export default CartItemRoomInfo;
