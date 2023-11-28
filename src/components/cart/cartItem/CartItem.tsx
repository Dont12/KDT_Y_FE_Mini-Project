import type { CartProduct } from '@/@types/cart.types';

import CartProductInfo from './CartProductInfo';
import CartRoomInfo from './CartRoomInfo';

interface Props {
  cartProductData: CartProduct;
}

const CartItem = ({
  cartProductData: { productId, productName, address, cartRoomList },
}: Props) => {
  return (
    <li className='mt-3 w-full bg-white p-5 pt-3'>
      <CartProductInfo
        productId={productId}
        productName={productName}
        address={address}
      />
      <ul>
        {cartRoomList.map((cartRoomItem) => (
          <CartRoomInfo
            key={cartRoomItem.id}
            productId={productId}
            cartRoomData={cartRoomItem}
          />
        ))}
      </ul>
    </li>
  );
};

export default CartItem;
