import { CartItem } from '@/@types/cart.types';

import CartItemHeader from './CartItemHeader';
import CartRoomInfo from './CartItemRoomInfo';

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
