export function calculateTotalCost({
  checkInDate,
  checkOutDate,
  numberOfGuests,
  maxRoomCapacity,
  pricePerNight,
}: {
  checkInDate: string;
  checkOutDate: string;
  numberOfGuests: string;
  maxRoomCapacity: number;
  pricePerNight: number;
}): number {
  const checkIn = new Date(checkInDate);
  const checkOut = new Date(checkOutDate);

  const numberOfNights = Math.ceil(
    (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)
  );

  const totalGuests = Number(numberOfGuests);

  const numberOfRooms = Math.ceil(totalGuests / maxRoomCapacity);

  const totalCost = numberOfNights * numberOfRooms * pricePerNight;

  return totalCost;
}
