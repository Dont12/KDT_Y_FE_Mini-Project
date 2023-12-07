import Image from 'next/image';
import Link from 'next/link';

interface Props {
  href: string;
  imgSrc: string;
  imgAlt: string;
}

const HeaderIcon = ({ href, imgSrc, imgAlt }: Props) => {
  return (
    <Link href={href} className='flex h-10 w-10 items-center justify-center'>
      <Image src={imgSrc} width={24} height={24} alt={imgAlt} />
    </Link>
  );
};

export default HeaderIcon;
