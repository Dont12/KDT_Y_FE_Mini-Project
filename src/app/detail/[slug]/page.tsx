'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { DateRangePicker } from 'rsuite';

import 'rsuite/dist/rsuite.min.css';

import Header from '@/components/Common/Header';
import HeaderNav from '@/components/Common/HeaderNav';

import Carousel from '../../../components/common/Carousel';
import { Toast } from '../../../components/common/Toast';

const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const beforeToday = (date: Date) => {
  return date < today;
};

const roomImages = [
  'https://yaimg.yanolja.com/v5/2023/11/18/16/1280/6558e97be8ded1.18240177.jpg',
  'https://yaimg.yanolja.com/v5/2023/11/06/15/640/65490340a88212.79491230.jpg',
  'https://yaimg.yanolja.com/v5/2023/11/18/16/1280/6558e97be8ded1.18240177.jpg',
  'https://yaimg.yanolja.com/v5/2023/11/18/16/1280/6558e97be8ded1.18240177.jpg',
  'https://yaimg.yanolja.com/v5/2023/11/18/16/640/6558e972d767d3.58178866.jpg',
  'https://yaimg.yanolja.com/v5/2023/11/18/16/1280/6558e97be8ded1.18240177.jpg',
];

const rooms = [
  {
    picture:
      'https://yaimg.yanolja.com/v5/2023/11/06/15/640/65490340a88212.79491230.jpg',
    name: '가옹독채',
    max: 2,
    min: 2,
    bed: '더블침대 1개',
    option: '전용화장실, 전용욕실, 난방, 에어컨, 옷걸이, TV',
    price: '288,000',
  },
  {
    picture:
      'https://yaimg.yanolja.com/v5/2023/11/18/16/640/6558e972d767d3.58178866.jpg',
    name: '가원독채',
    max: 2,
    min: 2,
    bed: '더블침대 1개',
    option: '전용화장실, 전용욕실, 난방, 에어컨, 옷걸이, TV',
    price: '288,000',
  },
  {
    picture:
      'https://yaimg.yanolja.com/v5/2023/11/06/15/640/65490340a88212.79491230.jpg',
    name: '가왕독채',
    max: 2,
    min: 2,
    bed: '더블침대 1개',
    option: '전용화장실, 전용욕실, 난방, 에어컨, 옷걸이, TV',
    price: '288,000',
  },
];

const rules = [
  '[🚨 아래 사항을 지켜주세요!]',
  '[ 금연구역 ] 숙소의 전 구역이 절대금연 입니다.',
  '[ 화재 ] 건물 특성상 화재 위험이 있는 관계로 바베큐 시설이 없습니다.',
  '[ 파손 및 안전 ] 부주의로 인한 안전사고 및 파손에 대한 책임은 투숙객에',
  '[ 안전 ] 안전을 위해 입구방향으로 CCTV가 작동중입니다.',
  '[ 소음 ] 시골입니다. 밤 10시 이후 외부에서 소음은 자제 부탁드립니다.',
  '[ 인원 ] 예약 인원 외 추가 인원은 투숙 및 출입이 불가합니다.',
  '※ 원활한 체크인을 위해, 예약확정 후 여행확인증의 연락처로 꼭 연락주세요!',
  '※ 청소년 보호법에 따라 미성년자의 혼숙은 불가합니다.',
];

