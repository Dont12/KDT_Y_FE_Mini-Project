import { useRecoilState, useRecoilValue } from 'recoil';

import {
  apiCartListState,
  cartCheckboxElementState,
  cartSelectedState,
} from '@/recoil/atoms/cartState';

import DeleteSelectedButton from './DeleteSelectedButton';
import CartHeaderButton from './CartHeaderButton';

const CartHeader = () => {
  const [selectedCartList, setSelectedCartList] =
    useRecoilState(cartSelectedState);
  const cartAllCheckboxList = useRecoilValue(cartCheckboxElementState);
  const apiCartList = useRecoilValue(apiCartListState);

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
          전체 선택 ({selectedCartList.length}/{apiCartList.length})
        </label>
      </div>
      <div className='text-blue flex text-xs'>
        <CartHeaderButton
          onClick={() => {
            console.log('예약불가 삭제');
          }}
          disabled={false}
        >
          예약불가 삭제
        </CartHeaderButton>
        <DeleteSelectedButton />
      </div>
    </div>
  );
};

export default CartHeader;
