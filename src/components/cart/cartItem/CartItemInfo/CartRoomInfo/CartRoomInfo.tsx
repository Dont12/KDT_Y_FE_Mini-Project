import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import type { PreCartRoom } from '@/@types/cart.types';
import {
  cartCheckboxElementState,
  cartSelectedState,
} from '@/recoil/atoms/cartState';
import { convertFullDate } from '@/utils/dateFormat';

import DeleteButton from './DeleteButton';

interface Props {
  productId: number;
  cartRoomData: PreCartRoom;
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

  const [selectedCartList, setSelectedCartList] =
    useRecoilState(cartSelectedState);

  const checkbox = useRef<HTMLInputElement>(document.createElement('input'));
  const setCartAllCheckboxList = useSetRecoilState(cartCheckboxElementState);
  useEffect(() => {
    if (!selectedCartList.includes(cartId)) {
      setSelectedCartList((prevSelectedCartItem) => {
        prevSelectedCartItem.includes(cartId);
        return [...prevSelectedCartItem, cartId];
      });
    }
    setCartAllCheckboxList((prevCartCheckboxElement) => [
      ...prevCartCheckboxElement,
      checkbox.current,
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSelectedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCartList((prevSelectedCartList) => {
      if (event.target.checked) {
        return [...prevSelectedCartList, event.target.name];
      }
      return prevSelectedCartList.filter(
        (prevSelectedCartItem) => prevSelectedCartItem !== event.target.name
      );
    });
  };

  const isAvailable =
    stock > 1 &&
    new Date(`${checkInDate}T23:59:59`).getTime() >= new Date().getTime();
  useEffect(() => {
    if (!isAvailable) {
      setSelectedCartList((prevSelectedCartList) =>
        prevSelectedCartList.filter(
          (prevSelectedCartItem) => prevSelectedCartItem !== String(id)
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAvailable]);

  return (
    <li className='border-gray3 mt-4 border-t border-solid pt-5'>
      <div className='flex items-start justify-between'>
        <div className='mb-3 flex items-center gap-2'>
          <input
            type='checkbox'
            ref={checkbox}
            name={cartId}
            onChange={onSelectedChange}
            checked={selectedCartList.includes(cartId)}
            disabled={!isAvailable}
          />
          <Link
            href={`/detail/${productId}?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&guest=${guestCount}`}
            className={!isAvailable ? 'text-gray2' : ''}
          >
            <h3 className='text-base font-bold'>{roomName}</h3>
          </Link>
        </div>
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
