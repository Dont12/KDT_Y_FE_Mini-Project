'use client';

import React from 'react';

import { Footer, Header, HeaderNav } from '@/components/common';
import {
  carouselImages,
  ChristmasPensionList,
  IconList,
  MainCarousel,
  mainIcons,
  WinterHotelList,
  WinterLocationList,
  winterLocations,
} from '@/components/main';

const HomePage = () => (
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
        <WinterLocationList locations={winterLocations} />
      </section>
    </main>
    <Footer />
  </>
);

export default HomePage;
