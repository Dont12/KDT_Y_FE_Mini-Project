import Image from 'next/image';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// 높이 348px로 넣어주세요
export const carouselImages = [
  '/images/main/carousel01.jpg',
  '/images/main/carousel02.jpg',
  '/images/main/carousel03.jpg',
];

const NextArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    type='button'
    className='absolute inset-y-1/2 right-0 z-10 pr-4 text-[3rem] text-white
    '
  >
    <CgChevronRight />
  </button>
);

const PrevArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    type='button'
    className='absolute inset-y-1/2 left-0 z-10 pl-4 text-[3rem] text-white'
  >
    <CgChevronLeft />
  </button>
);

const MainCarousel = ({ images }: any): JSX.Element => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true, // 자동으로 넘어가기
    autoplaySpeed: 3000, // 3초마다 넘어가기
  };
  return (
    <Slider {...settings} className='relative'>
      {images.map((image: string, index: number) => (
        <div key={index}>
          <Image
            src={image}
            alt={`Main Image ${index + 1}`}
            width={2304}
            height={1044}
            className='h-auto w-full'
          />
        </div>
      ))}
    </Slider>
  );
};

export default MainCarousel;
