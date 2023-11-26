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
              label: '인천',
              subOptions: [
                '인천 전체',
                '강화군',
                '계양구',
                '기타지역',
                '남동구',
                '동구',
                '미추홀구',
                '부평구',
                '서구',
                '연수구',
                '웅진군',
                '중구',
              ],
            },
            {
              label: '대전',
              subOptions: [
                '대전 전체',
                '기타지역',
                '대덕구',
                '동구',
                '서구',
                '유성구',
                '중구',
              ],
            },
            {
              label: '대구',
              subOptions: [
                '대구 전체',
                '군위군',
                '기타지역',
                '남구',
                '달서구',
                '달성군',
                '동구',
                '북구',
                '서구',
                '수성구',
                '중구',
              ],
            },
            {
              label: '광주',
              subOptions: [
                '광주 전체',
                '광산구',
                '기타지역',
                '남구',
                '동구',
                '북구',
                '서구',
              ],
            },
            {
              label: '부산',
              subOptions: [
                '부산 전체',
                '강서구',
                '금정구',
                '기장군',
                '기타지역',
                '남구',
                '동구',
                '동래구',
                '부산진구',
                '북구',
                '사상구',
                '사하구',
                '서구',
                '수영구',
                '연제구',
                '영도구',
                '중구',
                '해운대구',
              ],
            },
            {
              label: '울산',
              subOptions: [
                '울산 전체',
                '기타지역',
                '남구',
                '동구',
                '북구',
                '울주군',
                '중구',
              ],
            },
            {
              label: '세종',
              subOptions: ['세종 전체'],
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
                '기타지역',
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
            {
              label: '강원',
              subOptions: [
                '강원 전체',
                '강릉시',
                '고성군',
                '기타지역',
                '동해시',
                '삼척시',
                '속초시',
                '양구군',
                '양양군',
                '영월군',
                '원주시',
                '인제군',
                '정선군',
                '철원군',
                '춘천시',
                '태백시',
                '평창군',
                '홍천군',
                '화천군',
                '횡성군',
              ],
            },
            {
              label: '충북',
              subOptions: [
                '충북 전체',
                '괴산군',
                '기타지역',
                '단양군',
                '보은군',
                '영동군',
                '옥천군',
                '음성군',
                '제천시',
                '증평군',
                '진천군',
                '청원군',
                '청주시',
                '충주시',
              ],
            },
            {
              label: '충남',
              subOptions: [
                '충남 전체',
                '계룡시',
                '공주시',
                '금산군',
                '기타지역',
                '논산시',
                '당진시',
                '보령시',
                '부여군',
                '서산시',
                '서천군',
                '아산시',
                '예산군',
                '천안시',
                '청양군',
                '태안군',
                '홍성군',
              ],
            },
            {
              label: '경북',
              subOptions: [
                '경북 전체',
                '경산시',
                '경주시',
                '고령군',
                '구미시',
                '기타지역',
                '김천시',
                '문경시',
                '봉화군',
                '상주시',
                '성주군',
                '안동시',
                '영덕군',
                '영양군',
                '영주시',
                '영천시',
                '예천군',
                '울릉군',
                '울진군',
                '의성군',
                '청도군',
                '청송군',
                '칠곡군',
                '포항시',
              ],
            },
            {
              label: '경남',
              subOptions: [
                '경남 전체',
                '거제시',
                '거창군',
                '고령군',
                '고성군',
                '기타지역',
                '김해시',
                '남해군',
                '마산시',
                '밀양시',
                '사천시',
                '산청군',
                '양산시',
                '의령군',
                '진주시',
                '진해시',
                '창녕군',
                '창원시',
                '통영시',
                '하동군',
                '함안군',
                '함양군',
                '합천군',
              ],
            },
            {
              label: '전북',
              subOptions: [
                '전북 전체',
                '고창군',
                '군산시',
                '기타지역',
                '김제시',
                '남원시',
                '무주군',
                '부안군',
                '순창군',
                '완주군',
                '익산시',
                '임실군',
                '장수군',
                '전주시',
                '정읍시',
                '진안군',
              ],
            },
            {
              label: '전남',
              subOptions: [
                '전남 전체',
                '강진군',
                '고흥군',
                '곡성군',
                '광양시',
                '구례군',
                '기타지역',
                '나주시',
                '담양군',
                '목포시',
                '무안군',
                '보성군',
                '순천시',
                '신안군',
                '여수시',
                '영광군',
                '영암군',
                '완도군',
                '장성군',
                '장흥군',
                '진도군',
                '함평군',
                '해남군',
                '화순군',
              ],
            },
            {
              label: '제주',
              subOptions: [
                '제주 전체',
                '기타지역',
                '남제주군',
                '북제주군',
                '서귀포시',
                '제주시',
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
