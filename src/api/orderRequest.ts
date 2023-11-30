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

  getOrderToken: (orderToken) =>
    fetch(`${url}/orders?orderToken=${orderToken}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(responseBody),

  postPayment: (paymentData) =>
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
};

export default orderRequest;
