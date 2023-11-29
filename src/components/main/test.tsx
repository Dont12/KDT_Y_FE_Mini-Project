// // components/main/IconList.tsx
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';

// interface IconListProps {
//   icons: IconProps[];
// }

// interface IconProps {
//   icon?: string;
//   label?: string; // alt에 들어감
//   category?: string;
//   location?: string;
// }

// export const mainIcons: IconProps[] = [
//   { icon: 'svg/mainIcon/hotel.svg', label: '호텔', category: '관광호텔' },
//   { icon: 'svg/mainIcon/pension.svg', label: '펜션', category: '펜션' },
//   { icon: 'svg/mainIcon/motel.svg', label: '모텔', category: '모텔' },
//   {
//     icon: 'svg/mainIcon/guestHouse.svg',
//     label: '게스트하우스',
//     category: '게스트하우스',
//   },
//   { icon: 'svg/mainIcon/condo.svg', label: '콘도', category: '콘도미니엄' },
//   {
//     icon: 'svg/mainIcon/youthHostel.svg',
//     label: '유스호스텔',
//     category: '유스호스텔',
//   },
//   { icon: 'svg/mainIcon/minbak.svg', label: '민박', category: '민박' },
//   {
//     icon: 'svg/mainIcon/homestay.svg',
//     label: '홈스테이',
//     category: '홈스테이',
//   },
//   {
//     icon: 'svg/mainIcon/servicedResidences.svg',
//     label: '서비스드레지던스',
//     category: '서비스드레지던스',
//   },
//   { icon: 'svg/mainIcon/hanok.svg', label: '한옥', category: '한옥' },
//   { icon: 'svg/mainIcon/hotel.svg', label: '서울', location: '서울특별시' },
//   {
//     icon: 'svg/mainIcon/guestHouse.svg',
//     label: '인천',
//     location: '인천광역시',
//   },
//   { icon: 'svg/mainIcon/condo.svg', label: '대전', location: '대전광역시' },
//   {
//     icon: 'svg/mainIcon/youthHostel.svg',
//     label: '대구',
//     category: '유스호스텔',
//   },
//   {
//     icon: 'svg/mainIcon/minbak.svg',
//     label: '제주',
//     location: '제주특별자치도',
//   },
//   {
//     icon: 'svg/mainIcon/minbak.svg',
//     label: '제주도 유스호스텔',
//     category: '유스호스텔',
//     location: '제주특별자치도',
//   },
//   {
//     icon: 'svg/mainIcon/guestHouse.svg',
//     label: '숙소 & 장소 전체',
//   },
//   {
//     label: '인천 홈스테이',
//     category: '홈스테이',
//     location: '인천광역시',
//   },
// ];

// // 아이콘을 출력합니다.
// const Icon = ({ icon, label, category, location }: IconProps) => {
//   const queryParams = new URLSearchParams();

//   if (category) {
//     queryParams.append('category', category);
//   }

//   if (location) {
//     queryParams.append('location', location);
//   }

//   const href = `/products?${queryParams.toString()}`;

//   return (
//     <Link href={href} passHref>
//       <div className='flex flex-col items-center' style={{ cursor: 'pointer' }}>
//         {icon && <Image src={icon} alt={label || ''} width={46} height={46} />}
//         <span className='mt-2 text-xs'>{label}</span>
//       </div>
//     </Link>
//   );
// };

// const IconList = ({ icons }: IconListProps) => (
//   <div className='icon-container grid grid-cols-5 justify-items-center gap-10 pb-10 pl-12 pr-12'>
//     {icons.map((iconData, index) => (
//       <Icon key={index} {...iconData} />
//     ))}
//   </div>
// );

// export default IconList;
