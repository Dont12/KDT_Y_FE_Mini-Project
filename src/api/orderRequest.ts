import { PushOrderListProps } from '@/@types/order.types';

const url = 'https://api.stayinn.site/v1';

const responseBody = (res: Response) => res.json();

const orderRequest = {
  getOrderList: () =>
    fetch(`${url}/orders/history?page=1&pageSize=10`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(responseBody),

  getOrderListDetail: (orderId: number) =>
    fetch(`${url}/orders/history/${orderId}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(responseBody),

  getOrderToken: (orderToken: any) =>
    fetch(`${url}/orders?orderToken=${orderToken}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(responseBody),

  postPayment: (paymentData: any) =>
    fetch(`${url}/orders/payment`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    }).then(responseBody),

  getUserInfo: () =>
    fetch(`${url}/users`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(responseBody),

  pushOrderElement: ({
    productId,
    roomId,
    checkInDate,
    checkInTime,
    checkOutDate,
    checkOutTime,
    guestCount,
    price,
  }: PushOrderListProps) =>
    fetch(`${url}/orders`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        registerOrderItems: [
          {
            productId,
            roomId,
            checkInDate,
            checkInTime,
            checkOutDate,
            checkOutTime,
            guestCount,
            price,
          },
        ],
      }),
    }).then(responseBody),
};

export default orderRequest;
