// // components/PensionCard.tsx
// import Image from 'next/image';
// import React from 'react';

// interface PensionCardProps {
//   name: string;
//   rating?: number;
//   price: number;
//   image: string;
// }

// const PensionCard = ({ name, rating, price, image }: PensionCardProps) => {
//   return (
//     <div className='rounded-md bg-white p-4 shadow-md'>
//       <div className='mb-7 mt-3 flex w-full justify-center'>
//         <Image src={image} alt={name} width={100} height={100} />
//       </div>{' '}
//       <h3 className='mb-2 text-base	font-bold'>{name}</h3>
//       <p className='mb-2 text-sm text-gray-600'>⭐{rating}</p>
//       <p className='text-right	text-sm font-bold text-gray-600'>{price}원~</p>
//     </div>
//   );
// };

// export default PensionCard;
