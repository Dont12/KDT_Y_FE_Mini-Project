import Link from 'next/link';

interface Props {
  productId: number;
  productName: string;
  address: string;
}

const CartItemHeader = ({
  productId,
  productName,
  address,
}: Props): JSX.Element => {
  return (
    <div className='pt-5'>
      <Link href={`/detail/${productId}`}>
        <h2 className='mb-0.5 text-lg font-bold'>{productName}</h2>
      </Link>
      <div className='text-gray1 text-xs'>{address}</div>
    </div>
  );
};

export default CartItemHeader;
