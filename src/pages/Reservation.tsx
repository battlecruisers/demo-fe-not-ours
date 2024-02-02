import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { paymentDataState } from '../feature/reservation/recoil/paymentData';
import { radioDataState } from '../feature/reservation/recoil/checkedRadio';
import { usePostPaymentCart } from '../feature/reservation/hooks/queries/usePostPaymentCart';
import ReservationSummary from '../feature/reservation/components/ReservationSummary';
import GuestInformation from '../feature/reservation/components/GuestInformation';
import ReservationPay from '../feature/reservation/components/ReservationPay';
import { PostPaymentCartPayload } from '../feature/reservation/reservation.types';
import { Loading, LoadingWrapper } from '../styles/loading';
import * as style from '../feature/reservation/styles/reservation';
import axios from 'axios';
import { userState } from '../recoil/userData';
import LoginModal from '../components/loginModal/LoginModal';
import Coupon from './Coupon';
import { PiGearSixBold } from 'react-icons/pi';
import CouponPageLink from '../components/CouponPageLink';

export interface RoomReservationProp {
  placeId: number;
  placeName: string;
  address: string;
  placeThumbnailImageUrl: string;
  roomId: number;
  roomName: string;
  capacity: number;
}

const Reservation = () => {
  const setUser = useSetRecoilState(userState);
  const [isLoginModal, setIsLoginModal] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  // const postPaymentCartPayload: PostPaymentCartPayload = { ...location.state };
  // const { mutateAsync: postPaymentCart } = usePostPaymentCart();
  // const [paymentData, setPaymentData] = useRecoilState(paymentDataState);

  //이 페이지로 넘어온 state관리
  const {
    id,
    guest,
    reservationEndDate,
    reservationStartDate,
    stayDuration,
    totalPrice,
  } = location.state;

  console.log(id);
  console.log(guest);
  console.log(reservationEndDate);
  console.log(reservationStartDate);
  console.log(stayDuration);
  console.log(totalPrice);

  //couponId 관리
  const [selectedCouponId, setSelectedCouponId] = useState<number>(-1);

  const handleCouponSelect = (id: number) => {
    // console.trace(id);
    console.dir(id);
    setSelectedCouponId(id);
    // console.log(selectedCouponId);
  };

  //couponPage 조회 관리
  const [isCouponShow, setIsCouponShow] = useState<boolean>(false);

  const setRadioData = useSetRecoilState(radioDataState);
  const navigation = useNavigate();

  //예약에 필요한 정보 조회

  let url = 'http://localhost:8080/rooms/' + id + '/reservation';
  console.log(url);

  const [reservationInfo, setReservationInfo] = useState<RoomReservationProp>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const data = response.data.data;
        setReservationInfo(data);
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // console.log(id);
  // console.log(guest);
  // console.log(reservationEndDate);
  // console.log(reservationStartDate);
  // console.log(stayDuration);
  // console.log(totalPrice);
  // console.log(reservationInfo);

  return isLoading ? (
    <LoadingWrapper>
      <Loading />
    </LoadingWrapper>
  ) : (
    <>
      <style.ReservationWrapper>
        <ReservationSummary
          id={id}
          guest={guest}
          reservationStartDate={reservationStartDate}
          reservationEndDate={reservationEndDate}
          stayDuration={stayDuration}
          price={totalPrice}
          reservationInfo={reservationInfo}
        />
        <Coupon
          roomId={id}
          isCouponShow={isCouponShow}
          setIsCouponShow={setIsCouponShow}
          onCouponSelect={handleCouponSelect}
        />
        <GuestInformation />
        <ReservationPay
          roomId={id}
          memberCouponId={selectedCouponId}
          reservationStartDate={reservationStartDate}
          reservationEndDate={reservationEndDate}
        />
      </style.ReservationWrapper>

      {isLoginModal && <LoginModal onClose={() => setIsLoginModal(false)} />}
    </>
  );
};

export default Reservation;
