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
