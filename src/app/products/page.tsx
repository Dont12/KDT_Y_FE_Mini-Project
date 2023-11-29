'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import Header from '@/components/common/Header';
import HeaderNav from '@/components/common/HeaderNav';
import DropdownCategory from '@/components/products/DropdownCategory';
import DropdownLocation from '@/components/products/DropdownLocation';
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
  category?: string;
  location?: string;
}

const dropdownCategoryOptions = [
  { label: '전체' },
  { label: '호텔', category: '관광호텔' },
  { label: '펜션', category: '펜션' },
  { label: '모텔', category: '모텔' },
  { label: '게스트하우스', category: '게스트하우스' },
  { label: '콘도', category: '콘도미니엄' },
  { label: '유스호스텔', category: '유스호스텔' },
  { label: '민박', category: '민박' },
  { label: '홈스테이', category: '홈스테이' },
  { label: '서비스드레지던스', category: '서비스드레지던스' },
  { label: '한옥', category: '한옥' },
];

const dropdownLocationOptions = [
  { label: '전국' },
  { label: '서울', location: '서울특별시' },
  { label: '인천', location: '인천광역시' },
  { label: '대전', location: '대전광역시' },
  { label: '대구', location: '대구광역시' },
  { label: '광주', location: '광주광역시' },
  { label: '부산', location: '부산광역시' },
  { label: '울산', location: '울산광역시' },
  { label: '세종', location: '세종특별자치시' },
  { label: '경기', location: '경기도' },
  { label: '강원', location: '강원특별자치도' },
  { label: '충북', location: '충청북도' },
  { label: '충남', location: '충청남도' },
  { label: '경북', location: '경상북도' },
  { label: '경남', location: '경상남도' },
  { label: '전북', location: '전라북도' },
  { label: '전남', location: '전라남도' },
  { label: '제주', location: '제주특별자치도' },
  // 다른 지역들도 추가
];

const ProductPage = () => {
  //   const router = useRouter();
  const pathname = usePathname(); // /products
  const [, setpickLocation] = useState<string | null>(null); // 선택된 지역을 저장할 state
  const [, setpickCategory] = useState<string | null>(null); // 선택된 지역을 저장할 state

  const searchParams = useSearchParams();

  // 이 부분에서 오늘과 내일의 날짜를 생성하는 로직이 들어갑니다.
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const formattedToday = today.toISOString().split('T')[0];
  const formattedTomorrow = tomorrow.toISOString().split('T')[0];

  // API 요청을 보낼 주소
  const apiUrl = `https://mock.stayinn.site/v1/products?checkIn=${formattedToday}&checkOut=${formattedTomorrow}`;

  const location = searchParams.get('location'); // 없다면 null
  const category = searchParams.get('category'); // 없다면 null

  // URL 매개변수를 기반으로 지역 초기 선택 옵션 초기화
  const initialSelectedLocationOption = dropdownLocationOptions.find(
    (option) => {
      if (location === null) {
        return { label: '전국' };
      } else {
        return option.location === location;
      }
    }
  ) || { label: '전국' }; // find가 undefined를 반환할 경우 기본값 설정

  // URL 매개변수를 기반으로 지역 초기 선택 옵션 초기화
  const initialSelectedCategoryOption = dropdownCategoryOptions.find(
    (option) => {
      if (category === null) {
        return { label: '전체' };
      } else {
        return option.category === category;
      }
    }
  ) || { label: '전체' }; // find가 undefined를 반환할 경우 기본값 설정

  // API에서 받아온 데이터를 저장할 state
  const [data, setData] = useState<{ data: product[] } | null>(null);
  const [selectedLocationOption, setSelectedLocationOption] = useState<Option>(
    initialSelectedLocationOption
  );
  const [selectedCategoryOption, setSelectedCategoryOption] = useState<Option>(
    initialSelectedCategoryOption
  );

  useEffect(() => {
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

      // console.log(fullUrl);

      // fetch를 사용하여 API에 요청을 보내고 데이터를 받아옵니다.
      fetch(fullUrl)
        .then((response) => response.json())
        .then((result) => {
          // console.log(result); // API 응답을 기록
          setData(result); // 데이터를 받아와서 상태를 업데이트한다.
        });
    }
  }, [apiUrl, searchParams, location, category]);

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
            <span className='font-bold'>{location ? location : '전국'}</span>에
            있는{' '}
            <span className='font-bold'>
              {category ? category : '전체 숙소'}
            </span>{' '}
            불러오는 중....🏠
          </h1>
        </main>
      </>
    );
  }

  const handleLocationChange = (option: Option | null) => {
    // 선택된 지역이 변경될 때마다 state를 업데이트하고 URL을 업데이트합니다.
    setpickLocation(option?.location || null);

    const newParams = new URLSearchParams(searchParams.toString()); // 기존 쿼리 파라미터를 복사합니다.
    newParams.set('location', option?.location || ''); // location 파라미터를 설정합니다.

    // URL 업데이트 로직 추가
    const newUrl = `${pathname}?${newParams.toString()}`;
    window.history.replaceState(null, '', newUrl);

    window.location.reload();
  };

  const handleCategoryChange = (option: Option | null) => {
    // 선택된 숙소 종류가 변경될 때마다 state를 업데이트하고 URL을 업데이트합니다.
    setpickCategory(option?.category || null);

    const newParams = new URLSearchParams(searchParams.toString()); // 기존 쿼리 파라미터를 복사합니다.
    newParams.set('category', option?.category || ''); // category 파라미터를 설정합니다.

    // URL 업데이트 로직 추가
    const newUrl = `${pathname}?${newParams.toString()}`;
    window.history.replaceState(null, '', newUrl);

    window.location.reload();
  };

  return (
    <>
      <Header>
        <HeaderNav showBack showCart showMyPage>
          <DropdownCategory
            options={dropdownCategoryOptions}
            selectedOption={selectedCategoryOption}
            onSelectOption={(option: Option | null) => {
              handleCategoryChange(option);
              // 선택된 옵션 상태를 업데이트합니다.
              setSelectedCategoryOption(
                option || initialSelectedLocationOption
              );
            }}
          />
        </HeaderNav>
      </Header>
      <main className='flex flex-col items-center justify-center bg-white py-[3rem]'>
        <h1 className='m-5 text-lg'>어디로 갈까요?</h1>
        <DropdownLocation
          options={dropdownLocationOptions}
          selectedOption={selectedLocationOption}
          onSelectOption={(option: Option | null) => {
            handleLocationChange(option);
            // 선택된 옵션 상태를 업데이트합니다.
            setSelectedLocationOption(option || initialSelectedLocationOption);
          }}
        />
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
