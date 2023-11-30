import { atom } from 'recoil';

import type { ApiCartItem } from '@/@types/cart.types';

export const apiCartListState = atom<ApiCartItem[]>({
  key: 'apiCartListState',
  default: [],
});

export const cartCheckboxElementState = atom<HTMLInputElement[]>({
  key: 'cartCheckboxElementState',
  default: [],
});

export const cartSelectedState = atom<string[]>({
  key: 'cartSelectedState',
  default: [],
});
