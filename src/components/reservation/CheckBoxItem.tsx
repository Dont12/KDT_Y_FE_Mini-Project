import React from 'react';

interface CheckBox {
  content: string;
  required: boolean;
}

const CheckBoxItem = ({ content, required }: CheckBox) => (
  <label className='m-2 block'>
    <input type='checkbox' className='mr-2 mt-2' required={required} />
    {content}
  </label>
);

export default CheckBoxItem;
