'use client';

import { RecoilRoot } from 'recoil';

import { AppLayout } from '../layout';

const CartLayout = ({ children }: AppLayout) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default CartLayout;
