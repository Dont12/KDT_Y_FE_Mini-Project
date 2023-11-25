'use client';
import React from 'react';

const Toast = ({ message }: any) => (
  <div className='bg-mainButton fixed bottom-4 left-1/2 translate-x-[-50%] rounded-lg p-4 text-white shadow-[0px_0px_10px_rgba(0,0,0,0.5)]'>
    <div>{message}</div>
  </div>
);

export default Toast;
