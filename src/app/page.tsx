/* eslint-disable react/no-children-prop */
// pages/index.tsx
'use client';
import React, { useState } from 'react';

import Header from '@/components/common/Header';
import HeaderNav from '@/components/common/HeaderNav';
import Carousel, { carouselImages } from '@/components/main/Carousel';

import IconList, { mainIcons } from '../components/main/IconList';

// interface DataType {
//   location: string;
//   pensions: {
//     name: string;
//     rating: number;
//     price: number;
//     image: string;
//   }[];
// }

// interface LocationProps {
//   selectedLocation: string | null;
//   data: DataType;
//   index: number;
// }

// interface CircleLabelProps {
//   label: string;
//   image: string;
// }

// const LocationContent = ({ selectedLocation, data, index }: LocationProps) => (
//   <div
//     className={`${
//       selectedLocation === data.location ||
//       (selectedLocation === null && index === 0)
//         ? 'block'
//         : 'hidden'
//     }`}
//   >
//     <div className='grid grid-cols-4 gap-4'>
//       {data.pensions.map((pension, i) => (
//         <PensionCard key={i} {...pension} />
//       ))}
//     </div>
//   </div>
// );

// const CircleLabel = ({ label, image }: CircleLabelProps) => (
//   <div
//     className='relative mb-4 h-[7.5rem] w-[7.5rem] rounded-full bg-black p-4 text-white'
//     style={{
//       backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
//       backgroundSize: 'cover',
//     }}
//   >
//     <p className='flex h-full items-center justify-center text-center text-xl font-semibold'>
//       {label}
//     </p>
//   </div>
// );

const HomePage = () => {
  const [selectedChristmasLocation, setSelectedChristmasLocation] = useState<
    string | null
  >(null);
  // const [selectedWinterLocation, setSelectedWinterLocation] = useState<
  //   string | null
  // >(null);

  return (
    <>
      <Header>
        <HeaderNav showLogo showCart showMyPage>
          {' '}
        </HeaderNav>
      </Header>
      <main className='bg-white pt-[3rem]'>
        <Carousel images={carouselImages} />
        <IconList icons={mainIcons} />
        <section className='p-10'>
          <h1 className='mb-6 text-lg	 font-bold'>크리스마스 펜션 예약하기</h1>
          {/* <Navigation
            locations={ChristmasPensionData.map((data) => data.location)}
            onSelectLocation={(location) =>
              setSelectedChristmasLocation(location)
            }
            selectedLocation={selectedChristmasLocation}
          /> */}
          {/* {ChristmasPensionData.map((data, index) => (
            <LocationContent
              key={index}
              selectedLocation={selectedChristmasLocation}
              data={data}
              index={index}
            />
          ))} */}
        </section>
        {/* <section className='p-10'>
          <h1 className='mb-6 text-lg	 font-bold'>겨울 도심 호캉스</h1>
          <Navigation
            locations={WinterStaycationData.map((data) => data.location)}
            onSelectLocation={(location) => setSelectedWinterLocation(location)}
            selectedLocation={selectedWinterLocation}
          />
          {WinterStaycationData.map((data, index) => (
            <LocationContent
              key={index}
              selectedLocation={selectedWinterLocation}
              data={data}
              index={index}
            />
          ))}
        </section> */}
        {/* <section className='p-10'>
          <h1 className='mb-6	 text-lg font-bold'>사랑받는 겨울 여행지</h1>
          <div className='mb-6 flex justify-around'>
            <CircleLabel label='강릉' image='svg/mainIcon/homestay.svg' />
            <CircleLabel label='제주도' image='svg/mainIcon/homestay.svg' />
            <CircleLabel label='속초' image='svg/mainIcon/homestay.svg' />
            <CircleLabel label='평창' image='svg/mainIcon/homestay.svg' />
          </div>
        </section> */}
      </main>
    </>
  );
};

export default HomePage;
