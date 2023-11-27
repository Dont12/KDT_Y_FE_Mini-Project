/* eslint-disable @next/next/no-img-element */
// components/category/YourItemComponent.tsx

import React from 'react';

interface YourItemComponentProps {
  name: string;
  rating?: number;
  imageUrl: string;
}

const YourItemComponent = ({
  name,
  // rating,
  imageUrl,
}: YourItemComponentProps) => {
  return (
    <div className='my-6 max-w-xs'>
      <div className='grid grid-cols-2 items-center'>
        <div className='ml-10'>
          <img
            src={imageUrl}
            alt={name}
            className='h-20 w-20 rounded-md object-cover'
          />
        </div>
        <div>
          <div>
            <h3 className='text-base'>{name}</h3>
          </div>
          {/* <div>
            <p className='text-sm'>⭐{rating}</p>
          </div> */}
          <div>
            <p className='text-sm'>⭐4.5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourItemComponent;
