import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';

import { Hotel } from '@/@types/main.types';
import productRequest from '@/api/productRequest';

const ChristmasPensionList = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(
    '강원특별자치도'
  );

  const fetchData = async (location: string) => {
    const response = await productRequest.getPensions(location);
    setHotels(response.data);

    // 지역을 변경할 때마다 스크롤을 맨 앞으로 이동
    setStartIndex(0);

    // 선택된 지역 업데이트
    setSelectedLocation(location);
  };

  useEffect(() => {
    fetchData('강원특별자치도');
  }, []);

  const showNextGroup = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 2, hotels.length - 1));
  };

  const showPrevGroup = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 2, 0));
  };

  return (
    <section className='p-8'>
      <h1 className='mb-6 text-lg	 font-bold'>크리스마스 펜션 예약하기</h1>
      {/* 네비게이션 바 */}
      <nav className='mb-2 flex justify-evenly border-b border-t text-xs'>
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
        <div
          onClick={() => fetchData('경상북도')}
          className={`mr-4 cursor-pointer p-3 ${
            selectedLocation === '경상북도' ? 'border-b-2 border-black' : ''
          }`}
        >
          경북
        </div>
        <div
          onClick={() => fetchData('전라남도')}
          className={`mr-4 cursor-pointer p-3 ${
            selectedLocation === '전라남도' ? 'border-b-2 border-black' : ''
          }`}
        >
          전남
        </div>
        <div
          onClick={() => fetchData('제주특별자치도')}
          className={`mr-4 cursor-pointer p-3 ${
            selectedLocation === '제주특별자치도'
              ? 'border-b-2 border-black'
              : ''
          }`}
        >
          제주
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
              <Link key={hotel.id} href={`/detail/${hotel.id}`}>
                <div
                  key={hotel.id}
                  className='w-[12rem] rounded-md bg-white p-4 shadow-md'
                >
                  <div className='mb-7 flex w-full justify-center'>
                    <Image
                      src={hotel.imageUrl}
                      alt={hotel.name}
                      width={200}
                      height={200}
                      className='h-40 w-48 rounded-md object-cover'
                    />
                  </div>{' '}
                  <h3 className='mb-2 overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-bold'>
                    {hotel.name}
                  </h3>
                  <p className='mb-2 text-sm text-gray-600'>⭐4.5</p>
                  <p className='text-right	text-sm font-bold text-gray-600'>
                    {hotel.minPrice.toLocaleString('ko-KR')}원~
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
    </section>
  );
};

export default ChristmasPensionList;
