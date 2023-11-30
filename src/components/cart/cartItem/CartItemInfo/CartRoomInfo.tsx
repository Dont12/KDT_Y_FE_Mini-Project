import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { HiMiniXMark } from 'react-icons/hi2';
import { useRecoilState, useSetRecoilState } from 'recoil';

import type { PreCartRoom } from '@/@types/cart.types';
import cartRequest from '@/api/cartRequest';
import {
  apiCartListState,
  cartCheckboxElementState,
  cartSelectedState,
} from '@/recoil/atoms/cartState';
import { convertFullDate } from '@/utils/dateFormat';

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
      } else {
        return prevSelectedCartList.filter(
          (prevSelectedCartItem) => prevSelectedCartItem !== event.target.name
        );
      }
    });
  };

  const setApiCartList = useSetRecoilState(apiCartListState);
  const deleteCartItem = async () => {
    try {
      const res = await cartRequest.deleteCarts([cartId]);
      if (res.status === 'SUCCESS') {
        setApiCartList((prevApiCartList) =>
          prevApiCartList.filter(
            (prevSelectedCartItem) => String(prevSelectedCartItem.id) !== cartId
          )
        );
        setSelectedCartList((prevSelectedCartList) =>
          prevSelectedCartList.filter(
            (prevSelectedCartItem) => prevSelectedCartItem !== String(id)
          )
        );
        setCartAllCheckboxList((prevCartAllCheckedbox) =>
          prevCartAllCheckedbox.filter(
            (prevSelectedCartItem) => prevSelectedCartItem.name !== String(id)
          )
        );
      } else if (res.status === 'FAIL') {
        // 실패 에러 처리
      } else if (res.status === 'ERROR') {
        // 서버 오류 에러 처리
      }
    } catch (error) {
      console.error(error);
    }
  };

  const isAvailable =
    stock > 1 && new Date(checkInDate).getTime() > new Date().getTime();
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
            href={`/detail/${productId}`}
            className={!isAvailable ? 'text-gray2' : ''}
          >
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
            <span>체크인 {checkInTime}명</span>
            <span className='bar'>|</span>
            <span>체크아웃 {checkOutTime}명</span>
          </div>
          <div>
            기준 {baseGuestCount} / 최대 {maxGuestCount}
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
