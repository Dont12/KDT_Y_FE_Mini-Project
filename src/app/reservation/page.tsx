'use client';
import React, { useState } from 'react';

const page = () => {
  const [selectorPayment, setSelectorPayment] = useState<null | string>(null);

  const handleButtonClick = (paymentMethod: string) => {
    setSelectorPayment(paymentMethod);
  };

  return (
    <div>
      <div className='max-w-3xl bg-white p-8'>
        <p className='font-bold'>숙소</p>
        <div className='flex'>
          <p className='mr-2'>{PaymentData.productName}</p>
          <p className='bg-mediumGray w-120 mx-1 mb-2 rounded px-3 py-0.5 text-center text-xs '>
            예약 취소 안내
          </p>
        </div>
        <p>{PaymentData.roomName}</p>
        <div className='mt-8 flex'>
          <div className='mr-60'>
            <p className='text-mediumGray'>체크인</p>
            <p>{PaymentData.checkInDate}</p>
            <p>{PaymentData.checkInTime}</p>
          </div>
          <div>
            <p className='text-mediumGray'>체크아웃</p>
            <p>{PaymentData.checkOutDate}</p>
            <p>{PaymentData.checkOutTime}</p>
          </div>
        </div>
        <p className='text-mediumGray'>
          기준{PaymentData.baseGuestCount}명 / 최대 {PaymentData.maxGuestCount}
          명
        </p>
        <div className='flex justify-end'>
          <p className='text-mediumGray'>숙박 / 1박</p>
          <p className='ml-4 font-bold'>{PaymentData.price}원</p>
        </div>
      </div>
      <div className='mt-8 bg-white'>
        <div className=' flex justify-between p-8'>
          <p>이용자 정보</p>
          <label>
            <input type='checkbox' className='mr-2' />
            예약자 정보와 일치합니다.
          </label>
        </div>
        <div className='pb-8 pl-8'>
          <p>성명</p>
          <input type='text' placeholder='성명을 입력해주세요' />
          <p className='mt-4'>휴대폰 번호</p>
          <input type='text' placeholder='휴대폰 번호를 입력해주세요' />
        </div>
      </div>
      <div className='mt-8  bg-white p-8 '>
        <p className='font-bold'>결제 금액</p>
        <div className='flex justify-between'>
          <p className='mt-2 font-bold '>상품 금액</p>
          <p>{PaymentData.totalPrice}원</p>
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
        <div className='items-center border border-solid border-gray-300 p-2'>
          <label className='m-2 block'>
            <input type='checkbox' className='mr-2 mt-2' />
            [필수] 만 14세 이상입니다.
          </label>
          <label className=' m-2 block'>
            <input type='checkbox' className='mr-2 mt-2' />
            [필수] 개인정보 수집 및 이용 동의
          </label>
          <label className=' m-2 block'>
            <input type='checkbox' className='mr-2 mt-2' />
            [필수] 개인정보 제 3자 제공 동의
          </label>
          <label className=' m-2 block'>
            <input type='checkbox' className='mr-2 mt-2' />
            [필수] 위치 정보 이용약관 동의
          </label>
          <label className=' m-2 block'>
            <input type='checkbox' className='mr-2 mt-2' />
            [선택]이벤트, 혜택 정보 수신 동의
          </label>
          <label className='m-2 block'>
            <input type='checkbox' className='mr-2 mt-2' />
            [선택]이벤트, 혜택 정보 전송을 위한 개인정보 수집 및 이용동의
          </label>
        </div>
        <div className='m-6 flex items-center justify-end'>
          <p className='text-xs '>결제 금액</p>
          <p className='m-2 font-bold '>{PaymentData.totalPrice}원</p>
        </div>
        <button className='bg-mainButton mt-4  w-full rounded p-4 text-center text-white'>
          {PaymentData.totalPrice}원 결제하기
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

export default page;

const PaymentData = {
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
  totalPrice: 90000,
};
