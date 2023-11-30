'use client';

import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import {
  CartFooter,
  CartHeader,
  CartItem,
  CartNotice,
  EmptyCartList,
} from '@/components/cart';
import { Header, HeaderNav } from '@/components/common';

import type { CartItemInfo, PreCartProduct } from '@/@types/cart.types';
import cartRequest from '@/api/cartRequest';
import { apiCartListState, cartSelectedState } from '@/recoil/atoms/cartState';

const Cart = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiCartList, setApiCartList] = useRecoilState(apiCartListState);
  const [cartProductList, setCartProductList] = useState<PreCartProduct[]>([]);

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
  }, []);

  useEffect(() => {
    setCartProductList([]);
    apiCartList.map((item: CartItemInfo) => {
      setCartProductList((prevCartProductList) => {
        const existingIndex = prevCartProductList.findIndex(
          (prevCartItem) => prevCartItem.productId === item.product.productId
        );
        if (existingIndex !== -1) {
          return prevCartProductList.map((prevCartProductItem, index) => {
            // 존재하면 숙소 안에 방만 추가
            if (index === existingIndex) {
              return {
                ...prevCartProductItem,
                cartRoomList: [
                  ...prevCartProductItem.cartRoomList,
                  {
                    id: item.id,
                    roomId: item.product.roomId,
                    imageUrl: item.product.imageUrl,
                    roomName: item.product.roomName,
                    baseGuestCount: item.product.baseGuestCount,
                    maxGuestCount: item.product.maxGuestCount,
                    price: item.product.price,
                    checkInTime: item.product.checkInTime,
                    checkOutTime: item.product.checkOutTime,
                    stock: item.product.stock,
                    checkInDate: item.checkInDate,
                    checkOutDate: item.checkOutDate,
                    numberOfNights: item.numberOfNights,
                    guestCount: item.product.guestCount,
                  },
                ],
              };
            }
            return prevCartProductItem;
          });
        } else {
          // 존재하지 않으면 숙소 및 방 추가
          return [
            ...prevCartProductList,
            {
              productId: item.product.productId,
              productName: item.product.productName,
              address: item.product.address,
              cartRoomList: [
                {
                  id: item.id,
                  roomId: item.product.roomId,
                  imageUrl: item.product.imageUrl,
                  roomName: item.product.roomName,
                  baseGuestCount: item.product.baseGuestCount,
                  maxGuestCount: item.product.maxGuestCount,
                  price: item.product.price,
                  checkInTime: item.product.checkInTime,
                  checkOutTime: item.product.checkOutTime,
                  stock: item.product.stock,
                  checkInDate: item.checkInDate,
                  checkOutDate: item.checkOutDate,
                  numberOfNights: item.numberOfNights,
                  guestCount: item.product.guestCount,
                },
              ],
            },
          ];
        }
      });
    });
  }, [apiCartList]);

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
                {cartProductList.map((cartProductItem) => (
                  <CartItem
                    key={cartProductItem.productId}
                    cartProductData={cartProductItem}
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
