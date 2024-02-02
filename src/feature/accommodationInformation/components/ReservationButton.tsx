import { useRecoilState, useSetRecoilState } from 'recoil';
import * as style from '../styles/reservationButton';
import { userState } from '../../../recoil/userData';
import { loginModalState } from '../recoil/accommodationLoginModal';
import { ReservationButtonProps } from '../accommodationInformation.types';
import { useNavigate } from 'react-router-dom';

const ReservationButton = ({
  available,
  id,
  guest,
  reservationEndDate,
  reservationStartDate,
  stayDuration,
  totalPrice,
  text,
  $isWide,
}: ReservationButtonProps) => {
  const navigate = useNavigate();

  const [user, setUser] = useRecoilState(userState);
  const setLogInModal = useSetRecoilState(loginModalState);

  // const postSingleReservationMutation = usePostSingleReservation();

  // const postReservationInstant = () => {
  //   try {
  //     postSingleReservationMutation.mutate({
  //       roomOptionId: id,
  //       numberOfGuest: guest,
  //       reservationStartDate,
  //       reservationEndDate,
  //       stayDuration,
  //     });
  //   } catch (error) {
  //     if (axios.isAxiosError(error) && error.response) {
  //       if (error.response.status === 401 || error.response.status === 405) {
  //         setUser({
  //           accessToken: '',
  //           refreshToken: '',
  //         });
  //         window.alert('인증 오류가 발생했습니다. 로그인을 다시 해주세요.');
  //         navigate('/login');
  //       } else {
  //         window.alert(
  //           '사용 중 문제가 발생했습니다. 메인에서 다시 시도해주세요.',
  //         );
  //         navigate('/');
  //       }
  //     } else {
  //       window.alert(
  //         '사용 중 문제가 발생했습니다. 메인에서 다시 시도해주세요.',
  //       );
  //       navigate('/');
  //     }
  //   }
  // };

  const handleReservationButtonClick = () => {
    // 여기에 필요한 다른 로직을 추가할 수 있습니다.

    // 버튼을 클릭했을 때의 동작 수행
    navigate('/reservation', {
      state: {
        id,
        guest,
        reservationEndDate,
        reservationStartDate,
        stayDuration,
        totalPrice,
      },
    });
  };

  return available ? (
    <style.ReservationButton
      onClick={() => {
        user.accessToken ? handleReservationButtonClick() : setLogInModal(true);
      }}
      $isWide={$isWide}
    >
      {text}
    </style.ReservationButton>
  ) : (
    <style.DisableReservationButton $isWide={$isWide}>
      {text}
    </style.DisableReservationButton>
  );
};

export default ReservationButton;
