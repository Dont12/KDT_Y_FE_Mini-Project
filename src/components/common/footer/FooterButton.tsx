interface Props {
  href: string;
  children: React.ReactNode;
}

const FooterButton = ({ href, children }: Props) => {
  return (
    <li className='footer-button px-[0.3125rem] py-1'>
      <a href={href} target='_blank'>
        {children}
      </a>
    </li>
  );
};

export default FooterButton;
