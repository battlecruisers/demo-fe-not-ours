import RoomList from '../../../components/roomList/RoomList';
import TransportationRadio from './TransportationRadio';
import * as common from '../../cart/styles/cartRoom';
import { ReservationProps } from './ReservationSummary';

const ReservationRooms = ({
  id,
  guest,
  reservationStartDate,
  reservationEndDate,
  stayDuration,
  price: totalPrice,
  reservationInfo,
}: ReservationProps) => {
  console.log(id);
  console.log(guest);
  console.log(reservationStartDate);
  console.log(reservationEndDate);
  console.log(stayDuration);
  console.log(totalPrice);
  console.log(reservationInfo);
  return reservationInfo == null ? (
    <>waiting...</>
  ) : (
    <>
      <common.AccommodationList
        key={`accommodation-list-${reservationInfo.placeId}`}
      >
        <common.Accommodation
          href={'/accommodation/' + reservationInfo.placeId}
        >
          <common.AccommodationName>
            {reservationInfo.placeName}
          </common.AccommodationName>
          <common.AccommodationAddress>
            {reservationInfo.address}
          </common.AccommodationAddress>
        </common.Accommodation>

        <RoomList
          id={id}
          guest={guest}
          reservationStartDate={reservationStartDate}
          reservationEndDate={reservationEndDate}
          stayDuration={stayDuration}
          price={totalPrice}
          reservationInfo={reservationInfo}
        />
      </common.AccommodationList>
    </>
  );
};

export default ReservationRooms;
