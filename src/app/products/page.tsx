'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { Footer, Header, HeaderNav } from '@/components/common';
import {
  DropdownCategory,
  dropdownCategoryOptions,
  DropdownLocation,
  dropdownLocationOptions,
  ProductCard,
} from '@/components/products';

import { Option, product } from '@/@types/products.types';
import todayTomorrow from '@/utils/todayTomorrow';

const ProductPage = () => {
  const pathname = usePathname(); // /products
  const [, setpickLocation] = useState<string | null>(null); // 선택된 지역을 저장할 state
  const [, setpickCategory] = useState<string | null>(null); // 선택된 지역을 저장할 state

  const searchParams = useSearchParams();

  const [ref, inView] = useInView();
  const [page, setPage] = useState(0);

  const formattedToday = todayTomorrow.formatDate(todayTomorrow.today);
  const formattedTomorrow = todayTomorrow.formatDate(todayTomorrow.tomorrow);

  // API 요청을 보낼 주소
  const apiUrl = `https://api.stayinn.site/v1/products?checkIn=${formattedToday}&checkOut=${formattedTomorrow}`;

  const location = searchParams.get('location'); // 없다면 null
  const category = searchParams.get('category'); // 없다면 null

  // URL 매개변수를 기반으로 지역 초기 선택 옵션 초기화
  const initialSelectedLocationOption = dropdownLocationOptions.find(
    (option) => {
      if (location === null) {
        return { label: '전국' };
      }
      return option.location === location;
    }
  ) || { label: '전국' }; // find가 undefined를 반환할 경우 기본값 설정

  // URL 매개변수를 기반으로 지역 초기 선택 옵션 초기화
  const initialSelectedCategoryOption = dropdownCategoryOptions.find(
    (option) => {
      if (category === null) {
        return { label: '전체' };
      }
      return option.category === category;
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

  // 무한 스크롤
  const productFetch = () => {
    if (category !== undefined || location !== undefined) {
      const query = [];

      if (category) {
        query.push(`category=${category}`);
      }

      if (location) {
        query.push(`areaCode=${location}`);
      }

      const nextPageUrl = `${apiUrl}&${query.join(
        '&'
      )}&page=${page}&pageSize=10`;
      // console.log('Next Page URL:', nextPageUrl); // 로그 추가
      fetch(nextPageUrl, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((result) => {
          setData((prevData) => ({
            data: [...(prevData?.data ?? []), ...result.data],
          }));
          setPage((prevPage) => prevPage + 1);
        });
    }
  };

  useEffect(() => {
    // inView가 true 일때만 실행한다.
    if (inView) {
      productFetch();
    }
  }, [inView]);

  useEffect(() => {
    // category나 location이 변경되면 API 요청을 보냅니다.
    if (category !== undefined || location !== undefined) {
      const query = [];

      if (category) {
        query.push(`category=${category}`);
      }

      if (location) {
        query.push(`areaCode=${location}`);
      }

      // API 요청 주소에 category나 location이 포함된 경우 추가합니다.
      const fullUrl = `${apiUrl}&${query.join('&')}page=${page}&pageSize=10`;

      // fetch를 사용하여 API에 요청을 보내고 데이터를 받아옵니다.
      fetch(fullUrl, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((result) => {
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
            <span className='font-bold'>{location || '전국'}</span>에 있는{' '}
            <span className='font-bold'>{category || '전체 숙소'}</span>{' '}
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
              <ProductCard
                key={item.id}
                name={item.name}
                imageUrl={item.imageUrl}
                id={item.id}
              />
            ))}
            <div ref={ref} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
