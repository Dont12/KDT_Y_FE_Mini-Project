import Header from '@/components/Common/Header';
import HeaderNav from '@/components/Common/HeaderNav';

const Mypage = () => {
  return (
    <>
      <Header>
        <HeaderNav showBack showHome showCart>
          마이페이지
        </HeaderNav>
      </Header>
      <main className='mt-14'>마이 페이지 내용 채우기</main>
    </>
  );
};

export default Mypage;
