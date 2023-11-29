export interface CartApiResponse {
  totalPrice: number;
  page: CartPage;
  items: CartItemInfo[];
}

export interface CartPage {
  size: number;
  maxPage: number;
  totalCount: number;
}

export interface CartItemInfo {
  id: number;
  product: CartProductInfo;
  checkInDate: string;
  checkOutDate: string;
  numberOfNights: number;
}

export interface CartProductInfo {
  productId: number;
  roomId: number;
  productName: string;
  imageUrl: string;
  address: string;
  roomName: string;
  baseGuestCount: number;
  maxGuestCount: number;
  price: number;
  checkInTime: string;
  checkOutTime: string;
  stock: number;
  guestCount: number;
}

export interface PreCartProduct {
  productId: number;
  productName: string;
  address: string;
  cartRoomList: PreCartRoom[];
}

export interface PreCartRoom {
  id: number;
  roomId: number;
  roomName: string;
  imageUrl: string;
  checkInTime: string;
  checkOutTime: string;
  numberOfNights: number;
  checkInDate: string;
  checkOutDate: string;
  baseGuestCount: number;
  maxGuestCount: number;
  price: number;
  stock: number;
  guestCount: number;
}

export interface PushCartProps {
  roomId: number;
  checkInDate: string;
  checkOutDate: string;
  guestCount: string;
}

export interface PushCartResponse {
  status: string;
}
