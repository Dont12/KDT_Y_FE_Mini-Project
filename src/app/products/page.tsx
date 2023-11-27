'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import Header from '@/components/common/Header';
import HeaderNav from '@/components/common/HeaderNav';
import YourItemComponent from '@/components/products/YourItemComponent';

interface product {
  // 이렇게 받아올 거임
  id: number;
  name: string;
  imageUrl: string;
  minPrice: number;
}

const ProductPage = () => {
  //   const router = useRouter();
  const pathname = usePathname(); // /products
  const searchParams = useSearchParams();

  // 이 부분에서 오늘과 내일의 날짜를 생성하는 로직이 들어갑니다.
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const formattedToday = today.toISOString().split('T')[0];
  const formattedTomorrow = tomorrow.toISOString().split('T')[0];

  // API 요청을 보낼 주소
  const apiUrl = `https://mock.stayinn.site/v1/products?checkIn=${formattedToday}&checkOut=${formattedTomorrow}`;

  // API에서 받아온 데이터를 저장할 state
  const [data, setData] = useState<{ data: product[] } | null>(null);

  useEffect(() => {
    const location = searchParams.get('location'); // 없다면 null
    const category = searchParams.get('category'); // 없다면 null

    // category나 location이 변경되면 API 요청을 보냅니다.
    if (category || location) {
      const query = [];

      if (category) {
        query.push(`category=${category}`);
      }

      if (location) {
        query.push(`areaCode=${location}`);
      }

      // API 요청 주소에 category나 location이 포함된 경우 추가합니다.
      const fullUrl = `${apiUrl}&${query.join('&')}`;
      console.log(fullUrl);

      // fetch를 사용하여 API에 요청을 보내고 데이터를 받아옵니다.
      fetch(fullUrl)
        .then((response) => response.json())
        .then((result) => {
          console.log(result); // API 응답을 기록
          setData(result); // 데이터를 받아와서 상태를 업데이트한다.
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [apiUrl, searchParams]);

  // 데이터가 로딩 중일 때의 화면을 표시합니다.
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header>
        <HeaderNav showBack showCart showMyPage>
          {' '}
        </HeaderNav>
      </Header>
      <main className='flex flex-col items-center justify-center bg-white py-[3rem]'>
        <h1 className='m-5 text-lg'>어디로 갈까요?</h1>
        {/* <Dropdown
          options={dropdownOptions}
          selectedOption={selectedLocation}
          onSelectOption={handleLocationChange}
        /> */}
        <hr className='my-8 w-full border-t' />
        <div>
          <div className='grid grid-cols-2 gap-4 '>
            {data.data.map((item) => (
              <YourItemComponent
                key={item.id}
                name={item.name}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductPage;
