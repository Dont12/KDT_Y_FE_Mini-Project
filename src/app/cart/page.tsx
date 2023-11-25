import Header from '@/components/common/Header';
import HeaderNav from '@/components/common/HeaderNav';

const Cart = () => {
  return (
    <>
      <Header>
        <HeaderNav showBack showHome showMyPage>
          장바구니
        </HeaderNav>
        <div className='flex h-12 items-center justify-between px-5'>
          <div className='flex'>
            <label className='platform-site-1463o8k'>
              <div className='platform-site-1s974w9'>
                <input
                  type='checkbox'
                  className='platform-site-pcxqtt'
                  value=''
                  checked={true}
                />
                <div className='platform-site-1w3cgof'></div>
              </div>
            </label>
            <div className='platform-site-5a2ke4'>전체 선택 (1/5)</div>
          </div>
          <div className='flex'>
            <div className='platform-site-thmq61'>예약불가삭제</div>
            <div className='platform-site-thmq61'>선택 삭제</div>
          </div>
        </div>
      </Header>
      <main className='mt-[7.25rem]'>임시 장바구니</main>
    </>
  );
};

export default Cart;
