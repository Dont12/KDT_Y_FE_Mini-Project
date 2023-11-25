'use client';

import { useEffect, useState } from 'react';

interface InputType {
  value: string;
  validationPass: boolean;
}

const useButtonActivate = (...input: InputType[]): boolean => {
  const [buttonActivate, setButtonActivate] = useState(false);

  useEffect((): void => {
    setButtonActivate(!!input.every((el) => el.validationPass === true));
  }, [input]);

  return buttonActivate;
};

export default useButtonActivate;
