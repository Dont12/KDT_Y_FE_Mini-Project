import { atom } from 'recoil';

export const cartCheckboxElementState = atom<HTMLInputElement[]>({
  key: 'cartCheckboxElementState',
  default: [],
});

export const cartSelectedState = atom<string[]>({
  key: 'cartSelectedState',
  default: [],
});
