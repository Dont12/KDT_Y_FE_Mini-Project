import { CartItem } from '@/@types/cart.types';

import CartItemHeader from './CartItemHeader';
import CartRoomInfo from './CartRoomInfo';

interface Props {
  data: CartItem;
}

const CartItem = ({ data }: Props): JSX.Element => {
  const { productId, productName, address } = data.product;
  const {
    roomName,
    imageUrl,
    checkInTime,
    checkOutTime,
    baseGuestCount,
    maxGuestCount,
    price,
    stock,
  } = data.product;
  const { checkInDate, checkOutDate, numberOfNights } = data;
  // TODO|서지수 재고없으면 예약 마감으로 처리
  // TODO|서지수 체크인 날짜 지나면 예약 마감으로 처리
  // TODO|서지수 데이터 이렇게 나눠서 주는게 좋은지 확인
  return (
    <li className='mt-3 w-full bg-white p-5 pt-3'>
      <CartItemHeader
        productId={productId}
        productName={productName}
        address={address}
      />
      <CartRoomInfo
        productId={productId}
        roomName={roomName}
        imageUrl={imageUrl}
        checkInTime={checkInTime}
        checkOutTime={checkOutTime}
        baseGuestCount={baseGuestCount}
        maxGuestCount={maxGuestCount}
        price={price}
        checkInDate={checkInDate}
        checkOutDate={checkOutDate}
        numberOfNights={numberOfNights}
      />
    </li>
  );
};

export default CartItem;
