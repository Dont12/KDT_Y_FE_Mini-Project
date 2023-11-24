import Image from 'next/image';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = ({ onClick }: any) => {
  return (
    <button
      onClick={onClick}
      type='button'
      className='absolute inset-y-1/2 right-0 z-10 h-32 w-20 bg-[rgba(0,0,0,0.5)] text-[3rem] text-white
    '
    >
      <CgChevronRight />
    </button>
  );
};

const PrevArrow = ({ onClick }: any) => {
  return (
    <button
      onClick={onClick}
      type='button'
      className='absolute inset-y-1/2 left-0 z-10 h-32 w-20  bg-[rgba(0,0,0,0.5)] text-[3rem] text-white'
    >
      <CgChevronLeft />
    </button>
  );
};

function Carousel({ images }: any) {
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
            alt={`Room Image ${index + 1}`}
            width={768}
            height={100}
            className='h-auto w-full'
          />
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;
