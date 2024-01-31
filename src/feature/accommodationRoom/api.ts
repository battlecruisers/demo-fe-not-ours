import instance from '../../api/instance';
import { RoomInfoParams } from './RoomInformation.types';

export const getRoomInfoData = async ({
  id,
  reservationStartDate,
  reservationEndDate,
  member,
  roomType,
}: RoomInfoParams) => {
  try {
    const { data } = await instance.get(
      `http://localhost:8080/rooms/${id}?roomType=${roomType}`,
      {
        params: {
          startDate: reservationStartDate,
          endDate: reservationEndDate,
          guest: member,
          roomOptionId: id,
        },
      },
    );
    return data;
  } catch (error) {
    console.error('error get room information:', error);
  }
};
