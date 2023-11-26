import React from 'react';
import ReservationConfirm from './ReservationConfirm';
import { IoIosArrowForward } from 'react-icons/io';

const ReservationConfirmContainer = ({ orderId, createdDate, orderItems }) => {
  return (
    <div className='border-mediumGray m-8 items-center justify-center rounded-md border border-solid py-2'>
      <div className='border-mediumGray flex items-center justify-between border-b-2 px-8'>
        <div className='text-2xl font-bold'>{createdDate}</div>
        <button className='m-4 flex items-center justify-center'>
          <p className='mr-2 text-2xl'>상세보기</p>
          <IoIosArrowForward />
        </button>
      </div>
      {orderItems.map((orderItem, orderItemIndex) => (
        <ReservationConfirm
          key={orderItemIndex}
          orderId={orderItem.orderItemId}
          productName={orderItem.productName}
          roomName={orderItem.roomName}
          imageUrl={orderItem.imageUrl}
          checkInDate={orderItem.checkInDate}
          checkOutDate={orderItem.checkOutDate}
          checkInTime={orderItem.checkInTime}
          checkOutTime={orderItem.checkOutTime}
          baseGuestCount={orderItem.baseGuestCount}
          maxGuestCount={orderItem.maxGuestCount}
          isLastItem={orderItemIndex === orderItems.length - 1}
        />
      ))}
    </div>
  );
};

export default ReservationConfirmContainer;

interface Order {
  orderId: number;
  createdDate: number;
  orderItems: OrderItem[];
}

interface OrderItem {
  orderId: number;
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
}
