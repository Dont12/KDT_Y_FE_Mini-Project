'use client';

import { useEffect, useState } from 'react';

import { InputType } from '@/@types/auth.types';

const useButtonActivate = (...input: InputType[]): boolean => {
  const [buttonActivate, setButtonActivate] = useState(false);

  useEffect((): void => {
    setButtonActivate(!!input.every((el) => el.validationPass === true));
  }, [input]);

  return buttonActivate;
};

export default useButtonActivate;
