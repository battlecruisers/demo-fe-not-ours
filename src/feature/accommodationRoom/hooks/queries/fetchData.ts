import { useQuery } from '@tanstack/react-query';
import { getRoomInfoData } from '../../api';
import { RoomInfoParams } from '../../RoomInformation.types';

export const useRoomInfoQuery = ({
  id,
  reservationStartDate,
  reservationEndDate,
  member,
  roomType,
}: RoomInfoParams) => {
  return useQuery({
    queryKey: ['getRoomInfoData', id],
    queryFn: () =>
      getRoomInfoData({
        id,
        reservationStartDate,
        reservationEndDate,
        member,
        roomType,
      }),
  });
};
