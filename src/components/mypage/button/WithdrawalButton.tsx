import { SubmitButton } from '@components/common';

import { WithdrawalProps } from '@/@types/mypage.types';

const WithdrawalButton = ({
  toggleModal,
  withdrawalModal,
  setWithdrawalModal,
}: WithdrawalProps) => {
  const handleModal = () => {
    toggleModal(withdrawalModal, setWithdrawalModal);
  };

  return (
    <SubmitButton
      type='button'
      content='회원탈퇴'
      activate={true}
      className='my-2'
      onClick={handleModal}
    />
  );
};

export default WithdrawalButton;
