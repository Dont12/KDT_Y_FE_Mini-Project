const CartNotice = () => {
  return (
    <section className='mt-3 bg-white p-5'>
      <ul className='text-gray1 text-xs'>
        <li className="mar relative ml-3 before:absolute before:left-[-0.75rem] before:content-['•']">
          장바구니에서 수량 및 상세 옵션 수정이 불가하므로 삭제 후 다시
          담아주시기 바랍니다.
        </li>
        <li className="mar relative ml-3 before:absolute before:left-[-0.75rem] before:content-['•']">
          STAYINN은 통신판매중개업자로서, 통신판매의 당사자가 아니라는 사실을
          고지하며 상품의 예약, 이용 및 환불 등과 관련한 의무와 책임은 각
          판매자에게 있습니다.
        </li>
      </ul>
    </section>
  );
};

export default CartNotice;
