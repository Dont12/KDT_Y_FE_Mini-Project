import type { AppLayout } from '@/app/layout';

interface Props extends AppLayout {
  onClick: VoidFunction;
  disabled: boolean;
}

const CartHeaderButton = ({ children, onClick, disabled }: Props) => (
  <button
    type='button'
    disabled={disabled}
    onClick={onClick}
    className='hover:bg-skyBlue disabled:text-gray2 ml-2 p-2 disabled:bg-inherit'
  >
    {children}
  </button>
);

export default CartHeaderButton;
