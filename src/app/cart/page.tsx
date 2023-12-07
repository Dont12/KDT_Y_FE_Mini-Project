'use client';

import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import useCartList from '@/hooks/cart/useCartList';

import {
  CartFooter,
  CartHeader,
  CartItem,
  CartNotice,
  EmptyCartList,
} from '@/components/cart';
import { Header, HeaderNav } from '@/components/common';

import cartRequest from '@/api/cartRequest';
import { apiCartListState, cartSelectedState } from '@/recoil/atoms/cartState';

const Cart = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiCartList, setApiCartList] = useRecoilState(apiCartListState);

  useEffect(() => {
    const getCartList = async () => {
      try {
        const res = await cartRequest.getCartList(1, 10000);

        if (res.status === 'SUCCESS') {
          setIsLoading(true);
          setApiCartList(res.data.items);
        } else if (res.status === 'FAIL') {
          // 실패 에러 처리
        } else if (res.status === 'ERROR') {
          // 서버 오류 에러 처리
        }
      } catch (error) {
        console.error('getCartList api error', error);
      }
    };

    getCartList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const preppedProductList = useCartList(apiCartList);

  const selectedCartList = useRecoilValue(cartSelectedState);

  const [totalPrice, setTotalPrice] = useState<number>(0);
  useEffect(() => {
    const filteredList = apiCartList.filter((apiCartItem) =>
      selectedCartList.includes(String(apiCartItem.id))
    );

    let selectPrice = 0;
    filteredList.map((filteredItem) => {
      selectPrice += filteredItem.product.price;
    });
    setTotalPrice(selectPrice);
  }, [selectedCartList]);

  return (
    <>
      <Header>
        <HeaderNav showBack showHome showMyPage>
          장바구니
        </HeaderNav>
        {apiCartList.length !== 0 && <CartHeader />}
      </Header>
      <main
        className={`mb-40 ${
          apiCartList.length !== 0 ? 'mt-[6.75rem]' : 'mt-12'
        }`}
      >
        <section>
          {isLoading ? (
            apiCartList.length > 0 ? (
              <ul>
                {preppedProductList.map((preppedProductItem) => (
                  <CartItem
                    key={preppedProductItem.productId}
                    cartProductData={preppedProductItem}
                  />
                ))}
              </ul>
            ) : (
              <EmptyCartList />
            )
          ) : (
            <div>로딩 중</div>
          )}
        </section>
        <CartNotice />
        <CartFooter totalPrice={totalPrice} />
      </main>
    </>
  );
};

export default Cart;
