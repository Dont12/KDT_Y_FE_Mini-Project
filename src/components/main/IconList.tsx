// components/main/IconList.tsx
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

interface IconProps {
  icon: string;
  label: string;
  category: string;
}

interface IconListProps {
  icons: IconProps[];
}

const Icon = ({ icon, label, category }: IconProps) => {
  const router = useRouter();

  const handleIconClick = () => {
    // 각 아이콘 클릭 시 동적 라우팅으로 해당 카테고리 페이지로 이동
    router.push(`/category/${category}`);
  };

  return (
    <div
      className='flex flex-col items-center'
      onClick={handleIconClick}
      style={{ cursor: 'pointer' }}
    >
      <Image src={icon} alt={label} width={46} height={46} />
      <span className='mt-2 text-xs'>{label}</span>
    </div>
  );
};

const IconList = ({ icons }: IconListProps) => (
  <div className='icon-container grid grid-cols-5 justify-items-center gap-10 pb-10 pl-12 pr-12'>
    {icons.map((iconData, index) => (
      <Icon key={index} {...iconData} />
    ))}
  </div>
);

export default IconList;
