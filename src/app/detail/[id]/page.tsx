import Image from 'next/image';
import React from 'react';

import { Footer, Header, HeaderNav } from '@/components/common';
import {
  Carousel,
  CartButton,
  DatePicker,
  KakaoMap,
  PersonInput,
  ReservationButton,
  Rules,
} from '@/components/detail/index';

import { DetailResponse, Room } from '@/@types/detail.types';
import detailInfoRequest from '@/api/detailInfoRequest';
import { calculateTotalCost } from '@/utils/calculatePerNightCost';

const today = new Date(
  new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' })
);
const tomorrow = new Date(
  new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' })
);
tomorrow.setDate(tomorrow.getDate() + 1);

const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const Detail = async ({
  params,
  searchParams = { checkInDate: '', checkOutDate: '', guest: '' },
}: {
  params: { id: string };
  searchParams: { checkInDate: string; checkOutDate: string; guest: string };
}) => {
  const defaultCheckInDate = searchParams.checkInDate || formatDate(today);
  const defaultCheckOutDate = searchParams.checkOutDate || formatDate(tomorrow);
  const defaultPerson = searchParams.guest || '1';

  const details: DetailResponse = await detailInfoRequest.getDetail({
    id: params.id,
    checkIn: defaultCheckInDate,
    checkOut: defaultCheckOutDate,
  });

  return (
    <>
      <Header>
        <HeaderNav showBack showCart showHome>
          {details.data.name}
        </HeaderNav>
      </Header>
      <main>
        <div className='mt-12 bg-white'>
          <div>
            <Carousel images={details.data.imageUrls} />
          </div>
          <div className='flex flex-col gap-4 p-5'>
            <div className='border-mediumGray border-b border-solid pb-3'>
              <h3 className='text-[24px]'>{details.data.name}</h3>
            </div>
            <div className='border-mediumGray border-b border-solid pb-3'>
              <div id='map' className='h-60 w-full'>
                <KakaoMap
                  longitude={details.data.longitude}
                  latitude={details.data.latitude}
                />
              </div>
            </div>
            <div className='border-mediumGray flex justify-evenly border-b border-solid pb-3 '>
              <div className='flex flex-col'>
                <label htmlFor='check'>체크인-체크아웃</label>
                <DatePicker
                  roomId={params.id}
                  checkIn={defaultCheckInDate}
                  checkOut={defaultCheckOutDate}
                  guest={defaultPerson}
                />
              </div>
              <div>
                <PersonInput
                  roomId={params.id}
                  checkIn={defaultCheckInDate}
                  checkOut={defaultCheckOutDate}
                  guest={defaultPerson}
                />
              </div>
            </div>
            <div className='flex flex-col gap-10'>
              {details.data.rooms.map((room: Room, index: number) => (
                <div
                  key={index}
                  className='border-mediumGray flex flex-col gap-5 rounded border border-solid p-5'
                >
                  <div className='flex justify-between'>
                    <div className='mr-5'>
                      <Image
                        src={room.imageUrls[0]}
                        width={350}
                        height={150}
                        alt={`Room ${index + 1}`}
                        className='h-full w-[350px] object-cover'
                      />
                    </div>
                    <div className='flex grow flex-col gap-3 pt-3'>
                      <div>
                        <p className='font-bold'>{room.name}</p>
                        <p>
                          체크인 {room.checkInTime} - 체크아웃{' '}
                          {room.checkOutTime}
                        </p>
                        <p>최대 인원: {room.maxGuestCount}</p>

                        <p>정원: {room.basicGuestCount}</p>
                        <p>
                          옵션:
                          {room.roomBathFacility === 'Y' && '욕조, '}
                          {room.roomBath === 'Y' && '욕실, '}
                          {room.roomHomeTheater === 'Y' && '홈시어터, '}
                          {room.roomAircondition === 'Y' && '에어컨, '}
                          {room.roomTv === 'Y' && 'TV, '}
                          {room.roomPc === 'Y' && 'PC, '}
                          {room.roomCable === 'Y' && '멀티탭, '}
                          {room.roomInternet === 'Y' && 'WIFI, '}
                          {room.roomRefrigerator === 'Y' && '냉장고, '}
                          {room.roomToiletries === 'Y' && '욕실용품, '}
                          {room.roomSofa === 'Y' && '소파, '}
                          {room.roomCook === 'Y' && '주방, '}
                          {room.roomTable === 'Y' && '식탁, '}
                          {room.roomHairdryer === 'Y' && '헤어드라이기'}
                        </p>
                      </div>
                      <div className='flex items-end justify-end'>
                        <p className='text-baseline text-[20px] font-bold leading-4'>
                          남은 객실: {room.stock}
                        </p>
                      </div>
                      <div className='flex flex-row items-end justify-end gap-1'>
                        <p className='text-gray1 text-[16px] font-bold'>
                          1박당/
                        </p>
                        <p className='m-0 text-[26px] font-bold'>
                          {new Intl.NumberFormat().format(room.price)}원
                        </p>
                      </div>
                      <div className='flex flex-row items-end justify-end'>
                        <p>
                          {'총 '}
                          {new Intl.NumberFormat().format(
                            calculateTotalCost({
                              checkInDate: defaultCheckInDate,
                              checkOutDate: defaultCheckOutDate,
                              numberOfGuests: defaultPerson,
                              maxRoomCapacity: room.maxGuestCount,
                              pricePerNight: room.price,
                            })
                          )}
                          원
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-row'>
                    <CartButton
                      roomId={room.id}
                      checkInDate={defaultCheckInDate}
                      checkOutDate={defaultCheckOutDate}
                      roomStock={room.stock}
                      maxguest={room.maxGuestCount}
                      guestCount={Number(defaultPerson)}
                    />
                    <ReservationButton
                      productId={Number(params.id)}
                      roomId={room.id}
                      checkInDate={defaultCheckInDate}
                      checkInTime={room.checkInTime}
                      checkOutDate={defaultCheckOutDate}
                      checkOutTime={room.checkOutTime}
                      guestCount={Number(defaultPerson)}
                      maxguest={room.maxGuestCount}
                      price={room.price}
                      stock={room.stock}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className='border-mediumGray border-b border-solid py-8'>
              <Rules />
            </div>
            <div className='py-8'>
              <p className='text-[18px] font-bold'>숙소소개</p>
              <p>{details.data.description}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Detail;
