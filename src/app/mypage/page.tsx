'use client';

import { useEffect, useState } from 'react';

import { Footer, Header, HeaderNav } from '@/components/common';
import {
  ChangePasswordButton,
  ChangePasswordModal,
  HistoryButton,
  LogoutButton,
  WithdrawalButton,
  WithdrawalModal,
} from '@/components/mypage';

import { UserInfo } from '@/@types/mypage.types';

import authRequest from '../../api/authRequest';

const Mypage = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [passwordChangeModal, setPasswordChangeModal] =
    useState<boolean>(false);
  const [withdrawalModal, setWithdrawalModal] = useState<boolean>(false);

  const checkSignin = async () => {
    try {
      const res = await authRequest.getUser();
      setUserInfo(res.data);
      console.log('현재 로그인이 되어있습니다.', res);
    } catch (error) {
      console.log('로그인이 필요합니다.', error);
    }
  };

  const toggleModal = (state: boolean, setState: (value: boolean) => void) => {
    setState(!state);
  };

  useEffect(() => {
    checkSignin();
  }, []);

  return (
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
              {userInfo?.nickname}
            </p>
          </div>
          <div className='my-4 '>
            <p className='my-2 font-semibold'>이메일</p>
            <p className='border-lightGray flex h-14 items-center rounded-[10px] border-2 px-4'>
              {userInfo?.email}
            </p>
          </div>
          <div className='my-4'>
            <p className='my-2 font-semibold'>핸드폰 번호</p>
            <p className='border-lightGray flex h-14 items-center rounded-[10px] border-2 px-4'>
              {userInfo?.phone}
            </p>
          </div>
        </section>

        <HistoryButton />
        <LogoutButton />
        <ChangePasswordButton
          toggleModal={toggleModal}
          passwordChangeModal={passwordChangeModal}
          setPasswordChangeModal={setPasswordChangeModal}
        />
        <WithdrawalButton
          toggleModal={toggleModal}
          withdrawalModal={withdrawalModal}
          setWithdrawalModal={setWithdrawalModal}
        />
      </main>

      {passwordChangeModal && (
        <ChangePasswordModal
          toggleModal={toggleModal}
          passwordChangeModal={passwordChangeModal}
          setPasswordChangeModal={setPasswordChangeModal}
        />
      )}

      {withdrawalModal && (
        <WithdrawalModal
          toggleModal={toggleModal}
          withdrawalModal={withdrawalModal}
          setWithdrawalModal={setWithdrawalModal}
        />
      )}
      <Footer />
    </>
  );
};

export default Mypage;
