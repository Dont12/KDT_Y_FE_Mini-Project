import ReservationConfirmContainer from '@/components/ReservationConfirmContainer';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import orderRequest from '../api/orderRequest';
import Header from '@/components/common/Header';
import HeaderNav from '@/components/common/HeaderNav';

const reservationConfirm = async () => {
  const response = await orderRequest.getOrderList();

  return (
    <div className='mx-auto min-h-screen max-w-3xl bg-white'>
      <Header>
        <HeaderNav showBack showCart showHome>
          국내 여행 예약 내역
        </HeaderNav>
      </Header>
      <main className='mt-12'>
        <div className=' flex'>
          <button className='border-mediumGray mx-10 mt-6 flex items-center justify-center rounded-md border border-solid px-5 py-1 '>
            <p className='tex-2xl'>최근 6개월</p>
            <MdOutlineKeyboardArrowDown />
          </button>
        </div>
        {response.data.map((order, orderIndex) => (
          <ReservationConfirmContainer
            key={orderIndex}
            orderId={order.orderId}
            createdDate={order.createdDate}
            orderItems={order.orderItems}
            isDate={true}
          />
        ))}

        <p className='text-mediumGray ml-10 mt-28 text-xs'>
          예약내역은 최대 2년까지 조회할 수 있으며, 삭제하신 내역은 노출되지
          않습니다.
        </p>
        <p className='ml-10 mr-10 mt-2 text-xs  text-gray-300'>
          (주)야놀자는 통신판매중개업자로서, 통신 판매자 당사자가 아니라는
          사실을 고지하며 상품의 결제, 이용 및 환불 등과 관련한 의무와 책임은 각
          판매자에게 있습니다.
        </p>
      </main>
    </div>
  );
};

export default reservationConfirm;

interface Order {
  orderId: number;
  createdDate: number;
  orderItems: OrderItem[];
}

interface OrderItem {
  orderItemId: number;
  productId: number;
  roomId: number;
  productName: string;
  imageUrl: string;
  roomName: string;
  baseGuestCount: number;
  maxGuestCount: number;
  checkInDate: string;
  checkInTime: string;
  checkOutDate: string;
  checkOutTime: string;
}
