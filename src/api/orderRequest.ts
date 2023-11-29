import { PaymentData } from '@/@types/reservation.types';

const url = 'https://mock.stayinn.site/v1';

const responseBody = (res: Response) => res.json();

type orderId = {
  orderId: number;
  orderToken: string;
};

const orderRequest = {
  getOrderList: () =>
    fetch(`${url}/orders/history?page=1&pageSize=10`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(responseBody),

  getOrderListDetail: ({ orderId }: orderId) =>
    fetch(`${url}/orders/history/${orderId}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(responseBody),

  getOrderToken: ({ orderToken }: orderId) =>
    fetch(`${url}/orders?orderToken=${orderToken}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(responseBody),

  postPayment: ({ paymentData }: PaymentData) =>
    fetch(`${url}/orders/payment`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    }).then(responseBody),
};

export default orderRequest;
