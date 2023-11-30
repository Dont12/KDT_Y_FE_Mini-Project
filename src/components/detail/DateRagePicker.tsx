'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { DateRangePicker } from 'rsuite';

import 'rsuite/dist/rsuite-no-reset.min.css';

import { DatePickerProps } from '@/@types/detail.types';

const today = new Date(
  new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' })
);
const tomorrow = new Date(
  new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' })
);
tomorrow.setDate(tomorrow.getDate() + 1);

const beforeToday = (date: Date) => {
  return date < today;
};

const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const DatePicker = ({ roomId, checkIn, checkOut, guest }: DatePickerProps) => {
  const defaultDates =
    checkIn === '' || checkOut === ''
      ? [today, tomorrow]
      : [new Date(checkIn), new Date(checkOut)];

  const [checkInOut, setCheckInOut] = useState(defaultDates);

  const router = useRouter();

  return (
    <>
      <DateRangePicker
        format='yyyy-MM-dd'
        id='chek'
        placeholder={`${today.toLocaleDateString()} - ${tomorrow.toLocaleDateString()}`}
        defaultValue={[today, tomorrow]}
        shouldDisableDate={beforeToday}
        className='h-8 w-52'
        value={
          checkInOut
            ? [
                new Date(
                  checkInOut[0].toLocaleString('en-US', {
                    timeZone: 'Asia/Seoul',
                  })
                ),
                new Date(
                  checkInOut[1].toLocaleString('en-US', {
                    timeZone: 'Asia/Seoul',
                  })
                ),
              ]
            : null
        }
        onChange={(value: [Date, Date] | null) => {
          if (value !== null) {
            setCheckInOut(value);
            router.replace(
              `/detail/${roomId}?checkInDate=${formatDate(
                value[0]
              )}&checkOutDate=${formatDate(value[1])}&guest=${guest}`,
              { scroll: false }
            );
          }
        }}
      />
    </>
  );
};

export default DatePicker;
