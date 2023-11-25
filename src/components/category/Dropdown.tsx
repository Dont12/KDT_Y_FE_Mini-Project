import React, { useEffect, useRef, useState } from 'react';

interface Option {
  label: string;
  subOptions?: string[];
}

interface DropdownProps {
  options: Option[];
  selectedOption: Option | null;
  onSelectOption: (option: Option | null) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedOption,
  onSelectOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    onSelectOption(option);

    // 서브 옵션이 있는 경우에만 토글을 닫음
    if (!option.subOptions) {
      setIsOpen(false);
    }
  };

  const handleOutsideClick = (event: Event) => {
    if (
      isOpen &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className='relative inline-block text-left' ref={dropdownRef}>
      <div>
        <span className='rounded-md shadow-sm'>
          <button
            type='button'
            className='inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none'
            id='options-menu'
            onClick={handleToggle}
          >
            {selectedOption?.label || '지역 선택'}
          </button>
        </span>
      </div>

      {isOpen && (
        <div className='absolute right-0 mt-2 w-80 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
          <div className='flex'>
            {/* 왼쪽 컬럼 - 대분류 */}
            <div className='w-1/2'>
              <div className='py-1'>
                {options.map((option) => (
                  <div key={option.label}>
                    <button
                      onClick={() => handleOptionClick(option)}
                      className='block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    >
                      {option.label}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            {/* 오른쪽 컬럼 - 서브 옵션 */}
            <div className='w-3/4 pl-4'>
              {selectedOption?.subOptions && (
                <div className='flex flex-wrap py-1'>
                  {selectedOption.subOptions.map((subOption) => (
                    <button
                      key={subOption}
                      onClick={() => handleOptionClick({ label: subOption })}
                      className='block w-1/2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    >
                      {subOption}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
