export interface CartItem {
  id: number;
  product: Product;
  checkInDate: string;
  checkOutDate: string;
  numberOfNights: number;
}

export interface Product {
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
