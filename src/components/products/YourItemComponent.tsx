/* eslint-disable @next/next/no-img-element */
// components/category/YourItemComponent.tsx

import Link from 'next/link';
import React from 'react';

interface YourItemComponentProps {
  id: number;
  name: string;
  imageUrl: string;
}

const YourItemComponent = ({ id, name, imageUrl }: YourItemComponentProps) => {
  return (
    <Link href={`/detail/${id}`}>
      <div className='max-w-xs cursor-pointer rounded-md bg-white py-6 pr-6 shadow-md'>
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
              <h3 className='text-sm'>{name}</h3>
            </div>
            <div>
              <p className='mt-2 text-xs'>⭐ 4.5</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default YourItemComponent;
