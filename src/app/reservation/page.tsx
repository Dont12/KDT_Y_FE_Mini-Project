'use client';
import CheckBoxGroup from '@/components/CheckBoxGroup';
import CheckBox from '@/components/CheckBoxGroup';
import ReservationItem from '@/components/ReservationItem';
import UserInformation from '@/components/UserInformation';
import React, { useState } from 'react';

const Divider = () => <div className='border-lightGray border-b  px-8 '></div>;

const reservation = () => {
  const [selectorPayment, setSelectorPayment] = useState<null | string>(null);

  const handleButtonClick = (paymentMethod: string) => {
    setSelectorPayment(paymentMethod);
  };

  return (
    <div>
      {paymentData.map((data, index) => (
        <>
          <ReservationItem
            key={index}
            productName={data.productName}
            roomName={data.roomName}
            checkInDate={data.checkInDate}
            checkOutDate={data.checkOutDate}
            checkInTime={data.checkInTime}
            checkOutTime={data.checkOutTime}
            baseGuestCount={data.baseGuestCount}
            maxGuestCount={data.maxGuestCount}
            price={data.price}
          />
          {index < paymentData.length - 1 && <Divider />}
        </>
      ))}
      <UserInformation />
      <div className='mt-8  bg-white p-8 '>
        <p className='font-bold'>결제 금액</p>
        <div className='flex justify-between'>
          <p className='mt-2 font-bold '>상품 금액</p>
          <p>{paymentData[0].totalPrice}원</p>
        </div>
        <div className='border-darkGray mt-6 w-full border-b-2 border-dotted'></div>
        <div className='my-8'>
          <p className='my-4'> 결제수단</p>
          <div className='flex justify-between'>
            <button
              onClick={() => handleButtonClick('카드')}
              className={
                selectorPayment === '카드'
                  ? 'border-mainButton text-mainButton flex items-center  rounded-md border border-solid px-36 py-2'
                  : 'border-mediumGray  flex items-center rounded-md border border-solid px-36 py-2'
              }
            >
              카드
            </button>
            <button
              onClick={() => handleButtonClick('실시간계좌이체')}
              className={
                selectorPayment === '실시간계좌이체'
                  ? 'border-mainButton text-mainButton flex items-center  rounded-md border border-solid px-32 py-2'
                  : 'border-mediumGray  flex items-center rounded-md border border-solid px-32 py-2'
              }
            >
              실시간계좌이체
            </button>
          </div>
        </div>
        <CheckBoxGroup />
        <button className='bg-mainButton mt-20  w-full rounded p-4 text-center text-white'>
          {paymentData[0].totalPrice}원 결제하기
        </button>
        <p className='text-mediumGray my-10 text-xs'>
          (주)[우리 서비스 이름]는 통신판매중개업자로서, 통신판매의 당사자가
          아니라는 사실을 고지하며 상품의 결제, 이용 및 환불 등과 관련한 의무와
          책임은 각 판매자에게 있습니다.
        </p>
      </div>
    </div>
  );
};

export default reservation;

const paymentData = [
  {
    name: '김패캠',
    phone: '010-1234-5678',
    productName: '강릉 애즈풀앤스파펜션',
    roomName: '403(오션뷰스파)',
    checkInTime: '13:00',
    checkOutTime: '11:00',
    checkInDate: '2010-01-01',
    checkOutDate: '2010-01-02',
    baseGuestCount: 2,
    maxGuestCount: 4,
    price: 10000,
    totalPrice: 100000,
  },
  {
    name: '김패캠',
    phone: '010-1234-5678',
    productName: '강릉 애즈풀앤스파펜션',
    roomName: '403(오션뷰스파)',
    checkInTime: '13:00',
    checkOutTime: '11:00',
    checkInDate: '2010-01-01',
    checkOutDate: '2010-01-02',
    baseGuestCount: 2,
    maxGuestCount: 4,
    price: 90000,
    totalPrice: 100000,
  },
];
