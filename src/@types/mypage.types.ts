export interface UserInfo {
  email: string;
  nickname: string;
  phone: string;
}

export interface UserPassword {
  password: string;
}

export interface ChangePasswordProps {
  toggleModal: (state: boolean, setState: (value: boolean) => void) => void;
  passwordChangeModal: boolean;
  setPasswordChangeModal: (value: boolean) => void;
}

export interface WithdrawalProps {
  toggleModal: (state: boolean, setState: (value: boolean) => void) => void;
  withdrawalModal: boolean;
  setWithdrawalModal: (value: boolean) => void;
}
