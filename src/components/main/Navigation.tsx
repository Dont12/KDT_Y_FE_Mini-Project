// components/main/Navigation.tsx

import React from 'react';

interface NavigationProps {
  locations: string[];
  onSelectLocation: (location: string) => void;
  selectedLocation: string | null;
}

const Navigation = ({
  locations,
  onSelectLocation,
  selectedLocation,
}: NavigationProps) => {
  return (
    <div className='mb-6 flex justify-evenly border-b border-t text-xs'>
      {locations.map((location, index) => (
        <div
          key={index}
          className={`mr-4 cursor-pointer p-3 ${
            selectedLocation === location ? 'border-b-2 border-black' : ''
          }`}
          onClick={() => onSelectLocation(location)}
        >
          {location}
        </div>
      ))}
    </div>
  );
};

export default Navigation;
