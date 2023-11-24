import React from 'react';
import { DateRangePicker } from 'rsuite';

import 'rsuite/dist/rsuite.min.css';

function DateRagePicker() {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const beforeToday = (date: Date) => {
    return date < today;
  };

  return (
    <>
      <DateRangePicker
        format='yyyy-MM-dd'
        id='chek'
        placeholder={`${today.toLocaleDateString()} - ${tomorrow.toLocaleDateString()}`}
        defaultValue={[today, tomorrow]}
        disabledDate={beforeToday}
        className='h-8 w-52'
      />
    </>
  );
}

export default DateRagePicker;
