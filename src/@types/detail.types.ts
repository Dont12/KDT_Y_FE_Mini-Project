export interface Room {
  id: number;
  name: string;
  basicGuestCount: number;
  maxGuestCount: number;
  price: number;
  checkInTime: string;
  checkOutTime: string;
  imageUrl: string;
  reserveDate: string;
  stock: number;
  roomBathFacility: string;
  roomBath: string;
  roomHomeTheater: string;
  roomAircondition: string;
  roomTv: string;
  roomPc: string;
  roomCable: string;
  roomInternet: string;
  roomRefrigerator: string;
  roomToiletries: string;
  roomSofa: string;
  roomCook: string;
  roomTable: string;
  roomHairdryer: string;
}

export interface DetailResponse {
  data: HotelData;
}

export interface HotelData {
  id: number;
  name: string;
  zipCode: string;
  address: string;
  description: string;
  longitude: string;
  latitude: string;
  imageUrls: string[];
  rooms: Room[];
}

export interface DetailProps {
  id: string;
  checkIn: string;
  checkOut: string;
}

export interface DatePickerProps {
  roomId: string;
  checkIn: string;
  checkOut: string;
  guest: string;
}
