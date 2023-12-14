import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import {
  cartCheckboxElementState,
  cartSelectedState,
} from '@/recoil/atoms/cartState';

interface Props {
  cartId: string;
  isAvailable: boolean;
  productId: number;
  checkInDate: string;
  checkOutDate: string;
  guestCount: number;
  roomName: string;
}

const CartRoomName = ({
  cartId,
  isAvailable,
  productId,
  checkInDate,
  checkOutDate,
  guestCount,
  roomName,
}: Props) => {
  const checkboxRef = useRef<HTMLInputElement>(document.createElement('input'));
  const setCartAllCheckboxList = useSetRecoilState(cartCheckboxElementState);
  const [selectedCartList, setSelectedCartList] =
    useRecoilState(cartSelectedState);

  useEffect(() => {
    if (!selectedCartList.includes(cartId)) {
      setSelectedCartList((prevSelectedCartItem) => [
        ...prevSelectedCartItem,
        cartId,
      ]);
    }
    setCartAllCheckboxList((prevCartCheckboxElement) => [
      ...prevCartCheckboxElement,
      checkboxRef.current,
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

  return (
    <div className='mb-3 flex items-center gap-2'>
      <input
        type='checkbox'
        ref={checkboxRef}
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
  );
};

export default CartRoomName;
