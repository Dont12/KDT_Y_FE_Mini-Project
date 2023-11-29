import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import {
  cartCheckboxElementState,
  cartSelectedState,
} from '@/recoil/atoms/cartState';

const CartHeader = () => {
  const [selectedCartList, setSelectedCartList] =
    useRecoilState(cartSelectedState);
  const cartAllCheckboxList = useRecoilValue(cartCheckboxElementState);

  useEffect(() => {
    setSelectedCartList(
      cartAllCheckboxList.map((allSelecteCartItem) => allSelecteCartItem.name)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartAllCheckboxList]);

  const onSelectAllChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      cartAllCheckboxList.map((allSelecteCartItem) => {
        allSelecteCartItem.checked = true;
      });
      setSelectedCartList(
        cartAllCheckboxList.map((allSelecteCartItem) => allSelecteCartItem.name)
      );
    } else {
      cartAllCheckboxList.map((allSelecteCartItem) => {
        allSelecteCartItem.checked = false;
      });
      setSelectedCartList([]);
    }
  };

  return (
    <div className='flex h-12 items-center justify-between px-5'>
      <div className='flex'>
        <input
          type='checkbox'
          id='selectAll'
          onChange={onSelectAllChange}
          checked={
            selectedCartList.length === cartAllCheckboxList.length
              ? true
              : false
          }
        />
        <label htmlFor='selectAll' className='ml-2 text-xs'>
          전체 선택 ({selectedCartList.length}/{cartAllCheckboxList.length})
        </label>
      </div>
      <div className='text-blue flex text-xs'>
        <button className='hover:bg-skyBlue ml-2 p-2'>예약불가 삭제</button>
        <button className='hover:bg-skyBlue ml-2 p-2'>선택 삭제</button>
      </div>
    </div>
  );
};

export default CartHeader;
