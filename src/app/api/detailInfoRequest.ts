const url = 'https://mock.stayinn.site/v1';

interface DetailProps {
  id: string;
  checkIn: string;
  checkOut: string;
}

const responseBody = (res: Response) => res.json();

const detailInfoRequest = {
  getDetail: async ({ id, checkIn, checkOut }: DetailProps) => {
    const response = await fetch(
      `${url}/products/${id}?checkIn=${checkIn}&checkOut=${checkOut}`,
      {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(responseBody);

    return response;
  },
};

export default detailInfoRequest;
