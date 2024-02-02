import { useState } from 'react';
import * as style from '../feature/accommodation/styles/accommodationInfo.ts';
import Coupon from '../pages/Coupon.tsx';
import { id } from 'date-fns/locale';

const CouponPageLink = (
  roomId: number,
  onCouponSelect: (id: number) => void,
) => {
  const [isCouponShow, setIsCouponShow] = useState<boolean>(false);
  const [selectedCoupon, setSelectedCoupon] = useState<number>(-1);

  const handleCouponSelect = (selectedCoupon: number) => {
    setSelectedCoupon(selectedCoupon);
  };
  console.log(roomId);

  return (
    <>
      <style.AccommodationInfoMemberBox
        onClick={() => {
          setIsCouponShow(prev => !prev);
        }}
      >
        <style.AccommodationInfoMemberParagraph>
          쿠폰 설정
        </style.AccommodationInfoMemberParagraph>
      </style.AccommodationInfoMemberBox>
    </>
  );
};

export default CouponPageLink;
