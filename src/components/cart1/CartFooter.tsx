interface Props {
  selectCount: number;
  totalPrice: number;
}

const CartFooter = ({ selectCount, totalPrice }: Props): JSX.Element => {
  return (
    <div className='shadow-top fixed bottom-0 left-0 w-full bg-white'>
      <div className='mx-auto w-[48rem] px-5 pb-3 pt-4'>
        <div className='flex items-center justify-between'>
          <div className='text-sm font-bold'>총 {selectCount}건</div>
          <div className='flex items-center gap-2'>
            <div className='text-gray4 text-xs font-light'>결제 예상 금액</div>
            <div className='text-xl font-bold'>
              {totalPrice.toLocaleString('ko-KR')}원
            </div>
          </div>
        </div>
        <button
          type='button'
          className='bg-mainButton hover:bg-mainButtonHov mt-4 w-full rounded-lg px-4 py-3 text-base font-bold text-white'
        >
          <div>예약하기</div>
        </button>
        <div className='mt-3'>
          <span className='text-gray1 text-xs font-light'>
            STAYINN은 통신판매중개업자로서, 통신판매의 당사자가 아니라는 사실을
            고지하며 상품의 예약, 이용 및 환불 등과 관련한 의무와 책임은 각
            판매자에게 있습니다.
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartFooter;
