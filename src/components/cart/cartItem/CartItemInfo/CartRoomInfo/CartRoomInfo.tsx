import Image from 'next/image';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import type { PreppedCartRoom } from '@/@types/cart.types';
import { cartSelectedState } from '@/recoil/atoms/cartState';
import { convertFullDate } from '@/utils/dateFormat';

import CartRoomName from './CartRoomName';
import DeleteButton from './DeleteButton';

interface Props {
  productId: number;
  cartRoomData: PreppedCartRoom;
}

const CartRoomInfo = ({ productId, cartRoomData }: Props) => {
  const {
    id,
    roomName,
    imageUrl,
    checkInTime,
    checkOutTime,
    numberOfNights,
    checkInDate,
    checkOutDate,
    baseGuestCount,
    maxGuestCount,
    price,
    stock,
    guestCount,
  } = cartRoomData;
  const cartId = String(id);

  const setSelectedCartList = useSetRecoilState(cartSelectedState);

  const isAvailable =
    stock > 1 &&
    new Date(`${checkInDate}T23:59:59`).getTime() >= new Date().getTime();

  useEffect(() => {
    if (!isAvailable) {
      setSelectedCartList((prevSelectedCartList) =>
        prevSelectedCartList.filter(
          (prevSelectedCartItem) => prevSelectedCartItem !== cartId
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAvailable]);

  return (
    <li className='border-gray3 mt-4 border-t border-solid pt-5'>
      <div className='flex items-start justify-between'>
        <CartRoomName
          cartId={cartId}
          isAvailable={isAvailable}
          productId={productId}
          checkInDate={checkInDate}
          checkOutDate={checkOutDate}
          guestCount={guestCount}
          roomName={roomName}
        />
        <DeleteButton cartId={cartId} />
      </div>
      <div className='flex items-start gap-2'>
        <div className='relative h-20 w-20'>
          <Image
            src={imageUrl}
            fill
            alt={`${roomName} 사진`}
            className='rounded object-cover'
          />
        </div>
        <div
          className={`${
            isAvailable ? 'text-gray1' : 'text-gray2'
          } flex-col text-xs`}
        >
          <div className={isAvailable ? 'text-black' : 'text-gray2'}>
            <span>{convertFullDate(checkInDate)}</span>
            <span> ~ </span>
            <span>{convertFullDate(checkOutDate)}</span>
            <span className='bar'>|</span>
            <span>{numberOfNights}박</span>
          </div>
          <div>
            <span>체크인 {checkInTime}</span>
            <span className='bar'>|</span>
            <span>체크아웃 {checkOutTime}</span>
          </div>
          <div>
            기준 {baseGuestCount}명 / 최대 {maxGuestCount}명
          </div>
        </div>
      </div>
      <div className='mt-4 flex flex-col text-right text-sm font-bold'>
        <span className={!isAvailable ? 'text-gray2 line-through' : ''}>
          {price.toLocaleString('ko-KR')}원
        </span>
        {!isAvailable && <span>예약 마감</span>}
      </div>
    </li>
  );
};

export default CartRoomInfo;
