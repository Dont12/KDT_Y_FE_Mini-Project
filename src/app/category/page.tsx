// pages/app/category/page.tsx
'use client';
import React, { useEffect, useState } from 'react';

import Header from '@/components/common/Header';
import HeaderNav from '@/components/common/HeaderNav';

// import InfiniteScroll from 'react-infinite-scroll-component';
import Dropdown from '../../components/category/Dropdown';
import YourItemComponent from '../../components/category/YourItemComponent';

const CategoryPage = () => {
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
        ],
      },
    ]);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Header>
        <HeaderNav showBack showCart showMyPage>
          {' '}
        </HeaderNav>
      </Header>
      <main className='flex flex-col items-center justify-center bg-white pt-[3rem]'>
        <h1 className='m-5 text-lg'>어디로 갈까요?</h1>
        <Dropdown
          options={[
            { label: '전국' },
            { label: '서울' },
            { label: '인천' },
            { label: '대전' },
            { label: '대구' },
            { label: '광주' },
            { label: '부산' },
            { label: '울산' },
            { label: '세종' },
            { label: '경기' },
            { label: '강원' },
            { label: '충북' },
            { label: '충남' },
            { label: '경북' },
            { label: '경남' },
            { label: '전북' },
            { label: '전남' },
            { label: '제주' },
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
            accommodations.length % 2 === 0
              ? 'justify-center'
              : 'justify-around'
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
      </main>
    </>
  );
};

export default CategoryPage;
