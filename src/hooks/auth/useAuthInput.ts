'use client';

import { useCallback, useState } from 'react';

import { InputType } from '@/@types/auth.types';

const useAuthInput = (target: string, password?: InputType) => {
  const [input, setInput] = useState({
    value: '',
    validationPass: false,
  });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      if (target === 'email') {
        setInput({
          value: e.target.value,
          validationPass:
            /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(
              e.target.value
            ),
        });
      }

      if (target === 'password') {
        setInput({
          value: e.target.value,
          validationPass: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/.test(
            e.target.value
          ),
        });
      }

      if (target === 'passwordConfirm') {
        if (password) {
          setInput({
            value: e.target.value,
            validationPass: e.target.value === password.value,
          });
        }
      }

      if (target === 'name') {
        setInput({
          value: e.target.value,
          validationPass: (input.validationPass =
            e.target.value.length >= 2 && e.target.value.length <= 10),
        });
      }

      if (target === 'contact') {
        setInput({
          value: e.target.value,
          validationPass: /^\d{2,3}-\d{3,4}-\d{4}$/.test(e.target.value),
        });
      }
    },
    [input, target, password]
  );

  return [input, handleChange, setInput];
};

export default useAuthInput;
