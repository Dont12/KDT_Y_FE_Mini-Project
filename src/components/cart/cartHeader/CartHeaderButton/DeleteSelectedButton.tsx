import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { Modal, Toast } from '@/components/common';

import cartRequest from '@/api/cartRequest';
import {
  apiCartListState,
  cartCheckboxElementState,
  cartSelectedState,
} from '@/recoil/atoms/cartState';

import CartHeaderButton from './CartHeaderButton';

const DeleteSelectedButton = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const [selectedCartList, setSelectedCartList] =
    useRecoilState(cartSelectedState);
  const setApiCartList = useSetRecoilState(apiCartListState);
  const setCartAllCheckboxList = useSetRecoilState(cartCheckboxElementState);
  const [isShowToast, setIsShowToast] = useState<string>('');

  const deleteSelectedItem = async () => {
    try {
      const res = await cartRequest.deleteCarts(selectedCartList);

      if (res.status === 'SUCCESS') {
        setApiCartList((prevApiCartList) =>
          prevApiCartList.filter(
            (prevApiCartItem) =>
              !selectedCartList.includes(String(prevApiCartItem.id))
          )
        );
        setSelectedCartList((prevSelectedCartList) =>
          prevSelectedCartList.filter(
            (prevSelectedCartItem) =>
              !selectedCartList.includes(prevSelectedCartItem)
          )
        );
        setCartAllCheckboxList((prevCartAllCheckedbox) =>
          prevCartAllCheckedbox.filter(
            (prevSelectedCartItem) =>
              !selectedCartList.includes(prevSelectedCartItem.name)
          )
        );
        setIsShowModal(false);
      } else if (res.status === 'FAIL') {
        setIsShowToast(res.errorMessage);
        setTimeout(() => {
          setIsShowToast('');
        }, 3000);
      } else if (res.status === 'ERROR') {
        setIsShowToast('서버 오류로 실패했습니다. 다시 시도해주세요.');
        setTimeout(() => {
          setIsShowToast('');
        }, 3000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <CartHeaderButton
        onClick={() => setIsShowModal(true)}
        disabled={selectedCartList.length === 0}
      >
        선택 삭제
      </CartHeaderButton>
      {isShowModal && (
        <Modal
          content={`선택하신 ${
            selectedCartList.length > 1 ? `${selectedCartList.length}개의 ` : ''
          }상품이 삭제됩니다`}
          onCancelClick={() => setIsShowModal(false)}
          onConfirmClick={deleteSelectedItem}
        />
      )}
      {isShowToast && <Toast message={isShowToast} />}
    </>
  );
};

export default DeleteSelectedButton;
