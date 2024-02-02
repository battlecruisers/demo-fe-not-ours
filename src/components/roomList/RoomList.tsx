import { RoomListProps } from './roomList.types';
import * as style from './roomList.styles';
import { ReservationProps } from '../../feature/reservation/components/ReservationSummary';

const RoomList = ({
  id,
  guest,
  reservationStartDate,
  reservationEndDate,
  stayDuration,
  price,
  reservationInfo,
}: ReservationProps) => {
  const afterStartDate = new Date(reservationStartDate);
  const afterEndDate = new Date(reservationEndDate);

  console.log(id);
  console.log(guest);
  console.log(reservationStartDate);
  console.log(reservationEndDate);
  console.log(stayDuration);
  console.log(price);
  console.log(reservationInfo);
  return reservationInfo == null ? (
    <>waiting...</>
  ) : (
    <style.RoomOptions>
      <style.RoomOptionImg
        src={reservationInfo.placeThumbnailImageUrl ?? 'asdf'}
        alt="숙소 사진"
      />

      <style.RoomOptionsText>
        <style.RoomOptionsName>
          {reservationInfo.roomName}
        </style.RoomOptionsName>
        <span>
          {afterStartDate.toDateString()} ~ {afterEndDate.toDateString()}
        </span>
        <style.RoomOptionsCapacity>
          {reservationInfo.capacity} 인
        </style.RoomOptionsCapacity>
      </style.RoomOptionsText>

      <style.RoomOptionsPrice>{price} 원</style.RoomOptionsPrice>
    </style.RoomOptions>
  );
};

export default RoomList;
