import ReservationConfirm from '@/components/ReservationConfirm';
import React from 'react';

const page = () => {
  return (
    <div className='min-h-screen max-w-3xl bg-white'>
      <p className='py-14 text-center text-3xl'>예약 결과 확인</p>
      <ReservationConfirm
        productName={reservationData.productName}
        roomName={reservationData.roomName}
        imageUrl={reservationData.imageUrl}
        visitType={reservationData.visitType}
        checkInDate={reservationData.checkInDate}
        checkOutDate={reservationData.checkOutDate}
        checkInTime={reservationData.checkInTime}
        checkOutTime={reservationData.checkOutTime}
        baseGuestCount={reservationData.baseGuestCount}
        maxGuestCount={reservationData.maxGuestCount}
        hideDetailLink={true}
      />
      <div className='border-mediumGray m-8 items-center justify-center rounded-md border border-solid px-5 py-8 '>
        <div className='h-20'>
          <div className='flex justify-between'>
            <p className='m-2 text-xl font-bold'>결제 날짜</p>
            <p className='text-xl'>{reservationData.paymentDate}</p>
          </div>
          <div className='flex justify-between text-xl'>
            <p className='m-2 text-xl font-bold'>결제 수단</p>
            <p className='text-xl'>{reservationData.payment}</p>
          </div>
        </div>
        <div className='border-lightGray mt-6 w-full border-b-2'></div>
        <div className='h-20'>
          <p className='m-2 mt-8 text-xl'>결제 금액</p>
          <div className='flex justify-between'>
            <p className='m-2 text-xl font-bold'> 상품 금액</p>
            <p className='text-xl'>{reservationData.price}</p>
          </div>
        </div>
        <div className='border-lightGray mt-6 w-full border-b-2'></div>
        <div className='h-28'>
          <p className='m-2 mt-8 text-xl font-bold'>이용자 정보</p>
          <div className='flex justify-between'>
            <p className='m-2 text-xl'>이름</p>
            <p className='text-xl'>{reservationData.name}</p>
          </div>
          <div className='flex justify-between'>
            <p className='m-2 text-xl'>휴대폰 번호</p>
            <p className='text-xl'>{reservationData.phone}</p>
          </div>
        </div>
        <div className='border-lightGray mt-6 w-full border-b-2'></div>
        <div className='h-28'>
          <p className='m-2 mt-8 text-xl font-bold'>예약자 정보</p>
          <div className='flex justify-between'>
            <p className='m-2 text-xl'>이름</p>
            <p className='text-xl'>{reservationData.userName}</p>
          </div>
          <div className='flex justify-between'>
            <p className='m-2 text-xl'>휴대폰 번호</p>
            <p className='text-xl'>{reservationData.userPhone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

// 예약(결제된) 내역 데이터
const reservationData = {
  productName: '몬드리안 서울 이태원',
  roomName: '이태원 몬드리안 썸머바캉스 조식2인',
  imageUrl: '/images/roomImg.png',
  visitType: '도보',
  checkInTime: '15:00',
  checkOutTime: '12:00',
  baseGuestCount: 2,
  maxGuestCount: 4,
  checkInDate: '2023.11.20',
  checkOutDate: '2023.11.21',
  paymentDate: '2023.11.20',
  payment: '카드',
  price: 1000000,
  userName: '김패캠',
  userPhone: '010-1234-5678',
  name: '김부모',
  phone: '010-1234-5678',
};
