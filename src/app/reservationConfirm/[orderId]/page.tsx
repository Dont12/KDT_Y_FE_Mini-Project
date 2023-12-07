'use client';

import React, { useEffect, useState } from 'react';

import { Footer, Header, HeaderNav } from '@/components/common';
import { ReservationConfirmContainer } from '@/components/reservation';

import orderRequest from '@/api/orderRequest';

const ReservationConfirmDetail = ({ params }: Props) => {
  const [orderListDetail, setOrderListDetail] =
    useState<OrderDetailData | null>();
  const { orderId } = params;

  const fetchData = async () => {
    try {
      const response = await orderRequest.getOrderListDetail(orderId);
      const getOrderListDetail = response.data;
      console.log('rescon/id', response);
      setOrderListDetail(getOrderListDetail);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Header>
        <HeaderNav showBack showCart showHome showMyPage>
          예약 결과 확인
        </HeaderNav>
      </Header>
      <main className='my-12 max-w-3xl bg-white py-5'>
        <ReservationConfirmContainer
          orderItems={orderListDetail?.orderItems as OrderItem[]}
          orderId={orderListDetail?.orderId as number}
          reserveDate={orderListDetail?.reserveDate as string}
          isDate={false}
        />
        <div className='border-mediumGray m-10 items-center justify-center rounded-md border border-solid px-5 py-8 '>
          <div className=' h-20'>
            <div className='flex justify-between'>
              <p className='m-2 text-xl font-bold'>결제 날짜</p>
              <p className='text-xl'>{orderListDetail?.reserveDate}</p>
            </div>
            <div className='flex justify-between text-xl'>
              <p className='m-2 text-xl font-bold'>결제 수단</p>
              <p className='text-xl'>{orderListDetail?.payment}</p>
            </div>
          </div>
          <div className='border-lightGray mt-6 w-full border-b-2'></div>
          <div className='h-20'>
            <p className='m-2 mt-8 text-xl'>결제 금액</p>
            <div className='flex justify-between'>
              <p className='m-2 text-xl font-bold'> 상품 금액</p>
              <p className='text-xl'>
                {new Intl.NumberFormat().format(
                  orderListDetail?.totalPrice as number
                )}
              </p>
            </div>
          </div>
          <div className='border-lightGray mt-6 w-full border-b-2'></div>
          <div className='h-28'>
            <p className='m-2 mt-8 text-xl font-bold'>이용자 정보</p>
            <div className='flex justify-between'>
              <p className='m-2 text-xl'>이름</p>
              <p className='text-xl'>{orderListDetail?.reserveName}</p>
            </div>
            <div className='flex justify-between'>
              <p className='m-2 text-xl'>휴대폰 번호</p>
              <p className='text-xl'>{orderListDetail?.reservePhone}</p>
            </div>
          </div>
          <div className='border-lightGray mt-6 w-full border-b-2'></div>
          <div className='h-28'>
            <p className='m-2 mt-8 text-xl font-bold'>예약자 정보</p>
            <div className='flex justify-between'>
              <p className='m-2 text-xl'>이름</p>
              <p className='text-xl'>{orderListDetail?.userName}</p>
            </div>
            <div className='flex justify-between'>
              <p className='m-2 text-xl'>휴대폰 번호</p>
              <p className='text-xl'>{orderListDetail?.userPhone}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ReservationConfirmDetail;

interface OrderDetailData {
  orderId: number;
  reserveDate: string;
  totalPrice: number;
  payment: string;
  reserveName: string;
  reservePhone: string;
  userName: string;
  userPhone: string;
  orderItems: OrderItem[];
}

interface OrderItem {
  orderItemId: number;
  productId: number;
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

interface Props {
  params: Parmas;
}

interface Parmas {
  orderId: number;
}
