import React from 'react';

import ReservationConfirm from './ReservationConfirm';
import ReservationRouter from './ReservationRouter';

const ReservationConfirmContainer = ({
  orderId,
  reserveDate,
  orderItems,
  isDate,
}: ReservationConfirmContainerData) => (
  <div className='border-mediumGray mx-10 my-4 items-center justify-center rounded-md border border-solid py-2'>
    {isDate && (
      <div className='border-mediumGray flex items-center justify-between border-b-2 px-8'>
        <div className='text-xl font-bold'>{reserveDate}</div>
        <ReservationRouter orderId={orderId} />
      </div>
    )}
    {orderItems?.map((orderItem, orderItemIndex) => (
      <ReservationConfirm
        key={orderItemIndex}
        orderId={orderId}
        orderItemId={orderItem.orderItemId}
        productName={orderItem.productName}
        roomName={orderItem.roomName}
        imageUrl={orderItem.imageUrl}
        day={orderItem.day}
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

export default ReservationConfirmContainer;

interface ReservationConfirmContainerData {
  orderId: number;
  orderItems: ReservationOrderItem[];
  isDate: boolean;
  reserveDate: string;
}

interface ReservationOrderItem {
  orderItemId: number;
  productId: number;
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
