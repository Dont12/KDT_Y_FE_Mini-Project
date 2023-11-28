// components/main/IconList.tsx
import React from 'react';

import IconWithLabel from './IconWithLabel';

interface IconListProps {
  icons: { icon: string; label: string }[];
}

const IconList = ({ icons }: IconListProps) => {
  return (
    <div className='icon-container grid grid-cols-5 justify-items-center gap-10 pb-10 pl-12 pr-12'>
      {icons.map((iconData, index) => (
        <IconWithLabel
          key={index}
          icon={iconData.icon}
          label={iconData.label}
        />
      ))}
    </div>
  );
};

export default IconList;
