'use client';
import React, { useState } from 'react';
import { DateRangePicker } from 'rsuite';

import 'rsuite/dist/rsuite.min.css';

const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const beforeToday = (date: Date) => {
  return date < today;
};

const DatePicker = () => {
  const [checkInOut, setCheckInOut] = useState([today, tomorrow]);

  return (
    <>
      <DateRangePicker
        format='yyyy-MM-dd'
        id='chek'
        placeholder={`${today.toLocaleDateString()} - ${tomorrow.toLocaleDateString()}`}
        defaultValue={[today, tomorrow]}
        shouldDisableDate={beforeToday}
        className='h-8 w-52'
        value={checkInOut as [Date, Date] | null}
        onChange={(value: [Date, Date] | null) => {
          if (value !== null) {
            setCheckInOut(value);
          }
        }}
      />
    </>
  );
};

export default DatePicker;
