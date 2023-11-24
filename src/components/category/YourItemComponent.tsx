/* eslint-disable @next/next/no-img-element */
// components/category/YourItemComponent.tsx

import React from 'react';

export interface YourItemComponentProps {
  name: string;
  rating: number;
  image: string;
}

const YourItemComponent: React.FC<YourItemComponentProps> = ({
  name,
  rating,
  image,
}) => {
  return (
    <div className='m-4 max-w-xs'>
      <div className='grid grid-cols-3 gap-4'>
        <div>
          <img
            src={image}
            alt={name}
            className='w-full rounded-md object-cover'
          />
        </div>
        <div className='flex flex-col justify-between'>
          <div>
            <h3 className='text-base'>{name}</h3>
          </div>
          <div>
            <p className='text-sm'>⭐{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourItemComponent;
