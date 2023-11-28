export interface FormElements extends HTMLFormElement {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

export interface FormTarget extends React.FormEvent<HTMLFormElement> {
  target: FormElements;
}

export interface InputType {
  value: string;
  validationPass: boolean;
}

export interface ErrorProps {
  target: string;
  input: InputType;
}

export interface IconProps {
  input: InputType;
}

export type InputHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;

export type SetInput = React.Dispatch<React.SetStateAction<InputType>>;

/* ---------------------------- Input Components type ---------------------------- */

export interface NameProps {
  name: InputType;
  handleName: React.ChangeEventHandler<HTMLInputElement>;
}

export interface EmailProps {
  email: InputType;
  handleEmail: React.ChangeEventHandler<HTMLInputElement>;
}

export interface PasswordProps {
  password: InputType;
  handlePassword: React.ChangeEventHandler<HTMLInputElement>;
  passwordConfirm?: InputType;
  setPasswordConfirm?: React.Dispatch<React.SetStateAction<InputType>>;
}

export interface passwordConfirmProps {
  passwordConfirm: InputType;
  handlePasswordConfirm: React.ChangeEventHandler<HTMLInputElement>;
}

export interface ContactProps {
  contact: InputType;
  handleContact: React.ChangeEventHandler<HTMLInputElement>;
}

/* ------------------------------ request type ------------------------------ */
export interface UserData {
  email: string;
  password: string;
  nickname: string;
  phone: string;
}

export type SigninData = Pick<UserData, 'email' | 'password'>;
