import { SubmitButton } from '@components/common';

const WithdrawalButton = ({
  toggleModal,
  withdrawalModal,
  setWithdrawalModal,
}: Props) => {
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

interface Props {
  toggleModal: (state: boolean, setState: (value: boolean) => void) => void;
  withdrawalModal: boolean;
  setWithdrawalModal: (value: boolean) => void;
}
