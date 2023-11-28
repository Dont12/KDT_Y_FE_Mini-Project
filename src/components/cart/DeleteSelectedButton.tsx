import { useRecoilValue } from 'recoil';

import { cartSelectedState } from '@/recoil/atoms/cartState';

import CartHeaderButton from './CartHeaderButton';

const DeleteSelectedButton = () => {
  const selectedCartList = useRecoilValue(cartSelectedState);

  const deleteSelectedItem = async () => {
    console.log('선택 삭제');
  };

  return (
    <CartHeaderButton
      onClick={deleteSelectedItem}
      disabled={selectedCartList.length === 0}
    >
      선택 삭제
    </CartHeaderButton>
  );
};

export default DeleteSelectedButton;
