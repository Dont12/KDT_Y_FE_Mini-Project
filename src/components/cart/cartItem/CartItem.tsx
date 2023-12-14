import type { PreppedCartProduct } from '@/@types/cart.types';

import { CartProductInfo, CartRoomInfo } from './CartItemInfo';

interface Props {
  cartProductData: PreppedCartProduct;
}

const CartItem = ({
  cartProductData: { productId, productName, address, cartRoomList },
}: Props) => (
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

export default CartItem;
