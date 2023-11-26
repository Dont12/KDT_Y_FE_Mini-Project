interface InputType {
  value: string;
  validationPass: boolean;
}

interface ErrorProps {
  target: string;
  input: InputType;
}

const ErrorMsg = ({ target, input }: ErrorProps): JSX.Element => {
  const showError = () => {
    if (target === 'email') {
      return '이메일 형식에 맞게 입력해주세요.';
    }

    if (target === 'name') {
      return '한글,영문 또는 숫자를 2~10자 입력해주세요.';
    }

    if (target === 'password') {
      return '영문,숫자를 조합하여 8~15자 입력해주세요.';
    }

    if (target === 'passwordConfirm') {
      return '패스워드가 일치하지 않습니다.';
    }

    if (target === 'contact') {
      return '전화번호 형식에 맞게 입력해주세요.';
    }
  };

  return (
    <div className='text-red absolute left-1 top-[105%] text-xs font-light'>
      {input.value ? (input.validationPass ? '' : showError()) : null}
    </div>
  );
};

export default ErrorMsg;
