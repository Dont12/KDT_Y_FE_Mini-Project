import { SubmitButton } from '@components/common';

const ChangePasswordButton = ({
  toggleModal,
  passwordChangeModal,
  setPasswordChangeModal,
}: Props) => {
  const handleModal = () => {
    toggleModal(passwordChangeModal, setPasswordChangeModal);
  };

  return (
    <SubmitButton
      type='button'
      content='비밀번호 변경'
      activate={true}
      className='my-2'
      onClick={handleModal}
    />
  );
};

export default ChangePasswordButton;

interface Props {
  toggleModal: (state: boolean, setState: (value: boolean) => void) => void;
  passwordChangeModal: boolean;
  setPasswordChangeModal: (value: boolean) => void;
}
