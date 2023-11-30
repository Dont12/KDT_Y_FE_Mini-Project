import { useRecoilState, useRecoilValue } from 'recoil';

import {
  apiCartListState,
  cartCheckboxElementState,
  cartSelectedState,
} from '@/recoil/atoms/cartState';

import {
  DeleteSelectedButton,
  DeleteUnavailableButton,
} from './CartHeaderButton';

const CartHeader = () => {
  const [selectedCartList, setSelectedCartList] =
    useRecoilState(cartSelectedState);
  const cartAllCheckboxList = useRecoilValue(cartCheckboxElementState);
  const apiCartList = useRecoilValue(apiCartListState);

  const onSelectAllChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCartList([]);
    if (event.target.checked) {
      cartAllCheckboxList.map((cartAllCheckboxItem) => {
        if (cartAllCheckboxItem.disabled === false) {
          cartAllCheckboxItem.checked = true;
        }
      });

      cartAllCheckboxList.map((cartAllCheckboxItem) => {
        if (cartAllCheckboxItem.disabled === false) {
          setSelectedCartList((prevSelectedCartItem) => [
            ...prevSelectedCartItem,
            cartAllCheckboxItem.name,
          ]);
        }
      });
    } else {
      cartAllCheckboxList.map((allSelecteCartItem) => {
        allSelecteCartItem.checked = false;
      });
    }
  };

  const disabledIdList = cartAllCheckboxList
    .filter((cartAllCheckboxItem) => cartAllCheckboxItem.disabled === true)
    .map((filteredCheckboxList) => filteredCheckboxList.name);

  const abledList = cartAllCheckboxList.filter(
    (cartAllCheckboxItem) => cartAllCheckboxItem.disabled === false
  );

  const checkedListLen = selectedCartList.length;
  const abledListLen = abledList.length;
  const isAllSelected = checkedListLen === abledListLen;

  return (
    <div className='flex h-12 items-center justify-between px-5'>
      <div className='flex'>
        <input
          type='checkbox'
          id='selectAll'
          onChange={onSelectAllChange}
          checked={isAllSelected}
          disabled={abledListLen < 1}
        />
        <label htmlFor='selectAll' className='ml-2 text-xs'>
          전체 선택 ({checkedListLen}/{apiCartList.length})
        </label>
      </div>
      <div className='text-blue flex text-xs'>
        {disabledIdList.length > 0 && (
          <DeleteUnavailableButton unavailableIdList={disabledIdList} />
        )}
        <DeleteSelectedButton />
      </div>
    </div>
  );
};

export default CartHeader;
