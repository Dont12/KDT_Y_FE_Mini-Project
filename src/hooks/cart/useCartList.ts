import { useEffect, useState } from 'react';

import type { CartItemInfo, PreppedCartProduct } from '@/@types/cart.types';

const useCartList = (apiCartList: CartItemInfo[]) => {
  const [preppedProductList, setPreppedProductList] = useState<
    PreppedCartProduct[]
  >([]);

  useEffect(() => {
    setPreppedProductList([]);

    apiCartList.map((item) => {
      setPreppedProductList((prevPreppedProductList) => {
        const existingIndex = prevPreppedProductList.findIndex(
          (prevPreppedProductItem) =>
            prevPreppedProductItem.productId === item.product.productId
        );

        // 배열 안에 숙소가 존재하면
        if (existingIndex !== -1) {
          return prevPreppedProductList.map((prevPreppedProductItem, index) => {
            // 숙소 안에 방만 추가
            if (index === existingIndex) {
              return {
                ...prevPreppedProductItem,
                cartRoomList: [
                  ...prevPreppedProductItem.cartRoomList,
                  {
                    id: item.id,
                    roomId: item.product.roomId,
                    imageUrl: item.product.imageUrl,
                    roomName: item.product.roomName,
                    baseGuestCount: item.product.baseGuestCount,
                    maxGuestCount: item.product.maxGuestCount,
                    price: item.product.price,
                    checkInTime: item.product.checkInTime,
                    checkOutTime: item.product.checkOutTime,
                    stock: item.product.stock,
                    checkInDate: item.checkInDate,
                    checkOutDate: item.checkOutDate,
                    numberOfNights: item.numberOfNights,
                    guestCount: item.product.guestCount,
                  },
                ],
              };
            }
            return prevPreppedProductItem;
          });
        }

        // 존재하지 않으면 숙소 및 방 추가
        return [
          ...prevPreppedProductList,
          {
            productId: item.product.productId,
            productName: item.product.productName,
            address: item.product.address,
            cartRoomList: [
              {
                id: item.id,
                roomId: item.product.roomId,
                imageUrl: item.product.imageUrl,
                roomName: item.product.roomName,
                baseGuestCount: item.product.baseGuestCount,
                maxGuestCount: item.product.maxGuestCount,
                price: item.product.price,
                checkInTime: item.product.checkInTime,
                checkOutTime: item.product.checkOutTime,
                stock: item.product.stock,
                checkInDate: item.checkInDate,
                checkOutDate: item.checkOutDate,
                numberOfNights: item.numberOfNights,
                guestCount: item.product.guestCount,
              },
            ],
          },
        ];
      });
    });
  }, [apiCartList]);

  return preppedProductList;
};

export default useCartList;
