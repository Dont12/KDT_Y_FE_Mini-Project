import { useSetRecoilState } from 'recoil';

import cartRequest from '@/api/cartRequest';
import {
  apiCartListState,
  cartCheckboxElementState,
} from '@/recoil/atoms/cartState';

import CartHeaderButton from './CartHeaderButton';

interface Props {
  unavailableIdList: string[];
}

const DeleteUnavailableButton = ({ unavailableIdList }: Props) => {
  const setApiCartList = useSetRecoilState(apiCartListState);
  const setCartAllCheckboxList = useSetRecoilState(cartCheckboxElementState);

  const deleteUnavailableCart = async () => {
    const res = await cartRequest.deleteCarts(unavailableIdList);
    if (res.status === 'SUCCESS') {
      setApiCartList((prevApiCartList) =>
        prevApiCartList.filter(
          (prevApiCartItem) =>
            !unavailableIdList.includes(String(prevApiCartItem.id))
        )
      );
      setCartAllCheckboxList((prevCartAllCheckboxList) =>
        prevCartAllCheckboxList.filter(
          (prevCartAllCheckboxItem) =>
            !unavailableIdList.includes(prevCartAllCheckboxItem.name)
        )
      );
    } else if (res.status === 'FAIL') {
      // 실패 에러 처리
    } else if (res.status === 'ERROR') {
      // 서버 오류 에러 처리
    }
  };

  return (
    <CartHeaderButton onClick={deleteUnavailableCart}>
      예약불가 삭제
    </CartHeaderButton>
  );
};

export default DeleteUnavailableButton;
