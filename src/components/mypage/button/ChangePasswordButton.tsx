import { SubmitButton } from '@components/common';

import { ChangePasswordProps } from '@/@types/mypage.types';

const ChangePasswordButton = ({
  toggleModal,
  passwordChangeModal,
  setPasswordChangeModal,
}: ChangePasswordProps) => {
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
