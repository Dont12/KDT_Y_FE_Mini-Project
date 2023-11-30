export interface PushOrderListProps {
  productId: number;
  roomId: number;
  checkInDate: string;
  checkInTime: string;
  checkOutDate: string;
  checkOutTime: string;
  guestCount: number;
  price: number;
}

export interface OrderButtonProps extends PushOrderListProps {
  stock: number;
  maxguest: number;
}

export interface PushOrderElementResponse {
  status: string;
  data: OrderTokenResponse;
}

export interface OrderTokenResponse {
  orderToken: string;
}
