import React from 'react';

const CheckBoxItem = ({ content }) => {
  return (
    <label className='m-2 block'>
      <input type='checkbox' className='mr-2 mt-2' />
      {content}
    </label>
  );
};

export default CheckBoxItem;
