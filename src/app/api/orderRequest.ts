const url = 'https://mock.stayinn.site/v1';

const responseBody = (res: Response) => res.json();

type PaymentData = {
  orderToken: string;
  userName: string;
  userPhone: string;
  totalPrice: number;
  payment: string;
};

type orderId = {
  orderId: number;
  orderToken: string;
};

const orderRequest = {
  getOrderList: () =>
    fetch(`${url}/orders/history?page=1&pageSize=10`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(responseBody),

  getOrderListDetail: ({ orderId }: orderId) =>
    fetch(`${url}/orders/history/${orderId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(responseBody),

  getOrderToken: ({ orderToken }) =>
    fetch(`${url}/orders?orderToken=${orderToken}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(responseBody),

  postPayment: ({ paymentData }) =>
    fetch(`${url}/orders/payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    }).then(responseBody),
};

export default orderRequest;
