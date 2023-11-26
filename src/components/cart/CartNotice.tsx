const CartNotice = (): JSX.Element => {
  return (
    <section className='mt-3 bg-white p-5'>
      <ul className='text-gray1 text-xs'>
        <li className="mar relative ml-3 before:absolute before:left-[-0.75rem] before:content-['•']">
          장바구니에 담긴 상품은 최대 30일간 보관되며 최대 20개의 상품을 담을 수
          있습니다.
        </li>
        <li className="mar relative ml-3 before:absolute before:left-[-0.75rem] before:content-['•']">
          장바구니에서 수량 및 상세 옵션 수정이 불가하므로 삭제 후 다시
          담아주시기 바랍니다.
        </li>
      </ul>
    </section>
  );
};

export default CartNotice;
