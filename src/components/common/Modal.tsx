'use client';

import { useEffect } from 'react';

interface Props {
  title?: string;
  content?: string;
  cancel?: string;
  onCancelClick: VoidFunction;
  confirm?: string;
  onConfirmClick: VoidFunction;
}

const Modal = ({
  title = '삭제하시겠어요?',
  content,
  cancel = '아니요',
  onCancelClick,
  confirm = '삭제하기',
  onConfirmClick,
}: Props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className='fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-[rgba(0,0,0,0.5)]'>
      <div className='w-[18.5rem] rounded-2xl bg-white px-4 pb-2 pt-8'>
        <div className='mx-1 mb-4 text-center text-base font-bold text-black'>
          {title}
        </div>
        <div className='text-gray1 mx-1 mb-5 text-center text-sm'>
          {content}
        </div>
        <div className='flex items-center justify-center text-base'>
          <button
            className='text-gray1 mx-1 h-10 w-full flex-1'
            onClick={onCancelClick}
          >
            {cancel}
          </button>
          <button
            className='text-blue mx-1 h-10 flex-1 font-bold'
            onClick={onConfirmClick}
          >
            {confirm}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
