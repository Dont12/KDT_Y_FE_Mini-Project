import { FaGithubAlt } from 'react-icons/fa';

interface Props {
  href: string;
  children: React.ReactNode;
}

const FooterGithub = ({ href, children }: Props) => (
  <li>
    <a href={href} target='_blank'>
      <div className='flex items-center'>
        {children} <FaGithubAlt className='inline text-base' />
      </div>
    </a>
  </li>
);

export default FooterGithub;
