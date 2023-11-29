const url = 'https://mock.stayinn.site/v1';

const responseBody = (res: Response) => res.json();

const cartRequest = {
  getCartList: (page: number, pageSize: number) =>
    fetch(`${url}/carts?page=${page}&pageSize=${pageSize}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(responseBody),

  deleteCarts: (cartIdList: string[]) =>
    fetch(`${url}/carts`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cartIds: cartIdList }),
    }).then(responseBody),

  reserveCarts: (cartIdList: string[]) =>
    fetch(`${url}/carts/order`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cartIds: cartIdList }),
    }).then(responseBody),
};

export default cartRequest;
