// pages/[category]/page.tsx
'use client';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import Dropdown from '@/components/category/Dropdown';
import YourItemComponent from '@/components/category/YourItemComponent';
import Header from '@/components/common/Header';
import HeaderNav from '@/components/common/HeaderNav';

import { IconProps, mainIcons } from '@/app/page';

interface Accommodation {
  id: number;
  name: string;
  imageUrl: string;
  minPrice: number;
}

const CategoryPage = () => {
  const router = useRouter();
  const { category } = useParams();
  const [iconData, setIconData] = useState<IconProps | null>(null);
  const [accommodations, setAccommodations] = useState<Accommodation[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<{
    label: string;
  } | null>(null);

  const handleLocationChange = (
    location: { label: string; subLabel?: string } | null
  ) => {
    setSelectedLocation(location);

    // 선택된 지역을 기반으로 숙소를 가져오는 가상의 로직
    // setAccommodations(initialAccommodations);
  };

  useEffect(() => {
    console.log(mainIcons);
    if (category) {
      console.log(category);

      const categoryToUse = Array.isArray(category) ? category[0] : category;

      const matchingIcon = mainIcons.find((icon) => icon.category === category);
      console.log('matchingIcon:', matchingIcon);

      if (matchingIcon) {
        setIconData(matchingIcon);

        fetch(
          `https://mock.stayinn.site/v1/products?checkIn=2010-01-01&checkOut=2010-01-02&category=${encodeURIComponent(
            categoryToUse
          )}`
        )
          .then((response) => response.json())
          .then((data) => {
            setAccommodations(data.data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
            setAccommodations([]);
          });
      } else {
        console.error('No matching icon found for category:', category);
        setIconData(null);
        setAccommodations([]);
      }
    }
  }, [category]);

  if (!category) {
    return <div>Loading...</div>;
  }

  // // mainIcons 배열에서 category에 해당하는 아이콘을 찾기
  // const iconData: IconProps | undefined = mainIcons.find(
  //   (icon) => icon.category === category
  // );

  if (!iconData) {
    return <div>Category not found</div>;
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
        <div>
          <div className='grid grid-cols-2 gap-4 '>
            {accommodations.map((accommodation) => (
              <YourItemComponent
                key={accommodation.id}
                name={accommodation.name}
                imageUrl={accommodation.imageUrl}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default CategoryPage;
