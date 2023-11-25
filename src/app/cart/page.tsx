'use client';

import { useEffect, useState } from 'react';

import CartFooter from '@/components/cart/CartFooter';
import CartHeader from '@/components/cart/CartHeader';
import CartItem from '@/components/cart/CartItem';
import CartNotice from '@/components/cart/CartNotice';
import Header from '@/components/common/Header';
import HeaderNav from '@/components/common/HeaderNav';

const Cart = () => {
  // TODO|서지수 예약불가삭제 기능 구현
  // TODO|서지수 선택 삭제 기능 구현
  // TODO|서지수 선택에 따라 가격 정보바뀌고 선택한 것만 결제 기능 구현
  const [selectCount, setSelectCount] = useState<number>(0);
  const [cartData, setCartData] = useState(mock);
  const [totalPrice, setTotalPrice] = useState(650000);

  const [cartList, setCartList] = useState([]);
  useEffect(() => {});
  return (
    <>
      <Header>
        <HeaderNav showBack showHome showMyPage>
          장바구니
        </HeaderNav>
        <CartHeader
          selectCount={selectCount}
          totalCount={cartData.data.items.length}
        />
      </Header>
      <main className='mb-52 mt-[7.25rem]'>
        <section>
          <ul>
            {cartData.data.items.map((cartItem) => (
              <CartItem key={cartItem.id} data={cartItem} />
            ))}
          </ul>
        </section>
        <CartNotice />
        <CartFooter selectCount={selectCount} totalPrice={totalPrice} />
      </main>
    </>
  );
};

export default Cart;

const mock = {
  status: 'SUCCESS',
  data: {
    totalPrice: 100000,
    items: [
      {
        id: 1, // 장바구니 id
        product: {
          productId: 1, // 숙소id
          roomId: 1, // 방 id
          productName: '호텔 미드시티 명동',
          address: '서울특별시 중구 다동길 30',
          imageUrl:
            'https://yaimg.yanolja.com/v5/2023/11/18/16/6558e6531f1625.19802997.jpg',
          roomName: '코너 트윈',
          baseGuestCount: 2,
          maxGuestCount: 2,
          price: 195000,
          checkInTime: '15:00',
          checkOutTime: '12:00',
          stock: 1,
        },
        checkInDate: '2023-11-22',
        checkOutDate: '2023-11-23',
        numberOfNights: 1,
      },
      {
        id: 2, // 장바구니 id
        product: {
          productId: 2, // 숙소id
          roomId: 2, // 방 id
          productName: '태안 추억만들기펜션',
          address: '충청남도 태안군 원북면 신두해변길 157',
          imageUrl:
            'https://yaimg.yanolja.com/v5/2023/11/18/16/6558e6531f1625.19802997.jpg',
          roomName: '오션뷰 207호(주방+방/10평)',
          baseGuestCount: 2,
          maxGuestCount: 2,
          price: 59000,
          checkInTime: '15:00',
          checkOutTime: '11:00',
          stock: 1,
        },
        checkInDate: '2023-11-22',
        checkOutDate: '2023-11-24',
        numberOfNights: 2,
      },
      {
        id: 3, // 장바구니 id
        product: {
          productId: 3, // 숙소id
          roomId: 3, // 방 id
          productName: '태안 바다풍경카라반&글램핑',
          address: '충청남도 태안군 원북면 학암포길 21-75',
          imageUrl:
            'https://yaimg.yanolja.com/v5/2023/07/27/10/64c24b2e5016d4.49993756.jpg',
          roomName: '우드룸(편백나무방)',
          baseGuestCount: 2,
          maxGuestCount: 5,
          price: 65000,
          checkInTime: '15:00',
          checkOutTime: '11:00',
          stock: 1,
        },
        checkInDate: '2023-11-27',
        checkOutDate: '2023-11-29',
        numberOfNights: 2,
      },
      {
        id: 4, // 장바구니 id
        product: {
          productId: 3, // 숙소id
          roomId: 4, // 방 id
          productName: '태안 바다풍경카라반&글램핑',
          address: '충청남도 태안군 원북면 학암포길 21-75',
          imageUrl:
            'https://yaimg.yanolja.com/v5/2023/07/27/10/64c24b2e5016d4.49993756.jpg',
          roomName: '옐로우룸',
          baseGuestCount: 2,
          maxGuestCount: 5,
          price: 65000,
          checkInTime: '15:00',
          checkOutTime: '11:00',
          stock: 1,
        },
        checkInDate: '2023-11-23',
        checkOutDate: '2023-11-24',
        numberOfNights: 1,
      },
      {
        id: 5, // 장바구니 id
        product: {
          productId: 3, // 숙소id
          roomId: 5, // 방 id
          productName: '태안 바다풍경카라반&글램핑',
          address: '충청남도 태안군 원북면 학암포길 21-75',
          imageUrl:
            'https://yaimg.yanolja.com/v5/2023/07/27/10/64c24b2e5016d4.49993756.jpg',
          roomName: '레드룸',
          baseGuestCount: 2,
          maxGuestCount: 5,
          price: 65000,
          checkInTime: '15:00',
          checkOutTime: '11:00',
          stock: 3,
        },
        checkInDate: '2023-11-23',
        checkOutDate: '2023-11-24',
        numberOfNights: 1,
      },
    ],
  },
};
