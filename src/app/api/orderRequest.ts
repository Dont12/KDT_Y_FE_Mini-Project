const url = 'https://mock.stayinn.site/v1';

const responseBody = (res: Response) => res.json();

const orderRequest = {
  getOrderList: () => {
    const res = fetch(`${url}/orders/history?page=1&pageSize=10`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(responseBody);

    return res;
  },

  getOrderListDetail: ({ orderId }) => {
    const res = fetch(`${url}/orders/history/${orderId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(responseBody);
    return res;
  },
};

export default orderRequest;
