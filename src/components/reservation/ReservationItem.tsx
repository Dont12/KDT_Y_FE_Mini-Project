import React, { useState } from 'react';

const ReservationItem = ({
  productName,
  roomName,
  day,
  checkInDate,
  checkOutDate,
  checkInTime,
  checkOutTime,
  baseGuestCount,
  maxGuestCount,
  price,
}: ReservationItemData) => {
  const [isModal, setIsModal] = useState(false);

  const openModal = () => setIsModal(!isModal);
  // const closeModal = () => setIsModal(false);

  return (
    <div className='max-w-3xl bg-white p-8'>
      <p className='font-bold'>숙소</p>
      <div className='flex'>
        <p className='mr-2'>{productName}</p>
        <button
          className='bg-mediumGray w-120 mx-1 mb-2 rounded px-3 py-0.5 text-center text-xs'
          onClick={openModal}
        >
          예약 취소 안내
        </button>
      </div>
      {isModal && (
        <div className='rounded bg-[#f8f8f8] p-4'>
          <ul>
            <li className=' text-xs text-[#616161]'>
              - 예약일시 기준 체크인 시각 이전일 경우 무료취소가 가능합니다.
            </li>
            <li className='text-xs text-[#616161]'>
              - 숙소 정책에 따라 일부 상품은 무료취소가 불가능합니다.
            </li>
          </ul>
          <div className='ml-2 mt-2 flex'>
            <p className='text-xs text-[#616161]'>호텔/펜션/게하</p>
            <p className='ml-4 text-xs font-bold text-[#616161]'>
              10분 이내 무료 취소
            </p>
          </div>
          <p className='ml-2 mt-1 text-xs text-[#616161]'>
            (단, 숙소 정책에 따라 취소수수료 부가 예외 규정이 적용되지 않을 수
            있습니다.)
          </p>
        </div>
      )}
      <p>{roomName}</p>
      <div className='mt-8 flex'>
        <div className='mr-60'>
          <p className='text-mediumGray'>체크인</p>
          <p>{checkInDate}</p>
          <p>{checkInTime}</p>
        </div>
        <div>
          <p className='text-mediumGray'>체크아웃</p>
          <p>{checkOutDate}</p>
          <p>{checkOutTime}</p>
        </div>
      </div>
      <p className='text-mediumGray'>
        기준{baseGuestCount}명 / 최대 {maxGuestCount}명
      </p>
      <div className='flex justify-end'>
        <p className='text-mediumGray'>숙박 / {day}박</p>
        <p className='ml-4 font-bold'>
          {new Intl.NumberFormat().format(price)}원
        </p>
      </div>
    </div>
  );
};

export default ReservationItem;

interface ReservationItemData {
  productName: string;
  roomName: string;
  day: number;
  checkInDate: string;
  checkOutDate: string;
  checkInTime: string;
  checkOutTime: string;
  baseGuestCount: number;
  maxGuestCount: number;
  price: number;
}
