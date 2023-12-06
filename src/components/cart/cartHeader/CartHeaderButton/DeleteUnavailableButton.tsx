import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { Modal } from '@/components/common';

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
  const [isShowModal, setIsShowModal] = useState(false);

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

      setIsShowModal(false);
    } else if (res.status === 'FAIL') {
      // 실패 에러 처리
    } else if (res.status === 'ERROR') {
      // 서버 오류 에러 처리
    }
  };

  return (
    <>
      <CartHeaderButton onClick={() => setIsShowModal(true)}>
        예약불가 삭제
      </CartHeaderButton>
      {isShowModal && (
        <Modal
          title='예약불가 상품을 삭제할까요?'
          content='장바구니에 담은 상품 중에 예약할 수 없는 상품을 삭제합니다.'
          onCancelClick={() => setIsShowModal(false)}
          onConfirmClick={deleteUnavailableCart}
        />
      )}
    </>
  );
};

export default DeleteUnavailableButton;
