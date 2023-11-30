interface Props {
  href: string;
  isStrong?: boolean;
  children: React.ReactNode;
}

const FooterButton = ({ href, children, isStrong = false }: Props) => {
  return (
    <li className='footer-button px-[0.3125rem] py-1'>
      <a href={href} target='_blank'>
        {isStrong ? <strong>{children}</strong> : <>{children}</>}
      </a>
    </li>
  );
};

export default FooterButton;
