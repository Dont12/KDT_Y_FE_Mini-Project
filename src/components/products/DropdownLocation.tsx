import React, { useCallback, useEffect, useRef, useState } from 'react';

import { DropdownLocationProps, Option } from '@/@types/products.types';

export const dropdownLocationOptions = [
  { label: '전국' },
  { label: '서울', location: '서울특별시' },
  { label: '인천', location: '인천광역시' },
  { label: '대전', location: '대전광역시' },
  { label: '대구', location: '대구광역시' },
  { label: '광주', location: '광주광역시' },
  { label: '부산', location: '부산광역시' },
  { label: '울산', location: '울산광역시' },
  { label: '세종', location: '세종특별자치시' },
  { label: '경기', location: '경기도' },
  { label: '강원', location: '강원특별자치도' },
  { label: '충북', location: '충청북도' },
  { label: '충남', location: '충청남도' },
  { label: '경북', location: '경상북도' },
  { label: '경남', location: '경상남도' },
  { label: '전북', location: '전라북도' },
  { label: '전남', location: '전라남도' },
  { label: '제주', location: '제주특별자치도' },
  // 다른 지역들도 추가
];

const DropdownLocation = ({
  options,
  selectedOption,
  onSelectOption,
}: DropdownLocationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    onSelectOption(option);
    setIsOpen(false);
  };

  const handleOutsideClick = useCallback(
    (event: Event) => {
      if (
        isOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    },
    [isOpen]
  );

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen, handleOutsideClick]);

  return (
    <div className='relative inline-block text-left' ref={dropdownRef}>
      {/* 장소 선택 버튼 */}
      <div>
        <span className='rounded-md shadow-sm'>
          <button
            type='button'
            className='inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none'
            id='options-menu'
            onClick={handleToggle}
          >
            {selectedOption?.label || '지역 선택'}
          </button>
        </span>
      </div>

      {isOpen && (
        <div className='absolute right-0 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
          <div className='flex'>
            {/* 첫 번째 열 */}
            <div className='mx-auto  w-1/2'>
              <div className='py-1'>
                {options
                  .slice(0, Math.ceil(options.length / 2))
                  .map((option) => (
                    <div key={option.label}>
                      <button
                        onClick={() => handleOptionClick(option)}
                        className='block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                        style={{ whiteSpace: 'nowrap' }}
                      >
                        {option.label}
                      </button>
                    </div>
                  ))}
              </div>
            </div>
            {/* 두 번째 열 */}
            <div className='mx-auto w-1/2'>
              <div className='py-1'>
                {options.slice(Math.ceil(options.length / 2)).map((option) => (
                  <div key={option.label}>
                    <button
                      onClick={() => handleOptionClick(option)}
                      className='block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      {option.label}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownLocation;
