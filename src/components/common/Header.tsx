'use client';

import { throttle } from 'lodash';
import { useEffect, useMemo, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

const Header = ({ children }: Props): JSX.Element => {
  const [showShadow, setShowShadow] = useState(false);

  const throttledScroll = useMemo(
    () =>
      throttle(() => {
        if (window.scrollY > 10) {
          setShowShadow(true);
        } else {
          setShowShadow(false);
        }
      }, 300),
    []
  );

  useEffect(() => {
    if (window.scrollY > 10) setShowShadow(true);
    window.addEventListener('scroll', throttledScroll);
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 min-h-[3rem] w-full bg-white ${
        showShadow && 'shadow'
      }`}
    >
      <div className='mx-auto max-w-[48rem]'>{children}</div>
    </header>
  );
};

export default Header;
