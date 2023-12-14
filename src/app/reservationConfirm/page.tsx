'use client';

import React, { useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

import { Footer, Header, HeaderNav } from '@/components/common';
import { ReservationConfirmContainer } from '@/components/reservation';

import orderRequest from '@/api/orderRequest';

const ReservationConfirm = () => {
  const [orderList, setOrderList] = useState<OrderHistoriesData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedPeriod, setSelectedPeriod] = useState<string>('최근 3개월');

  const fetchMoreData = async () => {
    try {
      setLoading(true);
      const response = await orderRequest.getOrderList(page, 10);
      const newOrderList = await response.data.orderHistories;
      const totalPage = await response.data.totalPages;
      setTotalPages(totalPage);
      console.log(totalPage);
      setOrderList((prevOrderList) => [...prevOrderList, ...newOrderList]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMoreData();
    console.log(page);
  }, [page]);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (
      scrollTop + clientHeight >= scrollHeight - 20 &&
      !loading &&
      page < totalPages!
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page, totalPages]);

  return (
    <div className='mx-auto min-h-screen max-w-3xl bg-white'>
      <Header>
        <HeaderNav showBack showCart showHome>
          국내 여행 예약 내역
        </HeaderNav>
      </Header>
      <main className='mt-12'>
        <div className='relative flex'>
          <button className='border-mediumGray mx-10 mt-6 flex w-40 items-center justify-center rounded-md border border-solid px-5 py-1 '>
            <p className='tex-2xl'>최근 6개월</p>
          </button>
        </div>
        {orderList?.map((order, orderIndex) => (
          <ReservationConfirmContainer
            key={orderIndex}
            orderId={order.orderId}
            reserveDate={order.reserveDate}
            orderItems={order.orderItems}
            isDate={true}
          />
        ))}

        <p className='text-mediumGray ml-10 mt-28 text-xs'>
          xx 예약내역은 최대 2년까지 조회할 수 있으며, 삭제하신 내역은 노출되지
          않습니다.
        </p>
        <p className='ml-10 mr-10 mt-2 text-xs  text-gray-300'>
          (주)야놀자는 통신판매중개업자로서, 통신 판매자 당사자가 아니라는
          사실을 고지하며 상품의 결제, 이용 및 환불 등과 관련한 의무와 책임은 각
          판매자에게 있습니다.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default ReservationConfirm;

interface OrderHistoriesData {
  orderId: number;
  reserveDate: string;
  orderItems: OrderItem[];
}

interface OrderItem {
  orderItemId: number;
  productId: number;
  roomId: number;
  productName: string;
  imageUrl: string;
  roomName: string;
  day: number;
  baseGuestCount: number;
  maxGuestCount: number;
  checkInDate: string;
  checkInTime: string;
  checkOutDate: string;
  checkOutTime: string;
}
