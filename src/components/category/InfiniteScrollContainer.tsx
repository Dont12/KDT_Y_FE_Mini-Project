// // components/category/InfiniteScrollContainer.tsx

// import React, { useEffect, useState } from 'react';
// import InfiniteScroll from 'react-infinite-scroll-component';

// import YourItemComponent from './AccommodationCard';

// const InfiniteScrollContainer = () => {
//   const [data, setData] = useState<any[]>([]); // 서버에서 가져온 데이터
//   const [hasMore, setHasMore] = useState(true);

//   const fetchMoreData = () => {
//     // 여기에서 추가 데이터를 가져오는 비동기 로직을 작성
//     // 예시: 가상의 데이터를 임시로 추가
//     const newData = [
//       {
//         location: '서울/강북',
//         pensions: [
//           {
//             name: '서울/강북 호텔 1',
//             rating: 4.5,
//             image: 'svg/mainIcon/motel.svg',
//           },
//           {
//             name: '서울/강북 호텔 2',
//             rating: 4.0,
//             image: 'svg/mainIcon/motel.svg',
//           },
//           {
//             name: '서울/강북 호텔 3',
//             rating: 4.5,
//             image: 'svg/mainIcon/motel.svg',
//           },
//           {
//             name: '서울/강북 호텔 4',
//             rating: 4.0,
//             image: 'svg/mainIcon/motel.svg',
//           },
//         ],
//       },
//       {
//         location: '서울/강남',
//         pensions: [
//           {
//             name: '서울/강남 호텔 1',
//             rating: 4.2,
//             image: 'svg/mainIcon/servicedResidences.svg',
//           },
//           {
//             name: '서울/강남 호텔 2',
//             rating: 3.8,
//             image: 'svg/mainIcon/servicedResidences.svg',
//           },
//           {
//             name: '서울/강남 호텔 3',
//             rating: 4.2,
//             image: 'svg/mainIcon/servicedResidences.svg',
//           },
//           {
//             name: '서울/강남 호텔 4',
//             rating: 3.8,
//             image: 'svg/mainIcon/servicedResidences.svg',
//           },
//         ],
//       },
//       {
//         location: '경기·인천',
//         pensions: [
//           {
//             name: '경기·인천 호텔 1',
//             rating: 4.2,
//             image: 'svg/mainIcon/condo.svg',
//           },
//           {
//             name: '경기·인천 호텔 2',
//             rating: 3.8,
//             image: 'svg/mainIcon/condo.svg',
//           },
//           {
//             name: '경기·인천 호텔 3',
//             rating: 4.2,
//             image: 'svg/mainIcon/condo.svg',
//           },
//           {
//             name: '경기·인천 호텔 4',
//             rating: 3.8,
//             image: 'svg/mainIcon/condo.svg',
//           },
//         ],
//       },
//       {
//         location: '부산',
//         pensions: [
//           {
//             name: '부산 호텔 1',
//             rating: 4.2,
//             image: 'svg/mainIcon/pension.svg',
//           },
//           {
//             name: '부산 호텔 2',
//             rating: 3.8,
//             image: 'svg/mainIcon/pension.svg',
//           },
//           {
//             name: '부산 호텔 3',
//             rating: 4.2,
//             image: 'svg/mainIcon/pension.svg',
//           },
//           {
//             name: '부산 호텔 4',
//             rating: 3.8,
//             image: 'svg/mainIcon/pension.svg',
//           },
//         ],
//       },
//     ];

//     // 예시: 서버에서 가져온 데이터와 새로운 데이터를 합침
//     setData((prevData) => [...prevData, ...newData]);

//     // 예시: 더 이상 데이터가 없으면 무한 스크롤 중지
//     setHasMore(false);
//   };

//   useEffect(() => {
//     // 초기 데이터 로딩
//     setData([
//       {
//         location: '서울/강북',
//         pensions: [
//           {
//             name: '서울/강북 호텔 1',
//             rating: 4.5,
//             image: 'svg/mainIcon/motel.svg',
//           },
//           {
//             name: '서울/강북 호텔 2',
//             rating: 4.0,
//             image: 'svg/mainIcon/motel.svg',
//           },
//           // 초기 데이터...
//         ],
//       },
//       // 초기 데이터...
//     ]);
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   return (
//     <InfiniteScroll
//       dataLength={data.length}
//       next={fetchMoreData}
//       hasMore={hasMore}
//       loader={<h4>Loading...</h4>}
//     >
//       {data.map((category, index) => (
//         <div key={index}>
//           <h2>{category.location}</h2>
//           <div className='flex flex-wrap justify-center'>
//             {category.pensions.map((item: any, i: number) => (
//               <YourItemComponent key={i} {...item} />
//             ))}
//           </div>
//         </div>
//       ))}
//     </InfiniteScroll>
//   );
// };

// export default InfiniteScrollContainer;
