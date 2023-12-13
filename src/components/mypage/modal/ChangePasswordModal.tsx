import { useAuthInput, useButtonActivate } from '@hooks/auth';
import { debounce } from 'lodash';
import { Button, Modal } from 'rsuite';

import 'rsuite/dist/rsuite-no-reset.min.css';

import authRequest from '@/api/authRequest';

import { NewPassword, NewPasswordConfirm } from './input';

const ChangePasswordModal = ({
  toggleModal,
  passwordChangeModal,
  setPasswordChangeModal,
}: ChangePasswordProps) => {
  const [password, handlePassword] = useAuthInput('password');
  const [passwordConfirm, handlePasswordConfirm, setPasswordConfirm] =
    useAuthInput('passwordConfirm', password);
  const buttonActivate = useButtonActivate(password, passwordConfirm);

  const handleModal = () => {
    toggleModal(passwordChangeModal, setPasswordChangeModal);
  };

  const changePassword = debounce(async () => {
    try {
      const res = await authRequest.changePassword({
        password: password.value,
      });
      console.log(res);

      handleModal();
    } catch (error) {
      console.log(error);
    }
  }, 200);

  return (
    <Modal
      backdrop='static'
      role='alertdialog'
      open={passwordChangeModal}
      onClose={handleModal}
      size='sm'
    >
      <Modal.Header>
        <h2 className='text-red text-lg'>비밀번호를 변경하시겠습니까?</h2>
      </Modal.Header>
      <Modal.Body>
        <NewPassword
          password={password}
          handlePassword={handlePassword}
          passwordConfirm={passwordConfirm}
          setPasswordConfirm={setPasswordConfirm}
        />
        <NewPasswordConfirm
          passwordConfirm={passwordConfirm}
          handlePasswordConfirm={handlePasswordConfirm}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={changePassword}
          appearance='primary'
          disabled={!buttonActivate}
          color='red'
        >
          확인
        </Button>
        <Button onClick={handleModal} appearance='subtle'>
          취소
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ChangePasswordModal;

interface ChangePasswordProps {
  toggleModal: (state: boolean, setState: (value: boolean) => void) => void;
  passwordChangeModal: boolean;
  setPasswordChangeModal: (value: boolean) => void;
}
