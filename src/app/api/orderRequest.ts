const url = 'https://mock.stayinn.site/v1';

const responseBody = (res: Response) => res.json();

interface pushOrderListProps {
  productId: string;
  roomId: string;
  checkInDate: string;
  checkInTime: string;
  checkOutDate: string;
  checkOutTime: string;
  guestCount: string;
  price: string;
}

const orderRequest = {
  getOrderList: () =>
    fetch(`${url}/orders/history?page=1&pageSize=10`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(responseBody),

  getOrderListDetail: ({ orderId }: any) =>
    fetch(`${url}/orders/history/${orderId}`, {
      method: 'GET',
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
  }: pushOrderListProps) =>
    fetch(`${url}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId: { productId },
        roomId: { roomId },
        checkInDate: { checkInDate },
        checkInTime: { checkInTime },
        checkOutDate: { checkOutDate },
        checkOutTime: { checkOutTime },
        guestCount: { guestCount },
        price: { price },
      }),
    }).then(responseBody),
};

export default orderRequest;
