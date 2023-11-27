import React from 'react';
import ReservationConfirm from './ReservationConfirm';
import { IoIosArrowForward } from 'react-icons/io';
import ReservationRouter from './ReservationRouter';

const ReservationConfirmContainer = ({
  orderId,
  createdDate,
  orderItems,
  isDate,
}) => {
  return (
    <div className='border-mediumGray mx-10 my-4 items-center justify-center rounded-md border border-solid py-2'>
      {isDate && (
        <div className='border-mediumGray flex items-center justify-between border-b-2 px-8'>
          <div className='text-xl font-bold'>{createdDate}</div>
          <ReservationRouter orderId={orderId} />
        </div>
      )}
      {orderItems.map((orderItem, orderItemIndex) => (
        <ReservationConfirm
          key={orderItemIndex}
          orderId={orderId}
          orderItemId={orderItem.orderItemId}
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

// interface Order {
//   orderId: number;
//   createdDate: number;
//   orderItems: OrderItem[];
// }

// interface OrderItem {
//   orderId: number;
//   orderItemId: number;
//   productId: number;
//   roomId: number;
//   productName: string;
//   imageUrl: string;
//   roomName: string;
//   baseGuestCount: number;
//   maxGuestCount: number;
//   checkInDate: string;
//   checkInTime: string;
//   checkOutDate: string;
//   checkOutTime: string;
// }
