import ReservationConfirm, { Divider } from '@/components/ReservationConfirm';
import React, { useEffect, useState } from 'react';
import orderRequest from '@/app/api/orderRequest';
import ReservationConfirmContainer from '@/components/ReservationConfirmContainer';
// const useRouter = useClientRouter as () => ReturnType<typeof useClientRouter>;

const reservationConfirmDetail = async ({ params }) => {
  const { orderId } = params;
  const response = await orderRequest.getOrderListDetail({ orderId });
  const res = response.data;

  return (
    <div className='min-h-screen max-w-3xl bg-white '>
      <p className=' py-12 text-center text-3xl'>예약 결과 확인</p>

      <ReservationConfirmContainer
        orderItems={res.orderItems}
        orderId={res.orderId}
        createdDate={res.reserveDate}
        isDate={false}
      />
      <div className='border-mediumGray m-8 items-center justify-center rounded-md border border-solid px-5 py-8 '>
        <div className='h-20'>
          <div className='flex justify-between'>
            <p className='m-2 text-xl font-bold'>결제 날짜</p>
            <p className='text-xl'>{res.reserveDate}</p>
          </div>
          <div className='flex justify-between text-xl'>
            <p className='m-2 text-xl font-bold'>결제 수단</p>
            <p className='text-xl'>{res.payment}</p>
          </div>
        </div>
        <div className='border-lightGray mt-6 w-full border-b-2'></div>
        <div className='h-20'>
          <p className='m-2 mt-8 text-xl'>결제 금액</p>
          <div className='flex justify-between'>
            <p className='m-2 text-xl font-bold'> 상품 금액</p>
            <p className='text-xl'>
              {new Intl.NumberFormat().format(res.totalPrice)}
            </p>
          </div>
        </div>
        <div className='border-lightGray mt-6 w-full border-b-2'></div>
        <div className='h-28'>
          <p className='m-2 mt-8 text-xl font-bold'>이용자 정보</p>
          <div className='flex justify-between'>
            <p className='m-2 text-xl'>이름</p>
            <p className='text-xl'>{res.name}</p>
          </div>
          <div className='flex justify-between'>
            <p className='m-2 text-xl'>휴대폰 번호</p>
            <p className='text-xl'>{res.phone}</p>
          </div>
        </div>
        <div className='border-lightGray mt-6 w-full border-b-2'></div>
        <div className='h-28'>
          <p className='m-2 mt-8 text-xl font-bold'>예약자 정보</p>
          <div className='flex justify-between'>
            <p className='m-2 text-xl'>이름</p>
            <p className='text-xl'>{res.userName}</p>
          </div>
          <div className='flex justify-between'>
            <p className='m-2 text-xl'>휴대폰 번호</p>
            <p className='text-xl'>{res.userPhone}</p>
          </div>
        </div>
      </div>
    </div>
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
