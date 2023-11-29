export interface OrderItem {
  orderToken: string;
  totalPrice: number;
  name: string;
  phone: string;
  registerOrderItems: RegisterOrderItems[];
}

export interface RegisterOrderItems {
  productId: number;
  productName: string;
  imageUrl: string;
  roomId: number;
  roomName: string;
  guestCount: number;
  maxGuestCount: number;
  baseGuestCount: number;
  price: number;
  checkInTime: string;
  checkInDate: string;
  checkOutTime: string;
  checkOutDate: string;
}
export interface PaymentData {
  orderToken: string;
  userName: string;
  userPhone: string;
  totalPrice: number;
  payment: string;
}

export interface PaymentData {
  orderToken: string;
  userName: string;
  userPhone: string;
  totalPrice: number;
  payment: string;
}
