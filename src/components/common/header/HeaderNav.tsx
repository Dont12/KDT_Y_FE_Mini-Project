'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CgChevronLeft } from 'react-icons/cg';

import HeaderIcon from './HeaderIcon/HeaderIcon';

interface Props {
  showLogo?: boolean;
  showBack?: boolean;
  children?: React.ReactNode;
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
          <HeaderIcon href='/' imgSrc='/svg/homeIcon.svg' imgAlt='홈 아이콘' />
        )}
        {showCart && (
          <HeaderIcon
            href='/cart'
            imgSrc='/svg/cartIcon.svg'
            imgAlt='장바구니 아이콘'
          />
        )}
        {showMyPage && (
          <HeaderIcon
            href='/mypage'
            imgSrc='/svg/myPageIcon.svg'
            imgAlt='마이페이지 아이콘'
          />
        )}
      </div>
    </nav>
  );
};

export default HeaderNav;
