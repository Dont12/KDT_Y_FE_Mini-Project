import ReservationConfirm from '@/components/ReservationConfirm';
import React from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const page = () => {
  return (
    <div className='mx-auto min-h-screen max-w-3xl bg-white'>
      <p className='py-14 text-center text-3xl'>국내 여행 예약 내역</p>
      <div className='flex'>
        <button className='border-mediumGray mx-8 flex items-center justify-center rounded-md border border-solid px-5 py-1 '>
          <p className='tex-2xl'>최근 6개월</p>
          <MdOutlineKeyboardArrowDown />
        </button>
      </div>
      {reservationData.map((data, index) => (
        <ReservationConfirm
          key={index}
          productName={data.productName}
          roomName={data.roomName}
          imageUrl={data.imageUrl}
          visitType={data.visitType}
          checkInDate={data.checkInDate}
          checkOutDate={data.checkOutDate}
          checkInTime={data.checkInTime}
          checkOutTime={data.checkOutTime}
          baseGuestCount={data.baseGuestCount}
          maxGuestCount={data.maxGuestCount}
        />
      ))}

      <p className='text-mediumGray ml-10 mt-28 text-xs'>
        예약내역은 최대 2년까지 조회할 수 있으며, 삭제하신 내역은 노출되지
        않습니다.
      </p>
      <p className='ml-10 mr-10 mt-2 text-xs  text-gray-300'>
        (주)야놀자는 통신판매중개업자로서, 통신 판매자 당사자가 아니라는 사실을
        고지하며 상품의 결제, 이용 및 환불 등과 관련한 의무와 책임은 각
        판매자에게 있습니다.
      </p>
    </div>
  );
};

export default page;

// 예약 내역 데이터
const reservationData = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
];
