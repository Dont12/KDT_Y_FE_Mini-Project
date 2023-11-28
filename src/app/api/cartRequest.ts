const url = 'https://mock.stayinn.site/v1/carts';

const responseBody = (res: Response) => res.json();

interface PushCartProps {
  roomId: string;
  checkInDate: string;
  checkOutDate: string;
  guestCount: string;
}

const CartRequest = {
  pushCart: ({
    roomId,
    checkInDate,
    checkOutDate,
    guestCount,
  }: PushCartProps) =>
    fetch(url, {
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

export default CartRequest;
