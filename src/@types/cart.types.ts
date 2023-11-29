export interface ApiCartItem {
  id: number;
  product: ApiRoomItem;
  checkInDate: string;
  checkOutDate: string;
  numberOfNights: number;
}

export interface ApiRoomItem {
  productId: number;
  roomId: number;
  productName: string;
  address: string;
  imageUrl: string;
  roomName: string;
  baseGuestCount: number;
  maxGuestCount: number;
  price: number;
  checkInTime: string;
  checkOutTime: string;
  stock: number;
}

export interface CartProduct {
  productId: number;
  productName: string;
  address: string;
  cartRoomList: CartRoom[];
}

export interface CartRoom {
  id: number;
  roomId: number;
  imageUrl: string;
  roomName: string;
  baseGuestCount: number;
  maxGuestCount: number;
  price: number;
  checkInTime: string;
  checkOutTime: string;
  stock: number;
  checkInDate: string;
  checkOutDate: string;
  numberOfNights: number;
}

export interface PushCartProps {
  roomId: number;
  checkInDate: string;
  checkOutDate: string;
  guestCount: string;
}

export interface isCartPropsValid extends PushCartProps {
  roomStock: number;
  maxguest: number;
}

export interface PushCartResponse {
  status: string;
}
