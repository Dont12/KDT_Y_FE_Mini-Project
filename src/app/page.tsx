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
      <ChristmasPensionList />
      <WinterHotelList />
      <WinterLocationList locations={winterLocations} />
    </main>
    <Footer />
  </>
);

export default HomePage;
