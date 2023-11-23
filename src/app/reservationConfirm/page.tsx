import ReservationConfirm from '@/components/ReservationConfirm';
import React from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const page = () => {
  return (
    <div className='bg-white'>
      <p className='text-center text-3xl'>국내 여행 예약 내역</p>
      <div className='flex'>
        <div className='tex-2xl'>최근 6개월</div>
        <MdOutlineKeyboardArrowDown />
      </div>
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
      />
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
      />
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
      />
    </div>
  );
};

export default page;

// 예약 내역 데이터
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
};
