import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { apiCartListState, cartSelectedState } from '@/recoil/atoms/cartState';

const CartTotalPrice = () => {
  const apiCartList = useRecoilValue(apiCartListState);
  const selectedCartList = useRecoilValue(cartSelectedState);

  const [totalPrice, setTotalPrice] = useState<number>(0);
  useEffect(() => {
    const filteredList = apiCartList.filter((apiCartItem) =>
      selectedCartList.includes(String(apiCartItem.id))
    );

    let selectPrice = 0;
    filteredList.map((filteredItem) => {
      selectPrice += filteredItem.product.price;
    });
    setTotalPrice(selectPrice);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCartList]);

  return (
    <div className='text-xl font-bold'>
      {totalPrice.toLocaleString('ko-KR')}원
    </div>
  );
};

export default CartTotalPrice;
