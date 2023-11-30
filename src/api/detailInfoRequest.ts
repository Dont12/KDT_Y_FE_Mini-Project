import { DetailProps } from '@/@types/detail.types';

const url = 'https://mock.stayinn.site/v1';

const responseBody = (res: Response) => res.json();

const detailInfoRequest = {
  getDetail: ({ id, checkIn, checkOut }: DetailProps) =>
    fetch(`${url}/products/${id}?checkIn=${checkIn}&checkOut=${checkOut}`, {
      method: 'GET',
      credentials: 'omit',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-cache',
    }).then(responseBody),
};

export default detailInfoRequest;
