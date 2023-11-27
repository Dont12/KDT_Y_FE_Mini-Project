import Header from '@/components/common/Header';
import HeaderNav from '@/components/common/HeaderNav';
import { HistoryButton, LogoutButton } from '@/components/mypage';

const Mypage = () => (
  <>
    <Header>
      <HeaderNav showBack showHome showCart>
        마이페이지
      </HeaderNav>
    </Header>
    <main className='mt-12 w-full bg-white px-12 pb-10'>
      <section className='py-8'>
        <div className='my-4'>
          <p className='my-2 font-semibold'>이름</p>
          <p className='border-lightGray flex h-14 items-center rounded-[10px] border-2 px-4'>
            고길동
          </p>
        </div>
        <div className='my-4 '>
          <p className='my-2 font-semibold'>이메일</p>
          <p className='border-lightGray flex h-14 items-center rounded-[10px] border-2 px-4'>
            vbghdl@naver.com
          </p>
        </div>
        <div className='my-4'>
          <p className='my-2 font-semibold'>휴대폰 번호</p>
          <p className='border-lightGray flex h-14 items-center rounded-[10px] border-2 px-4'>
            010-6428-6518
          </p>
        </div>
      </section>

      <HistoryButton />
      <LogoutButton />
    </main>
  </>
);

export default Mypage;
