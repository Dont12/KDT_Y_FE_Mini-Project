'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { DateRangePicker } from 'rsuite';

import 'rsuite/dist/rsuite-no-reset.min.css';

import { DatePickerProps } from '@/@types/detail.types';
import todayTomorrow from '@/utils/todayTomorrow';

const DatePicker = ({ roomId, checkIn, checkOut, guest }: DatePickerProps) => {
  const defaultDates =
    checkIn === '' || checkOut === ''
      ? [todayTomorrow.today, todayTomorrow.tomorrow]
      : [new Date(checkIn), new Date(checkOut)];

  const [checkInOut, setCheckInOut] = useState(defaultDates);
  const router = useRouter();

  return (
    <>
      <DateRangePicker
        format='yyyy-MM-dd'
        id='chek'
        placeholder={`${todayTomorrow.today.toLocaleDateString()} - ${todayTomorrow.tomorrow.toLocaleDateString()}`}
        defaultValue={[todayTomorrow.today, todayTomorrow.tomorrow]}
        shouldDisableDate={(date) => date < todayTomorrow.today}
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
              `/detail/${roomId}?checkInDate=${todayTomorrow.formatDate(
                value[0]
              )}&checkOutDate=${todayTomorrow.formatDate(
                value[1]
              )}&guest=${guest}`,
              { scroll: false }
            );
          }
        }}
      />
    </>
  );
};

export default DatePicker;
