import Image from 'next/image';

const EmptyCartItem = () => {
  return (
    <div className='flex flex-col items-center bg-white py-8'>
      <div className='my-4'>
        <Image
          src='/svg/cartIcon.svg'
          width={48}
          height={48}
          alt='장바구니 아이콘'
        />
      </div>
      <div className='text-base'>장바구니에 담긴 상품이 없습니다</div>
      <div className='text-gray4 text-sm'>원하는 상품을 담아보세요</div>
      <button
        type='button'
        className='border-blue text-blue mt-4 w-40 rounded border border-solid bg-white px-4 py-2 text-sm'
      >
        홈으로 가기
      </button>
    </div>
  );
};

export default EmptyCartItem;
