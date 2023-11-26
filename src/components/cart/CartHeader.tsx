interface Props {
  selectCount: number;
  totalCount: number;
}

const CartHeader = ({ selectCount, totalCount }: Props): JSX.Element => {
  return (
    <div className='flex h-12 items-center justify-between px-5'>
      <div className='flex'>
        <input type='checkbox' />
        <div className='ml-2 text-xs'>
          전체 선택 ({selectCount}/{totalCount})
        </div>
      </div>
      <div className='text-blue flex text-xs'>
        <button className='hover:bg-skyBlue ml-2 p-2'>예약불가 삭제</button>
        <button className='hover:bg-skyBlue ml-2 p-2'>선택 삭제</button>
      </div>
    </div>
  );
};

export default CartHeader;
