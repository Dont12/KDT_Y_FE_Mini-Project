'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CgChevronLeft } from 'react-icons/cg';

interface Props {
  showLogo?: boolean;
  showBack?: boolean;
  children: React.ReactNode;
  showCart?: boolean;
  showHome?: boolean;
  showMyPage?: boolean;
}

const HeaderNav = ({
  showLogo = false,
  showBack = false,
  children,
  showCart = false,
  showHome = false,
  showMyPage = false,
}: Props) => {
  const router = useRouter();
  const onBackClick = () => {
    router.back();
  };

  return (
    <nav className='relative flex h-12 items-center justify-center px-3'>
      {showLogo && (
        <Link href='/' className='absolute left-3 m-2'>
          <Image src='/svg/logo.svg' width={130} height={39} alt='logo' />
        </Link>
      )}
      {showBack && (
        <button
          type='button'
          className='absolute left-3 m-2'
          onClick={onBackClick}
        >
          <CgChevronLeft className='text-2xl' />
        </button>
      )}
      <div className='text-lg font-bold'>{children}</div>
      <div className='absolute right-3 flex'>
        {showHome && (
          <Link href='/' className='flex h-10 w-10 items-center justify-center'>
            <Image
              src='/svg/homeIcon.svg'
              width={24}
              height={24}
              alt='홈 아이콘'
            />
          </Link>
        )}
        {showCart && (
          <Link
            href='/cart'
            className='flex h-10 w-10 items-center justify-center'
          >
            <Image
              src='/svg/cartIcon.svg'
              width={24}
              height={24}
              alt='장바구니 아이콘'
            />
          </Link>
        )}
        {showMyPage && (
          <Link
            href='/mypage'
            className='flex h-10 w-10 items-center justify-center'
          >
            <Image
              src='/svg/myPageIcon.svg'
              width={24}
              height={24}
              alt='마이페이지 아이콘'
            />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default HeaderNav;
