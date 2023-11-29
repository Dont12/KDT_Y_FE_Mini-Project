'use client';
import React from 'react';

import { Header, HeaderNav } from '@/components/common/header';
import ChristmasPensionList from '@/components/main/ChristmasPensionList';
import IconList, { mainIcons } from '@/components/main/IconList';
import MainCarousel, { carouselImages } from '@/components/main/MainCarousel';
import WinterHotelList from '@/components/main/WinterHotelList';
import WinterLocationList, {
  WinterLocations,
} from '@/components/main/WinterLocationList';

const HomePage = () => {
  return (
    <>
      <Header>
        <HeaderNav showLogo showCart showMyPage />
      </Header>
      <main className='bg-white pt-[3rem]'>
        <MainCarousel images={carouselImages} />
        <IconList icons={mainIcons} />
        <section className='p-8'>
          <h1 className='mb-6 text-lg	 font-bold'>크리스마스 펜션 예약하기</h1>
          <ChristmasPensionList />
        </section>
        <section className='p-8'>
          <h1 className='mb-6 text-lg	 font-bold'>겨울 도심 호캉스</h1>
          <WinterHotelList />
        </section>
        <section className='p-10'>
          <h1 className='mb-6	 text-lg font-bold'>사랑받는 겨울 여행지</h1>
          <WinterLocationList locations={WinterLocations} />
        </section>
      </main>
    </>
  );
};

export default HomePage;
