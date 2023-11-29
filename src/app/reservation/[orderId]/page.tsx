'use client';

import CheckBoxGroup from '@/components/reservation/CheckBoxGroup';
import CheckBox from '@/components/reservation/CheckBoxGroup';
import ReservationItem from '@/components/reservation/ReservationItem';
import UserInformation from '@/components/reservation/UserInformation';
import Header from '@/components/common/Header';
import HeaderNav from '@/components/common/HeaderNav';
import React, { useEffect, useState } from 'react';
import orderRequest from '../../api/orderRequest';
import { useRouter } from 'next/navigation';
import Modal from 'react-modal';

const Divider = () => <div className='border-lightGray border-b  px-8 '></div>;

const Reservation = ({ params }) => {
  const router = useRouter();
  const { orderToken } = params;
  const [res, setRes] = useState();
  const [isPaymentButtonDisabled, setIsPaymentButtonDisabled] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({ userName: '', userPhone: '' });
  const [selectorPayment, setSelectorPayment] = useState<null | string>(null);
  const handleButtonClick = (paymentMethod: string) => {
    setSelectorPayment(paymentMethod);
    setIsPaymentButtonDisabled(false);
  };

  const handleUserInfoChange = (newUserInfo) => {
    setUserInfo((prevUserInfo) => ({ ...prevUserInfo, ...newUserInfo }));
  };

  const showLoadingMessage = () => (
    <div className=' flex items-center justify-center'>
      <p className='mt-24 text-center text-2xl'>결제가 진행중입니다...</p>
      <img src='../../public/images/roading.png' alt='로딩 이미지' />
    </div>
  );

  const fetchData = async () => {
    try {
      const response = await orderRequest.getOrderToken({ orderToken });
      const data = await response.data;
      setRes(data);
      console.log(data);
    } catch (error) {
      console.log('요청실패', error);
    }
  };
  useEffect(() => {
    fetchData();
    console.log(orderToken);
  }, []);

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    setModalIsOpen(true);

    const paymentData = {
      orderToken,
      userName: userInfo.userName,
      userPhone: userInfo.userPhone,
      totalPrice: res?.totalPrice,
      payment: selectorPayment,
    };

    try {
      const response = await orderRequest.postPayment(paymentData);
      const resOrderId = response.data.orderId;
      setTimeout(() => {
        setModalIsOpen(false);
        router.push(`/reservationConfirm/${resOrderId}`);
      }, 3000);

      console.log(response);
    } catch (error) {
      console.error('결제 실패', error);
    }
  };

  return (
    <div>
      <Header>
        <HeaderNav showBack showCart showHome>
          예약
        </HeaderNav>
      </Header>
      <main className='mt-12'>
        {res?.registerOrderItems.map((data, index) => (
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
            {index < res?.registerOrderItems.length - 1 && <Divider />}
          </>
        ))}
        <form onSubmit={handlePaymentSubmit}>
          <UserInformation onUserInfoChange={handleUserInfoChange} />
          <div className='mt-8  bg-white p-8 '>
            <p className='font-bold'>결제 금액</p>
            <div className='flex justify-between'>
              <p className='mt-2 font-bold '>상품 금액</p>
              <p> {new Intl.NumberFormat().format(res?.totalPrice)}원</p>
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
            <button
              type='submit'
              className='bg-mainButton mt-20 w-full rounded p-4 text-center text-white'
              disabled={isPaymentButtonDisabled}
            >
              {new Intl.NumberFormat().format(res?.totalPrice)}원 결제하기
            </button>
            <p className='text-mediumGray my-10 text-xs'>
              (주)[우리 서비스 이름]는 통신판매중개업자로서, 통신판매의 당사자가
              아니라는 사실을 고지하며 상품의 결제, 이용 및 환불 등과 관련한
              의무와 책임은 각 판매자에게 있습니다.
            </p>
          </div>
        </form>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel='결제 진행 중'
        >
          {showLoadingMessage()}
        </Modal>
      </main>
    </div>
  );
};

export default Reservation;
