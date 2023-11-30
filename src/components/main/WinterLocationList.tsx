// components/main/WinterLocationList.tsx
import Link from 'next/link';
import React from 'react';

interface WinterLocationListProps {
  locations: WinterLocationProps[];
}

interface WinterLocationProps {
  icon?: string;
  label?: string; // alt에 들어감
  category?: string;
  location?: string;
  image?: string;
}

export const WinterLocations: WinterLocationProps[] = [
  {
    label: '강원도',
    image: 'images/main/winter01.jpg',
    location: '강원특별자치도',
  },
  {
    label: '제주도',
    image: 'images/main/winter02.jpg',

    location: '제주특별자치도',
  },
  { label: '경남', image: 'images/main/winter03.jpg', location: '경상남도' },
  {
    label: '전북',
    image: 'images/main/winter04.jpg',
    location: '전라북도',
  },
];

// 아이콘을 출력합니다.
const Location = ({
  label,
  image,
  category,
  location,
}: WinterLocationProps) => {
  const queryParams = new URLSearchParams();

  if (category) {
    queryParams.append('category', category);
  }

  if (location) {
    queryParams.append('location', location);
  }

  const href = `/products?${queryParams.toString()}`;

  return (
    <Link href={href} passHref>
      <div
        className='relative mb-4 h-[7.5rem] w-[7.5rem] rounded-full bg-black p-4 text-white'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
          backgroundSize: 'cover',
        }}
      >
        <p className='flex h-full items-center justify-center text-center text-xl font-semibold'>
          {label}
        </p>
      </div>
    </Link>
  );
};

const WinterLocationList = ({ locations }: WinterLocationListProps) => (
  <div className='icon-container grid grid-cols-4 justify-items-center pb-10 pl-10 pr-10'>
    {locations.map((iconData, index) => (
      <Location key={index} {...iconData} />
    ))}
  </div>
);

export default WinterLocationList;
