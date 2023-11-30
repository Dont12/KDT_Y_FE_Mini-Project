import Image from 'next/image';
import { IoLogoGithub } from 'react-icons/io';

import { FooterButton, FooterGithub } from './';
import { BACKS, FOOTERINFOS, FRONTS } from './Footer.constant';

const Footer = () => {
  return (
    <footer className='text-gray1 m-5 text-sm'>
      <Image src='/svg/footerLogo.svg' width={74} height={21} alt='스테이인' />
      <div className='my-5 flex flex-col gap-1'>
        <strong className='mb-1'>STAYINN 스테이인</strong>
        <div className='flex'>
          <span className='mr-2 whitespace-nowrap'>FE :</span>
          <ul className='flex flex-wrap gap-2'>
            {FRONTS.map((front) => (
              <FooterGithub key={front.name} href={front.githubUrl}>
                {front.name}
              </FooterGithub>
            ))}
          </ul>
        </div>
        <div className='flex'>
          <span className='mr-2 whitespace-nowrap'>BE :</span>
          <ul className='flex flex-wrap gap-2'>
            {BACKS.map((back) => (
              <FooterGithub key={back.name} href={back.githubUrl}>
                {back.name}
              </FooterGithub>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <a href='https://github.com/Dont12' target='_blank' className='my-5'>
          <IoLogoGithub className='text-4xl' />
        </a>
      </div>
      <ul className='my-5 flex flex-wrap gap-1'>
        {FOOTERINFOS.map((footerInfo) => (
          <FooterButton
            key={footerInfo.label}
            href={footerInfo.url}
            isStrong={footerInfo.isStrong}
          >
            {footerInfo.label}
          </FooterButton>
        ))}
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
