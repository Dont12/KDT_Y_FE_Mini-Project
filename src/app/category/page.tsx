// pages/app/category/page.tsx
'use client';
import React, { useEffect, useState } from 'react';

import Header from '@/components/common/Header';
import HeaderNav from '@/components/common/HeaderNav';

// import InfiniteScroll from 'react-infinite-scroll-component';
import Dropdown from '../../components/category/Dropdown';
import YourItemComponent from '../../components/category/YourItemComponent';

const CategoryPage: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<{
    label: string;
    subLabel?: string;
  } | null>(null);
  const [accommodations, setAccommodations] = useState<any[]>([]); // 여기에 숙소 데이터를 저장하는 상태 추가
  const [hasMore, setHasMore] = useState(true);

  const loadMoreAccommodations = () => {
    // 실제 시나리오에서는 백엔드에서 더 많은 숙소를 가져와
    // 상태를 업데이트하면 됩니다. (setAccommodations([...현재숙소, ...새로운숙소]))
    // 더 이상 가져올 숙소가 없을 때 hasMore를 false로 설정
  };

  const handleLocationChange = (
    location: { label: string; subLabel?: string } | null
  ) => {
    setSelectedLocation(location);

    // 선택된 지역을 기반으로 숙소를 가져오는 가상의 로직
    // setAccommodations(initialAccommodations);
  };

  useEffect(() => {
    // 초기 로딩 시에 숙소 데이터를 가져오는 로직
    setAccommodations([
      {
        Option: '서울',
        subOptions: '강남구',
        pensions: [
          {
            name: '서울 호텔 1',
            rating: 4.5,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 2',
            rating: 4.0,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 3',
            rating: 4.5,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 4',
            rating: 4.0,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 1',
            rating: 4.5,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 2',
            rating: 4.0,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 3',
            rating: 4.5,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 4',
            rating: 4.0,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 1',
            rating: 4.5,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 2',
            rating: 4.0,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 3',
            rating: 4.5,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 4',
            rating: 4.0,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 1',
            rating: 4.5,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 2',
            rating: 4.0,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 3',
            rating: 4.5,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 4',
            rating: 4.0,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 3',
            rating: 4.5,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 4',
            rating: 4.0,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 3',
            rating: 4.5,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 4',
            rating: 4.0,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 3',
            rating: 4.5,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 4',
            rating: 4.0,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 3',
            rating: 4.5,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 4',
            rating: 4.0,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 3',
            rating: 4.5,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 4',
            rating: 4.0,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 3',
            rating: 4.5,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 4',
            rating: 4.0,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 4',
            rating: 4.0,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 3',
            rating: 4.5,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 4',
            rating: 4.0,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 4',
            rating: 4.0,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 3',
            rating: 4.5,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 4',
            rating: 4.0,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 4',
            rating: 4.0,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 3',
            rating: 4.5,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 4',
            rating: 4.0,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 4',
            rating: 4.0,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 3',
            rating: 4.5,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 4',
            rating: 4.0,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 4',
            rating: 4.0,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 3',
            rating: 4.5,
            image: 'svg/mainIcon/motel.svg',
          },
          {
            name: '서울 호텔 4',
            rating: 4.0,
            image: 'svg/mainIcon/motel.svg',
          },
        ],
      },
    ]);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className='flex flex-col items-center justify-center bg-white'
      style={{ paddingTop: '3.5rem' }}
    >
      <Header>
        <HeaderNav showBack showCart showMyPage>
          {' '}
        </HeaderNav>
      </Header>
      <h1 className='m-5 text-lg'>어디로 갈까요?</h1>
      <Dropdown
        options={[
          { label: '전국' },
          {
            label: '서울',
            subOptions: [
              '서울 전체',
              '강남구',
              '강동구',
              '강북구',
              '강서구',
              '관악구',
              '광진구',
              '구로구',
              '금천구',
              '기타지역',
              '노원구',
              '도봉구',
              '동대문구',
              '동작구',
              '마포구',
              '서대문구',
              '서초구',
              '성동구',
              '성북구',
              '송파구',
              '양천구',
              '영등포구',
              '용산구',
              '은평구',
              '종로구',
              '종로',
              '중랑구',
            ],
          },
          {
            label: '경기',
            subOptions: [
              '경기 전체',
              '가평군',
              '고양시',
              '과천시',
              '광명시',
              '광주시',
              '구리시',
              '군포시',
              '김포시',
              '남양주시',
              '동두천시',
              '부천시',
              '성남시',
              '수원시',
              '시흥시',
              '안산시',
              '안성시',
              '안양시',
              '양주시',
              '양평군',
              '여주시',
              '연천군',
              '오산시',
              '용인시',
              '의왕시',
              '의정부시',
              '이천시',
              '파주시',
              '평택시',
              '포천시',
              '하남시',
              '화성시',
            ],
          },
          // 다른 지역들도 추가
        ]}
        selectedOption={selectedLocation}
        onSelectOption={handleLocationChange}
      />
      <hr className='my-8 w-full border-t' />
      {/* <InfiniteScroll
        dataLength={accommodations.length}
        next={loadMoreAccommodations}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      > */}
      <div
        className={`ml-20 ${
          accommodations.length % 2 === 0 ? 'justify-center' : 'justify-around'
        }`}
      >
        {accommodations.map((category, index) => (
          <div key={index}>
            <div className='mb-4 ml-8 mt-4 text-lg font-bold'>
              {category.subOptions}
            </div>
            <div className='grid grid-cols-2 gap-4'>
              {category.pensions.map((item: any, i: number) => (
                <YourItemComponent key={i} {...item} />
              ))}
              {/* {accommodations.length % 2 !== 0 &&
              index === accommodations.length - 1 && (
                <div className='w-full'></div>
              )} */}
            </div>
          </div>
        ))}
      </div>
      {/* </InfiniteScroll> */}
    </div>
  );
};

export default CategoryPage;
