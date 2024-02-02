import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import RoomList from '../components/roomList/RoomList';
import { updateTransportation } from '../feature/reservationCheck/reservationCheck.util';
import { ReservationCheckData } from '../feature/reservationCheck/reservationCheck.types';
import { Loading, LoadingWrapper } from '../styles/loading';
import * as cartStyle from '../feature/cart/styles/cartRoom';
import * as style from '../feature/reservationCheck/styles/reservationCheck';
import axios from 'axios';
import { ReservationProps } from '../feature/reservation/components/ReservationSummary';
import { RoomReservationProp } from './Reservation';

interface ReservationResponseProps {
  placeId: number;
  placeName: string;
  address: string;
  placeThumbnailImageUrl: string;

  roomId: number;
  roomName: string;
  capacity: number;

  startDate: Date;
  endDate: Date;

  price: number;
}

const ReservationCheck = () => {
  const location = useLocation();
  const navigation = useNavigate();
  // const reservationCheckData: ReservationCheckData = { ...location.state };
  // const newCartData = updateTransportation(chekPayment, radioData);
  const [isLoading, setIsLoading] = useState(true);

  const { cartId } = location.state;

  const [reservationInfo, setReservationInfo] =
    useState<ReservationResponseProps>();

  const [price, setPrice] = useState<number>(-1);

  const [roomReservationProp, setRoomReservationProp] =
    useState<ReservationResponseProps>();

  let url = 'http://localhost:8080/payment/' + cartId + '/info';

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const data: ReservationResponseProps = response.data.data;
      console.log(data);
      setReservationInfo(data);

      const exRoomReservationProp: ReservationResponseProps = {
        placeId: data.placeId,
        placeName: data.placeName,
        address: data.address,
        placeThumbnailImageUrl: data.placeThumbnailImageUrl,
        roomId: data.roomId,
        roomName: data.roomName,
        capacity: data.capacity,
        startDate: data.startDate,
        endDate: data.endDate,
        price: data.price,
      };

      setPrice(data.price);
      setRoomReservationProp(exRoomReservationProp);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return reservationInfo == null ? (
    <LoadingWrapper>
      <Loading />
    </LoadingWrapper>
  ) : (
    <style.ReservationChecktWrapper>
      <style.ChekPaymentWrapper>
        <style.ChekPaymentContents>
          <style.Airplane />
          <style.ChekPaymentTitle>
            예약이 완료되었습니다.
          </style.ChekPaymentTitle>
          <style.ChekPaymentBtn onClick={() => navigation('/reservation-list')}>
            예약 내역 확인하기
          </style.ChekPaymentBtn>
        </style.ChekPaymentContents>

        <cartStyle.AccommodationList
          key={`accommodation-list-${reservationInfo?.placeId}`}
        >
          <cartStyle.Accommodation
            href={'/accommodation/' + reservationInfo?.placeId}
          >
            <cartStyle.AccommodationName>
              {reservationInfo?.placeName}
            </cartStyle.AccommodationName>
            <cartStyle.AccommodationAddress>
              {reservationInfo?.address}
            </cartStyle.AccommodationAddress>
          </cartStyle.Accommodation>

          <RoomList
            id={reservationInfo?.roomId}
            guest={-1}
            reservationStartDate={reservationInfo?.startDate}
            reservationEndDate={reservationInfo?.endDate}
            stayDuration={-1}
            price={price}
            reservationInfo={roomReservationProp}
          />
        </cartStyle.AccommodationList>
      </style.ChekPaymentWrapper>
    </style.ReservationChecktWrapper>
  );
};

export default ReservationCheck;
