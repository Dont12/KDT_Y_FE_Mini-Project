import React, { useCallback, useEffect, useRef, useState } from 'react';
import { CgChevronDown } from 'react-icons/cg';

import { Option } from '@/app/products/page';

interface DropdownCategoryProps {
  options: Option[];
  selectedOption: Option | null;
  onSelectOption: (option: Option | null) => void;
}

const DropdownCategory = ({
  options,
  selectedOption,
  onSelectOption,
}: DropdownCategoryProps) => {
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
      {/* 지역 선택 버튼 */}
      <div>
        <span className='rounded-md shadow-sm'>
          <button
            type='button'
            className=' flex bg-white'
            id='options-menu'
            onClick={handleToggle}
          >
            {selectedOption?.label || '지역 선택'}
            <CgChevronDown className='ml-2 mt-1 text-xl' />
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

export default DropdownCategory;
