import Image from 'next/image';
import { IoLogoGithub } from 'react-icons/io';

import FooterButton from './FooterButton';
import FooterGithub from './FooterGithub';

const Footer = () => {
  return (
    <footer className='text-gray1 m-5 text-sm'>
      <Image src='/svg/footerLogo.svg' width={74} height={21} alt='스테이인' />
      <div className='my-5 flex flex-col gap-1'>
        <strong className='mb-1'>STAYINN 스테이인</strong>
        <div className='flex'>
          <span className='mr-2 whitespace-nowrap'>FE :</span>
          <ul className='flex flex-wrap gap-2'>
            <FooterGithub href='https://github.com/NamgungJongMin'>
              남궁종민
            </FooterGithub>
            <FooterGithub href='https://github.com/HOOOO98'>
              박성후
            </FooterGithub>
            <FooterGithub href='https://github.com/jseo9732'>
              서지수
            </FooterGithub>
            <FooterGithub href='https://github.com/moonyah'>
              장문용
            </FooterGithub>
            <FooterGithub href='https://github.com/jinjoo-jung'>
              정진주
            </FooterGithub>
          </ul>
        </div>
        <div className='flex'>
          <span className='mr-2 whitespace-nowrap'>BE :</span>
          <ul className='flex flex-wrap gap-2'>
            <FooterGithub href='https://github.com/deepredk'>
              김진홍
            </FooterGithub>
            <FooterGithub href='https://github.com/Aleexender'>
              김정훈
            </FooterGithub>
            <FooterGithub href='https://github.com/cyPark95'>
              박찬영
            </FooterGithub>
          </ul>
        </div>
      </div>
      <div>
        <a href='https://github.com/Dont12' target='_blank' className='my-5'>
          <IoLogoGithub className='text-4xl' />
        </a>
      </div>
      <ul className='my-5 flex flex-wrap gap-1'>
        <FooterButton href='https://yanolja.in/ko/companyinfo/'>
          회사소개
        </FooterButton>
        <FooterButton href='mailto:jmnamgung@gmail.com'>
          광고제휴문의
        </FooterButton>
        <FooterButton href='https://careers.yanolja.co'>인재채용</FooterButton>
        <FooterButton href='http://m.policy.yanolja.com?t=privacy&amp;d=m'>
          <strong>개인정보처리방침</strong>
        </FooterButton>
        <FooterButton href='https://policy.yanolja.com/?t=youth'>
          청소년 보호 정책
        </FooterButton>
        <FooterButton href='http://m.policy.yanolja.com?t=service&amp;d=m'>
          서비스 이용약관
        </FooterButton>
        <FooterButton href='http://m.policy.yanolja.com/?t=location&amp;d=m'>
          위치정보이용약관
        </FooterButton>
        <FooterButton href='http://www.ftc.go.kr/info/bizinfo/communicationViewPopup.jsp?wrkr_no=2208742885'>
          사업자 정보확인
        </FooterButton>
        <FooterButton href='https://policy.yanolja.com/policy/?t=terms-eft'>
          전자금융거래 이용약관
        </FooterButton>
        <FooterButton href='https://policy.yanolja.com/policy/?t=notes-eft'>
          전자금융거래 이용자 유의사항
        </FooterButton>
      </ul>
      <div className='flex flex-col gap-2'>
        <span>
          스테이인은 통신판매 중개자로서 통신판매의 당사자가 아니며 상품의 예약,
          이용 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
        </span>
        <span>
          (주)야놀자가 소유/운영/관리하는 웹사이트 및 앱 내의 상품/판매자/이벤트
          정보, 디자인 및 화면의 구성, UI를 포함하여 콘텐츠등을 참고하였습니다.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