function Detail() {
  const [person, setPerson] = useState('1');
  const [toastVisible, setToastVisible] = useState(false);
  const [checkInOut, setCheckInOut] = useState([today, tomorrow]);

  const showToast = () => {
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  const handleInputChange = (e: any) => {
    let inputValue = e.target.value.replace(/[^0-9]/g, '');
    inputValue = Math.min(Math.max(parseInt(inputValue), 1), 9);
    setPerson(inputValue);
    showToast();
  };

  return (
    <>
      <Header>
        <HeaderNav showBack showCart showHome>
          강릉 애즈풀앤스파펜션
        </HeaderNav>
      </Header>
      <main className='mt-12 bg-white'>
        <div>
          <Carousel images={roomImages} />
        </div>
        <div className='flex flex-col gap-4 p-5'>
          <div className='border-mediumGray border-b border-solid pb-3'>
            <h3 className='subtitle3'>강릉 애즈풀앤스파펜션</h3>
          </div>
          <div className='border-mediumGray border-b border-solid pb-3'>
            <p>강원 강릉시 사천면 해안로 1052-1</p>
            <p>체크인 15:00 - 체크아웃 11:00</p>
          </div>
          <div className='border-mediumGray flex justify-evenly border-b border-solid pb-3 '>
            <div className='flex flex-col'>
              <label htmlFor='check'>체크인-체크아웃</label>
              <DateRangePicker
                format='yyyy-MM-dd'
                id='chek'
                placeholder={`${today.toLocaleDateString()} - ${tomorrow.toLocaleDateString()}`}
                defaultValue={[today, tomorrow]}
                disabledDate={beforeToday}
                className='h-8 w-52'
                value={checkInOut as [Date, Date] | null}
                onChange={(value: [Date, Date] | null) => {
                  if (value !== null) {
                    setCheckInOut(value);
                  }
                }}
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='person'>인원</label>
              <input
                id='person'
                type='number'
                className='border-lightGray h-8 w-52 rounded-md border border-solid indent-2'
                min='1'
                max='9'
                value={person}
                onChange={handleInputChange}
              />
              {toastVisible && (
                <Toast message='한번에 예약 할 수 있는 것은 최대 9명 입니다.' />
              )}
            </div>
          </div>
          <div className='flex flex-col gap-10'>
            {rooms.map((room, index) => (
              <div
                key={index}
                className='border-mediumGray flex flex-col gap-5 rounded border border-solid p-5'
              >
                <div className='flex justify-between'>
                  <div className='mr-5'>
                    <Image
                      src={room.picture}
                      width={150}
                      height={150}
                      alt={`Room ${index + 1}`}
                      className='h-full w-48 object-cover'
                    />
                  </div>
                  <div className='flex grow flex-col gap-5 pt-3'>
                    <div>
                      <p>{room.name}</p>
                      <p>최대 인원: {room.max}</p>
                      <p>최소 인원: {room.min}</p>
                      <p>침대: {room.bed}</p>
                      <p>옵션: {room.option}</p>
                    </div>
                    <div className='flex flex-row items-end justify-end gap-3'>
                      <button>
                        <Image
                          src='/svg/cartIcon.svg'
                          alt='cartIcon'
                          className='h-8 w-8'
                          width={32}
                          height={32}
                        />
                      </button>
                      <p className='subtitle4 text-baseline leading-4'>
                        {room.price}원
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <button className='bg-mainButton h-12 w-full rounded text-white '>
                    예약하기
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className='border-mediumGray border-b border-solid py-8'>
            <h3 className='subtitle5'>이용규칙</h3>
            {rules.map((rule, index) => (
              <p className='body1' key={index}>
                {rule}
              </p>
            ))}
          </div>
          <div className='py-8'>
            <p className='subtitle5'>숙소소개</p>
            <p className='body1'>
              한경면 저지리에는 수동, 중동, 남동, 북동, 동동, 명리동의 6개
              부락으로 구성되어 있습니다. 그 중 조용하고 살기 좋은 동네로 선정된
              저지리 수동은 옛 제주의 역사를 지니는 돗통의 정취와 색이 남아 있는
              공간으로, 소중한 사람들을 몸과 마음이 편안해지는 느슨한 공간으로
              기억되길 바랍니다.
            </p>
            <p>
              [🏠숙소 전체 구성]
              <br />- 귤밭으로 둘러 쌓인 260평 대지에 3개의 돌집이 있습니다.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Detail;
