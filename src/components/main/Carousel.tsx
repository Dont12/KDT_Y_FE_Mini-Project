/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const carouselSettings = {
    spaceBetween: 10,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false, // 사용자 상호 작용 후에도 자동 재생 유지
    },
  };

  return (
    <Swiper {...carouselSettings}>
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className='max-h-348 w-full'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
