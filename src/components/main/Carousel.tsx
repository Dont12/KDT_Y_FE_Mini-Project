/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';

interface CarouselProps {
  images: string[];
}

export const carouselImages = [
  'images/carousel01.jpg',
  'images/carousel01.jpg',
  'images/carousel01.jpg',
];

const Carousel = ({ images }: CarouselProps) => {
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
            className='max-h-348 mb-16 w-full'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
