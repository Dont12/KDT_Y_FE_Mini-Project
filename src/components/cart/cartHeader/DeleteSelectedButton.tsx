import { useRecoilState, useSetRecoilState } from 'recoil';

import cartRequest from '@/api/cartRequest';
import {
  apiCartListState,
  cartCheckboxElementState,
  cartSelectedState,
} from '@/recoil/atoms/cartState';

import CartHeaderButton from './CartHeaderButton';

const DeleteSelectedButton = () => {
  const [selectedCartList, setSelectedCartList] =
    useRecoilState(cartSelectedState);
  const setApiCartList = useSetRecoilState(apiCartListState);
  const setCartAllCheckboxList = useSetRecoilState(cartCheckboxElementState);

  const deleteSelectedItem = async () => {
    try {
      const res = await cartRequest.deleteCarts(selectedCartList);

      if (res.status === 'SUCCESS') {
        setApiCartList((prevApiCartList) =>
          prevApiCartList.filter(
            (prevSelectedCartItem) =>
              !selectedCartList.includes(String(prevSelectedCartItem.id))
          )
        );
        // setSelectedCartList((prevSelectedCartList) =>
        //   prevSelectedCartList.filter(
        //     (prevSelectedCartItem) => prevSelectedCartItem !== String(id)
        //   )
        // );
        setCartAllCheckboxList((prevCartAllCheckedbox) =>
          prevCartAllCheckedbox.filter(
            (prevSelectedCartItem) =>
              !selectedCartList.includes(prevSelectedCartItem.name)
          )
        );
      } else if (res.status === 'FAIL') {
        // 실패 에러 처리
      } else if (res.status === 'ERROR') {
        // 서버 오류 에러 처리
      }
    } catch (error) {
      console.error(error);
    }
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
