import { useState } from 'react';
import { HiMiniXMark } from 'react-icons/hi2';
import { useSetRecoilState } from 'recoil';

import { Modal, Toast } from '@/components/common';

import cartRequest from '@/api/cartRequest';
import {
  apiCartListState,
  cartCheckboxElementState,
  cartSelectedState,
} from '@/recoil/atoms/cartState';

interface Props {
  cartId: string;
}

const DeleteButton = ({ cartId }: Props) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowToast, setIsShowToast] = useState<string>('');

  const setSelectedCartList = useSetRecoilState(cartSelectedState);
  const setApiCartList = useSetRecoilState(apiCartListState);
  const setCartAllCheckboxList = useSetRecoilState(cartCheckboxElementState);

  const deleteCartItem = async () => {
    try {
      const res = await cartRequest.deleteCarts([cartId]);
      if (res.status === 'SUCCESS') {
        setApiCartList((prevApiCartList) =>
          prevApiCartList.filter(
            (prevSelectedCartItem) => String(prevSelectedCartItem.id) !== cartId
          )
        );
        setSelectedCartList((prevSelectedCartList) =>
          prevSelectedCartList.filter(
            (prevSelectedCartItem) => prevSelectedCartItem !== cartId
          )
        );
        setCartAllCheckboxList((prevCartAllCheckedbox) =>
          prevCartAllCheckedbox.filter(
            (prevSelectedCartItem) => prevSelectedCartItem.name !== cartId
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
      <button
        type='button'
        aria-label='장바구니 삭제'
        onClick={() => setIsShowModal(true)}
      >
        <HiMiniXMark className='text-gray1' />
      </button>
      {isShowModal && (
        <Modal
          content='선택하신 상품이 삭제됩니다'
          onCancelClick={() => setIsShowModal(false)}
          onConfirmClick={deleteCartItem}
        />
      )}
      {isShowToast && <Toast message={isShowToast} />}
    </>
  );
};

export default DeleteButton;
