import { useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';

import cartRequest from '@/api/cartRequest';
import { cartSelectedState } from '@/recoil/atoms/cartState';

import CartTotalPrice from './CartTotalPrice';
import SubmitButton from '../../common/SubmitButton';

const CartFooter = () => {
  const selectedCartList = useRecoilValue(cartSelectedState);

  const router = useRouter();
  const onReserveClick = async () => {
    try {
      const res = await cartRequest.reserveCarts(selectedCartList);
      if (res.status === 'SUCCESS') {
        router.push(`/reservation/${res.data.orderToken}`);
      } else if (res.status === 'FAIL') {
        // 실패 에러 처리
      } else if (res.status === 'ERROR') {
        // 서버 오류 에러 처리
      }
    } catch (error) {
      console.error('reserve carts errer: ', error);
    }
  };

  return (
    <div className='shadow-top fixed bottom-0 left-0 w-full bg-white'>
      <div className='mx-auto w-[48rem] px-5 pb-5 pt-4'>
        <div className='flex items-center justify-between'>
          <div className='text-sm font-bold'>
            총 {selectedCartList.length}건
          </div>
          <div className='flex items-center gap-2'>
            <div className='text-gray4 text-xs'>결제 예상 금액</div>
            <CartTotalPrice />
          </div>
        </div>
        <SubmitButton
          type='button'
          content='예약하기'
          activate={selectedCartList.length > 0}
          className='mt-4'
          onClick={onReserveClick}
        />
        {/* <div className='mt-3'>
          <span className='text-gray1 text-xs'>
            STAYINN은 통신판매중개업자로서, 통신판매의 당사자가 아니라는 사실을
            고지하며 상품의 예약, 이용 및 환불 등과 관련한 의무와 책임은 각
            판매자에게 있습니다.
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default CartFooter;
