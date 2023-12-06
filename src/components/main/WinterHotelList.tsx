// WinterHotelList.tsx
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';

interface Hotel {
  id: number;
  name: string;
  imageUrl: string;
  minPrice: number;
}

const WinterHotelList = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(
    '서울특별시'
  );

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const formattedToday = today.toISOString().split('T')[0];
  const formattedTomorrow = tomorrow.toISOString().split('T')[0];

  const fetchData = async (location: string) => {
    try {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      const apiUrl = `https://api.stayinn.site/v1/products?checkIn=${
        today.toISOString().split('T')[0]
      }&checkOut=${
        tomorrow.toISOString().split('T')[0]
      }&category=관광호텔&areaCode=${location}&page=1&pageSize=8`;

      const response = await fetch(apiUrl, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(
          `데이터를 불러오는 중 오류가 발생했습니다: ${response.statusText}`
        );
      }

      const data = await response.json();
      setHotels(data.data);

      // 지역을 변경할 때마다 스크롤을 맨 앞으로 이동
      setStartIndex(0);

      // 선택된 지역 업데이트
      setSelectedLocation(location);
    } catch (error) {
      console.error('알 수 없는 오류가 발생했습니다');
    }
  };

  // 서울, 경기, 인천, 부산
  useEffect(() => {
    fetchData('서울특별시');
  }, []);

  const showNextGroup = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 2, hotels.length - 1));
  };

  const showPrevGroup = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 2, 0));
  };

  return (
    <>
      {/* 네비게이션 바 */}
      <nav className='mb-2 flex justify-evenly border-b border-t text-xs'>
        <div
          onClick={() => fetchData('서울특별시')}
          className={`mr-4 cursor-pointer p-3 ${
            selectedLocation === '서울특별시' ? 'border-b-2 border-black' : ''
          }`}
        >
          서울
        </div>
        <div
          onClick={() => fetchData('부산광역시')}
          className={`mr-4 cursor-pointer p-3 ${
            selectedLocation === '부산광역시' ? 'border-b-2 border-black' : ''
          }`}
        >
          부산
        </div>
        <div
          onClick={() => fetchData('강원특별자치도')}
          className={`mr-4 cursor-pointer p-3 ${
            selectedLocation === '강원특별자치도'
              ? 'border-b-2 border-black'
              : ''
          }`}
        >
          강원
        </div>
      </nav>

      <div className='flex'>
        <button onClick={showPrevGroup}>
          <CgChevronLeft className='text-gray1 text-2xl' />
        </button>

        {/* 호텔 목록 표시 */}
        <div className='overflow-hidden whitespace-nowrap py-4'>
          <div
            className='flex transform space-x-4 transition-transform duration-300 ease-in-out'
            style={{ transform: `translateX(-${startIndex * 30}%)` }}
          >
            {hotels.map((hotel) => (
              <Link
                key={hotel.id}
                href={`/detail/${hotel.id}?checkIn=${formattedToday}&checkOut=${formattedTomorrow}`}
              >
                <div className='w-[12rem] cursor-pointer rounded-md bg-white p-4 shadow-md'>
                  <div className='mb-7 flex w-full justify-center'>
                    <Image
                      src={hotel.imageUrl}
                      alt={hotel.name}
                      width={200}
                      height={200}
                      className='h-40 w-48 rounded-md object-cover'
                    />
                  </div>
                  <h3 className='mb-2 overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-bold'>
                    {hotel.name}
                  </h3>
                  <p className='mb-2 text-sm text-gray-600'>⭐4.5</p>
                  <p className='text-right	text-sm font-bold text-gray-600'>
                    {hotel.minPrice}원~
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <button onClick={showNextGroup}>
          <CgChevronRight className='text-gray1 text-2xl' />
        </button>
      </div>
    </>
  );
};

export default WinterHotelList;
