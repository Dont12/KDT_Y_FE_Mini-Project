import { PushCartProps } from '@/@types/cart.types';

const url = 'https://api.stayinn.site/v1';

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

  deleteCarts: () =>
    fetch(`${url}/carts`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(responseBody),

  pushCart: ({
    roomId,
    checkInDate,
    checkOutDate,
    guestCount,
  }: PushCartProps) =>
    fetch(url as string, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        roomId: { roomId },
        checkInDate: { checkInDate },
        checkOutDate: { checkOutDate },
        guestCount: { guestCount },
      }),
    }).then(responseBody),
};

export default cartRequest;
