import { RoomItemProps } from '../accommodationInformation/accommodationInformation.types';

export interface RoomInfoParams {
  id: string | undefined;
  reservationStartDate: string;
  reservationEndDate: string;
  member: number;
  roomType: string | null;
}

export interface RoomInfoProps {
  data: {
    status: number;
    data: RoomItemProps;
  };
}
