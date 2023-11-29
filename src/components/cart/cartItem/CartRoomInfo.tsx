import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { HiMiniXMark } from 'react-icons/hi2';
import { useRecoilState, useSetRecoilState } from 'recoil';

import type { CartRoom } from '@/@types/cart.types';
import cartRequest from '@/api/cartRequest';
import {
  cartCheckboxElementState,
  cartSelectedState,
} from '@/recoil/atoms/cartState';
import { convertFullDate } from '@/utils/dateFormat';

interface Props {
  productId: number;
  cartRoomData: CartRoom;
}

const CartRoomInfo = ({ productId, cartRoomData }: Props) => {
  const {
    id,
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
  } = cartRoomData;
  const cartId = String(id);

  const deleteCartItem = async () => {
    try {
      const res = await cartRequest.deleteCarts();
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  const checkbox = useRef<HTMLInputElement>(document.createElement('input'));
  const setCartAllCheckboxList = useSetRecoilState(cartCheckboxElementState);
  useEffect(() => {
    setCartAllCheckboxList((prevCartCheckboxElement) => [
      ...prevCartCheckboxElement,
      checkbox.current,
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [selectedCartList, setSelectedCartList] =
    useRecoilState(cartSelectedState);
  const onSelectedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCartList((prevSelectedCartList) => {
      if (event.target.checked) {
        return [...prevSelectedCartList, event.target.name];
      } else {
        return prevSelectedCartList.filter(
          (prevSelectedCartItem) => prevSelectedCartItem !== event.target.name
        );
      }
    });
  };

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
          />
          <Link href={`/detail/${productId}`}>
            <h3 className='text-base font-bold'>{roomName}</h3>
          </Link>
        </div>
        <button
          type='button'
          aria-label='장바구니 삭제'
          onClick={deleteCartItem}
        >
          <HiMiniXMark className='text-gray1' />
        </button>
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
        <div className='text-gray1 flex-col text-xs'>
          <div className='text-black'>
            <span>{convertFullDate(checkInDate)}</span>
            <span> ~ </span>
            <span>{convertFullDate(checkOutDate)}</span>
            <span className='bar'>|</span>
            <span>{numberOfNights}박</span>
          </div>
          <div>
            <span>체크인 {checkInTime}명</span>
            <span className='bar'>|</span>
            <span>체크아웃 {checkOutTime}명</span>
          </div>
          <div>
            기준 {baseGuestCount} / 최대 {maxGuestCount}
          </div>
        </div>
      </div>
      <div className='mt-4 text-right text-sm font-bold'>
        {price.toLocaleString('ko-KR')}원
      </div>
    </li>
  );
};

export default CartRoomInfo;
