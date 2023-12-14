import React, { useState } from 'react';

const DropdownMenu = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<string>('3개월');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const periods = ['3개월', '6개월', '1년', '2년'];

  const handlePeriodSelect = (period: string) => {
    setSelectedPeriod(period);
    setIsDropdownOpen(false);
  };

  return (
    <div className='border-mediumGray absolute right-0 top-10 rounded-md border border-solid bg-white p-2'>
      {periods.map((period) => (
        <div
          key={period}
          onClick={() => handlePeriodSelect(period)}
          className='hover:bg-lightGray cursor-pointer p-2'
        >
          {period}
        </div>
      ))}
    </div>
  );
};
