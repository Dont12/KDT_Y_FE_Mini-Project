'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

import { Footer, Header, HeaderNav } from '@/components/common';
import { ReservationConfirmContainer } from '@/components/reservation';

import orderRequest from '@/api/orderRequest';

const ReservationConfirm = () => {
  const [reservationConfirm, setReservationConfirm] =
    useState<OrderHistories[]>();

  const fetchData = async () => {
    try {
      const response = await orderRequest.getOrderList();
      const data = await response.data;

      setReservationConfirm(data.orderHistories);
      console.log('reconfirm', data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='mx-auto min-h-screen max-w-3xl bg-white'>
      <Header>
        <HeaderNav showBack showCart showHome>
          국내 여행 예약 내역
        </HeaderNav>
      </Header>
      <main className='mt-12'>
        <div className=' flex'>
          <button className='border-mediumGray mx-10 mt-6 flex items-center justify-center rounded-md border border-solid px-5 py-1 '>
            <p className='tex-2xl'>최근 6개월</p>
            <MdOutlineKeyboardArrowDown />
          </button>
        </div>
        {reservationConfirm?.map((order, orderIndex) => (
          <ReservationConfirmContainer
            key={orderIndex}
            orderId={order.orderId}
            reserveDate={order.reserveDate}
            orderItems={order.orderItems}
            isDate={true}
          />
        ))}

        <p className='text-mediumGray ml-10 mt-28 text-xs'>
          xx 예약내역은 최대 2년까지 조회할 수 있으며, 삭제하신 내역은 노출되지
          않습니다.
        </p>
        <p className='ml-10 mr-10 mt-2 text-xs  text-gray-300'>
          (주)야놀자는 통신판매중개업자로서, 통신 판매자 당사자가 아니라는
          사실을 고지하며 상품의 결제, 이용 및 환불 등과 관련한 의무와 책임은 각
          판매자에게 있습니다.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default ReservationConfirm;

interface Order {
  orderId: number;
  createdDate: number;
  orderItems: OrderItem[];
}

interface OrderItem {
  orderItemId: number;
  productId: number;
  roomId: number;
  productName: string;
  imageUrl: string;
  roomName: string;
  baseGuestCount: number;
  maxGuestCount: number;
  checkInDate: string;
  checkInTime: string;
  checkOutDate: string;
  checkOutTime: string;
}

interface ReservationConfirmData {
  size: number;
  pageNumber: number;
  totalPages: number;
  totalElements: number;
  orderHistories: OrderHistories[];
}

interface OrderHistories {
  orderId: number;
  reserveDate: string;
  orderItems: OrderItem[];
}

interface OrderItem {
  orderItemId: number;
  productId: number;
  productName: string;
  roomName: string;
  imageUrl: string;
  maxGuestCount: number;
  baseGuestCount: number;
  checkInTime: string;
  checkInDate: string;
  checkOutTime: string;
  checkOutDate: string;
}
