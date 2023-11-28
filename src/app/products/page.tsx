'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import Header from '@/components/common/Header';
import HeaderNav from '@/components/common/HeaderNav';
import Dropdown from '@/components/products/Dropdown';
import YourItemComponent from '@/components/products/YourItemComponent';

interface product {
  // 이렇게 받아올 거임
  id: number;
  name: string;
  imageUrl: string;
  minPrice: number;
}

export interface Option {
  label: string;
  areaCode?: string;
}

const dropdownOptions = [
  { label: '전국' },
  { label: '서울', areaCode: '서울특별시' },
  { label: '인천', areaCode: '인천광역시' },
  { label: '대전', areaCode: '대전광역시' },
  { label: '대구', areaCode: '대구광역시' },
  { label: '광주', areaCode: '광주광역시' },
  { label: '부산', areaCode: '부산광역시' },
  { label: '울산', areaCode: '울산광역시' },
  { label: '세종', areaCode: '세종특별자치시' },
  { label: '경기', areaCode: '경기도' },
  { label: '강원', areaCode: '강원특별자치도' },
  { label: '충북', areaCode: '충청북도' },
  { label: '충남', areaCode: '충청남도' },
  { label: '경북', areaCode: '경상북도' },
  { label: '경남', areaCode: '경상남도' },
  { label: '전북', areaCode: '전라북도' },
  { label: '전남', areaCode: '전라남도' },
  { label: '제주', areaCode: '제주특별자치도' },
  // 다른 지역들도 추가
];

const ProductPage = () => {
  //   const router = useRouter();
  const pathname = usePathname(); // /products
  const [location, setLocation] = useState<string | null>(null); // 선택된 지역을 저장할 state
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
  }, [apiUrl, searchParams, location]);

  // 데이터가 로딩 중일 때의 화면을 표시합니다.
  if (!data) {
    const location = searchParams.get('location'); // 없다면 null
    const category = searchParams.get('category'); // 없다면 null
    return (
      <>
        <Header>
          <HeaderNav showBack showCart showMyPage>
            {' '}
          </HeaderNav>
        </Header>
        <main className='flex flex-col items-center justify-center bg-white py-[3rem]'>
          <h1 className='m-10 text-lg'>
            <span className='font-bold'>{location}</span>에 있는{' '}
            <span className='font-bold'>{category}</span> 불러오는 중....🏠
          </h1>
        </main>
      </>
    );
  }

  const handleLocationChange = (option: Option | null) => {
    // 선택된 지역이 변경될 때마다 state를 업데이트하고 URL을 업데이트합니다.
    setLocation(option?.areaCode || null);

    const newParams = new URLSearchParams(searchParams.toString()); // 기존 쿼리 파라미터를 복사합니다.
    newParams.set('location', option?.areaCode || ''); // location 파라미터를 설정합니다.

    // URL 업데이트 로직 추가
    const newUrl = `${pathname}?${newParams.toString()}`;
    window.history.replaceState(null, '', newUrl);

    window.location.reload();
  };

  return (
    <>
      <Header>
        <HeaderNav showBack showCart showMyPage>
          {' '}
        </HeaderNav>
      </Header>
      <main className='flex flex-col items-center justify-center bg-white py-[3rem]'>
        <h1 className='m-5 text-lg'>어디로 갈까요?</h1>
        <Dropdown
          options={dropdownOptions}
          selectedOption={
            dropdownOptions.find((option) => option.areaCode === location) || {
              label: '전국',
            }
          } // 'location'이 'undefined'일 때 기본값으로 { label: '전국' }를 제공합니다.
          onSelectOption={(option: Option | null) =>
            handleLocationChange(option)
          }
        />{' '}
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
