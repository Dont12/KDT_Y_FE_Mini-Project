// components/main/IconWithLabel.tsx
import Image from 'next/image';
import React from 'react';

interface IconWithLabelProps {
  icon: string;
  label: string;
}

const IconWithLabel: React.FC<IconWithLabelProps> = ({ icon, label }) => {
  return (
    <div className='flex flex-col items-center'>
      <Image src={icon} alt={label} width={46} height={46} />
      <span className='mt-2 text-xs'>{label}</span>
    </div>
  );
};

export default IconWithLabel;
