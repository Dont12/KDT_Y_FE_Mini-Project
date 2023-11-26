// components/main/IconList.tsx
import Image from 'next/image';
import React from 'react';

interface IconProps {
  icon: string;
  label: string;
}

interface IconListProps {
  icons: { icon: string; label: string }[];
}

const Icon = ({ icon, label }: IconProps) => (
  <div className='flex flex-col items-center'>
    <Image src={icon} alt={label} width={46} height={46} />
    <span className='mt-2 text-xs'>{label}</span>
  </div>
);

const IconList = ({ icons }: IconListProps) => (
  <div className='icon-container grid grid-cols-5 justify-items-center gap-10 pb-10 pl-12 pr-12'>
    {icons.map((iconData, index) => (
      <Icon key={index} {...iconData} />
    ))}
  </div>
);

export default IconList;
