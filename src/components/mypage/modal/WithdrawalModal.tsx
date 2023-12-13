import { useRouter } from 'next/navigation';
import React from 'react';
import { Button, Modal } from 'rsuite';

import 'rsuite/dist/rsuite-no-reset.min.css';

import authRequest from '@/api/authRequest';

const WithdrawalModal = ({
  toggleModal,
  withdrawalModal,
  setWithdrawalModal,
}: WithdrawalProps) => {
  const router = useRouter();

  const handleModal = () => {
    toggleModal(withdrawalModal, setWithdrawalModal);
  };

  const withdrawal = async () => {
    try {
      const res = await authRequest.withdrawal();
      console.log(res);

      router.push('/auth/signin');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      backdrop='static'
      role='alertdialog'
      open={withdrawalModal}
      onClose={handleModal}
      size='sm'
    >
      <Modal.Header>
        <h2 className='text-red text-lg'>STAYINN에서 탈퇴하시겠습니까?</h2>
      </Modal.Header>
      <Modal.Body>
        <p className='text-sm'>
          탈퇴하시면 예약 내역 및 등록된 모든 정보가 삭제되고 이후 복구할 수
          없습니다.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={withdrawal} appearance='primary' color='red'>
          확인
        </Button>
        <Button onClick={handleModal} appearance='subtle'>
          취소
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WithdrawalModal;

interface WithdrawalProps {
  toggleModal: (state: boolean, setState: (value: boolean) => void) => void;
  withdrawalModal: boolean;
  setWithdrawalModal: (value: boolean) => void;
}
