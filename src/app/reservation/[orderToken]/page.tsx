'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

import { Footer, Header, HeaderNav } from '@/components/common';
import {
  CheckBoxGroup,
  ReservationItem,
  UserInformation,
} from '@/components/reservation';

import orderRequest from '@/api/orderRequest';

const Reservation = ({ params }: Props) => {
  const router = useRouter();
  const orderToken = params;
  const [registerOrderItemsData, setRegisterOrderItemsData] =
    useState<RegisterOrderItemsData | null>();
  const [isPaymentButtonDisabled, setIsPaymentButtonDisabled] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({ userName: '', userPhone: '' });
  const [selectorPayment, setSelectorPayment] = useState<null | string>(null);

  const handleButtonClick = (paymentMethod: string) => {
    setSelectorPayment(paymentMethod);
    setIsPaymentButtonDisabled(false);
  };

  const handleUserInfoChange = (newUserInfo: UserData) => {
    setUserInfo(newUserInfo);
  };

  const showLoadingMessage = () => (
    <div className=' flex items-end justify-center'>
      <p className='mr-4 mt-24 text-center text-2xl'>결제가 진행중입니다...</p>
      <img src='/images/roading.png' alt='로딩 이미지' />
    </div>
  );

  const fetchData = async () => {
    try {
      const response = await orderRequest.getOrderToken(orderToken.orderToken);
      const getRegisterOrderItem = await response.data;
      setRegisterOrderItemsData(getRegisterOrderItem);
      console.log(response);
    } catch (error) {
      console.log('요청실패', error);
    }
  };
  useEffect(() => {
    fetchData();
    console.log('orderToken', orderToken.orderToken);
  }, []);

  const handlePaymentSubmit = async (e: FormTarget) => {
    e.preventDefault();
    setModalIsOpen(true);

    const paymentData = {
      orderToken: orderToken.orderToken,
      userName: userInfo.userName,
      userPhone: userInfo.userPhone,
      price: registerOrderItemsData?.totalPrice,
      payment: selectorPayment,
    };
    console.log('paymentdata', paymentData);

    try {
      const response = await orderRequest.postPayment(paymentData);
      const getOrderId = response.data.orderId;
      setTimeout(() => {
        setModalIsOpen(false);
        router.replace(`/reservationConfirm/${getOrderId}`);
      }, 1000);
      console.log('post', response);
    } catch (error) {
      console.error('결제 실패', error);
    }
  };

  return (
    <>
      <Header>
        <HeaderNav showBack showCart showHome>
          예약
        </HeaderNav>
      </Header>
      <main className='mt-12'>
        {registerOrderItemsData?.registerOrderItems.map((data, index) => (
          <ReservationItem
            key={index}
            productName={data.productName}
            roomName={data.roomName}
            day={data.day}
            checkInDate={data.checkInDate}
            checkOutDate={data.checkOutDate}
            checkInTime={data.checkInTime}
            checkOutTime={data.checkOutTime}
            baseGuestCount={data.baseGuestCount}
            maxGuestCount={data.maxGuestCount}
            price={data.price}
          />
        ))}
        <form onSubmit={handlePaymentSubmit}>
          <UserInformation onUserInfoChange={handleUserInfoChange} />
          <div className='mt-8  bg-white p-8 '>
            <p className='font-bold'>결제 금액</p>
            <div className='flex justify-between'>
              <p className='mt-2 font-bold '>상품 금액</p>
              <p>
                {' '}
                {new Intl.NumberFormat().format(
                  registerOrderItemsData?.totalPrice as number
                )}
                원
              </p>
            </div>
            <div className='border-darkGray mt-6 w-full border-b-2 border-dotted'></div>
            <div className='my-8'>
              <p className='my-4'> 결제수단</p>
              <div className='flex justify-between'>
                <button
                  onClick={() => handleButtonClick('CARD')}
                  type='button'
                  className={
                    selectorPayment === 'CARD'
                      ? 'border-mainButton text-mainButton flex items-center  rounded-md border border-solid px-36 py-2'
                      : 'border-mediumGray  flex items-center rounded-md border border-solid px-36 py-2'
                  }
                >
                  카드
                </button>
                <button
                  onClick={() => handleButtonClick('CASH')}
                  type='button'
                  className={
                    selectorPayment === 'CASH'
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
              {new Intl.NumberFormat().format(
                registerOrderItemsData?.totalPrice as number
              )}
              원 결제하기
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
      <Footer />
    </>
  );
};

export default Reservation;

interface RegisterOrderItemsData {
  orderToken: string;
  totalPrice: number;
  name: string;
  phone: string;
  registerOrderItems: RegisterOrderItems[];
}

interface RegisterOrderItems {
  productId: number;
  productName: string;
  imageUrl: string;
  roomId: number;
  roomName: string;
  guestCount: number;
  maxGuestCount: number;
  baseGuestCount: number;
  price: number;
  day: number;
  checkInTime: string;
  checkInDate: string;
  checkOutTime: string;
  checkOutDate: string;
}

interface FormElements extends HTMLFormElement {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

interface FormTarget extends React.FormEvent<HTMLFormElement> {
  target: FormElements;
}

export interface UserData {
  userName: string;
  userPhone: string;
}

interface Props {
  params: Params;
}

interface Params {
  orderToken: string;
}
