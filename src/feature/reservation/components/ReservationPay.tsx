import { useState } from 'react';
import RequirementsPrePay from './RequirementsPrePay';
import ReservationPayBtn from './ReservationPayBtn';

export interface ReservationPayProps {
  roomId: number;
  memberCouponId?: number;
  reservationStartDate: Date;
  reservationEndDate: Date;
}

const ReservationPay = ({
  roomId,
  memberCouponId,
  reservationStartDate,
  reservationEndDate,
}: ReservationPayProps) => {
  const [allChecked, setAllChecked] = useState(false);

  return (
    <>
      <RequirementsPrePay setAllChecked={setAllChecked} />
      <ReservationPayBtn
        roomId={roomId}
        memberCouponId={memberCouponId}
        reservationStartDate={reservationStartDate}
        reservationEndDate={reservationEndDate}
        allChecked={allChecked}
      />
    </>
  );
};

export default ReservationPay;
