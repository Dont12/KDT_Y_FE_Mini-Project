import Link from 'next/link';

import { SigninForm } from '@/components/auth';
import Header from '@/components/common/Header';
import HeaderNav from '@/components/common/HeaderNav';

import authRequest from '@/app/api/authRequest';

const SignIn = () => {
  const checkSignin = async () => {
    try {
      await authRequest.getUser();

      // router.replace('/');
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   checkSignin();
  // }, []);

  return (
    <>
      <Header>
        <HeaderNav showBack>로그인</HeaderNav>
      </Header>

      <main className='w-full '>
        <SigninForm />
        <Link href='/auth/signup' className='mt-10 flex justify-center'>
          <div className='text-darkGray cursor-default'>
            아직 회원이 아니신가요?
            <span className='hover:text-blue ml-2 cursor-pointer underline'>
              이메일로 회원가입
            </span>
          </div>
        </Link>
      </main>
    </>
  );
};

export default SignIn;
