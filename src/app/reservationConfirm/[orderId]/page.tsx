'use client';
import React, { useEffect, useState } from 'react';
import Header from '@/components/common/Header';
import HeaderNav from '@/components/common/HeaderNav';
import ReservationConfirmContainer from '@/components/reservation/ReservationConfirmContainer';
import orderRequest from '@/app/api/orderRequest';

const reservationConfirmDetail = ({ params }) => {
  const [res, setRes] = useState();
  const { orderId } = params;

  const fetchData = async () => {
    const response = await orderRequest.getOrderListDetail({ orderId });
    const res = response.data;
    setRes(res);
  };

  useEffect(() => {
    fetchData();
  });
  return (
    <>
      <Header>
        <HeaderNav showBack showCart showHome>
          예약 결과 확인
        </HeaderNav>
      </Header>
      <main className='my-12 max-w-3xl bg-white py-5'>
        <ReservationConfirmContainer
          orderItems={res?.orderItems}
          orderId={res?.orderId}
          createdDate={res?.reserveDate}
          isDate={false}
        />
        <div className='border-mediumGray m-10 items-center justify-center rounded-md border border-solid px-5 py-8 '>
          <div className=' h-20'>
            <div className='flex justify-between'>
              <p className='m-2 text-xl font-bold'>결제 날짜</p>
              <p className='text-xl'>{res?.reserveDate}</p>
            </div>
            <div className='flex justify-between text-xl'>
              <p className='m-2 text-xl font-bold'>결제 수단</p>
              <p className='text-xl'>{res?.payment}</p>
            </div>
          </div>
          <div className='border-lightGray mt-6 w-full border-b-2'></div>
          <div className='h-20'>
            <p className='m-2 mt-8 text-xl'>결제 금액</p>
            <div className='flex justify-between'>
              <p className='m-2 text-xl font-bold'> 상품 금액</p>
              <p className='text-xl'>
                {new Intl.NumberFormat().format(res?.totalPrice)}
              </p>
            </div>
          </div>
          <div className='border-lightGray mt-6 w-full border-b-2'></div>
          <div className='h-28'>
            <p className='m-2 mt-8 text-xl font-bold'>이용자 정보</p>
            <div className='flex justify-between'>
              <p className='m-2 text-xl'>이름</p>
              <p className='text-xl'>{res?.name}</p>
            </div>
            <div className='flex justify-between'>
              <p className='m-2 text-xl'>휴대폰 번호</p>
              <p className='text-xl'>{res?.phone}</p>
            </div>
          </div>
          <div className='border-lightGray mt-6 w-full border-b-2'></div>
          <div className='h-28'>
            <p className='m-2 mt-8 text-xl font-bold'>예약자 정보</p>
            <div className='flex justify-between'>
              <p className='m-2 text-xl'>이름</p>
              <p className='text-xl'>{res?.userName}</p>
            </div>
            <div className='flex justify-between'>
              <p className='m-2 text-xl'>휴대폰 번호</p>
              <p className='text-xl'>{res?.userPhone}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default reservationConfirmDetail;

interface OrderDetail {
  orderId: number;
  reserveDate: string;
  totalPrice: number;
  payment: string;
  name: string;
  phone: string;
  userName: string;
  userPhone: string;
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
  totalPrice: number;
  reserveDate: string;
}
