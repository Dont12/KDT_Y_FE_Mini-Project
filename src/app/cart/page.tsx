'use client';

import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import {
  CartFooter,
  CartHeader,
  CartItem,
  CartNotice,
  EmptyCartItem,
} from '@/components/cart';
import { Header, HeaderNav } from '@/components/common/header';

import type { ApiCartItem, CartProduct } from '@/@types/cart.types';
import cartRequest from '@/api/cartRequest';
import { cartSelectedState } from '@/recoil/atoms/cartState';

const Cart = () => {
  const [apiCartList, setApiCartList] = useState<ApiCartItem[]>([]);
  const [cartProductList, setCartProductList] = useState<CartProduct[]>([]);

  useEffect(() => {
    const getCartList = async () => {
      try {
        const res = await cartRequest.getCartList(1, 10);
        setApiCartList(res.data.items);
      } catch (error) {
        console.error('deleteCarts api error', error);
      }
    };

    getCartList();
  }, []);

  useEffect(() => {
    apiCartList.map((item: ApiCartItem) => {
      setCartProductList((prevCartProductList) => {
        const existingIndex = prevCartProductList.findIndex(
          (prevCartItem) => prevCartItem.productId === item.product.productId
        );
        const updatedCartList = [...prevCartProductList];
        if (existingIndex !== -1) {
          // 존재하면 숙소 안에 방만 추가
          updatedCartList[existingIndex].cartRoomList.push({
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
          });
          return updatedCartList;
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
        <CartHeader />
      </Header>
      <main className='mb-52 mt-[6rem]'>
        <section>
          {cartProductList.length > 0 ? (
            <ul className='pt-[0.0063rem]'>
              {cartProductList.map((cartProductItem) => (
                <CartItem
                  key={cartProductItem.productId}
                  cartProductData={cartProductItem}
                />
              ))}
            </ul>
          ) : (
            <EmptyCartItem />
          )}
        </section>
        <CartNotice />
        <CartFooter totalPrice={totalPrice} />
      </main>
    </>
  );
};

export default Cart;
