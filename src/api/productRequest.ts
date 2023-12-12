import todayTomorrow from '@/utils/todayTomorrow';

const url = 'https://api.stayinn.site/v1';

const responseBody = (res: Response) => res.json();

const formattedToday = todayTomorrow.formatDate(todayTomorrow.today);
const formattedTomorrow = todayTomorrow.formatDate(todayTomorrow.tomorrow);

const productRequest = {
  getPensions: (location: string) =>
    fetch(
      `${url}/products?checkIn=${formattedToday}&checkOut=${formattedTomorrow}&category=펜션&areaCode=${encodeURIComponent(
        location
      )}&page=0&pageSize=10`,
      {
        method: 'GET',
        credentials: 'omit',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(responseBody),

  getHotels: (location: string) =>
    fetch(
      `${url}/products?checkIn=${formattedToday}&checkOut=${formattedTomorrow}&category=관광호텔&areaCode=${encodeURIComponent(
        location
      )}&page=0&pageSize=10`,
      {
        method: 'GET',
        credentials: 'omit',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(responseBody),

  getProducts: (page: number, query: string[]) =>
    fetch(
      `${url}/products?checkIn=${formattedToday}&checkOut=${formattedTomorrow}&${query.join(
        '&'
      )}&page=${page}&pageSize=10`,
      {
        method: 'GET',
        credentials: 'omit',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(responseBody),
};

export default productRequest;
