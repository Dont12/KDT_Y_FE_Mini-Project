'use client';

import { RecoilRoot } from 'recoil';

import { AppLayout } from '../layout';

const CartLayout = ({ children }: AppLayout) => (
  <RecoilRoot>{children}</RecoilRoot>
);

export default CartLayout;
