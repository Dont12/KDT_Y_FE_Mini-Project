import { DetailProps } from '@/@types/detail.types';

const url = 'https://api.stayinn.site/v1';

const responseBody = (res: Response) => res.json();

const detailInfoRequest = {
  getDetail: ({ id, checkIn, checkOut }: DetailProps) =>
    fetch(`${url}/products/${id}?checkIn=${checkIn}&checkOut=${checkOut}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(responseBody),
};

export default detailInfoRequest;
