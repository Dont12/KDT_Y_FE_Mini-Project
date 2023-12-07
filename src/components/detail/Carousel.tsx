'use client';

import Image from 'next/image';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ArrowProps } from '@/@types/detail.types';

const NextArrow = ({ onClick }: ArrowProps) => (
  <button
    onClick={onClick}
    type='button'
    className='absolute right-0 top-[186px] z-10 h-32 w-20 bg-[rgba(0,0,0,0.5)] text-[3rem] text-white
    '
  >
    <CgChevronRight />
  </button>
);

const PrevArrow = ({ onClick }: ArrowProps) => (
  <button
    onClick={onClick}
    type='button'
    className='absolute left-0 top-[186px] z-10 h-32 w-20  bg-[rgba(0,0,0,0.5)] text-[3rem] text-white'
  >
    <CgChevronLeft />
  </button>
);

const Carousel = ({ images }: { images: string[] }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings} className='relative'>
      {images.map((image: string, index: number) => (
        <div key={index}>
          <Image
            src={image}
            alt='Room Image'
            width={768}
            height={500}
            className='h-[500px] w-full object-cover'
          />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
