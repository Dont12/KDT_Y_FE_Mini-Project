'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { Header, HeaderNav } from '@/components/common/header';
import DropdownCategory, {
  dropdownCategoryOptions,
} from '@/components/products/DropdownCategory';
import DropdownLocation, {
  dropdownLocationOptions,
} from '@/components/products/DropdownLocation';
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

const ProductPage = () => {
  const pathname = usePathname(); // /products
  const [, setpickLocation] = useState<string | null>(null); // 선택된 지역을 저장할 state
  const [, setpickCategory] = useState<string | null>(null); // 선택된 지역을 저장할 state

  const searchParams = useSearchParams();

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadMoreData = async () => {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      // 새로운 페이지 파라미터를 사용하여 API URL을 업데이트합니다.
      const nextPageUrl = `${apiUrl}&page=${page + 1}&pageSize=10`;

      console.log('Next Page URL:', nextPageUrl); // 로그 추가

      const response = await fetch(nextPageUrl);
      const newData = await response.json();

      // 새로운 데이터로 상태를 업데이트합니다.
      setData((prevData) => ({
        data: [...(prevData?.data ?? []), ...newData.data],
      }));

      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      /* empty */
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // 사용자가 컨테이너의 맨 아래로 스크롤했는지 확인
      if (
        containerRef.current &&
        containerRef.current.scrollTop + containerRef.current.clientHeight >=
          containerRef.current.scrollHeight - 100 // 이 임계값을 조절할 수 있습니다
      ) {
        // 사용자가 맨 아래로 스크롤했을 때 더 많은 데이터를 불러옵니다.
        loadMoreData();
      }
    };

    // 컨테이너에 스크롤 이벤트 리스너를 추가합니다.
    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      // 컴포넌트가 언마운트될 때 스크롤 이벤트 리스너를 제거합니다.
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [loadMoreData]);

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
      const fullUrl = `${apiUrl}&${query.join('&')}&page=${page}&pageSize=10`;

      console.log('Full URL:', fullUrl); // 로그 추가

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
                id={item.id}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductPage;
