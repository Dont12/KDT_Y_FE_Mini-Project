import React from 'react';
import CheckBoxItem from './CheckBoxItem';

const CheckBoxGroup = () => {
  return (
    <div className='items-center border border-solid border-gray-300 p-2'>
      <CheckBoxItem content='[필수] 만 14세 이상입니다.' required={true} />
      <CheckBoxItem
        content='[필수] 개인정보 수집 및 이용 동의'
        required={true}
      />
      <CheckBoxItem
        content='[필수] 개인정보 제 3자 제공 동의'
        required={true}
      />
      <CheckBoxItem content='[필수] 위치 정보 이용약관 동의' required={true} />
      <CheckBoxItem
        content='[선택]이벤트, 혜택 정보 수신 동의'
        required={false}
      />
      <CheckBoxItem
        content='[선택]이벤트, 혜택 정보 전송을 위한 개인정보 수집 및 이용동의'
        required={false}
      />
    </div>
  );
};

export default CheckBoxGroup;
