import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { radioDataState } from '../recoil/checkedRadio';
import { paymentDataState } from '../recoil/paymentData';
import { usePostPurchase } from '../hooks/queries/usePostPurchase';
import {
  RadioDataState,
  ReservationLocationsState,
} from '../reservation.types';
import { CartData } from '../../../types';
import * as style from '../styles/reservationPayBtn';
import axios from 'axios';
import { userState } from '../../../recoil/userData';
import { ReservationPayProps } from './ReservationPay';
import { useState } from 'react';

interface ReservationPayPropsWithCheck {
  roomId: number;
  memberCouponId?: number;
  reservationStartDate: Date;
  reservationEndDate: Date;
  allChecked: boolean;
}

const ReservationPayBtn = ({
  roomId,
  memberCouponId,
  reservationStartDate,
  reservationEndDate,
  allChecked,
}: ReservationPayPropsWithCheck) => {
  const navigate = useNavigate();

  const setUser = useSetRecoilState(userState);

  const radioData = useRecoilValue(radioDataState);
  const radioDataArray: RadioDataState[] = Object.values(radioData);

  const location = useLocation();
  const ReservationInfo: ReservationLocationsState = { ...location.state };
  const { mutateAsync: postPurchase } = usePostPurchase();

  const navigation = useNavigate();
  const paymentData: CartData = useRecoilValue(paymentDataState);
  const postPurchasePayload = {
    cartId: ReservationInfo.cartId,
    cartProducts: radioDataArray,
  };

  const handlePurchase = async () => {
    try {
      const data = await postPurchase(postPurchasePayload);

      if (data === 'SUCCESS') {
        navigation('/reservation-check', {
          state: { paymentData, radioDataArray },
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 401 || error.response.status === 405) {
          setUser({
            accessToken: '',
            refreshToken: '',
          });
          window.alert('인증 오류가 발생했습니다. 로그인을 다시 해주세요.');
          navigation('/login');
        } else {
          window.alert(
            '사용 중 문제가 발생했습니다. 메인에서 다시 시도해주세요.',
          );
          navigation('/');
        }
      } else {
        window.alert(
          '사용 중 문제가 발생했습니다. 메인에서 다시 시도해주세요.',
        );
        navigation('/');
      }
    }
  };

  // console.log(roomId);
  console.log(memberCouponId);
  // console.log(reservationStartDate);
  // console.log(reservationEndDate);
  // console.log(allChecked);

  const handleButtonClick = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8080/payment/instant',
        {
          roomOptionId: roomId,
          memberCouponId: memberCouponId === -1 ? null : memberCouponId,
          reservationStartDate: reservationStartDate,
          reservationEndDate: reservationEndDate,
        },
        {
          withCredentials: true,
        },
      );
      const data = response.data.data;
      console.log(data); // 응답 데이터 확인

      navigate('/reservation-check', {
        state: {
          cartId: data.cartId,
        },
      });
    } catch (error) {
      console.error('Error sending POST request:', error);
    }
  };

  return (
    <>
      {allChecked ? (
        <style.PrePayCondition></style.PrePayCondition>
      ) : (
        <style.PrePayCondition>
          * 방문 수단과 결제 전 확인 사항은 필수 항목입니다.
        </style.PrePayCondition>
      )}
      <style.PayBtn
        $allChecked={allChecked}
        onClick={() => {
          handleButtonClick();
        }}
      >
        결제하기
      </style.PayBtn>
    </>
  );
};

export default ReservationPayBtn;
