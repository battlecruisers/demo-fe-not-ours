import ReservationCaution from './ReservationCaution';
import ReservationRooms from './ReservationRooms';
import { ReservationWrapper } from '../styles/reservationWrapper';
import { RoomReservationProp } from '../../../pages/Reservation';

export interface ReservationProps {
  id: number;
  price: number;
  guest: number;
  reservationEndDate: Date;
  reservationStartDate: Date;
  stayDuration: number;
  reservationInfo?: RoomReservationProp;
}

const ReservationSummary = ({
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
  return (
    <ReservationWrapper>
      <ReservationCaution />
      <ReservationRooms
        id={id}
        guest={guest}
        reservationStartDate={reservationStartDate}
        reservationEndDate={reservationEndDate}
        stayDuration={stayDuration}
        price={totalPrice}
        reservationInfo={reservationInfo}
      />
    </ReservationWrapper>
  );
};

export default ReservationSummary;
