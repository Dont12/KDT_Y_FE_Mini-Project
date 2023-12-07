import Link from 'next/link';

import { SigninForm } from '@/components/auth';
import { Header, HeaderNav } from '@/components/common';

const SignIn = () => (
  <>
    <Header>
      <HeaderNav showBack>로그인</HeaderNav>
    </Header>

    <main className='w-full '>
      <SigninForm />
      <Link href='/auth/signup' className='mt-6 flex justify-center'>
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

export default SignIn;
